import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "How to Calculate Pre-Money Valuation for Series A | ICanPitch",
  description: "Complete guide to calculating pre-money valuation for your Series A funding round. Learn the methods, formulas, and factors investors consider.",
  keywords: ["pre-money valuation", "Series A", "valuation", "fundraising", "equity"],
  openGraph: {
    title: "How to Calculate Pre-Money Valuation for Series A",
    description: "Complete guide to calculating pre-money valuation for your Series A funding round. Learn the methods, formulas, and factors investors consider.",
    type: "article",
    publishedTime: "2025-01-15T00:00:00.000Z",
    url: "https://icanpitch.com/blog/how-to-calculate-pre-money-valuation-series-a/",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Calculate Pre-Money Valuation for Series A",
    description: "Complete guide to calculating pre-money valuation for your Series A funding round. Learn the methods, formulas, and factors investors consider.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/how-to-calculate-pre-money-valuation-series-a/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Calculate Pre-Money Valuation for Series A",
    "description": "Complete guide to calculating pre-money valuation for your Series A funding round. Learn the methods, formulas, and factors investors consider.",
    "datePublished": "2025-01-15T00:00:00.000Z",
    "dateModified": "2025-01-15T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/blog/how-to-calculate-pre-money-valuation-series-a/"
    },
    "url": "https://icanpitch.com/blog/how-to-calculate-pre-money-valuation-series-a/",
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

export default function HowToCalculatePreMoneyValuationSeriesABlogPost() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "How to Calculate Pre-Money Valuation for Series A" },
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
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Series A</Badge>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                How to Calculate Pre-Money Valuation for Series A
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-600 mb-8">
                
                <time dateTime="2025-01-15T00:00:00.000Z">January 14, 2025</time>
                <span>•</span>
                <span>12 min read</span>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Complete guide to calculating pre-money valuation for your Series A funding round. Learn the methods, formulas, and factors investors consider.
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
                  <li><a href="#understanding-pre-money-valuation-in-series-a" className="text-blue-600 hover:text-blue-700 text-sm">Understanding Pre-Money Valuation in Series A</a></li>
                  <li><a href="#the-basic-pre-money-valuation-formula" className="text-blue-600 hover:text-blue-700 text-sm">The Basic Pre-Money Valuation Formula</a></li>
                  <li><a href="#methods-for-determining-pre-money-valuation" className="text-blue-600 hover:text-blue-700 text-sm">Methods for Determining Pre-Money Valuation</a></li>
                  <li><a href="#key-factors-that-impact-series-a-valuation" className="text-blue-600 hover:text-blue-700 text-sm">Key Factors That Impact Series A Valuation</a></li>
                  <li><a href="#how-seed-and-pre-seed-rounds-affect-series-a-valuation" className="text-blue-600 hover:text-blue-700 text-sm">How Seed and Pre-Seed Rounds Affect Series A Valuation</a></li>
                  <li><a href="#common-valuation-mistakes-to-avoid" className="text-blue-600 hover:text-blue-700 text-sm">Common Valuation Mistakes to Avoid</a></li>
                  <li><a href="#negotiating-your-series-a-valuation" className="text-blue-600 hover:text-blue-700 text-sm">Negotiating Your Series A Valuation</a></li>
                  <li><a href="#tools-and-resources" className="text-blue-600 hover:text-blue-700 text-sm">Tools and Resources</a></li>
                  <li><a href="#regional-and-industry-variations" className="text-blue-600 hover:text-blue-700 text-sm">Regional and Industry Variations</a></li>
                  <li><a href="#what-comes-after-series-a" className="text-blue-600 hover:text-blue-700 text-sm">What Comes After Series A</a></li>
                  <li><a href="#final-thoughts" className="text-blue-600 hover:text-blue-700 text-sm">Final Thoughts</a></li>
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
                <h2 id="understanding-pre-money-valuation-in-series-a">Understanding Pre-Money Valuation in Series A</h2>
<p>
  Pre-money valuation is the value of your company <strong>before</strong> receiving Series A funding. This number determines how much equity you'll give up for the investment you're raising. Getting this calculation right is crucial—it affects your ownership stake, future dilution, and the message you send to investors.
</p>
<p>
  Unlike seed rounds where valuations are often simpler, Series A investors expect sophisticated valuation methods backed by real traction, revenue, and growth metrics. Understanding how to calculate and justify your pre-money valuation will help you negotiate better terms and set your company up for success.
</p>

<h2 id="the-basic-pre-money-valuation-formula">The Basic Pre-Money Valuation Formula</h2>
<p>
  The relationship between pre-money and post-money valuation is straightforward:
</p>
<p>
  <strong>Pre-Money Valuation = Post-Money Valuation - Investment Amount</strong>
</p>
<p>
  Or alternatively:
</p>
<p>
  <strong>Pre-Money Valuation = (Investment Amount × (100 - Ownership %)) / Ownership %</strong>
</p>

<h3>Example Calculation</h3>
<p>
  If you're raising $5 million and offering 20% of your company:
</p>
<ul>
  <li>Pre-Money Valuation = ($5M × (100 - 20)) / 20</li>
  <li>Pre-Money Valuation = ($5M × 80) / 20</li>
  <li>Pre-Money Valuation = <strong>$20 million</strong></li>
  <li>Post-Money Valuation = $20M + $5M = <strong>$25 million</strong></li>
</ul>

<h2 id="methods-for-determining-pre-money-valuation">Methods for Determining Pre-Money Valuation</h2>
<p>
  Unlike the simple math above, determining what your pre-money valuation <em>should be</em> requires deeper analysis. Here are the main methods Series A investors use:
</p>

<h3>1. Revenue Multiple Method</h3>
<p>
  The most common approach for SaaS and recurring revenue businesses. Investors apply a multiple to your Annual Recurring Revenue (ARR) based on industry benchmarks and growth rate.
</p>
<ul>
  <li><strong>Formula</strong>: Pre-Money Valuation = ARR × Revenue Multiple</li>
  <li><strong>Typical Multiples</strong>: 5-15x ARR for Series A SaaS companies</li>
  <li><strong>Higher multiples</strong> (10-15x): Strong growth (100%+ YoY), high retention, expanding market</li>
  <li><strong>Lower multiples</strong> (5-8x): Slower growth (30-50% YoY), higher churn, competitive market</li>
</ul>
<p>
  Example: If your ARR is $2 million and you're growing 120% YoY with 95% retention, investors might apply a 12x multiple, yielding a $24 million pre-money valuation.
</p>

<h3>2. Comparable Company Analysis</h3>
<p>
  Look at recent Series A valuations for companies in your industry with similar metrics:
</p>
<ul>
  <li>Revenue or ARR</li>
  <li>Growth rate</li>
  <li>Market size and opportunity</li>
  <li>Team experience and pedigree</li>
  <li>Geographic location</li>
</ul>
<p>
  Use platforms like Crunchbase, PitchBook, or CB Insights to research comparable deals. Adjust based on how your metrics compare to these companies at their Series A stage.
</p>

<h3>3. Venture Capital Method</h3>
<p>
  This forward-looking approach estimates your future exit value and works backward:
</p>
<ol>
  <li><strong>Estimate exit value</strong>: What could the company sell for in 5-7 years?</li>
  <li><strong>Calculate required return</strong>: VCs typically target 10-20x returns for Series A</li>
  <li><strong>Work backward</strong>: Pre-Money Valuation = Exit Value / Target Multiple</li>
</ol>
<p>
  Example: If projected exit value is $300M in 6 years, and investors want 10x return, they'd value you at $30M post-money. If they're investing $7M, your pre-money would be $23M.
</p>

<h3>4. Scorecard Valuation Method</h3>
<p>
  Compare your company to the average Series A startup across key factors:
</p>
<ul>
  <li>Team strength (0-30%)</li>
  <li>Product/technology (0-25%)</li>
  <li>Market opportunity (0-25%)</li>
  <li>Competitive environment (0-10%)</li>
  <li>Marketing/sales channels (0-10%)</li>
</ul>
<p>
  Start with an average Series A valuation in your region and industry, then adjust up or down based on how you score in each category.
</p>


              <div className="my-10 p-6 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100">
                <p className="text-lg font-semibold text-gray-900 mb-2">Understand Your Valuation</p>
                <p className="text-gray-600 mb-4">See how pre-money valuation, investment amount, and post-money relate to ownership percentages.</p>
                <a
                  href="https://icanpitch.com/pre-post-money-valuation-calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all text-sm"
                >
                  Open Valuation Calculator &rarr;
                </a>
              </div>

              <h2 id="key-factors-that-impact-series-a-valuation">Key Factors That Impact Series A Valuation</h2>
<p>
  Beyond the formulas, Series A investors evaluate these critical factors:
</p>

<h3>Revenue and Growth Metrics</h3>
<ul>
  <li><strong>ARR/MRR</strong>: Higher recurring revenue = higher valuation</li>
  <li><strong>Growth rate</strong>: 100%+ YoY growth significantly boosts valuation</li>
  <li><strong>Unit economics</strong>: CAC payback under 12 months, LTV:CAC ratio above 3:1</li>
  <li><strong>Gross margins</strong>: 70%+ for SaaS, varies by industry</li>
</ul>

<h3>Market Opportunity</h3>
<ul>
  <li><strong>TAM (Total Addressable Market)</strong>: Investors want to see $1B+ markets</li>
  <li><strong>Market timing</strong>: Growing markets command premium valuations</li>
  <li><strong>Competition</strong>: Crowded markets may lower valuations unless you have clear differentiation</li>
</ul>

<h3>Team and Execution</h3>
<ul>
  <li><strong>Founder experience</strong>: Second-time founders often get 20-40% higher valuations</li>
  <li><strong>Team completeness</strong>: Strong engineering, product, and go-to-market leadership</li>
  <li><strong>Advisory board</strong>: Respected advisors add credibility</li>
</ul>

<h3>Product and Technology</h3>
<ul>
  <li><strong>Product-market fit</strong>: Clear evidence through retention, NPS, and organic growth</li>
  <li><strong>Defensibility</strong>: Patents, network effects, or proprietary data</li>
  <li><strong>Technical innovation</strong>: Novel approaches or significant technical barriers to entry</li>
</ul>

<h2 id="how-seed-and-pre-seed-rounds-affect-series-a-valuation">How Seed and Pre-Seed Rounds Affect Series A Valuation</h2>
<p>
  Your previous funding rounds set important context for Series A valuation:
</p>

<h3>The Step-Up Multiple</h3>
<p>
  Investors expect to see a <strong>2-3x step-up</strong> from your seed round valuation to Series A. If your seed was at $10M post-money, a healthy Series A might be $25-35M pre-money.
</p>
<p>
  Lower step-ups (1.5x or less) signal slower progress or "down round" territory. Higher step-ups (4x+) indicate exceptional growth but raise the bar for your Series B.
</p>

<h3>Impact of Convertible Notes and SAFEs</h3>
<p>
  If you raised via SAFEs or convertible notes, they'll convert at your Series A, affecting ownership calculations:
</p>
<ul>
  <li><strong>Valuation caps</strong> on SAFEs set a ceiling on conversion price</li>
  <li><strong>Discount rates</strong> (typically 20%) give early investors a price discount</li>
  <li>Both mechanisms dilute your ownership beyond the Series A investment itself</li>
</ul>
<p>
  You'll need to calculate fully diluted ownership after all conversions to determine how much you're actually giving up.
</p>

<h2 id="common-valuation-mistakes-to-avoid">Common Valuation Mistakes to Avoid</h2>

<h3>1. Overvaluing Too Early</h3>
<p>
  Raising at an inflated valuation creates pressure to hit unrealistic milestones for your Series B. A "down round" (lower valuation) in the future severely damages founder and employee morale, triggers anti-dilution provisions, and signals trouble to the market.
</p>

<h3>2. Ignoring Dilution from Option Pool</h3>
<p>
  Series A investors typically require a <strong>10-20% option pool</strong> for future hires, calculated from the post-money valuation. This comes out of founder ownership, effectively lowering your proceeds from the round.
</p>

<h3>3. Not Accounting for Liquidation Preferences</h3>
<p>
  Series A investors almost always receive <strong>1x liquidation preference</strong>, meaning they get their money back first in an exit. Some negotiate for participating preferred, which lets them get their money back AND their pro-rata share of remaining proceeds.
</p>

<h3>4. Comparing to Peak-Market Valuations</h3>
<p>
  Valuation benchmarks fluctuate with market conditions. Don't anchor to 2021 bubble valuations—use recent comparable deals from the current market environment.
</p>

<h2 id="negotiating-your-series-a-valuation">Negotiating Your Series A Valuation</h2>

<h3>Create Competitive Tension</h3>
<p>
  Having multiple term sheets gives you leverage. Run a structured fundraising process with a clear timeline to encourage investors to compete on terms.
</p>

<h3>Focus on the Full Term Sheet</h3>
<p>
  Valuation is just one factor. Pay equal attention to:
</p>
<ul>
  <li><strong>Liquidation preferences</strong>: Standard is 1x non-participating</li>
  <li><strong>Board composition</strong>: Maintain founder control or equal representation</li>
  <li><strong>Anti-dilution protection</strong>: Broad-based weighted average is founder-friendly</li>
  <li><strong>Pro-rata rights</strong>: Can be valuable for supportive investors</li>
  <li><strong>Drag-along rights</strong>: Standard but important to understand</li>
</ul>

<h3>Know Your Walk-Away Point</h3>
<p>
  Determine your minimum acceptable valuation before entering negotiations. Consider:
</p>
<ul>
  <li>How much ownership you're comfortable giving up (typically 15-25% in Series A)</li>
  <li>Whether the valuation sets you up for a successful Series B</li>
  <li>If the terms align with your long-term goals</li>
</ul>

<h2 id="tools-and-resources">Tools and Resources</h2>
<p>
  Several tools can help you model different valuation scenarios:
</p>
<ul>
  <li><strong>Cap table software</strong>: Carta, Pulley, or Capshare to model dilution</li>
  <li><strong>Valuation calculators</strong>: Use a <a href="https://icanpitch.com" target="_blank" rel="noopener noreferrer">valuation calculator</a> to run different scenarios</li>
  <li><strong>Comparable databases</strong>: Crunchbase, PitchBook, CB Insights for market benchmarks</li>
  <li><strong>Financial models</strong>: Build a 3-5 year projection showing path to profitability or next round</li>
</ul>

<h2 id="regional-and-industry-variations">Regional and Industry Variations</h2>

<h3>Geographic Differences</h3>
<ul>
  <li><strong>Silicon Valley/SF</strong>: Typically 20-40% higher than other regions</li>
  <li><strong>New York, Boston, Seattle</strong>: 10-20% premium over other US cities</li>
  <li><strong>Other US cities</strong>: Baseline for US valuations</li>
  <li><strong>European</strong>: Generally 20-40% below US valuations</li>
  <li><strong>Asia-Pacific</strong>: Highly variable by country and sector</li>
</ul>

<h3>Industry Benchmarks</h3>
<ul>
  <li><strong>Enterprise SaaS</strong>: 8-15x ARR for strong growth</li>
  <li><strong>Consumer software</strong>: User metrics more important than revenue; lower multiples</li>
  <li><strong>Fintech</strong>: 10-20x revenue; higher due to revenue quality and margins</li>
  <li><strong>Healthcare tech</strong>: 5-12x revenue; varies by regulatory pathway</li>
  <li><strong>Deep tech/AI</strong>: Often pre-revenue; valued on IP, team, and potential</li>
</ul>

<h2 id="what-comes-after-series-a">What Comes After Series A</h2>
<p>
  Your Series A valuation sets the stage for future rounds:
</p>
<ul>
  <li><strong>Series B expectations</strong>: Typically 2-4x step-up from Series A pre-money</li>
  <li><strong>Milestone planning</strong>: Work backward from Series B to set achievable goals</li>
  <li><strong>Dilution trajectory</strong>: Model out ownership through exit to ensure founders retain meaningful equity</li>
</ul>
<p>
  Smart founders think several rounds ahead when setting their Series A valuation, ensuring they don't price themselves into a corner.
</p>

<h2 id="final-thoughts">Final Thoughts</h2>
<p>
  Calculating pre-money valuation for Series A is part art, part science. While formulas and benchmarks provide guidance, the final number comes down to negotiation between you and your investors. Focus on finding the right partner at a fair valuation rather than maximizing the number—the best outcomes come from aligned incentives and realistic expectations.
</p>
<p>
  Remember: a slightly lower valuation with favorable terms and great investors often leads to better outcomes than a sky-high valuation with onerous terms or misaligned partners.
</p>

              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-gray-700">pre-money valuation</Badge>
                  <Badge variant="outline" className="text-gray-700">Series A</Badge>
                  <Badge variant="outline" className="text-gray-700">valuation</Badge>
                  <Badge variant="outline" className="text-gray-700">fundraising</Badge>
                  <Badge variant="outline" className="text-gray-700">equity</Badge>
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
              <Link href="/blog/seed-valuation-benchmarks-2025/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Seed Valuation Benchmarks 2025: Post-Money Caps, ARR Requirements, and Investor Expectations</span>
                </Link>
                <Link href="/blog/post-money-safe-vs-pre-money-safe-2025/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Post-Money SAFE vs Pre-Money SAFE: Complete 2025 Comparison</span>
                </Link>
                <Link href="/blog/post-money-safe-vs-pre-money-safe-explained/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Post-Money SAFE vs Pre-Money SAFE: Complete 2025 Comparison</span>
                </Link>
                <Link href="/blog/safe-notes-multiple-safes-stacking-guide/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Multiple SAFEs and SAFE Stacking: Complete Founder's Guide (2025)</span>
                </Link>
                <Link href="/blog/safe-calculator-amsterdam/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Amsterdam SAFE Calculator: Navigate Cross-Border Fundraising and Dutch Valuations</span>
                </Link>
            </div>
            <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-4">
              <Link href="/learn/pre-post-money-calculator-series-a-first-time-founder-seattle-understand-valuation-mechanics-negotiate-better-terms/" className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">Calculator Guide: Pre Post Money Calculator</Link>
              <Link href="/blog/equity-guides/" className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">Equity, Vesting & Option Pool Guides</Link>
                <Link href="/blog/valuation-guides/" className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">Startup Valuation Guides</Link>
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
      </div>
    </>
  );
}
