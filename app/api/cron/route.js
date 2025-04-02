import { NextResponse } from 'next/server';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const mlURL = process.env.NEXT_PUBLIC_ML_API_URL;

// cron job to keep servers alive
// TO DO: add specific endpoint for cron job
// TO DO: then add secret key to cron job
export async function GET() {
    try {
        const apiResponse = await fetch(`${apiURL}/api/home`);
        if (!apiResponse.ok) {
            return NextResponse.json({ ok: false });
        }
        const mlResponse = await fetch(`${mlURL}/api/get_test_data`);
        if (!mlResponse.ok) {
            return NextResponse.json({ ok: false });
        }
        return NextResponse.json({ ok: true });
    } catch (error) {
        return NextResponse.json({ ok: false });
    }
}