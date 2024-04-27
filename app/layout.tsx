import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = DM_Sans({ subsets: ["latin"] });
const serif = DM_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Aja Singer",
  description: "Aja Singer is a software engineeer building at the intersection of technology and creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} ${serif.className} bg-zinc-950 text-stone-50 px-16`}>
        < Navbar />
        {children}
        < Footer />
      </body>
    </html>
  );
}
