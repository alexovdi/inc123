# Blog Page

> URL: `/blog` | Layout: Full-width single-column | Unique page

## Purpose

Content marketing hub. Displays blog posts organized by category. Supports ongoing SEO and thought leadership post-launch. Lower priority for initial launch — can launch with 3-5 seed articles.

## Layout

- Full-width, single-column
- Max-width: 1200px
- Blog grid: 3 columns desktop, 2 tablet, 1 mobile

## Sections

1. **Breadcrumbs** — Home > Blog
2. **Blog Hero** — H1: "Insights & Guides". Subheadline: "Expert analysis on business privacy, asset protection, and entity formation." Optional: featured/pinned post highlight.
3. **Category Filter** — Horizontal pills: All | Privacy | Asset Protection | Formation | Compliance | Industry Analysis. Pillar colors on active.
4. **Blog Post Grid** — Card grid. Each card:
   - Thumbnail image (or pillar-colored placeholder)
   - Category badge (pillar color)
   - Title (H3, linked)
   - Excerpt (2-3 sentences)
   - Date + reading time
   - Author (optional — "Incorporate123 Team" default)
5. **Pagination** — "Load More" button or numbered pagination if many posts. Start with "Load More" for simplicity.
6. **Newsletter CTA** — "Get Privacy Insights Delivered" + email signup field. Optional — only if David wants email marketing.
7. **Sidebar Alternative** — If grid feels sparse at launch (few posts), consider 2-column layout: posts left, sidebar right with: Popular Posts, Categories, Newsletter signup, Package CTA.

## Content Status

| Section    | Status        | Notes                                               |
| ---------- | ------------- | --------------------------------------------------- |
| Hero       | Needs writing | Simple, can write now                               |
| Blog posts | Not started   | Framework only — 310 words of placeholder structure |
| Categories | Ready         | Map to 4 pillars + General                          |

**Content plan for launch:**

- 3-5 seed articles covering high-value topics
- Suggested seeds: "Why Wyoming for Privacy in 2026", "Understanding Charging Order Protection", "What 'All-Inclusive' Really Means", "Year-Round Nominees Explained", "Anonymous LLC vs Regular LLC"
- Post-launch: 2-4 articles/month targeting long-tail keywords

## Key Components

`BlogHero`, `CategoryFilter`, `BlogPostCard`, `LoadMoreButton`, `NewsletterSignup` (optional)

## Prototype Status

Fully built. Has hero, post grid with cards, category badges, date formatting, pillar tags. Uses mock data for posts. Functional but sparse — needs real articles.

## Existing Specs

- No dedicated wireframe spec (NEW)
- No content guide (NEW)

## Blog Post Template (for individual articles)

Currently no individual blog post page in the prototype. When blog launches, each post will need:

- Full-width single-column, max-width 800px
- Hero: title, date, author, reading time, category badge
- Long-form content with H2/H3 structure
- Related posts at bottom (3 cards)
- CTA: relevant package or pillar page
- Share buttons (optional)

**Note:** Individual blog post pages are NOT in the current prototype. The `/blog` page shows a grid of cards linking to placeholder data. Individual post pages should be added when blog content is ready.

## Next Steps

- [ ] Decide launch strategy: launch with seed articles or post-launch feature?
- [ ] Write 3-5 seed articles if launching with blog
- [ ] Design individual blog post template (not yet built)
- [ ] Decide on newsletter signup (needs David's email marketing plans)
- [ ] Production: CMS integration for blog management (WordPress?)
- [ ] Low priority — focus on core pages first
