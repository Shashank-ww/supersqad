
import RegisterForm from "@/components/auth/register-form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication for Superstackstudios",
  description: "Authentication forms built using UI components.",
};

export default function RegisterPage() {
  return (
    <div className="container relative flex h-screen flex-col items-center justify-center lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* Left Section - Testimonial */}
      <div className="relative hidden h-full flex-col bg-muted p-10 lg:flex">
        <div className="absolute inset-0 bg-stone-100" />
        <blockquote className="relative z-20 m-auto space-y-2 text-right max-w-screen-sm">
          <p className="text-base mb-6">
            <i>&ldquo;We have been lucky to find equal partners who can manager the scope of work both technically and design-wise. <br/> <br/> Full-service media production and implementation is what is expected from any agency, and they fit just right in.&rdquo;</i>
          </p>
          <div className="border border-spacing-4 border-t-2 border-t-blue-400 max-w-sm ml-auto"></div>
          <footer className="text-sm font-medium">- Ahluwalia, Meenakshi
          <p className="text-sm font-thin">Marketing Manager, Boston Scientific</p>
          </footer>
        </blockquote>
      </div>

      {/* Right Section - Login Form */}
      <div className="lg:p-8 flex items-center justify-center">
        <div className="w-full max-w-sm space-y-6">
        <RegisterForm/>   
          <p className="px-8 text-center text-xs text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-primary">
              Privacy Policy.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
