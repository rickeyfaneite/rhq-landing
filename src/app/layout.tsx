import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ricardohq.com"),
  title: "Ricardo Faneite — The AI Builder",
  description:
    "I design, build, and launch AI-native web apps and automations with engineering rigor. Solo or as your technical partner.",
  openGraph: {
    title: "Ricardo Faneite — The AI Builder",
    description:
      "I design, build, and launch AI-native web apps and automations with engineering rigor.",
    url: "https://ricardohq.com",
    siteName: "ricardohq.com",
    type: "website",
    images: [
      {
        url: "/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "Ricardo Faneite — The AI Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Faneite — The AI Builder",
    description:
      "I design, build, and launch AI-native web apps and automations with engineering rigor.",
  },
  icons: {
    icon: "/assets/logo-concept.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
