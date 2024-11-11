// app/api/signin/route.ts
"use server"

import { NextResponse } from "next/server";
import { signIn } from "next-auth/react"; // NextAuth's signIn method
import { authOptions } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/app/routes";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    // Call signIn from NextAuth.js with credentials provider
    const result = await signIn("credentials", {
        redirect: false, // We don't want NextAuth to auto-redirect
        email,
        password,
    });

    if (result?.error) {
        return NextResponse.json({ success: false, message: "Invalid credentials" });
    }

    return NextResponse.json({ success: true, redirect: DEFAULT_LOGIN_REDIRECT });
}
