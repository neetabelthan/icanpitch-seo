import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/aurora-background";
import Link from "next/link";
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "Exit & Pro-Rata Guides: M&A, IPO & Investor Rights | ICanPitch",
  description: "Model startup exit scenarios, understand liquidation preferences, and plan investor pro-rata participation. Free exit and pro-rata calculators.",
  openGraph: {
    title: "Exit & Pro-Rata Guides: M&A, IPO & Investor Rights",
    description: "Model startup exit scenarios, understand liquidation preferences, and plan investor pro-rata participation. Free exit and pro-rata calculators.",
    type: "website",
    url: "https://learn.icanpitch.com/blog/exit-strategy-guides/",
    siteName: "ICanPitch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exit & Pro-Rata Guides: M&A, IPO & Investor Rights",
    description: "Model startup exit scenarios, understand liquidation preferences, and plan investor pro-rata participation. Free exit and pro-rata calculators.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/exit-strategy-guides/",
  },
};

export default function ExitStrategyGuidesHubPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Exit & Pro-Rata Guides" },
  ];

  const posts = [
    {
      slug: "vesting-acceleration-clauses-explained",
      title: "Vesting Acceleration Clauses: Single vs Double Trigger Explained",
      description: "Complete guide to vesting acceleration clauses in M&A and acquisitions. 85% of acquisitions include double-trigger acceleration. Learn single trigger vs double trigger, when acceleration happens, and negotiation tactics.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 12,
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
      slug: "pro-rata-calculator-singapore",
      title: "Pro-Rata Rights Calculator for Singapore Startups (2025)",
      description: "Calculate pro-rata allocations for APAC investors. Learn Singapore investor expectations, cross-border pro-rata considerations, and Southeast Asian VC follow-on standards.",
      date: "November 20, 2024",
      categories: ["Fundraising", "Investor Rights"],
      readingTime: 11,
    },
    {
      slug: "pro-rata-calculator-silicon-valley",
      title: "Pro-Rata Rights Calculator for Silicon Valley Startups (2025)",
      description: "Calculate pro-rata allocations for Silicon Valley investors. Learn how 38% of SF seed SAFEs include pro-rata, Series A/B expectations, and negotiation tactics for Bay Area VCs.",
      date: "November 18, 2024",
      categories: ["Fundraising", "Investor Rights"],
      readingTime: 11,
    },
    {
      slug: "pro-rata-calculator-new-york",
      title: "Pro-Rata Rights Calculator for New York City Startups (2025)",
      description: "Calculate pro-rata allocations for NYC investors. Discover why 52% of NY seed SAFEs include pro-rata (highest in US), East Coast investor culture, and negotiation strategies.",
      date: "November 16, 2024",
      categories: ["Fundraising", "Investor Rights"],
      readingTime: 11,
    },
    {
      slug: "pro-rata-calculator-london",
      title: "Pro-Rata Rights Calculator for London Startups (2025)",
      description: "Calculate pro-rata allocations for UK investors. Learn UK/European pro-rata standards, FCA regulatory impact, and how British VCs approach follow-on investment rights.",
      date: "November 13, 2024",
      categories: ["Fundraising", "Investor Rights"],
      readingTime: 11,
    },
    {
      slug: "pro-rata-calculator-berlin",
      title: "Pro-Rata Rights Calculator for Berlin Startups (2025)",
      description: "Calculate pro-rata allocations for German investors. Understand European VC standards, German investor expectations, and how Berlin's startup ecosystem approaches follow-on rights.",
      date: "November 11, 2024",
      categories: ["Fundraising", "Investor Rights"],
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
                Exit & Pro-Rata Guides
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Model startup exit scenarios, understand liquidation preferences, and plan investor pro-rata participation. Free exit and pro-rata calculators.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Every fundraising decision you make today shapes what you take home at exit. Liquidation preferences, participation rights, and pro-rata allocations can mean the difference between a life-changing outcome and a disappointing one. These guides walk you through exit waterfall analysis, city-specific M&A multiples, and investor follow-on mechanics. Use our free exit and pro-rata calculators to model scenarios with your actual cap table numbers.
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">12 Articles</h2>
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
                Model Your Exit Scenarios
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Calculate founder proceeds at different exit valuations with liquidation preference waterfalls.
              </p>
              <a
                href="https://icanpitch.com/startup-exit-visualizer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all"
              >
                Open Exit Calculator &rarr;
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
              <Link href="/blog/valuation-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">Startup Valuation Guides</Link>
              <Link href="/blog/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">All Articles</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
