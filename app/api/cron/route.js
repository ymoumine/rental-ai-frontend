import { NextResponse } from 'next/server';
import axios from 'axios';

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const mlURL = process.env.NEXT_PUBLIC_ML_API_URL;

// cron job to keep servers alive
// TO DO: add specific endpoint for cron job
// TO DO: then add secret key to cron job
export async function GET() {
    try {
        const apiResponse = await axios.get(`${apiURL}/api/home`);
        const mlResponse = await axios.get(`${mlURL}/api/get_test_data`);
        return NextResponse.json({ ok: true });
    } catch (error) {
        return NextResponse.json({ ok: false });
    }
}