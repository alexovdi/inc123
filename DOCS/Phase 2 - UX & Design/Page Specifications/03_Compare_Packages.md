# Compare Packages

> URL: `/compare-packages` | Layout: Full-width single-column | Unique page

## Purpose

Side-by-side comparison of all package tiers for a given state. Helps visitors who know they want to form but haven't decided on a tier. Decision-support page, not product page.

## Layout

- Full-width, single-column
- No sidebar
- Max-width: 1200px
- Comparison table may scroll horizontally on mobile

## Sections

1. **Breadcrumbs** — Home > Compare Packages
2. **Hero** — H1: "Compare All Packages", subheadline: "Every package is all-inclusive — no hidden fees, no surprise add-ons." State selector + entity type toggle integrated into hero or just below.
3. **State Tabs** — Wyoming | Nevada | California | Florida. Switches the comparison table content. Wyoming default (70% of clients).
4. **Entity Type Toggle** — LLC ↔ Corporation. Updates all pricing in the table.
5. **Comparison Table** — 3-4 columns (Bronze, Silver, Gold + optional Shelf). Rows: Price, State Filing Fees, Registered Agent, EIN, Operating Agreement, Corporate Records, Virtual Office, Mail Forwarding, Year-Round Nominees, Offshore Nominees, Offshore Records Custodian, Annual Renewal. Checkmarks, dashes, and tooltips. Highlighted "Most Popular" column.
6. **"Which Package Is Right for You?"** — Decision guide: 3 blocks with icons. "Choose Bronze if..." (just need formation + compliance). "Choose Silver if..." (need a business address + mail). "Choose Gold if..." (want maximum privacy + nominees).
7. **Package Wizard CTA** — "Not sure? Answer 3 questions" → interactive wizard shortcut or link to guided flow.
8. **Add-Ons Section** — Brief list of available add-ons with pricing (Expedited Filing, Foreign State Registration, Domestication). "Add-ons can be selected during checkout."
9. **Trust Signals** — Trust bar + money-back guarantee.
10. **FAQ Accordion** — 5-6 questions: "What's included in all packages?", "Can I upgrade later?", "What's the difference between Gold and Silver?", "Do I need a virtual office?", "What are annual renewal costs?"
11. **Final CTA** — "Ready to start?" + 3 tier CTAs (Start Bronze, Start Silver, Start Gold) + phone fallback.

## Content Status

| Section          | Status          | Notes                                 |
| ---------------- | --------------- | ------------------------------------- |
| Hero             | Needs writing   | Simple, can write now                 |
| Comparison table | Ready           | Data from package matrix              |
| Decision guide   | Needs writing   | Framework clear from tier definitions |
| Package wizard   | Partially built | Wizard exists in prototype homepage   |
| Add-ons          | Pending         | Final list needs David confirmation   |
| FAQ              | Needs writing   | Can derive from package content guide |

## Key Components

`StateTabs`, `EntityTypeToggle`, `ComparisonTable`, `DecisionGuide`, `PackageWizard`, `AddOnList`, `TrustSignalsBar`, `FAQAccordion`, `CTASection`

## Prototype Status

Fully built. Has state tabs, entity toggle, tier cards with pricing. Needs design refinement and decision guide section added.

## Existing Specs

- No dedicated wireframe spec (NEW)
- Related: `../Wireframes Page Specs/Incorporate123_Package_Page_Wireframe_Spec.md`
- Package data: `../../Meeting Prep Apr 6/08_Package_Data_Reference_v2.md`

## Next Steps

- [ ] Write decision guide copy ("Choose X if...")
- [ ] Add "Which Package Is Right for You?" section to prototype
- [ ] Confirm add-on list with David
- [ ] Write FAQ answers
- [ ] Add package wizard shortcut
- [ ] Design pass — ensure table is scannable and not overwhelming
