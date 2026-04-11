# Tier / Package Page

> URL: `/bronze`, `/silver`, `/gold` (with `?state=wyoming` parameter) | Layout: 70/30 split | Template — 3 tiers × 4 states

## Purpose

Primary conversion endpoint. Shows package details, pricing, features, and drives to checkout. All three tiers use a shared `TierPageClient` component with data-driven content.

## Layout

- 70/30 split: main content (left) + sticky order sidebar (right)
- Sidebar collapses to sticky bottom bar on mobile
- Max-width: 1200px
- Wrapped in `PackageLayout`

## Sections

1. **Breadcrumbs** — Home > Packages > [State] [Tier]
2. **Package Hero** — Eyebrow badge (state + tier), H1: "[State] [Tier] Package", subheadline with feature summary, price prominent, trust strip (25 years, money-back, phone), dual CTAs: "Order Now — $X" + "Schedule Consultation".
3. **State Selector** — Dropdown to switch state. Updates pricing and available tiers.
4. **Entity Type Toggle** — LLC ↔ Corporation. Shows "+$300 for Corporation" where applicable. Updates all prices instantly.
5. **Pricing Comparison Grid** — All available tiers for selected state shown side-by-side. Feature rows with checkmarks/tooltips. Current tier highlighted. "Most Popular" badge on Gold. CTA row at bottom.
6. **Value Comparison Callout** — Dark background: "$2,000+ in Year 1 value" with line-by-line breakdown (nominees $400-$5,000 elsewhere, RA $125-$199, EIN $50-$99, etc.).
7. **Add-On Configurator** — Checkboxes: Expedited Filing +$150, Corporate Record Book +$75, Foreign State Registration +$350-$500. Running total updates real-time.
8. **Progressive Disclosure** — 3 expandable sections: "What is a [State] LLC?", "How Nominees Protect You" (Gold only), "What Happens After Formation".
9. **Also Consider** — 3 cross-sell cards to other tier/state combos.
10. **Trust & Social Proof** — Trust bar + 2-3 testimonials + money-back badge.
11. **FAQ Accordion** — 8-10 tier-specific questions. Includes competitive comparison Q.
12. **Final CTA Section** — Repeat "Order Now" + consultation + phone.

**Sidebar (desktop):**

- Running total: selected tier + add-ons + total
- "Order Now" button
- Money-back guarantee badge
- Phone number

## Content Status

| Section                | Status        | Notes                                        |
| ---------------------- | ------------- | -------------------------------------------- |
| Hero/pricing           | Mostly ready  | Pricing from matrix, subheadline needs David |
| Comparison grid        | Ready         | Feature list defined per tier                |
| Value callout          | Ready         | Breakdown numbers spec'd                     |
| Add-ons                | Pending       | Final add-on list needs David confirmation   |
| Progressive disclosure | Needs writing | 300-400 words each section                   |
| Testimonials           | Blocked       | Waiting on David                             |
| FAQ                    | Needs writing | Especially competitive comparison answer     |

## Tier Definitions

| Tier       | What's Included                                                         | Price Range |
| ---------- | ----------------------------------------------------------------------- | ----------- |
| **Bronze** | Formation + compliance (RA, annual filings, record keeping, state fees) | Lowest      |
| **Silver** | Bronze + virtual office + mail forwarding                               | Mid         |
| **Gold**   | Silver + year-round nominee privacy service                             | Premium     |

**Key rule:** Virtual Office is NOT an add-on — it defines Silver. Nominee service defines Gold.

## Key Components

`TierPageClient`, `PackageLayout`, `StateSelector`, `EntityTypeToggle`, `PricingGrid`, `AddOnConfigurator`, `ProgressiveDisclosure`, `FAQAccordion`, `TestimonialCarousel`, `TrustSignalsBar`, `RunningTotal`

## Prototype Status

Fully built. All three tiers functional with state parameter support, entity toggle, add-on configurator, and running total. Uses shared `TierPageClient` with tier definition data.

## Existing Specs

- Wireframe: `../Wireframes Page Specs/Incorporate123_Package_Page_Wireframe_Spec.md`
- Content Guide: `../v2-post-david-review/05_Package_Page_Content_Guide_v2.md`
- Package Strategy: `../../Meeting Prep Apr 6/01_Package_Strategy_Analysis_v2.md`

## Next Steps

- [ ] Confirm final add-on list with David
- [ ] Write progressive disclosure content (3 sections × 3 tiers)
- [ ] Write competitive comparison FAQ answer
- [ ] Get testimonials from David
- [ ] Verify all pricing against latest package matrix
- [ ] Visual design pass (match brand guide typography/spacing)
