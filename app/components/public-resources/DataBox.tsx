"use client";
import { useEffect, useState } from "react";
import IconBox from './IconBox';
import { ContentType } from '../../types/public-resourcesTypes';

type DataBoxProps = {
    title: string,
    data: string,
    className?: string
};

export default function DataBox({ title, data, className }: DataBoxProps) {
    const [reports, setReports] = useState<ContentType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(`/api/resources?data=${data}`)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch data');
                return res.json();
            })
            .then((data) => {
                setReports(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [data]);

    return (
        <div className={`data-box mb-5 d-flex flex-column ${className}`}>
            <h2 className="data-box__header text-green fw-semibold mb-4">{title}</h2>
            {loading && <div>Loading...</div>}
            {error && <div className="text-danger">{error}</div>}
            {!loading && !error && reports.map((report: ContentType) => (
                <IconBox key={report.name} content={report} />
            ))}
        </div>
    );
}