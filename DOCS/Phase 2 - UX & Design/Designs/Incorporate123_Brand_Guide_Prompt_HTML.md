# Brand Guide Generation Prompt (HTML Artifact)

Copy everything below the line and paste it into Claude. No file upload needed — all brand information is embedded in the prompt.

---

Create a comprehensive brand guide for **Incorporate123** as a single, polished HTML artifact (.html). This is a client-facing deliverable that the business owner (David) will review and approve. It should look like a real brand book — sections with visual examples, color swatches, type specimens, and do/don't comparisons — not a text document with bullet points.

Build it as a single HTML file with embedded CSS and vanilla JavaScript. Use Google Fonts for typography (Outfit for headings, Inter for body, JetBrains Mono for code/pricing). Use CSS custom properties for the color system. Add a sticky sidebar table of contents that highlights the active section on scroll (use IntersectionObserver). Make it print-friendly with a @media print stylesheet.

No external JS libraries. No frameworks. Clean semantic HTML, modern CSS (grid, flexbox, custom properties, scroll-behavior: smooth), and minimal vanilla JS only for the sidebar active-state tracking and any interactive toggling.

---

## Brand Overview

**Company:** Incorporate123
**Founded:** ~2000 (25+ years)
**Location:** Reno, Nevada (real physical office — Kingsbury Executive Suites)
**Domain:** incorporate123.com
**Owner:** David

**Positioning Statement:**
"Privacy, Asset Protection & Business Formation Specialists"

This is a deliberate repositioning. The company was previously a geography-first Nevada incorporation company. The new brand positions it in an unoccupied market space: the intersection of modern UX, privacy expertise, transparent pricing, and nominee services. No competitor successfully combines all four.

**What Incorporate123 is NOT:**
- Not a budget $0 filing service (ZenBusiness, LegalZoom territory)
- Not a consultation-gated premium firm ($2,750+ like Anderson Advisors)
- Not a generic "all 50 states" formation mill

**What Incorporate123 IS:**
- A 25-year privacy and formation specialist focused on Wyoming and Nevada
- Premium but transparent — $1,275–$2,100 all-inclusive with no hidden fees
- Expert-guided but self-service friendly — clients can buy directly or talk to a person
- Privacy-first — year-round nominees, offshore records, cryptocurrency accepted

---

## Brand Architecture: Four Content Pillars

The entire brand, site, and content are organized around four pillars. Each has its own identity color and messaging voice. The brand guide must define all four with their visual identities.

### Pillar 1: Business Privacy (LEAD PILLAR)
- **Identity Color:** Blue
- **Core Message:** "Privacy You Can't Get Elsewhere — year-round nominees, offshore records, genuine anonymity"
- **Primary CTA:** "Protect Your Privacy"
- **Trust Element:** "Year-round nominees included — not 'nominee for a day'"
- **Key Services:** Anonymous LLC, Nominee Services, Private Incorporation (WY/NV/CA/FL), Offshore Privacy, BOI Reporting

### Pillar 2: Asset Protection
- **Identity Color:** Green
- **Core Message:** "Protect What You've Built — charging order protection, holding structures, multi-entity strategies"
- **Primary CTA:** "Protect Your Assets"
- **Trust Element:** "For individuals with $500K+ in assets"
- **Key Services:** Charging Order Protection, WY/NV Asset Protection, Investment Holding LLC, Real Estate AP

### Pillar 3: Company Formation
- **Identity Color:** Amber
- **Core Message:** "Expert Formation, All-Inclusive — everything you need to start, nothing hidden"
- **Primary CTA:** "Start Your Company"
- **Trust Element:** "25 years forming Wyoming and Nevada entities"
- **Key Services:** Wyoming LLC, Nevada LLC, Wyoming Corporation, Nevada Corporation, Shelf Companies

### Pillar 4: Compliance
- **Identity Color:** Purple
- **Core Message:** "Ongoing Support, Not Just a Mailbox — year-round registered agent, annual reports, corporate minutes"
- **Primary CTA:** "Stay Compliant"
- **Trust Element:** "Full corporate minute maintenance included"
- **Key Services:** Registered Agent, Annual Reports, Corporate Minutes, Virtual Office, Domestication, Foreign Registration

---

## Color System

Build a visual color system section with rendered swatches. Each swatch should be a colored div showing the hex value, CSS variable name, and usage label. Group them into rows by category.

### Brand Colors
- **Primary:** Deep navy — authority, trust, professionalism → #1e3a5f
- **Secondary:** Bright blue — CTAs, links, interactive elements → #2563eb
- **Accent:** Amber — urgency, attention, primary conversion buttons → #d97706

### Pillar Identity Colors
- **Privacy:** Blue → #2563eb
- **Asset Protection:** Green → #16a34a
- **Formation:** Amber → #d97706
- **Compliance:** Purple → #9333ea

### Extended Palette
For each pillar color, show a 3-stop row: soft (light tint for backgrounds), mid (for borders/accents), full (for text/icons). Example for Privacy: #dbeafe → #93bbfd → #2563eb

### Semantic / UI Colors
- **Success:** #16a34a (green — confirmation states)
- **Surface:** #ffffff (card/section backgrounds)
- **Background:** #f8fafc (page background)
- **Foreground:** #0f172a (primary text)
- **Muted:** #64748b (secondary text, captions)
- **Border:** #e2e8f0 (dividers, card outlines)
- **Footer Dark:** #0f172a (footer, dark sections)

### Usage Rules
Show visual examples of:
- Primary navy used for dark sections (differentiator, final CTA, footer)
- Secondary blue used for links, active nav states, focus rings
- Accent amber used ONLY for primary conversion CTAs ("Get Started", "Protect Your Privacy", "Order Now")
- Pillar colors used for: navigation mega menu accents, pillar page headers, card top borders, CTA variants on pillar-specific pages
- Never use pillar colors for body text
- Never use amber for non-CTA elements

Render these rules as side-by-side ✓ Correct / ✗ Incorrect visual examples (small mock button or card snippets showing right vs wrong usage).

---

## Typography

Render actual type specimens using the loaded Google Fonts. Each scale step should be a live example showing the font at that size/weight with a label.

### Fonts
- **Display / Headings:** Outfit (clean, modern, premium feel)
- **Body:** Inter (excellent readability, professional)
- **Mono / Legal:** JetBrains Mono (for entity numbers, pricing, legal references)

Load via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale
Render each step with a live specimen line:

| Level | Size | Weight | Font | Use Case |
|-------|------|--------|------|----------|
| Display XL | 48–56px | 800 | Outfit | Hero headlines only |
| Display LG | 36–40px | 700 | Outfit | Section headlines |
| Display SM | 24–28px | 600 | Outfit | Card titles, sub-section headers |
| Text XL | 20px | 500 | Inter | Lead paragraphs, callouts |
| Text LG | 18px | 400 | Inter | Subheadlines, descriptions |
| Text Base | 16px | 400 | Inter | Body copy |
| Text SM | 14px | 500 | Inter | Captions, labels, meta info |
| Caption | 12px | 400 | Inter | Legal text, fine print |
| Mono | 16px | 400 | JetBrains Mono | Pricing, entity numbers |

### Typography Rules
- Headlines: 8 words or fewer for scannability (serving the 80% scanners)
- Body copy: Short paragraphs, 3–5 sentences max
- Never use ALL CAPS for body text (acceptable for eyebrows and badges only)
- Pricing always uses the mono font for clarity
- Page H1s must be unique across the entire site (SEO requirement)

---

## Brand Voice & Messaging

Build this with clear do/don't comparison cards — two-column layout with green-bordered "DO" on left and red-bordered "DON'T" on right.

### Voice Attributes

| Attribute | DO | DON'T |
|-----------|-----|--------|
| **Authoritative** | Cite 25 years of experience; reference specific statutes and structures | Vague claims; "best in the business" without evidence |
| **Educational** | Explain why privacy matters; teach the difference between privacy and asset protection | Assume visitors already understand nominees, charging orders, etc. |
| **Transparent** | Show all pricing upfront; explain what's included and what's not | Hidden pricing; fine-print exclusions; auto-renewal traps |
| **Reassuring** | Emphasize 25-year track record, real office, ongoing support | Fear-based selling; "you'll get sued if you don't act now" |
| **Precise** | Use specific numbers: $1,275, 25 years, $525 annual renewal | Round numbers; "affordable"; "competitive pricing" |

### Messaging DON'Ts (Critical)
- Never compete on price ("we're cheaper")
- Never compete on speed ("file in 5 minutes")
- Never compete on ease ("simple 3-step process")
- Never compete on breadth ("all 50 states")
- Never use fear-based selling or urgency pressure
- Never lead with benefits before establishing relevance/context on a page

### Messaging DOs
- Compete on privacy expertise ("25 years specializing in anonymous structures")
- Compete on nominee depth ("year-round nominees, not 'nominee for a day'")
- Compete on offshore capability ("nominees and records outside U.S. jurisdiction")
- Compete on all-inclusive value ("what others charge $5,000/year for, we include")
- Compete on human service ("real experts, not automated forms")
- Always establish context before presenting benefits

### Pillar-Specific Messaging
Show each pillar's core message, primary CTA copy, and trust element as a styled card with the pillar's identity color accent:

| Pillar | Core Message | CTA | Trust Element |
|--------|-------------|-----|---------------|
| Privacy | "Privacy You Can't Get Elsewhere" | "Protect Your Privacy" | "Year-round nominees included — not 'nominee for a day'" |
| Asset Protection | "Protect What You've Built" | "Protect Your Assets" | "For individuals with $500K+ in assets" |
| Formation | "Expert Formation, All-Inclusive" | "Start Your Company" | "25 years forming Wyoming and Nevada entities" |
| Compliance | "Ongoing Support, Not Just a Mailbox" | "Stay Compliant" | "Full corporate minute maintenance included" |

### Pricing Language Rules
- Always say "all-inclusive" — never "starting at"
- Always show the renewal rate alongside the formation price
- Always frame value comparatively: "competitors charge $400–$5,000/year for nominee services alone"
- Never apologize for premium pricing — position it as proof of included value

---

## Trust Architecture

Define the trust signal system since the company launches with zero public reviews.

### Immediate Trust Signals (at Launch)
Render each as a small card with its icon (use SVG or Unicode symbols), label, and placement guidance:

- "Trusted Since 2000" or "25 Years of Specialized Experience" — header/hero
- Real Reno Office — professional photography, physical address displayed
- Founder Visibility — David's bio, experience, photo on About page
- 30-Day Money-Back Guarantee — badge on all package pages
- Crypto Payment Badges — Bitcoin, Ethereum, XRP, Litecoin, Monero (signals privacy alignment)
- Phone Number Prominent — clickable in header and on every conversion page

### Post-Launch Trust Building
- Trustpilot review program — target 100+ reviews in 6 months
- Anonymized case studies — 3–5 within first quarter
- Content authority — regular blog publishing for E-E-A-T signals
- BBB accreditation exploration

### Trust Signal Placement Rules
- Every page: phone number in header + footer
- Every conversion page: trust badge strip (25 years, guarantee, phone, crypto)
- Every package page: money-back guarantee badge + value comparison messaging
- Homepage: full trust signals bar + testimonials/stats section

---

## Package Tier System

Show the three tiers as styled cards in a row, with Gold visually elevated/highlighted.

### Gold Packages (Privacy) — HERO PRODUCT
- Positioned as recommended standard for anyone seeking privacy
- "Most Popular" badge treatment
- Visually prominent — highlighted border, elevated card
- Includes year-round nominees, offshore records, full compliance
- Wyoming Gold: $1,275 | Nevada Gold: $1,800 | Renewal: $525/year with nominees

### Silver Packages (Formation)
- Entry point for formation without privacy features
- Clear upgrade messaging showing what Gold adds
- Wyoming Silver: $875 | Nevada Silver: $1,275 | Renewal: $325/year

### Bronze Package (Nevada only)
- Budget option, minimal messaging investment
- Exists for price-sensitive captures who may upgrade later

### Package Display Rules
- Always show Gold first or highlighted center in 3-column layout
- Always show renewal rate alongside formation price
- Always include "all-inclusive" badge
- Never show Bronze as the default or recommended option

---

## Iconography

Use inline SVGs or Unicode symbols throughout the brand guide to represent the icon system. Define the rules:

- Style: Outline (not filled) for consistency
- Size: 24px standard, 40px for feature blocks, 16px for inline
- Color: Inherit from context (pillar color on pillar pages, muted in body text, white on dark backgrounds)

### Key Icon Assignments
Render a grid showing each icon next to its assigned concept:
- Shield / Lock → Privacy
- Vault / ShieldCheck → Asset Protection
- Building / FileCheck → Formation
- BookOpen / ClipboardCheck → Compliance
- Clock → Year-round nominees
- Globe → Offshore records
- DollarSign → All-inclusive pricing
- MapPin → Real Reno office
- Award → 25 years experience
- Phone → Human support

(Use simple SVG path icons or Unicode approximations since Lucide isn't available in plain HTML)

---

## Photography Direction

- **Office Photography:** Clean, professional shots of the Reno office (Kingsbury Executive Suites). No stock photos of generic office interiors.
- **Team Photography:** Professional headshot of David for About page and trust signals. Approachable but authoritative.
- **No Stock People:** Avoid generic diverse-team-in-conference-room stock photography. It undermines the "real office, real people" trust signal.
- **Abstract/Conceptual:** For hero sections and pillar headers, abstract shield/lock/vault imagery or geometric privacy-themed graphics preferred over stock photography.
- **Privacy Alignment:** Never use photos showing identifiable individuals as "clients" — it contradicts the privacy positioning.

---

## Content Patterns

### The 80/20 Progressive Disclosure Model
Show this as a visual comparison — left column "For Scanners (80%)", right column "For Researchers (20%)":

| Element | Scanners (80%) | Researchers (20%) |
|---------|---------------|-------------------|
| Headlines | Value prop in ≤8 words | Subheadlines with specifics |
| Service Description | 3–5 sentence overview | Expandable full explanation |
| Comparison | Visual table | Detailed prose below |
| Pricing | Clear price + "all-inclusive" | Itemized breakdown |
| FAQ | Top 3–5 questions | Accordion with 10–15 questions |
| CTA | Prominent above fold | Multiple at decision points |
| Trust | Badge strip | Full testimonials + case studies |

### CTA Hierarchy
- **Primary:** Bold, accent-colored (amber). Action verb + outcome: "Protect Your Privacy →", "Start Your Company →"
- **Secondary:** Outline or ghost style. Alternative path: "View Packages & Pricing →", "Schedule a Consultation →"
- **Safety Net:** Every self-service CTA must have a "Talk to us" alternative nearby
- **Rule:** One primary + one secondary per page. Never three competing styles.

Show rendered button examples for primary, secondary, and ghost variants.

---

## Competitive Positioning

Build a visual 2×2 quadrant chart using CSS grid or absolute positioning:

**X-axis:** Budget ($0) ←→ Premium ($5,000+)
**Y-axis:** Self-Service ←→ Consultation-Required

| Quadrant | Players |
|----------|---------|
| Budget + Self-Service (bottom-left) | ZenBusiness, LegalZoom, Incfile |
| Budget + Consultation (top-left) | (empty) |
| Premium + Consultation (top-right) | Anderson Advisors, NCH Inc |
| Premium + Self-Service (bottom-right) | **Incorporate123** ← white space! |

Render this as an actual visual chart with dots/labels positioned in the quadrant. Incorporate123's dot should be highlighted and annotated. Include a caption: "Incorporate123 occupies the premium-but-self-service quadrant that no competitor currently fills."

---

## Format & Quality Requirements

- Single HTML file, fully self-contained (embedded CSS + JS)
- Google Fonts loaded via `<link>` tags
- CSS custom properties (`:root { --primary: #1e3a5f; ... }`) for the full color system
- Sticky left sidebar with section links that highlight on scroll via IntersectionObserver
- Smooth scroll between sections (`scroll-behavior: smooth` + anchor links)
- Color swatches rendered as actual colored `<div>` elements showing hex, variable name, and use label
- Type specimens rendered with actual loaded fonts at specified sizes
- Do/Don't cards with green/red border distinction
- Package tiers as visual cards with Gold highlighted
- Competitive quadrant as a visual chart, not a table
- `@media print` stylesheet: hide sidebar, single column, force black text on white, show URLs after links
- The overall design of the brand guide itself should reflect the brand: premium, clean, authoritative, modern — deep navy header, generous whitespace, Outfit headings, Inter body text
- Total content should be substantial — this is a comprehensive reference document meant to be bookmarked and consulted repeatedly
