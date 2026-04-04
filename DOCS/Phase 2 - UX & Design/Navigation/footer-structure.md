# Incorporate123 — Footer Navigation Structure (Final)

**Status:** Final — aligned with Site Map Final, Validated Site Architecture, and April 1 meeting decisions
**Date:** April 3, 2026
**Prepared by:** BIT Studios

---

## URL Rule

**All URLs are flat** — no directory nesting. Pillar/cluster hierarchy is established through internal linking, not URL paths. Only exceptions: `/offshore/*` and `/checkout/*`.

> Source: Validated Site Architecture — "All URLs are flat (no directory nesting) to keep them clean, shareable, and resilient to structural changes."

---

## Design Decisions

| Decision                           | Rationale                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------- |
| **6 columns**                      | Full sitemap coverage for SEO link equity. Every page reachable from footer.                |
| **Compliance gets its own column** | David confirmed it as a full pillar. 9 cluster pages justify a dedicated column.            |
| **Company & States merged**        | Company (5 links) + States (4 hubs) + Offshore combined into one column to keep total at 6. |
| **Gold packages starred (★)**      | Maintains premium-first hierarchy even in the footer link list.                             |
| **Flat URLs everywhere**           | No `/packages/` prefix. Package pages use descriptive flat URLs per approved architecture.  |
| **Crypto badges**                  | David accepts crypto (wire + crypto for shelf companies). Subtle badge treatment.           |
| **Column headers not linked**      | Headers are labels only — reduces confusion about clickability.                             |

---

## Branding Strip (Top of Footer)

Sits above the 6 link columns. Dark background continuous with the footer.

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                                                                  │
│  incorporate123                              [View Packages] [Contact Us] [📞]   │
│  Privacy, Asset Protection & Business                                            │
│  Formation Specialists. Trusted since 2000.                                      │
│                                                                                  │
├──────────────────────────────────────────────────────────────────────────────────┤
```

| Element           | Specification                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Logo**          | "incorporate123" — Outfit 22px, white, "123" in blue `#2563EB`                                                          |
| **Tagline**       | "Privacy, Asset Protection & Business Formation Specialists. Trusted since 2000." — Inter 13px, `rgba(255,255,255,0.4)` |
| **View Packages** | Ghost button → `/compare-packages/`                                                                                     |
| **Contact Us**    | Ghost button → `/contact/`                                                                                              |
| **Phone**         | Ghost button, `tel:` link → `(775) 313-4155`                                                                            |
| **Button style**  | 1.5px border `rgba(255,255,255,0.2)`, text `rgba(255,255,255,0.7)`, hover: brighter border + white text                 |
| **Separator**     | 1px `rgba(255,255,255,0.06)` line below strip, above columns                                                            |

---

## Desktop Layout (6 Columns + Legal Strip)

Background: Footer Dark `#0F172A`

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  [BRANDING STRIP — see above]                                                    │
├──────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  Privacy              Asset Protection      Company Formation    Compliance      │
│  ───────              ────────────────       ─────────────────    ──────────      │
│  Anonymous LLC         NV Asset Protection    Wyoming LLC          Registered Agent │
│  Anonymous Corp.       WY Asset Protection    Wyoming Corp.        WY Registered Agent │
│  Nominee Services      Charging Order         Nevada LLC           NV Registered Agent │
│  Wyoming Privacy       Investment Holding     Nevada Corp.         Annual Reports │
│  Nevada Privacy                               Shelf Companies      Foreign Registration │
│  CA Private Inc.       ── Compare ──          Entity Tax Guide     Domestication  │
│  FL Private Inc.       Best State AP          LLC vs Corporation   2nd-Tier Filings │
│                        WY vs NV AP                                 Shares & Records │
│  ── Compare ──                                ── Compare ──        Tax Obligations │
│  Best State Privacy                           WY vs NV                            │
│  WY vs NV Privacy                             Shelf vs New                        │
│                                               LLC vs S/C-Corp Tax                 │
│                                                                                  │
│  Packages              Company & States                                           │
│  ────────              ────────────────                                           │
│  ★ WY Gold (Private)   About                                                     │
│  ★ NV Gold (Private)   Contact                                                   │
│  WY Silver             FAQ                                                       │
│  NV Silver             Blog                                                      │
│  NV Bronze             Testimonials                                              │
│  CA Private            ────                                                      │
│  FL Private            Wyoming                                                   │
│  Shelf Companies       Nevada                                                    │
│                        California                                                │
│                        Florida                                                   │
│                        ────                                                      │
│                        Offshore                                                  │
│                                                                                  │
│  ════════════════════════════════════════════════════════════════════════════     │
│  © 2026 Incorporate123  ·  Privacy Policy  ·  Terms of Service                   │
│  1795 Meadow Wood Lane, Suite 100, Reno, NV 89502  ·  (775) 313-4155            │
│  [BTC] [ETH] [XRP] [LTC] [XMR]                                                  │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## Column 1: Privacy

| #   | Label                   | URL                                  | Type       |
| --- | ----------------------- | ------------------------------------ | ---------- |
| 1   | Anonymous LLC           | `/anonymous-llc/`                    | Cluster    |
| 2   | Anonymous Corporation   | `/anonymous-corporation/`            | Cluster    |
| 3   | Nominee Services        | `/nominee-services/`                 | Cluster    |
| 4   | Wyoming Privacy         | `/wyoming-privacy/`                  | Cluster    |
| 5   | Nevada Privacy          | `/nevada-privacy/`                   | Cluster    |
| 6   | California Private Inc. | `/california-private-incorporation/` | Cluster    |
| 7   | Florida Private Inc.    | `/florida-private-incorporation/`    | Cluster    |
| —   | ── Compare ──           |                                      | Divider    |
| 8   | Best State for Privacy  | `/best-state-for-privacy/`           | Comparison |
| 9   | WY vs NV for Privacy    | `/wyoming-vs-nevada-privacy/`        | Comparison |

**Total: 9 links**

## Column 2: Asset Protection

| #   | Label                     | URL                                    | Type       |
| --- | ------------------------- | -------------------------------------- | ---------- |
| 1   | Nevada Asset Protection   | `/nevada-asset-protection/`            | Cluster    |
| 2   | Wyoming Asset Protection  | `/wyoming-asset-protection/`           | Cluster    |
| 3   | Charging Order Protection | `/charging-order-protection/`          | Cluster    |
| 4   | Investment Holding LLC    | `/investment-holding-llc/`             | Cluster    |
| —   | ── Compare ──             |                                        | Divider    |
| 5   | Best State for AP         | `/best-state-for-asset-protection/`    | Comparison |
| 6   | WY vs NV for AP           | `/wyoming-vs-nevada-asset-protection/` | Comparison |

**Total: 6 links**

## Column 3: Company Formation

| #   | Label                       | URL                                | Type       |
| --- | --------------------------- | ---------------------------------- | ---------- |
| 1   | Wyoming LLC                 | `/wyoming-llc/`                    | Cluster    |
| 2   | Wyoming Corporation         | `/wyoming-corporation/`            | Cluster    |
| 3   | Nevada LLC                  | `/nevada-llc/`                     | Cluster    |
| 4   | Nevada Corporation          | `/nevada-corporation/`             | Cluster    |
| 5   | Shelf Companies             | `/shelf-companies/`                | Cluster    |
| 6   | Entity Tax Guide            | `/entity-tax-guide/`               | Cluster    |
| 7   | LLC vs Corporation          | `/llc-vs-corporation/`             | Cluster    |
| —   | ── Compare ──               |                                    | Divider    |
| 8   | Wyoming vs Nevada           | `/wyoming-vs-nevada/`              | Comparison |
| 9   | Shelf vs New Formation      | `/shelf-company-vs-new-formation/` | Comparison |
| 10  | LLC vs S-Corp vs C-Corp Tax | `/llc-vs-scorp-vs-ccorp-tax/`      | Comparison |

**Total: 10 links**

## Column 4: Compliance

| #   | Label                      | URL                            | Type    |
| --- | -------------------------- | ------------------------------ | ------- |
| 1   | Registered Agent Services  | `/registered-agent/`           | Cluster |
| 2   | Wyoming Registered Agent   | `/wyoming-registered-agent/`   | Cluster |
| 3   | Nevada Registered Agent    | `/nevada-registered-agent/`    | Cluster |
| 4   | Annual Reports             | `/annual-reports/`             | Cluster |
| 5   | Foreign State Registration | `/foreign-state-registration/` | Cluster |
| 6   | Domestication              | `/domestication/`              | Cluster |
| 7   | 2nd-Tier State Filings     | `/second-tier-state-filings/`  | Cluster |
| 8   | Shares & Corporate Records | `/shares-corporate-records/`   | Cluster |
| 9   | Tax Filing & Obligations   | `/tax-obligations/`            | Cluster |

**Total: 9 links**

## Column 5: Packages

| #   | Label                    | URL                                  | Note                                    |
| --- | ------------------------ | ------------------------------------ | --------------------------------------- |
| 1   | ★ Wyoming Gold (Private) | `/wyoming-private-incorporation/`    | Gold first (★ prefix)                   |
| 2   | ★ Nevada Gold (Private)  | `/nevada-private-incorporation/`     | Gold first (★ prefix)                   |
| 3   | Wyoming Silver           | `/wyoming-incorporation/`            |                                         |
| 4   | Nevada Silver            | `/nevada-incorporation/`             |                                         |
| 5   | Nevada Bronze            | `/nevada-basic-incorporation/`       |                                         |
| 6   | California Private       | `/california-private-incorporation/` | Dual-purpose URL (also Privacy cluster) |
| 7   | Florida Private          | `/florida-private-incorporation/`    | Dual-purpose URL (also Privacy cluster) |
| 8   | Shelf Companies          | `/shelf-companies/`                  |                                         |

**Total: 8 links**

> Note: Wyoming Bronze pending David's clarification on standalone status. CA/FL Private URLs are shared with Privacy cluster pages by design.

## Column 6: Company & States

| #   | Label        | URL              | Type                             |
| --- | ------------ | ---------------- | -------------------------------- |
| —   | **Company**  |                  | Section header                   |
| 1   | About Us     | `/about/`        | Page                             |
| 2   | Contact      | `/contact/`      | Page                             |
| 3   | FAQ          | `/faq/`          | Page                             |
| 4   | Blog         | `/blog/`         | Page                             |
| 5   | Testimonials | `/testimonials/` | Page                             |
| —   | ────         |                  | Divider                          |
| —   | **States**   |                  | Section header                   |
| 6   | Wyoming      | `/wyoming/`      | State hub                        |
| 7   | Nevada       | `/nevada/`       | State hub                        |
| 8   | California   | `/california/`   | State hub                        |
| 9   | Florida      | `/florida/`      | State hub                        |
| —   | ────         |                  | Divider                          |
| 10  | Offshore     | `/offshore/`     | Hub (kept for SEO, not promoted) |

**Total: 10 links**

---

## Legal Strip

| Element        | Content                                          | Link                     |
| -------------- | ------------------------------------------------ | ------------------------ |
| Copyright      | © 2026 Incorporate123                            | —                        |
| Privacy Policy | Privacy Policy                                   | `/privacy-policy/`       |
| Terms          | Terms of Service                                 | `/terms/`                |
| Address        | 1795 Meadow Wood Lane, Suite 100, Reno, NV 89502 | —                        |
| Phone          | (775) 313-4155                                   | `tel:+17753134155`       |
| Crypto         | BTC · ETH · XRP · LTC · XMR                      | Small badge icons, muted |

---

## Mobile Footer

Accordion sections — each column header is tappable. Legal strip always visible.

```
│  ▸ Privacy              │
│  ▸ Asset Protection     │
│  ▸ Company Formation    │
│  ▸ Compliance           │
│  ▸ Packages             │
│  ▸ Company & States     │
│  ─────────────────────  │
│  © 2026 Incorporate123  │
│  Privacy Policy · Terms │
│  1795 Meadow Wood Ln,   │
│  Suite 100, Reno, NV    │
│  📞 (775) 313-4155      │
│  [BTC][ETH][XRP][LTC][XMR]│
```

---

## Footer Design Specifications

| Property         | Value                                                  |
| ---------------- | ------------------------------------------------------ |
| Background       | `#0F172A` (Slate-900)                                  |
| Column headers   | Bold, white, Inter 14px, not linked                    |
| Link text        | Inter 14px, `rgba(255,255,255,0.6)`                    |
| Link hover       | Full white + underline                                 |
| Compare divider  | Subtle `rgba(255,255,255,0.1)` line + "Compare" label  |
| Legal separator  | Full-width `rgba(255,255,255,0.1)` line                |
| Crypto icons     | Small badge-style, muted white `rgba(255,255,255,0.4)` |
| Mobile accordion | Same column structure, tappable headers                |

---

## Link Count Summary

| Column                 | Links                |
| ---------------------- | -------------------- |
| Privacy                | 9                    |
| Asset Protection       | 6                    |
| Company Formation      | 10                   |
| Compliance             | 9                    |
| Packages               | 8                    |
| Company & States       | 10                   |
| Legal strip            | 2 (+ phone, address) |
| **Total footer links** | **54**               |

---

## Post-Launch Expansion (Not in Current Footer)

| Page                         | URL                              | Pillar           | Status                            |
| ---------------------------- | -------------------------------- | ---------------- | --------------------------------- |
| Real Estate Asset Protection | `/real-estate-asset-protection/` | Asset Protection | P2 expansion — dropped from final |
| LLC vs Living Trust          | `/llc-vs-living-trust/`          | Asset Protection | P2 expansion — dropped from final |
| BOI Reporting                | —                                | —                | Explicitly rejected by David      |

---

_Confidential — BIT Studios × Incorporate123_
