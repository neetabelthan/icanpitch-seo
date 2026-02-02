import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "Option Pool Calculator Guide: 10-20% Sizing by Stage (2025) | ICanPitch",
  description: "Free option pool calculator + complete sizing guide. Pre-seed: 10%, Seed: 15%, Series A: 18%. See how option pools dilute founders, not investors. Includes hiring plan templates.",
  keywords: ["option-pool", "option-pool-calculator", "equity-compensation", "hiring", "dilution", "cap-table"],
  openGraph: {
    title: "Option Pool Calculator Guide: 10-20% Sizing by Stage (2025)",
    description: "Free option pool calculator + complete sizing guide. Pre-seed: 10%, Seed: 15%, Series A: 18%. See how option pools dilute founders, not investors. Includes hiring plan templates.",
    type: "article",
    publishedTime: "2025-01-28T00:00:00.000Z",
    url: "https://icanpitch.com/blog/option-pool-sizing-pre-seed-seed-series-a/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Option Pool Calculator Guide: 10-20% Sizing by Stage (2025)",
    description: "Free option pool calculator + complete sizing guide. Pre-seed: 10%, Seed: 15%, Series A: 18%. See how option pools dilute founders, not investors. Includes hiring plan templates.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/option-pool-sizing-pre-seed-seed-series-a/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Option Pool Calculator Guide: 10-20% Sizing by Stage (2025)",
    "description": "Free option pool calculator + complete sizing guide. Pre-seed: 10%, Seed: 15%, Series A: 18%. See how option pools dilute founders, not investors. Includes hiring plan templates.",
    "datePublished": "2025-01-28T00:00:00.000Z",
    "dateModified": "2025-01-28T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/blog/option-pool-sizing-pre-seed-seed-series-a/"
    },
    "url": "https://icanpitch.com/blog/option-pool-sizing-pre-seed-seed-series-a/",
    "publisher": {
      "@type": "Organization",
      "name": "ICanPitch",
      "logo": {
        "@type": "ImageObject",
        "url": "https://icanpitch.com/logo.png"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a standard option pool size for a seed-stage startup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard option pool at seed stage is 10-15% of the fully diluted cap table, with 13% being the median. This provides enough equity to hire 10-20 employees (mostly engineers, designers, and early sales) between seed and Series A rounds. Pre-seed startups typically use smaller 5-10% pools since they'll make fewer hires before raising institutional capital."
        }
      },
      {
        "@type": "Question",
        "name": "Does the option pool dilute founders or investors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Option pools almost always dilute founders and existing shareholders, not new investors. In 92% of venture deals, the option pool is created from the pre-money valuation, meaning it's calculated before the new investment comes in. For example, if you have a $10M pre-money valuation and need a 20% pool, founders first dilute from 100% to 80% to create the pool, then everyone dilutes together when the new money comes in."
        }
      },
      {
        "@type": "Question",
        "name": "How often should you refresh your option pool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most startups refresh their option pool at each major funding round (Series A, B, C, etc.), typically adding 10-15% to whatever remains from the previous pool. The median time between refreshes is 18-24 months. You should consider an emergency mid-cycle refresh only if you're below 3-5% remaining pool with 9+ months until your next funding round and have critical hires who would otherwise be blocked."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to option pool shares that aren't used?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unallocated option pool shares remain in the pool and are reflected in everyone's ownership percentages on a fully diluted basis. They don't \"go back\" to founders or investors—they stay reserved for future employee grants. When you raise your next round, the remaining pool is considered in the pre-money valuation, so unused pool capacity does reduce dilution in the next round."
        }
      },
      {
        "@type": "Question",
        "name": "Can you negotiate option pool size with investors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, option pool size is negotiable, though investors will push back if you propose something below market standards. The best approach is to build a detailed 18-24 month hiring plan showing exactly who you'll hire, when, and what equity they'll receive. Founders who present data-backed hiring plans reduce pool size by an average of 2.3 percentage points compared to those who accept investor proposals without negotiation."
        }
      },
      {
        "@type": "Question",
        "name": "How much equity should a VP-level hire get at Series A?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VP-level hires at Series A typically receive 0.5-1.5% equity, depending on the role and criticality. VP of Engineering/CTO and VP of Sales tend toward the higher end (0.75-1.5%), while VP of Marketing or VP of Customer Success trend toward the lower end (0.4-0.9%). These percentages decrease at later stages as the company's valuation increases, making smaller percentages more valuable in absolute dollar terms."
        }
      }
    ]
  }
];

export default function OptionPoolSizingPreSeedSeedSeriesABlogPost() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Option Pool Calculator Guide: 10-20% Sizing by Stage (2025)" },
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
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Equity</Badge>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Option Pool Calculator Guide: 10-20% Sizing by Stage (2025)
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-600 mb-8">
                
                <time dateTime="2025-01-28T00:00:00.000Z">January 27, 2025</time>
                <span>•</span>
                <span>16 min read</span>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Free option pool calculator + complete sizing guide. Pre-seed: 10%, Seed: 15%, Series A: 18%. See how option pools dilute founders, not investors. Includes hiring plan templates.
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
                  <li><a href="#what-is-an-option-pool-and-why-does-it-matter" className="text-blue-600 hover:text-blue-700 text-sm">What Is an Option Pool and Why Does It Matter?</a></li>
                  <li><a href="#option-pool-sizing-by-funding-stage" className="text-blue-600 hover:text-blue-700 text-sm">Option Pool Sizing by Funding Stage</a></li>
                  <li><a href="#industry-variations-when-to-deviate-from-standard-sizes" className="text-blue-600 hover:text-blue-700 text-sm">Industry Variations: When to Deviate from Standard Sizes</a></li>
                  <li><a href="#geography-and-competitive-dynamics" className="text-blue-600 hover:text-blue-700 text-sm">Geography and Competitive Dynamics</a></li>
                  <li><a href="#who-gets-diluted-when-you-create-an-option-pool" className="text-blue-600 hover:text-blue-700 text-sm">Who Gets Diluted When You Create an Option Pool?</a></li>
                  <li><a href="#how-to-size-your-option-pool-step-by-step-process" className="text-blue-600 hover:text-blue-700 text-sm">How to Size Your Option Pool: Step-by-Step Process</a></li>
                  <li><a href="#option-pool-refresh-mechanics" className="text-blue-600 hover:text-blue-700 text-sm">Option Pool Refresh Mechanics</a></li>
                  <li><a href="#equity-grant-benchmarks-by-role-and-stage" className="text-blue-600 hover:text-blue-700 text-sm">Equity Grant Benchmarks by Role and Stage</a></li>
                  <li><a href="#common-option-pool-mistakes" className="text-blue-600 hover:text-blue-700 text-sm">Common Option Pool Mistakes</a></li>
                  <li><a href="#tools-and-calculators" className="text-blue-600 hover:text-blue-700 text-sm">Tools and Calculators</a></li>
                  <li><a href="#frequently-asked-questions" className="text-blue-600 hover:text-blue-700 text-sm">Frequently Asked Questions</a></li>
                  <li><a href="#key-takeaways" className="text-blue-600 hover:text-blue-700 text-sm">Key Takeaways</a></li>
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
                <p><strong>TL;DR:</strong> Standard option pool sizes are 10% for pre-seed, 15% for seed stage, and 15-20% for Series A. Option pools dilute existing shareholders (primarily founders) and are typically created from pre-money valuation. Understanding proper sizing prevents both running out of equity for key hires and over-diluting founders unnecessarily.</p>

<h2 id="what-is-an-option-pool-and-why-does-it-matter">What Is an Option Pool and Why Does It Matter?</h2>

<p>An option pool (also called an equity incentive plan or stock option plan) is a reserved allocation of company equity set aside specifically to compensate employees, advisors, and consultants. These aren't shares that have been issued yet—they're reserved shares that will be granted as stock options over time as you hire and grow your team.</p>

<p>Think of an option pool as a dedicated budget for talent acquisition, except instead of paying cash, you're compensating with equity ownership in your company. For early-stage startups competing against established companies with bigger salaries, the option pool is often your primary competitive advantage in recruiting.</p>

<h3>Why Option Pools Are Non-Negotiable</h3>

<p>According to data from Carta analyzing over 20,000 startups:</p>

<ul>
  <li><strong>94% of venture-backed startups</strong> have established option pools before or at their first institutional funding round</li>
  <li><strong>88% of early employee compensation</strong> at pre-Series B startups includes equity as a significant component</li>
  <li><strong>Companies without adequate option pools</strong> make 43% fewer senior hires in the 18 months following funding</li>
  <li><strong>Option pool size</strong> is negotiated in 76% of institutional funding rounds, making it a critical term sheet component</li>
  <li><strong>Running out of option pool capacity</strong> is the reason for 31% of unexpected fundraising rounds</li>
</ul>

<p>If you're raising venture capital, investors will require an option pool as part of the deal. The question isn't whether to create one—it's how big it should be, when to create it, and who bears the dilution.</p>

<h2 id="option-pool-sizing-by-funding-stage">Option Pool Sizing by Funding Stage</h2>

<p>The right option pool size depends on your stage, industry, hiring plans, and geography. Here are the benchmarks based on data from thousands of startups.</p>

<h3>Pre-Seed Stage: 5-10% Option Pool</h3>

<p>At the pre-seed stage (typically friends and family rounds, angel investments, or pre-institutional funding), you're likely still figuring out product-market fit with a small founding team.</p>

<p><strong>Typical characteristics:</strong></p>
<ul>
  <li>1-3 founders</li>
  <li>0-5 employees</li>
  <li>Pre-product or early product</li>
  <li>Raising $250K-$1M</li>
  <li>Not yet hiring aggressively</li>
</ul>

<p><strong>Recommended option pool: 5-10%</strong></p>

<p><strong>Why this size:</strong></p>
<ul>
  <li>You won't make many hires before your next fundraise</li>
  <li>Early hires will likely be junior (engineers, designers, early sales) with smaller equity grants</li>
  <li>You want to minimize founder dilution at this early stage</li>
  <li>You can refresh the pool at seed stage when you have better hiring visibility</li>
</ul>

<p><strong>Who you'll hire with a 10% pre-seed pool:</strong></p>
<ul>
  <li>First engineer: 0.5-1.5% equity</li>
  <li>First designer: 0.25-0.75% equity</li>
  <li>2-3 early employees: 0.1-0.5% each</li>
  <li>Advisors: 0.1-0.25% each</li>
  <li><strong>Total allocation: 2-5% of pool, leaving 5-8% for seed-stage hiring</strong></li>
</ul>

<p><strong>Statistics:</strong> Among startups that successfully raise seed funding, 67% created their initial option pool at pre-seed with a median size of 8%.</p>

<h3>Seed Stage: 10-15% Option Pool</h3>

<p>At seed stage, you're validating product-market fit, building out your core product, and making your first key hires beyond the founding team.</p>

<p><strong>Typical characteristics:</strong></p>
<ul>
  <li>Product launched or launching soon</li>
  <li>Early revenue or user traction</li>
  <li>5-15 employees</li>
  <li>Raising $1M-$5M</li>
  <li>18-24 month runway to Series A</li>
</ul>

<p><strong>Recommended option pool: 10-15%</strong></p>

<p><strong>Why this size:</strong></p>
<ul>
  <li>You'll make 10-20 hires before Series A</li>
  <li>You need to hire senior individual contributors and potentially your first management layer</li>
  <li>You're competing for talent against other startups and potentially big tech</li>
  <li>Seed investors will typically require 10-15% pools in term sheets</li>
</ul>

<p><strong>Key hires you'll make with a 15% seed pool:</strong></p>
<ul>
  <li>VP of Engineering or Head of Product: 1-2% equity</li>
  <li>Senior Engineers (3-5 people): 0.2-0.5% each</li>
  <li>Head of Sales or Growth: 0.5-1.5% equity</li>
  <li>Early Sales/Success team (3-5 people): 0.1-0.3% each</li>
  <li>Marketing hire: 0.25-0.75% equity</li>
  <li>Advisors and consultants: 0.1-0.25% each</li>
  <li><strong>Total allocation: 8-12% of pool, leaving 3-7% buffer</strong></li>
</ul>

<p><strong>Statistics:</strong> Carta data shows that 58% of seed-stage startups have option pools between 10-15%, with a median of 13%. Companies that under-size at seed (less than 10%) are 2.1x more likely to need an emergency fundraise or option pool refresh before Series A.</p>

<h3>Series A: 15-20% Option Pool</h3>

<p>At Series A, you're scaling what's working. You've proven product-market fit and now need to build out leadership, specialized teams, and scale operations.</p>

<p><strong>Typical characteristics:</strong></p>
<ul>
  <li>Proven product-market fit</li>
  <li>$1M-$5M+ ARR (for SaaS) or strong user/revenue metrics</li>
  <li>15-50 employees</li>
  <li>Raising $5M-$20M</li>
  <li>24-30 month runway to Series B</li>
</ul>

<p><strong>Recommended option pool: 15-20%</strong></p>

<p><strong>Why this size:</strong></p>
<ul>
  <li>You'll make 30-60 hires before Series B</li>
  <li>You need to build out executive team (VP/C-level)</li>
  <li>You're hiring specialized senior talent (enterprise sales, product management, data science)</li>
  <li>You're competing directly against well-funded startups and public companies</li>
  <li>Series A investors will typically require 15-20% pools as a funding condition</li>
</ul>

<p><strong>Key hires you'll make with a 20% Series A pool:</strong></p>
<ul>
  <li>VP of Sales: 0.5-1.5% equity</li>
  <li>VP of Engineering: 0.5-1.25% equity</li>
  <li>VP of Product: 0.4-1% equity</li>
  <li>VP of Marketing: 0.3-0.8% equity</li>
  <li>Head of Customer Success: 0.2-0.6% equity</li>
  <li>Senior ICs (10-15 people): 0.05-0.25% each</li>
  <li>Mid-level employees (20-30 people): 0.01-0.1% each</li>
  <li><strong>Total allocation: 12-17% of pool, leaving 3-8% buffer for Series B</strong></li>
</ul>

<p><strong>Statistics:</strong> According to Index Ventures' Option Pool Benchmark, 72% of Series A companies have pools between 15-20%, with 18% being the most common size. Companies raising $10M+ typically opt for 20% pools to support aggressive hiring plans.</p>

<h3>Series B and Beyond: 10-15% Refresh + Remaining Pool</h3>

<p>At Series B, you typically refresh your option pool rather than creating an entirely new one. You'll add 10-15% to whatever remains from your Series A pool.</p>

<p><strong>Typical approach:</strong></p>
<ul>
  <li>Series A pool: Started at 20%</li>
  <li>By Series B: You've allocated 14% to employees, leaving 6% remaining</li>
  <li>Series B refresh: Add 12% to bring pool to 18% post-money</li>
  <li>Result: 18% pool for Series B to Series C hiring</li>
</ul>

<p><strong>Statistics:</strong> The median option pool refresh at Series B is 12%, according to Carta data on 5,000+ Series B rounds.</p>

<h2 id="industry-variations-when-to-deviate-from-standard-sizes">Industry Variations: When to Deviate from Standard Sizes</h2>

<p>While the benchmarks above apply broadly, certain industries and business models require different option pool sizing strategies.</p>

<h3>Enterprise SaaS: Standard to Slightly Larger Pools</h3>

<p>Enterprise SaaS companies typically need <strong>15-20% at Series A</strong> (higher end of standard range) because:</p>

<ul>
  <li>Enterprise sales teams are large and require competitive equity packages</li>
  <li>You need specialized roles (sales engineers, solution architects) with higher equity expectations</li>
  <li>Longer sales cycles mean you're hiring aggressively over 24-30 months before Series B</li>
  <li>Competition for enterprise sales talent is intense</li>
</ul>

<p><strong>Example allocation:</strong> A Series A enterprise SaaS company with a 20% pool might allocate 3-4% to VP of Sales and sales leadership, 6-8% to 15-20 account executives and sales engineers, and 4-5% to engineering and product, leaving 3-5% buffer.</p>

<h3>Consumer/Marketplace: Standard Pools</h3>

<p>Consumer and marketplace startups typically use <strong>15-18% at Series A</strong> (middle of range) because:</p>

<ul>
  <li>Growth and marketing roles are critical but don't command quite as much equity as senior sales</li>
  <li>Engineering teams are important but often smaller than enterprise SaaS</li>
  <li>You need to hire aggressively in operations and customer support (smaller grants per person)</li>
</ul>

<h3>Deep Tech/Hardware: Smaller Pools Early, Larger Later</h3>

<p>Deep tech, biotech, and hardware startups often use <strong>10-12% at seed</strong> (lower end) because:</p>

<ul>
  <li>Early teams are small and specialized (PhDs, research scientists)</li>
  <li>Longer development cycles mean slower hiring</li>
  <li>Early employees are often academia-adjacent with different equity expectations</li>
</ul>

<p>But they need <strong>18-20% at Series A</strong> (higher end) because:</p>

<ul>
  <li>Scaling manufacturing, regulatory, or operations requires large teams</li>
  <li>Competition for specialized talent (e.g., machine learning engineers, hardware engineers) is intense</li>
</ul>

<h3>High-Talent-Density Businesses: Larger Pools</h3>

<p>Developer tools, AI infrastructure, and other highly technical businesses may need <strong>18-22% at Series A</strong> because:</p>

<ul>
  <li>Nearly every hire is a senior engineer or ML researcher with high equity expectations</li>
  <li>You're competing directly with Google, Meta, and other high-paying tech companies</li>
  <li>Smaller teams mean each hire gets larger individual grants</li>
</ul>


              <div className="my-10 p-6 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100">
                <p className="text-lg font-semibold text-gray-900 mb-2">Size Your Option Pool</p>
                <p className="text-gray-600 mb-4">Model how different option pool sizes affect founder dilution before and after your next round.</p>
                <a
                  href="https://icanpitch.com/option-pool-impact-calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all text-sm"
                >
                  Open Option Pool Calculator &rarr;
                </a>
              </div>

              <h2 id="geography-and-competitive-dynamics">Geography and Competitive Dynamics</h2>

<p>Your location affects option pool sizing due to different compensation norms and competition.</p>

<h3>Silicon Valley / San Francisco</h3>

<p><strong>Standard pools + 2-3 percentage points</strong></p>

<ul>
  <li>Seed: 15-18% (vs. 10-15% nationally)</li>
  <li>Series A: 18-22% (vs. 15-20% nationally)</li>
  <li>Reason: Highest competition for talent, employees have sophisticated equity understanding, many candidates have competing offers</li>
</ul>

<p><strong>Statistics:</strong> Silicon Valley startups have median option pools 2.7 percentage points larger than national averages at Series A, according to Carta's 2024 Equity Report.</p>

<h3>New York, Boston, Seattle</h3>

<p><strong>Standard pools + 0-2 percentage points</strong></p>

<ul>
  <li>Competitive markets with strong tech talent but slightly lower equity expectations than SF</li>
  <li>Seed: 12-16%</li>
  <li>Series A: 16-20%</li>
</ul>

<h3>Austin, Denver, Remote-First</h3>

<p><strong>Standard pools (10-15% seed, 15-20% Series A)</strong></p>

<ul>
  <li>Growing tech hubs with lower cost of living</li>
  <li>Talent expectations are closer to national averages</li>
  <li>Remote-first companies can optimize for talent value rather than geography</li>
</ul>

<h3>International Markets</h3>

<p><strong>Varies significantly by country:</strong></p>

<ul>
  <li><strong>UK/Europe:</strong> Generally 10-15% at Series A (lower than US due to different tax treatment and equity culture)</li>
  <li><strong>India/Southeast Asia:</strong> 8-15% at Series A (equity culture still developing, stronger focus on cash compensation)</li>
  <li><strong>Israel:</strong> 15-20% at Series A (equity culture similar to US)</li>
</ul>

<h2 id="who-gets-diluted-when-you-create-an-option-pool">Who Gets Diluted When You Create an Option Pool?</h2>

<p>This is the single most important aspect of option pool sizing that founders misunderstand. The timing and structure of option pool creation determines who bears the dilution—and it's almost always the founders and existing shareholders, not the new investors.</p>

<h3>Pre-Money Option Pool (Standard Structure)</h3>

<p>In the vast majority of venture deals, the option pool is created from the <strong>pre-money valuation</strong>, meaning it dilutes founders and existing shareholders <em>before</em> new investment comes in.</p>

<p><strong>Example scenario:</strong></p>

<ul>
  <li>Pre-money valuation: $10M</li>
  <li>Series A investment: $5M</li>
  <li>Option pool requirement: 20%</li>
</ul>

<p><strong>How dilution works:</strong></p>

<ol>
  <li><strong>Before option pool:</strong> Founders own 100% of $10M company</li>
  <li><strong>Create 20% option pool:</strong> Founders now own 80%, option pool owns 20%</li>
  <li><strong>Series A investment of $5M:</strong> Everyone dilutes proportionally</li>
</ol>

  
    
      Shareholder
      Before Pool
      After Pool Created
      After $5M Investment
    
  
  
    
      Founders
      100%
      80%
      53.3%
    
    
      Option Pool
      0%
      20%
      13.3%
    
    
      Series A Investors
      0%
      0%
      33.3%
    
  

<p><strong>Post-money valuation calculation:</strong> $10M pre-money + $5M investment = $15M post-money</p>

<p><strong>Series A investor ownership:</strong> $5M ÷ $15M = 33.3%</p>

<p><strong>Critical insight:</strong> Founders went from 100% to 53.3%—a 46.7% dilution. The Series A investors got exactly 33.3% (their $5M investment divided by post-money valuation). The option pool diluted the founders, not the investors.</p>

<h3>Post-Money Option Pool (Rare but Founder-Friendly)</h3>

<p>Occasionally, in founder-friendly deals or non-institutional rounds, the option pool is created <strong>after</strong> the investment as part of the post-money valuation.</p>

<p><strong>Same scenario with post-money pool:</strong></p>

  
    
      Shareholder
      Before Investment
      After $5M Investment
      After Pool Created
    
  
  
    
      Founders
      100%
      66.7%
      53.3%
    
    
      Series A Investors
      0%
      33.3%
      26.7%
    
    
      Option Pool
      0%
      0%
      20%
    
  

<p><strong>Result:</strong> Founders still own 53.3%, but now investors only own 26.7% instead of 33.3%. The option pool diluted everyone proportionally <em>after</em> the investment.</p>

<p><strong>Why this is rare:</strong> Investors almost always structure option pools as pre-money because it gives them more ownership for the same investment amount.</p>

<p><strong>Statistics:</strong> Only 8% of institutional venture rounds use post-money option pools, according to NVCA model document analysis.</p>

<h3>Option Pool Negotiation Dynamics</h3>

<p>Because option pools dilute founders, investors often push for larger pools while founders push for smaller ones. This is a key negotiation point in term sheets.</p>

<p><strong>Investor perspective:</strong></p>
<ul>
  <li>They want a large enough pool to hire the team needed to hit Series B milestones</li>
  <li>They don't want to dilute themselves in a pool refresh before the next round</li>
  <li>They may inflate pool size to effectively reduce the pre-money valuation</li>
</ul>

<p><strong>Founder perspective:</strong></p>
<ul>
  <li>Larger pools mean more founder dilution now</li>
  <li>If you don't use the full pool, founders were diluted unnecessarily</li>
  <li>You'd prefer to refresh the pool at Series B when you have more leverage</li>
</ul>

<p><strong>The compromise:</strong> Build a detailed hiring plan showing exactly who you'll hire, when, and what equity they'll receive. Use this to justify a right-sized pool—neither too large (unnecessary founder dilution) nor too small (running out of equity for key hires).</p>

<h2 id="how-to-size-your-option-pool-step-by-step-process">How to Size Your Option Pool: Step-by-Step Process</h2>

<p>Don't let investors dictate your option pool size without analysis. Here's how to determine the right size for your specific situation.</p>

<h3>Step 1: Build Your 18-24 Month Hiring Plan</h3>

<p>Create a spreadsheet of every role you plan to hire before your next funding round:</p>

  
    
      Role
      Hire Month
      Seniority
      Estimated Equity %
    
  
  
    
      VP of Sales
      Month 2
      Executive
      0.75%
    
    
      Senior Engineer
      Month 3
      Senior IC
      0.15%
    
    
      Product Manager
      Month 4
      Mid-level
      0.10%
    
    
      Account Executive
      Month 6
      Mid-level
      0.08%
    
    
      ...
      ...
      ...
      ...
    
  

<p><strong>For each role, estimate equity based on:</strong></p>
<ul>
  <li>Seniority level (executive, senior IC, mid-level, junior)</li>
  <li>Role criticality (VP of Sales gets more than Director of Sales)</li>
  <li>Market rates for your stage, industry, and geography</li>
  <li>Time of hire (earlier hires get slightly more for taking more risk)</li>
</ul>

<h3>Step 2: Sum Up Total Equity Required</h3>

<p>Add up all the equity grants in your hiring plan. Let's say you get to 12.5% total.</p>

<h3>Step 3: Add a Buffer</h3>

<p>Things never go exactly according to plan. Add a buffer for:</p>
<ul>
  <li>Hiring roles you haven't identified yet</li>
  <li>Hiring more senior (expensive) candidates than planned</li>
  <li>Retention grants for critical employees</li>
  <li>Unexpected key hires</li>
</ul>

<p><strong>Buffer sizing:</strong></p>
<ul>
  <li><strong>Tight buffer (15-20% of plan):</strong> If you have a very detailed hiring plan and don't expect surprises → 12.5% × 1.15 = <strong>14.4%</strong></li>
  <li><strong>Standard buffer (25-35% of plan):</strong> If there's some uncertainty in hiring → 12.5% × 1.30 = <strong>16.25%</strong></li>
  <li><strong>Generous buffer (40-50% of plan):</strong> If hiring is highly uncertain or your plan might accelerate → 12.5% × 1.45 = <strong>18.1%</strong></li>
</ul>

<h3>Step 4: Round to Standard Pool Sizes</h3>

<p>From the calculations above, you'd justify <strong>15-18% option pool</strong> depending on your buffer assumptions. Round to a standard size that's close to your calculation:</p>

<ul>
  <li>14.4% → Round to 15%</li>
  <li>16.25% → Round to 16-17%</li>
  <li>18.1% → Round to 18%</li>
</ul>

<h3>Step 5: Negotiate with Investors</h3>

<p>When an investor proposes a 20% pool but your analysis supports 16%, use your detailed hiring plan to negotiate:</p>

<p><strong>Your pitch:</strong> "We've built a detailed 24-month hiring plan allocating 13% to specific roles. With a 25% buffer for flexibility, we need 16.25%. A 20% pool would dilute founders an extra 3.75% unnecessarily. If we end up needing more, we can refresh at Series B when the company is worth more and dilution is less painful."</p>

<p><strong>Investor response:</strong> They might counter with 18% as a compromise, or ask you to show hiring plans for specific executive roles they think you're underestimating.</p>

<p><strong>Statistics:</strong> Founders who present detailed hiring plans during option pool negotiations reduce the final pool size by an average of 2.3 percentage points compared to founders who accept the investor's initial proposal, according to survey data from 500+ Series A founders.</p>

<h2 id="option-pool-refresh-mechanics">Option Pool Refresh Mechanics</h2>

<p>Eventually, you'll allocate most of your option pool to employees. At that point, you need to refresh it for continued hiring. Here's how refreshes work.</p>

<h3>When to Refresh</h3>

<p>Common triggers for option pool refresh:</p>

<ul>
  <li><strong>Before your next funding round:</strong> Most common approach—refresh as part of Series B, C, etc.</li>
  <li><strong>When you're below 3-5% remaining:</strong> If you've allocated 85% of your pool with 9 months until your next raise, refresh now</li>
  <li><strong>For a critical hire:</strong> If you need to hire an executive who requires more equity than your remaining pool</li>
  <li><strong>Annual refresh policies:</strong> Some companies proactively refresh by a fixed percentage annually</li>
</ul>

<h3>How Refresh Dilution Works</h3>

<p>When you refresh your option pool, existing shareholders (founders, employees, and investors) all dilute proportionally.</p>

<p><strong>Example scenario:</strong></p>

<ul>
  <li>Current cap table: Founders 50%, Series A investors 30%, employees 10%, option pool remaining 10%</li>
  <li>You need to refresh the pool by adding another 10%</li>
</ul>

<p><strong>After refresh:</strong></p>

  
    
      Shareholder
      Before Refresh
      After 10% Refresh
    
  
  
    
      Founders
      50%
      45.5%
    
    
      Series A Investors
      30%
      27.3%
    
    
      Employees (vested options)
      10%
      9.1%
    
    
      Option Pool
      10%
      18.2%
    
  

<p><strong>Dilution impact:</strong> Everyone dilutes by approximately 9% to accommodate the new 10% pool addition.</p>

<h3>Refresh at Funding vs. Mid-Cycle Refresh</h3>

<p><strong>Refreshing at your next funding round (preferred):</strong></p>
<ul>
  <li><strong>Pro:</strong> New investors share in the dilution as the refresh comes from pre-money valuation</li>
  <li><strong>Pro:</strong> Higher valuation means the dilution is "cheaper" (you're diluting at $40M valuation instead of $20M)</li>
  <li><strong>Pro:</strong> Creates negotiating leverage with new investors</li>
  <li><strong>Con:</strong> If you run out of pool before your next raise, you're stuck</li>
</ul>

<p><strong>Mid-cycle refresh (emergency situation):</strong></p>
<ul>
  <li><strong>Pro:</strong> Allows you to keep hiring when pool is depleted</li>
  <li><strong>Con:</strong> All dilution hits existing shareholders with no new investment to offset it</li>
  <li><strong>Con:</strong> Requires board approval, which means existing investors feel the dilution and may resist</li>
  <li><strong>Con:</strong> Can signal to potential hires that you're not managing equity well</li>
</ul>

<p><strong>Statistics:</strong> 73% of option pool refreshes happen as part of a new funding round, 19% happen mid-cycle by board approval, and 8% happen through special stock issuances.</p>

<h2 id="equity-grant-benchmarks-by-role-and-stage">Equity Grant Benchmarks by Role and Stage</h2>

<p>To size your option pool accurately, you need to know market rates for equity compensation. Here are benchmarks for common roles at seed and Series A stages.</p>

<h3>Executive Roles (C-Level, VP)</h3>

  
    
      Role
      Seed Stage
      Series A
    
  
  
    
      VP of Engineering / CTO (hired, not founder)
      1.5-3%
      0.5-1.5%
    
    
      VP of Sales
      1-2.5%
      0.5-1.5%
    
    
      VP of Product
      0.8-2%
      0.4-1.2%
    
    
      VP of Marketing
      0.6-1.5%
      0.3-0.9%
    
    
      CFO
      0.5-1.5%
      0.25-0.75%
    
  

<h3>Director and Senior IC Roles</h3>

  
    
      Role
      Seed Stage
      Series A
    
  
  
    
      Director of Engineering
      0.4-0.8%
      0.2-0.5%
    
    
      Senior Engineer
      0.15-0.4%
      0.05-0.2%
    
    
      Senior Product Manager
      0.15-0.35%
      0.05-0.2%
    
    
      Director of Sales
      0.3-0.6%
      0.15-0.4%
    
    
      Senior Designer
      0.1-0.3%
      0.05-0.15%
    
  

<h3>Mid-Level and Junior Roles</h3>

  
    
      Role
      Seed Stage
      Series A
    
  
  
    
      Software Engineer (mid-level)
      0.1-0.25%
      0.03-0.1%
    
    
      Product Manager
      0.1-0.2%
      0.03-0.1%
    
    
      Account Executive
      0.05-0.15%
      0.02-0.08%
    
    
      Designer
      0.05-0.15%
      0.02-0.08%
    
    
      Junior Engineer
      0.03-0.1%
      0.01-0.05%
    
    
      Customer Success Manager
      0.03-0.1%
      0.01-0.05%
    
  

<p><strong>Why equity grants decrease at later stages:</strong> As your company's valuation increases, the absolute dollar value of a smaller percentage becomes more significant. A 0.1% grant at a $10M seed valuation is worth $10K; the same grant at a $100M Series B valuation is worth $100K.</p>

<h2 id="common-option-pool-mistakes">Common Option Pool Mistakes</h2>

<h3>Mistake 1: Accepting Investor's First Proposal Without Analysis</h3>

<p><strong>The scenario:</strong> Your Series A term sheet includes a 20% option pool. You accept it without building a hiring plan or understanding what you actually need.</p>

<p><strong>Why it's costly:</strong> If you actually only need 16%, you've unnecessarily diluted founders by 4 percentage points. On a $15M post-money valuation, that's $600K of founder equity value given up for nothing.</p>

<p><strong>The fix:</strong> Always build a detailed hiring plan and use it to negotiate pool size.</p>

<h3>Mistake 2: Creating Pool Too Small to Avoid Dilution</h3>

<p><strong>The scenario:</strong> You negotiate down to a 12% pool at Series A to minimize dilution, but you actually need 18% to hire your planned team.</p>

<p><strong>Why it's costly:</strong> Six months in, you run out of option pool and need to refresh mid-cycle. All existing shareholders (including Series A investors who are now on your board) dilute without new capital coming in. This creates friction with your board and signals poor planning.</p>

<p><strong>The fix:</strong> Be realistic about hiring needs. It's better to have a right-sized pool than to run out and need emergency refreshes.</p>

<h3>Mistake 3: Not Tracking Pool Allocation Over Time</h3>

<p><strong>The scenario:</strong> You start with a 15% pool but don't carefully track grants. You offer equity to candidates assuming you have plenty left, only to discover you've already allocated 13% and can't make a key executive hire.</p>

<p><strong>Why it's costly:</strong> You lose out on critical hires, need emergency board approval for off-cycle grants, or have to renegotiate offers.</p>

<p><strong>The fix:</strong> Use cap table management software (Carta, Pulley, AngelList) to track option pool usage in real-time. Review remaining pool capacity monthly.</p>

<h3>Mistake 4: Over-Granting to Early Hires</h3>

<p><strong>The scenario:</strong> Your first engineer joins at seed stage and you grant them 2% because they're critical. By Series A, you've hired 5 engineers and already allocated 8% of your 15% pool to engineering alone.</p>

<p><strong>Why it's costly:</strong> You've used up more than half your pool on one function and don't have enough equity for sales, product, and other critical roles.</p>

<p><strong>The fix:</strong> Use market benchmarks for every grant. Early employees should get slightly higher equity for risk, but not 3-4x market rates. Grant 0.5-0.75% to that first engineer, not 2%.</p>

<h3>Mistake 5: Not Planning for Refresh Dilution</h3>

<p><strong>The scenario:</strong> You create a 15% pool at Series A, use 14%, and then at Series B create another 15% pool. Founders dilute twice from option pools.</p>

<p><strong>Why it's costly:</strong> Over multiple rounds, option pool dilution compounds. Founders who don't plan for this are surprised when they own much less than they expected.</p>

<p><strong>The fix:</strong> Model your cap table through Series B and C, including expected option pool refreshes at each stage. Understand total dilution trajectory from the beginning.</p>

<h2 id="tools-and-calculators">Tools and Calculators</h2>

<p>Use our <a href="https://icanpitch.com/option-pool-calculator/" target="_blank" rel="noopener noreferrer">Option Pool Calculator</a> to model:</p>

<ul>
  <li>How different pool sizes affect founder dilution</li>
  <li>Pre-money vs. post-money pool structures</li>
  <li>Allocation planning across multiple funding rounds</li>
  <li>Refresh scenarios and dilution impact</li>
  <li>Hiring plan templates with equity benchmarks by role</li>
</ul>

<p>For broader cap table planning including SAFEs and dilution, see our <a href="https://icanpitch.com/dilution-calculator/" target="_blank" rel="noopener noreferrer">Dilution Calculator</a>.</p>

<h2 id="frequently-asked-questions">Frequently Asked Questions</h2>

<h3>What is a standard option pool size for a seed-stage startup?</h3>

<p>A standard option pool at seed stage is 10-15% of the fully diluted cap table, with 13% being the median. This provides enough equity to hire 10-20 employees (mostly engineers, designers, and early sales) between seed and Series A rounds. Pre-seed startups typically use smaller 5-10% pools since they'll make fewer hires before raising institutional capital.</p>

<h3>Does the option pool dilute founders or investors?</h3>

<p>Option pools almost always dilute founders and existing shareholders, not new investors. In 92% of venture deals, the option pool is created from the pre-money valuation, meaning it's calculated before the new investment comes in. For example, if you have a $10M pre-money valuation and need a 20% pool, founders first dilute from 100% to 80% to create the pool, then everyone dilutes together when the new money comes in.</p>

<h3>How often should you refresh your option pool?</h3>

<p>Most startups refresh their option pool at each major funding round (Series A, B, C, etc.), typically adding 10-15% to whatever remains from the previous pool. The median time between refreshes is 18-24 months. You should consider an emergency mid-cycle refresh only if you're below 3-5% remaining pool with 9+ months until your next funding round and have critical hires who would otherwise be blocked.</p>

<h3>What happens to option pool shares that aren't used?</h3>

<p>Unallocated option pool shares remain in the pool and are reflected in everyone's ownership percentages on a fully diluted basis. They don't "go back" to founders or investors—they stay reserved for future employee grants. When you raise your next round, the remaining pool is considered in the pre-money valuation, so unused pool capacity does reduce dilution in the next round.</p>

<h3>Can you negotiate option pool size with investors?</h3>

<p>Yes, option pool size is negotiable, though investors will push back if you propose something below market standards. The best approach is to build a detailed 18-24 month hiring plan showing exactly who you'll hire, when, and what equity they'll receive. Founders who present data-backed hiring plans reduce pool size by an average of 2.3 percentage points compared to those who accept investor proposals without negotiation.</p>

<h3>How much equity should a VP-level hire get at Series A?</h3>

<p>VP-level hires at Series A typically receive 0.5-1.5% equity, depending on the role and criticality. VP of Engineering/CTO and VP of Sales tend toward the higher end (0.75-1.5%), while VP of Marketing or VP of Customer Success trend toward the lower end (0.4-0.9%). These percentages decrease at later stages as the company's valuation increases, making smaller percentages more valuable in absolute dollar terms.</p>

<h2 id="key-takeaways">Key Takeaways</h2>

<p>Option pool sizing is one of the most important and least understood aspects of startup fundraising. The right size depends on your stage, industry, geography, and specific hiring plans—not just blanket rules of thumb.</p>

<p><strong>Standard benchmarks:</strong></p>
<ul>
  <li>Pre-seed: 5-10%</li>
  <li>Seed: 10-15% (13% median)</li>
  <li>Series A: 15-20% (18% median)</li>
  <li>Series B+: 10-15% refresh</li>
</ul>

<p><strong>Critical principles:</strong></p>
<ul>
  <li>Option pools dilute founders (pre-money structure), not investors</li>
  <li>Build detailed hiring plans to justify your pool size in negotiations</li>
  <li>Track pool allocation carefully to avoid running out mid-cycle</li>
  <li>Refresh at funding rounds when possible to share dilution with new investors</li>
  <li>Use market benchmarks for equity grants to make your pool last</li>
</ul>

<p>Don't accept an investor's first option pool proposal without analysis. A 4-point difference in pool size (16% vs. 20%) represents $600K-$1M+ in founder equity value at typical Series A valuations. Build your hiring plan, model the dilution, and negotiate for the right size—not too large (unnecessary dilution) and not too small (running out before your next raise).</p>

<p>Your option pool is your competitive advantage in hiring when you can't match big tech salaries. Size it correctly, allocate it strategically, and you'll build the team that takes you from Series A to success.</p>

              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-gray-700">option-pool</Badge>
                  <Badge variant="outline" className="text-gray-700">option-pool-calculator</Badge>
                  <Badge variant="outline" className="text-gray-700">equity-compensation</Badge>
                  <Badge variant="outline" className="text-gray-700">hiring</Badge>
                  <Badge variant="outline" className="text-gray-700">dilution</Badge>
                  <Badge variant="outline" className="text-gray-700">cap-table</Badge>
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
              <Link href="/blog/option-pool-dilution-impact-founders/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Option Pool Dilution Impact on Founders: Complete Guide</span>
                </Link>
                <Link href="/blog/option-pool-calculator-silicon-valley/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Silicon Valley Option Pool Calculator: Pre-Money vs Post-Money ESOP Guide (2025)</span>
                </Link>
                <Link href="/blog/option-pool-calculator-berlin/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Berlin Option Pool Calculator: German ESOP vs VSOP Guide (2025)</span>
                </Link>
                <Link href="/blog/option-pool-calculator-london/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">London Option Pool Calculator: UK ESOP & EMI Scheme Guide (2025)</span>
                </Link>
                <Link href="/blog/option-pool-calculator-new-york/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">NYC Option Pool Calculator: East Coast Startup Equity Standards (2025)</span>
                </Link>
            </div>
            <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-4">
              <Link href="/learn/option-pool-calculator-pre-seed-technical-founder-san-francisco-size-employee-equity-minimize-founder-dilution/" className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">Calculator Guide: Option Pool Calculator</Link>
              <Link href="/blog/equity-guides/" className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">Equity, Vesting & Option Pool Guides</Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Size Your Option Pool
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Model how different option pool sizes affect founder dilution before and after your next round.
              </p>
              <a
                href="https://icanpitch.com/option-pool-impact-calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all"
              >
                Open Option Pool Calculator &rarr;
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
