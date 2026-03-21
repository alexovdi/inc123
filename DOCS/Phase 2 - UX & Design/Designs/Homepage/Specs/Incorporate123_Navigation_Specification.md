# Incorporate123 — Navigation Specification

**Document 5 of 5** · Phase 2 Homepage Design Package
**Prepared by:** BIT Studios · **For:** David, Incorporate123
**Date:** March 2026
**Status:** Draft — Internal Reference

---

## Purpose

This document specifies every navigation element built alongside the homepage prototype: the desktop header, mega menu, mobile hamburger nav, breadcrumbs, footer sitemap, and sticky mobile CTA bar. These are global components — they appear on every page — but they're prototyped and approved as part of the homepage (Phase A in the build order).

**Source requirements:** Navigation requirements N-1 through N-12 from the User Journey Mapping document, Information Architecture nav structure, and the Validated Site Architecture.

---

## 1. Desktop Header

The header is the persistent navigation bar visible on every page at every viewport width ≥768px.

### Layout

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  [Logo]     Privacy ▾    Asset Protection ▾    Formation ▾    Packages       │
│                                                  About ▾    Login  📞 Phone  [Get Started →] │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Element Specifications

| Element | Position | Behavior | Destination |
|---------|----------|----------|-------------|
| **Logo** | Far left | Click returns to `/`. Always visible. | `/` |
| **Privacy** | Nav position 1 (lead) | Hover triggers mega menu column 1 | `/privacy/` |
| **Asset Protection** | Nav position 2 | Hover triggers mega menu column 2 | `/asset-protection/` |
| **Formation** | Nav position 3 | Hover triggers mega menu column 3 | `/formation/` |
| **Packages** | Nav position 4 | Direct link — no dropdown | `/compare-packages/` |
| **About** | Nav position 5 | Small dropdown: About, Contact, Testimonials | `/about/` |
| **Client Login** | Right utility cluster | Persistent — always visible, never hidden in dropdown | `/login/` |
| **Phone Number** | Right utility cluster | Clickable `tel:` link. Format: `(XXX) XXX-XXXX` | `tel:XXXXXXXXXX` |
| **"Get Started →"** | Far right | Ghost/outline button (blue `#2563EB`, not amber) | `/compare-packages/` |

### Why "Get Started" Is Not Amber

The header CTA uses ghost/outline styling to avoid visual competition with in-page amber conversion CTAs. If the header button were amber, every page would have two amber CTAs above the fold (header + page primary), violating the one-primary-per-section rule.

### Sticky Scroll Behavior

| State | Height | Background | Elements |
|-------|--------|-----------|----------|
| **Default** (top of page) | 80px | White, no shadow | All elements visible |
| **Scrolled** (past hero) | 60px | White, subtle bottom shadow (`0 1px 3px rgba(0,0,0,0.1)`) | All elements visible, logo reduced slightly |
| **Mega menu open** | 80px (locks to default) | White | Overlay dims page content behind menu |

### Requirement Mapping

| Req ID | Requirement | How Addressed |
|--------|-------------|---------------|
| N-1 | Intent-first main nav | Privacy · AP · Formation · Packages · About — intent labels, not geography |
| N-2 | Persistent Client Login | Visible in header on every page, never behind a dropdown |
| N-3 | Direct package access | "Packages" is a top-level nav item linking directly to `/compare-packages/` |
| N-4 | Phone number with tap-to-call | In header utility cluster, clickable on all viewports |
| N-5 | Mega menu with clusters | Hover-triggered mega dropdown per pillar (see Section 2) |

---

## 2. Mega Menu

The mega menu is the primary content-discovery mechanism for visitors who want to explore beyond the pillar landing pages. It shows every cluster and comparison page organized by pillar.

### Trigger

- **Desktop:** Hover on pillar nav label. 200ms delay before open (prevents accidental triggers). Stays open while cursor is within the menu area.
- **Close:** Cursor leaves menu area, or user clicks a link within the menu, or user presses Escape.
- **Keyboard:** Tab into nav item, press Enter or Space to open, Tab through menu items, Escape to close.

### Layout

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  PRIVACY (blue accent)        │  ASSET PROTECTION (green)  │  FORMATION (amber)           │
│  ─────────────────────        │  ─────────────────────     │  ─────────────────────        │
│  Anonymous LLC                │  Nevada Asset Protection   │  Wyoming LLC                  │
│  Anonymous Corporation        │  Wyoming Asset Protection  │  Wyoming Corporation          │
│  Nominee Services             │  Charging Order Protection │  Nevada LLC                   │
│  Wyoming Privacy              │  Investment Holding LLC    │  Nevada Corporation           │
│  Nevada Privacy               │  Real Estate AP            │  Shelf Companies              │
│  California Private Inc.      │  LLC vs Living Trust       │  LLC vs Corporation           │
│  Florida Private Inc.         │                            │  Foreign State Registration   │
│  BOI Reporting                │  ── Compare ──             │                               │
│                               │  Best State for AP         │  ── Compare ──                │
│  ── Compare ──                │  WY vs NV for AP           │  Wyoming vs Nevada            │
│  Best State for Privacy       │                            │  Shelf vs New Formation       │
│  WY vs NV for Privacy         │                            │                               │
│                               │                            │                               │
│  [Explore All Privacy →]      │  [Explore All AP →]        │  [Explore All Formation →]    │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Column Specifications

Each pillar column follows the same structure:

| Element | Specification |
|---------|--------------|
| **Column header** | Pillar name, bold, pillar color. Clickable — links to pillar hub. |
| **Top border accent** | 3px solid in pillar color (blue/green/amber). Establishes the color-coding system. |
| **Cluster links** | All cluster pages listed alphabetically within the pillar. Inter 14px, default text color. Hover: pillar color + underline. |
| **"Compare" subsection** | Separated by a subtle divider and "Compare" label. Lists comparison pages for that pillar. |
| **Footer link** | "Explore All [Pillar] →" — links to pillar hub page. Pillar color, medium weight. |
| **Link count** | Privacy: 8 clusters + 2 comparisons = 10. AP: 6 clusters + 2 comparisons = 8. Formation: 7 clusters + 2 comparisons = 9. |

### Complete Link Inventory

#### Privacy Column (Blue · `#2563EB`)

| Label | URL | Type |
|-------|-----|------|
| Anonymous LLC | `/anonymous-llc/` | Cluster |
| Anonymous Corporation | `/anonymous-corporation/` | Cluster |
| Nominee Services | `/nominee-services/` | Cluster |
| Wyoming Privacy | `/wyoming-privacy/` | Cluster |
| Nevada Privacy | `/nevada-privacy/` | Cluster |
| California Private Inc. | `/california-private-incorporation/` | Cluster |
| Florida Private Inc. | `/florida-private-incorporation/` | Cluster |
| BOI Reporting | `/beneficial-ownership-reporting/` | Cluster |
| Best State for Privacy | `/best-state-for-privacy/` | Comparison |
| WY vs NV for Privacy | `/wyoming-vs-nevada-privacy/` | Comparison |

#### Asset Protection Column (Green · `#16A34A`)

| Label | URL | Type |
|-------|-----|------|
| Nevada Asset Protection | `/nevada-asset-protection/` | Cluster |
| Wyoming Asset Protection | `/wyoming-asset-protection/` | Cluster |
| Charging Order Protection | `/charging-order-protection/` | Cluster |
| Investment Holding LLC | `/investment-holding-llc/` | Cluster |
| Real Estate Asset Protection | `/real-estate-asset-protection/` | Cluster |
| LLC vs Living Trust | `/llc-vs-living-trust/` | Cluster |
| Best State for AP | `/best-state-asset-protection/` | Comparison |
| WY vs NV for AP | `/wyoming-vs-nevada-asset-protection/` | Comparison |

#### Formation Column (Amber · `#D97706`)

| Label | URL | Type |
|-------|-----|------|
| Wyoming LLC | `/wyoming-llc/` | Cluster |
| Wyoming Corporation | `/wyoming-corporation/` | Cluster |
| Nevada LLC | `/nevada-llc/` | Cluster |
| Nevada Corporation | `/nevada-corporation/` | Cluster |
| Shelf Companies | `/shelf-companies/` | Cluster |
| LLC vs Corporation | `/llc-vs-corporation/` | Cluster |
| Foreign State Registration | `/foreign-state-registration/` | Cluster |
| Wyoming vs Nevada | `/wyoming-vs-nevada/` | Comparison |
| Shelf vs New Formation | `/shelf-company-vs-new-formation/` | Comparison |

### Packages Dropdown

"Packages" (nav position 4) does **not** trigger a mega menu — it links directly to `/compare-packages/`. If user research during prototyping reveals a need for a packages dropdown, a simple dropdown listing packages by tier could be added:

```
┌─────────────────────────┐
│  ★ Gold (Privacy)       │
│    Wyoming Gold          │
│    Nevada Gold           │
│  Silver (Formation)      │
│    Wyoming Silver        │
│    Nevada Silver         │
│  Bronze (Nevada)         │
│  CA/FL Private           │
│    California Private    │
│    Florida Private       │
│  ────────────────────    │
│  Compare All Packages →  │
└─────────────────────────┘
```

**Decision for prototype review:** Start with direct link. Add dropdown only if David or user testing indicates visitors need package-level navigation in the header.

### About Dropdown

Simple dropdown, not a mega menu:

```
┌──────────────────┐
│  About Us        │
│  Contact         │
│  Testimonials    │
└──────────────────┘
```

---

## 3. Mobile Navigation

### Mobile Header

```
┌──────────────────────────────┐
│  [☰]   [Logo]   [📞]  [Login] │
└──────────────────────────────┘
```

| Element | Specification |
|---------|--------------|
| **Hamburger icon** | Left-aligned. Tap opens full-screen menu overlay. |
| **Logo** | Centered. Links to `/`. |
| **Phone icon** | Right side. Tap-to-call. Always one tap away. |
| **Login** | Right side, next to phone. Text link to `/login/`. |

### Mobile Menu Overlay

When the hamburger is tapped, a full-screen overlay slides in from the left (or fades in — define during visual design).

```
┌──────────────────────────────┐
│  [✕ Close]                   │
│                              │
│  [Get Started →]  (button)   │
│  [Compare Packages →]        │
│  Client Login                │
│                              │
│  ──────────────────────────  │
│                              │
│  ▸ Privacy                   │  ← tap to expand
│  ▸ Asset Protection          │
│  ▸ Formation                 │
│  ▸ Compliance                │
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
│  📞 (XXX) XXX-XXXX           │
│                              │
└──────────────────────────────┘
```

### Menu Structure Rules

| Rule | Specification | Rationale |
|------|--------------|-----------|
| **Packages and Login above the fold** | First items visible, before pillar accordions | Informed Buyer (Persona D) and Returning Client (Persona F) need instant access |
| **Pillar structure, not alphabetical** | Four pillar accordions matching the desktop pillar nav | Maintains the intent-first architecture on mobile (Req N-11) |
| **Accordion behavior** | Tap pillar name → expand to show cluster + comparison links. Tap again → collapse. Only one pillar open at a time. | Prevents overwhelming scroll depth |
| **Pillar color accents** | Each accordion header gets a left border or icon tint in its pillar color | Reinforces color-coding system on mobile |
| **Phone number at bottom** | Full phone number, tappable, always visible without scrolling if menu content is short | Backup contact for visitors who scan the whole menu |

### Expanded Pillar Accordion Example

```
│  ▾ Privacy  (blue accent)     │
│    Anonymous LLC               │
│    Anonymous Corporation       │
│    Nominee Services            │
│    Wyoming Privacy             │
│    Nevada Privacy              │
│    California Private Inc.     │
│    Florida Private Inc.        │
│    BOI Reporting               │
│    ── Compare ──               │
│    Best State for Privacy      │
│    WY vs NV for Privacy        │
│    ─────────────────────       │
│    Explore All Privacy →       │
│                                │
│  ▸ Asset Protection            │
│  ▸ Formation                   │
│  ▸ Compliance                  │
```

### Requirement Mapping

| Req ID | Requirement | How Addressed |
|--------|-------------|---------------|
| N-10 | Sticky bottom CTA bar | Separate component (see Section 5) — not part of menu |
| N-11 | Pillar structure in hamburger | Four accordion sections matching desktop pillars |
| N-12 | Complete footer sitemap | Footer (Section 7) handles full sitemap; mobile menu focuses on primary nav |

---

## 4. Breadcrumbs

Breadcrumbs appear on every cluster, comparison, package, and state hub page. They do NOT appear on the homepage, pillar hub pages, or utility pages (About, Contact, FAQ, Blog).

### Format

```
Home  >  [Pillar Name]  >  Current Page
```

### Examples

| Page | Breadcrumb |
|------|-----------|
| Anonymous LLC | Home > Privacy > Anonymous LLC |
| Charging Order Protection | Home > Asset Protection > Charging Order Protection |
| Wyoming vs Nevada | Home > Formation > Wyoming vs Nevada |
| Wyoming Gold Package | Home > Packages > Wyoming Gold |
| Wyoming State Hub | Home > Wyoming |

### Specifications

| Property | Value |
|----------|-------|
| **Position** | Below header, above page content. Left-aligned within the content container. |
| **Font** | Inter Text SM (14px), muted color (`#64748B`) |
| **Separator** | " > " (with spaces) or "›" chevron |
| **Links** | "Home" links to `/`. Pillar name links to pillar hub. Current page is not linked (plain text, slightly darker). |
| **Mobile** | Same format but with truncation if too long. Show "... > Pillar > Current" if the full path exceeds the viewport width. |
| **Schema** | BreadcrumbList structured data (JSON-LD) on every page with breadcrumbs. |

### Pages That Get Breadcrumbs

| Page Type | Breadcrumb? | Format |
|-----------|------------|--------|
| Homepage | No | — |
| Pillar pages | No | — (they ARE the second level) |
| Cluster pages | **Yes** | Home > Pillar > Cluster |
| Comparison pages | **Yes** | Home > Pillar > Comparison |
| Package pages | **Yes** | Home > Packages > Package |
| State hub pages | **Yes** | Home > State |
| Checkout steps | **Yes** | Home > Checkout > Step |
| Utility pages | No | — |
| Offshore pages | **Yes** | Home > Offshore > Page |

---

## 5. Sticky Mobile CTA Bar

A persistent bottom bar on mobile viewports that provides the primary conversion action and phone access at all times.

### Layout

```
┌──────────────────────────────┐
│  [Protect Your Privacy →] [📞] │
└──────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| **Viewport** | Mobile only (<768px) |
| **Position** | Fixed to bottom of viewport |
| **Visibility** | Hidden on page load. Appears after user scrolls past the hero section (or past the first CTA). |
| **Background** | White with top shadow (`0 -2px 8px rgba(0,0,0,0.1)`) |
| **Height** | 56–64px |
| **Z-index** | Above all page content, below modals/overlays and the mobile menu |
| **CTA button** | Amber primary, compact size. Fills available width minus phone icon space. |
| **Phone icon** | 44×44px touch target. Tap-to-call. Right-aligned. |
| **Safe area** | Respects iOS safe area insets (home indicator bar). Add bottom padding on devices that need it. |

### Context-Sensitive Label

The sticky bar CTA label changes based on the current page type to stay contextually relevant:

| Page Type | CTA Label | Target |
|-----------|----------|--------|
| Homepage | "Protect Your Privacy" | `/privacy/` |
| Privacy pillar/clusters | "Explore Privacy Packages" | `/compare-packages/` (filtered) |
| Asset Protection pillar/clusters | "Protect Your Assets" | `/compare-packages/` (filtered) |
| Formation pillar/clusters | "Start Your Company" | `/compare-packages/` (filtered) |
| Package pages | "Get Started — $X,XXX" | `/checkout/configure/` |
| Comparison pages | "View Packages" | `/compare-packages/` |
| State hub pages | "View [State] Packages" | State-filtered packages |
| Checkout flow | Hidden (checkout has its own navigation) | — |

---

## 6. On-Page Navigation Patterns

Beyond the global header/footer/breadcrumbs, certain page types include additional navigation elements. These are specified here for completeness since they share components with the homepage navigation.

### Pillar-Aware Sidebar (Desktop)

On cluster pages and comparison pages, a sidebar shows related content from the same pillar plus 1–2 cross-pillar links.

```
┌────────────────────┐
│  PRIVACY            │  (pillar label, blue)
│  ────────────────── │
│  • Anonymous LLC    │  (current = bold)
│  • Nominee Services │
│  • Wyoming Privacy  │
│  • Nevada Privacy   │
│  • CA Private Inc.  │
│  • FL Private Inc.  │
│  ────────────────── │
│  Compare:           │
│  • Best State       │
│  • WY vs NV         │
│  ────────────────── │
│  Related:           │
│  • Asset Protection │  (cross-pillar)
│  • View Packages    │  (conversion shortcut)
└────────────────────┘
```

| Property | Value |
|----------|-------|
| **Viewport** | Desktop only (≥1280px). On tablet and mobile, this content moves to an "Explore More" section at the bottom of the page, before the footer CTA. |
| **Position** | Right sidebar, sticky on scroll (stops before footer). |
| **Current page** | Bold, no link. |
| **Cross-pillar links** | Maximum 2. Always below the pillar's own links. Follow the cross-pillar CTA placement rule (below primary content). |

### "Where to Go Next" Block

At the end of every content page (cluster, comparison, state hub), a navigation block suggests the next logical step in the visitor's journey.

```
┌──────────────────────────────────────────────────────────────────┐
│  Where to Go Next                                                │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Compare      │  │ View         │  │ Talk to      │          │
│  │ States →     │  │ Packages →   │  │ an Expert →  │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└──────────────────────────────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| **Content** | Journey-aware: suggestions change based on the current page's position in the funnel (education → comparison → package → consultation). |
| **Max items** | 3 cards. One progression CTA, one cross-pillar, one consultation. |
| **Placement** | After main content, before FAQ section (if present) or before footer CTA. |

---

## 7. Site Footer

The footer is the complete sitemap for SEO and deep-linking. It appears on every page.

### Desktop Layout (6 Columns)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Background: Footer Dark (#0F172A)                                           │
│                                                                              │
│  Privacy         Asset Protection   Formation         Company               │
│  ───────         ────────────────   ─────────         ───────               │
│  Anonymous LLC    NV Asset Prot.     Wyoming LLC       About                │
│  Anon. Corp.     WY Asset Prot.     Wyoming Corp.     Contact              │
│  Nominee Svc.    Charging Order     Nevada LLC        FAQ                  │
│  WY Privacy      Holding LLC        Nevada Corp.      Blog                 │
│  NV Privacy      Real Estate AP     Shelf Companies   Testimonials         │
│  CA Private      LLC vs Trust       LLC vs Corp.      Client Login         │
│  FL Private                         Foreign Reg.                            │
│  BOI Reporting   ── Compare ──      ── Compare ──                           │
│                  Best State AP      WY vs NV                                │
│  ── Compare ──   WY vs NV AP        Shelf vs New                            │
│  Best State                                                                  │
│  WY vs NV                                                                    │
│                                                                              │
│  Packages              States & Offshore                                     │
│  ────────              ──────────────────                                    │
│  ★ WY Gold (Privacy)   Wyoming                                              │
│  ★ NV Gold (Privacy)   Nevada                                               │
│  WY Silver             California                                           │
│  NV Silver             Florida                                              │
│  NV Bronze             ────────                                             │
│  CA Private            Offshore                                             │
│  FL Private            Compliance                                           │
│  Shelf Companies                                                            │
│                                                                              │
│  ════════════════════════════════════════════════════════════════════════     │
│  © 2026 Incorporate123  ·  Privacy Policy  ·  Terms of Service              │
│  Kingsbury Executive Suites, [Address], Reno, NV  ·  (XXX) XXX-XXXX        │
│  [BTC] [ETH] [XRP] [LTC] [XMR]                                             │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Column Specifications

| Column | Label | Content | Link Count |
|--------|-------|---------|------------|
| 1 | "Privacy" | All Privacy clusters + comparisons | 10 |
| 2 | "Asset Protection" | All AP clusters + comparisons | 8 |
| 3 | "Business Incorporation" | All Formation clusters + comparisons | 9 |
| 4 | "Company" | About, Contact, FAQ, Blog, Testimonials, Client Login | 6 |
| 5 | "Packages" | All 8 packages, Gold first with ★ indicator | 8 |
| 6 | "States & Offshore" | WY, NV, CA, FL hubs + Offshore + Compliance hub | 6 |

### Footer Design Rules

| Rule | Specification |
|------|--------------|
| **Column headers** | Bold, white, Inter 14px. Not linked (use as labels only). |
| **Links** | Inter 14px, muted white (`rgba(255,255,255,0.6)`). Hover: full white + underline. |
| **Gold packages** | Prefixed with ★ to maintain Gold-first visual hierarchy even in the footer. |
| **Offshore placement** | In footer column 6, not in the main navigation. Present for SEO link equity without main-nav prominence (Req N-12). |
| **Compliance** | In footer column 6 (under States & Offshore). Not a main nav pillar dropdown — it's a supporting service accessed via footer or direct search. |
| **Crypto icons** | Small badge-style. BTC, ETH, XRP, LTC, XMR. Muted white, subtle. |
| **Legal strip** | Below columns, separated by a divider. Copyright, Privacy Policy link, Terms link, physical address, phone. |

### Mobile Footer

Footer columns collapse to accordion sections. Each column label becomes a tappable header that expands to reveal its links.

```
│  ▸ Privacy              │
│  ▸ Asset Protection     │
│  ▸ Business Incorporation│
│  ▸ Company              │
│  ▸ Packages             │
│  ▸ States & Offshore    │
│  ─────────────────────  │
│  © 2026 Incorporate123  │
│  Privacy Policy · Terms │
│  Reno, NV · 📞 Phone    │
│  [BTC][ETH][XRP][LTC][XMR]│
```

The legal strip and contact info remain visible without expanding any accordion. The phone number is tappable.

---

## 8. Accessibility Requirements

All navigation components must meet WCAG 2.1 AA and follow these patterns:

| Pattern | Implementation |
|---------|---------------|
| **Keyboard navigation** | Tab through all nav items. Enter/Space opens mega menu. Arrow keys navigate within mega menu. Escape closes. |
| **Focus management** | When mega menu opens, focus moves to first link in the menu. When it closes, focus returns to the trigger nav item. |
| **ARIA roles** | `role="navigation"` on nav container. `aria-expanded` on mega menu triggers. `aria-current="page"` on active nav item. `aria-label` on each nav region ("Main navigation", "Footer navigation", "Breadcrumb"). |
| **Skip link** | "Skip to main content" link, visually hidden but visible on focus, placed before the header. |
| **Mobile menu** | `aria-hidden="true"` when closed. Focus trap when open (Tab cycles within menu). |
| **Breadcrumb** | `<nav aria-label="Breadcrumb">` with `<ol>` list. Schema.org BreadcrumbList JSON-LD. |
| **Sticky bar** | `role="complementary"` or `role="contentinfo"`. Does not trap focus or interfere with page tab order. |
| **Color contrast** | All nav text meets 4.5:1 contrast ratio. Pillar color accents are decorative (not relied upon for meaning — text labels carry the meaning). |
| **Reduced motion** | Mega menu and mobile menu animations respect `prefers-reduced-motion: reduce`. Instant show/hide with no transition when enabled. |

---

## 9. Interaction Timing

| Interaction | Timing | Notes |
|-------------|--------|-------|
| Mega menu open delay | 200ms after hover enters nav item | Prevents accidental triggers during mouse movement |
| Mega menu close delay | 300ms after hover leaves menu area | Gives user time to move cursor to menu content |
| Mobile menu slide-in | 250ms ease-out | Or fade, per visual design decision |
| Mobile menu slide-out | 200ms ease-in | Slightly faster close feels responsive |
| Sticky bar appear | Triggered when hero section leaves viewport. 200ms fade-in. | Uses Intersection Observer, not scroll position math |
| Accordion expand | 250ms ease-out | Smooth height transition. Content fades in after height settles. |
| Accordion collapse | 200ms ease-in | Slightly faster than expand |
| Header scroll compact | 150ms transition on height and shadow | Smooth but quick — shouldn't feel sluggish |

---

## 10. Complete Navigation Audit

This table confirms that every page in the 71-page architecture is reachable from the navigation (header, mega menu, footer, or breadcrumb) within 2 clicks from the homepage.

| Page Type | Count | Reachable Via | Max Clicks from Homepage |
|-----------|-------|--------------|-------------------------|
| Pillar pages | 4 | Header nav (1 click) | 1 |
| Cluster pages | 24 | Mega menu (1 click) or pillar page → link (2 clicks) | 1–2 |
| Comparison pages | 6 | Mega menu "Compare" subsection (1 click) | 1–2 |
| Package pages | 8 | Footer "Packages" column (1 click) or homepage package strip (1 click) | 1 |
| State hub pages | 4 | Footer "States" column (1 click) | 1 |
| Offshore pages | 6 | Footer "Offshore" link → offshore hub → page (2 clicks) | 2 |
| Utility pages | 10 | Header "About" dropdown or footer "Company" column (1 click) | 1 |
| Checkout steps | 4 | Package page CTA → checkout (2 clicks from homepage) | 2–3 |
| **Total** | **~71** | — | **Max 3 clicks** |

No page on the site is more than 3 clicks from the homepage. Most are reachable in 1–2.

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
