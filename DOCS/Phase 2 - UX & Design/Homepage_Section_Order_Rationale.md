# Homepage Section Order — Rationale

**Date:** 2026-04-06
**Page:** Incorporate123 Homepage
**Prototype:** `inc123-prototype/src/app/page.tsx`

---

## Section Flow

The homepage follows a **Problem → Solution → Process → Price → Trust → Proof → Close** funnel. Each section answers the next question in the visitor's head.

---

### 1. Hero (dark)

**Visitor asks:** _"What is this?"_

First impression — headline, value prop, two CTAs, stats bar. Tells the visitor what the company does in 3 seconds. The dark background anchors the page and establishes authority. Orbital constellation visual reinforces the privacy/protection theme.

---

### 2. Trust Ticker (dark strip)

**Visitor asks:** _"Can I trust them?"_

Continuous scrolling micro-signals (25 years, all-inclusive pricing, crypto accepted, money-back guarantee). Thin strip that keeps confidence high as the user transitions from the hero into content. Doesn't slow anyone down.

---

### 3. Privacy Bridge (white)

**Visitor asks:** _"Why should I care?"_

Teaches _why_ privacy matters before pitching solutions. Three columns: Public Exposure → Lawsuit Targeting → The Solution. Converts "I'm just looking" into "I have a problem that needs solving."

---

### 4. Pillars + Package Wizard (tinted)

**Visitor asks:** _"What do they offer?"_

Four pillar cards (Privacy, Asset Protection, Formation, Compliance) show the full service landscape. The Package Wizard sits directly below — "find your package in 60 seconds" lets someone who's ready skip ahead. Explore links below the wizard let browsers go deeper into specific pillars.

These are combined in one section because they're related: explore services, then get a recommendation.

---

### 5. How It Works (white)

**Visitor asks:** _"Is it complicated?"_

Four-step vertical timeline shows the process is simple. Placed _before_ pricing because a user who just saw what you offer needs to know _how easy it is_ before they'll look at numbers. Reduces "is this going to be a headache?" anxiety.

---

### 6. Package Comparison (tinted)

**Visitor asks:** _"What does it cost?"_

State toggle (Wyoming, Nevada, California, Florida) with Bronze/Silver/Gold cards. By this point the user knows: the problem (3), the services (4), and that it's simple (5). They're ready to evaluate options. This is the decision point.

---

### 7. Differentiators (dark)

**Visitor asks:** _"Why them over a competitor?"_

After seeing prices, the natural question is "why not someone cheaper?" This section answers that — 25 years, real office, year-round nominees (not "nominee for a day"), offshore storage, all-inclusive pricing, crypto accepted. The dark background creates a visual reset after the pricing cards.

Includes a direct competitor comparison: "$400–$5,000/yr for nominees alone" vs "Included in Gold."

---

### 8. Testimonials (tinted)

**Visitor asks:** _"Does it actually work?"_

Real client quotes validate the claims made in Differentiators. Placed last before the final CTA because social proof is most effective when the user is nearly convinced and needs one last push.

---

### 9. Final CTA (dark)

**Visitor asks:** _"OK, I'm ready."_

Dark section with pricing summary and clear call to action. Catches anyone who scrolled the whole page without converting. Mirrors the hero's dark treatment to bookend the page.

---

## Background Rhythm

Backgrounds alternate to create visual separation between sections:

| #   | Section            | Background          |
| --- | ------------------ | ------------------- |
| 1   | Hero               | dark (primary)      |
| 2   | Trust Ticker       | dark strip          |
| 3   | Privacy Bridge     | white (background)  |
| 4   | Pillars + Wizard   | tinted (primary-50) |
| 5   | How It Works       | white (background)  |
| 6   | Package Comparison | tinted (primary-50) |
| 7   | Differentiators    | dark (primary)      |
| 8   | Testimonials       | tinted (primary-50) |
| 9   | Final CTA          | dark (primary)      |

---

## What Was Removed

**Trust Bar** — Previously between Testimonials and How It Works. Removed because it was a thin row of trust icons that felt redundant after the Trust Ticker (top) and Testimonials (bottom) already covered social proof. Stacking two proof sections back-to-back created a "wall of trust" that felt repetitive.

---

## Future Consideration

If analytics show most visitors drop off before section 5, consider moving Package Comparison higher (right after Pillars) and letting How It Works follow pricing instead. But for a premium service, educating before pricing is the safer initial bet.
