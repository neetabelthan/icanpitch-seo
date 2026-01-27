import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "How to Calculate SAFE Dilution: A Founder's Guide | ICanPitch Blog",
  description: "Learn how to calculate dilution from SAFE notes and understand the impact on your founder ownership. Includes examples and best practices for early-stage fundraising.",
  keywords: ["SAFE", "dilution", "equity", "founders", "seed-round"],
  authors: [{ name: "Neeta Belthan" }],
  openGraph: {
    title: "How to Calculate SAFE Dilution: A Founder's Guide",
    description: "Learn how to calculate dilution from SAFE notes and understand the impact on your founder ownership. Includes examples and best practices for early-stage fundraising.",
    type: "article",
    publishedTime: "2025-01-15T00:00:00.000Z",
    authors: ["Neeta Belthan"],
    url: "https://icanpitch.com/blog/how-to-calculate-safe-dilution/",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Calculate SAFE Dilution: A Founder's Guide",
    description: "Learn how to calculate dilution from SAFE notes and understand the impact on your founder ownership. Includes examples and best practices for early-stage fundraising.",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/how-to-calculate-safe-dilution/",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "How to Calculate SAFE Dilution: A Founder's Guide",
    "description": "Learn how to calculate dilution from SAFE notes and understand the impact on your founder ownership. Includes examples and best practices for early-stage fundraising.",
    "author": {
      "@type": "Person",
      "name": "Neeta Belthan"
    },
    "datePublished": "2025-01-15T00:00:00.000Z",
    "dateModified": "2025-01-15T00:00:00.000Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/blog/how-to-calculate-safe-dilution/"
    },
    "url": "https://icanpitch.com/blog/how-to-calculate-safe-dilution/",
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

export default function HowToCalculateSafeDilutionBlogPost() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "How to Calculate SAFE Dilution: A Founder's Guide" },
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
                How to Calculate SAFE Dilution: A Founder's Guide
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Neeta Belthan</span>
                </div>
                <span>•</span>
                <time dateTime="2025-01-15T00:00:00.000Z">January 14, 2025</time>
                <span>•</span>
                <span>8 min read</span>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Learn how to calculate dilution from SAFE notes and understand the impact on your founder ownership. Includes examples and best practices for early-stage fundraising.
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
                  <li><a href="#understanding-safe-notes" className="text-blue-600 hover:text-blue-700 text-sm">Understanding SAFE Notes</a></li>
                  <li><a href="#the-basics-of-safe-conversion" className="text-blue-600 hover:text-blue-700 text-sm">The Basics of SAFE Conversion</a></li>
                  <li><a href="#calculating-your-dilution-a-real-example" className="text-blue-600 hover:text-blue-700 text-sm">Calculating Your Dilution: A Real Example</a></li>
                  <li><a href="#common-mistakes-founders-make" className="text-blue-600 hover:text-blue-700 text-sm">Common Mistakes Founders Make</a></li>
                  <li><a href="#tools-to-help-you-model-dilution" className="text-blue-600 hover:text-blue-700 text-sm">Tools to Help You Model Dilution</a></li>
                  <li><a href="#best-practices-for-managing-safe-dilution" className="text-blue-600 hover:text-blue-700 text-sm">Best Practices for Managing SAFE Dilution</a></li>
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
                <h2 id="understanding-safe-notes">Understanding SAFE Notes</h2>
<p>
  SAFE (Simple Agreement for Future Equity) notes have become the standard instrument for early-stage fundraising.
  But many founders don't fully understand how these convert and dilute their ownership when the next priced round happens.
</p>

<p>
  In this guide, we'll break down exactly how SAFE dilution works, with real examples you can apply to your own startup.
</p>

<h2 id="the-basics-of-safe-conversion">The Basics of SAFE Conversion</h2>
<p>
  When you raise money via a SAFE note, you're essentially selling future equity at a discount. The SAFE doesn't
  convert into shares immediately—it waits for a "trigger event," usually a priced equity round.
</p>

<h3>Key Terms to Know</h3>
<ul>
  <li><strong>Valuation Cap</strong>: The maximum valuation at which your SAFE converts, protecting early investors</li>
  <li><strong>Discount Rate</strong>: A percentage discount (typically 10-20%) that SAFE holders get on the price per share</li>
  <li><strong>Conversion Price</strong>: The effective price per share that SAFE holders pay</li>
  <li><strong>Post-Money vs Pre-Money</strong>: Whether the valuation cap includes the SAFE investment or not</li>
</ul>

<h2 id="calculating-your-dilution-a-real-example">Calculating Your Dilution: A Real Example</h2>
<p>
  Let's say you raised $500K on a SAFE with a $5M post-money valuation cap. Now you're raising a Series A at a $12M pre-money valuation.
</p>

<h3>Step 1: Determine the Conversion Price</h3>
<p>
  Your SAFE will convert at the lower of:
</p>
<ul>
  <li>The valuation cap: $5M</li>
  <li>The Series A price with discount: $12M × (1 - 0.20) = $9.6M</li>
</ul>
<p>
  The SAFE converts at $5M (the lower amount), which is better for the SAFE holders.
</p>

<h3>Step 2: Calculate Ownership Percentage</h3>
<p>
  With a post-money SAFE at $5M cap:
</p>
<ul>
  <li>SAFE ownership: $500K ÷ $5M = 10%</li>
  <li>This 10% dilutes all existing shareholders proportionally</li>
</ul>


              <div className="my-10 p-6 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100">
                <p className="text-lg font-semibold text-gray-900 mb-2">Model Your SAFE Conversion</p>
                <p className="text-gray-600 mb-4">See exactly how your SAFE converts at different valuations. Free calculator, no signup required.</p>
                <a
                  href="https://icanpitch.com/safe-calculator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all text-sm"
                >
                  Open SAFE Calculator &rarr;
                </a>
              </div>

              <h2 id="common-mistakes-founders-make">Common Mistakes Founders Make</h2>

<h3>1. Not Understanding Post-Money vs Pre-Money SAFEs</h3>
<p>
  Post-money SAFEs (now standard) are more founder-friendly because the cap includes the SAFE investment itself.
  This means you know exactly how much dilution you're taking upfront.
</p>

<h3>2. Stacking Multiple SAFEs</h3>
<p>
  Each additional SAFE compounds your dilution. If you raise $500K on a $5M cap, then another $300K on a $6M cap,
  you need to calculate each separately and understand the cumulative impact.
</p>

<h3>3. Ignoring the Discount Rate</h3>
<p>
  Even if your Series A is above the cap, the discount rate can still apply if it results in a better price for investors.
</p>

<h2 id="tools-to-help-you-model-dilution">Tools to Help You Model Dilution</h2>
<p>
  Rather than calculating this manually (and risking errors), use our <a href="https://icanpitch.com/safe-calculator/" target="_blank" rel="noopener noreferrer">SAFE Calculator</a>
  to model different scenarios and understand exactly how your ownership will be affected.
</p>

<h2 id="best-practices-for-managing-safe-dilution">Best Practices for Managing SAFE Dilution</h2>

<ol>
  <li><strong>Set realistic caps</strong>: Don't set your valuation cap too low just to close a deal quickly</li>
  <li><strong>Limit the number of SAFEs</strong>: Each additional SAFE adds complexity and dilution</li>
  <li><strong>Model before you sign</strong>: Always run the numbers before accepting SAFE terms</li>
  <li><strong>Communicate with your team</strong>: Make sure co-founders and key employees understand the dilution impact</li>
  <li><strong>Plan your option pool</strong>: Factor in both SAFE conversion and your employee option pool when modeling dilution</li>
</ol>

<h2 id="key-takeaways">Key Takeaways</h2>
<p>
  SAFE notes are a powerful tool for early-stage fundraising, but they come with complexity that many founders underestimate.
  By understanding how conversion works and modeling your dilution scenarios, you can make informed decisions that protect your ownership
  while still raising the capital you need to grow.
</p>

<p>
  Remember: the goal isn't to avoid dilution entirely (that's impossible if you're raising money), but to ensure you're diluting
  at the right pace and maintaining enough ownership to stay motivated and in control of your company's direction.
</p>

              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-gray-700">SAFE</Badge>
                  <Badge variant="outline" className="text-gray-700">dilution</Badge>
                  <Badge variant="outline" className="text-gray-700">equity</Badge>
                  <Badge variant="outline" className="text-gray-700">founders</Badge>
                  <Badge variant="outline" className="text-gray-700">seed-round</Badge>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                      NB
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Neeta Belthan</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Founder of ICanPitch, helping entrepreneurs navigate startup financing, equity, and fundraising with powerful calculators and educational resources.
                    </p>
                  </div>
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
              <Link href="/blog/avoiding-safe-dilution-traps-founders/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Avoiding SAFE Dilution Traps: 7 Mistakes Founders Make</span>
                </Link>
                <Link href="/blog/safe-calculator-first-time-founders-complete-guide/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">SAFE Calculator for First-Time Founders: Complete 2025 Guide</span>
                </Link>
                <Link href="/blog/how-to-negotiate-safe-valuation-cap/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">How to Negotiate SAFE Valuation Caps: 2025 Founder's Guide</span>
                </Link>
                <Link href="/blog/safe-calculator-barcelona/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Barcelona SAFE Calculator: Navigate Startup Valuations in Spain's Tech Hub</span>
                </Link>
                <Link href="/blog/safe-calculator-dublin/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">Dublin SAFE Calculator: Model Your Startup Valuation and Dilution in EUR</span>
                </Link>
            </div>
            <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-4">
              <Link href="/learn/safe-calculator-seed-technical-founder-silicon-valley-optimize-equity-dilution-maximize-founder-ownership/" className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">Calculator Guide: Safe Calculator</Link>
              <Link href="/blog/safe-calculator-guides/" className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">SAFE Calculator Guides</Link>
                <Link href="/blog/equity-guides/" className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">Equity, Vesting & Option Pool Guides</Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Model Your SAFE Conversion
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                See exactly how your SAFE converts at different valuations. Free calculator, no signup required.
              </p>
              <a
                href="https://icanpitch.com/safe-calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all"
              >
                Open SAFE Calculator &rarr;
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
