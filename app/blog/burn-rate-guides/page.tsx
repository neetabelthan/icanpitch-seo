import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/aurora-background";
import Link from "next/link";
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "Burn Rate & Runway Guides: Cash Management for Startups | ICanPitch",
  description: "Learn how to calculate burn rate, extend runway, and benchmark spending by city and stage. Free burn rate calculator guides for startup founders.",
  openGraph: {
    title: "Burn Rate & Runway Guides: Cash Management for Startups",
    description: "Learn how to calculate burn rate, extend runway, and benchmark spending by city and stage. Free burn rate calculator guides for startup founders.",
    type: "website",
    url: "https://learn.icanpitch.com/blog/burn-rate-guides/",
    siteName: "ICanPitch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burn Rate & Runway Guides: Cash Management for Startups",
    description: "Learn how to calculate burn rate, extend runway, and benchmark spending by city and stage. Free burn rate calculator guides for startup founders.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/burn-rate-guides/",
  },
};

export default function BurnRateGuidesHubPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Burn Rate & Runway Guides" },
  ];

  const posts = [
    {
      slug: "burn-rate-benchmarks-by-industry-stage",
      title: "Burn Rate Benchmarks by Industry and Stage: 2025 Data",
      description: "Compare your startup's burn rate against 2025 industry benchmarks. Comprehensive data for SaaS, fintech, ecommerce, biotech, and hardware across pre-seed to Series B stages.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 14,
    },
    {
      slug: "burn-rate-calculator-new-york-city-startup-costs",
      title: "Burn Rate Calculator for NYC Startups: New York Cost Guide 2025",
      description: "NYC startup costs run 25-35% higher than national average. Complete breakdown of engineering salaries, office space, operations costs, and burn rate benchmarks for New York founders.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 13,
    },
    {
      slug: "burn-rate-calculator-san-francisco-vs-austin",
      title: "Burn Rate Calculator: San Francisco vs Austin Cost Comparison 2025",
      description: "SF burn rates run 45-60% higher than Austin for equivalent teams. Complete cost comparison of salaries, office space, taxes, and operations to choose the right startup location.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 14,
    },
    {
      slug: "cash-runway-calculator-extend-startup-survival",
      title: "Cash Runway Calculator: How to Extend Your Startup's Survival",
      description: "Calculate your startup's runway and learn proven strategies to extend it. Discover when to fundraise, how to cut costs strategically, and avoid the 68% of startups that fail from running out of cash.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 12,
    },
    {
      slug: "gross-burn-vs-net-burn-rate-explained",
      title: "Gross Burn vs Net Burn Rate: Complete Guide for Founders",
      description: "73% of first-time founders confuse gross and net burn. Learn the critical differences, formulas, and when each metric matters to investors.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 10,
    },
    {
      slug: "how-to-calculate-burn-rate-monthly-startup-costs",
      title: "How to Calculate Burn Rate: Monthly Startup Costs Guide 2025",
      description: "Master burn rate calculation with our step-by-step guide. Learn the formula, what expenses to include, industry benchmarks, and how to track your startup's monthly cash consumption.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 12,
    },
    {
      slug: "reducing-burn-rate-without-killing-growth",
      title: "Reducing Burn Rate Without Killing Growth: 2025 Playbook",
      description: "Learn how top-quartile startups reduce burn rate by 30-40% while maintaining 80%+ growth. Proven strategies and real founder case studies.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 12,
    },
    {
      slug: "series-a-burn-rate-runway-management",
      title: "Series A Burn Rate and Runway Management: Complete Guide",
      description: "Median Series A burn: $250K/month with 18-24 month runway targets. Learn burn multiples, efficiency metrics, and when to raise Series B.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 14,
    },
    {
      slug: "pre-seed-burn-rate-benchmarks-2025",
      title: "Pre-Seed Burn Rate 2025: $15K-$50K/Month Benchmarks by Industry",
      description: "Is your burn rate too high? See exact pre-seed burn rate benchmarks for 2025. SaaS: $20-35K/mo, Hardware: $40-50K/mo. Free calculator + runway templates inside.",
      date: "January 14, 2025",
      categories: ["Fundraising", "Benchmarks"],
      readingTime: 12,
    },
    {
      slug: "series-a-burn-rate-benchmarks-2025",
      title: "Series A Burn Rate Benchmarks 2025: Efficiency Metrics and Growth Scaling",
      description: "Comprehensive Series A burn rate benchmarks for 2025. Understand burn multiples, efficiency metrics, team scaling, and when to raise Series B.",
      date: "January 11, 2025",
      categories: ["Fundraising", "Benchmarks"],
      readingTime: 12,
    },
    {
      slug: "seed-burn-rate-benchmarks-2025",
      title: "Seed Stage Burn Rate Benchmarks 2025: Scaling from Pre-Seed to PMF",
      description: "Complete seed stage burn rate benchmarks for 2025. Learn how to scale your team, invest in go-to-market, and manage burn while pursuing product-market fit.",
      date: "January 7, 2025",
      categories: ["Fundraising", "Benchmarks"],
      readingTime: 12,
    },
    {
      slug: "burn-rate-calculator-toronto",
      title: "Burn Rate Calculator for Toronto Startups: Master Your Runway in Canada's Tech Hub",
      description: "Calculate your Toronto startup's burn rate with precision. Navigate CAD costs, SR&ED credits, and Canadian runway planning. Free calculator + local insights.",
      date: "October 15, 2024",
      categories: ["Fundraising", "Operations"],
      readingTime: 11,
    },
    {
      slug: "burn-rate-calculator-tel-aviv",
      title: "Burn Rate Calculator for Tel Aviv Startups: 2025 Israel Guide",
      description: "Tel Aviv startups rank #4 globally with 30-40% lower burn than Silicon Valley. Calculate your burn rate with Israel-specific costs, grants, and Unit 8200 talent benchmarks.",
      date: "October 13, 2024",
      categories: ["Fundraising", "Operations"],
      readingTime: 11,
    },
    {
      slug: "burn-rate-calculator-stockholm",
      title: "Stockholm Burn Rate Calculator: Master Your Runway in Sweden's Tech Capital",
      description: "Calculate and optimize burn rate for Stockholm startups. Navigate SEK costs, Nordic talent expenses, and runway planning in Sweden's thriving tech ecosystem.",
      date: "October 11, 2024",
      categories: ["Financial Planning", "Stockholm", "Burn Rate"],
      readingTime: 12,
    },
    {
      slug: "burn-rate-calculator-seattle",
      title: "Burn Rate Calculator for Seattle Startups: Track Your Runway in 2025",
      description: "Calculate your Seattle startup's burn rate with city-specific benchmarks. Compare costs to SF Bay Area, optimize runway, and master cash flow management for Pacific Northwest tech companies.",
      date: "October 9, 2024",
      categories: ["Fundraising", "Operations"],
      readingTime: 11,
    },
    {
      slug: "burn-rate-calculator-paris",
      title: "Burn Rate Calculator for Paris Startups: Master Runway in Europe's Tech Capital",
      description: "Calculate your Paris startup's burn rate with precision. Navigate French labor laws, CIR/JEI tax credits, and EUR costs. Free calculator + Station F insights.",
      date: "October 7, 2024",
      categories: ["Fundraising", "Operations"],
      readingTime: 11,
    },
    {
      slug: "burn-rate-calculator-miami",
      title: "Miami Burn Rate Calculator: Track Your Startup Runway in South Florida's Tech Hub",
      description: "Calculate your Miami startup's burn rate and runway. Compare costs vs SF (35-40% lower) and NYC (20-25% lower). Leverage Florida tax advantages and Latin America market access.",
      date: "October 5, 2024",
      categories: ["Financial Planning", "Miami Startups"],
      readingTime: 12,
    },
    {
      slug: "burn-rate-calculator-los-angeles",
      title: "Burn Rate Calculator for Los Angeles Startups: 2025 Cost Guide",
      description: "LA startups burn 15-25% less than SF with unique entertainment tech advantage. Calculate your LA burn rate with Silicon Beach costs and creator economy insights.",
      date: "October 3, 2024",
      categories: ["Fundraising", "Operations"],
      readingTime: 11,
    },
    {
      slug: "burn-rate-calculator-london",
      title: "Burn Rate Calculator for London Startups: 2025 Cost Guide",
      description: "London startups burn 45-60% more than UK averages. Calculate your London burn rate with city-specific salary benchmarks, office costs, and runway projections.",
      date: "October 1, 2024",
      categories: ["Fundraising", "Operations"],
      readingTime: 12,
    },
    {
      slug: "burn-rate-calculator-hong-kong",
      title: "Hong Kong Burn Rate Calculator: HKD Runway Guide for Fintech & APAC Startups (2025)",
      description: "Calculate your Hong Kong startup's burn rate in HKD with our comprehensive guide. Includes Cyberport funding insights, HKSTP benchmarks, and how Hong Kong compares to Singapore and Shenzhen for APAC expansion.",
      date: "September 29, 2024",
      categories: ["Burn Rate", "Hong Kong", "APAC Startups"],
      readingTime: 12,
    },
    {
      slug: "burn-rate-calculator-dublin",
      title: "Dublin Burn Rate Calculator: Track Your Startup's Monthly Cash Flow in EUR",
      description: "Calculate your Dublin startup's burn rate with Irish labor costs, R&D tax credits, and Silicon Docks benchmarks. Compare to London and Berlin tech hubs.",
      date: "September 27, 2024",
      categories: ["Financial Planning", "Dublin Startups"],
      readingTime: 12,
    },
    {
      slug: "burn-rate-calculator-denver",
      title: "Denver Burn Rate Calculator: Track Your Startup's Cash Runway in Colorado's Tech Hub",
      description: "Calculate your Denver startup's burn rate and runway with city-specific costs. Engineer salaries $100K-$160K, 45-55% lower than SF. Essential for software, outdoor tech, and cannabis startups.",
      date: "September 24, 2024",
      categories: ["Financial Planning", "Denver Startups"],
      readingTime: 12,
    },
    {
      slug: "burn-rate-calculator-chicago",
      title: "Chicago Burn Rate Calculator: Track Startup Runway in the Midwest Tech Hub",
      description: "Calculate your Chicago startup's burn rate and runway. Compare costs vs SF (40-50% lower) and NYC (25-30% lower). Essential for fintech, healthcare tech, and logistics founders.",
      date: "September 22, 2024",
      categories: ["Fundraising", "Operations"],
      readingTime: 12,
    },
    {
      slug: "burn-rate-calculator-boston",
      title: "Burn Rate Calculator for Boston Startups: 2025 Cost Guide",
      description: "Boston startups burn 25-35% less than San Francisco with comparable ecosystem quality. Calculate your Boston burn rate with MIT/Harvard talent costs and Cambridge office rates.",
      date: "September 20, 2024",
      categories: ["Fundraising", "Operations"],
      readingTime: 11,
    },
    {
      slug: "burn-rate-calculator-berlin",
      title: "Burn Rate Calculator for Berlin Startups: 2025 Cost Guide",
      description: "Berlin startups burn 30-40% less than London. Calculate your Berlin burn rate with city-specific salary benchmarks, Kreuzberg office costs, and runway projections.",
      date: "September 18, 2024",
      categories: ["Fundraising", "Operations"],
      readingTime: 11,
    },
    {
      slug: "burn-rate-calculator-barcelona",
      title: "Barcelona Burn Rate Calculator: Master Cash Runway for Spanish Startups",
      description: "Calculate burn rate for Barcelona startups. EUR-based calculator with Spanish labor costs, runway planning, and benchmarks vs Madrid, Berlin, London. 30-40% lower costs than major EU hubs.",
      date: "September 16, 2024",
      categories: ["Financial Planning", "Barcelona Startups"],
      readingTime: 12,
    },
    {
      slug: "burn-rate-calculator-amsterdam",
      title: "Amsterdam Burn Rate Calculator: Master Your Startup Cash Runway in Europe's Tech Hub",
      description: "Calculate and optimize your Amsterdam startup's burn rate with our comprehensive guide. Learn EUR management, 30% ruling benefits, and how Amsterdam costs compare to Berlin, London, and Paris.",
      date: "September 14, 2024",
      categories: ["Financial Planning", "Amsterdam Startups", "European Tech"],
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
                Burn Rate & Runway Guides
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Learn how to calculate burn rate, extend runway, and benchmark spending by city and stage. Free burn rate calculator guides for startup founders.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Cash is the oxygen of a startup. Understanding your burn rate and runway is the difference between raising your next round from a position of strength or scrambling to survive. These guides cover burn rate formulas, city-by-city cost benchmarks, stage-specific spending targets, and proven strategies to extend your runway without sacrificing growth. Each article connects to our free burn rate calculator so you can model your own numbers.
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">27 Articles</h2>
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
                Calculate Your Burn Rate & Runway
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Enter your expenses and cash balance to see your runway in months. Plan your next fundraise.
              </p>
              <a
                href="https://icanpitch.com/burn-rate-runway-calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all"
              >
                Open Burn Rate Calculator &rarr;
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
              <Link href="/blog/equity-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">Equity, Vesting & Option Pool Guides</Link>
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
