import { fetchFirestoreBatch } from "@/utils/firebase/firestore/fetchFirestoreBatch";
import { NextResponse } from "next/server";

export async function GET() {
    const helpData = await fetchFirestoreBatch("helps");
    return NextResponse.json(helpData);
}