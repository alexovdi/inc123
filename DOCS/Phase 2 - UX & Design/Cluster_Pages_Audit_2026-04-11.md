# Cluster Pages Audit Report

**Date:** 2026-04-11
**Auditor:** Ash (code + visual audit)
**Scope:** All 30 cluster pages rendered via `ClusterPageTemplate.tsx`
**Method:** Code analysis of template files + cluster data, browser inspection of 5 pages (anonymous-llc, charging-order-protection, wyoming-llc, registered-agent, entity-tax-guide), comparison against spec `07_Cluster_Page.md`

---

## 1. Section Inventory — Template Architecture

Every cluster page is rendered by `ClusterPageTemplate.tsx` (404 lines) using a fixed section sequence:

| #   | Section             | Component                       | Conditional?                      |
| --- | ------------------- | ------------------------------- | --------------------------------- |
| 1   | Dark Hero           | `ClusterHero`                   | Always                            |
| 2   | Table of Contents   | Inline `<nav>`                  | Only if `sections.length > 2`     |
| 3   | Long-Form Content   | `LongFormContent`               | Always (variable depth)           |
| 4   | Trust Signals Strip | Inline 5-badge row              | Always                            |
| 5   | Package CTA         | `DualPackageCTA`                | Only if 2+ gold packages          |
| 6   | Cross-Pillar CTA    | `CrossPillarCTA`                | Only if `crossPillarCTA` defined  |
| 7   | FAQ Accordion       | `Accordion` (two-column sticky) | Only if `faqs.length > 0`         |
| 8   | Where to Go Next    | `WhereToGoNext`                 | Only if `sidebarLinks.length > 0` |
| 9   | Final Dark CTA      | Inline section                  | Always                            |
| 10  | Sticky Mobile CTA   | `StickyMobileCTA`               | Always (mobile only)              |

**Sidebar (desktop only):** `ContentSidebar` — package shortcut, "In This Section" links, cross-pillar link, phone number.

---

## 2. Content Depth Analysis — The Core Problem

Content depth varies wildly across the 30 clusters. This is the single biggest issue.

### Section count distribution:

| Sections | Pages | Examples                                                                                                     |
| -------- | ----- | ------------------------------------------------------------------------------------------------------------ |
| 5        | 2     | entity-tax-guide, tax-obligations                                                                            |
| 4        | 2     | anonymous-llc, series-llc                                                                                    |
| 3        | 7     | nominee-services, wyoming-privacy, domestication                                                             |
| 2        | 13    | wyoming-llc, charging-order-protection, shelf-companies                                                      |
| 1        | 6     | registered-agent, annual-reports, corporate-minutes, virtual-office, wyoming-corporation, nevada-corporation |

**Average: 2.3 sections per page. Spec calls for 6.**

### FAQ count distribution:

| FAQs | Pages                                                               |
| ---- | ------------------------------------------------------------------- |
| 4    | 1 (entity-tax-guide)                                                |
| 3    | 3 (anonymous-llc, wyoming-privacy, nevada-privacy, tax-obligations) |
| 2    | 7                                                                   |
| 1    | 19                                                                  |

**Average: 1.5 FAQs. Spec calls for 10-12.**

### Page height impact:

| Page                      | Sections | Total Height | Verdict   |
| ------------------------- | -------- | ------------ | --------- |
| entity-tax-guide          | 5        | 5,619px      | Adequate  |
| anonymous-llc             | 4        | 5,045px      | Good      |
| charging-order-protection | 2        | 3,339px      | Thin      |
| wyoming-llc               | 2        | 3,199px      | Thin      |
| registered-agent          | 1        | 3,195px      | Very thin |

Pages with 1-2 content sections feel like stubs, not comprehensive guides. A reader scanning "Registered Agent Service" sees a single paragraph of content, one FAQ, and then immediately hits the trust strip and final CTAs.

---

## 3. Structural Findings

### 3.1 Package CTA Missing on 23 of 30 Pages (Critical)

The `DualPackageCTA` requires exactly 2 gold-tier packages (`dualPkgs.length >= 2`). Only 7 clusters qualify:

- anonymous-llc, nominee-services, offshore-privacy, anonymous-corporation (Privacy)
- second-tier-state-filings, shares-corporate-records (Compliance)
- domestication (Compliance)

**The other 23 pages have NO package CTA section.** The "Find Your Package" button in the hero links to `#packages`, but that anchor doesn't exist on those pages. This is a broken UX — the primary conversion CTA goes nowhere on 77% of cluster pages.

**Root cause:** Most clusters reference only 1 gold package (e.g., `["wyoming-gold", "wyoming-silver"]` — only 1 gold). The template demands 2 golds.

### 3.2 Cross-Pillar CTA Missing on 24 of 30 Pages

Only 6 clusters define `crossPillarCTA`:

- anonymous-llc, anonymous-corporation, wyoming-privacy (Privacy)
- charging-order-protection (Asset Protection)
- entity-tax-guide, tax-obligations (Formation)

The other 24 pages are dead-ends for cross-pillar discovery. The spec intended every cluster to bridge to a related pillar.

### 3.3 Table of Contents Missing on 19 of 30 Pages

The ToC only renders when `sections.length > 2`. Pages with 1-2 sections skip it. This is intentional (a ToC with 1-2 items is pointless), but it means 63% of pages lack this navigation aid — a symptom of the thin content problem.

### 3.4 Trust Strip is the Old 86px Compact Version

Pillar pages now use the expanded `SocialProofStrip` component (testimonials + detailed badges, ~436px). Cluster pages still use the old inline `TRUST_SIGNALS` array hardcoded in the template — 5 badges in a flex row at 86px height. The visual gap between pillar pages and cluster pages is noticeable.

### 3.5 No Inline CTAs Between Content Sections

Spec calls for inline CTAs after the long-form content ("Start Your [Topic]" + "Compare Wyoming vs Nevada" + phone). The template goes straight from the last content section to the trust strip. There's no mid-page conversion opportunity for the reader who finished reading but doesn't scroll to the bottom.

### 3.6 Breadcrumb Always Says "Guide"

The last breadcrumb segment is hardcoded as `"Guide"` (`ClusterHero.tsx:83`), never the actual page title. So the breadcrumb reads `Home / Company Formation / Guide` regardless of whether you're on "Wyoming LLC Formation" or "Entity Tax Guide." This is both unhelpful and an SEO miss.

---

## 4. Content & Data Findings

### 4.1 Text Sections Are Single Paragraphs

Every `text` section is a heading + one paragraph. No subheadings, no bullet lists, no callouts, no images. The spec calls for "scanner content (always visible) + expandable reader detail" — progressive disclosure. This is not implemented at all. Sections feel like stubs.

### 4.2 Reading Time Claims Are Inflated

Pages with 1 section (e.g., registered-agent: single paragraph ~80 words) claim "5 min read." Entity-tax-guide with 5 sections claims "9 min read." The reading times are hardcoded strings, not calculated from content length.

### 4.3 WhereToGoNext Generates Boilerplate Descriptions

Line 92-96 of `ClusterPageTemplate.tsx` auto-generates sidebar link descriptions:

```
`Learn more about ${link.title.toLowerCase()} and how it relates to ${config.suggestionContext}.`
```

This produces generic text like "Learn more about annual reports and how it relates to keeping your entity in good standing." for every suggestion. Not compelling.

### 4.4 Missing Clusters from Spec

The spec lists clusters not present in the data:

- `california-private-incorporation` (Privacy)
- `florida-private-incorporation` (Privacy)
- `real-estate-asset-protection` (Asset) — data has `real-estate` instead
- `llc-vs-living-trust` (Asset)
- `llc-vs-scorp-vs-ccorp-tax` (Formation)

And the data has clusters not in the spec:

- `private-incorporation`, `wyoming-registered-agent`, `nevada-registered-agent`, `second-tier-state-filings`, `shares-corporate-records`, `series-llc`

The inventory is drifting from the spec.

### 4.5 No Comparison Tables or Pricing Sections

The spec calls for:

- "Wyoming vs Nevada for [Topic]" — embedded comparison table
- "How Much Does [Topic] Cost?" — pricing breakdown

Neither exists in any cluster. The `comparison` section type is implemented in LongFormContent but just renders a callout box with text — not a data table.

---

## 5. Visual Findings

### 5.1 Sidebar Taller Than Content on Thin Pages

On pages with 1-2 content sections, the sidebar (package shortcut + 3-4 related links + cross-pillar link + phone) has more vertical content than the main column. The sidebar extends below the main content area, creating an awkward visual imbalance.

### 5.2 No Visual Rhythm Variation

All full-width sections use `py-section-y-sm` spacing. The page reads as a flat sequence of equally-spaced blocks. Pillar pages achieved visual rhythm through alternating backgrounds (white/primary-50/primary), pull quotes, and section-type variation. Cluster pages are: white content → 86px gray trust strip → white packages → gray cross-pillar → white FAQ → gray suggestions → dark CTA.

### 5.3 Content Sections Lack Visual Variety

On thin pages (1-2 sections), all content is `TextSection` — heading + paragraph. No cards, no icons, no callouts, no visual breaks. Even when `audience` or `differentiator` sections appear (with icon cards), their content is still a single paragraph per item.

### 5.4 ClusterLayout 70/30 Split Works Well

The layout itself is solid — 70/30 on desktop, stacked on mobile, sidebar sticky. The sidebar package shortcut is a smart conversion element. This is one of the strongest parts of the template.

### 5.5 FAQ Two-Column Layout Is Elegant

The sticky-left header + accordion-right layout is well-executed. The "Still have questions?" with phone/email in the left column is good. This section works well even on thin pages.

### 5.6 Hero Section Is Strong

The dark hero with pillar-specific glow, breadcrumb, reading time badge, dual CTAs, and phone line is consistent and well-structured. Matches the pillar page hero treatment effectively.

---

## 6. Section Order Analysis

Current order and rationale:

| Order | Section           | Rationale                                                                     |
| ----- | ----------------- | ----------------------------------------------------------------------------- |
| 1     | Hero              | Standard — establish topic, set expectations, provide quick exits             |
| 2     | ToC               | Good — helps scanner decide what to read                                      |
| 3     | Long-form content | Good — deliver the promised educational value                                 |
| 4     | Trust strip       | Placement problem — 86px strip feels like a divider, not a confidence builder |
| 5     | Package CTA       | Good position (after education, before FAQ) — but missing on 77% of pages     |
| 6     | Cross-pillar CTA  | Good — extends the journey laterally                                          |
| 7     | FAQ               | Good — addresses objections before final CTA                                  |
| 8     | Where to Go Next  | Good — provides exit paths to related content                                 |
| 9     | Final CTA         | Good — dark confident close, consistent with pillar pages                     |

**Suggested order adjustments:**

1. Move the trust strip to directly beneath the hero (or merge into the hero) — social proof should come early, before educational content, to establish credibility before the reader invests time.
2. Add an inline CTA between content sections and the trust strip — spec calls for this and it's a natural conversion point.
3. The Package CTA should ALWAYS appear (even with 1 package) — show a single package card + "Compare all packages" link. 23 pages without any package CTA is a conversion gap.

---

## 7. Improvement Plan

### Priority 1 — Critical (broken UX)

1. **Fix Package CTA to work with 1 gold package** — Show a single package card + "See All Packages" link when only 1 gold is available. Ensure `#packages` anchor always exists so hero CTA never links to nothing.

2. **Fix breadcrumb "Guide" → actual page title** — Replace the hardcoded "Guide" with the cluster's `title` to improve navigation context and SEO.

3. **Upgrade trust strip to SocialProofStrip component** — Replace the 86px inline badge strip with the shared `SocialProofStrip` used on pillar pages. Cluster pages deserve the same social proof treatment.

### Priority 2 — Content Depth (the biggest gap)

4. **Establish minimum content standard** — Every cluster needs at minimum 3 content sections, 3 FAQs. Currently 19 pages fall below this threshold.

5. **Add comparison/pricing section type** — Implement the "How Much Does It Cost?" and comparison table sections called for in the spec. The `comparison` type in LongFormContent should render actual comparison data, not just a callout box.

6. **Add progressive disclosure** — Implement scanner content (always visible summary) + expandable detail as spec requires. This would make thin sections feel more substantial and help scanners.

7. **Calculate reading time from content** — Replace hardcoded strings with actual word-count-based calculations.

### Priority 3 — Conversion & Navigation

8. **Add inline CTA section after content** — A mid-page CTA strip between the last content section and trust strip. "Ready to [action]?" + package link + consultation link. This is the biggest conversion gap vs the spec.

9. **Add crossPillarCTA to all clusters** — Every cluster should bridge to at least one related pillar. Currently 24 of 30 pages lack this. Implement a default mapping (privacy→asset, asset→privacy, formation→compliance, compliance→formation) for clusters without explicit cross-pillar data.

10. **Improve WhereToGoNext descriptions** — Replace the auto-generated boilerplate with custom descriptions per cluster, or at least more specific templates.

### Priority 4 — Visual Polish

11. **Add visual variety to content sections** — Implement bullet lists, callout boxes, key-point highlights within text sections. Even without more content, visual formatting would make existing text feel less sparse.

12. **Fix sidebar/content height imbalance** — On thin pages (1-2 sections), consider hiding less-critical sidebar elements or adding a content padding minimum to prevent the sidebar from being taller than the main column.

13. **Add background variation between sections** — Alternate `bg-background` and `bg-primary-50` for full-width sections to create visual rhythm (similar to pillar pages).

14. **Consider adding a PullQuote or key-stat callout** — A mid-content callout (like the PullQuote on pillar pages) would break up text sections visually and add an editorial feel.

### Priority 5 — Data Alignment

15. **Reconcile cluster inventory with spec** — Add missing spec clusters (california-private-incorporation, florida-private-incorporation, llc-vs-living-trust, llc-vs-scorp-vs-ccorp-tax, real-estate-asset-protection) or update the spec to reflect current reality.

16. **Sidebar "In This Section" should highlight current page** — The `relatedPages` data doesn't include the current page, so there's no active state. Add the current page with `current: true` to give positional context.

---

## 8. What Works Well

- **Hero section** — Strong, consistent with pillar pages, pillar-specific glow is a nice touch
- **70/30 layout** — Sidebar with package shortcut is a smart conversion pattern
- **FAQ two-column sticky** — Elegant design, well-coded
- **Final CTA** — Dark confident close, consistent brand voice
- **StickyMobileCTA** — Well-implemented scroll-triggered mobile bar
- **Pillar color theming** — Consistent use of `pillarTextMap`, `pillarIconBgMap` etc throughout
- **Content section type system** — The 4 renderers (text, comparison, audience, differentiator) are well-architected. The system just needs more content fed into it.
- **Template architecture** — Single template for 30 pages with smart conditionals. Solid foundation.

---

## Summary

The cluster page template is architecturally sound but content-starved. The template supports rich, varied content (4 section types, ToC, FAQs, cross-pillar bridging) but the data only takes advantage of ~30% of its capabilities. The result: most cluster pages feel like stubs rather than the "deep-dive educational content" the spec envisions.

The three most impactful fixes are:

1. Fix the Package CTA to always appear (77% of pages have a broken `#packages` anchor)
2. Expand content depth to minimum 3 sections + 3 FAQs per cluster
3. Add inline CTAs between content and the trust strip

Everything else is polish on top of these core gaps.
