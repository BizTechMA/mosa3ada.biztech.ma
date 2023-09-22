import { fetchFirestoreInitialBatch } from "@/utils/firebase/firestore/fetchFirestoreBatch";
import { NextResponse } from "next/server";

export async function GET() {
    const helpData = await fetchFirestoreInitialBatch("helps");
    return NextResponse.json(helpData);
}