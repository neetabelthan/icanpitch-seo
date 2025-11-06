import { Metadata } from 'next';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Input } from '@/components/ui/input';
export const metadata: Metadata = {
  title: "Pro Rata Calculator for Series-b Business Founder in Chicago",
  description: "Free pro rata calculator for series-b business-founder in Chicago. Plan-investor-rights with accurate modeling and real-time calculations. Used by 1000+ founders.",
  keywords: ["pro-rata-calculator", "series-b", "business-founder", "chicago", "startup calculator"],
  openGraph: {
    title: "Pro Rata Calculator for Series-b Business Founder in Chicago",
    description: "Free pro rata calculator for series-b business-founder in Chicago. Plan-investor-rights with accurate modeling and real-time calculations. Used by 1000+ founders.",
    type: "article",
    url: "https://icanpitch.com/learn/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights/",
    images: ["/og/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Rata Calculator for Series-b Business Founder in Chicago",
    description: "Free pro rata calculator for series-b business-founder in Chicago. Plan-investor-rights with accurate modeling and real-time calculations. Used by 1000+ founders.",
    images: ["/og/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights.png"],
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pro Rata Calculator for Series-b Business Founder",
    "description": "Free pro rata calculator for series-b business-founder in Chicago. Plan-investor-rights with accurate modeling and real-time calculations. Used by 1000+ founders.",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "datePublished": "2025-08-08T20:19:46.479Z",
    "url": "https://icanpitch.com/learn/pro-rata-calculator-series-b-business-founder-chicago-model-future-dilution-plan-investor-rights/"
  }
];

export default function ProRataCalculatorSeriesBBusinessFounderChicagoModelFutureDilutionPlanInvestorRightsPage() {
  return (
    <>
    <{'>'}
      {jsonLdData.map((data, index) ={'>'} (
        <Script
          key={index}
          id={`json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data)
          }}
        /{'>'}
      ))}
      
      <div className="min-h-screen bg-background"{'>'}
        {/* Breadcrumbs */}
        <nav className="border-b bg-muted/40"{'>'}
          <div className="container px-4 md:px-6"{'>'}
            <ol className="flex items-center space-x-2 py-4 text-sm text-muted-foreground"{'>'}
              <li><a href="/" className="hover:text-foreground"{'>'}Home</a></li{'>'}
              <li className="before:content-['/'] before:mx-2"{'>'}
                <a href="/learn/" className="hover:text-foreground"{'>'}Learn</a{'>'}
              </li{'>'}
              <li className="before:content-['/'] before:mx-2 text-foreground font-medium"{'>'}
                Pro Rata Calculator
              </li{'>'}
            </ol{'>'}
          </div{'>'}
        </nav{'>'}

        {/* Hero Section */}
        <section className="py-12 md:py-20 lg:py-24"{'>'}
          <div className="container px-4 md:px-6"{'>'}
            <div className="mx-auto max-w-4xl text-center"{'>'}
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6"{'>'}
                Pro Rata Calculator for Series-b Business Founder
              </h1{'>'}
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl mb-8"{'>'}</p>
                Free pro rata calculator for series-b business-founder in Chicago. Plan-investor-rights with accurate modeling and real-time calculations. Used by 1000+ founders.
              </p{'>'}
              <div className="flex flex-wrap justify-center gap-2"{'>'}
                <Badge variant="secondary"{'>'}Series-b</Badge{'>'}
                <Badge variant="secondary"{'>'}Business Founder</Badge{'>'}
                <Badge variant="secondary"{'>'}Chicago</Badge{'>'}
              </div{'>'}
            </div{'>'}
          </div{'>'}
        </section{'>'}

        {/* Content */}
        <section className="py-16"{'>'}
          <div className="container px-4 md:px-6"{'>'}
            <div className="mx-auto max-w-4xl"{'>'}
              <div className="prose prose-gray max-w-none dark:prose-invert prose-lg"{'>'}
                <h2{'>'}What Our Pro Rata Calculator Does</h2{'>'}
                <p{'>'}</p>
                  Our Pro Rata Calculator is specifically designed for series-b business-founder who need precise financial modeling. 
                  This professional-grade tool provides comprehensive analysis of your startup's financial structure, 
                  allowing you to explore different scenarios and understand the implications of various decisions.
                </p{'>'}
                
                <h2{'>'}Why This Matters for Series-b Business Founder</h2{'>'}
                <p{'>'}</p>
                  At the series-b stage, business-founder face unique challenges that require specialized financial tools. 
                  Traditional spreadsheets often fall short when modeling complex equity structures and conversion scenarios. 
                  Our Pro Rata Calculator addresses these specific needs with industry-standard calculations and professional-grade analysis.
                </p{'>'}

                <p{'>'}</p>
                  The accuracy of your financial models directly impacts your ability to raise capital and negotiate favorable terms. 
                  Investors expect sophisticated analysis and clear understanding of dilution, ownership, and potential returns. 
                  This tool ensures you're prepared for those conversations.
                </p{'>'}

                <h2{'>'}How to Plan-investor-rights with Pro Rata Calculator</h2{'>'}
                <p{'>'}Our calculator is specifically built to help you plan-investor-rights. The process is straightforward:</p{'>'}</p>
                
                <ol{'>'}
                  <li><strong{'>'}Input your current situation</strong{'>'} - Enter your existing equity structure, investment amounts, and valuation parameters</li{'>'}
                  <li><strong{'>'}Model different scenarios</strong{'>'} - Explore various outcomes by adjusting key variables like valuation caps, discount rates, or investment amounts</li{'>'}
                  <li><strong{'>'}Analyze the results</strong{'>'} - Review detailed breakdowns of ownership percentages, dilution effects, and financial projections</li{'>'}
                  <li><strong{'>'}Export and share</strong{'>'} - Generate professional reports for investor presentations or team discussions</li{'>'}
                </ol{'>'}

                <p{'>'}</p>
                  The tool's advanced algorithms ensure accuracy while the intuitive interface makes complex calculations 
                  accessible to founders at any experience level.
                </p{'>'}
              </div{'>'}
            </div{'>'}
          </div{'>'}
        </section{'>'}

        {/* CTA */}
        <section className="py-16 bg-primary/5"{'>'}
          <div className="container px-4 md:px-6"{'>'}
            <div className="mx-auto max-w-4xl text-center"{'>'}
              <Card className="border-primary/20 shadow-lg"{'>'}
                <CardHeader{'>'}
                  <CardTitle className="text-2xl md:text-3xl"{'>'}
                    Ready to Get Started?
                  </CardTitle{'>'}
                  <CardDescription className="text-lg"{'>'}
                    Try our pro rata calculator now - completely free, no signup required.
                  </CardDescription{'>'}
                </CardHeader{'>'}
                <CardContent{'>'}
                  <Button size="lg" className="btn-primary text-lg px-8 py-4" asChild{'>'}
                    <a href="/tools/pro-rata-calculator/"{'>'}
                      Start Calculator →
                    </a{'>'}
                  </Button{'>'}
                </CardContent{'>'}
              </Card{'>'}
            </div{'>'}
          </div{'>'}
        </section{'>'}
      </div{'>'}
    </{'>'}
    </>
  );
      </a>
      </Button>
      </CardContent>
      </CardDescription>
      </CardTitle>
      </CardHeader>
      </Card>
      </div>
      </div>
      </section>
      </strong>
      </li>
      </strong>
      </li>
      </strong>
      </li>
      </strong>
      </li>
      </ol>
      </h2>
      </h2>
      </h2>
      </div>
      </div>
      </div>
      </section>
      </Badge>
      </Badge>
      </Badge>
      </div>
      </h1>
      </div>
      </div>
      </section>
      </li>
      </a>
      </li>
      </li>
      </ol>
      </div>
      </nav>
      </div>
}