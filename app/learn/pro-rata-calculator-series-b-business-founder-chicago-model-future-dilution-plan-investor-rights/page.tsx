import { Metadata } from 'next';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: "Pro Rata Calculator for Series-b Business Founder in Chicago",
  description: "Free pro rata calculator for series-b business-founder in Chicago. Plan-investor-rights with accurate modeling and real-time calculations. Used by 1000+ founders.",
  keywords: ["pro-rata-calculator", "series-b", "business-founder", "chicago", "startup calculator"],
  openGraph: {
    title: "Pro Rata Calculator for Series-b Business Founder in Chicago",
    description: "Free pro rata calculator for series-b business-founder in Chicago. Plan-investor-rights with accurate modeling and real-time calculations. Used by 1000+ founders.",
    type: "article",
    url: "https://icanpitch.com/learn/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights/",
    images: ["/og/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Rata Calculator for Series-b Business Founder in Chicago",
    description: "Free pro rata calculator for series-b business-founder in Chicago. Plan-investor-rights with accurate modeling and real-time calculations. Used by 1000+ founders.",
    images: ["/og/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights.png"],
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pro Rata Calculator for Series-b Business Founder",
    "description": "Free pro rata calculator for series-b business-founder in Chicago. Plan-investor-rights with accurate modeling and real-time calculations. Used by 1000+ founders.",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "datePublished": "2025-11-06T20:40:24.988Z",
    "url": "https://icanpitch.com/learn/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights/"
  }
];

export default function ProRataCalculatorSeriesBBusinessFounderChicagoModelFutureDilutionPlanInvestorRightsPage() {
  return (
    <>
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
        <Header />

        {/* Hero Section with Aurora Background */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
          <AuroraBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pro Rata Calculator for Series-b Business Founder
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Free pro rata calculator for series-b business-founder in Chicago. Plan-investor-rights with accurate modeling and real-time calculations. Used by 1000+ founders.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Pro Rata Calculator Does</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our Pro Rata Calculator is specifically designed for series-b business founder who need precise financial modeling.
                  This professional-grade tool provides comprehensive analysis of your startup's financial structure,
                  allowing you to explore different scenarios and understand the implications of various decisions.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Why This Matters for Series B Business Founder</h2>
                <p className="text-gray-700 leading-relaxed">
                  At the series-b stage, business founders face unique challenges that require specialized financial tools.
                  Traditional spreadsheets often fall short when modeling complex equity structures and conversion scenarios.
                  Our Pro Rata Calculator addresses these specific needs with industry-standard calculations and professional-grade analysis.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The accuracy of your financial models directly impacts your ability to raise capital and negotiate favorable terms.
                  Investors expect sophisticated analysis and clear understanding of dilution, ownership, and potential returns.
                  This tool ensures you're prepared for those conversations.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">How to Plan Investor Rights with Pro Rata Calculator</h2>
                <p className="text-gray-700 leading-relaxed mb-6">Our calculator is specifically built to help you plan investor rights. The process is straightforward:</p>

                <ol className="space-y-4">
                  <li className="text-gray-700">
                    <strong className="text-gray-900 font-semibold">Input your current situation</strong> - Enter your existing equity structure, investment amounts, and valuation parameters
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-900 font-semibold">Model different scenarios</strong> - Explore various outcomes by adjusting key variables like valuation caps, discount rates, or investment amounts
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-900 font-semibold">Analyze the results</strong> - Review detailed breakdowns of ownership percentages, dilution effects, and financial projections
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-900 font-semibold">Export and share</strong> - Generate professional reports for investor presentations or team discussions
                  </li>
                </ol>

                <p className="text-gray-700 leading-relaxed mt-6">
                  The tool's advanced algorithms ensure accuracy while the intuitive interface makes complex calculations
                  accessible to founders at any experience level.
                </p>
              </div>
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
