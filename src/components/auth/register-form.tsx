"use client"
import React, { useState } from 'react'
import {CardWrapper} from '@/components/auth/card-wrapper'
import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';

import * as z from "zod";
import { RegisterSchema } from '@/schemas/index';
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
import { register } from '@/server/register';
import { Icons } from '@/components/ui/icons';


export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined> ("");
    const [success, setSuccess] = useState<string | undefined> ("");

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>> ({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }, 
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");

        startTransition (() => {
            register(values)
            .then ((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
        })
        // console.log(values);
    };

  return (
    <CardWrapper
        headerLabel="Create an account for self"
        backButtonLabel="Already have an account?"
        backButtonLink="/authentication/login"
        showSocial
    >
        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit (onSubmit)}
            className='space-y-4'>
                <div className='space-y-2'>
                <FormField 
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input 
                                {...field}
                                disabled={isPending}
                                placeholder='Johny Gooddo'
                                type='name'
                                />
                            </FormControl>
                        </FormItem>
                    )}
                    />
                    <FormField 
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input 
                                {...field}
                                disabled={isPending}
                                placeholder='Johny@example.com'
                                type='email'
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
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input 
                                {...field}
                                disabled={isPending}
                                placeholder='Enter password with symbols'
                                type='password'
                                />
                            </FormControl>
                        </FormItem>
                    )}
                    />
                </div>
                <FormError message={error}/> 
                <FormSuccess message={success}/> 
                <Button
                disabled={isPending}
                type="submit"
                className='w-full'>
                    {isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
                    Register / Join
                </Button>
            </form>
        </Form>
    </CardWrapper>
  );
};

export default RegisterForm;