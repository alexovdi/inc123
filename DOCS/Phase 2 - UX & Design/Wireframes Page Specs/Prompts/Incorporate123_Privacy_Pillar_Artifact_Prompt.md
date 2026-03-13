# Privacy Pillar Page Artifact Prompt

Copy everything below the line and paste it into Claude along with the uploaded `Incorporate123_Privacy_Pillar_Wireframe_Spec.md` file.

---

Build the Incorporate123 Privacy Pillar page (`/privacy/`) as a single React artifact (.jsx) based on the attached wireframe specification. This is the LEAD pillar page — the template that will be replicated for Asset Protection, Formation, and Compliance. It needs to be visually distinct from the homepage while sharing the same header, footer, and design language.

**Important: The attached spec contains no color tokens, spacing values, or design definitions.** Use your own judgment to create a polished, premium visual design. The page should feel like a deep-content educational hub for a privacy-focused legal services firm — authoritative, clean, generous whitespace, excellent readability. The Privacy pillar identity color is blue.

## Technical Constraints

- Single React component, default export, no required props
- Tailwind utility classes only (core pre-defined classes)
- Lucide React for icons (Shield, Lock, Clock, Globe, Archive, Eye, Users, FileWarning, ChevronDown, ChevronRight, ArrowRight, Phone, Search, ExternalLink)
- React hooks for state (progressive disclosure toggles, FAQ accordion, mobile sidebar)
- No localStorage, no external APIs
- Responsive: mobile-first with sm/md/lg/xl breakpoints
- Semantic HTML throughout

## Page Structure

This is a long-form educational pillar page. The layout uses a 70/30 main-content/sidebar split on desktop, and collapses to single-column on mobile. Build every section from the spec, in order:

### Shared Header & Footer
Reuse the same header (with mega menu) and footer from the homepage spec. On this page, "Privacy" in the nav should show an active state. Include breadcrumb: Home > Business Privacy.

### Section 1: Pillar Hero
- Blue pillar identity accent (colored top bar, tinted icon, or background treatment)
- Eyebrow: "Business Privacy"
- H1: "Privacy You Can't Get Elsewhere"
- Subheadline from spec (year-round nominees, offshore records, 25 years)
- Two CTAs: "Explore Privacy Packages →" (primary) and "Already know what you need? View Gold Packages →" (secondary/text link)
- Trust snippet below CTAs

### Section 2: "What is Business Privacy?"
- H2 headline
- 3–5 sentence visible scanner content explaining anonymous LLCs and nominee concepts in plain language
- "Read full explanation →" toggle that expands to reveal 400–600 words of detailed content
- Use smooth height animation for the expand/collapse
- Soft inline CTA at bottom: "Learn about Anonymous LLCs →"

### Section 3: "Why Business Privacy Matters"
- H2 headline
- 4 subsections in a 2×2 grid (desktop) or stacked (mobile)
- Each: icon + title + 2–3 sentence scanner content + expandable detail
- Topics: Protect Against Lawsuits, Keep Competitors in the Dark, Personal Safety, The BOI Problem
- Use the exact content from the spec
- Dual CTA after section: soft CTA + "Already know?" shortcut

### Section 4: "How Incorporate123 Protects Your Privacy"
- H2 headline + subtext
- 3 service blocks stacked vertically with generous spacing
- Each block: icon, title, scanner paragraph, expandable detail, differentiator callout (highlighted quote/badge)
- Services: Year-Round Nominees (Clock icon), Offshore Nominees (Globe icon), Offshore Records Custodian (Archive icon)
- Differentiator callouts should be visually distinct — a highlighted box or quote showing the competitive advantage

### Section 5: Cluster Navigation Grid — "Explore Privacy Topics"
- H2 headline + subtext
- 8 cards in a 4×2 grid (desktop lg), 2×4 (tablet md), single column (mobile)
- Each card: blue pillar accent (top border), title, 1–2 sentence description, "Learn More →" arrow link
- All 8 clusters from the spec: Anonymous LLC, Nominee Services, Wyoming Privacy, Nevada Privacy, California Private, Florida Private, Offshore Privacy, BOI Reporting
- Cards have hover lift + shadow

### Section 6: Comparison Cards — "Compare Your Options"
- H2 headline + subtext
- 2 larger cards side by side: "Best State for Privacy" and "Wyoming vs Nevada for Privacy"
- Each with description and "Compare →" CTA
- Use the exact descriptions from the spec

### Section 7: Package CTA Section
- H2: "Privacy Packages — All-Inclusive, Nothing Hidden"
- Subtext from spec
- 2 Gold package cards side by side: Wyoming Gold ($1,275) and Nevada Gold ($1,800)
- Each shows: price prominently, renewal rate, 4–5 key includes, "Start [State] Gold →" CTA
- Gold cards should feel premium — elevated, distinct from the cluster cards
- "Compare All Packages →" link below
- "Not sure yet? Schedule a free consultation →" secondary link

### Section 8: Cross-Pillar Callout
- Visually distinct card with green accent (Asset Protection pillar identity)
- Headline: "Privacy Protects Your Identity. Asset Protection Protects Your Wealth."
- Description and CTA from spec
- MUST appear BELOW the package section — never above it

### Section 9: FAQ Accordion
- 7 questions from the spec with realistic answers
- Single-expand mode (opening one closes the previous)
- Smooth height animation
- Keyboard accessible
- Each answer should be 2–4 sentences

### Section 10: "Where to Go Next"
- 3 suggestion cards/links: Compare Privacy by State → See Gold Package Details → Explore Asset Protection
- Clean, minimal — this is a navigation aid, not a marketing section

### Desktop Sidebar (right column)
- Sticky on scroll, stops before footer
- Contains 4 blocks from the spec:
  1. "Ready to Order?" package shortcut card (WY Gold $1,275 / NV Gold $1,800)
  2. Related Clusters list (all 8 links, current page highlighted)
  3. "Also Relevant: Asset Protection →" cross-pillar link
  4. Phone number with tap-to-call
- On mobile: sidebar disappears, package shortcut appears as inline card after Section 4, clusters become Section 5 grid, cross-pillar becomes Section 8

### Mobile Sticky CTA Bar
- Fixed bottom bar on mobile only
- "View Gold Packages" button + phone icon
- Appears after scrolling past hero

## Content Rules

- Use EXACT headlines, descriptions, CTAs, and FAQ questions from the spec — do not rewrite
- Write realistic placeholder content for the progressive disclosure expanded sections (the scanner summaries are in the spec; you write the expanded detail in the same educational, authoritative voice)
- FAQ answers should be 2–4 sentences each, substantive and informative
- Placeholder phone: (775) 555-0123
- All links: `href="#"` with descriptive text

## What Matters Most

This page template is more complex than the homepage — it has progressive disclosure, a sidebar, an 8-card cluster grid, FAQ accordion, and cross-pillar navigation all working together. Prioritize:

1. **Progressive disclosure working smoothly** — this is the signature interaction pattern for the entire site
2. **Sidebar behavior** — sticky on desktop, redistributed on mobile
3. **Content hierarchy** — clear visual distinction between scanner content and expanded detail
4. **Cluster grid** — this is how visitors navigate the entire pillar; it must be scannable and inviting
5. **Completeness** — every section present, nothing abbreviated
6. **Premium feel** — authoritative, trustworthy, modern, clean — appropriate for a privacy law services firm
