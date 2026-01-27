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
  title: "Equity Split Calculator for Pre-seed Serial Entrepreneur in London",
  description: "Free equity split calculator for pre-seed serial entrepreneurs in London. Resolve co-founder disputes and create fair equity distribution with accurate modeling.",
  keywords: ["equity-split-calculator", "pre-seed", "serial-entrepreneur", "london", "startup calculator"],
  openGraph: {
    title: "Equity Split Calculator for Pre-seed Serial Entrepreneur in London",
    description: "Free equity split calculator for pre-seed serial entrepreneurs in London. Resolve co-founder disputes and create fair equity distribution with accurate modeling.",
    type: "article",
    url: "https://icanpitch.com/learn/equity-split-calculator-pre-seed-serial-entrepreneur-london-resolve-co-founder-disputes-create-fair-equity-distribution/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equity Split Calculator for Pre-seed Serial Entrepreneur in London",
    description: "Free equity split calculator for pre-seed serial entrepreneurs in London. Resolve co-founder disputes and create fair equity distribution with accurate modeling.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/learn/equity-split-calculator-pre-seed-serial-entrepreneur-london-resolve-co-founder-disputes-create-fair-equity-distribution/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Equity Split Calculator for Pre-seed Serial Entrepreneur",
    "description": "Free equity split calculator for pre-seed serial entrepreneurs in London. Resolve co-founder disputes and create fair equity distribution with accurate modeling.",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "datePublished": "2026-01-27T03:45:30.435Z",
    "dateModified": "2026-01-27T03:45:30.435Z",
    "url": "https://learn.icanpitch.com/learn/equity-split-calculator-pre-seed-serial-entrepreneur-london-resolve-co-founder-disputes-create-fair-equity-distribution/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/learn/equity-split-calculator-pre-seed-serial-entrepreneur-london-resolve-co-founder-disputes-create-fair-equity-distribution/"
    }
  }
];

export default function EquitySplitCalculatorPreSeedSerialEntrepreneurLondonResolveCoFounderDisputesCreateFairEquityDistributionPage(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Calculator Guides", href: "/learn/" },
    { label: "Equity Split Calculator for Pre-seed Serial Entrepreneur in London" },
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
                Equity Split Calculator for Pre-seed Serial Entrepreneur
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Free equity split calculator for pre-seed serial entrepreneurs in London. Resolve co-founder disputes and create fair equity distribution with accurate modeling.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Pre Seed</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">Serial Entrepreneur</Badge>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">London</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-gray max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Co-Founder Equity Allocation</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Splitting equity fairly among co-founders is one of the most important early decisions for any startup. A well-structured equity split considers each founder's contributions, commitment level, and the value they bring to the company.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Factors That Influence Equity Splits</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Beyond the initial idea, equity splits should account for who is working full-time, who brought the technical expertise, who has industry connections, and who is putting in capital. Our calculator helps you weigh these factors objectively.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">How to Use the Equity Split Calculator</h2>
                <ol className="space-y-3 text-lg text-gray-700 list-decimal list-inside mb-6">
                  <li>Rate each co-founder's contributions across key dimensions</li>
                  <li>Adjust weightings based on what matters most for your startup</li>
                  <li>Review the suggested equity split percentages</li>
                  <li>Model vesting schedules to protect all co-founders</li>
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
                    Try our equity split calculator now - completely free, no signup required.
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
                      href="https://icanpitch.com/co-founder-equity-split-calculator/"
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
