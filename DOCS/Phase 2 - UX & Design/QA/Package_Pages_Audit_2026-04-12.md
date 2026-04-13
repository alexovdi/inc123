# Incorporate123 — Package Pages Design QA Audit

**Date:** 2026-04-12
**Auditor:** Ash (BIT Studios)
**Scope:** `/packages`, `/bronze`, `/silver`, `/gold`, `/compare-packages`, `PackagePageClient.tsx` (dynamic), `PackageLayout`, `PackageHero`
**Modes tested:** wireframe + brand, desktop 1440 × 900 + mobile 375 × 812
**Companion docs:**

- `QA_Findings_Master_2026-04-12.md` — master findings from homepage/pillar/cluster audits
- `Page_QA_Checklist_2026-04-12.md` — reusable checklist used for this audit

---

## Executive Summary

After the package pages redesign pass (matching homepage/pillar/cluster hero language), a follow-up audit surfaced **3 critical**, **6 major**, and **6 minor** issues. The redesign successfully brought `/packages`, `/bronze`, `/silver`, `/gold` into visual consistency with the rest of the site, but:

- `/compare-packages` was missed and still uses the old flat hero + `CTABlock` close
- Tier pages have a **duplicate H2** because the new `SectionHeader` wraps an `AddOnConfigurator` that already renders its own `<h2>`
- `ThemeToggle` and `StickyMobileCTA` collide on mobile — both fixed at `z-40` in the bottom-right
- `PackagePageClient.tsx` (~350 lines) and the stale `packages: PackageTier[]` array in `packages.ts` are dead code — never imported, never rendered
- `/packages` hero is missing dual CTAs + phone safety net, breaking the dark-hero pattern at the landing page of the funnel

**Raw deduction:** −72. **Clamped score:** **72/100**. Fix Tier 1 + Tier 2 before next client review. Target after fixes: 92+/100.

**AI-slop detection:** PASS — Outfit/Inter hierarchy, pillar-tinted glow, real content, no gradient abuse.

---

## 13-Point Checklist Results

| #   | Dimension           | Status     | Notes                                                                            |
| --- | ------------------- | ---------- | -------------------------------------------------------------------------------- |
| 1   | Structure & Layout  | ⚠️ PARTIAL | `/compare-packages` not redesigned; `/packages` Compare CTA card disrupts rhythm |
| 2   | Typography          | ✅ PASS    | Outfit/Inter tokens consistent; no arbitrary `text-[Xpx]`                        |
| 3   | Colors              | ✅ PASS    | All tokens; pillar accents render correctly in brand mode                        |
| 4   | Spacing             | ✅ PASS    | `py-section-y-sm`, `max-w-content`, `px-container-x` used throughout             |
| 5   | Sizing              | ⚠️ PARTIAL | Shelf card `max-w-[420px]` stranded on desktop                                   |
| 6   | Borders & Corners   | ✅ PASS    | `border-b-4 border-b-secondary` accent; `rounded-card-lg`                        |
| 7   | Shadows & Effects   | ✅ PASS    | `GrainOverlay` + blur glow consistent with cluster/pillar                        |
| 8   | Interactive States  | ⚠️ PARTIAL | Disabled state chips lack `aria-label` / `aria-disabled`                         |
| 9   | Icons & Images      | ✅ PASS    | Lucide via `<Icon>`; no missing alt                                              |
| 10  | Responsive          | ⚠️ PARTIAL | No page-level h-scroll; but tap targets fail 44×44 on mobile                     |
| 11  | Overflow & Clipping | ✅ PASS    | Hero glow orbs clipped by `overflow-hidden`                                      |
| 12  | Z-index & Stacking  | ❌ FAIL    | ThemeToggle overlaps StickyMobileCTA — both `z-40`                               |
| 13  | Transitions         | ✅ PASS    | No `ScrollReveal` wraps above-the-fold hero                                      |

---

## Findings by Severity

### 🔴 Critical (−10 each)

#### C1. `/compare-packages` was missed in the redesign pass

**Location:** `src/app/compare-packages/page.tsx:41`

The hero is still the old flat `<section className="bg-primary text-white py-section-y px-container-x">` with no `GrainOverlay`, no glow orbs, no breadcrumb, no eyebrow, no pillar accent border, no phone line. Final CTA uses `CTABlock` instead of `PillarFinalCTA`. This page is prominently linked from `/packages` and `/bronze|silver|gold` hero secondary CTA — the moment a user clicks "Compare Packages" they land on a visually inconsistent page.

**Fix:** Apply the same treatment as `/packages` — dark hero with GrainOverlay + glow orbs + breadcrumb + eyebrow + dual CTAs + phone line, alternating section backgrounds, `PillarFinalCTA` close.

#### C2. Duplicate `<h2>` on every tier page

**Location:** `TierPageClient.tsx` (new `SectionHeader`) + `AddOnConfigurator.tsx:125`

`TierPageClient` wraps `AddOnConfigurator` in a `SectionHeader title="Configure Your Package"`, but `AddOnConfigurator` renders its own `<h2>Customize Your Package</h2>` internally. Result: two sibling `<h2>` elements stacked — "Configure Your Package" then "Customize Your Package" — same meaning, different copy. Heading audit on `/gold` confirms both. Same issue exists in `PackagePageClient.tsx`.

**Fix:** Remove the outer `SectionHeader` wrapper around `AddOnConfigurator` (component owns its own heading). Optionally rename AddOnConfigurator's internal h2 to "Configure Your Package" for consistency. Same fix applies to `PackagePageClient.tsx` if it's kept.

#### C3. ThemeToggle overlaps StickyMobileCTA on mobile

**Location:** `ThemeToggle.tsx` (fixed `bottom-4 right-4 z-40`) vs `StickyMobileCTA.tsx` (fixed `bottom-0 … z-40`)

Measured at 375px on `/silver`:

- StickyMobileCTA bar: top 747 → bottom 812 (65px tall)
- ThemeToggle button: top 776 → bottom 804 → **inside the sticky bar**

Both `z-40`, so the toggle sits on top of the sticky CTA and occludes its right ~140px. Site-wide but acute on package pages because every tier page relies on the sticky CTA for mobile conversion.

**Fix:** Lift `ThemeToggle` to `bottom-20 sm:bottom-4` (20 = 80px, clear of the 65px sticky CTA on mobile) OR raise to `z-50`.

---

### 🟠 Major (−5 each)

#### M1. `PackagePageClient.tsx` is dead code

**Location:** `src/app/[...slug]/PackagePageClient.tsx` (~350 lines) + stale `packages: PackageTier[]` array in `src/data/packages.ts`

`[...slug]/page.tsx:82` switches on `cluster`/`comparison`/`state` only — no `package` case. `slug-registry.ts:30` `PageEntry` type has no `package` variant. Nothing imports `PackagePageClient`. The redesign work done on it is never rendered.

**Fix:** Delete `PackagePageClient.tsx`, delete `packages: PackageTier[]` export from `packages.ts`, delete `PackageTier` type if unused elsewhere. Current tier-pages + state-selector architecture is the direction — revisit when/if David asks for state-specific package URLs.

#### M2. Bronze tier data includes Wyoming, contradicting package strategy

**Location:** `src/data/packages.ts` `tierDefinitions` Bronze entry

Bronze's `availableStates` contains Wyoming. Per MEMORY.md: "Bronze = basic formation + compliance" and the package strategy meeting notes imply Bronze is Nevada-only (Wyoming-default is for Silver/Gold tiers which include privacy/nominee). The rendered `/bronze` defaults to "Wyoming Bronze LLC" which is semantically wrong.

**Fix:** Remove `"Wyoming"` from Bronze's `availableStates`. If product direction has changed, update MEMORY.md instead. Flag for David in next review.

#### M3. `/packages` hero missing dual CTAs

**Location:** `src/app/packages/page.tsx` hero section

Every pillar/cluster hero has primary (amber `variant="cta"`) + secondary (white outline) CTA pair. `/packages` hero has only the `EntityTypeToggle` and trust stats — no action buttons. Users see a hero with no primary action. The design family's CTA pattern is broken on the landing page of the family.

**Fix:** Add "Find Your Package" (scrolls to state selector) + "Compare Packages" (links to `/compare-packages`) dual-CTA pair.

#### M4. `/packages` hero missing phone / consultation safety net

Every other dark hero ends with "Prefer to talk? Call 1-800-… · Schedule a consultation." `/packages` doesn't.

**Fix:** Copy the line from `PackageHero.tsx`.

#### M5. Mobile tap targets below 44×44

Measured at 375px on `/gold`:

| Element               | Size              | WCAG 2.2 Target                        |
| --------------------- | ----------------- | -------------------------------------- |
| State selector chips  | 57 × **38**       | Fails AAA (44×44), tight on AA (24×24) |
| Hero breadcrumb links | 39–64 × **17–21** | Fails AA minimum (24×24)               |

**Fix:**

- State chips: `py-2` → `py-2.5` + `min-h-[44px]`
- Breadcrumb anchors: wrap in `inline-block py-2` or similar to expand hit area

#### M6. `/compare-packages` uses `CTABlock` for the close

Already counted under C1 but worth separating: the "Need Help Choosing?" dark card should be `PillarFinalCTA` for parity.

---

### 🟡 Minor (−2 each)

#### m1. `/packages` has no `SocialProofStrip`

Tier pages show it between Configure and FAQ. The index doesn't. Missing social proof is a conversion gap on the landing page of the funnel.

#### m2. Shelf Company card stranded on desktop

`max-w-[420px]` card centered inside a `max-w-content` section leaves ~1000px of empty whitespace left/right at 1440. Should either span 2-card layout (Shelf + Custom Request), match tier-card width, or the section should narrow to `max-w-narrow`.

#### m3. Compare CTA card on `/packages` breaks section rhythm

It's a 361px card-in-section that reads as "section that is really just a card." Should merge into the preceding Shelf Companies section or become a richer section with `SectionHeader`.

#### m4. Disabled state chips have no `aria-label`

**Location:** `PackageHero.tsx` state selector

Button text is "CA (N/A)" which screen readers read as "CA open paren N slash A close paren". Should be `aria-label="California — not available for this package"`.

#### m5. `PackageHero` default eyebrow "Formation Package" is mildly wrong

When a consumer forgets to pass `eyebrow`, it says "Formation Package" — fine for formation packages but misleading for Shelf or future products. Either require the prop or remove the default.

#### m6. No `StickyMobileCTA` on `/packages` index

Tier pages have it; the landing page doesn't. Mobile users who scroll past the hero have no persistent entry point into the funnel.

---

## Score Calculation

| Severity | Count          | Deduction |
| -------- | -------------- | --------- |
| Critical | 3 (C1, C2, C3) | −30       |
| Major    | 6 (M1–M6)      | −30       |
| Minor    | 6 (m1–m6)      | −12       |
| **Raw**  |                | **−72**   |

**Final: 72/100 — Tier 1 and Tier 2 must be fixed before client review.**

---

## Fix Plan

### Tier 1 — Ship blockers

| #   | Item                                                                     | File(s)                                                           | Effort |
| --- | ------------------------------------------------------------------------ | ----------------------------------------------------------------- | ------ |
| 1   | Redesign `/compare-packages` hero to match `/packages`                   | `src/app/compare-packages/page.tsx`                               | 30 min |
| 2   | Swap `CTABlock` → `PillarFinalCTA` on `/compare-packages`                | `src/app/compare-packages/page.tsx`                               | 5 min  |
| 3   | Fix duplicate H2 — drop `SectionHeader` wrapper around AddOnConfigurator | `TierPageClient.tsx`, `PackagePageClient.tsx` (if kept)           | 20 min |
| 4   | Lift `ThemeToggle` above `StickyMobileCTA` on mobile                     | `ThemeToggle.tsx`                                                 | 10 min |
| 5   | Delete `PackagePageClient` + stale `packages` array                      | `src/app/[...slug]/PackagePageClient.tsx`, `src/data/packages.ts` | 20 min |
| 6   | Remove Wyoming from Bronze `availableStates`                             | `src/data/packages.ts`                                            | 5 min  |

### Tier 2 — Hero consistency & conversion

| #   | Item                                                         | File(s)                     | Effort |
| --- | ------------------------------------------------------------ | --------------------------- | ------ |
| 7   | Add dual CTAs to `/packages` hero                            | `src/app/packages/page.tsx` | 15 min |
| 8   | Add phone/consultation safety net to `/packages` hero        | `src/app/packages/page.tsx` | 5 min  |
| 9   | Add `SocialProofStrip` to `/packages` index                  | `src/app/packages/page.tsx` | 10 min |
| 10  | Add `StickyMobileCTA` to `/packages` index                   | `src/app/packages/page.tsx` | 15 min |
| 11  | Bump state-chip + breadcrumb tap targets to ≥ 44px on mobile | `PackageHero.tsx`           | 15 min |

### Tier 3 — Polish & a11y

| #   | Item                                                          | File(s)                     | Effort |
| --- | ------------------------------------------------------------- | --------------------------- | ------ |
| 12  | Restructure `/packages` Compare CTA + Shelf sections          | `src/app/packages/page.tsx` | 30 min |
| 13  | Add `aria-label` + `aria-disabled` to unavailable state chips | `PackageHero.tsx`           | 5 min  |
| 14  | Make `eyebrow` required in `PackageHero` props                | `PackageHero.tsx`           | 5 min  |

---

## Execution Notes

- **Bronze Wyoming decision (M2):** Audit takes the "Bronze is NV-only" position based on MEMORY.md. If David wants Bronze to exist in Wyoming, revert this data change and update MEMORY.md.
- **PackagePageClient deletion (M1):** Moved to trash under `~/.claude/trash/` per project file-deletion policy — recoverable.
- **Re-audit:** After Tier 1 + Tier 2, re-run the checklist, re-score, target 92+/100.

---

_Audit compiled by Ash (BIT Studios) — 2026-04-12._
