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
    // Add more blog posts here as they're created
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
