# Session Knowledge Base — March 30 to April 2, 2026

Complete reference of everything learned, decided, built, and still open from this work session. This is the master document — if you read only one file, read this.

---

## 1. David's Profile & Communication

- **Name:** David (Incorporate123 owner/operator, 25 years in business)
- **Location:** Reno, NV office, but operates on **Central Time (CT)**
- **Time offset from Alex (Lisbon):** 6 hours behind
- **Preferred meeting time:** ~9:30 AM CT / ~3:30 PM WET
- **Avoid:** Fridays (David's preference)
- **Communication:** Telegram for async, Google Meet for calls
- **Booking link:** May have expired — David reported it unavailable
- **Note:** Gemini auto-transcription labels David as "systems admin" — this is just a generic label, the speaker IS David

---

## 2. Phase 1 Status: APPROVED

David approved Phase 1 (architecture, sitemap, migration plan) on April 1, 2026 during the finalization meeting. Pending minor updates from his redline feedback on the migration map.

**What Phase 1 delivered (SOW: 36 hours, $2,520 at $70/hr):**

- Site audit (392 URLs crawled, 325 unique paths)
- Content migration map (326 URLs → 71-page architecture)
- Competitive analysis (5 competitors)
- User journey mapping (3 primary + 6 secondary)
- Redirect planning (~326 301 redirects)
- Discovery Report, Site Architecture, Positioning Framework, Section Map, Site Map

**Milestone 1 invoice (~$2,520) can be sent upon formal sign-off.**

---

## 3. Phase 2: Starting — Packages First

David confirmed Phase 2 focus is UX design, with packages as the first priority. Alex will define package structure, pages, sections, and wizard functionality.

**Next meeting:** Monday April 6, ~9:30 AM CT / ~3:30 PM WET. Topic: packages review.

---

## 4. Package Structure — David's Definitive Answers (April 1 Meeting)

### Tier Definitions (AUTHORITATIVE — supersedes all previous docs)

| Tier       | Formula                                   | David's Exact Words                                                                                                      |
| ---------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Bronze** | Basic formation + compliance              | "The bronze package is just like the basic company formation and compliance."                                            |
| **Silver** | Bronze + virtual office + mail forwarding | "If you add on like a virtual office to that bronze package, it becomes a silver package."                               |
| **Gold**   | Silver + nominee privacy service          | "The silver package and the gold package are exactly the same except for the gold package includes the nominee service." |

**Key insight:** Each tier ADDS to the one below. Nothing is removed going up. The ONLY difference between Gold and Silver is nominee privacy.

### 6 Core Packages

| Package        | State | Tier   | LLC    | Corp   |
| -------------- | ----- | ------ | ------ | ------ |
| Wyoming Gold   | WY    | Gold   | $1,275 | $1,575 |
| Wyoming Silver | WY    | Silver | $875   | $1,175 |
| Wyoming Bronze | WY    | Bronze | $625   | $625   |
| Nevada Gold    | NV    | Gold   | $1,800 | $2,100 |
| Nevada Silver  | NV    | Silver | $1,275 | $1,575 |
| Nevada Bronze  | NV    | Bronze | $699   | $899   |

### Convenience Packages (2)

| Package            | LLC    | Corp   | What It Is                        |
| ------------------ | ------ | ------ | --------------------------------- |
| California Private | $1,475 | $1,775 | WY Gold + CA foreign registration |
| Florida Private    | $1,475 | $1,775 | WY Gold + FL foreign registration |

Kept because CA and FL have the highest client volume. David: "The first thing that they see is like, oh yeah, Florida, that's me."

### Shelf Companies (separate product)

**Two-step purchase:** Customer buys existing aged entity (price by age), THEN adds Bronze/Silver/Gold package on top.

David: "Instead of forming a new company, they're just purchasing existing company. And then they have to add to that the bronze, silver, or the gold package."

| Age        | Price Range    |
| ---------- | -------------- |
| 1-3 years  | $1,500-$2,000  |
| 4-6 years  | $2,000-$2,500  |
| 7-10 years | $3,000-$4,000  |
| 10+ years  | $4,000-$5,000+ |

Payment: Wire transfer or crypto only (CONFIRM if this continues).

### Add-Ons: Only 3

The current site's add-on page (`incorporate123.co/services/add-on-services/`) lists exactly 3:

1. **Foreign State Filing** — $450-$600 (prototype: $149 — CONFIRM price)
2. **Corporate DBA (Fictitious Name)** — $50
3. **Domestication** — $500 (WY) / $750 (NV)

David: "The only thing that's really an add-on is a foreign state filing fee and perhaps a domestication."

**Everything else is INCLUDED in packages or offered post-purchase — NOT checkout add-ons.**

### No A La Carte

David: "We do not offer, have never offered a la carte services where people just want to incorporate and add a registered agent service. We don't offer that service at all because it's not profitable."

### Wyoming Is Default (70% of Clients)

- WY costs: ~$100/yr (corps and LLCs)
- NV costs: ~$700/yr (corps), ~$425/yr (LLCs)
- Most clients run virtual businesses — state doesn't matter, cheaper WY wins
- Nevada only for clients with actual NV presence or preference

David: "70% of our clients [are in] Wyoming... most clients are running virtual type businesses. So it doesn't matter where they incorporate as long as it makes sense to them."

---

## 5. What Our Docs Got Wrong (Corrections Needed)

| What We Had                         | What David Said                          | Impact                                  |
| ----------------------------------- | ---------------------------------------- | --------------------------------------- |
| Virtual Office is a $149 add-on     | Defines Silver tier (INCLUDED)           | Docs 01, 05, 07, 08 wrong               |
| 8 add-ons available                 | Only 3 true add-ons                      | Add-on lists in all docs wrong          |
| Bronze = basic (no compliance)      | Bronze includes compliance               | Feature matrix wrong for Bronze         |
| Privacy leads positioning           | Formation vs AP is primary split         | Wizard flow wrong                       |
| 5-intent wizard                     | 2-branch wizard (Formation vs AP)        | Complete wizard redesign done           |
| WY and NV presented equally         | Wyoming is default (70%)                 | Content/messaging need WY-first         |
| Shelf = standalone product          | Shelf = buy entity + choose package tier | Shelf flow needs package step           |
| Mail forwarding as add-on (redline) | Included in Silver/Gold (meeting)        | Redline pre-dates meeting clarification |

---

## 6. David's Redline Feedback (Migration Map)

Key changes from `Incorporate123_Content_Migration_REDLINE.xlsx`:

**URL Changes:**

- `/services/nevada-incorporation/` → David asks "why not /company-formation/?" (state-agnostic)
- WY Bronze → "May become tier option within WY Silver rather than standalone" (CONFLICTS with meeting)
- IRS Phantom Income → pillar changed from Formation to Asset Protection

**Items to Retire:**

- UPS 2 Day shipping
- All SB60 2013 pages (10 pages)
- Survey form
- Services page (hub)
- 6 broken 404 pages

**Items Consolidated into Packages:**

- Executive mail, executive virtual office → into package pages
- Mail forwarding (WY & NV) → package feature
- Nevada office → into NV package pages
- Nevada telephone → add-on on NV packages (post-purchase option)

**Offshore:**

- Keep pages for credibility, don't promote
- David: "I kind of want to leave the products there... gives more credibility... we're not really offering them at the moment."
- If asked: "we're not offering it at this time"

---

## 7. Post-Purchase Process (David's Description)

1. Customer places order on website (no immediate credit card charge)
2. Team reviews order, asks clarifying questions
3. Invoice issued via FreshBooks
4. Customer pays invoice online
5. After payment: file documents with state, obtain tax ID (EIN)
6. Send customer list of questions (officers, shareholders, members, etc.)
7. Prepare ~40 pages of documents (mail-merged from ACT database, ~500 fields)
8. Electronically send all documents (including bank account opening materials)
9. Annual renewal: send reminder, invoice, collect signed documents

**No customer portal currently.** David tried to build one, failed. Main blocker: ACT integration (~500 database fields, 40-page document mail merging). Discussed as potential Phase 2+ initiative.

**Post-purchase options (offered during onboarding, NOT at checkout):**

- NV Telephone Service (Verizon — client pays phone bill)
- NV Business License Tax
- County Business License

---

## 8. The Package Wizard — What We Built

### Evolution

**v1 (old):** 5 intents → tier picker (Gold/Silver/Bronze) → recommendation

- Problem: Tier picker was redundant — user picks Gold, then told "your match is Gold"

**v2 (current):** 2 branches → privacy question → auto-recommendation

- Fix: ONE privacy question determines tier automatically
  - "Do you want your name kept off public records?"
  - Yes → Gold
  - No + Virtual business → Silver (needs business address)
  - No + Brick-and-mortar → Bronze (already has physical address)
  - Asset Protection → auto-Gold (skips privacy question)

### Flow

```
Step 1: "What brings you here?"
├── Business Formation → Step 2A
└── Asset Protection → Step 2B

Step 2A: "What type of business?"
├── Virtual/Remote → Step 3 (Privacy Question)
└── Brick-and-Mortar → Step 2C (State Selection)

Step 2B: "Where do you want to form?" (AP path)
├── Wyoming (Recommended) → AUTO-RECOMMEND WY Gold (2 clicks!)
└── Nevada → AUTO-RECOMMEND NV Gold (2 clicks!)

Step 2C: "Which state?"
├── California → Step 3 (Privacy Question, CA context)
├── Florida → Step 3 (Privacy Question, FL context)
└── Another State → Step 3 (Privacy Question, other context)

Step 3: "Do you want your name kept off public records?"
├── Yes → Gold recommendation
└── No → Silver (virtual) or Bronze (B&M) auto-recommendation

Step 4: Recommendation Screen
- Context note explaining WHY (highlighted amber box)
- Primary package card with features and CTA
- 2 alternatives with REASONS (e.g., "Save $400" or "If you need Nevada")
- Trust bar: 25 Years · All-Inclusive Pricing · 30-Day Guarantee
- "Start over" link
```

### Outcome Matrix (10 paths)

| Path                                  | Clicks | Result                  | Price   |
| ------------------------------------- | ------ | ----------------------- | ------- |
| Formation → Virtual → Privacy Yes     | 3      | WY Gold                 | $1,275  |
| Formation → Virtual → Privacy No      | 3      | WY Silver               | $875    |
| Formation → B&M → CA → Privacy Yes    | 4      | CA Private              | $1,475  |
| Formation → B&M → CA → Privacy No     | 4      | WY Bronze + CA reg      | $625+   |
| Formation → B&M → FL → Privacy Yes    | 4      | FL Private              | $1,475  |
| Formation → B&M → FL → Privacy No     | 4      | WY Bronze + FL reg      | $625+   |
| Formation → B&M → Other → Privacy Yes | 4      | WY Gold + foreign reg   | $1,275+ |
| Formation → B&M → Other → Privacy No  | 4      | WY Bronze + foreign reg | $625+   |
| Asset Protection → Wyoming            | 2      | WY Gold                 | $1,275  |
| Asset Protection → Nevada             | 2      | NV Gold                 | $1,800  |

### Design Notes

- Compact layout for homepage embedding (~600px height for question steps)
- Brand colors: navy #1E3A5F, amber #D97706, green #16A34A
- Fonts: Outfit (display), Inter (body)
- CSS-only animations (300ms ease-out-expo)
- Responsive: works at 375px, 768px, 1440px
- Escape hatch "Or browse all packages →" on every step
- Shelf companies accessible via text link, not primary flow

### File Location

`DOCS/Meeting Prep Apr 6/Package_Wizard_Interactive.html` — open in any browser, no build tools needed.

---

## 9. Open Questions for David (April 6 Meeting)

### CRITICAL (blocks pricing/launch)

| #   | Question                                             | Context                                                                            |
| --- | ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 1   | WY Bronze: standalone package or tier within Silver? | Redline says "may become tier within Silver" but meeting confirmed 6 core packages |
| 2   | EIN: included free or $75 add-on?                    | Old site: free. Redline: add-on. Need final word.                                  |
| 3   | Renewal pricing model?                               | Prototype: $225-$625 flat. Old site: $575-$2,025. Which is correct?                |
| 4   | Foreign Registration price: $149 or $450-$600?       | Confirmed as add-on. Price needs verification.                                     |

### HIGH (affects feature parity)

| #   | Question                                       | Context                                                         |
| --- | ---------------------------------------------- | --------------------------------------------------------------- |
| 5   | Operating Agreement: all tiers or Gold-only?   | Old site: all. Prototype: Gold only, $99 for Silver/Bronze.     |
| 6   | NV Bronze repricing: $699/$899 correct?        | Down from $1,000/$1,300. Confirm.                               |
| 7   | Mail forwarding: add-on or included in Silver? | Redline says add-on. Meeting says included. Meeting supersedes? |
| 8   | Bank Account Opening: still offered?           | Was free on old site ($250 value). Not in prototype.            |

### MEDIUM/LOW

| #   | Question                                                | Context                                                               |
| --- | ------------------------------------------------------- | --------------------------------------------------------------------- |
| 9   | Shelf company pricing: flat or age-tiered?              | Recommend age-tiered.                                                 |
| 10  | 2nd-tier state filings: Formation, Compliance, or both? | David said "part of formation" but also acknowledged "is compliance." |
| 11  | Rush filing ($199): offer as add-on?                    | New service. David didn't mention.                                    |
| 12  | Money-back guarantee / multi-entity discount?           | Not discussed yet.                                                    |

---

## 10. Files Created This Session

### In `DOCS/Meeting Transcripts/`

- `Alex and David - 2026_04_01 - Phase 1 Finalization.md` — full transcript
- `Alex and David - 2026_04_01 - Key Takeaways and Todos.md` — structured summary

### In `DOCS/Meeting Prep Apr 6/` (18 files)

**Word Documents (5):**

- `Meeting_Decisions_Log.docx` — 17 decisions with status tracking
- `Revised_Package_Tier_Definitions.docx` — canonical Bronze/Silver/Gold
- `Revised_Wizard_Flow.docx` — David's 2-branch concept
- `Migration_Map_Redline_Notes.docx` — redline changes summarized
- `Package_Wizard_Specification.docx` — clean implementation-ready wizard spec

**Excel Spreadsheets (5):**

- `Incorporate123_Content_Migration_Map_v5.xlsx` — redline changes applied + column K change log
- `Incorporate123_Package_Definitions.xlsx` — 6 sheets (packages, features, add-ons, tiers, wizard, questions)
- `Incorporate123_Package_Service_Inventory.xlsx` — 7 sheets (exec summary through renewals)
- `Incorporate123_Current_vs_New.xlsx` — current (31 products) vs new (19 products)
- `Incorporate123_Feature_Matrix_Current_vs_New.xlsx` — feature x package matrix (15 current vs 8 new)

**Markdown v2 Documents (6):**

- `01_Package_Strategy_Analysis_v2.md` — tier defs fixed, add-ons reduced to 3, WY default
- `05_Package_Decision_Framework_v2.md` — wizard rewritten from 5-intent to 2-branch
- `06_Competitive_Package_Comparison_v2.md` — VO line fixed, WY-default emphasis
- `07_Pricing_Discrepancies_v2.md` — 5 resolved, 1 conflicting, 6 still open
- `08_Package_Data_Reference_v2.md` — sharedAddOns fixed, features corrected
- `09_Package_Wizard_Specification_v2.md` — complete flow redesign

**Interactive HTML (1):**

- `Package_Wizard_Interactive.html` — fully functional wizard, open in any browser

**Renamed:**

- `DOCS/Meeting Prep/` → `DOCS/Meeting Prep Mar 30/` (contains Discovery and Package summary from earlier)

---

## 11. Competitive Landscape (Quick Reference)

| Competitor            | Year 1 (LLC + nominees)        | Year 2 Renewal | Key Gap            |
| --------------------- | ------------------------------ | -------------- | ------------------ |
| **Incorporate123**    | $1,275 (all-inclusive)         | $525 (TBD)     | Zero reviews       |
| WY Corporate Services | $1,140 (no offshore nominees)  | ~$607+         | No offshore        |
| Anderson Advisors     | ~$2,750+ (consult required)    | ~$945+         | Can't buy online   |
| NCH Inc               | ~$1,300 (NV, no nominees)      | ~$350          | Zero privacy       |
| ZenBusiness           | $0 + fees (no nominees)        | $199-$399      | Zero privacy       |
| ShieldCorp            | ~$559 (no records maintenance) | ~$340+         | Zero trust signals |

**Inc123's unique position:** Only provider with offshore nominees included free, year-round nominee services in formation price, all-inclusive pricing with state fees, and self-service checkout.

---

## 12. State Fee Reference

|                          | Wyoming                                                  | Nevada |
| ------------------------ | -------------------------------------------------------- | ------ |
| Corp state fees (annual) | ~$100                                                    | ~$700  |
| LLC state fees (annual)  | ~$100                                                    | ~$425  |
| Why it matters           | 70% of clients choose WY because of this cost difference |

---

## 13. SOW Reference

- **Total:** $30,520-$34,720 at $70/hr
- **Discovery (Phase 1):** 36 hours, $2,520 — APPROVED
- **UX & Design (Phase 2):** 118 hours, $8,260 — STARTING
- **SEO (Phase 3):** 126 hours, $8,820
- **Development (Phase 4):** 120-180 hours, $8,400-$12,600
- **Testing & Launch (Phase 5):** 36 hours, $2,520
- **Payment:** Milestone-based, 15 business days per invoice
- **CMS:** WordPress confirmed
- **Revisions:** Up to 2 rounds per workstream included
