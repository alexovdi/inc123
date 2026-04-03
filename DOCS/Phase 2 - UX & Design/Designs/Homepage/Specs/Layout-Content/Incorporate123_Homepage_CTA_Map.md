# Incorporate123 — Homepage CTA Map (Layout & Content Only)

**Document 3 of 5** · Phase 2 Homepage Design Package
**Prepared by:** BIT Studios · **For:** David, Incorporate123
**Date:** March 2026
**Status:** Draft — Pending Client Review

---

## Purpose

This document maps every CTA on the homepage: what it says, where it links, which persona it primarily serves, and its position in the hierarchy. It is a focused extraction from the User Journey Mapping and Brand Guide — distilled to homepage-only decisions.

**Governing rules** (from Brand Guide v2 and User Journey Mapping):

1. One primary + one secondary CTA per section. Never three competing button styles.
2. Consultation safety net ("Talk to us") as a subtle text link near every self-service CTA — not a third button.
3. At least one CTA visible above the fold on all viewports.
4. Primary CTA repeats after main content and before footer.
5. Cross-pillar CTAs always appear below the page's primary conversion CTA.
6. Mobile: sticky bottom CTA bar takes precedence over in-content CTAs.

---

## CTA Inventory — All Homepage CTAs

The homepage contains **19 distinct CTA touchpoints** across 10 sections. This inventory accounts for every clickable conversion element.

### Master Table

| #   | Section           | CTA Copy (Prototype)                       | Target URL                                        | Primary Persona                   | Hierarchy            |
| --- | ----------------- | ------------------------------------------ | ------------------------------------------------- | --------------------------------- | -------------------- |
| H1  | Header            | "Get Started →"                            | `/compare-packages/`                              | Informed Buyer (D)                | Persistent utility   |
| H2  | Header            | Phone number                               | `tel:XXXXXXXXXX`                                  | All                               | Persistent utility   |
| 1a  | Hero              | "Protect Your Privacy →"                   | `/privacy/`                                       | Privacy Researcher (A)            | **Primary**          |
| 1b  | Hero              | "View Packages & Pricing →"                | `/compare-packages/`                              | Informed Buyer (D)                | Secondary            |
| 1c  | Hero              | "Prefer to talk? Call us — (XXX) XXX-XXXX" | `tel:XXXXXXXXXX`                                  | All                               | Safety net           |
| 2a  | Pillar Cards      | "Explore Privacy Options →"                | `/privacy/`                                       | Privacy Researcher (A), CA/FL (B) | Soft CTA             |
| 2b  | Pillar Cards      | "Protect Your Assets →"                    | `/asset-protection/`                              | Asset Protector (C)               | Soft CTA             |
| 2c  | Pillar Cards      | "Start Your Company →"                     | `/formation/`                                     | Formation Researcher (E)          | Soft CTA             |
| 2d  | Pillar Cards      | "Stay Compliant →" (if included)           | `/compliance/`                                    | Returning Client (F)              | Soft CTA             |
| 3a  | Package Strip     | "Get Started →" (Gold)                     | `/wyoming-private-llc/` or `/nevada-private-llc/` | Informed Buyer (D)                | **Primary**          |
| 3b  | Package Strip     | "Schedule a consultation" (Gold)           | `/contact/`                                       | All                               | Safety net           |
| 3c  | Package Strip     | "View Silver Package →"                    | `/wyoming-incorporation/`                         | Formation Researcher (E)          | Secondary            |
| 3d  | Package Strip     | "View Bronze Package →"                    | `/nevada-incorporation/`                          | Price-sensitive                   | Tertiary             |
| 3e  | Package Strip     | "Compare all packages in detail →"         | `/compare-packages/`                              | All                               | Utility              |
| 5a  | Trust Bar         | Phone number                               | `tel:XXXXXXXXXX`                                  | All                               | Trust touchpoint     |
| 8a  | Final CTA         | "Get Started →"                            | `/privacy/` or `/compare-packages/`               | All                               | **Primary** (repeat) |
| 8b  | Final CTA         | "Schedule a Consultation →"                | `/contact/`                                       | All                               | Secondary            |
| 8c  | Final CTA         | "Or call us directly — (XXX) XXX-XXXX"     | `tel:XXXXXXXXXX`                                  | All                               | Safety net           |
| M1  | Mobile Sticky Bar | "Protect Your Privacy"                     | `/privacy/`                                       | All                               | **Mobile primary**   |
| M2  | Mobile Sticky Bar | Phone icon                                 | `tel:XXXXXXXXXX`                                  | All                               | Mobile utility       |

**Total:** 19 CTA touchpoints (+ 2 mobile-only sticky elements)

---

## CTA-to-Persona Routing

This table shows how each persona finds their optimal path from the homepage. The homepage must serve all five personas simultaneously — this matrix confirms coverage.

### Persona A: Privacy Researcher

| Step            | What They Click             | CTA # | Where It Takes Them                            |
| --------------- | --------------------------- | ----- | ---------------------------------------------- |
| Most likely     | "Protect Your Privacy →"    | 1a    | `/privacy/` — begins education funnel          |
| Alternative     | "Explore Privacy Options →" | 2a    | `/privacy/` — same destination via pillar card |
| If ready to buy | "Get Started →" (Gold)      | 3a    | Gold package page                              |
| If unsure       | "Prefer to talk? Call us"   | 1c    | Phone consultation                             |

### Persona B: CA/FL Resident

| Step            | What They Click             | CTA # | Where It Takes Them                                       |
| --------------- | --------------------------- | ----- | --------------------------------------------------------- |
| Most likely     | "Explore Privacy Options →" | 2a    | `/privacy/` — state selector routes them to CA/FL content |
| Alternative     | "Protect Your Privacy →"    | 1a    | `/privacy/` — same destination                            |
| If ready to buy | "Get Started →" (Gold)      | 3a    | Gold package → checkout with CA/FL foreign filing add-on  |

### Persona C: Asset Protector

| Step              | What They Click                         | CTA # | Where It Takes Them                                   |
| ----------------- | --------------------------------------- | ----- | ----------------------------------------------------- |
| Most likely       | "Protect Your Assets →"                 | 2b    | `/asset-protection/` — education funnel               |
| Alternative       | "View Packages & Pricing →"             | 1b    | `/compare-packages/` — browses Silver, discovers Gold |
| Cross-sell moment | Happens on AP pillar page, not homepage | —     | AP pillar → Privacy cross-sell → Gold upgrade         |

### Persona D: Informed Buyer

| Step        | What They Click                       | CTA #    | Where It Takes Them                            |
| ----------- | ------------------------------------- | -------- | ---------------------------------------------- |
| Most likely | "View Packages & Pricing →"           | 1b       | `/compare-packages/` — compares tiers, selects |
| Alternative | "Get Started →" (Gold)                | 3a       | Gold package page → checkout                   |
| Alternative | "Get Started →" (Header)              | H1       | `/compare-packages/`                           |
| Speed path  | 1 click from homepage to package page | 3a or 3c | Directly to the package they want              |

### Persona E: Formation Researcher

| Step              | What They Click                           | CTA # | Where It Takes Them                            |
| ----------------- | ----------------------------------------- | ----- | ---------------------------------------------- |
| Most likely       | "Start Your Company →"                    | 2c    | `/formation/` — education funnel               |
| Alternative       | "View Silver Package →"                   | 3c    | Silver package page                            |
| Cross-sell moment | Happens on formation pillar/package pages | —     | Formation → "Add privacy for $375 more" → Gold |

### Persona F: Returning Client

| Step                        | What They Click    | CTA #  | Where It Takes Them       |
| --------------------------- | ------------------ | ------ | ------------------------- |
| Alternative                 | Phone number       | H2, 5a | Calls directly            |
| If needs compliance service | "Stay Compliant →" | 2d     | `/compliance/`            |

---

## Section-by-Section CTA Rules

Quick reference for prototype builders. Confirms exactly what goes where and verifies no section violates the one-primary-one-secondary rule.

### Header (Global)

| Element         | Hierarchy          | Passes Rule Check?                                   |
| --------------- | ------------------ | ---------------------------------------------------- |
| "Get Started →" | Utility CTA        | ✓ Utility CTA, not competing with page-level primary |
| Phone           | Persistent utility | ✓ Persistent utility                                 |
| Login           | Persistent utility | ✓ Persistent utility                                 |

**No primary buttons in the header.** The header CTA is outline to avoid competing with in-page primary CTAs.

### Section 1: Hero

| Element                     | Hierarchy            | Passes Rule Check? |
| --------------------------- | -------------------- | ------------------ |
| "Protect Your Privacy →"    | Primary              | ✓ One primary      |
| "View Packages & Pricing →" | Secondary            | ✓ One secondary    |
| "Prefer to talk?" + phone   | Safety net text link | ✓ Not a button     |

**Three elements, two styles.** The safety net is a text link — it does not count as a third button style.

### Section 2: Pillar Cards

| Element                   | Hierarchy                    | Passes Rule Check?                                            |
| ------------------------- | ---------------------------- | ------------------------------------------------------------- |
| 3 (or 4) pillar soft CTAs | Soft CTA (text link + arrow) | ✓ All same style, all soft CTAs within their respective cards |

**No primary and no secondary buttons in this section.** Pillar cards use soft text-link CTAs. The section as a whole has one consistent CTA style (soft), not competing styles.

### Section 3: Package Strip

| Element                          | Hierarchy                       | Passes Rule Check?               |
| -------------------------------- | ------------------------------- | -------------------------------- |
| "Get Started →" (Gold)           | Primary                         | ✓ One primary (Gold only)        |
| "Schedule a consultation" (Gold) | Safety net text link            | ✓ Not a button                   |
| "View Silver Package →"          | Secondary                       | ✓ Secondary                      |
| "View Bronze Package →"          | Tertiary (same style as Silver) | ✓ Tertiary, same style as Silver |
| "Compare all packages →"         | Utility text link               | ✓ Utility                        |

**Only Gold gets primary treatment.** Silver and Bronze use secondary style. This enforces the Gold-first hierarchy visually.

### Sections 4, 5, 6, 7: No Primary CTAs

These are educational/trust-building sections. They contain no primary or secondary conversion CTAs. The only clickable element is the phone number in the Trust Signals Bar (Section 5).

**This is intentional.** Not every section needs a CTA. Sections 4–7 build the case; Sections 3 and 8 close it.

### Section 8: Final CTA Block

| Element                     | Hierarchy            | Passes Rule Check?                     |
| --------------------------- | -------------------- | -------------------------------------- |
| "Get Started →"             | Primary              | ✓ One primary (repeat of page primary) |
| "Schedule a Consultation →" | Secondary            | ✓ One secondary                        |
| Phone number                | Safety net text link | ✓ Not a button                         |

**Mirrors the hero structure** with different copy. Same pattern: one primary + one secondary + one safety net.

### Mobile Sticky Bar

| Element                | Hierarchy           | Passes Rule Check?          |
| ---------------------- | ------------------- | --------------------------- |
| "Protect Your Privacy" | Primary (compact)   | ✓ Persistent mobile primary |
| Phone icon             | Tap-to-call utility | ✓ Utility                   |

**Appears on scroll, persists for entire page.** Takes precedence over in-content CTAs on mobile. Fixed to bottom of viewport.

---

## Phone Number Touchpoints

The phone number appears **5 times** on the homepage across different contexts. This is intentional — the phone serves as the universal consultation safety net and is the most important trust signal for visitors who aren't ready to self-serve.

| Location          | Format                                     | Context                          |
| ----------------- | ------------------------------------------ | -------------------------------- |
| Header            | Full number, clickable                     | Persistent — always visible      |
| Hero safety net   | "Prefer to talk? Call us — (XXX) XXX-XXXX" | Alternative to self-service CTAs |
| Trust signals bar | Full number with icon                      | Trust reinforcement              |
| Final CTA block   | "Or call us directly — (XXX) XXX-XXXX"     | Last-chance consultation option  |
| Mobile sticky bar | Phone icon, tap-to-call                    | One-tap access on mobile         |

**David to confirm:** Which phone number goes site-wide. This is an open Phase 1 item that blocks prototype build.

---

## Link Target Summary

All unique destinations linked from the homepage. Confirms no orphan targets and no unexpected external links.

| Target URL                | Linked From (CTA #s)      | Page Type       |
| ------------------------- | ------------------------- | --------------- |
| `/privacy/`               | 1a, 2a, 8a (possible), M1 | Pillar page     |
| `/asset-protection/`      | 2b                        | Pillar page     |
| `/formation/`             | 2c                        | Pillar page     |
| `/compliance/`            | 2d (if included)          | Pillar page     |
| `/compare-packages/`      | H1, 1b, 3e                | Comparison page |
| `/wyoming-private-llc/`   | 3a (WY Gold)              | Package page    |
| `/nevada-private-llc/`    | 3a (NV Gold)              | Package page    |
| `/wyoming-incorporation/` | 3c                        | Package page    |
| `/nevada-incorporation/`  | 3d                        | Package page    |
| `/contact/`               | 3b, 8b                    | Utility page    |
| `tel:XXXXXXXXXX`          | H2, 1c, 5a, 8c, M2        | Phone call      |

**12 unique destinations.** No external links on the homepage. Every CTA keeps visitors within the site.

---

_Confidential — BIT Studios × Incorporate123 — March 2026_
