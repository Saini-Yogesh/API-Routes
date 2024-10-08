import { user } from "@/util/db";

const { NextResponse } = require("next/server");

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}
