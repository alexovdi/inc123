# Incorporate123 — Design System Component Inventory

**Date:** March 2026
**Purpose:** Complete catalog of every component needed in the design system, organized by layer, with props, variants, and page usage mapped.
**Reference:** Build Roadmap (steps 1-9), Homepage Wireframe Spec, Phase 2 UX Scope, CLAUDE.md, Component Library Reference (extracted from all 10 page wireframe specs)

---

## How This Document Works

Each component is listed with its layer (primitive / composite / layout), a description of what it does, the variants it needs, the props it exposes, and which page types use it. Components are CMS-agnostic — they accept data through props, never fetch it themselves. Every component uses CVA for variants, accepts a `className` prop for composition, and references design tokens (never hardcoded values).

The "Used on" column references the 9 template types: Homepage (HP), Pillar Page (PP), Cluster Page (CP), Package Detail (PK), Comparison Page (CM), State Hub (SH), Resource/FAQ (FAQ), Checkout Flow (CO), Utility Page (UP). "Global" means every page.

---

## Layer 1: Tokens

These aren't components — they're the value system that every component consumes. Listed here because they must be built first and every component depends on them.

### 1.1 Color Tokens

Semantic color names consumed by Tailwind config. Theme-swappable (wireframe grays → brand colors).

**Brand colors:** primary (navy), secondary (blue), accent (amber), success (green), destructive (red), warning (orange)
**Semantic colors:** surface (white), background (slate-50), foreground (slate-900), muted (slate-500), border (slate-200)
**Pillar identity colors:** privacy (blue), asset-protection (green), formation (amber), compliance (purple) — each with DEFAULT, soft (background tint), and mid (medium shade) variants
**State colors:** hover, active, disabled, focus — derived from brand colors at opacity levels

### 1.2 Typography Tokens

Eight-step type scale with line-height and letter-spacing for each:

**display-xl** — hero headlines (48-64px)
**display-lg** — section headlines (36-48px)
**heading-lg** — page/section titles (28-32px)
**heading-md** — subsection titles (22-24px)
**heading-sm** — card titles, labels (18-20px)
**body-lg** — lead paragraphs (18px)
**body** — standard body text (16px)
**caption** — helper text, meta info, legal (13-14px)

**Font families:** display (Outfit), sans (Inter), mono (JetBrains Mono)

### 1.3 Spacing Tokens

Section padding, container widths, component gaps, consistent rhythm values. Defined in the Tailwind config's `extend.spacing` and consumed as utility classes.

### 1.4 Shadow & Border Tokens

card, card-hover, dropdown, tooltip — elevation presets for interaction feedback. Border radius: none, sm, md, lg, button, pill.

### 1.5 Animation Tokens

accordion-down, accordion-up, fade-in, tooltip-appear — keyframe definitions with consistent duration and easing.

---

## Layer 2: Primitives

Atomic UI elements with no business logic. Pure visual building blocks. Each uses CVA for variants.

### 2.1 Button

The most-used component on every page. Drives all CTA interactions.

**Variants:**
- `variant`: primary (filled blue), secondary (outlined), ghost (text-only), cta (amber, high-emphasis), destructive (red, for cancel/remove actions)
- `size`: sm (h-9), md (h-11), lg (h-14)
- `pillar`: optional pillar-color override (privacy/asset/formation/compliance) — used for pillar-specific CTAs
- `fullWidth`: boolean — spans container width on mobile

**States:** default, hover, active, focus-visible, disabled, loading (spinner replaces text)

**Props:** variant, size, pillar, fullWidth, loading, disabled, icon (optional leading icon), iconPosition (left/right), asChild (render as link), children

**Used on:** Global — every page has multiple buttons

---

### 2.2 Badge

Labels for status, categories, tiers, and pillar identity.

**Variants:**
- `variant`: default (neutral gray), success (green — "Included"), warning (amber — "Add-on"), destructive (red — "Not included"), info (blue)
- `pillar`: privacy, asset, formation, compliance — pillar-colored badges for navigation and categorization
- `tier`: bronze, silver, gold — package tier badges
- `size`: sm, md

**Props:** variant, pillar, tier, size, children

**Used on:** HP (trust strip, package cards), PP (pillar identity), CP (category tags), PK (tier badges, feature status), CM (comparison markers), SH (pillar badges), FAQ (category badges), CO (tier badge in summary)

---

### 2.3 Input

Text input with label, validation, and helper text.

**Variants:**
- `size`: sm, md, lg
- `state`: default, error, success, disabled

**Props:** label, placeholder, helperText, error (string), size, state, type (text/email/tel/number), required, icon (optional leading icon), className

**Used on:** CO (all form fields), FAQ (search bar), UP (contact form)

---

### 2.4 Select

Dropdown select with same API pattern as Input.

**Variants:**
- `size`: sm, md, lg
- `state`: default, error, disabled

**Props:** label, options (array of {value, label}), placeholder, helperText, error, size, state, required, className

**Used on:** CO (state selection, entity type), PK (state selector), UP (contact form subject)

---

### 2.5 Checkbox

Labeled checkbox for forms and configurators.

**Variants:**
- `size`: sm, md

**Props:** label, description (optional sub-label), checked, onChange, disabled, className

**Used on:** PK (add-on configurator checkboxes), CO (terms agreement, add-on selection)

---

### 2.6 RadioGroup

Grouped radio buttons for mutually exclusive selections.

**Variants:**
- `layout`: vertical, horizontal
- `size`: sm, md

**Props:** label, options (array of {value, label, description?}), value, onChange, disabled, className

**Used on:** CO (entity type LLC/Corp, package tier selection), PK (entity type toggle alternative)

---

### 2.7 Textarea

Multi-line text input.

**Variants:**
- `size`: sm, md, lg

**Props:** label, placeholder, helperText, error, rows, maxLength, required, className

**Used on:** CO (business description, special instructions), UP (contact form message)

---

### 2.8 Tooltip

Information overlay triggered on hover (desktop) or tap (mobile). Critical for explaining features in pricing grids without cluttering the UI.

**Variants:**
- `position`: top (default), bottom, left, right — auto-flips near viewport edge
- `size`: sm (one-liner), md (paragraph), lg (rich content with formatting)

**Props:** content (string or ReactNode), trigger (ReactNode), position, size, delayMs, className

**Behavior:** Desktop: show on hover with 200ms delay, hide on mouse leave. Mobile: toggle on tap, close on tap outside. Keyboard: show on focus, hide on blur. Flip positioning when near viewport edges.

**Used on:** PK (every feature row in pricing grid — e.g., "Nominee Officer Service" tooltip explaining what it means), CM (comparison table cell explanations), PP (term definitions inline)

---

### 2.9 Icon

Wrapper around lucide-react icons with size and color integration to the token system.

**Variants:**
- `size`: xs (14px), sm (16px), md (20px), lg (24px), xl (32px)
- `color`: inherits from text color by default, or explicit semantic color

**Props:** name (lucide icon name), size, color, className, ariaLabel

**Used on:** Global — navigation, buttons, badges, trust signals, feature lists

---

### 2.10 Divider

Horizontal or vertical separator between content sections.

**Variants:**
- `orientation`: horizontal, vertical
- `weight`: light (1px), medium (2px), heavy (4px)

**Props:** orientation, weight, className

**Used on:** HP (between sections), PP (between progressive disclosure blocks), PK (between pricing grid and add-ons), CO (between form sections)

---

### 2.11 Link

Styled anchor/Next.js Link with consistent hover behavior and optional icon.

**Variants:**
- `variant`: default (underlined), subtle (no underline until hover), nav (header/footer style), breadcrumb
- `pillar`: optional pillar-color override

**Props:** href, variant, pillar, icon, iconPosition, external (opens new tab), children, className

**Used on:** Global — navigation, content links, breadcrumbs, CTAs

---

### 2.12 Toggle

Binary on/off switch. Used for the LLC/Corp toggle on package pages.

**Variants:**
- `size`: sm, md, lg

**Props:** labels ({on: string, off: string}), checked, onChange, disabled, className

**Used on:** PK (LLC/Corp pricing toggle), potential use on comparison pages for filtering

---

### 2.13 Alert

Informational, warning, or error banners.

**Variants:**
- `variant`: info, warning, error, success
- `dismissible`: boolean

**Props:** variant, title, description, dismissible, onDismiss, icon (optional override), className

**Used on:** CO (form validation summary, payment errors), UP (contact form submission feedback)

---

### 2.14 Skeleton

Loading placeholder matching content shape. Used for CMS integration and dynamic content.

**Variants:**
- `shape`: text (line), heading, image (rectangle), card, avatar (circle)

**Props:** shape, width, height, className

**Used on:** All pages (future CMS integration — shown while content loads)

---

## Layer 3: Composite Components

Multi-element components combining primitives. These carry interaction logic but no business data — they receive everything through props.

### 3.1 Accordion

Expandable content sections used for FAQ, progressive disclosure, and mobile nav.

**Variants:**
- `type`: single (one item open at a time), multiple (any number open)
- `variant`: default (bordered), flush (no border, just dividers), card (each item is a card)

**Sub-components:** AccordionItem, AccordionTrigger, AccordionContent

**Props:** type, variant, defaultOpen (array of item IDs), className
**AccordionItem props:** id, title, children, disabled, badge (optional Badge component for category)
**AccordionTrigger props:** children (trigger content)
**AccordionContent props:** children (expanded content)

**Behavior:** Keyboard: Enter/Space to toggle, arrow keys to navigate between items. Smooth height animation (CSS transition). Content remains in DOM when collapsed (for search indexing).

**Used on:** PP (progressive disclosure content — multiple mode), CP (FAQ section), PK (feature details, FAQ), FAQ (primary interface — multiple mode with 111+ items), CO (order summary expand/collapse on mobile), SH (service category accordion)

---

### 3.2 AccordionSearch

Search/filter bar specifically for the FAQ accordion. Filters items in real time by title and content match.

**Props:** placeholder, onSearch (callback with filtered results), debounceMs, categoryOptions (for category dropdown filter), className

**Behavior:** Debounced search input (300ms). Highlights matching text in accordion titles. Shows result count. Category dropdown filters to pillar-specific FAQs. Reset button clears search.

**Used on:** FAQ (primary search bar), PP (if FAQ section is large enough)

---

### 3.3 Card

Flexible content container used across multiple page types with different configurations.

**Variants:**
- `variant`: default (white with border), elevated (shadow), interactive (hover lift), featured (accent border)
- `pillar`: optional pillar-color accent (top border or left border)
- `layout`: vertical (image top), horizontal (image left — desktop), compact (no image)

**Props:** variant, pillar, layout, image (optional), title, description, href (makes entire card clickable), badge (optional), cta (optional Button props), children (for custom content), className

**Used on:** HP (pillar navigation cards, package preview cards), PP (cluster grid cards), CP (related content sidebar cards), PK (package overview cards), CM (option cards), SH (service cards per pillar), FAQ (category cards), UP (about page team cards)

---

### 3.4 PricingGrid

The highest-complexity component. Three-tier package comparison with interactive elements.

**Sub-components:** PricingColumn, PricingFeatureRow, AddOnConfigurator

**Props:**
- `tiers`: array of {id, name, price, period, description, features: [{name, tooltip, status: included|not-included|add-on}], badge?: string, highlighted?: boolean}
- `entityToggle`: {options: [{value, label}], default} — LLC/Corp toggle
- `addOns`: array of {id, name, price, description, tooltip?}
- `onTierSelect`: callback when "Order Now" is clicked with {tierId, entityType, addOns[], total}
- `className`

**PricingColumn behavior:** Highlighted column (recommended) has visual emphasis — slightly elevated, accent border, "Most Popular" or "Recommended" badge. Feature rows show checkmark (included), X (not included), or "Add-on" badge with price.

**AddOnConfigurator behavior:** Checkboxes for optional services. Each has a price that adds to the running total. Total updates in real time as checkboxes are toggled.

**EntityToggle behavior:** Switches between LLC and Corp pricing for all tiers simultaneously. Prices, features, and add-on availability may change per entity type.

**Mobile behavior:** Three columns stack to swipeable/scrollable cards. Each card shows tier name, price, highlight badge, and a "View Features" expand that reveals the full feature list. Add-on configurator stays full-width below cards.

**Used on:** PK (primary interface), HP (simplified 3-card preview linking to full package pages)

---

### 3.5 ComparisonTable

Side-by-side comparison for entities, states, or services.

**Props:**
- `columns`: array of {id, title, subtitle?, badge?, cta?: ButtonProps}
- `rows`: array of {label, tooltip?, values: Record<columnId, string | ReactNode>}
- `highlightColumn`: optional column ID to emphasize
- `stickyHeader`: boolean (default true)
- `className`

**Mobile behavior:** Horizontal scroll with visual scroll indicator (fade on edges). Sticky first column (row labels always visible). Or: stacked card view as alternative layout.

**Used on:** CM (LLC vs Corp, Nevada vs Wyoming, state comparison), PK (simplified feature comparison), SH (services available per state)

---

### 3.6 CTABlock

Reusable call-to-action section placed at strategic points throughout content pages.

**Variants:**
- `variant`: default (light background), dark (navy/dark background for contrast), pillar (pillar-colored background tint)
- `layout`: centered, split (text left, buttons right)

**Props:** variant, layout, pillar, heading, description, primaryCTA (ButtonProps), secondaryCTA (optional ButtonProps), trustSignal (optional string — e.g., "25 years of trusted service"), className

**CTA placement rules (from user journey mapping):**
- Primary CTA + secondary alternative on every block
- Secondary is always "Talk to us" or "Compare packages" — a softer path
- Cross-pillar CTAs appear below primary CTA, never above

**Used on:** HP (sections 5, 9, 11), PP (after each progressive disclosure section, bottom of page), CP (after content, before FAQ), PK (top and bottom of page), CM (after comparison table, bottom), SH (per-pillar section), FAQ (bottom), UP (contact page)

---

### 3.7 TrustSignals

Configurable row or grid of trust indicators.

**Variants:**
- `layout`: row (horizontal strip), grid (2×2 or 3×2), compact (single line)
- `variant`: light (on white), dark (on dark background), subtle (muted)

**Props:** layout, variant, items (array of {icon, value, label} — e.g., {icon: "shield", value: "25+", label: "Years in Business"}), className

**Items used across the site:**
- 25+ Years in Business (shield icon)
- Money-Back Guarantee (check-circle icon)
- BBB Accredited / Trustpilot rating (star icon) — pending David's setup
- Thousands of Formations (users icon)
- Crypto Accepted (bitcoin icon) — signals privacy alignment
- Secure Checkout (lock icon) — checkout-specific

**Used on:** HP (dedicated section + trust strip), PK (below pricing grid), CO (flanking payment fields — critical per Baymard research), UP (about page)

---

### 3.8 TestimonialCarousel

Auto-rotating testimonial display with navigation controls.

**Props:**
- `testimonials`: array of {quote, name, businessType, state, serviceUsed, rating?}
- `autoPlay`: boolean (default true)
- `autoPlayInterval`: number (ms, default 5000)
- `className`

**Behavior:** Auto-play with pause on hover/touch. Dot indicators for position. Touch swipe on mobile. Left/right arrow buttons on desktop. Single testimonial visible at a time (or 2-3 on wide desktop).

**Used on:** HP (testimonial section), PK (relevant testimonial per package), UP (testimonials page — extended view, no auto-play)

---

### 3.9 ProgressiveDisclosure

Click-to-expand sections for long-form pillar content. Serves the "80% scanners, 20% readers" pattern from David's content strategy.

**Props:**
- `sections`: array of {id, title, summary (always visible), content (expanded), defaultOpen?: boolean}
- `expandAllButton`: boolean (show "Expand All / Collapse All" control)
- `className`

**Behavior:** Each section shows title + 2-3 line summary. Click "Read more" to expand full content with smooth height animation. `data-state="open"` / `data-state="closed"` attributes for CSS targeting. Content stays in DOM for SEO.

**Used on:** PP (primary content structure — 3-5 expandable sections per pillar), CP (optional for longer cluster content), PK (feature deep-dive section)

---

### 3.10 StepIndicator

Horizontal progress bar for multi-step flows.

**Props:**
- `steps`: array of {id, label, description?}
- `currentStep`: step ID
- `completedSteps`: array of step IDs
- `onStepClick`: optional callback (allows jumping back to completed steps)
- `className`

**States per step:** upcoming (gray), current (highlighted with pulse), completed (check icon, clickable to go back)

**Mobile behavior:** Compact mode — shows step number dots with current step label. Full labels hidden, visible on tap.

**Used on:** CO (persistent across all 4 checkout steps), HP ("How It Works" section — decorative/informational, not interactive)

---

### 3.11 MegaMenu

Desktop dropdown navigation for pillar nav items.

**Props:**
- `items`: array of {pillar, label, description, clusters: [{title, href, description?}], featuredLink?: {title, href, description}}
- `className`

**Behavior:** Opens on hover (desktop) with 100ms delay. Closes on mouse leave. Shows cluster pages grouped under the pillar with pillar-colored accent bar. Optional "Featured" link for high-priority pages. Keyboard: opens on Enter/Space, arrow keys navigate items, Escape closes.

**Used on:** Global (SiteHeader only — desktop viewport)

---

### 3.12 MobileNav

Full-screen mobile navigation overlay.

**Props:**
- `items`: same navigation data as MegaMenu
- `isOpen`: boolean
- `onClose`: callback
- `className`


**Used on:** Global (SiteHeader only — mobile/tablet viewport)

---

### 3.13 Breadcrumbs

Auto-generated path navigation.

**Props:**
- `items`: array of {label, href} — or auto-generated from route
- `pillar`: optional pillar for color accent
- `className`

**Behavior:** Displays route hierarchy. Last item is current page (not a link). Pillar-colored separator when inside a pillar section. Mobile: collapses middle items to "..." if path is deeper than 3 levels.

**Used on:** PP, CP, PK, CM, SH, FAQ, UP — everywhere except HP and CO

---

### 3.14 PackagePreviewCard

Compact package card for cross-selling and overview contexts. Simpler than the full PricingGrid.

**Props:**
- `tier`: {name, price, period, description, badge?, highlighted?}
- `entityType`: LLC | Corp
- `cta`: ButtonProps
- `className`

**Behavior:** Shows tier name, price, brief description, and CTA. Highlighted card has accent border + badge. Links to full package detail page.

**Used on:** HP (package quick-links section), CM (after comparison — "Ready to order?"), SH (package links per state), PP (inline package CTAs)

---

### 3.15 StickyMobileCTA

Fixed bottom bar on mobile with primary CTA and optional secondary action.

**Props:**
- `primaryCTA`: ButtonProps
- `secondaryCTA`: optional (phone icon tap-to-call, or "Compare" link)
- `showAfterScroll`: number (px — don't show until user has scrolled past hero)
- `className`

**Behavior:** Fixed to bottom of viewport. Hidden until scroll threshold. Includes "consultation safety net" — David's phone number as tap-to-call icon alongside primary CTA. Respects checkout flow (doesn't show during checkout where StepIndicator is primary).

**Used on:** Global on mobile — every page except CO (which has its own persistent navigation)

---

### 3.16 StateSelector

Interactive "Which state are you in?" routing widget. Routes visitors to state-specific content.

**Props:**
- `states`: array of {value, label, href, description?}
- `heading`: string
- `description`: string
- `className`

**Behavior:** Dropdown or visual card selection. Selecting a state routes to the state-specific page. CA and FL route to privacy-focused state pages. WY and NV route to state hub pages.

**Used on:** PP (Privacy pillar specifically — routes CA/FL residents to state packages), SH (state selection navigation)

---

### 3.17 CrossPillarCTA

Contextual upsell link to a different pillar. Styled distinctly from primary CTAs to avoid confusion.

**Variants:**
- `variant`: callout-box (inline card), sidebar-block (compact sidebar widget), upgrade-prompt (with social proof stat)

**Props:** variant, fromPillar, toPillar, heading, description, href, socialProof (optional — e.g., "70% of WY clients add privacy"), className

**Placement rules:**
- Always below the page's primary CTA
- Feels like a helpful recommendation, not a sales push
- Appears at natural content connection points (after core content absorption)

**Used on:** PP (Privacy → Asset Protection, Formation → Privacy), CP (contextual per cluster topic), PK (upgrade prompts on package pages)

---

### 3.18 HowItWorks

Visual step-by-step process explainer.

**Props:**
- `steps`: array of {number, title, description, icon?}
- `layout`: horizontal (desktop), vertical (mobile)
- `className`

**Behavior:** Numbered steps with connecting lines/arrows. Horizontal on desktop, vertical stack on mobile. Each step has an icon, title, and brief description.

**Used on:** HP ("How It Works" section), CO (confirmation page — "What happens next"), PK (formation process overview)

---

### 3.19 DifferentiatorGrid

Comparison grid showing Inc123 vs. competitors or vs. category norms.

**Props:**
- `heading`: string
- `items`: array of {label, inc123Value, competitorValue, tooltip?}
- `className`

**Behavior:** Two-column comparison (Us vs. Them or "What you get vs. What others offer"). Checkmarks and X marks for boolean features. Text values for specific comparisons.

**Used on:** HP (differentiator section — dark background), PK (why choose this package), CM (competitor comparison context)

---

### 3.20 OrderSummary

Persistent order breakdown for checkout flow.

**Props:**
- `package`: {name, tier, price}
- `entityType`: string
- `addOns`: array of {name, price}
- `subtotal`: number
- `stateFees`: number (optional)
- `total`: number
- `className`

**Desktop behavior:** Sticky sidebar that scrolls with the user. Updates in real time as selections change.
**Mobile behavior:** Collapsible bar fixed at bottom showing total. Tap to expand full itemized breakdown.

**Used on:** CO (all 4 steps — persistent across the flow)

---

### 3.21 FormSection

Groups related form fields with a heading and optional description. Used to structure multi-field forms in checkout.

**Props:** title, description, children, className

**Used on:** CO (Step 2: "Company Information", "Registered Agent", "Officers/Members" sections), UP (contact form sections)

---

### 3.22 PaymentForm

Mock Stripe Elements-style card input.

**Props:**
- `onSubmit`: callback with payment data
- `billingFields`: boolean (show billing address)
- `trustSignals`: TrustSignals props (displayed flanking the form)
- `className`

**Behavior:** Card number, expiry, CVC fields with formatting masks. Billing address fields (optional). Trust signals (Secure Checkout, Stripe badge, payment method icons) displayed prominently — Baymard research shows 1 in 5 shoppers abandon if they don't trust the payment form. In prototype: visual only, no real Stripe integration.

**Used on:** CO (Step 3 only)

---

### 3.23 ConfirmationBlock

Post-purchase success screen with order details and next steps.

**Props:**
- `orderNumber`: string
- `orderSummary`: OrderSummary props
- `nextSteps`: array of {step, title, description, timeline}
- `className`

**Behavior:** Green success indicator. Order number prominently displayed. "What Happens Next" timeline (e.g., "1. We file your articles within 24 hours", "2. You receive your formation documents via email in 3-5 business days"). Print/download receipt option.

**Used on:** CO (Step 4 only)

---

### 3.24 ContentSidebar

Sticky sidebar for content pages with contextual navigation and conversion shortcuts.

**Variants:**
- `variant`: pillar (for pillar pages), cluster (for cluster pages)

**Props:** variant, packageShortcut (PackagePreviewCard props — Gold tier quick-link), relatedPages (array of {title, href, current?: boolean}), crossPillarLink ({pillar, title, href}), phoneNumber, className

**Pillar page blocks:** Package shortcut card (Gold prices + CTAs), related clusters list (all under this pillar, current highlighted), cross-pillar link, phone tap-to-call.

**Cluster page blocks:** Package shortcut card, sibling cluster list (same pillar, current highlighted), "Back to [Pillar]" link, cross-pillar link, phone.

**Desktop behavior:** Right column (30% width), sticky on scroll, stops before footer.
**Mobile behavior:** Key elements redistribute into content flow — package shortcut becomes inline card, related clusters become compact list after FAQ, phone goes to StickyMobileCTA.

**Used on:** PP (right sidebar), CP (right sidebar)

---

### 3.25 WhereToGoNext

Contextual navigation block suggesting next steps based on current page context.

**Props:**
- `heading`: string (default "Where to Go Next")
- `suggestions`: array of {title, description, href, pillar?}
- `maxItems`: number (default 3)
- `className`

**Adapted variants:**
- RelatedGuides (FAQ page — 2 links per category section)
- QuickLinkCards (Contact page — richer cards with descriptions)

**Used on:** PP (after cross-pillar CTA), CP (after FAQ), CM (after decision guide), SH (after content sections), FAQ (as RelatedGuides), UP-Contact (as QuickLinkCards)

---

### 3.26 MoneyBackBadge

Standalone highlighted guarantee indicator. More prominent than a TrustSignals item — used where purchase anxiety is highest.

**Props:**
- `variant`: standard (icon + text), detailed (icon + text + description sentence)
- `className`

**Content:** Shield/check icon + "30-Day Money-Back Guarantee" + optional description.

**Used on:** PK (near pricing grid), CO Step 3 (flanking payment form), CO Step 4 (confirmation reassurance)

---

### 3.27 EntityTypeToggle

Segmented control specifically for LLC/Corporation selection. More specific than the generic Toggle — triggers price recalculation across the page.

**Props:**
- `options`: [{value: "llc", label: "LLC"}, {value: "corp", label: "Corporation"}]
- `value`: string
- `onChange`: callback — triggers ALL price updates on the page
- `className`

**Behavior:** Segmented pill control. Switching updates all tier prices, CTA labels, add-on availability, and running total in real time. Corp typically adds ~$300 to all tiers.

**Used on:** PK (above pricing grid), CO Step 1 (entity type selection)

---

### 3.28 DifferentiatorCallout

Inline competitive comparison stat box. Different from DifferentiatorGrid (which is a full dark section) — this is a highlighted callout within content flow.

**Props:**
- `stat`: string (e.g., "$400–$5,000/year")
- `comparison`: string (e.g., "Competitors charge this for nominee services")
- `ours`: string (e.g., "Ours are included in every Gold package")
- `className`

**Used on:** PP (inline within service explanation sections), CP (nominee differentiator, cost comparisons), PK (value comparison context)

---

### 3.29 ClusterGrid

Grid of cluster page link cards displayed on pillar pages.

**Props:**
- `clusters`: array of {title, description, href, pillar}
- `columns`: 3 | 4 (default 3)
- `className`

**Behavior:** Desktop: 3-column or 4-column grid. Mobile: single column, full-width cards. Each card has pillar color accent, title, 1-2 sentence description, "Learn More →" arrow link. Hover: shadow increase + slight lift.

**Used on:** PP (all 4 pillar pages — shows all clusters under that pillar)

---

### 3.30 ComparisonCards

Links to comparison pages from pillar pages. Larger than cluster grid cards — typically 2 side-by-side.

**Props:**
- `comparisons`: array of {title, description, href}
- `className`

**Behavior:** Desktop: 2 cards side by side. Mobile: stacked. Each card links to a comparison page with title, description, and "Compare →" CTA.

**Used on:** PP (below cluster grid — links to relevant comparison pages like "Wyoming vs Nevada Privacy")

---

### 3.31 DualPackageCTA

Two PackagePreviewCards side by side for comparison page conversion. Shows both options after the comparison table.

**Props:**
- `packages`: [PackagePreviewCard props, PackagePreviewCard props]
- `consultationCTA`: {label, href, phone?} — safety net below cards
- `className`

**Behavior:** Desktop: side by side. Mobile: stacked, lower-cost option on top. Includes "Schedule a consultation" safety net link below the cards.

**Used on:** CM (after comparison table + repeated at page bottom)

---

### 3.32 AudienceBlocks

"Who Needs This?" persona blocks identifying target audiences for a service.

**Props:**
- `heading`: string (default "Who Needs This?")
- `audiences`: array of {icon, title, description}
- `className`

**Behavior:** Desktop: 2×2 grid. Mobile: stacked. Each block has icon, title, 2-3 sentence description.

**Used on:** CP (e.g., "Who Needs an Anonymous LLC?" section), PP (audience context)

---

### 3.33 PillarCard

Pillar-identity navigation card with service listing. More specific than generic Card — used for intent routing.

**Props:**
- `pillar`: privacy | asset | formation | compliance
- `icon`: icon name
- `title`: string
- `description`: string
- `services`: array of strings (3-4 key service items)
- `href`: string
- `className`

**Behavior:** Pillar color accent (top border), hover shadow + slight lift. Each card routes to a pillar page.

**Used on:** HP (pillar navigation section — 3 cards for Privacy/AP/Formation, Compliance de-emphasized), SH (adapted as IntentRoutingCard with state context)

---

### 3.34 RunningTotal

Persistent price total that updates as selections change. Precursor to OrderSummary — used on package pages before entering checkout.

**Props:**
- `tier`: {name, price}
- `entityType`: string
- `addOns`: array of {name, price}
- `total`: number
- `checkoutHref`: string
- `className`

**Desktop behavior:** Sticky sidebar showing selected tier + add-ons + total + "Checkout →" CTA.
**Mobile behavior:** Sticky bottom bar showing total + "Checkout →". Tap to expand itemized breakdown.

**Relationship to OrderSummary:** RunningTotal is the package page version. When the user enters checkout, it evolves into OrderSummary (which adds billing details, state fees, and payment controls).

**Used on:** PK (alongside AddOnConfigurator)

---

### 3.35 ValueComparisonCallout

Highlighted box reframing price as included value to reduce sticker shock.

**Props:**
- `price`: string (e.g., "$1,275")
- `valueStatement`: string (e.g., "all-inclusive")
- `includedValue`: string (e.g., "$2,000+ in included services")
- `className`

**Used on:** PK (all package pages — near pricing grid)

---

### 3.36 AlsoConsiderCards

Related package recommendation cards at the bottom of package pages.

**Props:**
- `packages`: array of {name, state, price, href} (typically 3)
- `heading`: string (default "Also Consider")
- `className`

**Behavior:** 3 horizontal cards. Hover: shadow + lift. Links to other package detail pages.

**Used on:** PK (bottom of all package pages)

---

### 3.37 CategoryFilterPills

Horizontal pill/tab row for filtering content by category.

**Props:**
- `categories`: array of {value, label, pillar?, count?}
- `activeCategory`: string
- `onChange`: callback
- `className`

**Behavior:** Horizontal scrollable row. Active pill has pillar color accent. Shows item count per category. Combines with search to narrow results.

**Used on:** FAQ (primary category filter: All, Privacy, AP, Formation, Compliance, Packages, General)

---

### 3.38 PaymentMethodSelector

Tabbed or radio card selector for payment method.

**Props:**
- `methods`: array of {id, label, icon} — typically Credit Card, PayPal, Cryptocurrency
- `activeMethod`: string
- `onChange`: callback
- `className`

**Behavior:** Switching method shows the relevant form below (MockStripeInput for credit card, PayPal redirect mock, crypto address mock). Credit Card is default.

**Used on:** CO Step 3 (replaces/wraps PaymentForm — more specific than what was in the original inventory)

---

### 3.39 WinnerIndicator

Subtle visual treatment on the winning cell in a ComparisonTable row.

**Props:**
- `type`: winner | tie | loser

**Behavior:** Winner: green tint + checkmark or bold text. Tie: neutral indicator. Loser: muted text. Applied per-cell in ComparisonTable rows.

**Used on:** CM (inside ComparisonTable rows)

---

### 3.40 DecisionGuideBlocks

"Choose X If..." / "Choose Y If..." decision aid sections with bullet criteria.

**Props:**
- `options`: array of {title, description, criteria: string[]}
- `className`

**Behavior:** Side by side on desktop, stacked on mobile. Each block has checkmark icons next to criteria bullets.

**Used on:** CM (below comparison table — e.g., "Choose Wyoming If..." / "Choose Nevada If...")

---

## Layer 5: Page-Specific Components

Components used on only one page type. Built during the step that prototypes that page. Many are composed from primitives and composites above.

---

### Homepage-Specific

**5.1 HomepageHero** — Full-width split layout: headline/CTAs left, visual placeholder right. Eyebrow ("Privacy, Asset Protection & Business Formation Specialists"), H1, subheadline, dual CTA buttons (primary: "Protect Your Privacy", secondary: "Form Your Company"), trust badge strip below CTAs. Used on HP only.


---

### Pillar Page-Specific

**5.3 PillarHero** — Pillar-specific hero with identity color accent bar, eyebrow, H1, subheadline, dual CTAs (soft: "Explore Options", shortcut: "View Packages"), trust snippet. Content varies per pillar but layout is identical. Reused on all 4 pillar pages.

---

### Package Page-Specific

**5.4 PackageHero** — Package-specific hero showing price prominently (large, mono font), package name, "all-inclusive" label, dual CTAs ("Order Now" + "Compare Packages"), trust strip. Reused on all 8-10 package pages.

**5.5 FeatureTooltip** — Specialized Tooltip variant for pricing grid feature rows. Info (ⓘ) icon trigger, 1-2 sentence explanation of what each service means. Wraps the base Tooltip with pricing-grid-specific positioning and content patterns. Used on PK only (inside PricingGrid).

---

### Checkout-Specific

**5.6 TierSelectorCards** — Radio-style selectable cards for choosing package tier on checkout Step 1. Adapted from PricingGrid but simplified — shows tier name, price, 3-4 key features, radio selection indicator. Gold highlighted as "Recommended". Used on CO Step 1 only.

**5.7 ConfirmationTimeline** — Numbered vertical timeline showing 5 post-order steps: name check → filing → EIN → documents → ongoing support. Each step has timeframe ("24 hours", "3-5 business days"). More specific than ConfirmationBlock's generic nextSteps array. Used on CO Step 4 only.

---

### Comparison Page-Specific

**5.8 ComparisonHero** — Simplified hero with no primary CTAs. Eyebrow, H1, subheadline, quick verdict callout box ("Quick Answer: Wyoming for most privacy needs, Nevada for asset protection"). Reused on all 6 comparison pages.

---

### State Hub-Specific

**5.9 StateHero** — Neutral hero (no single pillar color) with state name and facts strip: quick-reference stat chips (e.g., "No State Income Tax", "Strong Privacy Laws", "Charging Order Protection"). Reused on all 4 state hubs.

**5.10 IntentRoutingCard** — Pillar-colored card with icon, title ("Wyoming for Privacy"), description, 3 key page links, primary CTA, package quick link. 4 per state hub (one per pillar). Adapted from PillarCard with state-specific content.

**5.11 AdvantageGrid** — 3×2 icon + title + description grid for state-specific advantages. Adapted from DifferentiatorGrid with lighter visual treatment (not dark background). Used on SH only.

**5.12 ContentMapGrid** — 4-column link grid organized by pillar. Each column has pillar-colored header, primary pages in bold, secondary pages in regular weight. Mobile: accordion per pillar. Complete sitemap of state-relevant content. Used on SH only.

---

### FAQ Page-Specific

**5.13 FAQHero** — Compact hero with headline ("Frequently Asked Questions") + subheadline. Adapted from utility page hero pattern. Used on FAQ only.

**5.14 SearchInput** — Large search field with real-time filtering. Debounced input (200ms). Matches against question + answer text. Clear button. Result count display ("Showing 23 of 111 questions"). More prominent than AccordionSearch — this is the primary interface element. Reusable for future blog search. Used on FAQ primarily.

**5.15 RelatedGuides** — 2 contextual links per FAQ category section pointing to relevant pillar/cluster pages. Adapted from WhereToGoNext with fewer items. Used on FAQ only.

---

### About Page-Specific

**5.16 AboutHero** — Simple hero with eyebrow ("Since 2000"), H1 ("Privacy Specialists With 25+ Years of Experience"), subheadline, office visual placeholder. Used on UP-About only.

**5.17 FounderBio** — Desktop: 2-column (photo left, bio right). Mobile: stacked (photo above bio). Name, title, location, experience line, 3 bio paragraphs, direct contact link, trust credential tags. Used on UP-About only.

**5.18 Timeline** — Vertical milestone timeline with ~8 company history events. Desktop: alternating left/right placement. Mobile: single column. Each milestone: year badge + title + description. Used on UP-About only.

**5.19 PhilosophyCards** — 3 value proposition cards: "Specialists, Not Generalists", "Transparent, Not Gated", "Real People, Not Automation." Adapted from DifferentiatorGrid with simpler, lighter treatment. Used on UP-About only.

**5.20 OfficeSection** — Address, phone, email, business hours, office photo placeholders, map placeholder. Nevada proximity note ("Based in Reno, NV — the same state where your entity is filed"). Used on UP-About only.

**5.21 StatsStrip** — 4 large stat blocks in a row: "25+" (Years), "2" (States Specialized), "$525" (Annual Renewal), "100%" (Money-Back Guarantee). Optional animated count-up on viewport entry. Used on UP-About only.

---

### Contact Page-Specific

**5.22 ContactHero** — Compact hero: eyebrow ("Get in Touch"), H1 ("Talk to a Privacy Specialist"), subheadline. Used on UP-Contact only.

**5.23 ContactMethodCards** — 3 cards: Call Us (phone prominent, tap-to-call), Send a Message (scrolls to form), Visit Our Office (address, hours). Phone card is most prominent (largest or first). Used on UP-Contact only.

**5.24 ContactForm** — 6-field form: name/email row, phone/preferred contact method row, inquiry type select, state interest select, message textarea, referral source select. Validation on blur. Submit with loading state. Success state replaces form with confirmation message. Composed from Input, Select, Textarea, Button primitives. Used on UP-Contact only.

**5.25 MapPlaceholder** — Static map placeholder with MapPin icon and address text. Production: replaced with Google Maps embed. Used on UP-Contact only.

Page-level structural components that define content areas, navigation, and chrome.

### 4.1 SiteHeader

Global header persistent across all pages.

**Sub-components:** Logo, PrimaryNav (with MegaMenu), UtilityNav, MobileNav trigger

**Props:**
- `navigation`: navigation data structure
- `sticky`: boolean (default true)
- `className`

**Content:**
- Logo (left) — links to homepage
- Primary nav (center): Business Privacy, Asset Protection, Company Formation, Compliance, Packages
- On scroll: compact mode (smaller height, drop shadow)

**Used on:** Global

---

### 4.2 SiteFooter

Global footer with sitemap, trust signals, and legal.

**Props:**
- `navigation`: navigation data structure
- `className`

**Content:**
- 4-column pillar sitemap (Privacy, Asset Protection, Formation, Compliance) with cluster links
- Package links column
- Utility links: About, Contact, FAQ, Blog, Testimonials
- Legal links row: Privacy Policy, Terms of Service
- Trust signals: 25 years badge, BBB/Trustpilot, secure payment icons
- Company info: address, phone, email
- Offshore links (de-emphasized, present for SEO authority)

**Used on:** Global

---

### 4.3 PillarLayout

Shared wrapper for pillar pages. Establishes pillar context.

**Props:**
- `pillar`: privacy | asset | formation | compliance
- `title`: string
- `description`: string
- `children`
- `className`

**Provides:**
- Pillar-colored hero/header accent
- Breadcrumbs with pillar context
- Sidebar navigation (desktop) showing cluster pages under this pillar
- Cross-pillar links in sidebar below pillar nav
- Consistent spacing and content width constraints

**Used on:** PP (all 4 pillar pages)

---

### 4.4 ClusterLayout

Variant of PillarLayout for cluster (sub-topic) pages.

**Props:**
- `pillar`: parent pillar identifier
- `title`: string
- `description`: string
- `relatedPages`: array of {title, href} — other clusters under same pillar
- `children`
- `className`

**Provides:**
- "Back to [Pillar Name]" link
- Related content sidebar (other cluster pages under this pillar)
- Breadcrumbs: Home > Pillar > This Cluster
- Package CTA slot at bottom

**Used on:** CP (all 24+ cluster pages)

---

### 4.5 PackageLayout

Wrapper for package detail pages.

**Props:**
- `packageName`: string
- `children`
- `className`

**Provides:**
- Full-width layout (no sidebar — pricing grid needs maximum width)
- Trust signals bar below header
- Breadcrumbs: Home > Packages > This Package

**Used on:** PK (all 8-10 package pages)

---

### 4.6 CheckoutLayout

Wrapper for the 4-step checkout flow.

**Props:**
- `currentStep`: number
- `orderSummary`: OrderSummary data
- `children`
- `className`

**Provides:**
- StepIndicator at top (persistent across all steps)
- OrderSummary sidebar (desktop) / collapsible bottom bar (mobile)
- Back/Continue navigation buttons
- Minimal header (logo + phone number only — no full nav to reduce abandonment)
- Form validation gating (cannot proceed until current step validates)

**Used on:** CO (all 4 checkout steps)

---

### 4.7 ComparisonLayout

Wrapper for comparison pages.

**Props:**
- `title`: string
- `description`: string
- `pillar`: optional parent pillar
- `children`
- `className`

**Provides:**
- Breadcrumbs: Home > Compare > This Comparison
- Full-width content area for comparison tables
- Dual CTA slot at bottom linking to relevant packages

**Used on:** CM (all 6 comparison pages)

---

### 4.8 StateHubLayout

Wrapper for state-specific aggregation pages.

**Props:**
- `state`: {name, abbreviation}
- `children`
- `className`

**Provides:**
- State name in heading
- Cross-pillar content sections (all services in this state)
- Package quick links section
- Breadcrumbs: Home > [State Name]

**Used on:** SH (Nevada, Wyoming, California, Florida)

---

## Component × Page Matrix

| Component | HP | PP | CP | PK | CM | SH | FAQ | CO | UP |
|-----------|----|----|----|----|----|----|-----|----|----|
| **Primitives** | | | | | | | | | |
| Button | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Badge | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Input | — | — | — | — | — | — | ✓ | ✓ | ✓ |
| Select | — | — | — | ✓ | — | — | — | ✓ | ✓ |
| Checkbox | — | — | — | ✓ | — | — | — | ✓ | — |
| RadioGroup | — | — | — | — | — | — | — | ✓ | — |
| Textarea | — | — | — | — | — | — | — | ✓ | ✓ |
| Tooltip | — | ✓ | — | ✓ | ✓ | — | — | — | — |
| Icon | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Divider | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ | — |
| Link | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Toggle | — | — | — | ✓ | — | — | — | — | — |
| Alert | — | — | — | — | — | — | — | ✓ | ✓ |
| Skeleton | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Composites** | | | | | | | | | |
| Accordion | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| AccordionSearch | — | — | — | — | — | — | ✓ | — | — |
| Card | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ |
| PillarCard | ✓ | — | — | — | — | ✓ | — | — | — |
| PricingGrid | — | — | — | ✓ | — | — | — | — | — |
| ComparisonTable | — | — | ✓ | — | ✓ | — | — | — | — |
| CTABlock | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ |
| TrustSignals | ✓ | — | — | ✓ | — | — | — | ✓ | ✓ |
| TestimonialCarousel | ✓ | — | — | ✓ | — | — | — | — | ✓ |
| ProgressiveDisclosure | — | ✓ | ✓ | ✓ | — | — | — | — | — |
| StepIndicator | ✓ | — | — | — | — | — | — | ✓ | — |
| MegaMenu | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ |
| MobileNav | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | ✓ |
| Breadcrumbs | — | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| PackagePreviewCard | ✓ | ✓ | ✓ | — | ✓ | ✓ | — | — | — |
| StickyMobileCTA | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | var | ✓ |
| StateSelector | — | ✓ | — | — | — | ✓ | — | — | — |
| CrossPillarCTA | — | ✓ | ✓ | ✓ | ✓ | — | — | — | — |
| HowItWorks | ✓ | — | — | ✓ | — | — | — | ✓ | — |
| DifferentiatorGrid | ✓ | — | — | ✓ | ✓ | — | — | — | — |
| OrderSummary | — | — | — | — | — | — | — | ✓ | — |
| FormSection | — | — | — | — | — | — | — | ✓ | ✓ |
| PaymentForm | — | — | — | — | — | — | — | ✓ | — |
| ConfirmationBlock | — | — | — | — | — | — | — | ✓ | — |
| ContentSidebar | — | ✓ | ✓ | — | — | — | — | — | — |
| WhereToGoNext | — | ✓ | ✓ | — | ✓ | ✓ | ✓ | — | ✓ |
| MoneyBackBadge | — | — | — | ✓ | — | — | — | ✓ | — |
| EntityTypeToggle | — | — | — | ✓ | — | — | — | ✓ | — |
| DifferentiatorCallout | — | ✓ | ✓ | ✓ | — | — | — | — | — |
| ClusterGrid | — | ✓ | — | — | — | — | — | — | — |
| ComparisonCards | — | ✓ | — | — | — | — | — | — | — |
| DualPackageCTA | — | — | — | — | ✓ | — | — | — | — |
| AudienceBlocks | — | — | ✓ | — | — | — | — | — | — |
| RunningTotal | — | — | — | ✓ | — | — | — | — | — |
| ValueComparisonCallout | — | — | — | ✓ | — | — | — | — | — |
| AlsoConsiderCards | — | — | — | ✓ | — | — | — | — | — |
| CategoryFilterPills | — | — | — | — | — | — | ✓ | — | — |
| PaymentMethodSelector | — | — | — | — | — | — | — | ✓ | — |
| WinnerIndicator | — | — | — | — | ✓ | — | — | — | — |
| DecisionGuideBlocks | — | — | — | — | ✓ | — | — | — | — |
| **Page-Specific** | | | | | | | | | |
| HomepageHero | ✓ | — | — | — | — | — | — | — | — |
| ComplianceCallout | ✓ | — | — | — | — | — | — | — | — |
| PillarHero | — | ✓ | — | — | — | — | — | — | — |
| PackageHero | — | — | — | ✓ | — | — | — | — | — |
| FeatureTooltip | — | — | — | ✓ | — | — | — | — | — |
| TierSelectorCards | — | — | — | — | — | — | — | ✓ | — |
| ConfirmationTimeline | — | — | — | — | — | — | — | ✓ | — |
| ComparisonHero | — | — | — | — | ✓ | — | — | — | — |
| StateHero | — | — | — | — | — | ✓ | — | — | — |
| IntentRoutingCard | — | — | — | — | — | ✓ | — | — | — |
| AdvantageGrid | — | — | — | — | — | ✓ | — | — | — |
| ContentMapGrid | — | — | — | — | — | ✓ | — | — | — |
| FAQHero | — | — | — | — | — | — | ✓ | — | — |
| SearchInput | — | — | — | — | — | — | ✓ | — | — |
| RelatedGuides | — | — | — | — | — | — | ✓ | — | — |
| AboutHero | — | — | — | — | — | — | — | — | ✓ |
| FounderBio | — | — | — | — | — | — | — | — | ✓ |
| Timeline | — | — | — | — | — | — | — | — | ✓ |
| PhilosophyCards | — | — | — | — | — | — | — | — | ✓ |
| OfficeSection | — | — | — | — | — | — | — | — | ✓ |
| StatsStrip | — | — | — | — | — | — | — | — | ✓ |
| ContactHero | — | — | — | — | — | — | — | — | ✓ |
| ContactMethodCards | — | — | — | — | — | — | — | — | ✓ |
| ContactForm | — | — | — | — | — | — | — | — | ✓ |
| MapPlaceholder | — | — | — | — | — | — | — | — | ✓ |
| **Layouts** | | | | | | | | | |
| SiteHeader | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ○ | ✓ |
| SiteFooter | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ○ | ✓ |
| PillarLayout | — | ✓ | — | — | — | — | — | — | — |
| ClusterLayout | — | — | ✓ | — | — | — | — | — | — |
| PackageLayout | — | — | — | ✓ | — | — | — | — | — |
| CheckoutLayout | — | — | — | — | — | — | — | ✓ | — |
| ComparisonLayout | — | — | — | — | ✓ | — | — | — | — |
| StateHubLayout | — | — | — | — | — | ✓ | — | — | — |

**Key:** ✓ = used, — = not used, ○ = minimal version (checkout uses simplified header/footer), var = page-specific variant

---

## Totals

- **Tokens:** 5 categories (colors, typography, spacing, shadows, animations)
- **Primitives:** 14 components
- **Composites:** 40 components (23 original + 17 added from page specs)
- **Layouts:** 8 components
- **Page-Specific:** 25 components
- **Total:** 87 components + 5 token categories

**Note:** The page-specific components (Layer 5) are built from primitives and composites — they represent specific compositions, not new atomic elements. Many are "variants" of more generic composites tailored to a page context (e.g., PillarHero is a hero composition using Button, Badge, Icon; IntentRoutingCard is a Card variant with PillarCard behavior and state context). The 87 count represents every distinct named component Claude Code will build. The actual number of truly unique React components is closer to 55-60 since many page-specific components share significant code.

---

## Build Priority

Components are built in dependency order per the Build Roadmap. The priority groups are:

**Group 1 — Tokens & Primitives (Steps 1-2):** All 5 token categories + all 14 primitives — foundation everything else depends on

**Group 2 — Shell (Step 3):** SiteHeader, SiteFooter, MegaMenu, MobileNav, Breadcrumbs, StickyMobileCTA, PillarLayout, ClusterLayout, ContentSidebar

**Group 3 — Homepage (Step 4):** HomepageHero, PillarCard, HowItWorks, DifferentiatorGrid, ComplianceCallout, plus composites already built: Card, CTABlock, TrustSignals, TestimonialCarousel, PackagePreviewCard, StepIndicator (decorative)

**Group 4 — Heavy Composites (Step 5):** PricingGrid (highest complexity), EntityTypeToggle, RunningTotal, Accordion, AccordionSearch, ComparisonTable, ProgressiveDisclosure, CrossPillarCTA, DifferentiatorCallout, MoneyBackBadge, WhereToGoNext, AudienceBlocks, ValueComparisonCallout, AlsoConsiderCards, WinnerIndicator, CategoryFilterPills

**Group 5 — Pillar & Package Pages (Steps 6-7):** PillarHero, ClusterGrid, ComparisonCards, PackageHero, FeatureTooltip, PackageLayout, StateSelector, DecisionGuideBlocks, DualPackageCTA, ComparisonLayout, ComparisonHero

**Group 6 — Checkout (Step 8):** CheckoutLayout, TierSelectorCards, OrderSummary, FormSection, PaymentMethodSelector, PaymentForm (MockStripeInput), ConfirmationBlock, ConfirmationTimeline

**Group 7 — Supporting Pages (Step 9):** StateHubLayout, StateHero, IntentRoutingCard, AdvantageGrid, ContentMapGrid, FAQHero, SearchInput, RelatedGuides, AboutHero, FounderBio, Timeline, PhilosophyCards, OfficeSection, StatsStrip, ContactHero, ContactMethodCards, ContactForm, MapPlaceholder
