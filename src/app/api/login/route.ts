// app/api/login/route.ts

import { NextResponse } from "next/server";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        const session = await getServerSession(authOptions);

        if (session) {
            return NextResponse.json({ success: true, redirect: "/dashboard/client" });
        }

        const signInResult = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, redirect: false }),
        });

        const data = await signInResult.json();
        if (data.error) {
            return NextResponse.json({ error: "Invalid credentials" });
        }

        return NextResponse.json({ success: "Login successful!", redirect: "/dashboard/client" });
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ error: "An error occurred during login" });
    }
}
