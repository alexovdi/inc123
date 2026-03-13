# Incorporate123 — Component Library Reference

**Extracted from:** All 10 page wireframe specifications
**Prepared by:** BIT Studios
**Date:** March 2026
**Phase:** 2 — UX & Interactive Prototyping

This document catalogs every component referenced across all page specs, organized by layer (global → composites → page-specific), with usage frequency, source page, and behavioral notes. This is the master reference for the prototype component library.

---

## Component Summary

| Layer | Count | Description |
|-------|-------|-------------|
| Global (every page) | 5 | Header, footer, nav, mobile CTA, breadcrumbs |
| Primitives | 7 | Atomic UI elements reused everywhere |
| Composite (multi-page) | 18 | Multi-element components used on 2+ page types |
| Page-Specific | 22 | Components unique to one page type |
| **Total Unique Components** | **52** | |

---

## 1. Global Components

Used on every single page. Built first (Phase A: Foundation).

---

### 1.1 SiteHeader

| Property | Detail |
|----------|--------|
| **Used On** | Every page |
| **First Built** | Homepage |
| **Contains** | Logo, PrimaryNav, MegaMenu, MobileNav, GetStartedCTA, ClientLoginLink, PhoneIcon (mobile) |
| **Variants** | Standard (all pages), Checkout-simplified (checkout flow — logo + phone only, no mega menu) |

**Behavior:**
- Sticky on scroll — desktop: shrinks to compact version; mobile: fixed, no shrink
- Active nav state highlights current pillar (Privacy/AP/Formation/Packages/About)
- State hub pages: no specific nav item active
- Checkout flow: simplified header (no mega menu) to reduce distraction

---

### 1.2 MegaMenu

| Property | Detail |
|----------|--------|
| **Used On** | Every page (inside SiteHeader) |
| **First Built** | Homepage |
| **Panels** | Privacy (8 clusters + 2 comparisons + quick links), Asset Protection (6 clusters + 2 comparisons + quick links), Formation (6 clusters + 3 comparisons + quick links), Packages (WY/NV tiers + compare link), About (simple dropdown: About, Contact, Testimonials) |

**Behavior:**
- Desktop: hover-triggered dropdown with 200ms close delay
- Mobile: accordion expand per pillar on tap
- Packages and Client Login above fold in mobile menu
- Phone number with tap-to-call persistent in mobile menu

---

### 1.3 MobileNav

| Property | Detail |
|----------|--------|
| **Used On** | Every page (mobile viewports inside SiteHeader) |
| **First Built** | Homepage |
| **Contains** | Hamburger toggle, accordion pillar sections, package links, Client Login, phone tap-to-call |

**Behavior:**
- Hamburger icon toggles full-screen or slide-in nav panel
- Accordion expand for each pillar (maintains pillar structure, not alphabetical)
- Packages and Client Login positioned above fold

---

### 1.4 SiteFooter

| Property | Detail |
|----------|--------|
| **Used On** | Every page |
| **First Built** | Homepage |
| **Contains** | 4-column link grid (Privacy, AP+Formation, Packages+States, Company+Support), bottom bar (copyright, legal links, payment icons, address, phone) |

**Behavior:**
- Desktop: 4-column grid
- Mobile: accordion expand per column
- Payment icons: Visa, Mastercard, AMEX, Bitcoin, Ethereum, XRP, Litecoin, Monero
- Crypto note: "We accept cryptocurrency for your privacy"

---

### 1.5 StickyMobileCTA

| Property | Detail |
|----------|--------|
| **Used On** | Every page (mobile only) |
| **First Built** | Homepage |
| **Variants** | Default ("Get Started →" + phone icon), Package-focused ("View Gold Packages" + phone), Phone-first ("Call (775) 555-0123" + message icon) |

**Behavior:**
- Fixed to bottom of mobile viewport
- Appears after scrolling past hero section (IntersectionObserver)
- Hides when hero CTAs are visible
- Variant per page type:
  - Homepage, Pillar, Cluster, Comparison, State Hub: default or package variant
  - Package page: "Order Now — $[price]" + phone
  - Checkout flow: "Continue →" button (replaces general CTA)
  - FAQ, Contact: phone-first variant

| Page | Variant |
|------|---------|
| Homepage | "Get Started →" + phone |
| Privacy Pillar | "View Gold Packages" + phone |
| Package Page | "Order Now — $1,275" + phone |
| Checkout | "Continue →" (step-specific) |
| Cluster | "View Gold Packages" + phone |
| Comparison | "View Gold Packages" + phone |
| State Hub | "View Wyoming Packages" + phone |
| FAQ | "Call Us" + message icon |
| About | "View Packages" + phone |
| Contact | "Call (775) 555-0123" + message icon |

---

### 1.6 Breadcrumbs

| Property | Detail |
|----------|--------|
| **Used On** | Every page except Homepage |
| **First Built** | Privacy Pillar |
| **Format** | Home > [Pillar] > [Current Page] |

**Behavior:**
- Each segment is a clickable link except the current page
- Schema: BreadcrumbList markup
- Positioned below header, above page content
- State hubs: Home > [State] (no pillar level)
- Utility pages: Home > [Page]

---

## 2. Primitive Components

Atomic UI building blocks. No business logic. Accept `className` prop for composition.

---

### 2.1 Button

| Property | Detail |
|----------|--------|
| **Used On** | Every page |
| **Variants** | Primary (solid, brand-colored), Secondary (outline/ghost), CTA (accent/amber, conversion), Ghost (transparent hover) |
| **Sizes** | sm, md, lg |

**Behavior:**
- Hover: background darken + subtle lift
- Focus: visible 2px ring for accessibility
- Active: press feedback (slight depression)
- Loading state: spinner icon + "Processing..." text (checkout)
- Disabled state: muted appearance when form invalid

---

### 2.2 Badge

| Property | Detail |
|----------|--------|
| **Used On** | Homepage (trust strip, tier badges), Package (Most Popular, all-inclusive), State Hub (state facts), FAQ (category tags) |
| **Variants** | Trust ("25 Years"), Tier ("Most Popular", "Recommended"), Pillar (color-coded: Privacy/AP/Formation/Compliance), Status ("All-Inclusive", "FREE"), Neutral |

---

### 2.3 FormInput

| Property | Detail |
|----------|--------|
| **Used On** | Checkout flow (Steps 2–3), Contact page |
| **Types** | Text, Email, Tel, Number |

**Behavior:**
- Label above input
- Validate on blur: red border + error message below
- Success state: optional green border/checkmark
- Minimum 48px height for mobile tap targets
- Placeholder text support

---

### 2.4 FormSelect

| Property | Detail |
|----------|--------|
| **Used On** | Checkout flow (state, entity type, roles), Contact page (inquiry type, state interest, referral) |

**Behavior:**
- Native `<select>` for mobile accessibility (or styled dropdown)
- Label above, error below
- Placeholder/disabled first option: "Select..."

---

### 2.5 FormTextarea

| Property | Detail |
|----------|--------|
| **Used On** | Checkout flow (special instructions), Contact page (message) |

**Behavior:**
- Configurable row count (3–5 rows)
- Label above, error below
- Character count optional

---

### 2.6 Icon

| Property | Detail |
|----------|--------|
| **Library** | Lucide React |
| **Used On** | Every page |
| **Sizes** | 16px (inline), 24px (standard), 40px (feature blocks) |
| **Color** | Inherits from context — pillar color on pillar pages, muted in body, white on dark backgrounds |

---

### 2.7 Tooltip

| Property | Detail |
|----------|--------|
| **Used On** | Package page (feature tooltips), potentially comparison pages |
| **Trigger** | Desktop: hover on ⓘ icon. Mobile: tap to toggle, tap elsewhere to dismiss. |

**Behavior:**
- Positioned above trigger icon
- Flips below if near viewport top edge
- Small arrow/caret pointing to trigger
- Content: 1–2 sentences max
- Dismiss on scroll (mobile)

---

## 3. Composite Components (Multi-Page Reuse)

Used on 2+ page types. These form the site's design language.

---

### 3.1 TrustSignalsBar

| Property | Detail |
|----------|--------|
| **Used On** | Homepage (Section 8), Package pages, Checkout (Step 3), Contact (adapted) |
| **First Built** | Homepage |
| **Items** | "Trusted Since 2000" · "Real Reno Office" · "30-Day Money-Back Guarantee" · "(775) 555-0123" · "Crypto Accepted" · "Secure Checkout" |
| **Variants** | Full (6 items, homepage/package), Compact (4 items, contact/checkout) |

**Behavior:**
- Desktop: horizontal flex row, evenly spaced
- Mobile: 2×3 grid (full) or 2×2 grid (compact)
- Icons next to each label (24px)

---

### 3.2 TestimonialCarousel

| Property | Detail |
|----------|--------|
| **Used On** | Homepage, Package pages, About page |
| **First Built** | Homepage |
| **Card Structure** | Quote text, attribution (name, state, year), 5-star rating |
| **Count** | 2–3 cards per instance |

**Behavior:**
- Desktop: 3-card row or carousel
- Mobile: horizontal swipe carousel
- Auto-advance every 6 seconds
- Pause on hover (desktop) / on touch (mobile)
- Star color: amber/accent

---

### 3.3 CTABlock

| Property | Detail |
|----------|--------|
| **Used On** | Homepage (Sections 5, 9, 11), Pillar pages, Cluster pages, State Hub, About, Comparison (bottom repeat) |
| **First Built** | Homepage |
| **Structure** | Headline + subtext + primary CTA button + secondary CTA button/link + optional phone number |
| **Variants** | Light background (standard), Dark background (navy — final CTA sections), Pillar-colored (compliance callout) |

---

### 3.4 PackagePreviewCard

| Property | Detail |
|----------|--------|
| **Used On** | Homepage (Section 5), Pillar pages (Section 9), Cluster pages (package CTA block), State Hub (Section 5), Comparison pages (dual CTA) |
| **First Built** | Homepage |
| **Structure** | State badge, tier badge, package name, price (large, mono font), renewal rate, 3–4 key includes, CTA button |
| **Variants** | Standard, Highlighted/elevated (Gold with "Most Popular" badge) |

**Behavior:**
- Hover: shadow increase + border accent
- Price updates if LLC/Corp toggle exists on the same page

---

### 3.5 PillarCard

| Property | Detail |
|----------|--------|
| **Used On** | Homepage (Section 4), State Hub (intent routing cards — adapted) |
| **First Built** | Homepage |
| **Structure** | Pillar color accent (top border), icon, title, description, 3–4 service items, arrow CTA |

**Behavior:**
- Hover: shadow increase + slight translateY lift
- Each card accented with its pillar identity color

---

### 3.6 FAQAccordion

| Property | Detail |
|----------|--------|
| **Used On** | Pillar pages, Cluster pages, Package pages, Comparison pages, State Hub, FAQ page, About page (if testimonials unavailable) |
| **First Built** | Privacy Pillar |
| **Modes** | Single-expand (comparison, state hub, package), Multi-expand (cluster, FAQ page) |

**Behavior:**
- Click/tap question row to toggle
- Smooth height animation (CSS transition)
- Keyboard accessible: Enter/Space to toggle, arrow keys between items
- ChevronDown icon rotates to ChevronUp when expanded
- FAQ schema markup on every question/answer pair
- FAQ page variant: enhanced with search filtering + deep-link anchor IDs

---

### 3.7 ProgressiveDisclosure

| Property | Detail |
|----------|--------|
| **Used On** | Pillar pages (Sections 4, 5, 6), Cluster pages (inline expandable detail), Package pages (educational sections) |
| **First Built** | Privacy Pillar |
| **Structure** | Scanner content (always visible) + "Read full explanation →" toggle + expanded detail content + "Show less ↑" collapse |

**Behavior:**
- Start collapsed
- Smooth height animation on toggle (CSS transitions)
- Uses `data-state="open"` / `data-state="closed"` attributes
- State persists during page session (stays open if opened)
- No JS animation libraries — CSS only

---

### 3.8 CrossPillarCallout

| Property | Detail |
|----------|--------|
| **Used On** | Pillar pages (Section 10), Cluster pages (Section 7), Comparison pages (Section 5), Package pages (implicit via "Also Consider") |
| **First Built** | Privacy Pillar |
| **Structure** | Pillar-colored accent (border/background tint), headline, description, CTA to destination pillar |

**Placement Rule:** Always appears BELOW the page's primary conversion CTA. Never interrupts the primary journey.

**Color by destination:**
- → Privacy: blue accent
- → Asset Protection: green accent
- → Formation: amber accent
- → Compliance: purple accent

---

### 3.9 WhereToGoNext

| Property | Detail |
|----------|--------|
| **Used On** | Pillar pages, Cluster pages, Comparison pages, State Hub |
| **First Built** | Privacy Pillar |
| **Structure** | Section headline "Where to Go Next" + 3 contextual suggestion links |
| **Adapted As** | RelatedGuides (FAQ page — 2 links per category), QuickLinkCards (Contact page — richer cards) |

---

### 3.10 ContentSidebar

| Property | Detail |
|----------|--------|
| **Used On** | Pillar pages (Section 13), Cluster pages (Section 10) |
| **First Built** | Privacy Pillar |
| **Layout** | Desktop: right column (30% width), sticky on scroll, stops before footer. Mobile: key elements redistribute into content flow. |

**Pillar page blocks:**
1. Package Shortcut card (Gold prices + CTAs)
2. Related Clusters list (all clusters under this pillar, current highlighted)
3. Cross-Pillar Link ("Also Relevant: Asset Protection →")
4. Phone number with tap-to-call

**Cluster page blocks:**
1. Package Shortcut card
2. Related Clusters list (siblings under same pillar, current page highlighted)
3. Back to Pillar link ("← Back to Business Privacy")
4. Cross-Pillar Link
5. Phone number

**Mobile redistribution:**
- Package Shortcut → inline card within content flow
- Related Clusters → compact list or row after FAQ
- Back to Pillar → breadcrumb handles this
- Cross-Pillar → inline callout section
- Phone → sticky bottom CTA bar

---

### 3.11 MoneyBackBadge

| Property | Detail |
|----------|--------|
| **Used On** | Package pages, Checkout Step 3, Checkout Step 4 |
| **First Built** | Package page |
| **Structure** | Shield/check icon + "30-Day Money-Back Guarantee" + optional 1-sentence description |

---

### 3.12 EntityTypeToggle

| Property | Detail |
|----------|--------|
| **Used On** | Package pages (Section 4), Checkout Step 1 |
| **First Built** | Package page |
| **Structure** | Segmented control / pill toggle: "LLC" (default) | "Corporation" |

**Behavior:**
- Switching updates ALL prices on the page instantly
- Corp adds ~$300 to all tier prices
- CTA labels update with new price
- Running total updates

---

### 3.13 DifferentiatorCallout

| Property | Detail |
|----------|--------|
| **Used On** | Pillar pages (service blocks), Cluster pages (nominee differentiator), Package pages (value comparison) |
| **First Built** | Privacy Pillar |
| **Structure** | Highlighted box/card containing a competitive comparison stat — e.g., "Competitors charge $400–$5,000/year for nominee services. Ours are included in every Gold package." |

---

### 3.14 ComparisonTable

| Property | Detail |
|----------|--------|
| **Used On** | Comparison pages (primary table), Cluster pages (inline WY vs NV table) |
| **First Built** | Comparison page (WY vs NV Privacy) |
| **Structure** | Factor column (left) + 2+ data columns. Optional winner indicators per row. Header row with state badges, prices, and mini CTAs. |

**Behavior:**
- Desktop: full-width table
- Mobile: stacked factor cards OR horizontal scroll with sticky first column
- Winner indicators: subtle highlight on the winning cell (green tint, checkmark, or bold)

---

### 3.15 DualPackageCTA

| Property | Detail |
|----------|--------|
| **Used On** | Comparison pages (after table + bottom repeat) |
| **First Built** | Comparison page |
| **Structure** | Two side-by-side PackagePreviewCards, each for a different state's Gold package + "Schedule a consultation" safety net below |

**Behavior:**
- Desktop: side by side
- Mobile: stacked, lower-cost state on top

---

### 3.16 ClusterGrid

| Property | Detail |
|----------|--------|
| **Used On** | Pillar pages (Section 7) |
| **First Built** | Privacy Pillar |
| **Structure** | Section header + 3×3 or 4×2 grid of cluster link cards. Each card: pillar color accent, title, 1–2 sentence description, "Learn More →" arrow link. |

**Behavior:**
- Desktop: 3-column or 4-column grid
- Mobile: single column, full-width cards
- Hover: shadow increase + slight lift

---

### 3.17 ComparisonCards

| Property | Detail |
|----------|--------|
| **Used On** | Pillar pages (Section 8 — links to comparison pages) |
| **First Built** | Privacy Pillar |
| **Structure** | 2 larger cards (side by side desktop, stacked mobile) each linking to a comparison page with title, description, and "Compare →" CTA |

---

### 3.18 AudienceBlocks

| Property | Detail |
|----------|--------|
| **Used On** | Cluster pages ("Who Needs an Anonymous LLC?" — Section 4) |
| **First Built** | Anonymous LLC Cluster |
| **Structure** | 2×2 grid (desktop), stacked (mobile). Each block: icon + title + 2–3 sentence description. |

---

## 4. Page-Specific Components

Used on only one page type. Listed by page.

---

### Homepage

| Component | Description |
|-----------|-------------|
| **HomepageHero** | Full-width split layout: headline/CTAs left, visual right. Eyebrow, H1, subheadline, dual CTAs, trust badge strip. |
| **HowItWorks** | 4-step process visualization. Horizontal connected steps (desktop), vertical timeline (mobile). Numbered circles, icons, titles, descriptions. |
| **ComplianceCallout** | Full-width card with compliance pillar accent (purple). "Already Have an Entity?" with dual CTAs to compliance and client login. |
| **DifferentiatorGrid** | Dark section. 2×3 grid of icon + title + description value props on navy background with white text and amber icons. |

### Privacy Pillar

| Component | Description |
|-----------|-------------|
| **PillarHero** | Pillar-specific hero with identity color accent, eyebrow, H1, subheadline, dual CTAs, trust snippet. Reused on all 4 pillar pages with content variations. |

### Package Page (Wyoming Gold)

| Component | Description |
|-----------|-------------|
| **PackageHero** | Package-specific hero showing price prominently, "all-inclusive" label, dual CTAs, trust strip. Reused on all 8 package pages. |
| **PricingGrid** | Side-by-side tier comparison. 2-column (WY) or 3-column (NV). Feature rows with checkmarks/dashes and tooltip icons. CTA per column. Gold highlighted. Mobile: stacked cards with expandable features. Reused on all package pages. |
| **FeatureTooltip** | Specialized tooltip for pricing grid feature rows. Info icon trigger, 1–2 sentence explanation. Hover (desktop), tap (mobile). |
| **AddOnConfigurator** | Checkboxes for optional add-ons grouped into "Recommended" and "Additional." Each with name, price, description, expandable detail. Updates RunningTotal in real time. Reused on all package pages and checkout Step 1. |
| **RunningTotal** | Desktop: sticky sidebar showing selected tier + add-ons + total. Mobile: sticky bottom bar with summary + "Checkout →". Updates in real time. Evolves into OrderSummary in checkout. |
| **ValueComparisonCallout** | Highlighted box reframing price as included value: "$1,275 all-inclusive — $2,000+ in included services." Reused on all package pages. |
| **AlsoConsiderCards** | 3 horizontal cards linking to related packages. Hover: shadow + lift. Reused on all package pages. |

### Checkout Flow

| Component | Description |
|-----------|-------------|
| **StepIndicator** | Horizontal 4-step progress bar. Current: filled circle + bold. Completed: checkmark, clickable. Upcoming: muted, not clickable. Mobile: compact "Step 2 of 4" with progress fill. |
| **OrderSummary** | Desktop: sticky right sidebar with itemized breakdown. Mobile: collapsible bar ("Wyoming Gold LLC — $1,275 ▼"). Expanded by default on Step 3. Becomes receipt on Step 4. Evolves from RunningTotal. |
| **TierSelectorCards** | Selectable cards for choosing package tier on Step 1. Radio-style selection. Gold highlighted as "Recommended." Adapted from PricingGrid. |
| **AddOnCheckboxes** | Simplified add-on selection for checkout Step 1. Checkboxes + name + price. Adapted from AddOnConfigurator. |
| **PaymentMethodSelector** | Tabbed/radio card selector: Credit Card (default), PayPal, Cryptocurrency. Switching shows the relevant form below. |
| **MockStripeInput** | Mock credit card form styled like Stripe Elements. Card number (formatted), expiry, CVC, name. Lock icon + "256-bit SSL" adjacent. |
| **ConfirmationTimeline** | Numbered vertical timeline showing 5 post-order steps (name check → filing → EIN → documents → ongoing support) with timeframes. |

### Comparison Page

| Component | Description |
|-----------|-------------|
| **ComparisonHero** | Simplified hero with no CTAs. Eyebrow, H1, subheadline, quick verdict callout. Reused on all 6 comparison pages. |
| **WinnerIndicator** | Subtle visual treatment on winning cell in ComparisonTable row. Green tint, checkmark, or bold. Ties show neutral indicator. |
| **DecisionGuideBlocks** | "Choose Wyoming If..." / "Choose Nevada If..." bullet sections with checkmark icons and 1–2 sentence explanations. Reused on comparison pages. |

### State Hub

| Component | Description |
|-----------|-------------|
| **StateHero** | Neutral hero (no single pillar color) with state facts strip: quick-reference stat chips. Reused on all 4 state hubs. |
| **IntentRoutingCard** | Pillar-colored card with icon, title ("Wyoming for Privacy"), description, 3 key page links, primary CTA, package quick link. 4 per state hub, one per pillar. |
| **AdvantageGrid** | 3×2 icon + title + description grid for state advantages. Adapted from DifferentiatorGrid (lighter treatment). |
| **ContentMapGrid** | 4-column link grid organized by pillar. Each column has pillar-colored header. Primary pages bold. Mobile: accordion per pillar. |

### Resource/FAQ Page

| Component | Description |
|-----------|-------------|
| **FAQHero** | Compact hero with headline + subheadline. Adapted from utility page hero. |
| **SearchInput** | Large search field with real-time filtering. Debounced input (200ms). Matches against question + answer text. Clear button. Result count display. Reusable for blog search. |
| **CategoryFilterPills** | Horizontal pill/tab row for filtering by pillar category: All, Privacy, AP, Formation, Compliance, Packages, General. Pillar colors as accents. Combines with search. |
| **RelatedGuides** | 2 contextual links per FAQ category section. Adapted from WhereToGoNext. |

### About Page

| Component | Description |
|-----------|-------------|
| **AboutHero** | Simple hero with eyebrow, H1, subheadline, office visual placeholder. |
| **FounderBio** | Desktop: 2-column photo + bio. Mobile: stacked photo above bio. Name, title, location, experience line, 3 bio paragraphs, direct contact, trust tags. |
| **Timeline** | Vertical milestone timeline with 8 events. Desktop: alternating left/right. Mobile: single column. Year badge + title + description per milestone. |
| **PhilosophyCards** | 3 cards: "Specialists, Not Generalists," "Transparent, Not Gated," "Real People, Not Automation." Adapted from DifferentiatorGrid (simpler). |
| **OfficeSection** | Address, phone, email, hours, photo placeholders, map placeholder. Nevada proximity note. |
| **StatsStrip** | 4 large stat blocks: "25+" / "2" / "$525" / "100%". Optional animated count-up on viewport entry. |

### Contact Page

| Component | Description |
|-----------|-------------|
| **ContactHero** | Compact hero: eyebrow, H1 ("Talk to a Privacy Specialist"), subheadline. |
| **ContactMethodCards** | 3 cards: Call Us (phone prominent, tap-to-call), Send a Message (scrolls to form), Visit Our Office (address, hours). Phone card is most prominent. |
| **ContactForm** | 6-row form: name/email, phone/preferred contact, inquiry type select, state interest select, message textarea, referral source. Validation on blur. Submit with loading state. Success state replaces form with confirmation message. |
| **MapPlaceholder** | Static map placeholder with MapPin icon and address. Production: Google Maps embed. |
| **QuickLinkCards** | 4 small cards linking to Packages, FAQ, Anonymous LLC Guide, Client Login. Adapted from WhereToGoNext with descriptions. |

---

## 5. Component Dependency Graph

Build order based on dependencies — components that depend on other components.

### Phase A: Foundation (build these first)

```
Button
Badge
Icon
FormInput / FormSelect / FormTextarea
Tooltip
Breadcrumbs
SiteHeader → MegaMenu → MobileNav
SiteFooter
StickyMobileCTA
```

### Phase B: Core Composites (build next)

```
TrustSignalsBar (uses Badge, Icon)
CTABlock (uses Button)
PackagePreviewCard (uses Badge, Button)
PillarCard (uses Icon, Badge, Button)
FAQAccordion (uses Icon — ChevronDown/Up)
ProgressiveDisclosure (uses Button/link)
MoneyBackBadge (uses Icon, Badge)
TestimonialCarousel (uses Icon — Star)
```

### Phase C: Page-Specific (build as each page is prototyped)

```
Homepage:       HomepageHero, DifferentiatorGrid, HowItWorks, ComplianceCallout
Pillar:         PillarHero, ClusterGrid, ComparisonCards, CrossPillarCallout, ContentSidebar, WhereToGoNext, DifferentiatorCallout
Package:        PackageHero, PricingGrid, FeatureTooltip, EntityTypeToggle, AddOnConfigurator, RunningTotal, ValueComparisonCallout, AlsoConsiderCards
Checkout:       StepIndicator, OrderSummary, TierSelectorCards, PaymentMethodSelector, MockStripeInput, ConfirmationTimeline
Cluster:        ClusterHero, LongFormContent, ComparisonTable, AudienceBlocks
Comparison:     ComparisonHero, WinnerIndicator, DualPackageCTA, DecisionGuideBlocks
State Hub:      StateHero, IntentRoutingCard, AdvantageGrid, ContentMapGrid
FAQ:            FAQHero, SearchInput, CategoryFilterPills, RelatedGuides
About:          AboutHero, FounderBio, Timeline, PhilosophyCards, OfficeSection, StatsStrip
Contact:        ContactHero, ContactMethodCards, ContactForm, MapPlaceholder, QuickLinkCards
```

---

## 6. Cross-Page Usage Matrix

Which components appear on which pages.

| Component | Home | Pillar | Package | Checkout | Cluster | Compare | Hub | FAQ | About | Contact |
|-----------|:----:|:------:|:-------:|:--------:|:-------:|:-------:|:---:|:---:|:-----:|:-------:|
| SiteHeader | ✓ | ✓ | ✓ | simplified | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| SiteFooter | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| StickyMobileCTA | ✓ | ✓ | ✓ | variant | ✓ | ✓ | ✓ | phone | ✓ | phone |
| Breadcrumbs | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Button | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Badge | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | ✓ | — | — |
| FAQAccordion | — | ✓ | ✓ | — | ✓ | ✓ | ✓ | enhanced | — | — |
| CTABlock | ✓ | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| TrustSignalsBar | ✓ | — | ✓ | ✓ | — | — | — | — | — | adapted |
| PackagePreviewCard | ✓ | ✓ | — | — | ✓ | ✓ | ✓ | — | — | — |
| TestimonialCarousel | ✓ | — | ✓ | — | — | — | — | — | ✓ | — |
| ProgressiveDisclosure | — | ✓ | ✓ | — | ✓ | — | — | — | — | — |
| CrossPillarCallout | — | ✓ | — | — | ✓ | ✓ | — | — | — | — |
| WhereToGoNext | — | ✓ | — | — | ✓ | ✓ | ✓ | adapted | — | adapted |
| ContentSidebar | — | ✓ | — | — | ✓ | — | — | — | — | — |
| MoneyBackBadge | — | — | ✓ | ✓ | — | — | — | — | — | — |
| EntityTypeToggle | — | — | ✓ | ✓ | — | — | — | — | — | — |
| DifferentiatorCallout | — | ✓ | ✓ | — | ✓ | — | — | — | — | — |
| ComparisonTable | — | — | — | — | ✓ | ✓ | — | — | — | — |
| PillarCard | ✓ | — | — | — | — | — | adapted | — | — | — |

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
