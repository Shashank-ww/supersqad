// app/api/auth/signout/route.ts
"use server"


import { NextResponse } from 'next/server';
import { signOut } from "next-auth/react";

export async function POST() {
  await signOut({
    redirect: true,
    callbackUrl: '/', // Redirect to homepage after sign-out
  });

  return NextResponse.json({ message: "Signed out successfully" });
}
