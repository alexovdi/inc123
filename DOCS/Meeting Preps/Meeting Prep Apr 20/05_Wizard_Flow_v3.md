# Package Wizard Flow — v3

**Supersedes:** `Meeting Prep Apr 6/Revised_Wizard_Flow.docx` (v1) and `Meeting Prep Apr 6/Package_Wizard_Specification.docx`
**Updated:** 2026-04-13 after the Apr 13 meeting
**Status:** Flow approved by David on Apr 13. One fix applied (foreign-state handling).

---

## Goal

Take a new visitor who doesn't know which package to buy, ask them 4–5 simple questions, and route them to the right package. The wizard should feel conversational, not like a form. Every answer should narrow the recommendation without feeling like it's excluding options.

**David's framing (Apr 13):** _"What brings you here, business formation or asset protection? Those are really two separate things."_

---

## Wizard Steps (Locked)

### Q1 — Intent

**Prompt:** _"What brings you here today?"_

**Options:**

- 🏢 I need to form a business
- 🛡️ I want to protect my personal assets
- 📋 I need compliance / annual filings

**Branching logic:**

- **"Form a business"** → continue to Q2 (standard formation flow)
- **"Protect assets"** → continue to Q2 but with asset-protection framing (tier recommendation will still land on Gold by default because nominees are the AP differentiator)
- **"Compliance"** → skip to compliance-only flow (likely a registered-agent-only product or renewal flow, not a new package purchase). Out of scope for the main wizard; pivot to a separate compliance landing page.

---

### Q2 — Business Type

**Prompt:** _"What type of business are you running (or planning to run)?"_

**Options:**

- 💻 Online / remote / digital — no physical storefront
- 🏪 Brick-and-mortar — I have a physical location

**Branching logic:**

- **"Online"** → most common answer. Virtual office makes sense. Continue to Q3.
- **"Brick-and-mortar"** → physical address likely already handled. Still continue to Q3 because privacy/nominee question is independent of physical location.

**David's note (Apr 13):** "Brick-and-mortar" users may not need the virtual office but might still need privacy — so don't prematurely drop them out of Silver/Gold.

---

### Q3 — Privacy

**Prompt:** _"Do you want your name kept off public records?"_

**Options:**

- 🔒 Yes, keep my name private
- 👤 No, I'm fine being on public records

**Branching logic:**

- **"Yes, private"** → tier will recommend **Gold** (because nominees are the ONLY feature-level difference between Silver and Gold, and they are what enables true privacy).
- **"No, public is fine"** → tier will recommend **Silver** by default (Silver gives VO + mail forwarding, which still separates home address from business without needing nominees).
- **Plus fallback:** if the Q2 answer was "brick-and-mortar" AND Q3 is "no", the recommendation could drop to **Bronze** (no VO needed, no nominees needed). This is the cheapest path and honest.

---

### Q4 — Operating State

**Prompt:** _"Which state do you operate in?"_

**Options (buttons, not a dropdown for the main 4):**

- Wyoming
- Nevada
- California
- Florida
- Another state (reveal dropdown)

**Branching logic:**

- **Wyoming** → formation state = operating state. No foreign registration needed. Recommendation = WY [tier from Q3].
- **Nevada** → formation state = operating state. No foreign registration needed. Recommendation = NV [tier from Q3].
- **California** → recommendation = **CA Private** (Gold-tier pre-bundled with CA foreign registration). This bypasses the foreign-reg upgrade because the convenience SKU exists.
- **Florida** → recommendation = **FL Private** (same logic).
- **Another state (e.g., Texas, New York, etc.)** → recommendation = **WY [tier from Q3]** PLUS auto-offer **Foreign State Registration upgrade** on the package page / checkout, with the operating state pre-selected.

**The critical Apr 13 fix:**

> When the user picks a state that requires foreign registration, the upgrade must be offered **on the package/checkout page**, not buried in a checkbox list.
> David quote: _"They need to be offered the add-on right there."_

**Implementation note:** The wizard should pass the operating state as a query param or session value through to the package page, and the package page should render the foreign-registration section prominently with the state pre-filled.

---

### Q5 — (Optional, Post-Recommendation) Entity Type

**Prompt:** _"LLC or Corporation?"_

**Options:**

- LLC (most common)
- Corporation (C-Corp or S-Corp)
- Not sure / help me decide

**Branching logic:**

- This does NOT affect tier recommendation.
- It DOES affect wording throughout the package page (e.g., "Nominee Director" vs "Nominee Manager") and pricing in NV (state fees differ).
- "Not sure" → show a help modal or inline expand with 2-3 bullets comparing the two, plus "go with LLC as default — you can change later."

**David's note (Apr 13):** For Wyoming, fees are the same for LLC and Corporation. For Nevada, they differ slightly. Entity type is a refinement, not a branch.

---

## Recommendation Screen

After Q4 (and optionally Q5), show:

1. **Matched package name** (e.g., "Wyoming Gold")
2. **One-line rationale** (e.g., _"For privacy-focused online businesses operating in Wyoming."_)
3. **Price** (when finalized) and **what's included** (top 5 bullet list)
4. **CTA:** "Get this package" → package detail page
5. **Secondary CTA:** "See all packages" → comparison table
6. **Tertiary:** "Start over" → reset wizard

**If foreign-state branch was triggered:**

- Above the CTAs, show a callout:
  > _"Because you operate in **{state}**, we'll also add **Foreign State Registration** for {state} as an upgrade. You can review this on the next page."_

---

## Wizard State Model

```
WizardState {
  intent:         "formation" | "asset_protection" | "compliance"
  businessType:   "online" | "brick_and_mortar"
  privacy:        "yes" | "no"
  operatingState: "WY" | "NV" | "CA" | "FL" | "OTHER:{stateCode}"
  entityType:     "LLC" | "CORP" | "UNSURE"     // optional, post-recommendation
}
```

Passed to the package page as:

- `?tier=gold&state=WY` (straightforward match)
- `?tier=gold&state=WY&foreignReg=TX` (WY Gold with foreign registration upgrade for Texas)
- Direct route `/packages/california-private` (CA/FL shortcut match)

---

## Recommendation Logic (Pseudocode)

```
function recommendPackage(state):
  if Q4 == "WY":
    return WY[tier]
  if Q4 == "NV":
    return NV[tier]
  if Q4 == "CA":
    return "CA Private"    // always Gold-tier, regardless of Q3
  if Q4 == "FL":
    return "FL Private"    // always Gold-tier, regardless of Q3
  if Q4 == "OTHER:{stateCode}":
    return {
      package: WY[tier],
      foreignReg: stateCode    // auto-attach upgrade
    }

function recommendTier(q2, q3):
  if Q3 == "yes_private":
    return "Gold"
  if Q3 == "no_public" and Q2 == "online":
    return "Silver"
  if Q3 == "no_public" and Q2 == "brick_and_mortar":
    return "Bronze"
  default:
    return "Silver"
```

**Edge case:** For CA/FL, the tier question is effectively moot because CA Private and FL Private are pre-bundled as Gold-tier. If a user answers "no privacy needed" but picks California, we still route them to CA Private (Gold). The alternative would be WY Silver + CA foreign reg, which is strictly cheaper — consider whether to offer this as a toggle on the recommendation screen.

**Flag for David on Apr 20:** _"If a CA user doesn't want privacy, do we still recommend CA Private (Gold), or do we offer them the cheaper WY Silver + foreign reg path?"_

---

## What Changed From v2 (Apr 1 → Apr 13)

| Area                          | v2 (Apr 1)                                    | v3 (Apr 13)                                              |
| ----------------------------- | --------------------------------------------- | -------------------------------------------------------- |
| Q1 intent                     | 2 options (formation / AP)                    | 3 options (+ compliance, which routes out)               |
| Foreign-state handling        | Fuzzy — "you might need foreign registration" | **Auto-offered on package page with pre-selected state** |
| CA/FL branch                  | Returned WY + foreign reg                     | Returns **CA Private / FL Private** pre-bundled SKUs     |
| Entity type (LLC/Corp)        | Branching question                            | Post-recommendation refinement, doesn't affect tier      |
| Brick-and-mortar + no privacy | Silver                                        | Can drop to **Bronze** (honest cheapest path)            |
| Terminology                   | "Add-on"                                      | **"Upgrade"**                                            |

---

## Out of Scope for v3

Items David did NOT bring up and I am NOT building into the wizard:

- Number of employees
- Annual revenue estimate
- Number of owners/members
- Credit history / risk questions
- Existing business (new vs aged entity) — that's the Shelf product flow, handled separately
- Multi-state operations (operating in 3+ states) — niche case, route to sales contact form

These can come back in future iterations if data shows we need more signal.

---

## UX Patterns

- **One question per screen.** No forms with multiple fields.
- **Big tappable buttons** for options, not radio buttons.
- **Progress indicator** (1 of 4) at top.
- **Back button** on every step except Q1.
- **Skip button** — wait, no. David did not call for this. Don't add it. Every question is answerable and shouldn't be skippable.
- **Mobile-first** — the wizard is the first interaction on mobile, sizing must be generous.
- **No dead ends** — every path leads to a package recommendation. The "compliance" option in Q1 is the only exit route, and it routes to a proper landing page, not a dead end.

---

## Implementation Checklist (for prototype)

- [ ] Wizard component renders 4 screens + recommendation screen
- [ ] State persists in session (refresh shouldn't lose progress)
- [ ] Back button restores previous answers
- [ ] Q4 "Another state" reveals dropdown of remaining states (exclude WY/NV/CA/FL from dropdown)
- [ ] Recommendation screen routes correctly for all 8 package outcomes
- [ ] Foreign-reg branch passes state code to package page
- [ ] Package page renders foreign-reg upgrade as a prominent, pre-checked section when `foreignReg` param is present
- [ ] CA/FL direct routes work (`/packages/california-private`, `/packages/florida-private`)
- [ ] Analytics events fire on every question answered + final recommendation
- [ ] Works with wireframe theme (default per MEMORY rule — do NOT switch to brand for demo)

---

## Open Questions for David on Apr 20

(Cross-referenced in `02_Open_Questions_And_Pricing.md`)

1. **CA/FL override:** If user picks CA/FL but says "no privacy," do we still recommend CA/FL Private (Gold), or offer the cheaper WY Silver + foreign reg alternative?
2. **Compliance-only flow:** Is there a product David wants to sell to users who pick "compliance" in Q1, or should we route them to a contact form?
3. **Entity type impact:** Any copy that should change based on LLC vs Corp beyond the "Director/Manager" swap?
4. **Multi-state:** Any plans for a multi-state-operator flow? (Current answer: no, treat as sales contact.)
