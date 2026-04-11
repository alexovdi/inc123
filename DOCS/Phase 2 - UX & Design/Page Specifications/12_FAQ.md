# FAQ Page

> URL: `/faq` | Layout: Full-width single-column | Unique page

## Purpose

Consolidated reference hub. Collects ~50 representative questions across all categories. Serves as the redirect destination for ~230 old Learning Center URLs. High SEO value via FAQPage schema markup.

## Layout

- Full-width, single-column (no sidebar)
- Max-width: 900px (narrower for readability — text-heavy)

## Sections

1. **Breadcrumbs** — Home > FAQ
2. **FAQ Hero** — H1: "Frequently Asked Questions". Subheadline including all 4 pillars + phone number CTA.
3. **Search Bar** — Real-time filtering across question + answer text. Debounced ~200ms. Clear button (x). Placeholder: "Search questions... e.g., 'nominee officer' or 'Wyoming annual report'". Result count: "Showing 8 of 50 questions".
4. **Category Filter Pills** — Horizontal row: All | Privacy (blue) | Asset Protection (green) | Formation (amber) | Compliance (purple) | Packages & Pricing | General. Combines with search. Pillar colors on active pills.
5. **FAQ Accordion Sections** — Grouped by category in default view. Flat list with category badges when searching. Multi-expand mode. Each question has:
   - Question text + chevron icon (rotates on expand)
   - Answer: 2-5 sentences, direct answer first, specific numbers, optional "Learn more →" link
   - Category badge (visible in search/flat view)
   - Deep-link anchor (e.g., `/faq/#what-is-nominee-officer`)
6. **"Related Guides" per Category** — 2 contextual links per category after its questions.
7. **Bottom CTA** — "Still Have Questions?" + "Call [phone]" (primary) + "Send Us a Message" → /contact + "View Packages".

## Question Distribution

| Category           | Count   | Examples                                                                    |
| ------------------ | ------- | --------------------------------------------------------------------------- |
| Privacy            | 12      | "What is an anonymous LLC?", "What is a nominee officer?", "Is this legal?" |
| Asset Protection   | 8       | "What is charging order protection?", "How much do I need to protect?"      |
| Formation          | 10      | "How long does formation take?", "LLC vs Corporation?", "What state?"       |
| Compliance         | 6       | "What is a registered agent?", "Annual report deadlines?"                   |
| Packages & Pricing | 5       | "What's included?", "Can I upgrade?", "Annual renewal cost?"                |
| General            | 4       | "How long have you been in business?", "Do you accept crypto?"              |
| **Taxation (v3)**  | 5       | Entity tax guide, S-Corp election, state tax obligations                    |
| **Total**          | **~50** |                                                                             |

## Content Status

| Section          | Status      | Notes                               |
| ---------------- | ----------- | ----------------------------------- |
| Hero             | Ready       | H1 and subheadline defined          |
| Search + filters | Ready       | Functionality spec'd and built      |
| FAQ answers      | ~80% ready  | 40 of 50 spec'd in v3 content guide |
| Taxation FAQs    | Needs David | v3 addition, needs verification     |
| Related guides   | Ready       | Links to existing pages             |
| Bottom CTA       | Ready       | Phone + contact + packages          |

**Source content:** 1,100 words (24 FAQ items) from current site. Content guide v3 expands to 50 questions.

## Key Components

`FAQHero`, `SearchInput`, `CategoryFilterPills`, `FAQAccordion`, `CategoryBadge`, `RelatedGuides`, `CTASection`

## Prototype Status

Fully built. Has hero, search with real-time filtering, category pills, accordion with multi-expand, related guides, CTA. Search and filter work correctly. Needs content population for all 50 questions.

## Existing Specs

- Wireframe: `../Wireframes Page Specs/Incorporate123_FAQ_Page_Wireframe_Spec.md`
- Content Guide: `../v3-taxation-update/10_FAQ_Page_Content_Guide_v3.md` (LATEST)

## SEO Notes

- FAQPage schema on every question/answer pair
- ~230 old Learning Center URLs redirect to this page
- Category questions also appear on pillar/cluster pages (intentional duplication)
- Title: "Frequently Asked Questions — Privacy, Formation & Compliance | Incorporate123"

## Next Steps

- [ ] Write remaining 10 FAQ answers (taxation + a few others)
- [ ] Verify pricing/feature claims in all answers
- [ ] Populate all 50 questions in prototype data
- [ ] Add "Learn more →" links to answers that reference cluster pages
- [ ] Set up deep-link anchors for each question
- [ ] Implement FAQPage JSON-LD schema
- [ ] Test search/filter with full 50-question dataset
