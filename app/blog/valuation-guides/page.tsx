import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/aurora-background";
import Link from "next/link";
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "Startup Valuation Guides: Pre-Money, Post-Money & 409A | ICanPitch",
  description: "Understand pre-money and post-money valuation, 409A requirements, and stage-specific benchmarks. Free valuation calculators for founders.",
  openGraph: {
    title: "Startup Valuation Guides: Pre-Money, Post-Money & 409A",
    description: "Understand pre-money and post-money valuation, 409A requirements, and stage-specific benchmarks. Free valuation calculators for founders.",
    type: "website",
    url: "https://learn.icanpitch.com/blog/valuation-guides/",
    siteName: "ICanPitch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Valuation Guides: Pre-Money, Post-Money & 409A",
    description: "Understand pre-money and post-money valuation, 409A requirements, and stage-specific benchmarks. Free valuation calculators for founders.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/valuation-guides/",
  },
};

export default function ValuationGuidesHubPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Startup Valuation Guides" },
  ];

  const posts = [
    {
      slug: "seed-valuation-benchmarks-2025",
      title: "Seed Valuation 2025: $8M-$15M Post-Money Caps (by Sector)",
      description: "What's a fair seed valuation in 2025? SaaS: $10-15M, Consumer: $8-12M. See investor expectations, ARR requirements, and negotiate better terms. Data from 500+ rounds.",
      date: "January 19, 2025",
      categories: ["Fundraising", "Benchmarks"],
      readingTime: 11,
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
      slug: "post-money-safe-vs-pre-money-safe-2025",
      title: "Post-Money SAFE vs Pre-Money SAFE: Complete 2025 Comparison",
      description: "Understand the critical differences between post-money and pre-money SAFEs. Learn why 87% of startups use post-money SAFEs, how dilution calculations differ, and which format protects founder equity.",
      date: "January 16, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 15,
    },
    {
      slug: "safe-calculator-new-york-startup-scene",
      title: "SAFE Calculator for New York Startups: NYC Founder's Guide to SAFE Notes",
      description: "NYC-specific SAFE calculator guide for fintech, ecommerce, and media founders. Learn how New York SAFE caps ($8M-$15M) compare to SF and national averages, plus East Coast investor expectations and geographic arbitrage strategies.",
      date: "January 16, 2025",
      categories: ["Fundraising", "SAFE", "NYC Startups"],
      readingTime: 10,
    },
    {
      slug: "safe-calculator-silicon-valley-founders-guide",
      title: "SAFE Calculator for Silicon Valley Founders: Bay Area Guide",
      description: "Silicon Valley SAFE caps average 40-50% higher than national median. Learn Bay Area-specific SAFE benchmarks, why SF valuations exceed national averages, and how to calculate dilution with regional context.",
      date: "January 16, 2025",
      categories: ["Fundraising", "SAFE", "Regional"],
      readingTime: 10,
    },
    {
      slug: "safe-discount-rate-vs-valuation-cap-which-better",
      title: "SAFE Discount Rate vs Valuation Cap: Which Matters More?",
      description: "82% of SAFEs trigger the cap, not the discount. Learn the math behind which SAFE term actually protects investors and what founders should negotiate.",
      date: "January 16, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 10,
    },
    {
      slug: "safe-notes-multiple-safes-stacking-guide",
      title: "Multiple SAFEs and SAFE Stacking: Complete Founder's Guide (2025)",
      description: "Learn how to raise multiple SAFE rounds without destroying your cap table. Complete guide to SAFE stacking, cumulative dilution calculations, and when to switch to a priced round.",
      date: "January 16, 2025",
      categories: ["Fundraising", "SAFEs", "Cap Table"],
      readingTime: 11,
    },
    {
      slug: "post-money-safe-vs-pre-money-safe-explained",
      title: "Post-Money SAFE vs Pre-Money SAFE: Complete 2025 Comparison",
      description: "Learn the critical differences between post-money and pre-money SAFEs. Understand which protects founders better, how dilution calculations work, and why 94% of startups now use post-money SAFEs.",
      date: "January 15, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 12,
    },
    {
      slug: "safe-calculator-first-time-founders-complete-guide",
      title: "SAFE Calculator for First-Time Founders: Complete 2025 Guide",
      description: "Learn how to use a SAFE calculator as a first-time founder. Understand SAFE note mechanics, valuation caps, discount rates, and how to calculate dilution to maximize your equity ownership.",
      date: "January 15, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 10,
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
      slug: "series-a-valuation-benchmarks-2025",
      title: "Series A Valuation Benchmarks 2025: ARR Requirements and Valuation Multiples by Sector",
      description: "Complete Series A valuation guide for 2025. Learn pre-money valuation ranges, ARR requirements, revenue multiples, and what top VCs expect.",
      date: "January 13, 2025",
      categories: ["Fundraising", "Benchmarks"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-toronto",
      title: "SAFE Calculator for Toronto Startups: Navigate Canadian Convertible Financing",
      description: "Calculate SAFE dilution for Toronto startups. Understand Canadian SAFE market norms, cross-border fundraising, and valuation benchmarks. Free calculator.",
      date: "January 5, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-stockholm",
      title: "Stockholm SAFE Calculator: Navigate Nordic Valuations & SAFE Agreements",
      description: "Calculate SAFE terms for Stockholm startups. Understand Nordic VC expectations, Swedish valuation benchmarks, and how Spotify/Klarna success shapes investor terms.",
      date: "January 3, 2025",
      categories: ["Fundraising", "Stockholm", "SAFE"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-singapore",
      title: "SAFE Calculator for Singapore Startups: 2025 Valuation Guide",
      description: "Singapore SAFE valuations average 20-30% lower than US equivalents. Calculate your SAFE dilution with APAC-specific benchmarks and investor expectations.",
      date: "December 31, 2024",
      categories: ["Fundraising", "SAFE"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-seattle",
      title: "SAFE Calculator for Seattle Startups: 2025 Valuation Guide",
      description: "Seattle SAFE caps average 20-30% lower than SF with strong enterprise focus. Calculate SAFE dilution with Pacific Northwest-specific benchmarks.",
      date: "December 29, 2024",
      categories: ["Fundraising", "SAFE"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-paris",
      title: "SAFE Calculator for Paris Startups: Navigate French Convertible Financing",
      description: "Calculate SAFE dilution for Paris startups. Understand French vs US SAFE differences, European VC expectations, and valuation benchmarks. Free calculator.",
      date: "December 27, 2024",
      categories: ["Fundraising", "SAFE"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-miami",
      title: "Miami SAFE Calculator: Navigate SAFE Financing in South Florida's Crypto & Web3 Capital",
      description: "Calculate SAFE dilution for Miami startups. Pre-seed $4M-$7M, Seed $8M-$13M benchmarks. Crypto/Web3 focus, Latin America expansion, and local VC landscape insights.",
      date: "December 25, 2024",
      categories: ["Fundraising", "Miami Startups"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-los-angeles",
      title: "SAFE Calculator for Los Angeles Startups: LA Valuation Benchmarks & Terms",
      description: "SAFE calculator for LA startups. Compare LA vs SF valuation caps, Hollywood entertainment SAFE terms, Venice Beach startup benchmarks. MuckerLab & Idealab guidance.",
      date: "December 23, 2024",
      categories: ["Fundraising", "SAFE"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-hong-kong",
      title: "Hong Kong SAFE Calculator: APAC Valuation Guide for Cross-Border Fundraising (2025)",
      description: "Calculate your Hong Kong startup's SAFE agreement with our comprehensive HKD guide. Includes APAC valuation benchmarks, cross-border China investment insights, and how Hong Kong fintech regulations impact your cap table.",
      date: "December 21, 2024",
      categories: ["SAFE", "Hong Kong", "APAC Fundraising"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-healthcare-tech-boston",
      title: "Healthcare Tech SAFE Calculator Boston: Biotech & Digital Health Valuation Benchmarks with FDA Pathway Impact",
      description: "Boston healthcare tech founders: Calculate your SAFE with regulatory pathway considerations. Learn how FDA clearance, clinical trials, and reimbursement impact digital health and biotech valuations.",
      date: "December 19, 2024",
      categories: ["Fundraising", "Industry Analysis"],
      readingTime: 12,
    },
    {
      slug: "safe-calculator-fintech-new-york",
      title: "Fintech SAFE Calculator for New York Startups: Valuation Benchmarks & Investor Expectations",
      description: "NYC fintech founders: Calculate your SAFE with industry-specific benchmarks. Learn why fintech valuations command 22% premiums and how regulatory complexity impacts your cap table.",
      date: "December 17, 2024",
      categories: ["Fundraising", "Industry Analysis"],
      readingTime: 12,
    },
    {
      slug: "safe-calculator-ecommerce-los-angeles",
      title: "E-commerce SAFE Calculator Los Angeles: DTC Brand Valuations Post-iOS14 with Revenue Multiple Benchmarks",
      description: "LA e-commerce founders: Calculate your SAFE with DTC-specific benchmarks. Learn how revenue multiples, CAC payback, and iOS14 attribution challenges impact consumer brand valuations.",
      date: "December 15, 2024",
      categories: ["Fundraising", "Industry Analysis"],
      readingTime: 12,
    },
    {
      slug: "safe-calculator-dublin",
      title: "Dublin SAFE Calculator: Model Your Startup Valuation and Dilution in EUR",
      description: "Calculate SAFE conversions for Dublin startups with Irish valuation benchmarks, Enterprise Ireland co-investment terms, and UK/European funding scenarios.",
      date: "December 13, 2024",
      categories: ["Fundraising", "Dublin Startups"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-denver",
      title: "Denver SAFE Calculator: Navigate Startup Valuations in Colorado's Growing Tech Ecosystem",
      description: "Calculate SAFE valuations for Denver startups with local benchmarks. Pre-seed $3M-$5.5M, Seed $7M-$11M. Understand Colorado's emerging VC market and outdoor tech strengths.",
      date: "December 11, 2024",
      categories: ["Fundraising", "Denver Startups"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-crypto-web3-miami",
      title: "Crypto/Web3 SAFE Calculator Miami: Token vs Equity Considerations & Crypto-Native Investor Expectations",
      description: "Miami crypto/Web3 founders: Calculate your SAFE with crypto-specific benchmarks. Learn how token economics, regulatory uncertainty, and crypto-native investors impact valuations in 2025.",
      date: "December 9, 2024",
      categories: ["Fundraising", "Industry Analysis"],
      readingTime: 12,
    },
    {
      slug: "safe-calculator-consumer-tech-silicon-valley",
      title: "Consumer Tech SAFE Calculator Silicon Valley: Post-iOS14 Valuation Benchmarks for Social & Mobile Apps",
      description: "Silicon Valley consumer tech founders: Calculate your SAFE with post-iOS14 benchmarks. Learn how DAU, engagement, and attribution challenges impact valuations in 2025.",
      date: "December 6, 2024",
      categories: ["Fundraising", "Industry Analysis"],
      readingTime: 12,
    },
    {
      slug: "safe-calculator-climate-tech-san-francisco",
      title: "Climate Tech SAFE Calculator San Francisco: Cleantech Valuations with IRA Impact & Hardware vs Software Dynamics",
      description: "SF climate tech founders: Calculate your SAFE with cleantech-specific benchmarks. Learn how IRA incentives, hardware vs software positioning, and climate investors impact valuations in 2025.",
      date: "December 4, 2024",
      categories: ["Fundraising", "Industry Analysis"],
      readingTime: 12,
    },
    {
      slug: "safe-calculator-chicago",
      title: "Chicago SAFE Calculator: Navigate Midwest Valuations and Investor Expectations",
      description: "Calculate SAFE terms for Chicago startups. Pre-seed caps $3.5M-$6M, Seed $8M-$12M. Understand Midwest valuation benchmarks 30-35% below SF. Built for fintech and healthcare founders.",
      date: "December 2, 2024",
      categories: ["Fundraising", "SAFE"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-barcelona",
      title: "Barcelona SAFE Calculator: Navigate Startup Valuations in Spain's Tech Hub",
      description: "SAFE calculator for Barcelona startups. Calculate dilution with Spanish market valuations (€2M-€9M), understand CDTI grants, European cross-border funding, and Barcelona Tech City ecosystem.",
      date: "November 30, 2024",
      categories: ["Fundraising", "Barcelona Startups"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-bangalore",
      title: "SAFE Calculator for Bangalore Startups: 2025 India Guide",
      description: "Bangalore SAFE caps average 40-60% lower than US with 3-4x capital efficiency. Calculate your SAFE dilution with India-specific benchmarks and investor expectations.",
      date: "November 28, 2024",
      categories: ["Fundraising", "SAFE"],
      readingTime: 12,
    },
    {
      slug: "safe-calculator-b2b-saas-london",
      title: "B2B SaaS SAFE Calculator for London Startups: UK Valuation Benchmarks vs US Comparables",
      description: "London B2B SaaS founders: Calculate your SAFE with UK-specific benchmarks. Learn why London ARR multiples run 20% below US and how to navigate European enterprise buyers.",
      date: "November 26, 2024",
      categories: ["Fundraising", "Industry Analysis"],
      readingTime: 12,
    },
    {
      slug: "safe-calculator-amsterdam",
      title: "Amsterdam SAFE Calculator: Navigate Cross-Border Fundraising and Dutch Valuations",
      description: "Calculate SAFE conversions for Amsterdam startups raising from EU and US investors. Master valuation caps, discounts, Innovation Box tax benefits, and Dutch legal considerations.",
      date: "November 24, 2024",
      categories: ["Fundraising", "Amsterdam Startups", "European VC"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-ai-ml-silicon-valley",
      title: "AI/ML SAFE Calculator Silicon Valley: 2025 Valuation Benchmarks for Foundation Models vs Application Layer",
      description: "Silicon Valley AI/ML founders: Calculate your SAFE with 2025 AI-specific benchmarks. Learn how technical talent, compute costs, and foundation vs application layer positioning impact valuations.",
      date: "November 22, 2024",
      categories: ["Fundraising", "Industry Analysis"],
      readingTime: 12,
    },
    {
      slug: "pre-seed-valuation-benchmarks-2025",
      title: "Pre-Seed Valuation Benchmarks 2025: SAFE Caps and Investor Expectations",
      description: "Comprehensive pre-seed valuation benchmarks for 2025. SAFE cap ranges by geography, traction requirements, and what investors expect at the earliest stage.",
      date: "November 9, 2024",
      categories: ["Fundraising", "Benchmarks"],
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
      slug: "exit-calculator-singapore",
      title: "Singapore Exit Calculator: APAC Startup Valuation & Cross-Border M&A 2025",
      description: "Calculate your Singapore startup exit value with APAC market multiples, model cross-border Asian M&A scenarios, and understand Singapore's role as Southeast Asia's tech hub for regional exits.",
      date: "October 26, 2024",
      categories: ["Fundraising", "Exit Strategy"],
      readingTime: 12,
    },
    {
      slug: "exit-calculator-silicon-valley",
      title: "Silicon Valley Exit Calculator: Startup Valuation & M&A Multiples 2025",
      description: "Calculate your Silicon Valley startup exit value with real SaaS (10-15x ARR), consumer tech (2-4x), and AI exit multiples. Model IPO vs M&A scenarios with valley-specific benchmarks.",
      date: "October 24, 2024",
      categories: ["Fundraising", "Exit Strategy"],
      readingTime: 12,
    },
    {
      slug: "exit-calculator-new-york",
      title: "NYC Exit Calculator: New York Startup Exit Valuations & Fintech M&A 2025",
      description: "Calculate your NYC startup exit value with fintech (8-12x ARR), e-commerce (1-3x revenue), and media tech multiples. Model strategic vs financial buyer scenarios with New York market benchmarks.",
      date: "October 22, 2024",
      categories: ["Fundraising", "Exit Strategy"],
      readingTime: 12,
    },
    {
      slug: "exit-calculator-london",
      title: "London Exit Calculator: UK Startup Valuation & Brexit Impact on M&A 2025",
      description: "Calculate your London startup exit value with UK market multiples, Brexit valuation adjustments, and GBP/USD currency considerations. Model cross-border vs domestic acquirer scenarios.",
      date: "October 19, 2024",
      categories: ["Fundraising", "Exit Strategy"],
      readingTime: 12,
    },
    {
      slug: "exit-calculator-berlin",
      title: "Berlin Exit Calculator: German Startup Valuation & European M&A 2025",
      description: "Calculate your Berlin startup exit value with German/EU market multiples (EUR-denominated), compare valuations vs US exits, and model strategic acquirer scenarios for European tech companies.",
      date: "October 17, 2024",
      categories: ["Fundraising", "Exit Strategy"],
      readingTime: 12,
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
                Startup Valuation Guides
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Understand pre-money and post-money valuation, 409A requirements, and stage-specific benchmarks. Free valuation calculators for founders.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Valuation is the number that governs every fundraising negotiation. Understanding the difference between pre-money and post-money, knowing what your 409A valuation means for option grants, and benchmarking your valuation against stage-appropriate comparables gives you the confidence to negotiate from data rather than guesswork. These guides cover the formulas, the benchmarks, and the tax implications. Each one connects to our free valuation calculator.
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">40 Articles</h2>
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
                Understand Your Valuation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                See how pre-money valuation, investment amount, and post-money relate to ownership percentages.
              </p>
              <a
                href="https://icanpitch.com/pre-post-money-valuation-calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all"
              >
                Open Valuation Calculator &rarr;
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
              <Link href="/blog/equity-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">Equity, Vesting & Option Pool Guides</Link>
              <Link href="/blog/exit-strategy-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">Exit & Pro-Rata Guides</Link>
              <Link href="/blog/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">All Articles</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
