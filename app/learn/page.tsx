import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/aurora-background";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Calculator Guides",
  description: "Free interactive calculators for startup founders. Model SAFE conversions, burn rate, equity splits, option pools, valuations, vesting schedules, and more.",
  alternates: {
    canonical: "https://learn.icanpitch.com/learn/",
  },
  openGraph: {
    title: "Startup Calculator Guides",
    description: "Free interactive calculators for startup founders. Model SAFE conversions, burn rate, equity splits, and more.",
    url: "https://learn.icanpitch.com/learn/",
    type: "website",
    siteName: "ICanPitch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Calculator Guides",
    description: "Free interactive calculators for startup founders. Model SAFE conversions, burn rate, equity splits, and more.",
  },
};

export default function LearnPage() {
  const calculators = [
    {
      name: "409a Valuation Calculator",
      slug: "409a-valuation-calculator-series-b-technical-founder-toronto-prepare-employee-options-comply-with-tax-regulations",
      stage: "Series B",
      description: "Free 409A valuation calculator for Series B technical founders in Toronto. Prepare employee options and comply with tax regulations using accurate modeling.",
    },
    {
      name: "Burn Rate Calculator",
      slug: "burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-efficiency",
      stage: "Series A",
      description: "Free burn rate calculator for Series A first-time founders in New York. Plan your fundraising timeline and extend runway efficiency with real-time modeling.",
    },
    {
      name: "Convertible Note Calculator",
      slug: "convertible-note-calculator-seed-business-founder-austin-negotiate-better-terms-understand-conversion-scenarios",
      stage: "Seed",
      description: "Free convertible note calculator for seed-stage business founders in Austin. Negotiate better terms and understand conversion scenarios with accurate modeling.",
    },
    {
      name: "Equity Split Calculator",
      slug: "equity-split-calculator-pre-seed-serial-entrepreneur-london-resolve-co-founder-disputes-create-fair-equity-distribution",
      stage: "Pre Seed",
      description: "Free equity split calculator for pre-seed serial entrepreneurs in London. Resolve co-founder disputes and create fair equity distribution with accurate modeling.",
    },
    {
      name: "Exit Calculator",
      slug: "exit-calculator-growth-serial-entrepreneur-miami-model-exit-scenarios-maximize-founder-proceeds",
      stage: "Growth",
      description: "Free exit calculator for growth-stage serial entrepreneurs in Miami. Model exit scenarios and maximize founder proceeds with accurate real-time calculations.",
    },
    {
      name: "Option Pool Calculator",
      slug: "option-pool-calculator-pre-seed-technical-founder-san-francisco-size-employee-equity-minimize-founder-dilution",
      stage: "Pre Seed",
      description: "Free option pool calculator for pre-seed technical founders in San Francisco. Size employee equity and minimize founder dilution with real-time modeling.",
    },
    {
      name: "Pre Post Money Calculator",
      slug: "pre-post-money-calculator-series-a-first-time-founder-seattle-understand-valuation-mechanics-negotiate-better-terms",
      stage: "Series A",
      description: "Free pre and post money calculator for Series A first-time founders in Seattle. Understand valuation mechanics and negotiate better terms with real-time modeling.",
    },
    {
      name: "Pro Rata Calculator",
      slug: "pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights",
      stage: "Series B",
      description: "Free pro rata calculator for Series B business founders in Chicago. Model future dilution and plan investor rights with accurate real-time calculations.",
    },
    {
      name: "Safe Calculator",
      slug: "safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-ownership",
      stage: "Seed",
      description: "Free SAFE calculator for seed-stage technical founders in Silicon Valley. Optimize equity dilution and maximize founder ownership with accurate modeling.",
    },
    {
      name: "Vesting Calculator",
      slug: "vesting-calculator-seed-serial-entrepreneur-boston-plan-founder-vesting-protect-against-co-founder-departure",
      stage: "Seed",
      description: "Free vesting calculator for seed-stage serial entrepreneurs in Boston. Plan founder vesting and protect against co-founder departure with real-time modeling.",
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section with Aurora Background */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <AuroraBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Startup Calculator Guides
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive guides and resources for founders at every stage of their startup journey
            </p>
            <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto">
              Each guide walks you through a specific financial modeling tool, from SAFE note conversion and burn rate analysis to equity splitting and exit scenario planning. Built for pre-seed through Series B founders.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {calculators.map((calc) => (
                <Card
                  key={calc.slug}
                  className="bg-white border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex flex-col group"
                >
                  <CardHeader className="flex-grow pb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-blue-50 text-blue-700 border-0 text-xs font-medium px-2.5 py-0.5">
                        {calc.stage}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {calc.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {calc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 pb-5">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="font-medium"
                      asChild
                    >
                      <Link href={`/learn/${calc.slug}/`}>
                        Read Guide &rarr;
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Link */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-600">Looking for more in-depth analysis? <Link href="/blog/" className="text-blue-600 hover:text-blue-700 font-medium underline">Read our blog</Link> for detailed articles on fundraising, equity, and startup finance.</p>
        </div>
      </section>
    </div>
  );
}
