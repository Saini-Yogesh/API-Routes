import { user } from "@/util/db";
const { NextResponse } = require("next/server");

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  let payload = await request.json();
  console.log(payload.name);
  if (!payload.name || !payload.age || !payload.mail) {
    return NextResponse.json(
      { result: "required field not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    {
      result: "Successfully user created",
      success: true,
    },
    { status: 201 }
  );
}
