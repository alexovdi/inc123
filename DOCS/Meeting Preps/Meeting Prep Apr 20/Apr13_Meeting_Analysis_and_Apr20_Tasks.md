# April 13 Meeting — Analysis, Summary & Tasks for April 20

**Meeting:** Alex × David — 2026-04-13
**Topic:** Website Package Structure & Homepage Design Review
**Next meeting:** Monday, April 20 at 12:15 (noon CT zone, confirmed in-call)
**Status:** David approved homepage design direction. Package structure simplified and locked.

---

## 1. Executive Summary

This was a high-leverage working session. David and I went line-by-line through the packages spreadsheet and collapsed the legacy 15-variant package matrix down to **3 core tiers × 2 states** (Bronze / Silver / Gold for Wyoming and Nevada), plus **CA Private and FL Private** as pre-bundled convenience packages (WY Gold + foreign registration). **Shelf** is a separate two-step flow (entity purchase + tier selection) and is not a column in the comparison matrix. Everything that used to live as a separate SKU (Bronze Plus, Silver Max, Gold Executive, Gold Max, etc.) was converted into **upgrades** (not add-ons) that attach on top of a base tier.

David also approved the homepage direction — explicitly praised it as "bringing the site into 2025/2026 from 1985" — and we walked through the wizard flow together. He liked it. The one concrete change: when the wizard asks "which state do you operate in?" and the answer is a non-home state, the foreign-state registration upgrade must be offered **on the package/checkout page**, not buried.

The session had some friction — David's audio was glitching and his battery died near the end, so a few loose threads (renewal pricing, exact upgrade prices, some TBDs in the comparison) are **still open** and should go on the April 20 agenda.

> **Crosscheck note (2026-04-13, after first draft):** I re-verified this document against the authoritative spreadsheet at `DOCS/Meeting Preps/Meeting Prep Apr 6/Incorporate123_Packages.xlsx` — "New Packages" sheet. Corrections applied to the draft:
>
> 1. **Custom Operating Agreement is in ALL tiers (Bronze included)** — only **EIN** is Silver/Gold-exclusive. My first draft wrongly bundled them.
> 2. **CA Private / FL Private are Gold-tier** packages (not WY Bronze + foreign). They include nominees, VO, mail forwarding — full Gold — plus foreign registration and RA.
> 3. **Shelf is not an 8th column**. The comparison table has exactly 8 packages (WY ×3, NV ×3, CA Private, FL Private). Shelf is a separate two-step purchase journey.
> 4. **NV Business License** is NV-only (legal requirement), applied to all three Nevada tiers; not on WY or CA/FL.
> 5. **Offshore Records Storage** is checked across all 8 packages in the sheet even though it sits under the "Privacy" section header — that is by design, not a sheet bug.
> 6. Spreadsheet has a typo: "Gorvernment Filing Services" — fix when I save the next version.

---

## 2. Key Decisions (locked this meeting)

### 2.1 Package Structure — Simplified & Locked

**Core tiers (6 packages):**

- Wyoming: Bronze, Silver, Gold
- Nevada: Bronze, Silver, Gold

**Specialty packages (2):**

- California Private — WY-formed at **Gold tier** + CA foreign registration + CA registered agent
- Florida Private — WY-formed at **Gold tier** + FL foreign registration + FL registered agent

**Shelf package** — NOT a column in the spreadsheet. It's a separate two-step flow: buy existing entity → then select a tier (Bronze/Silver/Gold). Handle as its own product journey, not as a 9th column.

**Total: 8 packages** displayed on the comparison table (WY ×3, NV ×3, CA Private, FL Private).

### 2.2 Tier Differentiation — Finalized

Verified against `Incorporate123_Packages.xlsx` / "New Packages" sheet (Apr 6 folder, last saved 2026-04-13):

| Feature                                     | Bronze | Silver       | Gold         |
| ------------------------------------------- | ------ | ------------ | ------------ |
| State Filing Fees (included)                | ✅     | ✅           | ✅           |
| Document Preparation                        | ✅     | ✅           | ✅           |
| NV Business License (NV packages only)      | ✅ NV  | ✅ NV        | ✅ NV        |
| Custom Operating Agreement                  | ✅     | ✅           | ✅           |
| Bank Account Opening Document Package       | ✅     | ✅           | ✅           |
| Initial state filings and fees (Compliance) | ✅     | ✅           | ✅           |
| Corporate Records & Minutes                 | ✅     | ✅           | ✅           |
| Registered Agent (1 year)                   | ✅     | ✅           | ✅           |
| Offshore Records Storage                    | ✅     | ✅           | ✅           |
| EIN Obtainment                              | ❌     | ✅           | ✅           |
| Virtual Office Address                      | ❌     | ✅ (WY & NV) | ✅ (WY & NV) |
| Weekly Mail Forwarding                      | ❌     | ✅           | ✅           |
| Year-Round Nominee Director/Manager         | ❌     | ❌           | ✅           |
| Year-Round Nominee Officers                 | ❌     | ❌           | ✅           |

**Critical rules confirmed:**

- **EIN is the ONLY Silver/Gold-exclusive item on the formation side** — it is the deliberate upsell lever out of Bronze. (My earlier draft incorrectly listed Custom Operating Agreement here — the spreadsheet has it ✓ for ALL tiers including Bronze.)
- **Virtual Office + Weekly Mail Forwarding define the Silver tier** (available on both WY and NV).
- **Nominee services define the Gold tier** — it is the ONLY feature-level difference between Silver and Gold.
- **NV Business License** is Nevada-only (legal requirement in Nevada). WY packages and CA/FL Private do not include it.
- **CA Private and FL Private are Gold-tier packages** (H7=Gold, I7=Gold in the sheet) with nominees included, plus foreign registration and foreign RA in CA/FL. They are NOT a Bronze+foreign bundle.
- **Offshore Records Storage** is checked across **all 8 packages** in the sheet, even though it lives under the "Privacy" section header in the layout. Keep the checkmarks; the section label is just organizational.

### 2.3 Terminology — "Upgrades" not "Add-ons"

David explicitly chose the word **upgrade** over **add-on** for service-level enhancements, because it communicates "you're upgrading your package" vs. "buying random extras." Anything that attaches a service to a base package is now an **Upgrade**.

**Service Upgrades (3):**

1. Privacy Services Upgrade — year-round nominee directors/managers/officers
2. Part-Time Private Suite Upgrade
3. Executive Virtual Office Upgrade

**Government Filing Services (separate category — still called add-ons/filings):**

1. Foreign State Registration Filing — available for all 50 US states (includes filing + registered agent in that foreign state)
2. Domestication Filing — Wyoming or Nevada only
3. Corporate DBA Filing

These two groups must be **visually separated** on the page (section header + spacing).

### 2.4 Line-Item Corrections to Packages Spreadsheet

- **Line 21** — Certificate of Good Standing: **DELETE entire row** (not offered)
- **Line 26** — Corporate Seal: **DELETE entire row** (not offered)
- **Line 27/28** — Nominee Directors → "Nominee Director/Manager" (LLCs have managers, not directors)
- **Line 28** — Nominee Officers stays plural
- **Line 30** — Offshore Records Storage: check ✅ across ALL 8 package columns
- **Line 35** — CA/FL Private: must show **both** "Foreign State Registration" **and** "CA/FL Registered Agent" as separate checked lines
- **Bank Account row** — rename to "Bank Account Opening Document Package" and check across all tiers
- **Annual Report Filing** — rename to "Initial State Filings and Fees" (the annual piece happens at renewal, not formation)
- **Registered Agent** — move it under the **Compliance** section (not Virtual Presence), because it's a legal compliance requirement
- **Part-Time Private Suite Upgrade** — must have the word "Suite" spelled with the 'e' (was "Suit")

### 2.5 Wyoming = Default

Wyoming is the default state recommendation in the wizard unless the user explicitly has a Nevada presence. (Reinforces our prior Apr 6 decision.)

### 2.6 Homepage Design — APPROVED

David approved the homepage direction in full. Callouts he made:

- Hero pillar section is good
- Wizard flow is good (he said "I like it")
- Pillar cards for Business Privacy / Asset Protection / Company Formation / Compliance — good
- Comparison table placement at bottom of homepage — good
- Package ordering should be **Bronze → Silver → Gold** (low to high), not Gold first
- Public Exposure section: change "ownership is verifiable" → "**your name and association, address, and business details are visible**" (because ownership can't actually be verified from public records — it's the exposure of identifying info that's the risk)

### 2.7 Wizard Flow — Confirmed + One Fix

Wizard steps confirmed:

1. What brings you here? (formation / asset protection / compliance)
2. Business type — online vs brick-and-mortar
3. Privacy needs — "do you want your name kept off public records?"
4. Which state do you operate in?
5. Recommendation (package match)

**Fix required:** When the user picks "another state" (not WY/NV/CA/FL), the wizard must offer the **Foreign State Registration upgrade** on the package/checkout page, with the foreign state pre-selected. David was clear: "they need to be offered the add-on right there."

---

## 3. Open Questions / TBDs (carry into April 20)

These were touched but not closed on April 13 — bring them to the April 20 agenda:

1. **Upgrade pricing** — Privacy Services, Part-Time Private Suite, Executive VO — David hasn't given final prices yet. The comparison table has no pricing on the upgrade lines.
2. **Renewal pricing** — still unresolved from April 6. Prototype shows $225–$625 vs. old site $575–$2,025. Needs a straight answer.
3. **Domestication Filing pricing** — WY or NV destination only, but what's the fee?
4. **Foreign State Registration pricing** — flat fee, or state-by-state?
5. **Nevada Business License line** — confirmed we should NOT rename to "State Business License" (David said "no, we can't change that"). But the question of what goes under that row for the NV-specific tiers is still slightly fuzzy.
6. **Comparison table TBDs** — several cells were left as "TBD" during the walk-through. I need to flag each one explicitly.
7. **Numbers on credibility section** — David said "I don't know about these numbers if we want to show them." The "25 years, X clients served" section on the homepage needs real numbers or we pull the section.

---

## 4. Action Items — Alex (me)

### 4.1 Committed in-meeting

- [ ] **Deploy prototype to test server** (this week, target tomorrow — April 14)
- [ ] **Share test server link with David** (via Telegram, same channel as the meeting-day texts)
- [ ] **Continue pillar pages** (Business Privacy, Asset Protection, Company Formation, Compliance)
- [ ] **Update comparison table** with all finalized package data from this meeting

### 4.2 Derived from meeting decisions

- [ ] **Update packages spreadsheet** (`Incorporate123_Packages.xlsx`) with every line-item correction in §2.4 above. Save as a new version — do not edit in place (per doc-versioning rule in MEMORY).
- [ ] **Rebuild the 8 package pages** in the prototype to match the locked tier definitions:
  - Remove Bronze Plus / Silver Max / Gold Executive / Gold Max variants from the codebase entirely (they no longer exist)
  - Enforce **EIN visible only on Silver/Gold** (Custom Operating Agreement stays visible on ALL tiers including Bronze)
  - Ensure Silver/Gold (both WY and NV) show Virtual Office Address + Weekly Mail Forwarding as included, NOT as an upgrade
  - Ensure CA Private and FL Private are **Gold-tier** (nominees included) and show foreign state registration + CA/FL registered agent as two separate included lines
  - NV Business License line: visible and checked only on NV Bronze/Silver/Gold (not WY, not CA/FL)
- [ ] **Update package wizard** (`/data/packages.ts`, wizard components) to the locked tier logic
- [ ] **Add foreign-state-registration upgrade offer** to the checkout/package page when the user's operating state is not the formation state
- [ ] **Rename "add-ons" to "upgrades"** throughout the prototype UI — but keep Government Filing Services as a separately-labeled section
- [ ] **Reorder package cards** to Bronze → Silver → Gold everywhere (comparison table, cluster pages, homepage preview)
- [ ] **Fix homepage "Public Exposure" copy** per §2.6 (remove "ownership verifiable" wording)
- [ ] **Update compare-packages page** so compliance section contains: Initial State Filings & Fees, Corporate Records & Minutes, Registered Agent
- [ ] **Delete** Certificate of Good Standing and Corporate Seal rows from the comparison table
- [ ] **Book the April 20 meeting** — already done in-call (scheduled for 12:15 Monday April 20) ✅

### 4.3 Prep for April 20

- [ ] **Prepare an itemized pricing questions list** for David covering the TBDs in §3
- [ ] **Prepare a walk-through script** for the test server demo — show David the live package pages, wizard, checkout flow, and pillar page progress
- [ ] **Bring the updated comparison table** ready to screen-share and mark up live if needed
- [ ] **Bring a "decisions log"** showing what was locked on April 13 so David can confirm before we move forward (protects against re-litigation)

---

## 5. Risks / Watch-outs

- **Audio quality was bad** during parts of the meeting. Re-read the raw transcript and double-check nothing was misheard before committing large code changes. Specifically verify: is Bronze really supposed to include _zero_ virtual office (no base VO)?
- **David's battery died** before we could close out the credibility-numbers discussion and some TBDs. Several items listed as "decided" may actually need a light re-confirmation on April 20.
- **Shelf package** barely came up this meeting — still carrying the Apr 6 uncertainty about how tier selection works for shelf entities. Needs explicit time on April 20 agenda if we want to unblock it.
- **Renewal pricing gap remains unresolved** two meetings in a row. This is becoming a blocker — we cannot ship pricing copy without it.

---

## 6. April 20 Meeting — Proposed Agenda

1. **Demo the test server** (5–10 min) — David's first time seeing it live
2. **Confirm April 13 decisions log** — quick sign-off on §2 of this doc (3 min)
3. **Close open TBDs** — upgrade pricing, renewal pricing, domestication fee, foreign-state filing fee (15 min)
4. **Shelf package deep-dive** — tier attach mechanics (10 min)
5. **Pillar page review** — whatever is ready by Monday (15 min)
6. **Credibility numbers decision** — show them or pull the section (5 min)
7. **Next milestone + timeline check-in** (5 min)

**Target meeting length: ~60 min** (same as April 13 went).

---

_Prepared by Alex, 2026-04-13, from raw transcript `DOCS/Meeting Transcripts/Apr 13.md`._
