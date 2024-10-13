import NextAuth, { getServerSession } from "next-auth"

import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "@/app/auth.config"
import { db } from "@/lib/db";
import { JWT } from "next-auth/jwt";

const authOptions = {
    callbacks: {
        async jwt ({ token }: {token: JWT}) {
            console.log({ token });
            return token;
        }
    },
    adapter: PrismaAdapter (db),
    session: { strategy: "jwt" },
    ...authConfig
};

export const authHandler = (req: any, res: any) => NextAuth (req, res, authOptions);

export const GET = authHandler;
export const POST = authHandler;

export const { signIn, signOut } = NextAuth(authOptions);

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
