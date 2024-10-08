import { user } from "@/util/db";

const { NextResponse } = require("next/server");

export function GET(request, content) {
  const data = user.filter((item) => item.id == content.params.userId);
  return NextResponse.json(
    data.length == 0
      ? { result: "No result found", success: false }
      : { result: data, success: true },
    { status: 200 }
  );
}
