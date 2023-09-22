import { fetchFirestoreNextBatch } from "@/utils/firebase/firestore/fetchFirestoreBatch";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { key } = await req.json()
    console.log(key);
    const helpData = await fetchFirestoreNextBatch("helps", key);
    return NextResponse.json(helpData);
} 