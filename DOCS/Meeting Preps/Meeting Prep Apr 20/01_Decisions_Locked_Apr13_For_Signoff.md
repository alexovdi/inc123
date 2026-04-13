# Apr 13 Meeting — Decisions Locked (for David's Signoff on Apr 20)

**Purpose:** Walk David through every decision we locked on April 13, get explicit verbal confirmation, then treat this document as the canonical source of truth. Any future drift from these decisions requires a new explicit decision — not a re-interpretation.

**How to use this in the meeting:** Share this on screen. Read each section aloud. Ask David: _"Confirm?"_ For each confirmation, mark the ☐ as ✅ in the live doc. If David disagrees, capture the correction in-line and update.

---

## §1. Package Count & Structure

☐ **8 packages total** on the website comparison matrix:

- Wyoming Bronze, Wyoming Silver, Wyoming Gold
- Nevada Bronze, Nevada Silver, Nevada Gold
- California Private
- Florida Private

☐ **Shelf is NOT in the matrix.** It's a separate two-step product flow: buy existing entity → pick a tier. Handle it as its own journey.

☐ **All 15+ legacy variants are eliminated** (Bronze Plus, Silver Max, Gold Executive, Gold Max, etc.). Anything that used to be a SKU is now either a base tier or an upgrade.

☐ **Wyoming is the default** recommendation in the wizard unless the user has an explicit Nevada presence.

---

## §2. Tier Differentiation (Feature Matrix)

### Formation features

| Feature                                  | Bronze | Silver | Gold  |
| ---------------------------------------- | ------ | ------ | ----- |
| State filing fees                        | ✅     | ✅     | ✅    |
| Document preparation                     | ✅     | ✅     | ✅    |
| NV Business License _(NV packages only)_ | ✅ NV  | ✅ NV  | ✅ NV |
| Custom Operating Agreement               | ✅     | ✅     | ✅    |
| Bank Account Opening Document Package    | ✅     | ✅     | ✅    |
| **EIN Obtainment**                       | ❌     | ✅     | ✅    |

☐ **EIN is the ONLY formation-side Silver/Gold-exclusive item.** Everything else at formation is in all tiers. EIN is the deliberate upsell lever from Bronze → Silver.

☐ **Custom Operating Agreement IS included in Bronze.** (David was explicit: "it's included in all of them." My first draft had this wrong; corrected Apr 13.)

### Compliance features — all tiers

| Feature                        | Bronze | Silver | Gold |
| ------------------------------ | ------ | ------ | ---- |
| Initial state filings and fees | ✅     | ✅     | ✅   |
| Corporate records & minutes    | ✅     | ✅     | ✅   |
| Registered agent (1 year)      | ✅     | ✅     | ✅   |
| Offshore records storage       | ✅     | ✅     | ✅   |

☐ **Registered Agent moved under Compliance** (was under Virtual Presence). It's a legal requirement, not a privacy/presence feature.

☐ **Certificate of Good Standing — DELETED.** Not offered. Remove from all templates and comparison tables.

☐ **Corporate Seal — DELETED.** Not offered.

☐ **"Annual Report Filing" renamed to "Initial State Filings and Fees."** The annual piece happens at renewal, not at formation.

### Virtual Presence — Silver & Gold only

| Feature                | Bronze | Silver | Gold |
| ---------------------- | ------ | ------ | ---- |
| Virtual Office Address | ❌     | ✅     | ✅   |
| Weekly Mail Forwarding | ❌     | ✅     | ✅   |

☐ **Virtual Office Address + Weekly Mail Forwarding = what defines Silver.** Available in both WY and NV.

### Privacy — Gold only

| Feature                             | Bronze | Silver | Gold |
| ----------------------------------- | ------ | ------ | ---- |
| Year-Round Nominee Director/Manager | ❌     | ❌     | ✅   |
| Year-Round Nominee Officers         | ❌     | ❌     | ✅   |

☐ **Nominee services are the ONLY feature-level difference between Silver and Gold.**

☐ **"Director" renamed to "Director/Manager"** to cover both corporation and LLC structures.

---

## §3. CA Private & FL Private

☐ **Both are Gold-tier packages** (with nominees, VO, mail forwarding — full Gold) formed in Wyoming, plus foreign state registration and foreign-state registered agent in CA or FL respectively.

☐ **Two separate line items** on the comparison for CA/FL Private:

1. "CA or FL Foreign State Registration"
2. "CA or FL Registered Agent"

These are displayed as INCLUDED on the CA/FL Private columns, and DASHED on the 6 core WY/NV packages.

---

## §4. Upgrades vs Add-Ons — Terminology

☐ **"Upgrades" is the canonical word** for service-level enhancements. Not "add-ons." David was explicit: "upgrade" communicates _"you're upgrading your package"_ vs. _"buying random extras."_

### Service Upgrades (3)

1. **Privacy Services Upgrade** — adds year-round nominee director/manager + officers. Effectively upgrades Bronze/Silver to Gold-level privacy.
2. **Executive Virtual Office Upgrade** — upgrades the basic VO that ships with Silver/Gold to an executive-grade VO.
3. **Part-Time Private Suite Upgrade** — physical part-time suite access at the NV location. ("Suite" spelled with the 'e' — not "Suit".)

### Government Filing Services (3) — still called Add-Ons

1. **Foreign State Registration Filing** — available for all 50 US states. Includes both the filing AND the registered agent service in the foreign state.
2. **Domestication Filing** — destination is Wyoming or Nevada only.
3. **Corporate DBA Filing.**

☐ **The two groups are visually separated** on the package page with their own section headers (Service Upgrades vs. Government Filing Services).

---

## §5. Wizard Flow

☐ **Wizard step order (locked):**

1. What brings you here? → (business formation / asset protection / compliance)
2. Business type → (online / brick-and-mortar)
3. Privacy needs → "Do you want your name kept off public records?"
4. Which state do you operate in?
5. Recommendation → matched package

☐ **Foreign-state handling:** If user picks a state that is NOT the formation state (i.e. not WY, and not NV if NV was chosen), the wizard routes them to the package/checkout page and **offers the Foreign State Registration upgrade with the foreign state pre-selected.** David quote: _"they need to be offered the add-on right there."_

☐ **LLC vs Corporation is a separate, later question** — the fees for WY are the same for both, so it doesn't affect tier recommendation. For NV, tier is the same but pricing adjusts. It is a post-recommendation refinement, not a wizard branch.

---

## §6. Homepage Design

☐ **Overall direction APPROVED.** David quote: _"Complete change. Brings us into 2025, 2026 from 1985."_

☐ **Homepage section order is approved:**

1. Hero with value proposition
2. Four pillar cards (Business Privacy, Asset Protection, Company Formation, Compliance)
3. Wizard section ("Customer guidance wizard")
4. Process/How-it-works
5. Comparison table (the 8 packages, with real spreadsheet data)
6. Credibility/stats section — **flagged for review** (see §7)

☐ **Package cards display order: Bronze → Silver → Gold** (low to high), not Gold first. Across the comparison table, cluster pages, and homepage preview.

☐ **Public Exposure section copy fix:** Change _"ownership is verifiable"_ → _"your name and association, address, and business details are visible."_ Because ownership cannot actually be verified from public records — it's the exposure of identifying info that's the actual risk.

---

## §7. Pending from Apr 13 (explicitly flagged)

These were touched but not closed. They are carried to Apr 20 (see `02_Open_Questions_And_Pricing.md`).

- All pricing — base packages, upgrades, government filings, renewals
- Credibility/stats numbers on homepage — show real numbers or pull the section
- Shelf package two-step flow — mechanics not discussed in detail
- Comparison table TBDs — specific cells left blank

---

## §8. In-Meeting Commitments (Apr 13)

David's commitments: _(none that I'm waiting on)_

Alex's commitments:

- Deploy prototype to test server (target Apr 14)
- Share test server link via Telegram
- Continue pillar pages
- Update comparison table
- Book next meeting — **DONE** in-call (Apr 20, 12:15 CT)

---

## Signoff

**Alex confirmation:** Document reflects my understanding of the Apr 13 meeting to the best of my ability, cross-checked against the authoritative spreadsheet `Incorporate123_Packages_v2.xlsx` and the raw transcript.

**Alex signed:** 2026-04-13
**David signed:** ********\_******** (to be filled in during Apr 20 meeting)

Once David signs off, this document becomes the locked baseline. Any departure from these decisions in future work is a regression and must be flagged.
