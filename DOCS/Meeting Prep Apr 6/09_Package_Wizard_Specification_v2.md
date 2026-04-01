# Package Wizard — Feature Specification

> **Doc #09 v2** | Status: Spec (pending implementation) | Last updated: 2026-03-30
> **Version:** 2.0 — Complete rewrite per David's meeting (April 1, 2026)
> Source: `src/components/conversion/PackageWizard/` + `src/data/wizard.ts`

---

## 1. Purpose

An interactive recommendation engine on the homepage that guides visitors to the right Incorporate123 package in under 60 seconds. Replaces the previous 5-intent model (Doc 09 v1) with a simpler 2-branch flow based on David's insight:

> "Either you're gonna be forming a business to operate, or you're looking to protect assets. Those are really two separate things."

**Problem:** The v1 wizard offered 5 first-click options (Privacy, Asset Protection, Formation, Shelf, CA/FL) that overlapped and confused visitors. Privacy and Asset Protection frequently led to the same packages. The Shelf and CA/FL shortcuts, while useful, cluttered the entry point.

**Solution:** A 2-branch wizard — Business Formation vs. Asset Protection — that maps directly to how David's clients think about their needs. Shelf companies and CA/FL convenience packages remain accessible within the Formation branch rather than competing as top-level intents. An escape hatch ("Browse all packages") serves visitors who already know what they want.

**Key design changes from v1:**

- 2 branches replace 5 intents (Formation leads because it represents more clients)
- Wyoming is the default recommendation (~70% of David's clients)
- Fewer total outcome paths (simpler decision tree, less confusion)
- Bronze tier exists for Wyoming (no fallback logic needed)
- Gold is pushed first (highest value, highest margin)

---

## 2. Placement

- **Location:** New section between HomepageHero (dark) and PillarCards (cream)
- **Background:** `cream-alt` variant
- **Section ID:** `#wizard`
- **Heading:** "Find Your Package in 60 Seconds"
- **Subheading:** "Answer a few quick questions and we'll recommend the right package for your needs."
- **Escape hatch:** "Browse all packages directly →" (links to `/packages`) — always visible at the bottom of the wizard container

**Rationale:** Creates a "two paths" moment after the hero — guided quiz vs. self-directed exploration via PillarCards. The "Browse all packages" escape hatch is always present (not just on Step 1) for visitors who decide mid-flow that they want to self-serve. Follows TurboTax/LegalZoom guided-selling pattern.

---

## 3. UX Pattern

- **Card-selection with auto-advance** — no radio buttons, no dropdowns, no "Next" button
- Click a card → slide transition → next question appears
- **Progress indicator:** Dot-based, adapts to total steps in the current path (2–4 dots). Active dot = pill shape, inactive = circle.
- **Back navigation:** "← Back" link appears on Steps 2+
- **Escape hatch:** "Browse all packages directly →" text link below the cards on every step
- **Animations:** CSS-only slide transitions (300ms, ease `cubic-bezier(0.16, 1, 0.3, 1)`)
- **Reduced motion:** Respects `prefers-reduced-motion` — skips animations, shows content immediately

### Changes from v1

- Removed framer-motion dependency (CSS-only animations already implemented)
- Escape hatch elevated from skip-link to persistent element
- Progress dots are dynamic (path-dependent step count) rather than fixed at 3

---

## 4. Flow Specification

### 4.0 Pre-Step: Wizard Entry

The wizard container is always visible on the homepage. The heading, subheading, and escape hatch frame the card-selection area. No interaction required to see Step 1.

### 4.1 Step 1: "What brings you here?"

**Question:** "What brings you here?"
**Subheading:** "We'll recommend the best package for your needs."

| #   | Card Title         | Card Subtitle                                                   | Icon      | Maps To            | Next Step |
| --- | ------------------ | --------------------------------------------------------------- | --------- | ------------------ | --------- |
| 1   | Business Formation | Start an LLC or Corporation — operate from anywhere or in-state | Building2 | `formation`        | Step 2a   |
| 2   | Asset Protection   | Shield personal assets with charging order protection           | Shield    | `asset-protection` | Step 2b   |

**Design notes:**

- Two large cards, equal visual weight
- Formation listed first (larger share of David's clients)
- No badges on Step 1 — both options are equally valid

### 4.2 Step 2a: Formation Path — "What type of business?"

**Question:** "What type of business?"
**Subheading:** "This determines which state and structure works best for you."

| #   | Card Title                | Card Subtitle                                                      | Icon   | Maps To        | Next Step                |
| --- | ------------------------- | ------------------------------------------------------------------ | ------ | -------------- | ------------------------ |
| 1   | Virtual / Remote Business | Operate from anywhere — no physical storefront required            | Globe  | `virtual`      | Step 3a: Tier Selection  |
| 2   | Brick-and-Mortar Business | You have (or plan to have) a physical location in a specific state | MapPin | `brick-mortar` | Step 3b: State Selection |

**Behavior:**

- **Virtual** auto-selects Wyoming as the recommended formation state (lowest cost, best privacy, minimal annual fees). The user does not see a state selection step — Wyoming is pre-selected. They proceed directly to tier selection.
- **Brick-and-Mortar** proceeds to state selection because the operating state determines whether a convenience package (CA/FL Private) or foreign registration is needed.

**Optional: "I need a shelf company"** — small text link below the two cards: "Looking for an established entity? View shelf companies →" Links to `/packages/shelf-companies?ref=wizard`. This keeps shelf accessible without cluttering the primary flow.

### 4.3 Step 2b: Asset Protection Path — "Which state?"

**Question:** "Where do you want to form?"
**Subheading:** "Wyoming is recommended for most asset protection needs. Nevada offers stronger charging order protection at a higher cost."

| #   | Card Title | Card Subtitle                                              | Badge       | Maps To   | Next Step        |
| --- | ---------- | ---------------------------------------------------------- | ----------- | --------- | ---------------- |
| 1   | Wyoming    | Strongest privacy, lowest cost, excellent asset protection | Recommended | `wyoming` | Step 3c: AP Tier |
| 2   | Nevada     | Strongest charging order protection, no IRS info-sharing   | —           | `nevada`  | Step 3c: AP Tier |

**Behavior:**

- Wyoming is badged as "Recommended" (default for ~70% of clients)
- Nevada is a valid choice but presented as the secondary option
- Both proceed to tier selection (AP path only shows Gold and Silver — Bronze is insufficient for serious asset protection)

### 4.4 Step 3a: Virtual Formation — Tier Selection

**Question:** "What level of service do you need?"
**Subheading:** "All packages include state filing fees and registered agent service."

The user has already been auto-assigned Wyoming. They now pick their tier.

| #   | Card Title | Card Subtitle                                                          | Badge       | Maps To  | Next Step      |
| --- | ---------- | ---------------------------------------------------------------------- | ----------- | -------- | -------------- |
| 1   | Gold       | Full privacy — nominees on every filing + offshore record storage      | Recommended | `gold`   | Recommendation |
| 2   | Silver     | Compliance handled — virtual office + mail forwarding + annual filings | —           | `silver` | Recommendation |
| 3   | Bronze     | Basic formation — registered agent + you manage compliance             | —           | `bronze` | Recommendation |

**Tier definitions (David-approved):**

- **Bronze** = basic formation + registered agent + compliance is your responsibility
- **Silver** = Bronze + virtual office + mail forwarding + managed compliance (annual reports, good standing)
- **Gold** = Silver + nominee privacy (year-round nominee officers/directors, offshore records) — this is the ONLY difference between Gold and Silver

**Design notes:**

- Gold is listed first and badged "Recommended" — David wants to push Gold
- Cards should clearly communicate the additive nature: Bronze is the base, Silver adds compliance, Gold adds privacy
- Optional: show a small "What's included at each level?" expandable below the cards

**Nevada override:** If the user wants Nevada instead of Wyoming for a virtual business, a small text link appears: "Prefer Nevada? Form in Nevada instead →" — this restarts Step 3a with Nevada pre-selected. This is a rare path.

### 4.5 Step 3b: Brick-and-Mortar — State Selection

**Question:** "Which state do you operate in?"
**Subheading:** "We'll set up a Wyoming formation and register it in your state for full legal compliance."

| #   | Card Title    | Card Subtitle                                     | Maps To      | Next Step                    |
| --- | ------------- | ------------------------------------------------- | ------------ | ---------------------------- |
| 1   | California    | WY formation + CA foreign registration            | `california` | Step 4: CA Package Choice    |
| 2   | Florida       | WY formation + FL foreign registration            | `florida`    | Step 4: FL Package Choice    |
| 3   | Another State | WY formation + foreign registration in your state | `other`      | Step 4: Tier Selection (B&M) |

**Behavior:**

- **California** and **Florida** get special treatment because Incorporate123 offers convenience packages (CA Private, FL Private) that bundle formation + foreign registration
- **Another State** follows the standard Wyoming formation + foreign registration path, then tier selection
- The default formation state for all brick-and-mortar paths is Wyoming (cheapest, best privacy)

### 4.6 Step 4: Brick-and-Mortar — Package/Tier Selection

This step varies based on which state was selected in Step 3b.

#### Variant A: California

**Question:** "Choose your California package"
**Subheading:** "Both options give you full legal compliance in California."

| #   | Card Title                | Card Subtitle                                                      | Badge       | Maps To              | Next Step                       |
| --- | ------------------------- | ------------------------------------------------------------------ | ----------- | -------------------- | ------------------------------- |
| 1   | California Private        | All-in-one: WY Gold formation + CA foreign registration + nominees | Recommended | `california-private` | Recommendation                  |
| 2   | Wyoming + CA Registration | Choose your Wyoming tier separately, add CA registration           | —           | `wyoming-ca-reg`     | Tier Selection → Recommendation |

**Behavior:**

- CA Private is the convenience package (recommended) — it bundles everything at a set price
- "Wyoming + CA Registration" lets the user pick Gold/Silver/Bronze Wyoming tier, then adds CA foreign registration. This proceeds to tier selection (same as Step 3a) before showing the recommendation.

#### Variant B: Florida

**Question:** "Choose your Florida package"
**Subheading:** "Both options give you full legal compliance in Florida."

| #   | Card Title                | Card Subtitle                                                      | Badge       | Maps To           | Next Step                       |
| --- | ------------------------- | ------------------------------------------------------------------ | ----------- | ----------------- | ------------------------------- |
| 1   | Florida Private           | All-in-one: WY Gold formation + FL foreign registration + nominees | Recommended | `florida-private` | Recommendation                  |
| 2   | Wyoming + FL Registration | Choose your Wyoming tier separately, add FL registration           | —           | `wyoming-fl-reg`  | Tier Selection → Recommendation |

**Behavior:** Mirrors California variant.

#### Variant C: Other State

Proceeds directly to tier selection (same UI as Step 3a) with Wyoming as the formation state. The recommendation screen will note that foreign registration in the user's operating state is required as an add-on.

### 4.7 Step 3c: Asset Protection — Tier Selection

**Question:** "What level of privacy do you need?"
**Subheading:** "Both tiers include full asset protection. Gold adds nominee privacy."

| #   | Card Title | Card Subtitle                                                        | Badge       | Maps To  | Next Step      |
| --- | ---------- | -------------------------------------------------------------------- | ----------- | -------- | -------------- |
| 1   | Gold       | Maximum privacy — nominees on every filing + offshore record storage | Recommended | `gold`   | Recommendation |
| 2   | Silver     | Professional compliance — managed filings + virtual office           | —           | `silver` | Recommendation |

**Design notes:**

- Only Gold and Silver shown (Bronze is not appropriate for asset protection — David confirmed)
- Gold is badged "Recommended" — asset protection clients typically want maximum privacy
- After selection, proceed directly to recommendation screen

---

## 5. Complete Outcome Matrix

Every possible path through the wizard. Significantly fewer than v1's 17 paths.

### Formation → Virtual (3 outcomes)

| #   | Path                         | Steps | Recommended Package | Price  | Alt 1          | Alt 2          |
| --- | ---------------------------- | ----- | ------------------- | ------ | -------------- | -------------- |
| 1   | Formation → Virtual → Gold   | 3     | **Wyoming Gold**    | $1,275 | Wyoming Silver | Nevada Gold    |
| 2   | Formation → Virtual → Silver | 3     | **Wyoming Silver**  | $875   | Wyoming Gold   | Wyoming Bronze |
| 3   | Formation → Virtual → Bronze | 3     | **Wyoming Bronze**  | $575   | Wyoming Silver | —              |

### Formation → Virtual → Nevada Override (3 outcomes, rare)

| #   | Path                              | Steps | Recommended Package | Price  | Alt 1          | Alt 2          |
| --- | --------------------------------- | ----- | ------------------- | ------ | -------------- | -------------- |
| 4   | Formation → Virtual → NV → Gold   | 3     | **Nevada Gold**     | $1,800 | Wyoming Gold   | Nevada Silver  |
| 5   | Formation → Virtual → NV → Silver | 3     | **Nevada Silver**   | $1,275 | Wyoming Silver | Nevada Gold    |
| 6   | Formation → Virtual → NV → Bronze | 3     | **Nevada Bronze**   | $699   | Nevada Silver  | Wyoming Bronze |

### Formation → Brick-and-Mortar → California (2 outcomes)

| #   | Path                              | Steps | Recommended Package         | Price  | Alt 1        | Alt 2           |
| --- | --------------------------------- | ----- | --------------------------- | ------ | ------------ | --------------- |
| 7   | Formation → B&M → CA → CA Private | 4     | **California Private**      | $1,475 | Wyoming Gold | Florida Private |
| 8   | Formation → B&M → CA → WY tier    | 5     | **Wyoming [tier] + CA reg** | varies | CA Private   | —               |

### Formation → Brick-and-Mortar → Florida (2 outcomes)

| #   | Path                              | Steps | Recommended Package         | Price  | Alt 1        | Alt 2      |
| --- | --------------------------------- | ----- | --------------------------- | ------ | ------------ | ---------- |
| 9   | Formation → B&M → FL → FL Private | 4     | **Florida Private**         | $1,475 | Wyoming Gold | CA Private |
| 10  | Formation → B&M → FL → WY tier    | 5     | **Wyoming [tier] + FL reg** | varies | FL Private   | —          |

### Formation → Brick-and-Mortar → Other State (3 outcomes)

| #   | Path                             | Steps | Recommended Package              | Price   | Alt 1          | Alt 2          |
| --- | -------------------------------- | ----- | -------------------------------- | ------- | -------------- | -------------- |
| 11  | Formation → B&M → Other → Gold   | 4     | **Wyoming Gold + foreign reg**   | $1,275+ | Wyoming Silver | —              |
| 12  | Formation → B&M → Other → Silver | 4     | **Wyoming Silver + foreign reg** | $875+   | Wyoming Gold   | Wyoming Bronze |
| 13  | Formation → B&M → Other → Bronze | 4     | **Wyoming Bronze + foreign reg** | $575+   | Wyoming Silver | —              |

### Asset Protection → Wyoming (2 outcomes)

| #   | Path                  | Steps | Recommended Package | Price  | Alt 1        | Alt 2          |
| --- | --------------------- | ----- | ------------------- | ------ | ------------ | -------------- |
| 14  | AP → Wyoming → Gold   | 3     | **Wyoming Gold**    | $1,275 | Nevada Gold  | Wyoming Silver |
| 15  | AP → Wyoming → Silver | 3     | **Wyoming Silver**  | $875   | Wyoming Gold | Nevada Silver  |

### Asset Protection → Nevada (2 outcomes, rare)

| #   | Path                 | Steps | Recommended Package | Price  | Alt 1          | Alt 2         |
| --- | -------------------- | ----- | ------------------- | ------ | -------------- | ------------- |
| 16  | AP → Nevada → Gold   | 3     | **Nevada Gold**     | $1,800 | Wyoming Gold   | Nevada Silver |
| 17  | AP → Nevada → Silver | 3     | **Nevada Silver**   | $1,275 | Wyoming Silver | Nevada Gold   |

### Escape Paths (not outcomes — external links)

| Path                | Destination                            |
| ------------------- | -------------------------------------- |
| Browse all packages | `/packages`                            |
| Shelf company link  | `/packages/shelf-companies?ref=wizard` |

**Total: 17 unique recommendation outcomes** (vs. 17 in v1, but with a cleaner, more intuitive decision tree that matches how clients actually think).

---

## 6. Edge Cases

### 6.1 Wyoming Bronze Exists (Change from v1)

In v1, Wyoming Bronze did not exist, requiring a fallback to Wyoming Silver when a user selected Formation → Bronze → Wyoming. **Wyoming Bronze now exists at $575.** No fallback logic is needed. The wizard recommends Wyoming Bronze directly.

### 6.2 Shelf Companies — Accessible, Not Primary

Shelf companies are not a top-level wizard intent. They are accessible via:

1. A text link in Step 2a (Formation path): "Looking for an established entity? View shelf companies →"
2. The "Browse all packages" escape hatch on any step
3. Direct navigation to `/packages/shelf-companies`

This reflects David's guidance that shelf companies are a niche product, not a primary conversion path.

### 6.3 CA/FL Private vs. Build-Your-Own

When a brick-and-mortar user selects California or Florida, they see two options:

1. **Convenience package** (CA/FL Private) — recommended, all-inclusive
2. **Wyoming tier + foreign registration** — more flexible, allows choosing tier

If the user picks option 2, they proceed to tier selection and the recommendation screen shows the Wyoming package price + a note about foreign registration costs.

### 6.4 Nevada Override for Virtual Businesses

Virtual businesses default to Wyoming. A "Prefer Nevada?" text link allows switching. This is deliberately low-prominence because Nevada is more expensive and David wants Wyoming as the default. If selected, the user sees the same tier options but with Nevada pricing.

### 6.5 Asset Protection — No Bronze Tier

The Asset Protection path only shows Gold and Silver. Bronze packages lack the compliance management and privacy features that asset protection clients need. David confirmed this restriction.

### 6.6 Foreign Registration Add-On Pricing

For brick-and-mortar paths (Other State), the recommendation screen should display the base Wyoming package price with a note: "Plus foreign registration in [State] — pricing varies by state. Contact us for a quote." Foreign registration is not a fixed-price add-on in the wizard.

### 6.7 "Not Sure" / Decision Paralysis

If analytics show significant drop-off at Step 1, consider adding a subtle third option: "Not sure? Talk to an expert →" linking to `/contact?ref=wizard`. This is not in the initial build but is a potential optimization.

---

## 7. Recommendation Screen

Replaces the question cards in the same wizard container. No page navigation.

### 7.1 Layout

```
[← Back]

"Here's Your Perfect Match"
(context note if applicable — e.g., "Based on your virtual business formation needs")

┌─────────────────────────────────────────┐
│  [Badge: "Recommended" or tier badge]   │
│  Package Name                           │
│  $Price  all-inclusive                   │
│                                         │
│  ✓ Feature 1                            │
│  ✓ Feature 2                            │
│  ✓ Feature 3                            │
│  ✓ Feature 4                            │
│                                         │
│  [View Full Package Details →]  (CTA)   │
│  Compare All Packages (text link)       │
└─────────────────────────────────────────┘

Also consider:
┌──────────────┐  ┌──────────────┐
│ Alt Package 1 │  │ Alt Package 2 │
│ $Price        │  │ $Price        │
│ Description   │  │ Description   │
│ View →        │  │ View →        │
└──────────────┘  └──────────────┘

(add-on note if applicable — e.g., "Plus CA foreign registration")

25 Years · All-Inclusive Pricing · 30-Day Guarantee
↺ Not quite right? Start over
```

### 7.2 Context Notes by Path

| Path                    | Context Note                                                               |
| ----------------------- | -------------------------------------------------------------------------- |
| Formation → Virtual     | "Recommended for your virtual business"                                    |
| Formation → B&M → CA    | "Includes California foreign registration"                                 |
| Formation → B&M → FL    | "Includes Florida foreign registration"                                    |
| Formation → B&M → Other | "You'll also need foreign registration in your operating state"            |
| AP → Wyoming            | "Wyoming's strongest privacy + asset protection at the best value"         |
| AP → Nevada             | "Nevada's strongest charging order protection for maximum asset shielding" |

### 7.3 Primary Card Content

Each recommended package displays:

- **Badge** (if applicable): "Recommended", "Most Popular", or "Premium"
- **Package name:** e.g., "Wyoming Gold"
- **Price:** e.g., "$1,275" + "all-inclusive" label
- **Features:** 4 bullet points with checkmarks (tier-specific, see Section 8)
- **Primary CTA:** "View Full Package Details" → `/packages/{slug}?ref=wizard`
- **Secondary link:** "Compare All Packages" → `/compare-packages`

### 7.4 Feature Bullets by Tier

| Tier   | Feature 1                  | Feature 2                    | Feature 3                    | Feature 4                     |
| ------ | -------------------------- | ---------------------------- | ---------------------------- | ----------------------------- |
| Gold   | Year-round nominee privacy | Offshore record storage      | Managed compliance & filings | All state fees included       |
| Silver | Virtual office & mail fwd  | Managed compliance & filings | Annual reports handled       | All state fees included       |
| Bronze | Registered agent (1 year)  | State filing fees included   | Operating agreement/bylaws   | Formation documents delivered |

### 7.5 Alternative Cards

Up to 2 alternative packages shown as smaller cards:

- Package name
- Price
- Short description (1 line)
- "View Details →" link → `/packages/{slug}?ref=wizard`

### 7.6 Trust & Restart

- Trust line: "25 Years · All-Inclusive Pricing · 30-Day Guarantee"
- Restart: "Not quite right? Start over" — resets wizard to Step 1

### 7.7 CTA Strategy

Primary CTA links to the package page, **not** directly to checkout. Rationale: $575–$1,800 purchases need the full package page (detailed features, FAQ, pricing table) to build confidence before entering the checkout flow.

All recommendation links include `?ref=wizard` query parameter for conversion tracking.

---

## 8. Package Data Reference

### 8.1 Packages Available in Wizard

| Slug                 | Name               | Price  | Badge        | Features (short)                                                                      |
| -------------------- | ------------------ | ------ | ------------ | ------------------------------------------------------------------------------------- |
| `wyoming-gold`       | Wyoming Gold       | $1,275 | Most Popular | Year-round nominees, offshore records, managed compliance, all state fees             |
| `wyoming-silver`     | Wyoming Silver     | $875   | —            | Virtual office, mail forwarding, managed compliance, all state fees                   |
| `wyoming-bronze`     | Wyoming Bronze     | $575   | —            | Registered agent, state filing fees, formation docs, you manage compliance            |
| `nevada-gold`        | Nevada Gold        | $1,800 | Premium      | Year-round nominees, offshore records, NV business license, charging order protection |
| `nevada-silver`      | Nevada Silver      | $1,275 | —            | Virtual office, managed compliance, NV business license, all state fees               |
| `nevada-bronze`      | Nevada Bronze      | $699   | —            | Registered agent, NV business license, state filing fees, you manage compliance       |
| `california-private` | California Private | $1,475 | —            | WY Gold formation + CA foreign registration, year-round nominees, all state fees      |
| `florida-private`    | Florida Private    | $1,475 | —            | WY Gold formation + FL foreign registration, year-round nominees, all state fees      |

### 8.2 Tier Definitions (David-Approved)

These are the canonical tier definitions. All wizard copy and recommendation logic must align with these:

| Tier   | What's Included                                                | What It Adds Over Previous Tier           |
| ------ | -------------------------------------------------------------- | ----------------------------------------- |
| Bronze | Basic formation + registered agent                             | — (base tier)                             |
| Silver | Bronze + virtual office + mail forwarding + managed compliance | Virtual office, mail fwd, compliance mgmt |
| Gold   | Silver + nominee officers/directors + offshore records         | Nominee privacy (ONLY difference)         |

### 8.3 Package Page URLs

All recommendation CTAs link to: `/packages/{slug}?ref=wizard`

| Slug               | URL                                     |
| ------------------ | --------------------------------------- |
| wyoming-gold       | /packages/wyoming-gold?ref=wizard       |
| wyoming-silver     | /packages/wyoming-silver?ref=wizard     |
| wyoming-bronze     | /packages/wyoming-bronze?ref=wizard     |
| nevada-gold        | /packages/nevada-gold?ref=wizard        |
| nevada-silver      | /packages/nevada-silver?ref=wizard      |
| nevada-bronze      | /packages/nevada-bronze?ref=wizard      |
| california-private | /packages/california-private?ref=wizard |
| florida-private    | /packages/florida-private?ref=wizard    |
| shelf-companies    | /packages/shelf-companies?ref=wizard    |

---

## 9. Alternative Selection Logic

How alternatives are chosen depends on the user's path:

### Formation → Virtual (Wyoming default)

- **Gold:** Alt 1 = Wyoming Silver (tier down), Alt 2 = Nevada Gold (state swap)
- **Silver:** Alt 1 = Wyoming Gold (tier up), Alt 2 = Wyoming Bronze (tier down)
- **Bronze:** Alt 1 = Wyoming Silver (tier up), Alt 2 = none

### Formation → Virtual → Nevada Override

- **Gold:** Alt 1 = Wyoming Gold (cheaper equivalent), Alt 2 = Nevada Silver (tier down)
- **Silver:** Alt 1 = Wyoming Silver (cheaper equivalent), Alt 2 = Nevada Gold (tier up)
- **Bronze:** Alt 1 = Nevada Silver (tier up), Alt 2 = Wyoming Bronze (cheaper equivalent)

### Formation → Brick-and-Mortar → CA/FL

- **CA Private:** Alt 1 = Wyoming Gold (without CA reg), Alt 2 = Florida Private (other state)
- **FL Private:** Alt 1 = Wyoming Gold (without FL reg), Alt 2 = California Private (other state)
- **WY tier + registration:** Alt 1 = CA/FL Private convenience package, Alt 2 = none

### Formation → Brick-and-Mortar → Other State

- Same as Virtual tier logic, but recommendation notes foreign registration requirement

### Asset Protection → Wyoming

- **Gold:** Alt 1 = Nevada Gold (stronger AP, higher cost), Alt 2 = Wyoming Silver (tier down)
- **Silver:** Alt 1 = Wyoming Gold (tier up, adds privacy), Alt 2 = Nevada Silver (state swap)

### Asset Protection → Nevada

- **Gold:** Alt 1 = Wyoming Gold (cheaper, strong AP), Alt 2 = Nevada Silver (tier down)
- **Silver:** Alt 1 = Wyoming Silver (cheaper equivalent), Alt 2 = Nevada Gold (tier up)

All alternative lists are capped at 2 packages maximum.

---

## 10. State Machine

### State Shape

```typescript
interface WizardState {
  step: number; // 0–4 depending on path
  direction: 1 | -1; // animation direction (forward/back)
  branch: "formation" | "asset-protection" | null;
  businessType: "virtual" | "brick-mortar" | null;
  formationState: "wyoming" | "nevada" | null; // which state to form in
  operatingState: "california" | "florida" | "other" | null; // B&M only
  packageChoice: "convenience" | "custom" | null; // CA/FL only: Private pkg vs WY+reg
  tier: "gold" | "silver" | "bronze" | null;
  done: boolean; // true = show recommendation
}
```

### Actions

| Action                       | Effect                                                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `SET_BRANCH(branch)`         | Sets `branch`. Advances to step 1.                                                                                                    |
| `SET_BUSINESS_TYPE(type)`    | Sets `businessType`. If `virtual`, sets `formationState='wyoming'`, advances to tier. If `brick-mortar`, advances to state selection. |
| `SET_AP_STATE(state)`        | Sets `formationState`. Advances to AP tier selection.                                                                                 |
| `SET_OPERATING_STATE(state)` | Sets `operatingState`. If `california` or `florida`, advances to package choice. If `other`, advances to tier.                        |
| `SET_PACKAGE_CHOICE(choice)` | Sets `packageChoice`. If `convenience`, sets `done=true`. If `custom`, advances to tier.                                              |
| `SET_TIER(tier)`             | Sets `tier`. Sets `done=true`.                                                                                                        |
| `OVERRIDE_NEVADA`            | Sets `formationState='nevada'` (for virtual businesses). Stays on tier selection.                                                     |
| `BACK`                       | Decrements step. Clears downstream selections. If `done`, returns to last question.                                                   |
| `RESET`                      | Returns to initial state (step 0, all null, done=false).                                                                              |

### Step Count by Path

| Path                                    | Total Steps | Progress Dots                         |
| --------------------------------------- | ----------- | ------------------------------------- |
| Formation → Virtual → Tier              | 3           | ● ○ ○ → ● ● ○ → ● ● ●                 |
| Formation → B&M → CA/FL → Private       | 4           | ● ○ ○ ○ → ● ● ○ ○ → ● ● ● ○ → ● ● ● ● |
| Formation → B&M → CA/FL → Custom → Tier | 5           | ● ○ ○ ○ ○ → ... → ● ● ● ● ●           |
| Formation → B&M → Other → Tier          | 4           | ● ○ ○ ○ → ● ● ○ ○ → ● ● ● ○ → ● ● ● ● |
| Asset Protection → State → Tier         | 3           | ● ○ ○ → ● ● ○ → ● ● ●                 |

---

## 11. Decision Flowchart

```
START: "Find Your Package in 60 Seconds"
│
├─ [Business Formation]
│  ├─ [Virtual / Remote]
│  │  └─ (auto: Wyoming) ──→ [Gold★ / Silver / Bronze] ──→ RECOMMEND
│  │                          └─ "Prefer Nevada?" ──→ [Gold / Silver / Bronze] ──→ RECOMMEND
│  │
│  └─ [Brick-and-Mortar]
│     ├─ [California]
│     │  ├─ [CA Private★] ──→ RECOMMEND
│     │  └─ [WY + CA Reg] ──→ [Gold / Silver / Bronze] ──→ RECOMMEND
│     ├─ [Florida]
│     │  ├─ [FL Private★] ──→ RECOMMEND
│     │  └─ [WY + FL Reg] ──→ [Gold / Silver / Bronze] ──→ RECOMMEND
│     └─ [Other State]
│        └─ [Gold / Silver / Bronze] ──→ RECOMMEND (+ foreign reg note)
│
├─ [Asset Protection]
│  ├─ [Wyoming★] ──→ [Gold★ / Silver] ──→ RECOMMEND
│  └─ [Nevada]   ──→ [Gold★ / Silver] ──→ RECOMMEND
│
├─ "Shelf company?" (link) ──→ /packages/shelf-companies
└─ "Browse all packages" (link) ──→ /packages

★ = "Recommended" badge
```

---

## 12. Mobile Behavior

| Breakpoint    | Card Layout                                 | Notes                             |
| ------------- | ------------------------------------------- | --------------------------------- |
| Desktop (lg+) | Horizontal row (grid-cols-2 to grid-cols-3) | Step 1 shows 2 cards side by side |
| Tablet (md)   | 2-column grid                               | Cards stack in pairs              |
| Mobile (<md)  | Single column, full-width cards             | Min tap target: 64px height       |

- Progress dots: centered above question text
- Back button: top-left above question
- Escape hatch ("Browse all packages"): centered below cards, full-width tap target on mobile
- Recommendation alternatives: stack vertically on mobile
- Nevada override link: below cards, left-aligned, small text

---

## 13. Analytics

All wizard interactions include data attributes for tag manager integration:

| Attribute                     | Location                   | Example                                  |
| ----------------------------- | -------------------------- | ---------------------------------------- |
| `data-wizard-step`            | Question heading           | `data-wizard-step="0"`                   |
| `data-wizard-branch`          | Step 1 cards               | `data-wizard-branch="formation"`         |
| `data-wizard-business-type`   | Step 2a cards              | `data-wizard-business-type="virtual"`    |
| `data-wizard-state`           | State selection cards      | `data-wizard-state="wyoming"`            |
| `data-wizard-tier`            | Tier selection cards       | `data-wizard-tier="gold"`                |
| `data-wizard-result`          | Recommendation container   | `data-wizard-result="wyoming-gold"`      |
| `data-wizard-alt-click`       | Alternative card clicks    | `data-wizard-alt-click="wyoming-silver"` |
| `data-wizard-escape`          | "Browse all packages" link | `data-wizard-escape="true"`              |
| `data-wizard-shelf-link`      | Shelf company text link    | `data-wizard-shelf-link="true"`          |
| `data-wizard-restart`         | "Start over" link          | `data-wizard-restart="true"`             |
| `data-wizard-nevada-override` | "Prefer Nevada?" link      | `data-wizard-nevada-override="true"`     |
| `?ref=wizard`                 | All outbound links         | `/packages/wyoming-gold?ref=wizard`      |

### Key Metrics to Track

| Metric                        | How                                                       |
| ----------------------------- | --------------------------------------------------------- |
| Branch split                  | % Formation vs. % Asset Protection at Step 1              |
| Virtual vs. B&M split         | % of Formation users choosing each at Step 2a             |
| Tier distribution             | % Gold / Silver / Bronze selections                       |
| Wyoming vs. Nevada split      | % choosing each state (AP path + Nevada overrides)        |
| Escape hatch usage            | % clicking "Browse all packages" and at which step        |
| Shelf link usage              | % clicking shelf company link in Step 2a                  |
| Completion rate               | % reaching recommendation screen from Step 1              |
| Drop-off by step              | Where users abandon the wizard                            |
| Recommendation → package page | % clicking "View Full Package Details" CTA                |
| Alternative click rate        | % choosing an alternative over the primary recommendation |
| Restart rate                  | % clicking "Start over"                                   |
