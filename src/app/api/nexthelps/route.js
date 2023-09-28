import { fetchFirestoreNextBatch } from "@/utils/firebase/firestore/fetchFirestoreBatch";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { count, date } = await req.json()
    const helpData = await fetchFirestoreNextBatch("helps", count, date);
    return NextResponse.json(helpData);
} 