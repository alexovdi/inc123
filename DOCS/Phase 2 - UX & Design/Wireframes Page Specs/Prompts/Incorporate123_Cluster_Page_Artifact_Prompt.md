# Cluster Page (Anonymous LLC) Artifact Prompt

Copy everything below the line and paste it into Claude along with the uploaded `Incorporate123_Cluster_Page_Wireframe_Spec.md` file.

---

Build the Incorporate123 Anonymous LLC cluster page (`/anonymous-llc/`) as a single React artifact (.jsx) based on the attached wireframe specification. This is the representative cluster page template — the most-used template on the site (24+ pages). It's a long-form educational content page with a sidebar, FAQ accordion, and conversion CTAs.

**Important: The attached spec contains no color tokens, spacing values, or design definitions.** Use your own judgment to create a polished, readable content layout. This page should feel like a premium educational article — think Stripe's documentation or a high-end law firm's resource center. Excellent typography, generous whitespace, clear hierarchy, easy to scan AND easy to read in full. The Privacy pillar identity color is blue.

## Technical Constraints

- Single React component, default export, no required props
- Tailwind utility classes only (core pre-defined classes)
- Lucide React for icons (Shield, Eye, Users, Building2, Clock, Globe, ChevronDown, ChevronRight, ArrowRight, ArrowLeft, Phone, FileText, CheckCircle, BookOpen)
- React hooks for state: progressive disclosure toggles, FAQ accordion, mobile sidebar
- No localStorage, no external APIs
- Responsive: mobile-first
- Semantic HTML: `<article>` for main content, `<aside>` for sidebar, `<section>` for each content block

## Page Structure

This is a long-form content page with a 70/30 main-content/sidebar split on desktop. Build every section from the spec in order.

### Header & Footer
Same as other pages. "Privacy" nav item shows active state. Breadcrumb: Home > Business Privacy > Anonymous LLC Formation.

### Cluster Hero
- Compact hero — smaller than pillar page hero
- Blue Privacy pillar accent
- Eyebrow: "Business Privacy · Guide"
- H1: "Anonymous LLC Formation: Complete Privacy Protection"
- Subheadline from spec
- "8 min read" reading time indicator
- Two CTAs: "View Gold Privacy Packages →" (primary) + "Compare Wyoming vs Nevada →" (secondary/text link)

### Main Content (left column) — 6 Long-Form Sections

Write realistic, substantive content for all 6 sections. This is the educational core of the page. Each section should feel like a well-written article segment — not marketing fluff, not bullet lists.

**Section 1: "What is an Anonymous LLC?"**
- H2 headline
- 3–4 paragraphs of educational content explaining anonymous LLCs in plain language
- Highlighted key-point callout box from the spec
- "How does public disclosure work? →" expandable detail

**Section 2: "How Anonymous LLCs Work"**
- H2 headline
- 4-step numbered process: Choose State → Appoint Nominees → File Documents → Operate Privately
- Each step: number badge, title, 2–3 sentence description
- Visual flow (horizontal on desktop, vertical on mobile)
- "What about the IRS? →" expandable detail

**Section 3: "Wyoming vs Nevada for Anonymous LLCs"**
- H2 headline + intro paragraph
- Comparison table with 8 rows from the spec (Annual Fee, State Tax, Member Disclosure, Filing Fee, Annual Report, Privacy Strength, Gold Price)
- Table is responsive: horizontal scroll on mobile or stacked key-value pairs
- CTA below table: "See the full comparison →" linking to comparison page

**Section 4: "Who Needs an Anonymous LLC?"**
- H2 headline
- 4 audience blocks in a 2×2 grid (desktop) or stacked (mobile)
- Each: icon + title + 2–3 sentence description
- Audiences from spec: Litigious Industries, Competitive Operators, High-Profile Individuals, Multi-State Owners

**Section 5: "Year-Round Nominees vs. 'Nominee for a Day'"**
- H2 headline
- This is the key differentiator section — write it with conviction
- Explain the competitor practice of formation-day-only nominees vs. Incorporate123's year-round service
- Highlighted differentiator callout box: "Competitors charge $400–$5,000/year..."
- "What happens during annual reports? →" expandable detail

**Section 6: "How Much Does an Anonymous LLC Cost?"**
- H2 headline
- Transparent pricing: Wyoming Gold $1,275 all-inclusive breakdown
- Value comparison: $2,000+ in included services
- No hedging — confident, specific numbers

### Inline CTA Block (after Section 6, before FAQ)
- Primary: "Start Your Anonymous LLC — View Gold Packages →"
- Secondary: "Not sure? Compare Wyoming vs Nevada first →"
- Safety net: "Or talk to a specialist: (775) 555-0123"

### Package CTA Block
- "Ready to Form Your Anonymous LLC?"
- Two Gold package cards side by side: Wyoming Gold ($1,275) + Nevada Gold ($1,800)
- "Compare All Packages →" + "Schedule a Consultation →" below

### Cross-Pillar Callout
- Green accent (Asset Protection)
- "Privacy Hides Your Name. Asset Protection Shields Your Wealth."
- Description + CTA from spec
- BELOW the package CTA block

### FAQ Accordion
- 12 questions from the spec
- Multi-expand mode (users on this page are researchers — let them open several)
- Write realistic 2–4 sentence answers for each
- Smooth animation, keyboard accessible

### "Where to Go Next"
- 3 links: Compare Wyoming vs Nevada → Learn About Nominee Services → View Gold Packages

### Desktop Sidebar (right column, sticky)
Build all 5 blocks from the spec:
1. **Package Shortcut** — "Ready to Order?" card with WY Gold $1,275 / NV Gold $1,800
2. **Related Privacy Guides** — list of 7 sibling clusters with "Anonymous LLC" shown as active/current
3. **Back to Pillar** — "← Back to Business Privacy"
4. **Also Relevant** — AP cross-pillar link with 1-sentence context
5. **Phone** — "(775) 555-0123 · Talk to a privacy specialist"

On mobile, redistribute per the spec:
- Package shortcut → inline card after Section 5
- Related clusters → compact list after FAQ
- Back to pillar → breadcrumb handles it
- Cross-pillar → inline Section 7
- Phone → sticky bottom bar

### Mobile Sticky CTA Bar
"View Gold Packages" + phone icon. Same as all other pages.

## Content Quality

This is the highest-content page in the spec set. The content needs to feel genuinely educational and authoritative — like it was written by someone who has been forming anonymous LLCs for 25 years. Key principles:

- **Establish context before benefits** — explain what something IS before saying why it's good
- **Use specific numbers** — $1,275, $525/year, $100 filing fee, 25 years
- **Educational, not salesy** — the content teaches; the CTAs sell
- **Plain language** — explain nominees, charging orders, and BOI without assuming the reader knows these terms
- **Precise** — never say "affordable" or "competitive pricing"; say "$1,275 all-inclusive"

## What Matters Most

1. **Readability** — this is a long content page. Typography, line length, paragraph spacing, and heading hierarchy must be excellent. If the content is hard to read, the page fails.
2. **Sidebar behavior** — sticky desktop, redistributed mobile. Related clusters list is critical for pillar-internal navigation.
3. **Content structure** — clear H2s for scanning, enough prose depth for researchers, expandable detail for the curious
4. **Comparison table** — responsive, clean, scannable. The WY vs NV table is a decision-making tool.
5. **FAQ depth** — 12 questions with real answers. This page is an SEO target for "anonymous LLC" queries; the FAQ captures long-tail variations.
6. **Premium feel** — authoritative, clean, trustworthy. Premium article layout, not a blog post with ads.
