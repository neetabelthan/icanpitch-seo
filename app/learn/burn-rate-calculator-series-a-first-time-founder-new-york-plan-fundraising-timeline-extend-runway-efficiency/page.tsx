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
  title: "Burn Rate Calculator for Series-a First Time Founder in New York",
  description: "Free burn rate calculator for Series A first-time founders in New York. Plan your fundraising timeline and extend runway efficiency with real-time modeling.",
  keywords: ["burn-rate-calculator", "series-a", "first-time-founder", "new-york", "startup calculator"],
  openGraph: {
    title: "Burn Rate Calculator for Series-a First Time Founder in New York",
    description: "Free burn rate calculator for Series A first-time founders in New York. Plan your fundraising timeline and extend runway efficiency with real-time modeling.",
    type: "article",
    url: "https://icanpitch.com/learn/burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-efficiency/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burn Rate Calculator for Series-a First Time Founder in New York",
    description: "Free burn rate calculator for Series A first-time founders in New York. Plan your fundraising timeline and extend runway efficiency with real-time modeling.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/learn/burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-efficiency/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Burn Rate Calculator for Series-a First Time Founder",
    "description": "Free burn rate calculator for Series A first-time founders in New York. Plan your fundraising timeline and extend runway efficiency with real-time modeling.",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "datePublished": "2026-01-27T21:21:28.671Z",
    "dateModified": "2026-01-27T21:21:28.671Z",
    "url": "https://learn.icanpitch.com/learn/burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-efficiency/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/learn/burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-efficiency/"
    }
  }
];

export default function BurnRateCalculatorSeriesAFirstTimeFounderNewYorkPlanFundraisingTimelineExtendRunwayEfficiencyPage(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Calculator Guides", href: "/learn/" },
    { label: "Burn Rate Calculator for Series-a First Time Founder in New York" },
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
                Burn Rate Calculator for Series-a First Time Founder
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Free burn rate calculator for Series A first-time founders in New York. Plan your fundraising timeline and extend runway efficiency with real-time modeling.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Series A</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">First Time Founder</Badge>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">New York</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-gray max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Understanding Startup Burn Rate</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Burn rate measures how quickly your startup spends cash each month. Knowing your burn rate and runway helps you plan fundraising timing and make better decisions about hiring, marketing spend, and product development.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Calculating Your Runway</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Your runway is your remaining cash divided by your monthly burn rate. Our calculator helps you model different spending scenarios and understand exactly when you need to raise your next round.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">How to Use the Burn Rate Calculator</h2>
                <ol className="space-y-3 text-lg text-gray-700 list-decimal list-inside mb-6">
                  <li>Enter your current cash balance and monthly expenses</li>
                  <li>Adjust spending categories to model different scenarios</li>
                  <li>See your projected runway in months</li>
                  <li>Plan your fundraising timeline based on runway projections</li>
                </ol>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">When to Use This Calculator</h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside mb-6">
                  <li>You just closed a round and want to set a monthly budget that preserves at least 18 months of runway</li>
                  <li>You are deciding whether to make a new hire and need to see the runway impact</li>
                  <li>Your board is asking for a monthly financial update and you want clean numbers</li>
                  <li>You are approaching fundraising and need to time your outreach based on remaining runway</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Key Metrics and Formulas</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Gross burn rate is your total monthly expenses before any revenue. Net burn rate subtracts monthly recurring revenue from gross burn: Net Burn = Gross Burn - MRR. Runway equals cash on hand divided by net burn rate. The burn multiple measures efficiency: Burn Multiple = Net Burn / Net New ARR. A burn multiple below 1.5x is excellent, 1.5x-2.5x is good, and above 2.5x signals inefficiency. Our calculator tracks all three metrics and projects your cash balance month by month.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Common Mistakes to Avoid</h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside mb-6">
                  <li>Using gross burn when you should use net burn: If you have revenue, net burn gives a more accurate runway picture</li>
                  <li>Not accounting for lumpy expenses: Annual payments, tax bills, and equipment purchases can spike your monthly burn</li>
                  <li>Starting fundraising with less than 6 months of runway: Most rounds take 3-6 months to close, so start early</li>
                  <li>Cutting costs too aggressively and stalling growth: Investors want capital-efficient growth, not zero spending</li>
                </ul>

                {/* Expert Tips */}
                <div className="my-10 p-6 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Tips</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Recalculate your burn rate on the first of every month using actual bank statements, not projections</span></li>
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Build a buffer of 2-3 months extra runway beyond your fundraising timeline</span></li>
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Track your burn multiple alongside raw burn to show investors you spend efficiently</span></li>
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
              <li><Link href="/blog/burn-rate-calculator-hong-kong/" className="text-blue-600 hover:text-blue-700 underline">Hong Kong Burn Rate Calculator: HKD Runway Guide for Fintech & APAC Startups (2025)</Link></li>
                  <li><Link href="/blog/burn-rate-calculator-stockholm/" className="text-blue-600 hover:text-blue-700 underline">Stockholm Burn Rate Calculator: Master Your Runway in Sweden's Tech Capital</Link></li>
                  <li><Link href="/blog/burn-rate-benchmarks-by-industry-stage/" className="text-blue-600 hover:text-blue-700 underline">Burn Rate Benchmarks by Industry and Stage: 2025 Data</Link></li>
                  <li><Link href="/blog/burn-rate-calculator-amsterdam/" className="text-blue-600 hover:text-blue-700 underline">Amsterdam Burn Rate Calculator: Master Your Startup Cash Runway in Europe's Tech Hub</Link></li>
                  <li><Link href="/blog/burn-rate-calculator-barcelona/" className="text-blue-600 hover:text-blue-700 underline">Barcelona Burn Rate Calculator: Master Cash Runway for Spanish Startups</Link></li>
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
                    Try our burn rate calculator now - completely free, no signup required.
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
                      href="https://icanpitch.com/burn-rate-runway-calculator/"
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
