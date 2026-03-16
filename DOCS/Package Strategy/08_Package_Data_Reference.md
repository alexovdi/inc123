# Package Data Reference — Developer Guide

**File:** `inc123-prototype/src/data/packages.ts`
**Types:** `inc123-prototype/src/lib/types.ts`
**Date:** 2026-03-16
**Status:** Mix of confirmed changes and items pending David's approval

---

## Table of Contents

1. [Current State Summary](#1-current-state-summary)
2. [Add Wyoming Bronze Package (CONFIRMED)](#2-add-wyoming-bronze-package-confirmed)
3. [Feature Corrections (PENDING DAVID)](#3-feature-corrections-pending-david)
4. [Shelf Company Age-Tier Pricing Model (CONFIRMED DIRECTION)](#4-shelf-company-age-tier-pricing-model-confirmed-direction)
5. [Proposed New Add-Ons (PENDING DAVID)](#5-proposed-new-add-ons-pending-david)
6. [Renewal Pricing Audit (PENDING DAVID)](#6-renewal-pricing-audit-pending-david)
7. [Implementation Checklist](#7-implementation-checklist)

---

## 1. Current State Summary

### Exports

| Export         | Type             | Count | Description                           |
| -------------- | ---------------- | ----- | ------------------------------------- |
| `sharedAddOns` | `PackageAddOn[]` | 6     | Add-ons available across all packages |
| `packages`     | `PackageTier[]`  | 8     | All package tiers                     |

### Current Packages (8)

| ID                   | Slug                               | Tier   | State      | LLC Formation | Corp Formation |
| -------------------- | ---------------------------------- | ------ | ---------- | ------------- | -------------- |
| `wyoming-gold`       | `wyoming-private-incorporation`    | gold   | Wyoming    | $1,275        | $1,575         |
| `wyoming-silver`     | `wyoming-incorporation`            | silver | Wyoming    | $875          | $1,175         |
| `nevada-gold`        | `nevada-private-incorporation`     | gold   | Nevada     | $1,800        | $2,100         |
| `nevada-silver`      | `nevada-incorporation`             | silver | Nevada     | $1,275        | $1,575         |
| `nevada-bronze`      | `nevada-basic-incorporation`       | bronze | Nevada     | $699          | $899           |
| `california-private` | `california-private-incorporation` | gold   | California | $1,475        | $1,775         |
| `florida-private`    | `florida-private-incorporation`    | gold   | Florida    | $1,475        | $1,775         |
| `shelf-companies`    | `shelf-company-packages`           | gold   | Wyoming    | $2,500        | $2,800         |

### Current Shared Add-Ons (6)

| ID                     | Name                              | Price |
| ---------------------- | --------------------------------- | ----- |
| `foreign-registration` | Foreign Registration              | $149  |
| `ein`                  | EIN Obtainment                    | $75   |
| `operating-agreement`  | Custom Operating Agreement        | $99   |
| `rush-filing`          | Rush Filing (24-hour)             | $199  |
| `virtual-office`       | Virtual Office Address            | $149  |
| `crypto-payment`       | Cryptocurrency Payment Processing | $0    |

### Relevant Type Definitions

```typescript
// src/lib/types.ts — current types (no changes needed for items below)

export type EntityType = "llc" | "corp";
export type TierLevel = "bronze" | "silver" | "gold";

export interface PackageFeature {
  name: string;
  tooltip?: string;
  status: "included" | "not-included" | "add-on";
}

export interface PackageAddOn {
  id: string;
  name: string;
  price: number;
  description: string;
  tooltip?: string;
}

export interface PackageTier {
  id: string;
  flatSlug: string;
  name: string;
  tier: TierLevel;
  state: string;
  prices: Record<EntityType, { formation: number; renewal: number }>;
  description: string;
  features: PackageFeature[];
  badge?: string;
  highlighted?: boolean;
  addOns: PackageAddOn[];
}
```

---

## 2. Add Wyoming Bronze Package (CONFIRMED)

**Status:** CONFIRMED — add this package to the array.

Insert between `wyoming-silver` (index 1) and `nevada-gold` (index 2) so Wyoming packages stay grouped together. The resulting order will be: WY Gold, WY Silver, **WY Bronze**, NV Gold, NV Silver, NV Bronze, CA Private, FL Private, Shelf.

### Copy-Paste Data Structure

```typescript
{
  id: "wyoming-bronze",
  flatSlug: "wyoming-basic-incorporation",
  name: "Wyoming Bronze LLC",
  tier: "bronze",
  state: "Wyoming",
  prices: {
    llc: { formation: 625, renewal: 225 },   // renewal TBD — see Section 6
    corp: { formation: 625, renewal: 325 },   // renewal TBD — see Section 6
  },
  description:
    "Basic Wyoming formation at an affordable price. Includes state filing fees and registered agent.",
  features: [
    {
      name: "State Filing Fees Included",
      status: "included",
      tooltip: "All Wyoming state filing fees are included — no hidden charges",
    },
    {
      name: "Registered Agent (1 Year)",
      status: "included",
      tooltip:
        "Professional registered agent service in Wyoming for one full year",
    },
    {
      name: "Year-Round Nominee Directors",
      status: "not-included",
      tooltip: "Upgrade to Gold for year-round nominee directors",
    },
    {
      name: "Year-Round Nominee Officers",
      status: "not-included",
      tooltip: "Upgrade to Gold for year-round nominee officers",
    },
    {
      name: "Offshore Record Storage",
      status: "not-included",
      tooltip: "Upgrade to Gold for offshore record storage",
    },
    {
      name: "Corporate Minutes Maintenance",
      status: "not-included",
    },
    { name: "Annual Report Filing", status: "add-on" },
    { name: "Certificate of Good Standing", status: "add-on" },
    { name: "Custom Operating Agreement", status: "add-on" },
  ],
  addOns: sharedAddOns,
},
```

### Feature Comparison: WY Bronze vs NV Bronze

| Feature                       | WY Bronze    | NV Bronze    |
| ----------------------------- | ------------ | ------------ |
| State Filing Fees             | included     | included     |
| Registered Agent (1 Year)     | included     | included     |
| Year-Round Nominee Directors  | not-included | not-included |
| Year-Round Nominee Officers   | not-included | not-included |
| Offshore Record Storage       | not-included | not-included |
| Corporate Minutes Maintenance | not-included | not-included |
| Annual Report Filing          | add-on       | add-on       |
| **Nevada Business License**   | **N/A**      | **included** |
| Certificate of Good Standing  | add-on       | add-on       |
| Custom Operating Agreement    | add-on       | add-on       |

Note: WY Bronze omits "Nevada Business License" since it is Wyoming-specific. Otherwise the feature set mirrors NV Bronze exactly.

### Routes to Update

After adding WY Bronze, the following need attention:

- **Dynamic route:** `/packages/wyoming-basic-incorporation` will auto-resolve via `[slug]/page.tsx` (uses `generateStaticParams` from the packages array).
- **State hub data:** `src/data/states.ts` — add `"wyoming-bronze"` to Wyoming's `packages` array.
- **Compare pages:** `src/data/comparisons.ts` — consider adding a WY tier comparison page if one does not exist.
- **Playwright tests:** `tests/e2e/routes.spec.ts` — add `/packages/wyoming-basic-incorporation` to the route smoke test list.

---

## 3. Feature Corrections (PENDING DAVID)

These corrections are based on discrepancies between the old incorporate123.com site and the prototype. **Do not implement until David confirms.**

### 3a. EIN Obtainment — Free in Gold/Silver?

**Current prototype:** EIN is a $75 add-on for all packages (in `sharedAddOns`).

**Old site behavior:** EIN was listed as FREE in Gold and Silver packages.

**If David confirms free for Gold/Silver:**

1. Add EIN as an "included" feature in all Gold and Silver packages:

```typescript
// Add to features array of every gold and silver package
{ name: "EIN Obtainment", status: "included", tooltip: "Federal Employer Identification Number — included at no additional cost" },
```

2. Make `sharedAddOns` conditional or split into tier-specific add-on lists so Bronze packages still show EIN as a $75 add-on. Two approaches:

**Option A — Filter in the component (simpler):**
Keep `sharedAddOns` as-is. In the package card/detail UI, check if a feature with the same name exists with `status: "included"` and hide the matching add-on.

**Option B — Tier-specific add-on arrays (cleaner data):**

```typescript
const bronzeAddOns: PackageAddOn[] = sharedAddOns; // all 6

const silverGoldAddOns: PackageAddOn[] = sharedAddOns.filter(
  (a) => a.id !== "ein",
); // 5 — EIN excluded since it's included as a feature
```

### 3b. Bank Account Opening — Missing Feature

**Current prototype:** Not present anywhere.

**Old site behavior:** "FREE Corporate Bank Account Opening ($250 value)" listed in Gold and Silver.

**If David confirms:**

```typescript
// Add to features array of every gold and silver package
{
  name: "Bank Account Opening",
  status: "included",
  tooltip: "We assist with opening a corporate bank account — FREE ($250 value)",
},
```

For Bronze packages, add as `not-included` to maintain the comparison grid alignment:

```typescript
{
  name: "Bank Account Opening",
  status: "not-included",
  tooltip: "Upgrade to Silver or Gold for free bank account opening assistance",
},
```

### 3c. Mail Forwarding — Inconsistent Across Packages

**Current prototype:** WY Gold mentions mail forwarding in its Virtual Office add-on context, but it is not an explicit feature line in any package. NV Gold does not mention it.

**Old site behavior:** Weekly mail forwarding was included in both Gold and Silver packages (NV via "Basic Virtual Office," WY via registered office address).

**If David confirms, standardize as:**

```typescript
// Add to Gold and Silver packages for both WY and NV
{
  name: "Mail Forwarding (Weekly)",
  status: "included",
  tooltip: "Weekly forwarding of business mail received at your registered address",
},

// Bronze packages
{
  name: "Mail Forwarding (Weekly)",
  status: "not-included",
  tooltip: "Upgrade to Silver or Gold for weekly mail forwarding",
},
```

### Feature Order Convention

If all three features above are confirmed, the recommended insertion point is after "Custom Operating Agreement" (or "Corporate Seal" in Gold packages) and before `addOns`. This keeps the comparison grid consistent:

1. State Filing Fees
2. Registered Agent
3. Nominees (Directors)
4. Nominees (Officers)
5. Offshore Record Storage
6. Corporate Minutes Maintenance
7. Annual Report Filing
8. Nevada Business License _(NV only)_
9. Certificate of Good Standing
10. Corporate Seal _(Gold only)_
11. Custom Operating Agreement
12. **EIN Obtainment** _(new — if confirmed)_
13. **Bank Account Opening** _(new — if confirmed)_
14. **Mail Forwarding (Weekly)** _(new — if confirmed)_

---

## 4. Shelf Company Age-Tier Pricing Model (CONFIRMED DIRECTION)

**Status:** The direction is confirmed (age-tiered pricing replaces flat pricing). Exact dollar amounts are pending David's confirmation.

### Current Shelf Company Data

```typescript
// Current — flat pricing, no age tiers
{
  id: "shelf-companies",
  flatSlug: "shelf-company-packages",
  name: "Shelf Company",
  tier: "gold",
  state: "Wyoming",
  prices: {
    llc: { formation: 2500, renewal: 525 },
    corp: { formation: 2800, renewal: 625 },
  },
  // ...
}
```

### Proposed Type Extensions

Add these to `src/lib/types.ts`:

```typescript
/** Shelf Companies — Age-Tiered Pricing */
export interface ShelfCompanyTier {
  ageRange: string; // e.g., "1-3 years"
  minPrice: number; // e.g., 1500
  maxPrice: number; // e.g., 2000
  description: string; // e.g., "Entry-level shelf entity"
}

export interface ShelfCompanyEntity {
  id: string; // e.g., "shelf-wy-2022-001"
  name: string; // e.g., "Mountain Ridge Holdings LLC"
  state: string; // "Wyoming" | "Nevada"
  entityType: EntityType; // "llc" | "corp"
  incorporationDate: string; // ISO date, e.g., "2022-03-15"
  age: number; // computed years, e.g., 4
  price: number; // e.g., 2200
  available: boolean; // false if sold/reserved
  tier: string; // references ShelfCompanyTier.ageRange
}
```

### Proposed Data Structure

Add to `src/data/packages.ts` (or a new `src/data/shelf-companies.ts` if the file grows too large):

```typescript
export const shelfCompanyTiers: ShelfCompanyTier[] = [
  {
    ageRange: "1-3 years",
    minPrice: 1500,
    maxPrice: 2000,
    description: "Entry-level shelf entity with recent formation date",
  },
  {
    ageRange: "4-6 years",
    minPrice: 2000,
    maxPrice: 2500,
    description: "Standard shelf entity with established history",
  },
  {
    ageRange: "7-10 years",
    minPrice: 3000,
    maxPrice: 4000,
    description: "Premium shelf entity — strong credibility signal",
  },
  {
    ageRange: "10+ years",
    minPrice: 4000,
    maxPrice: 5000,
    description: "Ultra-premium shelf entity with decade-plus history",
  },
];

// Dynamic inventory — in production this comes from CMS/database.
// For the prototype, hardcode 4-8 sample entities.
export const shelfCompanyInventory: ShelfCompanyEntity[] = [
  {
    id: "shelf-wy-2023-001",
    name: "Summit Ridge Holdings LLC",
    state: "Wyoming",
    entityType: "llc",
    incorporationDate: "2023-06-12",
    age: 3,
    price: 1800,
    available: true,
    tier: "1-3 years",
  },
  {
    id: "shelf-wy-2021-001",
    name: "Frontier Capital Group LLC",
    state: "Wyoming",
    entityType: "llc",
    incorporationDate: "2021-01-20",
    age: 5,
    price: 2300,
    available: true,
    tier: "4-6 years",
  },
  {
    id: "shelf-wy-2019-001",
    name: "Granite Peak Enterprises Inc",
    state: "Wyoming",
    entityType: "corp",
    incorporationDate: "2019-09-05",
    age: 7,
    price: 3200,
    available: true,
    tier: "7-10 years",
  },
  {
    id: "shelf-wy-2015-001",
    name: "Iron Basin Resources LLC",
    state: "Wyoming",
    entityType: "llc",
    incorporationDate: "2015-03-28",
    age: 11,
    price: 4500,
    available: true,
    tier: "10+ years",
  },
];
```

### Impact on the Shelf Company Package Entry

The existing `shelf-companies` entry in the `packages` array should be updated to reference the tier system. Two options:

**Option A — Keep in `packages` array, update price to show range:**

```typescript
{
  id: "shelf-companies",
  flatSlug: "shelf-company-packages",
  name: "Shelf Company",
  tier: "gold",
  state: "Wyoming",
  prices: {
    llc: { formation: 1500, renewal: 525 },  // formation = minimum tier price
    corp: { formation: 1500, renewal: 625 },  // display as "from $1,500"
  },
  description:
    "Pre-aged entity with established history. Pricing varies by entity age — browse available inventory.",
  // ... features remain the same
}
```

**Option B — Remove from `packages` array, handle shelf companies as a separate data source:**
The shelf company page (`/packages/shelf-company-packages`) would pull from `shelfCompanyTiers` and `shelfCompanyInventory` instead of the `packages` array. This is the cleaner approach but requires updating any component that filters `packages` by ID to find shelf data.

**Recommendation:** Option A for the prototype (minimal disruption), Option B for production (cleaner separation).

---

## 5. Proposed New Add-Ons (PENDING DAVID)

**Status:** Proposed based on competitive analysis. Do not add until David approves.

```typescript
// Append to sharedAddOns array if approved

{
  id: "dba-filing",
  name: "DBA/Fictitious Name Filing",
  price: 50,
  description: "File a DBA in the county where your entity is registered",
},
{
  id: "domestication",
  name: "Domestication Service",
  price: 500,
  description:
    "Move your existing entity from another state to Wyoming or Nevada",
  tooltip:
    "Price is $500 for WY, $750 for NV. Includes all filing fees and document preparation.",
},
{
  id: "shelf-name-change",
  name: "Expedited Name Change",
  price: 300,
  description:
    "Change the name of your shelf company while keeping the original incorporation date",
},
```

### Note on Domestication Pricing

The domestication add-on has state-variable pricing ($500 WY, $750 NV). The current `PackageAddOn` type only supports a single `price: number`. Two approaches:

**Option A — Use the lower price with tooltip disclaimer (simpler):**
Set `price: 500` and explain the NV upcharge in the tooltip. The checkout logic would need to adjust the price based on the selected state.

**Option B — Extend the type (cleaner):**

```typescript
export interface PackageAddOn {
  id: string;
  name: string;
  price: number;
  priceByState?: Record<string, number>; // optional state-specific overrides
  description: string;
  tooltip?: string;
}
```

Then in the data:

```typescript
{
  id: "domestication",
  name: "Domestication Service",
  price: 500, // default / minimum
  priceByState: { Wyoming: 500, Nevada: 750 },
  description: "Move your existing entity from another state to Wyoming or Nevada",
},
```

---

## 6. Renewal Pricing Audit (PENDING DAVID)

**Status:** All renewal prices need David's confirmation. The current prototype values are significantly lower than the old site and may be placeholder estimates.

### Current Prototype Renewal Prices

| Tier   | LLC Renewal | Corp Renewal |
| ------ | ----------- | ------------ |
| Gold   | $525        | $625         |
| Silver | $325        | $425         |
| Bronze | $225        | $325         |

These values are applied uniformly: WY Gold and NV Gold both show $525/$625, etc.

### Concerns

1. **Old site prices were higher** — renewal pricing on the old incorporate123.com was different from these numbers. The prototype values may have been rough estimates.
2. **State-specific costs differ** — Nevada renewals include business license renewal fees (~$200+), so NV renewals should logically be higher than WY renewals, but currently they are identical.
3. **CA and FL Private packages** — These show $525/$625 renewals, but their renewal cost structure is more complex (renewal of the parent WY/NV entity + ongoing foreign registration in CA/FL).

### Recommendation

Until David confirms, mark renewals as provisional in code comments:

```typescript
prices: {
  llc: { formation: 1275, renewal: 525 },   // TODO: renewal TBD — awaiting David confirmation
  corp: { formation: 1575, renewal: 625 },   // TODO: renewal TBD — awaiting David confirmation
},
```

Or, if you prefer not to litter the codebase with TODOs, track the open question in the project task list and leave the current values as reasonable defaults.

---

## 7. Implementation Checklist

### Confirmed — Ready to Implement

- [ ] Add Wyoming Bronze package to `packages` array (Section 2)
- [ ] Add `/packages/wyoming-basic-incorporation` to Playwright route smoke tests
- [ ] Add `"wyoming-bronze"` to Wyoming state hub's `packages` array in `src/data/states.ts`
- [ ] Verify WY Bronze renders correctly on the packages listing page and individual package page

### Pending David Confirmation

- [ ] EIN: Move from $75 add-on to included feature in Gold/Silver (Section 3a)
- [ ] Bank Account Opening: Add as new feature to Gold/Silver (Section 3b)
- [ ] Mail Forwarding: Standardize across WY and NV Gold/Silver (Section 3c)
- [ ] Shelf Company: Implement age-tier pricing model (Section 4 — direction confirmed, prices TBD)
- [ ] New Add-Ons: DBA Filing, Domestication, Shelf Name Change (Section 5)
- [ ] Renewal Pricing: Confirm all renewal amounts, especially NV vs WY differences (Section 6)

### Type Changes Required (when implementing)

- [ ] Add `ShelfCompanyTier` interface to `src/lib/types.ts` (Section 4)
- [ ] Add `ShelfCompanyEntity` interface to `src/lib/types.ts` (Section 4)
- [ ] Optionally add `priceByState` to `PackageAddOn` if domestication is approved (Section 5)
