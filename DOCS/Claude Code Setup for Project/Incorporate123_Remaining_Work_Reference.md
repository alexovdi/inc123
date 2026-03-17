# Incorporate123 — Remaining Work Reference

**Purpose:** Everything NOT yet built — page-specific components, prototype pages, and behavioral enhancements — organized by page type. Use as a checklist during wireframe creation and a comparison reference for final results.

**What IS built:** 14 primitives, 40 composites, 8 layouts, 5 data files, dev showcase (Phase A — 100% complete). See `project-status-audit.md` for full inventory.

**What this document covers:** Phase B–E remaining work only.

---

## 1. Homepage

**Route:** `/`
**Pages:** 1
**Layout:** Root layout (SiteHeader + SiteFooter)

### Page-Specific Components to Build

#### HomepageHero
Full-width split layout hero section.
- **Structure:** Eyebrow text, H1 headline, subheadline paragraph, dual CTAs (primary + secondary), trust badge strip below
- **Layout:** Left column (headline/CTAs) + right column (visual placeholder) on desktop; stacked on mobile
- **Behavior:** Trust badge strip shows "25 Years · Reno, NV · 30-Day Guarantee" inline. Primary CTA links to packages, secondary to privacy pillar.

#### ComplianceCallout
Full-width card for existing entity owners.
- **Structure:** Compliance pillar accent (purple), "Already Have an Entity?" headline, subtext, dual CTAs to compliance pillar and client login
- **Behavior:** Positioned after main content sections. Purple left border or background tint matching compliance pillar color.

### Existing Composites Used

| Composite | Usage Notes |
|-----------|-------------|
| PillarCard (3.33) | 4-card grid — one per pillar with identity colors, service items, arrow CTAs |
| PackagePreviewCard (3.14) | WY Gold + NV Gold side by side, Gold highlighted as "Most Popular" |
| HowItWorks (3.18) | 4-step process: Consult → Choose → We File → You're Protected |
| DifferentiatorGrid (3.19) | 2×3 grid on navy background, amber icons, white text |
| TrustSignalsBar (3.7) | Full 6-item variant |
| TestimonialCarousel (3.8) | 2–3 cards with quotes, attribution, star ratings |
| CTABlock (3.6) | Multiple instances — mid-page light variant + final dark (navy) variant |
| StickyMobileCTA (3.15) | "Get Started →" + phone icon variant |

### Behavioral Enhancements

- **StickyMobileCTA:** Use default variant — "Get Started →" + phone icon
- **PackagePreviewCard:** Show WY Gold and NV Gold specifically, Gold highlighted with "Most Popular" badge

---

## 2. Pillar Pages

**Routes:** `/privacy`, `/asset-protection`, `/formation`, `/compliance`
**Pages:** 4
**Layout:** PillarLayout (4.3)

### Page-Specific Components to Build

#### PillarHero
Pillar-specific hero with identity color accent.
- **Structure:** Pillar color accent bar/element, eyebrow ("Business Privacy" etc.), H1 headline, subheadline paragraph, dual CTAs (primary to packages, secondary contextual), trust snippet
- **Variants:** Content varies per pillar but structure is identical across all 4. Each uses its pillar identity color (Privacy=blue, AP=green, Formation=amber, Compliance=purple).
- **Behavior:** Trust snippet shows a key stat inline (e.g., "Trusted by 10,000+ businesses since 2000"). Responsive: stacked layout on mobile.
- **Reuse:** Built once, data-driven for all 4 pillar pages.

### Existing Composites Used

| Composite | Usage Notes |
|-----------|-------------|
| ProgressiveDisclosure (3.9) | Sections 4, 5, 6 — scanner content visible, detail expandable |
| ClusterGrid (3.29) | Section 7 — 3×3 or 4×2 grid of cluster link cards |
| ComparisonCards (3.30) | Section 8 — 2 cards linking to comparison pages |
| FAQAccordion (3.1) | Pillar-specific FAQs, single-expand mode |
| CTABlock (3.6) | Section 9 (mid-page CTA) + Section 11 (final dark CTA) |
| ContentSidebar (3.24) | Section 13 — sticky right sidebar with Package Shortcut, Related Clusters, Cross-Pillar Link, Phone |
| CrossPillarCTA (3.17) | Section 10 — below primary CTA, links to related pillar |
| WhereToGoNext (3.25) | 3 contextual suggestion links |
| DifferentiatorCallout (3.28) | Competitive comparison stat in service blocks |
| PackagePreviewCard (3.14) | In sidebar Package Shortcut and in package preview section |

### Behavioral Enhancements

- **StickyMobileCTA:** "View Gold Packages" + phone variant
- **FAQAccordion:** Single-expand mode; FAQ schema markup on every Q&A pair
- **ContentSidebar:** Pillar variant — blocks: Package Shortcut card (Gold prices + CTAs), Related Clusters list (all clusters under this pillar, current highlighted), Cross-Pillar Link, Phone number
- **Breadcrumbs:** Format: Home > [Pillar Name]

---

## 3. Package Pages

**Routes:** `/packages/wyoming-gold`, `/packages/wyoming-silver`, `/packages/nevada-gold`, `/packages/nevada-silver`, `/packages/nevada-bronze`, `/packages/california-private`, `/packages/florida-private`, `/packages/shelf-company`
**Pages:** 8
**Layout:** PackageLayout (4.5)

### Page-Specific Components to Build

#### PackageHero
Package-specific hero with price prominence.
- **Structure:** Package name (H1), state badge, tier badge ("Most Popular" / "All-Inclusive"), large price display (mono font), renewal rate note, "all-inclusive" label, dual CTAs ("Order Now" + "Compare Packages"), trust strip below
- **Behavior:** Price updates when EntityTypeToggle switches LLC/Corp. Corp adds ~$300. CTA labels update with new price.
- **Reuse:** Built once, data-driven for all 8 package pages.

#### FeatureTooltip
Specialized tooltip for pricing grid feature rows.
- **Structure:** ⓘ info icon trigger next to feature name, 1–2 sentence explanation popup
- **Behavior:** Desktop: hover to show. Mobile: tap to toggle, tap elsewhere to dismiss. Positioned above trigger, flips below if near viewport top. Small arrow/caret pointing to trigger. Dismiss on scroll (mobile).
- **Extends:** Builds on Tooltip primitive (already built) with specific trigger pattern for pricing context.

#### AddOnConfigurator
Checkbox-based add-on selector with real-time pricing.
- **Structure:** Two groups: "Recommended Add-Ons" and "Additional Add-Ons". Each add-on: checkbox + name + price + short description + expandable detail paragraph
- **Behavior:** Checking/unchecking updates RunningTotal in real time. Group headers with item counts. Expandable detail uses ProgressiveDisclosure pattern.
- **Reuse:** Used on all package pages and adapted for checkout Step 1.

### Existing Composites Used

| Composite | Usage Notes |
|-----------|-------------|
| PricingGrid (3.4) | Side-by-side tier comparison: 2-column (WY) or 3-column (NV). Feature rows with checkmarks/dashes. Gold highlighted. Mobile: stacked cards. |
| EntityTypeToggle (3.27) | LLC/Corporation toggle — updates all prices on page |
| RunningTotal (3.34) | Desktop: sticky sidebar with tier + add-ons + total. Mobile: sticky bottom bar. |
| ValueComparisonCallout (3.35) | "$1,275 all-inclusive — $2,000+ in included services" |
| AlsoConsiderCards (3.36) | 3 horizontal cards linking to related packages |
| FAQAccordion (3.1) | Package-specific FAQs, single-expand mode |
| CTABlock (3.6) | Conversion CTA blocks |
| TrustSignalsBar (3.7) | Full 6-item variant |
| TestimonialCarousel (3.8) | Package-specific testimonials |
| MoneyBackBadge (3.26) | "30-Day Money-Back Guarantee" with shield icon |
| ProgressiveDisclosure (3.9) | Educational content sections |
| DifferentiatorCallout (3.28) | Competitive comparison stat |

### Behavioral Enhancements

- **StickyMobileCTA:** "Order Now — $[price]" + phone variant. Price is dynamic based on EntityTypeToggle state.
- **EntityTypeToggle:** Switching LLC/Corp updates ALL prices on page — PricingGrid, PackageHero price, RunningTotal, CTA button labels
- **PricingGrid:** Feature rows need FeatureTooltip integration (ⓘ icons per feature)
- **FAQAccordion:** Single-expand mode; FAQ schema markup
- **RunningTotal:** Reflects EntityTypeToggle state + AddOnConfigurator selections in real time

---

## 4. Checkout Flow

**Routes:** `/checkout/configure`, `/checkout/details`, `/checkout/payment`, `/checkout/confirmation`
**Pages:** 4
**Layout:** CheckoutLayout (4.6)

### Page-Specific Components to Build

#### TierSelectorCards
Selectable package tier cards for checkout Step 1.
- **Structure:** Radio-style selection cards, one per tier. Each shows: tier name, price, key inclusions summary, select indicator (radio circle or highlight border)
- **Behavior:** Only one selectable at a time (radio behavior). Gold highlighted as "Recommended". Selecting a tier updates OrderSummary immediately.
- **Adapted from:** PricingGrid — simplified to selection-only (no full feature comparison)

#### AddOnCheckboxes
Simplified add-on selection for checkout Step 1.
- **Structure:** Checkbox list with add-on name + price per item. Grouped but without expandable descriptions.
- **Behavior:** Checking/unchecking updates OrderSummary in real time.
- **Adapted from:** AddOnConfigurator — stripped to essentials for checkout context.

#### MockStripeInput
Mock credit card form for checkout Step 3.
- **Structure:** Card number input (formatted with spaces every 4 digits), expiry date (MM/YY), CVC (3 digits), cardholder name. Lock icon + "256-bit SSL Encrypted" label adjacent.
- **Behavior:** Input masking/formatting on card number. Basic field validation (length, format). Visual styling mimics Stripe Elements aesthetic.
- **Note:** PaymentForm (3.22) composite exists — MockStripeInput may be a sub-component within it or a replacement. Reconcile during build.

#### ConfirmationTimeline
Post-order step timeline for checkout Step 4.
- **Structure:** Numbered vertical timeline with 5 steps: (1) Name availability check — immediate, (2) State filing — 1–3 business days, (3) EIN application — upon approval, (4) Document delivery — within 24 hours of approval, (5) Ongoing compliance support — continuous
- **Behavior:** Each step shows: step number in circle, title, timeframe, 1–2 sentence description. Visual treatment: completed style for step 1, active for step 2, upcoming for 3–5.
- **Note:** ConfirmationBlock (3.23) composite exists — ConfirmationTimeline may be a section within it. Reconcile during build.

### Existing Composites Used

| Composite | Usage Notes |
|-----------|-------------|
| StepIndicator (3.10) | 4-step progress bar across all checkout pages |
| OrderSummary (3.20) | Sticky sidebar (desktop), collapsible bar (mobile). Receipt on Step 4. |
| PaymentMethodSelector (3.38) | Tabbed selector: Credit Card / PayPal / Cryptocurrency |
| PaymentForm (3.22) | Credit card form fields (Step 3) |
| ConfirmationBlock (3.23) | Confirmation message and details (Step 4) |
| FormSection (3.21) | Form field grouping with section headers (Step 2) |
| EntityTypeToggle (3.27) | LLC/Corp toggle on Step 1 |
| TrustSignalsBar (3.7) | Compact variant on Step 3 |
| MoneyBackBadge (3.26) | Prominent on Step 3 near payment |

### Behavioral Enhancements

- **SiteHeader:** Simplified checkout variant — logo + phone number only, no mega menu, no full navigation
- **StickyMobileCTA:** "Continue →" variant, step-specific (advances to next checkout step)
- **OrderSummary:** Evolves from RunningTotal on package page → persistent through checkout → collapsible on mobile → expanded by default on Step 3 → receipt format on Step 4
- **Breadcrumbs:** Show checkout step context: Home > Checkout > [Step Name]
- **TrustSignalsBar:** Compact 4-item variant emphasizing security ("Secure Checkout", "256-bit SSL", "30-Day Money-Back", phone)

---

## 5. Cluster Pages

**Routes:** `/privacy/anonymous-llc`, `/privacy/nominee-services`, `/privacy/private-registration`, etc.
**Pages:** 24+ (Privacy ~8, Asset Protection ~6, Formation ~6, Compliance ~4)
**Layout:** ClusterLayout (4.4)

### Page-Specific Components to Build

#### ClusterHero
Cluster page hero section.
- **Structure:** Parent pillar color accent, eyebrow (pillar name), H1 (cluster topic), subheadline, optional CTA
- **Behavior:** Color accent matches parent pillar. Breadcrumb context: Home > [Pillar] > [Cluster Topic].
- **Note:** Referenced in Component Library Reference §5 dependency graph but not fully described in §4. Needs wireframe spec. May be a simplified variant of PillarHero.

#### LongFormContent
Structured long-form educational content block.
- **Structure:** Multiple content sections with H2/H3 headings, body paragraphs, inline callouts, and optional progressive disclosure for deeper detail
- **Behavior:** Anchored sections for potential table-of-contents navigation. Supports inline DifferentiatorCallout and ProgressiveDisclosure.
- **Note:** Referenced in Component Library Reference §5 dependency graph but not fully described in §4. Needs wireframe spec. May be a content wrapper/pattern rather than a standalone component.

### Existing Composites Used

| Composite | Usage Notes |
|-----------|-------------|
| ComparisonTable (3.5) | Inline WY vs NV comparison where relevant |
| AudienceBlocks (3.32) | "Who Needs [This Service]?" — 2×2 icon + title + description grid |
| FAQAccordion (3.1) | Cluster-specific FAQs |
| CTABlock (3.6) | Mid-page and final CTA blocks |
| ContentSidebar (3.24) | Cluster variant sidebar |
| CrossPillarCTA (3.17) | Links to related pillar below primary CTA |
| WhereToGoNext (3.25) | 3 contextual suggestion links |
| PackagePreviewCard (3.14) | Package CTA block within content |
| ProgressiveDisclosure (3.9) | Expandable detail sections inline |
| DifferentiatorCallout (3.28) | Competitive comparison stats (e.g., nominee service pricing) |

### Behavioral Enhancements

- **StickyMobileCTA:** "View Gold Packages" + phone variant
- **FAQAccordion:** Multi-expand mode; FAQ schema markup
- **ContentSidebar:** Cluster variant — blocks: Package Shortcut card, Related Clusters list (siblings under same pillar, current page highlighted), Back to Pillar link ("← Back to Business Privacy"), Cross-Pillar Link, Phone number
- **Breadcrumbs:** Format: Home > [Pillar] > [Cluster Topic]

---

## 6. Comparison Pages

**Routes:** `/compare/wyoming-vs-nevada-privacy`, `/compare/wyoming-vs-nevada-asset-protection`, `/compare/wyoming-vs-nevada-llc`, `/compare/llc-vs-corporation`, `/compare/gold-vs-silver-wyoming`, `/compare/gold-vs-silver-nevada`
**Pages:** 6
**Layout:** ComparisonLayout (4.7)

### Page-Specific Components to Build

#### ComparisonHero
Simplified hero with no CTAs — verdict-focused.
- **Structure:** Eyebrow ("State Comparison" / "Entity Comparison" / "Package Comparison"), H1 headline (e.g., "Wyoming vs Nevada for Privacy"), subheadline, quick verdict callout box (highlighted summary of the winner/recommendation)
- **Behavior:** No CTA buttons in hero — the purpose is education first, conversion after the table. Verdict callout uses a distinct visual treatment (bordered box, light background tint).
- **Reuse:** Built once, data-driven for all 6 comparison pages.

### Existing Composites Used

| Composite | Usage Notes |
|-----------|-------------|
| ComparisonTable (3.5) | Primary content — factor rows with 2+ data columns, winner indicators |
| WinnerIndicator (3.39) | Per-row winner highlight in ComparisonTable (green tint / checkmark / bold) |
| DecisionGuideBlocks (3.40) | "Choose Wyoming If..." / "Choose Nevada If..." bullet sections |
| DualPackageCTA (3.31) | Two side-by-side PackagePreviewCards after table + bottom repeat |
| FAQAccordion (3.1) | Comparison-specific FAQs |
| CTABlock (3.6) | Bottom repeat CTA |
| CrossPillarCTA (3.17) | Cross-pillar link below primary CTA |
| WhereToGoNext (3.25) | 3 contextual next-step links |

### Behavioral Enhancements

- **StickyMobileCTA:** "View Gold Packages" + phone variant
- **FAQAccordion:** Single-expand mode; FAQ schema markup
- **ComparisonTable:** Winner indicators per row using WinnerIndicator. Ties show neutral indicator. Mobile: stacked factor cards OR horizontal scroll with sticky first column.
- **DualPackageCTA:** Desktop: side by side. Mobile: stacked, lower-cost state on top.

---

## 7. State Hub Pages

**Routes:** `/states/wyoming`, `/states/nevada`, `/states/california`, `/states/florida`
**Pages:** 4
**Layout:** StateHubLayout (4.8)

### Page-Specific Components to Build

#### StateHero
Neutral hero — no single pillar color.
- **Structure:** State name (H1), tagline/subheadline, state facts strip with quick-reference stat chips (e.g., "No State Income Tax", "No Franchise Tax", "Strong Privacy Laws", "Population: 580K")
- **Behavior:** No pillar color accent — neutral palette. Stat chips are Badge-style elements. Responsive: stat chips wrap to 2×2 grid on mobile.
- **Reuse:** Built once, data-driven for all 4 state hubs.

#### IntentRoutingCard
Pillar-colored card routing users to relevant content by intent.
- **Structure:** Pillar identity color accent (top border or left border), pillar icon, title (e.g., "Wyoming for Privacy"), description paragraph, 3 key page links (to specific clusters), primary CTA button, package quick link
- **Behavior:** 4 cards per state hub page (one per pillar). Hover: shadow increase + slight lift. Each card is colored to match its pillar.
- **Not the same as PillarCard:** IntentRoutingCard includes page links and package quick link; PillarCard is simpler.

#### AdvantageGrid
State advantages showcase grid.
- **Structure:** 3×2 grid of advantage items. Each item: icon (40px), title, 2–3 sentence description.
- **Behavior:** Desktop: 3-column grid. Mobile: single column, full-width items.
- **Adapted from:** DifferentiatorGrid (3.19) — lighter visual treatment (not dark background, no navy). Uses state-neutral styling.

#### ContentMapGrid
Comprehensive link grid organized by pillar.
- **Structure:** 4-column grid, each column headed by a pillar name with pillar-colored header. Primary/important pages bold, secondary pages regular weight. All links point to cluster/comparison pages relevant to this state.
- **Behavior:** Desktop: 4-column grid. Mobile: accordion per pillar (tap to expand column). Pillar-colored header accents.
- **Purpose:** "Everything we offer for [State]" — complete content map.

### Existing Composites Used

| Composite | Usage Notes |
|-----------|-------------|
| PackagePreviewCard (3.14) | State-specific package previews (Gold + Silver for WY/NV) |
| FAQAccordion (3.1) | State-specific FAQs |
| CTABlock (3.6) | Final CTA with phone number |
| WhereToGoNext (3.25) | 3 contextual next-step links |

### Behavioral Enhancements

- **StickyMobileCTA:** "View [State] Packages" + phone variant (dynamic state name)
- **FAQAccordion:** Single-expand mode; FAQ schema markup
- **PillarCard (3.33):** May be adapted for intent routing, but IntentRoutingCard is a distinct component
- **Breadcrumbs:** Format: Home > [State Name] (no pillar level)

---

## 8. FAQ / Resource Page

**Route:** `/faq`
**Pages:** 1
**Layout:** Root layout (standard)

### Page-Specific Components to Build

#### FAQHero
Compact utility-page hero.
- **Structure:** Eyebrow ("Resources"), H1 headline ("Frequently Asked Questions"), subheadline paragraph
- **Behavior:** Minimal — no CTAs, no visual. Text-centered layout.

#### SearchInput
Real-time search field for FAQ filtering.
- **Structure:** Large search input field with search icon, clear button (appears when text entered), result count display below ("Showing 23 of 111 questions")
- **Behavior:** Debounced input (200ms delay before filtering). Matches against both question text and answer text. Combines with CategoryFilterPills — both filters active simultaneously. Clear button resets to all results. Empty state message if no matches.
- **Reusable for:** Future blog/resource search.

#### RelatedGuides
Contextual guide links per FAQ category.
- **Structure:** 2 links per FAQ category section, appearing after that category's accordion group. Each link: title + brief description + arrow.
- **Adapted from:** WhereToGoNext (3.25) — simplified to 2 items, placed inline within category sections rather than as a standalone section.

### Existing Composites Used

| Composite | Usage Notes |
|-----------|-------------|
| FAQAccordion (3.1) | Primary content — all ~111 FAQ items organized by category |
| AccordionSearch (3.2) | May handle search integration with accordion |
| CategoryFilterPills (3.37) | Horizontal pill row: All, Privacy, AP, Formation, Compliance, Packages, General. Pillar-colored accents. |
| CTABlock (3.6) | Bottom CTA |

### Behavioral Enhancements

- **StickyMobileCTA:** Phone-first variant — "Call Us" + message icon
- **FAQAccordion:** Enhanced version — multi-expand mode, deep-link anchor IDs per question (URL hash navigation), integrates with SearchInput filtering, FAQ schema markup on all Q&A pairs
- **CategoryFilterPills:** Combines with SearchInput — both filters active simultaneously. "All" pill resets category filter.

---

## 9. About Page

**Route:** `/about`
**Pages:** 1
**Layout:** Root layout (standard)

### Page-Specific Components to Build

#### AboutHero
Simple utility-page hero with office visual.
- **Structure:** Eyebrow ("About Us"), H1 headline, subheadline paragraph, office visual placeholder (right column or below)
- **Behavior:** Desktop: text left, visual right. Mobile: stacked, text above visual.

#### FounderBio
Founder/owner biography section.
- **Structure:** Desktop: 2-column layout — photo placeholder (left, ~40% width) + bio content (right, ~60%). Bio contains: name, title, location ("Reno, Nevada"), experience line ("25+ years in business formation"), 3 bio paragraphs, direct contact info (phone + email), trust tags (badges like "Nevada Registered Agent", "Privacy Specialist")
- **Behavior:** Desktop: side by side. Mobile: photo stacked above bio. Photo placeholder: 1:1 aspect ratio with rounded corners.

#### Timeline
Company milestone timeline.
- **Structure:** Vertical timeline with 8 milestone events. Each event: year badge (large, bold), milestone title, 1–2 sentence description.
- **Behavior:** Desktop: alternating left/right layout (odd events left, even events right of center line). Mobile: single column, all events aligned left. Connecting line between events with dot markers at each milestone.
- **Not the same as ConfirmationTimeline:** This is a company history timeline; ConfirmationTimeline is a post-order process timeline.

#### PhilosophyCards
Company values / philosophy cards.
- **Structure:** 3 cards in a row: "Specialists, Not Generalists", "Transparent, Not Gated", "Real People, Not Automation". Each card: icon, title, 2–3 sentence description.
- **Behavior:** Desktop: 3-column grid. Mobile: stacked full-width.
- **Adapted from:** DifferentiatorGrid (3.19) — simpler visual treatment, lighter background (not dark navy).

#### OfficeSection
Physical office information section.
- **Structure:** Address (full street address, Reno, NV), phone number (tap-to-call), email address (mailto link), business hours, 2–3 office photo placeholders, map placeholder (static image with MapPin icon, production: Google Maps embed), Nevada proximity note ("Located in Reno — minutes from the Nevada Secretary of State")
- **Behavior:** Phone: tap-to-call on mobile. Email: mailto link. Map: static placeholder in prototype, Google Maps embed in production.

#### StatsStrip
Company statistics showcase.
- **Structure:** 4 large stat blocks in a horizontal row. Stats: "25+" (Years in Business), "2" (States with Physical Offices), "$525" (Starting Package Price), "100%" (Money-Back Guarantee). Each block: large number (display font), label below.
- **Behavior:** Desktop: 4-column row. Mobile: 2×2 grid. Optional: animated count-up on viewport entry using IntersectionObserver (number counts from 0 to target value).

### Existing Composites Used

| Composite | Usage Notes |
|-----------|-------------|
| TestimonialCarousel (3.8) | Client testimonials (if available) |
| CTABlock (3.6) | Final CTA — "Ready to Get Started?" dark variant |

### Behavioral Enhancements

- **StickyMobileCTA:** "View Packages" + phone variant
- **Breadcrumbs:** Format: Home > About

---

## 10. Contact Page

**Route:** `/contact`
**Pages:** 1
**Layout:** Root layout (standard)

### Page-Specific Components to Build

#### ContactHero
Compact hero for contact page.
- **Structure:** Eyebrow ("Get in Touch"), H1 ("Talk to a Privacy Specialist"), subheadline paragraph
- **Behavior:** Minimal — no CTAs in hero, no visual. Text-centered layout.

#### ContactMethodCards
Three contact method options.
- **Structure:** 3 cards in a row: (1) "Call Us" — phone number prominent, tap-to-call button, hours. (2) "Send a Message" — brief text, CTA that scrolls to contact form below. (3) "Visit Our Office" — address, hours, "Get Directions" link.
- **Behavior:** Desktop: 3-column grid. Mobile: stacked full-width. Phone card is visually most prominent (larger or highlighted). Tap-to-call on phone card. "Send a Message" card smooth-scrolls to ContactForm section.

#### ContactForm
Full contact form with validation.
- **Structure:** 6 field rows: (1) Name + Email (side by side), (2) Phone + Preferred Contact Method select (side by side), (3) Inquiry Type select (dropdown: General, New Business Formation, Privacy Services, Asset Protection, Existing Client), (4) State of Interest select (dropdown: Wyoming, Nevada, California, Florida, Other), (5) Message textarea (4–5 rows), (6) Referral Source select (dropdown: Google, Referral, Social Media, Returning Client, Other)
- **Behavior:** Validation on blur (red border + error message). Required fields: name, email, inquiry type. Submit button with loading state ("Sending..." + spinner). Success: form replaced with confirmation message ("Thank you! We'll respond within 1 business day."). Uses FormInput, FormSelect, FormTextarea primitives.

#### MapPlaceholder
Static map placeholder for office location.
- **Structure:** Map container with MapPin icon centered, address text overlay, "Get Directions" link
- **Behavior:** Prototype: static placeholder with icon. Production: Google Maps embed with pin at office address.

#### QuickLinkCards
Navigation cards for common next steps.
- **Structure:** 4 small cards linking to key pages: (1) View Packages, (2) Browse FAQ, (3) Anonymous LLC Guide, (4) Client Login. Each card: icon, title, 1-sentence description, arrow link.
- **Behavior:** Desktop: 4-column grid. Mobile: 2×2 grid. Hover: shadow + slight lift.
- **Adapted from:** WhereToGoNext (3.25) — richer cards with descriptions and icons.

### Existing Composites Used

| Composite | Usage Notes |
|-----------|-------------|
| TrustSignalsBar (3.7) | Compact 4-item variant |

### Behavioral Enhancements

- **StickyMobileCTA:** Phone-first variant — "Call (775) 555-0123" + message icon
- **TrustSignalsBar:** Compact 4-item variant — "Trusted Since 2000", "Real Reno Office", "30-Day Guarantee", phone number
- **Breadcrumbs:** Format: Home > Contact

---

## Component Checklist

All page-specific components remaining to build. Grouped by page type.

### Homepage (2)
- [ ] HomepageHero
- [ ] ComplianceCallout

### Pillar Pages (1)
- [ ] PillarHero

### Package Pages (3)
- [ ] PackageHero
- [ ] FeatureTooltip
- [ ] AddOnConfigurator

### Checkout Flow (4)
- [ ] TierSelectorCards
- [ ] AddOnCheckboxes
- [ ] MockStripeInput
- [ ] ConfirmationTimeline

### Cluster Pages (2)
- [ ] ClusterHero *(needs wireframe spec — not fully described in Component Library Reference)*
- [ ] LongFormContent *(needs wireframe spec — not fully described in Component Library Reference)*

### Comparison Pages (1)
- [ ] ComparisonHero

### State Hub Pages (4)
- [ ] StateHero
- [ ] IntentRoutingCard
- [ ] AdvantageGrid
- [ ] ContentMapGrid

### FAQ Page (3)
- [ ] FAQHero
- [ ] SearchInput
- [ ] RelatedGuides

### About Page (6)
- [ ] AboutHero
- [ ] FounderBio
- [ ] Timeline
- [ ] PhilosophyCards
- [ ] OfficeSection
- [ ] StatsStrip

### Contact Page (5)
- [ ] ContactHero
- [ ] ContactMethodCards
- [ ] ContactForm
- [ ] MapPlaceholder
- [ ] QuickLinkCards

**Total: 31 page-specific components**

---

## Page Checklist

All prototype pages remaining to build.

### Homepage (1)
- [ ] `/` — Homepage

### Pillar Pages (4)
- [ ] `/privacy` — Business Privacy
- [ ] `/asset-protection` — Asset Protection
- [ ] `/formation` — Company Formation
- [ ] `/compliance` — Compliance

### Package Pages (8)
- [ ] `/packages/wyoming-gold` — Wyoming Gold
- [ ] `/packages/wyoming-silver` — Wyoming Silver
- [ ] `/packages/nevada-gold` — Nevada Gold
- [ ] `/packages/nevada-silver` — Nevada Silver
- [ ] `/packages/nevada-bronze` — Nevada Bronze
- [ ] `/packages/california-private` — California Private
- [ ] `/packages/florida-private` — Florida Private
- [ ] `/packages/shelf-company` — Shelf Company

### Checkout Flow (4)
- [ ] `/checkout/configure` — Step 1: Configure
- [ ] `/checkout/details` — Step 2: Details
- [ ] `/checkout/payment` — Step 3: Payment
- [ ] `/checkout/confirmation` — Step 4: Confirmation

### Cluster Pages (24+)

**Privacy Clusters (~8):**
- [ ] `/privacy/anonymous-llc`
- [ ] `/privacy/nominee-services`
- [ ] `/privacy/private-registration`
- [ ] `/privacy/privacy-banking`
- [ ] `/privacy/digital-privacy`
- [ ] `/privacy/personal-privacy`
- [ ] `/privacy/real-estate-privacy`
- [ ] `/privacy/trust-privacy`

**Asset Protection Clusters (~6):**
- [ ] `/asset-protection/charging-order-protection`
- [ ] `/asset-protection/series-llc`
- [ ] `/asset-protection/asset-protection-trust`
- [ ] `/asset-protection/multi-entity-strategy`
- [ ] `/asset-protection/real-estate-protection`
- [ ] `/asset-protection/business-liability`

**Formation Clusters (~6):**
- [ ] `/formation/llc-formation`
- [ ] `/formation/corporation-formation`
- [ ] `/formation/registered-agent`
- [ ] `/formation/ein-application`
- [ ] `/formation/operating-agreement`
- [ ] `/formation/foreign-qualification`

**Compliance Clusters (~4):**
- [ ] `/compliance/annual-reports`
- [ ] `/compliance/registered-agent-services`
- [ ] `/compliance/boi-reporting`
- [ ] `/compliance/state-compliance`

### Comparison Pages (6)
- [ ] `/compare/wyoming-vs-nevada-privacy`
- [ ] `/compare/wyoming-vs-nevada-asset-protection`
- [ ] `/compare/wyoming-vs-nevada-llc`
- [ ] `/compare/llc-vs-corporation`
- [ ] `/compare/gold-vs-silver-wyoming`
- [ ] `/compare/gold-vs-silver-nevada`

### State Hub Pages (4)
- [ ] `/states/wyoming`
- [ ] `/states/nevada`
- [ ] `/states/california`
- [ ] `/states/florida`

### Utility Pages (3)
- [ ] `/faq` — FAQ / Resources
- [ ] `/about` — About Us
- [ ] `/contact` — Contact

**Total: ~54 pages minimum** (cluster page count may increase based on final content inventory)

---

## Behavioral Enhancements Checklist

Existing composites that need page-specific behavioral variants or configurations.

### SiteHeader
- [ ] Checkout simplified variant — logo + phone number only, no mega menu, no full navigation

### StickyMobileCTA — Per-Page Variants
- [ ] Homepage: "Get Started →" + phone icon
- [ ] Pillar pages: "View Gold Packages" + phone
- [ ] Package pages: "Order Now — $[price]" + phone (dynamic price)
- [ ] Checkout: "Continue →" (step-specific, advances to next step)
- [ ] Cluster pages: "View Gold Packages" + phone
- [ ] Comparison pages: "View Gold Packages" + phone
- [ ] State Hub: "View [State] Packages" + phone (dynamic state name)
- [ ] FAQ: "Call Us" + message icon (phone-first)
- [ ] About: "View Packages" + phone
- [ ] Contact: "Call (775) 555-0123" + message icon (phone-first)

### FAQAccordion — Mode Configuration
- [ ] Single-expand mode for: Pillar, Package, Comparison, State Hub
- [ ] Multi-expand mode for: Cluster, FAQ page
- [ ] FAQ schema markup on all instances
- [ ] FAQ page: deep-link anchor IDs per question, search integration, ~111 items

### ContentSidebar — Variant Configurations
- [ ] Pillar variant blocks: Package Shortcut, Related Clusters (current highlighted), Cross-Pillar Link, Phone
- [ ] Cluster variant blocks: Package Shortcut, Related Clusters (siblings, current highlighted), Back to Pillar link, Cross-Pillar Link, Phone

### OrderSummary / RunningTotal Flow
- [ ] Package page: RunningTotal reflects EntityTypeToggle + AddOnConfigurator state
- [ ] Checkout: OrderSummary evolves from RunningTotal — persistent sidebar/bar through all steps
- [ ] Checkout mobile: collapsible bar with total, expanded by default on Step 3
- [ ] Checkout Step 4: receipt format

### EntityTypeToggle — Price Propagation
- [ ] Package page: switching LLC/Corp updates PricingGrid, PackageHero price, RunningTotal, CTA labels
- [ ] Checkout Step 1: switching updates TierSelectorCards, AddOnCheckboxes, OrderSummary

### TrustSignalsBar — Variants
- [ ] Full 6-item variant: Homepage, Package pages
- [ ] Compact 4-item variant: Contact, Checkout Step 3

### Breadcrumbs — Path Patterns
- [ ] Pillar: Home > [Pillar Name]
- [ ] Cluster: Home > [Pillar] > [Cluster Topic]
- [ ] Package: Home > Packages > [Package Name]
- [ ] Checkout: Home > Checkout > [Step Name]
- [ ] State Hub: Home > [State Name]
- [ ] Comparison: Home > Compare > [Comparison Title]
- [ ] Utility: Home > [Page Name]

### ComparisonTable — Mobile Behavior
- [ ] Stacked factor cards OR horizontal scroll with sticky first column
- [ ] Winner indicators per row (integrate WinnerIndicator composite)

### DualPackageCTA — Responsive Order
- [ ] Mobile: stacked, lower-cost state on top

---

## Build Priority Recommendation

Based on complexity, dependencies, and client review impact:

| Priority | Page Type | Rationale |
|----------|-----------|-----------|
| 1 | **Homepage** | First impression, highest visibility for client review |
| 2 | **Package Page** (WY Gold first) | Highest complexity, conversion endpoint, tests most composites |
| 3 | **Privacy Pillar** | Template for all 4 pillars, tests PillarLayout + sidebar + progressive disclosure |
| 4 | **Checkout Flow** (4 steps) | Connected multi-step flow, state management, builds on package page work |
| 5 | **Comparison Page** (WY vs NV Privacy first) | Tests ComparisonLayout, references Package + State Hub |
| 6 | **State Hub** (Wyoming first) | New components (4), but templated for remaining 3 |
| 7 | **Cluster Page** (Anonymous LLC first) | Template for 24+ pages, mostly content + existing composites |
| 8 | **About Page** | 6 new components but simple layouts |
| 9 | **FAQ Page** | Search + filtering behavior, ~111 items |
| 10 | **Contact Page** | Form + cards, straightforward |
| 11 | **Remaining pillars** (AP, Formation, Compliance) | Content variations of Privacy Pillar template |
| 12 | **Remaining packages** (7) | Content variations of WY Gold template |
| 13 | **Remaining comparisons** (5) | Content variations of first comparison template |
| 14 | **Remaining state hubs** (3) | Content variations of Wyoming template |
| 15 | **Remaining clusters** (23+) | Content variations of Anonymous LLC template |

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
