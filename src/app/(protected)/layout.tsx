// (protected)/layout.tsx

"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <div className="min-h-screen">
        <main className="relative flex flex-col min-h-screen">
          {children}
        </main>
      </div>
    </SessionProvider>
  );
}
