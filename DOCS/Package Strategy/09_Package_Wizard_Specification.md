# Package Wizard — Feature Specification

> **Doc #09** | Status: Implemented | Last updated: 2026-03-18
> Source: `src/components/conversion/PackageWizard/` + `src/data/wizard.ts`

---

## 1. Purpose

An interactive recommendation engine on the homepage that guides visitors to the right Incorporate123 package in 60 seconds. Converts the 5-step decision framework (Doc 05) into a visual multi-step UI.

**Problem:** The current funnel requires 4+ page reads (pillar → cluster → comparison → package) before a visitor can make a purchase decision. Many visitors already have a rough idea of what they need.

**Solution:** A card-selection wizard that asks 1–3 questions and recommends a specific package with pricing, features, and alternatives.

---

## 2. Placement

- **Location:** New section between HomepageHero (dark) and PillarCards (cream)
- **Background:** `cream-alt` variant
- **Section ID:** `#wizard`
- **Heading:** "Find Your Package in 60 Seconds"
- **Subheading:** "Answer a few quick questions and we'll recommend the right package for your needs."
- **Skip link:** "Skip to all packages →" (links to `/packages`)

**Rationale:** Creates a "two paths" moment after the hero — guided quiz vs. self-directed exploration via PillarCards. Does not replace PillarCards. Follows TurboTax/LegalZoom pattern.

---

## 3. UX Pattern

- **Card-selection with auto-advance** — no radio buttons, no dropdowns, no "Next" button
- Click a card → slide transition → next question appears
- **Progress indicator:** 3-dot minimal (active dot = pill shape, inactive = circle)
- **Back navigation:** "← Back" link appears on Steps 2+
- **Animations:** framer-motion AnimatePresence with directional slide (300ms, ease `[0.16, 1, 0.3, 1]`)
- **Reduced motion:** Respects `prefers-reduced-motion` — skips animations, shows content immediately

---

## 4. Flow Specification

### 4.1 Step 1: Intent Selection

**Question:** "What's your primary goal?"
**Subheading:** "We'll recommend the best package for your needs."

| #   | Card Title             | Card Subtitle                                  | Icon      | Maps To            | Next Step                     |
| --- | ---------------------- | ---------------------------------------------- | --------- | ------------------ | ----------------------------- |
| 1   | Keep My Name Private   | Nominees on every filing, offshore records     | Shield    | `privacy`          | Step 2: Tier (2 options)      |
| 2   | Protect My Assets      | Charging order protection, holding structures  | Lock      | `asset-protection` | Step 2: Tier (2 options)      |
| 3   | Form a Business        | All-inclusive formation with expert support    | Building2 | `formation`        | Step 2: Tier (3 options)      |
| 4   | I Need a Shelf Company | Aged entities with established history         | Clock     | `shelf`            | **SHORTCUT → Recommendation** |
| 5   | I Operate in CA or FL  | Home state registration with privacy formation | MapPin    | `ca-fl`            | Step 2: State (CA/FL)         |

### 4.2 Step 2: Tier or State Selection

Step 2 varies based on the intent chosen in Step 1. There are three variants:

#### Variant A: Privacy / Asset Protection Path

**Question:** "What level of service do you need?"
**Subheading:** "All packages include state filing fees and registered agent."

| #   | Card Title             | Card Subtitle                           | Badge         | Maps To  | Next Step     |
| --- | ---------------------- | --------------------------------------- | ------------- | -------- | ------------- |
| 1   | Full Privacy           | Nominees, offshore records, compliance  | "Recommended" | `gold`   | Step 3: State |
| 2   | Professional Formation | Registered agent, compliance management | —             | `silver` | Step 3: State |

#### Variant B: Formation Path

**Question:** "What level of service do you need?"
**Subheading:** "All packages include state filing fees and registered agent."

| #   | Card Title             | Card Subtitle                           | Badge | Maps To  | Next Step     |
| --- | ---------------------- | --------------------------------------- | ----- | -------- | ------------- |
| 1   | Full Privacy           | Nominees, offshore records, compliance  | —     | `gold`   | Step 3: State |
| 2   | Professional Formation | Registered agent, compliance management | —     | `silver` | Step 3: State |
| 3   | Basic Filing           | Registered agent, you manage compliance | —     | `bronze` | Step 3: State |

#### Variant C: CA/FL Path

**Question:** "Which state do you operate in?"
**Subheading:** "We'll bundle your home state registration with privacy formation."

| #   | Card Title | Card Subtitle                             | Maps To      | Next Step                     |
| --- | ---------- | ----------------------------------------- | ------------ | ----------------------------- |
| 1   | California | WY/NV formation + CA foreign registration | `california` | **SHORTCUT → Recommendation** |
| 2   | Florida    | WY/NV formation + FL foreign registration | `florida`    | **SHORTCUT → Recommendation** |

### 4.3 Step 3: State Selection

Only reached via Privacy, Asset Protection, or Formation paths (not Shelf or CA/FL).

**Question:** "Which state?"
**Subheading:** "Both offer strong privacy protections with different strengths."

| #   | Card Title | Card Subtitle                             | Badge (conditional)                            | Maps To   |
| --- | ---------- | ----------------------------------------- | ---------------------------------------------- | --------- |
| 1   | Wyoming    | Lowest cost, strongest privacy laws       | "Best Value" when intent = `privacy`           | `wyoming` |
| 2   | Nevada     | Business court, charging order protection | "Recommended" when intent = `asset-protection` | `nevada`  |

After Step 3, the wizard always proceeds to the Recommendation screen.

---

## 5. Complete Outcome Matrix

Every possible path through the wizard (17 total):

### Privacy Intent (4 outcomes)

| #   | Path                       | Steps | Recommended Package | Price  | Alternative 1  | Alternative 2  |
| --- | -------------------------- | ----- | ------------------- | ------ | -------------- | -------------- |
| 1   | Privacy → Gold → Wyoming   | 3     | **Wyoming Gold**    | $1,275 | Nevada Gold    | Wyoming Silver |
| 2   | Privacy → Gold → Nevada    | 3     | **Nevada Gold**     | $1,800 | Wyoming Gold   | Nevada Silver  |
| 3   | Privacy → Silver → Wyoming | 3     | **Wyoming Silver**  | $875   | Nevada Silver  | —              |
| 4   | Privacy → Silver → Nevada  | 3     | **Nevada Silver**   | $1,275 | Wyoming Silver | —              |

### Asset Protection Intent (4 outcomes)

| #   | Path                     | Steps | Recommended Package | Price  | Alternative 1  | Alternative 2 |
| --- | ------------------------ | ----- | ------------------- | ------ | -------------- | ------------- |
| 5   | Asset → Gold → Wyoming   | 3     | **Wyoming Gold**    | $1,275 | Nevada Gold    | —             |
| 6   | Asset → Gold → Nevada    | 3     | **Nevada Gold**     | $1,800 | Wyoming Gold   | Nevada Silver |
| 7   | Asset → Silver → Wyoming | 3     | **Wyoming Silver**  | $875   | Nevada Silver  | Nevada Gold   |
| 8   | Asset → Silver → Nevada  | 3     | **Nevada Silver**   | $1,275 | Wyoming Silver | Nevada Gold   |

### Formation Intent (6 outcomes)

| #   | Path                         | Steps | Recommended Package  | Price  | Alternative 1  | Alternative 2 |
| --- | ---------------------------- | ----- | -------------------- | ------ | -------------- | ------------- |
| 9   | Formation → Gold → Wyoming   | 3     | **Wyoming Gold**     | $1,275 | Wyoming Silver | —             |
| 10  | Formation → Gold → Nevada    | 3     | **Nevada Gold**      | $1,800 | Nevada Silver  | —             |
| 11  | Formation → Silver → Wyoming | 3     | **Wyoming Silver**   | $875   | Wyoming Gold   | —             |
| 12  | Formation → Silver → Nevada  | 3     | **Nevada Silver**    | $1,275 | Nevada Gold    | Nevada Bronze |
| 13  | Formation → Bronze → Nevada  | 3     | **Nevada Bronze**    | $699   | Nevada Silver  | Nevada Gold   |
| 14  | Formation → Bronze → Wyoming | 3     | **Wyoming Silver** ⚠ | $875   | Wyoming Gold   | Nevada Bronze |

### Shortcut Paths (3 outcomes)

| #   | Path               | Steps | Recommended Package    | Price   | Alternative 1      | Alternative 2 |
| --- | ------------------ | ----- | ---------------------- | ------- | ------------------ | ------------- |
| 15  | Shelf              | 1     | **Shelf Companies**    | $2,000+ | Wyoming Gold       | Nevada Gold   |
| 16  | CA/FL → California | 2     | **California Private** | $1,475  | Florida Private    | Wyoming Gold  |
| 17  | CA/FL → Florida    | 2     | **Florida Private**    | $1,475  | California Private | Wyoming Gold  |

---

## 6. Edge Cases

### 6.1 Bronze + Wyoming Fallback (Outcome #14)

**Trigger:** User selects Formation → Basic Filing → Wyoming.

**Problem:** Wyoming does not offer a Bronze package.

**Behavior:**

1. Recommend **Wyoming Silver** ($875) as primary result
2. Display explanatory note: _"Wyoming's most affordable option is the Silver package at $875."_
3. Show **Wyoming Gold** ($1,275) and **Nevada Bronze** ($699) as alternatives

### 6.2 Shelf Company Shortcut (Outcome #15)

**Trigger:** User selects "I Need a Shelf Company" in Step 1.

**Behavior:** Skip Steps 2 and 3 entirely. Immediately show Shelf Companies recommendation. Progress dots show 1 total step.

### 6.3 CA/FL Shortcut (Outcomes #16–17)

**Trigger:** User selects "I Operate in CA or FL" in Step 1.

**Behavior:** Step 2 becomes a state selection (California/Florida) instead of tier selection. After selecting state, skip Step 3. Immediately show CA/FL Private recommendation. Progress dots show 2 total steps.

---

## 7. Recommendation Screen

Replaces the question cards in the same wizard container. No page navigation.

### 7.1 Layout

```
[Back ←]

"Here's Your Match"
(optional edge case note)

┌─────────────────────────────────────────┐
│  [Badge: "Most Popular"]                │
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

25 Years · All-Inclusive Pricing · 30-Day Guarantee
↺ Not quite right? Start over
```

### 7.2 Primary Card Content

Each recommended package displays:

- **Badge** (if applicable): "Most Popular", "Premium", or none
- **Package name:** e.g., "Wyoming Gold"
- **Price:** e.g., "$1,275" + "all-inclusive" label
- **Features:** 4 bullet points with checkmarks (package-specific)
- **Primary CTA:** "View Full Package Details" → `/packages/{slug}?ref=wizard`
- **Secondary link:** "Compare All Packages" → `/compare-packages`

### 7.3 Alternative Cards

Up to 2 alternative packages shown as smaller cards:

- Package name
- Price
- Short description (1 line)
- "View Details →" link → `/packages/{slug}?ref=wizard`

### 7.4 Trust & Restart

- Trust line: "25 Years · All-Inclusive Pricing · 30-Day Guarantee"
- Restart: "Not quite right? Start over" — resets wizard to Step 1

### 7.5 CTA Strategy

Primary CTA links to the package page, **not** directly to checkout. Rationale: $1,275+ purchases need the full package page (detailed features, FAQ, pricing table) to build confidence before entering the checkout flow.

All recommendation links include `?ref=wizard` query parameter for conversion tracking.

---

## 8. Package Data Reference

### 8.1 Packages Available in Wizard

| Slug                 | Name               | Price       | Badge        | Features                                                                                              |
| -------------------- | ------------------ | ----------- | ------------ | ----------------------------------------------------------------------------------------------------- |
| `wyoming-gold`       | Wyoming Gold       | $1,275      | Most Popular | Year-round nominees, offshore records, registered agent + compliance, all state fees                  |
| `wyoming-silver`     | Wyoming Silver     | $875        | —            | Registered agent, annual reports & compliance, corporate minutes, all state fees                      |
| `nevada-gold`        | Nevada Gold        | $1,800      | Premium      | Year-round nominees, offshore records, NV business license, charging order protection                 |
| `nevada-silver`      | Nevada Silver      | $1,275      | —            | Registered agent, annual reports & compliance, NV business license, all state fees                    |
| `nevada-bronze`      | Nevada Bronze      | $699        | —            | Registered agent, NV business license, all state fees, add compliance as needed                       |
| `california-private` | California Private | $1,475      | —            | WY/NV privacy formation, CA foreign registration, year-round nominees, all state fees                 |
| `florida-private`    | Florida Private    | $1,475      | —            | WY/NV privacy formation, FL foreign registration, year-round nominees, all state fees                 |
| `shelf`              | Shelf Companies    | From $2,000 | —            | Aged entities 1–13+ years, established credibility, government contract eligibility, privacy features |

### 8.2 Package Page URLs

All recommendation CTAs link to: `/packages/{slug}?ref=wizard`

| Slug               | URL                                     |
| ------------------ | --------------------------------------- |
| wyoming-gold       | /packages/wyoming-gold?ref=wizard       |
| wyoming-silver     | /packages/wyoming-silver?ref=wizard     |
| nevada-gold        | /packages/nevada-gold?ref=wizard        |
| nevada-silver      | /packages/nevada-silver?ref=wizard      |
| nevada-bronze      | /packages/nevada-bronze?ref=wizard      |
| california-private | /packages/california-private?ref=wizard |
| florida-private    | /packages/florida-private?ref=wizard    |
| shelf              | /packages/shelf-companies?ref=wizard    |

---

## 9. Alternative Selection Logic

How alternatives are chosen depends on the user's intent:

### Privacy Intent

- **Same tier, other state** (e.g., WY Gold → alt: NV Gold)
- **Next tier down, same state** (e.g., Gold → alt: Silver)

### Asset Protection Intent

- If Nevada Gold: alternatives are Wyoming Gold + Nevada Silver
- Otherwise: same tier other state + Nevada Gold (strongest AP)

### Formation Intent

- **Tier neighbors in same state** (e.g., Silver → alts: Gold and Bronze if available)

### Shelf / CA-FL

- **Shelf:** Wyoming Gold + Nevada Gold (new formation alternatives)
- **CA/FL:** Other state's Private + Wyoming Gold

All alternative lists are capped at 2 packages maximum.

---

## 10. State Machine

### State Shape

```
{
  step: number        // 0, 1, or 2
  direction: 1 | -1   // animation direction (forward/back)
  intent: string | null
  tier: string | null
  state: string | null
  done: boolean        // true = show recommendation
}
```

### Actions

| Action               | Effect                                                                              |
| -------------------- | ----------------------------------------------------------------------------------- |
| `SET_INTENT(intent)` | Sets intent. If `shelf`, sets `done=true`. Otherwise advances to step 1.            |
| `SET_TIER(tier)`     | Sets tier. Advances to step 2.                                                      |
| `SET_STATE(state)`   | Sets state. If `ca-fl` intent, sets `done=true`. Otherwise sets `done=true`.        |
| `BACK`               | Decrements step. Clears downstream selections. If `done`, returns to last question. |
| `RESET`              | Returns to initial state (step 0, all null, done=false).                            |

### Step Count by Intent

| Intent             | Total Steps | Progress Dots         |
| ------------------ | ----------- | --------------------- |
| `privacy`          | 3           | ● ○ ○ → ● ● ○ → ● ● ● |
| `asset-protection` | 3           | ● ○ ○ → ● ● ○ → ● ● ● |
| `formation`        | 3           | ● ○ ○ → ● ● ○ → ● ● ● |
| `shelf`            | 1           | ●                     |
| `ca-fl`            | 2           | ● ○ → ● ●             |

---

## 11. Decision Flowchart (Text)

```
START: "Find Your Package in 60 Seconds"
│
├─ [Privacy] ──→ [Gold/Silver] ──→ [WY★/NV] ──→ RECOMMEND
├─ [Asset]   ──→ [Gold/Silver] ──→ [WY/NV★] ──→ RECOMMEND
├─ [Formation]─→ [Gold/Silver/Bronze]─→ [WY/NV] ──→ RECOMMEND
│                                        └─ Bronze+WY ──→ FALLBACK: WY Silver
├─ [Shelf]   ──→ RECOMMEND (1 click)
└─ [CA/FL]   ──→ [CA/FL] ──→ RECOMMEND (2 clicks)

★ = contextual badge ("Best Value" or "Recommended")
```

---

## 12. Mobile Behavior

| Breakpoint    | Card Layout                                 | Notes                             |
| ------------- | ------------------------------------------- | --------------------------------- |
| Desktop (lg+) | Horizontal row (grid-cols-3 to grid-cols-5) | Step 1 shows all 5 cards in a row |
| Tablet (md)   | 2-column grid                               | Cards stack in pairs              |
| Mobile (<md)  | Single column, full-width cards             | Min tap target: 64px height       |

- Progress dots: centered above question text
- Back button: top-left above question
- Recommendation alternatives: stack vertically on mobile

---

## 13. Analytics

All wizard interactions include data attributes for tag manager integration:

| Attribute            | Location                 | Example                             |
| -------------------- | ------------------------ | ----------------------------------- |
| `data-wizard-step`   | Question heading         | `data-wizard-step="0"`              |
| `data-wizard-result` | Recommendation container | `data-wizard-result="wyoming-gold"` |
| `?ref=wizard`        | All outbound links       | `/packages/wyoming-gold?ref=wizard` |
