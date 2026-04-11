# Offshore Hub

> URL: `/offshore` | Layout: Full-width single-column | Unique page

## Purpose

Entry point for offshore services. Routes visitors to jurisdiction-specific pages. Establishes that offshore structures are legal, tax-compliant, and privacy-focused — combats the "offshore = illegal" misconception. Links to IRS compliance content.

## Layout

- Full-width, single-column
- Max-width: 1200px

## Sections

1. **Breadcrumbs** — Home > Offshore Services
2. **Hero** — H1: "Offshore Asset Protection & Privacy". Subheadline: "Legal offshore structures with full IRS compliance — privacy, not evasion." Dual CTAs: "Explore Jurisdictions" (scroll to grid) + "View Gold Packages" (offshore nominees included in Gold).
3. **"Why Offshore?"** — 3-4 benefit blocks with icons:
   - Asset Protection: "Additional layer beyond domestic charging order protection"
   - Privacy: "Offshore nominees and records custodian — unique to Incorporate123"
   - Tax Compliance: "Fully IRS-compliant — we help with all required filings"
   - Diversification: "Multi-jurisdiction strategy reduces single-country risk"
4. **Jurisdiction Grid** — 5 jurisdiction cards (2-3 column desktop, stacked mobile). Each card:
   - Jurisdiction flag/icon
   - Name (Nevis, Belize, Cook Islands, Panama, British Virgin Islands)
   - 2-3 key advantages
   - "Explore [Jurisdiction] →" CTA
5. **"How It Works"** — 3-4 step process: Choose Jurisdiction → Formation + Banking → IRS Compliance Filing → Ongoing Management.
6. **IRS Compliance Callout** — Prominent section emphasizing legal compliance. Links to `/offshore/irs-compliance` or equivalent content. Lists key forms: 3520, 5471, 8858, FBAR. Message: "We handle all required IRS filings — no surprises."
7. **Package Connection** — "Offshore nominees and records custodian are included free in every Gold package." 2 Gold cards: WY Gold $1,275, NV Gold $1,800.
8. **FAQ Accordion** — 5-6 questions: "Is offshore legal?", "Do I need to report to the IRS?", "Which jurisdiction is best?", "How much does it cost?", "Can I bank offshore?", "What is an offshore records custodian?"
9. **Final CTA** — "Ready to Explore Offshore Protection?" + package CTAs + phone + consultation.

## Content Status

| Section            | Status              | Notes                                           |
| ------------------ | ------------------- | ----------------------------------------------- |
| Hero               | Needs writing       | Direction clear                                 |
| Why Offshore       | Needs writing       | Framework from mapped content                   |
| Jurisdiction grid  | Ready               | 5 jurisdictions defined, descriptions exist     |
| How It Works       | Needs writing       | Process defined in offshore content             |
| IRS Compliance     | Good content exists | 1,540 words of IRS compliance content available |
| Package connection | Ready               | Standard Gold package CTAs                      |
| FAQ                | Partially ready     | Several answers exist in mapped content         |

**Source content:** Offshore hub has good content from current site explaining mechanics, jurisdiction selection, banking, pass-through taxation, IRS compliance.

## Key Components

`OffshoreHero`, `BenefitBlock`, `JurisdictionCard`, `HowItWorks`, `ComplianceCallout`, `PackageCTABlock`, `FAQAccordion`, `CTASection`

## Prototype Status

Fully built. Has hero, jurisdiction grid with icon cards, description snippets, links to jurisdiction pages. Needs content expansion and IRS compliance section.

## Existing Specs

- No dedicated wireframe spec (NEW)
- No content guide (NEW)
- Source content: `../mapped-content-from-real-one/offshore/`

## Next Steps

- [ ] Write hero and "Why Offshore" sections using mapped content as base
- [ ] Write "How It Works" process steps
- [ ] Build IRS compliance section (content exists — needs formatting)
- [ ] Write jurisdiction card descriptions (brief — detail on individual pages)
- [ ] Write FAQ answers
- [ ] Design pass: ensure "legal and compliant" message is prominent (combat misconceptions)
- [ ] Consider adding a "Myths vs Facts" section about offshore structures
