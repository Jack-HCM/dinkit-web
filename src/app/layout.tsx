import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { CookieConsent } from "@/components/cookie-consent";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const dotSans = localFont({
  variable: "--font-42dot-sans",
  src: "./fonts/42dot-sans-500.woff2",
  weight: "500",
  display: "swap",
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
  twitter: {
    card: "summary_large_image",
    title: "Dink'It — Golf, tracked properly",
    description:
      "Per-shot GPS tracking, Strokes Gained, and AI coaching for golfers who want to actually understand their game.",
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
      className={`${spaceGrotesk.variable} ${dotSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
