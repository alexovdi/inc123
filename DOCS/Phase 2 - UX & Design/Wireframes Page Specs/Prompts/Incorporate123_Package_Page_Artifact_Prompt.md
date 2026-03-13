# Package Page (Wyoming Gold) Artifact Prompt

Copy everything below the line and paste it into Claude along with the uploaded `Incorporate123_Package_Page_Wireframe_Spec.md` file.

---

Build the Incorporate123 Wyoming Gold Package page (`/wyoming-private-incorporation/`) as a single React artifact (.jsx) based on the attached wireframe specification. This is the MOST COMPLEX page on the entire site — it's the primary conversion endpoint where money changes hands. The template will be replicated for all 7 other package pages.

**Important: The attached spec contains no color tokens, spacing values, or design definitions.** Use your own judgment to create a polished, premium visual design. This page should feel like the pricing page of a high-end professional services firm — clean, trustworthy, confident. Gold package visually dominant. The Privacy pillar identity color is blue.

## Technical Constraints

- Single React component, default export, no required props
- Tailwind utility classes only (core pre-defined classes)
- Lucide React for icons (Shield, Clock, Globe, Archive, Check, X, Info, ChevronDown, ChevronRight, ArrowRight, Phone, Star, CreditCard, Bitcoin, BadgeCheck, HelpCircle)
- React hooks for state: entity type toggle (LLC/Corp), tooltip visibility, add-on checkboxes with running total, progressive disclosure toggles, FAQ accordion, mobile feature expand
- No localStorage, no external APIs
- Responsive: mobile-first
- Semantic HTML

## Critical Interactive Components

This page has more interactive state than any other page. These five components must all work:

### 1. Entity Type Toggle (LLC / Corporation)
- Segmented control / pill toggle at the top of the pricing section
- LLC selected by default
- Switching to Corp adds $300 to all displayed prices INSTANTLY
- Every price on the page updates: tier headers, CTA button labels, running total
- Use React state: `const [entityType, setEntityType] = useState('llc')`

### 2. Pricing Comparison Grid
- Wyoming has 2 tiers: Silver ($900 LLC / $1,200 Corp) and Gold ($1,275 LLC / $1,575 Corp)
- Gold column is visually elevated: larger card or highlighted border, "Most Popular" badge, accent treatment
- Feature rows with checkmarks (✓) or dashes (—) per column
- Each feature row has an info icon (ⓘ) that triggers a tooltip
- 10 feature rows from the spec — use ALL of them with the exact tooltip content
- CTA at bottom of each column: "Start Silver — $[price] →" / "Start Gold — $[price] →"
- Prices change when entity toggle switches
- **Mobile:** Stack as cards. Gold card FIRST (top). Each card shows 3–4 key features with "See all features ↓" expand toggle

### 3. Feature Tooltips
- Desktop: show on hover over the ⓘ icon next to each feature name
- Mobile: show on tap, dismiss on tap elsewhere
- Tooltip positioned above the icon, flips below if near viewport top
- Content is 1–2 sentences from the spec (use the exact tooltip text)
- Small arrow/caret pointing to the trigger

### 4. Add-On Configurator with Running Total
- Section below the pricing grid
- 6 add-ons as checkboxes grouped into "Recommended" (3) and "Additional Services" (3)
- Each add-on: checkbox + name + price on one line, 1-sentence description below, "Learn more ↓" expandable
- Use the exact add-ons and prices from the spec
- **Running Total sidebar** (desktop): sticky on scroll, shows selected tier + each checked add-on + total. Updates in real time as checkboxes are toggled.
- **Running Total mobile**: sticky bottom bar showing "Gold + 2 add-ons — $1,700" style summary + "Checkout →" button
- Use React state: `const [addOns, setAddOns] = useState({})` and compute total dynamically

### 5. FAQ Accordion
- 8 questions from the spec with substantive answers (2–4 sentences each)
- Single-expand mode
- Smooth height animation
- Keyboard accessible

## Page Structure (build every section, in order)

### Header & Footer
Same as homepage/pillar page. "Packages" nav item should show active state. Breadcrumb: Home > Packages > Wyoming Gold (Private).

### Section 1: Package Hero
- Blue privacy pillar accent
- Eyebrow: "Wyoming LLC · Privacy Package"
- H1: "Wyoming Gold Package — Complete Privacy Formation"
- Subheadline with price ($1,275), renewal ($525/year), and all-inclusive framing
- Dual CTAs: "Order Now — $1,275 →" (primary, prominent) + "Schedule a Consultation →" (secondary)
- Trust strip: All-Inclusive · 30-Day Money-Back Guarantee · Trusted Since 2000 · Crypto Accepted

### Section 2: Entity Type Toggle + Pricing Grid
- LLC/Corp toggle above the grid
- 2-column grid (Silver vs Gold) with all 10 feature rows and tooltips
- Gold is visually the hero — badge, elevated card, bolder CTA
- Both CTA buttons at bottom of each column

### Section 3: Value Comparison Callout
- Highlighted box showing the full value breakdown from the spec
- "Wyoming Gold Package: $1,275 all-inclusive. That includes year-round nominee services (competitors charge $400–$5,000/year), registered agent ($125–$199/year elsewhere)..." etc.
- This is a key persuasion element — make it visually prominent

### Section 4: Add-On Configurator
- H2: "Customize Your Package"
- Checkboxes with running total
- Desktop: configurator left, sticky running total sidebar right
- Mobile: configurator full width, sticky bottom total bar

### Section 5: Progressive Disclosure — "What You Need to Know"
- 3 expandable sections: "What is a Wyoming LLC?", "How Nominees Protect You", "What Happens After Formation"
- Scanner content visible, expanded detail on toggle
- Write realistic placeholder content for the expanded sections

### Section 6: "Also Consider" — Related Packages
- 3 cards: Nevada Gold ($1,800), Wyoming Silver ($900), California/Florida Private ($2,500+)
- Horizontal row desktop, scroll on mobile

### Section 7: Trust & Social Proof
- Trust signals bar (reuse from homepage)
- 2–3 testimonial cards (realistic placeholder quotes about Wyoming privacy formation)
- Money-back guarantee callout with shield icon

### Section 8: FAQ Accordion
- All 8 questions from the spec with realistic answers

### Section 9: Final Conversion CTA
- Dark section: "Ready to Protect Your Privacy?"
- Repeat "Order Now — $1,275 →" + "Schedule a Consultation →" + phone number

### Mobile Sticky Elements
- Running total bar appears when scrolling through add-on section
- Standard sticky bottom CTA bar (from other pages) for the rest of the page

## Content Rules

- Use EXACT headlines, feature names, tooltip content, FAQ questions, and CTA labels from the spec
- All package prices must update when the LLC/Corp toggle switches
- Write realistic answers for all 8 FAQ questions (2–4 sentences each, informative and confident)
- Write realistic expanded content for the progressive disclosure sections
- Placeholder phone: (775) 555-0123
- All links: `href="#"`

## What Matters Most

This is the money page. Every conversion on the site ends here. Prioritize:

1. **Pricing grid working perfectly** — tooltips, toggle, responsive cards on mobile, Gold visually dominant
2. **Running total updating in real time** — this is the signature interaction. Check a box, total changes. Toggle LLC/Corp, everything changes.
3. **Trust signals throughout** — money-back guarantee, trust strip, testimonials. Buyers need reassurance at checkout.
4. **Value framing** — the comparison callout must make $1,275 feel like a bargain by showing $2,000+ in included value
5. **Mobile pricing** — the stacked card layout with Gold first and expandable features must work cleanly
6. **Premium feel** — this page justifies premium pricing. It needs to LOOK premium. Confident spacing, clean typography, no clutter.
