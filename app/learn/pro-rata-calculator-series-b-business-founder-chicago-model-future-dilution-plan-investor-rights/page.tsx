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
  title: "Pro Rata Calculator for Series-b Business Founder in Chicago",
  description: "Free pro rata calculator for Series B business founders in Chicago. Model future dilution and plan investor rights with accurate real-time calculations.",
  keywords: ["pro-rata-calculator", "series-b", "business-founder", "chicago", "startup calculator"],
  openGraph: {
    title: "Pro Rata Calculator for Series-b Business Founder in Chicago",
    description: "Free pro rata calculator for Series B business founders in Chicago. Model future dilution and plan investor rights with accurate real-time calculations.",
    type: "article",
    url: "https://icanpitch.com/learn/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Rata Calculator for Series-b Business Founder in Chicago",
    description: "Free pro rata calculator for Series B business founders in Chicago. Model future dilution and plan investor rights with accurate real-time calculations.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/learn/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pro Rata Calculator for Series-b Business Founder",
    "description": "Free pro rata calculator for Series B business founders in Chicago. Model future dilution and plan investor rights with accurate real-time calculations.",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "datePublished": "2026-01-27T03:45:30.437Z",
    "dateModified": "2026-01-27T03:45:30.437Z",
    "url": "https://learn.icanpitch.com/learn/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/learn/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights/"
    }
  }
];

export default function ProRataCalculatorSeriesBBusinessFounderChicagoModelFutureDilutionPlanInvestorRightsPage(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Calculator Guides", href: "/learn/" },
    { label: "Pro Rata Calculator for Series-b Business Founder in Chicago" },
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
                Pro Rata Calculator for Series-b Business Founder
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Free pro rata calculator for Series B business founders in Chicago. Model future dilution and plan investor rights with accurate real-time calculations.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Series B</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">Business Founder</Badge>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">Chicago</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-gray max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Understanding Pro Rata Rights</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Pro rata rights allow existing investors to maintain their ownership percentage by investing in future rounds. Understanding how pro rata participation affects your cap table helps you plan dilution across multiple rounds.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Impact on Future Fundraising</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">When investors exercise pro rata rights, it reduces the amount of equity available to new investors. Our calculator shows how pro rata participation changes the dynamics of your next round.</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">How to Use the Pro Rata Calculator</h2>
                <ol className="space-y-3 text-lg text-gray-700 list-decimal list-inside mb-6">
                  <li>Enter your current cap table and investor ownership</li>
                  <li>Set the terms of your upcoming round</li>
                  <li>Toggle pro rata participation for each investor</li>
                  <li>See how ownership percentages shift with and without pro rata</li>
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
                    Try our pro rata calculator now - completely free, no signup required.
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
                      href="https://icanpitch.com/pro-rata-rights-impact-calculator/"
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
