import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/aurora-background";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Startup Calculators & Founder Resources",
  description: "Free SAFE calculator, burn rate planner, equity split tool, and more. Interactive guides to help startup founders model fundraising, dilution, and financial scenarios.",
  alternates: {
    canonical: "https://learn.icanpitch.com/",
  },
  openGraph: {
    title: "Free Startup Calculators & Founder Resources",
    description: "Free SAFE calculator, burn rate planner, equity split tool, and more. Interactive guides for startup founders.",
    url: "https://learn.icanpitch.com/",
    type: "website",
    siteName: "ICanPitch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Startup Calculators & Founder Resources",
    description: "Free SAFE calculator, burn rate planner, equity split tool, and more. Interactive guides for startup founders.",
  },
};

export default function Home() {
  const calculators = [
    {
      name: "SAFE Calculator",
      slug: "safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-ownership",
      description: "Calculate SAFE conversions and optimize equity dilution"
    },
    {
      name: "Burn Rate Calculator",
      slug: "burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-efficiency",
      description: "Plan your fundraising timeline and extend your runway"
    },
    {
      name: "Equity Split Calculator",
      slug: "equity-split-calculator-pre-seed-serial-entrepreneur-london-resolve-co-founder-disputes-create-fair-equity-distribution",
      description: "Create fair equity distributions for co-founders"
    },
    {
      name: "Option Pool Calculator",
      slug: "option-pool-calculator-pre-seed-technical-founder-san-francisco-size-employee-equity-minimize-founder-dilution",
      description: "Size employee equity pools and minimize founder dilution"
    },
    {
      name: "Convertible Note Calculator",
      slug: "convertible-note-calculator-seed-business-founder-austin-negotiate-better-terms-understand-conversion-scenarios",
      description: "Understand convertible note conversion mechanics"
    },
    {
      name: "Vesting Calculator",
      slug: "vesting-calculator-seed-serial-entrepreneur-boston-plan-founder-vesting-protect-against-co-founder-departure",
      description: "Plan founder vesting schedules and protect against departures"
    },
    {
      name: "Pre/Post Money Calculator",
      slug: "pre-post-money-calculator-series-a-first-time-founder-seattle-understand-valuation-mechanics-negotiate-better-terms",
      description: "Understand valuation mechanics and negotiate better terms"
    },
    {
      name: "409A Valuation Calculator",
      slug: "409a-valuation-calculator-series-b-technical-founder-toronto-prepare-employee-options-comply-with-tax-regulations",
      description: "Prepare employee options and comply with tax regulations"
    },
    {
      name: "Pro Rata Calculator",
      slug: "pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights",
      description: "Model future dilution and plan investor rights"
    },
    {
      name: "Exit Calculator",
      slug: "exit-calculator-growth-serial-entrepreneur-miami-model-exit-scenarios-maximize-founder-proceeds",
      description: "Model exit scenarios and maximize founder proceeds"
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ICanPitch",
    url: "https://icanpitch.com",
    logo: "https://learn.icanpitch.com/logo.png",
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ICanPitch",
    url: "https://learn.icanpitch.com",
    description:
      "Free startup calculators and in-depth guides for founders. Model SAFEs, burn rate, equity splits, option pools, valuations, and more at every funding stage.",
    publisher: {
      "@type": "Organization",
      name: "ICanPitch",
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: calculators.map((calc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: calc.name,
      url: `https://learn.icanpitch.com/learn/${calc.slug}/`,
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema Markup */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <AuroraBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Free Startup Calculator Guides
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive startup calculator guides and resources for founders at every stage
            </p>
            <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto">
              Plan your fundraise, model SAFE conversions, calculate burn rate and runway, split equity fairly, and understand dilution — all with free interactive tools built for founders at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            Whether you are raising your first pre-seed round or preparing for a
            Series B, the financial decisions you make around equity, dilution,
            and runway will shape the future of your company. ICanPitch
            calculators give you the numbers you need to negotiate with
            confidence and plan with clarity.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Each calculator comes with an in-depth guide that walks you through
            the formulas, explains the trade-offs, and shows you real-world
            examples so you understand not just the &ldquo;what&rdquo; but the
            &ldquo;why.&rdquo; From SAFE conversions and convertible notes to
            option pool sizing and 409A valuations, every tool is designed for
            the decisions founders actually face.
          </p>
          <p className="text-lg text-gray-700">
            All calculators are free to use, require no sign-up, and work
            directly in your browser. Pick a guide below to get started.
          </p>
        </div>
      </section>

      {/* Calculators Section */}
      <main className="container mx-auto px-4 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculator Guides</h2>
            <p className="text-gray-600">Explore our comprehensive collection of startup calculator resources</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {calculators.map((calc) => (
              <Card key={calc.slug} className="hover:shadow-lg hover:border-blue-300 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">{calc.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{calc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="gradient" className="w-full" asChild>
                    <Link href={`/learn/${calc.slug}/`}>
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Browse by Topic */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Browse by Topic</h2>
            <p className="text-gray-600 mb-8">In-depth guide collections organized by startup finance topic</p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <Link href="/blog/safe-calculator-guides/" className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">SAFE Guides</h3>
                <p className="text-xs text-gray-500">Valuation caps, dilution, conversion</p>
              </Link>
              <Link href="/blog/burn-rate-guides/" className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Burn Rate & Runway</h3>
                <p className="text-xs text-gray-500">Cash management, benchmarks</p>
              </Link>
              <Link href="/blog/equity-guides/" className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Equity & Vesting</h3>
                <p className="text-xs text-gray-500">Splits, option pools, schedules</p>
              </Link>
              <Link href="/blog/exit-strategy-guides/" className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Exit & Pro-Rata</h3>
                <p className="text-xs text-gray-500">M&A, investor rights</p>
              </Link>
              <Link href="/blog/valuation-guides/" className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">Valuations</h3>
                <p className="text-xs text-gray-500">Pre/post money, 409A</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Built for Every Funding Stage
              </h3>
              <p className="text-gray-600 text-sm">
                From pre-seed through growth stage, every calculator adapts to
                your round size, investor terms, and company structure.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real-Time Scenario Modeling
              </h3>
              <p className="text-gray-600 text-sm">
                Adjust valuation caps, discount rates, and vesting schedules
                instantly. Compare outcomes side by side before you sign a term
                sheet.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert-Backed Formulas
              </h3>
              <p className="text-gray-600 text-sm">
                Every calculation is grounded in standard VC and legal
                practices. Our guides explain the methodology so you can verify
                the math yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest from the Blog */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Latest from the Blog</h2>
          <p className="text-gray-600 mb-8">In-depth guides on fundraising, equity, and startup finance</p>
          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/blog/safe-vs-convertible-note-2024-comparison/" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">SAFE vs Convertible Note: Complete Comparison</h3>
              <p className="text-sm text-gray-600">Understand the key differences between SAFEs and convertible notes for your next round.</p>
            </Link>
            <Link href="/blog/how-to-calculate-burn-rate-monthly-startup-costs/" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">How to Calculate Your Startup Burn Rate</h3>
              <p className="text-sm text-gray-600">A step-by-step guide to calculating monthly burn rate and extending your runway.</p>
            </Link>
            <Link href="/blog/founder-vesting-schedules-4-year-1-year-cliff/" className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Founder Vesting Schedules Explained</h3>
              <p className="text-sm text-gray-600">Everything you need to know about the standard 4-year vest with 1-year cliff.</p>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/blog/" className="text-blue-600 hover:text-blue-700 font-medium underline">View all articles →</Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to go deeper? Visit the{" "}
            <Link
              href="/blog/"
              className="text-blue-600 hover:text-purple-600 font-medium underline"
            >
              ICanPitch Blog
            </Link>{" "}
            for fundraising playbooks, cap-table walkthroughs, and founder
            stories that turn these numbers into strategy.
          </p>
        </div>
      </section>
    </div>
  );
}
