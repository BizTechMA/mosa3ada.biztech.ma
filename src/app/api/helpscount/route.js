import getAllDocumentsCount from "@/utils/firebase/firestore/getAllDocumentsCount";
import { NextResponse } from "next/server";

export async function GET() {
    const helpDataCount = await getAllDocumentsCount("helps");
    return NextResponse.json(helpDataCount);
}