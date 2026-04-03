# Incorporate123 — State Hub Page Wireframe Specification (Wyoming)

**Prepared by:** BIT Studios
**Prepared for:** David, Incorporate123
**Date:** March 2026
**Phase:** 2 — UX & Interactive Prototyping
**Template Type:** State Hub (1 of 4)
**URL:** `/wyoming/`
**Reuse:** Once approved, this template is replicated for Nevada (`/nevada/`), California (`/california/`), and Florida (`/florida/`) with content variations.

---

## 1. Page Purpose & Strategic Role

State hub pages are intent routers for geographic searches. When someone searches "Wyoming LLC" or "Wyoming incorporation," they land here — and this page routes them into the right pillar based on their actual need. The hub aggregates all Wyoming content from all four pillars into a single cross-pillar landing page, preventing state-entry visitors from getting stuck in one silo.

State hubs are structurally unique: they're the only page type that spans all four pillars simultaneously. They don't belong to any single pillar — they sit above the pillar structure as geographic entry points.

### How State Hubs Differ From Other Page Types

| Element       | Pillar Page                             | Cluster Page                        | State Hub                                                                 |
| ------------- | --------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------- |
| Scope         | One pillar, all topics                  | One topic, one pillar               | One state, ALL pillars                                                    |
| Navigation    | Routes to clusters within pillar        | Routes to siblings + package        | Routes to all pillar content for this state                               |
| Pillar color  | Single pillar color                     | Single pillar color                 | Multi-color — shows all 4 pillar identities                               |
| Content depth | Educational with progressive disclosure | Deep long-form                      | Overview summaries + links out                                            |
| CTA pattern   | Soft CTAs → clusters and packages       | Progression → comparison or package | Intent routing → "Wyoming for Privacy" / "WY for AP" / "WY LLC Formation" |

### Target Audiences

| Audience                 | Search Query                                        | Expected Path                                               |
| ------------------------ | --------------------------------------------------- | ----------------------------------------------------------- |
| General WY searcher      | "Wyoming LLC", "Wyoming incorporation"              | Hub → intent card → pillar cluster → package                |
| Privacy-intent via state | "Wyoming private LLC", "Wyoming anonymous LLC"      | Hub → Privacy intent card → WY Privacy cluster → Gold       |
| AP-intent via state      | "Wyoming asset protection"                          | Hub → AP intent card → WY AP cluster → Gold                 |
| Formation-intent         | "form LLC in Wyoming", "Wyoming LLC cost"           | Hub → Formation intent card → WY LLC cluster → Silver/Gold  |
| Returning client         | "Wyoming registered agent", "Wyoming annual report" | Hub → Compliance intent card → RA or Annual Reports cluster |

---

## 2. Breadcrumb Navigation

```
Home > Wyoming
```

State hubs sit directly under Home — they don't belong to any pillar.

---

## 3. State Hero Section

Establishes the state context and immediately presents intent-routing options.

### Content

| Element           | Content                                                                                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Eyebrow           | "State Guide"                                                                                                                                                                                          |
| H1 Headline       | "Wyoming Business Services — Privacy, Protection & Formation"                                                                                                                                          |
| Subheadline       | "Everything Incorporate123 offers in Wyoming: anonymous LLC formation, asset protection structures, expert entity filing, and ongoing compliance support. 25 years of specialized Wyoming experience." |
| State Facts Strip | Quick reference: "No State Income Tax · $62 Annual Report · Strongest Privacy Statutes · Filing Fee ~$100"                                                                                             |

No CTAs in the hero — the intent cards (Section 4) are the primary action mechanism, and they appear immediately below.

---

## 4. Intent Routing Section

The core structural element of the state hub. Four cards — one per pillar — each routing the visitor into that pillar's Wyoming content. This is the equivalent of the homepage's pillar cards, but filtered to Wyoming-only content.

### Section Header

| Element       | Content                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------- |
| Headline (H2) | "What Brings You to Wyoming?"                                                                      |
| Subtext       | "Select your primary need. Each path leads to Wyoming-specific guides, comparisons, and packages." |

### Four Intent Cards

**Layout:** 2×2 grid (desktop), stacked (mobile). Each card uses its pillar identity color as an accent.

#### Card 1: Privacy (Blue accent)

| Element            | Content                                                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pillar Icon        | Shield                                                                                                                                                                          |
| Title              | "Wyoming for Privacy"                                                                                                                                                           |
| Description        | "Wyoming has the strongest privacy statutes in the U.S. Form an anonymous LLC with year-round nominee services and offshore records. Your name never appears on public record." |
| Key Links (3)      | Wyoming Privacy Guide → `/wyoming-privacy/` · Anonymous LLC → `/anonymous-llc/` · Nominee Services → `/nominee-services/`                                                       |
| Card CTA           | "Explore Wyoming Privacy →" → `/wyoming-privacy/`                                                                                                                               |
| Package Quick Link | "Wyoming Gold Package — $1,275 →" → `/wyoming-private-incorporation/`                                                                                                           |

#### Card 2: Asset Protection (Green accent)

| Element            | Content                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pillar Icon        | Vault                                                                                                                                                                     |
| Title              | "Wyoming for Asset Protection"                                                                                                                                            |
| Description        | "Wyoming's charging order protection is among the strongest in the country. Protect real estate, investments, and business assets from lawsuits and creditors."           |
| Key Links (3)      | Wyoming Asset Protection → `/wyoming-asset-protection/` · Charging Order Protection → `/charging-order-protection/` · Investment Holding LLC → `/investment-holding-llc/` |
| Card CTA           | "Explore Wyoming AP →" → `/wyoming-asset-protection/`                                                                                                                     |
| Package Quick Link | "Wyoming Gold Package — $1,275 →" → `/wyoming-private-incorporation/`                                                                                                     |

#### Card 3: Company Formation (Amber accent)

| Element            | Content                                                                                                                                                                                             |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pillar Icon        | Building2                                                                                                                                                                                           |
| Title              | "Wyoming LLC & Corporation Formation"                                                                                                                                                               |
| Description        | "Expert formation with everything included — registered agent, EIN, operating agreement, state fees. Wyoming's low filing costs and zero state income tax make it the top choice for new entities." |
| Key Links (3)      | Wyoming LLC → `/wyoming-llc/` · Wyoming Corporation → `/wyoming-corporation/` · LLC vs Corporation → `/llc-vs-corporation/`                                                                         |
| Card CTA           | "Explore Wyoming Formation →" → `/wyoming-llc/`                                                                                                                                                     |
| Package Quick Link | "Wyoming Silver Package — $900 →" → `/wyoming-incorporation/`                                                                                                                                       |

#### Card 4: Compliance (Purple accent)

| Element            | Content                                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Pillar Icon        | ClipboardCheck                                                                                                                                               |
| Title              | "Wyoming Compliance & Registered Agent"                                                                                                                      |
| Description        | "Year-round registered agent service, annual report filing, corporate minute maintenance, and virtual office options. Ongoing support — not just a mailbox." |
| Key Links (3)      | Wyoming Registered Agent → `/wyoming-registered-agent/` · Annual Reports → `/annual-reports/` · Domestication → `/domestication/`                            |
| Card CTA           | "Explore Wyoming Compliance →" → `/compliance/`                                                                                                              |
| Package Quick Link | "Already have an entity? Contact Us →" → `/contact/`                                                                                                         |

### Intent Card Structure (each card)

| Element             | Description                                                |
| ------------------- | ---------------------------------------------------------- |
| Pillar color accent | Colored top border or left border matching pillar identity |
| Icon                | Pillar-specific icon                                       |
| Title               | "Wyoming for [Pillar]"                                     |
| Description         | 2–3 sentence summary                                       |
| 3 key links         | Most relevant Wyoming content pages under this pillar      |
| Primary CTA         | Routes to the primary WY cluster for this pillar           |
| Package quick link  | Direct shortcut to the relevant package tier               |
| Hover behavior      | Shadow increase + slight lift                              |

---

## 5. Wyoming Package Quick Links

Direct-to-package shortcuts for visitors who already know what they want.

### Section Header

| Element       | Content                                                            |
| ------------- | ------------------------------------------------------------------ |
| Headline (H2) | "Wyoming Packages — All-Inclusive Pricing"                         |
| Subtext       | "Everything bundled. No hidden fees. See exactly what's included." |

### Package Cards

**Layout:** 2 cards side by side (desktop), stacked (mobile).

| Package                    | Price        | Subtitle                     | Key Includes                                                                                   | CTA                                                       |
| -------------------------- | ------------ | ---------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Wyoming Gold (Privacy)     | $1,275 (LLC) | "Complete Privacy Formation" | Year-round nominees · Offshore nominees · Offshore records · Registered agent · EIN · All fees | "View Wyoming Gold →" → `/wyoming-private-incorporation/` |
| Wyoming Silver (Formation) | $900 (LLC)   | "Expert Formation"           | Registered agent · EIN · Operating agreement · All fees · No privacy features                  | "View Wyoming Silver →" → `/wyoming-incorporation/`       |

Below cards: "Compare All Packages →" → `/compare-packages/` · "Need a Corporation? Add $300 for Corp filing" note.

---

## 6. "Why Wyoming?" — State Advantages Section

Brief educational content establishing why Wyoming is a top-tier state for business. Short and scannable — this is not a pillar-depth deep dive.

### Content

| Element       | Content                                                      |
| ------------- | ------------------------------------------------------------ |
| Headline (H2) | "Why Choose Wyoming?"                                        |
| Format        | 6 advantage blocks in a 3×2 grid (desktop), stacked (mobile) |

| #   | Icon       | Title                        | Description                                                                                                                                    |
| --- | ---------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Shield     | "Strongest Privacy Statutes" | "Wyoming law does not require public disclosure of LLC members or managers. This is a statutory protection, not just a practice."              |
| 2   | DollarSign | "Lowest Filing Costs"        | "LLC formation: ~$100. Annual report: $62. No state income tax. No franchise tax. The most cost-effective privacy-friendly state."             |
| 3   | Scale      | "Superior Asset Protection"  | "Wyoming's charging order protection extends to single-member LLCs — one of the few states with this protection."                              |
| 4   | Zap        | "Fast Filing"                | "Wyoming Secretary of State processes filings quickly. Standard: 5–7 business days. Expedited available for 24-hour turnaround."               |
| 5   | Globe      | "No Residency Requirement"   | "You don't need to live in Wyoming or visit to form or maintain your entity. Everything is handled remotely."                                  |
| 6   | Clock      | "25 Years of WY Expertise"   | "Incorporate123 has been forming Wyoming entities since 2000. We know the state's filing requirements, quirks, and advantages inside and out." |

---

## 7. Wyoming Content Map

A comprehensive link section showing ALL Wyoming-related pages across the site. This is the state hub's sitemap function — ensuring visitors can find any WY content from this single page.

### Section Header

| Element       | Content                                                                    |
| ------------- | -------------------------------------------------------------------------- |
| Headline (H2) | "All Wyoming Services & Guides"                                            |
| Layout        | 4-column grid organized by pillar (desktop), accordion per pillar (mobile) |

### Column 1: Privacy

| Link                                      | URL                           |
| ----------------------------------------- | ----------------------------- |
| **Wyoming Privacy** (bold — primary page) | `/wyoming-privacy/`           |
| Anonymous LLC Formation                   | `/anonymous-llc/`             |
| Nominee Services                          | `/nominee-services/`          |
| Best State for Privacy                    | `/best-state-for-privacy/`    |
| Wyoming vs Nevada Privacy                 | `/wyoming-vs-nevada-privacy/` |

### Column 2: Asset Protection

| Link                                | URL                                    |
| ----------------------------------- | -------------------------------------- |
| **Wyoming Asset Protection** (bold) | `/wyoming-asset-protection/`           |
| Charging Order Protection           | `/charging-order-protection/`          |
| Investment Holding LLC              | `/investment-holding-llc/`             |
| Best State for AP                   | `/best-state-asset-protection/`        |
| Wyoming vs Nevada AP                | `/wyoming-vs-nevada-asset-protection/` |

### Column 3: Formation

| Link                           | URL                     |
| ------------------------------ | ----------------------- |
| **Wyoming LLC** (bold)         | `/wyoming-llc/`         |
| **Wyoming Corporation** (bold) | `/wyoming-corporation/` |
| LLC vs Corporation             | `/llc-vs-corporation/`  |
| Wyoming vs Nevada LLC          | `/wyoming-vs-nevada/`   |
| Shelf Companies                | `/shelf-companies/`     |

### Column 4: Compliance

| Link                                | URL                            |
| ----------------------------------- | ------------------------------ |
| **Wyoming Registered Agent** (bold) | `/wyoming-registered-agent/`   |
| Annual Reports                      | `/annual-reports/`             |
| Foreign State Registration          | `/foreign-state-registration/` |
| Domestication                       | `/domestication/`              |

### Mobile Behavior

On mobile, the 4-column grid becomes an accordion: tap a pillar name to expand its link list. Each pillar section uses its identity color as an accent.

---

## 8. State-Specific FAQ

5–6 questions specific to Wyoming.

### Questions

| #   | Question                                              |
| --- | ----------------------------------------------------- |
| 1   | "Do I need to live in Wyoming to form an LLC there?"  |
| 2   | "How much does it cost to form a Wyoming LLC?"        |
| 3   | "What are Wyoming's annual filing requirements?"      |
| 4   | "Is Wyoming better than Nevada for my business?"      |
| 5   | "Can I form in Wyoming and operate in another state?" |
| 6   | "How long does Wyoming LLC formation take?"           |

### Behavior

- Single-expand mode
- FAQ schema markup
- Keyboard accessible

---

## 9. Final CTA Section

| Element       | Content                                                             |
| ------------- | ------------------------------------------------------------------- |
| Headline      | "Ready to Get Started in Wyoming?"                                  |
| Subtext       | "Gold for privacy. Silver for formation. Everything all-inclusive." |
| Primary CTA   | "View Wyoming Gold — $1,275 →"                                      |
| Secondary CTA | "View Wyoming Silver — $900 →"                                      |
| Safety Net    | "Or call us: (775) 555-0123"                                        |

---

## 10. Page Layout

State hubs use a full-width single-column layout (no sidebar). The intent routing cards need maximum horizontal space, and the content map benefits from full-width columns.

**Desktop:** Single column, max-width 1200px, centered.
**Mobile:** Single column, full width with padding.

### Section Order

1. Breadcrumb
2. State Hero (with state facts strip)
3. Intent Routing Cards (4 pillar cards — the core of the page)
4. Package Quick Links (Gold + Silver)
5. Why Wyoming? (6 advantage blocks)
6. Content Map (all WY pages organized by pillar)
7. FAQ Accordion
8. Final CTA
9. Footer

---

## 11. Mobile-Specific Requirements

### Intent Cards on Mobile

Stack all 4 cards vertically, full width. Keep pillar color accents visible. Each card's 3 key links should be visible (not hidden behind a toggle).

### Content Map on Mobile

Accordion per pillar — tap "Privacy" to see all WY privacy links, tap "Formation" to see formation links, etc. Each accordion section uses pillar identity color as accent.

### Sticky Bottom CTA Bar

"View Wyoming Packages" + phone icon.

---

## 12. Interaction Behavior

| Element                        | Behavior                                                  |
| ------------------------------ | --------------------------------------------------------- |
| Intent cards                   | Hover: shadow + lift. Click CTA routes to pillar cluster. |
| Package cards                  | Hover: border accent + shadow. Price prominent.           |
| Content map links              | Standard link hover. Primary pages bold.                  |
| Content map accordion (mobile) | Tap to expand/collapse per pillar. Multi-expand allowed.  |
| FAQ accordion                  | Single-expand. Smooth animation.                          |
| State facts strip              | Static display — no interaction.                          |

---

## 13. SEO Requirements

| Element          | Value                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Title Tag        | "Wyoming Business Services — LLC Formation, Privacy & Asset Protection                                                                                                                      | Incorporate123" |
| Meta Description | "Form a Wyoming LLC or Corporation with 25 years of expert support. Anonymous LLC formation, asset protection, registered agent, and ongoing compliance. All-inclusive packages from $900." |
| H1               | Hero headline                                                                                                                                                                               |
| H2s              | "What Brings You to Wyoming?", "Wyoming Packages", "Why Choose Wyoming?", "All Wyoming Services & Guides", FAQ                                                                              |
| Schema           | BreadcrumbList, FAQPage, LocalBusiness (if WY office details relevant)                                                                                                                      |
| Canonical URL    | `https://incorporate123.com/wyoming/`                                                                                                                                                       |
| Target Keywords  | "Wyoming LLC", "Wyoming incorporation", "form LLC Wyoming", "Wyoming registered agent", "Wyoming asset protection"                                                                          |

---

## 14. Content Dependencies

| Item                                              | Status                                    | Owner |
| ------------------------------------------------- | ----------------------------------------- | ----- |
| Wyoming state facts verified (fees, requirements) | Need David to confirm                     | David |
| Wyoming advantage claims verified                 | Need David to confirm statutory citations | David |
| FAQ answers                                       | Client-supplied                           | David |

---

## 15. Component Reuse Map

| Component          | Source                                   | Notes                                                         |
| ------------------ | ---------------------------------------- | ------------------------------------------------------------- |
| StateHero          | New                                      | Unique hero with state facts strip. Reused on NV/CA/FL hubs.  |
| IntentRoutingCard  | New                                      | Pillar-colored card with links + package shortcut. 4 per hub. |
| PackagePreviewCard | From homepage                            | Reused for Gold/Silver Wyoming cards                          |
| AdvantageGrid      | Adapted from homepage DifferentiatorGrid | Same icon + title + description pattern                       |
| ContentMapGrid     | New                                      | 4-column pillar-organized link grid. Accordion on mobile.     |
| FAQAccordion       | From pillar/cluster pages                | Single-expand                                                 |
| StickyMobileCTA    | Global                                   | Every page                                                    |

---

_Confidential — BIT Studios × Incorporate123 — March 2026_
