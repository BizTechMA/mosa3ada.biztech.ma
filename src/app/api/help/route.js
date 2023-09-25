import { NextResponse } from "next/server";
import { getHelps } from "./service";

export async function GET() {
  const helpData = await getHelps();
  return NextResponse.json(helpData);
}
