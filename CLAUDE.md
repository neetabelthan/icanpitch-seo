# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SEO content site for ICanPitch — a standalone Next.js 14 (App Router) app that generates programmatic SEO pages for startup calculator tools. Deployed separately from the main ICanPitch app at `learn.icanpitch.com`. Content is authored as metadata JSON + HTML source files, then transformed into fully-typed React pages by Node.js generator scripts.

## Commands

```bash
npm run dev          # Dev server at http://localhost:3000
npm run build        # Production build (standalone output)
npm run lint         # next lint (TypeScript-aware ESLint)
node generate-blog.js    # Generate /app/blog/*/page.tsx from /content/blog/*/
node generate-pages.js   # Generate /app/learn/*/page.tsx from /learn/*/
bash qa_blog_posts.sh    # Validate blog content (HTML tags, metadata, word count 3.5k-4.5k)
```

Note: `qa_blog_posts.sh` has a hardcoded path that may need updating (`BLOG_DIR` on line 6).

## Architecture

### Content Generation Pipeline

Source content lives outside `app/` and is transformed into React pages by generator scripts:

- **Blog/SEO pages**: `content/blog/<slug>/metadata.json` + `content.html` → `node generate-blog.js` → `app/blog/<slug>/page.tsx`
- **Calculator pages**: `learn/<slug>/metadata.json` → `node generate-pages.js` → `app/learn/<slug>/page.tsx`

Generated pages in `app/blog/` and `app/learn/` are **output artifacts** — edit the source content, not the generated files.

### Two Content Types

**Blog posts** (`"pageType": "blog"`): Include author bio (Neeta Belthan, hardcoded), `BlogPosting` JSON-LD schema.

**SEO pages** (`"pageType": "seo"`): No author attribution, generic `Article` JSON-LD schema, CTA-focused. Default if `pageType` is omitted is "blog".

### Content Authoring Rules

- `content.html` uses only these HTML tags: `h2`, `h3`, `p`, `ul`, `ol`, `li`, `strong`, `a`, `blockquote`
- Use `h2` for main sections (never `h1` — that's in the hero)
- External links require `target="_blank" rel="noopener noreferrer"`
- Folder name in `content/blog/` **must** exactly match the `slug` in `metadata.json`
- After generating pages, manually add entries to the index pages: `app/blog/page.tsx` (posts array) and/or `app/learn/page.tsx` + `app/page.tsx` (calculators array)

### Calculator Slug Mapping

`generate-pages.js` maps metadata `calculator_name` values to actual icanpitch.com URL slugs (e.g., `burn-rate-calculator` → `burn-rate-runway-calculator`). Update `calculatorSlugMap` in that file when adding new calculators.

### Key Metadata Fields (Blog)

Required: `pageType`, `slug`, `title`, `description`, `date`, `categories` (array), `tags` (array), `readingTime` (number).

### Key Metadata Fields (Calculator)

Required: `slug`, `title`, `metaDescription`, `h1`, `dataRow` (object with `calculator_name`, `stage`, `founder_type`, `geography`, `outcome_modifier`).

## Styling

- Tailwind CSS with CSS custom properties for theming (defined in `app/globals.css`)
- Component variants via `class-variance-authority` (CVA); class merging via `clsx` + `tailwind-merge` (`cn()` in `lib/utils.ts`)
- shadcn/ui-style primitives in `components/ui/` (Button, Card, Badge, Input)
- Primary gradient: `from-blue-600 to-purple-600` (headings), `from-indigo-500 via-purple-500 to-pink-500` (CTA buttons)
- `AuroraBackground` component provides animated gradient hero sections (client component, 60s animation cycle)
- Full design system documented in `STYLE_GUIDE.md`

## Configuration

- `next.config.js`: standalone output, trailing slashes enabled (all routes end with `/`)
- Path alias: `@/*` maps to project root
- Base URL for sitemap/robots hardcoded in `app/sitemap.ts` and `app/robots.ts` — update before deploying to a new domain
- No environment variables or secrets required
