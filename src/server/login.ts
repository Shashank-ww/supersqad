"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/app/routes";

// Interface for the login result to return error or success messages
interface SignInResult {
    error?: string;
    success?: string;
    redirect?: string;
}

export const login = async (values: z.infer<typeof LoginSchema>): Promise<SignInResult> => {
    const validatedFields = LoginSchema.safeParse(values);

    // Check if the provided fields are valid according to the schema
    if (!validatedFields.success) {
        return { error: "Invalid Field Entry!" };
    }

    const { email, password } = validatedFields.data;

    try {
        // Attempt to sign in with credentials
        const result = await signIn("credentials", {
            redirect: false, // Prevents automatic redirect
            email,
            password,
        });

        console.log("Signin Result:", result); // Log the result for debugging

        // If there's an error, handle it based on the error type
        if (result?.error) {
            console.log("SignIn Error:", result.error); // Log specific error message for inspection
            
            // Switch to handle specific error cases
            switch (result.error) {
                case "CredentialsSignin":
                    return { error: "Incorrect email/password. Try again." };
                case "TooManyRequests":
                    return { error: "Too many attempts. Try again later." };
                default:
                    return { error: "An unknown error occurred. Please try again." };
            }
        }

        // If no error, handle successful login
        return { success: "Login Successful! Redirecting...", redirect: DEFAULT_LOGIN_REDIRECT };

    } catch (error) {
        // Handle unexpected errors during login
        if (error instanceof Error) {
            console.error("Detailed Login Error:", {
                message: error.message,
                stack: error.stack,
                name: error.name
            });

            throw error;
        }

        // Catch-all for any other type of error
        console.error("Unexpected Login Error:", error);
        throw new Error("An unexpected login error occurred!");
    }
};
