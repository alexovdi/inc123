# Package Tier Definitions — v3

**Supersedes:** `Meeting Prep Apr 6/Revised_Package_Tier_Definitions.docx` (v1, Apr 1, 2026)
**Updated:** 2026-04-13 after the Apr 13 meeting
**Status:** Locked, pending David's Apr 20 signoff on `01_Decisions_Locked_Apr13_For_Signoff.md`
**Source of truth:** `Incorporate123_Packages_v2.xlsx` — "New Packages" sheet

---

## Tier Philosophy

Three tiers. Each tier adds exactly one category of value over the previous one. No overlap, no a la carte, no "Plus" or "Max" variants.

```
BRONZE:  Formation + Compliance
SILVER:  Bronze + Virtual Presence (VO + mail)
GOLD:    Silver + Nominee Privacy
```

**The ONE exception:** EIN Obtainment is the only formation-side feature that is NOT in Bronze. EIN is included in Silver and Gold. This is a deliberate upsell lever — most serious customers want an EIN, and that creates a natural pull from Bronze → Silver at the decision moment.

---

## Bronze — "Formation + Compliance"

**Positioning:** The affordable entry point. For customers who want a properly formed entity and ongoing compliance handling, and don't need virtual presence or nominee privacy.

**Who picks this:** DIY-minded entrepreneurs, budget-conscious first-timers, customers who already have a physical business address and don't need privacy infrastructure.

**Included:**

- State filing fees (formation)
- Document preparation
- Custom Operating Agreement
- Bank Account Opening Document Package
- Corporate records & minutes
- Registered agent (1 year)
- Offshore records storage
- Initial state filings and fees
- NV Business License (Nevada variants only)

**Not included (and this is intentional):**

- EIN Obtainment → customer pays separately or upgrades to Silver
- Virtual office address
- Weekly mail forwarding
- Nominee privacy services

**Upsell hook:** "Need an EIN? Virtual mailing address? Bronze doesn't include those. Upgrade to Silver."

---

## Silver — "Bronze + Virtual Presence"

**Positioning:** The mainstream choice. Adds the virtual office infrastructure that most small business owners need — a real business address that isn't their home, plus mail forwarding.

**Who picks this:** Online businesses, remote operators, anyone who doesn't want their home address on public records. Most first-time customers end up here.

**Included (everything in Bronze, plus):**

- EIN Obtainment _(the Bronze-exclusion line)_
- Virtual Office Address
- Weekly Mail Forwarding

**Not included:**

- Year-round nominee director/manager
- Year-round nominee officers

**Upsell hook:** "Want your name completely off public records? Upgrade to Gold and we act as nominees for you."

---

## Gold — "Silver + Nominee Privacy"

**Positioning:** The complete privacy package. For customers who want to be invisible in public records — Incorporate123 provides nominee directors/managers and officers so the customer's name never appears.

**Who picks this:** Privacy-conscious professionals, high-net-worth individuals, people with lawsuit exposure, customers who explicitly answered "yes" to "do you want your name kept off public records?" in the wizard.

**Included (everything in Silver, plus):**

- Year-Round Nominee Director / Manager
- Year-Round Nominee Officers

**That's it.** Nominees are the ONLY feature-level difference between Silver and Gold. This is intentional — it makes the upgrade decision cleanly single-axis: _"Do I want my name visible or not?"_

---

## CA Private

**Definition:** California Private is a **Gold-tier package formed in Wyoming**, bundled with California foreign state registration and a California registered agent. It exists as a convenience SKU so a California resident doesn't have to manually select Wyoming Gold and then add foreign registration.

**Equivalent manual build:** `WY Gold + Foreign State Registration (CA) + CA Registered Agent`

**Who picks this:** California residents/operators who want the full Gold privacy package without navigating the foreign-state-registration upgrade flow.

**Feature list:** All of WY Gold, plus:

- CA Foreign State Registration
- CA Registered Agent

---

## FL Private

**Definition:** Florida Private is a **Gold-tier package formed in Wyoming**, bundled with Florida foreign state registration and a Florida registered agent. Same mechanic as CA Private, scoped to Florida.

**Equivalent manual build:** `WY Gold + Foreign State Registration (FL) + FL Registered Agent`

**Feature list:** All of WY Gold, plus:

- FL Foreign State Registration
- FL Registered Agent

---

## Shelf Package

**NOT a column in the comparison matrix.** Shelf is a separate two-step product flow:

1. Customer browses shelf entity inventory (existing aged entities available for purchase)
2. Customer selects one
3. Customer then picks a tier (Bronze / Silver / Gold) to attach

**Pricing:** TBD — still open question for David on Apr 20. See `02_Open_Questions_And_Pricing.md` §P1.

**Website treatment:** Own landing page, linked from the Company Formation pillar page and the footer. Not surfaced in the main wizard flow.

---

## Tier Attachment Matrix (Visual Summary)

```
                     Bronze    Silver    Gold
                     ------    ------    ----
Formation             ✓         ✓        ✓
Operating Agreement   ✓         ✓        ✓
Compliance            ✓         ✓        ✓
Bank Acct Docs        ✓         ✓        ✓
Offshore Records      ✓         ✓        ✓
EIN Obtainment        —         ✓        ✓   ← upsell lever #1
Virtual Office        —         ✓        ✓   ← tier definition (Silver)
Mail Forwarding       —         ✓        ✓
Nominee Dir/Mgr       —         —        ✓   ← tier definition (Gold)
Nominee Officers      —         —        ✓
NV Business Lic.      ✓ NV      ✓ NV     ✓ NV  (Nevada packages only)
```

---

## WY vs NV Tier Parity

The tier **feature matrix is identical** between Wyoming and Nevada packages, with one exception: NV packages include the NV Business License (which is a Nevada legal requirement, not a feature).

**Pricing between WY and NV will differ** (NV has higher state fees and the business license cost), but the feature structure is the same. David confirmed in Apr 13 that NV is only appropriate for customers with an actual Nevada presence — Wyoming is the default for everyone else.

---

## Upgrade Paths (How Customers Move Between Tiers)

### At purchase time (via wizard or manual selection)

- Pick one tier. Done.

### Post-purchase tier upgrade

- Customer contacts support → pays the difference → tier is upgraded in their account. Apr 6 doc confirmed this is a supported flow.

### Post-purchase à la carte (via Service Upgrades)

- Instead of upgrading the whole tier, customer can attach individual upgrades:
  - **Privacy Services Upgrade** — adds nominees to a Bronze or Silver (effectively Gold-level privacy without the Silver-level VO if on Bronze).
  - **Executive Virtual Office Upgrade** — upgrades basic VO to executive-grade (Silver/Gold only).
  - **Part-Time Private Suite Upgrade** — adds physical NV suite access.

**Edge case warning:** If a customer is on Silver and adds the Privacy Services Upgrade, they now have nominees + VO + mail — which is functionally equivalent to Gold. Price should reflect this equivalence or we create an arbitrage opportunity. **Flag for David on Apr 20 pricing conversation.**

---

## What Changed From v2 (Apr 1 → Apr 13)

| Area                                                 | v2 (Apr 1)                                 | v3 (Apr 13)                                                                                |
| ---------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Package count                                        | ~15 variants                               | 8 packages (6 core + 2 specialty)                                                          |
| Bronze Plus / Silver Max / Gold Executive / Gold Max | Separate SKUs                              | Eliminated — now upgrades                                                                  |
| Custom Operating Agreement                           | Silver/Gold only (wrong)                   | **All tiers incl. Bronze**                                                                 |
| Virtual Office variants                              | 3 levels (Basic, Executive, Private Suite) | 1 basic VO (Silver/Gold), Executive VO as upgrade, Private Suite as upgrade                |
| CA/FL Private                                        | Fuzzy definition                           | **Gold-tier** (WY Gold + foreign reg + foreign RA)                                         |
| Terminology                                          | "Add-ons"                                  | **"Upgrades"** for service enhancements, "Add-ons" reserved for Government Filing Services |
| Certificate of Good Standing                         | Included                                   | **DELETED** — not offered                                                                  |
| Corporate Seal                                       | Included                                   | **DELETED** — not offered                                                                  |
| Registered Agent placement                           | Virtual Presence section                   | **Compliance section**                                                                     |
| "Annual Report Filing" label                         | As-is                                      | Renamed **"Initial State Filings and Fees"**                                               |
| Nominee Director                                     | "Director"                                 | **"Director / Manager"** (covers LLC + Corp)                                               |
| Default state                                        | Not explicit                               | **Wyoming is default** unless NV presence                                                  |

---

## Deprecated Terms (do not use)

- ❌ "Bronze Plus" / "Silver Max" / "Gold Executive" / "Gold Max" — all collapsed into base tiers + upgrades
- ❌ "Basic Virtual Office" as a tier descriptor — VO is binary now (Silver/Gold have it, Bronze does not)
- ❌ "Add-on" for Privacy / Executive VO / Private Suite — these are **upgrades**, not add-ons
- ❌ "Annual Report Filing" — use "Initial State Filings and Fees" for the initial-year line, separate "Renewal" for year-2+
- ❌ "Certificate of Good Standing" on any package tier list
- ❌ "Corporate Seal" on any package tier list
- ❌ "Nominee Director" without "/ Manager" suffix

---

## Canonical Reference

When there is any ambiguity about what's in a tier, the source of truth is:

`DOCS/Meeting Preps/Meeting Prep Apr 20/Incorporate123_Packages_v2.xlsx` → "New Packages" sheet

If the spreadsheet and this doc disagree, **the spreadsheet wins** and this doc should be updated to match.
