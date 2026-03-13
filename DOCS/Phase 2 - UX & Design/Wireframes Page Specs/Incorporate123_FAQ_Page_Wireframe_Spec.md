# Incorporate123 — Resource/FAQ Page Wireframe Specification

**Prepared by:** BIT Studios
**Prepared for:** David, Incorporate123
**Date:** March 2026
**Phase:** 2 — UX & Interactive Prototyping
**Template Type:** Resource/FAQ (unique template)
**URL:** `/faq/`
**Reuse:** This is a unique template — only this page and potentially a blog index use this pattern.

---

## 1. Page Purpose & Strategic Role

The FAQ hub is the consolidated replacement for the current Learning Center, which spans 244 URLs with 188 individual FAQ items across 24 categories. Most of those items are being distributed to contextual FAQ sections on pillar, cluster, and package pages. This hub page catches the ~18 general/catch-all items that don't fit a specific pillar, plus serves as the central reference for visitors who want to browse all FAQs in one place.

The page also acts as the redirect target for the old Learning Center category landing pages and any FAQ items not individually mapped to a new destination.

### Primary Objectives

- Provide a single browsable/searchable destination for all frequently asked questions
- Organize questions by pillar category so visitors can find topic-specific answers
- Capture long-tail SEO queries via FAQ schema markup on every question
- Serve as the fallback redirect for ~230+ old Learning Center URLs
- Link visitors to deeper content (cluster pages, pillar pages) when questions warrant more than a FAQ answer

### Target Audiences

| Audience | Entry Point | Expected Path |
|----------|-------------|---------------|
| General researcher | Nav link or footer link → `/faq/` | Browse categories, find answer, link to deeper page if needed |
| Redirected visitor | Old Learning Center URL → 301 → `/faq/` | Search/filter for their topic, find answer |
| Pre-purchase doubter | Package page → "See all FAQs" link → `/faq/` | Find answer to objection → return to package page |
| SEO long-tail | Google: "do I need a nominee officer for LLC" | Lands on page via FAQ schema rich result → reads answer → clicks through to cluster |

---

## 2. Breadcrumb Navigation

```
Home > FAQ
```

---

## 3. FAQ Hero Section

### Content

| Element | Content |
|---------|---------|
| Eyebrow | "Resources" |
| H1 Headline | "Frequently Asked Questions" |
| Subheadline | "Answers to common questions about business privacy, asset protection, LLC formation, compliance, and our services. Can't find what you're looking for? Call us at (775) 555-0123." |

### Search Bar

Immediately below the subheadline — the single most important interaction on this page.

| Element | Content |
|---------|---------|
| Search Input | Large, prominent search field with placeholder: "Search questions... e.g., 'nominee officer' or 'Wyoming annual report'" |
| Icon | Search (magnifying glass) icon inside the input field |
| Behavior | Filters visible questions in real time as the user types. Matches against question text AND answer text. Shows result count: "Showing 8 of 45 questions" |
| Clear Button | "✕" appears inside the input when text is entered; click clears search and restores all questions |
| No Results State | "No questions match your search. Try different keywords or call us at (775) 555-0123." |

---

## 4. Category Filter Navigation

Allows visitors to filter questions by pillar/topic category. Works in combination with search — visitor can filter to a category AND search within it.

### Layout

**Desktop:** Horizontal pill/tab row below the search bar. All categories visible.
**Mobile:** Horizontal scroll row of pills, or a dropdown select.

### Categories

| Category | Pillar Color Accent | Question Count (prototype) |
|----------|-------------------|---------------------------|
| All (default) | Neutral | Shows all questions |
| Privacy | Blue | ~12 questions |
| Asset Protection | Green | ~8 questions |
| Formation | Amber | ~10 questions |
| Compliance | Purple | ~6 questions |
| Packages & Pricing | Neutral/brand | ~5 questions |
| General | Neutral/muted | ~4 questions |

### Behavior

- Click a category pill to filter. Active pill shows filled/highlighted state.
- "All" is selected by default on page load.
- Category filter combines with search: selecting "Privacy" + typing "nominee" shows only Privacy questions containing "nominee."
- Result count updates: "Showing 5 of 12 Privacy questions"
- URL doesn't change (client-side filtering only in prototype)

---

## 5. FAQ Accordion Sections

The main content area. Questions organized under category headings with accordion expand/collapse.

### Layout Options

**Option A — Grouped by Category (recommended):**
Questions are grouped under H2 category headings. Each category section is visually distinct. When "All" is selected, all categories show in order. When a category filter is active, only that category's section appears.

**Option B — Flat List:**
All questions in a single list, sorted by category then by question. Category shown as a small badge/tag on each question row. Better for search results display.

Recommendation: Use Option A as default view, but switch to Option B (flat filtered list) when search input is active.

### Category Section Structure

For each category:

| Element | Content |
|---------|---------|
| Category Header (H2) | Category name with pillar color accent — e.g., "Privacy" with blue left border |
| Question Count | "(12 questions)" beside the header |
| Questions | Accordion items listed below the header |

### FAQ Item Structure (each question)

| Element | Content |
|---------|---------|
| Question | The question text. Click/tap the entire row to expand. |
| Expand Icon | ChevronDown that rotates to ChevronUp when expanded |
| Answer | 2–5 sentence answer. May include a "Learn more →" link to the relevant cluster or pillar page. |
| Category Tag (if in flat/search view) | Small pill badge showing "Privacy" / "Formation" etc. with pillar color |

### Accordion Behavior

| Rule | Description |
|------|-------------|
| Expand mode | Multi-expand — users browsing FAQs want to open several questions. Don't auto-close others. |
| Animation | Smooth height transition on open/close |
| Keyboard | Enter/Space to toggle. Arrow keys to move between questions. |
| Deep link | Each question has an anchor ID so it can be linked directly (e.g., `/faq/#what-is-nominee-officer`) |
| Schema | FAQ schema markup on every question/answer pair |

---

## 6. Representative FAQ Questions (for prototype)

Build the prototype with ~45 representative questions across all categories. Here are the questions organized by category:

### Privacy (12 questions)

| # | Question |
|---|----------|
| 1 | "What is an anonymous LLC?" |
| 2 | "What states allow anonymous LLCs?" |
| 3 | "What is a nominee officer?" |
| 4 | "What's the difference between year-round nominees and 'nominee for a day'?" |
| 5 | "Do I still need a nominee with BOI reporting?" |
| 6 | "What is an offshore records custodian?" |
| 7 | "Can someone find out who owns my anonymous LLC?" |
| 8 | "Is forming an anonymous LLC legal?" |
| 9 | "What is the Corporate Transparency Act?" |
| 10 | "How do offshore nominee directors work?" |
| 11 | "Can I use an anonymous LLC for real estate?" |
| 12 | "What's the difference between privacy and asset protection?" |

### Asset Protection (8 questions)

| # | Question |
|---|----------|
| 1 | "What is charging order protection?" |
| 2 | "Does Wyoming protect single-member LLCs?" |
| 3 | "What's the difference between an LLC and a living trust for asset protection?" |
| 4 | "How much in assets do I need before AP makes sense?" |
| 5 | "Can creditors pierce the veil of my LLC?" |
| 6 | "What is a holding LLC?" |
| 7 | "Is Nevada or Wyoming better for asset protection?" |
| 8 | "Do I need both privacy AND asset protection?" |

### Formation (10 questions)

| # | Question |
|---|----------|
| 1 | "Should I form an LLC or Corporation?" |
| 2 | "How long does LLC formation take?" |
| 3 | "What's the difference between Wyoming and Nevada for LLC formation?" |
| 4 | "What's included in Incorporate123's formation packages?" |
| 5 | "Do I need to live in Wyoming to form an LLC there?" |
| 6 | "What is a shelf company?" |
| 7 | "What is foreign state registration?" |
| 8 | "What is domestication?" |
| 9 | "Can I form in Wyoming and operate in California?" |
| 10 | "What is an EIN and do I need one?" |

### Compliance (6 questions)

| # | Question |
|---|----------|
| 1 | "What is a registered agent?" |
| 2 | "What are Wyoming's annual filing requirements?" |
| 3 | "What are Nevada's annual filing requirements?" |
| 4 | "What happens if I miss my annual report deadline?" |
| 5 | "What is corporate minute maintenance?" |
| 6 | "Can I change my registered agent to Incorporate123?" |

### Packages & Pricing (5 questions)

| # | Question |
|---|----------|
| 1 | "What's the difference between Gold and Silver packages?" |
| 2 | "How much is the annual renewal?" |
| 3 | "Do you accept cryptocurrency?" |
| 4 | "Is there a money-back guarantee?" |
| 5 | "What payment methods do you accept?" |

### General (4 questions)

| # | Question |
|---|----------|
| 1 | "How long has Incorporate123 been in business?" |
| 2 | "Where is your office located?" |
| 3 | "Can I call and speak to someone?" |
| 4 | "Do you offer consultations?" |

---

## 7. "Related Guides" Suggestions

At the end of each category section (or at the bottom of the page for flat view), suggest deeper content pages.

### Per-Category Suggestions

| Category | Suggestions |
|----------|-------------|
| Privacy | "Read the full Anonymous LLC Guide →" `/anonymous-llc/` · "Compare States for Privacy →" `/best-state-for-privacy/` |
| Asset Protection | "Read the Asset Protection Guide →" `/asset-protection/` · "Charging Order Protection Explained →" `/charging-order-protection/` |
| Formation | "LLC vs Corporation — Full Comparison →" `/llc-vs-corporation/` · "Wyoming vs Nevada for Formation →" `/wyoming-vs-nevada/` |
| Compliance | "Registered Agent Services →" `/registered-agent/` · "Annual Report Guide →" `/annual-reports/` |
| Packages & Pricing | "Compare All Packages →" `/compare-packages/` · "View Wyoming Gold — $1,275 →" `/wyoming-private-incorporation/` |
| General | "About Incorporate123 →" `/about/` · "Contact Us →" `/contact/` |

---

## 8. Bottom CTA Section

| Element | Content |
|---------|---------|
| Headline | "Still Have Questions?" |
| Description | "Our team has 25 years of experience with Wyoming and Nevada privacy formation. Call us directly — no chatbots, no phone trees." |
| Primary CTA | "Call (775) 555-0123" with tap-to-call |
| Secondary CTA | "Send Us a Message →" → `/contact/` |
| Tertiary | "View Packages & Pricing →" → `/compare-packages/` |

---

## 9. Page Layout

Full-width single-column layout (no sidebar). The search bar and category filters need maximum horizontal space.

**Desktop:** Single column, max-width 900px (narrower than other pages for readability — this is a text-heavy reference page).
**Mobile:** Single column, full width with padding.

### Section Order

1. Breadcrumb
2. Hero (headline + subheadline)
3. Search Bar
4. Category Filter Pills
5. Result Count ("Showing 45 of 45 questions")
6. FAQ Accordion Sections (grouped by category, or flat when searching)
7. Related Guides (per category or at bottom)
8. Bottom CTA Section
9. Footer

---

## 10. Mobile-Specific Requirements

### Search Bar on Mobile
Full-width, prominent. Should feel like the primary interaction — visitors on mobile will search rather than scroll through 45 questions.

### Category Filters on Mobile
Horizontal scroll row of pills. "All" visible by default. Scroll right to see other categories. Alternatively: a dropdown select if pill row feels cramped.

### FAQ Sections on Mobile
Single column, full width. Category headers serve as visual separators. Multi-expand accordions.

### Sticky Bottom CTA Bar
"Call Us" + phone icon. On this page, the phone CTA makes more sense than "View Packages" — visitors here are looking for answers, and calling is the natural escalation.

---

## 11. Interaction Behavior

| Element | Behavior |
|---------|----------|
| Search input | Real-time filtering as user types (debounced ~200ms). Matches question text + answer text. |
| Category pills | Click to filter. Active state on selected pill. Combines with search. |
| FAQ accordion | Multi-expand. Smooth height animation. Keyboard accessible. |
| "Learn more →" links in answers | Standard text links routing to cluster/pillar pages |
| Related guides | Static link blocks. No interaction beyond click. |
| Result count | Updates in real time: "Showing X of Y questions" or "Showing X of Y [Category] questions" |
| Empty state | When search/filter returns 0 results: friendly message + phone number |

---

## 12. SEO Requirements

| Element | Value |
|---------|-------|
| Title Tag | "Frequently Asked Questions — Privacy, Formation & Compliance | Incorporate123" |
| Meta Description | "Find answers to common questions about anonymous LLCs, nominee services, Wyoming and Nevada formation, asset protection, compliance, and Incorporate123's all-inclusive packages." |
| H1 | "Frequently Asked Questions" |
| H2s | Each category name: "Privacy", "Asset Protection", "Formation", "Compliance", "Packages & Pricing", "General" |
| Schema | FAQPage schema covering all questions. BreadcrumbList. |
| Canonical URL | `https://incorporate123.com/faq/` |
| Redirect target | This page is the fallback for ~230+ old Learning Center URLs |

---

## 13. Content Dependencies

| Item | Status | Owner |
|------|--------|-------|
| Final FAQ assignment map (which questions go to cluster pages vs. FAQ hub) | In progress during content phase | BIT Studios / David |
| FAQ answers (final approved versions) | Client-supplied | David |
| Legal reference integration confirmed | Need David to verify NRS citations are current | David |
| Old Learning Center URL → FAQ redirect map | Draft complete, finalize during dev | BIT Studios / Irish |

---

## 14. Component Reuse Map

| Component | Source | Notes |
|-----------|-------|-------|
| FAQHero | Adapted from utility page hero | Simple headline + subheadline + search bar |
| SearchInput | New | Real-time filtering. Reusable if blog search is added later. |
| CategoryFilterPills | New | Horizontal pill row with pillar colors. Unique to this page. |
| FAQAccordion | From pillar/cluster pages | Multi-expand mode. Enhanced with search filtering + deep-link anchors. |
| RelatedGuides | Adapted from WhereToGoNext | 2 contextual links per category |
| StickyMobileCTA | Global | Phone-first variant on this page |

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
