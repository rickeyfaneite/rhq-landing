import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ricardohq.com"),
  title: "Ricardo HQ — Builds AI products that ship.",
  description:
    "Ricardo builds AI agents, creative tools, and product experiments. Working fast, keeping the craft.",
  openGraph: {
    title: "Ricardo HQ — Builds AI products that ship.",
    description:
      "AI agents, creative tools, and product experiments from Ricardo HQ.",
    url: "https://ricardohq.com",
    siteName: "Ricardo HQ",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ricardo HQ — Builds AI products that ship.",
    description:
      "AI agents, creative tools, and product experiments from Ricardo HQ.",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
