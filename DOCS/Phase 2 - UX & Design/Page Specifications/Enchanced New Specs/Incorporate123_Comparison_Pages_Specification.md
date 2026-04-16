# Comparison Pages — Complete Specification

**Template Type:** Comparison Page
**Total Pages Using Template:** 7
**Priority:** Mixed — 4 P1 (Launch), 3 P2 (Expansion)
**Content Source:** All new creation

---

## Part 1: Shared Comparison Page Template

Comparison pages are **decision-support tools.** They sit between education (pillar/cluster pages) and conversion (package pages) in the funnel. Their singular job: help the visitor choose between two or more options so they can proceed to a package page with confidence. No comparison page should sell a specific option — it should present the facts, state a clear recommendation, and let the visitor self-select.

### 1.1 Two Structural Subtypes

| Subtype | Structure | Pages |
|---------|-----------|-------|
| **Head-to-Head** | Two options compared side by side. Clear "Choose A if... / Choose B if..." decision guide. | WY vs NV Privacy, WY vs NV AP, WY vs NV Formation, Shelf vs New Formation |
| **Multi-Option** | Three or more options compared in a table. Ranking or "best for" profiles per option. | Best State for Privacy, Best State for AP, LLC vs S-Corp vs C-Corp Tax |

Both subtypes share the same 8-section template. The comparison table structure differs (2-column vs. multi-column), but every other section is identical.

### 1.2 Template Section Order

Every comparison page follows this 8-section structure:

| # | Section | Components |
|---|---------|------------|
| 1 | **ComparisonHero** | Breadcrumb, pillar accent color, H1 with options stated, quick verdict (1-sentence recommendation), dual CTA |
| 2 | **Comparison Table** | Head-to-head: 3-column (Factor | Option A | Option B). Multi-option: N+1 columns. Row categories with clear visual winners per row. |
| 3 | **Dual Package CTAs** | Two (or more) package cards — one per compared option. Links to respective package pages. |
| 4 | **Decision Guide** | "Choose [A] If..." / "Choose [B] If..." blocks with 3–5 criteria each. The visitor matches their situation to the criteria. |
| 5 | **Cross-Pillar Callout** | Contextual CTA to related pillar content. Same pattern as cluster pages. |
| 6 | **FAQ Accordion** | 6–8 comparison-specific questions. FAQPage schema markup. |
| 7 | **Bottom Conversion CTA** | Dual CTA repeating the package links from Section 3. Dark background. |
| 8 | **Where to Go Next** | 3 related links — parent pillar, related cluster pages, related comparison page. |

### 1.3 Why Comparison Pages Exist (Competitive Gap)

The competitive analysis identified this as one of the largest content gaps in the entire privacy/formation space:

> "Comparison content between privacy approaches is missing. No site offers clear 'Nevada vs. Wyoming for privacy' comparison pages, 'Nominee vs. Anonymous LLC vs. Trust' decision guides, or 'Privacy Structure Comparison' tools."

Building systematic comparison pages gives Incorporate123 a first-mover advantage on high-intent decision-stage search queries. Visitors searching "Wyoming vs Nevada for LLC" are deep in the funnel — they've already decided to form an entity and are choosing the specifics. These are high-conversion-intent visitors.

### 1.4 Shared Design Principles

**Comparison pages are NOT neutral.** Every comparison has a recommended option. Incorporate123 has opinions about which state, entity type, or approach is better for most clients — and the page should state that opinion clearly while presenting the data honestly. The recommendation appears in the hero ("quick verdict") and the decision guide ("Choose Wyoming if...") but does NOT bias the comparison table itself. The table is objective; the interpretation is opinionated.

**The table is the core UX element.** It must be scannable, factually accurate, and visually clear about which option "wins" each row. Use checkmarks (✓), crosses (✗), or green/neutral/red color coding per cell — not just text. A visitor should be able to scan the table in 15 seconds and identify the winner on the dimensions they care about.

**Dual Package CTAs appear twice** — once immediately after the table (catching visitors who've seen enough) and once at the bottom (catching full-page scrollers). Between them sits the decision guide and FAQ, which handle the remaining objections.

### 1.5 Shared SEO Patterns

| Element | Pattern |
|---------|---------|
| **Schema** | FAQPage + BreadcrumbList |
| **Breadcrumb** | `Home > [Parent Pillar] > [Comparison Title]` |
| **Title tag** | "[Option A] vs [Option B] for [Topic] \| Incorporate123" |
| **Meta description** | "Compare [A] and [B] for [topic]. Side-by-side analysis of [key factors]. Expert recommendation from 25 years of experience." |
| **H1 pattern** | "[Option A] vs. [Option B]: Which Is Better for [Your Goal]?" |

### 1.6 Shared Responsive Behavior

| Breakpoint | Table Behavior | Other Sections |
|-----------|---------------|---------------|
| Desktop (>1024px) | Full side-by-side table | Standard layout |
| Tablet (768–1024px) | Table maintained (may scroll horizontally for multi-option) | 2-column grids where applicable |
| Mobile (<768px) | **Stacked card layout** — each option becomes a card with its own attribute list. NOT a horizontally scrolling table (scroll tables fail on mobile for comparisons). | Single column. Dual CTAs stack vertically. |

The mobile table-to-card transformation is critical. A 3-column comparison table on mobile is unreadable. Instead, each option becomes a full-width card: "Wyoming — ✓ No member disclosure, ✓ $50/yr annual, ✓ Sole remedy charging order..." followed by "Nevada — ✓ Deeper case law, ✓ Exclusive remedy (multi-member)..."

### 1.7 Shared Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Pillar accent | Varies per page — Blue (Privacy), Green (AP), Amber (Formation) | Hero accent, table header, CTA borders |
| Winner cell highlight | Light green tint `#f0fdf4` | Table cells where one option clearly wins |
| Neutral cell | White | Cells where options are equivalent |
| Disadvantage cell | Light red tint `#fef2f2` | Cells where one option is notably weaker |
| CTA buttons | `#d97706` (Amber) for primary conversion | Both dual CTAs |
| Price font | JetBrains Mono | All prices and costs in tables |
| Body font | Inter | All body text |
| Heading font | Outfit | H1, H2 |

---

## Part 2: Per-Page Specifications

---

### Comparison 1: Wyoming vs. Nevada for Privacy

**URL:** `/wyoming-vs-nevada-privacy/`
**Parent Pillar:** Privacy (Blue `#2563eb`)
**Priority:** P1 — Launch
**Subtype:** Head-to-head (2 options)

#### Strategic Role

The most important comparison page on the site. This is Step 5 of Journey A (Privacy Researcher) — the decision point immediately before the package page. The visitor has been educated on privacy (pillar), learned about anonymous LLCs (cluster), and understands nominee services (cluster). Now they need to choose a state. This page resolves that decision and routes them to Wyoming Gold or Nevada Gold.

#### Quick Verdict

```
"Wyoming is the better choice for most privacy-focused LLCs — lower
annual costs, no member disclosure, and sole-remedy charging order
protection for single-member entities. Nevada excels for corporations
and multi-member LLCs seeking the deepest case law history."
```

#### Comparison Table

| Factor | Wyoming | Nevada | Winner |
|--------|---------|--------|--------|
| LLC member disclosure | Not required | Not required | Tie |
| LLC manager disclosure | Not required | Annual list (nominee OK) | WY |
| Annual costs | $50/yr | $500+/yr ($150 list + $350 license) | WY |
| Single-member LLC protection | Sole remedy | Court discretion | WY |
| Multi-member LLC protection | Sole remedy | Exclusive remedy | Tie |
| State income tax | None | None | Tie |
| Case law depth | Growing | Extensive (30+ years) | NV |
| Corporate veil statute | Standard | NRS 86.401 (strong) | NV |
| Gold package (formation) | $1,275 | $1,800 | WY |
| Gold package (renewal) | $525/yr | $725/yr | WY |
| Year-round nominees included | Yes | Yes | Tie |
| Offshore records included | Yes | Yes | Tie |

#### Decision Guide

```
CHOOSE WYOMING IF:
• You're forming an LLC (not a corporation)
• You're a single-member LLC or sole owner
• You want the lowest annual costs ($50/yr vs. $500+/yr)
• You want no public disclosure of members or managers
• You want the strongest single-member charging order protection

CHOOSE NEVADA IF:
• You're forming a corporation (director/officer protections)
• You have multiple LLC members
• You want the most established case law history
• You value NRS 86.401 corporate veil strength
• You're comfortable with higher annual costs for deeper legal precedent
```

#### Dual Package CTAs

```
★ WYOMING GOLD — $1,275
Year-round nominees · Offshore records · All-inclusive
[Start Wyoming Gold →] (/wyoming-private-incorporation/)

NEVADA GOLD — $1,800
Year-round nominees · Offshore records · Deep case law
[Start Nevada Gold →] (/nevada-private-incorporation/)
```

#### FAQ (6–8 questions)

Key questions:
- "Is Wyoming or Nevada better for privacy?" (headline answer: Wyoming for LLCs, Nevada for corps)
- "Why is Nevada more expensive?" (state fees, not our markup)
- "Can I change states later?" (domestication is available)
- "Do both states offer nominee services?" (yes — identical privacy features, different state laws)
- "What about New Mexico or Delaware for privacy?" (addressed briefly — neither matches WY/NV for LLC privacy + AP combination)
- "Is the privacy the same in Gold packages from both states?" (yes — nominees and offshore records are identical)

#### SEO

| Element | Value |
|---------|-------|
| **H1** | "Wyoming vs. Nevada for Privacy: Which State Protects Your Identity Better?" |
| **Title** | "Wyoming vs Nevada for Privacy — LLC Comparison \| Incorporate123" |
| **Keywords** | Wyoming vs Nevada privacy, Wyoming vs Nevada LLC privacy, best state anonymous LLC, Wyoming or Nevada for privacy |

#### Internal Links

**In from:** `/privacy/` (cluster grid comparison card), `/anonymous-llc/` (inline comparison link), `/wyoming-privacy/` (back-link), `/nevada-privacy/` (back-link), `/wyoming/` state hub, `/nevada/` state hub
**Out to:** `/wyoming-private-incorporation/` (WY Gold CTA), `/nevada-private-incorporation/` (NV Gold CTA), `/privacy/` (pillar breadcrumb), `/wyoming-privacy/`, `/nevada-privacy/`, `/best-state-for-privacy/`

---

### Comparison 2: Best State for Privacy

**URL:** `/best-state-for-privacy/`
**Parent Pillar:** Privacy (Blue `#2563eb`)
**Priority:** P1 — Launch
**Subtype:** Multi-option (4 states)

#### Strategic Role

Broader comparison for visitors who haven't narrowed to WY vs. NV yet. Evaluates Wyoming, Nevada, New Mexico, and Delaware — the four states most commonly cited for business privacy. The page's job is to eliminate NM and DE and route the visitor to the WY vs. NV comparison or directly to a package.

#### Quick Verdict

```
"Wyoming is the best state for business privacy for most LLCs.
No member or manager disclosure, lowest annual costs, sole-remedy
charging order protection for single-member entities. Nevada is
second for LLCs, first for corporations. New Mexico and Delaware
offer partial privacy but lack the comprehensive protections
Wyoming and Nevada provide."
```

#### Comparison Table

| Factor | Wyoming | Nevada | New Mexico | Delaware |
|--------|---------|--------|------------|----------|
| LLC member disclosure | Not required | Not required | Not required | Required (annual) |
| LLC manager disclosure | Not required | Annual list | Not required | Required (annual) |
| Nominee services available | Yes | Yes | Limited | Yes |
| Annual costs | $50/yr | $500+/yr | $0 (no annual report) | $300+/yr |
| Charging order protection (single) | Sole remedy | Court discretion | Limited | Court discretion |
| Charging order protection (multi) | Sole remedy | Exclusive remedy | Standard | Standard |
| State income tax | None | None | Yes (GRT 5.125%) | None on out-of-state |
| Case law depth (LLC privacy) | Growing | Extensive | Minimal | Extensive (Chancery) |
| Incorporate123 packages available | Yes | Yes | No | No |

**Note:** Incorporate123 only offers formation in Wyoming and Nevada. New Mexico and Delaware are included for educational comparison only — visitors who want NM or DE must use another provider.

#### Decision Guide

```
CHOOSE WYOMING IF:
Most businesses · Single-member LLCs · Lowest costs · Maximum privacy

CHOOSE NEVADA IF:
Corporations · Multi-member LLCs · Established case law preference

NEW MEXICO:
No annual reporting (simplest compliance) but limited AP protections
and no Incorporate123 packages. Best for very simple privacy-only needs.

DELAWARE:
Strong corporate law (Chancery Court) but REQUIRES member disclosure
in annual reports. Privacy is weaker than WY/NV for LLCs.
```

#### Dual Package CTAs

Only WY Gold and NV Gold — NM and DE don't have package CTAs (Incorporate123 doesn't serve those states).

```
★ WYOMING GOLD — $1,275 (Recommended)
[Start Wyoming Gold →]

NEVADA GOLD — $1,800
[Start Nevada Gold →]

"We specialize in Wyoming and Nevada. For New Mexico or Delaware,
we recommend consulting a local formation provider."
```

#### FAQ

Key questions:
- "Why don't you offer New Mexico formation?" (specialization — WY/NV are our expertise. NM is simpler but lacks AP.)
- "Is Delaware better than Wyoming for LLCs?" (No — Delaware's LLC privacy requires annual disclosure. Delaware's strength is corporate law, not LLC privacy.)
- "Can I form in Wyoming and operate in any state?" (Yes — foreign registration)
- "What about South Dakota?" (Good for trusts, not as strong for LLC privacy as WY)

#### SEO

| Element | Value |
|---------|-------|
| **H1** | "Best State for Business Privacy: Wyoming, Nevada, New Mexico & Delaware Compared" |
| **Title** | "Best State for Privacy — 4-State LLC Comparison \| Incorporate123" |
| **Keywords** | best state for privacy LLC, best state anonymous LLC, best state business privacy, most private state LLC |

---

### Comparison 3: Wyoming vs. Nevada for Asset Protection

**URL:** `/wyoming-vs-nevada-asset-protection/`
**Parent Pillar:** Asset Protection (Green `#16a34a`)
**Priority:** P2 — Expansion
**Subtype:** Head-to-head (2 options)

#### Strategic Role

Decision point in Journey C (Lawsuit-Averse Business Owner). State selection specifically for asset protection — which state's charging order protection and veil statutes are stronger? Wyoming leads for single-member LLCs; Nevada leads for corporations and multi-member entities.

#### Quick Verdict

```
"Wyoming for single-member LLCs — the only state with sole-remedy
charging order protection for single owners. Nevada for corporations
and multi-member entities — deeper case law and NRS 86.401 corporate
veil protection."
```

#### Comparison Table

| Factor | Wyoming | Nevada | Winner |
|--------|---------|--------|--------|
| Charging order (single-member) | Sole remedy | Court discretion | WY |
| Charging order (multi-member) | Sole remedy | Exclusive remedy | Tie |
| Corporate veil statute | Standard | NRS 86.401 (strong) | NV |
| Director/officer protections | Standard | NRS 78.138 (strong) | NV |
| State income tax | None | None | Tie |
| Annual costs | $50/yr | $500+/yr | WY |
| Case law volume (AP) | Growing | Extensive | NV |
| Chancery Court | Yes (2023) | No (business court exists) | WY |
| Gold package (formation) | $1,275 | $1,800 | WY |
| Gold package (renewal) | $525/yr | $725/yr | WY |

#### Decision Guide

```
CHOOSE WYOMING IF:
• Single-member LLC (sole-remedy protection is unique to WY)
• Cost-sensitive ($50/yr vs. $500+/yr)
• Holding LLC for investments or real estate
• Want maximum AP + privacy combined at lowest cost

CHOOSE NEVADA IF:
• Corporation (NRS 78.138 director protections)
• Multi-member LLC (both states strong, NV has more case law)
• Need the most established, battle-tested AP case law
• Value the specific protections of NRS 86.401
```

#### Dual Package CTAs

WY Gold + NV Gold, with cross-pillar note:

```
★ WYOMING GOLD — $1,275 (AP + Privacy)
[Start Wyoming Gold →]

NEVADA GOLD — $1,800 (AP + Privacy)
[Start Nevada Gold →]

"Both Gold packages include year-round nominee services. Most
asset protection clients add privacy because hiding ownership
is the first line of defense."
```

#### SEO

| Element | Value |
|---------|-------|
| **H1** | "Wyoming vs. Nevada for Asset Protection: Charging Orders, Veil Protection & Costs Compared" |
| **Title** | "Wyoming vs Nevada Asset Protection — LLC Comparison \| Incorporate123" |
| **Keywords** | Wyoming vs Nevada asset protection, best state asset protection LLC, Wyoming vs Nevada charging order |

---

### Comparison 4: Best State for Asset Protection

**URL:** `/best-state-asset-protection/`
**Parent Pillar:** Asset Protection (Green `#16a34a`)
**Priority:** P2 — Expansion
**Subtype:** Multi-option (4 states: WY, NV, South Dakota, Delaware)

#### Strategic Role

Broader AP comparison. Includes South Dakota (strong trust protections) and Delaware (Chancery Court corporate law) alongside WY/NV. Eliminates SD and DE for LLC-based AP and routes to WY vs. NV for the final decision.

#### Comparison Table

| Factor | Wyoming | Nevada | South Dakota | Delaware |
|--------|---------|--------|-------------|----------|
| Charging order (single-member) | Sole remedy | Court discretion | Standard | Court discretion |
| Charging order (multi-member) | Sole remedy | Exclusive remedy | Standard | Standard |
| Domestic asset protection trust | Yes (2023) | Yes (NRS 166) | Yes (strongest) | No |
| Corporate veil | Standard | NRS 86.401 | Standard | Strong (Chancery) |
| State income tax | None | None | None | None on out-of-state |
| Annual costs | $50/yr | $500+/yr | $50/yr | $300+/yr |
| AP case law depth | Growing | Extensive | Moderate (trusts strong) | Extensive (corps) |
| LLC focus vs. trust focus | LLC-focused | LLC + Corp | Trust-focused | Corp-focused |

#### Decision Guide

```
WYOMING: Best for LLC-based asset protection, single-member protection
NEVADA: Best for corporate AP and established LLC case law
SOUTH DAKOTA: Best for domestic asset protection trusts (not LLCs)
DELAWARE: Best for corporate governance, weakest for LLC AP
```

#### SEO

| Element | Value |
|---------|-------|
| **H1** | "Best State for Asset Protection: Wyoming, Nevada, South Dakota & Delaware Compared" |
| **Keywords** | best state asset protection, best state LLC protection, best state charging order |

---

### Comparison 5: Wyoming vs. Nevada (General Formation)

**URL:** `/wyoming-vs-nevada/`
**Parent Pillar:** Formation (Amber `#d97706`)
**Priority:** P1 — Launch
**Subtype:** Head-to-head (2 options)

#### Strategic Role

The broadest WY vs. NV comparison — not pillar-specific. Covers formation costs, annual fees, taxes, privacy, asset protection, and compliance in a single comprehensive table. This is the page for the Formation Researcher (Journey E) who hasn't decided on a state and wants a full picture. It's also the highest-volume comparison keyword target.

#### Quick Verdict

```
"Wyoming for most businesses — lower annual costs ($50/yr vs. $500+/yr),
stronger single-member LLC protection, and the same tax benefits. Nevada
for corporations needing the deepest case law history and strongest
director protections."
```

#### Comparison Table

This is the most comprehensive comparison table on the site — 12–15 rows covering all dimensions:

| Factor | Wyoming | Nevada | Winner |
|--------|---------|--------|--------|
| **Formation** | | | |
| LLC filing fee | $100 | $425 | WY |
| Corp filing fee | $100 | $75 | NV |
| Formation timeline | 3–5 days | 3–5 days | Tie |
| **Annual Costs** | | | |
| Annual report | $50/yr | $150/yr | WY |
| Business license | None | $350/yr | WY |
| Total annual cost | ~$50/yr | ~$500/yr | WY |
| **Tax** | | | |
| State income tax | None | None | Tie |
| Commerce Tax | None | 0.051% on $4M+ gross | WY |
| **Privacy** | | | |
| LLC member disclosure | Not required | Not required | Tie |
| Manager disclosure | Not required | Annual list (nominee OK) | WY |
| **Asset Protection** | | | |
| Charging order (single) | Sole remedy | Court discretion | WY |
| Charging order (multi) | Sole remedy | Exclusive remedy | Tie |
| Corporate veil | Standard | NRS 86.401 | NV |
| **Compliance** | | | |
| Filing complexity | Minimal | Moderate (license + list) | WY |
| **Packages** | | | |
| Silver (formation) | $875 | $1,275 | WY |
| Gold (privacy) | $1,275 | $1,800 | WY |
| Renewal (Gold) | $525/yr | $725/yr | WY |

#### Decision Guide

```
CHOOSE WYOMING IF:
• Forming an LLC (any type)
• Single-member or sole owner
• Want lowest annual costs
• Privacy-focused
• First-time formation (simpler compliance)
• Budget-conscious

CHOOSE NEVADA IF:
• Forming a corporation
• Multiple members/shareholders
• Want deepest case law history
• Need strongest director/officer protections
• Have existing Nevada business relationships
• Planning complex multi-entity structures
```

#### Dual Package CTAs

This page shows BOTH Gold and Silver for each state — Formation visitors may not want privacy:

```
WYOMING
★ Gold (Privacy) — $1,275 | Silver (Formation) — $875
[View Wyoming Packages →]

NEVADA
★ Gold (Privacy) — $1,800 | Silver (Formation) — $1,275
[View Nevada Packages →]
```

#### Cross-Pillar Callout

```
"70% of formation clients add privacy. Year-round nominee services
keep your name off every public filing."
→ Learn about business privacy (/privacy/)
```

This is the highest-leverage cross-sell placement of any comparison page — Formation visitors deciding between WY and NV are the prime audience for the Silver → Gold upsell.

#### FAQ

Key questions:
- "Why is Wyoming cheaper than Nevada?" (lower state fees, no business license)
- "Is Nevada's higher cost worth it?" (for corporations and multi-member LLCs, potentially yes)
- "What about Delaware?" (brief — Delaware's strength is corporate governance. WY/NV are better for LLC privacy + AP.)
- "Can I form in Wyoming and operate in Nevada (or vice versa)?" (yes — foreign registration)
- "Should I add privacy to my formation?" (70% do — explains Gold upgrade)
- "What if I change my mind about the state later?" (domestication available)

#### SEO

| Element | Value |
|---------|-------|
| **H1** | "Wyoming vs. Nevada: Which State Is Better for Your Business?" |
| **Title** | "Wyoming vs Nevada — Complete Business Formation Comparison \| Incorporate123" |
| **Keywords** | Wyoming vs Nevada LLC, Wyoming vs Nevada incorporation, Wyoming vs Nevada for business, best state to form LLC |

This is the highest-volume comparison keyword on the site. "Wyoming vs Nevada LLC" is a competitive query — this page must be comprehensive enough to rank.

---

### Comparison 6: Shelf Company vs. New Formation

**URL:** `/shelf-company-vs-new-formation/`
**Parent Pillar:** Formation (Amber `#d97706`)
**Priority:** P2 — Expansion
**Subtype:** Head-to-head (2 options)

#### Strategic Role

Decision support for visitors considering a shelf company. This page helps them decide whether the credibility benefits of an aged entity justify the higher cost vs. forming new.

#### Quick Verdict

```
"Form new for most businesses — faster, cheaper, and you choose your
entity name. Buy a shelf company only if you need established entity
age for government contracts, banking credibility, or partner requirements."
```

#### Comparison Table

| Factor | New Formation | Shelf Company | Winner |
|--------|--------------|---------------|--------|
| Cost | From $625 (WY Bronze) | From $2,000 | New |
| Timeline | 5–7 business days | 24–48 hours (transfer) | Shelf |
| Entity name choice | You choose any available name | Pre-assigned (can rename, extra fee) | New |
| Entity age | Brand new (formed today) | 1–13+ years established | Shelf |
| Government contract eligibility | May require 2–3 year history | Immediate (if aged enough) | Shelf |
| Banking credibility | New entity = limited history | Aged entity = stronger applications | Shelf |
| Prior liabilities | None (brand new) | None (formed by Inc123, never operated) | Tie |
| Privacy features available | Yes (Gold packages) | Yes (add-on) | Tie |
| Annual renewal costs | Same as tier | Same as tier | Tie |

#### Decision Guide

```
FORM NEW IF:
• You want to choose your entity name
• You don't need established entity age
• You want the lowest formation cost
• Standard timeline (5–7 days) works for you

BUY A SHELF COMPANY IF:
• You need to show 2+ years of entity history
• You're bidding on government contracts with age requirements
• You want stronger credibility with banks or partners
• You need an entity immediately (24–48 hour transfer)
• You're willing to pay a premium for established history
```

#### Dual Package CTAs

```
NEW FORMATION
Wyoming from $625 · Nevada from $699 · All-inclusive
[View Formation Packages →] (/formation/)

SHELF COMPANIES
From $2,000 · 1–13+ year aged entities · WY & NV
[Browse Available Inventory →] (/shelf-companies/)
```

#### SEO

| Element | Value |
|---------|-------|
| **H1** | "Shelf Company vs. New Formation: Which Approach Is Right for You?" |
| **Title** | "Shelf Company vs New LLC — Cost, Timeline & Credibility Compared \| Incorporate123" |
| **Keywords** | shelf company vs new formation, buy aged LLC, shelf company benefits, aged entity vs new LLC |

---

### Comparison 7: LLC vs. S-Corp vs. C-Corp Tax

**URL:** `/llc-vs-scorp-vs-ccorp-tax/`
**Parent Pillar:** Formation (Amber `#d97706`)
**Priority:** P2 — Expansion
**Subtype:** Multi-option (3 entity/tax types)

#### Strategic Role

Pre-formation tax decision support. Helps visitors understand how entity type affects tax treatment BEFORE they form. This is an educational comparison — Incorporate123 does not provide tax advice, and the page must include a prominent "consult your CPA" disclaimer.

#### Quick Verdict

```
"Most small businesses benefit from LLC with default tax treatment —
simplest filing, pass-through taxation, no double taxation. S-Corp
election saves self-employment tax when owner compensation exceeds
$40K–$50K. C-Corp taxation benefits high-revenue businesses retaining
significant profits. Consult a CPA for your specific situation."
```

#### Comparison Table

| Factor | LLC (Default) | LLC (S-Corp Election) | C-Corporation |
|--------|--------------|----------------------|--------------|
| Federal taxation | Pass-through (personal rates) | Pass-through (personal rates) | Corporate rate (21%) + dividend tax |
| Self-employment tax | Yes (all net income) | Only on "reasonable salary" | No (salary only, plus dividend tax) |
| Double taxation | No | No | Yes (corporate income + shareholder dividends) |
| Filing complexity | Simplest (Schedule C or 1065) | Moderate (1120-S + payroll) | Complex (1120 + potential dividend reporting) |
| Payroll requirements | None (unless employees) | Yes — must pay "reasonable salary" | Yes — must pay salary |
| Retained earnings | Taxed as distributed (even if retained) | Taxed as distributed | Taxed at 21% (can retain and reinvest) |
| Best for | Most small businesses, side businesses, real estate | Service businesses with $40K+ owner income | High-revenue businesses retaining profits |
| Incorporate123 support | Form LLC → default taxation | Form LLC → elect S-Corp with IRS (Form 2553) | Form Corporation |

#### Decision Guide

```
CHOOSE LLC (DEFAULT TAX) IF:
• Small business with < $40K annual net income
• Side business or freelance operation
• Real estate investment
• Want simplest tax filing

CHOOSE S-CORP ELECTION IF:
• Service business with $40K–$50K+ in annual owner income
• Want to reduce self-employment tax
• Willing to run payroll and pay "reasonable salary"
• CPA confirms savings exceed compliance costs

CHOOSE C-CORP IF:
• High-revenue business retaining significant profits
• Seeking venture capital or institutional investment
• Want to issue stock options to employees
• Planning eventual IPO or sale at capital gains rates
```

#### CTA Treatment (Different from other comparisons)

This page does NOT show dual package CTAs by entity tax type — all three options involve forming an LLC or corporation through Incorporate123. Instead:

```
READY TO FORM YOUR ENTITY?

Wyoming LLC from $875 · Nevada LLC from $1,275
Wyoming Corp from $875 · Nevada Corp from $1,275

[View All Formation Packages →] (/formation/)
[LLC vs Corporation Structure Comparison →] (/llc-vs-corporation/)

"Tax elections (S-Corp, C-Corp) are made with the IRS after formation.
We form the entity; your CPA files the election."
```

#### Disclaimer (PROMINENT)

```
⚠ TAX INFORMATION DISCLAIMER

This comparison is for general educational purposes only.
Incorporate123 is NOT a CPA, tax advisor, or tax preparation
service. Tax treatment depends on your specific financial
situation, state of residence, and business type.

We strongly recommend consulting a qualified CPA or tax
professional before choosing an entity type based on tax
considerations. We form entities — we do not provide tax advice.
```

**Dev Notes:**
- This disclaimer must be prominent — not a footer footnote. Place it between the comparison table and the decision guide.
- The page positions Incorporate123 as knowledgeable enough to explain the options, while being transparent that the decision requires professional tax advice. This builds trust while limiting liability.

#### SEO

| Element | Value |
|---------|-------|
| **H1** | "LLC vs. S-Corp vs. C-Corp: How Entity Type Affects Your Taxes" |
| **Title** | "LLC vs S-Corp vs C-Corp Tax — Entity Comparison \| Incorporate123" |
| **Keywords** | LLC vs S Corp tax, LLC vs C Corp, entity type tax comparison, best entity type for taxes, S Corp election |

---

## Part 3: Complete Comparison Page Inventory

### 3.1 All 7 Comparison Pages

| # | Page | URL | Pillar | Subtype | Priority |
|---|------|-----|--------|---------|----------|
| 1 | WY vs NV for Privacy | `/wyoming-vs-nevada-privacy/` | Privacy (Blue) | Head-to-head | P1 |
| 2 | Best State for Privacy | `/best-state-for-privacy/` | Privacy (Blue) | Multi-option (4 states) | P1 |
| 3 | WY vs NV for AP | `/wyoming-vs-nevada-asset-protection/` | AP (Green) | Head-to-head | P2 |
| 4 | Best State for AP | `/best-state-asset-protection/` | AP (Green) | Multi-option (4 states) | P2 |
| 5 | WY vs NV (General) | `/wyoming-vs-nevada/` | Formation (Amber) | Head-to-head | P1 |
| 6 | Shelf vs New Formation | `/shelf-company-vs-new-formation/` | Formation (Amber) | Head-to-head | P2 |
| 7 | LLC vs S-Corp vs C-Corp Tax | `/llc-vs-scorp-vs-ccorp-tax/` | Formation (Amber) | Multi-option (3 types) | P2 |

### 3.2 Cross-Linking Between Comparisons

Comparison pages should link to each other where relevant:

| From | To | Link Context |
|------|----|-------------|
| WY vs NV Privacy | Best State for Privacy | "See all states compared →" |
| WY vs NV Privacy | WY vs NV (General) | "Compare states beyond privacy →" |
| Best State for Privacy | WY vs NV Privacy | "Head-to-head WY vs NV deep dive →" |
| WY vs NV AP | Best State for AP | "See all states compared →" |
| WY vs NV AP | WY vs NV (General) | "Compare states beyond AP →" |
| WY vs NV (General) | WY vs NV Privacy | "Focus on privacy comparison →" |
| WY vs NV (General) | WY vs NV AP | "Focus on asset protection →" |
| LLC vs S-Corp vs C-Corp Tax | Shelf vs New | "Also consider: shelf company vs. new →" |

### 3.3 Recommendation Consistency

Wyoming is recommended as the default state across ALL comparison pages. This must be consistent — if the Privacy comparison says "Wyoming for most LLCs" but the Formation comparison says "Nevada for most LLCs," the site contradicts itself. The consistent position is:

```
Wyoming: Best for LLCs (single and multi-member), lowest cost, strongest single-member AP
Nevada: Best for corporations, deepest case law, strongest corporate veil statute
```

This recommendation appears in every comparison page's quick verdict, decision guide, and CTA treatment.

---

## Part 4: Content Notes for David

### Factual Verification Required (All Pages)

1. **WY annual report** — $50/yr for both LLC and Corp. Verify.
2. **NV annual list** — $150/yr. Verify.
3. **NV business license** — $350/yr. Verify.
4. **NV Commerce Tax** — 0.051% on $4M+ gross revenue. Verify rate and threshold.
5. **WY LLC filing fee** — $100. Verify.
6. **NV LLC filing fee** — $425. Verify.
7. **NV Corp filing fee** — $75. Verify.
8. **NRS 86.401** — Verify this is the correct statute for NV corporate veil.
9. **NRS 78.138** — Verify this is the correct statute for NV director protections.
10. **WY Chancery Court** — Established 2023. Verify operational status.
11. **South Dakota AP trust laws** — Referenced in Best State for AP. Verify characterization.
12. **Delaware annual report** — $300+ franchise tax. Verify current amount.
13. **New Mexico disclosure** — NM does not require LLC member disclosure. Verify.
14. **New Mexico annual report** — NM requires no annual report for LLCs. Verify.
15. **S-Corp reasonable salary** — $40K–$50K threshold referenced. This is a general guideline, not law. Verify David is comfortable with this framing.

### Tax Content Disclaimer

The LLC vs. S-Corp vs. C-Corp Tax page requires extra scrutiny. David should:
- Confirm the tax comparison table is accurate at a high level
- Confirm he's comfortable with Incorporate123 publishing tax comparison content under the stated disclaimer
- Consider having a CPA review the page content before publication

### Content Authorship

David writes or approves all comparison content. The per-page specs above provide the structural framework and placeholder content direction. The actual comparison data, recommendations, and FAQ answers must be verified for accuracy against current state laws and Incorporate123's actual service offerings.

---

## Part 5: How Comparison Pages Differ From All Other Page Types

| Dimension | Pillar Page | Cluster Page | Package Page | State Hub | **Comparison Page** |
|-----------|-------------|-------------|-------------|-----------|-------------------|
| Primary job | Educate + route | Deepen topic | Close sale | Route by geography | **Resolve a decision** |
| Funnel stage | Education | Specifics | Conversion | Entry routing | **Decision support** |
| Content structure | Narrative arc | Deep dive | Product detail | Navigation grid | **Table + verdict + decision guide** |
| Core UX element | Cluster grid | Sidebar + FAQ | Running total + configurator | Intent routing cards | **Comparison table** |
| CTA pattern | "Explore" + "See packages" | Dual Gold CTA | "Proceed to Checkout" | "See packages" | **Dual CTA: Option A vs Option B** |
| Recommendation | General (pillar-level) | Specific (topic-level) | "This package" | By state | **"Choose A if... / Choose B if..."** |
| Neutrality | Educates on category | Advocates for approach | Sells specific product | Neutral routing | **Data-neutral, opinion-stated** |
| Mobile table | N/A | N/A | Tier cards stack | Services accordion | **Table → stacked cards per option** |
| FAQ focus | Broad pillar questions | Topic-specific | Transactional (refund, timeline) | State-specific | **"Which is better for X?" questions** |
| Cross-sell | AP ↔ Privacy bridge | AP cross-pillar callout | "Also consider" packages | 4-pillar routing | **Related comparison + pillar cross-sell** |
| Schema | FAQ + Organization | Article + FAQ | Product + FAQ | FAQ | **FAQ + BreadcrumbList** |
| Word count | ~3,200 | ~4,500 | ~3,500 | ~1,800 | **~2,500 (table-heavy, text-light)** |

---

*End of Specification — Comparison Pages*
*Confidential — BIT Studios × Incorporate123 — April 2026*
