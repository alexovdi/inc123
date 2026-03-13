# Comparison Page (WY vs NV Privacy) Artifact Prompt

Copy everything below the line and paste it into Claude along with the uploaded `Incorporate123_Comparison_Page_Wireframe_Spec.md` file.

---

Build the Incorporate123 "Wyoming vs Nevada for Business Privacy" comparison page (`/wyoming-vs-nevada-privacy/`) as a single React artifact (.jsx) based on the attached wireframe specification. This is the representative comparison page template — 6 pages across the site use this layout. It's a decision-support tool, not an educational article.

**Important: The attached spec contains no color tokens, spacing values, or design definitions.** Use your own judgment to create a polished, scannable comparison layout. This page should feel like a premium decision tool — think product comparison pages on Apple or Wirecutter. The table is the star. Clean, data-dense, instantly scannable. The Privacy pillar identity color is blue.

## Technical Constraints

- Single React component, default export, no required props
- Tailwind utility classes only (core pre-defined classes)
- Lucide React for icons (Check, X, Minus, Trophy, ArrowRight, Phone, Shield, ChevronDown, MapPin, DollarSign, FileText, Building2, Scale)
- React hooks for state: FAQ accordion, mobile table view toggle (if needed)
- No localStorage, no external APIs
- Responsive: mobile-first
- Semantic HTML

## What Makes This Template Different

Comparison pages are structurally simpler than pillar or cluster pages — no sidebar, no progressive disclosure, no add-on configurator. The complexity is in the **table design and responsive behavior**. The entire page exists to answer one question: "Which state should I choose?" Everything serves that decision.

## Page Structure — Build Every Section

### Header & Footer
Same as other pages. "Privacy" nav active. Breadcrumb: Home > Business Privacy > Wyoming vs Nevada for Privacy.

### Section 1: Comparison Hero
- Blue privacy pillar accent
- Eyebrow: "Business Privacy · Comparison"
- H1: "Wyoming vs Nevada for Business Privacy"
- Subheadline from spec
- **Quick Verdict** — 1-sentence visible immediately below the subheadline in a distinct callout style: "Bottom line: Wyoming offers stronger privacy at lower cost. Nevada adds no state income tax and suits businesses with a physical Nevada presence."
- No CTAs in the hero — the table IS the action

### Section 2: Comparison Table (THE CENTERPIECE)

This is the most important element on the page. Build it with care.

**Desktop Layout:** 3-column table, full container width:
- Column 1: Factor name (left-aligned, bold)
- Column 2: Wyoming value
- Column 3: Nevada value
- Optional: subtle winner highlight on the better value per row

**Table Header:**
- Wyoming column: state name, "$1,275 (LLC)" price, "$525/year" renewal, "Start Wyoming Gold →" mini CTA
- Nevada column: state name, "$1,800 (LLC)" price, "$525/year" renewal, "Start Nevada Gold →" mini CTA

**16 comparison rows from the spec.** Use ALL of them:
1. Public Member Disclosure (Tie)
2. Privacy Statute Strength (Wyoming wins)
3. Annual Filing Fee — $62 vs $350 (Wyoming wins)
4. Initial Filing Fee — $100 vs $425 (Wyoming wins)
5. State Income Tax (Tie — both None)
6. State Business Tax (Wyoming wins)
7. Annual Report Complexity (Wyoming wins)
8. Nominee Officer Availability (Tie)
9. Offshore Nominees Included (Tie)
10. Offshore Records Custodian (Tie)
11. Gold Price LLC — $1,275 vs $1,800 (Wyoming wins)
12. Gold Price Corp — $1,575 vs $2,100 (Wyoming wins)
13. Annual Renewal (Tie — both $525)
14. Physical Office Advantage (Nevada wins — Reno office)
15. Shelf Company Availability (Nevada wins — larger inventory)
16. Best For (summary row — no winner, descriptive text)

**Winner indicators:** Subtle visual treatment on the winning cell — green tint, checkmark, or bold. Ties show a neutral indicator (dash or "=" icon). Don't overdo it — the data should speak.

**Mobile Layout:** Choose one:
- **Stacked cards** — each factor becomes a mini-card with WY and NV values side by side. This is usually easier to read on mobile.
- **Horizontal scroll** — factor column sticky-left, WY/NV scroll. Show a "← swipe →" hint.

### Section 3: Dual Package CTAs
- Two large cards side by side: Wyoming Gold ($1,275) and Nevada Gold ($1,800)
- Each card: state name, "Gold Package — Complete Privacy", price (LLC + Corp), renewal, 4 key includes, primary CTA button
- "Not sure yet? Schedule a consultation →" below both cards
- **These must appear immediately after the table** — this is the decision point
- Desktop: side by side. Mobile: stacked, Wyoming on top.

### Section 4: Decision Guide
Three content blocks:

**"Choose Wyoming If..."** — 5 bullet-style items with checkmark icons and 1–2 sentence explanations. Use the exact content from the spec.

**"Choose Nevada If..."** — 5 bullet-style items. Same format.

**"What's Identical in Both Packages"** — Simple list of 9 features that are the same regardless of state choice. Use the exact items from the spec.

### Section 5: Cross-Pillar Callout
- Green accent (Asset Protection)
- "Privacy Is Step One. Asset Protection Is Step Two."
- Links to `/wyoming-vs-nevada-asset-protection/`

### Section 6: FAQ Accordion
- 8 questions from the spec
- Single-expand mode
- Write realistic 2–3 sentence answers for each
- Smooth animation, keyboard accessible

### Section 7: Bottom Conversion CTAs (Repeat)
Same dual package cards from Section 3. Wyoming Gold + Nevada Gold + consultation safety net.

### Section 8: Where to Go Next
3 links: Anonymous LLCs → Nominee Services → All packages

### Mobile Sticky CTA Bar
"View Gold Packages" + phone icon

## Full-Width Layout

This page has NO sidebar — comparison pages use the full container width to give the table maximum horizontal space. Single-column layout, max-width 1000–1200px, centered.

## Content Rules

- Use EXACT comparison data, decision guide content, and FAQ questions from the spec
- Write realistic 2–3 sentence FAQ answers
- All prices: Wyoming Gold LLC $1,275, Corp $1,575. Nevada Gold LLC $1,800, Corp $2,100. Renewal both $525/year.
- Phone: (775) 555-0123
- All links: `href="#"`

## What Matters Most

1. **Table quality** — this is the single most important element. It must be instantly scannable, visually clean, with clear winner indicators. If the table is hard to read, the page fails.
2. **Mobile table** — the #1 responsive challenge. The 16-row, 3-column table needs to be usable on a phone. Test your approach carefully.
3. **Decision flow** — table → dual CTAs → decision guide → FAQ → CTAs again. The page should feel like a funnel narrowing toward a decision.
4. **Quick verdict** — the 1-sentence summary in the hero gives impatient visitors an instant answer. It should be visually prominent.
5. **No clutter** — comparison pages are clean and data-forward. No decorative sections, no testimonials, no trust strips (those live on the package pages where the actual transaction happens). This page is pure decision support.
