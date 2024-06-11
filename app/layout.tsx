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
  description: "Aja Singer is a software engineer and creative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata?.description ?? ''} />
      </head>
      <body className={`${sans.className} ${serif.className} bg-zinc-950 text-cream`}>
        < Navbar />
        {children}
        < Footer />
      </body>
    </html>
  );
}
