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

const TITLE = "Dink'It — GPS Golf Shot Tracker, Stats & AI Coaching App";
const DESCRIPTION =
  "Track every shot with your phone's GPS, see Strokes Gained analytics, and get AI-powered coaching insights — no extra hardware needed. Join the Dink'It waitlist for early access.";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s | Dink'It",
  },
  description: DESCRIPTION,
  metadataBase: new URL("https://www.dinkitgolf.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.dinkitgolf.com",
    siteName: "Dink'It",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dink'It",
    url: "https://www.dinkitgolf.com",
    logo: "https://www.dinkitgolf.com/images/dinkit-logo.svg",
    description: DESCRIPTION,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dink'It",
    url: "https://www.dinkitgolf.com",
  },
];

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
