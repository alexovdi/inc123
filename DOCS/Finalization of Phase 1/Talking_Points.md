# Phase 1 Finalization — Talking Points & Demo Script

**For:** Alex (BIT Studios)
**Meeting:** Phase 1 Closure with David
**Date:** March 2026

---

## Opening Frame (5 min)

### Set the Context

David said on March 3: _"We're scheduling meetings, but you haven't even started any work yet."_ That was fair at the time — he hadn't seen the deliverables yet. Now he has. The opening must reframe where we actually are.

**Say:**

> "David, this is our first meeting since the March 3 kickoff. I want to walk you through what's happened since then, because a lot has been done. We completed all Phase 1 discovery work — that's 36+ hours of research across your current site, competitors, content migration, and user journeys. You gave us detailed feedback on March 11, and we incorporated every single comment into revised deliverables. We're now on version 4 of the Discovery Report. Today's goal is simple: review the findings, show you the working prototype, and get your sign-off so we can move into UX design and development."

**Do NOT say:**

- "This is our kickoff" (it's not — kickoff was March 3)
- "We're just getting started" (we've completed an entire phase)
- Anything that minimizes the work already done

---

## Findings to Cite (10 min)

### Site Audit — Lead with the Headline Numbers

| Say                                          | Number                                | Why It Matters                                  |
| -------------------------------------------- | ------------------------------------- | ----------------------------------------------- |
| "Your site is 2.3x larger than we estimated" | 392 URLs vs. 171 estimated            | Shows thoroughness of audit                     |
| "Not a single page has an H1 tag"            | 0 of 319 pages                        | Most impactful SEO finding — easy to understand |
| "73% of your pages share duplicate titles"   | 224 pages, 209 with one generic title | Search engines can't tell pages apart           |
| "The Learning Center is 62% of the site"     | 242 of 325 URLs                       | Explains the consolidation strategy             |
| "We mapped every URL to a destination"       | 326 URLs → ~75 pages                  | Zero content loss despite 78% reduction         |

**Key quote to deliver:**

> "Every single one of your 319 pages is missing the most important SEO element — the H1 tag. That alone explains a lot about search visibility. We're fixing this across the entire new site."

### Content Migration — Frame the Consolidation

> "We're going from 325 unique URLs down to about 75 pages. That sounds like we're cutting content, but we're not — we're reorganizing it. Every FAQ item, every learning center article, every service page has been assigned a specific home in the new architecture. Nothing is being deleted."

### Your Feedback Made It Better

> "Your March 11 comments improved the architecture. You caught 7 pages we called 'new' that actually had existing content — we reclassified those. You told us BOI is no longer relevant — we removed it entirely. You identified existing compliance pages we should bring under the new pillar — we expanded it from 7 to 10 pages. And you asked about taxation — we added 3 new pages for that. The architecture went from 71 to 75 pages, and it's stronger because of your input."

---

## Competitive Insights (2-3 min within Findings section)

### Anderson's Shift — This Is Good News

> "Anderson Advisors — your closest competitor — has completely changed their model since you last checked. They've moved to consultation-gated pricing. You can't buy anything on their website anymore. They want you to call, schedule with an advisor, and get the hard sell. This is the same model NCH uses. It means the self-service, transparent-pricing approach we're building for you is now a direct competitive advantage. Nobody in the privacy formation space lets you research, compare, and buy online."

### The SEO Gap — Nobody's There

> "Across the 10 most relevant privacy and asset protection keywords, your five competitors hold only 5 positions out of a possible 50. The other 90% are law firms and publishers who educate but can't convert. That's 5,500 to 9,500 monthly searches where the competition is informational sites, not formation companies. We're building the architecture to capture that traffic."

### ZenBusiness — Not Your Competition

> "ZenBusiness has 25,000+ reviews and the best UX in the industry, but they explicitly disclaim offering anonymous LLC services. They're a budget formation company — $0 plus state fees. Different audience, different business entirely. Your competition is Anderson and Wyoming Corporate Services, and both have significant weaknesses we can exploit."

---

## Prototype Demo Script (10 min)

### Before Starting

- Have localhost:2121 running in a clean browser window
- Share screen
- Click through as a visitor would — don't just scroll

### Stop 1: Homepage (`/`)

> "This is the front door. Notice we lead with privacy — your number one selling point. The pillar CTAs guide visitors by intent, not by state. Trust signals are up top — 25 years, all-inclusive pricing, phone support. No personal details, no office photos, just as you requested."

### Stop 2: Privacy Pillar (`/privacy`)

> "This is the lead pillar — where most of your prospects will land from search. Look at the cluster navigation: Anonymous LLC, Nominee Services, state-specific privacy pages, California and Florida Private Incorporation. Each one is a targeted landing page for specific search queries. The progressive disclosure pattern shows concise information first for the 80% who scan, with expandable sections for the 20% who want to go deep."

### Stop 3: Cluster Page (`/clusters/anonymous-llc`)

> "This is what a deep-dive page looks like. Educational content up top, FAQ section pulled from your Learning Center items, and a package CTA when the visitor is ready. Notice the breadcrumb — they always know where they are in the architecture."

### Stop 4: Package Page (`/packages/wyoming-gold`)

> "This is where conversion happens. Three-tier comparison so visitors can see exactly what Gold includes that Silver doesn't. Transparent pricing — no 'call for a quote.' Add-on options below. This is exactly what Anderson can no longer offer."

### Stop 5: Compare Packages (`/compare-packages`)

> "Side-by-side comparison across all packages. No competitor has systematic comparison pages for privacy services. This is a decision-support tool — it reduces friction for visitors who know they want privacy but aren't sure which state or tier."

### Stop 6: State Hub (`/wyoming`)

> "For visitors who search by state — this page connects all Wyoming content across all four pillars. Formation, privacy, asset protection, compliance — all from one entry point. This is the bridge between the old geography-first model and the new intent-first model."

### Stop 7: Checkout (`/checkout`)

> "Self-service ordering. Configure the package, enter entity details, payment, confirmation. No phone calls required. This is the competitive advantage Anderson gave up."

### Stop 8: FAQ (`/faq`)

> "All 188 Learning Center items consolidated into organized, searchable FAQ sections. Individual items also appear contextually on the pillar and cluster pages where they're most relevant."

### Stop 9: About (`/about`)

> "Trust signals without personal exposure. 25 years of specialized expertise, entities formed, money-back guarantee, crypto payments. No founder name, no office photos — exactly what you asked for."

### Demo Closer

> "This prototype has 50+ working routes, 62 components, and zero TypeScript errors. It's built on real data from your current site. This is what Phase 1 produced — and it's the foundation that Phase 2 will refine into your final design."

---

## Handling David's Likely Concerns

### "I haven't finished reviewing everything"

> "That's completely fine. The v4 documents are the reference — you can continue reviewing them. What I need today is confirmation on the overall direction: the four-pillar structure, ~75 pages, and the tier approach. The specifics — service inclusions per tier, exact content on each page — we refine those during Phase 2 as we build out each section."

### "This seems like a lot of pages / a lot of work"

> "The ~75 pages are actually a 78% reduction from your current 325. And many of them use shared templates — pillar pages share a template, cluster pages share a template, package pages share a template. We're building 8-10 unique templates, not 75 unique designs."

### "What about the cost?"

> "The SOW range is $30,520-$34,720 at $70/hr. The variable is development hours — 120 to 180 depending on final complexity. You pay by milestone, not upfront. Milestone 1 is ~$2,520 for the discovery work you've already seen. You don't pay Milestone 2 until the homepage design is approved."

### "When will it be done?"

> "10 weeks from sign-off. We use a rolling approval model — as each section is approved, development begins on that section while we're still designing the next. The first deliverable after sign-off is a homepage wireframe within 24 hours."

### "What about the CMS? I thought it was WordPress?"

> "Our direction is Payload CMS, not WordPress. Payload is a modern headless CMS that gives you the content editing experience you need without the security and maintenance overhead of WordPress. It also integrates better with the self-service checkout flow. I want to make sure you're aligned on that."

---

## Closing Momentum (2 min)

### Lock the Action Items

> "So here's what happens next. If you're comfortable with the direction, I'll send you a brief email to confirm the architecture sign-off. We'll get the SOW signed. I'll invoice Milestone 1 for the discovery work. And within 24 hours of that sign-off, you'll see the first homepage wireframe. Can we move forward on that basis?"

### David's Immediate To-Dos

1. Architecture sign-off (email is fine)
2. SOW signature
3. GA4/GSC access for Irish
4. Send the Word mail merge sample
5. Start collecting testimonials

### "Within 24 Hours" Language

Use this deliberately — it communicates urgency and momentum:

- "Within 24 hours of sign-off, homepage wireframe starts"
- "First prototype review meeting scheduled within 1 week of approval"
- "Recurring meeting link sent within 24 hours"

---

_Keep this document next to you during the meeting. Check off talking points as you cover them._

_Prepared by BIT Studios — March 2026_
