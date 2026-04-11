# Incorporate123 — Package Strategy Analysis

**Version:** 2.0 — Updated per David's meeting (April 1, 2026)
**Original Date:** March 16, 2026
**Updated:** April 1, 2026
**Author:** Alex (BIT Studios)
**Status:** Partially resolved — see Strategic Summary for open items

---

## Executive Summary

Incorporate123's package architecture is the single most important business decision in the redesign. It determines revenue (what people buy), positioning (how the brand is perceived), and conversion (whether visitors become customers). This document analyzes 15 strategic questions, compares the old site's 12+ SKU model against the prototype's streamlined approach, and provides recommendations with specific items flagged for David's confirmation.

**Key findings (v1):**

- The prototype's 8-package structure is strategically sound but missing WY Bronze ($625 entry point)
- ~~Recommend 9 packages: WY Gold/Silver/Bronze, NV Gold/Silver/Bronze, CA Private, FL Private, Shelf Companies~~
- Gold/Silver/Bronze naming is correct — universally understood, implies quality progression
- ~~Virtual Office conversion from tier differentiator to add-on is correct — reduces SKU complexity by 6 packages~~
- Renewal pricing model needs urgent clarification — prototype prices are 50–70% lower than old site
- Several add-on prices need David's confirmation, especially Foreign Registration ($149 vs $450–$600) and EIN ($75 vs free)

**[UPDATED] Key corrections from David (April 1, 2026):**

- **6 core packages** (Bronze/Silver/Gold x WY/NV), not 9. CA/FL are kept for convenience but are not core.
- **Tiers are additive:** Bronze = formation + compliance. Silver = Bronze + virtual office + mail forwarding. Gold = Silver + nominee privacy. That's it.
- **Virtual Office is NOT an add-on.** It defines the Silver tier. The v1 recommendation to make VO an add-on was wrong.
- **No a la carte services.** David: "We do not offer, have never offered a la carte services. It's not profitable."
- **Wyoming is the default state.** 70% of clients choose Wyoming.
- **Shelf companies require a two-step purchase:** buy entity, then choose Bronze/Silver/Gold package on top.
- **True add-ons are minimal** — roughly 3 (foreign filing, domestication, possibly EIN), not 8.

---

## Question 1: How Many Packages? [UPDATED]

### Current State (Old Site)

12+ distinct SKUs when counting all variants:

- WY Gold, WY Gold + Virtual Office, WY Silver, WY Bronze (4)
- NV Gold Basic, NV Gold Executive, NV Gold NevadaMAX, NV Silver Basic, NV Silver Executive, NV Silver NevadaMAX, NV Bronze, NV Bronze PLUS (8)
- CA Private (via Bronze PLUS + Foreign Filing), FL Private (via Bronze PLUS + Foreign Filing) (2, a la carte)
- Shelf Companies (1, inventory-based)

**Problem:** 12+ SKUs create decision paralysis. The Executive/NevadaMAX variants are just Gold/Silver + different virtual office levels — not meaningfully different services.

### Prototype State

8 packages:

- WY Gold, WY Silver (2 — no WY Bronze)
- NV Gold, NV Silver, NV Bronze (3)
- CA Private, FL Private (2)
- Shelf Companies (1)

**Problem:** WY Bronze ($625) was dropped, removing the cheapest WY entry point. This loses budget-conscious WY traffic and breaks the 3-tier symmetry with NV packages.

### [RESOLVED] Recommendation: 6 Core Packages + 2 Convenience + Shelf

David confirmed the package structure. The core lineup is **6 packages** — Bronze/Silver/Gold for each of the two primary states:

| #   | Package        | State | Tier   | LLC Price | Corp Price |
| --- | -------------- | ----- | ------ | --------- | ---------- |
| 1   | Wyoming Gold   | WY    | Gold   | $1,275    | $1,575     |
| 2   | Wyoming Silver | WY    | Silver | $875      | $1,175     |
| 3   | Wyoming Bronze | WY    | Bronze | $625      | $625       |
| 4   | Nevada Gold    | NV    | Gold   | $1,800    | $2,100     |
| 5   | Nevada Silver  | NV    | Silver | $1,275    | $1,575     |
| 6   | Nevada Bronze  | NV    | Bronze | $699      | $899       |

**Convenience packages** (kept but not core):

| #   | Package            | State | Tier | LLC Price | Corp Price |
| --- | ------------------ | ----- | ---- | --------- | ---------- |
| 7   | California Private | CA    | Gold | $1,475    | $1,775     |
| 8   | Florida Private    | FL    | Gold | $1,475    | $1,775     |

**Separate product:**

| #   | Package         | State | Tier   | LLC Price      | Corp Price     |
| --- | --------------- | ----- | ------ | -------------- | -------------- |
| 9   | Shelf Companies | WY    | Varies | $2,000–$4,500+ | $2,000–$4,500+ |

**Why 6 core and not more:**

- Research shows 3 tiers per state is optimal (decoy effect — Bronze makes Silver look reasonable, Silver makes Gold look smart)
- CA/FL are bundled packages (WY/NV formation + foreign registration), not separate tiers — kept for convenience
- Shelf Companies are inventory-based, not a tier — and require a separate package selection on top (see Q11)
- **Wyoming is the default** — 70% of clients choose Wyoming. The site should lead with WY packages.
- **No a la carte.** David: "We do not offer, have never offered a la carte services. It's not profitable."

**[RESOLVED]:** WY Bronze confirmed at $625. 6-package core structure confirmed. No a la carte.

---

## Question 2: State-Specific vs. Unified Packages?

### Current State

State-specific packages with different pricing per state. WY and NV have different state filing fees, different compliance requirements, and different service inclusions.

### Recommendation: Keep State-Specific [RESOLVED]

A unified "Gold Package — $X" across all states is impossible because:

| Cost Component   | Wyoming   | Nevada                                                                          | Difference              |
| ---------------- | --------- | ------------------------------------------------------------------------------- | ----------------------- |
| State filing fee | $100      | $75 (articles) + $150 (initial list) + $200–$500 (business license) = $425–$725 | WY is $325–$625 cheaper |
| Registered Agent | $150/yr   | $200/yr                                                                         | NV is $50 more          |
| Nominee discount | $375 (WY) | $525 (NV)                                                                       | NV is $150 more         |
| Virtual Office   | Optional  | Strongly recommended (NV presence)                                              | Different needs         |

The $525+ cost gap between WY and NV makes unified pricing either overcharge WY customers or undercharge NV customers. State-specific pricing is correct.

**[UPDATED] Wyoming is the default state.** David confirmed 70% of clients choose Wyoming. The site should present WY packages first in all comparison views, the Package Wizard should default to WY, and the primary package page should lead with Wyoming.

**No action needed — prototype already handles state-specific pricing. Need to verify WY-first ordering throughout.**

---

## Question 3: Naming Convention

### Current State (Old Site)

Mixed naming: "Gold (Basic)", "Gold Executive", "Gold NevadaMAX", "Bronze PLUS". The "(Basic)" qualifier on Gold is confusing — Gold should feel premium, not basic.

### SOW Reference

Section 2.4 mentions "Basic/Executive/MAX" tiers, while the Strategic Decisions document says "Gold/Silver/Bronze."

### Recommendation: Gold / Silver / Bronze [RESOLVED]

**Gold/Silver/Bronze wins because:**

1. **Universally understood** — every consumer knows Gold > Silver > Bronze
2. **Implies quality progression** — not just "basic" vs "premium"
3. **Three tiers, three names** — no confusion about sub-tiers
4. **Competitors don't use it** — ZenBusiness uses Starter/Pro/Premium, NCH uses single-tier, WCS uses price labels
5. **Works in URL slugs** — `/wyoming-private-incorporation/` (Gold), `/wyoming-incorporation/` (Silver), `/wyoming-basic-incorporation/` (Bronze)

**Drop all sub-tier names:** No more "Basic", "Executive", or "NevadaMAX". The old sub-tiers were virtual office level variants — those are now baked into the tier definitions (Silver includes VO).

**No action needed — prototype already uses Gold/Silver/Bronze.**

---

## Question 4: Virtual Office Handling [UPDATED]

### Current State (Old Site)

Virtual Office was a **tier differentiator** that created 3 sub-tiers per Gold/Silver:

- Basic Virtual Office ($275/yr) — included in Gold Basic and Silver Basic
- Executive Virtual Office ($575/yr) — defined Gold Executive and Silver Executive
- Part-Time Private Suite ($250/mo) — defined NevadaMAX packages

This created 6 extra package SKUs (Gold Exec, Gold MAX, Silver Exec, Silver MAX for both NV LLC and Corp).

### Prototype State (v1)

Virtual Office was a **$149 flat add-on** — available to any package.

### [UPDATED] Correction: Virtual Office Defines the Silver Tier

**The v1 recommendation to make Virtual Office an add-on was WRONG.** David clarified that Virtual Office + mail forwarding is what differentiates Silver from Bronze. It is not optional — it is the defining feature of the Silver tier.

David: "If you add on like a virtual office to that bronze package, it becomes a silver package."

**The correct tier structure:**

| Tier   | What It Is                                                             |
| ------ | ---------------------------------------------------------------------- |
| Bronze | Basic formation + compliance (RA, annual filings, records, state fees) |
| Silver | Bronze + virtual office address + mail forwarding                      |
| Gold   | Silver + nominee privacy services (the ONLY difference from Silver)    |

**This means:**

1. Virtual Office is NOT an add-on — it's included in Silver and Gold
2. Mail forwarding is NOT an add-on — it's included in Silver and Gold
3. The only thing separating Gold from Silver is nominee services
4. Bronze customers who want a virtual office should upgrade to Silver, not buy an add-on

**Impact on prototype:** Remove Virtual Office and Mail Forwarding from the add-on list. Update tier feature matrices. Update checkout flow — VO should not appear as a selectable add-on.

**Price concern from v1 (now moot):** The old Basic Virtual Office was $275/yr. The prototype add-on was $149. This question is no longer relevant since VO is baked into the tier, not priced separately.

---

## Question 5: Bronze PLUS Equivalent? [UPDATED]

### Current State (Old Site)

NV Bronze PLUS ($1,525 LLC / $1,825 Corp) was Bronze + Nominee Services. It existed for customers who wanted privacy without the full Gold package (no virtual office, no mail forwarding).

### Prototype State

No Bronze PLUS equivalent. The gap between NV Bronze ($699) and NV Gold ($1,800) is $1,101.

### [UPDATED] Recommendation: Don't Add Bronze PLUS Back

**Why (reinforced by David's tier definitions):**

1. **Tiers are additive and sequential.** Bronze → Silver (add VO) → Gold (add nominees). There is no "skip Silver" path.
2. **"If you want privacy, get Gold"** — cleaner messaging, stronger upsell
3. **Three tiers is optimal** — four tiers triggers the "four alarms" effect (decreases trust per research)
4. **The $1,101 gap is intentional** — it makes Gold feel like a meaningful upgrade, not a marginal one
5. **Bronze PLUS would break the additive model** — it would be "Bronze + nominees but no VO," which contradicts David's structure where Gold = Silver + nominees, and Silver = Bronze + VO

**The correct flow:** Bronze customer sees Silver features (VO, mail forwarding) → wants more → sees Gold features (nominees on top of everything Silver includes) → buys Gold. No intermediate step needed.

**No action needed.**

---

## Question 6: Complete Feature Matrix by Tier [UPDATED]

The following matrix has been **rewritten** to reflect David's corrected tier definitions. The tiers are strictly additive:

- **Bronze** = basic formation + compliance (RA, annual filings, corporate records, state fees)
- **Silver** = everything in Bronze + virtual office + mail forwarding
- **Gold** = everything in Silver + nominee privacy (year-round nominee directors/officers, offshore records storage)

### Wyoming Packages [UPDATED]

| Feature                                  | WY Gold ($1,275) | WY Silver ($875) | WY Bronze ($625) |
| ---------------------------------------- | :--------------: | :--------------: | :--------------: |
| **FORMATION & COMPLIANCE (Bronze tier)** |                  |                  |                  |
| State Filing Fees                        |     Included     |     Included     |     Included     |
| Registered Agent (1 yr)                  |     Included     |     Included     |     Included     |
| Annual Report Filing                     |     Included     |     Included     |     Included     |
| Corporate Records Maintenance            |     Included     |     Included     |     Included     |
| Certificate of Good Standing             |     Included     |     Included     |     Included     |
| **VIRTUAL PRESENCE (Silver tier)**       |                  |                  |                  |
| Virtual Office Address                   |     Included     |     Included     |        —         |
| Weekly Mail Forwarding                   |     Included     |     Included     |        —         |
| **PRIVACY (Gold tier)**                  |                  |                  |                  |
| Year-Round Nominee Directors             |     Included     |        —         |        —         |
| Year-Round Nominee Officers              |     Included     |        —         |        —         |
| Offshore Records Storage                 |     Included     |        —         |        —         |

### Nevada Packages [UPDATED]

| Feature                                  | NV Gold ($1,800) | NV Silver ($1,275) | NV Bronze ($699) |
| ---------------------------------------- | :--------------: | :----------------: | :--------------: |
| **FORMATION & COMPLIANCE (Bronze tier)** |                  |                    |                  |
| State Filing Fees (all)                  |     Included     |      Included      |     Included     |
| Registered Agent (1 yr)                  |     Included     |      Included      |     Included     |
| Nevada Business License                  |     Included     |      Included      |     Included     |
| Annual Report Filing                     |     Included     |      Included      |     Included     |
| Corporate Records Maintenance            |     Included     |      Included      |     Included     |
| Certificate of Good Standing             |     Included     |      Included      |     Included     |
| **VIRTUAL PRESENCE (Silver tier)**       |                  |                    |                  |
| Virtual Office Address                   |     Included     |      Included      |        —         |
| Weekly Mail Forwarding                   |     Included     |      Included      |        —         |
| **PRIVACY (Gold tier)**                  |                  |                    |                  |
| Year-Round Nominee Directors             |     Included     |         —          |        —         |
| Year-Round Nominee Officers              |     Included     |         —          |        —         |
| Offshore Records Storage                 |     Included     |         —          |        —         |

### CA/FL Private Packages

| Feature                               | CA/FL Private ($1,475) |
| ------------------------------------- | :--------------------: |
| WY/NV Formation (Gold-level features) |        Included        |
| Year-Round Nominee Directors          |        Included        |
| Year-Round Nominee Officers           |        Included        |
| Offshore Records Storage              |        Included        |
| Foreign State Registration (CA or FL) |        Included        |
| Annual Report Filing                  |        Included        |
| Certificate of Good Standing          |        Included        |
| Virtual Office Address                |        Included        |
| Weekly Mail Forwarding                |        Included        |

**[UPDATED] Key changes from v1:**

1. **Bronze now includes compliance features** (annual filings, records, good standing) that v1 listed as add-ons or Silver-only. David: "The bronze package is just like the basic company formation and compliance."
2. **Virtual Office and Mail Forwarding moved from add-on to Silver/Gold inclusion.** They define the Silver tier.
3. **Gold differs from Silver by ONLY nominee services.** David: "The silver package and the gold package are exactly the same except for the gold package includes the nominee service."
4. **Removed ambiguous items:** Custom Operating Agreement, Corporate Seal, EIN, and Bank Account Opening are no longer shown in the tier matrix. See Q7 for which of these are true add-ons. [STILL OPEN: EIN and Operating Agreement placement]

---

## Question 7: Add-On Availability Rules [UPDATED]

### Current State (Old Site)

Add-ons were not clearly defined. Foreign Registration and DBA were listed on a separate "Additional Services" page. Virtual Office levels were package differentiators, not add-ons.

### Prototype State (v1)

6 shared add-ons available to all packages: Foreign Registration ($149), EIN ($75), Operating Agreement ($99), Rush Filing ($199), Virtual Office ($149), Crypto Payment ($0).

### [UPDATED] Correction: True Add-Ons Are Minimal

David was clear: "We do not offer, have never offered a la carte services. It's not profitable."

The v1 list of 8 add-ons was too large. Virtual Office and Mail Forwarding are tier features, not add-ons. The remaining true add-ons are services that apply across tiers for specific client needs:

**Confirmed Add-Ons (2):**

| Add-On               | Price                  | Available To | Notes                                    |
| -------------------- | ---------------------- | ------------ | ---------------------------------------- |
| Foreign Registration | **$149 or $450–$600?** | All packages | For clients operating in a second state  |
| Domestication        | $500 (WY) / $750 (NV)  | All packages | Moving an existing entity to a new state |

**[STILL OPEN] Possible Add-Ons (3):**

| Add-On                     | Price | Status       | Notes                                                        |
| -------------------------- | ----- | ------------ | ------------------------------------------------------------ |
| EIN Obtainment             | $75   | [STILL OPEN] | Was free in old Gold. Is it included in a tier or an add-on? |
| Custom Operating Agreement | $99   | [STILL OPEN] | Included in Gold on old site. Add-on for Silver/Bronze?      |
| Rush Filing (24-hour)      | $199  | [STILL OPEN] | Good competitive add-on but David hasn't confirmed           |

**Removed from add-on list (v1 → v2):**

| Item                       | Reason                                  |
| -------------------------- | --------------------------------------- |
| Virtual Office Address     | Defines Silver tier — not an add-on     |
| Mail Forwarding            | Included in Silver/Gold — not an add-on |
| Cryptocurrency Payment     | Payment method, not a service add-on    |
| DBA/Fictitious Name Filing | Not confirmed by David                  |

**CONFIRM WITH DAVID:** EIN placement (tier inclusion or add-on?), Operating Agreement placement, Rush Filing availability, Foreign Registration price ($149 vs $450–$600).

---

## Question 8: Pricing Accuracy

See **Doc 07 (Pricing Discrepancies for David)** for the complete discrepancy table. The critical items:

| Item                 | Issue                      | Impact                                                      |
| -------------------- | -------------------------- | ----------------------------------------------------------- |
| NV Bronze LLC        | $1,000 → $699 (-30%)       | Revenue reduction on entry-level NV sales                   |
| NV Bronze Corp       | $1,300 → $899 (-31%)       | Same                                                        |
| WY Silver Corp       | $900 → $1,175 (+31%)       | Revenue increase but may surprise returning customers       |
| WY Gold Corp         | $1,275 → $1,575 (+24%)     | Same                                                        |
| Foreign Registration | $450–$600 → $149 (-67–75%) | CRITICAL — is scope reduced or is this a genuine price cut? |
| EIN                  | FREE → $75                 | Reduces perceived value of Gold/Silver packages             |

**All prices need David's written confirmation before launch.**

---

## Question 9: Renewal Pricing Model — CRITICAL [UPDATED]

This is the most consequential pricing decision in the entire project.

### Current State (Old Site)

**Base service fee PLUS state fees billed separately.**

| Package   | Service Fee | + State Fees               | = Total Annual Renewal |
| --------- | ----------- | -------------------------- | ---------------------- |
| NV Gold   | $1,375      | ~$350 (LLC) / ~$650 (Corp) | $1,725–$2,025          |
| NV Silver | $850        | ~$350 / ~$650              | $1,200–$1,500          |
| NV Bronze | $575        | ~$350 / ~$650              | $925–$1,225            |
| WY Gold   | $1,225      | Included ($50)             | $1,225                 |
| WY Silver | $850        | Included ($50)             | $850                   |

### Prototype State

**All-inclusive flat rate.**

| Package             | Prototype Renewal (LLC) | Prototype Renewal (Corp) |
| ------------------- | ----------------------- | ------------------------ |
| Gold (all states)   | $525                    | $625                     |
| Silver (all states) | $325                    | $425                     |
| Bronze (all states) | $225                    | $325                     |

### Analysis

The prototype renewal prices are **50–70% lower** than old site totals for Nevada packages. For Wyoming, they're **40–60% lower**. This is either:

1. **A massive deliberate price reduction** to improve retention and match competitive pricing (WY Corporate Services charges ~$545+/yr)
2. **A data error** where state fees were accidentally excluded from prototype renewals
3. **A strategic decision** that hasn't been fully documented

### [UPDATED] David's State Fee Data

David provided approximate annual state fee ranges:

| State   | Annual State Fees | Notes                                                    |
| ------- | ----------------- | -------------------------------------------------------- |
| Wyoming | ~$100/yr          | Low fees are a key WY selling point                      |
| Nevada  | $425–$700/yr      | Varies by entity type (LLC vs Corp) and business license |

**[STILL OPEN]:** David acknowledged the fee data but did not resolve the renewal pricing model question. The core question remains: are prototype renewal prices (which appear to be below cost for NV) intentional or a data error?

### Recommendation

The competitive analysis strongly supports lower renewal pricing:

- WY Corporate Services: ~$545+/yr (nominee + RA, before mail forwarding)
- NCH Inc: ~$350/yr (no nominees)
- ZenBusiness: $199–$399/yr (no nominees)

A **$525 all-inclusive Gold renewal** would be genuinely competitive and a strong retention tool. But it needs to cover actual costs:

- Registered Agent: $150–$200
- Nominee Services: $375–$525
- Corporate Minutes: $125
- State Fees: ~$100 (WY) or $425–$700 (NV)

For WY Gold: $150 (RA) + $375 (nominee) + $125 (records) + $100 (state) = **$750 cost basis**. A $525 renewal would be below cost.

For NV Gold: $200 (RA) + $525 (nominee) + $125 (records) + $425–$700 (state) = **$1,275–$1,550 cost basis**. A $525 renewal would be deeply below cost.

**[STILL OPEN] CRITICAL CONFIRM WITH DAVID:** What is the actual renewal pricing model? The prototype numbers may not be sustainable for Nevada packages. Need separate WY and NV renewal schedules.

---

## Question 10: Offshore Integration

### Current State

Offshore services (Nevis LLC, Panama Corp, Hong Kong, BVI IBC) are referenced on the current site but pricing requires contact. The old site has dedicated offshore custodian documentation.

### Prototype State

Offshore is handled as a separate hub page (`/offshore/`) that is de-emphasized from main navigation — retained for SEO authority but not in the primary conversion flow.

### Recommendation: Separate Hub, Not Add-On

**Why offshore should remain separate:**

1. **Different buyer profile** — offshore clients often need consultation, custom structuring
2. **Variable pricing** — each jurisdiction has different costs, making add-on checkout impractical
3. **Compliance complexity** — different documentation, KYC requirements, timelines
4. **SEO value** — the `/offshore/` page ranks for offshore-specific keywords

**The approach:** Offshore cluster page educates on options and funnels to a contact form or phone consultation. It does not go through the self-service checkout.

**CONFIRM WITH DAVID:** Keep offshore as consultation-only (no self-service checkout)?

---

## Question 11: Shelf Company Pricing [UPDATED]

### Current State (Old Site)

Age-tiered inventory with specific pricing per entity:

- 2020 entities (5–6 years old): $2,000–$2,500
- 2014 entities (12 years old): $4,000
- 2013 entities (13 years old): $4,500
- Wyoming Gold Renewal Package automatically added to order
- Payment: wire transfer or crypto ONLY (no credit cards for shelf purchase)

### Prototype State

Flat pricing: $2,500 (LLC) / $2,800 (Corp). No age tiers, no inventory listing.

### [UPDATED] Correction: Shelf Companies Are a Two-Step Purchase

David clarified that buying a shelf company is NOT a standalone product. It's a two-step process:

1. **Step 1: Buy the entity** — customer selects a shelf entity from inventory (age-tiered pricing)
2. **Step 2: Choose a service package** — customer then selects Bronze, Silver, or Gold to go with that entity

David: "Instead of forming a new company, they're just purchasing existing company. And then they have to add to that the bronze, silver, or the gold package."

**This changes the checkout flow significantly.** A shelf company purchase is:

> Shelf entity price ($2,000–$4,500+) + chosen package price (Bronze/Silver/Gold for the entity's state)

**Recommended pricing model (age-tiered, unchanged from v1):**

| Age Bracket | Price Range    | Notes               |
| ----------- | -------------- | ------------------- |
| 1–3 years   | $1,500–$2,000  | Entry-level shelf   |
| 4–6 years   | $2,000–$2,500  | Standard shelf      |
| 7–10 years  | $3,000–$4,000  | Premium shelf       |
| 10+ years   | $4,000–$5,000+ | Ultra-premium shelf |

**Plus** the customer's chosen service package (Bronze/Silver/Gold) at the applicable state pricing.

**Implementation notes:**

- The shelf company page needs a dynamic inventory table that David (or staff) can update as entities sell. This is a CMS feature for the WordPress build.
- The checkout flow must support a two-step selection: pick entity → pick package tier.
- The Package Wizard should have a shelf company path that routes through this two-step flow.

**CONFIRM WITH DAVID:**

- Keep age-tiered pricing?
- Maintain wire transfer/crypto-only payment restriction?
- How often is inventory updated?
- Does the package tier price on top of shelf purchase use the same prices as new formation packages?

---

## Question 12: Money-Back Guarantee

### Current State

No explicit money-back guarantee on the old site. The refund policy page exists but details are sparse.

### Prototype State

30-day money-back guarantee mentioned in trust signals. Not detailed on a dedicated page.

### Recommendation: 60-Day Money-Back Guarantee

**Why 60 days:**

- Research shows 21–49% conversion lift from money-back guarantees
- Only ZenBusiness (60-day) offers one in this space — NCH says "all sales final"
- 60 days gives clients time to receive all formation documents and verify everything is correct
- The guarantee excludes state filing fees already submitted (those are gone) but covers all service fees

**Scope:**

- Covers: All Incorporate123 service fees
- Excludes: State filing fees already submitted to government agencies, rush filing fees for completed expedited filings
- Process: Email request within 60 days of purchase, refund within 5 business days

**CONFIRM WITH DAVID:** 60-day guarantee acceptable? Any additional exclusions needed?

---

## Question 13: Upgrade Paths

### Current State

No formal upgrade path. Customers who want to upgrade from Silver to Gold need to call.

### Recommendation: Mention Upgrades, Keep as Contact-Us Flow

**Why not self-service upgrades:**

1. **Complexity** — upgrading from Silver to Gold mid-year requires adding nominee services, offshore records, and corporate minute maintenance retroactively
2. **Prorating** — calculating credit for unused Silver time is messy
3. **Low volume** — most customers pick the right tier at purchase; few upgrade mid-year

**Implementation:**

- Package pages show "Want to upgrade? Contact us" link
- Checkout confirmation email mentions upgrade availability
- Renewal notices suggest upgrading: "Currently on Silver? Upgrade to Gold for just $200 more per year"

**No action needed — keep as contact-us flow.**

---

## Question 14: Multi-Entity Discounts

### Current State

No multi-entity discounts on the old site.

### Recommendation: Propose 10% on 2nd Entity

**Why:**

- Privacy-focused clients often form multiple entities (holding company + operating company)
- Asset protection strategies frequently require 2–3 LLCs
- A 10% discount on the 2nd entity (and subsequent) encourages multi-entity purchases
- WY Corporate Services doesn't offer this — competitive differentiator

**Implementation:**

- Discount applied at checkout when 2+ packages are in cart
- Or: manual discount code provided after first purchase for returning customers
- Display on package pages: "Forming multiple entities? Save 10% on each additional entity."

**CONFIRM WITH DAVID:** Multi-entity discount acceptable? If yes, what percentage?

---

## Question 15: Comparison Strategy

### Current State (Prototype)

12 comparison pages already built:

- 6 pillar-based comparisons (WY vs NV for privacy, asset protection, formation; LLC vs Corp; shelf vs new; best state for privacy/AP)
- Plus cross-pillar state hub pages

### Recommendation: Add All-Packages Comparison Grid

**What's missing:** A single page where customers can see ALL packages side-by-side. Currently, comparisons are topical (WY vs NV, LLC vs Corp) but there's no "compare all packages" page.

**Proposed page:** `/compare-packages/`

- All 6 core packages + CA/FL in a filterable grid
- Filter by: State, Tier, Entity Type, Price Range
- Features listed as rows with included/not-included markers (no add-on column needed — tiers are clean)
- Sticky header with package names and prices
- Mobile: card-based view with expandable feature lists
- **Wyoming packages shown first** (70% of clients)

This page serves the customer who has already decided they need Incorporate123 but can't choose between packages. It's the final decision-making tool before checkout.

**[UPDATED]:** The comparison grid is now simpler because tiers are strictly additive. The matrix has clean "included / not included" rows with no "add-on" entries cluttering the view.

**Implementation note:** This page exists in the prototype but needs the WY Bronze column added, pricing verified, and the updated tier definitions applied.

---

## Strategic Summary [UPDATED]

### What's Resolved (from David's April 1 meeting)

1. **Tier definitions are clear and additive.** Bronze = formation + compliance. Silver = Bronze + VO + mail. Gold = Silver + nominees. No ambiguity.
2. **6 core packages confirmed.** Bronze/Silver/Gold x WY/NV. CA/FL kept for convenience but not core.
3. **Virtual Office is NOT an add-on.** It defines the Silver tier. v1 recommendation reversed.
4. **No a la carte services.** Packages only. Not profitable to offer individual services.
5. **Wyoming is the default state.** 70% of clients. Site should lead with WY everywhere.
6. **Shelf companies are two-step.** Buy entity first, then choose Bronze/Silver/Gold package on top.
7. **Gold/Silver/Bronze naming** — confirmed, universally understood.
8. **State-specific pricing** — confirmed, reflects real cost differences.
9. **No Bronze PLUS** — three tiers only, additive structure makes Bronze PLUS illogical.

### What's Still Open

1. **[STILL OPEN] Renewal pricing model** — prototype prices appear below cost for NV. David provided state fee data (WY ~$100/yr, NV $425–$700/yr) but didn't resolve the pricing model. CRITICAL.
2. **[STILL OPEN] EIN placement** — $75 add-on, included in Gold, or included in all tiers?
3. **[STILL OPEN] Operating Agreement** — $99 add-on for Silver/Bronze, or included in all tiers?
4. **[STILL OPEN] Rush Filing** — $199 add-on confirmed or not?
5. **[STILL OPEN] Foreign Registration price** — $149 (prototype) vs $450–$600 (old site). Massive gap.
6. **[STILL OPEN] Shelf company payment restrictions** — wire/crypto only, or open to credit cards?
7. **[STILL OPEN] 60-day money-back guarantee** — David hasn't confirmed.
8. **[STILL OPEN] Multi-entity discounts** — David hasn't confirmed.
9. **[STILL OPEN] Offshore integration** — consultation-only confirmed or self-service?

### What the Prototype Gets Right

1. **Gold/Silver/Bronze naming** — clear, universally understood
2. **State-specific pricing** — reflects real cost differences
3. **CA/FL as bundled packages** — simpler than a la carte Bronze PLUS + Foreign Filing
4. **Shelf Companies as separate product** — different buyer, different flow
5. **Comparison pages** — strong topical comparison coverage

### What the Prototype Needs to Change

1. **Virtual Office must move from add-on to Silver/Gold tier inclusion** — this is the biggest structural change
2. **Mail Forwarding must move from add-on to Silver/Gold tier inclusion**
3. **Add WY Bronze** — $625 entry point, 3-tier symmetry
4. **Reduce add-on list** from 6–8 items to ~2–3 confirmed items
5. **Shelf company checkout** needs two-step flow (select entity → select package)
6. **Wyoming-first ordering** throughout all package displays, comparisons, and the Package Wizard
7. **Feature matrix** on tier pages must reflect the corrected additive tier structure

### Competitive Positioning

The final package structure positions Incorporate123 in a genuine white space:

| Segment                  | Competitor            | What They Offer                 | What Inc123 Offers Better                          |
| ------------------------ | --------------------- | ------------------------------- | -------------------------------------------------- |
| Budget ($0–$399)         | ZenBusiness, Bizee    | Commodity filing, no privacy    | Privacy-first, all-inclusive pricing               |
| Mid-range ($500–$1,200)  | WY Corporate Services | Transparent pricing, WY only    | Multi-state, offshore nominees free, lower renewal |
| Premium opaque ($1,300+) | NCH Inc               | High volume, no nominees        | Nominees included, transparent pricing             |
| Ultra-premium ($2,750+)  | Anderson Advisors     | Attorney-led, consultation-only | Self-service, 1/2 the price, similar features      |

**The message:** Incorporate123 offers the only self-service, transparently priced, all-inclusive privacy formation service with year-round nominees and offshore records — at a price point 50% below consultation-gated competitors and with privacy features budget filers don't offer.

---

## Appendix: State Filing Fee Reference

### Wyoming

| Fee                                    | Amount                                   | When      |
| -------------------------------------- | ---------------------------------------- | --------- |
| Articles of Organization/Incorporation | $100                                     | Formation |
| Annual Report                          | $50 (or $0 for LLCs with < $300K assets) | Annually  |
| **Total Year 1 State Fees**            | **$100**                                 |           |
| **Total Annual State Fees**            | **~$100** (David's figure)               |           |

### Nevada

| Fee                                | Amount                         | When                 |
| ---------------------------------- | ------------------------------ | -------------------- |
| Articles of Organization           | $75                            | Formation            |
| Articles of Incorporation          | $75                            | Formation            |
| Initial List of Officers/Managers  | $150                           | Formation            |
| State Business License — LLC       | $200                           | Formation & Annually |
| State Business License — Corp      | $500                           | Formation & Annually |
| Annual List of Officers — LLC      | $150                           | Annually             |
| Annual List of Officers — Corp     | $150                           | Annually             |
| **Total Year 1 State Fees (LLC)**  | **$425**                       |                      |
| **Total Year 1 State Fees (Corp)** | **$725**                       |                      |
| **Total Annual State Fees**        | **$425–$700** (David's figure) |                      |

### California (Foreign Registration)

| Fee                            | Amount       | When      |
| ------------------------------ | ------------ | --------- |
| Statement of Information (LLC) | $20          | Biennial  |
| Annual Franchise Tax (LLC)     | $800 minimum | Annually  |
| Foreign LLC Registration       | $70          | Formation |
| **Total Year 1 Foreign Fees**  | **$890**     |           |

### Florida (Foreign Registration)

| Fee                           | Amount      | When      |
| ----------------------------- | ----------- | --------- |
| Foreign LLC Registration      | $125        | Formation |
| Annual Report                 | $138.75     | Annually  |
| **Total Year 1 Foreign Fees** | **$263.75** |           |

_Note: State fees are subject to change. Verify with Secretary of State offices before finalizing pricing._

---

_This document serves as the master strategy reference for all package-related decisions. All other deliverables (feature matrix, visual guide, pricing calculator, decision framework, competitive comparison, data reference) should be consistent with the decisions documented here._

_v2 updates reflect David's corrections from the April 1, 2026 meeting. Items marked [STILL OPEN] require follow-up before the April 6 meeting or during it._
