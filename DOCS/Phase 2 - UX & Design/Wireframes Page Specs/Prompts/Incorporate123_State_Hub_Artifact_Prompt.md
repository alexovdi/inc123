# State Hub (Wyoming) Artifact Prompt

Copy everything below the line and paste it into Claude along with the uploaded `Incorporate123_State_Hub_Wireframe_Spec.md` file.

---

Build the Incorporate123 Wyoming State Hub page (`/wyoming/`) as a single React artifact (.jsx) based on the attached wireframe specification. This is a cross-pillar routing page — the only page type that spans all four content pillars simultaneously. It's where visitors who search "Wyoming LLC" or "Wyoming incorporation" land and get routed to the right pillar based on their actual intent.

**Important: The attached spec contains no color tokens, spacing values, or design definitions.** Use your own judgment to create a polished, multi-colored routing page. The unique design challenge here: this page must display all four pillar identity colors (blue for Privacy, green for Asset Protection, amber for Formation, purple for Compliance) in a cohesive layout that doesn't feel like a rainbow. Think of it as a dashboard or directory — organized, clean, multi-category but unified.

## Technical Constraints

- Single React component, default export, no required props
- Tailwind utility classes only (core pre-defined classes)
- Lucide React for icons (Shield, Vault, Building2, ClipboardCheck, DollarSign, Scale, Zap, Globe, Clock, ChevronDown, ArrowRight, Phone, MapPin)
- React hooks for state: mobile content map accordion expand/collapse, FAQ accordion
- No localStorage, no external APIs
- Responsive: mobile-first
- Semantic HTML

## What Makes This Template Unique

State hubs are structurally different from every other page type:
- They show ALL FOUR pillar colors (not just one)
- They're intent routers (not content pages) — minimal prose, maximum navigation
- They have no sidebar — full-width layout like comparison pages
- They include a content map showing every Wyoming-related page organized by pillar
- The intent routing cards are the centerpiece — 4 cards, one per pillar, each with 3 key links + package shortcut

## Page Structure — Build Every Section

### Header & Footer
Same as other pages. No specific nav item is "active" — state hubs sit above the pillar structure. Breadcrumb: Home > Wyoming.

### Section 1: State Hero
- No specific pillar color — use a neutral/brand treatment
- Eyebrow: "State Guide"
- H1: "Wyoming Business Services — Privacy, Protection & Formation"
- Subheadline from spec
- **State Facts Strip** — horizontal row of quick-reference stats: "No State Income Tax · $62 Annual Report · Strongest Privacy Statutes · Filing Fee ~$100". Badge/chip style, scannable at a glance.
- No CTAs in the hero — the intent cards serve as the action mechanism

### Section 2: Intent Routing Cards — "What Brings You to Wyoming?"
- H2 headline + subtext
- **4 cards in a 2×2 grid (desktop), stacked (mobile)**
- Each card has its pillar's identity color as accent (blue/green/amber/purple top border or left border)
- Each card contains:
  - Pillar icon
  - Title: "Wyoming for Privacy" / "Wyoming for Asset Protection" / "Wyoming LLC & Corp Formation" / "Wyoming Compliance & Registered Agent"
  - 2–3 sentence description
  - 3 key page links (direct links to the most relevant WY cluster pages)
  - Primary CTA button routing to the main WY cluster for that pillar
  - Package quick link (small text link below CTA: "Wyoming Gold — $1,275 →" or "Wyoming Silver — $900 →")
- Use ALL the exact content from the spec for each card
- Hover: shadow + lift on the whole card

### Section 3: Package Quick Links
- H2: "Wyoming Packages — All-Inclusive Pricing"
- 2 cards: Wyoming Gold ($1,275) and Wyoming Silver ($900)
- Each shows: tier, price, subtitle, 4-5 key includes, CTA
- "Compare All Packages →" link below
- Note: "Need a Corporation? Add $300 for Corp filing"

### Section 4: "Why Choose Wyoming?"
- H2 headline
- 6 advantage blocks in a 3×2 grid (desktop), 2×3 (tablet), stacked (mobile)
- Each: icon, title, 1–2 sentence description
- 6 advantages from the spec: Strongest Privacy Statutes, Lowest Filing Costs, Superior Asset Protection, Fast Filing, No Residency Requirement, 25 Years of WY Expertise
- Use exact content from the spec

### Section 5: Content Map — "All Wyoming Services & Guides"
- H2 headline
- **Desktop:** 4-column grid, one column per pillar. Each column header uses pillar color + pillar name as label. Links listed below as a clean vertical list. Primary pages bold.
- **Mobile:** Accordion — 4 collapsible sections, one per pillar. Tap pillar name to expand link list. Multi-expand allowed. Each section header uses pillar identity color accent.
- ALL links from the spec — every single Wyoming-related page across all 4 pillars

### Section 6: FAQ Accordion
- 6 questions from the spec
- Single-expand mode
- Write realistic 2–3 sentence answers
- Smooth animation, keyboard accessible

### Section 7: Final CTA
- "Ready to Get Started in Wyoming?"
- Dual CTAs: "View Wyoming Gold — $1,275 →" + "View Wyoming Silver — $900 →"
- Phone safety net: "(775) 555-0123"

### Mobile Sticky CTA Bar
"View Wyoming Packages" + phone icon

## Content Rules

- Use EXACT card titles, descriptions, key links, advantage blocks, and FAQ questions from the spec
- Write realistic 2–3 sentence FAQ answers
- Prices: Wyoming Gold LLC $1,275, Corp $1,575. Wyoming Silver LLC $900, Corp $1,200.
- All links: `href="#"` with descriptive text
- Phone: (775) 555-0123

## Design Challenge: Four Colors, One Page

The intent routing cards each use a different pillar color. The content map columns each use a different pillar color. This could easily look chaotic. To keep it cohesive:

- Use pillar colors sparingly — only as top borders, small accent badges, or icon tints. NOT as card backgrounds.
- Keep the page background and card surfaces neutral (white/light gray)
- Use consistent card structure across all 4 intent cards — the only thing that changes is the accent color and content
- The content map columns should use pillar color only in the column header — the links themselves are standard text color

## What Matters Most

1. **Intent routing cards** — these are the page's reason for existing. 4 cards, each clearly pointing to a different pillar's Wyoming content. Must be instantly scannable.
2. **Content map** — comprehensive and organized. On desktop: clean 4-column grid. On mobile: accordion that works smoothly.
3. **Multi-color cohesion** — 4 pillar colors on one page without looking like a rainbow. Subtle accents, not painted backgrounds.
4. **State facts strip** — quick scannable stats in the hero. This is the first thing a "Wyoming LLC" searcher sees.
5. **Mobile stacking** — 4 intent cards + 6 advantage blocks + 4 content map sections is a lot of content. Spacing and hierarchy must keep it navigable.
6. **Premium feel** — this is a directory/routing page but it should still feel authoritative and polished, not like a link dump.
