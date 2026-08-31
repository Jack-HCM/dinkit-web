import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "../(site)/globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const dotSans = localFont({
  variable: "--font-42dot-sans",
  src: "../(site)/fonts/42dot-sans-500.woff2",
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: "%s | Dink'It Admin",
  },
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dotSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
