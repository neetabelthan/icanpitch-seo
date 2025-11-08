# Repository Guidelines

## Project Structure & Module Organization
The Next.js App Router lives under `app/`, with route segments for `learn`, `blog`, and shared layouts. UI primitives (buttons, cards, aurora background, header) sit in `components/`, while composable utilities live in `lib/`. SEO source material is generated from `content/blog/<slug>` (blog + SEO articles) and `learn/<slug>` (calculator metadata). Automation scripts `generate-blog.js` and `generate-pages.js` transform those folders into typed pages inside `app/`. Static assets belong in `public/`, and Tailwind or config artifacts remain at the root (`tailwind.config.ts`, `tsconfig.json`).

## Build, Test, and Development Commands
Use `npm run dev` for hot reload at `http://localhost:3000`. Ship-ready bundles require `npm run build`, followed by `npm run start` for a production preview. Run `npm run lint` before every PR; it invokes `next lint` with TypeScript-aware ESLint rules. Content automation is manual: `node generate-pages.js` regenerates calculator routes from `/learn`, and `node generate-blog.js` turns `content/blog` entries into React pages.

## Coding Style & Naming Conventions
Code is TypeScript-first, 2-space indented, and prefers functional React components with PascalCase names (e.g., `AuroraBackground`). Route folders stay kebab-case to mirror slugs. Tailwind class strings follow the palette documented in `STYLE_GUIDE.md`; avoid inline styles and keep gradient tokens consistent (`from-blue-600 to-purple-600`). Shared props/types belong in `lib/` to keep components lean. Use `clsx` and `class-variance-authority` for conditional styling instead of manual string concatenation.

## Testing & QA Expectations
There is no Jest suite yet, so lean on linting plus the content QA harness. Run `bash qa_blog_posts.sh` after adding or editing blog/SEO entries; it validates folder structure, metadata fields, HTML tags, link attributes, and word-count targets (3.5k–4.5k). When touching generators, smoke-test by adding a temporary slug under `content/blog/example-slug/` and verifying the page materializes in `app/blog/example-slug/page.tsx`.

## Commit & Pull Request Guidelines
Recent history favors short, imperative subjects ("Fix build", "Added a test SEO page"). Follow that format, scope commits tightly, and reference tickets in the body if relevant. Every PR should describe: (1) what changed, (2) how content was generated (`node generate-blog.js`, etc.), (3) screenshots or links for new pages, and (4) QA evidence (lint + `qa_blog_posts.sh`). Ping reviewers on sitemap/base-url changes because they affect deploy environments.

## Deployment & Configuration Notes
Before merging deployment changes, update the `baseUrl` constant in `app/sitemap.ts` and `app/robots.ts` so crawlers see the correct domain (e.g., `https://learn.icanpitch.com`). Keep secrets out of the repo; configuration relies on Next.js environment variables set via Vercel or your chosen host. When adding assets, optimize them and place under `public/` to benefit from Next.js static serving.
