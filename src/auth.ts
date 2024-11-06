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
        async jwt({ token }: { token: JWT }) {
            console.log({ token });
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


// export const {
//     handlers: {GET, POST},
//     signIn,
//     signOut,
//     auth
// } = NextAuth ({
//     callbacks: {
//         async jwt({ token }) {
//             console.log({ token })
//             return token;
//         }
//     },
//     adapter: PrismaAdapter(db),
//     session: {strategy: "jwt"},
//     ...authConfig
// });


// Above is the changed code after using Prisma Adapter

// Below is one accurate way to do this before using Prisma Adapter


// export const { 
//     handlers: {GET, POST}, 
//     auth 
// } = NextAuth( req => {
//     if (req) {
//         console.log(req)
//     }
//     return {
//         providers: [GitHub]
//     }
// });
