# Incorporate123 — Prototype Gap Analysis & Implementation Blueprint

**Date:** 2026-03-14
**Audited:** `inc123-prototype/` (74 pages, 69 components, 13 data files)
**Against:** All Phase 1 & Phase 2 documentation (latest versions)
**Purpose:** Checklist blueprint for bringing the prototype to spec compliance

---

## How to Use This Document

Each item is a checkbox. Work through by priority:

- **P0 (Critical):** Architecture gaps — missing pages, wrong URL structure, missing page sections
- **P1 (High):** Content & UX gaps — missing content, wrong messaging, broken user journeys
- **P2 (Medium):** Interaction & polish — missing hover states, animations, mobile behavior
- **P3 (Nice-to-have):** SEO, schema, accessibility fine-tuning

Items marked with `[DONE]` are already implemented in the prototype.

---

## 1. SITE ARCHITECTURE GAPS

### 1.1 Missing Pages (Architecture v4 requires ~75 pages, prototype has ~54 routes)

**Privacy Pillar Clusters:**

- [ ] P0 — `/anonymous-corporation/` cluster page (Anonymous Corporation) — P2 content, not yet built
- [ ] P0 — `/nominee-services/` cluster page — currently at `/privacy/nominee-services` (wrong URL — should be flat)
- [ ] P0 — `/wyoming-privacy/` cluster page — currently at `/privacy/wyoming-privacy` (wrong URL)
- [ ] P0 — `/nevada-privacy/` cluster page — currently at `/privacy/nevada-privacy` (wrong URL)
- [ ] P0 — `/california-private-incorporation/` cluster page — currently at `/privacy/california-private-incorporation` (wrong URL)
- [ ] P0 — `/florida-private-incorporation/` cluster page — currently at `/privacy/florida-private-incorporation` (wrong URL)

**Asset Protection Clusters:**

- [ ] P0 — `/real-estate-asset-protection/` cluster page — not built
- [ ] P0 — `/llc-vs-living-trust/` cluster page — not built
- [ ] P0 — URL structure: all AP clusters are at `/asset-protection/[slug]` but spec says flat URLs

**Formation Clusters:**

- [ ] P0 — `/series-llc/` cluster page — in IA v3 but not built
- [ ] P0 — URL structure: all formation clusters at `/formation/[slug]` but spec says flat URLs

**Compliance Clusters:**

- [ ] P0 — `/wyoming-registered-agent/` cluster page — not built
- [ ] P0 — `/nevada-registered-agent/` cluster page — not built
- [ ] P0 — `/domestication/` cluster page — not built
- [ ] P0 — `/foreign-state-registration/` cluster page — listed in compliance but may overlap with formation
- [ ] P0 — URL structure: all compliance clusters at `/compliance/[slug]` but spec says flat URLs

**Comparison Pages:**

- [ ] P1 — `/llc-vs-scorp-vs-ccorp-tax/` comparison page — added in v3, not built
- [ ] P1 — Review all comparison slugs against spec: prototype uses `/compare/[slug]` but spec uses flat URLs like `/wyoming-vs-nevada-privacy/`

**Offshore Hub (6 pages):**

- [ ] P1 — `/offshore/` hub page — not built
- [ ] P1 — `/offshore/nevis/` — not built
- [ ] P1 — `/offshore/bvi/` — not built
- [ ] P1 — `/offshore/panama/` — not built
- [ ] P1 — `/offshore/hong-kong/` — not built
- [ ] P1 — `/offshore/irs-compliance/` — not built

**Package Pages — URL Mismatch:**

- [ ] P0 — Spec says `/wyoming-private-incorporation/` but prototype uses `/packages/wyoming-gold`
- [ ] P0 — Spec says `/wyoming-incorporation/` but prototype uses `/packages/wyoming-silver`
- [ ] P0 — All 8 package URLs need to match spec (flat, descriptive slugs, no `/packages/` prefix)

**State Hubs — URL Mismatch:**

- [ ] P0 — Spec says `/wyoming/` but prototype uses `/states/wyoming`
- [ ] P0 — Same for `/nevada/`, `/california/`, `/florida/` (all under `/states/` prefix)

### 1.2 URL Structure (Critical — Spec requires FLAT URLs)

The spec explicitly states: "All URLs use a flat structure with no deep directory hierarchy. The pillar/cluster hierarchy is established through internal linking, not URL paths."

- [ ] P0 — Migrate all cluster pages from `/privacy/[slug]` → `/[slug]` (flat)
- [ ] P0 — Migrate all cluster pages from `/asset-protection/[slug]` → `/[slug]` (flat)
- [ ] P0 — Migrate all cluster pages from `/formation/[slug]` → `/[slug]` (flat)
- [ ] P0 — Migrate all cluster pages from `/compliance/[slug]` → `/[slug]` (flat)
- [ ] P0 — Migrate all comparison pages from `/compare/[slug]` → `/[slug]` (flat)
- [ ] P0 — Migrate all package pages from `/packages/[slug]` → descriptive flat URLs per spec
- [ ] P0 — Migrate state hubs from `/states/[slug]` → `/[slug]` (flat)
- [ ] P0 — Keep `/checkout/` prefix (spec exception)
- [ ] P0 — Keep `/offshore/` prefix (spec exception)
- [ ] P0 — Keep `/dev/` prefix (not in spec — dev only)
- [ ] P0 — Update all internal links, navigation data, and breadcrumbs after URL migration

**Decision needed:** This is the single largest structural change. The flat URL strategy is a core architectural decision from the discovery report. Implementing it means restructuring the entire `/src/app/` directory.

---

## 2. GLOBAL ELEMENTS

### 2.1 Header / Navigation

**Spec (Homepage Wireframe Spec, Section 2):**

- [DONE] Primary nav: Privacy, Asset Protection, Formation, Packages, About
- [ ] P0 — Top utility bar (desktop only): phone number + tagline + Client Login link
- [ ] P0 — Mega menu content must match spec exactly per pillar (Privacy has 7 clusters + 2 comparisons + quick links, etc.)
- [ ] P1 — "Get Started" CTA button right-aligned in header — routes to `/compare-packages/`
- [ ] P1 — Client Login link always visible in header (both desktop and mobile)
- [ ] P1 — Phone icon on mobile header with tap-to-call
- [ ] P2 — Mega menu hover delay before close (desktop)
- [ ] P2 — Header shrinks to compact version on scroll (desktop)

### 2.2 Footer

**Spec (Homepage Wireframe Spec, Section 12):**

- [ ] P1 — Footer must be a 4-column sitemap matching spec exactly:
  - Col 1: Privacy pillar (8 links)
  - Col 2: Asset Protection + Formation (9 links)
  - Col 3: Packages + By State (9 links)
  - Col 4: Company + Compliance (11 links)
- [ ] P1 — Footer bottom bar: copyright, legal links, phone, address, payment method icons
- [ ] P1 — Crypto payment note: "We accept cryptocurrency for your privacy"
- [ ] P2 — Mobile: accordion expand per column

### 2.3 Sticky Mobile CTA Bar

- [ ] P1 — Persistent bottom bar on mobile (appears after scrolling past hero)
- [ ] P1 — "Get Started →" button (~70% width) + phone icon (~30% width)
- [ ] P1 — Hides when hero CTAs are visible
- [ ] P1 — Variant on Contact page: phone-first instead of "Get Started"
- [ ] P1 — Variant on FAQ page: phone-first

### 2.4 Breadcrumbs

- [DONE] Breadcrumbs on pillar and cluster pages
- [ ] P1 — Breadcrumbs must use flat URL structure (Home > Business Privacy > Anonymous LLC — not Home > Privacy > Anonymous LLC)
- [ ] P1 — Breadcrumbs on ALL page types: comparison, package, state hub, utility

---

## 3. HOMEPAGE

**Spec: Homepage Wireframe Spec v1.1 (11 sections)**

### Section 1: Hero

- [DONE] Headline, subheadline, dual CTAs, trust snippets, eyebrow
- [ ] P1 — Consultation safety net below CTAs: "Have questions? Call (775) xxx-xxxx" (text link, not button)
- [ ] P1 — Trust strip should show "$1,275 All-Inclusive" not generic "All-Inclusive Pricing"
- [ ] P2 — Desktop: split layout with right-side visual (office photo or abstract)
- [ ] P2 — Above-fold: top edge of pillar cards must be visible without scrolling on 1440×900

### Section 2: Pillar Navigation Cards

- [DONE] 3 pillar cards (Privacy, Asset Protection, Formation — excluding Compliance)
- [DONE] "Already have a company?" returning-client link below cards
- [ ] P1 — Card 3 title should be "Business Incorporation" not "Company Formation" (David's preference, spec v1.1 change #3)

### Section 3: Package Quick Links

- [DONE] 4 package preview cards with pricing
- [ ] P1 — Gold cards must be visually elevated: taller, blue border, "Most Popular" badge (spec Section 5.2)
- [ ] P1 — Renewal pricing shown on cards (e.g., "$525/year with nominees")
- [ ] P1 — Consultation safety net: "Not sure which package? Call (775) xxx-xxxx for a free consultation"

### Section 4: Differentiator Grid

- [DONE] Dark background, 2×3 grid, 6 differentiators with icons

### Section 5: Testimonials

- [DONE] Testimonial carousel with auto-play

### Section 6: Trust Signals

- [DONE] Trust signals bar
- [ ] P2 — Should include "Crypto Payments for Privacy" (not just generic crypto badge — spec v1.1 change #8)

### Section 7: How It Works

- [DONE] 4-step process
- [ ] P2 — Step 2 should NOT mention Bronze package (spec v1.1 change #7)

### Section 8: Compliance Callout

- [DONE] ComplianceCallout component with dual CTAs

### Section 9: Final CTA Block

- [DONE] Dark variant CTABlock

---

## 4. PILLAR HUB PAGES (Privacy, Asset Protection, Formation, Compliance)

**Spec: Privacy Pillar Wireframe Spec (template for all 4)**

The spec defines 12 sections per pillar page. Current prototype has ~9 sections.

### Missing/Incomplete Sections:

- [DONE] Section 1: Pillar Hero with eyebrow, headline, subheadline, dual CTAs, trust snippet
- [DONE] Section 2: "What is [Pillar]?" — ProgressiveDisclosure
- [DONE] Section 3: "Why [Pillar] Matters" — 4 Card components
- [DONE] Section 4: "How We Protect [Pillar]" — Service blocks
- [DONE] Section 5: Cluster Navigation Grid (ClusterGrid)
- [DONE] Section 6: Comparison Section (ComparisonCards)
- [DONE] Section 7: Package CTA (DualPackageCTA)
- [DONE] Section 8: Cross-Pillar Callout (CrossPillarCTA)
- [DONE] Section 9: FAQ Accordion
- [DONE] Section 10: Where to Go Next

### Spec Requirements Not Met:

- [ ] P1 — **Progressive Disclosure behavior**: "Read full explanation →" toggle on "What is [Pillar]?" section. Spec says scanner content always visible, reader content expandable with smooth animation
- [ ] P1 — **Service blocks (Section 4) need DifferentiatorCallout boxes**: "Competitors charge $400–$5,000/year for nominee services. Ours are included in every Gold package."
- [ ] P1 — **Package CTA section**: Should show 2 Gold packages side-by-side with specific pricing (not generic DualPackageCTA)
- [ ] P1 — **Sidebar** (desktop): 70/30 split with sticky sidebar containing Package Shortcut, Related Clusters, Cross-Pillar Link, Phone number
- [ ] P1 — **Sidebar mobile redistribution**: Package Shortcut becomes inline card after services section; Related Clusters = cluster grid; Phone = sticky bottom bar
- [ ] P2 — Hero should have "5,500+ monthly searches for anonymous LLCs" or similar trust snippet specific to each pillar

---

## 5. CLUSTER PAGES

**Spec: Cluster Page Wireframe Spec (24+ pages)**

### Content Structure:

- [DONE] ClusterLayout with pillar accent, back link, title, description
- [DONE] LongFormContent with section renderers (text, comparison, audience, differentiator)
- [DONE] ContentSidebar

### Spec Requirements Not Met:

- [ ] P1 — **Reading time** badge in cluster hero ("8 min read") — spec Section 3
- [ ] P1 — **Inline comparison tables** within content sections — spec Section 5.3 (Wyoming vs Nevada table)
- [ ] P1 — **DifferentiatorCallout highlighted boxes** — "Competitors charge $400-$5,000/year..." callouts within content
- [ ] P1 — **Package CTA Block** after main content (before FAQ) — dedicated conversion section with 2 Gold package cards
- [ ] P1 — **Cross-pillar callout** after Package CTA Block (currently may be missing or in wrong position)
- [ ] P1 — **FAQ accordion** on cluster pages with 10-12 topic-specific questions and FAQ schema markup
- [ ] P1 — **"Where to Go Next"** block at bottom with 3 contextual suggestions
- [ ] P1 — **Sidebar blocks**: Package Shortcut, Related Clusters (siblings), Back to Pillar, Cross-Pillar link, Phone
- [ ] P2 — **Progressive disclosure** in content sections: "Read more →" / "Show less ↑" toggles

---

## 6. COMPARISON PAGES

**Spec: Comparison Page Wireframe Spec**

### Structural Issues:

- [ ] P0 — Comparison pages should be **full-width single-column** (no sidebar) — spec Section 11
- [ ] P1 — **Quick Verdict** in hero — 1-sentence summary visible immediately (spec Section 3)
- [ ] P1 — **Winner Indicators** on comparison table rows — subtle visual indicator of which column wins each factor
- [ ] P1 — **Dual Package CTAs** after comparison table — 2 side-by-side package cards with CTAs (spec Section 5)
- [ ] P1 — **Decision Guide content** — "Choose Wyoming If..." / "Choose Nevada If..." / "What's the Same" sections (spec Section 6)
- [ ] P1 — **Bottom conversion CTAs** (repeat) — dual package cards repeated at page bottom after FAQ
- [ ] P1 — **Cross-pillar callout** — after decision guide, before FAQ

---

## 7. PACKAGE PAGES

**Spec: Package Page Wireframe Spec**

Package pages are the most complex template. Current prototype has basic versions.

### Missing Features:

- [ ] P0 — **Entity Type Toggle** (LLC/Corp) that switches ALL prices on the page (spec Section 4)
- [ ] P0 — **3-tier Pricing Comparison Grid** — side-by-side Bronze/Silver/Gold with feature rows and tooltips (spec Section 5)
- [ ] P0 — **Feature tooltips** — ⓘ icons on each feature row that show tooltip explaining the feature
- [ ] P0 — **Add-On Configurator** with checkboxes and real-time running total (spec Section 7)
- [ ] P0 — **Running Total sidebar** (desktop) / sticky bottom bar (mobile) — updates in real time (spec Section 7)
- [ ] P1 — **Value Comparison Callout** — "What's Actually Included — The Full Value" box with competitor price comparison (spec Section 6)
- [ ] P1 — **"Also Consider" cards** — 3 related package cards (spec Section 9)
- [ ] P1 — **Trust section** with trust signals bar + testimonials + Money-Back Guarantee callout (spec Section 10)
- [ ] P1 — **Package-specific FAQ** (8 questions) with accordion (spec Section 11)
- [ ] P1 — **Final Conversion CTA** at page bottom repeating primary CTAs (spec Section 12)
- [ ] P2 — **Gold visual elevation**: highlighted border, "Most Popular" badge, slightly raised (spec Section 5)
- [ ] P2 — Mobile: Gold card appears FIRST (top), "See all features ↓" expand toggle

---

## 8. STATE HUB PAGES

**Spec: State Hub Wireframe Spec**

### Missing Sections:

- [ ] P1 — **State Facts Strip** in hero: "No State Income Tax · $62 Annual Report · Strongest Privacy Statutes · Filing Fee ~$100"
- [ ] P1 — **Intent Routing Cards** — 4 cards (one per pillar) with pillar-specific Wyoming content and 3 key links each (spec Section 4)
- [ ] P1 — **Package Quick Links** — Gold + Silver cards for this state (spec Section 5)
- [ ] P1 — **"Why Wyoming?"** — 6 advantage blocks in 3×2 grid (spec Section 6)
- [ ] P1 — **Content Map Grid** — 4-column link grid organized by pillar showing ALL state-specific pages (spec Section 7)
- [ ] P1 — **State-specific FAQ** — 5-6 questions (spec Section 8)
- [ ] P1 — State hubs should be **full-width single-column** (no sidebar)

---

## 9. CHECKOUT FLOW

**Spec: Checkout Flow Wireframe Spec (4 steps)**

### Current State:

Checkout flow exists with 4 steps and CheckoutContext. Basic structure is in place.

### Missing/Incomplete:

- [ ] P1 — **Step Indicator**: completed steps show checkmark and are clickable (go back to edit)
- [ ] P1 — **Order Summary Sidebar**: sticky on desktop, collapsible on mobile, real-time updates
- [ ] P1 — **Step 1 (Configure)**: State selection as segmented control, entity type toggle, tier as selectable cards (not dropdown)
- [ ] P1 — **Step 2 (Details)**: Company name (3 choices), member/officer info, privacy note for Gold packages
- [ ] P1 — **Step 3 (Payment)**: PayPal option, crypto option, trust signals flanking payment fields
- [ ] P1 — **Step 4 (Confirmation)**: "What Happens Next" timeline with 5 steps, cross-sell for AP
- [ ] P2 — Form validation: inline errors on blur, scroll-to-first-error on submit
- [ ] P2 — Mobile: sticky "Continue →" button at bottom, collapsed order summary

---

## 10. FAQ PAGE

**Spec: FAQ Page Wireframe Spec**

### Current State:

FAQ page exists with accordion and search.

### Missing/Incomplete:

- [ ] P1 — **Category filter pills** with pillar colors: All, Privacy (blue), Asset Protection (green), Formation (amber), Compliance (purple), Packages & Pricing, General
- [ ] P1 — **Result count** display: "Showing X of Y questions"
- [ ] P1 — **Grouped by category** view (Option A) with H2 category headers and pillar color accents
- [ ] P1 — **Switch to flat filtered list** (Option B) when search is active
- [ ] P1 — **"Related Guides" suggestions** at end of each category section
- [ ] P1 — **Deep link anchors** on each question (e.g., `/faq/#what-is-nominee-officer`)
- [ ] P2 — **FAQ schema markup** on every question for SEO rich results
- [ ] P2 — **45 representative questions** (currently may have fewer)

---

## 11. ABOUT PAGE

**Spec: About Page Wireframe Spec**

### Current State:

About page exists with hero, founder bio, timeline, philosophy cards, office section, stats.

### Missing/Incomplete:

- [ ] P1 — **Founder Section**: Verify bio follows spec principles — third person, specific not generic, human not corporate
- [ ] P1 — **Timeline milestones**: Verify 8 milestones match spec (~2000 through 2026)
- [ ] P1 — **Office Section**: Embedded map placeholder, full address, hours, Nevada filing note
- [ ] P2 — **"By the Numbers" stats**: Should use precise numbers, not rounded marketing fluff
- [ ] P2 — **Testimonials section**: Present if testimonials available, omit if not (never fabricate)

---

## 12. CONTACT PAGE

**Spec: Contact Page Wireframe Spec**

### Current State:

Contact page exists with hero, contact method cards, form, trust strip.

### Missing/Incomplete:

- [ ] P1 — **3 Contact Method Cards**: Call Us, Send a Message, Visit Our Office — each with full detail per spec
- [ ] P1 — **Form fields**: Inquiry Type dropdown (8 options), State of Interest (conditional), How did you find us? (referral tracking)
- [ ] P1 — **Form success state**: form replaced by success message (not alert dialog)
- [ ] P1 — **Quick Links section**: 4 cards (Compare Packages, FAQ, Anonymous LLC Guide, Client Login)
- [ ] P1 — **Map section**: placeholder box with MapPin icon

---

## 13. CONTENT & DATA GAPS

### 13.1 Data Files

- [ ] P1 — `clusters.ts`: Verify all 27 cluster pages from Architecture v4 are present (currently ~23)
- [ ] P1 — `comparisons.ts`: Verify all 7 comparison pages are present (v3 added LLC vs S-Corp vs C-Corp Tax)
- [ ] P1 — `packages.ts`: Package URLs must match spec (flat, descriptive — not `/packages/slug`)
- [ ] P1 — `navigation.ts`: Mega menu must match spec exactly per pillar with all cluster links, comparison links, and quick links
- [ ] P1 — `faq.ts`: Should have ~45 representative questions across 6 categories with pillar color assignments
- [ ] P1 — `states.ts`: State hub content should include all 4 pillar intent cards, state facts, advantage grid, content map
- [ ] P2 — Create `offshore.ts` data file for 6 offshore pages

### 13.2 Messaging & Content Alignment

- [ ] P1 — Homepage hero H1: Verify matches spec — "Privacy, Asset Protection & Business Formation — All-Inclusive, Nothing Hidden"
- [ ] P1 — All pillar heroes: Verify headlines match Positioning Framework v2 messaging
- [ ] P1 — Package pages: Pricing must show "$1,275 all-inclusive" not just "$1,275"
- [ ] P1 — All CTA labels must match spec: "Protect Your Privacy →", "View Packages & Pricing →", etc.
- [ ] P1 — Consultation safety nets: Every self-service CTA must have a "Talk to us" alternative nearby
- [ ] P1 — Card 3 (Formation) pillar card title: "Business Incorporation" not "Company Formation"
- [ ] P2 — Trust strip: use "$1,275 All-Inclusive" not generic "All-Inclusive Pricing"
- [ ] P2 — Crypto badge: "Crypto Payments for Privacy" not generic "Crypto Accepted"

---

## 14. INTERACTION & UX GAPS

### 14.1 Progressive Disclosure

- [ ] P1 — All pillar pages: "Read full explanation →" toggle on first content section
- [ ] P1 — All cluster pages: "Read more →" / "Show less ↑" on content sections
- [ ] P1 — Package pages: "What You Need to Know" expandable educational sections
- [ ] P2 — Smooth height animation on all expand/collapse

### 14.2 Hover & Active States

- [DONE] Button active:scale-[0.97] — tactile press
- [DONE] Service card hover:-translate-y-1 — lift effect
- [ ] P2 — Pillar card hover: shadow increase + slight lift (spec Section 14)
- [ ] P2 — Package card hover: shadow increase + border accent (spec Section 14)
- [ ] P2 — Comparison table: winner cell subtle highlight
- [ ] P2 — Cross-pillar callout: distinct visual treatment with pillar color accent

### 14.3 Feature Tooltips (Package Pages)

- [ ] P1 — ⓘ icons on each feature row in pricing grid
- [ ] P1 — Desktop: hover to show tooltip above icon
- [ ] P1 — Mobile: tap to toggle tooltip
- [ ] P2 — Tooltip flips down if near viewport top

### 14.4 Running Total (Package Pages)

- [ ] P1 — Sticky sidebar on desktop with itemized base + add-ons + total
- [ ] P1 — Mobile: sticky bottom bar showing "Gold + [X add-ons] — $[total]" + "Checkout →"
- [ ] P1 — Real-time updates as checkboxes toggle

---

## 15. RESPONSIVE & MOBILE

- [ ] P1 — Sticky bottom CTA bar on all pages (mobile only)
- [ ] P1 — Mobile section order matches spec for each page type
- [ ] P1 — Comparison tables on mobile: stacked cards or horizontal scroll with sticky first column
- [ ] P1 — Package pricing grid on mobile: Gold card FIRST, stacked, "See all features ↓" toggle
- [ ] P1 — Sidebar content redistributes on mobile: Package Shortcut becomes inline card, phone goes to sticky bar
- [ ] P2 — Content map grid on state hubs: accordion per pillar on mobile
- [ ] P2 — Footer: accordion expand per column on mobile
- [ ] P2 — Step indicator on mobile checkout: compact "Step X of 4" with progress bar

---

## 16. SEO & TECHNICAL

- [ ] P2 — Every page needs unique `<title>` tag matching spec
- [ ] P2 — Every page needs `<meta name="description">` matching spec
- [ ] P2 — FAQ schema markup on every page with FAQ accordion
- [ ] P2 — BreadcrumbList schema on all content pages
- [ ] P2 — Organization + LocalBusiness schema on homepage
- [ ] P2 — Product schema on package pages
- [ ] P3 — Open Graph tags for social sharing
- [ ] P3 — Canonical URLs on all pages
- [ ] P3 — `noindex` on checkout pages

---

## 17. ACCESSIBILITY

- [ ] P2 — WCAG 2.1 AA color contrast on all text (note: amber #d97706 on white is 3.1:1 — only valid for large text)
- [ ] P2 — "Skip to main content" link as first focusable element
- [ ] P2 — ARIA labels on mega menu, carousel, accordion
- [ ] P2 — `prefers-reduced-motion` respected for all animations
- [ ] P3 — Keyboard navigation verified on all interactive elements
- [ ] P3 — Alt text on all images

---

## 18. CODE QUALITY & ARCHITECTURE

- [ ] P2 — Extract pillar color maps to `src/design-system/utils/pillarMaps.ts` (currently duplicated in 5+ components)
- [ ] P2 — Add `error.tsx` error boundaries to root and key route groups
- [ ] P2 — Move `FORMATION_STATES` from checkout/configure to `src/data/checkout.ts`
- [ ] P3 — Add `loading.tsx` skeleton states for dynamic routes

---

## IMPLEMENTATION PRIORITY ORDER

### Phase 1: Architecture Fix (P0 — Do First)

1. Decide on URL structure migration (flat vs current nested)
2. If flat: restructure `/src/app/` directory, update all links and navigation
3. Build missing pages (offshore hub, missing clusters, missing comparisons)
4. Update all data files to match Architecture v4

### Phase 2: Page Completeness (P1 — Core)

5. Homepage: add missing elements (safety nets, Gold elevation, correct labels)
6. Pillar pages: add sidebar, progressive disclosure, differentiator callouts
7. Cluster pages: add FAQ, Package CTA Block, reading time, cross-pillar callout
8. Package pages: entity toggle, pricing grid with tooltips, add-on configurator, running total
9. Comparison pages: full-width layout, winner indicators, decision guide, dual CTAs
10. State hubs: intent routing cards, content map grid, state facts
11. Navigation: complete mega menu content, footer sitemap, sticky mobile CTA
12. Content: update all messaging to match Positioning Framework v2

### Phase 3: Polish & UX (P2)

13. Progressive disclosure behavior on all content sections
14. Feature tooltips on package pages
15. Mobile responsive review per spec
16. Hover/active states on all interactive elements
17. SEO metadata and schema markup
18. Accessibility audit

### Phase 4: Nice-to-Have (P3)

19. Open Graph / social sharing
20. Loading skeletons
21. Keyboard navigation audit

---

_Generated 2026-03-14 by BIT Studios — Prototype vs Documentation Gap Analysis_
_Source documents: Discovery Report v4, Architecture v4, IA v3, Positioning Framework v2, 9 Wireframe Specs_
