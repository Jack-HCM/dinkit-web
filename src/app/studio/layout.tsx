export const metadata = {
  title: "Studio | Dink'It",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
