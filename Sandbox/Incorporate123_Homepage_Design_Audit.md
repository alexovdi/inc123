# Incorporate123 Homepage Prototype Design Audit

**Document:** Homepage Design Audit & Improvement Plan
**Version:** v8 (current prototype) → v9 (target)
**Date:** March 21, 2026
**Prepared by:** BIT Studios (Alex) for Incorporate123 (David)
**Phase:** Phase 2 — UX & Visual Design

---

## Executive Summary

This audit reviews the Incorporate123 homepage prototype (v8) across six dimensions: UI/Visual Design, UX/Interaction, Conversion Strategy, Content/Copy, Technical/Performance, and Accessibility. 23 specific issues have been identified, each with a severity rating, root cause analysis, and an actionable fix. The five highest-impact improvements are called out below.

### Top 5 Priority Fixes

1. **Replace auto-advance with manual Next button in wizard** (#8) — 350ms auto-jump disorients users and prevents deliberate selection
2. **Add Gold upgrade path to wizard result** (#9) — 40% of Formation visitors upgrade to Gold; missing cross-sell is lost revenue
3. **Move Process section directly after wizard** (#12) — Answers "what happens after I buy?" at the moment of highest intent
4. **Add keyboard accessibility to wizard cards** (#10) — Div-based cards with onclick have zero keyboard navigation; blocks ~15% of users
5. **Restyle wizard container as premium UI** (#2) — White box with gray border reads "SaaS signup form"; needs brand-level polish

### Issue Distribution

| Severity | Count |
|----------|-------|
| **High** | 7 |
| **Medium** | 10 |
| **Low** | 6 |

| Category | Count |
|----------|-------|
| UI / Visual Design | 6 |
| UX / Interaction | 6 |
| Conversion / Strategy | 4 |
| Content / Copy | 3 |
| Technical / Performance | 4 |

---

## Complete Issue Audit

### UI / Visual Design

#### #1 · Medium · Background alternation is monotonous

**Problem:** The section flow is dark–white–gray–dark–white–gray on repeat. Four consecutive dark sections stack at the bottom (differentiators → CTA → footer). The visual rhythm lacks variety.

**Suggested fix:** Introduce a warm-tinted section (subtle yellow/cream gradient) for the Process section to break the binary white/gray/navy cycle. This adds a third background flavor without new colors.

---

#### #2 · High · Wizard container looks like a generic form

**Problem:** White box with 1px gray border and gray progress bar reads "SaaS signup flow," not premium financial services. No visual personality — no gradients, no brand expression, no premium materials.

**Suggested fix:** Add a subtle top gradient wash (blue at 2% opacity fading to transparent), give goal cards pillar-colored top borders like the old pillar cards had, and add hover washes. The wizard should feel like choosing from curated options, not filling out a form.

---

#### #3 · Medium · Differentiator hero card right side feels empty

**Problem:** The "Competitors charge $400–5,000/year" text floats in a large box with no visual structure. It reads as an afterthought rather than a powerful comparison.

**Suggested fix:** Replace floating text with two structured cards stacked vertically: a "Competitors" card with the price struck through, and an "Incorporate123 Gold" card with "Included" in gold. The visual contrast between the two makes the value proposition self-evident.

---

#### #4 · Low · VS comparison bar has weak contrast

**Problem:** The competitor price at rgba(255,255,255,.18) is nearly invisible on the dark background. The intent to dim it goes too far — users can't actually read the number.

**Suggested fix:** Increase competitor price opacity to rgba(255,255,255,.35) — still muted relative to the gold $1,275 but legible. The note text should also increase from .3 to .35.

---

#### #5 · Low · Trust bar cells are too thin

**Problem:** At 36px padding with 40px icons and 18px headings, the cells feel cramped compared to the generous 120–140px section padding everywhere else.

**Suggested fix:** Increase cell padding to 44px, icons to 48px, heading font to 20px. This brings the trust bar into proportion with the surrounding sections.

---

#### #6 · Low · Footer has zero visual hierarchy

**Problem:** Six equal columns of small gray links on a dark background. Every competitor's footer looks identical. The logo + tagline header helps but the link grid has no differentiation.

**Suggested fix:** Make the first column (Privacy) wider (1.3fr vs 1fr) with a subtitle description below the heading. Add a CTA row to the footer top bar (View Packages / Contact Us / Phone) creating an action-oriented header before the link grid.

---

### UX / Interaction Design

#### #7 · Medium · No way to restart wizard without clicking Back twice

**Problem:** On Step 3, the only navigation option is the Back button. Users who want to start over must click Back → Back → reselect. There's no "Start over" link.

**Suggested fix:** Add a "Start over" text button in the wizard nav bar that resets to Step 1, clears all selections, and resets the progress indicator. Only show it on Steps 2 and 3.

---

#### #8 · High · Wizard auto-advances too aggressively

**Problem:** 350ms after clicking a goal card, the wizard jumps to Step 2. Users may not register what they selected before the UI changes. This is disorienting, especially for slower readers or users with motor impairments.

**Suggested fix:** Remove auto-advance entirely. Add a "Continue →" button in the nav bar that enables once a selection is made. The user controls the pace. This also solves the accessibility issue of focus management during auto-transitions.

---

#### #9 · High · Wizard result has no upgrade path

**Problem:** If someone selects Formation → Wyoming and gets Silver at $875, there's no "Consider Gold for $1,275 — adds privacy + nominees" nudge. This was the core cross-sell opportunity from user journey mapping: 40% of formation visitors upgrade to Gold.

**Suggested fix:** Add a dashed-border upgrade nudge box below the feature list on the result page. Dynamic text: "Add year-round nominee services and offshore records storage for $375 more." with a "View Gold Package →" link. Only shows when the recommended tier is Silver or Bronze.

---

#### #10 · High · No keyboard accessibility on wizard cards

**Problem:** Goal and state cards use onclick handlers on div elements but have no tabindex, role="button", aria-pressed, or keyboard event handlers. A keyboard-only user cannot navigate the wizard.

**Suggested fix:** Add tabindex="0", role="button", aria-pressed="false" to all interactive cards. Add keydown listeners for Enter and Space. Add :focus-visible styles matching hover states. Update aria-pressed on selection.

---

#### #11 · Medium · Package section feels redundant after wizard

**Problem:** The wizard recommends a package with pricing, then the user scrolls to the exact same packages in a grid. The wizard and the package grid serve the same purpose — the grid feels like a repeat.

**Suggested fix:** Reframe the package section as "Compare All Options" — a detailed side-by-side view for users who want to evaluate every tier. Change the heading from "Ready to get started?" to "Detailed package comparison" with supporting copy: "Every package side by side. Toggle states, compare features, pick your tier."

---

#### #12 · High · Process timeline is too far from conversion moment

**Problem:** After the wizard result, the user scrolls through: packages, differentiators, trust bar, process, testimonials, then final CTA. The "How It Works" section answers "what happens after I buy?" — exactly what a visitor needs right after seeing a package recommendation.

**Suggested fix:** Move the Process section to immediately after the wizard (before the package comparison grid). New section order: Hero → Ticker → Wizard → Process → Packages → Differentiators → Trust → Testimonials → Final CTA.

---

### Conversion / Strategy

#### #13 · Medium · Hero has no direct-to-checkout path for Informed Buyer

**Problem:** Both hero CTAs point to education (/privacy/) and evaluation (/compare-packages/). There's no path for Persona D (Informed Buyer, 1–2 page journey) who is ready to purchase immediately. The wizard solves this partially but it's below the fold.

**Suggested fix:** Consider adding a third CTA or modifying the secondary CTA to link to the wizard section with a scroll anchor: "Find Your Package" with smooth scroll to the wizard. This gives Persona D a fast path without adding clutter.

---

#### #14 · High · Pillar explore links below wizard are too subtle

**Problem:** Four small gray text links are easily missed. These are the pillar entry points for visitors who want education, not guided selection. They're the safety valve for anyone who doesn't want a wizard.

**Suggested fix:** Replace small text links with bordered pill-style buttons: each with a pillar-colored dot, label, and border. Make them visually distinct from body text — they should look like navigation options, not footnotes.

---

#### #15 · Medium · Consultation path is underrepresented

**Problem:** Phone appears 5 times but "Schedule a Consultation" only twice (hero safety net and final CTA). Not everyone who prefers human help wants to make a phone call.

**Suggested fix:** Add a consultation touchpoint after the package comparison section: a bordered box with "Not sure which package fits? We're here to help. Schedule a free consultation → or call (775) 555-1234." Also add consultation link to wizard result page.

---

#### #16 · Low · Placeholder testimonial note is visible

**Problem:** "Placeholder testimonials — real client quotes pending collection" is displayed in the live prototype. David seeing this on every review normalizes the placeholder status instead of creating urgency to collect real testimonials.

**Suggested fix:** Remove the placeholder note from the visible prototype. Track the missing testimonials in the project task list and open items document, not in the UI.

---

### Content / Copy

#### #17 · Medium · Hero subhead is generic

**Problem:** "25 years specializing in business privacy, asset protection, and incorporation for Wyoming and Nevada. All-inclusive packages — no hidden fees." lists services but creates no hook. It describes what the company does, not why the visitor should care.

**Suggested fix:** Lead with the unique value proposition: "Year-round nominee services, offshore records storage, and all-inclusive formation packages — everything competitors charge $2,000+/year for, included from day one. Trusted since 2000."

---

#### #18 · Medium · Wizard headline is passive

**Problem:** "What are you looking for?" doesn't set expectations or create momentum. It's a question that could appear on any generic website.

**Suggested fix:** Change to "Get a personalized recommendation in 30 seconds" — sets a time expectation, implies tailored output, and creates forward momentum. Sub-copy: "Two questions. Transparent pricing. The right package for your goals."

---

#### #19 · Low · Differentiator card copy is compound

**Problem:** Cards like "Wyoming and Nevada entities since 2000. Privacy and asset protection — not generic filing." pack two ideas into two sentences. Each card should communicate one clear benefit.

**Suggested fix:** Simplify to one idea per card: "Wyoming and Nevada entities since 2000. Privacy and asset protection specialists." Single-idea cards scan faster and hit harder.

---

### Technical / Performance

#### #20 · Medium · Canvas particle system runs continuously

**Problem:** requestAnimationFrame keeps firing even when the hero is scrolled completely out of view. This wastes CPU/GPU cycles and drains battery on mobile devices.

**Suggested fix:** Use the existing hero IntersectionObserver to pause/resume the canvas loop. When hero is not intersecting, set a flag that skips the draw call in the animation frame. Resume when hero comes back into view.

---

#### #21 · Low · CSS is a single minified block

**Problem:** All styles are in one continuous stream with no structural separation. This makes iterating on individual sections difficult during prototype development.

**Suggested fix:** Add clear comment separators between section CSS blocks. For production, this will be handled by the component-based architecture (Tailwind + CVA), so this is a prototype-only concern.

---

#### #22 · Low · No meta description tag

**Problem:** The HTML has no `<meta name="description">` tag. While minor for a prototype, it affects how the page appears if David shares the URL or opens it in a tool that renders previews.

**Suggested fix:** Add: `<meta name="description" content="Incorporate123 — Privacy, Asset Protection & Business Formation Specialists. Year-round nominee services, offshore records storage, all-inclusive pricing. Wyoming and Nevada. Trusted since 2000.">`

---

#### #23 · Low · Google Fonts loads excessive weights

**Problem:** The current import loads 9 weights across 3 font families (~200KB). Many weights are declared but never used in the CSS.

**Suggested fix:** Subset to only weights actually used: Outfit (700, 800, 900), Inter (400, 500, 600), JetBrains Mono (500, 600). Saves ~80KB on initial load.

---

## Recommended Section Order

| # | Current (v8) | Proposed (v9) | Changed? |
|---|-------------|---------------|----------|
| 1 | Hero | Hero | — |
| 2 | Ticker | Ticker | — |
| 3 | Wizard | Wizard (improved) | Yes |
| 4 | Packages | **Process (moved up)** | **Yes** |
| 5 | Differentiators | Packages ("Compare All") | Yes |
| 6 | Trust | Differentiators | — |
| 7 | Process | Trust | — |
| 8 | Testimonials | Testimonials | — |
| 9 | Final CTA | Final CTA | — |
| 10 | Footer | Footer (improved) | Yes |

---

## Background Rhythm Map

| Section | v8 Background | v9 Background |
|---------|--------------|---------------|
| Hero | Dark Navy | Dark Navy |
| Ticker | Dark Navy | Dark Navy |
| Wizard | White | White (gradient wash) |
| Process | White | **Warm Cream (new!)** |
| Packages | Light Gray | Light Gray |
| Differentiators | Dark Navy | Dark Navy |
| Trust | White | White |
| Testimonials | Light Gray | Light Gray |
| Final CTA | Dark Navy | Dark Navy |

---

## Next Steps

1. **Implement all 23 fixes in v9 prototype** — priority order: High → Medium → Low
2. **Review v9 against this audit document** — verify each issue is resolved
3. **Test wizard flow end-to-end** — all 12 goal/state combinations, keyboard nav, upgrade paths
4. **Share updated prototype with David for review** — homepage approval unlocks development
5. **Collect outstanding items from David** — phone number, entity count, testimonials, Bronze pricing, turnaround time
