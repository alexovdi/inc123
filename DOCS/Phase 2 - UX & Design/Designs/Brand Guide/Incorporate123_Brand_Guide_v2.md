# Incorporate123 — Brand Guide 2026

**v2.0 — March 2026 | Prepared by BIT Studios**

---

## 01 — Brand Overview

**Company:** Incorporate123
**Founded:** ~2000 (25+ years)
**Location:** Reno, Nevada (Kingsbury Executive Suites)
**Domain:** incorporate123.com
**Owner:** David

### Positioning Statement

> "Privacy, Asset Protection & Business Formation Specialists"

This is a deliberate repositioning. The company was previously a geography-first Nevada incorporation company. The new brand positions it in an unoccupied market space: the intersection of modern UX, privacy expertise, transparent pricing, and nominee services. No competitor successfully combines all four.

### What Incorporate123 IS

- A 25-year privacy and formation specialist focused on Wyoming and Nevada
- Premium but transparent — $1,275–$2,100 all-inclusive with no hidden fees
- Expert-guided but self-service friendly — clients can buy directly or talk to a person
- Privacy-first — year-round nominees, offshore records, cryptocurrency accepted

### What Incorporate123 is NOT

- Not a budget $0 filing service (ZenBusiness, LegalZoom territory)
- Not a consultation-gated premium firm ($2,750+ like Anderson Advisors)
- Not a generic "all 50 states" formation mill

---

## 02 — Four Content Pillars

The entire brand, site, and content are organized around four pillars. Each has its own identity color, messaging voice, and visual signature.

### Pillar 1: Business Privacy — LEAD PILLAR

| Attribute | Value |
|-----------|-------|
| **Identity Color** | Blue `--pillar-privacy` · `#2563eb` |
| **Core Message** | "Privacy You Can't Get Elsewhere — year-round nominees, offshore records, genuine anonymity" |
| **Primary CTA** | "Protect Your Privacy" |
| **Trust Element** | "Year-round nominees included — not 'nominee for a day'" |
| **Key Services** | Anonymous LLC, Nominee Services, Private Incorporation (WY/NV/CA/FL), Offshore Privacy, BOI Reporting |

### Pillar 2: Asset Protection

| Attribute | Value |
|-----------|-------|
| **Identity Color** | Green `--pillar-asset` · `#16a34a` |
| **Core Message** | "Protect What You've Built — charging order protection, holding structures, multi-entity strategies" |
| **Primary CTA** | "Protect Your Assets" |
| **Trust Element** | "For individuals with $500K+ in assets" |
| **Key Services** | Charging Order Protection, WY/NV Asset Protection, Investment Holding LLC, Real Estate AP |

### Pillar 3: Company Formation

| Attribute | Value |
|-----------|-------|
| **Identity Color** | Amber `--pillar-formation` · `#d97706` |
| **Core Message** | "Expert Formation, All-Inclusive — everything you need to start, nothing hidden" |
| **Primary CTA** | "Start Your Company" |
| **Trust Element** | "25 years forming Wyoming and Nevada entities" |
| **Key Services** | Wyoming LLC, Nevada LLC, Wyoming Corporation, Nevada Corporation, Shelf Companies |

### Pillar 4: Compliance

| Attribute | Value |
|-----------|-------|
| **Identity Color** | Purple `--pillar-compliance` · `#9333ea` |
| **Core Message** | "Ongoing Support, Not Just a Mailbox — year-round registered agent, annual reports, corporate minutes" |
| **Primary CTA** | "Stay Compliant" |
| **Trust Element** | "Full corporate minute maintenance included" |
| **Key Services** | Registered Agent, Annual Reports, Corporate Minutes, Virtual Office, Domestication, Foreign Registration |

---

## 03 — Color System

### Brand Colors

| Role | Color | CSS Variable | Hex | Usage |
|------|-------|-------------|-----|-------|
| **Primary** | Deep Navy | `--primary` | `#1e3a5f` | Authority, trust, dark sections (differentiator, final CTA, footer) |
| **Secondary** | Bright Blue | `--secondary` | `#2563eb` | CTAs, links, active nav states, focus rings |
| **Accent** | Amber | `--accent` | `#d97706` | Primary conversion CTAs ONLY |
| **Accent Hover** | Dark Amber | `--accent-hover` | `#b45309` | Hover state for primary CTAs |

### Pillar Identity Colors

| Pillar | CSS Variable | Hex |
|--------|-------------|-----|
| Business Privacy | `--pillar-privacy` | `#2563eb` |
| Asset Protection | `--pillar-asset` | `#16a34a` |
| Company Formation | `--pillar-formation` | `#d97706` |
| Compliance | `--pillar-compliance` | `#9333ea` |

### Extended Palette (Soft → Mid → Full)

Each pillar has a three-step gradient for backgrounds, accents, and primary use:

| Pillar | Soft | Mid | Full |
|--------|------|-----|------|
| **Privacy** | `#dbeafe` | `#93bbfd` | `#2563eb` |
| **Asset Protection** | `#dcfce7` | `#86efac` | `#16a34a` |
| **Formation** | `#fef3c7` | `#fcd34d` | `#d97706` |
| **Compliance** | `#f3e8ff` | `#c084fc` | `#9333ea` |

CSS variable pattern: `--pillar-{name}-soft`, `--pillar-{name}-mid`, `--pillar-{name}`

### Semantic & Surface Colors

| Role | CSS Variable | Hex | Usage |
|------|-------------|-----|-------|
| Success | `--success` | `#16a34a` | Confirmation, trust signals |
| Surface | `--surface` | `#ffffff` | Card and section backgrounds |
| Background | `--background` | `#f8fafc` | Page background |
| Foreground | `--foreground` | `#0f172a` | Primary text |
| Footer Dark | `--footer-dark` | `#0f172a` | Footer background |
| Muted | `--muted` | `#64748b` | Secondary text, captions |
| Border | `--border` | `#e2e8f0` | Dividers, card borders |

### Color Usage Rules

**✓ CORRECT:**
- Primary navy for dark sections: differentiator, final CTA, footer
- Secondary blue for links, active nav, focus rings
- Amber ONLY for primary conversion CTAs (e.g., "Protect Your Privacy →")
- Pillar colors for mega menu accents, pillar page headers, card top borders

**✗ INCORRECT:**
- Never use amber for non-CTA elements (e.g., "Learn More" button)
- Never use pillar colors for body text (body text must remain `--foreground` or `--muted`)

---

## 04 — Typography

### Recommended Fonts

| Font | CSS Variable | Role | Notes |
|------|-------------|------|-------|
| **Outfit** | `--font-display` | Display / Headings | Clean, modern, premium feel |
| **Inter** | `--font-body` | Body Text | Excellent readability, professional |
| **JetBrains Mono** | `--font-mono` | Mono / Legal / Pricing | Entity numbers, pricing, legal references |

### Type Scale

| Level | Size | Weight | Font | Sample Text | Use Case |
|-------|------|--------|------|-------------|----------|
| Display XL | 48px | 800 | Outfit | "Privacy You Can't Get Elsewhere" | Hero headlines only |
| Display LG | 36px | 700 | Outfit | "Protect What You've Built" | Section headlines |
| Display SM | 24px | 600 | Outfit | "Wyoming Anonymous LLC Formation" | Card titles, sub-sections |
| Text XL | 20px | 500 | Inter | "No competitor successfully combines modern UX, privacy expertise..." | Lead paragraphs, callouts |
| Text LG | 18px | 500 | Inter | "Year-round nominee directors and officers included in every Gold package..." | Subheadlines, descriptions |
| Text Base | 16px | 400 | Inter | "Wyoming's charging order protection means creditors cannot seize your LLC assets..." | Body copy |
| Text SM | 14px | 400 | Inter | "Filed in 3–5 business days · Includes registered agent for one year..." | Captions, labels, meta |
| Text XS | 12px | 400 | Inter | "Incorporate123 is not a law firm and does not provide legal advice..." | Legal text, fine print |
| Mono | 16px | 400 | JetBrains Mono | "Wyoming Gold LLC — $1,275 \| Annual Renewal — $525/yr \| Entity #2024-001234567" | Pricing, entity numbers |

### Typography Rules

- ✓ Headlines: 8 words or fewer for scannability (the 80% scanners)
- ✓ Body copy: short paragraphs, 3–5 sentences max
- ✓ Pricing always uses JetBrains Mono for clarity
- ✓ Page H1s must be unique across the entire site (SEO requirement)
- ⚠ Never use ALL CAPS for body text (acceptable for eyebrows and badges only)

---

## 05 — Voice & Messaging

### Voice Attributes

| Attribute | ✅ DO | ❌ DON'T |
|-----------|-------|---------|
| **Authoritative** | Cite 25 years of experience; reference specific statutes and structures | Vague claims; "best in the business" without evidence |
| **Educational** | Explain why privacy matters; teach the difference between privacy and asset protection | Assume visitors already understand nominees, charging orders, etc. |
| **Transparent** | Show all pricing upfront; explain what's included and what's not | Hidden pricing; fine-print exclusions; auto-renewal traps |
| **Reassuring** | Emphasize 25-year track record, real office, ongoing support | Fear-based selling; "you'll get sued if you don't act now" |
| **Precise** | Use specific numbers: $1,275, 25 years, $525 annual renewal | Round numbers; "affordable"; "competitive pricing" |

### Messaging DOs

- Compete on privacy expertise — "25 years specializing in anonymous structures"
- Compete on nominee depth — "year-round nominees, not 'nominee for a day'"
- Compete on offshore capability — "nominees and records outside U.S. jurisdiction"
- Compete on all-inclusive value — "what others charge $5,000/year for, we include"
- Compete on human service — "real experts, not automated forms"
- Always establish context before presenting benefits

### Messaging DON'Ts

- Never compete on price — "we're cheaper"
- Never compete on speed — "file in 5 minutes"
- Never compete on ease — "simple 3-step process"
- Never compete on breadth — "all 50 states"
- Never use fear-based selling or urgency pressure
- Never lead with benefits before establishing relevance/context on a page

### Pillar-Specific Messaging

| Pillar | Core Message | CTA | Trust Element |
|--------|-------------|-----|---------------|
| **Business Privacy** | "Privacy You Can't Get Elsewhere" | Protect Your Privacy → | "Year-round nominees included — not 'nominee for a day'" |
| **Asset Protection** | "Protect What You've Built" | Protect Your Assets → | "For individuals with $500K+ in assets" |
| **Company Formation** | "Expert Formation, All-Inclusive" | Start Your Company → | "25 years forming Wyoming and Nevada entities" |
| **Compliance** | "Ongoing Support, Not Just a Mailbox" | Stay Compliant → | "Full corporate minute maintenance included" |

### Pricing Language

- ✓ Always say "all-inclusive" — never "starting at"
- ✓ Always show the renewal rate alongside the formation price
- ✓ Always frame value comparatively: "competitors charge $400–$5,000/year for nominee services alone"
- ✗ Never apologize for premium pricing — position it as proof of included value

---

## 06 — Trust Architecture

### Immediate Trust Signals (at Launch)

| Signal | Implementation |
|--------|---------------|
| **Trusted Since 2000** | "25 Years of Specialized Experience" — in header/hero |
| **Real Reno Office** | Professional photography of Kingsbury Executive Suites, physical address displayed |
| **Founder Visibility** | David's bio, experience, and photo on About page |
| **30-Day Money-Back Guarantee** | Badge on all package pages |
| **Crypto Payment Badges** | Bitcoin, Ethereum, XRP, Litecoin, Monero icons (signals privacy alignment) |
| **Phone Number Prominent** | Clickable in header and on every conversion page |

### Post-Launch Trust Building

- Trustpilot review program — target 100+ reviews in 6 months
- Anonymized case studies — 3–5 within first quarter
- Content authority — regular blog publishing for E-E-A-T signals
- BBB accreditation exploration

### Trust Signal Placement Rules

| Location | Signals |
|----------|---------|
| **Every page** | Phone number in header + footer |
| **Every conversion page** | Trust badge strip (25 years, guarantee, phone, crypto) |
| **Every package page** | Money-back guarantee badge + value comparison messaging |
| **Homepage** | Full trust signals bar + testimonials/stats section |

---

## 07 — Package Tier System

### Gold Packages (Privacy) — HERO PRODUCT ⭐

Positioned as the recommended standard for anyone seeking privacy. "Most Popular" badge. Visually prominent — highlighted border, elevated card.

| State | Formation Price | Annual Renewal |
|-------|----------------|----------------|
| Wyoming | $1,275 | $525/yr (with nominees) |
| Nevada | $1,800 | $525/yr (with nominees) |

**Included features:**
- ✓ Year-round nominee directors & officers
- ✓ Offshore record storage
- ✓ Full compliance package
- ✓ Registered agent included
- ✓ Corporate minutes maintenance
- ✓ All state filing fees included

### Silver Packages (Formation)

Entry point for formation without privacy features. Clear upgrade messaging showing what Gold adds.

| State | Formation Price | Annual Renewal |
|-------|----------------|----------------|
| Wyoming | $875 | $325/yr |
| Nevada | $1,275 | $325/yr |

**Included features:**
- ✓ Full entity formation
- ✓ Registered agent included
- ✓ Annual report filing
- ✓ Corporate minutes
- ✓ All state filing fees included

↑ *Upgrade to Gold for full privacy*

### Bronze Package

- Nevada only
- Budget option, minimal messaging investment
- Basic entity formation + state filing fees + registered agent available
- Exists for price-sensitive captures who may upgrade later

### Package Display Rules

- ✓ Always show Gold first (or highlighted center in 3-column layout)
- ✓ Always show renewal rate alongside formation price
- ✓ Always include "all-inclusive" badge
- ✗ Never show Bronze as the default or recommended option

---

## 08 — Iconography

**Library:** Lucide React (MIT licensed, tree-shakeable, 1000+ icons)
**Style:** Outline only (not filled) for consistency
**Color:** Inherit from context — pillar color on pillar pages, muted in body text, white on dark backgrounds

### Sizes

| Size | Use |
|------|-----|
| 16px | Inline icons |
| 24px | Standard |
| 40px | Feature blocks |

### Key Icon Assignments

| Icon | Concept |
|------|---------|
| Shield / Lock | Privacy |
| Vault / ShieldCheck | Asset Protection |
| Building2 / FileCheck | Formation |
| BookOpen / ClipboardCheck | Compliance |
| Clock | Year-round nominees |
| Globe | Offshore records |
| DollarSign | All-inclusive pricing |
| MapPin | Real Reno office |
| Award | 25 years experience |
| Phone | Human support |

---

## 09 — Photography Direction

### ✅ DO

- **Office Photography:** Clean, professional shots of the Reno office (Kingsbury Executive Suites). No stock photos of generic office interiors.
- **Team Photography:** Professional headshot of David for About page and trust signals. Approachable but authoritative.
- **Abstract / Conceptual:** For hero sections and pillar headers, abstract shield/lock/vault imagery or geometric privacy-themed graphics preferred over stock photography.

### ❌ DON'T

- **No Stock People:** Avoid generic diverse-team-in-conference-room stock photography. It undermines the "real office, real people" trust signal.
- **Privacy Alignment:** Never use photos showing identifiable individuals as "clients" — it contradicts the privacy positioning.

---

## 10 — Content Patterns

### The 80/20 Progressive Disclosure Model

All service pages serve two audiences:

#### For 80% (Scanners)

- Clear value proposition in 8 words or fewer
- 3–5 sentence overview with key benefits
- Visual comparison tables
- Prominent CTA above the fold
- Trust badge strip

#### For 20% (Researchers)

- Expandable "Read More" sections
- Detailed FAQs (accordion, 10–15 questions)
- Related deep-dive content links
- Full testimonials and case studies
- Itemized pricing breakdowns

### CTA Hierarchy

Every page has exactly one primary CTA style and one secondary. Never three competing styles.

| Level | Style | Example |
|-------|-------|---------|
| **Primary** | Bold, amber. Action verb + outcome. | "Protect Your Privacy →", "Start Your Company →" |
| **Secondary** | Outline or ghost style. Alternative path. | "View Packages & Pricing →", "Schedule a Consultation →" |
| **Consultation Safety Net** | Subtle link. Every self-service CTA must have this nearby. | "Talk to us instead" |

### CTA Anti-Pattern

**✓ Rule:** One primary + one secondary per page. Every self-service CTA must have a "Talk to us" safety net nearby. Never three competing button styles in the same section.

**✗ Avoid:** Three competing primary-style buttons (e.g., amber "Get Started" + blue "Learn More" + green "Contact") create decision paralysis and dilute conversion.

---

## 11 — Competitive Positioning

### Positioning Map

```
                    Consultation-Required
                           ▲
                           │
              (empty)      │   Anderson Advisors
                           │   NCH Inc
                           │
   Budget ($0) ────────────┼──────────────── Premium ($5K+)
                           │
              ZenBusiness   │   ★ INCORPORATE123 ★
              LegalZoom     │     (White space!)
              Incfile       │
                           │
                           ▼
                       Self-Service
```

| Quadrant | Players |
|----------|---------|
| Budget + Self-Service | ZenBusiness, LegalZoom, Incfile |
| Budget + Consultation | (empty) |
| Premium + Consultation | Anderson Advisors, NCH Inc |
| **Premium + Self-Service** | **Incorporate123 (unoccupied white space)** |

The brand occupies the premium-but-self-service quadrant that NO competitor currently fills. All messaging, design, and UX decisions should reinforce this position.

---

*Incorporate123 Brand Guide v2.0 — Confidential — BIT Studios 2026*
