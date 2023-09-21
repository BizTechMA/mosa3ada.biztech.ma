import { NextResponse } from "next/server";

export async function GET() {
    const body = 'hi'
    const res = JSON.stringify(body)
    // const helpData = await fetchFirestoreNextBatch("helps", key);
    return NextResponse.json(res);
}