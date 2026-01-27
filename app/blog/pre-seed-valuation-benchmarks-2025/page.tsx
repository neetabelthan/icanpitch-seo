import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "Pre-Seed Valuation Benchmarks 2025: SAFE Caps and Investor Expectations | ICanPitch",
  description: "Comprehensive pre-seed valuation benchmarks for 2025. SAFE cap ranges by geography, traction requirements, and what investors expect at the earliest stage.",
  keywords: ["pre-seed", "valuation", "SAFE", "cap table", "startup funding"],
  openGraph: {
    title: "Pre-Seed Valuation Benchmarks 2025: SAFE Caps and Investor Expectations",
    description: "Comprehensive pre-seed valuation benchmarks for 2025. SAFE cap ranges by geography, traction requirements, and what investors expect at the earliest stage.",
    type: "article",
    publishedTime: "2024-11-10T00:00:00.000Z",
    url: "https://icanpitch.com/blog/pre-seed-valuation-benchmarks-2025/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre-Seed Valuation Benchmarks 2025: SAFE Caps and Investor Expectations",
    description: "Comprehensive pre-seed valuation benchmarks for 2025. SAFE cap ranges by geography, traction requirements, and what investors expect at the earliest stage.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/pre-seed-valuation-benchmarks-2025/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pre-Seed Valuation Benchmarks 2025: SAFE Caps and Investor Expectations",
    "description": "Comprehensive pre-seed valuation benchmarks for 2025. SAFE cap ranges by geography, traction requirements, and what investors expect at the earliest stage.",
    "datePublished": "2024-11-10T00:00:00.000Z",
    "dateModified": "2024-11-10T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/blog/pre-seed-valuation-benchmarks-2025/"
    },
    "url": "https://icanpitch.com/blog/pre-seed-valuation-benchmarks-2025/",
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

export default function PreSeedValuationBenchmarks2025BlogPost() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "Pre-Seed Valuation Benchmarks 2025: SAFE Caps and Investor Expectations" },
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
                Pre-Seed Valuation Benchmarks 2025: SAFE Caps and Investor Expectations
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-600 mb-8">
                
                <time dateTime="2024-11-10T00:00:00.000Z">November 9, 2024</time>
                <span>•</span>
                <span>11 min read</span>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Comprehensive pre-seed valuation benchmarks for 2025. SAFE cap ranges by geography, traction requirements, and what investors expect at the earliest stage.
              </p>
            </div>
          </div>
        </article>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <article className="
                [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mb-4 [&>h2]:mt-12 [&>h2]:first:mt-0
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
                <h2>Understanding Pre-Seed Valuations in 2025</h2>

<p>Pre-seed valuations have undergone significant recalibration since the 2021-2022 peak. In 2025, pre-seed founders face a market that values sustainable growth, capital efficiency, and realistic milestone planning over hockey-stick projections. Understanding current benchmarks is essential for setting appropriate SAFE caps, managing dilution, and building productive investor relationships.</p>

<p>According to <a href="https://www.carta.com" target="_blank" rel="noopener noreferrer">Carta's</a> Q4 2024 data, median pre-seed valuations now range from $2 million to $8 million post-money, with significant variance by geography, founder pedigree, market opportunity, and early traction. This represents a 30-40% decrease from 2021 peaks but reflects healthier, more sustainable startup ecosystems.</p>

<h2>Pre-Seed Valuation Ranges by Geography (2025)</h2>

<p>Geographic location remains one of the strongest predictors of pre-seed valuation, driven by local capital availability, talent density, and ecosystem maturity.</p>

<h3>San Francisco Bay Area</h3>

<p><strong>Typical SAFE Caps: $4M-$10M</strong></p>

<p>Silicon Valley continues to command premium valuations despite market corrections. Founder pedigree matters enormously: ex-FAANG engineers or repeat founders often secure $8M-$10M caps with only a deck and prototype. First-time founders with strong technical backgrounds typically land in the $4M-$6M range.</p>

<p>Bay Area investors expect founders to have domain expertise, clear product vision, and often some form of early traction (design mocks, waitlist, pilot customers) before committing capital at these levels.</p>

<h3>New York City</h3>

<p><strong>Typical SAFE Caps: $3M-$8M</strong></p>

<p>NYC valuations track 10-20% below SF, reflecting a more conservative investor base and stronger emphasis on business model clarity. Fintech and enterprise SaaS startups often achieve the higher end of this range, while consumer and marketplace startups trend lower due to CAC concerns.</p>

<h3>Los Angeles</h3>

<p><strong>Typical SAFE Caps: $3M-$7M</strong></p>

<p>LA's ecosystem has matured significantly, particularly for consumer, media, and creator economy startups. Founders with entertainment industry connections or influencer backing can reach $6M-$7M caps, while pure tech plays land in the $3M-$5M range.</p>

<h3>Austin, Denver, Seattle, Boston (Tier 2 US Markets)</h3>

<p><strong>Typical SAFE Caps: $2.5M-$6M</strong></p>

<p>These markets offer a sweet spot: sophisticated investors and quality founders without SF/NYC price inflation. Austin excels for B2B SaaS, Boston for biotech and deep tech, Seattle for enterprise software, and Denver for outdoor/consumer brands.</p>

<h3>Remote-First and Other US Markets</h3>

<p><strong>Typical SAFE Caps: $2M-$5M</strong></p>

<p>Remote-first companies raising from geographic investors (not tied to a specific hub) generally see lower valuations but also lower expectations. If you can demonstrate you're building capital-efficiently in a secondary market, some investors view this as a positive signal.</p>

<h3>Europe</h3>

<p><strong>Typical SAFE Caps: €1.5M-€5M ($1.6M-$5.4M USD)</strong></p>

<p>European pre-seed valuations remain 30-50% below US equivalents, though the gap is narrowing. London, Paris, Berlin, and Stockholm command the highest valuations, while Eastern European founders often raise at €1M-€2M caps despite building competitive products.</p>

<h3>Asia-Pacific</h3>

<p><strong>Typical SAFE Caps: $1M-$4M</strong></p>

<p>Singapore, Sydney, and Bangalore lead the region, with valuations approaching US Tier 2 market levels. Southeast Asian founders (outside Singapore) typically raise at $1M-$2.5M caps, though this is increasing as ecosystems mature.</p>

<h3>Latin America</h3>

<p><strong>Typical SAFE Caps: $1M-$3M</strong></p>

<p>LatAm pre-seeds typically raise at lower valuations but from investors who understand regional dynamics. Sao Paulo, Mexico City, and Buenos Aires lead the ecosystem, with fintech and e-commerce commanding the highest valuations.</p>

<h2>Valuation Benchmarks by Founder Profile</h2>

<p>Your background significantly influences pre-seed valuation, often more than initial traction:</p>

<h3>Repeat Founders with Successful Exits</h3>

<p><strong>Premium: +50% to +150% above market baseline</strong></p>

<p>If you've built and exited a startup previously, especially for $20M+, you'll command premium valuations. Investors bet on pattern recognition and execution capability. A repeat founder in SF can often raise at $8M-$12M caps with just a deck and conviction.</p>

<h3>Ex-FAANG/Unicorn Employees</h3>

<p><strong>Premium: +25% to +75% above market baseline</strong></p>

<p>Engineers, PMs, and operators from Google, Meta, Stripe, or similar companies get valuation premiums due to perceived execution quality and network access. A former Stripe engineer in SF might raise at $6M-$8M versus $4M-$5M for equivalent traction from a first-time founder.</p>

<h3>Domain Expert Founders</h3>

<p><strong>Premium: +15% to +50% above market baseline</strong></p>

<p>Founders with deep industry expertise (ex-healthcare operators building health tech, former teachers building edtech) get modest premiums, especially if they bring industry relationships that de-risk customer acquisition.</p>

<h3>First-Time Technical Founders</h3>

<p><strong>Market baseline valuations</strong></p>

<p>Strong technical founders without pedigree or previous exits land at market-rate valuations. This isn't negative—it simply means you'll need to demonstrate traction and execution to reach premium ranges.</p>

<h3>First-Time Non-Technical Founders</h3>

<p><strong>Discount: -20% to -40% below market baseline</strong></p>

<p>Non-technical solo founders face the toughest pre-seed environment. Investors worry about technical execution risk and seek evidence of strong technical co-founders or exceptional domain expertise to compensate.</p>

<h2>Traction Requirements by Valuation Tier</h2>

<p>What traction do you need to justify different valuation levels? Here's the 2025 reality:</p>

<h3>$2M-$3M Caps: Idea Stage with Strong Founding Team</h3>

<p>At the lower end, investors fund the team and vision. Typical traction includes:</p>

<ul>
  <li>Pitch deck articulating clear problem and solution</li>
  <li>Market research validating problem significance</li>
  <li>Initial product roadmap or wireframes</li>
  <li>No product or users required, but technical co-founder essential</li>
</ul>

<p>This tier is most accessible to first-time founders in non-SF markets or founders building in less competitive spaces.</p>

<h3>$3M-$5M Caps: Prototype or MVP with Early Validation</h3>

<p>Mid-range valuations require tangible progress beyond the deck:</p>

<ul>
  <li>Working prototype or MVP (even if not publicly launched)</li>
  <li>10-50 early users or beta testers providing qualitative feedback</li>
  <li>Evidence of problem-solution fit (user interviews, surveys, LOIs)</li>
  <li>Clear go-to-market hypothesis with channel validation</li>
</ul>

<p>Most SF/NYC pre-seeds fall in this range, with founders demonstrating they can build and attract early adopters.</p>

<h3>$5M-$8M Caps: Launched Product with Initial Traction</h3>

<p>Higher valuations require demonstrable market traction:</p>

<ul>
  <li>Publicly launched product with 500-2,000+ users or 3-10 paying customers</li>
  <li>$5K-$25K MRR or clear path to monetization</li>
  <li>Strong engagement metrics (40%+ WAU/MAU for consumer, weekly usage for B2B)</li>
  <li>Early evidence of product-market fit (high retention, organic growth, customer testimonials)</li>
</ul>

<p>According to <a href="https://www.nfx.com" target="_blank" rel="noopener noreferrer">NFX</a>, founders who reach this valuation tier typically have 6-12 months of product development and 3-6 months of public traction before raising.</p>

<h3>$8M-$10M+ Caps: Strong Traction or Exceptional Founders</h3>

<p>The highest pre-seed valuations require exceptional circumstances:</p>

<ul>
  <li>$50K+ MRR with strong growth trajectory (20%+ monthly)</li>
  <li>1,000+ paying customers or 10,000+ engaged users</li>
  <li>Repeat founders with successful exits</li>
  <li>Competitive deals with multiple term sheets</li>
  <li>Hot market with investor FOMO (AI, fintech infrastructure)</li>
</ul>

<p>Many startups at this level could raise seed rounds but choose pre-seed structures for speed and flexibility.</p>

<h2>Pre-Seed Valuation by Industry (2025)</h2>

<p>Industry selection impacts valuation expectations significantly:</p>

<h3>B2B SaaS and Enterprise Software</h3>

<p><strong>Typical Range: $3M-$7M</strong></p>

<p>SaaS remains the most fundable category at pre-seed, with clear revenue models and understood scaling paths. Valuations skew higher for vertical SaaS with domain expert founders or horizontal infrastructure with massive TAM.</p>

<h3>Artificial Intelligence and Machine Learning</h3>

<p><strong>Typical Range: $5M-$12M</strong></p>

<p>AI startups command premium valuations in 2025, though investor expectations have increased dramatically. Founders need to demonstrate novel IP, unique data access, or proprietary training approaches—not just wrapper apps on OpenAI APIs.</p>

<p>Infrastructure AI (developer tools, model optimization, data pipelines) trades at higher multiples than application-layer AI due to stronger defensibility.</p>

<h3>Fintech</h3>

<p><strong>Typical Range: $3M-$8M</strong></p>

<p>Fintech valuations remain healthy but compressed from 2021 peaks. Embedded finance and B2B fintech infrastructure command premiums over consumer fintech, which faces high CAC and regulatory scrutiny.</p>

<h3>Consumer and Marketplace</h3>

<p><strong>Typical Range: $2M-$5M</strong></p>

<p>Consumer startups face the toughest valuation environment post-correction. Investors demand strong early retention metrics and credible CAC-to-LTV ratios before committing. Marketplaces face additional skepticism around cold-start problems.</p>

<h3>Healthcare and Biotech</h3>

<p><strong>Typical Range: $3M-$8M</strong></p>

<p>Digital health companies raising pre-seed need regulatory clarity and pilot partnerships with health systems or payers. Biotech pre-seeds typically raise larger rounds ($1M-$2M+) at higher valuations due to longer development timelines.</p>

<h3>Hardware and Deep Tech</h3>

<p><strong>Typical Range: $2M-$6M</strong></p>

<p>Hardware startups face lower valuations but also lower expectations at pre-seed. Investors understand longer timelines and capital requirements. Working prototypes significantly increase valuations versus CAD models or concepts.</p>

<h2>Pre-Seed Round Structures: SAFEs vs. Priced Rounds</h2>

<p>In 2025, approximately 85% of pre-seed rounds use SAFE notes rather than priced equity rounds, according to <a href="https://www.cooleygo.com" target="_blank" rel="noopener noreferrer">Cooley</a> data. Here's why:</p>

<h3>Why SAFEs Dominate Pre-Seed</h3>

<p>SAFEs offer speed, simplicity, and flexibility. Closing a SAFE takes 1-2 weeks versus 4-8 weeks for priced rounds. Legal costs run $5K-$15K for SAFEs versus $25K-$50K+ for priced rounds. For capital-constrained pre-seed founders, this matters.</p>

<p>SAFEs also allow rolling closes, meaning you can close $100K with your first investor and continue raising without renegotiating terms with early investors.</p>

<h3>SAFE Terms: Valuation Caps and Discounts</h3>

<p>Standard pre-seed SAFE terms in 2025:</p>

<ul>
  <li><strong>Valuation cap:</strong> Sets the maximum valuation at which your SAFE converts (e.g., $5M cap)</li>
  <li><strong>Discount:</strong> 10-20% discount to seed round price (20% standard)</li>
  <li><strong>Pro-rata rights:</strong> Often included for lead investors ($100K+)</li>
  <li><strong>MFN (Most Favored Nation):</strong> Rarely used in 2025; valuation caps have replaced MFN structures</li>
</ul>

<p>Most sophisticated angels and micro-VCs negotiate for BOTH a cap and discount, giving them downside protection if your seed valuation comes in lower than the cap.</p>

<h3>When to Consider Priced Rounds</h3>

<p>Priced rounds make sense when:</p>

<ul>
  <li>You're raising $2M+ at pre-seed (large enough to justify legal costs)</li>
  <li>Institutional investors require priced rounds for fund compliance</li>
  <li>You want board seats or formal governance structures</li>
  <li>You're in a geography where SAFEs are uncommon (some European markets)</li>
</ul>

<h2>Pre-Seed Dilution: How Much Equity Should You Give Up?</h2>

<p>Typical pre-seed dilution ranges from 10% to 20%, with most rounds settling around 12-15%.</p>

<h3>Calculating Dilution from SAFE Caps</h3>

<p>If you raise on a $5M SAFE cap and raise $500K total, you're giving up approximately 10% of your company ($500K / $5M = 10%).</p>

<p>However, dilution is actually higher when SAFEs convert at seed because seed rounds typically happen at higher valuations than your SAFE cap. Here's a worked example:</p>

<ul>
  <li>Pre-seed: Raise $500K on $5M cap</li>
  <li>Seed: Raise $2M at $12M pre-money valuation</li>
  <li>SAFE holders receive: $500K / $5M = 10% of pre-money equity</li>
  <li>Seed investors receive: $2M / ($12M + $2M) = 14.3%</li>
  <li>Total dilution to founders: 10% + 14.3% = 24.3%</li>
</ul>

<p>This is why SAFE caps matter—higher caps mean less dilution when converting at seed.</p>

<h3>Strategic Dilution Considerations</h3>

<p>Don't over-optimize for minimizing dilution at pre-seed. Taking $750K at a $4M cap from amazing angels is far better than taking $500K at a $6M cap from disconnected investors.</p>

<p>Great pre-seed investors provide strategic value: customer intros, recruitment help, and warm seed-stage investor connections. This value often outweighs an extra 2-3% dilution.</p>

<h2>What Investors Expect at Pre-Seed in 2025</h2>

<p>Beyond traction benchmarks, here's what pre-seed investors actually evaluate:</p>

<h3>1. Founder-Market Fit</h3>

<p>Why are YOU the right person to build THIS company? Investors look for personal connection to the problem, relevant expertise, or unique insights that would be difficult for competitors to replicate.</p>

<h3>2. Market Size and Timing</h3>

<p>Credible TAM analysis showing $1B+ addressable market. Investors also assess "why now?"—what enabling technology, regulation, or behavioral shift makes this the right time?</p>

<h3>3. Differentiation</h3>

<p>What's your unfair advantage? This could be proprietary technology, unique data access, network effects, or distribution channels. Avoid pitching "better UX" or "we'll execute better"—these aren't defensible.</p>

<h3>4. Capital Efficiency Mindset</h3>

<p>In 2025, investors reward founders who can articulate how they'll reach key milestones with available capital. Vague answers like "we'll figure it out" or "we'll hire a great team" signal lack of operational maturity.</p>

<h3>5. Fundraising Sophistication</h3>

<p>Investors evaluate how you fundraise as a proxy for how you'll operate the business. Clear data rooms, responsive communication, and organized processes signal competence.</p>

<h2>Common Pre-Seed Valuation Mistakes</h2>

<h3>Mistake 1: Anchoring to 2021 Valuations</h3>

<p>Many founders still reference 2021 blog posts or TechCrunch articles showing $10M-$15M pre-seed caps. That market no longer exists. Anchoring to outdated benchmarks alienates investors and prolongs fundraising.</p>

<h3>Mistake 2: Optimizing for Highest Valuation</h3>

<p>The "best" investor isn't the one offering the highest cap—it's the one who adds most strategic value. A $4M cap from a top-tier angel with warm VC intros beats a $6M cap from a passive check-writer.</p>

<h3>Mistake 3: Raising at Sky-High Valuations</h3>

<p>Raising at a $10M pre-seed cap feels like winning until you try to raise seed at $20M+ and realize you don't have the traction to justify it. Now you're facing a flat or down round, which scares away investors.</p>

<p>The best pre-seed valuations allow for 2-3x step-ups at seed, giving you room to grow into your valuation.</p>

<h3>Mistake 4: Negotiating Too Aggressively</h3>

<p>Founders who nickel-and-dime angels over 1-2% dilution often lose those investors entirely. Pre-seed is about building relationships, not extracting maximum value from every negotiation.</p>

<h2>How to Increase Your Pre-Seed Valuation</h2>

<p>If your initial investor conversations suggest lower valuations than expected, here are tactical strategies:</p>

<h3>1. Build More Product and Traction</h3>

<p>The single best way to increase valuation is demonstrating progress. Three months of user growth or early revenue can increase valuations by 30-50%.</p>

<h3>2. Create Competitive Tension</h3>

<p>Valuations increase when multiple investors want in. Run a focused fundraising process with 15-25 target investors, create urgency with a clear timeline, and leverage early interest to create FOMO.</p>

<h3>3. Target Investors Who Understand Your Market</h3>

<p>Fintech founders should target fintech angels, vertical SaaS founders should target investors with domain expertise. Specialized investors pay premiums for startups they deeply understand.</p>

<h3>4. Improve Your Fundraising Materials</h3>

<p>A tight pitch deck, compelling demo, and impressive early metrics signal professionalism. Many founders lose 10-20% valuation simply by presenting poorly.</p>

<h2>Pre-Seed Valuation Benchmarks: Key Takeaways</h2>

<ul>
  <li><strong>Geographic range:</strong> $2M-$8M caps, with SF/NYC 30-50% above other markets</li>
  <li><strong>Founder premium:</strong> Repeat founders command 50-150% premiums; first-timers need traction</li>
  <li><strong>Traction requirements:</strong> $3M-$5M caps need MVPs; $5M+ caps need launched products with early users</li>
  <li><strong>Industry variance:</strong> AI and B2B SaaS trade at premiums; consumer and hardware at discounts</li>
  <li><strong>Standard dilution:</strong> 10-20% at pre-seed, with 12-15% most common</li>
  <li><strong>SAFE dominance:</strong> 85% of pre-seeds use SAFEs; caps + 20% discounts are standard</li>
  <li><strong>Investor priorities:</strong> Founder-market fit, capital efficiency, and market timing matter more than perfect traction</li>
</ul>

<h2>Model Your Pre-Seed Valuation and Dilution</h2>

<p>Use <a href="https://www.icanpitch.com" target="_blank" rel="noopener noreferrer">ICanPitch's valuation calculator</a> to model different SAFE cap scenarios, understand dilution across multiple funding rounds, and benchmark your company against industry-specific pre-seed data. Get clarity on the right valuation range for your stage, geography, and traction.</p>

              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-gray-700">pre-seed</Badge>
                  <Badge variant="outline" className="text-gray-700">valuation</Badge>
                  <Badge variant="outline" className="text-gray-700">SAFE</Badge>
                  <Badge variant="outline" className="text-gray-700">cap table</Badge>
                  <Badge variant="outline" className="text-gray-700">startup funding</Badge>
                </div>
              </div>

              
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/learn/" className="text-blue-600 hover:text-blue-700 underline">Calculator Guides</Link>
              <Link href="/blog/" className="text-blue-600 hover:text-blue-700 underline">More Articles</Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Model Your Startup?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Try our free startup calculators to make informed decisions about your equity and fundraising.
              </p>
              <a
                href="https://icanpitch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all"
              >
                Explore Calculators →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
