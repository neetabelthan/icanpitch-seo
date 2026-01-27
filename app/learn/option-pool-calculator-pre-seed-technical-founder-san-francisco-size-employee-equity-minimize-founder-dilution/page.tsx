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
  title: "Option Pool Calculator for Pre-seed Technical Founder in San Francisco",
  description: "Free option pool calculator for pre-seed technical founders in San Francisco. Size employee equity and minimize founder dilution with real-time modeling.",
  keywords: ["option-pool-calculator", "pre-seed", "technical-founder", "san-francisco", "startup calculator"],
  openGraph: {
    title: "Option Pool Calculator for Pre-seed Technical Founder in San Francisco",
    description: "Free option pool calculator for pre-seed technical founders in San Francisco. Size employee equity and minimize founder dilution with real-time modeling.",
    type: "article",
    url: "https://icanpitch.com/learn/option-pool-calculator-pre-seed-technical-founder-san-francisco-size-employee-equity-minimize-founder-dilution/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Option Pool Calculator for Pre-seed Technical Founder in San Francisco",
    description: "Free option pool calculator for pre-seed technical founders in San Francisco. Size employee equity and minimize founder dilution with real-time modeling.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/learn/option-pool-calculator-pre-seed-technical-founder-san-francisco-size-employee-equity-minimize-founder-dilution/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Option Pool Calculator for Pre-seed Technical Founder",
    "description": "Free option pool calculator for pre-seed technical founders in San Francisco. Size employee equity and minimize founder dilution with real-time modeling.",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "datePublished": "2026-01-27T21:21:28.708Z",
    "dateModified": "2026-01-27T21:21:28.708Z",
    "url": "https://learn.icanpitch.com/learn/option-pool-calculator-pre-seed-technical-founder-san-francisco-size-employee-equity-minimize-founder-dilution/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/learn/option-pool-calculator-pre-seed-technical-founder-san-francisco-size-employee-equity-minimize-founder-dilution/"
    }
  }
];

export default function OptionPoolCalculatorPreSeedTechnicalFounderSanFranciscoSizeEmployeeEquityMinimizeFounderDilutionPage(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Calculator Guides", href: "/learn/" },
    { label: "Option Pool Calculator for Pre-seed Technical Founder in San Francisco" },
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
                Option Pool Calculator for Pre-seed Technical Founder
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Free option pool calculator for pre-seed technical founders in San Francisco. Size employee equity and minimize founder dilution with real-time modeling.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Pre Seed</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">Technical Founder</Badge>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">San Francisco</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-gray max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Setting Up Your Option Pool</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">An employee option pool is essential for attracting top talent to your startup. The size of your option pool directly affects founder dilution, so understanding the tradeoffs before negotiating with investors is critical.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Option Pool Impact on Valuation</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Investors typically require the option pool to be created from pre-money valuation, increasing founder dilution. Our calculator shows you exactly how different pool sizes affect your ownership stake.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">How to Use the Option Pool Calculator</h2>
                <ol className="space-y-3 text-lg text-gray-700 list-decimal list-inside mb-6">
                  <li>Set your pre-money valuation and round size</li>
                  <li>Adjust the option pool percentage to see dilution impact</li>
                  <li>Compare pre-money vs post-money option pool creation</li>
                  <li>Plan your hiring budget against available options</li>
                </ol>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">When to Use This Calculator</h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside mb-6">
                  <li>An investor's term sheet specifies an option pool size and you want to understand the dilution impact</li>
                  <li>You are planning hires for the next 12-18 months and need to size your pool accordingly</li>
                  <li>You want to compare the founder dilution difference between a 10%, 15%, and 20% pool</li>
                  <li>You are granting options to a new hire and want to check how much of the pool remains</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Key Metrics and Formulas</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">The option pool shuffle is a well-known negotiation tactic: investors ask for the pool to be created from pre-money valuation, which means founders bear 100% of the dilution. The math: Effective Pre-Money = Stated Pre-Money - Option Pool Value. So a $10M pre-money with a 20% option pool on $2M raised means founders effectively get a $8M pre-money valuation. Our calculator shows both the stated and effective pre-money, along with founder ownership before and after the pool is created.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Common Mistakes to Avoid</h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside mb-6">
                  <li>Accepting a larger pool than you need: If you only need 12% for planned hires, negotiate down from the standard 20% ask</li>
                  <li>Not mapping the pool to a hiring plan: Show investors exactly which roles and grant sizes justify the pool size</li>
                  <li>Ignoring the pre-money vs post-money distinction: Where the pool comes from changes your effective valuation significantly</li>
                  <li>Granting too many options to early hires: Senior hires at seed stage should receive 0.5%-2%, not 5%+</li>
                </ul>

                {/* Expert Tips */}
                <div className="my-10 p-6 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Tips</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Build a hiring plan spreadsheet with role, timing, and grant size to justify your proposed pool</span></li>
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Negotiate the pool size down if you have already made key hires before the round</span></li>
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Consider a smaller pool with a plan to refresh at the next round rather than over-allocating now</span></li>
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
              <li><Link href="/blog/option-pool-calculator-berlin/" className="text-blue-600 hover:text-blue-700 underline">Berlin Option Pool Calculator: German ESOP vs VSOP Guide (2025)</Link></li>
                  <li><Link href="/blog/option-pool-calculator-london/" className="text-blue-600 hover:text-blue-700 underline">London Option Pool Calculator: UK ESOP & EMI Scheme Guide (2025)</Link></li>
                  <li><Link href="/blog/option-pool-calculator-new-york/" className="text-blue-600 hover:text-blue-700 underline">NYC Option Pool Calculator: East Coast Startup Equity Standards (2025)</Link></li>
                  <li><Link href="/blog/option-pool-calculator-silicon-valley/" className="text-blue-600 hover:text-blue-700 underline">Silicon Valley Option Pool Calculator: Pre-Money vs Post-Money ESOP Guide (2025)</Link></li>
                  <li><Link href="/blog/option-pool-calculator-singapore/" className="text-blue-600 hover:text-blue-700 underline">Singapore Option Pool Calculator: APAC ESOP Standards & Tax Guide (2025)</Link></li>
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
                    Try our option pool calculator now - completely free, no signup required.
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
                      href="https://icanpitch.com/option-pool-impact-calculator/"
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
