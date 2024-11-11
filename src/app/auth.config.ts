import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { LoginSchema } from "@/schemas";
import type { NextAuthOptions } from "next-auth";
import { getUserByEmail } from "@/data/user";

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "your-email@example.com" },
                password: { label: "Password", type: "password", placeholder: "Your password" },
            },
            async authorize(credentials) {
                // Validate credentials with Zod schema
                const validatedFields = LoginSchema.safeParse(credentials);

                if (!validatedFields.success) {
                    console.error("Invalid Credentials:", validatedFields.error);
                    return null; // Invalid credentials schema
                }

                const { email, password } = validatedFields.data;

                try {
                    // Fetch user by email
                    const user = await getUserByEmail(email);
                    if (!user || !user.password) {
                        console.error("User not found or password missing");
                        return null; // User not found or missing password
                    }

                    // Compare password using bcrypt
                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (passwordsMatch) {
                        console.log("Password match successful");
                        return user; // Return user if authenticated successfully
                    } else {
                        console.error("Password mismatch for user:", email);
                    }

                    return {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                    }
                } catch (error) {
                    console.error("Error during authentication:", error);
                }

                // Return null if authentication fails
                return null;
            }
        })
    ],
};

export default authOptions satisfies NextAuthOptions;
