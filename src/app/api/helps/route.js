import { fetchFirestoreInitialBatch } from "@/utils/firebase/firestore/fetchFirestoreBatch";
import { NextResponse } from "next/server";

export async function GET(req) {
  const city = req.nextUrl.searchParams.get("city");
  const date = req.nextUrl.searchParams.get("date");

  const helpData = await fetchFirestoreInitialBatch("helps", {
    city,
    date,
  });
  return NextResponse.json(helpData);
}
