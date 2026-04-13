# Open Questions & Pricing Asks for David — Apr 20

**How to use:** Go through this list with David during agenda block §3. Priority-ordered. Do not leave the meeting with P0 items unresolved.

**Scoring:**

- **P0** = blocking. Cannot ship without.
- **P1** = high value. Want to close today.
- **P2** = nice to have. Can carry another week if needed.

---

## P0 — Base Package Pricing (8 numbers)

We have feature definitions locked. We have zero final prices. Everything downstream (checkout, comparison copy, marketing) is blocked until we have numbers.

| Package    | Proposed price | Notes                                                       |
| ---------- | -------------- | ----------------------------------------------------------- |
| WY Bronze  | **$**\_****    | Formation + compliance, no VO, no EIN                       |
| WY Silver  | **$**\_****    | Bronze + EIN + VO + mail forwarding                         |
| WY Gold    | **$**\_****    | Silver + year-round nominees                                |
| NV Bronze  | **$**\_****    | Formation + compliance + NV business license, no VO, no EIN |
| NV Silver  | **$**\_****    | NV Bronze + EIN + VO + mail forwarding                      |
| NV Gold    | **$**\_****    | NV Silver + year-round nominees                             |
| CA Private | **$**\_****    | WY Gold + CA foreign registration + CA RA                   |
| FL Private | **$**\_****    | WY Gold + FL foreign registration + FL RA                   |

**Questions to drive the conversation:**

- Should Bronze be positioned as a real entry-point (low anchor) or only as a "compare-to" that nudges toward Silver?
- What's the intended $ gap between Bronze→Silver and Silver→Gold? Equal steps or steeper at the top?
- What's the price relationship between WY and NV at each tier? Flat premium, or percentage?
- CA/FL Private: is this priced as WY Gold + a flat "private state" premium, or as a line-item bundle (Gold + foreign fee + foreign RA fee)?

---

## P0 — Renewal Pricing (2nd meeting carry-over)

This was open on Apr 6 and still open on Apr 13. It is becoming a credibility issue internally — we cannot ship pricing copy without it.

**Current prototype values:** $225 – $625 (range across tiers)
**Current old-site values:** $575 – $2,025 (range across tiers)
**Gap:** ~$350 – $1,400 depending on tier

**Questions for David:**

- Which set of numbers is real? Prototype or old site?
- If neither, what are the real renewal prices?
- Does the renewal price differ by tier? (I.e. renewing a Gold costs more to maintain than renewing a Bronze because nominees are recurring — but does the customer see that as one renewal SKU or broken out?)
- Is renewal pricing the same for WY and NV, or different?

**Until this is resolved, the /renewal page and tier detail pages display "Contact us" instead of a price, which is a conversion killer.**

---

## P1 — Service Upgrade Pricing (3 numbers)

| Upgrade                          | Proposed price | Attach rules                                                                    |
| -------------------------------- | -------------- | ------------------------------------------------------------------------------- |
| Privacy Services Upgrade         | **$**\_****    | Attaches to Bronze or Silver. Redundant if user already bought Gold.            |
| Executive Virtual Office Upgrade | **$**\_****    | Attaches to Silver or Gold (upgrades the basic VO that ships with those tiers). |
| Part-Time Private Suite Upgrade  | **$**\_****    | Attaches to any tier. Physical NV location.                                     |

**Context David gave on Apr 13:** The Executive VO used to sell as a $300 add-on (per the stray N37 note in the original spreadsheet). Is that still the target?

**Questions:**

- Are these priced as one-time or recurring?
- If recurring, do they show on the renewal page too?
- Can multiple upgrades stack? (e.g., Silver + Privacy Upgrade + Executive VO Upgrade — is that allowed, or does it conflict with just buying Gold?)

---

## P1 — Government Filing Service Fees (3 numbers)

These are the true add-ons (separate category from service upgrades).

| Service                           | Proposed price | Notes                                            |
| --------------------------------- | -------------- | ------------------------------------------------ |
| Foreign State Registration Filing | **$**\_****    | Includes filing + foreign-state registered agent |
| Domestication Filing              | **$**\_****    | Destination is WY or NV only                     |
| Corporate DBA Filing              | **$**\_****    |                                                  |

**Questions:**

- Foreign State Registration: is the fee flat across all 50 states, or does it vary by state? (Some states have much higher filing fees than others.)
- If variable, do we quote a base fee + state fee, or a single all-in price per state?
- Is the foreign-state registered agent included in the filing fee, or is it a separate annual recurring charge?
- Domestication Filing: flat fee, or different for WY vs NV destination?

---

## P1 — Shelf Package Mechanics

Barely touched on Apr 13 but still open from Apr 6.

**Questions:**

- How does the two-step flow work UX-wise? User picks a shelf entity → then picks a Bronze/Silver/Gold tier? Or tier first → then pick a shelf entity?
- Does buying a shelf entity add a one-time premium on top of the selected tier? (E.g., Silver $X + Shelf premium $Y.)
- Are shelf entities state-specific (e.g., only WY shelf entities available), or can they be in any state?
- What's the current shelf inventory — how many, what states, what ages?
- Should shelf even be in the main navigation, or is it a deep-link-only product that only certain customers get pointed to?

**Recommendation from Alex:** Keep shelf out of the main wizard and main comparison matrix. Put it on its own page linked from the footer and the formation pillar page. Unless David has a strong reason to surface it more prominently.

---

## P2 — Homepage Credibility Numbers

David quote (Apr 13): _"I don't know about these numbers if we want to show it."_

The homepage currently has a "25 years / N clients served / N states" section. David hesitated on whether to show real numbers.

**Decision needed:**

- **Option A:** Show real numbers. David provides them.
- **Option B:** Use soft phrasing ("Trusted by thousands" / "Over 25 years" / "All 50 states") with no hard numerics.
- **Option C:** Remove the section entirely and replace with something else (e.g., a quote or testimonial strip).

**Recommendation from Alex:** Option B is safest — keeps the credibility signal without committing to numbers that could later be challenged or become stale.

---

## P2 — Comparison Table TBDs

Several cells in the Apr 6 comparison spreadsheet were left as "TBD." Now that the v2 spreadsheet is rebuilt and all feature rows are cleanly ✓ or —, there should be no TBDs left on the feature side. **The only TBDs now are prices** (see P0/P1 above).

Flagged for David to confirm: nothing on the feature side is marked TBD anymore. If David flags a feature he wants added/removed during the demo, that's new scope — we handle it as a change request.

---

## P2 — Pillar Page Content Ownership

Who writes the final copy for the 4 pillar pages?

- **Option A:** BIT (Alex) drafts all copy, David reviews and redlines.
- **Option B:** David writes core messaging, BIT structures and polishes.
- **Option C:** Hybrid — BIT drafts Business Privacy and Asset Protection (technical topics), David drafts Formation and Compliance (business topics).

**Recommendation from Alex:** Option A (BIT drafts, David reviews). Keeps velocity high and avoids another round-trip bottleneck on David's schedule.

---

## P2 — Next Meeting Cadence

- Weekly Monday calls confirmed through Apr 20. Continue weekly?
- Target next meeting: **Mon April 27, 12:15 CT.**
- Or drop to bi-weekly once pricing is locked and we're in pure build mode?

---

## Parking Lot (not for Apr 20 unless David raises)

- Final Stripe/PayPal checkout integration details — payment processor accounts
- CMS migration timeline — when does WordPress content get migrated
- SEO redirect plan (170 redirects) — who owns, when
- Analytics / tracking setup — GA4, tag manager, conversion events
- Content migration for legacy blog posts

---

## Meeting Debrief Template

After the Apr 20 call, fill this out:

- **P0 items closed:** \_\_\_/2
- **P1 items closed:** \_\_\_/3
- **P2 items closed:** \_\_\_/4
- **New items surfaced:** ******\_\_\_******
- **Blockers identified:** ******\_\_\_******
- **Next meeting booked:** ****\_\_\_****
