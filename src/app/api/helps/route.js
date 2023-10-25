import { fetchFirestoreInitialBatch } from "@/utils/firebase/firestore/fetchFirestoreBatch";
import { NextResponse } from "next/server";

export async function GET(req) {
  const city = req.nextUrl.searchParams.get("city");
  const date = req.nextUrl.searchParams.get("date");
  const sortBy = req.nextUrl.searchParams.get("sortBy");

  const helpData = await fetchFirestoreInitialBatch("helps", {
    city,
    date,
    sortBy,
  });
  return NextResponse.json(helpData);
}
