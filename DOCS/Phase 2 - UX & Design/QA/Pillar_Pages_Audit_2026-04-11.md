# Pillar Pages Audit Report

**Date:** 2026-04-11
**Auditor:** Ash (AI Engineer)
**Scope:** All 4 pillar pages — Privacy, Asset Protection, Formation, Compliance
**Method:** Code analysis (section structure, data, styling) + browser visual inspection on `localhost:2121`

---

## Table of Contents

1. [Section Inventory](#1-section-inventory)
2. [Structural Findings](#2-structural-findings)
3. [Content Findings](#3-content-findings)
4. [Visual Findings](#4-visual-findings)
5. [Section Order Analysis](#5-section-order-analysis)
6. [Pillar-Specific Section Rationale](#6-pillar-specific-section-rationale)
7. [Improvements Plan](#7-improvements-plan)

---

## 1. Section Inventory

### Side-by-Side Comparison

| #   | Privacy                   | Asset Protection                  | Formation                     | Compliance                     |
| --- | ------------------------- | --------------------------------- | ----------------------------- | ------------------------------ |
| 0   | **Hero** (852px)          | **Hero** (825px)                  | **Hero** (789px)              | **Hero** (852px)               |
| 1   | Problem (849px)           | _Distinction_ (697px)             | _Quick-Path Shortcut_ (107px) | _Philosophy_ (646px)           |
| 2   | Pull Quote (421px)        | Problem/Risk (849px)              | Problem (953px)               | Problem (927px)                |
| 3   | Three Layers (1462px)     | _Wyoming Advantage quote_ (473px) | Pull Quote (421px)            | Pull Quote (421px)             |
| 4   | How It Works (1330px)     | Three Pillars (1569px)            | _Two Decisions_ (672px)       | Four Pillars (1878px)          |
| 5   | Differentiators (1168px)  | _State Comparison_ (731px)        | Formation Steps (1491px)      | How It Works (1386px)          |
| 6   | Social Proof Strip (86px) | How It Works (1330px)             | _State Comparison_ (707px)    | _Already Have Entity?_ (660px) |
| 7   | Packages (1113px)         | Differentiators (1164px)          | How It Works (1386px)         | Differentiators (1190px)       |
| 8   | FAQ (743px)               | Social Proof Strip (86px)         | Differentiators (1190px)      | Social Proof Strip (86px)      |
| 9   | Explore (906px)           | Packages (1113px)                 | Social Proof Strip (86px)     | _Renewal Inclusions_ (706px)   |
| 10  | Cross-Pillar (516px)      | FAQ (627px)                       | _Privacy Upsell_ (474px)      | Packages (1113px)              |
| 11  | Final CTA (345px)         | Explore (906px)                   | Packages (1113px)             | FAQ (685px)                    |
| 12  | —                         | Cross-Pillar (564px)              | FAQ (976px)                   | Explore (1119px)               |
| 13  | —                         | Final CTA                         | Explore (977px)               | Cross-Pillar                   |
| 14  | —                         | —                                 | Cross-Pillar                  | Final CTA                      |
| 15  | —                         | —                                 | Final CTA                     | —                              |

_Italic_ = pillar-specific section (unique to that pillar)

### Summary Stats

| Metric          | Privacy   | Asset Protection | Formation | Compliance |
| --------------- | --------- | ---------------- | --------- | ---------- |
| Section count   | 12        | 14               | 16        | 15         |
| Page height     | ~10,600px | ~12,200px        | ~13,400px | ~13,000px  |
| Lines of code   | 1,034     | 1,213            | 1,342     | 1,293      |
| Unique sections | 0         | 2                | 4         | 3          |

### Shared Section Template (appears on all 4 pillars)

These sections share identical structural patterns across all pages, differing only in data:

1. Hero (editorial split layout, dark bg, breadcrumb + H1 + CTAs + stats strip)
2. Problem/Risk (asymmetric grid, sticky left heading + right threat cards)
3. Pull Quote (dark bg, large blockquote with attribution)
4. Educational Framework (numbered editorial blocks — "Three Layers" / "Three Pillars" / etc.)
5. How It Works (SectionHeader + HowItWorks component + CTA)
6. Differentiators (dark bg, 1 featured card + 5 grid cards)
7. Social Proof Strip (trust badge icons row)
8. Packages (PackageComparison component)
9. FAQ (split layout, sticky left header + right accordion)
10. Explore / Continue Learning (3-column service cards + 2-column state guides/comparisons)
11. Cross-Pillar Bridge (centered header + CrossPillarCTA cards)
12. Final CTA (dark bg, statement + stacked action buttons)

### Pillar-Specific Sections (unique to one pillar)

| Pillar           | Section                        | Purpose                                             |
| ---------------- | ------------------------------ | --------------------------------------------------- |
| Asset Protection | "The Distinction" (S1)         | Clarifies Privacy vs. Asset Protection confusion    |
| Asset Protection | "State Comparison" (S5)        | WY vs. NV comparison table for AP                   |
| Formation        | "Quick-Path Shortcut" (S1)     | Express lane for informed buyers                    |
| Formation        | "Two Decisions" (S4)           | Entity type + state decision framework              |
| Formation        | "State Comparison" (S6)        | WY vs. NV formation cost comparison                 |
| Formation        | "Privacy Upsell Bridge" (S10)  | Cross-sell to Gold/Privacy before packages          |
| Compliance       | "Philosophy" (S1)              | "Minimum necessary compliance" positioning          |
| Compliance       | "Already Have an Entity?" (S6) | Retention path for existing entity owners           |
| Compliance       | "Renewal Inclusions" (S9)      | Value-add showing what's included in annual renewal |

---

## 2. Structural Findings

### CRITICAL

**F1: No shared template — massive code duplication**
Each pillar page is a standalone 1,034-1,342 line file. The 12 shared section patterns are copy-pasted across all 4 pages with only data swapped. Any design change to a shared section (e.g., FAQ layout, Final CTA structure) requires editing 4 files and hoping they stay in sync.

- Privacy: `src/app/privacy/page.tsx` (1,034 lines)
- Asset: `src/app/asset-protection/page.tsx` (1,213 lines)
- Formation: `src/app/formation/page.tsx` (1,342 lines)
- Compliance: `src/app/compliance/page.tsx` (1,293 lines)

**F2: Social Proof Strip is near-invisible (86px on all pages)**
At only 86px tall — the smallest section on every single page — the trust badges ("25 Years Trusted", "Dedicated Account Team", "Crypto Accepted", "Talk to Real Humans", "30-Day Money Back") are barely a visual blip. They appear between the ~1,168px Differentiators section and the ~1,113px Packages section. At this size, the trust signal is functionally invisible.

**F3: Hardcoded data inside page components**
All static data arrays (`THREAT_CARDS`, `LAYER_BLOCKS`, `PROCESS_STEPS`, `DIFFERENTIATORS_SMALL`, `EXPLORE_SERVICES`, `EXPLORE_STATES`, `EXPLORE_COMPARISONS`, etc.) are defined inline at the bottom of each page file. Per project convention (`CLAUDE.md`), data should live in `src/data/`.

### HIGH

**F4: ScrollReveal causes hero content flash on page load**
The hero H1, body text, CTAs, and stats strip are wrapped in `ScrollReveal delay={100}` and `ScrollReveal delay={300}`. On initial page load, the hero area shows only the breadcrumb ("Home / Business Privacy") for 100-300ms on a large dark background while the animation triggers. The rest of the content fades in after. This creates a jarring flash of mostly-empty dark space.

Root cause: `ScrollReveal` uses `IntersectionObserver` with initial `opacity: 0`. Hero content is above the fold and should render instantly.

**F5: Page lengths vary 30%+ across pillars**
Privacy is ~10,600px. Formation is ~13,400px. While variation is partly justified by pillar-specific sections, the scrolling experience differs significantly across pillars. Users navigating between pillars encounter inconsistent page depths.

**F6: Background rhythm breaks create visual "walls"**
Adjacent sections sharing the same background color lose visual separation:

| Page       | Sections                                  | Both using      |
| ---------- | ----------------------------------------- | --------------- |
| Privacy    | Explore (S9) → Cross-Pillar (S10)         | `bg-background` |
| Formation  | Two Decisions (S4) → Formation Steps (S5) | `bg-background` |
| Compliance | Explore (S12) → Cross-Pillar (S13)        | `bg-background` |

The intended dark/light alternation pattern (`bg-primary` → `bg-background` → `bg-primary-50` → `bg-background`) breaks when two light sections end up adjacent.

### MEDIUM

**F7: Inconsistent anchor link targets**
The hero "How It Works" secondary CTA uses different anchor targets across pages:

- Privacy: `href="#framework"` — points to the Three Layers section (has `id="framework"`)
- Asset: `href="#framework"` — same
- Formation: `href="#how-it-works"` — different target, but no matching `id` attribute found
- Compliance: `href="#how-it-works"` — same issue

Formation and Compliance's anchor links may not scroll anywhere.

**F8: Cross-pillar bridge count varies without clear rationale**

- Privacy → 2 pillars (Asset + Compliance)
- Asset → 3 pillars (Privacy + Formation + Compliance)
- Formation → 1 upsell bridge (Privacy) + cross-pillar section
- Compliance → 3 pillars (Privacy + Asset + Formation)

Privacy notably excludes Formation from its cross-pillar bridge, despite Formation being a primary entry point for many privacy prospects.

**F9: Explore section heading is generic across all pillars**
All 4 pillars use "Continue Learning" as the H2. The eyebrow labels vary ("State Guides" vs "Entity Type Guides" vs "State-Specific Compliance") but the main heading is identical. Missed opportunity for pillar-specific framing that reinforces the pillar's educational narrative.

---

## 3. Content Findings

### Strengths

**Hero value propositions are strong and differentiated:**

- Privacy: "Business Privacy Starts Before Anyone Knows Your Name." — intrigue, fear of exposure
- Asset: "Protect What You've Built." — emotional, fear of loss
- Formation: "Expert Formation, All-Inclusive." — practical, fear of hidden fees
- Compliance: "Keep Your Entity in Good Standing. We Handle the Paperwork." — relief, fear of complexity

Each H1 speaks to a distinct visitor intent. No two heroes feel interchangeable.

**Problem sections use specific, concrete threats:**
Not generic pain points. Privacy names lawsuit targeting, competitive exposure, personal safety, identity/fraud risk. Asset Protection opens with "$30K-$100K lawsuit defense costs." Formation addresses "$0 formation" competitor traps. This specificity builds real urgency.

**Educational framework sections are the strongest content:**
The "Three Layers" / "Three Pillars" / "Four Pillars" sections with numbered editorial blocks, key distinctions, and cluster page links are authoritative and differentiated. They demonstrate deep expertise that commodity competitors can't match.

**Formation Privacy Upsell is well-crafted:**
"70% of Our Clients Add Privacy to Their Formation" is a powerful social proof + upsell narrative placed right before packages. Smart conversion architecture.

### Issues

**C1: Privacy hero mentions "offshore records storage" without context**
The hero paragraph reads: "Keep your ownership off public records with year-round nominee services, anonymous entity formation, and offshore records storage." First-time visitors haven't yet learned what offshore records storage means. The term could trigger alarm rather than trust at this early point.

**Recommendation:** Replace with a benefit-oriented phrase (e.g., "protected document custody") and let the Three Layers section explain the offshore detail.

**C2: Pull quote attribution is inconsistent**
Three pillars use "The Incorporate123 Difference" as the pull quote footer label. Asset Protection uses "The Wyoming Advantage." This breaks the pattern without clear justification — the Asset quote isn't specifically about Wyoming.

**C3: Formation Quick-Path Shortcut is too small to function**
At 107px, this is barely a single line of content. The spec identifies it as important for "informed buyers who know what they want" — users who arrive ready to buy and don't want to scroll through 13,000px of education. Its current size makes it functionally invisible.

**C4: Differentiator content is buried too deep**
The strongest "why us vs. them" content (featured differentiator card + 5-card grid) appears at section position 5-8 depending on the pillar — roughly 5,000px down the page. Bounce-prone users who leave before scrolling that far never see Inc123's most compelling selling points.

**C5: No imagery below the hero on any pillar page**
All visual interest below the fold comes from layout, typography, and Lucide icon-based cards. For pages that are 10,000-13,000px long, this creates visual monotony. No photos, illustrations, diagrams, or graphics appear anywhere after the hero visual.

---

## 4. Visual Findings

**V1: Wireframe mode loads by default — pillar color identity is invisible**
Pages load in wireframe theme (all greys). The pillar-specific color system (Privacy blue, Asset green, Formation amber, Compliance purple) only appears after clicking "Switch to Brand." David's first impression reviewing pages is monochrome — losing the pillar identity system entirely.

**V2: Hero right-column visual is strong on Privacy but needs verification on others**
Privacy features a custom filing card mockup showing "Member/Manager: Nominee Protected", "Registered Agent: Incorporate123", "Records Location: Offshore Custodian", "Filing Status: Active — Nominees in place 365 days." This is a concrete visualization of the service. Other pillars should have equally specific hero visuals.

**V3: Stats strip executes well**
The 3-stat bar at the bottom of each hero provides instant credibility:

- Privacy: 25 yrs | 4 states | 365 days nominee protection
- Asset: (pillar-specific stats)
- Formation: (pillar-specific stats)
- Compliance: (pillar-specific stats)

Good use of quantified trust signals above the fold.

**V4: Dark/light section alternation creates good visual rhythm (when it works)**
The pattern of `bg-primary` (dark) → `bg-background` (light) → `bg-primary-50` (tinted) → `bg-background` creates effective visual pacing. When the pattern holds, each section feels distinct. See F6 for where it breaks.

**V5: Card hover states are consistent and polished**
Threat cards, Explore cards, and feature cards all use `hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300`. The subtle lift effect is consistent across all pillar pages.

---

## 5. Section Order Analysis

### Current Narrative Arc

Using Privacy as the baseline, the section order follows this conversion funnel:

```
Position:  1       2        3        4          5         6              7        8         9       10       11           12
Role:      HOOK    AGITATE  ANCHOR   EDUCATE    PROCESS   DIFFERENTIATE  TRUST    CONVERT   SUPPORT EXPAND   BRIDGE       CLOSE
Section:   Hero    Problem  Quote    3 Layers   How It    Differentiators Social   Packages  FAQ     Explore  Cross-       Final
                                                Works                    Proof                               Pillar       CTA
```

### Why This Order Works

**1. Hero → Problem (positions 1-2)**
The hero establishes the value proposition; the Problem section immediately answers "why should I care?" by naming specific threats. This is the classic hook-then-agitate pattern. Users need to feel the pain before wanting the solution.

Placing Problem anywhere else (e.g., after education) would weaken urgency — by then, the user is in learning mode, not feeling mode.

**2. Pull Quote (position 3)**
Creates a visual breathing point between the emotional Problem section and the analytical Education section. The quote ("365 days a year") doubles as a differentiator disguised as a narrative beat. Good palate cleanser that maintains momentum.

**3. Educational Framework (position 4)**
The longest section by design (~1,400-1,800px). This is where Inc123 builds authority and establishes expertise. Positioned after the Problem section so users understand WHY they need education. Before How It Works so they understand WHAT before HOW.

Moving education earlier (before Problem) would lose the urgency that drives reading. Moving it later (after How It Works) would make the process feel premature — "here's how we do it" before "here's what it involves."

**4. How It Works (position 5)**
Reduces anxiety by making the journey tangible ("4 steps"). Correctly placed after education (they know what, now they learn how) and before differentiators (process builds confidence before the competitive sell).

**5. Differentiators (position 6)**
"Why us vs. them." Placed after process because by now the user trusts the knowledge and understands the steps — they're ready to hear why Inc123 specifically. If placed earlier, it would feel like a sales pitch before earning credibility.

**6. Social Proof Strip → Packages (positions 7-8)**
Trust reinforcement immediately before the conversion ask. Users who've read this far are ready to compare options — the trust badges provide final reassurance before the pricing table.

**7. FAQ (position 9)**
Catches users who hesitated at packages. Answers remaining objections. Correctly placed immediately after packages — it's the "safety net" for users who are close but need one more answer.

**8. Explore → Cross-Pillar → Final CTA (positions 10-12)**
Post-conversion territory. Users who scroll past packages either need more information (Explore), have needs spanning multiple pillars (Cross-Pillar), or need one final nudge (Final CTA). This sequence handles all three exit scenarios in the right priority order.

### Where the Order Could Be Improved

**Issue A: Social Proof Strip is too late AND too weak**
At position 7 (of 12), trust signals appear after 5,000+ px of scrolling. At 86px, they're functionally invisible. Trust signals are most effective at two points:

- **(a) Right after Problem** — establishes credibility before education ("you can trust what we're about to teach you")
- **(b) Right before Packages** — reduces conversion anxiety ("you can trust us with your money")

The current placement targets (b) but fails due to size.

**Recommendation:** Either expand the Social Proof Strip significantly (add testimonials, case study snippet, client count — minimum 300px) and keep it at position 7, OR add a secondary trust element after the Problem section (position 2.5).

**Issue B: Key differentiators should surface earlier**
The strongest "why us" content is at position 6 (~5,000px down). Most visitors won't scroll that far. The education and process sections (positions 4-5) are valuable but long — they create a 2,800px gap between the Pull Quote and the sell.

**Recommendation:** Add a compact "Key Differentiators" strip (3 icons + one-liners) after the Pull Quote at position 3.5. Keep the full Differentiators section where it is for deep-scroll users. This surfaces "why us" at ~2,200px instead of ~5,000px.

**Issue C: Formation's upsell bridge placement is smart — other pillars should learn from it**
Formation places "70% of Our Clients Add Privacy" right before Packages. This primes the user to consider Gold (with privacy) rather than Bronze/Silver. This is well-placed conversion architecture.

Other pillars could benefit from similar pre-packages bridges:

- Asset Protection → "Combine with Privacy for complete protection"
- Compliance → "Most clients pair compliance with formation"
- Privacy → already the lead pillar, but could bridge to "Add Asset Protection"

---

## 6. Pillar-Specific Section Rationale

### Asset Protection: "The Distinction" (S1)

**Placement: Correct.**
Many visitors arrive on the Asset Protection page confused about the difference between Privacy and Asset Protection. Addressing this immediately (right after hero, before anything else) prevents bounce from wrong-page syndrome. If placed later, confused visitors would have already left.

This is the most justified pillar-specific section across all 4 pages.

### Asset Protection: "State Comparison" (S5)

**Placement: Correct.**
After the educational framework (Three Pillars), a state comparison lets users apply what they learned to their specific situation. Placed before How It Works so users choose their state conceptually before seeing the process.

### Formation: "Quick-Path Shortcut" (S1)

**Placement: Correct in concept. Needs execution improvement.**
Informed buyers who arrive knowing they want a Wyoming LLC should not be forced through 13,000px of education. The shortcut at S1 serves this audience. However, at 107px it's too small to function as a real escape hatch. Needs to be a visually distinct callout (200-300px minimum) with direct links to package comparison or checkout.

### Formation: "Two Decisions" (S4)

**Placement: Correct.**
After understanding the problem (formation surprises/hidden fees), the user needs a framework for their decision. "Entity Type + State — Everything Else Is Handled" simplifies the overwhelming choice set into two manageable decisions. Positioned before the detailed Formation Steps education so users have a mental model first.

### Formation: "Privacy Upsell Bridge" (S10, before Packages)

**Placement: Correct and strategic.**
"70% of Our Clients Add Privacy" creates social proof for the Gold upgrade right before users see pricing. This is well-placed conversion architecture that drives Silver-to-Gold conversion. The spec targets 40%+ upgrade rate from this section.

### Compliance: "Philosophy" (S1)

**Placement: Correct.**
"Minimum Necessary Compliance. Maximum Protection." is a counter-positioning statement. It establishes Inc123's approach as practical rather than bureaucratic — important because compliance services are often perceived as unnecessary overhead. Placing this early frames everything that follows through a "minimum necessary" lens.

### Compliance: "Already Have an Entity?" (S6)

**Placement: Mixed.**
This section targets a completely different audience segment — existing entity owners seeking compliance services — than the page's primary audience of new prospects. Current placement after How It Works (S5) forces existing owners to scroll through 5 sections of new-prospect content before reaching their call-to-action.

**Alternative consideration:** Move to the hero area as a secondary CTA or a distinct callout after the breadcrumb (similar to Formation's Quick-Path). This would serve existing owners immediately without disrupting the new-prospect flow.

### Compliance: "Renewal Inclusions" (S9, before Packages)

**Placement: Correct.**
Shows the ongoing value of the compliance service (what's included in annual renewal) right before the pricing table. This is a "value stacking" technique — the user sees all the included benefits, then sees the price. Similar strategic role to Formation's Privacy Upsell Bridge.

---

## 7. Improvements Plan

### Priority 1 — Bugs & UX Issues (Fix Now)

| #   | Fix                                                                                          | Impact                                     | Effort | Files                                     |
| --- | -------------------------------------------------------------------------------------------- | ------------------------------------------ | ------ | ----------------------------------------- |
| 1   | Remove `ScrollReveal` from hero content — render H1, body, CTAs instantly                    | Eliminates content flash on page load      | Small  | 4x `page.tsx`                             |
| 2   | Fix anchor link inconsistency — standardize to `#how-it-works` with matching `id` attributes | Fixes broken scroll-to navigation          | Small  | 4x `page.tsx`                             |
| 3   | Fix adjacent same-background sections — alternate `bg-background` / `bg-primary-50`          | Eliminates visual "walls" between sections | Small  | Privacy, Formation, Compliance `page.tsx` |

### Priority 2 — Design Quality (Before Client Review)

| #   | Improvement                                                                                                 | Impact                                                 | Effort | Files                                 |
| --- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------ | ------------------------------------- |
| 4   | Expand Social Proof Strip to ~300px — add client count, testimonial snippet, trust badges with descriptions | Turns invisible strip into credible trust section      | Medium | 4x `page.tsx` or new shared component |
| 5   | Enlarge Formation Quick-Path Shortcut — add package links, make visually distinct                           | Catches informed buyers who are ready to convert       | Small  | `formation/page.tsx`                  |
| 6   | Add compact "Key Differentiators" strip after Pull Quote                                                    | Surfaces "why us" at ~2,200px instead of ~5,000px      | Medium | 4x `page.tsx`                         |
| 7   | Standardize Pull Quote attribution to "The Incorporate123 Difference"                                       | Brand consistency across pillars                       | Tiny   | `asset-protection/page.tsx`           |
| 8   | Move Compliance "Already Have an Entity?" to hero-area callout                                              | Serves existing-entity audience without forcing scroll | Medium | `compliance/page.tsx`                 |

### Priority 3 — Architecture (Maintenance & Scalability)

| #   | Improvement                                                                                                                                                                                    | Impact                                                               | Effort | Files                          |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------ | ------------------------------ |
| 9   | Extract shared section patterns into reusable components (PillarHero, ProblemSection, PullQuote, DifferentiatorGrid, SocialProofStrip, PillarFAQ, ExploreSection, CrossPillarBridge, FinalCTA) | Reduces 4x duplication — each page shrinks from ~1,100 to ~300 lines | Large  | New components + 4x `page.tsx` |
| 10  | Move inline data arrays to `src/data/pillar-content.ts`                                                                                                                                        | Follows project convention, enables data reuse                       | Medium | New data file + 4x `page.tsx`  |
| 11  | Set brand theme as default (or persist last selection to localStorage)                                                                                                                         | David sees pillar colors on first page load                          | Small  | Theme toggle logic             |

### Priority 4 — Content Enhancement (Next Iteration)

| #   | Improvement                                                                                    | Impact                                               | Effort | Files                                              |
| --- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------ | -------------------------------------------------- |
| 12  | Revise Privacy hero sub-copy — replace "offshore records storage" with benefit-oriented phrase | Removes potential alarm for first-time visitors      | Tiny   | `privacy/page.tsx`                                 |
| 13  | Add pillar-specific Explore headings (not generic "Continue Learning")                         | Better content framing per pillar                    | Tiny   | 4x `page.tsx`                                      |
| 14  | Add Privacy cross-pillar link to Formation (currently only links to Asset + Compliance)        | Captures Formation → Privacy upgrade prospects       | Tiny   | `privacy/page.tsx`                                 |
| 15  | Add at least one image/illustration per page below the hero                                    | Breaks visual monotony on 10k-13k px pages           | Medium | 4x `page.tsx` + assets                             |
| 16  | Add pre-packages upsell bridges to Asset and Compliance (like Formation's Privacy Upsell)      | Drives cross-pillar upgrades before conversion point | Medium | `asset-protection/page.tsx`, `compliance/page.tsx` |

---

## Appendix: File References

| File                                                 | Purpose                                             |
| ---------------------------------------------------- | --------------------------------------------------- |
| `src/app/privacy/page.tsx`                           | Privacy pillar page (1,034 lines)                   |
| `src/app/asset-protection/page.tsx`                  | Asset Protection pillar page (1,213 lines)          |
| `src/app/formation/page.tsx`                         | Formation pillar page (1,342 lines)                 |
| `src/app/compliance/page.tsx`                        | Compliance pillar page (1,293 lines)                |
| `src/data/pillars.ts`                                | Pillar metadata (colors, icons, services, clusters) |
| `src/data/faq.ts`                                    | FAQ data filtered by pillar category                |
| `src/design-system/primitives/ScrollReveal.tsx`      | Scroll animation component (root cause of F4)       |
| `src/design-system/components/PackageComparison.tsx` | Shared packages/pricing table                       |
| `src/design-system/components/HowItWorks.tsx`        | Shared process steps component                      |
| `src/design-system/components/CrossPillarCTA.tsx`    | Cross-pillar navigation cards                       |
| `src/design-system/components/SectionHeader.tsx`     | Reusable section header                             |
| `src/design-system/utils/pillarMaps.ts`              | Pillar color/styling maps                           |
| `src/globals.css`                                    | Theme variables (wireframe + brand)                 |

### Spec Documents Referenced

| Document                      | Location                                                                                                                           |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Privacy Pillar Wireframe Spec | `DOCS/Phase 2 - UX & Design/Wireframes Page Specs/Incorporate123_Privacy_Pillar_Wireframe_Spec.md`                                 |
| Asset Protection Page Spec    | `DOCS/Phase 2 - UX & Design/Page Specifications/Enchanced New Specs/Incorporate123_Asset_Protection_Pillar_Page_Specification.md`  |
| Formation Page Spec           | `DOCS/Phase 2 - UX & Design/Page Specifications/Enchanced New Specs/Incorporate123_Company_Formation_Pillar_Page_Specification.md` |
| Compliance Page Spec          | `DOCS/Phase 2 - UX & Design/Page Specifications/Enchanced New Specs/Incorporate123_Compliance_Pillar_Page_Specification.md`        |
| Pillar Page v10 Blueprint     | `DOCS/Phase 2 - UX & Design/Page Specifications/06a_Pillar_Page_v10_Blueprint.md`                                                  |
| Homepage Audit v2             | `DOCS/Phase 2 - UX & Design/Homepage_Audit_v2_2026-04-05.md`                                                                       |
