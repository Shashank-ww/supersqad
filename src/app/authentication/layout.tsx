import { cn } from "@/lib/utils";

export default function AuthenticationLayout({
    children,
  }:{
    children: React.ReactNode;
  }) {
    return (
          <main className="h-screen items-center justify-center">
            {children}
          </main> 
    );
  }