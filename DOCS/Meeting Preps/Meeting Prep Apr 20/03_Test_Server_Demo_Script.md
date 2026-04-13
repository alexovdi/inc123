# Test Server Demo Script — Apr 20

**Purpose:** Walk David through the live test server in ~10 minutes. This is his first time seeing the prototype live. Goal: get a thumbs-up on the build, surface any last-minute concerns, and anchor the rest of the meeting in a shared visual reference.

**Pre-demo checklist (complete before the call):**

- [ ] Test server is up and reachable
- [ ] Test server link sent to David via Telegram 24+ hours ahead
- [ ] Confirmed David can open the link on his machine (he said in Apr 13 he wanted to "look at it anytime on your own")
- [ ] Wireframe theme is the default (per MEMORY rule — do NOT switch to brand theme for demo)
- [ ] All 8 package pages resolve without errors
- [ ] Wizard flow reaches a recommendation on every branch
- [ ] Comparison table has real data from `Incorporate123_Packages_v2.xlsx`
- [ ] No console errors on any of the pages we'll demo
- [ ] Prepared fallback: local `npm run dev` on port 2121 ready to screen-share if the test server has any issue

---

## Demo Route (10 minutes, 5 stops)

### Stop 1 — Homepage (2 min)

**URL:** `/`

**What to show:**

1. Hero section — value prop: "Privacy, Asset Protection & Business Formation Specialists"
2. 4 pillar cards (Business Privacy, Asset Protection, Company Formation, Compliance)
3. Scroll to wizard section — don't start the wizard yet, just show it exists
4. Scroll past process section
5. Scroll to comparison table — let David see the 8-package lineup in Bronze → Silver → Gold order
6. Scroll to credibility stats section — flag this verbally: _"We'll decide in a few minutes whether to keep this section with real numbers or replace it."_

**Talking points:**

- "This is the v10 homepage you saw in Figma, now live and responsive."
- "Package order is Bronze → Silver → Gold per your Apr 13 call."
- "The comparison table at the bottom is driven by real data from the updated spreadsheet."
- "The credibility section is the one open item — we'll close it later in this call."

**Watch for:** any visual surprise on David's face. Pause if he reacts. Ask: _"What are you seeing?"_

---

### Stop 2 — Wizard Flow (3 min)

**URL:** Click "Get Started" / wizard entry on homepage (or direct route if configured)

**What to demo — run the happy path:**

1. Q1: "What brings you here?" → click **Business formation**
2. Q2: "What type of business?" → click **Online**
3. Q3: "Do you want your name kept off public records?" → click **Yes, keep my name private**
4. Q4: "Which state do you operate in?" → click **Wyoming**
5. Recommendation → **Wyoming Gold**

**Then demo the foreign-state branch (the critical Apr 13 fix):**

1. Back to Q4
2. Click **Another state** → California
3. Recommendation → **California Private** (the package should auto-suggest CA Private because it matches)
4. OR: select a non-WY/NV/CA/FL state (e.g. Texas) → recommendation should be WY Gold + pre-filled **Foreign State Registration upgrade for Texas** on the package/checkout page

**Talking points:**

- "This is the wizard flow you approved on Apr 13."
- "When someone picks a state that isn't WY/NV/CA/FL, we now automatically offer the foreign registration upgrade right on the package page — per your ask: _'they need to be offered the add-on right there.'_"
- "The LLC vs Corporation question happens later in the flow because it doesn't affect tier — only pricing for NV."

**Watch for:** David stopping to redirect the flow. That's fine — let him drive if he wants.

---

### Stop 3 — Package Detail Page (2 min)

**URL:** `/packages/wyoming-gold` (or equivalent)

**What to show:**

1. Package hero with name, summary, price (or "Contact us" placeholder if pricing not yet set)
2. "What's included" section — matches spreadsheet feature list
3. Tier comparison mini-widget (can user see Bronze/Silver/Gold side-by-side from here)
4. Service Upgrades section — 3 upgrades listed (Privacy Services, Executive VO, Part-Time Private Suite)
5. Government Filing Services section — 3 add-ons (Foreign State, Domestication, DBA)
6. CTA to checkout

**Talking points:**

- "Feature list is pulled directly from the spreadsheet we locked on Apr 13 — EIN is included, Operating Agreement is included, nominees are included."
- "Upgrades and Government Filings are in two separate sections per your call."
- "Pricing placeholders are where your P0 numbers from this meeting will plug in."

**If time, also show:** Wyoming Bronze, so David can confirm EIN is NOT shown there (the deliberate upsell gap) and that Operating Agreement IS shown there.

---

### Stop 4 — Compare Packages (1.5 min)

**URL:** `/compare-packages`

**What to show:**

1. The full 8-package comparison table
2. Scroll through all sections: Formation, Compliance, Virtual Presence, Privacy, CA/FL-specific
3. Point out Government Filing Services and Service Upgrades sections at the bottom

**Talking points:**

- "This is the long-form comparison that links off the homepage."
- "Same data as the spreadsheet — if you want a change to any row, it's a one-line edit in the data file and the page updates."
- "Bronze → Silver → Gold ordering per state."

**Watch for:** David asking for a row to be added/removed. Any such change is NEW SCOPE beyond Apr 13 — capture in notes, don't commit in-call.

---

### Stop 5 — Checkout Preview (1.5 min)

**URL:** `/checkout` (or package → "Get this package" CTA)

**What to show:**

1. Package selected (e.g., Wyoming Silver)
2. Optional upgrades list with checkboxes
3. Optional government filings list with state selector for Foreign State Filing
4. Running total (mocked until P0 prices lock)
5. Checkout button (not wired to payment processor yet)

**Talking points:**

- "Checkout is the final step where the foreign-state registration upgrade attaches automatically if the wizard detected a non-formation state."
- "Payment processor integration is parked — we pointed to Stripe/PayPal in Phase 1 scope. Do you want us to start that wiring, or keep it stubbed until you give us processor credentials?"
- "Pricing in the cart is placeholder until we finalize numbers in a few minutes."

---

## Post-Demo Handoff

After the walk-through, explicitly ask:

1. **"Overall impression?"** — get a sentiment read
2. **"Anything you want changed right now, or are we good to move on?"** — capture visual/UX feedback
3. **"Any page you wanted to see that I didn't show?"** — pillar pages, specific package, specific state
4. **"Ready to go through the decisions log?"** — pivots to agenda §2

---

## Contingency Plans

**If the test server is down:**

- Fall back to local dev server (`npm run dev`, port 2121) and screen-share
- Apologize once, move on — do not spend meeting time on infra debugging
- After the meeting, investigate and re-deploy

**If David wants to drive his own browser:**

- Encourage it — he asked for this on Apr 13
- Watch his screen via share
- Narrate lightly as he clicks around

**If a page errors during the demo:**

- Acknowledge calmly, navigate around it
- Capture the error in a post-demo notes file
- Don't try to fix in-call

**If David's audio glitches again (like Apr 13):**

- Text via Telegram in parallel — David prefers Telegram for fallback comms
- Slow down, pause, confirm each step was heard

**If David's battery warns (like Apr 13):**

- Immediately skip to agenda §3 (pricing) — that's the real blocking work
- Demo and decisions log can carry to next meeting; pricing can't

---

## After-Demo Notes Template

Fill out immediately after the call ends while fresh:

- **David's overall reaction:** ******\_\_\_******
- **Pages he praised:** ******\_\_\_******
- **Pages he wanted changed:** ******\_\_\_******
- **New scope requests (not in Apr 13 decisions):** ******\_\_\_******
- **Bugs observed during demo:** ******\_\_\_******
- **Net outcome:** approved / approved with changes / needs rework
