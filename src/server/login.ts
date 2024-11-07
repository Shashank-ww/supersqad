"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/app/routes";

interface SignInResult {
    error?: string;
    success?: string;
    redirect?: string;
}

export const login = async (values: z.infer<typeof LoginSchema>): Promise<SignInResult> => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid Field Entry!" };
    }

    const { email, password } = validatedFields.data;

    try {

        const result = await signIn("credentials", {
            redirect: false,  // Prevents automatic redirect
            email,
            password,
        });

        // Check for errors in the sign-in result
        if (result?.error) {
            return { error: result.error };
        }

        // Handle successful login
        return { success: "Login Successful! Redirecting...", redirect: DEFAULT_LOGIN_REDIRECT };

    } catch (error) {
        if (error instanceof Error) {
            console.error("Detailed Login Error:", {
                message: error.message,
                stack: error.stack,
                name: error.name
            });

            if (error.message.includes("Invalid credentials")) {
                return { error: "Recheck mismatched credentials!" };
            }

            return { error: "An unexpected login error occurred!" };
        }

        console.error("Unexpected Login Error:", error);
        return { error: "An unexpected error occurred!" };
    }
};
