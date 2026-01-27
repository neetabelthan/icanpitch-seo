import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://learn.icanpitch.com"),
  title: {
    default: "Startup Calculator Guides & Resources for Founders | ICanPitch",
    template: "%s | ICanPitch",
  },
  description:
    "Free SAFE calculators, burn rate planners, equity dilution models & fundraising tools for startup founders. Expert guides to plan every funding stage.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://learn.icanpitch.com",
    siteName: "ICanPitch",
    title: "Startup Calculator Guides & Resources for Founders | ICanPitch",
    description:
      "Free SAFE calculators, burn rate planners, equity dilution models & fundraising tools for startup founders. Expert guides to plan every funding stage.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ICanPitch — Startup Calculator Guides & Resources for Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Calculator Guides & Resources for Founders | ICanPitch",
    description:
      "Free SAFE calculators, burn rate planners, equity dilution models & fundraising tools for startup founders. Expert guides to plan every funding stage.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
