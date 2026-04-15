# State Hub Facts — Questions for David

**Context:** We're implementing the new Wyoming State Hub spec (and extrapolating to Nevada, California, Florida hubs). The spec is structurally solid, but three factual numbers conflict across source documents. We need David's confirmation before hardcoding them into `states.ts` and the four pillar pages.

**Priority:** P0 — blocks content rewrite for all 4 state hubs + 4 pillar pages + 1 cluster page.

**Estimated time:** 10 minutes.

---

## 1. Wyoming Annual Report Fee — **$50 or $62?**

**The conflict:**

| Source                                                                                                            | Number                                             |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| New "Enchanced New Specs" — Wyoming Hub, AP Pillar, Formation Pillar, Anonymous LLC Cluster (4 files, consistent) | **$50/yr**                                         |
| Old `09_State_Hub.md`                                                                                             | $62/yr                                             |
| Old `06a_Pillar_Page_v10_Blueprint.md`                                                                            | $62/yr                                             |
| Current prototype `states.ts`                                                                                     | $62/yr                                             |
| Wyoming Secretary of State (reality check)                                                                        | ~$60 License Tax minimum + $2 online fee ≈ **$62** |

**The ask:**
The new specs picked up "$50" and propagated it across 4 files. Reality check on the Wyoming SoS website suggests $62 is more accurate (the License Tax minimum is $60 for entities with assets below $300K, plus a $2 online processing fee). Which number do you want us to standardize on?

**Why it matters:** This number appears in the WY hub hero fact strip, the "Why Wyoming" advantage block, the FAQ answer on annual costs, the WY vs NV comparison table, and cross-references on 3 pillar pages + 1 cluster page. We need one canonical number.

**Action after meeting:** Update `states.ts:13`, `states.ts:28`, `states.ts:184` and all 4 new specs to match David's chosen number.

---

## 2. Nevada Annual Maintenance Cost — **$350/yr or $500+/yr?**

**The conflict:**

| Source                                                                      | NV Annual Cost                                                   |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| New Wyoming Hub spec — "Nevada's $500+/yr (annual list + business license)" | **$500+/yr**                                                     |
| New Formation Pillar spec — "NV annual list $150, NV business license $350" | **$500/yr combined**                                             |
| Old `09_State_Hub.md`                                                       | "$350 annual fee + ~$425 filing"                                 |
| Current prototype `states.ts`                                               | "$150+" annual list + "$200/year" business license = **$350/yr** |
| Nevada SoS (reality check, post-2019 rate increase)                         | $150 Annual List + $200 State Business License = $350/yr minimum |

**The ask:**
The new specs quote "$500+/yr" for Nevada annual costs. The actual Nevada Secretary of State fee schedule (Annual List $150 + State Business License $200 minimum) totals $350/yr for most small entities. What's the right number to quote on the site?

Possible explanations for the $500 figure:

- Includes a registered agent fee markup?
- Assumes entity above the $4M Commerce Tax threshold?
- Assumes corporate vs LLC (NV Corp business license is higher)?

**Why it matters:** This is the single biggest "why Wyoming beats Nevada" comparison point on the site. If we over-quote NV costs, knowledgeable visitors will bounce on the accuracy issue. If we under-quote, we weaken the Wyoming pitch.

**Action after meeting:** Update `states.ts:211-212` and all 4 new specs to match David's chosen number.

---

## 3. Wyoming Filing Fee — **$100** (confirm)

**The conflict:** None, but we want explicit confirmation.

**The ask:**
New specs quote Wyoming's LLC/Corp filing fee as **$100**. This matches the Wyoming SoS schedule. Confirm $100 for both LLC and Corp? (Currently the prototype hero fact strip does NOT show filing fee at all — we're adding it per spec.)

---

## 4. Tax Foundation Ranking — **"13 consecutive years"?**

**The ask:**
The new Wyoming Hub spec cites the Tax Foundation's State Business Tax Climate Index: _"Wyoming has been ranked #1 for 13 consecutive years."_ We want to cite this as a trust signal, but need to verify:

1. Is "13 consecutive years" current? (The claim needs a year count that's accurate as of launch, not as of when the spec was written.)
2. Is this Wyoming Corporate Services' talking point, or is it independently verifiable via taxfoundation.org?
3. Do you want us to cite the source by name ("Tax Foundation") or just use the ranking?

**Why it matters:** Trust signals like this only work if they're accurate. If the year count is wrong, knowledgeable visitors will catch it.

---

## 5. Wyoming Chancery Court — **Operational status?**

**The ask:**
The new spec has the Chancery Court as both a hero fact and a dedicated FAQ answer. We want to confirm:

1. **Is it actually operational?** The court was enacted 2019 and activated 2023 per public records — has it handled cases yet?
2. Should we position it as _"established 2023"_ or _"operational since 2023"_ or _"new in 2023"_?
3. Is this a real differentiator for our target client, or is it inside-baseball legal positioning?

**Why it matters:** The spec leans on this as a "Wyoming is like Delaware now" claim. If the court is more aspirational than operational, we should soften the framing.

---

## 6. Wyoming Formation Timeline — **3–5 or 5–7 business days?**

**The conflict:**

| Source                                                                                               | Timeline                          |
| ---------------------------------------------------------------------------------------------------- | --------------------------------- |
| New Wyoming Hub spec — "Standard filing with the Wyoming Secretary of State takes 3–5 business days" | 3–5 days                          |
| Current prototype `states.ts:40` — "5–7 business days standard formation"                            | 5–7 days                          |
| New spec — "Complete document package typically delivered within 5–7 business days of your order"    | 5–7 days (combined filing + prep) |

**The ask:**
Can we align on a single filing window? Our current claim is 5–7 days; the new spec breaks this into "3–5 days with SoS + 5–7 days total." Which should appear in (a) the advantage block, (b) the FAQ, and (c) the checkout confirmation?

---

## 7. Renewal Pricing Context

While we're on state facts — confirming Gold renewal pricing per tier (for FAQ answers and comparison tables):

| Package    | Formation | Renewal (current data)          |
| ---------- | --------- | ------------------------------- |
| WY Bronze  | $625      | $225/yr                         |
| WY Silver  | $875      | $325/yr                         |
| WY Gold    | $1,275    | **$525/yr**                     |
| NV Bronze  | $699      | $225/yr                         |
| NV Silver  | $1,275    | $325/yr                         |
| NV Gold    | $1,800    | **$525/yr** (spec says $725/yr) |
| CA Private | $1,475    | $525/yr                         |
| FL Private | $1,475    | $525/yr                         |

**The ask:**
The new Anonymous LLC Cluster spec line 635 says _"Nevada Gold: $1,800 formation, $725/yr renewal."_ Current `packages.ts:437` has NV Gold renewal at $525/yr. Which is correct?

---

## Decision log — fill in during meeting

| Question                  | David's Answer         | Notes                                |
| ------------------------- | ---------------------- | ------------------------------------ |
| 1. WY annual report fee   | $\_\_\_\_              |                                      |
| 2. NV annual cost         | $\_\_\_\_/yr           | Breakdown: $\_**\_ list + $\_\_** BL |
| 3. WY filing fee          | $\_\_\_\_              |                                      |
| 4. Tax Foundation years   | \_\_\_\_               | Source: \_\_\_\_                     |
| 5. Chancery Court framing | ****\_\_\_\_****       |                                      |
| 6. WY formation timeline  | \_\_\_\_ business days |                                      |
| 7. NV Gold renewal        | $\_\_\_\_/yr           |                                      |

---

_Once these 7 items are locked, we can finalize content rewrites across 4 state hubs, 4 pillar pages, 1 cluster page, and the prototype `states.ts` in a single commit. Blocker removal for Phase 3 content work._
