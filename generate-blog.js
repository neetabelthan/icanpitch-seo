const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content', 'blog');
const appBlogDir = path.join(__dirname, 'app', 'blog');
const learnDir = path.join(__dirname, 'learn');

// Function to escape text content within HTML for JSX compatibility
function escapeTextInHtml(html) {
  // Split HTML into valid tags and text
  // Valid HTML tags: <tagname>, </tagname>, <tagname attr="value">, <tagname/>
  const parts = html.split(/(<\/?[a-zA-Z][a-zA-Z0-9]*(?:\s[^>]*)?>)/);

  return parts.map((part, index) => {
    // Check if this is an HTML tag
    if (part.match(/^<\/?[a-zA-Z][a-zA-Z0-9]*(?:\s[^>]*)?>$/)) {
      return part;  // Leave HTML tags alone
    }
    // This is text content - escape any remaining > and < characters
    return part
      .replace(/>/g, '&gt;')
      .replace(/</g, '&lt;');
  }).join('');
}

// ─── Phase 1A: Calculator-Specific CTAs ─────────────────────────────────────

// Mapping from metadata calculator_name to actual icanpitch.com slugs (copied from generate-pages.js)
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

// Per-calculator CTA copy
const ctaCopy = {
  'safe-calculator': {
    headline: 'Model Your SAFE Conversion',
    description: 'See exactly how your SAFE converts at different valuations. Free calculator, no signup required.',
    button: 'Open SAFE Calculator',
  },
  'burn-rate-calculator': {
    headline: 'Calculate Your Burn Rate & Runway',
    description: 'Enter your expenses and cash balance to see your runway in months. Plan your next fundraise.',
    button: 'Open Burn Rate Calculator',
  },
  'equity-split-calculator': {
    headline: 'Split Equity Fairly',
    description: 'Use our framework to calculate fair co-founder equity splits based on contributions and commitment.',
    button: 'Open Equity Split Calculator',
  },
  'option-pool-calculator': {
    headline: 'Size Your Option Pool',
    description: 'Model how different option pool sizes affect founder dilution before and after your next round.',
    button: 'Open Option Pool Calculator',
  },
  'convertible-note-calculator': {
    headline: 'Model Your Convertible Note',
    description: 'Calculate how your convertible notes convert to equity at your next priced round.',
    button: 'Open Convertible Note Calculator',
  },
  'vesting-calculator': {
    headline: 'Plan Your Vesting Schedule',
    description: 'Visualize vesting timelines, cliff dates, and acceleration scenarios for founders and employees.',
    button: 'Open Vesting Calculator',
  },
  'pre-post-money-calculator': {
    headline: 'Understand Your Valuation',
    description: 'See how pre-money valuation, investment amount, and post-money relate to ownership percentages.',
    button: 'Open Valuation Calculator',
  },
  '409a-valuation-calculator': {
    headline: 'Estimate Your 409A Valuation',
    description: 'Model your common stock fair market value for option grants and tax compliance.',
    button: 'Open 409A Calculator',
  },
  'pro-rata-calculator': {
    headline: 'Model Pro-Rata Participation',
    description: 'See how investor follow-on rights affect your cap table in future fundraising rounds.',
    button: 'Open Pro-Rata Calculator',
  },
  'exit-calculator': {
    headline: 'Model Your Exit Scenarios',
    description: 'Calculate founder proceeds at different exit valuations with liquidation preference waterfalls.',
    button: 'Open Exit Calculator',
  },
};

// Detect which calculator a blog post maps to based on slug, tags, and categories
function detectCalculator(slug, tags, categories) {
  const text = [slug, ...tags, ...categories].join(' ').toLowerCase();

  // Ordered from most specific to least specific
  if (text.includes('409a') || text.includes('fair market value')) return '409a-valuation-calculator';
  if (text.includes('pro-rata') || text.includes('pro rata') || text.includes('follow-on')) return 'pro-rata-calculator';
  if (text.includes('exit') || text.includes('m&a') || text.includes('acquisition') || text.includes('ipo')) return 'exit-calculator';
  if (text.includes('convertible note') || text.includes('convertible-note')) return 'convertible-note-calculator';
  if (text.includes('vesting') || text.includes('cliff') || text.includes('acceleration')) return 'vesting-calculator';
  if (text.includes('option pool') || text.includes('option-pool') || text.includes('esop') || text.includes('employee equity')) return 'option-pool-calculator';
  if (text.includes('equity split') || text.includes('equity-split') || text.includes('co-founder') || text.includes('cofounder')) return 'equity-split-calculator';
  if (text.includes('pre-money') || text.includes('post-money') || text.includes('pre-post') || text.includes('valuation mechanic')) return 'pre-post-money-calculator';
  if (text.includes('burn rate') || text.includes('burn-rate') || text.includes('runway') || text.includes('cash flow')) return 'burn-rate-calculator';
  if (text.includes('safe') || text.includes('dilution') || text.includes('valuation cap') || text.includes('discount rate')) return 'safe-calculator';

  return 'safe-calculator'; // Fallback
}

// ─── Phase 1B: Mid-Article CTA Injection ────────────────────────────────────

function injectMidArticleCTA(content, calculatorKey) {
  const h2Matches = content.match(/<h2[\s>]/g);
  if (!h2Matches || h2Matches.length < 5) return content;

  const cta = ctaCopy[calculatorKey] || ctaCopy['safe-calculator'];
  const calcSlug = calculatorSlugMap[calculatorKey] || 'safe-calculator';
  const ctaUrl = `https://icanpitch.com/${calcSlug}/`;

  const ctaBlock = `
              <div className="my-10 p-6 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100">
                <p className="text-lg font-semibold text-gray-900 mb-2">${cta.headline}</p>
                <p className="text-gray-600 mb-4">${cta.description}</p>
                <a
                  href="${ctaUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all text-sm"
                >
                  ${cta.button} &rarr;
                </a>
              </div>`;

  // Insert before the 4th <h2>
  let count = 0;
  return content.replace(/<h2[\s>]/g, (match) => {
    count++;
    if (count === 4) {
      return ctaBlock + '\n\n              ' + match;
    }
    return match;
  });
}

// ─── Phase 1C: Related Posts Scoring ────────────────────────────────────────

function findRelatedPosts(currentSlug, currentMeta, allMetadata, limit = 5) {
  const currentCalc = detectCalculator(currentSlug, currentMeta.tags || [], currentMeta.categories || []);

  // Extract city from slug for city matching
  const cityPatterns = ['silicon-valley', 'san-francisco', 'new-york', 'nyc', 'london', 'berlin', 'singapore',
    'toronto', 'boston', 'austin', 'seattle', 'los-angeles', 'chicago', 'denver', 'miami',
    'dublin', 'barcelona', 'hong-kong', 'tel-aviv', 'bangalore', 'stockholm', 'amsterdam', 'paris'];
  const currentCity = cityPatterns.find(c => currentSlug.includes(c)) || '';

  return allMetadata
    .filter(m => m.slug !== currentSlug)
    .map(m => {
      let score = 0;
      const otherCalc = detectCalculator(m.slug, m.tags || [], m.categories || []);

      // Same calculator type +10
      if (otherCalc === currentCalc) score += 10;

      // Same city +8
      if (currentCity && cityPatterns.find(c => m.slug.includes(c)) === currentCity) score += 8;

      // Shared categories +5 each
      const sharedCats = (currentMeta.categories || []).filter(c => (m.categories || []).includes(c));
      score += sharedCats.length * 5;

      // Shared tags +3 each
      const sharedTags = (currentMeta.tags || []).filter(t => (m.tags || []).includes(t));
      score += sharedTags.length * 3;

      return { ...m, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// ─── Phase 1D: FAQ Schema Extraction ────────────────────────────────────────

function extractFAQs(htmlContent) {
  // Find FAQ section: look for h2 containing FAQ/Frequently Asked Questions
  const faqSectionRegex = /<h2[^>]*>[^<]*(?:FAQ|Frequently Asked Questions)[^<]*<\/h2>([\s\S]*?)(?=<h2[\s>]|$)/i;
  const sectionMatch = htmlContent.match(faqSectionRegex);
  if (!sectionMatch) return [];

  const faqSection = sectionMatch[1];
  const faqs = [];

  // Extract h3 (question) + p (answer) pairs
  const pairRegex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = pairRegex.exec(faqSection)) !== null) {
    const question = match[1].replace(/<[^>]+>/g, '').trim();
    const answer = match[2].replace(/<[^>]+>/g, '').trim();
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}

// ─── Phase 2B: Table of Contents ────────────────────────────────────────────

function generateTOC(htmlContent) {
  const headingRegex = /<h2[^>]*>([\s\S]*?)<\/h2>/g;
  const tocItems = [];
  let match;
  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, '').trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .substring(0, 60);
    tocItems.push({ text, id });
  }
  return tocItems;
}

function addHeadingIds(htmlContent, tocItems) {
  let index = 0;
  return htmlContent.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, (fullMatch, attrs, inner) => {
    if (index < tocItems.length) {
      const item = tocItems[index];
      index++;
      // If there's already an id, leave it; otherwise add one
      if (attrs.includes('id=')) return fullMatch;
      return `<h2 id="${item.id}"${attrs}>${inner}</h2>`;
    }
    return fullMatch;
  });
}

// ─── Phase 4B: Blog-to-Learn Cross-Linking ──────────────────────────────────

// Load learn metadata to map calculator_name -> learn page slug
function loadLearnPageMap() {
  const map = {};
  if (!fs.existsSync(learnDir)) return map;
  const dirs = fs.readdirSync(learnDir).filter(f => fs.statSync(path.join(learnDir, f)).isDirectory());
  dirs.forEach(dir => {
    const metaPath = path.join(learnDir, dir, 'metadata.json');
    if (fs.existsSync(metaPath)) {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      if (meta.dataRow && meta.dataRow.calculator_name) {
        map[meta.dataRow.calculator_name] = meta.slug || dir;
      }
    }
  });
  return map;
}

// ─── Hub Pages Config (Phase 3B) ────────────────────────────────────────────

const hubPages = [
  {
    slug: 'safe-calculator-guides',
    title: 'SAFE Calculator Guides: Everything Founders Need to Know',
    description: 'Comprehensive guides to SAFE notes, valuation caps, discount rates, and dilution calculations. City-specific benchmarks and industry-focused SAFE analysis for startup founders.',
    h1: 'SAFE Calculator Guides',
    intro: 'SAFE agreements have become the dominant early-stage fundraising instrument, with over 80% of Y Combinator companies choosing SAFEs over convertible notes. Whether you are negotiating your first valuation cap or modeling how multiple SAFEs stack before a priced round, these guides walk you through the mechanics, the math, and the market benchmarks. Each article pairs city-specific or industry-specific context with our free SAFE calculator so you can model real scenarios before signing a term sheet.',
    calculatorKey: 'safe-calculator',
    filterFn: (slug, tags, categories) => {
      const text = [slug, ...tags, ...categories].join(' ').toLowerCase();
      return text.includes('safe') && !text.includes('convertible note');
    },
  },
  {
    slug: 'burn-rate-guides',
    title: 'Burn Rate & Runway Guides: Cash Management for Startups',
    description: 'Learn how to calculate burn rate, extend runway, and benchmark spending by city and stage. Free burn rate calculator guides for startup founders.',
    h1: 'Burn Rate & Runway Guides',
    intro: 'Cash is the oxygen of a startup. Understanding your burn rate and runway is the difference between raising your next round from a position of strength or scrambling to survive. These guides cover burn rate formulas, city-by-city cost benchmarks, stage-specific spending targets, and proven strategies to extend your runway without sacrificing growth. Each article connects to our free burn rate calculator so you can model your own numbers.',
    calculatorKey: 'burn-rate-calculator',
    filterFn: (slug, tags, categories) => {
      const text = [slug, ...tags, ...categories].join(' ').toLowerCase();
      return text.includes('burn rate') || text.includes('burn-rate') || text.includes('runway') || text.includes('cash flow');
    },
  },
  {
    slug: 'equity-guides',
    title: 'Equity, Vesting & Option Pool Guides for Founders',
    description: 'Guides on co-founder equity splits, option pool sizing, vesting schedules, and early employee equity. Free calculators included.',
    h1: 'Equity, Vesting & Option Pool Guides',
    intro: 'Equity decisions made at the start of a company ripple through every future round, hire, and exit event. From splitting equity between co-founders to sizing an option pool that attracts top talent without destroying founder ownership, these guides cover the frameworks, formulas, and negotiation tactics you need. Each one links to our free equity, vesting, or option pool calculator so you can model the scenarios that matter to your startup.',
    calculatorKey: 'equity-split-calculator',
    filterFn: (slug, tags, categories) => {
      const text = [slug, ...tags, ...categories].join(' ').toLowerCase();
      return text.includes('equity') || text.includes('vesting') || text.includes('option pool') || text.includes('option-pool') || text.includes('cliff');
    },
  },
  {
    slug: 'exit-strategy-guides',
    title: 'Exit & Pro-Rata Guides: M&A, IPO & Investor Rights',
    description: 'Model startup exit scenarios, understand liquidation preferences, and plan investor pro-rata participation. Free exit and pro-rata calculators.',
    h1: 'Exit & Pro-Rata Guides',
    intro: 'Every fundraising decision you make today shapes what you take home at exit. Liquidation preferences, participation rights, and pro-rata allocations can mean the difference between a life-changing outcome and a disappointing one. These guides walk you through exit waterfall analysis, city-specific M&A multiples, and investor follow-on mechanics. Use our free exit and pro-rata calculators to model scenarios with your actual cap table numbers.',
    calculatorKey: 'exit-calculator',
    filterFn: (slug, tags, categories) => {
      const text = [slug, ...tags, ...categories].join(' ').toLowerCase();
      return text.includes('exit') || text.includes('pro-rata') || text.includes('pro rata') || text.includes('m&a');
    },
  },
  {
    slug: 'valuation-guides',
    title: 'Startup Valuation Guides: Pre-Money, Post-Money & 409A',
    description: 'Understand pre-money and post-money valuation, 409A requirements, and stage-specific benchmarks. Free valuation calculators for founders.',
    h1: 'Startup Valuation Guides',
    intro: 'Valuation is the number that governs every fundraising negotiation. Understanding the difference between pre-money and post-money, knowing what your 409A valuation means for option grants, and benchmarking your valuation against stage-appropriate comparables gives you the confidence to negotiate from data rather than guesswork. These guides cover the formulas, the benchmarks, and the tax implications. Each one connects to our free valuation calculator.',
    calculatorKey: 'pre-post-money-calculator',
    filterFn: (slug, tags, categories) => {
      const text = [slug, ...tags, ...categories].join(' ').toLowerCase();
      return text.includes('valuation') || text.includes('409a') || text.includes('pre-money') || text.includes('post-money');
    },
  },
];

// ─── MAIN EXECUTION ─────────────────────────────────────────────────────────

// Ensure directories exist
if (!fs.existsSync(contentDir)) {
  console.error('Error: /content/blog directory does not exist. Please create it first.');
  process.exit(1);
}

if (!fs.existsSync(appBlogDir)) {
  fs.mkdirSync(appBlogDir, { recursive: true });
}

// Get all blog post directories
const blogDirs = fs.readdirSync(contentDir).filter(file => {
  const fullPath = path.join(contentDir, file);
  return fs.statSync(fullPath).isDirectory();
});

if (blogDirs.length === 0) {
  console.log('No blog posts found in /content/blog/');
  process.exit(0);
}

// Phase 1C: Load ALL metadata first for cross-linking
const allMetadata = [];
blogDirs.forEach(dir => {
  const metadataPath = path.join(contentDir, dir, 'metadata.json');
  if (fs.existsSync(metadataPath)) {
    const meta = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    if (!meta.slug) meta.slug = dir;
    allMetadata.push(meta);
  }
});

// Phase 4B: Load learn page map
const learnPageMap = loadLearnPageMap();

// Function to generate blog page content from metadata
function generateBlogPage(metadata, content) {
  const { slug, title, description, date, categories, tags, readingTime, heroImage, pageType } = metadata;
  const isSeoPage = pageType === 'seo';

  // Normalize readingTime to a number to avoid "min min read" bug
  const readingTimeNum = typeof readingTime === 'string' ? parseInt(readingTime) : readingTime;

  // Generate function name from slug
  let functionName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'BlogPost';
  // If function name starts with a number, prefix with underscore
  if (/^\d/.test(functionName)) {
    functionName = '_' + functionName;
  }

  // Format date
  const publishDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const isoDate = new Date(date).toISOString();

  // Phase 1A: Detect calculator and get CTA copy
  const calculatorKey = detectCalculator(slug, tags || [], categories || []);
  const calcSlug = calculatorSlugMap[calculatorKey] || 'safe-calculator';
  const cta = ctaCopy[calculatorKey] || ctaCopy['safe-calculator'];
  const ctaUrl = `https://icanpitch.com/${calcSlug}/`;

  // Phase 1C: Find related posts
  const relatedPosts = findRelatedPosts(slug, metadata, allMetadata, 5);

  // Phase 4B: Find matching learn page
  const learnPageSlug = learnPageMap[calculatorKey] || '';

  // Phase 1D: Extract FAQs for schema
  const faqs = extractFAQs(content);

  // Phase 2B: Generate TOC
  const tocItems = generateTOC(content);
  const hasTOC = tocItems.length >= 4;

  // Add heading IDs if TOC is present
  if (hasTOC) {
    content = addHeadingIds(content, tocItems);
  }

  // Phase 1B: Inject mid-article CTA
  content = injectMidArticleCTA(content, calculatorKey);

  const metadataBlock = isSeoPage ?
`export const metadata: Metadata = {
  title: "${title} | ICanPitch",
  description: "${description}",
  keywords: [${tags.map(tag => `"${tag}"`).join(', ')}],
  openGraph: {
    title: "${title}",
    description: "${description}",
    type: "article",
    publishedTime: "${isoDate}",
    url: "https://icanpitch.com/blog/${slug}/",
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${description}",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/${slug}/",
  },
};` :
`export const metadata: Metadata = {
  title: "${title} | ICanPitch Blog",
  description: "${description}",
  keywords: [${tags.map(tag => `"${tag}"`).join(', ')}],
  authors: [{ name: "Neeta Belthan" }],
  openGraph: {
    title: "${title}",
    description: "${description}",
    type: "article",
    publishedTime: "${isoDate}",
    authors: ["Neeta Belthan"],
    url: "https://icanpitch.com/blog/${slug}/",
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${description}",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/${slug}/",
  },
};`;

  // Phase 1D: Build JSON-LD array including FAQPage if applicable
  const jsonLdBlock = isSeoPage ?
`const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${title}",
    "description": "${description}",
    "datePublished": "${isoDate}",
    "dateModified": "${isoDate}",
    "author": {
      "@type": "Organization",
      "name": "ICanPitch"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/blog/${slug}/"
    },
    "url": "https://icanpitch.com/blog/${slug}/",` :
`const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${title}",
    "description": "${description}",
    "author": {
      "@type": "Person",
      "name": "Neeta Belthan"
    },
    "datePublished": "${isoDate}",
    "dateModified": "${isoDate}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://learn.icanpitch.com/blog/${slug}/"
    },
    "url": "https://icanpitch.com/blog/${slug}/",`;

  // Build FAQ JSON-LD block
  let faqJsonLd = '';
  if (faqs.length > 0) {
    const faqEntries = faqs.map(faq => {
      const q = faq.question.replace(/"/g, '\\"');
      const a = faq.answer.replace(/"/g, '\\"');
      return `      {
        "@type": "Question",
        "name": "${q}",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "${a}"
        }
      }`;
    }).join(',\n');

    faqJsonLd = `,
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
${faqEntries}
    ]
  }`;
  }

  // Build TOC section
  const tocSection = hasTOC ? `
              {/* Table of Contents */}
              <nav className="mb-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Table of Contents</p>
                <ul className="space-y-2">
                  ${tocItems.map(item => `<li><a href="#${item.id}" className="text-blue-600 hover:text-blue-700 text-sm">${item.text.replace(/"/g, '&quot;')}</a></li>`).join('\n                  ')}
                </ul>
              </nav>` : '';

  // Build Related Articles section (Phase 1C + 4B)
  const relatedLinks = relatedPosts.map(rp =>
    `<Link href="/blog/${rp.slug}/" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm">${rp.title.replace(/"/g, '&quot;')}</span>
                </Link>`
  ).join('\n                ');

  const learnLink = learnPageSlug ?
    `<Link href="/learn/${learnPageSlug}/" className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">Calculator Guide: ${calculatorKey.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</Link>` : '';

  // Find which hub pages this post belongs to
  const hubLinks = hubPages
    .filter(hub => hub.filterFn(slug, tags || [], categories || []))
    .map(hub => `<Link href="/blog/${hub.slug}/" className="text-blue-600 hover:text-blue-700 underline text-sm font-medium">${hub.h1}</Link>`)
    .join('\n                ');

  return `import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/aurora-background';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';

${metadataBlock}

${jsonLdBlock}
    "publisher": {
      "@type": "Organization",
      "name": "ICanPitch",
      "logo": {
        "@type": "ImageObject",
        "url": "https://icanpitch.com/logo.png"
      }
    }
  }${faqJsonLd}
];

export default function ${functionName}() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "${title.replace(/"/g, '\\"')}" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      {jsonLdData.map((data, index) => (
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
        {/* Hero Section */}
        <article className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
          <AuroraBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                ${categories.map(cat => `<Badge className="bg-blue-100 text-blue-800 border-blue-200">${cat}</Badge>`).join('\n                ')}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ${title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 text-gray-600 mb-8">
                ${!isSeoPage ? `<div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Neeta Belthan</span>
                </div>
                <span>•</span>` : ''}
                <time dateTime="${isoDate}">${publishDate}</time>
                ${readingTimeNum ? `<span>•</span>
                <span>${readingTimeNum} min read</span>` : ''}
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                ${description}
              </p>
            </div>
          </div>
        </article>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
${tocSection}
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
                ${content}
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  ${tags.map(tag => `<Badge variant="outline" className="text-gray-700">${tag}</Badge>`).join('\n                  ')}
                </div>
              </div>

              ${!isSeoPage ? `{/* Author Bio */}
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
              </div>` : ''}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Articles</h3>
            <div className="space-y-1 mb-6">
              ${relatedLinks}
            </div>
            ${learnLink || hubLinks ? `<div className="pt-4 border-t border-gray-200 flex flex-wrap gap-4">
              ${learnLink}
              ${hubLinks}
            </div>` : ''}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ${cta.headline}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ${cta.description}
              </p>
              <a
                href="${ctaUrl}"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all"
              >
                ${cta.button} &rarr;
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
`;
}

// Process each blog post
blogDirs.forEach(dir => {
  const metadataPath = path.join(contentDir, dir, 'metadata.json');
  const contentPath = path.join(contentDir, dir, 'content.html');

  if (!fs.existsSync(metadataPath)) {
    console.warn(`Warning: No metadata.json found in ${dir}, skipping...`);
    return;
  }

  if (!fs.existsSync(contentPath)) {
    console.warn(`Warning: No content.html found in ${dir}, skipping...`);
    return;
  }

  const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
  // Add slug from directory name if not in metadata
  if (!metadata.slug) {
    metadata.slug = dir;
  }
  const rawContent = fs.readFileSync(contentPath, 'utf8');
  // Escape any raw > or < in text content for JSX compatibility
  const content = escapeTextInHtml(rawContent);
  const pageContent = generateBlogPage(metadata, content);

  // Create directory if it doesn't exist
  const outputDir = path.join(appBlogDir, dir);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the page file
  const outputPath = path.join(outputDir, 'page.tsx');
  fs.writeFileSync(outputPath, pageContent, 'utf8');
  console.log(`Generated: blog/${dir}/page.tsx`);
});

console.log(`\nAll ${blogDirs.length} blog posts generated successfully!`);

// ─── Phase 2A: Dynamic Blog Index Generation ────────────────────────────────

function generateBlogIndex(allMetadata) {
  // Sort by date descending
  const sorted = [...allMetadata].sort((a, b) => new Date(b.date) - new Date(a.date));

  const postsArrayStr = sorted.map(m => {
    const readingTimeNum = typeof m.readingTime === 'string' ? parseInt(m.readingTime) : (m.readingTime || 10);
    const dateObj = new Date(m.date);
    const dateStr = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return `    {
      slug: "${m.slug}",
      title: "${m.title.replace(/"/g, '\\"')}",
      description: "${m.description.replace(/"/g, '\\"')}",
      date: "${dateStr}",
      categories: [${(m.categories || []).map(c => `"${c.replace(/"/g, '\\"')}"`).join(', ')}],
      readingTime: ${readingTimeNum},
    }`;
  }).join(',\n');

  return `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/aurora-background";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Insights & Guides",
  description: "Expert articles on SAFE notes, convertible notes, burn rate management, equity dilution, cap tables, and fundraising strategy for startup founders.",
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/",
  },
  openGraph: {
    title: "Startup Insights & Guides | ICanPitch Blog",
    description: "Expert articles on SAFE notes, convertible notes, burn rate management, equity dilution, and fundraising strategy.",
    url: "https://learn.icanpitch.com/blog/",
    type: "website",
    siteName: "ICanPitch",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Insights & Guides | ICanPitch Blog",
    description: "Expert articles on SAFE notes, convertible notes, burn rate management, equity dilution, and fundraising strategy.",
  },
};

export default function BlogPage() {
  const posts = [
${postsArrayStr}
  ];

  return (
    <div className="min-h-screen bg-white">
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
            <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto">
              From negotiating valuation caps to understanding burn rate benchmarks by city, these guides cover practical fundraising and financial topics for founders at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-3 text-center">Browse by Topic</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/blog/safe-calculator-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">SAFE Guides</Link>
            <Link href="/blog/burn-rate-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">Burn Rate & Runway</Link>
            <Link href="/blog/equity-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">Equity & Vesting</Link>
            <Link href="/blog/exit-strategy-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">Exit & Pro-Rata</Link>
            <Link href="/blog/valuation-guides/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">Valuations</Link>
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
                      <span>&bull;</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pb-5">
                    <Link
                      href={\`/blog/\${post.slug}/\`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read Article
                      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
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

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-600">Want to put these insights into practice? <Link href="/learn/" className="text-blue-600 hover:text-blue-700 font-medium underline">Try our free calculator guides</Link> to model SAFE conversions, burn rate, equity splits, and more.</p>
        </div>
      </section>
    </div>
  );
}
`;
}

// Generate blog index
const blogIndexContent = generateBlogIndex(allMetadata);
fs.writeFileSync(path.join(appBlogDir, 'page.tsx'), blogIndexContent, 'utf8');
console.log('Generated: blog/page.tsx (dynamic index)');

// ─── Phase 3B: Hub/Pillar Pages ─────────────────────────────────────────────

function generateHubPage(hub, allMetadata) {
  const matchingPosts = allMetadata.filter(m => hub.filterFn(m.slug, m.tags || [], m.categories || []));
  // Sort by date descending
  matchingPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const calcSlug = calculatorSlugMap[hub.calculatorKey] || 'safe-calculator';
  const cta = ctaCopy[hub.calculatorKey] || ctaCopy['safe-calculator'];
  const ctaUrl = `https://icanpitch.com/${calcSlug}/`;

  // Generate function name from slug
  let functionName = hub.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'HubPage';

  const postsArrayStr = matchingPosts.map(m => {
    const readingTimeNum = typeof m.readingTime === 'string' ? parseInt(m.readingTime) : (m.readingTime || 10);
    const dateObj = new Date(m.date);
    const dateStr = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    return `    {
      slug: "${m.slug}",
      title: "${m.title.replace(/"/g, '\\"')}",
      description: "${(m.description || '').replace(/"/g, '\\"')}",
      date: "${dateStr}",
      categories: [${(m.categories || []).map(c => `"${c.replace(/"/g, '\\"')}"`).join(', ')}],
      readingTime: ${readingTimeNum},
    }`;
  }).join(',\n');

  return `import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/aurora-background";
import Link from "next/link";
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: "${hub.title} | ICanPitch",
  description: "${hub.description}",
  openGraph: {
    title: "${hub.title}",
    description: "${hub.description}",
    type: "website",
    url: "https://learn.icanpitch.com/blog/${hub.slug}/",
    siteName: "ICanPitch",
  },
  twitter: {
    card: "summary_large_image",
    title: "${hub.title}",
    description: "${hub.description}",
  },
  alternates: {
    canonical: "https://learn.icanpitch.com/blog/${hub.slug}/",
  },
};

export default function ${functionName}() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog/" },
    { label: "${hub.h1}" },
  ];

  const posts = [
${postsArrayStr}
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
          <AuroraBackground />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ${hub.h1}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                ${hub.description}
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                ${hub.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">${matchingPosts.length} Articles</h2>
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
                        <span>&bull;</span>
                        <span>{post.readingTime} min read</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-5">
                      <Link
                        href={\`/blog/\${post.slug}/\`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Read Article
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ${cta.headline}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ${cta.description}
              </p>
              <a
                href="${ctaUrl}"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 hover:from-blue-600 hover:via-indigo-500 hover:to-purple-600 shadow-md hover:shadow-lg transition-all"
              >
                ${cta.button} &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Other Guides */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-gray-600 mb-3">Explore more guides</p>
            <div className="flex flex-wrap justify-center gap-3">
              ${hubPages.filter(h => h.slug !== hub.slug).map(h =>
                `<Link href="/blog/${h.slug}/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">${h.h1}</Link>`
              ).join('\n              ')}
              <Link href="/blog/" className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">All Articles</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
`;
}

// Generate hub pages
hubPages.forEach(hub => {
  const hubDir = path.join(appBlogDir, hub.slug);
  if (!fs.existsSync(hubDir)) {
    fs.mkdirSync(hubDir, { recursive: true });
  }
  const hubContent = generateHubPage(hub, allMetadata);
  fs.writeFileSync(path.join(hubDir, 'page.tsx'), hubContent, 'utf8');
  console.log(`Generated: blog/${hub.slug}/page.tsx (hub page)`);
});

console.log('\nBlog generation complete!');
