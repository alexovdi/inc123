# Offshore Jurisdiction Page

> URL: `/offshore/:slug` (e.g., `/offshore/nevis`, `/offshore/belize`)
> Layout: Full-width single-column | Template — 5 pages

## Purpose

Jurisdiction-specific offshore formation guide. Explains why this jurisdiction, what's involved, banking, compliance, and costs. Routes to Gold packages (offshore nominees included).

## Layout

- Full-width, single-column
- Max-width: 1000px

## Sections

1. **Breadcrumbs** — Home > Offshore Services > [Jurisdiction]
2. **Jurisdiction Hero** — Flag/icon, H1: "[Jurisdiction] LLC/Corporation Formation", subheadline with key advantage, trust strip.
3. **Advantages Grid** — 4-6 key advantages with icons. E.g., Nevis: favorable charging order statutes, no local taxation, fast formation, strong privacy, no public registry, no required annual meetings.
4. **Formation Process** — Step-by-step: Requirements → Documentation → Filing → Banking → Compliance. Specific to this jurisdiction.
5. **Banking Section** — How to open a bank account in this jurisdiction. KYC requirements, timeline, minimum deposits.
6. **IRS Compliance** — Required filings for this entity type. Links to main IRS compliance content. "We handle all filings" message.
7. **Pricing/Package Connection** — "Offshore nominees included in Gold packages" + Gold package cards.
8. **FAQ Accordion** — 5-8 jurisdiction-specific questions.
9. **Related Jurisdictions** — 3 cards linking to other offshore jurisdictions. "Also consider [X] for [reason]."
10. **WhereToGoNext CTA** — "Ready to form in [Jurisdiction]?" + package CTAs + consultation + phone.

## Jurisdiction Inventory

| Slug           | Jurisdiction           | Content Status          | Key Advantage                             |
| -------------- | ---------------------- | ----------------------- | ----------------------------------------- |
| `nevis`        | Nevis                  | 1,150 words (excellent) | Strongest charging order protection       |
| `belize`       | Belize                 | Content exists          | Low cost, fast formation                  |
| `cook-islands` | Cook Islands           | Content exists          | Strongest AP statutes globally            |
| `panama`       | Panama                 | Content exists          | Banking flexibility, no exchange controls |
| `bvi`          | British Virgin Islands | Content exists          | Most established, recognized worldwide    |

## Content Status

All 5 jurisdiction pages have substantial content from the current site. The Nevis page alone has 1,150 words with legal protections, banking process, IRS compliance, KYC requirements, and 5 FAQ items.

| Section           | Status                         | Notes                                       |
| ----------------- | ------------------------------ | ------------------------------------------- |
| Hero              | Needs writing per jurisdiction | Title + key advantage                       |
| Advantages        | Good content exists            | Extract from current site content           |
| Formation process | Good content exists            | Jurisdiction-specific steps documented      |
| Banking           | Good content exists            | KYC and process documented                  |
| IRS Compliance    | Excellent                      | 1,540 words of compliance content available |
| FAQ               | Partially exists               | 5 Qs for Nevis, others need writing         |

## Key Components

`JurisdictionHero`, `AdvantageGrid`, `FormationProcess`, `BankingSection`, `ComplianceCallout`, `PackageCTABlock`, `FAQAccordion`, `RelatedJurisdictions`, `WhereToGoNext`

## Prototype Status

Fully built. Dynamic pages for all 5 jurisdictions via slug routing. Has hero, advantages grid, FAQ accordion, related jurisdictions, WhereToGoNext CTA, 404 fallback for invalid slugs.

## Existing Specs

- No dedicated wireframe spec (NEW)
- Source content: `../mapped-content-from-real-one/offshore/` (individual jurisdiction files)

## Next Steps

- [ ] Populate real content for all 5 jurisdictions from mapped content
- [ ] Write hero copy per jurisdiction (unique H1 + advantage)
- [ ] Verify banking and formation details with David
- [ ] Format IRS compliance content for each jurisdiction
- [ ] Write FAQ answers for jurisdictions missing them
- [ ] Design pass: consistent layout across all 5 pages
- [ ] Priority: Nevis first (most complete content), then others
