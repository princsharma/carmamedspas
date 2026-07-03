import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (
      !body?.firstName ||
      !body?.lastName ||
      !body?.email ||
      !body?.phone ||
      !body?.preferredDate ||
      !body?.preferredTime
    ) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    return NextResponse.json({
      ok: true,
      receivedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }
}
