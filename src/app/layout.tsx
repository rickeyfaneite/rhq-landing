import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ricardohq.com"),
  title: "RHQ — One founder. No VC. All AI.",
  description:
    "RHQ builds small, fast, focused software products. Solo, in Miami, powered by custom-orchestrated agents on bare-metal hardware.",
  openGraph: {
    title: "RHQ — One founder. No VC. All AI.",
    description:
      "Small, fast, focused software products. Solo, in Miami, powered by custom AI agents.",
    url: "https://ricardohq.com",
    siteName: "RHQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RHQ — One founder. No VC. All AI.",
    description:
      "Small, fast, focused software products. Solo, in Miami, powered by custom AI agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
