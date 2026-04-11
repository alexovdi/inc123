# Comparison Page

> URL: `/:slug` (e.g., `/wyoming-vs-nevada-privacy`, `/llc-vs-corporation`)
> Layout: Full-width single-column | Template — ~12 pages

## Purpose

Decision support. Side-by-side comparison of two options (states, entity types, packages, or tiers). Helps visitors who are stuck between choices. High SEO value — "X vs Y" queries have strong commercial intent.

## Layout

- Full-width, single-column (no sidebar — table needs width)
- Max-width: 1000-1200px
- Table may use horizontal scroll with sticky first column on mobile

## Sections

1. **Breadcrumbs** — Home > [Pillar] > [Comparison Title]
2. **Comparison Hero** — Eyebrow: "Comparison", H1: "[Option A] vs [Option B] for [Topic]", subheadline, Quick Verdict (1 sentence summarizing the winner/tradeoff).
3. **Primary Comparison Table** — 3-column: Factor | Option A | Option B. 12-16 rows. Winner indicator per row (subtle highlight). Table footer with summary verdict. Responsive: stacked cards or horizontal scroll on mobile.
4. **Dual Package CTAs** — 2 cards side-by-side: Package for Option A + Package for Option B. Each with price, 3 features, "Start" CTA. Lower-cost option first (Wyoming default).
5. **Decision Guide** — 3 blocks:
   - "Choose [Option A] If..." — 4-5 checkmark bullets with 1-2 sentence descriptions
   - "Choose [Option B] If..." — 4-5 checkmark bullets
   - "What's Identical in Both" — List of shared features
6. **Cross-Pillar Callout** — Links to related comparison in adjacent pillar.
7. **FAQ Accordion** — 6-8 comparison-specific questions.
8. **Bottom CTAs** — Repeat dual package cards.
9. **"Where to Go Next"** — 3 contextual suggestions.

## Comparison Page Inventory

### State vs State (4 pages)

| Slug                                 | Title                         | Content Status             |
| ------------------------------------ | ----------------------------- | -------------------------- |
| `wyoming-vs-nevada-privacy`          | Wyoming vs Nevada for Privacy | Data spec'd, needs writing |
| `wyoming-vs-nevada-asset-protection` | Wyoming vs Nevada for AP      | Data spec'd, needs writing |
| `wyoming-vs-nevada`                  | Wyoming vs Nevada (general)   | 1,350 words (excellent)    |
| `wyoming-vs-delaware`                | Wyoming vs Delaware           | Needs writing              |

### Entity vs Entity (3 pages)

| Slug                             | Title                          | Content Status          |
| -------------------------------- | ------------------------------ | ----------------------- |
| `llc-vs-corporation`             | LLC vs Corporation             | 1,400 words (excellent) |
| `llc-vs-scorp-vs-ccorp-tax`      | LLC vs S-Corp vs C-Corp (Tax)  | Needs writing           |
| `shelf-company-vs-new-formation` | Shelf Company vs New Formation | Needs writing           |

### Best-of Comparisons (3 pages)

| Slug                              | Title                           | Content Status |
| --------------------------------- | ------------------------------- | -------------- |
| `best-state-for-privacy`          | Best State for Business Privacy | Needs writing  |
| `best-state-for-asset-protection` | Best State for Asset Protection | Needs writing  |
| `incorporate123-vs-competitors`   | Incorporate123 vs Competitors   | Needs writing  |

### Package Comparisons (2 pages)

| Slug                     | Title                    | Content Status |
| ------------------------ | ------------------------ | -------------- |
| `gold-vs-silver-wyoming` | Gold vs Silver (Wyoming) | Needs writing  |
| `gold-vs-silver-nevada`  | Gold vs Silver (Nevada)  | Needs writing  |

## Comparison Table Row Examples (State vs State)

Public Member Disclosure, Privacy Statute Strength, Annual Filing Fee, Initial Filing Fee, State Income Tax, State Business Tax, Annual Report Complexity, Nominee Availability, Offshore Nominees, Offshore Records Custodian, Gold Price (LLC), Gold Price (Corp), Annual Renewal, Physical Office Advantage, Shelf Company Availability, Best For (summary)

## Content Status Summary

- **Ready to publish:** 2 pages (LLC vs Corp, WY vs NV general)
- **Data spec'd, needs writing:** 3 pages
- **Needs writing from scratch:** 7 pages

## Key Components

`ComparisonHero`, `ComparisonTable`, `WinnerIndicator`, `DualPackageCTA`, `DecisionGuide`, `CrossPillarCallout`, `FAQAccordion`, `WhereToGoNext`

## Prototype Status

Rendered via `CatchAllPage` using `ComparisonPageTemplate`. Template functional with comparison table, dual CTAs, decision guide. Needs real data and copy for each comparison.

## Existing Specs

- Wireframe: `../Wireframes Page Specs/Incorporate123_Comparison_Page_Wireframe_Spec.md`
- Wireframe v2: `../v2-post-david-review/Incorporate123_Comparison_Page_Wireframe_Spec_v2.md`

## Next Steps

- [ ] Write the 2 ready-to-publish pages (LLC vs Corp, WY vs NV) with real copy
- [ ] Write state vs state comparison data (WY vs NV Privacy, WY vs NV AP)
- [ ] Verify all comparison table data with David (fees, statutes, requirements)
- [ ] Write decision guide copy for each comparison
- [ ] Write FAQ answers
- [ ] Prioritize: launch with top 6, add remaining post-launch
- [ ] Consider: "Best State for X" pages may need 4+ column table (WY, NV, DE, CA, FL)
