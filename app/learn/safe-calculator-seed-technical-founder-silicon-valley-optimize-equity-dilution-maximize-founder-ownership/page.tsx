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
  title: "Safe Calculator for Seed Technical Founder in Silicon Valley",
  description: "Free SAFE calculator for seed-stage technical founders in Silicon Valley. Optimize equity dilution and maximize founder ownership with accurate modeling.",
  keywords: ["safe-calculator", "seed", "technical-founder", "silicon-valley", "startup calculator"],
  openGraph: {
    title: "Safe Calculator for Seed Technical Founder in Silicon Valley",
    description: "Free SAFE calculator for seed-stage technical founders in Silicon Valley. Optimize equity dilution and maximize founder ownership with accurate modeling.",
    type: "article",
    url: "https://icanpitch.com/learn/safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-ownership/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe Calculator for Seed Technical Founder in Silicon Valley",
    description: "Free SAFE calculator for seed-stage technical founders in Silicon Valley. Optimize equity dilution and maximize founder ownership with accurate modeling.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/learn/safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-ownership/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Safe Calculator for Seed Technical Founder",
    "description": "Free SAFE calculator for seed-stage technical founders in Silicon Valley. Optimize equity dilution and maximize founder ownership with accurate modeling.",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "datePublished": "2026-01-27T03:45:30.437Z",
    "dateModified": "2026-01-27T03:45:30.437Z",
    "url": "https://learn.icanpitch.com/learn/safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-ownership/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/learn/safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-ownership/"
    }
  }
];

export default function SafeCalculatorSeedTechnicalFounderSiliconValleyOptimizeEquityDilutionMaximizeFounderOwnershipPage(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Calculator Guides", href: "/learn/" },
    { label: "Safe Calculator for Seed Technical Founder in Silicon Valley" },
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
                Safe Calculator for Seed Technical Founder
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Free SAFE calculator for seed-stage technical founders in Silicon Valley. Optimize equity dilution and maximize founder ownership with accurate modeling.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Seed</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">Technical Founder</Badge>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">Silicon Valley</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-gray max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Understanding SAFE Agreements</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">A SAFE (Simple Agreement for Future Equity) is one of the most popular instruments for early-stage fundraising. Understanding how SAFEs convert into equity at your next priced round is critical for founders who want to maintain control of their cap table.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">How SAFE Conversion Works</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">When a priced round occurs, your SAFE converts based on either the valuation cap or the discount rate, whichever gives the investor a better price. Our calculator models these scenarios so you can see exactly how much dilution to expect.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">How to Use the Safe Calculator</h2>
                <ol className="space-y-3 text-lg text-gray-700 list-decimal list-inside mb-6">
                  <li>Enter your SAFE terms including valuation cap and discount rate</li>
                  <li>Set your expected Series A valuation and round size</li>
                  <li>Review the conversion scenarios and resulting ownership percentages</li>
                  <li>Compare different negotiation outcomes side by side</li>
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
                    Try our safe calculator now - completely free, no signup required.
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
                      href="https://icanpitch.com/safe-calculator/"
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
