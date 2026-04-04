# Incorporate123 — Header Navigation Structure (Final)

**Status:** Final — aligned with Site Map Final, Validated Site Architecture, and April 1 meeting decisions
**Date:** April 3, 2026
**Prepared by:** BIT Studios

---

## URL Rule

**All URLs are flat** — no directory nesting. Pillar/cluster hierarchy is established through internal linking, not URL paths. Only exceptions: `/offshore/*` and `/checkout/*`.

> Source: Validated Site Architecture — "All URLs are flat (no directory nesting) to keep them clean, shareable, and resilient to structural changes."

---

## Design Decisions

| Decision                            | Rationale                                                            |
| ----------------------------------- | -------------------------------------------------------------------- |
| **4 pillar mega menus**             | David confirmed Compliance as a separate pillar (April 1 transcript) |
| **"Company Formation"** label       | David explicitly requested state-agnostic framing                    |
| **"Find Your Package"** CTA         | Links to wizard/comparison. Differentiated from pillar nav items.    |
| **No separate "Packages" nav item** | CTA button covers this role. Avoids two links to same destination.   |
| **About = simple dropdown**         | Only 3 items — doesn't warrant a mega menu.                          |
| **CTA = ghost/outline blue**        | Prevents visual competition with in-page amber CTAs.                 |
| **Featured link kept**              | Each mega menu column includes a promoted package link.              |

---

## Desktop Header Layout

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  [Logo]   Privacy ▾   Asset Protection ▾   Company Formation ▾   Compliance ▾       │
│                                              About ▾    📞 (775) 313-4155  [Find Your Package →] │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### Element Inventory

| #   | Element                   | Position         | Type         | Destination          | Behavior                               |
| --- | ------------------------- | ---------------- | ------------ | -------------------- | -------------------------------------- |
| 1   | **Logo**                  | Far left         | Image/Link   | `/`                  | Click → home. Always visible.          |
| 2   | **Privacy**               | Nav pos 1 (lead) | Text + ▾     | `/privacy/`          | Hover → mega menu. Click → pillar hub. |
| 3   | **Asset Protection**      | Nav pos 2        | Text + ▾     | `/asset-protection/` | Hover → mega menu. Click → pillar hub. |
| 4   | **Company Formation**     | Nav pos 3        | Text + ▾     | `/formation/`        | Hover → mega menu. Click → pillar hub. |
| 5   | **Compliance**            | Nav pos 4        | Text + ▾     | `/compliance/`       | Hover → mega menu. Click → pillar hub. |
| 6   | **About**                 | Nav pos 5        | Text + ▾     | `/about/`            | Simple dropdown (3 items).             |
| 7   | **Phone**                 | Right utility    | `tel:` link  | `tel:+17753134155`   | Format: `(775) 313-4155`               |
| 8   | **"Find Your Package →"** | Far right        | Ghost button | `/compare-packages/` | Blue outline (`#2563EB`), not amber.   |

### Sticky Scroll States

| State                 | Height        | Background | Shadow                          |
| --------------------- | ------------- | ---------- | ------------------------------- |
| Default (top of page) | 80px          | White      | None                            |
| Scrolled (past hero)  | 60px          | White      | `0 1px 3px rgba(0,0,0,0.1)`     |
| Mega menu open        | 80px (locked) | White      | Page content dimmed via overlay |

---

## Mega Menu Structure

Four pillar columns. Each has a 3px top border accent in its pillar color.

**Trigger:** Hover (200ms open delay, 300ms close delay). Keyboard: Enter/Space to open, Escape to close.

### Privacy Column (Blue `#2563EB`)

| #   | Label                     | URL                                  | Type        |
| --- | ------------------------- | ------------------------------------ | ----------- |
| 1   | Anonymous LLC             | `/anonymous-llc/`                    | Cluster     |
| 2   | Anonymous Corporation     | `/anonymous-corporation/`            | Cluster     |
| 3   | Nominee Services          | `/nominee-services/`                 | Cluster     |
| 4   | Wyoming Privacy           | `/wyoming-privacy/`                  | Cluster     |
| 5   | Nevada Privacy            | `/nevada-privacy/`                   | Cluster     |
| 6   | California Private Inc.   | `/california-private-incorporation/` | Cluster     |
| 7   | Florida Private Inc.      | `/florida-private-incorporation/`    | Cluster     |
| —   | ── Compare ──             |                                      | Divider     |
| 8   | Best State for Privacy    | `/best-state-for-privacy/`           | Comparison  |
| 9   | WY vs NV for Privacy      | `/wyoming-vs-nevada-privacy/`        | Comparison  |
| —   | **Explore All Privacy →** | `/privacy/`                          | Footer link |

**Total links: 9** (7 clusters + 2 comparisons)

### Asset Protection Column (Green `#16A34A`)

| #   | Label                              | URL                                    | Type        |
| --- | ---------------------------------- | -------------------------------------- | ----------- |
| 1   | Nevada Asset Protection            | `/nevada-asset-protection/`            | Cluster     |
| 2   | Wyoming Asset Protection           | `/wyoming-asset-protection/`           | Cluster     |
| 3   | Charging Order Protection          | `/charging-order-protection/`          | Cluster     |
| 4   | Investment Holding LLC             | `/investment-holding-llc/`             | Cluster     |
| —   | ── Compare ──                      |                                        | Divider     |
| 5   | Best State for AP                  | `/best-state-for-asset-protection/`    | Comparison  |
| 6   | WY vs NV for AP                    | `/wyoming-vs-nevada-asset-protection/` | Comparison  |
| —   | **Explore All Asset Protection →** | `/asset-protection/`                   | Footer link |

**Total links: 6** (4 clusters + 2 comparisons)

### Company Formation Column (Amber `#D97706`)

| #   | Label                       | URL                                | Type        |
| --- | --------------------------- | ---------------------------------- | ----------- |
| 1   | Wyoming LLC                 | `/wyoming-llc/`                    | Cluster     |
| 2   | Wyoming Corporation         | `/wyoming-corporation/`            | Cluster     |
| 3   | Nevada LLC                  | `/nevada-llc/`                     | Cluster     |
| 4   | Nevada Corporation          | `/nevada-corporation/`             | Cluster     |
| 5   | Shelf Companies             | `/shelf-companies/`                | Cluster     |
| 6   | Entity Tax Guide            | `/entity-tax-guide/`               | Cluster     |
| 7   | LLC vs Corporation          | `/llc-vs-corporation/`             | Cluster     |
| —   | ── Compare ──               |                                    | Divider     |
| 8   | Wyoming vs Nevada           | `/wyoming-vs-nevada/`              | Comparison  |
| 9   | Shelf vs New Formation      | `/shelf-company-vs-new-formation/` | Comparison  |
| 10  | LLC vs S-Corp vs C-Corp Tax | `/llc-vs-scorp-vs-ccorp-tax/`      | Comparison  |
| —   | **Explore All Formation →** | `/formation/`                      | Footer link |

**Total links: 10** (7 clusters + 3 comparisons)

### Compliance Column (Purple `#9333EA`)

| #   | Label                        | URL                            | Type        |
| --- | ---------------------------- | ------------------------------ | ----------- |
| 1   | Registered Agent Services    | `/registered-agent/`           | Cluster     |
| 2   | Wyoming Registered Agent     | `/wyoming-registered-agent/`   | Cluster     |
| 3   | Nevada Registered Agent      | `/nevada-registered-agent/`    | Cluster     |
| 4   | Annual Reports               | `/annual-reports/`             | Cluster     |
| 5   | Foreign State Registration   | `/foreign-state-registration/` | Cluster     |
| 6   | Domestication                | `/domestication/`              | Cluster     |
| 7   | 2nd-Tier State Filings       | `/second-tier-state-filings/`  | Cluster     |
| 8   | Shares & Corporate Records   | `/shares-corporate-records/`   | Cluster     |
| 9   | Tax Filing & Obligations     | `/tax-obligations/`            | Cluster     |
| —   | **Explore All Compliance →** | `/compliance/`                 | Footer link |

**Total links: 9** (9 clusters, no comparison pages)

### About Dropdown (Simple, not mega menu)

| #   | Label        | URL              |
| --- | ------------ | ---------------- |
| 1   | About Us     | `/about/`        |
| 2   | Contact      | `/contact/`      |
| 3   | Testimonials | `/testimonials/` |

---

## Mobile Header

```
┌──────────────────────────────┐
│  [☰]      [Logo]        [📞]  │
└──────────────────────────────┘
```

### Mobile Menu Overlay

```
┌──────────────────────────────┐
│  [✕ Close]                   │
│                              │
│  [Find Your Package →] (btn) │
│                              │
│  ──────────────────────────  │
│                              │
│  ▸ Privacy          (blue)   │
│  ▸ Asset Protection (green)  │
│  ▸ Company Formation (amber) │
│  ▸ Compliance       (purple) │
│                              │
│  ──────────────────────────  │
│                              │
│  About                       │
│  Contact                     │
│  Testimonials                │
│  FAQ                         │
│  Blog                        │
│                              │
│  ──────────────────────────  │
│                              │
│  📞 (775) 313-4155           │
│                              │
└──────────────────────────────┘
```

---

## Link Counts

| Area                              | Links  |
| --------------------------------- | ------ |
| Privacy mega menu                 | 9      |
| Asset Protection mega menu        | 6      |
| Company Formation mega menu       | 10     |
| Compliance mega menu              | 9      |
| About dropdown                    | 3      |
| **Total header-accessible links** | **37** |

---

## Post-Launch Expansion (Not in Current Nav)

These pages were planned during discovery but dropped from the approved architecture. Can be added post-launch:

| Page                         | URL                              | Pillar           | Status                                                                  |
| ---------------------------- | -------------------------------- | ---------------- | ----------------------------------------------------------------------- |
| Real Estate Asset Protection | `/real-estate-asset-protection/` | Asset Protection | P2 expansion — dropped from final                                       |
| LLC vs Living Trust          | `/llc-vs-living-trust/`          | Asset Protection | P2 expansion — dropped from final                                       |
| BOI Reporting                | —                                | —                | Explicitly rejected by David (executive action stayed BOI requirements) |

---

_Confidential — BIT Studios × Incorporate123_
