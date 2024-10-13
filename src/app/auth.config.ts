import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas";

import type { NextAuthOptions } from "next-auth";
import { getUserByEmail } from "@/data/user";

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            // Add the credentials property
            credentials: {
                email: { label: "Email", type: "text", placeholder: "your-email@example.com" },
                password: { label: "Password", type: "password", placeholder: "Your password" },
            },
            async authorize(credentials) {
                // Validate credentials with Zod schema
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;

                    // Fetch user by email
                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;

                    // Compare password using bcrypt
                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (passwordsMatch) {
                        // Return user if authenticated successfully
                        return user;
                    }
                }

                // Return null if authentication fails
                return null;
            }
        })
    ],
};

export default authOptions satisfies NextAuthOptions;



// This file used to trigger the middleware and not auth.ts as that uses prisma adapter since Nextjs not support edge
