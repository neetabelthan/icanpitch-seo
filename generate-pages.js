const fs = require('fs');
const path = require('path');

const learnDir = path.join(__dirname, 'learn');
const appLearnDir = path.join(__dirname, 'app', 'learn');

// Get all subdirectories in learn/
const calculatorDirs = fs.readdirSync(learnDir).filter(file => {
  return fs.statSync(path.join(learnDir, file)).isDirectory();
});

// Calculator-specific content for unique pages
const calculatorContent = {
  'safe-calculator': {
    section1Title: 'Understanding SAFE Agreements',
    section1Text: 'A SAFE (Simple Agreement for Future Equity) is one of the most popular instruments for early-stage fundraising. Understanding how SAFEs convert into equity at your next priced round is critical for founders who want to maintain control of their cap table.',
    section2Title: 'How SAFE Conversion Works',
    section2Text: 'When a priced round occurs, your SAFE converts based on either the valuation cap or the discount rate, whichever gives the investor a better price. Our calculator models these scenarios so you can see exactly how much dilution to expect.',
    steps: [
      'Enter your SAFE terms including valuation cap and discount rate',
      'Set your expected Series A valuation and round size',
      'Review the conversion scenarios and resulting ownership percentages',
      'Compare different negotiation outcomes side by side'
    ]
  },
  'burn-rate-calculator': {
    section1Title: 'Understanding Startup Burn Rate',
    section1Text: 'Burn rate measures how quickly your startup spends cash each month. Knowing your burn rate and runway helps you plan fundraising timing and make better decisions about hiring, marketing spend, and product development.',
    section2Title: 'Calculating Your Runway',
    section2Text: 'Your runway is your remaining cash divided by your monthly burn rate. Our calculator helps you model different spending scenarios and understand exactly when you need to raise your next round.',
    steps: [
      'Enter your current cash balance and monthly expenses',
      'Adjust spending categories to model different scenarios',
      'See your projected runway in months',
      'Plan your fundraising timeline based on runway projections'
    ]
  },
  'equity-split-calculator': {
    section1Title: 'Co-Founder Equity Allocation',
    section1Text: 'Splitting equity fairly among co-founders is one of the most important early decisions for any startup. A well-structured equity split considers each founder\'s contributions, commitment level, and the value they bring to the company.',
    section2Title: 'Factors That Influence Equity Splits',
    section2Text: 'Beyond the initial idea, equity splits should account for who is working full-time, who brought the technical expertise, who has industry connections, and who is putting in capital. Our calculator helps you weigh these factors objectively.',
    steps: [
      'Rate each co-founder\'s contributions across key dimensions',
      'Adjust weightings based on what matters most for your startup',
      'Review the suggested equity split percentages',
      'Model vesting schedules to protect all co-founders'
    ]
  },
  'option-pool-calculator': {
    section1Title: 'Setting Up Your Option Pool',
    section1Text: 'An employee option pool is essential for attracting top talent to your startup. The size of your option pool directly affects founder dilution, so understanding the tradeoffs before negotiating with investors is critical.',
    section2Title: 'Option Pool Impact on Valuation',
    section2Text: 'Investors typically require the option pool to be created from pre-money valuation, increasing founder dilution. Our calculator shows you exactly how different pool sizes affect your ownership stake.',
    steps: [
      'Set your pre-money valuation and round size',
      'Adjust the option pool percentage to see dilution impact',
      'Compare pre-money vs post-money option pool creation',
      'Plan your hiring budget against available options'
    ]
  },
  'convertible-note-calculator': {
    section1Title: 'How Convertible Notes Work',
    section1Text: 'Convertible notes are debt instruments that convert into equity at a future priced round. They include terms like interest rate, valuation cap, and discount that determine the conversion price your investors receive.',
    section2Title: 'Modeling Note Conversion',
    section2Text: 'When your Series A closes, outstanding convertible notes convert based on their terms. Our calculator helps you model exactly how much equity note holders will receive and how that affects founder ownership.',
    steps: [
      'Enter your note terms: principal, interest rate, cap, and discount',
      'Set the expected Series A valuation and timing',
      'See the converted equity and resulting cap table',
      'Compare multiple notes with different terms'
    ]
  },
  'vesting-calculator': {
    section1Title: 'Vesting Schedules Explained',
    section1Text: 'Vesting schedules ensure that founders and employees earn their equity over time. The standard four-year schedule with a one-year cliff protects the company while rewarding long-term commitment.',
    section2Title: 'Customizing Your Vesting Terms',
    section2Text: 'While the 4-year vest with 1-year cliff is standard, many startups customize terms for different roles. Our calculator lets you explore how different vesting schedules affect equity distribution over time.',
    steps: [
      'Set the total equity grant and vesting period',
      'Configure cliff period and vesting frequency',
      'View the vesting timeline month by month',
      'Model acceleration triggers for M&A scenarios'
    ]
  },
  'pre-post-money-calculator': {
    section1Title: 'Pre-Money vs Post-Money Valuation',
    section1Text: 'Understanding the difference between pre-money and post-money valuation is fundamental to fundraising. Pre-money is your company\'s value before investment; post-money includes the new capital.',
    section2Title: 'How Valuation Affects Ownership',
    section2Text: 'The relationship between pre-money valuation, investment amount, and post-money valuation directly determines what percentage of your company investors will own. Our calculator makes this math transparent.',
    steps: [
      'Enter your pre-money valuation and investment amount',
      'See the resulting post-money valuation and investor ownership',
      'Model multiple rounds to understand cumulative dilution',
      'Compare different valuation scenarios side by side'
    ]
  },
  '409a-valuation-calculator': {
    section1Title: 'What Is a 409A Valuation?',
    section1Text: 'A 409A valuation determines the fair market value of your company\'s common stock for the purpose of granting stock options. Getting this right is essential for tax compliance and protecting your employees.',
    section2Title: 'When You Need a 409A',
    section2Text: 'You need a new 409A valuation before granting options, after a material event like a funding round, or at least once every 12 months. Our calculator helps you estimate your 409A value based on key inputs.',
    steps: [
      'Enter your most recent funding round details',
      'Adjust for preferred stock rights and liquidation preferences',
      'Review the estimated common stock value',
      'Understand the discount factors applied'
    ]
  },
  'pro-rata-calculator': {
    section1Title: 'Understanding Pro Rata Rights',
    section1Text: 'Pro rata rights allow existing investors to maintain their ownership percentage by investing in future rounds. Understanding how pro rata participation affects your cap table helps you plan dilution across multiple rounds.',
    section2Title: 'Impact on Future Fundraising',
    section2Text: 'When investors exercise pro rata rights, it reduces the amount of equity available to new investors. Our calculator shows how pro rata participation changes the dynamics of your next round.',
    steps: [
      'Enter your current cap table and investor ownership',
      'Set the terms of your upcoming round',
      'Toggle pro rata participation for each investor',
      'See how ownership percentages shift with and without pro rata'
    ]
  },
  'exit-calculator': {
    section1Title: 'Modeling Startup Exit Scenarios',
    section1Text: 'Whether you\'re planning for an acquisition or IPO, understanding how exit proceeds are distributed among shareholders is critical. Liquidation preferences, participation rights, and cap table structure all affect what founders actually receive.',
    section2Title: 'Liquidation Preferences and Waterfall Analysis',
    section2Text: 'Preferred stock holders typically get paid first in an exit. Our calculator models the full waterfall distribution so you can see exactly what each shareholder receives at different exit valuations.',
    steps: [
      'Enter your cap table with preferred stock terms',
      'Set liquidation preferences and participation caps',
      'Model different exit valuations to see payout ranges',
      'Compare founder proceeds across exit scenarios'
    ]
  }
};

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

  // Get calculator-specific content
  const content = calculatorContent[calculator_name] || calculatorContent['safe-calculator'];

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
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "${title}",
  description: "${metaDescription}",
  keywords: ["${calculator_name}", "${stage}", "${founder_type}", "${geography}", "startup calculator"],
  openGraph: {
    title: "${title}",
    description: "${metaDescription}",
    type: "article",
    url: "${url}",
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${metaDescription}",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/learn/${slug}/",
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
    "dateModified": "${new Date().toISOString()}",
    "url": "https://learn.icanpitch.com/learn/${slug}/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/learn/${slug}/"
    }
  }
];

export default function ${functionName}(): React.JSX.Element {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Calculator Guides", href: "/learn/" },
    { label: "${title.replace(/"/g, '\\"')}" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">${content.section1Title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">${content.section1Text}</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">${content.section2Title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">${content.section2Text}</p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">How to Use the ${calcNameDisplay}</h2>
                <ol className="space-y-3 text-lg text-gray-700 list-decimal list-inside mb-6">
                  ${content.steps.map(step => '<li>' + step + '</li>').join('\n                  ')}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Resources</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/learn/" className="text-blue-600 hover:text-blue-700 underline">All Calculator Guides</Link>
              <Link href="/blog/" className="text-blue-600 hover:text-blue-700 underline">Blog & Articles</Link>
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
