"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { signIn } from "next-auth/react"; // Ensure you're importing from next-auth/react
import { DEFAULT_LOGIN_REDIRECT } from "@/app/routes";
import AuthError from "next-auth"; // Correct import for AuthError

interface SignInResult {
    error?: string; // Optional error string
    // Add other properties based on your needs
}

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid Field Entry!" };
    }

    const { email, password } = validatedFields.data;

    try {
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false, // Set to false for manual handling
        }) as SignInResult; // Type assertion for result

        if (result?.error) {
            return { error: result.error }; // Handle NextAuth errors
        }

        // If successful, redirect or return a success message
        return { success: "Login Successful!", redirect: DEFAULT_LOGIN_REDIRECT };

    } catch (error) {
        if (error instanceof AuthError) {
            // Handle specific auth errors
            return { error: "Invalid Credentials!" }; // Assuming all errors fall under invalid credentials
        }

        // Handle any other unexpected errors
        return { error: "An unexpected error occurred!" };
    }
};
