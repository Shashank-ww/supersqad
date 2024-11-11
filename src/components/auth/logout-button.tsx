"use client";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

interface SignOutButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const SignOutButton = ({
    children,
    mode = "redirect",
    asChild
}: SignOutButtonProps) => {
    const router = useRouter();

    const onClick = async () => {
        if (mode === "redirect") {
            // Sign out and redirect to the homepage
            await signOut({ redirect: true, callbackUrl: "/" });
        } else if (mode === "modal") {
            // Handle modal behavior or any other custom behavior
            console.log("Sign out modal");
        }
    };

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};
