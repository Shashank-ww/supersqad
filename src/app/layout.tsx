import type { Metadata } from "next";
import { Inter as FontSans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Supersqad - Independent Capability Agency",
  description: "Developed by Werbex Inc.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSans.className
        )}>
          <NavBar/>
            <main className="relative flex flex-col min-h-screen">
              {children}
            </main>
          <Footer/>
      </body>
    </html>
  );
}
