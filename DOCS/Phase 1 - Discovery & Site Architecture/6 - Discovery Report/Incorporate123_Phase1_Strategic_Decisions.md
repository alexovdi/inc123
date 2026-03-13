# Incorporate123 — Phase 1 Strategic Decisions (Confirmed)

**Status:** Decisions confirmed by BIT Studios (March 2026). Pending formal client sign-off from David at next meeting.  
**Document Purpose:** Canonical reference for all downstream workstreams. These decisions are binding parameters for Phase 2 (UX & Prototyping), SEO, Development, and Launch.

---

## Decision 1: Primary Domain

**Decision:** Migrate from `incorporate123.co` to `incorporate123.com`

- The .com extension is the new primary domain for the redesigned site.
- `incorporate123.co` will 301 redirect to `incorporate123.com`.
- Since all URLs are being restructured in the migration, the domain change happens simultaneously — one disruption, not two.
- Expected temporary SEO dip of 1–3 months with full recovery.
- All existing backlinks and domain authority transfer via 301 redirects.

---

## Decision 2: Package Tier Structure

**Decision:** Gold / Silver / Bronze 3-tier structure

| Tier | Positioning | States | Privacy | Target Audience |
|------|------------|--------|---------|-----------------|
| **Gold** (hero) | Privacy + nominees | NV & WY | Year-round nominee services included | Privacy-first clients, $500K+ assets |
| **Silver** | Standard formation | NV & WY | No nominee services | Business owners needing formation without privacy |
| **Bronze** | Budget entry point | NV only | No nominee services | Price-sensitive leads |

- Gold is the hero product — the site architecture drives visitors upward toward Gold.
- Progressive disclosure: Bronze visitors see what Silver adds; Silver visitors see what Gold adds.
- Offshore packages remain **separate** from the tier system (not integrated into Gold/Silver/Bronze).
- Specific service inclusions per tier to be finalized with David during Phase 2 content work.

---

## Decision 3: Compliance Pillar Scope

**Decision:** Full pillar with dedicated hub and 5 cluster pages

The four-pillar architecture is confirmed:
1. **Business Privacy** (lead pillar)
2. **Asset Protection**
3. **Company Formation**
4. **Compliance** (full pillar)

Compliance pillar pages:
- Compliance Hub (pillar page)
- Registered Agent Services
- Annual Reports & Renewals
- Domestication
- Foreign Registration

Rationale: Compliance serves existing/returning clients (different intent from new prospects). Registered agent services are in every package — dedicated page justifies included value. Domestication and foreign registration have standalone search volume. Easier to collapse a full pillar later than to reorganize distributed content.

---

## Decision 4: Domain Portfolio Consolidation

**Decision:** All 20+ domains 301 redirect to incorporate123.com. No standalone content strategies.

### Complete Redirect Map

**Brand domains → Homepage:**
| Domain | Redirect Target |
|--------|----------------|
| `incorporate123.co` | `incorporate123.com` |
| `incorporate123.mobi` | `incorporate123.com` |

**Nevada domains → Nevada State Hub:**
| Domain | Redirect Target |
|--------|----------------|
| `nevada123.com` | `incorporate123.com/nevada/` |
| `nevada123.co` | `incorporate123.com/nevada/` |
| `nevada123.biz` | `incorporate123.com/nevada/` |
| `nevada123.info` | `incorporate123.com/nevada/` |
| `nevada123.mobi` | `incorporate123.com/nevada/` |
| `nevada123.net` | `incorporate123.com/nevada/` |
| `nevada123.org` | `incorporate123.com/nevada/` |
| `nevada-corporation.net` | `incorporate123.com/nevada/` |
| `nevada-limited-liability-company.com` | `incorporate123.com/nevada-llc-formation/` |

**Wyoming domains → Wyoming State Hub:**
| Domain | Redirect Target |
|--------|----------------|
| `wyoming123.com` | `incorporate123.com/wyoming/` |
| `wyoming123.co` | `incorporate123.com/wyoming/` |
| `wyoming123.mobi` | `incorporate123.com/wyoming/` |

**Offshore domains → Offshore Page:**
| Domain | Redirect Target |
|--------|----------------|
| `offshore123.com` | `incorporate123.com/offshore/` |
| `offshore123.co` | `incorporate123.com/offshore/` |
| `offshore123.mobi` | `incorporate123.com/offshore/` |

**Special cases:**
| Domain | Redirect Target | Notes |
|--------|----------------|-------|
| `businesswithoutborders.global` | `incorporate123.com` | Reserved for potential future international microsite. Redirects to homepage for now. |

### Technical Requirements (Pre-Launch)

1. **Backlink audit** on `incorporate123.co`, `nevada123.com`, and `offshore123.com` — most likely to carry meaningful link equity.
2. **Verify MX records** — confirm no domain has active email before DNS changes.
3. **Server-level 301 redirects** — not meta refreshes. Proper 301s pass ~90–95% of link equity.
4. **Keep all domains renewed** — even dormant redirecting domains protect brand and preserve backlinks.

---

## Phase 1 Completion Status

### Deliverables Complete
- [x] Current Site Audit (392 URLs crawled, 325 unique paths)
- [x] Content Migration Map (326 URLs → 71 pages, 9 template types)
- [x] Competitive Analysis (5 core + 5 secondary competitors)
- [x] User Journey Mapping (5 primary personas)
- [x] Discovery Report (capstone document)
- [x] Positioning Framework ("Privacy, Asset Protection & Business Formation Specialists")
- [x] Validated Site Architecture (71-page 4-pillar structure)

### Approval Gate
- [x] Strategic decisions confirmed (this document)
- [ ] Formal client sign-off from David (scheduled for next meeting)

### Open Action Items Post-Approval
- Schedule recurring 2x/week meetings with David (~9:30–10:30 AM PST, avoid Fridays)
- Begin UX prototyping sprint — homepage wireframe first (within 24 hours of sign-off)
- Schedule first prototype review meeting (1 week from approval)
- Run Anderson Advisors competitive refresh (their site has changed significantly)
- Irish: backlink audit on priority domains
- Irish: verify MX records on all domains before DNS changes
- David: send sample Word mail merge document with field structure
- David: collect existing testimonials
- Flag CRM modernization as potential upsell to Jeff

---

## What Unlocks (Phase 2)

Upon formal sign-off, five parallel workstreams begin:

| Workstream | Hours | Weeks |
|-----------|-------|-------|
| UX & Interactive Prototyping | 53 | 2–5 |
| Visual Design & Design System | 65 | 2–5 |
| SEO Strategy & Implementation | 126 | 3–8 |
| Development (WordPress or Payload CMS) | 120–180 | 4–9 |
| Testing & Launch | 36 | 8–10 |
| **Total** | **436–496** | **10 weeks** |

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
