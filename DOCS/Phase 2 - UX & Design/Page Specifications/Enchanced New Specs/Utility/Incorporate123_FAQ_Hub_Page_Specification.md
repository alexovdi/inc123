# FAQ Hub — Page Specification

**Page:** FAQ Hub
**URL:** `/faq/`
**Template Type:** Resource / FAQ
**Priority:** P1 — Launch
**Content Source:** New (consolidates 188 Learning Center FAQ items)

---

## 1. Page Purpose & Strategic Role

### 1.1 Primary Goal

Serve as the catch-all destination for FAQ content that doesn't fit contextually within a specific pillar or cluster page. The majority of the original 188 Learning Center items are distributed to pillar/cluster FAQ accordion sections (est. ~140 topic-assigned + ~30 multi-relevant). The remaining ~18 general items live here, alongside a category-based navigation system that helps visitors find FAQs across the site.

### 1.2 Strategic Role

- **Learning Center replacement** — The current Learning Center has 242 URLs (74.5% of the entire site). This page replaces the entire LC structure with a single searchable, organized hub
- **Redirect destination** — 24 LC category landing pages and ~18 general FAQ items redirect here. The 301 redirect plan routes these URLs to `/faq/`
- **Navigation aid** — Visitors who search for "FAQ" or "help" land here and can browse by category or search for specific topics, then click through to the relevant pillar/cluster page where the full FAQ section lives
- **Long-tail SEO** — FAQPage schema on general items captures featured snippets for broad queries

### 1.3 Success Metrics

- **Primary:** Click-through to pillar/cluster pages (the FAQ hub routes visitors to where the real answers live)
- **Secondary:** Time on page < 2 minutes (visitors should find their category and navigate away quickly — this is a routing page)
- **Bounce target:** < 50%

---

## 2. Section Order

| # | Section | Role |
|---|---------|------|
| 1 | FAQ Hero | H1 + search bar |
| 2 | Category Navigation | 4 pillar categories + "General" + "Pricing & Process" — card grid with item counts |
| 3 | General FAQs | The ~18 items that don't belong on any pillar/cluster page — displayed as accordion on this page |
| 4 | Pricing & Process FAQs | Cross-cutting questions about how Incorporate123 works, what's included, timeline, payment |
| 5 | "Can't Find What You're Looking For?" | Contact CTA + links to pillar pages |

---

## 3. Key Specifications

### Section 1: FAQ Hero

```
Breadcrumb: Home > FAQ

H1: Frequently Asked Questions

Subheadline: Search for a topic or browse by category. Most FAQ
answers live on our service pages — we'll point you to the
right one.

[Search Bar — full width, prominent]
Placeholder: "Search for a question..."
```

**Dev Notes:**
- The search bar is the primary interaction element — it searches across ALL FAQ content on the site (not just this page), with results linking to the relevant pillar/cluster page where the FAQ section lives
- Search implementation: client-side search index of all FAQ items across all pages, with results showing: question text + source page name + link. Alternatively, server-side search if CMS supports it.
- Search results format: "Q: What is charging order protection? — Found on: Asset Protection page → [View answer]"

### Section 2: Category Navigation

```
6 category cards (3×2 desktop, 2×3 tablet, 1-column mobile):

PRIVACY (Blue accent)
Anonymous LLCs, nominee services, ownership disclosure,
state privacy laws, BOI reporting
→ "View Privacy FAQs" (links to /privacy/#faq and cluster page FAQs)
[X] questions across Privacy pages

ASSET PROTECTION (Green accent)
Charging orders, LLC vs trust, entity separation, state
comparison, real estate protection
→ "View AP FAQs" (links to /asset-protection/#faq)
[X] questions across AP pages

FORMATION (Amber accent)
LLC vs corporation, state selection, formation timeline,
costs, entity types, shelf companies
→ "View Formation FAQs" (links to /formation/#faq)
[X] questions across Formation pages

COMPLIANCE (Purple accent)
Registered agent, annual reports, foreign registration,
domestication, corporate records
→ "View Compliance FAQs" (links to /compliance/#faq)
[X] questions across Compliance pages

GENERAL (Neutral gray)
Company background, how we're different, getting started,
account management
[X] questions — displayed below on this page ↓

PRICING & PROCESS (Neutral gray)
Package pricing, what's included, payment methods,
refund policy, timeline, renewal
[X] questions — displayed below on this page ↓
```

**Dev Notes:**
- Pillar category cards use pillar colors and link to the pillar page's FAQ section (anchor `#faq`)
- "General" and "Pricing & Process" cards link to Sections 3 and 4 on this same page (scroll anchors)
- Item counts (`[X] questions`) should be accurate — counts can be CMS-driven or hardcoded at launch

### Section 3: General FAQs (Accordion)

The ~18 general items that have no specific pillar home. These are broad company/service questions.

**Example content (David provides final):**

```
Q: What is Incorporate123?
Q: How long have you been in business?
Q: Where is your office?
Q: Do you offer services in all 50 states?
Q: What types of entities can you form?
Q: Do I need an attorney to use your services?
Q: How do I get started?
Q: Can I speak to someone before ordering?
Q: Do you offer consultations?
Q: What makes you different from other incorporation services?
Q: Do you accept international clients?
Q: What payment methods do you accept?
Q: Can I pay with cryptocurrency?
Q: What is your privacy policy regarding client information?
Q: Do you share client information with the government?
Q: How do I access my client account?
Q: What if I'm not satisfied with your service?
Q: Do you offer referral programs?
```

**Dev Notes:**
- FAQPage schema markup on all items displayed on this page
- Accordion — closed by default, one item open at a time
- Each item that has a related pillar/cluster page includes a "Learn more →" link to that page

### Section 4: Pricing & Process FAQs (Accordion)

Cross-cutting questions about pricing, packages, process, and operations. These appear on multiple package pages but are also consolidated here for visitors who want a single pricing FAQ reference.

**Example content:**

```
Q: How much does formation cost?
Q: What's included in the formation price?
Q: What are the annual renewal costs?
Q: What payment methods do you accept?
Q: Is there a money-back guarantee?
Q: How long does formation take?
Q: What happens after I place my order?
Q: Can I upgrade my package later?
Q: Do you handle ongoing compliance?
Q: What are the state filing fees?
```

### Section 5: Can't Find It?

```
Can't find what you're looking for?

→ Contact us — (XXX) XXX-XXXX or contact form (/contact/)
→ Browse Privacy topics (/privacy/)
→ Browse Asset Protection topics (/asset-protection/)
→ Browse Formation topics (/formation/)
→ Browse Compliance topics (/compliance/)
```

---

## 4. Technical Specifications

| Element | Value |
|---------|-------|
| **H1** | "Frequently Asked Questions" |
| **Title tag** | "FAQ — Privacy, Formation, Asset Protection & Compliance Questions \| Incorporate123" |
| **Meta description** | "Find answers to common questions about business privacy, LLC formation, asset protection, compliance, pricing, and process. Search by topic or browse by category." |
| **Schema** | FAQPage (for items displayed on this page), BreadcrumbList |
| **Search implementation** | Client-side search index covering all FAQ items across all site pages, OR server-side search via CMS |

---

## 5. Content Notes for David

1. **General FAQ items** — The ~18 catch-all items need David's review and approval. Many will be auto-generated from the Learning Center consolidation, but answers should be refreshed for the new brand voice.
2. **"Do you share client information with the government?"** — This is a sensitive FAQ that the current site addresses. David should review and approve the answer carefully.
3. **Category item counts** — Accurate counts depend on the FAQ consolidation being complete. These can be hardcoded at launch and updated as cluster pages go live.
4. **Search scope** — Confirm whether FAQ search should cover ONLY FAQ items, or also general site content (page titles, descriptions).

---

*End of Specification — FAQ Hub*
*Confidential — BIT Studios × Incorporate123 — April 2026*
