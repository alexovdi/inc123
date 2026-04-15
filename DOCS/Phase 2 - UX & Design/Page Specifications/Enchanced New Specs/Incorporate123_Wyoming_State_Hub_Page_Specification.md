# Wyoming State Hub — Page Specification

**Page:** Wyoming Hub
**URL:** `/wyoming/`
**Template Type:** State Hub
**Priority:** P1 — Launch
**Content Source:** New creation
**Accent:** No single pillar color — this page uses all four pillar colors to signal cross-pillar aggregation

---

## 1. Page Purpose & Strategic Role

### 1.1 Primary Goal

Capture **geographic search intent** — visitors who search "Wyoming LLC," "Wyoming incorporation," "form business in Wyoming," or "Wyoming" + any service term — and route them to the right pillar, cluster, or package page based on what they actually need. The Wyoming hub is a **traffic intersection**, not a content destination. Its job is wayfinding, not education.

### 1.2 Why State Hubs Exist

The entire site architecture is organized by **intent** (privacy, asset protection, formation, compliance), not by **geography** (Wyoming, Nevada). But a significant volume of visitors search by state name. They type "Wyoming LLC" — not "anonymous LLC" or "asset protection LLC." Without a state hub, these visitors land on the homepage or a pillar page and have to self-navigate to Wyoming-specific content. The state hub eliminates that friction by aggregating every Wyoming-related page in one place.

State hubs are the **connective tissue between the old geography-first architecture and the new intent-first architecture.** They honor how real visitors actually search while routing them into the intent-based structure that serves them better.

### 1.3 Role Within Site Architecture

1. **Geographic SEO landing page** — Targets the highest-volume state-specific queries ("Wyoming LLC," "Wyoming incorporation," "form company in Wyoming"). These are competitive keywords dominated by formation-focused content. The hub page's broad topical coverage (privacy + AP + formation + compliance) gives it a content advantage over single-topic competitors.
2. **Cross-pillar intersection** — The only page type on the site that links to all four pillars simultaneously. While pillar pages link within their pillar and occasionally cross-sell, the state hub links to everything for one state — Privacy, AP, Formation, Compliance, and all Wyoming packages.
3. **Journey I entry point** — Serves the "State Hub Entry" journey: visitor searches state name → lands on hub → identifies their intent → routes to the correct pillar or package. The hub resolves the "I know the state, but not the service" problem.
4. **Nevada comparison anchor** — For visitors considering Wyoming vs. Nevada, this page provides the Wyoming perspective while linking to comparison pages and the Nevada hub.

### 1.4 Target Personas

| Persona | Search Query | What They Need |
|---------|-------------|----------------|
| **State-first formation seeker** | "Wyoming LLC," "incorporate in Wyoming" | Quick route to WY formation packages with pricing |
| **Privacy seeker, state-anchored** | "Wyoming privacy LLC," "anonymous LLC Wyoming" | Route to Wyoming Privacy cluster or Anonymous LLC |
| **Asset protector, state-specific** | "Wyoming asset protection," "Wyoming charging order" | Route to WY Asset Protection cluster |
| **Comparison shopper** | "Why Wyoming for LLC," "Wyoming business advantages" | "Why Wyoming" education → state comparison → package |
| **Existing entity owner** | "Wyoming registered agent," "Wyoming annual report" | Route to compliance services |

### 1.5 Success Metrics

- **Primary:** Click-through to any Wyoming package page (Gold, Silver, Bronze)
- **Secondary:** Click-through to any Wyoming-specific cluster page (WY Privacy, WY AP, WY LLC, WY Corp, WY RA)
- **Tertiary:** Click-through to comparison pages (WY vs NV Privacy, WY vs NV Formation, WY vs NV AP)
- **Bounce target:** < 45% (visitors arrive with geographic intent that should be immediately addressable)
- **Time on page target:** 1–3 minutes (this is a routing page — visitors should find their path quickly and click through)

---

## 2. Section Order & Narrative Arc

State hubs are **navigation-first** pages. The arc is not persuasion — it's orientation. The visitor knows the state; they need to find the service. Every section exists to route them somewhere more specific.

| # | Section | Role | Visitor Mindset |
|---|---------|------|-----------------|
| 1 | State Hero | **Orient** — Confirm state, surface key facts, offer fast paths | "I'm looking for Wyoming [something]." |
| 2 | Intent Routing Cards | **Route** — 4 pillar cards with top links per pillar | "Which of these categories is what I need?" |
| 3 | Package Quick Links | **Convert** — Direct to WY packages with pricing | "Show me pricing for Wyoming." |
| 4 | Why Choose Wyoming | **Educate** — 6 state advantages | "Why Wyoming specifically?" |
| 5 | All Wyoming Services | **Catalog** — Complete 4-column grid by pillar | "Show me everything you offer in Wyoming." |
| 6 | Wyoming vs. Nevada | **Compare** — Quick comparison with CTA to full page | "Should I choose Wyoming or Nevada?" |
| 7 | State-Specific FAQ | **Resolve** — 5–6 WY-specific questions | "Quick questions about Wyoming..." |
| 8 | Final CTA | **Close** — Drive action | "I'm ready to start in Wyoming." |

### Why This Order Works

**Section 1 (Hero):** Immediate geographic confirmation — "yes, this is the Wyoming page." A state fact strip (no income tax, $50/yr annual report, sole-remedy charging order) provides the quick-scan data that comparison shoppers want. Two CTA paths: "Start in Wyoming" (packages) and "Explore Wyoming Services" (routing).

**Section 2 (Intent Routing):** The core UX mechanism. Four cards matching the four pillars — Privacy, Asset Protection, Formation, Compliance — each with 2–3 top-linked pages for that pillar in Wyoming. The visitor self-selects their intent and clicks through. This is the section that bridges geographic search to intent-based architecture.

**Section 3 (Package Quick Links):** Catches informed buyers who searched "Wyoming LLC" and already know they want to buy. Gold, Silver, Bronze with prices — one click to the package page. Positioned early because formation-intent visitors are the largest state-search audience.

**Section 4 (Why Wyoming):** For visitors who haven't decided between states. Six advantage blocks answer "why Wyoming?" — no income tax, lowest annual costs, strongest single-member LLC protection, no ownership disclosure, business-friendly courts, and Tax Foundation #1 ranking. This section exists on the state hub but NOT on pillar pages — it's state-specific content.

**Section 5 (All Wyoming Services):** Complete catalog of every Wyoming-related page organized by pillar. This is the comprehensive "everything we do in Wyoming" grid. For researchers who want to see the full scope before clicking.

**Section 6 (WY vs NV):** A compact comparison for visitors considering both states. Not the full comparison page — just enough to help them decide, with CTA to the full WY vs NV pages.

**Sections 7–8 (FAQ + CTA):** State-specific FAQ (costs, timeline, residency requirements) and a final conversion CTA.

---

## 3. Section-by-Section Specification

---

### Section 1: State Hero

**Layout:** Full-width. Medium-dark background — NOT the deep navy of pillar heroes. A distinct state hub visual identity: clean, geographic, authoritative. Consider a subtle topographic/map texture or Wyoming outline as a background element.

**Height:** ~50vh desktop, auto mobile.

**Components:**
- Breadcrumb: `Home > Wyoming`
- H1 headline
- Subheadline (1 sentence)
- State fact strip (4–5 key stats, inline)
- Dual CTA buttons
- Optional: small Wyoming outline icon or flag element

**Content:**

```
Breadcrumb: Home > Wyoming

H1: Wyoming Business Formation,
    Privacy & Asset Protection.

Subheadline: The #1 state for LLC privacy, the lowest annual costs
in the country, and the strongest single-member charging order
protection. Trusted in Wyoming since 2000.

State fact strip:
$0 State Income Tax | $50/yr Annual Report | $100 LLC Filing Fee |
Sole-Remedy Charging Order | No Member Disclosure Required

CTA Primary (amber): See Wyoming Packages →
CTA Secondary (outline): Explore Wyoming Services ↓
```

**Dev Notes:**
- H1 is the page's single H1 — targets "Wyoming business formation" as the primary keyword
- Primary CTA scrolls to or links to Section 3 (Package Quick Links)
- Secondary CTA smooth-scrolls to Section 2 (Intent Routing)
- State fact strip uses JetBrains Mono for the numbers/stats
- This hero does NOT use a single pillar color — it's state-branded, not pillar-branded. Consider a neutral dark blue-gray or a Wyoming-inspired color palette
- The "$0 State Income Tax" stat is the headline for comparison shoppers coming from California ($800 franchise tax) or Nevada ($500+/yr annual fees)

---

### Section 2: Intent Routing Cards

**Layout:** White background. 2×2 card grid on desktop (matching the 4 pillars). Each card is color-coded to its pillar and contains 2–3 direct links to the most important Wyoming pages within that pillar.

**Purpose:** This is the section that converts geographic intent into service intent. The visitor sees four categories and self-selects. Each card provides enough context (2–3 links + brief description) that the visitor can click directly to the right page without an intermediate step.

**Components:**
- Eyebrow: `WHAT DO YOU NEED IN WYOMING?`
- H2 headline
- 4 pillar cards (2×2 grid), each with: pillar icon, pillar name, 1-sentence description, 2–3 top page links

**Content:**

```
Eyebrow: WHAT DO YOU NEED IN WYOMING?

H2: Choose Your Starting Point

Card 1: PRIVACY (Blue #2563eb accent)
[Lock icon]
Keep your ownership off Wyoming public records with
year-round nominee services and offshore records storage.
→ Wyoming Privacy Guide (/wyoming-privacy/)
→ Anonymous LLC (/anonymous-llc/)
→ Nominee Services (/nominee-services/)

Card 2: ASSET PROTECTION (Green #16a34a accent)
[Shield icon]
Wyoming's sole-remedy charging order protection — the
strongest single-member LLC protection in the country.
→ Wyoming Asset Protection (/wyoming-asset-protection/)
→ Charging Order Protection (/charging-order-protection/)
→ Investment Holding LLC (/investment-holding-llc/)

Card 3: FORMATION (Amber #d97706 accent)
[FileText icon]
Form a Wyoming LLC or Corporation with registered agent,
EIN, operating agreement, and state fees included.
→ Wyoming LLC Guide (/wyoming-llc/)
→ Wyoming Corporation (/wyoming-corporation/)
→ LLC vs. Corporation (/llc-vs-corporation/)

Card 4: COMPLIANCE (Purple #9333ea accent)
[CheckCircle icon]
Ongoing compliance for existing Wyoming entities: registered
agent, annual reports, and corporate records maintenance.
→ Wyoming Registered Agent (/wyoming-registered-agent/)
→ Annual Reports (/annual-reports/)
→ Domestication (/domestication/)
```

**Dev Notes:**
- Each card has its pillar color as a top border (3px) or left border accent
- Cards are clickable at the title level (clicking "PRIVACY" goes to `/privacy/`) AND have specific links within — two navigation levels in one card
- On mobile, cards stack vertically — Privacy on top (lead pillar)
- This 2×2 grid is the most important UX element on the page — it must be visible within the first scroll on all viewports

---

### Section 3: Package Quick Links

**Layout:** Light background (`#f8fafc`). Horizontal row of 3 package cards — Gold, Silver, Bronze (all Wyoming).

**Purpose:** Catch informed buyers who arrived searching "Wyoming LLC" and want pricing immediately. This section is the state hub's equivalent of the Formation pillar's "Quick-Path Shortcut" — it catches visitors who know what they want and routes them to packages without requiring a pillar detour.

**Components:**
- Eyebrow: `WYOMING PACKAGES`
- H2 headline
- 3 package cards: Gold (highlighted), Silver, Bronze
- Entity type note: "LLC or Corporation — choose on the package page"
- Link to full comparison

**Content:**

```
Eyebrow: WYOMING PACKAGES

H2: Wyoming Formation — All-Inclusive Pricing

★ GOLD — FULL PRIVACY (Highlighted)
$1,275 formation | $525/yr renewal
Year-round nominees · Offshore records · All-inclusive
CTA (amber): View Wyoming Gold →
(/wyoming-private-incorporation/)

SILVER — FORMATION + VIRTUAL PRESENCE
$875 formation | $325/yr renewal
Registered agent · Virtual office · All state fees included
CTA (outline): View Wyoming Silver →
(/wyoming-incorporation/)

BRONZE — FORMATION + COMPLIANCE
$625 formation | $[renewal]/yr renewal
Registered agent · Annual filing · State fees included
CTA (outline): View Wyoming Bronze →
(/wyoming-basic-incorporation/)

Below cards:
"LLC or Corporation? Choose your entity type on the package page."
"Compare all packages including Nevada → " (/compare-packages/)
"Operating in California or Florida? Wyoming entity + foreign
registration →" (/california-private-incorporation/) | (/florida-private-incorporation/)
```

**Dev Notes:**
- Gold card has blue accent border + "Recommended" badge
- Prices in JetBrains Mono
- Bronze pricing needs David's confirmation
- Cards are compact — not the full package page treatment, just enough to show price and route to the detail page
- The CA/FL note catches visitors who searched "Wyoming LLC" but actually operate in another state

---

### Section 4: Why Choose Wyoming

**Layout:** White background. 6-block grid (3×2 desktop, 2×3 tablet, 1×6 mobile).

**Purpose:** State-specific value proposition. This content does NOT exist on pillar pages (which are state-agnostic). The state hub is where "why this state" lives. For visitors comparing Wyoming against Nevada, Delaware, or their home state.

**Components:**
- Eyebrow: `WHY WYOMING`
- H2 headline
- 6 advantage blocks (icon + title + 2-sentence description)

**Content:**

```
Eyebrow: WHY WYOMING

H2: Why Wyoming Is the #1 State for Business Formation

Blocks:

[DollarSign icon]
No State Income Tax
Wyoming imposes no personal or corporate income tax. Your
entity's profits are not taxed at the state level — period.
No Commerce Tax, no franchise tax, no business license fee.

[Wallet icon]
Lowest Annual Costs
Wyoming's annual report fee is $50. Compare that to Nevada's
$500+/yr (annual list + business license), Delaware's $300+/yr
(franchise tax), or California's $800/yr minimum franchise tax.
The math is straightforward.

[Shield icon]
Strongest Single-Member LLC Protection
Wyoming is the only state that extends sole-remedy charging
order protection to single-member LLCs. In most other states,
a court can order the complete seizure of a single-member LLC.

[Eye-off icon]
No Public Ownership Disclosure
Wyoming does not require disclosure of LLC members or managers
in Articles of Organization or annual reports. Your ownership
is private at the state level from day one.

[Building icon]
Business-Friendly Courts
Wyoming's Chancery Court (established 2023) handles complex
business disputes with specialized expertise. The state
consistently ranks as one of the most business-friendly
jurisdictions in the country.

[Trophy icon]
Tax Foundation #1 — 13 Consecutive Years
The Tax Foundation has ranked Wyoming the #1 business tax
climate in the United States for 13 consecutive years. No
other state comes close to this consistency.
```

**Dev Notes:**
- These blocks are state-specific and do NOT appear on pillar or cluster pages
- The "Tax Foundation #1" stat is cited by Wyoming Corporate Services — we should cite it too but verify the "13 consecutive years" claim is current
- No CTA in this section — it's educational context that increases conversion confidence
- Icons use a neutral accent color (not tied to a single pillar) or a mix of pillar colors

---

### Section 5: All Wyoming Services

**Layout:** Light gray background. 4-column grid organized by pillar — one column per pillar. Every Wyoming-relevant page listed.

**Purpose:** Complete catalog of everything Incorporate123 offers for Wyoming entities. This is the exhaustive reference for visitors who want to see the full scope. Also serves as a dense internal linking block — every link is a contextual dofollow link with keyword-rich anchor text.

**Components:**
- Eyebrow: `ALL WYOMING SERVICES`
- H2 headline
- 4-column grid: Privacy | Asset Protection | Formation | Compliance
- Each column lists every Wyoming-relevant page with a link

**Content:**

```
Eyebrow: ALL WYOMING SERVICES

H2: Everything We Offer for Wyoming Entities

PRIVACY (Blue accent)
• Wyoming Privacy (/wyoming-privacy/)
• Anonymous LLC (/anonymous-llc/)
• Anonymous Corporation (/anonymous-corporation/)
• Nominee Services (/nominee-services/)
• Best State for Privacy (/best-state-for-privacy/)
• WY vs NV for Privacy (/wyoming-vs-nevada-privacy/)

ASSET PROTECTION (Green accent)
• Wyoming Asset Protection (/wyoming-asset-protection/)
• Charging Order Protection (/charging-order-protection/)
• Investment Holding LLC (/investment-holding-llc/)
• Real Estate Asset Protection (/real-estate-asset-protection/)
• Best State for AP (/best-state-asset-protection/)
• WY vs NV for AP (/wyoming-vs-nevada-asset-protection/)

FORMATION (Amber accent)
• Wyoming LLC (/wyoming-llc/)
• Wyoming Corporation (/wyoming-corporation/)
• LLC vs. Corporation (/llc-vs-corporation/)
• Wyoming vs. Nevada (/wyoming-vs-nevada/)
• Shelf Companies (/shelf-companies/)
• Entity Tax Guide (/entity-tax-guide/)

COMPLIANCE (Purple accent)
• Wyoming Registered Agent (/wyoming-registered-agent/)
• Annual Reports (/annual-reports/)
• Foreign State Registration (/foreign-state-registration/)
• Domestication (/domestication/)
• Shares & Corporate Records (/shares-corporate-records/)

PACKAGES
★ Wyoming Gold — $1,275 (/wyoming-private-incorporation/)
  Wyoming Silver — $875 (/wyoming-incorporation/)
  Wyoming Bronze — $625 (/wyoming-basic-incorporation/)
```

**Dev Notes:**
- Column headers use their respective pillar colors as accent
- On tablet: 2×2 grid. On mobile: single column accordion (tap pillar name to expand list)
- Every link is a contextual internal link — this section is the densest link block on the site, feeding SEO authority to all Wyoming-related pages
- Some pages in this grid are P2 (WY Corp, Investment Holding LLC, Real Estate AP, etc.) — links appear at launch but may route to placeholder pages
- The Packages sub-section at the bottom (or as a 5th column) provides direct conversion links

---

### Section 6: Wyoming vs. Nevada

**Layout:** White background. Compact comparison table + recommendation + CTA.

**Purpose:** Address the most common state hub question: "should I choose Wyoming or Nevada?" The hub provides a brief comparison snapshot and routes to the full comparison pages for depth.

**Components:**
- Eyebrow: `COMPARE STATES`
- H2 headline
- Compact comparison table (6 rows)
- Recommendation summary
- CTAs to full comparison pages

**Content:**

```
Eyebrow: COMPARE STATES

H2: Wyoming vs. Nevada — Quick Comparison

| Factor                          | Wyoming              | Nevada               |
|---------------------------------|----------------------|----------------------|
| State income tax                | None                 | None                 |
| Annual costs                    | $50/yr               | $500+/yr             |
| LLC member disclosure           | Not required         | Not required         |
| Single-member LLC protection    | Sole remedy          | Court discretion     |
| Corporate veil strength         | Standard             | NRS 86.401 (strong)  |
| Gold package (formation)        | $1,275               | $1,800               |

Summary:
"Wyoming is the better choice for most clients — lower annual
costs, stronger single-member protection, and the same tax
benefits. Nevada excels for multi-member entities, corporations,
and clients who value the deepest case law history."

→ Full WY vs NV for Privacy (/wyoming-vs-nevada-privacy/)
→ Full WY vs NV for Formation (/wyoming-vs-nevada/)
→ Full WY vs NV for Asset Protection (/wyoming-vs-nevada-asset-protection/)
→ Explore the Nevada Hub (/nevada/)
```

**Dev Notes:**
- Table responsive — stacks to card layout on mobile
- Wyoming column has subtle highlight (recommended)
- Three comparison CTAs route to the three WY-vs-NV comparison pages across different pillars
- The Nevada Hub link allows visitors to switch to Nevada's state hub if they decide Nevada is better

---

### Section 7: State-Specific FAQ

**Layout:** Light background. Single column. Accordion. 5–6 questions.

**Purpose:** Handle Wyoming-specific questions — state fees, formation timeline, residency, annual obligations, and Tax Foundation ranking. FAQ schema markup for featured snippet capture on state-specific queries.

**Components:**
- Eyebrow: `FREQUENTLY ASKED QUESTIONS`
- H2 headline
- 5–6 accordion items

**Content:**

```
Eyebrow: FREQUENTLY ASKED QUESTIONS

H2: Wyoming Formation — Questions Answered

Q: How much does it cost to form an LLC in Wyoming?
A: Wyoming's state filing fee is $100 for both LLCs and corporations.
Incorporate123's all-inclusive packages start at $625 (Bronze) and
include the state fee, registered agent, EIN, and document preparation.
The Gold package at $1,275 adds year-round nominee services, offshore
records storage, and full privacy features. There are no hidden fees —
what you see is what you pay.

Q: Do I need to live in Wyoming to form an entity there?
A: No. Any U.S. or international resident can form a business entity
in Wyoming. Your registered agent (included in every package) provides
the required in-state address. You do not need to visit Wyoming,
maintain an office there, or have any physical presence in the state.

Q: What are the ongoing annual requirements for a Wyoming entity?
A: Wyoming requires an annual report filing and a $50 state fee. If you
have a Gold package, your annual renewal ($525/yr) covers the annual
report, state fee, registered agent, nominee maintenance, and offshore
records — all-inclusive. Silver renewal ($325/yr) covers the report,
state fee, and registered agent. There is no business license fee and
no state income tax filing.

Q: How long does Wyoming formation take?
A: Standard filing with the Wyoming Secretary of State takes 3–5
business days. Your complete document package (filed articles, operating
agreement, EIN, banking resolutions) is typically delivered within
5–7 business days of your order. Expedited options are available.

Q: Why do so many people choose Wyoming over Nevada?
A: Three primary reasons. First, annual costs: Wyoming is $50/yr vs.
Nevada's $500+/yr (annual list + business license). Second, single-member
LLC protection: Wyoming is the only state with sole-remedy charging
order protection for single-member LLCs. Third, member privacy: Wyoming
does not require disclosure of LLC members or managers in any state
filing. Nevada matches on privacy for LLCs but costs 10x more annually.

Q: What is the Wyoming Chancery Court?
A: Established in 2023, the Wyoming Chancery Court is a specialized
business court that handles complex commercial disputes, similar to
Delaware's well-known Court of Chancery. It provides expert judicial
attention to business matters without the delays and unpredictability
of general-jurisdiction courts. This court further strengthens Wyoming's
position as a premier business formation state.
```

**Dev Notes:**
- FAQPage schema markup (JSON-LD)
- Accordion closed by default
- These FAQs are state-specific — different from the pillar page FAQs which are topic-specific
- The Chancery Court question positions Wyoming as comparable to Delaware — important for business-savvy visitors

---

### Section 8: Final CTA

**Layout:** Dark background (Deep Navy). Centered. Dual CTA.

**Components:**
- H2 headline
- Price restatement
- Dual CTAs
- Phone number

**Content:**

```
H2: Ready to Start in Wyoming?

Wyoming LLC from $625. Full privacy from $1,275.
No state income tax. $50/yr annual costs. Everything included.

CTA Primary (amber): See Wyoming Packages →
CTA Secondary (ghost): Schedule a Consultation →

Micro-text: Or call (XXX) XXX-XXXX — real humans, Reno, Nevada.
```

---

## 4. Page-Level Technical Specifications

### 4.1 SEO

| Element | Specification |
|---------|---------------|
| **H1** | "Wyoming Business Formation, Privacy & Asset Protection." (single H1) |
| **Title tag** | "Wyoming LLC, Corporation & Privacy Formation \| All-Inclusive from $625 \| Incorporate123" |
| **Meta description** | "Form a Wyoming LLC or Corporation with registered agent, EIN, and state fees included. No state income tax, $50/yr annual report, strongest single-member LLC protection. All-inclusive packages from $625. Privacy from $1,275." |
| **Canonical** | `https://incorporate123.com/wyoming/` |
| **Schema** | FAQPage (Section 7), Organization, BreadcrumbList |
| **Target keywords** | Wyoming LLC, Wyoming incorporation, form LLC in Wyoming, Wyoming business formation, Wyoming corporation, incorporate in Wyoming, Wyoming company formation, Wyoming privacy LLC |
| **Internal links out** | ALL Wyoming-relevant pages across all four pillars (see Section 5 content — ~25 links), all WY packages, WY vs NV comparisons, Nevada hub |
| **Internal links in** | Homepage (if state links in footer or hero), every WY-specific cluster page (contextual state reference), WY-specific package pages, comparison pages (WY vs NV), mega menu (if state hubs are linked), footer (state links section) |

### 4.2 Content Characteristics

- **Word count:** ~1,500–2,000 total (shortest of all specified page types — this is a routing page)
- **Link density:** Highest on the site — ~25–30 internal links on a single page
- **Progressive disclosure:** Minimal — most content is scannable navigation elements, not expandable depth
- **80/20 split:** Less relevant here — the entire page is designed for the 80% (scanners). The 20% (researchers) click through to cluster pages for depth.

### 4.3 Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Desktop (>1024px) | Full layout. 2×2 intent routing grid, 3-column package cards, 4-column services grid, comparison table |
| Tablet (768–1024px) | 2×2 intent routing maintained, 3-column packages maintained, services grid → 2×2, comparison table maintained |
| Mobile (<768px) | Single column throughout. Intent routing cards stack (Privacy first). Package cards stack (Gold first). Services grid becomes accordion (tap pillar name to expand). Comparison table → stacked cards. Sticky bottom CTA bar. |

### 4.4 Mobile Sticky CTA

After scrolling past hero:

```
[See Wyoming Packages →]  (amber, full-width)
```

### 4.5 Performance

- Lightweight page — no heavy interactive elements (no sidebar, no configurator, no toggle)
- CSS-only hero background
- Services grid can lazy-load below fold
- FAQ accordion lazy-loaded

---

## 5. Content Notes for David

1. **State filing fees** — Verify: LLC $100, Corporation $100. These appear in hero and FAQ.
2. **Annual report fee** — Verify: $50 for both LLCs and corporations.
3. **Tax Foundation ranking** — "13 consecutive years" at #1. Verify current year count.
4. **Chancery Court** — Established 2023. Verify this is accurate and that it's operational/handling cases.
5. **Formation timeline** — "3–5 business days" for filing, "5–7 business days" total. Verify.
6. **Bronze pricing** — $625 per site map. Verify.
7. **No Commerce Tax** — Wyoming has no Commerce Tax equivalent. Verify this is correct to state (Nevada does have Commerce Tax for $4M+ gross).
8. **Phone number** — Confirmation for CTA.
9. **Wyoming office** — Does Incorporate123 have a physical presence in Wyoming (Cheyenne), or only in Reno, NV? The registered agent service implies WY presence. Clarify for trust signal accuracy.

---

## 6. Internal Linking Map

```
/wyoming/ links OUT to:
├── Privacy cluster (Wyoming-relevant)
│   ├── /wyoming-privacy/
│   ├── /anonymous-llc/
│   ├── /anonymous-corporation/
│   ├── /nominee-services/
│   ├── /best-state-for-privacy/
│   └── /wyoming-vs-nevada-privacy/
├── Asset Protection cluster (Wyoming-relevant)
│   ├── /wyoming-asset-protection/
│   ├── /charging-order-protection/
│   ├── /investment-holding-llc/
│   ├── /real-estate-asset-protection/
│   ├── /best-state-asset-protection/
│   └── /wyoming-vs-nevada-asset-protection/
├── Formation cluster (Wyoming-relevant)
│   ├── /wyoming-llc/
│   ├── /wyoming-corporation/
│   ├── /llc-vs-corporation/
│   ├── /wyoming-vs-nevada/
│   ├── /shelf-companies/
│   └── /entity-tax-guide/
├── Compliance cluster (Wyoming-relevant)
│   ├── /wyoming-registered-agent/
│   ├── /annual-reports/
│   ├── /foreign-state-registration/
│   ├── /domestication/
│   └── /shares-corporate-records/
├── Packages (Wyoming)
│   ├── /wyoming-private-incorporation/ (Gold)
│   ├── /wyoming-incorporation/ (Silver)
│   └── /wyoming-basic-incorporation/ (Bronze)
├── Cross-state
│   ├── /nevada/ (Nevada hub)
│   ├── /california-private-incorporation/
│   └── /florida-private-incorporation/
├── Pillar hubs
│   ├── /privacy/
│   ├── /asset-protection/
│   ├── /formation/
│   └── /compliance/
└── Utility
    └── /compare-packages/

/wyoming/ receives links IN from:
├── Homepage (footer state links, possibly hero or pillar CTAs)
├── Every WY-specific cluster page (contextual "See all Wyoming services")
├── /wyoming-private-incorporation/ (package page "Wyoming hub" reference)
├── /wyoming-incorporation/ (same)
├── /wyoming-vs-nevada-privacy/ (comparison, links to both state hubs)
├── /wyoming-vs-nevada/ (comparison)
├── /wyoming-vs-nevada-asset-protection/ (comparison)
├── Footer (state hub links)
├── /nevada/ hub (cross-state reference)
└── Mega menu (if state hubs are linked from nav)
```

**Note:** The Wyoming hub has the highest outbound link count of any page on the site (~25–30 links). This is by design — it's the cross-pillar intersection that distributes authority to every Wyoming-related page.

---

## 7. Design Tokens Reference

| Token | Value | Usage |
|-------|-------|-------|
| Privacy accent | `#2563eb` (Blue) | Intent routing card 1, services column 1 |
| AP accent | `#16a34a` (Green) | Intent routing card 2, services column 2 |
| Formation accent | `#d97706` (Amber) | Intent routing card 3, services column 3, CTAs |
| Compliance accent | `#9333ea` (Purple) | Intent routing card 4, services column 4 |
| Hero background | Neutral dark (not navy, not pillar-specific) | State hub identity — distinct from pillar pages |
| Primary CTA | `#d97706` (Amber) | All conversion buttons |
| Fact strip | JetBrains Mono | State statistics in hero |
| Body font | Inter | All body text |
| Heading font | Outfit | H1, H2 |

---

## 8. How State Hubs Differ From All Other Page Types

| Dimension | Pillar Page | Cluster Page | Package Page | **State Hub** |
|-----------|-------------|-------------|-------------|---------------|
| Organizing principle | Single intent (privacy/AP/formation/compliance) | Single topic within a pillar | Single product | **Single state across ALL intents** |
| Primary job | Educate + route to clusters | Deepen single topic | Close the sale | **Route geographic intent to intent-based architecture** |
| Pillar affiliation | One pillar | One pillar | One pillar (primary) | **All four pillars** |
| Color system | Single pillar color | Single pillar color | Tier color (Blue/Gold) | **All four pillar colors simultaneously** |
| Content depth | Framework overview | Comprehensive guide | Product detail | **Navigation-depth only — no original educational content** |
| Link density | ~15 internal links | ~15 internal links | ~12 internal links | **~25–30 internal links (highest on site)** |
| Sidebar | None | Sticky with links | Sticky running total | **None** |
| FAQ focus | Pillar-level questions | Topic-specific questions | Transactional questions | **State-specific questions (fees, timeline, residency)** |
| Unique sections | Framework, differentiators, cross-pillar bridge | Key differentiator, "who needs this" | Entity toggle, add-on configurator, running total | **Intent routing cards, "Why [State]," all-services catalog** |
| Visitor arrival | Search by intent ("anonymous LLC") | Search by topic ("nominee services") | Click from cluster/comparison/wizard | **Search by state ("Wyoming LLC")** |
| Content originality | Original educational content | Original deep-dive content | Product specification content | **Aggregation + routing — minimal original content** |
| Time on page target | 3–5 min | 4–6 min | 2–4 min | **1–3 min (routing page)** |

---

*End of Specification*
*Confidential — BIT Studios × Incorporate123 — April 2026*
