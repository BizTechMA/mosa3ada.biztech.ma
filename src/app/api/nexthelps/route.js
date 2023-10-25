import { fetchFirestoreNextBatch } from "@/utils/firebase/firestore/fetchFirestoreBatch";
import { NextResponse } from "next/server";

export async function POST(req) {
  const city = req.nextUrl.searchParams.get("city");
  const date = req.nextUrl.searchParams.get("date");
  const sortBy = req.nextUrl.searchParams.get("sortBy");

  const { count, date: stack } = await req.json();
  const helpData = await fetchFirestoreNextBatch("helps", count, stack, {
    city,
    date,
    sortBy,
  });
  return NextResponse.json(helpData);
}
