const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content', 'blog');
const appBlogDir = path.join(__dirname, 'app', 'blog');

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
  }
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

console.log('All blog posts generated successfully!');
