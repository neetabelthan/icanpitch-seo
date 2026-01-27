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
    "datePublished": "2026-01-27T21:21:28.685Z",
    "dateModified": "2026-01-27T21:21:28.685Z",
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

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">When to Use This Calculator</h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside mb-6">
                  <li>You are forming a new company with one or more co-founders and need to agree on ownership</li>
                  <li>You are bringing on a late co-founder and need to determine a fair share</li>
                  <li>You want a data-driven framework to resolve a disagreement about equity distribution</li>
                  <li>You are a solo founder considering giving equity to an early contributor and want to benchmark fairness</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Key Metrics and Formulas</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Our calculator uses a weighted contribution model. Each co-founder is scored across dimensions like idea generation, domain expertise, technical skills, business development, capital contribution, time commitment, and opportunity cost. Each dimension carries a configurable weight, and the final split is proportional to each founder's total weighted score. The formula is: Founder Equity % = (Founder Score / Total All Scores) x 100. We recommend pairing any split with a standard 4-year vesting schedule and 1-year cliff to protect all parties.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Common Mistakes to Avoid</h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside mb-6">
                  <li>Defaulting to 50/50 because it feels fair: Equal splits ignore real differences in contribution and often lead to resentment</li>
                  <li>Not using vesting: Without vesting, a co-founder who leaves after 3 months keeps their full share</li>
                  <li>Splitting equity before defining roles: Make sure each founder's expected contribution is clear before assigning percentages</li>
                  <li>Giving away too much equity to advisors early: Advisors typically receive 0.25%-1.0%, not co-founder-level stakes</li>
                </ul>

                {/* Expert Tips */}
                <div className="my-10 p-6 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Tips</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Have the equity conversation early, ideally before incorporating, and put the agreement in writing</span></li>
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Use a 4-year vesting schedule with a 1-year cliff for all founders, including yourself</span></li>
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Revisit the split if roles or commitment levels change significantly in the first year</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Reading */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended Reading</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/co-founder-equity-split-50-50-alternatives/" className="text-blue-600 hover:text-blue-700 underline">Co-Founder Equity Split: Why 50/50 Fails and Better Alternatives</Link></li>
                  <li><Link href="/blog/equity-split-technical-vs-business-cofounder/" className="text-blue-600 hover:text-blue-700 underline">Equity Split: Technical vs Business Co-Founder Guide</Link></li>
                  <li><Link href="/blog/avoiding-safe-dilution-traps-founders/" className="text-blue-600 hover:text-blue-700 underline">Avoiding SAFE Dilution Traps: 7 Mistakes Founders Make</Link></li>
                  <li><Link href="/blog/early-employee-equity-calculator-guide/" className="text-blue-600 hover:text-blue-700 underline">Early Employee Equity Calculator: How Much to Offer Guide</Link></li>
                  <li><Link href="/blog/founder-vesting-schedules-4-year-1-year-cliff/" className="text-blue-600 hover:text-blue-700 underline">Founder Vesting Schedules: 4-Year 1-Year Cliff Explained</Link></li>
            </ul>
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
                      Start Calculator &rarr;
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
