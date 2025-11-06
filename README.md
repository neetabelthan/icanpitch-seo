# icanpitch-seo

**SEO content repository for ICanPitch - Automated calculator guide pages with Aurora-styled design**

This is a standalone Next.js app that generates SEO-optimized calculator guide pages, keeping SEO content separate from the main ICanPitch landing page.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Content Types

### ✅ Calculator Pages (Automated)
- **Purpose**: SEO landing pages for each calculator tool
- **Flow**: Create `metadata.json` → Run `node generate-pages.js` → Pages auto-generated
- **Links to**: icanpitch.com calculator tools (in new tab)
- **Current**: 10 calculator pages with Aurora backgrounds, gradient CTAs

### 📝 Blog Posts (Automated)
- **Purpose**: Educational content, tutorials, guides, case studies
- **Author**: Neeta Belthan (fixed)
- **Flow**: Create metadata.json + content.html → Run `node generate-blog.js` → Pages auto-generated
- **Typography**: Optimized for readability (text-lg, max-w-3xl, proper spacing)
- **Links to**: Internal content, external resources, calculators
- **Current**: 1 example blog post with Aurora design and improved typography

## For Calculator Pages

1. Create metadata file in `/learn/your-slug/metadata.json`
2. Update slug mapping in `generate-pages.js` if needed
3. Run: `node generate-pages.js`
4. Add to index pages: `/app/learn/page.tsx` and `/app/page.tsx`

See `STYLE_GUIDE.md` for complete documentation.

## For Blog Posts & SEO Pages

**IMPORTANT FOR LLMs**: When user asks to create a blog post OR SEO page, follow these steps:

### Human Creates (You do this):
1. **Create folder**: `/content/blog/your-post-slug/` (folder name MUST match slug)
2. **Create metadata.json**: Post info (title, date, categories, tags, etc.)
3. **Create content.html**: The actual article content in **HTML format** (see allowed tags below)

### Command Generates (Run this):
```bash
node generate-blog.js
```
This reads the content files and generates the full React page with SEO, styling, and components.

### Update Index (You do this):
5. Add post to `/app/blog/page.tsx` in the `posts` array

---

### Metadata Example (`metadata.json`)

**For Blog Posts** (with author attribution):
```json
{
  "pageType": "blog",
  "slug": "your-post-slug",
  "title": "Your Post Title",
  "description": "SEO description for the post",
  "date": "2025-01-15",
  "categories": ["Fundraising", "Equity"],
  "tags": ["SAFE", "dilution", "equity"],
  "readingTime": 8
}
```

**For SEO Pages** (no author, just CTA to icanpitch.com):
```json
{
  "pageType": "seo",
  "slug": "how-to-calculate-safe-dilution-seed-round",
  "title": "How to Calculate SAFE Dilution for Seed Round",
  "description": "Complete guide to calculating dilution from SAFE notes in your seed round",
  "date": "2025-01-15",
  "categories": ["Fundraising", "SAFE"],
  "tags": ["SAFE", "dilution", "seed-round", "equity"],
  "readingTime": 10
}
```

**Page Type Options**:
- `"pageType": "blog"` - Full blog post with author bio (Neeta Belthan)
- `"pageType": "seo"` - SEO landing page with NO author info, just CTA to icanpitch.com
- If `pageType` is omitted, defaults to "blog"

### Blog Content Format (`content.html`)

**Format**: HTML (plain HTML, not Markdown)

**Allowed Tags**:
- `<h2>` - Main section headings (required)
- `<h3>` - Subsection headings
- `<p>` - Paragraphs (main body text)
- `<ul>` and `<li>` - Bullet lists
- `<ol>` and `<li>` - Numbered lists
- `<strong>` - Bold/emphasis text
- `<a href="..." target="_blank" rel="noopener noreferrer">` - External links
- `<blockquote>` - Quotes (optional)

**Example Content** (`content.html`):

```html
<h2>Understanding SAFE Notes</h2>
<p>
  Your paragraph text here. Keep paragraphs focused and readable.
</p>

<h3>Key Terms to Know</h3>
<ul>
  <li><strong>Valuation Cap</strong>: Maximum valuation at which SAFE converts</li>
  <li><strong>Discount Rate</strong>: Percentage discount on price per share</li>
</ul>

<h2>Next Section</h2>
<p>
  Use <a href="https://icanpitch.com/calculator/" target="_blank" rel="noopener noreferrer">links</a>
  to reference calculators or external resources.
</p>

<ol>
  <li><strong>First step</strong>: Do this</li>
  <li><strong>Second step</strong>: Then this</li>
</ol>
```

**Important Notes**:
- Use `<h2>` for main sections (NOT `<h1>` - that's in the hero)
- Always include `target="_blank" rel="noopener noreferrer"` for external links
- Keep HTML simple and semantic
- No inline styles - styling is handled by the generator

### What the Generator Creates

Running `node generate-blog.js` automatically generates:
- React component at `/app/blog/your-post-slug/page.tsx`
- SEO metadata (Open Graph, Twitter cards, JSON-LD)
- Hero section with Aurora background (no hero image)
- Your content with optimized typography (text-lg, max-w-3xl, proper spacing)
- Author bio section (Neeta Belthan) - only for blog posts
- Tags section
- CTA section linking to ICanPitch

**⚠️ CRITICAL**: Folder name in `/content/blog/` MUST exactly match the slug in `metadata.json`

---

## Workflow: Creating SEO Landing Pages

**User provides**: Topic or long-tail keyword (e.g., "how to calculate safe dilution for seed round")

**LLM should**:
1. Generate SEO-optimized content in HTML format
2. Create folder: `/content/blog/how-to-calculate-safe-dilution-seed-round/`
3. Create `metadata.json` with `"pageType": "seo"` and keyword-rich title
4. Create `content.html` with the generated article
5. Run: `node generate-blog.js`
6. Add to blog index (if needed)

**Result**: SEO landing page with:
- ✅ Aurora hero with title, categories, and date
- ✅ Optimized typography for readability
- ✅ Tags for discoverability
- ✅ CTA linking to icanpitch.com
- ✅ NO author attribution
- ✅ NO hero image
- ✅ Schema.org Article markup (not BlogPosting)

## Key Files

- `generate-pages.js` - Generates calculator pages from metadata
- `generate-blog.js` - Generates blog posts from content + metadata (author: Neeta Belthan)
- `STYLE_GUIDE.md` - Complete design system and workflow documentation
- `components/header.tsx` - Global header with logo
- `components/aurora-background.tsx` - Animated gradient background
- `public/logo.png` - ICanPitch logo
- `public/favicon.ico` - Site favicon

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components

## Deployment

This app can be deployed separately from the main ICanPitch app:
- Vercel (recommended)
- Subdomain: `learn.icanpitch.com` or `blog.icanpitch.com`
- Reverse proxy to subdirectory

## Design System

- **Colors**: Aurora gradient (blue → indigo → purple)
- **Typography**: System sans-serif stack
- **Components**: Documented in STYLE_GUIDE.md
- **Responsive**: Mobile-first approach

## Need Help?

See `STYLE_GUIDE.md` for:
- Complete color palette
- Component usage
- Page structure guidelines
- Step-by-step workflow for adding pages
