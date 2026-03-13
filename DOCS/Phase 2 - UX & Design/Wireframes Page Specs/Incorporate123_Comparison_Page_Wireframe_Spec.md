# Incorporate123 — Comparison Page Wireframe Specification (WY vs NV Privacy)

**Prepared by:** BIT Studios
**Prepared for:** David, Incorporate123
**Date:** March 2026
**Phase:** 2 — UX & Interactive Prototyping
**Template Type:** Comparison Page (1 of 6)
**URL:** `/wyoming-vs-nevada-privacy/`
**Parent Pillar:** Business Privacy (`/privacy/`)
**Reuse:** Once approved, this template is replicated for all 6 comparison pages across pillars with content and column variations.

---

## 1. Page Purpose & Strategic Role

Comparison pages are decision-support tools. The visitor has already been educated (by pillar and cluster pages) and is now choosing between specific options. This page's job is to make the decision easy by putting the two options side by side, then routing the visitor directly to the winning package with a clear CTA.

No competitor in the privacy niche has systematic comparison pages — this is a competitive content vacuum that Incorporate123 fills. Wyoming Corporate Services has a single WY-vs-NV-vs-DE comparison table but it focuses on cost and taxes, not privacy. This page makes privacy the primary comparison axis.

### All 6 Comparison Pages in the Architecture

| Page | URL | Pillar | Compares |
|------|-----|--------|----------|
| **Wyoming vs Nevada for Privacy** | `/wyoming-vs-nevada-privacy/` | Privacy | WY Gold vs NV Gold for privacy buyers |
| Best State for Privacy | `/best-state-for-privacy/` | Privacy | Multi-state ranking (WY, NV, NM, DE, etc.) |
| Wyoming vs Nevada for AP | `/wyoming-vs-nevada-asset-protection/` | Asset Protection | WY vs NV for asset protection |
| Best State for AP | `/best-state-asset-protection/` | Asset Protection | Multi-state AP ranking |
| Wyoming vs Nevada LLC | `/wyoming-vs-nevada-llc/` | Formation | WY vs NV for LLC formation (general) |
| LLC vs Corporation | `/llc-vs-corporation/` | Formation | Entity type comparison |

### Target Audiences

| Audience | Entry Point | Expected Path |
|----------|-------------|---------------|
| Educated privacy buyer | Privacy pillar or Anonymous LLC cluster → "Compare states" CTA | This page → Gold package (WY or NV) |
| Organic searcher | Google: "Wyoming vs Nevada LLC privacy", "best state for anonymous LLC" | This page → relevant cluster or Gold package |
| Comparison shopper | Pillar page comparison section → clicked this link | This page → package decision |

---

## 2. Breadcrumb Navigation

```
Home > Business Privacy > Wyoming vs Nevada for Privacy
```

---

## 3. Comparison Hero Section

### Content

| Element | Content |
|---------|---------|
| Pillar Identity | Privacy pillar accent (blue) |
| Eyebrow | "Business Privacy · Comparison" |
| H1 Headline | "Wyoming vs Nevada for Business Privacy" |
| Subheadline | "A head-to-head comparison of Wyoming and Nevada's privacy protections, costs, filing requirements, and annual obligations. Both support anonymous LLCs — here's how to choose." |
| Quick Verdict | A 1-sentence summary visible immediately: "Bottom line: Wyoming offers stronger privacy at lower cost. Nevada adds no state income tax and suits businesses with a physical Nevada presence." |

No CTAs in the hero — the comparison table IS the conversion tool. CTAs appear after the table.

---

## 4. Primary Comparison Table

The centerpiece of the page. Side-by-side table comparing Wyoming and Nevada across every dimension a privacy buyer cares about.

### Layout

**Desktop:** 3-column table — Factor column (left), Wyoming column (center-left), Nevada column (center-right). Full width.

**Mobile:** Two options (choose based on what renders better):
- Option A: Stacked cards — each factor becomes a card showing WY value and NV value side by side within the card
- Option B: Horizontal scroll with sticky first column (Factor names stay visible while WY/NV scroll)

### Table Header Row

| Element | Wyoming Column | Nevada Column |
|---------|---------------|---------------|
| State Name | "Wyoming" | "Nevada" |
| Flag/Badge | WY state badge | NV state badge |
| Gold Price | "$1,275 (LLC)" | "$1,800 (LLC)" |
| Renewal | "$525/year" | "$525/year" |
| Quick CTA | "Start Wyoming Gold →" | "Start Nevada Gold →" |

### Comparison Rows

| # | Factor | Wyoming | Nevada | Winner |
|---|--------|---------|--------|--------|
| 1 | **Public Member/Manager Disclosure** | Not required by statute | Not required (nominee-friendly) | Tie |
| 2 | **Privacy Statute Strength** | Strongest in the U.S. — statutory prohibition on public member disclosure | Strong — supports nominee structures, but no explicit statutory prohibition | Wyoming |
| 3 | **Annual Filing Fee** | $62 (Annual Report) | $350 (Initial List + Annual List) | Wyoming |
| 4 | **Initial State Filing Fee** | ~$100 | ~$425 | Wyoming |
| 5 | **State Income Tax** | None | None | Tie |
| 6 | **State Business Tax** | None | Modified Business Tax (gross wages >$50K/quarter) | Wyoming |
| 7 | **Annual Report Complexity** | Simple — online filing, minimal information | More complex — Initial List + Annual List, more fields | Wyoming |
| 8 | **Nominee Officer Availability** | Supported — year-round nominees included in Gold | Supported — year-round nominees included in Gold | Tie |
| 9 | **Offshore Nominees Included** | Yes — included free in Gold package since 2012 | Yes — included free in Gold package since 2012 | Tie |
| 10 | **Offshore Records Custodian** | Yes — included in Gold | Yes — included in Gold | Tie |
| 11 | **Incorporate123 Gold Price (LLC)** | $1,275 all-inclusive | $1,800 all-inclusive | Wyoming |
| 12 | **Incorporate123 Gold Price (Corp)** | $1,575 all-inclusive | $2,100 all-inclusive | Wyoming |
| 13 | **Annual Renewal (with nominees)** | $525/year | $525/year | Tie |
| 14 | **Physical Office Advantage** | No local office (Incorporate123 is based in Reno, NV) | Incorporate123's physical office is in Reno, NV — same-day filing possible | Nevada |
| 15 | **Shelf Company Availability** | Yes — aged entities available | Yes — aged entities available, larger inventory | Nevada |
| 16 | **Best For** | Privacy-first buyers who want lowest cost and strongest statutory protection | Business owners who want privacy + Nevada's tax profile, or who have physical NV presence | — |

### Winner Indicators

Each row can optionally show a subtle visual indicator of which column "wins" on that factor — a small badge, checkmark, or highlighted cell background. Ties show no indicator.

### Table Footer

| Element | Content |
|---------|---------|
| Summary | "Wyoming wins on cost and statutory privacy strength. Nevada wins if you need a physical Nevada presence or want its specific tax profile. Both include identical privacy services in the Gold package." |

---

## 5. Dual Package CTAs

The primary conversion mechanism. Two side-by-side CTA blocks, one for each state's Gold package.

### Layout

**Desktop:** Two equal cards side by side, each with package details and a prominent CTA.
**Mobile:** Stacked, Wyoming first (lower cost = likely winner).

### CTA Block Structure

| Element | Wyoming Card | Nevada Card |
|---------|-------------|-------------|
| State | "Wyoming" | "Nevada" |
| Package | "Gold Package — Complete Privacy" | "Gold Package — Complete Privacy" |
| Price | "$1,275 (LLC) · $1,575 (Corp)" | "$1,800 (LLC) · $2,100 (Corp)" |
| Renewal | "$525/year with nominees" | "$525/year with nominees" |
| Key Includes (4 items) | Year-round nominees · Offshore nominees · Offshore records · All fees included | Same |
| Primary CTA | "Start Wyoming Gold — $1,275 →" | "Start Nevada Gold — $1,800 →" |
| Secondary | "View full package details →" → `/wyoming-private-incorporation/` | "View full package details →" → `/nevada-private-incorporation/` |

### Placement Rules

- CTAs appear IMMEDIATELY after the comparison table — above fold if possible
- CTAs repeat at the bottom of the page after FAQ
- "Not sure yet? Schedule a consultation →" safety net below both cards

---

## 6. Decision Guide Content

Short content sections that help visitors decide. These are NOT long-form educational pieces (clusters handle that) — they're concise decision-support blocks.

### Section 1: "Choose Wyoming If..."

| Element | Content |
|---------|---------|
| H2 | "Choose Wyoming If..." |
| Format | 4–5 bullet-style blocks, each with a checkmark icon and 1–2 sentence explanation |

**Bullets:**
- "You want the lowest total cost — $1,275 formation + $62/year state fee vs. Nevada's $1,800 + $350/year"
- "Privacy is your primary goal — Wyoming has the strongest statutory privacy protections in the U.S."
- "You don't have physical operations in Nevada — if you're operating remotely, Wyoming's lower fees are the clear win"
- "You want simplicity — Wyoming's annual report is simpler and cheaper than Nevada's dual filing requirement"
- "You're starting your first entity — Wyoming is the recommended default for most privacy-focused formations"

### Section 2: "Choose Nevada If..."

| Element | Content |
|---------|---------|
| H2 | "Choose Nevada If..." |
| Format | Same bullet-style blocks |

**Bullets:**
- "You have physical business operations in Nevada — forming in your home state avoids foreign registration fees"
- "You want Nevada's specific tax profile — no corporate income tax, no franchise tax, no personal income tax"
- "You prefer Incorporate123's same-day filing — our Reno office is minutes from the Nevada Secretary of State"
- "You want access to our largest shelf company inventory — more aged Nevada entities available"
- "You're forming a Corporation — Nevada's corporate statutes offer unique director liability protections"

### Section 3: "What's the Same in Both"

| Element | Content |
|---------|---------|
| H2 | "What's Identical in Both Packages" |
| Format | Simple list showing that Gold features are the same regardless of state |

**Items:**
- Year-round nominee officer/director services
- Free offshore nominee directors (since 2012)
- Offshore records custodian
- Registered agent (1 year included)
- EIN filing
- Operating agreement / bylaws
- Bank account assistance
- Weekly mail forwarding
- $525/year renewal with nominees

---

## 7. Cross-Pillar Callout

After the decision content, before FAQ.

### Content

| Element | Content |
|---------|---------|
| Accent | Green (Asset Protection) |
| Headline | "Privacy Is Step One. Asset Protection Is Step Two." |
| Description | "Wyoming and Nevada both offer asset protection features that complement your privacy setup. Charging order protection prevents creditors from reaching assets inside your LLC — even if they win a judgment." |
| CTA | "Compare Wyoming vs Nevada for Asset Protection →" → `/wyoming-vs-nevada-asset-protection/` |

---

## 8. FAQ Accordion

6–8 questions specific to the WY vs NV privacy decision.

### Questions

| # | Question |
|---|----------|
| 1 | "Can I form in Wyoming and operate in another state?" |
| 2 | "Is Wyoming really better than Nevada for privacy?" |
| 3 | "Why is the Nevada package more expensive?" |
| 4 | "Can I form in both Wyoming AND Nevada?" |
| 5 | "What about Delaware for privacy?" |
| 6 | "Do I need to visit Wyoming or Nevada to form my entity?" |
| 7 | "Can I switch from Nevada to Wyoming (or vice versa) later?" |
| 8 | "What if I already have an LLC in another state?" |

### Behavior

- Single-expand mode (lighter content than cluster FAQ)
- FAQ schema markup
- Keyboard accessible

---

## 9. Bottom Conversion CTA (Repeat)

Repeats the dual package CTAs from Section 5 at the bottom of the page for visitors who scrolled through everything.

Same structure: Wyoming Gold card + Nevada Gold card + "Schedule a consultation" safety net.

---

## 10. "Where to Go Next" Block

| Suggestion | Routes To |
|------------|-----------|
| "Learn more about Anonymous LLCs →" | `/anonymous-llc/` |
| "Explore Nominee Services →" | `/nominee-services/` |
| "See all package options →" | `/compare-packages/` |

---

## 11. Page Layout Notes

This page does NOT have a sidebar. Comparison pages use full-width layout to give the table maximum horizontal space. The layout is:

**Desktop:** Single column, max-width container (1000–1200px), centered.
**Mobile:** Single column, full width with padding.

Section order:
1. Breadcrumb
2. Hero
3. Comparison table
4. Dual package CTAs (primary conversion)
5. Decision guide (Choose Wyoming If / Choose Nevada If / What's the Same)
6. Cross-pillar callout
7. FAQ accordion
8. Bottom conversion CTAs (repeat)
9. Where to Go Next
10. Footer

---

## 12. Mobile-Specific Requirements

### Comparison Table on Mobile

The table is the critical challenge on mobile. Two approaches (choose whichever works better):

**Option A — Stacked Factor Cards:** Each row becomes a card showing the factor name as the card header, then WY and NV values side by side within the card. Winner indicator on the winning side.

**Option B — Horizontal Scroll:** Factor column is sticky-left. WY and NV columns scroll horizontally. A "swipe to compare" hint appears on first load.

### Dual CTA Cards on Mobile
Stack vertically. Wyoming on top (lower cost, likely winner). Full-width cards.

### Sticky Bottom CTA Bar
"View Gold Packages" + phone icon. Same pattern as all other pages.

---

## 13. Interaction Behavior

| Element | Behavior |
|---------|----------|
| Comparison table | Static content — no interactive toggling. Clean, scannable. |
| Winner indicators | Subtle highlight on the winning cell per row. No animation needed. |
| Dual CTA cards | Hover: shadow + lift. Price is prominent. |
| FAQ accordion | Single-expand. Smooth animation. Keyboard accessible. |
| Cross-pillar callout | Distinct green accent card. |
| Mobile table | Horizontal scroll with sticky factor column OR stacked cards |

---

## 14. SEO Requirements

| Element | Value |
|---------|-------|
| Title Tag | "Wyoming vs Nevada for Business Privacy — Side-by-Side Comparison | Incorporate123" |
| Meta Description | "Compare Wyoming and Nevada for anonymous LLC formation and business privacy. Side-by-side analysis of costs, privacy statutes, filing requirements, and nominee services. See which state is right for you." |
| H1 | Hero headline |
| H2s | Each decision section + FAQ |
| Schema | FAQ schema, BreadcrumbList, ComparisonTable (Article schema with structured comparison) |
| Canonical URL | `https://incorporate123.com/wyoming-vs-nevada-privacy/` |
| Target Keywords | "Wyoming vs Nevada privacy", "Wyoming vs Nevada LLC", "best state for anonymous LLC", "Wyoming or Nevada for business privacy" |

---

## 15. Content Dependencies

| Item | Status | Owner |
|------|--------|-------|
| Comparison data verified (fees, statutes, requirements) | Need David to confirm current state filing fees and requirements | David |
| Privacy statute language confirmed | Need David to verify statutory privacy claims for both states | David |
| Shelf company inventory details | Pending | David |

---

## 16. Component Reuse Map

| Component | Source | Notes |
|-----------|-------|-------|
| ComparisonHero | New (simplified, no CTAs in hero) | Reused on all 6 comparison pages |
| ComparisonTable | New | The core component — reused on all comparisons with different column data |
| WinnerIndicator | New | Subtle cell highlight for winning column |
| DualPackageCTA | New | Two side-by-side package cards with CTAs. Reused on all comparisons. |
| DecisionGuideBlocks | New | "Choose X If..." bullet sections |
| CrossPillarCallout | From pillar/cluster pages | Reused with different content |
| FAQAccordion | From pillar/cluster pages | Single-expand mode |
| WhereToGoNext | From pillar/cluster pages | 3 contextual suggestions |
| StickyMobileCTA | Global | Every page |

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
