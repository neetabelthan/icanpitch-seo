# ICanPitch SEO Style Guide

This style guide ensures all SEO pages maintain visual consistency with the main ICanPitch application.

## Color Palette

### Primary Gradients

**Title Gradient** (Used for main headings like "SAFE Calculator")
- Blue-600 to Purple-600
- Hex: `#2563EB` → `#9333EA`
- Usage: `bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`

**Button Gradient** (Colorful CTA buttons)
- Indigo-500 → Purple-500 → Pink-500
- Hex: `#6366F1` → `#A855F7` → `#EC4899`
- Usage: `bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`

### Background Colors

**Aurora Background** (Animated gradient for hero sections)
```
Blue-500: #3B82F6
Indigo-300: #A5B4FC
Blue-300: #93C5FD
Violet-200: #DDD6FE
Blue-400: #60A5FA
```

**Page Backgrounds**
- White: `#FFFFFF` (default)
- Light purple: `#FAF5FF` (purple-50)

**Card Backgrounds**
- White: `#FFFFFF` (default)
- Blue-50: `#EFF6FF`
- Gray-50: `#F9FAFB`
- Purple-50: `#FAF5FF`
- Green-50: `#F0FDF4`
- Yellow-50: `#FEFCE8`
- Orange-50: `#FFF7ED`

### Text Colors

**Headings**
- Primary: `#111827` (gray-900)
- Secondary: `#374151` (gray-700)

**Body Text**
- Regular: `#4B5563` (gray-600)
- Medium: `#374151` (gray-700)
- Dark: `#111827` (gray-900)
- Foreground: `#262626` (from CSS var)

**Muted Text**
- Muted: `#9CA3AF` (gray-400)
- Muted foreground: `#666666`

**Accent Text**
- Blue-800: `#1E40AF`
- Blue-900: `#1E3A8A`
- Purple-800: `#6B21A8`
- Green-800: `#166534`
- Orange-800: `#9A3412`

### Border Colors

**Standard**
- Default: `#E5E7EB` (gray-200)

**Accent Borders**
- Blue-500: `#3B82F6`
- Blue-200: `#BFDBFE`
- Purple-500: `#A855F7`
- Green-200: `#BBF7D0`
- Orange-200: `#FED7AA`
- Yellow-200: `#FEF08A`

### Button Colors

**Primary Button (Colorful)**
- Background: Gradient `from-indigo-500 via-purple-500 to-pink-500`
- Text: White `#FFFFFF`
- Hover: Slightly darker gradient with scale effect

**Standard Button**
- Light mode background: `#18181B` (zinc-900)
- Dark mode background: `#F4F4F5` (zinc-100)
- Text: White or zinc-900 depending on mode

## Typography

### Font Family
- Sans-serif system stack (default Next.js)
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### Font Sizes

**Headings**
- H1 (Hero): `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` (48-72px)
- H1 (Standard): `text-3xl md:text-4xl` (36-48px)
- H2: `text-2xl md:text-3xl` (30-36px)
- H3: `text-xl md:text-2xl` (24-30px)

**Body**
- Large: `text-lg md:text-xl` (18-20px)
- Regular: `text-base` (16px)
- Small: `text-sm` (14px)
- Extra small: `text-xs` (12px)

### Font Weights
- Bold: `font-bold` (700)
- Semibold: `font-semibold` (600)
- Medium: `font-medium` (500)
- Regular: `font-normal` (400)

## Component Styles

### Header

The header includes the logo and navigation, and is sticky at the top of all pages.

**Usage:**
```tsx
import { Header } from '@/components/header';

<Header />
```

**Features:**
- Logo links to https://icanpitch.com
- Sticky positioning (stays at top on scroll)
- Gradient ICanPitch text
- Navigation links to Home and Learn
- Responsive design

### Cards

**Default Card**
```tsx
<Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle className="text-xl md:text-2xl">Title</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

**Highlighted Card (with colored background)**
```tsx
<Card className="bg-blue-50 border-blue-200 shadow-lg">
  {/* Content */}
</Card>
```

### Buttons

**Primary CTA Button**
```tsx
<Button
  size="lg"
  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
>
  Get Started
</Button>
```

**Secondary Button**
```tsx
<Button variant="outline" size="lg">
  Learn More
</Button>
```

### Badges

**Stage Badges**
```tsx
<Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
  Seed
</Badge>
```

**Feature Badges**
```tsx
<Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
  New
</Badge>
```

## Layout Guidelines

### Spacing

**Section Padding**
- Small: `py-8 md:py-12` (32-48px)
- Medium: `py-12 md:py-20` (48-80px)
- Large: `py-12 md:py-20 lg:py-24` (48-96px)

**Container**
- Use: `container mx-auto px-4 md:px-6`
- Max width: `max-w-4xl` for content sections
- Max width: `max-w-6xl` for grid layouts

**Gap**
- Small: `gap-2` (8px)
- Medium: `gap-4` (16px)
- Large: `gap-6` (24px)
- Extra large: `gap-8` (32px)

### Grid Layouts

**Calculator Cards Grid**
```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Cards */}
</div>
```

**Two Column Layout**
```tsx
<div className="grid gap-8 md:grid-cols-2">
  {/* Content */}
</div>
```

## Page Structure

### Standard Calculator Page

1. **Aurora Background Hero**
   - Animated gradient background
   - Centered content
   - Title with gradient text
   - Description
   - Stage badges

2. **Content Section**
   - White background
   - Prose styling for readability
   - Clear headings hierarchy

3. **CTA Section**
   - Colored background (purple-50 or blue-50)
   - Centered card
   - Gradient CTA button

### Example Structure

```tsx
export default function CalculatorPage() {
  return (
    <>
      {/* Hero with Aurora Background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AuroraBackground />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Calculator Name
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Description
          </p>
          <div className="flex gap-2 mt-6">
            <Badge>Stage</Badge>
            <Badge>Type</Badge>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg">
            {/* Content */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-purple-200 shadow-xl">
            <CardContent className="text-center py-12">
              <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Start Calculator
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
```

## Animation Guidelines

### Hover Effects
- Cards: `hover:shadow-lg transition-shadow duration-300`
- Buttons: `hover:scale-105 transition-all duration-200`
- Links: `hover:text-foreground transition-colors`

### Aurora Animation
```css
@keyframes aurora {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30%, -30%) scale(1.1); }
  66% { transform: translate(-20%, 20%) scale(0.9); }
}
```

## Accessibility

- Maintain color contrast ratios (WCAG AA minimum)
- Use semantic HTML elements
- Include proper ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers

## Best Practices

1. **Consistency**: Always use design tokens from this guide
2. **Responsiveness**: Test on mobile, tablet, and desktop
3. **Performance**: Optimize images and animations
4. **SEO**: Proper heading hierarchy (H1 → H2 → H3)
5. **Loading States**: Show loading indicators for async operations

## File Organization

```
/app
  /learn
    /[calculator-name]
      page.tsx          # Calculator page
  globals.css           # Global styles
  layout.tsx            # Root layout

/components
  /ui
    button.tsx          # Button component
    card.tsx            # Card components
    badge.tsx           # Badge component
  aurora-background.tsx # Aurora animation

/lib
  utils.ts              # Utility functions
```

## Adding New Calculator Pages

### Automated Page Generation

All calculator pages are automatically generated from metadata files using the `generate-pages.js` script.

### Step 1: Create Metadata File

Add a new folder in `/learn/` with the SEO-optimized slug name, then create a `metadata.json` file:

```json
{
  "slug": "your-calculator-slug-with-seo-keywords",
  "title": "Your Calculator Title",
  "metaDescription": "SEO-optimized description with keywords",
  "h1": "Main Heading for Calculator",
  "dataRow": {
    "calculator_name": "calculator-name",
    "stage": "seed",
    "founder_type": "technical-founder",
    "geography": "san-francisco",
    "intent_modifier": "optimize-workflow",
    "outcome_modifier": "maximize-efficiency"
  },
  "url": "https://icanpitch.com/learn/your-calculator-slug/",
  "index": 0,
  "generatedAt": "2025-11-06T00:00:00.000Z"
}
```

### Step 2: Update Calculator Slug Mapping

If the calculator name in metadata differs from the actual URL on icanpitch.com, update the mapping in `generate-pages.js`:

```javascript
const calculatorSlugMap = {
  'calculator-name': 'actual-icanpitch-url-slug',
  'burn-rate-calculator': 'burn-rate-runway-calculator',
  // Add your new mapping here
};
```

**Current Mappings:**
- `burn-rate-calculator` → `burn-rate-runway-calculator`
- `pre-post-money-calculator` → `pre-post-money-valuation-calculator`
- `equity-split-calculator` → `co-founder-equity-split-calculator`
- `option-pool-calculator` → `option-pool-impact-calculator`
- `pro-rata-calculator` → `pro-rata-rights-impact-calculator`
- `vesting-calculator` → `vesting-schedule-cliff-explorer`
- `exit-calculator` → `startup-exit-visualizer`

### Step 3: Generate Pages

Run the page generator script:

```bash
node generate-pages.js
```

This will automatically create:
- React component with proper imports
- SEO metadata (title, description, Open Graph, Twitter)
- JSON-LD structured data for search engines
- Aurora background hero section
- Content sections with proper styling
- CTA section with gradient button linking to icanpitch.com
- Proper function naming (handles edge cases like numbers at start)

### Step 4: Update /learn Index

Add your new calculator to `/app/learn/page.tsx` and `/app/page.tsx` in the calculators array:

```javascript
{
  name: "Your Calculator Name",
  slug: "your-full-seo-slug-here",
  stage: "Seed",
  description: "Brief description for the card"
}
```

### What Gets Generated Automatically

Each generated page includes:

1. **Header Component** - Logo linking to icanpitch.com, Learn navigation
2. **SEO Metadata** - Title, description, Open Graph, Twitter cards
3. **JSON-LD** - Structured data for search engines
4. **Aurora Hero** - Animated gradient background with title
5. **Content Sections** - Three H2 sections with relevant content
6. **Stage Badges** - Colored badges for funding stage, founder type, geography
7. **CTA Section** - Gradient button linking to the actual calculator
8. **Responsive Design** - Mobile-first, works on all screen sizes

### Important Notes

- **Function Names**: If slug starts with a number (e.g., 409a), it will be prefixed with `_`
- **External Links**: All links to icanpitch.com open in new tab (`target="_blank"`)
- **Button Gradient**: Uses aurora colors (blue → indigo → purple), not bright pink
- **No Breadcrumbs**: Header navigation is sufficient, no duplicate nav
- **Clean URLs**: Always include trailing slash for SEO

### File Structure After Generation

```
/app
  /learn
    /your-calculator-slug/
      page.tsx           # Auto-generated React component
/learn
  /your-calculator-slug/
    metadata.json        # Source metadata
    index.html          # Static fallback (optional)
```

### Testing Your New Page

1. Start dev server: `npm run dev`
2. Visit: `http://localhost:3000/learn/your-slug/`
3. Check:
   - Header shows correctly
   - Aurora background animates
   - Title uses gradient
   - CTA button links to correct calculator URL
   - All links open in new tabs

### Deployment Checklist

- [ ] Metadata file created with proper SEO keywords
- [ ] Slug mapping added if calculator name differs
- [ ] `generate-pages.js` executed successfully
- [ ] Calculator added to /learn index page
- [ ] Page tested locally
- [ ] OG image created at `/public/og/your-slug.png` (optional)
- [ ] Links verified to point to correct icanpitch.com URL

## Adding New Blog Posts

### Automated Blog Post Generation

All blog posts are automatically generated from content + metadata files using the `generate-blog.js` script.

### Step 1: Create Blog Content Folder

Create a new folder in `/content/blog/` with your post slug name:

```
/content/blog/your-post-slug/
  metadata.json
  content.html
```

**IMPORTANT**: The folder name MUST match the slug in metadata.json!

### Step 2: Create Metadata File

Create `/content/blog/your-post-slug/metadata.json`:

```json
{
  "slug": "your-post-slug",
  "title": "Your Post Title",
  "description": "SEO description for the post",
  "date": "2025-01-15",
  "categories": ["Fundraising", "Equity"],
  "tags": ["SAFE", "dilution", "equity"],
  "readingTime": 8,
  "heroImage": "hero.jpg"
}
```

**Note**: Author is always "Neeta Belthan" (hardcoded in generator)

### Step 3: Create Content File

Create `/content/blog/your-post-slug/content.html` with your article content:

```html
<h2>Your First Section</h2>
<p>
  Your paragraph text here. Keep paragraphs focused and readable.
</p>

<h3>Subsection Title</h3>
<ul>
  <li><strong>Key Point</strong>: Explanation here</li>
  <li><strong>Another Point</strong>: More details</li>
</ul>

<h2>Next Section</h2>
<p>
  Use <a href="https://example.com" target="_blank" rel="noopener noreferrer">links</a>
  to reference external resources.
</p>

<ol>
  <li><strong>First step</strong>: Do this</li>
  <li><strong>Second step</strong>: Then this</li>
</ol>
```

### Step 4: Generate Blog Post

Run the blog generator script:

```bash
node generate-blog.js
```

This will automatically create:
- React component at `/app/blog/your-post-slug/page.tsx`
- SEO metadata (title, description, Open Graph, Twitter)
- JSON-LD structured data
- Hero section with categories and meta info
- Optimized typography for readability
- Author bio section (Neeta Belthan)
- CTA section with link to calculators

### Step 5: Update Blog Index

Add your new post to `/app/blog/page.tsx` in the posts array:

```javascript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  description: "Brief description",
  date: "January 15, 2025",
  categories: ["Fundraising", "Equity"],
  readingTime: 8,
}
```

### Blog Typography Guidelines

The blog generator uses optimized typography for maximum readability:

**Content Container**
- Max width: `max-w-3xl` (optimal line length ~65-75 characters)
- Centered on page for focus

**Typography Styles**
- **H2 Headings**: `text-3xl`, bold, `mt-12 mb-4` (first has no top margin)
- **H3 Headings**: `text-2xl`, semibold, `mt-8 mb-3`
- **Paragraphs**: `text-lg`, gray-700, relaxed line height, `mb-6`
- **Lists**: `text-lg`, gray-700, proper indentation, `space-y-2` between items
- **Strong Text**: Semibold, darker gray (gray-900)
- **Links**: Blue-600, underlined, hover:blue-700
- **Blockquotes**: Left border (blue-500), italic, padded

**Visual Hierarchy**
```
H1 Hero (4xl-6xl, gradient) → H2 Sections (3xl) → H3 Subsections (2xl) → Body (lg)
```

**Spacing System**
- Between paragraphs: `mb-6` (24px)
- Before H2: `mt-12` (48px)
- Before H3: `mt-8` (32px)
- List items: `space-y-2` (8px)

### What Gets Generated Automatically

Each generated blog post includes:

1. **Header Component** - Logo, Learn/Blog navigation
2. **SEO Metadata** - Title, description, OG, Twitter cards
3. **JSON-LD** - Article structured data with author
4. **Hero Section** - Aurora background with title, categories, meta
5. **Hero Image** - Optional featured image (if specified)
6. **Article Content** - Optimized typography for readability
7. **Tags Section** - Related tags for discoverability
8. **Author Bio** - Neeta Belthan info with gradient avatar
9. **CTA Section** - Link to ICanPitch calculators
10. **Responsive Design** - Mobile-first, works on all devices

### Important Notes

- **Folder = Slug**: Folder name MUST match slug in metadata.json
- **Author Fixed**: Always "Neeta Belthan", cannot be changed
- **Typography**: Optimized for readability, don't change font sizes
- **Max Width**: Keep at `max-w-3xl` for optimal reading experience
- **Links**: All external links should have `target="_blank"`
- **Hero Image**: Optional, place in `/public/blog/` directory

### Testing Your Blog Post

1. Start dev server: `npm run dev`
2. Visit: `http://localhost:3000/blog/your-slug/`
3. Check:
   - Typography is easy to read
   - Proper spacing between sections
   - Categories display correctly
   - Author bio shows Neeta Belthan
   - CTA button links to icanpitch.com
   - All external links open in new tabs

### Deployment Checklist

- [ ] Folder name matches slug in metadata.json
- [ ] Content HTML is properly formatted
- [ ] `generate-blog.js` executed successfully
- [ ] Post added to /blog index page
- [ ] Post tested locally for readability
- [ ] Hero image added to `/public/blog/` (if used)
- [ ] Reading time estimate is accurate

## References

- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
- Next.js: https://nextjs.org/docs
- Calculator Page Generator: `generate-pages.js`
- Blog Post Generator: `generate-blog.js`
