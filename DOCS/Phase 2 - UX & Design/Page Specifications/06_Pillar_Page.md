# Pillar Page

> URL: `/privacy`, `/asset-protection`, `/formation`, `/compliance` | Layout: 70/30 split | Template — 4 pages

## Purpose

Educational hub and funnel top for each of the 4 content pillars. Explains the pillar topic, routes visitors to cluster pages (deep-dive guides) and comparison pages, then converts via package CTAs. Each pillar is the canonical authority page for its topic.

## Layout

- 70/30 split: content (left) + sidebar (right)
- Sidebar becomes inline elements on mobile (distributed throughout content)
- Max-width: 1200px
- Pillar color accent throughout (blue/green/amber/purple)

## Sections

1. **Breadcrumbs** — Home > [Pillar Name]
2. **Pillar Hero** — Pillar color accent eyebrow, H1 (unique per pillar), subheadline hitting key differentiators, dual CTAs: "Explore [Pillar] Packages" + "Already know? View Gold Packages". Trust snippet (25 years).
3. **"What is [Topic]?"** — Scanner version always visible (2-3 sentences), "Read full explanation" expandable (400-600 words). Inline CTA after.
4. **"Why [Topic] Matters"** — 4 subsections with icons, each scanner + expandable. Content varies by pillar:
   - Privacy: Lawsuits, Competitors, Personal Safety, BOI Problem
   - Asset Protection: Creditors, Lawsuits, Divorce, Business Debts
   - Formation: Liability, Tax Structure, Credibility, Compliance
   - Compliance: Veil Piercing, Dissolution, IRS Penalties, State Penalties
5. **"How Incorporate123 [Delivers This]"** — 3 service blocks with differentiator callouts. Each block: title, description, competitor comparison ("Competitors charge $X; ours included").
6. **Cluster Navigation Grid** — 7-8 cards routing to cluster pages. Each card: pillar-colored accent, icon, title, 1-sentence description, "Learn More →" CTA. 3-4 column desktop, single column mobile.
7. **Comparison Section** — 2 cards linking to relevant comparison pages (e.g., "Best State for Privacy", "Wyoming vs Nevada Privacy").
8. **Package CTA Section** — 2 Gold package cards (Wyoming $1,275, Nevada $1,800) with key includes and "Start [State] Gold" CTAs. Link to compare all packages.
9. **Cross-Pillar Callout** — Accent card linking to adjacent pillar. E.g., Privacy → Asset Protection: "Privacy hides your name. Asset protection shields your wealth."
10. **FAQ Accordion** — 5-8 pillar-level questions with FAQPage schema markup.
11. **"Where to Go Next"** — 3 contextual suggestions (compare, package, related pillar).

**Sidebar (desktop):**

- "Ready to Order?" package shortcut (Gold prices)
- Related Clusters list (sibling pages, active highlight)
- "← Back to [Pillar]" link
- Cross-pillar "Also Relevant" link
- Phone number (tap-to-call)

## Pillar-Specific Data

| Pillar           | Color            | H1                                    | Cluster Count | Package Focus                    |
| ---------------- | ---------------- | ------------------------------------- | ------------- | -------------------------------- |
| Privacy          | Blue `#2563eb`   | "Privacy You Can't Get Elsewhere"     | 8 clusters    | Gold (nominees)                  |
| Asset Protection | Green `#16a34a`  | "Protect What You've Built"           | 6 clusters    | Gold (AP structures)             |
| Formation        | Amber `#d97706`  | "Expert Formation, All-Inclusive"     | 7 clusters    | Silver (formation + office)      |
| Compliance       | Purple `#9333ea` | "Ongoing Support, Not Just a Mailbox" | 8 clusters    | Bronze+ (all include compliance) |

## Content Status

| Pillar           | Hub Content             | Cluster Content | FAQ         | Service Blocks          |
| ---------------- | ----------------------- | --------------- | ----------- | ----------------------- |
| Privacy          | 1,290 words (usable)    | 70% exists      | Needs David | Spec'd in content guide |
| Asset Protection | 1,820 words (strongest) | 75% exists      | Needs David | Needs writing           |
| Formation        | 1,780 words (usable)    | 80% exists      | Needs David | Needs writing           |
| Compliance       | 1,850 words (usable)    | 60% exists      | Needs David | Needs writing           |

## Key Components

`PillarLayout`, `PillarHero`, `ProgressiveDisclosure`, `ServiceBlock`, `DifferentiatorCallout`, `ClusterGrid`, `ComparisonCard`, `PackageCTABlock`, `CrossPillarCallout`, `FAQAccordion`, `WhereToGoNext`, `PillarSidebar`

## Prototype Status

All 4 pillar pages fully built using shared `PillarLayout`. Each has sidebar with package shortcut, content sections, FAQ accordion, cluster grid, comparison cards, cross-pillar navigation. Content is placeholder — needs real copy.

## Existing Specs

- Wireframe: `../Wireframes Page Specs/Incorporate123_Privacy_Pillar_Wireframe_Spec.md`
- Privacy Spec v2: `../v2-post-david-review/Incorporate123_Privacy_Pillar_Wireframe_Spec_v2.md`
- Privacy Content Guide: `../v2-post-david-review/02_Privacy_Pillar_Content_Guide_v2.md`

## Next Steps

- [ ] Write "What is..." and "Why it matters" sections for each pillar (use mapped content as base)
- [ ] Write service block descriptions with differentiator callouts
- [ ] Define cluster page list for each pillar (finalize which topics get pages)
- [ ] Write FAQ answers (needs David for verification)
- [ ] Write cross-pillar callout copy for each combination
- [ ] Content pass: replace placeholder text with real copy
- [ ] Design pass: ensure pillar colors and progressive disclosure work correctly
