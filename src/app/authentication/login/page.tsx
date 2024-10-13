import LoginForm from "@/components/auth/login-form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication for Supersqad",
  description: "Authentication for verified entry",
};

export default function LoginPage() {
  return (
    <div className="container relative flex h-screen flex-col items-center justify-center lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* Left Section - Testimonial */}
      <div className="relative hidden h-full flex-col bg-muted lg:flex">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e')",
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-80" />

        {/* Flex container to align text at the bottom */}
        <div className="flex flex-col items-end justify-end p-20  h-full">
          <blockquote className="relative z-20 bg-white backdrop-blur-md rounded-md p-6 space-y-2 text-right max-w-screen-sm">
            <p className="text-sm mb-4">
              <i>
                &ldquo;High client expectations and tight deadlines on multiple projects was a challenge.
                <br /> With this platform, my workflow and process became more streamlined with real-time collaboration, and easy-to-find talent.
              </i>
            </p>
            <div className="border border-spacing-4 border-blue-400 max-w-sm ml-auto"></div>
            <footer className="text-sm font-medium">- Devanary, Kaitlyn
              <p className="text-sm font-light">Chief Client Officer, TopCharge Media</p>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="lg:p-8 flex items-center justify-center">
        <div className="w-full max-w-sm space-y-6">
          <LoginForm />
          <p className="px-8 text-center text-xs text-muted-foreground">
            By proceeding, you agree to our{" "}
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
