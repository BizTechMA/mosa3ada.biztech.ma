import { NextResponse } from "next/server";
import { getHelpById } from "./service";
import { updateConfirmationCount } from "./service";
export async function GET(req, { params }) {
  const { id } = params;
  const helpDataById = await getHelpById(id);
  return NextResponse.json(helpDataById);
}

export async function PATCH(req, { params }) {
  const { id } = params;
  const result = await updateConfirmationCount(id);

  return result
    ? NextResponse.json({ success: true })
    : NextResponse.json({ success: false });
}
