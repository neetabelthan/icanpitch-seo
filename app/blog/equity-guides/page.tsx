import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/aurora-background";
import Link from "next/link";
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "Equity, Vesting & Option Pool Guides for Founders | ICanPitch",
  description: "Guides on co-founder equity splits, option pool sizing, vesting schedules, and early employee equity. Free calculators included.",
  openGraph: {
    title: "Equity, Vesting & Option Pool Guides for Founders",
    description: "Guides on co-founder equity splits, option pool sizing, vesting schedules, and early employee equity. Free calculators included.",
    type: "website",
    url: "https://learn.icanpitch.com/blog/equity-guides/",
    siteName: "ICanPitch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equity, Vesting & Option Pool Guides for Founders",
    description: "Guides on co-founder equity splits, option pool sizing, vesting schedules, and early employee equity. Free calculators included.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/equity-guides/",
  },
};

export default function EquityGuidesHubPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Equity, Vesting & Option Pool Guides" },
  ];

  const posts = [
    {
      slug: "co-founder-equity-split-50-50-alternatives",
      title: "Co-Founder Equity Split: Why 50/50 Fails and Better Alternatives",
      description: "62% of 50/50 splits end in founder conflict within 3 years. Learn why equal equity splits fail, proven alternative models (60/40, 70/30), and decision frameworks for dividing founder equity fairly.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 18,
    },
    {
      slug: "early-employee-equity-calculator-guide",
      title: "Early Employee Equity Calculator: How Much to Offer Guide",
      description: "Complete guide to early employee equity allocation. Learn what equity to offer employees #1-5 (0.5-2%), #6-20 (0.1-0.5%), and #21+ with real benchmarks from Carta and AngelList.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 12,
    },
    {
      slug: "equity-split-technical-vs-business-cofounder",
      title: "Equity Split: Technical vs Business Co-Founder Guide",
      description: "How to fairly split equity between technical and business co-founders. Data shows technical co-founders average 5-10% more equity. Learn fair splits, valuation methods, and how to avoid co-founder resentment.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 12,
    },
    {
      slug: "founder-vesting-schedules-4-year-1-year-cliff",
      title: "Founder Vesting Schedules: 4-Year 1-Year Cliff Explained",
      description: "92% of funded startups require founder vesting. Learn why the 4-year schedule with 1-year cliff matters and how to protect your equity.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 11,
    },
    {
      slug: "option-pool-dilution-impact-founders",
      title: "Option Pool Dilution Impact on Founders: Complete Guide",
      description: "15% option pool equals 12-13 points of founder dilution. Learn the math of option pool dilution, pre-money vs post-money structures, and negotiation tactics to minimize founder dilution.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 15,
    },
    {
      slug: "option-pool-sizing-pre-seed-seed-series-a",
      title: "Option Pool Sizing: Pre-Seed, Seed, and Series A Guide",
      description: "Standard option pools: 10% pre-seed, 15% seed, 15-20% Series A. Learn how to size your option pool, who it dilutes, refresh mechanics, and benchmarks by funding stage.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 16,
    },
    {
      slug: "vesting-acceleration-clauses-explained",
      title: "Vesting Acceleration Clauses: Single vs Double Trigger Explained",
      description: "Complete guide to vesting acceleration clauses in M&A and acquisitions. 85% of acquisitions include double-trigger acceleration. Learn single trigger vs double trigger, when acceleration happens, and negotiation tactics.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 12,
    },
    {
      slug: "avoiding-safe-dilution-traps-founders",
      title: "Avoiding SAFE Dilution Traps: 7 Mistakes Founders Make",
      description: "First-time founders underestimate SAFE dilution by 12-18 percentage points. Learn the 7 deadly SAFE sins and how to protect your ownership when raising capital.",
      date: "January 16, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 12,
    },
    {
      slug: "how-to-negotiate-safe-valuation-cap",
      title: "How to Negotiate SAFE Valuation Caps: 2025 Founder's Guide",
      description: "Master SAFE valuation cap negotiations with data-backed benchmarks, proven frameworks, and real scenarios. Includes geographic caps and the 30-40% Rule.",
      date: "January 16, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 11,
    },
    {
      slug: "how-to-calculate-pre-money-valuation-series-a",
      title: "How to Calculate Pre-Money Valuation for Series A",
      description: "Complete guide to calculating pre-money valuation for your Series A funding round. Learn the methods, formulas, and factors investors consider.",
      date: "January 14, 2025",
      categories: ["Fundraising", "Series A"],
      readingTime: 12,
    },
    {
      slug: "how-to-calculate-safe-dilution",
      title: "How to Calculate SAFE Dilution: A Founder's Guide",
      description: "Learn how to calculate dilution from SAFE notes and understand the impact on your founder ownership. Includes examples and best practices for early-stage fundraising.",
      date: "January 14, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 8,
    },
    {
      slug: "understanding-pro-rata-rights-startup-investing",
      title: "Understanding Pro-Rata Rights in Startup Investing: A Complete Guide",
      description: "Learn everything about pro-rata rights in startup investing, how they work, why they matter for founders and investors, and how to calculate pro-rata allocation in future funding rounds.",
      date: "January 14, 2025",
      categories: ["Fundraising", "Investors"],
      readingTime: 10,
    },
    {
      slug: "option-pool-calculator-singapore",
      title: "Singapore Option Pool Calculator: APAC ESOP Standards & Tax Guide (2025)",
      description: "Calculate option pools for Singapore startups. Understand APAC equity norms (10-15%), IRAS tax implications, and employee stock option schemes. Free calculator + templates.",
      date: "November 5, 2024",
      categories: ["Fundraising", "Employee Equity"],
      readingTime: 11,
    },
    {
      slug: "option-pool-calculator-silicon-valley",
      title: "Silicon Valley Option Pool Calculator: Pre-Money vs Post-Money ESOP Guide (2025)",
      description: "Calculate your Silicon Valley startup's option pool with precision. Understand pre vs post-money allocation, dilution mechanics, and SF standards (15-20% at Series A). Free calculator + templates.",
      date: "November 3, 2024",
      categories: ["Fundraising", "Employee Equity"],
      readingTime: 11,
    },
    {
      slug: "option-pool-calculator-new-york",
      title: "NYC Option Pool Calculator: East Coast Startup Equity Standards (2025)",
      description: "Calculate option pools for NYC startups. Learn East Coast equity benchmarks (16-20%), employee grant standards, and how New York option pools differ from Silicon Valley. Free calculator.",
      date: "November 1, 2024",
      categories: ["Fundraising", "Employee Equity"],
      readingTime: 11,
    },
    {
      slug: "option-pool-calculator-london",
      title: "London Option Pool Calculator: UK ESOP & EMI Scheme Guide (2025)",
      description: "Calculate UK startup option pools with EMI tax advantages. Understand London standards (10-15%), HMRC compliance, and valuation requirements. Free calculator + EMI templates.",
      date: "October 30, 2024",
      categories: ["Fundraising", "Employee Equity"],
      readingTime: 11,
    },
    {
      slug: "option-pool-calculator-berlin",
      title: "Berlin Option Pool Calculator: German ESOP vs VSOP Guide (2025)",
      description: "Calculate option pools for German startups. Compare ESOP vs VSOP structures, understand Berlin equity norms (12-18%), and navigate German legal requirements. Free calculator.",
      date: "October 28, 2024",
      categories: ["Fundraising", "Employee Equity"],
      readingTime: 11,
    }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
          <AuroraBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Equity, Vesting & Option Pool Guides
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Guides on co-founder equity splits, option pool sizing, vesting schedules, and early employee equity. Free calculators included.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Equity decisions made at the start of a company ripple through every future round, hire, and exit event. From splitting equity between co-founders to sizing an option pool that attracts top talent without destroying founder ownership, these guides cover the frameworks, formulas, and negotiation tactics you need. Each one links to our free equity, vesting, or option pool calculator so you can model the scenarios that matter to your startup.
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">17 Articles</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Card
                    key={post.slug}
                    className="bg-white border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex flex-col group"
                  >
                    <CardHeader className="flex-grow">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        {post.categories.map(cat => (
                          <Badge key={cat} className="bg-blue-50 text-blue-700 border-0 text-xs font-medium">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600 mb-4">
                        {post.description}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <time>{post.date}</time>
                        <span>&bull;</span>
                        <span>{post.readingTime} min read</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-5">
                      <Link
                        href={`/blog/${post.slug}/`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Read Article
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Split Equity Fairly
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Use our framework to calculate fair co-founder equity splits based on contributions and commitment.
              </p>
              <a
                href="https://icanpitch.com/co-founder-equity-split-calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all"
              >
                Open Equity Split Calculator &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Other Guides */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-gray-600 mb-3">Explore more guides</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/blog/safe-calculator-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">SAFE Calculator Guides</Link>
              <Link href="/blog/burn-rate-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">Burn Rate & Runway Guides</Link>
              <Link href="/blog/exit-strategy-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">Exit & Pro-Rata Guides</Link>
              <Link href="/blog/valuation-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">Startup Valuation Guides</Link>
              <Link href="/blog/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">All Articles</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
