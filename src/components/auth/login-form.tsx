// components/LoginForm.tsx

"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { z } from "zod";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import 
{ 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel 
} from "@/components/ui/form";

import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { CardWrapper } from '@/components/auth/card-wrapper'
import { Icons } from "@/components/ui/icons";

const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState<string | undefined>("");  // Track errors
    const [success, setSuccess] = useState<string | undefined>("");  // Track success message
    const [isPending, startTransition] = useTransition();  // For async state updates

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: { email: "", password: "" },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        startTransition(async () => {
            setError("");  // Clear previous errors
            setSuccess("");  // Clear previous success messages

            // Call NextAuth's signIn method
            const result = await signIn("credentials", {
                redirect: false,  // Prevent automatic redirect
                email: values.email,
                password: values.password,
            });

            if (result?.error) {
                setError(result.error);  // Display error if login fails
            } else {
                setSuccess("Login Successful! Redirecting...");
                router.push("/dashboard/client");  // Redirect to dashboard
            }
        });
    };

    return (
        <CardWrapper
            headerLabel="Login to your account"
            backButtonLabel="Don't have an account?"
            backButtonLink="/authentication/register"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="sr-only" htmlFor="email">
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            id="email"
                                            placeholder="name@example.com"
                                            type="email"
                                            autoComplete="email"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="sr-only" htmlFor="password">
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            id="password"
                                            placeholder="Enter your password"
                                            type="password"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    {error && <FormError message={error} />}
                    {success && <FormSuccess message={success} />}
                    
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                        aria-busy={isPending}  // Optional for accessibility
                    >
                        {isPending ? (
                            <>
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            "Sign In with Email"
                        )}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default LoginForm;
