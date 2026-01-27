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
  title: "Vesting Calculator for Seed Serial Entrepreneur in Boston",
  description: "Free vesting calculator for seed-stage serial entrepreneurs in Boston. Plan founder vesting and protect against co-founder departure with real-time modeling.",
  keywords: ["vesting-calculator", "seed", "serial-entrepreneur", "boston", "startup calculator"],
  openGraph: {
    title: "Vesting Calculator for Seed Serial Entrepreneur in Boston",
    description: "Free vesting calculator for seed-stage serial entrepreneurs in Boston. Plan founder vesting and protect against co-founder departure with real-time modeling.",
    type: "article",
    url: "https://icanpitch.com/learn/vesting-calculator-seed-serial-entrepreneur-boston-plan-founder-vesting-protect-against-co-founder-departure/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vesting Calculator for Seed Serial Entrepreneur in Boston",
    description: "Free vesting calculator for seed-stage serial entrepreneurs in Boston. Plan founder vesting and protect against co-founder departure with real-time modeling.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/learn/vesting-calculator-seed-serial-entrepreneur-boston-plan-founder-vesting-protect-against-co-founder-departure/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vesting Calculator for Seed Serial Entrepreneur",
    "description": "Free vesting calculator for seed-stage serial entrepreneurs in Boston. Plan founder vesting and protect against co-founder departure with real-time modeling.",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "datePublished": "2026-01-27T21:21:28.734Z",
    "dateModified": "2026-01-27T21:21:28.734Z",
    "url": "https://learn.icanpitch.com/learn/vesting-calculator-seed-serial-entrepreneur-boston-plan-founder-vesting-protect-against-co-founder-departure/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/learn/vesting-calculator-seed-serial-entrepreneur-boston-plan-founder-vesting-protect-against-co-founder-departure/"
    }
  }
];

export default function VestingCalculatorSeedSerialEntrepreneurBostonPlanFounderVestingProtectAgainstCoFounderDeparturePage(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Calculator Guides", href: "/learn/" },
    { label: "Vesting Calculator for Seed Serial Entrepreneur in Boston" },
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
                Vesting Calculator for Seed Serial Entrepreneur
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Free vesting calculator for seed-stage serial entrepreneurs in Boston. Plan founder vesting and protect against co-founder departure with real-time modeling.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Seed</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">Serial Entrepreneur</Badge>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">Boston</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-gray max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Vesting Schedules Explained</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Vesting schedules ensure that founders and employees earn their equity over time. The standard four-year schedule with a one-year cliff protects the company while rewarding long-term commitment.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Customizing Your Vesting Terms</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">While the 4-year vest with 1-year cliff is standard, many startups customize terms for different roles. Our calculator lets you explore how different vesting schedules affect equity distribution over time.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">How to Use the Vesting Calculator</h2>
                <ol className="space-y-3 text-lg text-gray-700 list-decimal list-inside mb-6">
                  <li>Set the total equity grant and vesting period</li>
                  <li>Configure cliff period and vesting frequency</li>
                  <li>View the vesting timeline month by month</li>
                  <li>Model acceleration triggers for M&A scenarios</li>
                </ol>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">When to Use This Calculator</h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside mb-6">
                  <li>You are setting up founder vesting as part of your incorporation documents</li>
                  <li>You are making an offer to a key hire and need to explain their vesting timeline</li>
                  <li>You want to model what happens to unvested shares if a co-founder leaves at various points</li>
                  <li>You are negotiating acceleration clauses for an acquisition scenario and need to show the impact</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Key Metrics and Formulas</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Standard 4-year vesting with a 1-year cliff: 0% vests during the first year, 25% vests at the 1-year mark (cliff), then 1/48th of the total grant vests each month after that. Shares vested at month M (where M is 12 or more) equals Total Grant x (M / 48). Single-trigger acceleration vests all unvested shares upon acquisition. Double-trigger acceleration requires both acquisition and termination. Our calculator models all three scenarios and shows vested vs unvested equity at any point in the schedule.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Common Mistakes to Avoid</h2>
                <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside mb-6">
                  <li>Not vesting founder shares: Investors will require vesting anyway, so set it up proactively on your terms</li>
                  <li>Using a cliff for employees longer than 1 year: Longer cliffs increase retention risk and are seen as unfair</li>
                  <li>Granting acceleration without understanding the cost: Single-trigger acceleration can give away significant equity in an acquisition</li>
                  <li>Forgetting to account for early exercise (83(b) elections): If employees early-exercise, they start the capital gains clock early</li>
                </ul>

                {/* Expert Tips */}
                <div className="my-10 p-6 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Tips</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>File an 83(b) election within 30 days of receiving restricted stock to start the capital gains clock</span></li>
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Consider double-trigger acceleration for founders to protect the acquiring company while still protecting yourself</span></li>
                    <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0">&#x2713;</span><span>Document your vesting terms in your stock plan and individual grant agreements, not just verbal agreements</span></li>
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
                  <li><Link href="/blog/early-employee-equity-calculator-guide/" className="text-blue-600 hover:text-blue-700 underline">Early Employee Equity Calculator: How Much to Offer Guide</Link></li>
                  <li><Link href="/blog/founder-vesting-schedules-4-year-1-year-cliff/" className="text-blue-600 hover:text-blue-700 underline">Founder Vesting Schedules: 4-Year 1-Year Cliff Explained</Link></li>
                  <li><Link href="/blog/understanding-pro-rata-rights-startup-investing/" className="text-blue-600 hover:text-blue-700 underline">Understanding Pro-Rata Rights in Startup Investing: A Complete Guide</Link></li>
                  <li><Link href="/blog/vesting-acceleration-clauses-explained/" className="text-blue-600 hover:text-blue-700 underline">Vesting Acceleration Clauses: Single vs Double Trigger Explained</Link></li>
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
                    Try our vesting calculator now - completely free, no signup required.
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
                      href="https://icanpitch.com/vesting-schedule-cliff-explorer/"
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
