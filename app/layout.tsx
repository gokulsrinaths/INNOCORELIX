import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "INNOCORELIX | Molecular Intelligence for Pathogen Defense",
  description:
    "INNOCORELIX develops next-generation antifungal and antiparasitic therapeutics using synthetic biosensors, autophagy modulation, and AI-assisted molecular discovery.",
  keywords: [
    "biotechnology",
    "drug discovery",
    "antifungal",
    "antiparasitic",
    "autophagy",
    "synthetic biosensors",
    "molecular screening",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
