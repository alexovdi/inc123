# Cluster Page

> URL: `/:slug` (e.g., `/anonymous-llc`, `/nominee-services`, `/charging-order-protection`)
> Layout: 70/30 split | Template — ~24 pages

## Purpose

Deep-dive educational content. The workhorse template — covers a specific topic in depth. Builds authority and trust through comprehensive content, then routes to packages. Each cluster page targets a long-tail keyword and belongs to one pillar.

## Layout

- 70/30 split: long-form content (left) + sidebar (right)
- Single column on mobile (sidebar elements redistribute inline)
- Max-width: 1200px

## Sections

1. **Breadcrumbs** — Home > [Pillar] > [Cluster Title]
2. **Cluster Hero** — Eyebrow: "Guide", H1: "[Topic]: [Value Proposition]", subheadline, reading time estimate (e.g., "8 min read"), dual CTAs.
3. **Long-Form Content** — 6 H2 sections, each with scanner content (always visible) + expandable reader detail:
   - "What is [Topic]?" — Definition and overview
   - "How [Topic] Works" — Step-by-step process (numbered/visual)
   - "Wyoming vs Nevada for [Topic]" — Embedded comparison table
   - "Who Needs [Topic]?" — 4 audience blocks with icons
   - Differentiator section — "Year-Round Nominees vs. 'Nominee for a Day'" or equivalent
   - "How Much Does [Topic] Cost?" — Pricing breakdown with value comparison
4. **Inline CTAs** — After content: "Start Your [Topic]" + "Compare Wyoming vs Nevada" + phone.
5. **Package CTA Block** — "Ready to [Action]?" with 2 Gold cards (WY + NV) or relevant tier.
6. **Cross-Pillar Callout** — Links to related pillar (e.g., Privacy → Asset Protection).
7. **FAQ Accordion** — 10-12 cluster-specific questions with schema markup.
8. **"Where to Go Next"** — 3 contextual suggestions.

**Sidebar (desktop):**

- "Ready to Order?" package shortcut
- "Related [Pillar] Guides" (sibling clusters with active highlight)
- "← Back to [Pillar]" link
- Cross-pillar "Also Relevant" link
- Phone number

## Cluster Page Inventory

### Privacy Pillar (8 clusters)

| Slug                               | Title                   | Content Status                         |
| ---------------------------------- | ----------------------- | -------------------------------------- |
| `anonymous-llc`                    | Anonymous LLC Formation | Needs writing (pull from Gold package) |
| `anonymous-corporation`            | Anonymous Corporation   | Needs writing                          |
| `nominee-services`                 | Nominee Services        | Partial (good positioning exists)      |
| `wyoming-privacy`                  | Wyoming for Privacy     | Extract from WY Gold page              |
| `nevada-privacy`                   | Nevada for Privacy      | Extract from NV Gold page              |
| `california-private-incorporation` | California Private LLC  | 327 words (needs expansion)            |
| `florida-private-incorporation`    | Florida Private LLC     | 295 words (needs expansion)            |
| `offshore-privacy`                 | Offshore Privacy        | Good content exists                    |

### Asset Protection Pillar (6 clusters)

| Slug                           | Title                        | Content Status      |
| ------------------------------ | ---------------------------- | ------------------- |
| `wyoming-asset-protection`     | Wyoming Asset Protection     | Needs writing       |
| `nevada-asset-protection`      | Nevada Asset Protection      | Content exists      |
| `charging-order-protection`    | Charging Order Protection    | Good content exists |
| `investment-holding-llc`       | Investment Holding LLC       | Content exists      |
| `real-estate-asset-protection` | Real Estate Asset Protection | Needs writing       |
| `llc-vs-living-trust`          | LLC vs Living Trust          | Needs writing       |

### Formation Pillar (7 clusters)

| Slug                        | Title                   | Content Status              |
| --------------------------- | ----------------------- | --------------------------- |
| `wyoming-llc`               | Wyoming LLC Formation   | 1,720 words (excellent)     |
| `wyoming-corporation`       | Wyoming Corporation     | Needs content               |
| `nevada-llc`                | Nevada LLC Formation    | 1,720 words (excellent)     |
| `nevada-corporation`        | Nevada Corporation      | Good content                |
| `shelf-companies`           | Shelf Companies         | Partial                     |
| `entity-tax-guide`          | Entity Tax Guide        | Needs writing (v3 addition) |
| `llc-vs-scorp-vs-ccorp-tax` | LLC vs S-Corp vs C-Corp | Needs writing (v3 addition) |

### Compliance Pillar (8 clusters)

| Slug                       | Title                     | Content Status |
| -------------------------- | ------------------------- | -------------- |
| `registered-agent`         | Registered Agent Services | Content exists |
| `wyoming-registered-agent` | Wyoming Registered Agent  | Needs writing  |
| `nevada-registered-agent`  | Nevada Registered Agent   | Needs writing  |
| `annual-reports`           | Annual Reports            | Content exists |
| `shares-corporate-records` | Corporate Records         | Content exists |
| `foreign-registration`     | Foreign Registration      | Needs writing  |
| `domestication`            | Domestication             | Needs writing  |
| `tax-obligations`          | Tax Obligations           | Needs writing  |

## Content Status Summary

- **Ready to publish (minor edits):** ~8 clusters
- **Needs expansion (partial content):** ~6 clusters
- **Needs writing (new content):** ~15 clusters

## Key Components

`ClusterLayout` (extends PillarLayout), `ClusterHero`, `ProgressiveDisclosure`, `EmbeddedComparisonTable`, `AudienceGrid`, `DifferentiatorCallout`, `KeyPointCallout`, `PackageCTABlock`, `CrossPillarCallout`, `FAQAccordion`, `WhereToGoNext`, `PillarSidebar`

## Prototype Status

Rendered via `CatchAllPage` using `ClusterPageTemplate`. Slug registry maps slugs to data. Template is functional — needs real content populated for each cluster.

## Existing Specs

- Wireframe: `../Wireframes Page Specs/Incorporate123_Cluster_Page_Wireframe_Spec.md`

## Next Steps

- [ ] Prioritize clusters by SEO value and content readiness
- [ ] Write content for top 8 clusters using mapped content as base
- [ ] Expand the 6 partial-content clusters
- [ ] Write remaining 15 clusters (can phase — launch with top 15, add rest post-launch)
- [ ] Populate FAQ for each cluster
- [ ] Verify all comparison table data
- [ ] Ensure sidebar shows correct sibling clusters per pillar
