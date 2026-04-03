# Incorporate123 — Homepage Component Inventory (Layout & Content Only)

**Document 4 of 5** · Phase 2 Homepage Design Package
**Prepared by:** BIT Studios · **For:** David, Incorporate123
**Date:** March 2026
**Status:** Draft — Internal Reference

---

## Purpose

This document lists every unique UI component the homepage requires, organized by the design system's three-layer hierarchy (Primitives → Composites → Layouts). Each component is tagged as homepage-only or reusable across other templates, and maps to a specific homepage section.

This inventory feeds directly into the Component Library deliverable in the Phase 2 visual design track (8 hours allocated). Building the homepage first means these components become the foundation the rest of the site inherits.

---

## Component Summary

| Layer      | Components | New for Homepage    | Reused Across Site |
| ---------- | ---------- | ------------------- | ------------------ |
| Primitives | 9          | 0 (all reusable)    | 9                  |
| Composites | 13         | 3 homepage-specific | 10 reusable        |
| Layouts    | 3          | 1 homepage-specific | 2 reusable         |
| **Total**  | **25**     | **4**               | **21**             |

The homepage introduces 25 components. Only 4 are homepage-specific — the remaining 21 carry directly into pillar, package, cluster, comparison, state hub, and checkout templates. This is why the homepage is built first: it seeds the component library for the entire site.

---

## Layer 1: Primitives

Atomic UI elements with CVA (Class Variance Authority) variants for size and state. None are homepage-exclusive — every primitive is used across multiple templates.

### P1. Button

| Property           | Specification                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| **Variants**       | `primary`, `secondary` (ghost/outline), `ghost` (transparent + underline on hover)                  |
| **Sizes**          | `sm`, `md`, `lg`                                                                                    |
| **States**         | default, hover, focus, active, disabled                                                             |
| **Props**          | `label`, `href`, `icon` (optional right arrow), `variant`, `size`, `fullWidth` (boolean for mobile) |
| **Homepage usage** | Hero CTAs (1a, 1b), Package strip CTAs (3a, 3c, 3d), Final CTA (8a, 8b), Mobile sticky bar (M1)     |
| **Reused on**      | Every page type — pillar CTAs, package CTAs, checkout buttons, comparison CTAs                      |

### P2. TextLink

| Property           | Specification                                                                      |
| ------------------ | ---------------------------------------------------------------------------------- |
| **Variants**       | `default`, `muted` (safety net style), `pillar` (inherits pillar context)          |
| **Props**          | `label`, `href`, `icon` (optional arrow), `variant`                                |
| **Homepage usage** | Pillar card CTAs (2a–2d), consultation safety nets (1c, 3b, 8c), compare link (3e) |
| **Reused on**      | Breadcrumbs, in-content links, sidebar links, footer links                         |

### P3. Badge

| Property           | Specification                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| **Variants**       | `highlight` ("Most Popular"), `pillar`, `trust`                                                   |
| **Sizes**          | `sm`, `md`                                                                                        |
| **Props**          | `label`, `variant`, `icon` (optional)                                                             |
| **Homepage usage** | Gold "Most Popular" badge (Section 3), trust signal badges (Section 5), pillar labels (Section 2) |
| **Reused on**      | Package pages (tier badges), pillar pages (pillar label), comparison tables                       |

### P4. Icon

| Property           | Specification                                                                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Source**         | Lucide React (MIT licensed, tree-shakeable)                                                                                                    |
| **Sizes**          | `sm` (16px), `md` (20px), `lg` (24px), `xl` (32px)                                                                                             |
| **Homepage usage** | Differentiator icons (Section 4), trust signal icons (Section 5), pillar card icons (Section 2), phone icon, crypto icons, arrow icons on CTAs |
| **Reused on**      | Every page type                                                                                                                                |

### P5. Heading

| Property           | Specification                                                                    |
| ------------------ | -------------------------------------------------------------------------------- |
| **Variants**       | `display-xl`, `display-lg`, `display-sm`, `section`                              |
| **Semantic**       | Renders appropriate HTML heading level (`h1`–`h4`) independent of visual size    |
| **Homepage usage** | Hero headline (h1, display-xl), section headlines (h2, display-lg or display-sm) |
| **Reused on**      | Every page type                                                                  |

### P6. BodyText

| Property           | Specification                                                  |
| ------------------ | -------------------------------------------------------------- |
| **Variants**       | `lg` (lead), `base` (body), `sm` (caption), `xs` (legal)       |
| **Homepage usage** | Hero subhead (lg), card descriptions (base), trust labels (sm) |
| **Reused on**      | Every page type                                                |

### P7. PriceDisplay

| Property           | Specification                                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **Variants**       | `featured` (large, for Gold), `standard` (medium, for Silver/Bronze), `renewal` (smaller, paired with formation price) |
| **Props**          | `amount`, `period` (optional — "/yr"), `label` (optional — "WY" / "NV"), `variant`                                     |
| **Homepage usage** | Package strip pricing (Section 3)                                                                                      |
| **Reused on**      | Package pages, comparison tables, checkout summary                                                                     |

### P8. Divider

| Property           | Specification                                                    |
| ------------------ | ---------------------------------------------------------------- |
| **Variants**       | `subtle`, `section` (used between major page sections), `pillar` |
| **Homepage usage** | Between sections, inside footer                                  |
| **Reused on**      | Every page type                                                  |

### P9. Container

| Property           | Specification                                                                                  |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| **Max widths**     | `narrow` (768px — text content), `default` (1280px — standard), `wide` (1440px — full layouts) |
| **Padding**        | Responsive — 16px mobile, 24px tablet, 0 desktop (centered)                                    |
| **Homepage usage** | Wraps every section's inner content                                                            |
| **Reused on**      | Every page type                                                                                |

---

## Layer 2: Composites

Multi-element components combining primitives. These are the building blocks of page sections.

### C1. SiteHeader ♻️

| Property             | Specification                                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Behaviors**        | Sticky on scroll (compact mode), mega menu trigger on hover/tap                                                    |
| **Responsive**       | Desktop: full nav bar · Mobile: hamburger + logo + phone icon + login                                              |
| **Homepage section** | Section 0                                                                                                          |
| **Reused on**        | Every page (global component)                                                                                      |

### C2. MegaMenu ♻️

| Property             | Specification                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------ |
| **Contains**         | Pillar columns (Privacy/AP/Formation) each listing cluster links + "Compare" subsection    |
| **Behavior**         | Desktop: hover-triggered dropdown with overlay · Mobile: accordion expand within hamburger |
| **Homepage section** | Section 0 (triggered from header)                                                          |
| **Reused on**        | Every page (global component)                                                              |

### C3. MobileNav ♻️

| Property             | Specification                                                                         |
| -------------------- | ------------------------------------------------------------------------------------- |
| **Contains**         | Packages link, Login link (above fold), pillar accordions, phone number (tap-to-call) |
| **Behavior**         | Full-screen overlay, accordion expand per pillar, close on navigation or X            |
| **Key rule**         | Maintains pillar structure — NOT an alphabetical page list                            |
| **Homepage section** | Section 0 (mobile only)                                                               |
| **Reused on**        | Every page (global component)                                                         |

### C4. HeroSection 🏠

| Property             | Specification                                                                                                                                                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Contains**         | Heading (display-xl), BodyText (lg subhead), Button (primary), Button (secondary), TextLink (safety net), MiniTrustStrip, background graphic                                                                                                          |
| **Responsive**       | Desktop: text left + graphic right · Mobile: graphic above, text below, CTAs stacked full-width                                                                                                                                                       |
| **Homepage section** | Section 1                                                                                                                                                                                                                                             |
| **Reused on**        | Homepage only — unique component. However, the inner pattern (heading + subhead + dual CTA + safety net) recurs on pillar pages as a simplified variant. Consider extracting a `HeroBlock` primitive if pillar page heroes follow the same structure. |

### C5. PillarCard ♻️

| Property             | Specification                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Contains**         | Pillar top border (4px), Icon, Badge (pillar label), BodyText (core message), BodyText (trust element, italic), TextLink (soft CTA)   |
| **Props**            | `pillar` (privacy/asset/formation/compliance), `title`, `message`, `trustElement`, `ctaLabel`, `ctaHref`                              |
| **Homepage section** | Section 2                                                                                                                             |
| **Reused on**        | State hub pages (cross-pillar routing cards), comparison pages (pillar context), potentially pillar pages (sibling pillar references) |

### C6. PackagePreviewCard ♻️

| Property              | Specification                                                                                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Contains**          | Badge (tier name + optional "Most Popular"), PriceDisplay (formation), PriceDisplay (renewal), BodyText (key inclusions, 3 items max), Button (primary for Gold / secondary for Silver/Bronze), TextLink (safety net for Gold only) |
| **Props**             | `tier` (gold/silver/bronze), `highlighted` (boolean — Gold only), `prices` (array of state/amount pairs), `renewal`, `inclusions`, `ctaLabel`, `ctaHref`                                                                            |
| **Highlighted state** | Elevated z-index, badge visible                                                                                                                                                                                                     |
| **Homepage section**  | Section 3                                                                                                                                                                                                                           |
| **Reused on**         | Package pages (expanded version with full feature list), comparison pages (summary cards), state hub pages (package quick links)                                                                                                    |

### C7. DifferentiatorCard 🏠

| Property             | Specification                                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Contains**         | Icon (lg), Heading (section size), BodyText (sm)                                                                                  |
| **Layout**           | Icon above title above description, centered                                                                                      |
| **Homepage section** | Section 4                                                                                                                         |
| **Reused on**        | Potentially About page. Otherwise homepage-only. Simple enough that it could be a generic `IconTextBlock` if About page needs it. |

### C8. TrustSignalsBar ♻️

| Property             | Specification                                                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Contains**         | Array of Badge components (trust variant) with icons and labels                                                                                       |
| **Layout**           | Horizontal row on desktop, 2×2 or 2×3 grid on mobile                                                                                                  |
| **Props**            | `signals` (array of icon + label pairs), `compact` (boolean — lighter version for non-homepage pages)                                                 |
| **Homepage section** | Section 5                                                                                                                                             |
| **Reused on**        | Every conversion page (package pages, checkout), pillar pages (compact variant). The homepage gets the full version; other pages get `compact: true`. |

### C9. ProcessStep ♻️

| Property             | Specification                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Contains**         | Step number (circle), Heading (step title), BodyText (description)                                            |
| **Props**            | `number`, `title`, `description`                                                                              |
| **Homepage section** | Section 6 (4 instances connected by a progress line)                                                          |
| **Reused on**        | Checkout flow (step indicator uses same visual language), potentially "How It Works" sections on pillar pages |

### C10. ProcessTimeline 🏠

| Property             | Specification                                                                                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Contains**         | Array of ProcessStep components connected by a visual line/arrows                                                                   |
| **Layout**           | Horizontal on desktop (4 steps in a row), vertical on mobile (stacked with left-side line)                                          |
| **Props**            | `steps` (array of ProcessStep data)                                                                                                 |
| **Homepage section** | Section 6                                                                                                                           |
| **Reused on**        | Homepage only in this form. Checkout step indicator is a different component (StepIndicator) with active/completed/upcoming states. |

### C11. TestimonialCard ♻️

| Property             | Specification                                                              |
| -------------------- | -------------------------------------------------------------------------- |
| **Contains**         | BodyText (quote), attribution (name + descriptor), star rating (optional)  |
| **Props**            | `quote`, `name`, `descriptor`, `rating` (optional, 1–5)                    |
| **Key rule**         | No client photos. Initials avatar or abstract icon only.                   |
| **Homepage section** | Section 7                                                                  |
| **Reused on**        | Package pages (testimonials section), About page, potentially pillar pages |

### C12. TestimonialCarousel ♻️

| Property             | Specification                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| **Contains**         | Array of TestimonialCard components, navigation dots, optional auto-advance                         |
| **Behavior**         | Desktop: shows 3 cards in grid (static if ≤3, carousel if >3) · Mobile: 1 card, swipeable with dots |
| **Props**            | `testimonials` (array), `autoAdvance` (boolean), `interval` (ms)                                    |
| **Accessible**       | Pause on hover, keyboard navigable, ARIA live region for screen readers                             |
| **Homepage section** | Section 7                                                                                           |
| **Reused on**        | Package pages, About page                                                                           |

### C13. StickyMobileCTA ♻️

| Property             | Specification                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| **Contains**         | Button (primary, compact), phone icon (tap-to-call)                                             |
| **Behavior**         | Hidden on page load. Appears after user scrolls past hero section. Fixed to bottom of viewport. |
| **Layout**           | Full-width bar: CTA button fills available space, phone icon on right                           |
| **Z-index**          | Above all content, below modals/overlays                                                        |
| **Homepage section** | Mobile only — persistent                                                                        |
| **Reused on**        | Every page on mobile (global component). CTA label and target URL change per page type.         |

---

## Layer 3: Layouts

Page-level layout patterns defining section arrangement, content areas, navigation, and footer.

### L1. HomepageLayout 🏠

| Property                | Specification                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Structure**           | SiteHeader → HeroSection → Pillar Cards → Package Strip → Differentiators → Trust Bar → Process Timeline → Testimonials → Final CTA → SiteFooter |
| **Section backgrounds** | Alternating pattern: dark (hero) → light → light → dark (differentiators) → neutral (trust) → light → light → dark (final CTA) → dark (footer)   |
| **Spacing**             | Section-level padding: desktop and mobile values. Define as design token `--section-padding`.                                                    |
| **Homepage section**    | Wraps all sections                                                                                                                               |
| **Reused on**           | Homepage only                                                                                                                                    |

### L2. SiteHeader Layout ♻️

| Property       | Specification                                                                     |
| -------------- | --------------------------------------------------------------------------------- |
| **Structure**  | Logo (left) → Primary Nav (center) → Utility cluster: Login + Phone + CTA (right) |
| **Responsive** | Desktop: horizontal bar · Mobile: hamburger + logo + phone + login                |
| **Sticky**     | Fixed to top on scroll, compact mode (reduced height)                             |
| **Reused on**  | Every page (global layout)                                                        |

### L3. SiteFooter Layout ♻️

| Property       | Specification                                                          |
| -------------- | ---------------------------------------------------------------------- |
| **Structure**  | 6-column link grid → Legal strip → Contact info → Crypto icons         |
| **Responsive** | Desktop: 6 columns · Tablet: 3×2 · Mobile: accordion expand per column |
| **Reused on**  | Every page (global layout)                                             |

---

## Build Order

Components should be built in dependency order. A component can't be built until its child primitives exist.

| Phase  | Components                                                                                                    | Rationale                                                       |
| ------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **A1** | P1 Button, P2 TextLink, P3 Badge, P4 Icon, P5 Heading, P6 BodyText, P7 PriceDisplay, P8 Divider, P9 Container | All primitives first — everything else depends on these         |
| **A2** | C1 SiteHeader, C2 MegaMenu, C3 MobileNav, L2 SiteHeader Layout, C13 StickyMobileCTA                           | Navigation framework — header must work before any page content |
| **B1** | C4 HeroSection, C5 PillarCard, C6 PackagePreviewCard                                                          | Core homepage sections — highest-priority content blocks        |
| **B2** | C7 DifferentiatorCard, C8 TrustSignalsBar, C9 ProcessStep, C10 ProcessTimeline                                | Supporting homepage sections                                    |
| **B3** | C11 TestimonialCard, C12 TestimonialCarousel                                                                  | Social proof section — can use placeholder content initially    |
| **B4** | L3 SiteFooter Layout, L1 HomepageLayout                                                                       | Page assembly — wire everything together                        |

This matches the Phase 2 build order (Phase A: Foundation → Phase B: Core Templates) from the UX Design Scope document.

---

## Reuse Matrix

Shows which templates reuse each homepage component. Components marked with high reuse counts are the highest-priority investments — getting them right on the homepage pays off across the entire site.

| Component             | Home | Pillar | Cluster | Package | Compare | State Hub | Checkout | Utility | **Reuse Count** |
| --------------------- | ---- | ------ | ------- | ------- | ------- | --------- | -------- | ------- | --------------- |
| P1 Button             | ✓    | ✓      | ✓       | ✓       | ✓       | ✓         | ✓        | ✓       | **8 / 8**       |
| P2 TextLink           | ✓    | ✓      | ✓       | ✓       | ✓       | ✓         | ✓        | ✓       | **8 / 8**       |
| P3 Badge              | ✓    | ✓      | —       | ✓       | ✓       | ✓         | —        | —       | **5 / 8**       |
| P4 Icon               | ✓    | ✓      | ✓       | ✓       | ✓       | ✓         | ✓        | ✓       | **8 / 8**       |
| P5 Heading            | ✓    | ✓      | ✓       | ✓       | ✓       | ✓         | ✓        | ✓       | **8 / 8**       |
| P6 BodyText           | ✓    | ✓      | ✓       | ✓       | ✓       | ✓         | ✓        | ✓       | **8 / 8**       |
| P7 PriceDisplay       | ✓    | —      | —       | ✓       | ✓       | ✓         | ✓        | —       | **5 / 8**       |
| C1 SiteHeader         | ✓    | ✓      | ✓       | ✓       | ✓       | ✓         | ✓        | ✓       | **8 / 8**       |
| C2 MegaMenu           | ✓    | ✓      | ✓       | ✓       | ✓       | ✓         | ✓        | ✓       | **8 / 8**       |
| C5 PillarCard         | ✓    | —      | —       | —       | —       | ✓         | —        | —       | **2 / 8**       |
| C6 PackagePreviewCard | ✓    | —      | —       | ✓       | ✓       | ✓         | —        | —       | **4 / 8**       |
| C8 TrustSignalsBar    | ✓    | ✓      | —       | ✓       | —       | —         | ✓        | —       | **4 / 8**       |
| C11 TestimonialCard   | ✓    | —      | —       | ✓       | —       | —         | —        | ✓       | **3 / 8**       |
| C13 StickyMobileCTA   | ✓    | ✓      | ✓       | ✓       | ✓       | ✓         | ✓        | ✓       | **8 / 8**       |
| L3 SiteFooter         | ✓    | ✓      | ✓       | ✓       | ✓       | ✓         | ✓        | ✓       | **8 / 8**       |

**Highest-value components** (reused on every template): Button, TextLink, Icon, Heading, BodyText, SiteHeader, MegaMenu, StickyMobileCTA, SiteFooter. These are the Phase A foundation — nail them first.

---

## Legend

| Symbol | Meaning                                                  |
| ------ | -------------------------------------------------------- |
| 🏠     | Homepage-specific component — used only on the homepage  |
| ♻️     | Reusable component — used across multiple page templates |
| P#     | Primitive (Layer 1)                                      |
| C#     | Composite (Layer 2)                                      |
| L#     | Layout (Layer 3)                                         |

---

_Confidential — BIT Studios × Incorporate123 — March 2026_
