# Packages QA Report — 2026-04-14

**Scope:** /packages, /compare-packages, and all 8 package detail pages (WY/NV Bronze/Silver/Gold, CA Private, FL Private) at 1440×900 desktop and 375×812 mobile.
**Dev server:** http://localhost:2121 · wireframe theme
**Method:** Playwright-driven viewport screenshots + DOM measurements for button wrap, card height, text-node wrapping, price data.
**Commit reviewed:** `8c576e9` (tier/state-gated upgrades + read-only preview).

Screenshots in `audit/qa/` — filenames in findings below reference them.

---

## Severity scale

- **🔴 HIGH** — incorrect data, broken logic, misleading copy, visibly broken layout
- **🟠 MEDIUM** — awkward spacing, alignment/height mismatches, inconsistent density
- **🟡 LOW** — polish, typography rhythm, nice-to-have refinements

---

## 🔴 HIGH severity

### H1. Decision-guide copy is semantically inverted on the pricing grid

**Where:** `src/data/tierContent.ts` lines 42–85, 79–85, 160–220, 250–320. Rendered via `TierPageClient.tsx` line 258–262.
**What:** Each tier's `decisionGuide` is keyed by the viewer's current-page tier. `bronzeContent.decisionGuide.gold` literally reads: _"You want your name off public filings — year round, not just at formation. Gold is the only tier that adds nominee directors, managers, and officers."_ That text is displayed **on the Bronze card** when the user is on the Gold page.
**Effect:** The Bronze card visually claims to deliver Gold features — year-round nominees. This is wrong and misleading.
**Evidence:** `audit/qa/m04-wygold-grid.png`, `audit/qa/03c-wygold-context.png`.
**Root cause:** the decisionGuide was written as "why _you_ chose Gold" copy, but the UI renders it as the Bronze card's description.
**Fix:** Rewrite every `decisionGuide[key]` entry to describe the **card tier**, tuned to who's looking. E.g. `bronzeContent.decisionGuide.gold = "If year-round nominees are overkill for this entity — say, a holding co that will never be listed publicly — Bronze saves you $650 and still includes all compliance work."`

### H2. CA Private and FL Private pages brand as "Gold"

**Where:** `TierPageClient.tsx` + `tierContent.ts` gold-tier content used for both CA/FL.
**Evidence:** `audit/qa/06a-caprivate-hero.png`.

- H1: `"California Gold LLC"` — should be `"California Private LLC"`
- Eyebrow: `"Privacy tier — Silver + Year-Round Nominees"` — wrong and confusing; says Silver on a Gold-tier package
- Hero badge: `"CA · Gold"` — should be `"CA · Private"`
- Breadcrumb: "Gold Package" — should be "California Private" or "Private Package"
  **Fix:** CA Private / FL Private are their own package identities (per David Apr 13: "pre-bundled convenience packages"). Give them dedicated `tierContent.ts` entries with Private-branded eyebrows, taglines, promise headings, and H1. `TierPageClient` should prefer `content.packageName` over `${tier.name} ${entityType}` when present.

### H3. Package detail pricing grid shows feature-dump cards, not decision cards

**Where:** `TierPageClient.tsx` section 5, uses `PricingGrid` with full feature arrays.
**What:** The "Why Gold? How it compares" section header promises "choose this if" logic but each card actually renders ~10–13 features via `getTierFeaturesForState`, making them look like the feature comparison table (which belongs on `/compare-packages`). Cards are ~850–900px tall.
**Evidence:** `audit/qa/03d-wygold-grid.png`.
**Fix:** Decision grid should render only the card description + top 3 _differentiators_ + price + CTA. Not the full feature list. For feature comparison, link to `/compare-packages`.

### H4. "Most Popular" badge creates a 42px card-height mismatch

**Where:** `PricingGrid` tier cards — Gold card is 891px, Bronze/Silver 849px (measured on /wyoming-gold desktop).
**Effect:** The three cards don't align at the top; Gold is shifted down because the badge sits above it inside the card flow instead of overlapping the top edge.
**Fix:** Position the "Most Popular" badge absolutely, overlapping the top edge of the card (translate-Y -50%). Then all three cards share the same top and the badge is visually emphatic without eating card height.

---

## 🟠 MEDIUM severity

### M1. Upgrades preview grid looks unbalanced with 1 or 3 items

**Where:** `UpgradesPreview.tsx` uses `grid-cols-1 md:grid-cols-2`.
**What:**

- WY Gold/WY Bronze/WY Silver have **3 government filings** — render 2 cards on row 1, 1 orphan on row 2. Visually lopsided.
- WY Bronze has **1 service upgrade** (Privacy only) — single card in a 2-col grid with huge blank to the right.
  **Evidence:** `audit/qa/03g-wygold-upgrades.png`, `audit/qa/04d-wybronze-upgrades2.png`.
  **Fix:**

1. Gov filings group: always `md:grid-cols-3` (three items is the canonical case).
2. Service upgrades group: count-aware columns — 1 → `max-w-narrow mx-auto` (no grid), 2 → `md:grid-cols-2`, 3+ → `md:grid-cols-2 lg:grid-cols-3`.

### M2. "Find Your Package →" wraps to 2 lines in the global header

**Where:** Header nav button — measured 174×40 with "→" orphan.
**Evidence:** DOM measurements; `audit/qa/03a-wygold-hero.png` top-right.
**Fix:** Either `whitespace-nowrap` + tighter padding, or drop the arrow on the header variant and keep it only on page-level CTAs.

### M3. Disabled state chips show `(Gold)` suffix on package detail pages

**Where:** `PackageHero.tsx` state selector — disabled CA/FL chips read `"CA · California (Gold)"` cramped.
**Evidence:** `audit/qa/04a-wybronze-hero.png`.
**Fix:** Two options — (a) drop the `(Gold)` text, use visual disabled state + tooltip saying "Available in Gold tier only"; (b) ship the state selector as a single row WY/NV only when viewing Bronze/Silver (hide CA/FL since they're Gold-only anyway). I recommend (b) — disabled chips you can't click are friction.

### M4. Eight-column feature comparison table is visually sparse

**Where:** `/compare-packages` Feature Comparison table.
**Evidence:** `audit/qa/02c-compare-1600.png`.
**What:** Feature column eats most of the table; check columns are narrow and right-aligned, leaving a big empty middle. Rows have low visual hierarchy — the section headers ("FORMATION", "COMPLIANCE", etc.) blend into feature rows.
**Fix:** Center the check columns, widen them, add alternating row shading, strengthen section header rows (uppercase + background tint + divider).

### M5. `$X/yr renewal · no hidden fees` microcopy is cluttered in hero

**Where:** `PackageHero.tsx` under big price.
**What:** Line stacks "Formation · one-time" + "$525/yr renewal · no hidden fees" in a dense monospace caption. Reads like ingredient list.
**Fix:** Single line, clean typography — e.g. "One-time · $525/yr after year 1".

### M6. Theme toggle "Switch to Brand" overlaps page content on mobile

**Where:** Global theme toggle floating button.
**Evidence:** `audit/qa/m05-wygold-upgrades.png`, `audit/qa/m07-hub-states.png`, `audit/qa/m03-wygold-pricing.png`.
**What:** On 375px mobile the button sits in the viewport over text/cards, not in a safe corner. It overlaps How-It-Works step copy and the sticky CTA bar.
**Fix:** Move to top of the viewport, or hide behind a small icon that expands on tap, or add viewport padding so it sits above the sticky CTA.

### M7. Nevada Silver/Gold pricing placeholders produce odd user experience

**Where:** `packages.ts` NV Silver LLC = $1,275, NV Gold LLC = $1,800, WY Silver LLC = $875, WY Gold LLC = $1,275.
**What:** NV Silver price ($1,275) equals WY Gold price ($1,275) — creates confusion when users compare. Noted in code header as "placeholder pending David's Apr 20 confirmation."
**Fix:** Flag for David's Apr 20 pricing confirmation. Not a code issue, but copy "Pricing TBD · Apr 20 check-in" should land on screen so David doesn't see numbers during review.

---

## 🟡 LOW severity

### L1. `Configure at checkout →` footnote in UpgradesPreview fights for attention

**Where:** `UpgradesPreview.tsx` bottom flex bar.
**What:** A gray caption with a right-aligned link. Low contrast, feels disclaimer-ish. The page already has a primary CTA; this footer doesn't add much.
**Fix:** Either promote to a proper pill/button (`Review at checkout →`) with clear color, or drop it entirely — the section header already says "selected at checkout."

### L2. Pricing grid "Order Now" button styling inconsistent across tiers

**Where:** `PricingGrid` cards.
**What:** Non-highlighted cards get white button with dark text; highlighted card gets dark filled button. Works, but the non-highlighted cards' buttons look like secondary actions when they're actually the primary CTA for those tiers.
**Fix:** All three buttons use the same style, differentiate the highlighted card by border/shadow only.

### L3. "Starting From" row on /compare-packages is cramped

**Where:** `/compare-packages` bottom of table.
**Evidence:** `audit/qa/02d-compare-2400.png`.
**What:** Prices + "View ..." buttons squeezed in the last row, inconsistent type size with rest of table.
**Fix:** Promote to its own sticky-styled footer row with more padding, bigger price, consistent button width.

### L4. Tier promise section "The Promise / Built for" ratio and spacing

**Where:** Section 3 in `TierPageClient.tsx`. Two-column grid with promise heading left, "Built for" list right.
**Evidence:** `audit/qa/03b-wygold-promise.png`.
**What:** Layout is fine but right column (tinted card) reads as more important than the left. The prose on the left could use more breathing room and a stronger serif-vs-sans contrast.
**Fix:** Increase gap from `gap-20` to fixed 96px, left-pad the promise body so it aligns with the heading's optical left edge, tighten list spacing.

### L5. Audience list cards on promise section wrap awkwardly

**Where:** `content.audience` list — 4 bullets in a rounded card.
**What:** Check-icon + text bullets; the check icons are on baseline but text wraps to 2 lines, so icon appears centered against odd whitespace.
**Fix:** Fixed line-height, align icon to first line using flexbox baseline.

### L6. "Ready to Get Started?" final CTA stacks buttons vertically

**Where:** `PillarFinalCTA` / final CTA on /packages hub.
**Evidence:** `audit/qa/01f-packages-hub-4200.png`.
**What:** Two buttons stacked vertically on a horizontal dark banner — feels cramped. Could be side-by-side at desktop width.
**Fix:** `flex-row md:flex-col lg:flex-row` with a minimum button width.

### L7. Hero trust stats caption typography

**Where:** `PackageHero.tsx` trustStats prop — 3-icon row ("25+ years in business" / "All-inclusive pricing" / "Money-back guarantee") under the CTA.
**What:** Icons + labels are fine but the line "Prefer to talk? **Call 1-800-553-0615** · Schedule a consultation" below is visually a third button of sorts. Breaks the hero rhythm.
**Fix:** Move that line to the trust strip (section 2) or demote further down the page.

### L8. `"See all 13 features"` toggle on mobile pricing grid card

**Where:** `PricingGrid` mobile view.
**Evidence:** `audit/qa/m04-wygold-grid.png`.
**What:** Implementation shows "See all 13 features ▾" which implies hidden content but it's just the same list already shown on desktop. Also the number is tier-dependent and hardcoded feeling.
**Fix:** Either replace with "Full feature list →" linking to /compare-packages, or make the count dynamic.

### L9. Cross-link cards ("Go Deeper" section) aspect ratio and hover

**Where:** Section 12 `TierPageClient.tsx`.
**Evidence:** `audit/qa/03k-wygold-crosslinks.png`.
**What:** Three cards with Pillar/Guide/Comparison eyebrows. Vertical rhythm is fine but title wrapping is inconsistent (2 vs 3 lines), making cards look unequal.
**Fix:** Fixed min-height on title block (`min-h-[3.5rem]`), ensure description trims to 2 lines max with line-clamp.

### L10. "Switch to Brand" theme toggle label

**Where:** Theme toggle floating button, top-right or bottom-right on mobile.
**What:** On the wireframe theme it says "Switch to Brand"; clicking flips to brand theme. The text feels dev-mode-ish for what should be a polished site.
**Fix:** Confirm with Alex — is this intentional dev-mode UI only visible locally, or does it ship? Per MEMORY.md `data-theme="wireframe"` is the intentional default, so this toggle is dev-only and should be hidden or moved to a settings corner.

---

## Prioritized fix plan

### Phase 1 — Correctness (commit 1, ~2 hours)

1. **H1** — Rewrite every `decisionGuide[key]` entry in `tierContent.ts` to describe the card tier from the viewer's perspective. 9 entries total (3 tiers × 3 viewer contexts).
2. **H2** — Add dedicated `caPrivate` and `flPrivate` entries to `tierContent.ts` with Private-branded eyebrows, promise, tagline, package name. Update `TierPageClient` to resolve content by `getPrivatePackageContent(state, tier)` for CA/FL, falling back to tier content otherwise.
3. **M7** — Add "Pricing subject to Apr 20 confirmation" banner above price on every package page (remove after Apr 20 meeting).

### Phase 2 — Layout hygiene (commit 2, ~2 hours)

4. **H3** — Slim the pricing grid cards on detail pages. Render only description + price + CTA + 3 differentiators (not full feature list). Add "See all features →" linking to /compare-packages.
5. **H4** — Position "Most Popular" badge absolutely (translate-Y -50%) so cards match heights.
6. **M1** — Fix UpgradesPreview grid columns per group count (1/2/3/3+).
7. **M2** — `whitespace-nowrap` + shorter header variant for "Find Your Package" nav button.
8. **M3** — Hide CA/FL chips on Bronze/Silver pages entirely, or replace disabled "(Gold)" label with a Gold badge + tooltip.
9. **M5** — Tighten hero price microcopy to one line.
10. **L1** — Remove or upgrade the UpgradesPreview footer link.

### Phase 3 — Polish (commit 3, ~2 hours)

11. **M4** — /compare-packages table: center check columns, alternating rows, stronger section headers.
12. **L2** — Unified CTA button style across PricingGrid cards.
13. **L3** — Promote Starting From row on /compare-packages.
14. **L4, L5** — Tier promise section rhythm + audience bullet alignment.
15. **L6** — Final CTA buttons side-by-side at desktop.
16. **L7** — Move "Prefer to talk?" caption out of hero.
17. **L8, L9** — Mobile pricing card "See all" + cross-link card min-height.

### Phase 4 — Mobile overlap (commit 4, 30 min)

18. **M6** — Theme toggle position / hide on mobile. Depends on Alex's answer to L10.

### Out of scope (flag for David)

- **M7** NV pricing placeholder — awaits David's Apr 20 pricing confirmation.
- **L10** Theme toggle visibility — confirm dev-only vs public.

---

## Total effort estimate

~6–7 hours of focused work for Phases 1–3, plus 30 min for Phase 4. Phases 1 and 2 can ship as their own commits so David sees correctness fixes immediately.
