import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ricardohq.com"),
  title: "RicardoHQ — One founder. No VC. All AI.",
  description:
    "RicardoHQ builds small, fast, focused software products. Solo, in Miami, powered by custom-orchestrated agents on bare-metal hardware.",
  openGraph: {
    title: "RicardoHQ — One founder. No VC. All AI.",
    description:
      "Small, fast, focused software products. Solo, in Miami, powered by custom AI agents.",
    url: "https://ricardohq.com",
    siteName: "RicardoHQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RicardoHQ — One founder. No VC. All AI.",
    description:
      "Small, fast, focused software products. Solo, in Miami, powered by custom AI agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
