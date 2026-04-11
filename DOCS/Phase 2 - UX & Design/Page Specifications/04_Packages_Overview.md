# Packages Overview

> URL: `/packages` | Layout: Full-width single-column | Unique page

## Purpose

Marketing-oriented packages landing page. Unlike `/compare-packages` (decision support with comparison table), this page sells the package concept — why all-inclusive, what makes Incorporate123 different, and routes to the right tier. Entry point for visitors arriving via "incorporation packages" search queries.

## Layout

- Full-width, single-column
- No sidebar
- Max-width: 1200px

## Sections

1. **Breadcrumbs** — Home > Packages
2. **Hero** — H1: "All-Inclusive Business Formation Packages", subheadline emphasizing no hidden fees + everything included. Trust strip: 25 years, money-back, phone. Dual CTAs: "Compare All Packages" + "Not Sure? Try Our Package Finder".
3. **Entity Type Toggle + State Selector** — Filters the tier cards below.
4. **Three Tier Cards** — Bronze, Silver, Gold shown as cards (not comparison table). Each card: tier name, price, 4-5 key features, "What's Included" expandable, "Start [Tier]" CTA. Gold highlighted as "Most Popular".
5. **"How It Works"** — 4-step process: Choose Your Goal → Select a Package → We Handle Filing → You're Protected. Same component as homepage but in packages context.
6. **"What Makes Our Packages Different"** — 3 differentiator blocks: All-Inclusive (no add-on surprise), Year-Round Nominees (not "for a day"), Offshore Included (no extra cost in Gold). Each with icon + title + 2-sentence description.
7. **Shelf Companies Callout** — Special card for shelf companies: "Need an Established Entity?" with brief explanation + "Browse Shelf Companies" CTA. Links to shelf company content.
8. **FAQ Accordion** — 6-8 questions about packages generally: "What does all-inclusive mean?", "Can I switch tiers?", "What are annual renewals?", "Do you offer a la carte services?" (answer: no), "What states do you serve?", "What's a shelf company?", "Do you accept cryptocurrency?"
9. **Trust & Social Proof** — Testimonials or stats + trust bar.
10. **Final CTA** — "Compare All Packages Side-by-Side" → /compare-packages + "Talk to a Specialist" + phone.

## Content Status

| Section         | Status        | Notes                                    |
| --------------- | ------------- | ---------------------------------------- |
| Hero            | Needs writing | Straightforward, can write now           |
| Tier cards      | Ready         | Pricing and features from matrix         |
| How It Works    | Ready         | Reuse homepage component                 |
| Differentiators | Needs writing | Content direction clear from brand guide |
| Shelf companies | Needs writing | Brief intro + link                       |
| FAQ             | Needs writing | Derive from package strategy docs        |
| Testimonials    | Blocked       | Waiting on David                         |

## Key Components

`StateTabs`, `EntityTypeToggle`, `TierCard`, `HowItWorks`, `DifferentiatorBlock`, `ShelfCompanyCallout`, `FAQAccordion`, `TrustSignalsBar`, `CTASection`

## Prototype Status

Fully built. Has entity toggle, state selector, tier cards, How It Works, FAQ, trust stats, CTA blocks. Needs differentiator section and shelf company callout added.

## Existing Specs

- No dedicated wireframe spec (NEW)
- Related: Package wireframe spec + content guide v2

## Relationship to Compare Packages

| Aspect   | `/packages`                          | `/compare-packages`                   |
| -------- | ------------------------------------ | ------------------------------------- |
| Intent   | "What packages exist?"               | "Which package should I choose?"      |
| Format   | Marketing cards                      | Comparison table                      |
| Audience | Early funnel, discovery              | Decision-ready, comparing             |
| CTA      | Routes to compare or individual tier | Routes to individual tier or checkout |

## Next Steps

- [ ] Write hero copy
- [ ] Write differentiator block descriptions
- [ ] Write shelf company callout copy
- [ ] Write FAQ answers
- [ ] Add differentiator section to prototype
- [ ] Add shelf company callout to prototype
- [ ] Design pass for tier cards (ensure they don't duplicate compare-packages)
