"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import UnderDev from "@/components/UnderDev";
import { useTransition } from "react";
import { Icons } from "@/components/ui/icons";
import { UserAuthForm } from "@/components/user-auth-form";

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Transition state to show loading spinner
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(() => {
      signOut({
        redirect: false,
      }).then(() => {
        router.push("/"); // Redirect to the homepage after sign-out
      });
    });
  };

  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-svh">Loading...</div>;
  }

  return (
    <>
      <MaxWidthWrapper>
        <div className="Dashboard h-[400px] flex flex-col items-center justify-center">
          <pre className="mb-4 text-left text-pretty">
            {session ? JSON.stringify(session) : "No Active Session"}
          </pre>
          {!session && (
            <p className="text-xs mb-4">If you are not redirected to the homepage, please click Logout again!</p>
          )}

          <Button
            onClick={handleSignOut}
            disabled={isPending}
            variant={'destructive'}
            type="button"
            className="menu-button"
          >
            {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Logout
          </Button>
        </div> 
      </MaxWidthWrapper>

      <MaxWidthWrapper className="min-h-screen">
        <h1 className="text-center">
          We are working on this Dashboard Module. If you like to help us develop this, please email applications to <br /> <b>admin@supersqad.com</b>
        </h1>
        <UnderDev />

        <UserAuthForm/>
      </MaxWidthWrapper>
    </>
  );
};

export default DashboardPage;
