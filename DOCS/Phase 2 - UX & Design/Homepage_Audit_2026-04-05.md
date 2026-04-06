# Incorporate123 Homepage — Full Audit Report

**Date:** April 5, 2026
**Audited by:** Ash (BIT Studios)
**Page:** `http://localhost:2121/` — homepage in brand theme
**Version:** Post-v10 redesign (commit 4219582)

---

## Executive Summary

The homepage redesign successfully implements the v10 design across all sections. The page tells a coherent story from problem to solution to proof to action. The visual design is polished with consistent use of the pillar color system and typography hierarchy.

**However**, the implementation has significant technical debt: ~350 lines of inline JSX that should be extracted to components, hardcoded colors that break the theme system, and data mixed into the page file instead of the data layer. These don't affect the visual output but will slow future iteration.

---

## 1. PAGE STORY & CONVERSION FLOW

### What's Working

- **Strong narrative arc:** Hero (problem + credibility) -> Education (why privacy matters) -> Guided selection (wizard) -> Explore (pillars) -> Evaluate (packages) -> Trust (differentiators + testimonials) -> Process (how it works) -> Close (final CTA)
- **Dual user paths:** The wizard serves undecided visitors; package cards serve informed buyers. Both are accessible within 2 scrolls.
- **Competitor pricing VS bar** ($400-$5,000 vs $1,275) is the strongest conversion element. It makes the value prop concrete and visual.
- **"Nominee for a day"** differentiator is repeated consistently — reinforces the single most important message.
- **Transparent pricing** throughout — exact numbers ($875, $1,275, $1,800), no "contact for pricing" walls.

### Issues

| #   | Issue                                                                                                             | Impact                                                                            | Severity | Fix                                                                                                                  |
| --- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| 1   | **"Find Your Package" label used 4 times** pointing to different destinations (#wizard vs /compare-packages)      | User clicks expecting same destination, gets different page                       | HIGH     | Hero/header -> "#wizard", others -> "View Packages" or "Compare Packages" with /compare-packages                     |
| 2   | **Wizard (Section 3) and Package Comparison (Section 5) feel duplicative** — both present package selection       | Two decision points with pillar cards sandwiched between creates decision fatigue | MEDIUM   | Consider reordering: problem -> explore -> guided selection -> how it works -> detailed comparison -> proof -> close |
| 3   | **Three consecutive same-background sections** (Why It Matters -> Wizard -> Pillar Cards) all use `bg-background` | Visual monotony — feels like one endless section, user loses orientation          | HIGH     | Add `bg-primary-50` or a subtle gradient to at least one of these three                                              |
| 4   | **No Bronze package visible** on homepage                                                                         | Budget-conscious NV buyers have no entry point                                    | LOW      | Add "Starting from $625" note or "See all tiers" link                                                                |
| 5   | **"Schedule a consultation" appears 4 times** with inconsistent formatting                                        | Minor but looks sloppy                                                            | LOW      | Standardize to one format everywhere                                                                                 |

---

## 2. UX & INTERACTION

| #   | Issue                                                   | Severity | Details                                                                                                                                                                                                                                |
| --- | ------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **ScrollReveal makes content invisible on fast scroll** | HIGH     | IntersectionObserver with `rootMargin: "0px 0px -60px 0px"` means content at bottom of viewport doesn't trigger. Users who scroll fast or use keyboard see blank sections. Consider reducing the negative margin or adding a fallback. |
| 2   | **#wizard hash link doesn't offset for sticky header**  | MEDIUM   | Clicking "Find Your Package" in the hero scrolls to the wizard section but the sticky header covers the top ~60px of content                                                                                                           |
| 3   | **No skip-to-content link**                             | MEDIUM   | WCAG 2.1 AA requirement for keyboard users                                                                                                                                                                                             |
| 4   | **Testimonials are static, no link to more**            | LOW      | Only 3 visible. Add "View all testimonials ->" link to /testimonials                                                                                                                                                                   |
| 5   | **Trust Ticker has no pause on hover**                  | LOW      | Continuous scroll can't be read. Also a `prefers-reduced-motion` concern                                                                                                                                                               |

---

## 3. UI & VISUAL DESIGN

### What's Working

- Dark/light alternation creates visual rhythm (hero dark -> light sections -> dark differentiators -> light testimonials -> dark CTA)
- Pillar color system (blue/green/amber/purple) used consistently across all sections
- Typography hierarchy clear — display for headings, body for text, mono for prices/stats/tags
- Hero gradient text is distinctive without being gimmicky
- Card hover states are polished (lift + shadow transitions)

### Issues

| #   | Issue                                                                                  | Severity | Fix                                                                                    |
| --- | -------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------- |
| 1   | **Sections 2-4 identical backgrounds**                                                 | HIGH     | Vary backgrounds: Section 2 `bg-background`, Section 3 keep, Section 4 `bg-primary-50` |
| 2   | **`rounded-[28px]` hardcoded** in package cards and testimonial cards (4+ instances)   | MEDIUM   | Use `rounded-card` token or define `rounded-3xl`                                       |
| 3   | **`text-amber-300`** in VS bar — hardcoded Tailwind color                              | MEDIUM   | Replace with `text-accent`                                                             |
| 4   | **Trust Bar visual weight** too thin (40px padding) compared to other sections (128px) | LOW      | Intentional for utility bar — acceptable                                               |

---

## 4. CODE QUALITY & DESIGN SYSTEM INTEGRITY

### CRITICAL — Hardcoded Colors (breaks theme switching)

| #   | File               | Lines   | Issue                                                                                                                                                                                        |
| --- | ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `HomepageHero.tsx` | 141-143 | `rgba(37,99,235,0.16)`, `rgba(147,51,234,0.06)`, `rgba(217,119,6,0.05)` in gradient backgrounds — hardcoded instead of using `var(--secondary)`, `var(--pillar-compliance)`, `var(--accent)` |
| 2   | `HomepageHero.tsx` | 152     | `rgba(12,30,53,0.7)` vignette — hardcoded dark navy                                                                                                                                          |
| 3   | `globals.css`      | 265-273 | `.hero-gradient-text` uses 6 hardcoded hex colors (`#60a5fa`, `#818cf8`, `#c084fc`, `#f0abfc`) — won't adapt to theme changes                                                                |
| 4   | `page.tsx`         | 846-869 | Final CTA orbs use `rgba(37,99,235,0.08)` and `rgba(217,119,6,0.05)` — hardcoded                                                                                                             |

**Impact:** These colors look correct in brand theme but will be wrong in wireframe theme or any future theme.

**Fix:** Extract to CSS custom properties:

```css
--gradient-glow-blue: rgba(37, 99, 235, 0.16);
--gradient-glow-purple: rgba(147, 51, 234, 0.06);
--gradient-glow-amber: rgba(217, 119, 6, 0.05);
```

### CRITICAL — Massive Inline Sections (should be components)

| Section                                               | Lines in page.tsx | Should Be                                                   |
| ----------------------------------------------------- | ----------------- | ----------------------------------------------------------- |
| Differentiators (hero card + 5 cards + VS bar + CTAs) | ~130 lines        | `<DifferentiatorSection>` component + data in homepage.ts   |
| Testimonials (3-column grid with cards)               | ~110 lines        | `<TestimonialGrid>` component + data in homepage.ts         |
| Package Comparison (Silver/Gold cards)                | ~110 lines        | `<PackageComparison>` component using data from packages.ts |
| Trust Bar (5 trust cells)                             | ~60 lines         | `<TrustBar>` component + data in homepage.ts                |
| Final CTA (dark section with pricing)                 | ~80 lines         | `<FinalCTA>` component                                      |

**Impact:** page.tsx is ~900 lines when it should be ~200. All copy is hardcoded in JSX instead of the data layer. Changing a testimonial quote requires editing the page component.

### HIGH — Animation Timing Not Tokenized

| File               | Issue                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `HomepageHero.tsx` | Animation delays calculated with magic numbers: `lineIndex * 250 + segIndex * 120 + 400`. Should use tokens like `--stagger-delay: 120ms`. |
| `HomepageHero.tsx` | Duration `800ms` hardcoded in 8+ places. Design system has `--animate-hero-fade-up` but the inline styles don't use it.                    |

### HIGH — Font Sizes Not Using Type Scale

| File               | Line | Value                                | Should Be                                 |
| ------------------ | ---- | ------------------------------------ | ----------------------------------------- |
| `HomepageHero.tsx` | 191  | `fontSize: "clamp(38px, 5vw, 60px)"` | `text-display-xl` or new responsive token |
| `HomepageHero.tsx` | 220  | `text-[18px]`                        | `text-body-lg`                            |
| `HomepageHero.tsx` | 298  | `text-[28px]`                        | `text-display-sm` or `text-heading-md`    |
| `page.tsx`         | 437  | `text-[72px]`                        | New token `text-display-hero`             |
| `page.tsx`         | 440  | `text-[24px]`                        | `text-heading-md`                         |

### MEDIUM — Inconsistencies

| #   | Issue                                                                                                                                                                                    |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **CTA buttons inconsistent** — some use `<Button asChild>` component, others use raw `<RouterLink>` with manually applied classes. Package section CTAs are raw links styled as buttons. |
| 2   | **Grain texture SVG duplicated 3 times** — hero, differentiators, final CTA all copy-paste the same inline SVG. Should be a shared `<GrainOverlay />` component.                         |
| 3   | **Section header pattern repeated 8 times** — eyebrow + h2 + subtitle with identical class patterns. Should be a `<SectionHeader>` component.                                            |
| 4   | **Dead code** — `differentiatorIcons` map and its Lucide imports are defined but no longer used after the section rewrite. `Icon` import also unused.                                    |
| 5   | **Data/page separation violated** — testimonials, trust signals, and differentiator card data are all hardcoded in JSX instead of imported from data files.                              |

---

## 5. CONTENT & COPY

### What's Working

- Copy is benefit-focused: "Your Name Never Hits Public Records" > "We provide nominee services"
- Specific competitor pricing makes the value prop tangible
- Consistent messaging around the "nominee for a day" differentiator

### Issues

| #   | Issue                                                                                                                                     | Fix                                                                           |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 1   | **Hero says "Wyoming & Nevada specialists"** but the page serves 4 states (WY, NV, CA, FL). The stats bar says "4 states" — inconsistent. | Change hero to "4-state specialists since 2000" or "Wyoming, Nevada & beyond" |
| 2   | **"Chosen by 70% of Clients"** on Gold card — unverified claim                                                                            | Verify with David. If not confirmable, soften to "Most Popular"               |
| 3   | **"$400 more"** upsell text on Silver card — should be dynamically calculated, not hardcoded                                              | Compute from package data: Gold price - Silver price                          |

---

## 6. PRIORITY ACTION ITEMS

### Tier 1: Must Fix Before David Review

1. **Fix "Find Your Package" destination confusion** — differentiate CTA labels
2. **Break up the 3 consecutive same-background sections** — add visual contrast
3. **Remove dead code** (differentiatorIcons, unused imports)
4. **Fix hero copy** — "Wyoming & Nevada" vs "4 states" inconsistency

### Tier 2: Should Fix (Technical Debt)

5. Extract inline sections to components (Differentiators, Testimonials, Packages, Trust Bar, Final CTA)
6. Move hardcoded data to `homepage.ts` (testimonials, trust signals, differentiator cards)
7. Replace hardcoded colors with CSS custom properties (hero gradients, gradient text, CTA orbs)
8. Extract grain texture to shared `<GrainOverlay />` component
9. Create `<SectionHeader>` component for repeated eyebrow+h2+subtitle pattern
10. Use `<Button asChild>` consistently for all CTA-styled links

### Tier 3: Polish

11. Replace `rounded-[28px]` with token
12. Replace `text-amber-300` with `text-accent`
13. Tokenize animation timing (stagger delays, durations)
14. Fix `#wizard` scroll offset for sticky header
15. Add Bronze entry point to homepage
16. Add skip-to-content link (accessibility)

---

_Audit by Ash (BIT Studios) — April 5, 2026_
