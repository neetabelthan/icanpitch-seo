import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "Pre-Seed Burn Rate 2025: $15K-$50K/Month Benchmarks by Industry | ICanPitch",
  description: "Is your burn rate too high? See exact pre-seed burn rate benchmarks for 2025. SaaS: $20-35K/mo, Hardware: $40-50K/mo. Free calculator + runway templates inside.",
  keywords: ["pre-seed", "burn rate", "runway", "early stage", "startup metrics"],
  openGraph: {
    title: "Pre-Seed Burn Rate 2025: $15K-$50K/Month Benchmarks by Industry",
    description: "Is your burn rate too high? See exact pre-seed burn rate benchmarks for 2025. SaaS: $20-35K/mo, Hardware: $40-50K/mo. Free calculator + runway templates inside.",
    type: "article",
    publishedTime: "2025-01-15T00:00:00.000Z",
    url: "https://icanpitch.com/blog/pre-seed-burn-rate-benchmarks-2025/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre-Seed Burn Rate 2025: $15K-$50K/Month Benchmarks by Industry",
    description: "Is your burn rate too high? See exact pre-seed burn rate benchmarks for 2025. SaaS: $20-35K/mo, Hardware: $40-50K/mo. Free calculator + runway templates inside.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/pre-seed-burn-rate-benchmarks-2025/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pre-Seed Burn Rate 2025: $15K-$50K/Month Benchmarks by Industry",
    "description": "Is your burn rate too high? See exact pre-seed burn rate benchmarks for 2025. SaaS: $20-35K/mo, Hardware: $40-50K/mo. Free calculator + runway templates inside.",
    "datePublished": "2025-01-15T00:00:00.000Z",
    "dateModified": "2025-01-15T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/blog/pre-seed-burn-rate-benchmarks-2025/"
    },
    "url": "https://icanpitch.com/blog/pre-seed-burn-rate-benchmarks-2025/",
    "publisher": {
      "@type": "Organization",
      "name": "ICanPitch",
      "logo": {
        "@type": "ImageObject",
        "url": "https://icanpitch.com/logo.png"
      }
    }
  }
];

export default function PreSeedBurnRateBenchmarks2025BlogPost() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Pre-Seed Burn Rate 2025: $15K-$50K/Month Benchmarks by Industry" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      {jsonLdData.map((data, index) => (
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
        {/* Hero Section */}
        <article className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
          <AuroraBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Fundraising</Badge>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Benchmarks</Badge>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pre-Seed Burn Rate 2025: $15K-$50K/Month Benchmarks by Industry
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-600 mb-8">
                
                <time dateTime="2025-01-15T00:00:00.000Z">January 14, 2025</time>
                <span>•</span>
                <span>12 min read</span>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Is your burn rate too high? See exact pre-seed burn rate benchmarks for 2025. SaaS: $20-35K/mo, Hardware: $40-50K/mo. Free calculator + runway templates inside.
              </p>
            </div>
          </div>
        </article>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">

              {/* Table of Contents */}
              <nav className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Table of Contents</p>
                <ul className="space-y-2">
                  <li><a href="#understanding-pre-seed-burn-rate-in-2025" className="text-blue-600 hover:text-blue-700 text-sm">Understanding Pre-Seed Burn Rate in 2025</a></li>
                  <li><a href="#pre-seed-burn-rate-by-industry-2025-data" className="text-blue-600 hover:text-blue-700 text-sm">Pre-Seed Burn Rate by Industry (2025 Data)</a></li>
                  <li><a href="#pre-seed-team-composition-and-cost-structure" className="text-blue-600 hover:text-blue-700 text-sm">Pre-Seed Team Composition and Cost Structure</a></li>
                  <li><a href="#geographic-burn-rate-variations" className="text-blue-600 hover:text-blue-700 text-sm">Geographic Burn Rate Variations</a></li>
                  <li><a href="#runway-expectations-how-long-should-your-pre-seed-last" className="text-blue-600 hover:text-blue-700 text-sm">Runway Expectations: How Long Should Your Pre-Seed Last?</a></li>
                  <li><a href="#how-to-calculate-your-target-burn-rate" className="text-blue-600 hover:text-blue-700 text-sm">How to Calculate Your Target Burn Rate</a></li>
                  <li><a href="#red-flags-when-your-burn-rate-is-too-high" className="text-blue-600 hover:text-blue-700 text-sm">Red Flags: When Your Burn Rate Is Too High</a></li>
                  <li><a href="#optimizing-your-pre-seed-burn-rate" className="text-blue-600 hover:text-blue-700 text-sm">Optimizing Your Pre-Seed Burn Rate</a></li>
                  <li><a href="#pre-seed-burn-rate-benchmarks-key-takeaways" className="text-blue-600 hover:text-blue-700 text-sm">Pre-Seed Burn Rate Benchmarks: Key Takeaways</a></li>
                  <li><a href="#ready-to-optimize-your-burn-rate-and-runway" className="text-blue-600 hover:text-blue-700 text-sm">Ready to Optimize Your Burn Rate and Runway?</a></li>
                </ul>
              </nav>
              <article className="
                [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mb-4 [&>h2]:mt-12 [&>h2]:first:mt-0 [&>h2]:scroll-mt-20
                [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mb-3 [&>h3]:mt-8
                [&>p]:text-lg [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6
                [&>ul]:text-lg [&>ul]:text-gray-700 [&>ul]:leading-relaxed [&>ul]:mb-6 [&>ul]:ml-6 [&>ul]:list-disc [&>ul]:space-y-2
                [&>ol]:text-lg [&>ol]:text-gray-700 [&>ol]:leading-relaxed [&>ol]:mb-6 [&>ol]:ml-6 [&>ol]:list-decimal [&>ol]:space-y-2
                [&>ul>li>strong]:font-semibold [&>ul>li>strong]:text-gray-900
                [&>ol>li>strong]:font-semibold [&>ol>li>strong]:text-gray-900
                [&>p>strong]:font-semibold [&>p>strong]:text-gray-900
                [&>p>a]:text-blue-600 [&>p>a]:underline [&>p>a]:hover:text-blue-700
                [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-700 [&>blockquote]:my-6
              ">
                <h2 id="understanding-pre-seed-burn-rate-in-2025">Understanding Pre-Seed Burn Rate in 2025</h2>

<p>Pre-seed burn rate represents the monthly cash a startup consumes before achieving product-market fit or significant traction. In 2025, pre-seed burn rates have stabilized after the 2022-2023 correction, with founders returning to capital-efficient growth models. Understanding these benchmarks is critical for setting realistic expectations, managing runway, and demonstrating fiscal responsibility to investors.</p>

<p>According to <a href="https://www.carta.com" target="_blank" rel="noopener noreferrer">Carta's</a> 2024 State of Startups report, the median pre-seed company now burns between $30,000 and $80,000 per month, with significant variation by geography, industry, and founding team composition. This represents a 25-30% decrease from 2021 peak levels, reflecting the current emphasis on sustainable growth over growth-at-all-costs.</p>

<h2 id="pre-seed-burn-rate-by-industry-2025-data">Pre-Seed Burn Rate by Industry (2025 Data)</h2>

<p>Industry choice fundamentally impacts burn rate expectations. Here are the 2025 benchmarks across key sectors:</p>

<h3>SaaS and Enterprise Software</h3>

<p><strong>Typical Monthly Burn: $40,000-$70,000</strong></p>

<p>SaaS startups at pre-seed typically spend on technical co-founder salaries, cloud infrastructure, and early design resources. The lean range ($40K-$50K/month) applies to technical founding teams building with no-code/low-code tools or leveraging open-source frameworks. The higher range ($60K-$70K/month) reflects teams hiring a first engineer or investing in AI infrastructure.</p>

<p>Key cost drivers include AWS/GCP hosting ($500-$2,000/month), developer tools and SaaS subscriptions ($1,000-$3,000/month), and founder salaries if not working for equity only ($0-$40,000/month combined).</p>

<h3>Consumer and Marketplace Apps</h3>

<p><strong>Typical Monthly Burn: $50,000-$90,000</strong></p>

<p>Consumer startups burn higher than B2B SaaS at pre-seed due to user acquisition costs, content creation, and community building expenses. Even in testing phases, consumer founders often allocate $5,000-$15,000/month to Facebook, Instagram, or TikTok ads to validate channels and unit economics.</p>

<p>Marketplace models face additional complexity with two-sided acquisition costs. Successful pre-seed marketplace founders typically focus spending on supply-side acquisition first, often through manual outreach rather than paid ads, keeping burn closer to $50K-$60K/month.</p>

<h3>Hardware and Deep Tech</h3>

<p><strong>Typical Monthly Burn: $60,000-$120,000</strong></p>

<p>Hardware startups consistently show the highest pre-seed burn rates due to prototyping costs, manufacturing tooling, regulatory compliance, and longer development cycles. According to <a href="https://www.nfx.com" target="_blank" rel="noopener noreferrer">NFX research</a>, hardware founders should plan for 18-24 month runways versus the standard 12-18 months for software.</p>

<p>Deep tech startups in AI/ML, biotech, or advanced materials often secure larger pre-seed rounds ($1M-$2M) specifically to accommodate higher burn rates while building proof-of-concept prototypes or completing early research milestones.</p>

<h3>Fintech and Regulated Industries</h3>

<p><strong>Typical Monthly Burn: $55,000-$85,000</strong></p>

<p>Fintech burn rates sit between SaaS and hardware, driven by compliance costs, banking partnerships, and security infrastructure requirements. Early-stage fintech founders typically allocate $5,000-$15,000/month to legal and compliance work, even before launching to customers.</p>

<p>Many successful fintech pre-seeds leverage Banking-as-a-Service platforms (Stripe Treasury, Unit.co, Synapse) to reduce infrastructure costs, keeping burn on the lower end of the range.</p>

<h2 id="pre-seed-team-composition-and-cost-structure">Pre-Seed Team Composition and Cost Structure</h2>

<p>Your team composition directly determines your burn rate. Here are the standard models in 2025:</p>

<h3>Model 1: All-Founder Team (Lean $30K-$45K/month)</h3>

<p>Two to three co-founders working for minimal or no salary, covering only essential business expenses. This model works when founders have sufficient personal runway (savings, spousal income, or part-time consulting).</p>

<ul>
  <li><strong>Founder stipends:</strong> $0-$25,000/month total (often $3K-$5K/person)</li>
  <li><strong>Cloud infrastructure:</strong> $500-$2,000/month</li>
  <li><strong>SaaS tools:</strong> $500-$1,500/month (GitHub, Figma, Notion, Linear)</li>
  <li><strong>Legal and accounting:</strong> $1,000-$3,000/month</li>
  <li><strong>Office/co-working:</strong> $0-$1,000/month (most teams fully remote)</li>
  <li><strong>Marketing and ads:</strong> $1,000-$5,000/month</li>
</ul>

<h3>Model 2: Founders + 1-2 Early Hires ($60K-$80K/month)</h3>

<p>Founders taking lean salaries plus one key hire (typically a senior engineer or product designer). This model is common when founders need to fill a critical skill gap.</p>

<ul>
  <li><strong>Founder salaries:</strong> $20,000-$35,000/month combined</li>
  <li><strong>First engineer/designer:</strong> $10,000-$18,000/month ($120K-$220K annual)</li>
  <li><strong>Benefits and payroll taxes:</strong> $3,000-$6,000/month</li>
  <li><strong>Infrastructure and tools:</strong> $2,000-$5,000/month</li>
  <li><strong>Marketing and growth:</strong> $3,000-$8,000/month</li>
  <li><strong>Legal, accounting, compliance:</strong> $2,000-$5,000/month</li>
</ul>

<h3>Model 3: Funded Team ($80K-$120K/month)</h3>

<p>Teams that raised larger pre-seed rounds ($1.5M-$2M+) often hire 2-4 early employees and pay market-rate founder salaries. This model is most common in competitive markets (AI, fintech) where talent acquisition requires competitive compensation.</p>

<p>While higher burn rates accelerate product development, they also reduce flexibility. Many 2024-2025 pre-seed investors actively discourage this model unless there's a compelling reason for speed-to-market.</p>


              <div className="my-10 p-6 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100">
                <p className="text-lg font-semibold text-gray-900 mb-2">Calculate Your Burn Rate & Runway</p>
                <p className="text-gray-600 mb-4">Enter your expenses and cash balance to see your runway in months. Plan your next fundraise.</p>
                <a
                  href="https://icanpitch.com/burn-rate-runway-calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all text-sm"
                >
                  Open Burn Rate Calculator &rarr;
                </a>
              </div>

              <h2 id="geographic-burn-rate-variations">Geographic Burn Rate Variations</h2>

<p>Location dramatically impacts burn rate through salary expectations and operational costs:</p>

<h3>San Francisco Bay Area</h3>

<p><strong>Median Burn: $70,000-$100,000/month</strong></p>

<p>Highest burn rates globally due to talent costs and cost of living. A senior engineer in SF commands $180K-$250K base salary, versus $120K-$160K in secondary markets. However, SF access to investors and talent density can justify the premium for certain startups.</p>

<h3>New York City</h3>

<p><strong>Median Burn: $60,000-$90,000/month</strong></p>

<p>Similar to SF but slightly lower, especially for non-technical roles. NYC excels for fintech, media, and consumer startups where domain proximity matters.</p>

<h3>Austin, Denver, Seattle (Tier 2 US Markets)</h3>

<p><strong>Median Burn: $50,000-$75,000/month</strong></p>

<p>30-40% lower costs than SF/NYC while maintaining access to quality talent. These markets have matured significantly, with experienced startup operators and advisors available locally.</p>

<h3>Remote-First Teams</h3>

<p><strong>Median Burn: $40,000-$65,000/month</strong></p>

<p>Remote-first teams can hire globally, accessing talent in lower-cost markets while offering competitive local salaries. Many 2025 pre-seeds default to remote-first, using geography as a competitive advantage rather than a constraint.</p>

<h3>International (Europe, Latin America, Southeast Asia)</h3>

<p><strong>Median Burn: $25,000-$60,000/month</strong></p>

<p>Significantly lower burn rates in Europe (particularly Eastern Europe), Latin America, and Southeast Asia. A $500K pre-seed round in these markets can provide 18-24 months of runway versus 8-12 months in Silicon Valley.</p>

<h2 id="runway-expectations-how-long-should-your-pre-seed-last">Runway Expectations: How Long Should Your Pre-Seed Last?</h2>

<p>The standard pre-seed runway target in 2025 is <strong>12-18 months</strong>, with most sophisticated investors expecting founders to plan for 15+ months minimum. Here's why:</p>

<h3>The 12-Month Minimum</h3>

<p>Twelve months is considered the absolute floor because it takes 6-9 months to raise a seed round. If you start fundraising at month 9 with 3 months of runway remaining, you're already in a weak negotiating position. Investors can sense desperation, and you may accept unfavorable terms.</p>

<h3>The 18-Month Target</h3>

<p>Eighteen months provides buffer for unexpected challenges: slower customer acquisition, technical setbacks, or market changes. It also allows you to optimize seed round timing rather than raising out of necessity.</p>

<p>According to <a href="https://www.ycombinator.com" target="_blank" rel="noopener noreferrer">Y Combinator</a>, founders who raise seed rounds with 6+ months of runway remaining achieve 15-20% higher valuations on average than founders raising with less than 3 months remaining.</p>

<h3>When to Extend Runway Beyond 18 Months</h3>

<p>Certain business models justify 24+ month runways:</p>

<ul>
  <li><strong>Hardware and deep tech:</strong> Longer product development cycles</li>
  <li><strong>Regulated industries:</strong> Licensing and compliance processes extend timelines</li>
  <li><strong>Enterprise sales:</strong> 9-18 month sales cycles mean revenue ramps slowly</li>
  <li><strong>Network effects:</strong> Marketplace and social products need time to reach critical mass</li>
</ul>

<h2 id="how-to-calculate-your-target-burn-rate">How to Calculate Your Target Burn Rate</h2>

<p>Use this formula to reverse-engineer your appropriate burn rate:</p>

<p><strong>Target Monthly Burn = (Total Pre-Seed Capital Raised × 0.90) ÷ Target Runway Months</strong></p>

<p>The 0.90 multiplier accounts for one-time expenses (legal fees, incorporation, initial setup) that consume approximately 10% of the round.</p>

<h3>Worked Example 1: $500K Pre-Seed Round</h3>

<ul>
  <li>Total raised: $500,000</li>
  <li>Usable capital after one-time costs: $450,000</li>
  <li>Target runway: 15 months</li>
  <li><strong>Maximum monthly burn: $30,000</strong></li>
</ul>

<h3>Worked Example 2: $1M Pre-Seed Round</h3>

<ul>
  <li>Total raised: $1,000,000</li>
  <li>Usable capital after one-time costs: $900,000</li>
  <li>Target runway: 18 months</li>
  <li><strong>Maximum monthly burn: $50,000</strong></li>
</ul>

<h2 id="red-flags-when-your-burn-rate-is-too-high">Red Flags: When Your Burn Rate Is Too High</h2>

<p>Investors will scrutinize your burn rate during seed fundraising. Here are warning signs your burn is unsustainable:</p>

<h3>Burning More Than $100K/Month at Pre-Seed</h3>

<p>Unless you're in deep tech or hardware, burning six figures monthly at pre-seed suggests poor capital allocation. This often indicates overhiring, excessive founder salaries, or premature scaling.</p>

<h3>Less Than 10 Months of Runway Remaining</h3>

<p>If you have fewer than 10 months of cash, you should already be in active fundraising mode. Many founders underestimate how long raises take, especially first-time founders without warm investor networks.</p>

<h3>Burn Growing Faster Than Revenue or Users</h3>

<p>Your burn rate should correlate with traction. If you're burning 30% more each month but user growth or revenue is flat, you're scaling costs without scaling output—a major red flag.</p>

<h2 id="optimizing-your-pre-seed-burn-rate">Optimizing Your Pre-Seed Burn Rate</h2>

<p>Here are tactical strategies to extend runway without sacrificing velocity:</p>

<h3>1. Founder Salary Strategy</h3>

<p>Many successful founders take $0-$5,000/month salaries at pre-seed, reserving capital for hires or customer acquisition. If you must pay yourselves, benchmark against local living costs rather than market salary rates.</p>

<h3>2. Leverage Contract and Part-Time Talent</h3>

<p>Instead of full-time hires, use fractional CTOs, contract designers, or offshore developers for specific projects. Platforms like <a href="https://www.toptal.com" target="_blank" rel="noopener noreferrer">Toptal</a> and <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer">Upwork</a> provide access to senior talent at 30-50% below full-time costs.</p>

<h3>3. Negotiate SaaS and Cloud Discounts</h3>

<p>Most infrastructure and SaaS providers offer startup programs: AWS Activate (up to $100K credits), Google Cloud for Startups ($200K credits), Stripe Atlas benefits. These programs can reduce burn by $2,000-$5,000/month.</p>

<h3>4. Delay Non-Essential Spending</h3>

<p>Defer spending on office space, conferences, premium tools, and brand design until post-product-market-fit. Every dollar saved extends runway and increases your chances of reaching key milestones.</p>

<h2 id="pre-seed-burn-rate-benchmarks-key-takeaways">Pre-Seed Burn Rate Benchmarks: Key Takeaways</h2>

<ul>
  <li><strong>Standard range:</strong> $30K-$80K/month depending on industry, geography, and team</li>
  <li><strong>Target runway:</strong> 12-18 months minimum, with 15-18 months as best practice</li>
  <li><strong>Team composition:</strong> All-founder teams burn $30K-$45K/month; teams with 1-2 hires burn $60K-$80K/month</li>
  <li><strong>Geographic variance:</strong> SF/NYC burn 50-100% more than remote or international teams</li>
  <li><strong>Industry impact:</strong> Hardware and deep tech justify 30-50% higher burn rates</li>
  <li><strong>Capital efficiency:</strong> Investors in 2025 reward lean operations; demonstrate you can do more with less</li>
</ul>

<h2 id="ready-to-optimize-your-burn-rate-and-runway">Ready to Optimize Your Burn Rate and Runway?</h2>

<p>Understanding benchmarks is just the first step. Use <a href="https://www.icanpitch.com" target="_blank" rel="noopener noreferrer">ICanPitch's runway calculator</a> to model different scenarios, compare your burn rate against industry peers, and plan your path to seed funding with confidence. Get data-driven insights tailored to your stage, industry, and geography.</p>

              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-gray-700">pre-seed</Badge>
                  <Badge variant="outline" className="text-gray-700">burn rate</Badge>
                  <Badge variant="outline" className="text-gray-700">runway</Badge>
                  <Badge variant="outline" className="text-gray-700">early stage</Badge>
                  <Badge variant="outline" className="text-gray-700">startup metrics</Badge>
                </div>
              </div>

              
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Articles</h3>
            <div className="space-y-1 mb-6">
              <Link href="/blog/seed-burn-rate-benchmarks-2025/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Seed Stage Burn Rate Benchmarks 2025: Scaling from Pre-Seed to PMF</span>
                </Link>
                <Link href="/blog/series-a-burn-rate-benchmarks-2025/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Series A Burn Rate Benchmarks 2025: Efficiency Metrics and Growth Scaling</span>
                </Link>
                <Link href="/blog/burn-rate-calculator-chicago/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Chicago Burn Rate Calculator: Track Startup Runway in the Midwest Tech Hub</span>
                </Link>
                <Link href="/blog/burn-rate-calculator-seattle/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Burn Rate Calculator for Seattle Startups: Track Your Runway in 2025</span>
                </Link>
                <Link href="/blog/burn-rate-benchmarks-by-industry-stage/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Burn Rate Benchmarks by Industry and Stage: 2025 Data</span>
                </Link>
            </div>
            <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-4">
              <Link href="/learn/burn-rate-calculator-series-a-first-time-founder-new-york-plan-fundraising-timeline-extend-runway-efficiency/" className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">Calculator Guide: Burn Rate Calculator</Link>
              <Link href="/blog/burn-rate-guides/" className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">Burn Rate & Runway Guides</Link>
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
      </div>
    </>
  );
}
