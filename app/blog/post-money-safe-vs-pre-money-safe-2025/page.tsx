import { Metadata } from 'next';
import Script from 'next/script';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import { Header } from '@/components/header';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: "Post-Money SAFE vs Pre-Money SAFE: Complete 2025 Comparison | ICanPitch",
  description: "Understand the critical differences between post-money and pre-money SAFEs. Learn why 87% of startups use post-money SAFEs, how dilution calculations differ, and which format protects founder equity.",
  keywords: ["post-money-SAFE", "pre-money-SAFE", "SAFE-comparison", "dilution", "Y-Combinator", "startup-funding", "founder-equity"],

  openGraph: {
    title: "Post-Money SAFE vs Pre-Money SAFE: Complete 2025 Comparison",
    description: "Understand the critical differences between post-money and pre-money SAFEs. Learn why 87% of startups use post-money SAFEs, how dilution calculations differ, and which format protects founder equity.",
    type: "article",
    publishedTime: "2025-01-17T00:00:00.000Z",
    url: "https://icanpitch.com/blog/post-money-safe-vs-pre-money-safe-2025/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Post-Money SAFE vs Pre-Money SAFE: Complete 2025 Comparison",
    description: "Understand the critical differences between post-money and pre-money SAFEs. Learn why 87% of startups use post-money SAFEs, how dilution calculations differ, and which format protects founder equity.",
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Post-Money SAFE vs Pre-Money SAFE: Complete 2025 Comparison",
    "description": "Understand the critical differences between post-money and pre-money SAFEs. Learn why 87% of startups use post-money SAFEs, how dilution calculations differ, and which format protects founder equity.",
    "datePublished": "2025-01-17T00:00:00.000Z",
    "url": "https://icanpitch.com/blog/post-money-safe-vs-pre-money-safe-2025/",
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
        "name": "Which is better for founders: post-money or pre-money SAFEs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Post-money SAFEs are better for founders in virtually all scenarios. While pre-money SAFEs result in slightly less mathematical dilution when raising multiple SAFEs (typically 1-2 percentage points less), post-money SAFEs provide transparency and predictability that enable better decision-making."
        }
      },
      {
        "@type": "Question",
        "name": "What percentage of SAFEs in 2025 are post-money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "87% of all SAFEs signed in 2024 were post-money format, and that percentage is expected to reach 90%+ in 2025. Post-money SAFEs are the overwhelming industry standard."
        }
      },
      {
        "@type": "Question",
        "name": "If pre-money SAFEs dilute founders less, why did Y Combinator switch to post-money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Y Combinator switched to post-money SAFEs in 2018 because the transparency and predictability benefits outweigh the minor dilution advantages of pre-money SAFEs. Founders couldn't accurately calculate dilution with pre-money SAFEs when raising multiple rounds, leading to poor decision-making and cap table surprises."
        }
      },
      {
        "@type": "Question",
        "name": "Can I raise one pre-money SAFE and one post-money SAFE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can, but you absolutely shouldn't. Mixing pre-money and post-money SAFEs creates massive cap table complexity because the two formats calculate dilution using incompatible formulas. Pick one format (post-money) and use it consistently across all SAFEs."
        }
      }
    ]
  }
];

export default function PostMoneyVsPreMoneySafeBlogPost() {
  const contentPath = path.join(process.cwd(), 'content/blog/post-money-safe-vs-pre-money-safe-2025/content.html');
  const content = fs.readFileSync(contentPath, 'utf-8');

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
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">SAFE</Badge>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Dilution</Badge>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Post-Money SAFE vs Pre-Money SAFE: Complete 2025 Comparison
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-600 mb-8">
                <time dateTime="2025-01-17T00:00:00.000Z">January 17, 2025</time>
                <span>•</span>
                <span>15 min read</span>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Understand the critical differences between post-money and pre-money SAFEs. Learn why 87% of startups use post-money SAFEs, how dilution calculations differ, and which format protects founder equity.
              </p>
            </div>
          </div>
        </article>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <article
                className="
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
                "
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-gray-700">post-money-SAFE</Badge>
                  <Badge variant="outline" className="text-gray-700">pre-money-SAFE</Badge>
                  <Badge variant="outline" className="text-gray-700">SAFE-comparison</Badge>
                  <Badge variant="outline" className="text-gray-700">dilution</Badge>
                  <Badge variant="outline" className="text-gray-700">Y-Combinator</Badge>
                  <Badge variant="outline" className="text-gray-700">startup-funding</Badge>
                  <Badge variant="outline" className="text-gray-700">founder-equity</Badge>
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
                Model Your SAFE Dilution
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Use our free SAFE calculator to compare post-money and pre-money dilution scenarios for your startup.
              </p>
              <a
                href="https://icanpitch.com/safe-calculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all"
              >
                Try SAFE Calculator →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
