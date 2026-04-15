# Blog Post Template — Page Specification

**Page:** Individual Blog Post
**URL:** `/blog/{slug}`
**Template Type:** Blog Post (dynamic template)
**Priority:** P2 — Expansion (post-launch)
**Content Source:** New creation (ongoing)

---

## 1. Page Purpose & Strategic Role

### 1.1 Primary Goal

Each blog post targets a specific long-tail keyword, educates the visitor, and routes them to the relevant pillar, cluster, or package page. Blog posts are **feeder content** — they attract organic traffic on topics too narrow for pillar/cluster pages, then funnel readers into the conversion architecture.

### 1.2 Design Principle

The blog post template should feel like part of the same site, but optimized for reading — wider content column, minimal distractions, clear typography. It borrows the site's design system (fonts, colors, spacing) but strips away the navigation-heavy elements of pillar/cluster pages. The reading experience comes first; conversion elements are present but unobtrusive.

---

## 2. Section Order

| # | Section | Role |
|---|---------|------|
| 1 | Post Header | Category badge, H1, author byline + photo, publish date, reading time |
| 2 | Featured Image (optional) | Hero image or pillar-colored header block |
| 3 | Article Body | Long-form content. Markdown-rendered. Supports headings, images, blockquotes, code blocks, tables, embedded CTAs |
| 4 | Author Bio Card | David's photo, name, title, 2-sentence bio, link to About page |
| 5 | Contextual CTA | Pillar-specific CTA based on blog post category — "Ready to learn more about [topic]? → [Pillar page]" |
| 6 | Related Posts | 3 related posts by category or tag — card format |
| 7 | Pillar Navigation | "Explore our service pages" — 4 pillar links for visitors who arrived via search |

**Sidebar (desktop, optional):**
- Table of contents (auto-generated from H2/H3 headings)
- "Quick links" — relevant pillar page, relevant package, phone number
- Share buttons (LinkedIn, X/Twitter, email — no Facebook for privacy-conscious audience)

---

## 3. Key Specifications

### Post Header

```
[PRIVACY] ← category badge in pillar color (blue)

H1: How to Form an Anonymous LLC in
    Wyoming: A Step-by-Step Guide

By David [headshot thumbnail] · April 10, 2026 · 8 min read

Last updated: April 10, 2026
```

**Dev Notes:**
- Category badge links to `/blog/?category=privacy` (filtered blog index)
- Author name links to `/about/` (About page, founder section)
- "Last updated" date for content freshness signals — important for legal/financial topics
- No breadcrumb on blog posts — the header provides all navigation context

### Article Body

**Supported content blocks within the body:**
- Standard prose paragraphs
- H2, H3 headings (auto-fed to table of contents sidebar)
- Inline images with captions and alt text
- Blockquotes (for callouts, not for quoting competitors)
- Ordered and unordered lists
- Tables (for data comparison within articles)
- **Inline CTA blocks** — styled callout boxes that link to pillar/cluster/package pages. Blue border for Privacy, green for AP, amber for Formation.
- FAQ schema blocks — if the post answers specific questions, structured Q&A blocks can be embedded with FAQPage schema

**Inline CTA example (within article body):**

```
┌─────────────────────────────────────────────────────┐
│ 🔒 READY TO FORM YOUR ANONYMOUS LLC?                │
│                                                     │
│ Wyoming Gold Package — $1,275 all-inclusive.         │
│ Year-round nominees, offshore records, all fees.    │
│                                                     │
│ [View Wyoming Gold Package →]                       │
└─────────────────────────────────────────────────────┘
```

**Dev Notes:**
- Inline CTAs appear 1–2 times per post — after the educational content, not before. The reader should receive value before seeing a conversion prompt.
- CTA pillar color matches the post's category
- Internal links: every post should contain 2–3 contextual links to pillar/cluster pages (critical for SEO authority flow)

### Author Bio Card

```
┌──────────────────────────────────────────────────┐
│ [Photo] David [Last Name]                        │
│         Founder, Incorporate123                  │
│                                                  │
│ Privacy and asset protection specialist with 25  │
│ years forming entities in Wyoming and Nevada.    │
│                                                  │
│ → About Incorporate123 (/about/)                 │
└──────────────────────────────────────────────────┘
```

**Dev Notes:**
- Author card is a reusable component — same card appears on every post
- Person schema markup for E-E-A-T
- Photo must match the About page headshot (consistency)

### Contextual CTA (Post-Article)

Dynamically selected based on the post's category:

| Category | CTA |
|----------|-----|
| Privacy | "Learn more about business privacy → /privacy/" |
| Asset Protection | "Explore asset protection strategies → /asset-protection/" |
| Formation | "See our formation packages → /formation/" |
| Compliance | "View compliance services → /compliance/" |
| General | "Compare all packages → /compare-packages/" |

### Related Posts

3 posts from the same category. Card format matching the blog index cards (thumbnail, title, excerpt, date).

Fallback: if fewer than 3 posts in the same category, fill with posts from related categories (Privacy ↔ AP, Formation ↔ Compliance).

---

## 4. Technical Specifications

| Element | Value |
|---------|-------|
| **H1** | Post title (unique per post) |
| **Title tag** | "{Post Title} \| Incorporate123 Blog" |
| **Meta description** | Custom per post — SEO-optimized summary (150–160 chars) |
| **Schema** | Article (with author, datePublished, dateModified), Person (author), FAQPage (if post contains Q&A blocks), BreadcrumbList |
| **Canonical** | Self-referencing |
| **Open Graph** | og:title, og:description, og:image, og:type=article |
| **URL pattern** | `/blog/{slug}` — slug auto-generated from title, editable in CMS |
| **Pagination** | No — blog posts are single pages, not paginated |
| **Content format** | Markdown in CMS, rendered to HTML |

### SEO Per-Post Requirements

Each blog post requires:
- Custom H1 (post title, targeting primary keyword)
- Custom meta description (150–160 chars)
- Custom og:image (shared on social)
- 2–3 internal links to pillar/cluster/package pages
- 1–2 inline CTAs to relevant conversion endpoints
- Category assignment (maps to pillar)
- Author assignment (David, with Person schema)
- Alt text on all images

---

## 5. Content Notes for David

1. **Author bio** — Provide a 2-sentence bio for the blog author card
2. **Headshot** — Same professional photo used on About page
3. **CMS authoring** — Blog posts will be created in the CMS. David (or his team) will need training on the CMS blog editor, including how to add inline CTAs, set categories, and write meta descriptions.
4. **Image sourcing** — Blog posts can use abstract/conceptual header images, infographics, or diagrams. NO stock photography of people (brand guide). SVG illustrations or pillar-colored header blocks are acceptable alternatives to photos.
5. **Social sharing** — LinkedIn and X/Twitter share buttons included. Facebook intentionally excluded (privacy-conscious audience). Does David want to add any other platforms?

---

*End of Specification — Blog Post Template*
*Confidential — BIT Studios × Incorporate123 — April 2026*
