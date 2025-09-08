import { NextRequest, NextResponse } from 'next/server';
import data from '../../../public/data/db.json';

const validSections = ['reports', 'policies', 'forms', 'whitepapers', 'media-kits'] as const;

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url, 'http://localhost');
        const section = searchParams.get('data');
        if (section) {
            if (validSections.includes(section as typeof validSections[number])) {
                // Return only the requested section (array)
                return NextResponse.json(data[section as keyof typeof data], { status: 200 });
            } else {
                // Section requested but not found
                return NextResponse.json({ error: `Section '${section}' not found.` }, { status: 404 });
            }
        }
        // If no section param, return all data
        return NextResponse.json(data, { status: 200 });
    } catch (e) {
        return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 500 });
    }
}