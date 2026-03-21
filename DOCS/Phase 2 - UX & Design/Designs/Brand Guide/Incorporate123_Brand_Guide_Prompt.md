# Brand Guide Generation Prompt

Copy everything below the line and paste it into Claude. No file upload needed — all brand information is embedded in the prompt.

---

Create a comprehensive brand guide for **Incorporate123** as a polished, visually designed React artifact (.jsx). This is a client-facing deliverable that the business owner (David) will review and approve. It should look like a real brand book — sections with visual examples, color swatches, type specimens, and do/don't comparisons — not a text document with bullet points.

Use Tailwind utility classes, Lucide React icons, and React hooks. Single component, default export, no required props. Make it scrollable with a sticky sidebar table of contents for navigation between sections.

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

Build a visual color system section with rendered swatches. Include primary/secondary/accent, pillar identity colors, semantic colors, and surface/background tones.

### Brand Colors
- **Primary:** Deep navy — authority, trust, professionalism (think #1e3a5f range)
- **Secondary:** Bright blue — CTAs, links, interactive elements (think #2563eb range)
- **Accent:** Amber — urgency, attention, primary conversion buttons (think #d97706 range)

### Pillar Identity Colors
- **Privacy:** Blue (#2563eb)
- **Asset Protection:** Green (#16a34a)
- **Formation:** Amber (#d97706)
- **Compliance:** Purple (#9333ea)

### Semantic Colors
- **Success:** Green — confirmation, trust signals
- **Surface:** White — card and section backgrounds
- **Background:** Very light gray/slate — page background
- **Foreground:** Near-black slate — primary text
- **Muted:** Mid-gray — secondary text, captions
- **Border:** Light gray — dividers, card borders

### Usage Rules
Show visual examples of:
- Primary navy used for dark sections (differentiator, final CTA, footer)
- Secondary blue used for links, active nav states, focus rings
- Accent amber used ONLY for primary conversion CTAs ("Get Started", "Protect Your Privacy", "Order Now")
- Pillar colors used for: navigation mega menu accents, pillar page headers, card top borders, CTA variants on pillar-specific pages
- Never use pillar colors for body text
- Never use amber for non-CTA elements

---

## Typography

Define the type system with rendered specimens. Recommend specific font pairings.

### Recommended Fonts
- **Display / Headings:** Outfit (clean, modern, premium feel) — or Inter as fallback
- **Body:** Inter (excellent readability, professional)
- **Mono / Legal:** JetBrains Mono (for entity numbers, pricing, legal references)

### Type Scale
Define 8 steps from Display XL down to Caption, showing each with sample text. Include line-height and intended use:

| Level | Use Case |
|-------|----------|
| Display XL | Hero headlines only |
| Display LG | Section headlines |
| Display SM | Card titles, sub-section headers |
| Text XL | Lead paragraphs, important callouts |
| Text LG | Subheadlines, descriptions |
| Text Base | Body copy |
| Text SM | Captions, labels, meta information |
| Text XS / Caption | Legal text, fine print, footnotes |

### Typography Rules
- Headlines: 8 words or fewer for scannability (the 80% scanners)
- Body copy: Short paragraphs, 3–5 sentences max
- Never use ALL CAPS for body text (acceptable for eyebrows and badges)
- Pricing always uses the mono font for clarity
- Page H1s must be unique across the entire site (SEO requirement)

---

## Brand Voice & Messaging

This is the most important section. Build it with clear do/don't comparison cards.

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

### Pricing Language
- Always say "all-inclusive" — never "starting at"
- Always show the renewal rate alongside the formation price
- Always frame value comparatively: "competitors charge $400–$5,000/year for nominee services alone"
- Never apologize for premium pricing — position it as proof of included value

---

## Trust Architecture

Define the trust signal system since the company launches with zero public reviews.

### Immediate Trust Signals (at Launch)
- "Trusted Since 2000" or "25 Years of Specialized Experience" — in header/hero
- Real Reno Office — professional photography of Kingsbury Executive Suites, physical address displayed
- Founder Visibility — David's bio, experience, and photo on About page
- 30-Day Money-Back Guarantee — badge on all package pages
- Crypto Payment Badges — Bitcoin, Ethereum, XRP, Litecoin, Monero icons (signals privacy alignment)
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

Define the visual hierarchy for Gold/Silver/Bronze.

### Gold Packages (Privacy) — HERO PRODUCT
- Positioned as the recommended standard for anyone seeking privacy
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
- Always show Gold first (or highlighted center in 3-column layout)
- Always show renewal rate alongside formation price
- Always include "all-inclusive" badge
- Never show Bronze as the default or recommended option

---

## Iconography

- Icon library: Lucide React (MIT licensed, tree-shakeable, 1000+ icons)
- Style: Outline (not filled) for consistency
- Size: 24px standard, 40px for feature blocks, 16px for inline
- Color: Inherit from context (pillar color on pillar pages, muted in body text, white on dark backgrounds)

### Key Icon Assignments
Show the icon next to its assigned concept:
- Shield / Lock → Privacy
- Vault / ShieldCheck → Asset Protection
- Building2 / FileCheck → Formation
- BookOpen / ClipboardCheck → Compliance
- Clock → Year-round nominees
- Globe → Offshore records
- DollarSign → All-inclusive pricing
- MapPin → Real Reno office
- Award → 25 years experience
- Phone → Human support

---

## Photography Direction

Since professional photos are pending, define the direction:

- **Office Photography:** Clean, professional shots of the Reno office (Kingsbury Executive Suites). No stock photos of generic office interiors.
- **Team Photography:** Professional headshot of David for About page and trust signals. Approachable but authoritative.
- **No Stock People:** Avoid generic diverse-team-in-conference-room stock photography. It undermines the "real office, real people" trust signal.
- **Abstract/Conceptual:** For hero sections and pillar headers, abstract shield/lock/vault imagery or geometric privacy-themed graphics are preferred over stock photography.
- **Privacy Alignment:** Never use photos showing identifiable individuals as "clients" — it contradicts the privacy positioning.

---

## Content Patterns

### The 80/20 Progressive Disclosure Model
All service pages serve two audiences:

**For 80% (Scanners):**
- Clear value proposition in 8 words or fewer
- 3–5 sentence overview with key benefits
- Visual comparison tables
- Prominent CTA above the fold
- Trust badge strip

**For 20% (Researchers):**
- Expandable "Read More" sections
- Detailed FAQs (accordion, 10–15 questions)
- Related deep-dive content links
- Full testimonials and case studies
- Itemized pricing breakdowns

### CTA Hierarchy
Every page has exactly one primary CTA style and one secondary. Never three competing styles.
- **Primary:** Bold, accent-colored (amber). Action verb + outcome: "Protect Your Privacy →", "Start Your Company →"
- **Secondary:** Outline or ghost style. Alternative path: "View Packages & Pricing →", "Schedule a Consultation →"
- **Consultation Safety Net:** Every self-service CTA must have a "Talk to us" alternative nearby

---

## Competitive Positioning Summary

Include a visual positioning map showing where Incorporate123 sits:

**X-axis:** Budget ($0) ←→ Premium ($5,000+)
**Y-axis:** Self-Service ←→ Consultation-Required

| Quadrant | Players |
|----------|---------|
| Budget + Self-Service | ZenBusiness, LegalZoom, Incfile |
| Budget + Consultation | (empty) |
| Premium + Consultation | Anderson Advisors, NCH Inc |
| Premium + Self-Service | **Incorporate123** (white space!) |

The brand occupies the premium-but-self-service quadrant that NO competitor currently fills. All messaging, design, and UX decisions should reinforce this position.

---

## Format & Quality Requirements

- The artifact should feel like a real brand book — not a text document
- Use rendered color swatches (actual colored divs), not just hex codes in text
- Show type specimens with the actual font sizes and weights
- Use side-by-side do/don't cards for voice guidelines
- Include the competitive positioning map as a visual quadrant chart
- Make the pillar system visually clear with color-coded sections
- Add a sticky sidebar or top nav for jumping between sections
- The overall design of the brand guide itself should reflect the brand: premium, clean, authoritative, modern
- Total scroll depth should be substantial — this is a comprehensive reference document
