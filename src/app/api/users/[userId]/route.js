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

export async function PUT(request, content) {
  let payload = await request.json();
  let userId = content.params.userId;
  console.log(userId);
  if (!payload.name || !payload.age || !payload.mail) {
    return NextResponse.json(
      { result: "required field not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export function DELETE(request, content) {
  let id = content.params.userId;
  if (id) {
    return NextResponse.json(
      { result: "User Deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "internal error", success: false },
      { status: 400 }
    );
  }
}
