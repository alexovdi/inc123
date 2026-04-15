# 404 Error Page — Page Specification

**Page:** 404 Not Found
**URL:** `/404` (server-configured — displayed for any URL that returns HTTP 404)
**Template Type:** Error
**Priority:** P1 — Launch (CRITICAL during migration)
**Content Source:** New creation

---

## 1. Page Purpose & Strategic Role

### 1.1 Primary Goal

Recover lost visitors. During the site migration with ~170 redirects (325 current URLs consolidating to ~71 pages), some visitors will inevitably hit URLs that aren't properly redirected — bookmarks, cached search results, external links from third-party sites, or typos. The 404 page must prevent these visitors from bouncing by immediately offering useful navigation.

### 1.2 Why This Page Is Critical

- **Migration window:** The 325→71 URL consolidation means hundreds of old URLs need redirects. Even with thorough redirect mapping, edge cases will slip through. The 404 page is the safety net.
- **Domain migration:** If/when the move from incorporate123.co to incorporate123.com happens, the 404 volume will spike temporarily
- **External links:** 25 years of operation means hundreds of external sites link to old URLs. Not all can be predicted or mapped.
- **Search engine cache lag:** Google may take weeks to update cached URLs after migration. During this period, visitors clicking outdated search results need recovery.

### 1.3 Success Metrics

- **Primary:** Click-through to any live page (recovery rate) — target > 60%
- **Secondary:** Bounce rate < 40% (a well-designed 404 should retain most visitors)
- **Monitoring:** 404 error log should be reviewed weekly for the first 3 months post-launch to catch redirect gaps

---

## 2. Section Order

| # | Section | Role |
|---|---------|------|
| 1 | Error Message | Clear, friendly acknowledgment that the page doesn't exist |
| 2 | Search Box | Let visitors search for what they were looking for |
| 3 | Suggested Pages | Pillar links + popular pages — most likely destinations |
| 4 | Contact CTA | "Can't find it? Contact us" — phone + form link |

---

## 3. Section Specifications

### Section 1: Error Message

```
H1: This Page Doesn't Exist.
    But We Can Help You Find What You Need.

Body: The page you're looking for may have moved during our
recent site update. Try searching below, or choose from our
most popular pages.
```

**Dev Notes:**
- Tone is helpful, not apologetic. No "Oops!" or "Something went wrong." This is a professional business site, not a startup.
- Optional: subtle illustration (branded 404 graphic — shield with question mark, or a lock icon with a broken link). Keep it minimal — not a full-screen cartoon.
- Background: white or light. No dark hero treatment.

### Section 2: Search Box

```
[Search Bar — full width, prominent]
Placeholder: "Search for a service, state, or topic..."
```

**Dev Notes:**
- Same search component as the FAQ hub search bar
- Search covers all page titles, meta descriptions, and FAQ items
- Results display as a list with page title + brief description + link
- If the site uses a CMS with built-in search, leverage that. Otherwise, implement a client-side search index.

### Section 3: Suggested Pages

**Two groups: Pillar links (intent-based) + Popular pages (most-visited)**

```
START WITH A TOPIC
→ Business Privacy — Anonymous LLCs, nominee services (/privacy/)
→ Asset Protection — Charging order, LLC structuring (/asset-protection/)
→ Business Incorporation — Wyoming & Nevada LLC/Corp (/formation/)
→ Compliance — Registered agent, annual reports (/compliance/)

POPULAR PAGES
→ Compare All Packages (/compare-packages/)
→ Wyoming Gold — Private Incorporation (/wyoming-private-incorporation/)
→ Anonymous LLC Guide (/anonymous-llc/)
→ FAQ (/faq/)
→ Contact Us (/contact/)
```

**Dev Notes:**
- Pillar links use pillar colors (blue, green, amber, purple) for visual recognition
- Popular pages list should be updated periodically based on actual traffic data (post-launch analytics)
- These links serve as the primary recovery mechanism — most 404 visitors will find their destination here

### Section 4: Contact CTA

```
Still can't find what you're looking for?

📞 Call us: (XXX) XXX-XXXX
✉️ Contact form: /contact/

"If you reached this page from a bookmark or external link,
the page may have been moved. Let us know and we'll help you
find it."
```

**Dev Notes:**
- The "let us know" prompt is a feedback mechanism — visitors reporting broken links helps identify redirect gaps
- Phone number with click-to-call on mobile

---

## 4. Technical Specifications

| Element | Value |
|---------|-------|
| **H1** | "This Page Doesn't Exist." |
| **Title tag** | "Page Not Found \| Incorporate123" |
| **Meta robots** | `noindex, follow` — 404 pages should NOT be indexed, but links on the page should be followed |
| **HTTP status** | 404 (must return actual 404 status code, NOT a 200 with "page not found" content — this is critical for SEO) |
| **Schema** | None — 404 pages don't get structured data |
| **Analytics** | Track 404 hits in GA4 with the requested URL as a parameter — this data identifies redirect gaps |
| **Server config** | Configure web server (Vercel, nginx) to serve this page for all unmatched routes |

### 404 Monitoring (Post-Launch)

The 404 error log should be monitored and acted upon:

| Timeline | Action |
|----------|--------|
| Week 1 post-launch | Review 404 log daily. Fix any high-volume redirect misses immediately. |
| Weeks 2–4 | Review 404 log 3×/week. Batch-fix redirect gaps. |
| Month 2–3 | Review 404 log weekly. Pattern-based redirects for remaining edge cases. |
| Ongoing | Review 404 log monthly. Diminishing volume expected. |

---

## 5. Content Notes for David

1. **No content required from David** — this page uses standard navigation links and brand messaging only
2. **404 monitoring responsibility** — Someone needs to review the 404 log post-launch. Confirm who owns this (BIT Studios during warranty period, David's team after handoff).
3. **Phone number** — Confirm for the contact CTA

---

*End of Specification — 404 Error Page*
*Confidential — BIT Studios × Incorporate123 — April 2026*
