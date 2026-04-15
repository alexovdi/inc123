# Blog — Page Specification

**Page:** Blog (Index / Listing)
**URL:** `/blog/`
**Template Type:** Content Hub
**Priority:** P2 — Expansion (post-launch)
**Content Source:** New creation

---

## 1. Page Purpose & Strategic Role

### 1.1 Primary Goal

Post-launch content marketing hub that targets long-tail privacy, asset protection, and formation keywords to drive organic traffic growth. The blog supports SEO authority building, positions Incorporate123 as a thought leader, and feeds the pillar/cluster content model with supporting articles that link back to pillar and cluster pages.

### 1.2 Strategic Role

- **Long-tail SEO engine** — Target keywords too specific for pillar/cluster pages: "anonymous LLC for real estate investors," "Wyoming vs Delaware for privacy," "how to protect rental property from lawsuits," etc.
- **E-E-A-T signal** — Regular publishing under David's byline demonstrates ongoing expertise. Anderson Advisors publishes 2–4 posts/week with 645 posts — Incorporate123 doesn't need that volume but needs consistent output.
- **Internal link feeder** — Every blog post links back to 2–3 relevant pillar/cluster pages, feeding SEO authority to the core conversion architecture
- **Content freshness** — Search engines favor sites with regular content updates. The blog provides freshness signals without requiring changes to evergreen pillar/cluster content.

### 1.3 Not at Launch

The blog page launches as P2 (post-launch). At launch, `/blog/` can be either a "Coming Soon" placeholder or simply omitted from navigation until the first 3–5 posts are published. Do NOT launch with zero posts — it looks worse than not having a blog at all.

---

## 2. Section Order

| # | Section | Role |
|---|---------|------|
| 1 | Blog Hero | H1 + brief description + optional category filter |
| 2 | Featured Post | Latest or pinned post — large card with image, title, excerpt, date, author |
| 3 | Post Grid | Paginated grid of all posts — card format with thumbnail, title, excerpt, date, category badge |
| 4 | Category Filter / Sidebar | Filter by pillar category: Privacy, Asset Protection, Formation, Compliance, General |
| 5 | Newsletter CTA (optional) | Email signup for new post notifications — only if David wants to build an email list |
| 6 | Pillar Links | "Start here" links to pillar pages for visitors who arrive on the blog via search |

---

## 3. Key Specifications

### Blog Post Card Format

```
[Thumbnail Image or Pillar Color Block]
[PRIVACY] ← category badge in pillar color
"How to Form an Anonymous LLC in Wyoming:
A Step-by-Step Guide"
April 10, 2026 · By David · 8 min read

Brief excerpt (2 sentences): "Wyoming is the strongest
state for anonymous LLC formation. Here's the exact process
from start to finish, including what nominees do and why
year-round service matters..."

→ Read More
```

### Category Filter

Categories map directly to the 4 pillars + a general category:
- **Privacy** (Blue) — Anonymous LLCs, nominees, state privacy, BOI
- **Asset Protection** (Green) — Charging orders, holding LLCs, trusts, AP strategies
- **Formation** (Amber) — LLC vs Corp, state comparison, costs, process
- **Compliance** (Purple) — Registered agent, annual reports, domestication
- **General** (Gray) — Company news, industry updates, regulatory changes

### Pagination

- 9–12 posts per page (3×3 or 3×4 grid)
- "Load More" button or traditional pagination (`/blog/page/2/`)
- Newest posts first (reverse chronological)

---

## 4. Technical Specifications

| Element | Value |
|---------|-------|
| **H1** | "Blog — Privacy, Formation & Asset Protection Insights" |
| **Title tag** | "Blog — Privacy, LLC Formation & Asset Protection Guides \| Incorporate123" |
| **Meta description** | "Expert insights on business privacy, anonymous LLCs, asset protection, and Wyoming/Nevada formation. Practical guides from 25 years of specialization." |
| **Schema** | Blog, BreadcrumbList |
| **Pagination** | `/blog/page/2/`, `/blog/page/3/` etc. with proper `rel="next"` / `rel="prev"` |
| **RSS feed** | `/blog/feed/` or `/blog/rss.xml` — standard blog feed for subscribers |

---

## 5. Content Notes for David

1. **Launch timing** — Do NOT launch blog with 0 posts. Publish 3–5 foundational posts before making the blog visible in navigation.
2. **Authorship** — Blog posts should be authored under David's name for E-E-A-T authority. Author bio card with headshot on every post.
3. **Publishing cadence** — 2 posts/month is a sustainable minimum. 1 post/week is ideal. Quality over quantity — Anderson publishes 2–4/week but most are mediocre.
4. **Content topics for first 5 posts (suggestions):**
   - "What Is an Anonymous LLC and How Does It Work?"
   - "Wyoming vs. Nevada: Which State Is Better for Privacy?"
   - "Nominee Services Explained: Year-Round vs. 'Nominee for a Day'"
   - "How Much Does It Really Cost to Form an LLC? A True Cost Breakdown"
   - "5 Mistakes Business Owners Make When Setting Up Asset Protection"
5. **Newsletter** — Does David want to collect email addresses for a newsletter? This requires an email service provider (Mailchimp, ConvertKit, etc.).

---

*End of Specification — Blog Index*
*Confidential — BIT Studios × Incorporate123 — April 2026*
