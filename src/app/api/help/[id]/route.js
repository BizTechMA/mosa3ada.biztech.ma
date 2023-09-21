import { NextResponse } from "next/server";
import { getHelpById, updateConfirmationCount, updateDisConfirmationCount } from "./service";

export async function GET(req, { params }) {
  const { id } = params;
  const helpDataById = await getHelpById(id);
  return NextResponse.json(helpDataById);
}

export async function PATCH(req, { params }) {
  const requestBody = await req.json();
  const { type } = requestBody;
  const { id } = params;

  let result = false;

  if (type === "CONFIRMATION")
    result = await updateConfirmationCount(id);
  else if (type === "DIS_CONFIRMATION")
    result = await updateDisConfirmationCount(id);

  return result
    ? NextResponse.json({ success: true })
    : NextResponse.json({ success: false });
}
