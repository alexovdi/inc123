# Incorporate123 — Demo & Show Points

## Discovery Finalization Meeting

**Purpose:** What to show David during the meeting, in what order, with key numbers and highlights to cite.

---

## 1. Key Findings to Present (Before Demo)

### Site Audit Numbers

| Metric                    | Finding         | Why It Matters                                         |
| ------------------------- | --------------- | ------------------------------------------------------ |
| Total URLs crawled        | 392             | Site is 2.3x larger than initial 171-URL estimate      |
| Unique URL paths          | 325             | After removing 67 trailing-slash duplicates            |
| Pages with H1 tags        | **0 of 319**    | Critical SEO failure — this alone tanks rankings       |
| Duplicate title tags      | 224 pages (73%) | 209 share one generic Learning Center title            |
| Missing meta descriptions | 64 pages (20%)  | Lost click-through opportunities                       |
| Learning Center items     | 188 FAQ items   | 62% of the site — being consolidated into pillar pages |
| New architecture target   | ~71 pages       | 78% reduction with zero content loss                   |
| 301 redirects required    | ~326            | Every current URL mapped to a destination              |
| Truly new pages needed    | ~27             | Down from 34 after David's review (7 reclassified)     |

**Key Quote:** "Every single one of your 319 pages is missing the most important SEO element — the H1 tag. That alone explains a lot about search visibility."

---

### Competitive Analysis Highlights

**The Big Insight:** "No competitor occupies the position we're building for you."

| Competitor                | Key Weakness                                                    | Our Opportunity                                                    |
| ------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------ |
| **NCH Inc**               | 12,263 reviews but no nominee services, no privacy architecture | Different audience — they target business development, not privacy |
| **Anderson Advisors**     | Moved to consultation-gated model — can't buy online anymore    | Self-service with transparent pricing beats their hard-sell model  |
| **ShieldCorp**            | "Nominee for a day" — doesn't maintain records/minutes          | Your ongoing records maintenance is a genuine differentiator       |
| **WY Corporate Services** | Dated site (2010s), no blog, no content clusters                | Modern UX + content architecture = first-mover advantage           |
| **ZenBusiness**           | 25,821 reviews, best UX — but zero privacy features             | They explicitly disclaim anonymous LLC formation                   |

**SEO Opportunity Numbers:**

| Keyword                    | Monthly Volume | Competition | Competitor Presence                   |
| -------------------------- | -------------- | ----------- | ------------------------------------- |
| anonymous LLC formation    | 720–1,100      | Medium-Low  | Only Anderson (#3)                    |
| best state for LLC privacy | 390–590        | Medium      | None of 5 analyzed                    |
| LLC privacy protection     | 320–590        | Low         | None of 5 analyzed                    |
| nominee director service   | 260–480        | Low         | None of 5 analyzed                    |
| asset protection LLC       | 1,900–3,200    | Medium      | Only NCH (#6)                         |
| Total opportunity          | 5,500–9,500/mo |             | 90% positions held by non-specialists |

**Key Quote:** "Across 50 possible SERP positions for privacy keywords, your competitors hold only 5. The rest are law firms and publishers who can't convert searchers into formation clients. That's the gap we're filling."

---

### Strategic Decisions Confirmed (v2 Changes)

Show David the changes made based on his March 11 feedback:

| Change                   | Before                     | After                                                    |
| ------------------------ | -------------------------- | -------------------------------------------------------- |
| New page count           | 34                         | ~27 (7 reclassified with existing content)               |
| BOI/CTA page             | Included                   | Removed entirely                                         |
| Compliance pillar        | 7 pages                    | 9 pages (+2nd-tier filings, +shares)                     |
| Trust signals            | Office photos, founder bio | Anonymized — 25 years, track record, no personal details |
| Domain strategy          | Migrate to .com            | Stay on .co, .com redirects                              |
| Privacy → Charging Order | Separate concepts          | Lead with "privacy-as-prevention" framing                |

**Key Quote:** "Your feedback made the architecture stronger. We're building on what you have, not starting from scratch."

---

## 2. Prototype Demo Walkthrough

### Setup

- URL: `http://localhost:2121`
- Have browser open in a clean window
- Share screen with David
- Click through as a visitor would — don't just scroll

### Demo Script

**Step 1: Homepage** (`/`)

- "This is the front door. Notice we lead with privacy — your #1 selling point."
- Point out: pillar CTAs, trust signals (25 years, all-inclusive pricing), package links
- Show mobile responsive behavior

**Step 2: Privacy Pillar** (`/privacy`)

- "This is the lead pillar — where most of your prospects will land from search."
- Show: cluster navigation (links to Anonymous LLC, Nominee Services, CA/FL, etc.)
- Show: progressive disclosure (concise first for scanners, details for researchers)
- Show: FAQ sections (consolidated from Learning Center)

**Step 3: Cluster Page** (e.g., `/clusters/anonymous-llc`)

- "This is what a deep-dive page looks like."
- Show: educational content, FAQ accordion, package CTA, breadcrumb navigation

**Step 4: Package Page** (e.g., `/packages/wyoming-gold`)

- "This is where conversion happens."
- Show: 3-tier comparison, progressive disclosure, add-on options, dual CTA
- Point out: transparent pricing, all-inclusive messaging, trust signals

**Step 5: Compare Packages** (`/compare-packages`)

- "Side-by-side comparison — visitors can see exactly what each tier includes."
- Note: no competitor has systematic comparison pages for privacy

**Step 6: State Hub** (`/wyoming`)

- "For visitors who search by state — this page connects all Wyoming content across all 4 pillars."

**Step 7: Checkout Flow** (`/checkout`)

- Walk through: configure → entity details → payment → confirmation
- "Self-service ordering — no phone calls needed. This is what Anderson can't offer anymore."

**Step 8: FAQ** (`/faq`)

- "All 188 Learning Center items consolidated into organized, searchable FAQ."
- Individual FAQ items also appear contextually on pillar/cluster pages

**Step 9: About** (`/about`)

- "Trust signals without personal exposure — 25 years, specialist expertise, entities formed."

### Demo Stats to Mention

- 50+ routes verified (all return HTTP 200)
- 14 design primitives, 69 composite components
- 13 data files
- Zero TypeScript errors
- Full checkout flow with context/state management

---

## 3. Feedback Response Summary

Walk David through how each of his March 11 comments was addressed:

| David's Comment                                       | Our Response                                                   | Status     |
| ----------------------------------------------------- | -------------------------------------------------------------- | ---------- |
| "34 new pages — missed or terminology difference"     | Reclassified 7 pages with existing content → ~27 truly new     | Done in v2 |
| "Asset Protection Hub exists"                         | Reclassified from "New" to "Existing — Major Enhancement"      | Done in v2 |
| "Charging Order page must reference Privacy too"      | Added privacy-as-prevention framing requirement                | Done in v2 |
| "Investment Holding LLC ≈ Anonymous LLC overlap"      | Kept both, differentiated by intent (privacy vs. AP)           | Done in v2 |
| "Nominee Services page exists"                        | Reclassified as "Existing — Major Enhancement & Repositioning" | Done in v2 |
| "Compliance = records-only + related pages"           | Expanded pillar from 7→9, mapped existing source pages         | Done in v2 |
| "BOI/CTA Compliance Guide not necessary"              | Removed entirely from architecture, data, and navigation       | Done in v2 |
| "Trust signals — no office photos or founder details" | Complete rewrite — anonymized trust strategy                   | Done in v2 |
| "Stick with incorporate123.co"                        | Reversed domain recommendation — .co is primary                | Done in v2 |

**Key Quote:** "Every single one of your comments was incorporated. The architecture is stronger because of your review."

---

## 4. Payment Milestones Table

Present the milestone payment structure from the SOW:

| #   | Milestone             | What's Delivered                           | Amount              | When                        |
| --- | --------------------- | ------------------------------------------ | ------------------- | --------------------------- |
| 1   | **Kickoff**           | Discovery complete, architecture confirmed | ~$2,520             | Upon today's sign-off       |
| 2   | **Homepage Approved** | Homepage prototype + visual design         | ~$4,130             | Upon homepage approval      |
| 3   | **Core Templates**    | Pillar, Package, Comparison templates      | ~$4,130             | Upon core template approval |
| 4   | **Full Design + SEO** | All templates + all SEO specs              | ~$8,820             | Upon full delivery          |
| 5   | **Development**       | CMS build complete, staging ready          | $8,400–$12,600      | Upon dev completion         |
| 6   | **Launch**            | Testing, QA, go-live, monitoring           | ~$2,520             | Upon launch                 |
|     | **Total**             |                                            | **$30,520–$34,720** |                             |

**Key Points:**

- You pay as you see deliverables — not upfront
- Rate: $70/hr across all workstreams
- 15 business days per invoice
- 2 revision rounds included per workstream
- Development hours (120–180) finalized after Discovery

---

## 5. What Happens Next (Phase 2 Preview)

Once David signs off, five parallel workstreams begin:

| Workstream                    | Timeline   | First Deliverable                                |
| ----------------------------- | ---------- | ------------------------------------------------ |
| UX & Interactive Prototyping  | Weeks 2–5  | Homepage wireframe (within 24 hours of sign-off) |
| Visual Design & Design System | Weeks 2–5  | Design system + homepage visual design           |
| SEO Strategy & Implementation | Weeks 3–8  | Technical audit + first keyword specs            |
| Development                   | Weeks 4–9  | Homepage build (starts when design is approved)  |
| Testing & Launch              | Weeks 8–10 | Cross-browser QA, redirect verification          |

**Rolling approval model:** Homepage approved → homepage build starts → while other pages are still being designed. This is how we hit 10 weeks.

**Immediate action items for David post-approval:**

1. Email sign-off on architecture
2. Send sample Word mail merge document
3. Collect existing testimonials
4. Confirm GA4/GSC access for Irish

---

_Prepared by BIT Studios — March 2026_
