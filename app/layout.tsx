import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ICanPitch - SEO Resources",
  description: "Startup calculator resources and guides for founders",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
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
