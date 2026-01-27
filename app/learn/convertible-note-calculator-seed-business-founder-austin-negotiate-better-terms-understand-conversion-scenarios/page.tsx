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
  title: "Convertible Note Calculator for Seed Business Founder in Austin",
  description: "Free convertible note calculator for seed-stage business founders in Austin. Negotiate better terms and understand conversion scenarios with accurate modeling.",
  keywords: ["convertible-note-calculator", "seed", "business-founder", "austin", "startup calculator"],
  openGraph: {
    title: "Convertible Note Calculator for Seed Business Founder in Austin",
    description: "Free convertible note calculator for seed-stage business founders in Austin. Negotiate better terms and understand conversion scenarios with accurate modeling.",
    type: "article",
    url: "https://icanpitch.com/learn/convertible-note-calculator-seed-business-founder-austin-negotiate-better-terms-understand-conversion-scenarios/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertible Note Calculator for Seed Business Founder in Austin",
    description: "Free convertible note calculator for seed-stage business founders in Austin. Negotiate better terms and understand conversion scenarios with accurate modeling.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/learn/convertible-note-calculator-seed-business-founder-austin-negotiate-better-terms-understand-conversion-scenarios/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Convertible Note Calculator for Seed Business Founder",
    "description": "Free convertible note calculator for seed-stage business founders in Austin. Negotiate better terms and understand conversion scenarios with accurate modeling.",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "datePublished": "2026-01-27T21:21:28.679Z",
    "dateModified": "2026-01-27T21:21:28.679Z",
    "url": "https://learn.icanpitch.com/learn/convertible-note-calculator-seed-business-founder-austin-negotiate-better-terms-understand-conversion-scenarios/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/learn/convertible-note-calculator-seed-business-founder-austin-negotiate-better-terms-understand-conversion-scenarios/"
    }
  }
];

export default function ConvertibleNoteCalculatorSeedBusinessFounderAustinNegotiateBetterTermsUnderstandConversionScenariosPage(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Calculator Guides", href: "/learn/" },
    { label: "Convertible Note Calculator for Seed Business Founder in Austin" },
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
                Convertible Note Calculator for Seed Business Founder
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Free convertible note calculator for seed-stage business founders in Austin. Negotiate better terms and understand conversion scenarios with accurate modeling.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Seed</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">Business Founder</Badge>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">Austin</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-gray max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">How Convertible Notes Work</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Convertible notes are debt instruments that convert into equity at a future priced round. They include terms like interest rate, valuation cap, and discount that determine the conversion price your investors receive.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Modeling Note Conversion</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">When your Series A closes, outstanding convertible notes convert based on their terms. Our calculator helps you model exactly how much equity note holders will receive and how that affects founder ownership.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">How to Use the Convertible Note Calculator</h2>
                <ol className="space-y-3 text-lg text-gray-700 list-decimal list-inside mb-6">
                  <li>Enter your note terms: principal, interest rate, cap, and discount</li>
                  <li>Set the expected Series A valuation and timing</li>
                  <li>See the converted equity and resulting cap table</li>
                  <li>Compare multiple notes with different terms</li>
                </ol>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">When to Use This Calculator</h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside mb-6">
                  <li>You are raising on a convertible note and want to model conversion at different Series A prices</li>
                  <li>You have outstanding notes from a previous round and need to see their impact on your next cap table</li>
                  <li>You want to compare the dilution difference between a convertible note and a SAFE</li>
                  <li>An investor is proposing specific note terms and you want to understand the long-term cost</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Key Metrics and Formulas</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Convertible notes accrue interest over time, increasing the amount that converts. The conversion amount equals Principal x (1 + Interest Rate x Time in Years). The conversion price is the lower of (Valuation Cap / Fully Diluted Shares) or (Series A Price x (1 - Discount)). Shares issued equal the conversion amount divided by the conversion price. Unlike SAFEs, notes have a maturity date at which point the investor can demand repayment or negotiate new terms. Our calculator models the interest accrual, both conversion price scenarios, and the resulting share issuance.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Common Mistakes to Avoid</h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside mb-6">
                  <li>Forgetting to account for accrued interest: On a 2-year note at 8%, the conversion amount is 16% higher than the principal</li>
                  <li>Ignoring the maturity date: If you haven't raised a priced round by maturity, the note holder can demand repayment</li>
                  <li>Stacking notes with different caps: Multiple notes at different caps create complex conversion waterfalls</li>
                  <li>Not understanding how the discount interacts with the cap: The investor gets whichever is more favorable</li>
                </ul>

                {/* Expert Tips */}
                <div className="my-10 p-6 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Tips</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Negotiate a longer maturity date (24+ months) to give yourself time to reach a priced round</span></li>
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Track accrued interest monthly so you are never surprised at conversion time</span></li>
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>If choosing between a SAFE and a note, understand that notes create legal debt obligations that SAFEs do not</span></li>
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
              <li><Link href="/blog/safe-calculator-toronto/" className="text-blue-600 hover:text-blue-700 underline">SAFE Calculator for Toronto Startups: Navigate Canadian Convertible Financing</Link></li>
                  <li><Link href="/blog/safe-vs-convertible-note-2024-comparison/" className="text-blue-600 hover:text-blue-700 underline">SAFE vs Convertible Note: Complete 2024 Comparison Guide</Link></li>
                  <li><Link href="/blog/safe-calculator-paris/" className="text-blue-600 hover:text-blue-700 underline">SAFE Calculator for Paris Startups: Navigate French Convertible Financing</Link></li>
                  <li><Link href="/blog/safe-notes-multiple-safes-stacking-guide/" className="text-blue-600 hover:text-blue-700 underline">Multiple SAFEs and SAFE Stacking: Complete Founder's Guide (2025)</Link></li>
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
                    Try our convertible note calculator now - completely free, no signup required.
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
                      href="https://icanpitch.com/convertible-note-calculator/"
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
