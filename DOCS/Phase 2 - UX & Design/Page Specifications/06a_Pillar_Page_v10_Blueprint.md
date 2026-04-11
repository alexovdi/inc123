# Pillar Page v10 Blueprint

> Reference implementation: `/privacy` (completed 2026-04-11)
> Apply to: `/asset-protection`, `/formation`, `/compliance`
> This document captures every detail needed to replicate the redesign seamlessly.

---

## Architecture Change

### Before (old approach)

- Wrapped in `PillarLayout` (70/30 sidebar split)
- `ContentSidebar` component on the right
- All sections in a single `<div className="space-y-16">` container
- Plain `h2` headings, no section backgrounds, no animations

### After (v10 approach)

- **No PillarLayout wrapper** — page composes full-width `<section>` elements directly
- **No sidebar** — sidebar content integrated inline:
  - Package shortcut → `DualPackageCTA` section
  - Related clusters → `ClusterGrid` section
  - Cross-pillar link → `CrossPillarCTA` section
  - Phone → hero safety net + CTA sections
- Each section has its own background color for visual rhythm
- `SectionHeader` component for all section headings
- `ScrollReveal` on every content block

---

## Imports Required

```tsx
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { Card } from "@/design-system/components/Card";
import { ClusterGrid } from "@/design-system/components/ClusterGrid";
import { ComparisonCards } from "@/design-system/components/ComparisonCards";
import { CrossPillarCTA } from "@/design-system/components/CrossPillarCTA";
import { DualPackageCTA } from "@/design-system/components/DualPackageCTA";
import { GrainOverlay } from "@/design-system/components/GrainOverlay";
import { ProgressiveDisclosure } from "@/design-system/components/ProgressiveDisclosure";
import { SectionHeader } from "@/design-system/components/SectionHeader";
import { WhereToGoNext } from "@/design-system/components/WhereToGoNext";
import { Button } from "@/design-system/primitives/Button";
import { Icon } from "@/design-system/primitives/Icon";
import { ScrollReveal } from "@/design-system/primitives/ScrollReveal";
import { Link } from "@/design-system/primitives/Link";
import { pillars } from "@/data/pillars";
import { packages } from "@/data/packages";
import { faqItems } from "@/data/faq";
```

---

## Data Setup (top of file)

```tsx
// Change index for each pillar: 0=privacy, 1=asset, 2=formation, 3=compliance
const pillar = pillars[0];

// Gold packages for DualPackageCTA (adjust per pillar)
const wyGold = packages.find((p) => p.id === "wyoming-gold")!;
const nvGold = packages.find((p) => p.id === "nevada-gold")!;

// For Formation pillar, use Silver instead:
// const wySilver = packages.find((p) => p.id === "wyoming-silver")!;

// FAQ filter by category
const pillarFaqs = faqItems.filter((f) => f.category === "privacy");
// Categories: "privacy" | "asset" | "formation" | "compliance"
```

---

## Page Structure — 10 Sections

Outer wrapper: `<div className="min-h-screen">`

### Section 1: HERO (dark)

```
<section className="relative overflow-hidden bg-primary">
  <GrainOverlay opacity={0.03} />
  <div className="pointer-events-none absolute -left-40 -top-40 h-[60vw] w-[60vw]
    rounded-full bg-pillar-{PILLAR_COLOR}/[0.08] blur-[120px]" />
  <div className="relative mx-auto max-w-content px-container-x py-section-y">
```

**Pillar-specific elements:**

| Pillar           | Eyebrow             | H1                                    | Accent word                                      | Glow color                    | Stats                               |
| ---------------- | ------------------- | ------------------------------------- | ------------------------------------------------ | ----------------------------- | ----------------------------------- |
| Privacy          | "Business Privacy"  | "Privacy You Can't Get Elsewhere"     | "Elsewhere" in `text-pillar-privacy`             | `bg-pillar-privacy/[0.08]`    | 365 days / 25 yrs / $0 extra        |
| Asset Protection | "Asset Protection"  | "Protect What You've Built"           | "Built" in `text-pillar-asset`                   | `bg-pillar-asset/[0.08]`      | $500K+ / 25 yrs / Charging order    |
| Formation        | "Company Formation" | "Expert Formation, All-Inclusive"     | "All-Inclusive" in `text-pillar-formation`       | `bg-pillar-formation/[0.08]`  | 25 yrs / 2 states / $0 hidden fees  |
| Compliance       | "Compliance"        | "Ongoing Support, Not Just a Mailbox" | "Not Just a Mailbox" in `text-pillar-compliance` | `bg-pillar-compliance/[0.08]` | 365 days / $62/yr WY / All included |

**Hero sub-elements (all wrapped in ScrollReveal with staggered delays):**

- `delay={100}` — Eyebrow: `<p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-white/60 mb-3">`
- `delay={200}` — H1: `<h1 className="font-display type-display-lg font-bold text-white max-w-[18ch]">`
- `delay={400}` — Subheadline: `<p className="mt-5 text-body-lg text-white/70 max-w-[520px]">`
- `delay={600}` — CTAs: flex wrap gap-4, Button variant="cta" + Button variant="secondary" with white border
- `delay={800}` — Safety net: phone link + consultation link, `text-body-sm text-white/50`
- `delay={1000}` — Stats strip: `grid grid-cols-3 gap-4 rounded-card-lg bg-white/[0.06] border border-white/[0.1] p-5 max-w-[600px]`

**Stats strip item pattern:**

```tsx
<div className="text-center">
  <p className="font-display text-heading-lg font-bold text-white">
    {value}
    <span className="text-body-sm font-normal text-white/50 ml-1">{unit}</span>
  </p>
  <p className="text-caption text-white/50 mt-0.5">{label}</p>
</div>
```

### Section 1b: TRUST TICKER

```
<div className="flex items-center justify-center gap-6 border-y border-border
  bg-surface py-3 px-container-x overflow-hidden">
```

4 trust items with CheckCircle icons. Use responsive hiding: all visible → `hidden sm:flex` → `hidden md:flex` → `hidden lg:flex`.

**Pillar-specific ticker items:**

| Pillar           | Item 1                       | Item 2                     | Item 3                     | Item 4                  |
| ---------------- | ---------------------------- | -------------------------- | -------------------------- | ----------------------- |
| Privacy          | Year-round nominees included | Offshore records custodian | Not "nominee for a day"    | All-inclusive pricing   |
| Asset Protection | Charging order protection    | Single-member LLC coverage | Wyoming + Nevada           | All-inclusive pricing   |
| Formation        | All state fees included      | Registered agent included  | EIN filing included        | No hidden add-ons       |
| Compliance       | Year-round registered agent  | Annual reports handled     | Corporate minutes included | Full compliance support |

### Section 2: "What is [Topic]?" — `bg-background`

```
<section className="py-section-y-sm bg-background">
  <div className="mx-auto max-w-content px-container-x">
    <ScrollReveal>
      <SectionHeader eyebrow="Understanding [Topic]" title="What is [Topic]?" subtitle="..." subtitleMaxWidth="max-w-narrow mx-auto" />
    </ScrollReveal>
    <ScrollReveal delay={200}>
      <div className="mt-12 max-w-narrow mx-auto">
        <ProgressiveDisclosure sections={[...]} />
        <div className="mt-6 text-center">
          <a href="/[primary-cluster]" className="inline-flex items-center gap-1.5 text-body-sm font-medium text-pillar-{PILLAR} hover:text-pillar-{PILLAR}/80 transition-colors">
            Learn about [Primary Topic] <Icon name="ArrowRight" size="sm" />
          </a>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>
```

**Pillar-specific:**

| Pillar           | Eyebrow                    | CTA link                   | CTA text                                |
| ---------------- | -------------------------- | -------------------------- | --------------------------------------- |
| Privacy          | "Understanding Privacy"    | /anonymous-llc             | "Learn about Anonymous LLCs"            |
| Asset Protection | "Understanding Protection" | /charging-order-protection | "Learn about Charging Order Protection" |
| Formation        | "Understanding Formation"  | /wyoming-llc               | "Learn about Wyoming LLC Formation"     |
| Compliance       | "Understanding Compliance" | /registered-agent          | "Learn about Registered Agent Services" |

### Section 3: "Why [Topic] Matters" — `bg-primary-50`

```
<section className="py-section-y-sm bg-primary-50">
  <div className="mx-auto max-w-content px-container-x">
    <ScrollReveal><SectionHeader eyebrow="Why It Matters" title="..." subtitle="..." /></ScrollReveal>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <ScrollReveal key={card.title} delay={i * 100}>
          <Card pillar="{PILLAR}" variant="elevated" title={card.title} description={card.desc}>
            <div className="flex items-center gap-2 mt-1">
              <Icon name={card.icon} size="sm" className="text-pillar-{PILLAR}" />
              <span className="text-caption text-muted">{card.detail}</span>
            </div>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>
```

**4 cards per pillar, each with icon + title + description + detail line.**

### Section 4: "How We [Deliver]" — `bg-background`

```
<section className="py-section-y-sm bg-background">
  <div className="mx-auto max-w-content px-container-x">
    <ScrollReveal><SectionHeader eyebrow="Our Services" title="..." subtitle="..." /></ScrollReveal>
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {pillar.services.map((service, i) => (
        <ScrollReveal key={service} delay={i * 80}>
          <Card pillar="{PILLAR}" variant="elevated" layout="compact" title={service} description={descriptions[i]} className="h-full" />
        </ScrollReveal>
      ))}
    </div>
    <ScrollReveal delay={400}>
      <aside className="mt-12 rounded-card-lg border border-pillar-{PILLAR}/20 bg-pillar-{PILLAR}/[0.04] p-8 text-center max-w-narrow mx-auto">
        <Icon name="Quote" size="lg" className="text-pillar-{PILLAR}/30 mx-auto mb-4" />
        <p className="text-body-lg font-medium text-foreground">"[Key differentiator quote]"</p>
        <p className="mt-3 text-body text-muted">[Supporting explanation]</p>
      </aside>
    </ScrollReveal>
  </div>
</section>
```

**Grid columns adapt to service count:** 4 services → `lg:grid-cols-4`, 5-6 → `lg:grid-cols-3`, 8 → `lg:grid-cols-4`

**Differentiator quotes per pillar:**

| Pillar           | Quote                                                       | Support                                                                     |
| ---------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------- |
| Privacy          | "Year-round nominees, not 'nominee for a day'..."           | Most providers remove nominees after formation. Gold keeps them 365 days.   |
| Asset Protection | "Charging order protection for single-member LLCs..."       | Wyoming is the only state that extends this to single-member entities.      |
| Formation        | "All-inclusive means all-inclusive..."                      | State fees, RA, EIN, operating agreement — no surprise charges at checkout. |
| Compliance       | "Full corporate minutes maintenance, not just a mailbox..." | We maintain your minute book, not just forward your mail.                   |

### Section 5: Cluster Grid — `bg-primary-50`

```
<section className="py-section-y-sm bg-primary-50">
  <div className="mx-auto max-w-content px-container-x">
    <ScrollReveal><SectionHeader eyebrow="Deep-Dive Guides" title="Explore [Pillar] Topics" subtitle="..." /></ScrollReveal>
    <ScrollReveal delay={200}>
      <div className="mt-12">
        <ClusterGrid clusters={pillar.clusters.map(...)} columns={4} />
      </div>
    </ScrollReveal>
  </div>
</section>
```

**columns={4}** for all pillars (grid wraps naturally on mobile).

### Section 6: Comparisons — `bg-background`

```
<section className="py-section-y-sm bg-background">
  <div className="mx-auto max-w-content px-container-x">
    <ScrollReveal><SectionHeader eyebrow="Comparisons" title="Compare Your Options" subtitle="..." /></ScrollReveal>
    <ScrollReveal delay={200}>
      <div className="mt-12 max-w-[800px] mx-auto">
        <ComparisonCards comparisons={[...]} />
      </div>
    </ScrollReveal>
  </div>
</section>
```

**Comparison cards per pillar:**

| Pillar           | Card 1                          | Card 2                         |
| ---------------- | ------------------------------- | ------------------------------ |
| Privacy          | Best State for Privacy          | Wyoming vs Nevada for Privacy  |
| Asset Protection | Best State for Asset Protection | Wyoming vs Nevada for AP       |
| Formation        | LLC vs Corporation              | Wyoming vs Nevada LLC          |
| Compliance       | Gold vs Silver (Wyoming)        | Wyoming vs Nevada Annual Costs |

### Section 7: Packages (DARK) — `bg-primary`

```
<section id="packages" className="relative py-section-y-sm bg-primary overflow-hidden">
  <GrainOverlay opacity={0.03} />
  <div className="pointer-events-none absolute -right-40 -bottom-40 h-[50vw] w-[50vw]
    rounded-full bg-accent/[0.06] blur-[120px]" />
  <div className="relative mx-auto max-w-content px-container-x">
    <ScrollReveal><SectionHeader eyebrow="All-Inclusive Packages" title="..." subtitle="..." dark /></ScrollReveal>
    <ScrollReveal delay={200}>
      <div className="mt-12"><DualPackageCTA packages={[...]} consultationCTA={...} /></div>
    </ScrollReveal>
  </div>
</section>
```

**Package selection per pillar:**

| Pillar           | Package 1    | Package 2      | Why                                           |
| ---------------- | ------------ | -------------- | --------------------------------------------- |
| Privacy          | Wyoming Gold | Nevada Gold    | Gold has nominees (privacy feature)           |
| Asset Protection | Wyoming Gold | Nevada Gold    | Gold has AP structures                        |
| Formation        | Wyoming Gold | Wyoming Silver | Show tier comparison for formation            |
| Compliance       | Wyoming Gold | Wyoming Silver | Show what compliance is included at each tier |

### Section 8: Cross-Pillar CTA — `bg-background`

```
<section className="py-section-y-sm bg-background">
  <div className="mx-auto max-w-content px-container-x">
    <ScrollReveal>
      <CrossPillarCTA fromPillar="{FROM}" toPillar="{TO}" heading="..." description="..." href="..." />
    </ScrollReveal>
  </div>
</section>
```

**Cross-pillar routing:**

| From             | To               | Heading                              | Href              |
| ---------------- | ---------------- | ------------------------------------ | ----------------- |
| Privacy          | Asset Protection | "Hiding Your Name Is Step One..."    | /asset-protection |
| Asset Protection | Privacy          | "Asset Protection Secures Wealth..." | /privacy          |
| Formation        | Compliance       | "Formation Is Just the Beginning..." | /compliance       |
| Compliance       | Formation        | "Need to Form a New Entity?..."      | /formation        |

### Section 9: FAQ — `bg-primary-50`

```
<section className="py-section-y-sm bg-primary-50">
  <div className="mx-auto max-w-content px-container-x">
    <ScrollReveal><SectionHeader eyebrow="Common Questions" title="Frequently Asked Questions" subtitle="..." /></ScrollReveal>
    <ScrollReveal delay={200}>
      <div className="mt-12 max-w-narrow mx-auto">
        <Accordion type="single" variant="default">
          {pillarFaqs.map(faq => (
            <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
              <p>{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ScrollReveal>
  </div>
</section>
```

### Section 10: Where to Go Next — `bg-background`

```
<section className="py-section-y-sm bg-background">
  <div className="mx-auto max-w-content px-container-x">
    <ScrollReveal>
      <WhereToGoNext suggestions={[...]} />
    </ScrollReveal>
  </div>
</section>
```

**3 suggestions per pillar:** comparison page, package page, adjacent pillar.

---

## Section Background Rhythm

| Section           | Background          | Purpose        |
| ----------------- | ------------------- | -------------- |
| 1. Hero           | `bg-primary` (dark) | Anchor/impact  |
| 1b. Ticker        | `bg-surface`        | Contrast strip |
| 2. What is...     | `bg-background`     | Light          |
| 3. Why it matters | `bg-primary-50`     | Tinted         |
| 4. Services       | `bg-background`     | Light          |
| 5. Cluster grid   | `bg-primary-50`     | Tinted         |
| 6. Comparisons    | `bg-background`     | Light          |
| 7. Packages       | `bg-primary` (dark) | Anchor/impact  |
| 8. Cross-pillar   | `bg-background`     | Light          |
| 9. FAQ            | `bg-primary-50`     | Tinted         |
| 10. Next steps    | `bg-background`     | Light          |

Pattern: dark → light → tinted → light → tinted → light → dark → light → tinted → light

---

## Spacing Rules

- **Hero**: `py-section-y` (full — 5-8rem per side)
- **All other sections**: `py-section-y-sm` (compact — 3-5rem per side)
- **Content gap after SectionHeader**: `mt-12`
- **ScrollReveal stagger on card grids**: `delay={i * 80}` or `delay={i * 100}`
- **Narrowing for text-heavy sections**: `max-w-narrow mx-auto` (ProgressiveDisclosure, FAQ)

---

## Checklist for Each Pillar Page

When applying this blueprint to a new pillar:

- [ ] Change pillar index: `pillars[0]` → `pillars[1]` (asset), `[2]` (formation), `[3]` (compliance)
- [ ] Update FAQ filter category
- [ ] Write pillar-specific hero content (eyebrow, H1, subheadline, stats)
- [ ] Write pillar-specific trust ticker items (4 items)
- [ ] Write "What is [Topic]" ProgressiveDisclosure content
- [ ] Write "Why [Topic] Matters" 4 cards (icon, title, desc, detail)
- [ ] Add service descriptions array matching `pillar.services` length
- [ ] Write differentiator quote
- [ ] Set comparison card data (2 comparisons)
- [ ] Set DualPackageCTA packages (Gold vs Gold or Gold vs Silver)
- [ ] Set cross-pillar CTA (from/to/heading/description)
- [ ] Set Where to Go Next suggestions (3 items)
- [ ] Replace all `text-pillar-privacy` → `text-pillar-{PILLAR}` and matching bg/border tokens
- [ ] Replace decorative glow color: `bg-pillar-privacy/[0.08]` → `bg-pillar-{PILLAR}/[0.08]`
- [ ] Verify build: `npm run build`
- [ ] Browser test on `http://localhost:2121/{pillar-slug}`

---

## Reference File

The completed Privacy page is the reference implementation:
`inc123-prototype/src/app/privacy/page.tsx`

Copy this file, then search-and-replace pillar-specific content using the tables above.
