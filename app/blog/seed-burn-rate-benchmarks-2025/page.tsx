import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: "Seed Stage Burn Rate Benchmarks 2025: Scaling from Pre-Seed to PMF | ICanPitch ",
  description: "Complete seed stage burn rate benchmarks for 2025. Learn how to scale your team, invest in go-to-market, and manage burn while pursuing product-market fit.",
  keywords: ["seed stage", "burn rate", "product-market fit", "scaling", "runway"],
  openGraph: {
    title: "Seed Stage Burn Rate Benchmarks 2025: Scaling from Pre-Seed to PMF",
    description: "Complete seed stage burn rate benchmarks for 2025. Learn how to scale your team, invest in go-to-market, and manage burn while pursuing product-market fit.",
    type: "article",
    publishedTime: "2025-01-07T00:00:00.000Z",
    url: "https://icanpitch.com/blog/seed-burn-rate-benchmarks-2025/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seed Stage Burn Rate Benchmarks 2025: Scaling from Pre-Seed to PMF",
    description: "Complete seed stage burn rate benchmarks for 2025. Learn how to scale your team, invest in go-to-market, and manage burn while pursuing product-market fit.",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Seed Stage Burn Rate Benchmarks 2025: Scaling from Pre-Seed to PMF",
    "description": "Complete seed stage burn rate benchmarks for 2025. Learn how to scale your team, invest in go-to-market, and manage burn while pursuing product-market fit.",
    "datePublished": "2025-01-07T00:00:00.000Z",
    "url": "https://icanpitch.com/blog/seed-burn-rate-benchmarks-2025/",
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

export default function SeedBurnRateBenchmarks2025BlogPost() {
  return (
    <>
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
        <Header />

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
                Seed Stage Burn Rate Benchmarks 2025: Scaling from Pre-Seed to PMF
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-600 mb-8">
                
                <time dateTime="2025-01-07T00:00:00.000Z">January 6, 2025</time>
                <span>•</span>
                <span>12 min min read</span>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Complete seed stage burn rate benchmarks for 2025. Learn how to scale your team, invest in go-to-market, and manage burn while pursuing product-market fit.
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
                <h2>Understanding Seed Stage Burn Rate in 2025</h2>

<p>Seed stage represents the critical transition from product validation to product-market fit (PMF) and early scaling. Unlike pre-seed, where lean operations dominate, seed-stage companies strategically increase burn to accelerate growth, build out teams, and invest in go-to-market strategies. The key challenge is scaling burn rate in alignment with traction, avoiding the trap of premature scaling that killed countless 2022-2023 startups.</p>

<p>According to <a href="https://www.carta.com" target="_blank" rel="noopener noreferrer">Carta's</a> 2024 Seed Stage Report, median seed-stage burn rates now range from $80,000 to $200,000 per month, with most companies clustering around $120,000-$150,000 monthly. This represents a 20-30% decrease from 2021 peaks but higher than pre-seed by 2-3x, reflecting intentional team expansion and market investment.</p>

<h2>Seed Stage Burn Rate by Industry (2025 Data)</h2>

<p>Industry dynamics fundamentally shape appropriate seed-stage burn rates:</p>

<h3>B2B SaaS</h3>

<p><strong>Typical Monthly Burn: $100,000-$180,000</strong></p>

<p>B2B SaaS companies at seed typically scale to 8-15 employees, including 3-5 engineers, 2-3 go-to-market hires (sales, marketing, customer success), and operational roles. The burn breakdown looks like this:</p>

<ul>
  <li><strong>Engineering team:</strong> $50K-$90K/month (3-5 engineers at $140K-$200K annual)</li>
  <li><strong>Go-to-market:</strong> $30K-$50K/month (2-3 hires including first sales rep, growth marketer)</li>
  <li><strong>Founders:</strong> $20K-$30K/month (market-rate salaries post-seed)</li>
  <li><strong>Infrastructure and tools:</strong> $5K-$10K/month (expanded cloud, sales/marketing stack)</li>
  <li><strong>Marketing and sales:</strong> $10K-$25K/month (ads, events, content, ABM)</li>
  <li><strong>Operations:</strong> $5K-$10K/month (legal, accounting, HR, office)</li>
</ul>

<p>High-end burn ($150K-$180K/month) typically includes senior engineering hires, aggressive customer acquisition, or competitive markets requiring faster execution.</p>

<h3>Enterprise SaaS</h3>

<p><strong>Typical Monthly Burn: $120,000-$200,000</strong></p>

<p>Enterprise SaaS burns higher than SMB SaaS due to longer sales cycles, need for solutions engineers, and emphasis on customer success to prevent churn. Many enterprise seed-stage companies allocate 40-50% of burn to go-to-market versus 30-35% for product-led SaaS.</p>

<p>The additional burn funds field sales reps ($150K-$200K OTE), solutions engineers ($140K-$180K), and enterprise marketing (conferences, ABM campaigns, analyst relations).</p>

<h3>Consumer Apps and Marketplaces</h3>

<p><strong>Typical Monthly Burn: $120,000-$250,000</strong></p>

<p>Consumer companies show the widest variance, with burn driven almost entirely by user acquisition costs (UAC). Successful consumer founders at seed have validated core retention metrics (D1/D7/D30) and now invest heavily in paid acquisition to find scalable channels.</p>

<p>A typical consumer seed burn includes $40K-$80K/month in paid acquisition (Meta, Google, TikTok), $50K-$90K in engineering and product, $20K-$40K in content and community, and $10K-$20K in operations.</p>

<p>Marketplaces face additional complexity with two-sided burn. Smart marketplace founders focus 70% of acquisition spend on the constrained side (usually supply), using manual outreach and partnerships rather than pure paid ads to keep burn manageable.</p>

<h3>Fintech</h3>

<p><strong>Typical Monthly Burn: $130,000-$220,000</strong></p>

<p>Fintech burn rates exceed typical SaaS due to regulatory compliance, security infrastructure, fraud prevention, and customer acquisition in a crowded market. Seed-stage fintech companies typically allocate:</p>

<ul>
  <li>$60K-$100K/month on engineering (larger teams for security, compliance, backend infrastructure)</li>
  <li>$15K-$30K/month on compliance and legal (ongoing regulatory work, audits, licenses)</li>
  <li>$20K-$40K/month on customer acquisition (higher CACs in competitive market)</li>
  <li>$10K-$20K/month on fraud prevention and security tools</li>
</ul>

<h3>Hardware and Deep Tech</h3>

<p><strong>Typical Monthly Burn: $150,000-$300,000</strong></p>

<p>Hardware and deep tech startups burn significantly more at seed, driven by prototyping costs, manufacturing tooling, longer R&amp;D cycles, and specialized talent. According to <a href="https://www.nfx.com" target="_blank" rel="noopener noreferrer">NFX</a>, hardware founders should plan for 24-30 month seed runways versus 18-24 months for software.</p>

<p>A hardware seed burn includes $70K-$120K/month in engineering (hardware, firmware, and software engineers), $30K-$80K/month in prototyping and manufacturing, $15K-$30K/month in supply chain and operations, and $20K-$40K/month in regulatory and testing.</p>

<h3>AI and Machine Learning Infrastructure</h3>

<p><strong>Typical Monthly Burn: $140,000-$250,000</strong></p>

<p>AI infrastructure startups face elevated burn rates due to compute costs, specialized ML engineering talent, and research-intensive development. A typical AI seed burn allocates $70K-$120K/month to engineering (ML engineers command 20-40% premiums), $20K-$50K/month to cloud and compute (training, inference, data pipelines), and $30K-$50K/month to go-to-market.</p>

<p>Application-layer AI companies (using third-party models) burn closer to standard SaaS rates, while infrastructure and model developers burn at the high end.</p>

<h2>Scaling from Pre-Seed to Seed: Team Growth Patterns</h2>

<p>The transition from pre-seed to seed fundamentally changes team composition and burn rate:</p>

<h3>Pre-Seed Team Composition (Baseline)</h3>

<ul>
  <li>2-3 co-founders</li>
  <li>0-2 early employees</li>
  <li>Monthly burn: $30K-$80K</li>
</ul>

<h3>Seed Team Composition (Target)</h3>

<ul>
  <li>2-3 co-founders (now taking market salaries)</li>
  <li>5-12 employees across engineering, product, GTM, and operations</li>
  <li>Monthly burn: $80K-$200K</li>
</ul>

<h3>Strategic Hiring Sequence</h3>

<p>The optimal hiring sequence at seed depends on your primary constraint:</p>

<p><strong>Product-Constrained (Need to Build Faster):</strong></p>
<ol>
  <li>Senior engineer or technical lead (months 0-3)</li>
  <li>Product designer (months 3-6)</li>
  <li>Additional engineers (months 6-12)</li>
  <li>First GTM hire (months 9-12)</li>
</ol>

<p><strong>Market-Constrained (Have Product, Need Customers):</strong></p>
<ol>
  <li>First sales or growth hire (months 0-3)</li>
  <li>Customer success or support (months 3-6)</li>
  <li>Additional GTM hires (months 6-12)</li>
  <li>Engineers to support feature requests (months 6-12)</li>
</ol>

<p>Most successful seed-stage companies balance product and GTM, growing both functions in parallel but weighted toward their primary constraint.</p>

<h2>Geographic Burn Rate Variations at Seed</h2>

<h3>San Francisco Bay Area</h3>

<p><strong>Median Burn: $150,000-$220,000/month</strong></p>

<p>SF continues to show the highest seed burns, driven by talent costs. A 10-person team in SF burns $120K-$180K in salaries alone, versus $80K-$130K for equivalent talent in Austin or remote markets.</p>

<p>However, SF proximity to customers (for B2B), investors, and talent can accelerate growth enough to justify the premium for certain startups.</p>

<h3>New York City</h3>

<p><strong>Median Burn: $130,000-$200,000/month</strong></p>

<p>NYC burn rates track 10-20% below SF, with slightly lower engineering salaries offset by similar GTM costs (sales and marketing compensation is location-agnostic).</p>

<h3>Austin, Seattle, Boston, Denver (Tier 2 Markets)</h3>

<p><strong>Median Burn: $100,000-$160,000/month</strong></p>

<p>Tier 2 US markets offer 25-35% lower burn rates than SF/NYC while maintaining access to experienced talent. Many 2025 seed-stage companies default to these markets or remote-first models to maximize runway.</p>

<h3>Remote-First Teams</h3>

<p><strong>Median Burn: $90,000-$140,000/month</strong></p>

<p>Remote-first seed companies can hire globally, accessing senior talent in lower-cost markets. A senior engineer in Poland, Portugal, or Mexico often costs $80K-$120K versus $150K-$220K in SF, reducing burn by 30-50% without sacrificing quality.</p>

<p>However, remote companies face hidden costs: team offsites ($10K-$25K quarterly), collaboration tools, and sometimes slower execution due to time zone challenges.</p>

<h2>Burn Rate and Product-Market Fit</h2>

<p>The relationship between burn rate and PMF is critical at seed stage:</p>

<h3>Pre-PMF Burn Strategy (Months 0-9)</h3>

<p>Before achieving product-market fit, burn should remain relatively conservative. Premature scaling—hiring aggressively before PMF—is the leading cause of seed-stage failure.</p>

<p><strong>Target burn: $80K-$130K/month</strong></p>

<p>Focus spending on product iteration, customer development, and small-scale GTM experiments. A lean engineering team plus one GTM generalist can move quickly while preserving capital for post-PMF scaling.</p>

<h3>Post-PMF Burn Strategy (Months 9-18)</h3>

<p>Once you've achieved PMF (strong retention, organic growth, positive customer feedback), intentionally increase burn to accelerate growth before competitors establish market position.</p>

<p><strong>Target burn: $130K-$200K+/month</strong></p>

<p>Hire aggressively in areas with proven ROI: if paid ads are working, hire growth marketers; if sales outreach is converting, hire SDRs and AEs; if product is the constraint, expand engineering.</p>

<h3>PMF Indicators Justifying Increased Burn</h3>

<ul>
  <li><strong>Retention:</strong> 60%+ D30 retention (consumer), 90%+ net revenue retention (B2B SaaS)</li>
  <li><strong>Organic growth:</strong> 15-30%+ monthly growth without paid acquisition</li>
  <li><strong>Customer feedback:</strong> Customers describe your product as "must-have" (40%+ in Sean Ellis test)</li>
  <li><strong>Unit economics:</strong> CAC payback under 12 months, LTV:CAC ratio above 3:1</li>
  <li><strong>Market pull:</strong> Inbound demand exceeding sales capacity</li>
</ul>

<h2>Seed Stage Runway: 18-24 Months Standard</h2>

<p>The standard seed runway target is <strong>18-24 months</strong>, longer than pre-seed's 12-18 months. Here's why:</p>

<h3>Why 18 Months Minimum</h3>

<p>Seed-stage companies need time to find product-market fit, iterate on go-to-market strategies, and build enough traction to raise Series A (typically $1M-$3M ARR). Achieving this in under 18 months is possible but uncommon, especially for first-time founders.</p>

<p>Additionally, Series A fundraising takes 4-6 months, meaning you should start raising when you have 9-12 months of runway remaining to avoid desperation.</p>

<h3>Why 24 Months Is Better</h3>

<p>Twenty-four month runways provide flexibility to experiment, pivot if needed, and optimize Series A timing. According to <a href="https://www.ycombinator.com" target="_blank" rel="noopener noreferrer">Y Combinator</a>, founders who raise Series A with 12+ months of remaining runway achieve 20-25% higher valuations than founders raising with under 6 months.</p>

<h3>Calculating Your Seed Runway</h3>

<p>Use this formula:</p>

<p><strong>Runway (Months) = (Total Seed Capital × 0.92) ÷ Average Monthly Burn</strong></p>

<p>The 0.92 multiplier accounts for one-time expenses (legal, recruitment, signing bonuses) that consume approximately 8% of the round.</p>

<h3>Worked Example: $2M Seed Round</h3>

<ul>
  <li>Total raised: $2,000,000</li>
  <li>Usable capital: $1,840,000</li>
  <li>Target runway: 20 months</li>
  <li><strong>Maximum average monthly burn: $92,000</strong></li>
</ul>

<p>Note: "average" monthly burn is critical—you might start at $70K/month and ramp to $120K/month as you hire, averaging around $92K.</p>

<h2>Burn Multiple: The Key Efficiency Metric</h2>

<p>At seed stage, investors increasingly evaluate <strong>burn multiple</strong>: the ratio of capital burned to net new ARR generated.</p>

<p><strong>Burn Multiple = Net Burn / Net New ARR</strong></p>

<h3>Burn Multiple Benchmarks (2025)</h3>

<ul>
  <li><strong>Under 1.5x:</strong> Excellent capital efficiency (best-in-class)</li>
  <li><strong>1.5x-2.5x:</strong> Good efficiency (most successful seed companies)</li>
  <li><strong>2.5x-3.5x:</strong> Acceptable (room for improvement)</li>
  <li><strong>Above 3.5x:</strong> Poor efficiency (red flag for Series A)</li>
</ul>

<h3>Worked Example</h3>

<p>If you burn $120K/month ($1.44M annually) and add $720K net new ARR, your burn multiple is 2.0x ($1.44M / $720K = 2.0). This is solid efficiency for a seed-stage company.</p>

<p>If you burned $1.44M but only added $360K ARR, your burn multiple is 4.0x—a signal you're scaling costs faster than revenue, which will hurt Series A prospects.</p>

<h2>When Your Seed Burn Rate Is Too High</h2>

<p>Warning signs your burn is unsustainable:</p>

<h3>Burning Over $200K/Month Without PMF</h3>

<p>If you're burning six figures monthly but lack clear PMF indicators (strong retention, organic growth, positive unit economics), you've likely over-hired or invested prematurely in growth channels.</p>

<h3>Burn Growing Faster Than Revenue</h3>

<p>Burn should scale with revenue, not ahead of it. If burn is growing 15%/month but revenue is flat or growing 5%/month, you're on track for a down round or bridge financing.</p>

<h3>Less Than 12 Months Runway Remaining</h3>

<p>If you have fewer than 12 months of cash, you should already be in fundraising mode or implementing immediate cost cuts. Most seed extensions or bridge rounds happen because founders waited too long to address runway issues.</p>

<h3>Poor Unit Economics</h3>

<p>If your CAC payback exceeds 18 months or LTV:CAC is below 2:1, increasing burn to "grow faster" will only accelerate your path to insolvency. Fix unit economics before scaling spend.</p>

<h2>Optimizing Seed Stage Burn Rate</h2>

<h3>1. Hire for Leverage, Not Coverage</h3>

<p>Every hire should unlock new capabilities or accelerate progress on critical paths. Avoid "nice to have" hires like executive assistants, office managers, or junior generalists who provide coverage but not leverage.</p>

<h3>2. Use Contract and Fractional Talent</h3>

<p>For specialized needs (design, data analytics, recruiting), use contractors or fractional executives rather than full-time hires. A fractional CFO costs $5K-$10K/month versus $15K-$25K/month for full-time.</p>

<h3>3. Negotiate SaaS and Infrastructure Costs</h3>

<p>At seed stage, you have leverage to negotiate: AWS/GCP credits through accelerator programs, startup discounts from Salesforce, HubSpot, and other SaaS vendors. These savings can reduce burn by $3K-$8K/month.</p>

<h3>4. Implement Quarterly Budget Reviews</h3>

<p>Review burn monthly but set budgets quarterly. This forces intentional spending decisions and prevents slow drift toward unsustainable burn rates.</p>

<h3>5. Track Burn by Function</h3>

<p>Break down burn into Engineering, GTM, Operations, and Other. If one function is growing disproportionately without corresponding output, you've identified waste.</p>

<h2>Burn Rate Benchmarks by Seed Round Size</h2>

<p>Your round size should align with your burn rate and runway targets:</p>

<h3>$1M-$1.5M Seed Rounds</h3>

<p><strong>Target Burn: $60K-$85K/month</strong></p>
<p><strong>Runway: 12-18 months</strong></p>

<p>Smaller seed rounds require conservative burn. Founders typically remain lean (5-8 employees), prioritize capital-efficient growth, and plan for Series A at $500K-$1M ARR.</p>

<h3>$2M-$3M Seed Rounds</h3>

<p><strong>Target Burn: $90K-$140K/month</strong></p>
<p><strong>Runway: 18-24 months</strong></p>

<p>Standard seed rounds in 2025. Founders can hire strategically (8-12 employees), invest in early GTM, and target $1M-$2M ARR for Series A.</p>

<h3>$3M-$5M Seed Rounds</h3>

<p><strong>Target Burn: $130K-$200K/month</strong></p>
<p><strong>Runway: 20-24 months</strong></p>

<p>Larger seeds support aggressive scaling in competitive markets. Expect to build a 12-18 person team, invest heavily in GTM, and target $2M-$3M ARR for Series A.</p>

<h2>Seed Burn Rate by Milestone</h2>

<p>Smart founders phase burn rate increases with milestone achievements:</p>

<h3>Months 0-6: Find Product-Market Fit</h3>

<p><strong>Target Burn: $80K-$120K/month</strong></p>

<p>Stay lean while iterating toward PMF. Hire slowly, focus on product and customer development, run small GTM experiments.</p>

<h3>Months 6-12: Scale What Works</h3>

<p><strong>Target Burn: $110K-$160K/month</strong></p>

<p>Once PMF is clear, increase burn to scale proven channels. Hire 2-4 additional team members in high-ROI functions.</p>

<h3>Months 12-18: Build Repeatability</h3>

<p><strong>Target Burn: $130K-$190K/month</strong></p>

<p>Formalize processes, build GTM playbooks, expand team to 12-18 people. Focus on consistent execution at scale.</p>

<h3>Months 18-24: Prepare for Series A</h3>

<p><strong>Target Burn: $140K-$200K/month</strong></p>

<p>Optimize metrics for Series A (ARR growth, net retention, gross margins), build executive team, establish board rhythms.</p>

<h2>Seed Burn Rate: Key Takeaways</h2>

<ul>
  <li><strong>Standard range:</strong> $80K-$200K/month depending on industry, stage, and geography</li>
  <li><strong>Target runway:</strong> 18-24 months, with 20+ months ideal for flexibility</li>
  <li><strong>Team size:</strong> 5-12 employees, scaled in alignment with PMF and traction</li>
  <li><strong>Geographic variance:</strong> SF/NYC burn 30-50% more than remote or Tier 2 markets</li>
  <li><strong>Burn multiple:</strong> Target 1.5x-2.5x (capital burned per dollar of new ARR)</li>
  <li><strong>PMF inflection:</strong> Keep burn conservative pre-PMF, scale intentionally post-PMF</li>
  <li><strong>Efficiency focus:</strong> 2025 investors reward capital-efficient growth over growth-at-all-costs</li>
</ul>

<h2>Model Your Seed Burn Rate and Runway</h2>

<p>Use <a href="https://www.icanpitch.com" target="_blank" rel="noopener noreferrer">ICanPitch's runway and burn rate calculator</a> to model different hiring plans, compare your burn against industry benchmarks, and optimize your path to product-market fit and Series A readiness. Get data-driven insights for your specific stage and market.</p>

              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-gray-700">seed stage</Badge>
                  <Badge variant="outline" className="text-gray-700">burn rate</Badge>
                  <Badge variant="outline" className="text-gray-700">product-market fit</Badge>
                  <Badge variant="outline" className="text-gray-700">scaling</Badge>
                  <Badge variant="outline" className="text-gray-700">runway</Badge>
                </div>
              </div>

              
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
