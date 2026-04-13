# Incorporate123 Homepage — Full Audit Report v2

**Date:** April 5, 2026 (Session 2)
**Audited by:** Ash (BIT Studios)
**Page:** `http://localhost:2121/` — brand theme at 1664px viewport
**Version:** Post-audit-v1 fixes (component extraction, font-size fix, all 16 items resolved)

---

## Executive Summary

The homepage has improved substantially since audit v1. The ~950-line monolith is now ~300 lines orchestrating 12 extracted components. Font sizes now match the v10 design spec. All 16 v1 issues are resolved.

This audit identifies the **next tier** of issues: storytelling gaps that hurt conversion, UX friction points, remaining design system violations, and mobile responsiveness concerns.

---

## 1. STORYTELLING & CONVERSION FLOW

### Section Order Assessment

Current flow:

1. Hero (problem + credibility)
2. Trust Ticker
3. Why Privacy Matters (education)
4. Package Wizard (guided selection)
5. Pillar Cards (explore)
6. Package Comparison (evaluate)
7. Differentiators (trust)
8. Testimonials (social proof)
9. Trust Bar
10. How It Works (process)
11. Final CTA (close)

### Issues

| #   | Issue                                                                                                                                                                    | Impact                                                                           | Severity | Recommendation                                                                                                                                                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Pillar Cards section feels orphaned** — sits between wizard and packages with no clear conversion purpose. It's an "explore" section in the middle of a "decide" flow. | User gets sent sideways into pillar pages when they should be choosing a package | MEDIUM   | Move pillar cards BEFORE the wizard, so the flow becomes: learn (privacy bridge) → explore (pillars) → decide (wizard) → compare (packages). Or reduce to a compact "Learn More" bar rather than full-height 4-card section. |
| 2   | **No urgency or scarcity cue anywhere** — the page educates and explains but never creates urgency to act now                                                            | Lower conversion — visitors bookmark and leave                                   | MEDIUM   | Consider: "Protect your privacy before your next filing" or a seasonal/time-sensitive hook in the hero or CTA. Even "Get started today" is better than nothing.                                                              |
| 3   | **No social proof before the first CTA** — the hero has stats (25 yrs, 4 states, 365 days) but zero social proof. First testimonial appears 6+ scrolls down.             | Trust gap at the critical first decision point                                   | HIGH     | Add a compact social proof element near the hero CTAs: "Trusted by thousands of business owners" or a single micro-testimonial.                                                                                              |
| 4   | **"Privacy specialists across 4 states" is vague** — doesn't tell the visitor which states or why those states matter                                                    | Missed chance to signal relevance to WY/NV buyers who are 70%+ of the audience   | LOW      | Consider "Wyoming, Nevada, California & Florida — formation specialists since 2000" to be concrete.                                                                                                                          |
| 5   | **Trust Ticker repeats hero messaging** — "25 Years of Expertise", "Year-Round Nominees Included" are both in the stats bar AND the ticker. Feels redundant.             | Minor but makes the ticker feel like noise                                       | LOW      | Replace overlapping items with unique signals: "BBB Rated" (if applicable), "100% US-based team", "No outsourcing"                                                                                                           |

---

## 2. UX & INTERACTION

| #   | Issue                                                                                                                                                                                                                | Severity | Details                                                                                                                                                                                                                                                     |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **ScrollReveal -60px rootMargin still active**                                                                                                                                                                       | HIGH     | `ScrollReveal.tsx:60` — rootMargin `"0px 0px -60px 0px"` means content near the bottom of the viewport stays invisible. Users who scroll fast, use keyboard nav, or use `scrollIntoView()` see blank sections. Reduce to `-20px` or add a timeout fallback. |
| 2   | **Wizard section says "30 seconds" but wizard says "60 Seconds"** — SectionHeader says "Get a personalized recommendation in 30 seconds", the wizard component itself says "Find Your Perfect Package in 60 Seconds" | MEDIUM   | Pick one. 30 seconds is a stronger claim if the wizard can deliver it.                                                                                                                                                                                      |
| 3   | **Only 1 testimonial visible on initial scroll** — the 3-column grid staggers in with ScrollReveal delays. Only Mark T. card appears; the other 2 are invisible until their observer triggers.                       | MEDIUM   | The center (featured) testimonial should appear first/immediately since it's the strongest. Consider reducing or removing the stagger delay for testimonials.                                                                                               |
| 4   | **No "View all testimonials" link visible in current layout**                                                                                                                                                        | LOW      | The `TestimonialGrid` component includes a "View all testimonials →" link but it's below the fold of the testimonial section — easy to miss.                                                                                                                |
| 5   | **Pillar cards animate one at a time on scroll** — with 80ms stagger x 4 cards, the 4th card appears 320ms after the first. On fast scroll, only 1 card is visible in the screenshot.                                | LOW      | Consider showing all 4 simultaneously or with a shorter stagger (40ms).                                                                                                                                                                                     |

---

## 3. VISUAL DESIGN & UI

### What's Working Well

- Typography hierarchy is dramatically improved — hero at 60px, sections at 48px, body sizes proportional
- Dark/light section alternation creates rhythm: dark hero → light education → blue-tint wizard → white pillars → gradient packages → dark differentiators → light testimonials → white trust bar → gradient how-it-works → dark CTA
- Pillar color system (blue/green/amber/purple) used consistently
- Package comparison cards are clean with clear visual hierarchy (Silver secondary, Gold featured with badge)

### Issues

| #   | Issue                                                                                                                                                                                                | Severity | Fix                                                                                                                                                                                                                                                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Testimonials use `border-l-[3px]`** — left border accent is a documented anti-pattern per design rules. V10 design uses `::before` pseudo-element instead.                                         | MEDIUM   | Replace `border-l-[3px]` with `::before` pseudo-element approach matching v10: `position:relative; padding-left:24px` + `::before { content:''; position:absolute; left:0; top:4px; bottom:4px; width:3px; border-radius:3px; background:var(--pillar-color) }` |
| 2   | **VS bar uses `rounded-[20px]`** — hardcoded pixel radius instead of token                                                                                                                           | LOW      | Use `rounded-card-lg` (1.75rem ≈ 28px) or add a `--radius-section: 1.25rem` token for 20px                                                                                                                                                                      |
| 3   | **365 number in hero differentiator card** — uses `type-display-xl` which is correct for size but the font-weight and opacity make it almost invisible. The huge "365" watermark is barely readable. | LOW      | Intentional as decorative element, but could increase opacity from `text-secondary/[0.12]` to `text-secondary/[0.18]` for slightly more presence                                                                                                                |
| 4   | **Hover shadow on differentiator hero card uses hardcoded rgba** — `hover:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.15)]`                                                                               | LOW      | Acceptable for shadow — Tailwind doesn't support CSS vars in box-shadow well. Note for documentation.                                                                                                                                                           |
| 5   | **Stale `src/app/globals.css` file exists** — 447 lines of outdated CSS from the Next.js era. The real CSS is `src/globals.css`.                                                                     | HIGH     | Delete `src/app/globals.css` to prevent confusion. It's already caused one major debugging session this session (editing wrong file).                                                                                                                           |

---

## 4. COPY & CONTENT

### What's Working

- Hero headline is distinctive and benefit-focused: "Your Name Never Hits Public Records"
- Competitor pricing comparison ($400–$5,000 vs $1,275) is the strongest conversion element
- Consistent "nominee for a day" messaging throughout differentiators
- Transparent pricing — exact dollar amounts, no "contact for pricing"

### Issues

| #   | Issue                                                                                                                                                                                                              | Severity | Recommendation                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1   | **"Chosen by 70% of Clients" was changed to "Most Popular"** on Gold badge — verify with David if original stat was accurate. "70% of clients" is a much stronger claim if verifiable.                             | MEDIUM   | Ask David to confirm the 70% stat. If true, restore it — it's a powerful social proof number.                               |
| 2   | **No specific outcome or transformation statement** — the page says WHAT Inc123 does but not what the CLIENT GETS as a result. "Your competitors won't find your name" or "Sleep knowing your assets are shielded" | MEDIUM   | Add an outcome-focused line to the hero or post-hero section                                                                |
| 3   | **"$400 more" upsell on Silver card is hardcoded** — if Gold or Silver pricing changes, this text breaks                                                                                                           | LOW      | Compute dynamically from package data: `Gold price - Silver price`                                                          |
| 4   | **No mention of specific industries or use cases** — who is this for? Real estate investors, e-commerce owners, consultants? The testimonials hint at it but the hero doesn't.                                     | LOW      | Consider adding a line like "Trusted by real estate investors, e-commerce owners, and consultants" to create identification |

---

## 5. DESIGN SYSTEM COMPLIANCE

### Hardcoded Values Remaining

| File                        | Line    | Value                                                  | Should Be                                   |
| --------------------------- | ------- | ------------------------------------------------------ | ------------------------------------------- |
| `DifferentiatorSection.tsx` | 137     | `rounded-[20px]`                                       | Token (`rounded-card-lg` or new)            |
| `DifferentiatorSection.tsx` | 61      | `hover:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.15)]`    | Acceptable (shadow limitation)              |
| `TestimonialGrid.tsx`       | 76      | `border-l-[3px] rounded-[3px]`                         | Replace with `::before` per design rules    |
| `TestimonialGrid.tsx`       | 76      | `leading-[1.85]`                                       | Use design system leading value             |
| `HomepageHero.tsx`          | various | `animationDelay` inline styles                         | Acceptable — dynamic values can't be in CSS |
| `PackageComparison.tsx`     | various | `rounded-card-lg`                                      | Correct — uses token                        |
| `FinalCTA.tsx`              | 30-39   | `width: "60vw"`, `filter: "blur(160px)"` inline styles | Acceptable — decorative orbs                |

### Stale/Duplicate Files

| File                         | Status                                   | Action                 |
| ---------------------------- | ---------------------------------------- | ---------------------- |
| `src/app/globals.css`        | STALE — 447 lines, not imported anywhere | DELETE (move to trash) |
| `src/app/page.backup.tsx`    | Stale backup from pre-archive system     | DELETE (move to trash) |
| `src/app/page.v2-backup.tsx` | Stale backup from pre-archive system     | DELETE (move to trash) |

### Component Architecture

- **page.tsx** — ~300 lines, clean orchestration of 12 components. Good.
- **Data separation** — Testimonials, trust bar, differentiator cards, package comparison all in `homepage.ts`. Good.
- **Shared components** — `SectionHeader`, `GrainOverlay` extracted for reuse. Good.
- **Button consistency** — All CTAs use `<Button asChild>` pattern in extracted components. Good.
- **Import cleanup** — No dead imports in page.tsx. Good.

---

## 6. MOBILE & RESPONSIVENESS

| #   | Issue                                                                                                                                           | Severity | Details                                                                                        |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| 1   | **Hero right visual hidden on mobile** — `hidden lg:block` hides pillar badges, which means mobile users miss the visual reinforcement entirely | LOW      | Acceptable — the badges are supplementary. Mobile layout is clean without them.                |
| 2   | **Package comparison pricing callout in Final CTA** — `inline-flex items-center gap-8` may overflow on small screens                            | MEDIUM   | Needs `flex-wrap` or a stacked layout at small widths. Test at 375px.                          |
| 3   | **VS comparison bar** — `grid-cols-[1fr_auto_1fr]` may become cramped on narrow screens. The $400–$5,000 and $1,275 prices could wrap awkwardly | MEDIUM   | Test at 375px — may need a stacked mobile layout                                               |
| 4   | **Differentiator cards** — `sm:w-[calc(33.333%-11px)]` and `sm:w-[calc(50%-8px)]` use hardcoded calc values                                     | LOW      | Works but is fragile. Consider `grid` with `grid-cols-1 sm:grid-cols-3` instead of flex + calc |

---

## 7. ACCESSIBILITY

| #   | Issue                                                                                                                                                                                                                                                                             | Severity |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| 1   | **Skip-to-content link added** — Good. Correctly implemented.                                                                                                                                                                                                                     | PASS     |
| 2   | **ScrollReveal hides content from screen readers until animation fires** — elements start as `opacity: 0; transform: translateY(1.5rem)` and only become visible on scroll. Screen readers can read them but sighted keyboard users may miss content that hasn't animated in yet. | MEDIUM   |
| 3   | **Star rating SVGs in testimonials have no alt text or aria-label** — purely decorative but assistive tech can't convey "5 stars"                                                                                                                                                 | LOW      |
| 4   | **Trust Ticker has no `role="marquee"` or `aria-live` region** — screen readers don't know this is a scrolling element                                                                                                                                                            | LOW      |

---

## 8. PRIORITY ACTION ITEMS

### Tier 1: Before David Review (Monday)

1. **Delete stale `src/app/globals.css`** — prevents future confusion
2. **Fix "30 seconds" vs "60 seconds" inconsistency** in wizard section

### Tier 2: Conversion Improvements

3. Add compact social proof near hero CTAs (micro-testimonial or "Trusted by thousands")
4. Move pillar cards before wizard (or compact them into a navigation bar)
5. Consider adding urgency element to final CTA

### Tier 3: Polish

6. Replace `border-l-[3px]` on testimonials with `::before` pseudo-element
7. Replace `rounded-[20px]` on VS bar with token
8. Test mobile at 375px for pricing callout overflow
9. Reduce ScrollReveal rootMargin from -60px to -20px
10. Add `aria-label="5 out of 5 stars"` to testimonial star ratings

### Tier 4: Content (needs David input)

11. Confirm "70% of clients choose Gold" stat — restore if verifiable
12. Consider industry-specific social proof in hero
13. Add outcome/transformation statement

---

## 9. CODE AUDIT FINDINGS (from automated code review)

### Spacing Inconsistency

| File              | Issue                                                          | Fix                                      |
| ----------------- | -------------------------------------------------------------- | ---------------------------------------- |
| `FinalCTA.tsx:22` | Uses `py-40` (hardcoded 10rem) instead of `py-section-y` token | Change to `py-section-y` for consistency |

### Contrast Concerns (WCAG AA)

These low-opacity white text values on dark backgrounds may fail WCAG AA (4.5:1 ratio):

| File                        | Element            | Value               | Concern                         |
| --------------------------- | ------------------ | ------------------- | ------------------------------- |
| `HomepageHero.tsx`          | Subheadline        | `text-white/[0.42]` | ~42% white on navy — borderline |
| `HomepageHero.tsx`          | Phone/consultation | `text-white/[0.28]` | ~28% white — likely fails       |
| `DifferentiatorSection.tsx` | Card descriptions  | `text-white/[0.33]` | ~33% white — likely fails       |
| `FinalCTA.tsx`              | Pricing labels     | `text-white/30`     | ~30% white — likely fails       |

**Note:** These match the v10 design intentionally (decorative/secondary text), but should be verified with a contrast checker.

### Data Not Yet Extracted

| File                | Data                                                                                    | Recommendation                                       |
| ------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `HomepageHero.tsx`  | Hero visual badges (Privacy, Formation, Protection) — hardcoded in `HeroVisual()`       | Extract to `homepage.ts` as `heroBadges[]`           |
| `PrivacyBridge.tsx` | Column data (Public Exposure, Lawsuit Targeting, The Solution) — hardcoded in component | Extract to `homepage.ts` as `privacyBridgeColumns[]` |

### Missing Focus States

Hover-only visual feedback on cards — keyboard users get no equivalent:

| Component                   | Effect                   | Fix                                                         |
| --------------------------- | ------------------------ | ----------------------------------------------------------- |
| `DifferentiatorSection.tsx` | `hover:-translate-y-1.5` | Add `focus-within:-translate-y-1.5 focus-within:shadow-...` |
| `TestimonialGrid.tsx`       | `hover:-translate-y-2`   | Same pattern                                                |

### Remaining Hardcoded Pixel Values

| File                   | Value                                   | Note                                     |
| ---------------------- | --------------------------------------- | ---------------------------------------- |
| `HomepageHero.tsx:255` | `rounded-[20px]` on stats bar           | Should use `rounded-card-lg`             |
| `HowItWorks.tsx:95`    | `sm:h-[72px] sm:w-[72px]` circle sizing | Could tokenize as `--size-timeline-node` |
| `HowItWorks.tsx:97`    | `shadow-[0_0_0_8px_var(--surface)]`     | Hardcoded shadow ring                    |
| `HowItWorks.tsx:98`    | `text-[26px]` step number               | Should use `text-heading-lg`             |

### Pattern Note: Arbitrary Opacity Values

The codebase uses 15+ unique `white/[0.XX]` opacity values across dark sections. While each is intentional for visual layering, consider consolidating to a smaller set (e.g., 0.03, 0.05, 0.08, 0.12, 0.25, 0.40, 0.50) to make the system more maintainable.

---

_Audit v2 by Ash (BIT Studios) — April 5, 2026_
