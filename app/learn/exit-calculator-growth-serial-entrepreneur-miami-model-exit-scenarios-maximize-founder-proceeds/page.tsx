import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "Exit Calculator for Growth Serial Entrepreneur in Miami",
  description: "Free exit calculator for growth-stage serial entrepreneurs in Miami. Model exit scenarios and maximize founder proceeds with accurate real-time calculations.",
  keywords: ["exit-calculator", "growth", "serial-entrepreneur", "miami", "startup calculator"],
  openGraph: {
    title: "Exit Calculator for Growth Serial Entrepreneur in Miami",
    description: "Free exit calculator for growth-stage serial entrepreneurs in Miami. Model exit scenarios and maximize founder proceeds with accurate real-time calculations.",
    type: "article",
    url: "https://icanpitch.com/learn/exit-calculator-growth-serial-entrepreneur-miami-model-exit-scenarios-maximize-founder-proceeds/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exit Calculator for Growth Serial Entrepreneur in Miami",
    description: "Free exit calculator for growth-stage serial entrepreneurs in Miami. Model exit scenarios and maximize founder proceeds with accurate real-time calculations.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/learn/exit-calculator-growth-serial-entrepreneur-miami-model-exit-scenarios-maximize-founder-proceeds/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Exit Calculator for Growth Serial Entrepreneur",
    "description": "Free exit calculator for growth-stage serial entrepreneurs in Miami. Model exit scenarios and maximize founder proceeds with accurate real-time calculations.",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "datePublished": "2026-01-27T03:45:30.435Z",
    "dateModified": "2026-01-27T03:45:30.435Z",
    "url": "https://learn.icanpitch.com/learn/exit-calculator-growth-serial-entrepreneur-miami-model-exit-scenarios-maximize-founder-proceeds/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/learn/exit-calculator-growth-serial-entrepreneur-miami-model-exit-scenarios-maximize-founder-proceeds/"
    }
  }
];

export default function ExitCalculatorGrowthSerialEntrepreneurMiamiModelExitScenariosMaximizeFounderProceedsPage(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Calculator Guides", href: "/learn/" },
    { label: "Exit Calculator for Growth Serial Entrepreneur in Miami" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      {jsonLdData.map((data: Record<string, any>, index: number) => (
        <Script
          key={index}
          id={`json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data)
          }}
        />
      ))}

      <div className="min-h-screen bg-white">
        {/* Hero Section with Aurora Background */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
          <AuroraBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Exit Calculator for Growth Serial Entrepreneur
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Free exit calculator for growth-stage serial entrepreneurs in Miami. Model exit scenarios and maximize founder proceeds with accurate real-time calculations.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Growth</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">Serial Entrepreneur</Badge>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">Miami</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-gray max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Modeling Startup Exit Scenarios</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Whether you're planning for an acquisition or IPO, understanding how exit proceeds are distributed among shareholders is critical. Liquidation preferences, participation rights, and cap table structure all affect what founders actually receive.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Liquidation Preferences and Waterfall Analysis</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Preferred stock holders typically get paid first in an exit. Our calculator models the full waterfall distribution so you can see exactly what each shareholder receives at different exit valuations.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">How to Use the Exit Calculator</h2>
                <ol className="space-y-3 text-lg text-gray-700 list-decimal list-inside mb-6">
                  <li>Enter your cap table with preferred stock terms</li>
                  <li>Set liquidation preferences and participation caps</li>
                  <li>Model different exit valuations to see payout ranges</li>
                  <li>Compare founder proceeds across exit scenarios</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/learn/" className="text-blue-600 hover:text-blue-700 underline">All Calculator Guides</Link>
              <Link href="/blog/" className="text-blue-600 hover:text-blue-700 underline">Blog & Articles</Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="border-purple-200 shadow-2xl bg-white">
                <CardHeader className="pt-12">
                  <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Ready to Get Started?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Try our exit calculator now - completely free, no signup required.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-12">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="font-semibold"
                    asChild
                  >
                    <a
                      href="https://icanpitch.com/startup-exit-visualizer/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Calculator →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
