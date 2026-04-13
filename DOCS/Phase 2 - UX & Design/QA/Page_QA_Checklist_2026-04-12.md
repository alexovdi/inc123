# Incorporate123 — Page QA Checklist

**Date:** 2026-04-12
**Author:** Ash (BIT Studios)
**Companion doc:** `QA_Findings_Master_2026-04-12.md` (where these checks come from)

**Purpose:** A reusable checklist for auditing any new page type in `inc123-prototype/` — package pages, state hubs, blog, checkout, about, contact, FAQ, testimonials, offshore pages, 404, or anything new. Encodes lessons learned from the homepage, pillar, and cluster QA iterations.

**How to use:**

1. Work through each section in order.
2. For each item, mark PASS / FAIL / N/A with a one-line note.
3. Any FAIL needs a fix before the page is marked ready for client review.
4. Score the page at the end and add Tier 1 findings to a follow-up issue.

---

## Pre-Flight (before opening a browser)

Confirm the basics before any visual inspection.

- [ ] **Dev server running on port 2121** — `http://localhost:2121` returns HTTP 200.
  - If not: `cd inc123-prototype && npm run dev` and verify.
- [ ] **Page route exists in `src/router.tsx`** — explicit route with `React.lazy()` code splitting.
- [ ] **Page file in the right location** — `src/app/{route}/page.tsx` (kebab-case), or a catch-all renderer.
- [ ] **Data comes from `src/data/`** — not inline in the component. Check the first few hundred lines of the page file.
- [ ] **Uses project layout tokens** — `max-w-content` / `max-w-narrow` / `max-w-wide`, `px-container-x`, `py-section-y`. NOT `max-w-sm` / `max-w-xl` / etc.
- [ ] **No stale backups** — no `page.backup.tsx`, `page.v2-backup.tsx`, `*.old.tsx` alongside the file you're auditing.
- [ ] **Imports use `@/` alias** — `@/design-system/...`, `@/data/...`. No relative `../../` paths beyond necessary.
- [ ] **Component conventions** — every component sets `.displayName`, uses CVA for variants, accepts `className` prop.

---

## Capture & Setup

- [ ] Open `http://localhost:2121{route}` in Playwright/Chrome.
- [ ] Confirm `data-theme="wireframe"` is the default. **This is correct — do not flag it.**
- [ ] Record any console errors or warnings on load (ignore noisy dev warnings; flag real errors).
- [ ] Take full-page screenshots at 3 breakpoints:
  - 1440 × 900 (desktop)
  - 768 × 1024 (tablet)
  - 375 × 812 (mobile)
- [ ] Toggle to brand mode via the "Switch to Brand" pill — take a fourth screenshot at 1440.

---

## Section 1 — Structure & Layout

- [ ] **Section count is reasonable** — not too thin (< 3 sections reads as a stub), not too bloated.
- [ ] **No section is under ~150px tall.** Sub-150px sections read as dividers, not content.
  - If intentionally short (e.g., a horizontal rule, a breadcrumb bar), note and move on.
  - If load-bearing (trust strip, shortcut, callout), it needs to be at least 200–300px.
- [ ] **Section backgrounds alternate.** No two adjacent full-width sections share the same `bg-background` / `bg-primary-50` / `bg-primary`.
  - Intended rhythm: dark → light → tinted → white → gradient → dark.
- [ ] **Conversion funnel section order (for marketing pages)** — roughly:
  1. Hook (hero)
  2. Agitate (problem)
  3. Anchor (quote / framing)
  4. Educate (framework, deep content)
  5. Process (how it works)
  6. Differentiate (why us)
  7. Trust (social proof)
  8. Convert (packages / primary CTA)
  9. Support (FAQ)
  10. Expand (explore / related)
  11. Bridge (cross-pillar)
  12. Close (final CTA)
- [ ] **Page height is reasonable** — desktop roughly 4,500–14,000px depending on page type. Stub page (< 3,500px) or monster page (> 15,000px) needs justification.
- [ ] **No code duplication with existing templates.** If this is a new page in a family (package, state hub, cluster), check if a shared template already exists. Do not copy-paste a 1,000-line page.

---

## Section 2 — Hero

- [ ] **Hero renders instantly — no ScrollReveal wrapping above-the-fold content.** Watch for flash of empty dark space on page load.
- [ ] **H1 is distinctive and benefit-focused.** Does not feel interchangeable with other pages.
- [ ] **Eyebrow label is pillar-colored** (if pillar-aware) via `pillarTextMap[pillar]`.
- [ ] **Hero has at least one primary CTA and one secondary CTA.** Primary = `variant="cta"` amber. Secondary = white outline on dark or ghost on light.
- [ ] **Hero CTA anchors point somewhere real.** `#packages` must have a corresponding `id="packages"` on an unconditionally rendered element.
- [ ] **Hero has a visible pillar accent** (if pillar-aware) — pillar-colored bottom border, tinted glow orb, or side stripe. Switch to brand mode to verify.
- [ ] **Hero has a phone number / schedule link** in muted text beneath the CTAs.
- [ ] **Hero visual (right column) is not blank** on desktop. Could be a card mockup, stat strip, illustration, or meaningful decoration.
- [ ] **Breadcrumbs show real titles**, not hardcoded labels like "Guide" or "Page". Each segment is a real page name or navigable path.
- [ ] **Meta badges (reading time, date, category) render** if applicable. No hardcoded "5 min read" when the content is 80 words — use `resolveReadingTime()`.

---

## Section 3 — Typography & Visual Design

- [ ] **Font hierarchy is intact** — Outfit Variable for display (h1/h2), Inter Variable for body. Sizes via `type-display-*` or `text-heading-*` tokens.
- [ ] **No hardcoded font sizes** like `text-[26px]`, `leading-[1.85]`. Use design system tokens.
- [ ] **No hardcoded pixel radii** like `rounded-[20px]`, `rounded-[3px]`. Use `rounded-card` / `rounded-card-lg` / `rounded-button`.
- [ ] **No hardcoded padding** like `py-40`. Use `py-section-y` / `py-section-y-sm`.
- [ ] **No `border-l-*` accents on cards, menu items, or callouts.** Use `border-t-*` or `::before` pseudo-elements.
- [ ] **Pillar colors render correctly** in brand mode (if pillar-aware). Switch themes — if the page looks identical in both, pillar identity is missing.
- [ ] **Dark sections use low-opacity white text consistently** — watch `text-white/[0.XX]` values under 0.50 (see contrast check below).

---

## Section 4 — Content Quality

- [ ] **No template-string headings with mechanical pillar insertion.** `${pillarLabel} Is the First Layer` will break on 3 of 4 pillars. Each pillar needs its own copy.
- [ ] **Copy numbers are consistent** — "30 seconds" in one place and "60 seconds" in another is a red flag.
- [ ] **Text sections use progressive disclosure** where appropriate — `keyPoints`, `bullets`, `extendedContent`. Single-paragraph sections read as stubs.
- [ ] **Reading time is computed, not hardcoded** — use `resolveReadingTime(cluster)` or equivalent.
- [ ] **No auto-generated boilerplate descriptions** like "Learn more about X and how it relates to Y". Custom copy per item.
- [ ] **No scary or unexplained terms in the hero.** If a term needs context (e.g., "offshore records storage"), introduce it below the fold, not in the hero.
- [ ] **Pull quote attribution is consistent** — "The Incorporate123 Difference" unless there's a specific editorial reason.
- [ ] **Outcome / transformation statement exists.** Tell the visitor what they GET, not just what you do. "Your competitors won't find your name" beats "Nominee Services."
- [ ] **Specific industries or use cases called out** where space allows — real estate investors, e-commerce, consultants.
- [ ] **No "contact for pricing"** — transparent prices everywhere.

---

## Section 5 — Navigation & Cross-Page

- [ ] **Every `href="#foo"` has a corresponding `id="foo"`** on an unconditionally rendered element.
- [ ] **Every cross-pillar bridge shows 2–3 cards, not 1** — use a `md:grid-cols-2 lg:grid-cols-3` grid.
- [ ] **Bridge heading is pillar-specific**, not a template string mechanically inserting the pillar name.
- [ ] **Cross-pillar coverage** — the page links to all 3 other pillars (or at least 2 strongest adjacencies).
- [ ] **Sidebar highlights the current page** with a `current: true` marker if a sidebar exists.
- [ ] **Breadcrumbs show the full path** — Home / Category / Current page.
- [ ] **Footer nav is consistent with the rest of the site** — same 6-column layout, same links.
- [ ] **No broken `<Link>` or `<RouterLink>` imports** — both from `react-router-dom` (for real navigation) or `@/design-system/primitives/Link` (for styled anchors).

---

## Section 6 — Conversion Architecture

- [ ] **Social proof appears before the primary CTA.** Micro-testimonial or "Trusted by thousands" near the hero, OR a full trust strip before the packages section.
- [ ] **Trust element is at least ~300px tall.** Sub-150px trust strips read as dividers.
- [ ] **Differentiators appear within the first ~2,500px of scroll** via a compact strip, not only in a full section at 5,000px.
- [ ] **Inline CTA between content and trust strip** — a mid-page conversion opportunity for readers who finish reading but don't scroll to the bottom.
- [ ] **Pre-packages upsell bridge exists** (for pillar/cluster pages) — primes users toward Gold (with privacy) before they see pricing.
- [ ] **Packages section / primary CTA is reachable from the hero anchor.**
- [ ] **FAQ immediately follows packages.** Catches hesitators.
- [ ] **Urgency cue exists** — time-sensitive or milestone-based framing. "Get started today" beats nothing.
- [ ] **Final CTA is dark and confident** — matches brand voice across the site.
- [ ] **StickyMobileCTA appears on mobile** after scrolling past the hero.

---

## Section 7 — Mobile & Responsiveness

Run these at 375 × 812 after sizing down.

- [ ] **No horizontal scroll** — `document.documentElement.scrollWidth ≤ window.innerWidth + scrollbar width`.
- [ ] **Diagnostic walk for overflow** (if horizontal scroll present):
  ```js
  const walk = (el, depth = 0) => {
    if (el.scrollWidth > el.clientWidth + 2) {
      console.log(
        el.tagName,
        (el.className || "").slice(0, 80),
        el.scrollWidth,
        el.clientWidth,
      );
    }
    Array.from(el.children).forEach((c) => walk(c, depth + 1));
  };
  walk(document.documentElement);
  ```
  Then find the lowest-depth offender and fix it.
- [ ] **No `whitespace-nowrap` on long-form text** that will run over 375px wide on mobile. Usually kills legal disclaimers in footers.
- [ ] **Decorative absolute-positioned elements** (`.blur`, ghost watermarks, glow orbs) live inside `overflow-hidden` containers.
- [ ] **Flex rows with `inline-flex items-center gap-X`** have `flex-wrap` or a stacked mobile fallback.
- [ ] **Grid layouts with `grid-cols-[1fr_auto_1fr]`** become stacked columns on mobile.
- [ ] **No tap target smaller than 44 × 44px** on interactive elements.
- [ ] **Sticky header does not overlap the first section's content** — check hero spacing.
- [ ] **Sticky mobile CTA does not occlude form inputs or the final CTA button.**
- [ ] **No `max-w-sm` / `max-w-xl` / `max-w-2xl`** — use project layout tokens.
- [ ] **Mobile menu works** — hamburger opens drawer, drawer is usable, close button works.
- [ ] **Images and videos are sized and don't cause layout shift.**

---

## Section 8 — Accessibility

- [ ] **Skip-to-content link exists** in the document header.
- [ ] **Every `hover:` effect has a `focus-visible:` equivalent** — keyboard users get the same feedback as mouse users.
- [ ] **WCAG AA contrast check** on key text:
  - Body prose: at least 4.5:1
  - Large display text: at least 3:1
  - Decorative low-opacity text: documented exception if under AA
- [ ] **Low-opacity white text under 0.50** on dark backgrounds is verified with a contrast checker.
- [ ] **Narrative prose uses darker color** than muted captions — `text-foreground/80` for body, `text-muted` only for metadata.
- [ ] **Decorative SVGs** have `aria-hidden="true"`. Meaningful SVGs (logos, star ratings) have `role="img" aria-label="..."`.
- [ ] **`prefers-reduced-motion: reduce` respected** — ScrollReveal disables and content renders instantly for users who opt out.
- [ ] **Keyboard tab order is logical** — not jumping around the page.
- [ ] **Focus is trapped correctly** in modals/drawers.
- [ ] **Form labels are real `<label>` elements** with `htmlFor`, not placeholder-only.
- [ ] **Form errors are announced** — `aria-describedby` on inputs pointing to error messages.
- [ ] **Heading hierarchy is sequential** — one `<h1>`, `<h2>`s under it, no skipping levels.

---

## Section 9 — Design System Compliance

- [ ] **No imports from `src/app/` or `src/data/` inside `src/design-system/`.** Design system is standalone.
- [ ] **Custom CSS is wrapped in `@layer base { }`** — unwrapped CSS causes cascade ordering issues in Tailwind v4.
- [ ] **Pillar color maps imported from `pillarMaps.ts`** — not redefined locally.
- [ ] **No hardcoded hex colors** — reference semantic token names.
- [ ] **No hardcoded shadow values** — use `shadow-card` / `shadow-card-hover` / `shadow-dropdown` / `shadow-tooltip`.
  - Exception: complex decorative shadows may need arbitrary values. Document the reason.
- [ ] **No hardcoded animation timings** outside design tokens — use `animate-fade-in` / `animate-slide-in-right` etc.
- [ ] **Component uses CVA** for variants if it has multiple visual states.
- [ ] **Component accepts `className` prop** for composition.
- [ ] **`cn()` utility** is used for merging Tailwind classes.
- [ ] **`.displayName` is set** on every component.
- [ ] **Types live in `src/lib/types.ts`** — not inline in data files.

---

## Section 10 — Performance & Code Quality

- [ ] **Lazy-loaded routes** — page is imported via `React.lazy(() => import(...))` in `router.tsx`.
- [ ] **No huge inline SVGs** — use `lucide-react` icons or external assets.
- [ ] **Images have explicit `width` and `height`** — prevents layout shift.
- [ ] **No dead imports** in the page file.
- [ ] **No `console.log` left in production code.**
- [ ] **TypeScript passes** — run `npx tsc --noEmit` and filter for the changed files. Pre-existing migration errors are noise; new errors in your file are not.
- [ ] **Build succeeds** — `npm run build` before calling the page done.
- [ ] **No horrifying bundle size increases** — check `dist/` output after build.

---

## Section 11 — AI-Slop Detection

Fail gate: "Would someone immediately identify this as AI-generated?" Flag if 3+ of these are present.

- [ ] Purple-to-blue gradient as primary palette
- [ ] Three equal-width cards in a row with icon + heading + description (recurring)
- [ ] Generic Inter/system font with no typographic hierarchy
- [ ] Only Lucide/Heroicons, no custom or brand icons
- [ ] Buzzwords: "Elevate", "Seamless", "Unleash", "Transform", "Empower"
- [ ] Pure black (#000) text on pure white (#fff) background
- [ ] Perfectly symmetric layout with no intentional asymmetry
- [ ] Stock-photo-style hero with generic overlay text
- [ ] Default shadow/rounded-lg on every card with no variation
- [ ] No micro-interactions or hover states beyond color change
- [ ] Copy is generic and could describe any SaaS product

---

## Section 12 — Final Scoring

Starting score: **100**

| Severity | Deduction | Examples                                                                                                                    |
| -------- | --------- | --------------------------------------------------------------------------------------------------------------------------- |
| Critical | −10 each  | Broken layout, missing content, mobile horizontal scroll, WCAG contrast failure, wrong colors, broken anchor                |
| Major    | −5 each   | Spacing off by >8px, wrong font weight, missing hover/focus state, hardcoded value that should be a token, boilerplate copy |
| Minor    | −2 each   | 1–2px alignment drift, slight color shade difference, minor radius mismatch, missing aria-label on decorative SVG           |

**Thresholds:**

- **90–100:** Ship it.
- **80–89:** Minor fixes needed — can ship after quick pass.
- **70–79:** Significant issues — fix Tier 1 and Tier 2 before client review.
- **Below 70:** Major rework needed — escalate and re-audit after fixes.

---

## Section 13 — Report Template

After the audit, produce a structured report:

```
## Design QA Report

**Date:**
**Page:** /route/name
**Template:** Name (e.g., ClusterPageTemplate)
**Score:** X/100
**Mode:** wireframe (fresh load)
**AI Slop:** PASS / FAIL
**Rounds:** N (how many fix iterations)

### 13-Point Checklist Results
| Dimension | Status | Notes |
|---|---|---|
| Structure & Layout | PASS/FAIL | ... |
| Hero | PASS/FAIL | ... |
| Typography & Visual | PASS/FAIL | ... |
| Content Quality | PASS/FAIL | ... |
| Navigation | PASS/FAIL | ... |
| Conversion | PASS/FAIL | ... |
| Mobile | PASS/FAIL | ... |
| Accessibility | PASS/FAIL | ... |
| Design System | PASS/FAIL | ... |
| Performance | PASS/FAIL | ... |
| AI Slop | PASS/FAIL | ... |

### Issues Found
- [Critical] ... (file:line)
- [Major] ... (file:line)
- [Minor] ... (file:line)

### Changes Made (if iterated)
- Round 1: ...
- Round 2: ...

### Outstanding Work
- Tier 1 (ship blockers): ...
- Tier 2 (conversion): ...
- Tier 3 (polish): ...
```

Save as `DOCS/Phase 2 - UX & Design/{PageName}_Audit_{YYYY-MM-DD}.md`.

---

## Inc123-Specific Gotchas (memorize these)

Short list of the traps this project has already fallen into. Check these first.

1. **Wireframe is the default theme.** Do not flag it. Toggle to brand only for pillar color checks.
2. **`data-theme` toggle is visible in the bottom-right.** Kept intentionally. Do not hide.
3. **`max-w-sm` / `max-w-xl` / `max-w-2xl` are banned** — use project layout tokens.
4. **`border-l-*` is banned on cards / callouts / menu items** — use `border-t-*` or `::before`.
5. **`whitespace-nowrap` on long text is a mobile horizontal-scroll bomb** — especially in footers.
6. **Decorative abs-positioned elements need `overflow-hidden` on their positioned ancestor** — always.
7. **`ScrollReveal` must NOT wrap above-the-fold hero content** — causes flash of empty space.
8. **Inline data in page files is a migration debt** — move to `src/data/`.
9. **Four pillar pages are copy-pasted 1,000+ line files** — editing one means editing all four. Lobby for a shared template.
10. **`${pillar} Is the First Layer` style template strings** only make sense for Privacy — pillar-specific copy required.
11. **Cross-pillar bridges should show 2–3 cards, not 1** — the data layer should be `items[]`, not a single object.
12. **Every internal anchor needs a matching `id`** on an unconditionally rendered element. Conditional rendering breaks hero CTAs.
13. **Hardcoded reading times lie.** Use `resolveReadingTime()`.
14. **Pillar color maps live in `src/design-system/utils/pillarMaps.ts`** — import, don't redefine.
15. **Any section under ~150px tall reads as a divider.** Either expand or remove.
16. **Two adjacent same-background sections create a visual wall.** Alternate.
17. **Stale `src/app/globals.css` exists from Next.js era** — real CSS is `src/globals.css`. Delete the fake.
18. **Prefer grid over flex+calc for card layouts** — calc math is fragile.
19. **Long-form narrative prose should use `text-foreground/80`, not `text-muted`** — muted is for metadata.
20. **`prefers-reduced-motion` should disable ScrollReveal entirely.**

---

## Quick-Start Commands

```bash
# Start dev server on port 2121
cd inc123-prototype && npm run dev

# Typecheck (expect pre-existing errors from Next.js migration)
cd inc123-prototype && npx tsc --noEmit 2>&1 | grep -E "your-file-here"

# Build
cd inc123-prototype && npm run build

# E2E smoke tests (50+ route HTTP 200 checks)
cd inc123-prototype && npx playwright test tests/e2e/routes.spec.ts

# Theme toggle
# Runtime: document.documentElement.setAttribute('data-theme', 'brand' | 'wireframe')

# Playwright audit helpers (Chrome DevTools console)
# 1. Check for horizontal scroll at current size
document.documentElement.scrollWidth > window.innerWidth

# 2. Find overflow offender
const walk = (el, depth = 0) => {
  if (el.scrollWidth > el.clientWidth + 2) {
    console.log(depth, el.tagName, (el.className || '').slice(0,80), el.scrollWidth, el.clientWidth);
  }
  Array.from(el.children).forEach(c => walk(c, depth + 1));
};
walk(document.documentElement);

# 3. Measure section heights
Array.from(document.querySelectorAll('main section')).forEach(s => console.log(s.className.slice(0,40), Math.round(s.getBoundingClientRect().height)));

# 4. Check pillar color on an accent
getComputedStyle(document.querySelector('section')).borderBottomColor

# 5. Find every hardcoded arbitrary value
// Search your source for these patterns:
// rounded-\[ | text-\[ | w-\[ | h-\[ | leading-\[ | py-\[ | px-\[
```

---

_Checklist by Ash (BIT Studios) — 2026-04-12._
_For the list of findings this checklist was derived from, see `QA_Findings_Master_2026-04-12.md`._
