# Incorporate123 — Master QA Findings & Solutions

**Date:** 2026-04-12
**Compiler:** Ash (BIT Studios)
**Sources consolidated:**

- `Homepage_Audit_v2_2026-04-05.md` (Homepage, post-v1 fixes)
- `Pillar_Pages_Audit_2026-04-11.md` (all 4 pillar pages)
- `Cluster_Pages_Audit_2026-04-11.md` (all 30 cluster pages, template-level)
- Cluster pages QA iteration 2026-04-12 (6 template-level fixes applied and committed as `51a8fec`)

**Purpose:** Extract every finding from the QA iterations on homepage, pillar, and cluster pages into one place. Group by root cause, not by page. Surface the patterns that should inform every future page audit.

---

## Executive Summary

Across three separate QA passes on the homepage, 4 pillar pages, and 30 cluster pages, most findings fall into **nine recurring categories**. Many individual "bugs" on separate pages share a single root cause — for example, the cluster template's mobile horizontal scroll and the homepage Final CTA pricing callout overflow are both downstream of the same class of issue: decorative/abs-positioned elements escaping their containers, or text with `whitespace-nowrap` forcing intrinsic min-width beyond the viewport.

The checklist in `Page_QA_Checklist_2026-04-12.md` turns each recurring category into a repeatable check so future pages (package pages, state hubs, blog, checkout) can be audited against the same criteria.

---

## 1. Theme & Defaults

### 1.1 Wireframe is the intentional default theme — do not flag it

Per Alex's explicit preference (`feedback_wireframe_default_theme.md`), `data-theme="wireframe"` is the default on every fresh page load. The "Switch to Brand" toggle stays visible so David can toggle for color-identity comparison.

**What to watch for:** Past audits (pillar pages, cluster pages) flagged "wireframe loads by default" as a finding. **This is not a bug.** Future audits should test in wireframe mode first, then toggle to brand only to verify pillar colors / accents.

**Do NOT:**

- Edit `index.html` to set `data-theme="brand"` as default
- Hide the `ThemeToggle` component
- Re-raise this as a finding

### 1.2 ScrollReveal causes content flash and blank sections

**Finding (multiple audits):** `ScrollReveal` uses `IntersectionObserver` with `opacity: 0; transform: translateY(1.5rem)` and `rootMargin: "0px 0px -60px 0px"`.

- **Homepage v2:** content near the bottom of the viewport stays invisible for fast scrollers, keyboard nav, or `scrollIntoView()` users.
- **Pillar pages:** hero H1/body/CTAs are wrapped in `ScrollReveal delay={100/300}`. On page load, hero shows only the breadcrumb for 100–300ms on a large dark background — a "flash of mostly-empty dark space."

**Solution:**

- Never wrap hero content (above-the-fold) in `ScrollReveal`.
- Reduce `rootMargin` from `-60px` to `-20px` or `0px`.
- Add a timeout fallback (e.g., force-reveal after 600ms) so fast scrollers and assistive tech always see content.
- Accessibility: keep the reveal CSS-only or add a `prefers-reduced-motion` fallback that shows content instantly.

---

## 2. Pillar Color Identity

### 2.1 Hero & accent colors must differentiate pillars (cluster fix 2026-04-12)

**Finding (cluster audit 2026-04-11 + session fix 2026-04-12):** `ClusterHero.tsx` used `bg-primary` (navy) on all clusters regardless of pillar. Every pillar looked identical in brand mode. The original decorative glow orb used only 0.08 opacity, so the pillar-tinted accent was invisible.

**Applied fix (commit `51a8fec`):**

1. Added a 4px pillar-colored bottom stripe via new `pillarBorderBottomMap` in `ClusterHero.tsx`.
2. Added a second tinted glow orb on the opposite side.
3. Bumped glow opacity from `0.08` → `0.18`.

**Result:** privacy=blue `#2563eb`, asset=green `#16a34a`, formation=amber `#d97706`, compliance=purple `#9333ea` are now visible on every cluster hero.

### 2.2 Pillar color maps are duplicated across 20+ components

**Finding:** Per `inc123-prototype/CLAUDE.md`, pillar color maps (`pillarBorderTopMap`, `pillarTextMap`, `pillarSoftBgMap`, etc.) were duplicated across Card, Button, Badge, Breadcrumbs, ClusterHero. A consolidation pass extracted them to `src/design-system/utils/pillarMaps.ts`.

**What to watch for:** When building new pillar-aware components, import from `pillarMaps.ts`. Do not redefine local maps.

---

## 3. Structural & Layout

### 3.1 Massive code duplication across "template" pages

**Finding (pillar audit):** Each pillar page is a 1,034–1,342 line standalone file. 12 shared section patterns are copy-pasted across all 4 pillars with only data swapped. Any design change to a shared section requires editing 4 files in sync.

**Finding (cluster audit):** In contrast, 30 cluster pages share a single `ClusterPageTemplate.tsx` (404 lines). The cluster architecture is the model — one template, data-driven, data-inherited pillar color.

**Solution direction:** Extract pillar pages into a shared `PillarPageTemplate` with data in `src/data/pillar-content.ts`. The cluster architecture proves this scales — the same approach should be applied to pillars before adding a 5th pillar or making any shared design change.

### 3.2 Section backgrounds should alternate — adjacent same-bg = visual wall

**Finding (pillar audit — F6):** On Privacy, Formation, and Compliance pages, two adjacent sections both use `bg-background`, breaking the dark/light alternation rhythm:

| Page       | Adjacent same-bg sections                 |
| ---------- | ----------------------------------------- |
| Privacy    | Explore (S9) → Cross-Pillar (S10)         |
| Formation  | Two Decisions (S4) → Formation Steps (S5) |
| Compliance | Explore (S12) → Cross-Pillar (S13)        |

**Solution:** Alternate `bg-background` ↔ `bg-primary-50` ↔ `bg-primary` so no two adjacent sections share the same background. The intended rhythm is "dark hero → light education → tinted wizard → white pillars → gradient packages → dark differentiators → light testimonials → white trust bar → gradient how-it-works → dark CTA."

### 3.3 Thin sections feel like dividers, not content

**Finding (pillar audit — F2):** Social Proof Strip is 86px tall — the smallest section on every pillar page — sandwiched between 1,168px Differentiators and 1,113px Packages. At 86px, trust signals are "functionally invisible."

**Finding (cluster audit — 3.4):** Cluster pages still use the same 86px strip while pillar pages have been upgraded to the 436px `SocialProofStrip`.

**Finding (pillar audit — C3):** Formation "Quick-Path Shortcut" is 107px — too small to function as a shortcut for informed buyers.

**Rule of thumb:** Any section under ~150px reads as a divider, not content. If it's supposed to be load-bearing (trust, shortcut, callout), it needs to be at least 200–300px tall.

### 3.4 Section order: hook → agitate → anchor → educate → process → differentiate → trust → convert → support → expand → bridge → close

**Finding (pillar audit — Section 5):** The current section order on pillar pages follows a classic conversion funnel. Deviations should be justified:

```
Hero → Problem → Pull Quote → Education → How It Works → Differentiators → Trust → Packages → FAQ → Explore → Cross-Pillar → Final CTA
```

**Key rules:**

- **Hook before agitate, agitate before educate.** Problem must come before education or urgency evaporates.
- **Education before process.** Users need to know WHAT before HOW.
- **Process before differentiators.** Build trust in the method before the competitive pitch.
- **Trust before packages.** Reduce conversion anxiety immediately before the price.
- **FAQ immediately after packages** — catches hesitators.

### 3.5 Content depth: clusters below the spec minimum

**Finding (cluster audit — Section 2):** Most cluster pages have 1–2 content sections; spec calls for 6. Similarly, 19 pages have 1 FAQ where spec calls for 10–12.

**Minimum standard for any cluster page:**

- 3 content sections minimum
- 3 FAQs minimum
- Height at least ~4,500px at desktop

### 3.6 Heroes should render instantly — no animation on above-the-fold content

**Finding (pillar audit — F4):** Wrapping hero H1/body/CTAs in `ScrollReveal` causes a flash of empty dark space on page load.

**Solution:** Above-the-fold content (hero, primary nav) renders with no animation delay. `ScrollReveal` is only for below-the-fold content.

---

## 4. Content Quality

### 4.1 Hardcoded template-string headings

**Finding (cluster audit 2026-04-12):** `ClusterPageTemplate.tsx:401` hardcoded `${config.label} Is the First Layer. What Else?` as the cross-pillar bridge heading. This produced:

- "Business Privacy Is the First Layer. What Else?" ✅ (correct — Privacy is the lead pillar)
- "Asset Protection Is the First Layer. What Else?" ❌ (contradicts positioning)
- "Company Formation Is the First Layer. What Else?" ❌
- "Compliance Is the First Layer. What Else?" ❌

**Applied fix (commit `51a8fec`):** Replaced with a `pillarBridges` map where each pillar has its own `heading` and `items[]`. Now each pillar reads:

- Privacy: "Privacy Is the First Layer. What's Next?"
- Asset: "Asset Protection Works Best as a System"
- Formation: "Formation Is Step One. What Comes Next?"
- Compliance: "Compliance Is the Spine. Strengthen the Rest."

**General lesson:** Template-string headings using `${pillarLabel}` mechanically inserted into a sentence fragment rarely survive scrutiny. Each pillar deserves its own copy.

### 4.2 Boilerplate auto-generated descriptions

**Finding (cluster audit — 4.3):** `ClusterPageTemplate.tsx:92-96` auto-generates sidebar link descriptions from templates:

```
`Learn more about ${link.title.toLowerCase()} and how it relates to ${config.suggestionContext}.`
```

This produces generic copy across every cluster. Not compelling.

**Solution:** Custom `description` field per cluster, or at minimum better templates that vary by link type.

### 4.3 Inline hardcoded data instead of `src/data/`

**Finding (pillar audit — F3):** All static data arrays (`THREAT_CARDS`, `LAYER_BLOCKS`, `PROCESS_STEPS`, `DIFFERENTIATORS_SMALL`, `EXPLORE_SERVICES`, etc.) are defined inline at the bottom of each pillar page. Per project convention, data belongs in `src/data/`.

**Finding (homepage v2):** `HomepageHero.tsx` has hardcoded `HeroVisual()` badges; `PrivacyBridge.tsx` has hardcoded column data. Both should be extracted to `homepage.ts`.

### 4.4 Text sections are single paragraphs — no progressive disclosure

**Finding (cluster audit — 4.1):** Every `text` section is a heading + one paragraph. No subheadings, bullet lists, callouts, or images. Spec calls for "scanner content (always visible) + expandable reader detail" — progressive disclosure. Not implemented.

**Solution:** Use `keyPoints`, `bullets`, `extendedContent` fields on `ClusterContent` sections. The schema already supports this; the data doesn't use it.

### 4.5 Reading times are hardcoded strings, not computed

**Finding (cluster audit — 4.2):** Pages with 1 section (~80 words) claim "5 min read." Reading times are hardcoded, not calculated.

**Solution:** Use `resolveReadingTime(cluster)` in `src/lib/reading-time.ts` — compute from word count (assume 200–250 wpm for educational content).

### 4.6 Pull quote attribution is inconsistent across pillars

**Finding (pillar audit — C2):** Three pillars use "The Incorporate123 Difference" as the pull quote footer. Asset Protection uses "The Wyoming Advantage" without clear justification.

**Solution:** Standardize to "The Incorporate123 Difference" everywhere unless there's a specific editorial reason.

### 4.7 Hero copy that uses scary or unexplained terms

**Finding (pillar audit — C1):** Privacy hero mentions "offshore records storage" before any context has been set. First-time visitors may feel alarm rather than trust. Replace with benefit-oriented phrasing and let the Three Layers section explain the offshore detail.

---

## 5. Navigation & Cross-Page

### 5.1 Cross-pillar bridges should show 2–3 cards, not 1

**Finding (cluster audit 2026-04-12):** `defaultCrossPillar` in `ClusterPageTemplate.tsx` was a `Record<PillarName, SingleBridge>` — one card per pillar. `max-w-[600px]` container locked it in structurally. For every cluster, only 1 adjacent pillar was surfaced.

**Applied fix (commit `51a8fec`):** Replaced with `pillarBridges: Record<PillarName, { heading, items: BridgeItem[] }>`. Each pillar now has 3 bridge items rendered as a `md:grid-cols-2 lg:grid-cols-3` grid. Cluster-level `crossPillarCTA` override is now merged in as the first slot.

**Finding (pillar audit — F8):** Cross-pillar bridge count varies without clear rationale:

- Privacy → 2 pillars (Asset + Compliance) — **missing Formation**
- Asset → 3 pillars (Privacy + Formation + Compliance)
- Formation → 1 upsell bridge (Privacy) + cross-pillar section
- Compliance → 3 pillars (Privacy + Asset + Formation)

**Solution:** Every pillar page and cluster page should bridge to all 3 other pillars (or at least 2 strongest adjacencies). Weak bridging kills cross-pillar navigation.

### 5.2 Anchor links that point nowhere

**Finding (pillar audit — F7):** Formation and Compliance hero "How It Works" CTAs use `href="#how-it-works"` but no matching `id` attribute exists. Button clicks do nothing.

**Finding (cluster audit — 3.1):** "Find Your Package" button in hero links to `#packages`, but the package CTA section only renders when `dualPkgs.length >= 2`. On 77% of cluster pages the anchor goes nowhere.

**Rule:** Every internal anchor link (`href="#foo"`) must have a corresponding `id="foo"` attribute on an element that is unconditionally rendered, OR the button must be hidden when the target doesn't exist.

### 5.3 Breadcrumbs should carry real titles, not hardcoded labels

**Finding (cluster audit — 3.6):** `ClusterHero.tsx:83` hardcoded `"Guide"` as the last breadcrumb segment. Reads `Home / Company Formation / Guide` regardless of which cluster you're on.

**Solution:** Use `cluster.title` as the last segment. Helps navigation and SEO.

---

## 6. Conversion Architecture

### 6.1 Social proof comes too late and too weak

**Finding (pillar audit — Issue A):** Social Proof Strip at position 7 of 12 appears after 5,000+px of scrolling. At 86px it's invisible. Trust signals are most effective at two points:

- **(a) Right after Problem** — establishes credibility before education
- **(b) Right before Packages** — reduces conversion anxiety

Current placement targets (b) but fails on size.

**Solution:** Either expand to 300px minimum AND keep at position 7, OR add a secondary trust element at position 2.5 (after Problem, before Education).

**Finding (homepage v2 — Issue 3):** First testimonial appears 6+ scrolls down. No social proof near the hero CTAs.

**Solution:** Add a compact micro-testimonial or "Trusted by thousands of business owners" strip near the hero CTAs.

### 6.2 Differentiators buried at position 6 (5,000px down)

**Finding (pillar audit — Issue B):** The strongest "why us" content appears at ~5,000px. Bounce-prone users never see it.

**Solution:** Add a compact 3-icon "Key Differentiators" strip after the Pull Quote (position 3.5). Keep the full Differentiators section for deep-scroll users. Surfaces "why us" at ~2,200px instead of ~5,000px.

### 6.3 Pre-packages upsell bridges drive cross-pillar conversion

**Finding (pillar audit — Issue C):** Formation places "70% of Our Clients Add Privacy" right before Packages. This primes Silver → Gold upgrade. Smart conversion architecture. Other pillars should learn from it.

**Solution:**

- Asset Protection → "Combine with Privacy for complete protection"
- Compliance → "Most clients pair compliance with formation"
- Privacy → "Add Asset Protection before you're exposed"

### 6.4 Inline CTAs between content and trust strip

**Finding (cluster audit — 3.5):** Cluster template goes straight from the last content section to the trust strip. No mid-page conversion opportunity for the reader who finished reading but didn't scroll to the bottom.

**Solution:** Add an inline CTA strip ("Ready to [action]?" + package link + consultation link) between content and trust strip.

### 6.5 No urgency or scarcity on homepage

**Finding (homepage v2 — Issue 2):** The homepage educates and explains but never creates urgency to act now.

**Solution:** Add time-sensitive or milestone-based framing: "Protect your privacy before your next filing", "Get started today", seasonal hooks.

### 6.6 Copy consistency — pick one claim and stick with it

**Finding (homepage v2 — Issue 2.2):** SectionHeader says "personalized recommendation in **30 seconds**", wizard component says "Find Your Perfect Package in **60 Seconds**". Pick one.

---

## 7. Design System Compliance

### 7.1 Hardcoded pixel values that should be tokens

**Finding (homepage v2 — Section 5):**

| File                        | Line | Value            | Should be             |
| --------------------------- | ---- | ---------------- | --------------------- |
| `DifferentiatorSection.tsx` | 137  | `rounded-[20px]` | `rounded-card-lg`     |
| `HomepageHero.tsx`          | 255  | `rounded-[20px]` | `rounded-card-lg`     |
| `FinalCTA.tsx`              | 22   | `py-40`          | `py-section-y`        |
| `HowItWorks.tsx`            | 98   | `text-[26px]`    | `text-heading-lg`     |
| `TestimonialGrid.tsx`       | 76   | `leading-[1.85]` | Design system leading |

**Rule:** Any hardcoded pixel value in Tailwind arbitrary syntax is a yellow flag. Check whether a token already exists before adding a new one.

### 7.2 `border-l-*` is banned on cards, callouts, menu items

Per global CLAUDE.md: "No left border accents on cards, menu items, or callout sections — avoid `border-l-*`."

**Finding (homepage v2 — Section 3.1):** `TestimonialGrid.tsx:76` still uses `border-l-[3px] rounded-[3px]`.

**Solution:** Replace with `::before` pseudo-element:

```css
position: relative;
padding-left: 24px;
::before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 3px;
  border-radius: 3px;
  background: var(--pillar-color);
}
```

### 7.3 Stale files from Next.js migration

**Finding (homepage v2 — Section 5.2):**

| File                         | Status                          | Action                 |
| ---------------------------- | ------------------------------- | ---------------------- |
| `src/app/globals.css`        | STALE — 447 lines, not imported | DELETE (move to trash) |
| `src/app/page.backup.tsx`    | Stale backup                    | DELETE                 |
| `src/app/page.v2-backup.tsx` | Stale backup                    | DELETE                 |

**Rule:** After any major migration (Next.js → Vite, framework change), sweep for stale files in the first month. Don't let them sit.

### 7.4 Default Tailwind sizing classes resolve unexpectedly

Per `inc123-prototype/CLAUDE.md`: "Do NOT use default Tailwind sizing classes like `max-w-sm`, `max-w-xl`, `max-w-2xl` — they resolve to unexpected values because of the custom spacing scale. Use `max-w-content` (72rem), `max-w-narrow` (48rem), `max-w-wide` (80rem) or explicit values instead."

**Rule:** Always use project layout tokens for width constraints. Never the default Tailwind classes.

### 7.5 Unwrapped custom CSS causes cascade ordering issues

Per `inc123-prototype/CLAUDE.md`: "All custom CSS must be wrapped in `@layer base { }` blocks. Unwrapped CSS causes cascade ordering issues in Tailwind v4."

**Rule:** Any new CSS added to `globals.css` must live inside `@layer base { }`. Otherwise specificity battles kick in.

---

## 8. Mobile & Responsiveness

### 8.1 Mobile horizontal scroll — site-wide footer cause (cluster fix 2026-04-12)

**Finding (cluster audit 2026-04-12):** `document.documentElement.scrollWidth = 604` on 375px viewport across every cluster page. Original diagnosis blamed the `InlinePullQuote` ghost watermark — partially correct (pointed LEFT, doesn't cause rightward scroll). **Real root cause:** `SiteFooter.tsx:278` legal disclaimer `<p>` had `whitespace-nowrap` forcing "Not a law firm, bank, or CPA. Full legal disclaimer · All prices in USD · Operated by Fidelity Solutions Ltd" onto a single 584px line. **Affected every page on the site**, not just clusters.

**Applied fix (commit `51a8fec`):** Removed `whitespace-nowrap`. Mobile `scrollWidth` dropped from 604 → 360.

**Lesson:** When auditing mobile horizontal scroll, `getBoundingClientRect()` may miss the culprit if the offender is a flex/inline-block child whose intrinsic min-width exceeds the viewport. Use this walk instead:

```js
// Walk tree for elements where scrollWidth > clientWidth
const walk = (el, depth = 0) => {
  if (el.scrollWidth > el.clientWidth + 2) {
    console.log(el.tagName, el.className, el.scrollWidth, el.clientWidth);
  }
  Array.from(el.children).forEach((c) => walk(c, depth + 1));
};
walk(document.documentElement);
```

### 8.2 Decorative abs-positioned elements escaping overflow-hidden containers

**Finding (cluster audit 2026-04-12):** `InlinePullQuote` figure (`LongFormContent.tsx:482`) has `relative` but not `overflow-hidden`. Its `text-[8rem]` decorative ghost letter extended left/right past the figure bounds. Applied fix: added `overflow-hidden` to the figure.

**Rule:** Any `<figure>`, `<section>`, or `<div>` that contains an absolute-positioned decorative child with viewport units (`w-[50vw]`, `h-[60vw]`) OR oversized text (`text-[8rem]`, `text-[20rem]`) MUST have `overflow-hidden`.

### 8.3 Flex containers with calc() sizing are fragile

**Finding (homepage v2 — Section 6.4):** `DifferentiatorSection.tsx` uses `sm:w-[calc(33.333%-11px)]` and `sm:w-[calc(50%-8px)]`. Works but is fragile. Consider `grid grid-cols-1 sm:grid-cols-3` instead.

**Rule:** Prefer CSS grid for multi-column card layouts. Reserve flex + calc for cases where item widths must vary.

### 8.4 Horizontal overflow in flex rows at narrow viewports

**Finding (homepage v2 — Section 6.2, 6.3):**

- Package comparison pricing callout in `FinalCTA` uses `inline-flex items-center gap-8` — may overflow at 375px. Needs `flex-wrap`.
- VS comparison bar uses `grid-cols-[1fr_auto_1fr]` — may cramp on narrow screens. Needs stacked mobile layout.

**Rule:** Any `inline-flex` or `grid-cols-[1fr_auto_1fr]` element with pricing/long text content must be tested at 375px. Add `flex-wrap` or mobile-stack fallback.

### 8.5 Mobile tap targets and hidden content

**Finding (homepage v2 — Section 6.1):** Hero right-column pillar badges are `hidden lg:block`. Mobile users miss the visual reinforcement. Acceptable since badges are supplementary, but document the tradeoff.

**Rule:** Any `hidden lg:block` or `sm:block` decision should have a documented reason. Don't hide content as a first-resort mobile fix.

---

## 9. Accessibility

### 9.1 WCAG AA contrast on low-opacity white text

**Finding (homepage v2 — Section 9):**

| File                        | Element            | Value               | Concern                         |
| --------------------------- | ------------------ | ------------------- | ------------------------------- |
| `HomepageHero.tsx`          | Subheadline        | `text-white/[0.42]` | ~42% white on navy — borderline |
| `HomepageHero.tsx`          | Phone/consultation | `text-white/[0.28]` | ~28% white — likely fails       |
| `DifferentiatorSection.tsx` | Card descriptions  | `text-white/[0.33]` | ~33% white — likely fails       |
| `FinalCTA.tsx`              | Pricing labels     | `text-white/30`     | ~30% white — likely fails       |

These were left in place to match the v10 design but should be verified with a contrast checker.

**Rule:** Any `text-white/[0.XX]` or `text-foreground/[0.XX]` under 0.50 on a dark background needs a contrast check. The design can override AA for truly decorative elements, but primary text should always pass.

### 9.2 Narrative prose contrast — gray-600 on gray-50 borderline

**Finding (cluster audit 2026-04-12):** `LongFormContent.tsx` used `text-body text-muted leading-relaxed` — gray-600 `rgb(75, 85, 99)` on gray-50 — contrast ~5.7:1. Passes AA but on the low end.

**Applied fix (commit `51a8fec`):** Replaced with `text-body text-foreground/80 leading-relaxed` — darker, more readable narrative prose.

**Rule:** Long-form narrative body text should lean darker (gray-700 or foreground/80). Muted gray-500/600 is fine for captions, labels, metadata — not for paragraphs of reading content.

### 9.3 Missing focus states on hover-only interactions

**Finding (homepage v2 — Section 9):**

| Component                   | Hover effect             | Missing                         |
| --------------------------- | ------------------------ | ------------------------------- |
| `DifferentiatorSection.tsx` | `hover:-translate-y-1.5` | `focus-within:-translate-y-1.5` |
| `TestimonialGrid.tsx`       | `hover:-translate-y-2`   | `focus-within:-translate-y-2`   |

**Rule:** Every `hover:` class on an interactive element (card, button, link) must have an equivalent `focus-visible:` or `focus-within:` counterpart. Keyboard users deserve the same feedback.

### 9.4 Decorative SVG accessibility

**Finding (homepage v2 — Section 9):** Star rating SVGs in testimonials have no alt text or aria-label. Purely decorative but screen readers can't convey "5 stars."

**Rule:** Decorative SVGs either need `aria-hidden="true"` (if truly decorative) or `role="img" aria-label="..."` (if conveying meaning like star ratings).

### 9.5 ScrollReveal invisible to screen readers before animation fires

**Finding (homepage v2 — Section 9.2):** Elements start as `opacity: 0; transform: translateY(1.5rem)`. Screen readers can still read them, but sighted keyboard users may miss content that hasn't animated in yet.

**Solution:** Respect `prefers-reduced-motion: reduce` — disable animation and render content immediately for users who opt out.

### 9.6 Skip-to-content link (passing)

**Finding (homepage v2 — Section 9):** Skip-to-content link is correctly implemented. Good. Keep this pattern on all templates.

---

## 10. What's Already Working (Don't Regress These)

From all three audits, several things are solid and should be preserved:

- **Hero value propositions** — each pillar H1 speaks to a distinct intent. No two heroes feel interchangeable. Same for cluster heroes after the 2026-04-12 fixes.
- **Pillar color system** — now visible on cluster hero stripes (post 2026-04-12), and consistent across all pillar-aware components via `pillarMaps.ts`.
- **ClusterLayout 70/30 split** — sidebar with package shortcut is a smart conversion pattern. Works well.
- **FAQ two-column sticky layout** — elegant, well-coded. Keep it.
- **Final CTA dark close** — consistent brand voice across pillar + cluster pages.
- **StickyMobileCTA** — well-implemented scroll-triggered mobile bar.
- **Package comparison cards** — clean hierarchy, Silver secondary, Gold featured with badge.
- **Educational framework sections ("Three Layers" / "Three Pillars" / "Four Pillars")** — the strongest content on pillar pages. Demonstrates real expertise.
- **Specific, concrete problem sections** — name lawsuit targeting, $30K–$100K defense costs, "$0 formation" traps. Builds real urgency.
- **Transparent pricing** — exact dollar amounts throughout. No "contact for pricing."

---

## 11. Priority-Ordered Outstanding Work

### Tier 1 — Ship blockers (before David review)

| #   | Item                                                                            | Scope     | Source audit   |
| --- | ------------------------------------------------------------------------------- | --------- | -------------- |
| 1   | Fix anchor link inconsistency on pillar pages (`#framework` vs `#how-it-works`) | pillar    | Pillar F7      |
| 2   | Fix adjacent same-bg sections on Privacy, Formation, Compliance                 | pillar    | Pillar F6      |
| 3   | Fix Package CTA to render with 1 gold package (not just 2+)                     | cluster   | Cluster 3.1    |
| 4   | Breadcrumb `"Guide"` → actual cluster title                                     | cluster   | Cluster 3.6    |
| 5   | Remove `ScrollReveal` from above-the-fold hero content                          | pillar    | Pillar F4      |
| 6   | Delete stale `src/app/globals.css`, `page.backup.tsx`, `page.v2-backup.tsx`     | repo-wide | Homepage v2 §5 |

### Tier 2 — Conversion improvements (high impact)

| #   | Item                                                                     | Scope            | Source audit     |
| --- | ------------------------------------------------------------------------ | ---------------- | ---------------- |
| 7   | Expand Social Proof Strip on pillar pages from 86px to ~300px            | pillar           | Pillar F2        |
| 8   | Upgrade cluster Trust Strip to shared `SocialProofStrip` component       | cluster          | Cluster 3.4      |
| 9   | Add compact "Key Differentiators" strip after Pull Quote on pillar pages | pillar           | Pillar Issue B   |
| 10  | Add inline CTA strip between content and trust strip on cluster pages    | cluster          | Cluster 3.5      |
| 11  | Enlarge Formation Quick-Path Shortcut to 200–300px                       | formation pillar | Pillar C3        |
| 12  | Add pre-packages upsell bridges to Asset and Compliance pillar pages     | pillar           | Pillar Issue C   |
| 13  | Add compact micro-testimonial or trust strip near homepage hero CTAs     | homepage         | Homepage v2 §1.3 |

### Tier 3 — Content depth

| #   | Item                                                                   | Scope   | Source audit |
| --- | ---------------------------------------------------------------------- | ------- | ------------ |
| 14  | Establish minimum standard (3 content sections + 3 FAQs per cluster)   | cluster | Cluster 2    |
| 15  | Add comparison tables (WY vs NV) and pricing sections to clusters      | cluster | Cluster 4.5  |
| 16  | Implement progressive disclosure (keyPoints, bullets, extendedContent) | cluster | Cluster 4.1  |
| 17  | Compute reading time from content length                               | cluster | Cluster 4.2  |
| 18  | Replace auto-generated sidebar link descriptions with custom copy      | cluster | Cluster 4.3  |
| 19  | Reconcile cluster inventory with spec (add missing, audit drifts)      | cluster | Cluster 4.4  |

### Tier 4 — Architecture

| #   | Item                                                                        | Scope    | Source audit     |
| --- | --------------------------------------------------------------------------- | -------- | ---------------- |
| 20  | Extract pillar pages into shared `PillarPageTemplate` + `pillar-content.ts` | pillar   | Pillar F1        |
| 21  | Move inline data arrays on pillar pages to `src/data/pillar-content.ts`     | pillar   | Pillar F3        |
| 22  | Extract `HomepageHero` hero badges to `homepage.ts`                         | homepage | Homepage v2 §9.3 |
| 23  | Extract `PrivacyBridge` column data to `homepage.ts`                        | homepage | Homepage v2 §9.3 |

### Tier 5 — Polish & a11y

| #   | Item                                                                   | Scope             | Source audit     |
| --- | ---------------------------------------------------------------------- | ----------------- | ---------------- |
| 24  | Replace `border-l-[3px]` on testimonials with `::before` pattern       | homepage          | Homepage v2 §3.1 |
| 25  | Replace `rounded-[20px]` on VS bar with `rounded-card-lg`              | homepage          | Homepage v2 §3.2 |
| 26  | Reduce ScrollReveal rootMargin -60 → -20                               | homepage + pillar | Homepage v2 §2.1 |
| 27  | Verify low-opacity white text passes WCAG AA                           | all               | Homepage v2 §9   |
| 28  | Add `focus-visible` equivalents to all hover-only interactions         | homepage          | Homepage v2 §9   |
| 29  | Add `aria-label="5 out of 5 stars"` to star rating SVGs                | homepage          | Homepage v2 §9   |
| 30  | Standardize Pull Quote attribution to "The Incorporate123 Difference"  | asset pillar      | Pillar C2        |
| 31  | Add pillar-specific Explore headings (not generic "Continue Learning") | pillar            | Pillar F9        |

---

## 12. Cross-Cutting Patterns for Future Work

These patterns appeared across multiple audits and should inform how every future page is built:

1. **One template per page type.** Clusters prove it scales. Pillar pages should follow.
2. **Data lives in `src/data/`.** Inline hardcoded data is a migration debt.
3. **Heroes render instantly, everything else can animate.** Never wrap above-the-fold in ScrollReveal.
4. **Section backgrounds alternate.** Adjacent same-bg = visual wall. Plan the rhythm.
5. **Section minimum height ~150px.** Anything shorter reads as a divider.
6. **Every internal anchor has a corresponding `id` — always rendered, not conditional.**
7. **Cross-pillar bridges show 2–3 pillars, not 1.**
8. **Mobile horizontal scroll is usually a hidden cause.** Use `scrollWidth > clientWidth` tree walk, not just bounding rects.
9. **Decorative abs-positioned elements belong inside `overflow-hidden` containers.**
10. **Pillar colors are required on every pillar-aware component.** Import from `pillarMaps.ts`.
11. **Wireframe is default — audit there first.** Brand mode is for pillar-color verification only.
12. **Template-string headings that mechanically insert pillar names rarely survive copy review.**
13. **Pull quotes, inline CTAs, key-stat callouts break up text-heavy pages visually.**

---

_Compiled by Ash (BIT Studios) — 2026-04-12._
_Companion document: `Page_QA_Checklist_2026-04-12.md` — forward-looking QA checklist for any new page type._
