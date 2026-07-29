import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Dink'It — Golf, tracked properly",
  description:
    "Per-shot GPS tracking, Strokes Gained, and AI coaching for golfers who want to actually understand their game. Join the waitlist for early access.",
  metadataBase: new URL("https://dinkitgolf.com"),
  openGraph: {
    title: "Dink'It — Golf, tracked properly",
    description:
      "Per-shot GPS tracking, Strokes Gained, and AI coaching for golfers who want to actually understand their game.",
    url: "https://dinkitgolf.com",
    siteName: "Dink'It",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
