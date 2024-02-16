import { NextResponse } from "next/server";

export async function POST(req) {
    const { text } = await req.json();
    return NextResponse.json({ text });
}
