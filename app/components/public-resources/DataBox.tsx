import Link from 'next/link'
import Image from 'next/image'
import IconBox from './IconBox'


type DataBoxProps = {
    title: string,
    data: string,
    className?: string
}
type IconBoxProps = {
    title: string,
    content: string,
}



async function getData(data: string) {
    const res = await fetch(`http://localhost:4000/${data}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
    
export default async function DataBox ({title, data, className}: DataBoxProps) {
    const reports = await getData(data);
    console.log(reports)
  return (<>
    <div className={`data-box mb-5 d-flex flex-column ${className}`}>
            <h2 className="data-box__header text-green fw-semibold mb-4">{title}</h2>
        
            {reports.map((report: ContentType) => {
                return(
                    <IconBox content={report} />
                )
            })}
    </div>
</>)
}