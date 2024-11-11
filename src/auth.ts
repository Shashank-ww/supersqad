//app/auth.ts

import NextAuth, { getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/app/auth.config";
import { db } from "@/lib/db";
import { JWT } from "next-auth/jwt";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },

    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: any }) {
            console.log({ token, user });
            return token;
        },
        async session({ session, token }: any) {
            session.user = token.user;
            return session;
        },
    },

    ...authConfig,
};

// NextAuth API route handler
export const authHandler = (req: any, res: any) => NextAuth(req, res, authOptions);

// Exporting GET and POST methods for Next.js API routes
export const GET = authHandler;
export const POST = authHandler;

// Function to get the server session
export const auth = async () => {
    return await getServerSession(authOptions);
};
