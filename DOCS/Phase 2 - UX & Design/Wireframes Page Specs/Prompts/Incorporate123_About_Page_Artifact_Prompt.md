# About Us Page Artifact Prompt

Copy everything below the line and paste it into Claude along with the uploaded `Incorporate123_About_Page_Wireframe_Spec.md` file.

---

Build the Incorporate123 About Us page (`/about/`) as a single React artifact (.jsx) based on the attached wireframe specification. This page carries the heaviest trust-building burden on the entire site — the company launches with zero public reviews, so this page must prove that Incorporate123 is real, expert, and worth $1,275+.

**Important: The attached spec contains no color tokens, spacing values, or design definitions.** Use your own judgment to create a polished, warm, trustworthy About page. This should feel like meeting a respected professional — not a corporate "About Us" with stock photos and mission statement buzzwords. Think: a premium law firm's "Our Team" page crossed with a founder-led startup's origin story. Human, specific, credible.

## Technical Constraints

- Single React component, default export, no required props
- Tailwind utility classes only (core pre-defined classes)
- Lucide React for icons (User, MapPin, Phone, Mail, Clock, Award, Shield, DollarSign, Building2, Calendar, Globe, Bitcoin, ChevronRight, Star, ArrowRight)
- React hooks for state: minimal — optional count-up animation on stats, testimonial carousel if included
- No localStorage, no external APIs
- Responsive: mobile-first
- Semantic HTML

## Page Structure — Build Every Section

### Header & Footer
Same as other pages. "About" nav item active. Breadcrumb: Home > About Us.

### Section 1: About Hero
- Eyebrow: "About Incorporate123"
- H1: "25 Years of Privacy Expertise — Real People, Real Office, Real Results"
- Subheadline from spec (not a filing mill, not a call center, specialists who know your name)
- Right side: placeholder for office photo — use a composed icon arrangement (Building2 + MapPin + Shield) or a styled placeholder box with "Office Photo — Reno, NV" label
- No CTA in the hero — this is a story page, the CTA comes at the end

### Section 2: Founder Section
This is THE most important section on the page. Build it with care.

- **Desktop:** Two-column layout. Left: large professional photo placeholder (use a styled avatar circle with User icon + "David — Founder" label, ~200px). Right: full bio content.
- **Mobile:** Photo centered above, bio below.
- Name: "David" (last name TBD — use "David" only for prototype)
- Title: "Founder & Principal"
- Location: "Reno, Nevada"
- Experience line: "25+ years in privacy-focused business formation"
- **Three bio paragraphs:** Write realistic, specific, human content:
  - Paragraph 1: Origin story — started around 2000 in Reno, focused on Nevada first, saw the gap in privacy services, expanded to Wyoming when its superior privacy statutes became clear
  - Paragraph 2: What he's built — nominee service infrastructure, offshore records custodian capability, relationships with state offices, why clients get depth not breadth
  - Paragraph 3: Philosophy — answers his own phone, transparent pricing, accepts crypto, doesn't gate services behind consultations, believes privacy is a right not a luxury
- Direct contact line: phone (tap-to-call) + email link
- Trust tags below: "25+ years · Reno, NV office · Direct access — no call center"
- Bio tone: third person, specific, human. "David has spent 25 years forming Wyoming and Nevada entities" NOT "Our founder is committed to excellence in client service."

### Section 3: Company Timeline — "Our Story"
- H2: "Our Story"
- Subtext: "From a single-state Nevada incorporator to Privacy, Asset Protection & Business Formation Specialists."
- **Vertical timeline** with 8 milestones from the spec (2000 through 2026)
- Desktop: alternating left/right content blocks with a center line and dot markers
- Mobile: single column, dots on left, content right
- Each milestone: year badge, title, 1–2 sentence description
- Use ALL 8 milestones from the spec with exact content
- Optional: subtle fade-in animation as milestones enter the viewport

### Section 4: "What Makes Us Different"
- H2 headline
- 3 philosophy cards in a row (desktop), stacked (mobile)
- Card 1: "Specialists, Not Generalists" — content from spec
- Card 2: "Transparent, Not Gated" — content from spec
- Card 3: "Real People, Not Automation" — content from spec
- Use EXACT copy from the spec — these are positioning statements, not generic values
- Cards have subtle hover lift

### Section 5: Office Section — "Visit Our Reno Office"
- H2 headline
- Office details: Kingsbury Executive Suites address, phone, email, hours (M–F 9–5 Pacific)
- 1–3 photo placeholders (styled boxes: "Office Exterior", "Office Interior", "Reception")
- Map placeholder (styled box: "Map — Kingsbury Executive Suites, Reno, NV" with MapPin icon)
- Nevada note: "Our office is minutes from the Nevada Secretary of State — we hand-deliver filing documents for same-day processing."
- The whole section should feel grounded and physical — this is the "we're real" proof

### Section 6: "By the Numbers" Stats
- 4 stat blocks in a horizontal row (desktop), 2×2 grid (mobile)
- Large prominent numbers with labels below:
  - "25+" / "Years in Business"
  - "2" / "States We Specialize In"
  - "$525" / "Annual Renewal — All-Inclusive"
  - "100%" / "Transparent Pricing"
- Optional: animated count-up effect when the section enters the viewport (the numbers increment from 0 to their final value over ~1.5 seconds)
- Numbers should be in a display/mono font for impact

### Section 7: Testimonials (conditional)
- Build 2–3 placeholder testimonial cards with realistic anonymized quotes
- Quote examples: a WY privacy client praising nominee service reliability, a real estate investor thanking the responsive support, a CA business owner appreciating the dual-state setup
- Each: quote text, "— Sarah M., California, 2024" attribution, 5 stars
- If this section feels too speculative without real testimonials, it's OK to build it smaller/subtler with a note: "Reviews coming soon — join 25 years of satisfied clients"

### Section 8: CTA Section
- "Ready to Work with Us?"
- Subtext from spec
- Primary: "View Packages & Pricing →"
- Secondary: "Contact Us →"
- Phone: (775) 555-0123

### Mobile Sticky CTA Bar
"View Packages" + phone icon

## Content Quality

Write the founder bio and timeline content as if you are a professional copywriter who has interviewed David for 30 minutes. Be specific, be human, avoid corporate jargon. Key phrases to weave in naturally:

- "25 years" (not "over two decades")
- "Wyoming and Nevada" (not "multiple jurisdictions")
- "Answers his own phone" (not "committed to accessibility")
- "Year-round nominees" (not "comprehensive privacy services")
- "$1,275 all-inclusive" (not "competitive pricing")
- "Kingsbury Executive Suites, Reno" (not "our professional offices")

## What Matters Most

1. **Founder section** — this is the single most important trust element on the entire site. David IS the brand. The bio must be human, specific, and credible. Professional photo placeholder must feel intentional, not broken.
2. **Timeline** — visual evidence of 25 years. Each milestone should feel like a real business decision, not a marketing beat.
3. **Office section** — physical proof. Address, hours, photos, map. This section converts skeptics.
4. **Philosophy cards** — these are brand positioning statements disguised as company values. The copy must differentiate from competitors, not just sound nice.
5. **Stats** — precise, verifiable numbers. "$525" is more credible than "competitive." "2 states" is more credible than "leading provider."
6. **Overall warmth** — this page should make someone feel good about spending $1,275 with this company. Not through pressure or urgency — through genuine confidence and human connection.
