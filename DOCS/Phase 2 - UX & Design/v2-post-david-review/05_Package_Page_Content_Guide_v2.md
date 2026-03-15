# Incorporate123 — Package Page Content Guide (Template)

**Exemplar Page:** `/wyoming-private-incorporation/` · **Template:** Package Detail Page (8–10 pages)
**Phase:** 2 — UX & Interactive Prototyping
**Based on:** Package Page Wireframe Spec, Brand Guide v2, Positioning Framework, User Journey Mapping

---

## Wireframe Improvement Notes

### 1. Entity Type Toggle Needs Clear Price Change Communication

Switching from LLC to Corporation adds ~$300 but the wireframe doesn't specify how this change is communicated. If prices just silently update, visitors may not notice or may think they imagined the previous price.

**Recommendation:** When toggling LLC ↔ Corporation, briefly flash or highlight the price change with a micro-animation and show a small label: "+$300 for Corporation filing fees" below the toggle. This reinforces the transparency brand promise.

### 2. "Value Comparison Callout" Is the Single Most Important Persuasion Element

The wireframe buries this as Section 6 below the pricing grid. It should be more prominent — this box reframes $1,275 from "cost" to "$2,000+ in included value." For visitors comparing against budget providers showing $0 formation, this is the argument that justifies the price.

**Recommendation:** Give the Value Comparison Callout a distinct visual treatment — darker background card (deep navy or similar), larger typography for the value figure, and an explicit "You'd pay $2,000+ elsewhere for these services individually" headline.

### 3. Add-On Configurator Needs "Most Popular" Hint

Six add-ons can create decision fatigue. The wireframe groups them into "Recommended" and "Additional" which helps, but doesn't tell visitors what other customers typically choose.

**Recommendation:** Add a subtle badge on Expedited Filing: "Most clients add this" or "60% of orders include this." Social proof on add-ons increases attach rate without hard-selling.

### 4. Running Total Should Show Renewal Cost Too

The sidebar running total shows base + add-ons + total, but doesn't show the ongoing annual renewal cost. Visitors should see both Year 1 and ongoing costs before reaching checkout — surprise renewal rates at payment create abandonment.

**Recommendation:** Add a line below the total: "Annual renewal starting Year 2: $525/yr (Gold) or $325/yr (Silver)" in smaller type.

### 5. Missing Competitor Price Comparison in FAQ

The FAQ includes "What's the difference between Silver and Gold?" but doesn't include "How does this compare to other companies?" — the #1 question comparison shoppers have. The wireframe relies on the Value Comparison Callout for this, but an explicit FAQ answer reinforces it.

**Recommendation:** Add FAQ question: "How does Incorporate123 compare to other incorporation services?" with an answer that positions against both budget ($0 filers that add fees) and premium ($2,750+ consultation-gated firms).

---

## Section-by-Section Content Guide

---

## Package Hero

| Element | Content | Voice Notes |
|---------|---------|-------------|
| **Pillar Identity** | Pillar accent matching the package's primary pillar | Gold packages = Privacy Blue. Silver = Formation Amber. |
| **Eyebrow** | "[State] [Entity Type] · [Pillar] Package" | "Wyoming LLC · Privacy Package" |
| **H1** | "[State] [Tier] Package — [Value Proposition]" | "Wyoming Gold Package — Complete Privacy Formation" |
| **Subheadline** | Complete feature summary + price + renewal in one paragraph | Lists all major inclusions, price, and renewal. This paragraph does heavy lifting — a visitor who reads only this should know everything they need. |
| **Primary CTA** | "Order Now — $[price] →" | Amber button. Price in the CTA button text — removes one more click before the visitor sees cost. |
| **Secondary CTA** | "Schedule a Consultation →" | Ghost button. Routes to `/contact/`. |
| **Trust Strip** | "All-Inclusive · 30-Day Money-Back Guarantee · Trusted Since 2000 · Crypto Accepted · Specialist Team" | Same trust strip as homepage. Horizontal badges. |

### Above-Fold Requirements

Package name, price, "all-inclusive" label, both CTAs, trust strip, and the top edge of the pricing grid — all visible without scrolling on desktop.

---

## Entity Type Toggle

| Element | Detail |
|---------|--------|
| **Label** | "Choose Your Entity Type" |
| **Default** | LLC selected |
| **Options** | LLC · Corporation |
| **Effect** | All prices update instantly (+$300 for Corp). CTA labels update. Brief highlight animation on price change. |
| **Price Change Label** | "+$300 for Corporation filing fees" appears below toggle when Corp is selected |

### Price Matrix

| State | Tier | LLC | Corp |
|-------|------|-----|------|
| Wyoming | Silver | $900 | $1,200 |
| Wyoming | Gold | $1,275 | $1,575 |
| Nevada | Bronze | $1,000 | $1,300 |
| Nevada | Silver | $1,275 | $1,575 |
| Nevada | Gold | $1,800 | $2,100 |

---

## Pricing Comparison Grid

The page centerpiece. Side-by-side tier comparison. Gold always highlighted.

### Visual Rules

- **Gold column:** Elevated — highlighted border (Privacy Blue), "Most Popular" badge, slightly raised or larger card
- **Silver column:** Solid but clearly secondary — same structure, no elevation
- **Bronze (Nevada only):** Minimal presence. No badge. Amber border de-emphasized.
- **Feature rows:** Checkmark (✓) for included, dash (—) for not included. JetBrains Mono for prices.
- **Tooltip icons (ⓘ):** On every feature row. 1–2 sentence explanation on hover (desktop) or tap (mobile).
- **CTA row at bottom:** Repeats CTAs for each tier.

### Feature Row Content

| Feature | Tooltip Content | Bronze | Silver | Gold |
|---------|----------------|--------|--------|------|
| State Filing Fees | "[State] filing fee ($X) included." | ✓ | ✓ | ✓ |
| Registered Agent (1 yr) | "Receives legal documents. Required by law. Professional Reno mailing address." | ✓ | ✓ | ✓ |
| Custom Corporate Records | "Operating agreement, membership certificates, meeting minutes." | ✓ | ✓ | ✓ |
| Company Secretary | "Corporate secretary services for records and filings." | — | ✓ | ✓ |
| EIN (Federal Tax ID) | "We file your EIN. Competitors charge $50–$99." | — | ✓ FREE | ✓ FREE |
| Bank Account Assistance | "Documentation to open a business bank account." | — | ✓ FREE | ✓ FREE |
| Year-Round Nominee Officer | "Nominee on ALL filings, every year. Competitors charge $400–$5,000/yr." | — | — | ✓ Included |
| Offshore Nominee Directors | "Offshore nominees, outside U.S. jurisdiction. Free since 2012." | — | — | ✓ FREE |
| Offshore Records Custodian | "Records maintained offshore. Unique to Incorporate123." | — | — | ✓ Included |
| Weekly Mail Forwarding | "Business mail forwarded weekly." | — | — | ✓ Included |

**Content direction:** Tooltip content should be brief (1–2 sentences) but must include a competitive reference where possible ("Competitors charge $50–$99"). These tooltips are micro-conversion tools — each one reinforces the "all-inclusive" value proposition.

---

## Value Comparison Callout

**Visual:** Dark background card (deep navy `#1e3a5f`). Large value figure. High visual weight.

| Element | Content |
|---------|---------|
| **Headline** | "What's Actually Included — The Full Value" |
| **Value Figure** | "$2,000+ in Year 1 value" — large, prominent type |
| **Breakdown** | Year-round nominees ($400–$5,000/yr elsewhere), registered agent ($125–$199/yr), EIN ($50–$99), operating agreement (included), state fees (included). "The $1,275 price includes everything. Annual renewal: $525 with nominees — less than what competitors charge for nominees alone." |

---

## Add-On Configurator

| Element | Content |
|---------|---------|
| **H2** | "Customize Your Package" |
| **Subtext** | "Optional add-ons. Your total updates in real time." |

### Add-Ons

| Add-On | Price | Badge | Description |
|--------|-------|-------|-------------|
| Expedited Filing (24-hr) | +$150 | "Most Popular Add-On" | Filed within 24 hours instead of 5–7 business days. |
| Virtual Office | +$400 | — | Dedicated business address with mail scanning, forwarding, virtual phone. |
| Corporate Record Book | +$75 | — | Physical bound record book. |
| Foreign State Registration | +$350–$500 | — | Register to operate in CA, FL, TX, NY, etc. |
| Shelf Company Upgrade | Varies | — | Aged entity with instant business history. |
| Additional State Filing | +$300–$500 | — | Additional entity for multi-entity structures. |

### Running Total (Sidebar / Mobile Bar)

| Element | Detail |
|---------|--------|
| **Content** | Tier + price, each add-on + price, divider, total |
| **Renewal line** | "Annual renewal starting Year 2: $525/yr" (below total, smaller type) |
| **CTA** | "Proceed to Checkout — $[total] →" |
| **Sticky behavior** | Desktop: sticky sidebar. Mobile: sticky bottom bar. |

---

## Progressive Disclosure — "What You Need to Know"

For the 20% researchers. 3 expandable sections.

| Section | Scanner (visible) | Expanded Detail |
|---------|-------------------|----------------|
| "What is a [State] [Entity]?" | 2–3 sentences on the entity type and state advantages | 300–400 words |
| "How Nominees Protect You" | 2–3 sentences on how nominee names replace yours on filings | 300–400 words on year-round vs. formation-day |
| "What Happens After Formation" | 2–3 sentences on post-formation timeline and deliverables | 300–400 words on documents received, compliance setup |

---

## "Also Consider" — Related Packages

3 cards cross-selling adjacent packages. Prevents dead-end exits.

| Card Pattern | Example (from Wyoming Gold page) |
|-------------|----------------------------------|
| Alternative state | "Nevada Gold — $1,800. Same privacy, Nevada's tax profile." |
| Lower tier | "Wyoming Silver — $900. Expert formation without privacy. Upgrade anytime for $375." |
| Specialty | "CA/FL Private — $2,500+. Wyoming formation + foreign registration in your home state." |

---

## Trust & Social Proof

- **Trust Signals Bar:** Same as homepage — 6 badges (note: "Real Reno Office" badge is now "Specialist Team")
- **Testimonials:** 2–3 anonymized quotes relevant to this package type
- **Money-Back Guarantee Callout:** Shield icon + "30-Day Money-Back Guarantee. No questions asked." — must appear on every package page

---

## FAQ Accordion

8–10 questions per package page. Must include:

| Required Question Type | Example |
|----------------------|---------|
| "What's included?" | Full feature list with prices |
| "Silver vs Gold difference?" | Feature comparison + $375 upgrade framing |
| "Annual renewal cost?" | Exact figures with competitor comparison |
| "Formation timeline?" | Standard vs. expedited |
| "Can I upgrade later?" | Yes, for $375 + renewal difference |
| "Crypto accepted?" | Yes, with privacy alignment note |
| "Money-back guarantee?" | 30-day, no questions |
| **"How does this compare to others?"** | Budget ($0 + hidden fees) vs. premium ($2,750 consultation-gated) vs. Incorporate123 (all-inclusive, self-service, human support available) |

---

## Final CTA Section

Bottom-of-page conversion. Dark background matching differentiator section.

| Element | Content |
|---------|---------|
| **Headline** | "Ready to Protect Your Privacy?" (or relevant pillar action) |
| **Subtext** | "[Package] — $[price] all-inclusive. [Key differentiator summary]." |
| **Primary CTA** | "Order Now — $[price] →" |
| **Secondary CTA** | "Schedule a Consultation →" |
| **Phone** | "(775) xxx-xxxx · Talk to a Specialist" |

---

## Package Page Inventory

| State | Packages | URL Pattern |
|-------|----------|-------------|
| Wyoming | Gold (Privacy), Silver (Formation) | `/wyoming-private-incorporation/`, `/wyoming-incorporation/` |
| Nevada | Gold (Privacy), Silver (Formation), Bronze | `/nevada-private-incorporation/`, `/nevada-incorporation/`, `/nevada-bronze/` |
| California | Private Package | `/california-private-llc/` (or similar) |
| Florida | Private Package | `/florida-private-llc/` (or similar) |
| Shelf | Shelf Companies | `/shelf-companies/` |

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
