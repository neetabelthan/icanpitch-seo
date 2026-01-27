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
    "datePublished": "2026-01-27T03:45:30.438Z",
    "dateModified": "2026-01-27T03:45:30.438Z",
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
