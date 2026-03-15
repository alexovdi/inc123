# Incorporate123 — Privacy Pillar Page Content Guide

**Page:** `/privacy/` · **Template:** Pillar Page (Lead Pillar)
**Phase:** 2 — UX & Interactive Prototyping
**Based on:** Privacy Pillar Wireframe Spec, Brand Guide v2, Positioning Framework, User Journey Mapping
**Version:** v2 — Post-David Review

---

## Wireframe Improvement Notes

### 1. Hero Search Stat Feels Like Internal Data, Not a Trust Signal

The trust snippet option "5,500+ monthly searches for anonymous LLCs — this is what we specialize in" exposes an SEO metric that means nothing to visitors. Business owners don't care about search volume — they care about whether this company solves their problem. The alternative ("25 Years · Year-Round Nominees · Offshore Records Included") is far stronger.

**Recommendation:** Use the credential-based trust snippet exclusively. Drop the search volume stat — save it for internal SEO briefs.

### 2. No Consultation Safety Net on Hero CTAs

Same issue as the homepage. Two self-service CTAs ("Explore Privacy Packages" and "View Gold Packages") but no "Talk to us" alternative. The brand rule applies everywhere.

**Recommendation:** Add "Have questions? Call (775) xxx-xxxx" text below the hero CTAs.

### 3. Progressive Disclosure "Read Full Explanation" Toggle Could Hurt SEO

Expandable content that's hidden by default may be de-prioritized by search engines. For the lead pillar's most important educational sections, the hidden content contains keyword-rich material Google should index fully.

**Recommendation:** Implement progressive disclosure using CSS `<details>` or visible-but-collapsed markup that search engines can still crawl. Avoid JavaScript-only show/hide for the primary educational sections. Alternatively, keep full content visible and use visual design (indentation, lighter background) to create the scanner/researcher distinction without hiding content.

### 4. Cross-Pillar Callout Headline Could Be Stronger

"Privacy Protects Your Identity. Asset Protection Protects Your Wealth." is accurate but reads like a textbook definition. The cross-pillar upsell opportunity is 30–40% — this headline needs to create urgency without fear.

**Recommendation:** Try "Hiding Your Name Is Step One. Protecting Your Assets Is Step Two." — more action-oriented and implies a natural sequence.

### 5. Missing "Compare All Packages" Link After Package Section

The Package CTA Section shows Wyoming Gold and Nevada Gold but doesn't include Silver for visitors who want formation without privacy. A "Not looking for privacy? See all packages →" link would catch Formation-intent visitors who landed on the wrong pillar.

**Recommendation:** Add a subtle "Compare All Packages →" link below the two Gold cards, and a "Looking for formation without privacy? View Silver Packages →" text link.

---

## Section-by-Section Content Guide

---

## Hero Section

| Element | Content | Voice / Implementation Notes |
|---------|---------|------------------------------|
| **Pillar Identity** | Blue accent (`#2563eb`) — top border, icon tint, or background gradient | Must be visually distinct from homepage hero. More focused, more educational. |
| **Eyebrow** | "Business Privacy" | Uses the pillar name. Small type, Inter font. |
| **H1** | "Privacy You Can't Get Elsewhere" | This is the pillar's core message from the Brand Guide. Bold claim, backed by the differentiator sections below. Display XL, Outfit 800. |
| **Subheadline** | "Year-round nominee services, offshore records custodian, and genuine anonymity for your business. Not 'nominee for a day' — real, ongoing privacy protection backed by 25 years of expertise." | Hits three differentiators in two sentences. The "nominee for a day" jab is the single most important competitive distinction — it belongs above the fold on the lead pillar. |
| **Primary CTA** | "Explore Privacy Packages →" | Amber button. Routes to `/compare-packages/` filtered to Gold. |
| **Secondary CTA** | "Already know what you need? View Gold Packages →" | Ghost/outline button. Direct shortcut for Informed Buyers. |
| **Consultation Safety Net** | "Have questions? Call (775) xxx-xxxx" | Subtle text link below CTAs. |
| **Trust Snippet** | "25 Years · Year-Round Nominees · Offshore Records Included" | Horizontal badge strip. Credential-based, not metric-based. |

### Content Direction for David

The subheadline is the first content David's audience reads on the most important page of the site. It must communicate: (1) what's different about Incorporate123's privacy services, (2) why year-round nominees matter, and (3) the 25-year credibility signal. David may want to adjust phrasing but must keep all three elements. Never use "affordable," "cheap," or fear-based language.

---

## "What is Business Privacy?" — Opening Content

| Element | Content |
|---------|---------|
| **H2** | "What is Business Privacy?" |
| **Scanner Version (visible)** | 3–5 sentences explaining that business privacy means keeping your name off public records associated with your LLC or Corporation. Most states require disclosure of members, managers, or officers — Wyoming and Nevada are the exceptions. This is the foundation for everything else on this page. |
| **Reader Version (expandable)** | 400–600 words covering: why public records exist, what information gets exposed (articles of organization, annual reports, registered agent filings), how nominees replace your name, and the critical difference between formation-day privacy and year-round privacy. |
| **Inline CTA** | "Learn about Anonymous LLCs →" → `/anonymous-llc/` |

**David's writing brief:** This section answers the most basic question a privacy researcher has. Write it for someone who has never heard of an anonymous LLC. No jargon. No assumed knowledge. The scanner version should take 30 seconds to read. The expanded version should feel like a knowledgeable friend explaining over coffee — not a legal textbook.

---

## "Why Business Privacy Matters" — Value Proposition

| Element | Content |
|---------|---------|
| **H2** | "Why Business Privacy Matters" |
| **Format** | 4 subsections, each with icon + title + 2–3 sentence scanner content + expandable detail |

### Subsections

| Icon | Title | Scanner Content | Expandable Detail | Voice Notes |
|------|-------|-----------------|-------------------|-------------|
| Shield | "Protect Against Lawsuits" | When your name appears on public LLC records, litigious parties can find your business assets. Anonymity is the first line of defense. | How public records searches work, real examples of lawsuit targeting, charging order context. | This is the strongest motivator for the $500K+ audience. Use specific numbers — "$30K–$100K minimum defense costs" — from the competitive analysis. |
| Eye | "Keep Competitors in the Dark" | Competitors use public records to map your business holdings, identify suppliers, and reverse-engineer strategy. Privacy stops this at the source. | Competitive intelligence tools that scrape state databases. | Appeals to the business-savvy audience. Not paranoid — practical. |
| Users | "Personal Safety" | Public figures, high-net-worth individuals, and business owners in controversial industries use anonymous LLCs to keep personal info out of searchable databases. | Specific scenarios. | Sensitive topic — handle with authority, not fear. Never say "you could be in danger." |
| Search | "Data Broker Exposure" | Data brokers and people-search sites actively scrape public business records. If your name appears on state filings, it ends up in commercial databases accessible to anyone willing to pay. | How data broker aggregation works, what personal information becomes searchable, how nominees prevent your data from entering these systems. | Practical concern for privacy-conscious audience. Position Incorporate123 as the solution to keep personal data out of broker databases. |

**CTA after section:** "Explore Anonymous LLC Options →" (soft) + "Already know? View Gold Packages →" (shortcut in sidebar on desktop, inline on mobile).

---

## "How We Protect Your Privacy" — Services Overview

| Element | Content |
|---------|---------|
| **H2** | "How Incorporate123 Protects Your Privacy" |
| **Subtext** | "Services that no budget provider offers and most specialists charge extra for — included in every Gold package." |

### Service Blocks

| # | Icon | Title | Scanner Content | Differentiator Callout |
|---|------|-------|-----------------|----------------------|
| 1 | Clock | "Year-Round Nominee Officers & Directors" | Your nominee serves 365 days a year. Not "nominee for a day" at formation — continuous privacy on every filing, every annual report, every state record. | "Competitors charge $400–$5,000/year for nominee services. Ours are included in every Gold package." |
| 2 | Globe | "Free Offshore Nominee Directors — Since 2012" | Your nominees are based offshore, outside U.S. jurisdiction. Additional privacy layer domestic-only nominees can't provide. Free in every Gold package since 2012. | "No other domestic incorporation company includes offshore nominees at no extra cost." |
| 3 | Archive | "Corporate Records Maintained Offshore" | Your corporate records — operating agreements, meeting minutes, membership certificates — are maintained by our offshore custodian. Not accessible through U.S. subpoena processes. | "Unique to Incorporate123. No competitor offers offshore records custodian services." |

**David's writing brief:** These three services are the entire justification for Gold pricing. Each scanner paragraph must make the reader think "I didn't know I needed this, but now I do." The differentiator callouts use specific competitor price ranges — these numbers come from the competitive analysis and are verified. David should confirm current competitor pricing before launch.

---

## Cluster Navigation Grid

| Element | Content |
|---------|---------|
| **H2** | "Explore Privacy Topics" |
| **Subtext** | "Deep-dive guides on every aspect of business privacy. Each covers a specific strategy, state, or service." |
| **Layout** | 3- or 4-column card grid (desktop), single column (mobile). 7 cards total. |

### Cards (in order)

| # | Title | Description | URL |
|---|-------|-------------|-----|
| 1 | "Anonymous LLC Formation" | How to form an LLC where your name never appears on public record. The complete guide. | `/anonymous-llc/` |
| 2 | "Nominee Services" | Year-round nominee officers and directors — the core of genuine business privacy. | `/nominee-services/` |
| 3 | "Wyoming Private Incorporation" | Why Wyoming is the #1 state for business privacy. No public ownership disclosure, low fees, strong protections. | `/wyoming-privacy/` |
| 4 | "Nevada Private Incorporation" | Nevada's privacy advantages — nominee-friendly statutes, no state income tax, 25 years of Incorporate123 expertise. | `/nevada-privacy/` |
| 5 | "California Private LLC" | CA business owners: form in Wyoming for privacy, register in CA to operate. Best of both states. | `/california-private-incorporation/` |
| 6 | "Florida Private LLC" | Florida's public records expose everything. Form privately in Wyoming, register to do business in FL. | `/florida-private-incorporation/` |
| 7 | "Offshore Privacy" | International privacy structures — Nevis LLCs, BVI, Panama, Hong Kong. When domestic privacy isn't enough. | `/offshore/` |

**Card order matters:** Anonymous LLC first (highest search volume, 5,500–9,500/mo). State-specific pages in WY → NV → CA → FL order (reflecting search volume and revenue priority). Offshore last (niche).

---

## Comparison Section

| Element | Content |
|---------|---------|
| **H2** | "Compare Your Options" |
| **Subtext** | "Not sure which state is right for your privacy needs? These guides break it down." |

| Card | Title | Description | URL |
|------|-------|-------------|-----|
| 1 | "Best State for Privacy" | Ranked comparison of Wyoming, Nevada, and other states for business privacy. | `/best-state-for-privacy/` |
| 2 | "Wyoming vs Nevada for Privacy" | Head-to-head: privacy statutes, costs, nominee requirements, and annual obligations compared side by side. | `/wyoming-vs-nevada-privacy/` |

**Note:** These comparison pages fill a competitive vacuum — no competitor has systematic comparison content. Flag this to David as a key SEO opportunity.

---

## Package CTA Section

| Element | Content |
|---------|---------|
| **H2** | "Privacy Packages — All-Inclusive, Nothing Hidden" |
| **Subtext** | "Every Gold package includes year-round nominees, offshore nominees, offshore records custodian, registered agent, EIN, operating agreement, and state fees. No surprise add-ons." |

### Package Cards

| Package | Price | Renewal | CTA |
|---------|-------|---------|-----|
| Wyoming Gold | $1,275 | $525/yr with nominees | "Start Wyoming Gold →" |
| Nevada Gold | $1,800 | $525/yr with nominees | "Start Nevada Gold →" |

Below cards: "Compare All Packages →" + "Not sure yet? Schedule a free consultation →" + "Looking for formation without privacy? View Silver Packages →"

---

## Cross-Pillar Callout

| Element | Content |
|---------|---------|
| **Accent** | Green (`#16a34a`) — Asset Protection pillar |
| **Headline** | "Hiding Your Name Is Step One. Protecting Your Assets Is Step Two." |
| **Description** | "Most privacy-focused business owners also need asset protection. Charging order protection, holding structures, and multi-entity strategies prevent creditors from reaching your assets — even if they find them." |
| **CTA** | "Explore Asset Protection →" → `/asset-protection/` |

**Placement rule:** Cross-pillar CTAs always appear BELOW the primary conversion CTA (the package section). They must not interrupt the privacy → Gold package journey.

---

## FAQ Accordion

6 questions with FAQ schema markup. Single-expand or multi-expand.

| # | Question | Answer Direction |
|---|----------|-----------------|
| 1 | "What is an anonymous LLC?" | Definition + how nominees make it work. 2–3 sentences. Link to full guide. |
| 2 | "What states allow anonymous LLCs?" | Wyoming and Nevada as primary. New Mexico mentioned but lacks other advantages. |
| 3 | "What is a nominee officer?" | Role explanation + year-round vs. formation-day distinction. |
| 4 | "How much does an anonymous LLC cost?" | Specific pricing: WY Gold $1,275, NV Gold $1,800. Renewal $525/yr. All-inclusive. |
| 5 | "What's the difference between privacy and asset protection?" | Privacy hides name, AP protects assets from lawsuits. Complementary — most clients need both. |
| 6 | "Can I use an anonymous LLC for my existing business?" | Yes — form new LLC and transfer, or domesticate existing entity to a privacy-friendly state. |

---

## Sidebar (Desktop Only)

Sticky on scroll, 30% width. Collapses on mobile with elements redistributed inline.

| Block | Content |
|-------|---------|
| **Package Shortcut** | "Ready to Order?" card — Wyoming Gold $1,275 / Nevada Gold $1,800 CTAs |
| **Related Clusters** | All 7 cluster links with active-page highlight |
| **Cross-Pillar** | "Also Relevant: Asset Protection →" with 1–2 sentence context |
| **Phone** | "(775) xxx-xxxx · Talk to a Specialist" with tap-to-call |

---

## Brand Voice Checklist — Privacy Pillar

- [ ] Does every service claim cite a specific number or year? ($1,275, since 2012, $400–$5,000 competitor range)
- [ ] Is "nominee for a day" mentioned at least twice on the page? (Hero + Service Block 1)
- [ ] Does the page avoid fear-based language? (No "before it's too late," "don't risk")
- [ ] Is Gold positioned first everywhere packages appear?
- [ ] Does every self-service CTA have a consultation safety net nearby?
- [ ] Is the progressive disclosure working for both scanners (80%) and researchers (20%)?
- [ ] Does the cross-pillar callout appear BELOW the primary package CTA?

---

## v2 Change Log

| # | Change | Reason |
|---|--------|--------|
| 1 | "Why Business Privacy Matters" subsection #4: Title changed from "The BOI Challenge" to "Data Broker Exposure", icon from FileWarning to Search, content rewritten to focus on data broker scraping | David feedback — BOI de-emphasized, data broker angle more relevant |
| 2 | Cluster Navigation Grid: Removed card #8 "BOI Reporting", reduced from 8 to 7 cards | David feedback — BOI content removed from pillar |
| 3 | FAQ: Removed question #6 "Do I need a nominee if I file a BOI report?", renumbered remaining questions, updated count from 7 to 6 | David feedback — BOI question removed |
| 4 | Sidebar Related Clusters: Updated from "All 8 cluster links" to "All 7 cluster links" | Reflects removal of BOI cluster |
| 5 | Pillar page count references updated: 10 pages not 11 | Reflects BOI page removal |

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
