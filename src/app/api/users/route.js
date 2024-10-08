import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    { name: "yogesh", age: 54, city: "noida", from: "rajasthan" },
    { status: 200 }
  );
}
