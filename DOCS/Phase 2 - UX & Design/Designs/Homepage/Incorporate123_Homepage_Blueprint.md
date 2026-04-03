# Incorporate123 — Homepage Blueprint

**What this is:** A single reference document for generating the Incorporate123 homepage. Defines what goes on the page, why, and the rules that govern content — but never how it should look.

**What this is NOT:** A wireframe, a style guide, or a layout specification. This document contains zero visual direction — no colors, no fonts, no spacing, no grid definitions, no component shapes. Every generation should interpret the structure and content through its own unique design lens.

---

## Brand Identity

**Company:** Incorporate123
**Tagline concept:** Privacy, Asset Protection & Business Formation Specialists
**Founded:** ~2000 (25 years in business as of 2026)
**Location:** Kingsbury Executive Suites, Reno, Nevada (real physical office)
**Market position:** Premium self-service. Not budget, not consultation-gated. The only company occupying this quadrant.
**Logo text:** "Incorporate123" — the "123" portion should be visually distinguished from "Incorporate"

---

## Voice Rules (Non-Negotiable)

| Attribute     | Meaning                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------ |
| Authoritative | Cite specific numbers. Never vague claims.                                                       |
| Educational   | Explain outcomes, not mechanisms. Save deep explanations for inner pages.                        |
| Transparent   | Show real prices. Show renewal rates alongside formation prices. Never "starting at."            |
| Reassuring    | Emphasize track record, real office, ongoing support. Never create anxiety.                      |
| Precise       | Every number is specific and verifiable. "25 years" not "decades." "$1,275" not "around $1,300." |

### Terminology

| Always Use               | Never Use                            | Reason                                               |
| ------------------------ | ------------------------------------ | ---------------------------------------------------- |
| "Business Incorporation" | "Company Formation"                  | Client preference — more American-sounding           |
| "All-inclusive"          | "Starting at"                        | Brand promise: no hidden fees                        |
| "Year-round nominees"    | "Nominee services" (alone)           | Differentiates from "nominee for a day" competitors  |
| "Privacy"                | "Anonymity" (as lead term)           | Privacy is positive framing; anonymity feels evasive |
| Specific prices ($1,275) | "Affordable" / "competitive pricing" | Premium positioning — never compete on price         |
| "Protect Your Privacy"   | "Hide Your Identity"                 | Active/positive vs. passive/negative framing         |

### Anti-Patterns

- **No fear-based selling.** No threat framing, countdown timers, scarcity signals, or urgency language.
- **No geography-first messaging.** Never lead with "Nevada LLC" or "Wyoming Corporation." Lead with intent/outcome.
- **No stock photography of people.** Never use identifiable individuals as "clients." Use abstract visuals, icons, or initials.
- **No price apology.** Never say "affordable," "cheap," "budget," or hedge around the premium price point.

---

## Verified Proof Points

These are the only numbers approved for use on the homepage. Do not invent or approximate others.

| Proof Point                  | Value                           | Notes                 |
| ---------------------------- | ------------------------------- | --------------------- |
| Years in business            | 25 (since ~2000)                | Confirmed             |
| Gold Package — WY            | $1,275 all-inclusive            | Current pricing       |
| Gold Package — NV            | $1,800 all-inclusive            | Current pricing       |
| Silver Package — WY          | $875                            | Current pricing       |
| Silver Package — NV          | $1,275                          | Current pricing       |
| Annual renewal (Gold)        | $525/yr with nominees           | Current pricing       |
| Annual renewal (Silver)      | $325/yr                         | Current pricing       |
| Competitor nominee cost      | $400–$5,000/yr                  | Competitive analysis  |
| Year 1 included value        | $2,000+                         | Positioning Framework |
| Free offshore nominees since | 2012                            | Confirmed             |
| Money-back guarantee         | 30 days                         | Current policy        |
| Bronze Package — NV          | $699 (placeholder)              | Pending confirmation  |
| Bronze renewal               | $275/yr (placeholder)           | Pending confirmation  |
| Entities formed              | TBD — placeholder OK            | Pending from client   |
| Formation turnaround         | 5–7 business days (placeholder) | Pending confirmation  |

**Phone number:** (775) 555-1234 (placeholder — client to confirm)

---

## Pillar Identity System

The site has three primary pillars and one supporting pillar. Each should have a distinct visual identity that is consistent everywhere it appears on the homepage (and carries through to the full site). The identities should be meaningfully different from each other and from the primary CTA styling.

| Pillar                     | Priority                                 | Role                                                                             |
| -------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------- |
| **Privacy**                | #1 — always first, highest visual weight | Lead pillar. The repositioned core identity.                                     |
| **Asset Protection**       | #2 — middle position                     | High-value audience ($500K+ assets).                                             |
| **Business Incorporation** | #3 — always last of three                | The "table stakes" service. Important but not the lead message.                  |
| **Compliance**             | Supporting — optional on homepage        | Not a primary entry point. Navigation presence only, or small secondary element. |

---

## Section Definitions

The homepage contains 10 sections in this order. Each section defines its strategic purpose, required content elements, and CTA rules. Design interpretation is completely open.

---

### Section 0: Site Header (Global)

**Purpose:** Persistent navigation, trust anchor (phone number), primary CTA.

**Required elements:**

- Logo linking to `/`
- Primary nav items in this order: Privacy, Asset Protection, Formation, Packages, About
  - Privacy, Asset Protection, Formation: trigger dropdown/mega menu showing cluster pages
  - Packages: direct link to `/compare-packages/` (no dropdown)
  - About: small dropdown with About, Contact, Testimonials
- Phone number — clickable `tel:` link, always visible on desktop → `tel:7755551234`
- "Get Started →" CTA → `/compare-packages/` — must be secondary style (not primary) to avoid competing with page-level CTAs

**Mobile requirements:**

- Hamburger menu opens overlay maintaining pillar structure (not alphabetical list)
- Packages appear above pillar sections in mobile menu (reachable in one tap)
- Phone icon always one tap away, never buried in menu
- Becomes compact/sticky on scroll

---

### Section 1: Hero

**Purpose:** First thing every visitor sees. Establishes repositioned identity, routes by intent, provides stage-skip shortcut for informed buyers. Must contain a visible CTA without scrolling.

**Required content:**

1. **Headline** (h1)
   - Max 8 words
   - Privacy-first, outcome-focused
   - Must NOT lead with geography ("Nevada") or entity type ("LLC")
   - Direction options: "Your Business. Your Privacy. Our Expertise." / "Business Privacy Starts Here" / "Protect Your Identity. Protect Your Assets." — or any original variation that meets the rules
2. **Subhead**
   - Max 25 words (1–2 lines)
   - Must include at least one specific number (years, entity count, or price)
   - Placeholder: "25 years specializing in business privacy, asset protection, and incorporation for Wyoming and Nevada. All-inclusive packages — no hidden fees."

3. **Primary CTA**
   - "Protect Your Privacy →" → `/privacy/`
   - Action verb + privacy outcome

4. **Secondary CTA**
   - "View Packages & Pricing →" → `/compare-packages/`
   - Serves informed buyers who skip education

5. **Consultation safety net**
   - "Prefer to talk? Call us — (775) 555-1234" → `tel:7755551234`
   - Subtle text treatment, never a competing button

6. **Mini trust proof** (3 compact items)
   - "Trusted Since 2000"
   - "25 Years Specialized Experience"
   - "Real Reno, Nevada Office"

7. **Abstract visual element** — privacy/shield/lock/vault themed. NOT stock photography. NOT people.

**Constraints:** No paragraphs. Hero = headline + subhead + CTAs + trust proof. Nothing more.

---

### Section 2: Pillar Navigation

**Purpose:** Primary routing mechanism for first-time visitors. Intent-based entry points that match content pillars.

**Required content (3 cards, always in this order):**

**Card 1 — Privacy (always first):**

- Label: "Business Privacy"
- Message: "Privacy you can't get elsewhere. Year-round nominee directors and officers keep your name off public records — not just at formation, but every day."
- Trust element: "Year-round nominees included — not 'nominee for a day'"
- CTA: "Explore Privacy Options →" → `/privacy/`

**Card 2 — Asset Protection:**

- Label: "Asset Protection"
- Message: "Protect what you've built. Wyoming and Nevada LLCs with charging order protection — the strongest structural defense for your business assets."
- Trust element: "For individuals with $500K+ in assets"
- CTA: "Protect Your Assets →" → `/asset-protection/`

**Card 3 — Business Incorporation (always last):**

- Label: "Business Incorporation"
- Message: "Expert formation, all-inclusive. Wyoming and Nevada LLCs and Corporations with everything included — state fees, registered agent, operating agreement, EIN."
- Trust element: "25 years forming Wyoming and Nevada entities"
- CTA: "Start Your Company →" → `/formation/`

**Each card must have:** pillar visual identity, label, message, trust element (italic/secondary), and a soft CTA (text link style, not a button). Privacy card always gets highest visual weight or first position.

**Optional 4th card — Compliance:** "Ongoing Compliance" / "Stay Compliant →" → `/compliance/`. Secondary treatment, never equal visual weight to the three primary pillars.

---

### Section 3: Package Quick-Access

**Purpose:** Serves informed buyers ready to convert. Shows all three tiers with Gold highlighted. Must display actual prices and renewal rates.

**Section headline:** "Ready to Get Started?"
**Section subtext:** "All-inclusive packages — state fees, registered agent, and compliance included in every tier."

**Gold card (must be visually dominant — "Most Popular"):**

- Badge: "★ Most Popular"
- Tier: "Gold — Privacy"
- WY: $1,275 / NV: $1,800
- Renewal: $525/yr with nominees
- Value line: "Includes $2,000+ in Year 1 services"
- Features: Year-round nominee services, Offshore records storage, Full compliance maintenance, Everything in Silver plus privacy
- CTA: "Get Started →" (PRIMARY style) → `/wyoming-private-llc/`
- Safety net: "Schedule a consultation" → `/contact/`

**Silver card (subordinate to Gold):**

- Tier: "Silver — Formation"
- WY: $875 / NV: $1,275
- Renewal: $325/yr
- Features: Registered agent, Operating agreement, All state fees, EIN
- CTA: "View Silver Package →" (secondary style) → `/wyoming-incorporation/`
- Upgrade nudge: "Add privacy for $375 more →"

**Bronze card (minimal presence):**

- Tier: "Bronze — Nevada"
- NV: $699
- Renewal: $275/yr
- Features: Basic Nevada formation, Registered agent, State fees
- CTA: "View Bronze Package →" (tertiary/smallest) → `/nevada-incorporation/`

**Below cards:** "Compare all packages in detail →" → `/compare-packages/`

**Package rules:**

- Gold always most prominent (center, elevated, highlighted — however the design interprets "prominence")
- Bronze never positioned first or given equal weight
- Formation price and renewal rate always shown together — renewal never hidden
- All-inclusive language on every card — never "starting at"
- Only Gold gets a primary CTA — Silver and Bronze get secondary

---

### Section 4: Differentiators

**Purpose:** Answers "Why Incorporate123?" with specific, verifiable competitive advantages.

**Section headline:** "Why Clients Choose Incorporate123"

**Six differentiators in priority order:**

1. **Year-Round Nominees** — "Your nominees are maintained 365 days a year — not just at formation. Most providers offer a 'nominee for a day' and disappear."
2. **Offshore Records Storage** — "Corporate records maintained outside U.S. jurisdiction. Included free in every Gold package since 2012. No competitor offers this."
3. **All-Inclusive Pricing** — "State filing fees, registered agent, operating agreement, EIN — all included. No hidden fees. The price you see is the price you pay."
4. **25 Years of Expertise** — "Forming Wyoming and Nevada entities since 2000. Specialized in privacy and asset protection — not a generic filing service."
5. **Real Reno Office** — "Kingsbury Executive Suites, Reno, Nevada. Real people, real office, real expertise — not a virtual mailbox or a PO box."
6. **Crypto Payments Accepted** — "Bitcoin, Ethereum, XRP, Litecoin, Monero. We accept cryptocurrency because our clients value privacy — and so do we."

**Optional value comparison callout:**
"Competitors charge $400–$5,000/year for nominee services alone. Ours are included in every Gold package — along with offshore records, registered agent, operating agreement, EIN, and all state fees. Total included value: $2,000+ in Year 1."

**This section should feel authoritative.** Dark/contrasting treatment is common but not required — the goal is visual weight and credibility.

---

### Section 5: Trust Signals Bar

**Purpose:** Concentrated horizontal strip of trust indicators. Badge/icon + label format — no prose.

**Required signals:**

1. "Trusted Since 2000" (calendar/shield icon)
2. "Call Us: (775) 555-1234" (phone icon, clickable `tel:` link)
3. "30-Day Money-Back Guarantee" (checkmark/shield icon)
4. "Crypto Accepted" (currency icons: BTC, ETH, XRP, LTC, XMR)
5. "Real Reno, NV Office" (building/location icon)

**Compact treatment.** Each signal = icon + short label. No descriptions. Designed to absorb a Trustpilot widget post-launch.

---

### Section 6: How It Works

**Purpose:** Demystifies the process. Reduces perceived complexity of hiring a formation specialist.

**Section headline:** "How It Works"
**Section subtext:** "From selection to formation — we handle every step."

**Four steps:**

1. **Choose Your Package** — "Select Gold, Silver, or Bronze. Compare features and pick what fits your goals."
2. **We Form Your Entity** — "We handle all state filings, paperwork, and fees. Typical turnaround: 5–7 business days."
3. **Nominees Protect You** — "Year-round nominee directors and officers keep your name off public records."
4. **Compliance, Handled** — "Registered agent, annual reports, and corporate minutes — maintained every year."

**No CTA in this section.** Purely informational. Step 3 describes a Gold feature as the default — this is intentional to normalize the Gold experience.

---

### Section 7: Testimonials / Social Proof

**Purpose:** Human validation. Designed to scale from 2–3 quotes at launch to a full carousel.

**Section headline:** "What Our Clients Say"

**Three placeholder testimonials (client to replace with real quotes before launch):**

1. "We moved our California business to a Wyoming entity with nominee services. Our ownership is completely private and the process was handled start to finish."
   — Mark T., California Business Owner

2. "After 15 years with another provider, we switched to Incorporate123 for the year-round nominee maintenance. The difference in service is night and day."
   — Investment Group, Nevada

3. "The all-inclusive pricing was what sold us. No hidden fees, no surprise add-ons — just one clear price for everything we needed."
   — Sarah M., Wyoming LLC Owner

**Rules:**

- First name + last initial only (privacy alignment)
- State or industry descriptor for attribution
- Star ratings (5 stars) if sourced from review platform
- **No photos of people.** Use initials, abstract avatars, or icons only.
- Anonymized enough to align with privacy brand

---

### Section 8: Final CTA Block

**Purpose:** Catches full-page scrollers who haven't converted. Last chance before footer. Different wording from hero to avoid repetition.

**Headline:** "Ready to Protect Your Privacy?" (different from hero headline)
**Subtext:** "25 years of specialized experience. All-inclusive pricing. Real people, real office."
**Primary CTA:** "Get Started →" → `/privacy/` or `/compare-packages/`
**Secondary CTA:** "Schedule a Consultation →" → `/contact/`
**Phone link:** "Or call us directly — (775) 555-1234" → `tel:7755551234`

**This section should mirror the hero's visual weight** — creating bookends for the page. The hero and final CTA should feel like they belong to the same visual family.

---

### Section 9: Site Footer (Global)

**Purpose:** Complete sitemap for SEO, legal links, secondary navigation.

**Column structure:**

1. **Privacy** — All Privacy pillar cluster pages + comparison pages
2. **Asset Protection** — All AP cluster pages + comparison pages
3. **Business Incorporation** — All Formation cluster pages + comparison pages
4. **Company** — About, Contact, FAQ, Blog, Testimonials
5. **Packages** — All packages listed by tier (Gold first): WY Gold, NV Gold, WY Silver, NV Silver, NV Bronze, Compare All
6. **States** — Wyoming, Nevada, California, Florida, Offshore

**Legal strip:**

- © 2026 Incorporate123. All rights reserved.
- Privacy Policy · Terms of Service
- Kingsbury Executive Suites, Reno, NV
- (775) 555-1234
- Crypto icons: BTC, ETH, XRP, LTC, XMR (small badges)

**Mobile:** Columns collapse to accordion-expand sections. Legal strip always visible.

---

## CTA Hierarchy Rules

These rules govern every CTA on the homepage. They come from the Brand Guide and are non-negotiable.

1. **One primary + one secondary CTA per section.** Never three competing button styles in the same section.
2. **Consultation safety net** ("Talk to us" / phone link) appears near every self-service CTA as a subtle text link — never as a competing button.
3. **At least one CTA visible above the fold** on all viewports (desktop and mobile).
4. **Primary CTA repeats** after main content and before footer (Section 8).
5. **Header CTA is secondary style** — it must never compete with in-page primary CTAs.
6. **Gold is the only package with a primary CTA.** Silver and Bronze get secondary/ghost style.

**Phone number appears three times on the page:** Header, Trust Signals Bar, Final CTA Block.

---

## Mobile Requirements

- **Sticky bottom CTA bar** appears after scrolling past the hero. Contains: primary CTA button + tap-to-call phone icon. Persists for the entire page.
- **Hamburger menu** maintains pillar structure — NOT an alphabetical page list. Packages above the fold in mobile menu.
- **Tap targets:** Minimum 44×44px for all interactive elements.
- **Font scaling:** Headlines drop one step. Body text minimum 16px.
- **CTAs stack vertically** as full-width buttons on mobile.

---

## Accessibility Requirements

- WCAG 2.1 AA contrast on all text/background combinations
- Semantic HTML: one `<h1>` (hero headline), subsequent headings follow hierarchy
- Keyboard navigation: all interactive elements reachable via Tab, focus order follows visual order
- Screen reader: alt text on decorative graphics, ARIA labels on icon-only elements
- Reduced motion: respect `prefers-reduced-motion`

---

## What Is Deliberately NOT in This Document

The following are intentionally omitted to allow maximum design freedom on each generation:

- **No color palette.** Choose any palette that fits the premium privacy brand.
- **No typography selections.** Choose fonts that match your design direction.
- **No layout prescriptions.** No wireframes, no grid definitions, no "3 columns" or "cards."
- **No component shapes.** No border-radius values, no card vs. list vs. table decisions.
- **No dark/light theme direction.** Either works. Both work. Mix works.
- **No animation specifications.** Animate as much or as little as the design calls for.
- **No spacing system.** Define your own rhythm.
- **No visual hierarchy prescriptions** beyond "Privacy leads" and "Gold is most prominent."

The only constraints are: the content, the section order, the CTA rules, the terminology, and the accessibility requirements. Everything else is a design decision to be made fresh each time.

---

_Confidential — BIT Studios × Incorporate123 — March 2026_
