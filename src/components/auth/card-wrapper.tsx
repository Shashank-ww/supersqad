"use client"

import { 
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardFooter
 } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonLink: string;
    showSocial?: boolean;
};

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonLink,
    showSocial
}: CardWrapperProps) => {
    return(
        <Card className="w-[auto] shadow-md">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton 
                label={backButtonLabel}
                href={backButtonLink}
                />
            </CardFooter>
        </Card>
    )
}