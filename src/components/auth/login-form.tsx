"use client"

import React, { useState, useTransition } from 'react'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import * as z from "zod";
import { LoginSchema } from '@/schemas';
import { Input } from '@/components/ui/input';

import {
    Form, 
    FormControl,
    FormField,
    FormItem, 
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/auth/form-error';
import { FormSuccess } from '@/components/auth/form-success';
import { login } from '@/server/login';
import { Icons } from '@/components/ui/icons';


export const LoginForm = () => {
    const [error, setError] = useState<string | undefined> ("");
    const [success, setSuccess] = useState<string | undefined> ("");

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>> ({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }, 
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition (() => {
            login(values)
            .then ((data: any) => {
                setError(data.error);
                setSuccess(data.success);
            })
        })
        // console.log(values);
    };

  return (
    <CardWrapper
        headerLabel="Welcome to Supersqadstudios!"
        backButtonLabel="Don't have an account?"
        backButtonLink="/authentication/register"
        showSocial
    >
        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit (onSubmit)}
            className='space-y-4'>
                <div className='space-y-2'>
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
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
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
                                placeholder="enter your password"
                                type="password"
                                autoCorrect="off"
                                disabled={isPending}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                    />
                </div>
                <FormError message={error}/> 
                <FormSuccess message={success}/>
             
                <Button disabled={isPending}
                type='submit'
                className='w-full'>
            {isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
            <div className="relative">
            <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
            Or continue with
            </span>
            </div>
            </div>
            </form>
        </Form>
    </CardWrapper>
  )
}

export default LoginForm;