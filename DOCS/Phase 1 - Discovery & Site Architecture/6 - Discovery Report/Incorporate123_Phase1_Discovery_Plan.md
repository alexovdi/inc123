# Phase 1: Discovery & Strategy
## Execution Plan

**Project:** Incorporate123.co Website Redesign  
**Phase Duration:** 1 week (28 hours including project management)  
**Status:** Ready to begin upon contract signing  
**Depends on:** Signed SOW, GA4/GSC viewer access shared, working session decisions

---

## Phase 1 Objectives

This phase bridges the gap between the approved strategy and the start of design/development. We're validating assumptions, filling detail gaps, and creating the specific blueprints that Phases 2–7 will build from.

**By the end of Phase 1, we will have:**

1. A formal audit of the current site with quantified baseline metrics
2. A complete content inventory mapping every existing page to its new location
3. A finalized URL structure with 301 redirect plan
4. Detailed content outlines for all pillar and priority cluster pages
5. Validated user journey maps for 3 primary personas
6. A confirmed SEO keyword-to-page assignment
7. A Phase 1 Discovery Report compiling all findings

---

## Task Breakdown

### Task 1: Current Site Audit (3 hours)

**Objective:** Establish a quantified baseline of the current site's performance, structure, and technical health.

**Activities:**
- Crawl incorporate123.co with Screaming Frog or similar tool
- Document current page count, URL structure, internal link map
- Run PageSpeed Insights on key pages (homepage, top service pages)
- Check mobile usability via Google Mobile-Friendly Test
- Identify broken links, redirect chains, duplicate content
- Document current meta titles, descriptions, and H1 tags
- Screenshot key pages for before/after comparison
- Check current indexation status (site:incorporate123.co in Google)
- Pull baseline traffic data from existing GA4 installation (sessions, bounce rate, top pages, traffic sources)

**Deliverable:** Site Audit Report with baseline metrics

**Baseline Metrics to Capture:**
- Total indexed pages
- Average page load speed (desktop/mobile)
- Mobile usability score
- Current PageSpeed scores
- Broken links count
- Pages with missing/duplicate meta descriptions
- Current organic keyword rankings (from Google Search Console)
- Current organic traffic, sessions, and bounce rate (from GA4)

---

### Task 2: Content Inventory & Migration Map (2 hours)

**Objective:** Create a page-by-page inventory of all existing content with migration decisions.

**Activities:**
- Catalog every page on the current site (~127 pages including ~65 Learning Center FAQ items)
- Classify each page: Reorganize, Enhance, Consolidate, Retire, or Maintain
- Map each existing page to its new location in the pillar structure
- Map each individual Learning Center FAQ item to its destination pillar/cluster page
- Identify content gaps — pages that need to be written from scratch
- Flag content requiring David's review for accuracy/currency
- Note any legal disclaimers or compliance language that must be preserved

**Deliverable:** Content Inventory Spreadsheet (see URL & Redirect Map below)

**Reference:** The Site Coverage & Mapping document has preliminary mapping. The live sitemap at incorporate123.co/site-map/ confirms ~38 main pages plus ~65 individual FAQ items across 24 Learning Center categories, plus 22 new pages to create — totaling ~71 core pages in the new structure.

---

### Task 3: URL Structure & 301 Redirect Plan (2 hours)

**Objective:** Define the complete URL structure for the new site and create a redirect map to preserve SEO equity.

**Activities:**
- Finalize URLs for all ~71 new-structure pages using flat URL strategy
- Create 301 redirect mapping for ~100+ current URLs → new destinations (including all Learning Center FAQ items)
- Identify any URLs with existing backlinks (prioritize preserving these)
- Document URL naming conventions for consistency
- Plan for nevada123.com redirects (pending David's domain decision)
- Map each individual /learning-center/cat/XX/item/YY URL to its nearest pillar/cluster page

**URL Convention (from approved strategy):**
- Flat structure: `/anonymous-llc/` not `/privacy/anonymous-llc/`
- Descriptive, keyword-rich slugs
- No dates, no category prefixes
- Internal linking creates pillar/cluster relationships

**Deliverable:** Complete URL & Redirect Map (spreadsheet)

**Sample Redirect Mapping (corrected from live sitemap):**

| Current URL | New URL | Redirect | Notes |
|---|---|---|---|
| /services/ | /formation/ | 301 | US hub → Formation pillar |
| /services/nevada-incorporation/ | /nevada-llc-formation/ | 301 | NV overview → Formation cluster |
| /services/gold-package/ | /nevada-privacy/ | 301 | Gold = privacy → Privacy cluster |
| /services/silver-package/ | /nevada-packages/ | 301 | Silver → consolidated NV packages |
| /services/bronze-package/ | /nevada-packages/ | 301 | Bronze → consolidated NV packages |
| /services/office-package/ | /virtual-office/ | 301 | → Compliance cluster |
| /services/privacy-services/ | /nominee-services/ | 301 | KEY — nominee/privacy page |
| /services/wyoming-private-incorporation/ | /wyoming-privacy/ | 301 | WY Gold → Privacy cluster |
| /services/wyoming-incorporation-silver-package/ | /wyoming-packages/ | 301 | WY Silver → consolidated WY packages |
| /services/wyoming-bronze-incorporation-package/ | /wyoming-packages/ | 301 | WY Bronze → consolidated WY packages |
| /services/california-incorporation/ | /california-private-incorporation/ | 301 | CA private → Privacy cluster |
| /services/florida-incorporation/ | /florida-private-incorporation/ | 301 | FL private → Privacy cluster |
| /services/banking/ | /banking-services/ | 301 | Banking services |
| /services/shelf-companies/ | /shelf-companies/ | 301 | Formation cluster |
| /services/compare-order/ | /compare-packages/ | 301 | Package hub |
| /services/add-on-services/ | /add-on-services/ | 301 | Package add-ons |
| /offshore-services/ | /international/ | 301 | Offshore hub |
| /offshore-services/nevis-company-package/ | /nevis-llc/ | 301 | Offshore |
| /offshore-services/bvi-company-package/ | /bvi-company/ | 301 | Offshore |
| /offshore-services/panama-corporation-package/ | /panama-foundation/ | 301 | Offshore |
| /offshore-services/hong_kong_company_package/ | /hong-kong-company/ | 301 | Offshore |
| /offshore-services/offshore_trust/ | /bahamas-dynasty-trust/ | 301 | Offshore AP |
| /offshore-services/offshore-bank-account/ | /international-banking/ | 301 | Offshore banking |
| /offshore-services/irs_compliance_packages/ | /tax-fatca-reporting/ | 301 | → Compliance |
| /offshore-services/irs_offshore_tax_reporting/ | /irs-offshore-forms/ | 301 | → Compliance |
| /asset-protection/nevada-asset-protection/ | /nevada-asset-protection/ | 301 | Flatten URL |
| /asset-protection/investment-holding-llc/ | /holding-llc/ | 301 | Flatten URL |
| /asset-protection/offshore-asset-protection/ | /offshore-asset-protection/ | 301 | Flatten URL |
| /about-us/ | /about/ | 301 | Utility |
| /about-us/privacy/ | /privacy-policy/ | 301 | Legal page |
| /about-us/testimonials/ | /testimonials/ | 301 | Trust signals |
| /about-us/survey-form/ | /feedback/ | 301 | Feedback form |
| /contact-us/ | /contact/ | 301 | Utility |
| /learning-center/cat/* | (various pages) | 301 | 24 categories → pillar/cluster pages |
| /learning-center/cat/*/item/* | (various pages) | 301 | ~65 items → nearest relevant page |
| (no current page) | /privacy/ | N/A | NEW — Privacy pillar |
| (no current page) | /formation/ | N/A | NEW — Formation pillar |
| (no current page) | /compliance/ | N/A | NEW — Compliance pillar |
| (no current page) | /anonymous-llc/ | N/A | NEW — Privacy cluster |
| (no current page) | /registered-agent/ | N/A | NEW — Compliance cluster |

*Full item-by-item redirect mapping in the Phase 1 URL & Content Map spreadsheet (98 rows + bulk FAQ mapping).*

---

### Task 4: Detailed Content Outlines (8 hours)

**Objective:** Create detailed content outlines for all pillar pages and Phase 1 priority cluster pages (18 pages total).

**Phase 1 Priority Pages (18 pages for launch):**

**Homepage:**
- Hero section messaging and CTA
- Pillar navigation cards
- Trust signals placement
- Social proof section
- Secondary CTA

**4 Pillar Pages:**
1. Business Privacy (/privacy/)
2. Asset Protection (/asset-protection/)
3. Company Formation (/formation/)
4. Compliance (/compliance/)

**Priority Cluster Pages (13):**
- Anonymous LLC (/anonymous-llc/)
- Wyoming Privacy (/wyoming-privacy/)
- Nevada Privacy (/nevada-privacy/)
- Nominee Services (/nominee-services/)
- Asset Protection Guide (/asset-protection-guide/)
- Nevada Asset Protection (/nevada-asset-protection/)
- Wyoming Asset Protection (/wyoming-asset-protection/)
- Nevada LLC Formation (/nevada-llc-formation/)
- Wyoming LLC Formation (/wyoming-llc-formation/)
- LLC vs Corporation (/llc-vs-corporation/)
- Registered Agent Services (/registered-agent/)
- Compare All Packages (/compare-packages/)
- About Us (/about/)

**For each page, the outline will include:**
- Page title and H1
- Target keyword(s) and search intent
- Section structure (H2s and H3s)
- Key messaging points for each section
- Internal links to/from other pages
- CTA placement and messaging
- Word count target
- Content that can be migrated from existing pages
- Content that needs to be written fresh
- Questions for David (if subject matter expertise needed)

**Deliverable:** Content Outline Document (one document, all 18 pages)

---

### Task 5: SEO Keyword-to-Page Assignment (5 hours)

**Objective:** Take the 150+ keyword research already completed and assign specific keywords to specific pages.

**Activities:**
- Review existing keyword research (from earlier competitive analysis)
- Assign primary keyword and 2–3 secondary keywords to each page
- Map search intent to page type (informational → pillar/cluster, commercial → comparison, transactional → package)
- Identify keyword cannibalization risks (pages competing for same terms)
- Plan internal linking based on keyword clusters
- Draft meta titles and descriptions for all Phase 1 pages
- Identify featured snippet opportunities

**Deliverable:** Keyword Mapping Spreadsheet

**Sample Assignment:**

| Page | Primary Keyword | Monthly Vol. | Secondary Keywords | Intent |
|---|---|---|---|---|
| /privacy/ | business privacy | 2,400 | company privacy, LLC privacy | Informational |
| /anonymous-llc/ | anonymous LLC | 9,500 | anonymous LLC formation, form anonymous LLC | Commercial |
| /nominee-services/ | nominee services LLC | 1,600 | nominee officer, nominee director | Commercial |
| /wyoming-privacy/ | Wyoming LLC privacy | 720 | Wyoming anonymous LLC | Commercial |
| /asset-protection/ | asset protection | 8,100 | asset protection strategies | Informational |
| /nevada-asset-protection/ | Nevada asset protection | 1,300 | Nevada charging order | Commercial |
| /formation/ | LLC formation | 22,000 | form an LLC (avoid — too competitive) | Informational |
| /nevada-llc-formation/ | Nevada LLC | 5,400 | form LLC in Nevada | Commercial |
| /wyoming-llc-formation/ | Wyoming LLC | 6,600 | form LLC in Wyoming | Commercial |
| /registered-agent/ | registered agent | 14,800 | registered agent service | Commercial |
| /compare-packages/ | LLC formation packages | 880 | compare LLC services | Transactional |

---

### Task 6: User Journey Mapping (3 hours)

**Objective:** Define and validate the primary user journeys through the new site for each target persona.

**Three Primary Personas:**

**Persona 1: Privacy Seeker**
- Has assets to protect identity
- Searching for anonymous LLC or nominee services
- Willing to pay premium for genuine privacy
- Journey: Homepage → Privacy Pillar → Anonymous LLC or Nominee Services → Compare Packages → Gold Package → Contact/Order

**Persona 2: Asset Protector**
- $500K+ in assets, lawsuit-averse
- May confuse privacy with asset protection
- Needs education on the difference
- Journey: Homepage → Asset Protection Pillar → State-Specific AP Page → Compare AP Options → Gold Package → Contact/Order

**Persona 3: Business Starter**
- New entrepreneur forming first entity
- Price-conscious but values guidance
- Needs state selection help
- Journey: Homepage → Formation Pillar → LLC vs Corp or State Comparison → Wyoming/Nevada Formation → Silver Package → Order

**For each journey, we'll map:**
- Entry points (organic search, direct, referral)
- Key decision points and information needs at each step
- Content requirements at each touchpoint
- CTAs and conversion nudges
- Potential drop-off points and mitigation strategies
- Cross-linking opportunities between pillars

**Deliverable:** User Journey Maps (visual diagrams + written narratives)

---

### Task 7: Discovery Report Compilation (2 hours)

**Objective:** Compile all Phase 1 findings into a single comprehensive Discovery Report for client review.

**Report Structure:**
1. Executive Summary of Findings
2. Current Site Audit Results (with baseline metrics)
3. Content Inventory & Migration Plan
4. URL Structure & Redirect Map
5. Content Outlines (summary — full outlines as appendix)
6. SEO Keyword Assignments
7. User Journey Maps
8. Recommendations & Decisions Needed
9. Phase 2 Preview — What's Next

**Deliverable:** Phase 1 Discovery Report (PDF + source documents)

---

## Phase 1 Delivery Schedule

| Day | Tasks | Hours | Deliverables |
|---|---|---|---|
| Day 1 | Site audit + content inventory | 5 | Audit report, content inventory draft |
| Day 2 | URL structure + redirect plan (incl. LC FAQ mapping) | 4 | URL map, redirect spreadsheet |
| Day 2–3 | Content outlines (pillar pages) | 4 | 4 pillar page outlines |
| Day 3–4 | Content outlines (cluster pages) | 4 | 13 cluster page outlines |
| Day 4 | SEO keyword assignment | 4 | Keyword mapping spreadsheet |
| Day 5 | User journey mapping | 2 | Journey maps for 3 personas |
| Day 5 | Discovery report compilation | 2 | Complete Phase 1 report |
| Ongoing | Project management (client comms, meetings, coordination) | 3 | Status updates, meeting notes |
| **Total** | | **28** | |

---

## Client Review & Approval

**Review Period:** 3–5 business days after Discovery Report delivery

**David will review and approve:**
- Content outlines (are we capturing the right information for each page?)
- URL structure (any issues with proposed URLs?)
- Keyword assignments (anything we're missing or emphasizing incorrectly?)
- User journeys (do these match your actual customer behavior?)
- Migration decisions (any content we shouldn't retire or any we must keep?)

**Upon Phase 1 Approval:**
- Phase 2 (UX Design) begins immediately
- Content outlines become the blueprint for Phase 4 (Content Creation)
- URL structure becomes the blueprint for Phase 6 (Development)
- Keyword assignments guide Phase 5 (SEO Implementation)

---

## Dependencies & Risks

| Dependency | Status | Impact if Missing |
|---|---|---|
| Signed SOW/contract | Pending | Cannot start — blocks all work |
| GA4 + Search Console access | Both installed — need shared viewer/editor access | Delays baseline data pull |
| Working session decisions | Pending | Package structure, domain decisions TBD (WordPress confirmed) |
| Current site hosting access | Pending | Needed for crawl and technical audit |
| David availability for review | Assumed 3–5 days | Delays Phase 2 start |

| Risk | Mitigation |
|---|---|
| Current site has undocumented pages | Thorough crawl will surface everything |
| Content outlines need multiple revision rounds | Keep outlines structured but not over-detailed; save detail for Phase 4 |
| Domain decision delayed | Plan redirects for incorporate123.co; add nevada123.com redirects when decision is made |
| GA4/GSC access sharing delayed | Both are installed; proceed with external tools (Screaming Frog, PageSpeed) and add GA4/GSC data when access is shared |

---

## Success Criteria

Phase 1 is complete when:

- [ ] Every current page (~127 including FAQ items) has been inventoried and mapped to a new location
- [ ] Every new page has a finalized URL
- [ ] Every page in the redirect map has a confirmed 301 destination
- [ ] All 18 Phase 1 priority pages have detailed content outlines
- [ ] Every page has assigned primary and secondary keywords
- [ ] User journeys are mapped for 3 personas
- [ ] David has reviewed and approved the Discovery Report
- [ ] All open questions from the working session are resolved
- [ ] Phase 2 is ready to begin
