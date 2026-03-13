# Incorporate123 — Package Page Wireframe Specification (Wyoming Gold)

**Prepared by:** BIT Studios
**Prepared for:** David, Incorporate123
**Date:** March 2026
**Phase:** 2 — UX & Interactive Prototyping
**Template Type:** Package Detail Page (1 of 8–10)
**URL:** `/wyoming-private-incorporation/`
**Reuse:** Once approved, this template is replicated for all package pages (Wyoming Silver, Nevada Gold, Nevada Silver, Nevada Bronze, California Private, Florida Private, Shelf Companies) with content and pricing variations.

---

## 1. Page Purpose & Strategic Role

The package page is the primary conversion endpoint — this is where visitors buy. It is the single most complex template on the entire site. The Wyoming Gold (Private) package is the hero product: the most recommended, most profitable, and most differentiated offering. This page must accomplish four things simultaneously: show the visitor exactly what they're getting, justify the premium price through included-value framing, make it effortless to start the checkout process, and reassure anxious buyers through trust signals.

This page sits at the bottom of every funnel: Privacy pillar → clusters → comparison → here. Asset Protection pillar → clusters → here. Formation pillar → here via upgrade messaging. Homepage → direct package link → here.

### Primary Objectives

- Present the 3-tier pricing comparison (Bronze/Silver/Gold) with Gold visually highlighted as recommended
- Provide interactive tooltips explaining what each feature means
- Allow LLC/Corp entity type toggle that switches all pricing
- Offer add-on configurator with dynamic running total
- Support both self-service ("Order Now") and consultation conversion paths
- Justify premium pricing through value-comparison messaging vs. competitors
- Reduce purchase anxiety through trust signals, guarantee, and FAQ

### Target Audiences Arriving at This Page

| Audience | Arrived From | What They Need |
|----------|-------------|----------------|
| Privacy Researcher | Privacy pillar → comparison → here | Confirmation that Gold is right; feature detail; checkout |
| Asset Protection Cross-Sell | AP pillar → cross-pillar link → here | Understanding of privacy add-on value; Gold justification |
| Informed Buyer | Homepage package link or direct search | Quick price confirmation; feature scan; checkout |
| Formation Upgrader | Formation pillar → "add privacy for $375" | Side-by-side Silver vs. Gold; clear upgrade value |
| Comparison Shopper | WY vs NV comparison page → here | State-specific detail; how this package compares to Nevada |

---

## 2. Breadcrumb Navigation

```
Home > Packages > Wyoming Gold (Private)
```

---

## 3. Package Hero Section

Establishes the package identity and immediately shows the price with "all-inclusive" framing.

### Content

| Element | Content |
|---------|---------|
| Breadcrumb | Home > Packages > Wyoming Gold (Private) |
| Pillar Identity | Privacy pillar accent (blue) — this is a privacy package |
| Eyebrow | "Wyoming LLC · Privacy Package" |
| H1 Headline | "Wyoming Gold Package — Complete Privacy Formation" |
| Subheadline | "Year-round nominee services, offshore records, registered agent, EIN, operating agreement, and all state fees — everything included for $1,275. Annual renewal: $525 with nominees." |
| Primary CTA | "Order Now — $1,275 →" → scrolls to checkout/configurator or routes to `/checkout/configure/` |
| Secondary CTA | "Schedule a Consultation →" → `/contact/` |
| Trust Strip | "All-Inclusive · 30-Day Money-Back Guarantee · Trusted Since 2000 · Crypto Accepted" |

### Above-Fold Requirements

Visible without scrolling on desktop:
- Package name and price
- "All-inclusive" label
- Both CTAs
- Trust strip
- Top edge of the pricing comparison grid

---

## 4. Entity Type Toggle

Allows visitors to switch between LLC and Corporation pricing. This toggle affects ALL prices displayed on the page.

### Behavior

| Element | Content |
|---------|---------|
| Toggle Label | "Choose Your Entity Type" |
| Option A (default) | "LLC" — selected by default |
| Option B | "Corporation" |
| Toggle Style | Pill/segmented control with active state indicator |
| Effect | Switching to Corporation adds $300 to all tier prices (Wyoming Corp filing fees are higher). All prices, the running total, and the CTA labels update instantly. |

### Price Matrix (Wyoming)

| Tier | LLC Price | Corp Price |
|------|-----------|-----------|
| Bronze | N/A (Wyoming has no Bronze) | N/A |
| Silver | $900 | $1,200 |
| Gold | $1,275 | $1,575 |

Note: Wyoming only has Silver and Gold tiers. The 3-tier grid shows Silver and Gold side by side, with Gold highlighted. For Nevada pages, all three tiers (Bronze/Silver/Gold) are present.

---

## 5. Pricing Comparison Grid

The centerpiece of the page. Side-by-side tier comparison showing exactly what's included in each package.

### Layout

**Desktop:** 2-column grid (Silver left, Gold right) for Wyoming. Gold column is visually elevated — highlighted border, "Most Popular" badge, slightly larger or raised card.

**Mobile:** Stacked cards. Gold card appears first (top). Each card shows key features with an expandable "See all features" toggle.

### Grid Structure

#### Column Headers

| Element | Silver | Gold |
|---------|--------|------|
| Tier Name | "Wyoming Silver" | "Wyoming Gold" |
| Subtitle | "Expert Formation" | "Complete Privacy" |
| Badge | — | "Most Popular" / "Recommended" |
| Price | "$900" (LLC) | "$1,275" (LLC) |
| Price Label | "all-inclusive" | "all-inclusive" |
| Renewal | "$325/year" | "$525/year with nominees" |
| Primary CTA | "Start Silver — $900 →" | "Start Gold — $1,275 →" |

#### Feature Rows

Each row has a feature name, an info tooltip icon (ⓘ), and a checkmark (✓) or dash (—) per column.

| Feature | Tooltip Content | Silver | Gold |
|---------|----------------|--------|------|
| **State Filing Fees** | "Wyoming LLC filing fee ($100) included — you don't pay it separately." | ✓ Included | ✓ Included |
| **Registered Agent (1 year)** | "A registered agent receives legal documents on your behalf. Required by Wyoming law. Includes a real Reno, NV address." | ✓ Included | ✓ Included |
| **Custom Corporate Records** | "Operating agreement (LLC) or bylaws (Corp), membership certificates, and organizational meeting minutes prepared for your entity." | ✓ Included | ✓ Included |
| **Company Secretary** | "Corporate secretary services for maintaining your entity records and filings." | ✓ Included | ✓ Included |
| **EIN (Federal Tax ID)** | "We file for your Employer Identification Number with the IRS — required for banking, taxes, and hiring. Competitors charge $50–$99 for this." | ✓ FREE | ✓ FREE |
| **Bank Account Assistance** | "Guidance and documentation to open a business bank account for your new entity." | ✓ FREE | ✓ FREE |
| **Year-Round Nominee Officer** | "A nominee officer/director appears on all public state filings instead of your name — not just at formation, but every year, on every annual report. Competitors charge $400–$5,000/year." | — | ✓ Included |
| **Offshore Nominee Directors** | "Your nominee directors are based offshore, outside U.S. jurisdiction. Additional privacy layer that domestic nominees can't provide. Free since 2012." | — | ✓ FREE |
| **Offshore Records Custodian** | "Your corporate records are maintained by our offshore custodian — not accessible through U.S. subpoena processes. Unique to Incorporate123." | — | ✓ Included |
| **Weekly Mail Forwarding** | "Business mail received at your registered agent address is forwarded to you weekly." | — | ✓ Included |

#### CTA Row (bottom of grid)

Each column repeats its CTA at the bottom:
- Silver: "Start Silver — $900 →"
- Gold: "Start Gold — $1,275 →"

Both route to the checkout flow with the selected tier pre-configured.

### Tooltip Behavior

- Desktop: Hover over ⓘ icon to show tooltip. Tooltip appears above the icon, flips down if near viewport top.
- Mobile: Tap ⓘ icon to toggle tooltip. Tap anywhere else to dismiss.
- Tooltips have a small arrow pointing to the trigger icon.
- Content is 1–2 sentences max.

---

## 6. Value Comparison Callout

Positioned immediately below the pricing grid. Reframes the price from "cost" to "included value."

### Content

| Element | Content |
|---------|---------|
| Headline | "What's Actually Included — The Full Value" |
| Comparison Box | "Wyoming Gold Package: $1,275 all-inclusive. That includes year-round nominee services (competitors charge $400–$5,000/year), registered agent ($125–$199/year elsewhere), EIN filing ($50–$99 elsewhere), operating agreement (included), and state filing fees (included). Total value of included services: $2,000+ in Year 1. Annual renewal: $525 with nominees — less than what competitors charge for nominee services alone." |
| Visual Treatment | Highlighted box or card — this is a key persuasion element that should stand out from surrounding content |

---

## 7. Add-On Configurator

Optional services that can be added to the selected package. Checkboxes with a running total.

### Section Header

| Element | Content |
|---------|---------|
| Headline (H2) | "Customize Your Package" |
| Subtext | "Optional add-ons to enhance your formation. Select any that apply — your total updates in real time." |

### Add-Ons List

Group into "Recommended" and "Additional Services."

**Recommended Add-Ons:**

| Add-On | Price | Description | Expandable Detail |
|--------|-------|-------------|-------------------|
| Expedited Filing (24-hour rush) | +$150 | "Get your entity filed within 24 hours instead of the standard 5–7 business days." | Processing timeline details, when to choose this |
| Virtual Office (Wyoming address) | +$400 | "A dedicated Wyoming business address with unlimited mail scanning, forwarding, and a virtual phone number." | What's included, how mail forwarding works |
| Corporate Record Book | +$75 | "Physical bound record book with your operating agreement, membership certificates, and meeting minutes." | What's in the book, why you'd want a physical copy |

**Additional Services:**

| Add-On | Price | Description | Expandable Detail |
|--------|-------|-------------|-------------------|
| Foreign State Registration | +$350–$500 | "Register your Wyoming entity to do business in another state (CA, FL, TX, NY, etc.). Required if you have physical operations in another state." | Which states require this, timeline, what's included |
| Shelf Company Upgrade | Varies | "Upgrade to an aged entity dating back to 2000 for instant business history. Pricing based on entity age." | Why aged entities matter, available inventory |
| Additional State Filing | +$300–$500 | "Form an additional entity in another state as part of a multi-entity structure." | When multi-entity makes sense |

### Running Total

| Element | Behavior |
|---------|----------|
| Position | Sticky sidebar on desktop, sticky bottom bar on mobile |
| Content | Selected tier name + price, each checked add-on + price, total |
| Updates | Real-time as checkboxes are toggled |
| CTA | "Proceed to Checkout — $[total] →" |
| Format | Prices in mono font for clarity |

### Add-On Interaction

- Checkbox + label + price on one line
- 1-sentence description below
- "Learn more ↓" expands 2–3 sentence detail
- Checking/unchecking instantly updates the running total
- Maximum 6–8 add-ons visible (no overwhelming lists)

---

## 8. Progressive Disclosure — "What You Need to Know"

Educational content for the 20% researchers who want to understand everything before buying. Follows the same scanner/reader pattern as pillar pages.

### Sections (each with expandable detail)

| Section | Scanner Content (visible) | Expandable Detail |
|---------|--------------------------|-------------------|
| "What is a Wyoming LLC?" | 2–3 sentences: A Wyoming LLC is a limited liability company formed under Wyoming state law. Wyoming offers the strongest privacy protections, no state income tax, and the lowest filing fees of any privacy-friendly state. | 300–400 words on Wyoming LLC advantages, formation process, timeline |
| "How Nominees Protect You" | 2–3 sentences: A nominee officer appears on all public state filings instead of your real name. This means database searches, lawsuit discovery, and competitor research all find the nominee — not you. | 300–400 words on how nominee services work, year-round vs. formation-day, offshore nominees |
| "What Happens After Formation" | 2–3 sentences: After we file your entity, you receive your formation documents, EIN confirmation, and nominee setup within 5–10 business days (or 24 hours with expedited filing). Year-round compliance is handled for you. | 300–400 words on post-formation timeline, what documents you receive, ongoing compliance |

---

## 9. "Also Consider" — Related Packages

Cross-sell to other relevant packages. Prevents the page from being a dead end if Wyoming Gold isn't the right fit.

### Layout

3 cards in a horizontal row (desktop); horizontal scroll (mobile).

| Card | Package | Price | Key Differentiator | CTA |
|------|---------|-------|-------------------|-----|
| 1 | Nevada Gold (Private) | $1,800 | "Nevada's privacy statutes + no state income tax. Same privacy features as Wyoming Gold." | "View Nevada Gold →" |
| 2 | Wyoming Silver | $900 | "Expert formation without privacy features. Upgrade to Gold anytime for $375." | "View Wyoming Silver →" |
| 3 | California/Florida Private | $2,500+ | "Wyoming formation + foreign registration in your home state. Full privacy from CA/FL disclosure laws." | "View CA/FL Private →" |

---

## 10. Trust & Social Proof Section

Package pages carry the heaviest trust burden — this is where money changes hands.

### Trust Signals (horizontal strip)

Same trust bar as homepage: "Trusted Since 2000" · "Real Reno Office" · "30-Day Money-Back Guarantee" · "(775) 555-0123" · "Crypto Accepted" · "Secure Checkout"

### Testimonials

2–3 testimonial cards relevant to Wyoming Gold / privacy formation. Anonymized quotes, first name + state + year, 5-star rating.

### Money-Back Guarantee Callout

| Element | Content |
|---------|---------|
| Badge | Shield/check icon with "30-Day Money-Back Guarantee" |
| Description | "If you're not satisfied with your formation for any reason, contact us within 30 days for a full refund. No questions asked." |

---

## 11. FAQ Accordion

Package-specific questions. Helps with conversion objections and captures long-tail SEO.

### Questions

| # | Question | Answer Summary |
|---|----------|---------------|
| 1 | "What's included in the Wyoming Gold Package?" | Complete list: state filing fees, registered agent (1 year), custom corporate records, company secretary, EIN, bank account assistance, year-round nominee officer, offshore nominee directors, offshore records custodian, weekly mail forwarding. All-inclusive at $1,275 (LLC) or $1,575 (Corp). |
| 2 | "What's the difference between Silver and Gold?" | Silver includes everything for formation but no privacy features. Gold adds year-round nominee services, offshore nominees, offshore records custodian, and weekly mail forwarding. The upgrade is $375 — competitors charge $400–$5,000/year for nominees alone. |
| 3 | "How much is the annual renewal?" | $525/year for Gold (includes continued nominee services, registered agent, and compliance support). $325/year for Silver. Competitors' equivalent renewal: $545+ (WCS), $577+ (NCH without nominees). |
| 4 | "How long does formation take?" | Standard: 5–10 business days. Expedited (24-hour rush): +$150. You receive formation documents, EIN, and nominee confirmation by email. |
| 5 | "Can I upgrade from Silver to Gold later?" | Yes. You can add privacy/nominee services at any time for $375 + the difference in annual renewal. But it's more cost-effective to start with Gold. |
| 6 | "Do you accept cryptocurrency?" | Yes. We accept Bitcoin, Ethereum, XRP, Litecoin, and Monero. Crypto payments align with our commitment to client privacy. |
| 7 | "What if I need to operate in another state?" | Add Foreign State Registration (+$350–$500) during checkout or anytime after formation. This registers your Wyoming entity to do business in states like California, Florida, Texas, or New York. |
| 8 | "Is there a money-back guarantee?" | Yes. 30-day money-back guarantee. If you're not satisfied for any reason, contact us for a full refund. |

---

## 12. Final Conversion CTA Section

Bottom-of-page conversion. Repeats the primary CTAs for visitors who scrolled through everything.

### Content

| Element | Content |
|---------|---------|
| Headline | "Ready to Protect Your Privacy?" |
| Subtext | "Wyoming Gold Package — $1,275 all-inclusive. Year-round nominee services, offshore records, registered agent, EIN, and all state fees included." |
| Primary CTA | "Order Now — $1,275 →" → checkout |
| Secondary CTA | "Schedule a Consultation →" → `/contact/` |
| Phone | "(775) 555-0123 · Talk to a Specialist" |

---

## 13. Mobile-Specific Requirements

### Pricing Grid on Mobile

The 2-column comparison grid transforms on mobile:
- Each tier becomes a full-width card
- Gold card appears FIRST (top) with "Most Popular" badge
- Each card shows: tier name, price, renewal, primary CTA, and 3–4 key features
- "See all features ↓" expands the full feature list with tooltips
- Silver card appears below Gold

### Running Total on Mobile

- Sticky bottom bar replacing the sidebar running total
- Shows: "Gold + [add-ons count] — $[total]" and "Checkout →" button
- Appears when visitor enters the add-on configurator section

### Section Order (Mobile)

1. Breadcrumb
2. Package Hero (price prominent, dual CTAs)
3. Entity Type Toggle (LLC/Corp)
4. Pricing Grid (Gold first, stacked cards)
5. Value Comparison Callout
6. Add-On Configurator (checkboxes with sticky total bar)
7. Progressive Disclosure content
8. Also Consider (horizontal scroll)
9. Trust Signals + Testimonials
10. FAQ Accordion
11. Final CTA
12. Footer

---

## 14. Interaction Behavior

| Element | Behavior |
|---------|----------|
| LLC/Corp Toggle | Switches all prices instantly. Smooth number transition. CTA labels update. |
| Feature Tooltips | Desktop: hover to show. Mobile: tap to toggle. Positioned above icon, flip if near edge. |
| Add-On Checkboxes | Check/uncheck updates running total in real time. Smooth price counter animation. |
| Running Total Sidebar | Sticky on desktop scroll. Stops before footer. Itemized: base + each add-on + total. |
| Progressive Disclosure | Same toggle pattern as pillar page. "Read more →" / "Show less ↑" |
| Mobile Feature Expand | "See all features ↓" on each tier card reveals full feature list. |
| "Also Consider" Cards | Hover: shadow + lift. Click routes to that package page. |
| FAQ Accordion | Single-expand or multi-expand. Smooth animation. Keyboard accessible. |

---

## 15. SEO Requirements

| Element | Value |
|---------|-------|
| Title Tag | "Wyoming Gold Package — Private LLC Formation with Nominees | $1,275 All-Inclusive | Incorporate123" |
| Meta Description | "Wyoming Gold LLC package: $1,275 all-inclusive. Year-round nominee services, offshore records, registered agent, EIN, operating agreement, state fees all included. Annual renewal $525 with nominees. 25 years of expertise." |
| H1 | Hero headline |
| H2s | Feature comparison, value callout, add-ons, educational sections, FAQ |
| Schema | Product schema (name, price, description), FAQ schema, BreadcrumbList |
| Canonical URL | `https://incorporate123.com/wyoming-private-incorporation/` |

---

## 16. Content Dependencies

| Item | Status | Owner |
|------|--------|-------|
| Final package pricing confirmed | Pending | David |
| Feature list per tier confirmed | Pending | David |
| Add-on pricing confirmed | Pending | David |
| Corporation price differential confirmed | Pending | David |
| Testimonials for package pages | David to collect | David |
| Payment gateway credentials (Stripe/PayPal) | Needed for checkout | David |

---

## 17. Component Reuse Map

| Component | First Used | Reused On |
|-----------|-----------|-----------|
| PricingGrid (3-tier comparison) | This page | All 7 other package pages |
| FeatureTooltip | This page | Comparison pages |
| EntityTypeToggle (LLC/Corp) | This page | All package pages, checkout |
| AddOnConfigurator | This page | Checkout Step 1, all package pages |
| RunningTotal (sidebar + mobile bar) | This page | Checkout flow |
| ValueComparisonCallout | This page | All package pages |
| PackageHero | This page | All package pages |
| AlsoConsiderCards | This page | All package pages |
| MoneyBackBadge | This page | Checkout confirmation |
| ProgressiveDisclosure | Pillar page | Reused here |
| FAQAccordion | Pillar page | Reused here |
| TrustSignalsBar | Homepage | Reused here |
| TestimonialCarousel | Homepage | Reused here |

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
