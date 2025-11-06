const fs = require('fs');
const path = require('path');

const learnDir = path.join(__dirname, 'learn');
const appLearnDir = path.join(__dirname, 'app', 'learn');

// Get all subdirectories in learn/
const calculatorDirs = fs.readdirSync(learnDir).filter(file => {
  return fs.statSync(path.join(learnDir, file)).isDirectory();
});

// Mapping from metadata calculator_name to actual icanpitch.com slugs
const calculatorSlugMap = {
  'safe-calculator': 'safe-calculator',
  'convertible-note-calculator': 'convertible-note-calculator',
  'burn-rate-calculator': 'burn-rate-runway-calculator',
  '409a-valuation-calculator': '409a-valuation-calculator',
  'pre-post-money-calculator': 'pre-post-money-valuation-calculator',
  'equity-split-calculator': 'co-founder-equity-split-calculator',
  'option-pool-calculator': 'option-pool-impact-calculator',
  'pro-rata-calculator': 'pro-rata-rights-impact-calculator',
  'vesting-calculator': 'vesting-schedule-cliff-explorer',
  'exit-calculator': 'startup-exit-visualizer',
};

// Function to generate page content from metadata
function generatePage(metadata) {
  const { title, metaDescription, h1, dataRow, url, slug } = metadata;
  const { calculator_name, stage, founder_type, geography, outcome_modifier } = dataRow;

  // Get the correct calculator slug for the main app
  const actualCalculatorSlug = calculatorSlugMap[calculator_name] || calculator_name;

  // Format stage and founder type for display
  const stageDisplay = stage.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const founderDisplay = founder_type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const geoDisplay = geography.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const calcNameDisplay = calculator_name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const outcomeDisplay = outcome_modifier.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // Generate function name from slug (handle names starting with numbers)
  let functionName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page';
  // If function name starts with a number, prefix with underscore
  if (/^\d/.test(functionName)) {
    functionName = '_' + functionName;
  }

  return `import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: "${title}",
  description: "${metaDescription}",
  keywords: ["${calculator_name}", "${stage}", "${founder_type}", "${geography}", "startup calculator"],
  openGraph: {
    title: "${title}",
    description: "${metaDescription}",
    type: "article",
    url: "${url}",
    images: ["/og/${slug}.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${metaDescription}",
    images: ["/og/${slug}.png"],
  },
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${h1}",
    "description": "${metaDescription}",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "datePublished": "${new Date().toISOString()}",
    "url": "${url}"
  }
];

export default function ${functionName}(): React.JSX.Element {
  return (
    <>
      {jsonLdData.map((data: Record<string, any>, index: number) => (
        <Script
          key={index}
          id={\`json-ld-\${index}\`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data)
          }}
        />
      ))}

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section with Aurora Background */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
          <AuroraBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ${h1}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                ${metaDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">${stageDisplay}</Badge>
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">${founderDisplay}</Badge>
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">${geoDisplay}</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-gray max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our ${calcNameDisplay} Does</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our ${calcNameDisplay} is specifically designed for ${stage} ${founder_type.replace(/-/g, ' ')} who need precise financial modeling.
                  This professional-grade tool provides comprehensive analysis of your startup's financial structure,
                  allowing you to explore different scenarios and understand the implications of various decisions.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Why This Matters for ${stageDisplay} ${founderDisplay}</h2>
                <p className="text-gray-700 leading-relaxed">
                  At the ${stage} stage, ${founder_type.replace(/-/g, ' ')}s face unique challenges that require specialized financial tools.
                  Traditional spreadsheets often fall short when modeling complex equity structures and conversion scenarios.
                  Our ${calcNameDisplay} addresses these specific needs with industry-standard calculations and professional-grade analysis.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The accuracy of your financial models directly impacts your ability to raise capital and negotiate favorable terms.
                  Investors expect sophisticated analysis and clear understanding of dilution, ownership, and potential returns.
                  This tool ensures you're prepared for those conversations.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">How to ${outcomeDisplay} with ${calcNameDisplay}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">Our calculator is specifically built to help you ${outcome_modifier.replace(/-/g, ' ')}. The process is straightforward:</p>

                <ol className="space-y-4">
                  <li className="text-gray-700">
                    <strong className="text-gray-900 font-semibold">Input your current situation</strong> - Enter your existing equity structure, investment amounts, and valuation parameters
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-900 font-semibold">Model different scenarios</strong> - Explore various outcomes by adjusting key variables like valuation caps, discount rates, or investment amounts
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-900 font-semibold">Analyze the results</strong> - Review detailed breakdowns of ownership percentages, dilution effects, and financial projections
                  </li>
                  <li className="text-gray-700">
                    <strong className="text-gray-900 font-semibold">Export and share</strong> - Generate professional reports for investor presentations or team discussions
                  </li>
                </ol>

                <p className="text-gray-700 leading-relaxed mt-6">
                  The tool's advanced algorithms ensure accuracy while the intuitive interface makes complex calculations
                  accessible to founders at any experience level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="border-purple-200 shadow-2xl bg-white">
                <CardHeader className="pt-12">
                  <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Ready to Get Started?
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Try our ${calculator_name.replace(/-/g, ' ')} now - completely free, no signup required.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-12">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="font-semibold"
                    asChild
                  >
                    <a
                      href="https://icanpitch.com/${actualCalculatorSlug}/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Calculator →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
`;
}

// Process each calculator
calculatorDirs.forEach(dir => {
  const metadataPath = path.join(learnDir, dir, 'metadata.json');

  if (fs.existsSync(metadataPath)) {
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    const pageContent = generatePage(metadata);

    // Create directory if it doesn't exist
    const outputDir = path.join(appLearnDir, dir);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write the page file
    const outputPath = path.join(outputDir, 'page.tsx');
    fs.writeFileSync(outputPath, pageContent, 'utf8');
    console.log(`Generated: ${dir}/page.tsx`);
  }
});

console.log('All pages generated successfully!');
