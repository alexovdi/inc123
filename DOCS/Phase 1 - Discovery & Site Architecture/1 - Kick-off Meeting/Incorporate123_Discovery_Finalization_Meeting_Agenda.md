# Incorporate123 — Discovery Finalization Meeting Agenda

**Meeting Type:** Discovery Phase Sign-Off & Phase 2 Kickoff
**Attendees:** Alex (BIT Studios), David (Incorporate123)
**Estimated Duration:** 45–60 minutes
**Date:** ********\_********
**Meeting Link:** ********\_********

---

## Pre-Meeting Prep (Alex)

- [ ] Have prototype running at localhost:2121
- [ ] Have Discovery Report v2, Architecture v2, and Positioning Framework v2 open
- [ ] Have Response to David Comments open for reference
- [ ] Have SOW Final open for payment milestones discussion
- [ ] Prepare screen share for competitive analysis highlights

---

## Agenda

### 1. Opening & Context Setting (5 min)

**Goal:** Reframe where we are and what today's meeting accomplishes.

**Talking Points:**

- "We're at the end of Phase 1 — Discovery & Strategy. Today I want to walk you through what we found, show you the prototype, and get your sign-off so we can move into the next phase."
- Phase 1 = 36 hours of discovery work — site audit, competitive analysis, content migration mapping, user journey mapping, and the Discovery Report
- Everything discussed today is documented in the v2 deliverables (revised per your comments from March 11)

**Key Number:** 392 URLs crawled on your current site — 2.3x larger than the initial 171-URL estimate

---

### 2. Discovery Findings Review (10 min)

**Goal:** Present the headline findings so David understands the strategic foundation.

**Talking Points:**

- **Site Audit Results:**
  - 325 unique URL paths (67 trailing-slash duplicates removed)
  - 319 live pages, 6 broken internal links
  - 0 of 319 pages have H1 tags — critical SEO failure
  - 73% of pages share duplicate title tags (209 share one generic title)
  - Learning Center = 242 URLs (62% of the site) — 188 FAQ items across 24 categories
- **Content Migration:**
  - All 326 URLs mapped to destinations in the new ~71-page architecture
  - ~27 truly new pages needed (down from 34 after your review)
  - 78% URL reduction with zero content loss
  - ~326 301 redirects planned
- **Competitive Landscape:**
  - 5 competitors analyzed: NCH, Anderson Advisors, ShieldCorp, WY Corporate Services, ZenBusiness
  - No competitor combines: modern UX + privacy-first architecture + transparent pricing + nominee services
  - 90% of privacy/AP SERP positions held by non-specialists (law firms, publishers)
  - 5,500–9,500 monthly searches available in privacy/AP keywords with minimal competition
  - Anderson has shifted to consultation-gated model — opportunity for self-service differentiation
- **Your Feedback Incorporated (v2):**
  - Reclassified 7 pages from "New" to "Enhance" (existing content acknowledged)
  - BOI/CTA page removed entirely per your guidance
  - Compliance pillar expanded from 7→9 pages (added 2nd-tier filings + shares)
  - Trust signals completely reworked — anonymized, no office photos or founder details
  - Domain reversed: .co stays primary, .com redirects

---

### 3. Prototype Demo (10 min)

**Goal:** Show David the working prototype — make it real.

**Demo Route (localhost:2121):**

1. **Homepage** (`/`) — Hero, pillar CTAs, trust signals, package links
2. **Privacy Pillar** (`/privacy`) — Lead pillar, cluster navigation, progressive disclosure
3. **Package Page** (e.g., `/packages/wyoming-gold`) — 3-tier comparison, add-ons, pricing layout
4. **Compare Packages** (`/compare-packages`) — Side-by-side comparison table
5. **State Hub** (e.g., `/wyoming`) — Cross-pillar geographic entry point
6. **Checkout Flow** (`/checkout`) — Multi-step: configure → details → payment → confirmation
7. **FAQ** (`/faq`) — Consolidated from 188 Learning Center items
8. **About** (`/about`) — Trust signals, 25-year track record

**Key Points to Emphasize During Demo:**

- "This is a working prototype with real navigation — click through it like a visitor would"
- Show the Education → Specifics → Comparison → Package → Checkout journey
- Point out progressive disclosure (80/20 content model)
- Show mobile responsive behavior if possible
- Emphasize: all 50+ routes return HTTP 200, 0 TypeScript errors

---

### 4. Blocking Questions for David (15 min)

**Goal:** Resolve the must-answer questions that block Phase 2 progress.

_See separate document: Questions for David — Discovery Finalization_

**Priority items to cover:**

1. Architecture sign-off (4-pillar structure, ~71 pages)
2. Package tier naming and pricing display preference
3. Hosting decision (current host vs. recommended)
4. Review platform choice (Trustpilot vs. Google Business)
5. Content writing responsibility confirmation
6. Who needs to be in approval loop beyond David

---

### 5. SOW & Payment Milestones (5 min)

**Goal:** Confirm commercial terms and next payment milestone.

**SOW Summary (Detailed Final):**

| Workstream           | Hours       | Rate   | Subtotal            |
| -------------------- | ----------- | ------ | ------------------- |
| Discovery & Strategy | 36          | $70/hr | $2,520              |
| UX & Design          | 118         | $70/hr | $8,260              |
| SEO Strategy         | 126         | $70/hr | $8,820              |
| Development          | 120–180     | $70/hr | $8,400–$12,600      |
| Testing & Launch     | 36          | $70/hr | $2,520              |
| **Total**            | **436–496** |        | **$30,520–$34,720** |

**Payment Milestones:**

| Milestone            | Trigger                                          | Approx. Amount |
| -------------------- | ------------------------------------------------ | -------------- |
| 1. Kickoff           | Discovery complete, architecture confirmed       | ~$2,520        |
| 2. Homepage Approved | Homepage prototype + visual design signed off    | ~$4,130        |
| 3. Core Templates    | Pillar, Package, Comparison templates signed off | ~$4,130        |
| 4. Full Design + SEO | All templates + all SEO specs delivered          | ~$8,820        |
| 5. Development       | CMS build complete, staging ready                | $8,400–$12,600 |
| 6. Launch            | Testing, QA, go-live, monitoring                 | ~$2,520        |

**Talking Points:**

- Milestone 1 (Discovery) is essentially complete — invoice upon today's sign-off
- Milestone-based = you pay as you see deliverables, not upfront
- 15 business days payment terms per invoice
- Up to 2 revision rounds per workstream included

---

### 6. Next Steps & Scheduling (5 min)

**Goal:** Lock in the immediate next actions and meeting cadence.

**Post-Meeting Actions:**

1. David: Formal sign-off on architecture (email confirmation sufficient)
2. David: Send sample Word mail merge document with field structure
3. David: Collect existing testimonials for site content
4. David: Confirm GA4/GSC access for Irish (i.sailago@bitstudios.com)
5. Alex: Invoice Milestone 1 (~$2,520)
6. Alex: Begin homepage wireframe (within 24 hours of sign-off)
7. Alex: Schedule first prototype review meeting (1 week from approval)
8. Alex: Send recurring meeting link (2x/week, ~9:30–10:30 AM PST, avoid Fridays)

**Meeting Cadence:**

- 2x/week, 30 minutes each
- ~9:30–10:30 AM PST preferred
- David schedules a week ahead via booking link
- Avoid Fridays (David's preference from Mar 3 meeting)

---

## Post-Meeting Checklist (Alex)

- [ ] Send meeting summary email to David within 24 hours
- [ ] Invoice Milestone 1 if sign-off received
- [ ] Begin homepage wireframe sprint
- [ ] Schedule next meeting via booking link
- [ ] Update project-log.md with meeting outcomes
- [ ] Flag CRM modernization as potential upsell discussion for Jeff

---

_Prepared by BIT Studios — March 2026_
