import { NextResponse } from 'next/server'

export async function middleware(request) {
    const { text } = await request.json();
    const modifiedText = "Welcome " + text;
    return NextResponse.json({ text: modifiedText });
}

export const config = {
    matcher: '/api/getInput',
}