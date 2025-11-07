import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/aurora-background";
import { Header } from "@/components/header";

export const metadata = {
  title: "Blog - Startup Insights & Guides | ICanPitch",
  description: "Expert insights on startup fundraising, equity, and financial modeling from Neeta Belthan. Learn how to navigate SAFEs, convertible notes, and cap tables.",
};

export default function BlogPage() {
  const posts = [
    {
      slug: "safe-calculator-bangalore",
      title: "SAFE Calculator for Bangalore Startups: 2025 India Guide",
      description: "Bangalore SAFE caps average 40-60% lower than US with 3-4x capital efficiency. Calculate your SAFE dilution with India-specific benchmarks and investor expectations.",
      date: "January 7, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 12,
    },
    {
      slug: "burn-rate-calculator-tel-aviv",
      title: "Burn Rate Calculator for Tel Aviv Startups: 2025 Israel Guide",
      description: "Tel Aviv startups rank #4 globally with 30-40% lower burn than Silicon Valley. Calculate your burn rate with Israel-specific costs, grants, and Unit 8200 talent benchmarks.",
      date: "January 7, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 11,
    },
    {
      slug: "burn-rate-calculator-boston",
      title: "Burn Rate Calculator for Boston Startups: 2025 Cost Guide",
      description: "Boston startups burn 25-35% less than San Francisco with comparable ecosystem quality. Calculate your Boston burn rate with MIT/Harvard talent costs and Cambridge office rates.",
      date: "January 7, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 11,
    },
    {
      slug: "safe-calculator-singapore",
      title: "SAFE Calculator for Singapore Startups: 2025 Valuation Guide",
      description: "Singapore SAFE valuations average 20-30% lower than US equivalents. Calculate your SAFE dilution with APAC-specific benchmarks and investor expectations.",
      date: "January 7, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 11,
    },
    {
      slug: "burn-rate-calculator-london",
      title: "Burn Rate Calculator for London Startups: 2025 Cost Guide",
      description: "London startups burn 45-60% more than UK averages. Calculate your London burn rate with city-specific salary benchmarks, office costs, and runway projections.",
      date: "January 7, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 12,
    },
    {
      slug: "vesting-acceleration-clauses-explained",
      title: "Vesting Acceleration Clauses Explained: Single vs Double Trigger",
      description: "Learn how single-trigger and double-trigger acceleration protect founders during acquisitions. Understand vesting acceleration terms for founder agreements.",
      date: "January 18, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 10,
    },
    {
      slug: "founder-vesting-schedules-4-year-1-year-cliff",
      title: "Founder Vesting Schedules: 4-Year 1-Year Cliff Explained",
      description: "92% of funded startups require founder vesting. Learn why the 4-year schedule with 1-year cliff matters and how to protect your equity.",
      date: "January 18, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 11,
    },
    {
      slug: "option-pool-dilution-impact-founders",
      title: "Option Pool Dilution Impact on Founders: Complete Guide",
      description: "Learn how option pool expansion dilutes founders in Series A. Understand pre vs post-money option pools and calculate your true ownership.",
      date: "January 18, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 10,
    },
    {
      slug: "series-a-burn-rate-runway-management",
      title: "Series A Burn Rate and Runway Management: Complete Guide",
      description: "Median Series A burn: $250K/month with 18-24 month runway targets. Learn burn multiples, efficiency metrics, and when to raise Series B.",
      date: "January 18, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 14,
    },
    {
      slug: "gross-burn-vs-net-burn-rate-explained",
      title: "Gross Burn vs Net Burn Rate: Complete Guide for Founders",
      description: "73% of first-time founders confuse gross and net burn. Learn the critical differences, formulas, and when each metric matters to investors.",
      date: "January 18, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 10,
    },
    {
      slug: "reducing-burn-rate-without-killing-growth",
      title: "Reducing Burn Rate Without Killing Growth: Complete Guide",
      description: "Learn how to cut burn rate 30-40% while maintaining growth. Proven strategies from successful founders who extended runway without sacrificing momentum.",
      date: "January 18, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 12,
    },
    {
      slug: "equity-split-technical-vs-business-cofounder",
      title: "Equity Split Between Technical and Business Co-founders",
      description: "Learn how to fairly split equity between technical and business co-founders with proven frameworks and real-world examples.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 9,
    },
    {
      slug: "early-employee-equity-calculator-guide",
      title: "Early Employee Equity Calculator: Complete Guide for Founders",
      description: "Learn how to calculate fair equity grants for early employees using option pool percentages, stage-based benchmarks, and equity value projections.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 9,
    },
    {
      slug: "option-pool-sizing-pre-seed-seed-series-a",
      title: "Option Pool Sizing: Pre-Seed, Seed, and Series A Guide",
      description: "Learn standard option pool sizes by stage: 10% pre-seed, 15% seed, 20% Series A. Master pre vs post-money pools and dilution impacts.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 9,
    },
    {
      slug: "co-founder-equity-split-50-50-alternatives",
      title: "Co-Founder Equity Split: 50/50 and Better Alternatives",
      description: "Learn proven frameworks for splitting equity between co-founders. Understand why 50/50 splits fail and how to create fair, sustainable equity structures.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 11,
    },
    {
      slug: "burn-rate-calculator-san-francisco-vs-austin",
      title: "Burn Rate Calculator: San Francisco vs Austin Startup Costs",
      description: "SF startups burn 65% more than Austin. Compare burn rates, runway calculations, and see how location affects your startup's survival timeline.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 11,
    },
    {
      slug: "burn-rate-calculator-new-york-city-startup-costs",
      title: "Burn Rate Calculator for NYC Startups: 2025 Cost Analysis",
      description: "NYC startup burn rates average $190K/month (57% higher than national median). Calculate your NYC burn rate and runway with city-specific costs.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 10,
    },
    {
      slug: "burn-rate-benchmarks-by-industry-stage",
      title: "Burn Rate Benchmarks by Industry and Stage (2025 Data)",
      description: "Median pre-seed burn: $50K/month, seed: $120K, Series A: $250K. Compare your burn rate against 500+ startups by industry and stage.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 10,
    },
    {
      slug: "cash-runway-calculator-extend-startup-survival",
      title: "Cash Runway Calculator: How to Extend Your Startup's Survival",
      description: "Learn how to calculate cash runway, understand the difference from burn rate, and discover 7 proven strategies to extend your runway by 6-12 months.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 10,
    },
    {
      slug: "how-to-calculate-burn-rate-monthly-startup-costs",
      title: "How to Calculate Burn Rate: Monthly Startup Cost Formula",
      description: "Learn the exact formula to calculate burn rate and runway. Understand gross vs net burn, what costs to include, and how to track monthly burn accurately.",
      date: "January 17, 2025",
      categories: ["Fundraising", "Operations"],
      readingTime: 10,
    },
    {
      slug: "safe-notes-multiple-safes-stacking-guide",
      title: "Multiple SAFEs and SAFE Stacking: Complete Founder's Guide",
      description: "Learn how to raise multiple SAFE rounds without destroying your cap table. Complete guide to SAFE stacking and cumulative dilution calculations.",
      date: "January 17, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 11,
    },
    {
      slug: "avoiding-safe-dilution-traps-founders",
      title: "Avoiding SAFE Dilution Traps: 7 Mistakes Founders Make",
      description: "First-time founders underestimate SAFE dilution by 12-18 percentage points. Learn the 7 deadly SAFE sins and how to protect your ownership.",
      date: "January 17, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 12,
    },
    {
      slug: "safe-vs-convertible-note-2024-comparison",
      title: "SAFE vs Convertible Note: Complete 2024 Comparison Guide",
      description: "78% of YC companies choose SAFEs over convertible notes. Compare interest rates, maturity dates, legal costs, and conversion mechanics.",
      date: "January 17, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 12,
    },
    {
      slug: "safe-calculator-new-york-startup-scene",
      title: "SAFE Calculator for New York Startups: NYC Founder's Guide",
      description: "NYC-specific SAFE calculator guide for fintech, ecommerce, and media founders. Learn how NY SAFE caps compare to SF and national averages.",
      date: "January 17, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 10,
    },
    {
      slug: "safe-calculator-silicon-valley-founders-guide",
      title: "SAFE Calculator for Silicon Valley Founders: Bay Area Guide",
      description: "Silicon Valley SAFE caps average 40-50% higher than national median. Learn Bay Area-specific SAFE benchmarks and dilution calculations.",
      date: "January 17, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 10,
    },
    {
      slug: "safe-conversion-mechanics-priced-round",
      title: "SAFE Conversion Mechanics: How SAFEs Convert in Priced Rounds",
      description: "Complete guide to SAFE conversion mechanics for Series A. Learn exact calculations, cap table impacts, and conversion triggers.",
      date: "January 17, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 12,
    },
    {
      slug: "safe-discount-rate-vs-valuation-cap-which-better",
      title: "SAFE Discount Rate vs Valuation Cap: Which Matters More?",
      description: "82% of SAFEs trigger the cap, not the discount. Learn the math behind which SAFE term actually matters for founders.",
      date: "January 17, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 10,
    },
    {
      slug: "how-to-negotiate-safe-valuation-cap",
      title: "How to Negotiate SAFE Valuation Caps: 2025 Founder's Guide",
      description: "Master SAFE valuation cap negotiations with data-backed benchmarks, proven frameworks, and real scenarios.",
      date: "January 17, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 11,
    },
    {
      slug: "post-money-safe-vs-pre-money-safe-explained",
      title: "Post-Money SAFE vs Pre-Money SAFE: Complete 2025 Comparison",
      description: "Learn the critical differences between post-money and pre-money SAFEs. Understand which protects founders better and why 94% use post-money.",
      date: "January 17, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 12,
    },
    {
      slug: "safe-calculator-first-time-founders-complete-guide",
      title: "SAFE Calculator for First-Time Founders: Complete 2025 Guide",
      description: "Learn how to use a SAFE calculator as a first-time founder. Understand SAFE note mechanics, valuation caps, discount rates, and calculate dilution.",
      date: "January 16, 2025",
      categories: ["Fundraising", "SAFE"],
      readingTime: 10,
    },
    {
      slug: "understanding-pro-rata-rights-startup-investing",
      title: "Understanding Pro-Rata Rights in Startup Investing: A Complete Guide",
      description: "Learn everything about pro-rata rights in startup investing, how they work, why they matter for founders and investors, and how to calculate pro-rata allocation.",
      date: "January 15, 2025",
      categories: ["Fundraising", "Investors"],
      readingTime: 10,
    },
    {
      slug: "how-to-calculate-pre-money-valuation-series-a",
      title: "How to Calculate Pre-Money Valuation for Series A",
      description: "Complete guide to calculating pre-money valuation for your Series A funding round. Learn the methods, formulas, and factors investors consider.",
      date: "January 15, 2025",
      categories: ["Fundraising", "Series A"],
      readingTime: 12,
    },
    {
      slug: "how-to-calculate-safe-dilution",
      title: "How to Calculate SAFE Dilution: A Founder's Guide",
      description: "Learn how to calculate dilution from SAFE notes and understand the impact on your founder ownership.",
      date: "January 15, 2025",
      categories: ["Fundraising", "Equity"],
      readingTime: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <AuroraBackground />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Startup Insights & Guides
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Expert advice on fundraising, equity, and financial modeling from Neeta Belthan
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
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
                      <span>•</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pb-5">
                    <a
                      href={`/blog/${post.slug}/`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read Article
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No blog posts yet. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
