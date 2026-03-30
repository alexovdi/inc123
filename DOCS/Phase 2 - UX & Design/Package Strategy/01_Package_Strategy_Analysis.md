# Incorporate123 — Package Strategy Analysis

**Version:** 1.0
**Date:** March 16, 2026
**Author:** Alex (BIT Studios)
**Status:** Draft — pending David's review of pricing discrepancies (Doc 07)

---

## Executive Summary

Incorporate123's package architecture is the single most important business decision in the redesign. It determines revenue (what people buy), positioning (how the brand is perceived), and conversion (whether visitors become customers). This document analyzes 15 strategic questions, compares the old site's 12+ SKU model against the prototype's streamlined 8-package approach, and provides recommendations with specific items flagged for David's confirmation.

**Key findings:**

- The prototype's 8-package structure is strategically sound but missing WY Bronze ($625 entry point)
- Recommend 9 packages: WY Gold/Silver/Bronze, NV Gold/Silver/Bronze, CA Private, FL Private, Shelf Companies
- Gold/Silver/Bronze naming is correct — universally understood, implies quality progression
- Virtual Office conversion from tier differentiator to add-on is correct — reduces SKU complexity by 6 packages
- Renewal pricing model needs urgent clarification — prototype prices are 50–70% lower than old site
- Several add-on prices need David's confirmation, especially Foreign Registration ($149 vs $450–$600) and EIN ($75 vs free)

---

## Question 1: How Many Packages?

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

### Recommendation: 9 Packages

Add WY Bronze back. The final package lineup:

| #   | Package            | State | Tier   | LLC Price      | Corp Price     |
| --- | ------------------ | ----- | ------ | -------------- | -------------- |
| 1   | Wyoming Gold       | WY    | Gold   | $1,275         | $1,575         |
| 2   | Wyoming Silver     | WY    | Silver | $875           | $1,175         |
| 3   | Wyoming Bronze     | WY    | Bronze | $625           | $625           |
| 4   | Nevada Gold        | NV    | Gold   | $1,800         | $2,100         |
| 5   | Nevada Silver      | NV    | Silver | $1,275         | $1,575         |
| 6   | Nevada Bronze      | NV    | Bronze | $699           | $899           |
| 7   | California Private | CA    | Gold   | $1,475         | $1,775         |
| 8   | Florida Private    | FL    | Gold   | $1,475         | $1,775         |
| 9   | Shelf Companies    | WY    | Gold   | $2,000–$4,500+ | $2,000–$4,500+ |

**Why 9 and not more:**

- Research shows 3 tiers per state is optimal (decoy effect — Bronze makes Silver look reasonable, Silver makes Gold look smart)
- CA/FL are bundled packages (WY/NV formation + foreign registration), not separate tiers
- Shelf Companies are inventory-based, not a tier
- Virtual Office moved to add-on, eliminating 6 Executive/NevadaMAX SKUs

**CONFIRM WITH DAVID:** Add WY Bronze back at $625?

---

## Question 2: State-Specific vs. Unified Packages?

### Current State

State-specific packages with different pricing per state. WY and NV have different state filing fees, different compliance requirements, and different service inclusions.

### Recommendation: Keep State-Specific

A unified "Gold Package — $X" across all states is impossible because:

| Cost Component   | Wyoming   | Nevada                                                                          | Difference              |
| ---------------- | --------- | ------------------------------------------------------------------------------- | ----------------------- |
| State filing fee | $100      | $75 (articles) + $150 (initial list) + $200–$500 (business license) = $425–$725 | WY is $325–$625 cheaper |
| Registered Agent | $150/yr   | $200/yr                                                                         | NV is $50 more          |
| Nominee discount | $375 (WY) | $525 (NV)                                                                       | NV is $150 more         |
| Virtual Office   | Optional  | Strongly recommended (NV presence)                                              | Different needs         |

The $525+ cost gap between WY and NV makes unified pricing either overcharge WY customers or undercharge NV customers. State-specific pricing is correct.

**No action needed — prototype already handles this correctly.**

---

## Question 3: Naming Convention

### Current State (Old Site)

Mixed naming: "Gold (Basic)", "Gold Executive", "Gold NevadaMAX", "Bronze PLUS". The "(Basic)" qualifier on Gold is confusing — Gold should feel premium, not basic.

### SOW Reference

Section 2.4 mentions "Basic/Executive/MAX" tiers, while the Strategic Decisions document says "Gold/Silver/Bronze."

### Recommendation: Gold / Silver / Bronze

**Gold/Silver/Bronze wins because:**

1. **Universally understood** — every consumer knows Gold > Silver > Bronze
2. **Implies quality progression** — not just "basic" vs "premium"
3. **Three tiers, three names** — no confusion about sub-tiers
4. **Competitors don't use it** — ZenBusiness uses Starter/Pro/Premium, NCH uses single-tier, WCS uses price labels
5. **Works in URL slugs** — `/wyoming-private-incorporation/` (Gold), `/wyoming-incorporation/` (Silver), `/wyoming-basic-incorporation/` (Bronze)

**Drop all sub-tier names:** No more "Basic", "Executive", or "NevadaMAX". The virtual office level is now an add-on, not a package variant.

**No action needed — prototype already uses Gold/Silver/Bronze.**

---

## Question 4: Virtual Office Handling

### Current State (Old Site)

Virtual Office was a **tier differentiator** that created 3 sub-tiers per Gold/Silver:

- Basic Virtual Office ($275/yr) — included in Gold Basic and Silver Basic
- Executive Virtual Office ($575/yr) — defined Gold Executive and Silver Executive
- Part-Time Private Suite ($250/mo) — defined NevadaMAX packages

This created 6 extra package SKUs (Gold Exec, Gold MAX, Silver Exec, Silver MAX for both NV LLC and Corp).

### Prototype State

Virtual Office is a **$149 flat add-on** — available to any package.

### Recommendation: Add-On is Correct

**Why the add-on model is better:**

1. **Reduces SKUs by 6** — from 12+ to 8–9 packages
2. **Reduces decision fatigue** — customer picks tier first, then customizes with add-ons
3. **Increases transparency** — customer sees exactly what they're paying for
4. **Matches modern SaaS pricing** — base + add-ons is the expected model

**Price concern:** The old Basic Virtual Office was $275/yr. The prototype add-on is $149. This is a $126/yr reduction. Is this intentional?

**CONFIRM WITH DAVID:**

- Is $149 the correct Virtual Office add-on price?
- Does it include the same features as the old Basic Virtual Office (NV address, weekly mail forwarding, no packages)?
- Should there be a "Premium Virtual Office" add-on at a higher price point (replaces old Executive Virtual Office)?

---

## Question 5: Bronze PLUS Equivalent?

### Current State (Old Site)

NV Bronze PLUS ($1,525 LLC / $1,825 Corp) was Bronze + Nominee Services. It existed for customers who wanted privacy without the full Gold package (no virtual office, no mail forwarding).

### Prototype State

No Bronze PLUS equivalent. The gap between NV Bronze ($699) and NV Gold ($1,800) is $1,101.

### Recommendation: Don't Add Bronze PLUS Back

**Why:**

1. **"If you want privacy, get Gold"** — cleaner messaging, stronger upsell
2. **Three tiers is optimal** — four tiers triggers the "four alarms" effect (decreases trust per research)
3. **The $1,101 gap is intentional** — it makes Gold feel like a meaningful upgrade, not a marginal one
4. **Bronze PLUS would cannibalize Gold** — customers who would have bought Gold now buy Bronze PLUS and save $275 but miss out on corporate minutes, virtual office, and mail forwarding

**The correct flow:** Bronze customer sees Silver features → wants more → sees Gold features → buys Gold. No intermediate step needed.

**No action needed.**

---

## Question 6: Complete Feature Matrix by Tier

The following matrix shows what each tier should include, based on analysis of the old site features, prototype data, and competitive positioning. Items marked with **?** need David's confirmation.

### Wyoming Packages

| Feature                       |   WY Gold ($1,275)    |   WY Silver ($875)    | WY Bronze ($625) |
| ----------------------------- | :-------------------: | :-------------------: | :--------------: |
| State Filing Fees             |       Included        |       Included        |     Included     |
| Registered Agent (1 yr)       |       Included        |       Included        |     Included     |
| Year-Round Nominee Directors  |       Included        |           —           |        —         |
| Year-Round Nominee Officers   |       Included        |           —           |        —         |
| Offshore Records Storage      |       Included        |           —           |        —         |
| Corporate Minutes Maintenance |       Included        |       Included        |        —         |
| Annual Report Filing          |       Included        |       Included        |      Add-on      |
| Certificate of Good Standing  |       Included        |       Included        |      Add-on      |
| Corporate Seal                |       Included        |       Included        |        —         |
| Custom Operating Agreement    |       Included        |     Add-on ($99)      |   Add-on ($99)   |
| Weekly Mail Forwarding        |       Included        |       Included        |        —         |
| EIN Obtainment                |   **? FREE or $75**   |   **? FREE or $75**   |  **$75 add-on**  |
| Bank Account Opening          | **? FREE or dropped** | **? FREE or dropped** |        —         |

### Nevada Packages

| Feature                       |   NV Gold ($1,800)    |  NV Silver ($1,275)   | NV Bronze ($699) |
| ----------------------------- | :-------------------: | :-------------------: | :--------------: |
| State Filing Fees (all tiers) |       Included        |       Included        |     Included     |
| Registered Agent (1 yr)       |       Included        |       Included        |     Included     |
| Nevada Business License       |       Included        |       Included        |     Included     |
| Year-Round Nominee Directors  |       Included        |           —           |        —         |
| Year-Round Nominee Officers   |       Included        |           —           |        —         |
| Offshore Records Storage      |       Included        |           —           |        —         |
| Corporate Minutes Maintenance |       Included        |       Included        |        —         |
| Annual Report Filing          |       Included        |       Included        |      Add-on      |
| Certificate of Good Standing  |       Included        |       Included        |      Add-on      |
| Custom Operating Agreement    |       Included        |     Add-on ($99)      |   Add-on ($99)   |
| EIN Obtainment                |   **? FREE or $75**   |   **? FREE or $75**   |  **$75 add-on**  |
| Bank Account Opening          | **? FREE or dropped** | **? FREE or dropped** |        —         |

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
| Custom Operating Agreement            |        Included        |

**CONFIRM WITH DAVID:** EIN and Bank Account Opening inclusion per tier (see Doc 07 for details).

---

## Question 7: Add-On Availability Rules

### Current State (Old Site)

Add-ons were not clearly defined. Foreign Registration and DBA were listed on a separate "Additional Services" page. Virtual Office levels were package differentiators, not add-ons.

### Prototype State

6 shared add-ons available to all packages: Foreign Registration ($149), EIN ($75), Operating Agreement ($99), Rush Filing ($199), Virtual Office ($149), Crypto Payment ($0).

### Recommendation: Shared Add-Ons, No Restrictions

All add-ons should be available to all packages with no tier restrictions. This simplifies the checkout and avoids confusing "this add-on is only available with Gold" rules.

**Proposed Add-On List (8 items):**

| Add-On                     | Price                  | Available To                       | Notes                                               |
| -------------------------- | ---------------------- | ---------------------------------- | --------------------------------------------------- |
| Foreign Registration       | **$149 or $450–$600?** | All packages                       | CONFIRM price — see Doc 07                          |
| EIN Obtainment             | $75                    | Silver & Bronze (free in Gold?)    | CONFIRM Gold inclusion                              |
| Custom Operating Agreement | $99                    | Silver & Bronze (included in Gold) | Already in prototype                                |
| Rush Filing (24-hour)      | $199                   | All packages                       | New — good competitive add-on                       |
| Virtual Office Address     | $149                   | All packages                       | Replaces old tier differentiator                    |
| Cryptocurrency Payment     | $0                     | All packages                       | Privacy trust signal                                |
| DBA/Fictitious Name Filing | $50                    | All packages                       | CONFIRM — was on old site                           |
| Domestication Service      | $500 (WY) / $750 (NV)  | N/A (separate service)             | CONFIRM — add to checkout or keep as phone inquiry? |

**CONFIRM WITH DAVID:** Foreign Registration price, DBA inclusion, Domestication handling.

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

## Question 9: Renewal Pricing Model — CRITICAL

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

### Recommendation

The competitive analysis strongly supports lower renewal pricing:

- WY Corporate Services: ~$545+/yr (nominee + RA, before mail forwarding)
- NCH Inc: ~$350/yr (no nominees)
- ZenBusiness: $199–$399/yr (no nominees)

A **$525 all-inclusive Gold renewal** would be genuinely competitive and a strong retention tool. But it needs to cover actual costs:

- Registered Agent: $150–$200
- Nominee Services: $375–$525
- Corporate Minutes: $125
- State Fees: $50 (WY) or $350+ (NV)

For WY Gold: $150 (RA) + $375 (nominee) + $125 (records) + $50 (state) = **$700 cost basis**. A $525 renewal would be below cost.

For NV Gold: $200 (RA) + $525 (nominee) + $125 (records) + $350 (state) = **$1,200 cost basis**. A $525 renewal would be deeply below cost.

**CRITICAL CONFIRM WITH DAVID:** What is the actual renewal pricing model? The prototype numbers may not be sustainable for Nevada packages.

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

## Question 11: Shelf Company Pricing

### Current State (Old Site)

Age-tiered inventory with specific pricing per entity:

- 2020 entities (5–6 years old): $2,000–$2,500
- 2014 entities (12 years old): $4,000
- 2013 entities (13 years old): $4,500
- Wyoming Gold Renewal Package automatically added to order
- Payment: wire transfer or crypto ONLY (no credit cards for shelf purchase)

### Prototype State

Flat pricing: $2,500 (LLC) / $2,800 (Corp). No age tiers, no inventory listing.

### Recommendation: Keep Age-Tiered Pricing

**Why age-tiered is better:**

1. **Age = value** — a 13-year-old entity is genuinely more valuable than a 5-year-old one
2. **Flat pricing loses margin** — older entities are worth $4,000+ but would sell for $2,500
3. **Inventory display creates urgency** — "Only 2 entities from 2013 remaining" drives action
4. **Competitors don't offer this** — shelf companies are a unique differentiator

**Proposed pricing model:**

| Age Bracket | Price Range    | Notes               |
| ----------- | -------------- | ------------------- |
| 1–3 years   | $1,500–$2,000  | Entry-level shelf   |
| 4–6 years   | $2,000–$2,500  | Standard shelf      |
| 7–10 years  | $3,000–$4,000  | Premium shelf       |
| 10+ years   | $4,000–$5,000+ | Ultra-premium shelf |

Plus WY Gold Renewal Package added to each purchase.

**Implementation note:** The shelf company page needs a dynamic inventory table that David (or staff) can update as entities sell. This is a CMS feature for the WordPress build.

**CONFIRM WITH DAVID:**

- Keep age-tiered pricing?
- Maintain wire transfer/crypto-only payment restriction?
- How often is inventory updated?

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

**What's missing:** A single page where customers can see ALL 9 packages side-by-side. Currently, comparisons are topical (WY vs NV, LLC vs Corp) but there's no "compare all packages" page.

**Proposed page:** `/compare-packages/`

- All 9 packages in a filterable grid
- Filter by: State, Tier, Entity Type, Price Range
- Features listed as rows with included/not-included/add-on markers
- Sticky header with package names and prices
- Mobile: card-based view with expandable feature lists

This page serves the customer who has already decided they need Incorporate123 but can't choose between packages. It's the final decision-making tool before checkout.

**Implementation note:** This page exists in the prototype but may need the WY Bronze column added and pricing verified.

---

## Strategic Summary

### What the Prototype Gets Right

1. **Gold/Silver/Bronze naming** — clear, universally understood
2. **State-specific pricing** — reflects real cost differences
3. **Virtual Office as add-on** — reduces SKU complexity
4. **CA/FL as bundled packages** — simpler than a la carte Bronze PLUS + Foreign Filing
5. **Shared add-ons across all tiers** — no confusing tier restrictions
6. **Shelf Companies as separate product** — different buyer, different flow

### What Needs David's Input

1. **Add WY Bronze back** — $625 entry point, 3-tier symmetry
2. **Renewal pricing model** — all-inclusive amounts seem below cost for NV
3. **EIN inclusion** — free in Gold/Silver (old model) or $75 add-on for all (new model)?
4. **Foreign Registration price** — $149 (prototype) vs $450–$600 (old site)
5. **Bank Account Opening** — keep free service or discontinue?
6. **Shelf company pricing** — flat vs age-tiered
7. **Multi-entity discounts** — yes or no?

### What to Present to David

Use **Doc 07 (Pricing Discrepancies)** as the meeting agenda. Walk through each CRITICAL CONFIRM item. Get written decisions. Then update the prototype and all remaining documents.

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
| **Total Annual State Fees**            | **$50**                                  |           |

### Nevada

| Fee                                | Amount   | When                 |
| ---------------------------------- | -------- | -------------------- |
| Articles of Organization           | $75      | Formation            |
| Articles of Incorporation          | $75      | Formation            |
| Initial List of Officers/Managers  | $150     | Formation            |
| State Business License — LLC       | $200     | Formation & Annually |
| State Business License — Corp      | $500     | Formation & Annually |
| Annual List of Officers — LLC      | $150     | Annually             |
| Annual List of Officers — Corp     | $150     | Annually             |
| **Total Year 1 State Fees (LLC)**  | **$425** |                      |
| **Total Year 1 State Fees (Corp)** | **$725** |                      |
| **Total Annual State Fees (LLC)**  | **$350** |                      |
| **Total Annual State Fees (Corp)** | **$650** |                      |

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
