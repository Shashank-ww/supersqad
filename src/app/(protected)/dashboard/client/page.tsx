import { auth } from "@/auth"; // Import your server-side auth function
import { signOut } from "next-auth/react"; // Import signOut from next-auth/react
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import UnderDev from "@/components/UnderDev";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <>
      <MaxWidthWrapper>
        <div className="Dashboard h-[400px] flex flex-col items-center justify-center">
          <pre className="mb-4 text-left">{JSON.stringify(session, null, 2)}</pre>
          <form
            action={async () => {
              "use server"; // Indicate this function runs on the server
              await signOut({ redirect: true, callbackUrl: '/' }); // Sign out with redirection
            }}
          >
            <Button variant="destructive" type="submit">
              Sign Out
            </Button>
          </form>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="min-h-screen">
        <h1 className="text-center">
          We are working on this Dashboard Module. If you like to help us develop this, please email applications to <br /> <b>admin@supersqad.com</b>
        </h1>
        <UnderDev />
      </MaxWidthWrapper>
    </>
  );
};

export default DashboardPage;
