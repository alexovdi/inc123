# Phase 1 Finalization — Questions for David & Phase 2 Blockers

**Purpose:** Resolve open questions and unblock Phase 2. Organized by urgency.
**Date:** March 2026
**Instructions:** Mark answers during the meeting. Anything David can't decide on the spot — note for follow-up within 3 business days.

---

## BLOCKING Phase 2 — Must Resolve in This Meeting

### 1. Architecture Sign-Off

**Question:** Do you approve the 4-pillar, ~75-page site architecture as presented in the v4 deliverables?

**What's in scope:**

- 4 pillars: Business Privacy (10 pages), Asset Protection (9), Company Formation (11), Compliance (10)
- 8 package pages, 4 state hubs, 6 offshore pages, 9+ utility pages
- ~326 301 redirects covering every current URL
- ~27 truly new pages (down from 34 after your review, 7 reclassified)
- 3 taxation pages added per your feedback (v3): Entity Tax Guide, LLC vs S-Corp Tax, Tax Obligations

**Changes since your March 11 review:**

- v3: Added 3 taxation pages (72→75 total)
- v4: FAQ item-level content audit with word counts and duplicate detection

**What we need:** Verbal approval today, email confirmation within 24 hours.

**David's answer:** ******\_\_\_******

---

### 2. SOW Signature

**Question:** Are you ready to sign the SOW (Detailed Final version)?

**Key terms:**

- Total: $30,520-$34,720 (316 fixed + 120-180 dev hours at $70/hr)
- 6 milestone-based payments — pay as you see deliverables
- 10-week overlapping timeline
- 2 revision rounds per workstream included
- 15 business days payment terms

**Why it matters:** Without a signed SOW, we cannot invoice Milestone 1 or formally authorize Phase 2 work.

**David's answer:** ******\_\_\_******

---

### 3. Package Tier Naming

**Question:** Gold/Silver/Bronze or Basic/Executive/MAX?

**Context:** The Strategic Decisions document and all v2-v4 deliverables use **Gold/Silver/Bronze**. However, SOW Section 2.4 references "Basic/Executive/MAX" in one paragraph. These are different naming conventions and we need one canonical answer.

| Tier                         | Gold/Silver/Bronze | Basic/Executive/MAX |
| ---------------------------- | ------------------ | ------------------- |
| Premium (Privacy + Nominees) | Gold               | MAX                 |
| Standard (Formation)         | Silver             | Executive           |
| Budget (NV only)             | Bronze             | Basic               |

**Recommendation:** Gold/Silver/Bronze — it's intuitive, connotes quality tiers, and matches all current deliverables.

**David's answer:** ******\_\_\_******

---

### 4. Pricing Display

**Question:** Show exact prices on the website, or gate them?

**Options:**

- **A) Transparent pricing (recommended)** — Exact prices on package pages. Self-service checkout. Competitive advantage: Anderson moved to consultation-gated model, can't buy online anymore. David confirmed at March 3 meeting: "Get the information out there quickly, provide a packaged solution, and then purchase online right away."
- **B) "Starting at $X"** — Ballpark on comparison pages, full pricing on package pages. Builds curiosity but adds friction.
- **C) "Contact for Quote"** — Requires sales infrastructure David has said he doesn't want. Would mirror Anderson's model.

**Recommendation:** Option A — transparent pricing. It's your competitive advantage over Anderson's new hard-sell model.

**David's answer:** ******\_\_\_******

---

### 5. Content Writing Responsibility

**Question:** Who writes the page content for ~75 pages?

**SOW language:** "Page copywriting and content creation (Client-supplied, using our SEO specs and content briefs)" — listed as out of scope.

**Options:**

- **A) David writes content** using our SEO specs, keyword targets, content briefs, and page templates
- **B) David hires a copywriter** — we provide the specs, copywriter writes
- **C) BIT Studios writes content** as a change order (additional hours at $70/hr)

**Why it matters:** Content is on the critical path. We start providing content briefs as soon as Architecture is approved. The content pipeline needs to run in parallel with design — if content isn't ready, development stalls.

**David's answer:** ******\_\_\_******

---

## IMPORTANT — Resolve Within 1 Week

### 6. Hosting Provider

**Question:** Where should the new site be hosted?

**Sub-questions:**

- Where is the current site hosted?
- Do you want us to recommend a provider?
- Any requirements? (US-based servers, specific uptime SLA, budget)

**Note:** Since we're using Payload CMS (not WordPress), hosting requirements are different from traditional WP hosting. We need a Node.js-capable host (Vercel, Railway, Render, DigitalOcean, AWS, etc.).

**David's answer:** ******\_\_\_******

---

### 7. Review Platform

**Question:** Which review platform should we integrate?

**The trust gap:** Incorporate123 currently has **zero reviews** on any public platform. Competitors: NCH has 12,263 Trustpilot reviews, WY Corporate Services has 1,271, ZenBusiness has 25,821. This is the biggest credibility challenge for the redesigned site.

**Options:**

- **Trustpilot** — Most recognized for service businesses. David mentioned "working on this" previously.
- **Google Business Profile** — Free, integrated with search results.
- **Both** — Trustpilot widget on site + Google reviews for local visibility.

**Recommendation:** Start with Trustpilot (widget on site), add Google Business as secondary.

**David's answer:** ******\_\_\_******

---

### 8. Testimonials Collection

**Question:** Can you collect and send existing testimonials?

**Context:** David confirmed at March 3 meeting there are testimonials on the current site sidebar and "probably have more saved somewhere."

**What we need:**

- Existing testimonials from current site (we can scrape these as fallback)
- Any additional testimonials David has saved
- Permission to use client first names or initials only (privacy-appropriate)
- Willingness to request new reviews from satisfied clients at/before launch

**David's answer:** ******\_\_\_******

---

### 9. GA4 & Search Console Access

**Question:** Can you share GA4 and GSC access with our SEO team?

**Details:**

- Irish needs viewer/editor access: **i.sailago@bitstudios.com**
- Known issue: admin@incorporate123.co is locked out — fresh install may be needed
- We need baseline data for before/after comparison post-launch

**David's answer:** ******\_\_\_******

---

### 10. Word Mail Merge Sample

**Question:** Can you send the sample Word mail merge document we discussed on March 3?

**Context:** David described a "mergeable database record in Word" with ~100 fields that merges from the ACT database. He said he'd have his staff send it. This document helps us understand the data structure for potential future CRM integration.

**Note:** CRM integration is out of current scope — this is for future planning only.

**David's answer:** ******\_\_\_******

---

## CMS Confirmation — IMPORTANT

### Payload CMS (NOT WordPress)

**Question:** Are you aligned on Payload CMS as the content management system?

**Context:** Some documents (including portions of the SOW and the v4 Discovery Report's technical recommendations) reference WordPress. **WordPress was never the intended direction.** The prototype is built on a modern stack that aligns with Payload CMS 3.x — a headless CMS with:

- Visual admin panel for content editing
- Built-in authentication and access control
- API-first architecture for the self-service checkout flow
- No plugin security vulnerabilities (a chronic WordPress problem)
- Better performance characteristics for a ~75-page content site

**Why this matters:** Hosting requirements, development approach, and maintenance costs all differ between WordPress and Payload CMS. We need to be on the same page.

**SOW correction needed:** Section referencing WordPress should be updated to Payload CMS before signing.

**David's answer:** ******\_\_\_******

---

## Open Contradictions to Flag

### 1. Tier Naming: Gold/Silver/Bronze vs. Basic/Executive/MAX

| Document            | Says                    |
| ------------------- | ----------------------- |
| Strategic Decisions | Gold / Silver / Bronze  |
| SOW Section 2.4     | Basic / Executive / MAX |

**Action:** Confirm naming in this meeting (Question #3). Update SOW before signing if needed.

### 2. Page Count Evolution

| Version         | Page Count              |
| --------------- | ----------------------- |
| SOW (original)  | ~71 pages               |
| Architecture v2 | ~71 pages               |
| Architecture v3 | ~75 pages (+3 taxation) |
| Architecture v4 | ~75 pages (confirmed)   |

**Action:** SOW references ~71 pages. Actual architecture is ~75. No scope or cost impact — additional pages use existing cluster templates. Note the discrepancy when signing.

### 3. CMS Platform References

| Document            | Says                                       |
| ------------------- | ------------------------------------------ |
| SOW                 | References WordPress                       |
| Task Status doc     | "CMS platform: DONE — WordPress confirmed" |
| Discovery Report v4 | "Build on WordPress with custom templates" |
| Actual direction    | Payload CMS 3.x                            |

**Action:** All WordPress references need correction. Payload CMS is the intended platform. Correct in SOW before signing.

### 4. Domain Strategy

| Document                         | Says                              |
| -------------------------------- | --------------------------------- |
| Strategic Decisions (pre-review) | Migrate to incorporate123.com     |
| Response to David v2/v3          | Stay on incorporate123.co         |
| Architecture v4                  | "Domain decision to be confirmed" |

**Action:** David's stated preference is .co. Strategic Decisions document needs updating. Confirm in this meeting.

---

## NICE TO HAVE — Follow Up Later

### 11. Logo Direction

**Question:** Keep current logo, simple wordmark, or new design?

David at March 3: "I'm not really attached to anything in particular that's on the website right now." Anderson doesn't use a prominent logo either.

**Options:** A) Text-based wordmark (fastest), B) New logo design (separate engagement), C) Refresh current

**David's answer:** ******\_\_\_******

---

### 12. Brand / Color / Typography Preferences

**Question:** Any color, typography, or visual style preferences?

Current site uses blue/gold. David has no strong attachment. Share 2-3 sites whose visual style you like — competitor or non-competitor.

**David's answer:** ******\_\_\_******

---

### 13. Tone of Voice Confirmation

**Question:** Does "Authoritative, Educational, Transparent, Reassuring, Precise" sound right?

Positioning Framework v2 recommends the tone of a knowledgeable advisor — not a salesperson, not a law firm.

**David's answer:** ******\_\_\_******

---

### 14. Competitor Sites Liked/Disliked

**Question:** Any websites (competitor or not) whose visual design you like or dislike?

Useful for the visual design phase. Examples help us calibrate the design direction faster than abstract descriptions.

**David's answer:** ******\_\_\_******

---

## Summary: Decision Tracker

| #   | Item                       | Priority     | Decided? | Answer |
| --- | -------------------------- | ------------ | -------- | ------ |
| 1   | Architecture sign-off      | BLOCKING     | [ ]      |        |
| 2   | SOW signature              | BLOCKING     | [ ]      |        |
| 3   | Tier naming                | BLOCKING     | [ ]      |        |
| 4   | Pricing display            | BLOCKING     | [ ]      |        |
| 5   | Content writing            | BLOCKING     | [ ]      |        |
| 6   | CMS confirmation (Payload) | BLOCKING     | [ ]      |        |
| 7   | Domain confirmation        | IMPORTANT    | [ ]      |        |
| 8   | Hosting provider           | IMPORTANT    | [ ]      |        |
| 9   | Review platform            | IMPORTANT    | [ ]      |        |
| 10  | Testimonials               | IMPORTANT    | [ ]      |        |
| 11  | GA4/GSC access             | IMPORTANT    | [ ]      |        |
| 12  | Mail merge sample          | IMPORTANT    | [ ]      |        |
| 13  | Logo direction             | NICE TO HAVE | [ ]      |        |
| 14  | Brand preferences          | NICE TO HAVE | [ ]      |        |
| 15  | Tone of voice              | NICE TO HAVE | [ ]      |        |
| 16  | Visual references          | NICE TO HAVE | [ ]      |        |

---

_Print this document. Mark answers during the meeting. Follow up on unanswered items within 3 business days._

_Prepared by BIT Studios — March 2026_
