# Homepage Artifact Prompt — Structure & Content Only

Copy everything below the line and paste it into Claude along with the uploaded `Incorporate123_Homepage_Wireframe_Specification.md` file.

---

Build the Incorporate123 homepage as a single React artifact (.jsx) based on the attached wireframe specification. This is a clickable prototype for client review by the business owner (David). Use realistic content — not lorem ipsum.

**Important: The attached spec contains detailed color tokens, spacing values, and design specifications. Ignore all of those.** Use your own judgment to create a polished, premium visual design appropriate for a privacy-focused business formation firm that's been operating for 25 years. The site should feel authoritative, trustworthy, and modern — not a budget template, not a generic SaaS landing page. Think law firm meets fintech.

Your job from the spec: extract the **structure, content, sections, navigation, CTAs, and interaction behavior**. Your job on your own: make it look great.

## Technical Constraints

- Single React component, default export, no required props
- Tailwind utility classes only (core pre-defined classes)
- Lucide React for icons
- React hooks for state (mobile nav, carousel, sticky CTA visibility)
- No localStorage, no external APIs
- Responsive: mobile-first with sm/md/lg/xl breakpoints
- Semantic HTML throughout (header, nav, main, section, footer)

## What to Build (in order, top to bottom)

Pull all headlines, descriptions, CTA labels, and content directly from the spec. Here's the structural outline:

### Header (sticky, global)

- Logo ("Incorporate123") left
- 5 nav items center: Privacy · Asset Protection · Formation · Packages · About
- "Get Started" primary CTA button, right
- Phone number visible on mobile
- Mega menu panels for Privacy, Asset Protection, Formation, and Packages — each showing the cluster pages and comparison pages listed in the spec. Trigger on click, not hover.
- Mobile: hamburger menu with accordion expand per pillar. Packages above fold in mobile menu.

### Section 1: Hero

- Split layout: text left, visual right (use a large composed icon arrangement or abstract graphic — no external images needed)
- Eyebrow: "Trusted Since 2000 · Privacy Specialists"
- H1: "Privacy, Asset Protection & Business Formation — All-Inclusive, Nothing Hidden"
- Subheadline from spec
- Two CTAs: "Protect Your Privacy →" (primary) and "View Packages & Pricing →" (secondary)
- Trust badge strip below CTAs: "25 Years · Real Reno Office · All-Inclusive Pricing · Money-Back Guarantee"
- Both CTAs and trust strip must be visible without scrolling on a standard desktop viewport

### Section 2: Pillar Navigation (3 cards)

- Section heading: "How Can We Help?" / "Choose Your Starting Point"
- Three equal cards, one per pillar (Privacy first, then Asset Protection, then Formation)
- Each card: icon, title, description, 3–4 service items, arrow CTA
- Use all the exact card content from the spec (titles, descriptions, service lists, CTA labels)
- Cards should have a visual indicator of their pillar identity (color accent)

### Section 3: Package Quick Links

- Section heading: "Ready to Get Started?" / "All-Inclusive Packages — See Exactly What's Included"
- 4 package cards: Wyoming Gold ($1,275, "Most Popular"), Nevada Gold ($1,800), Wyoming Silver ($875), Nevada Silver ($1,275)
- Each card shows: state, tier, price with "all-inclusive" label, renewal rate ("$525/year with nominees" for Gold), 3–4 included items, "View Full Details →" CTA
- Gold packages should be visually distinguished as premium/recommended
- "Compare All Packages →" link below

### Section 4: Differentiator Grid

- Dark contrasting section (visually breaks the page rhythm)
- Heading: "Why Clients Choose Incorporate123"
- 2×3 grid of icon + title + description blocks
- Six differentiators from the spec: Year-Round Nominees, Offshore Records Since 2012, All-Inclusive Pricing, Real Reno Office, 25 Years of Specialization, Talk to a Real Person
- Use the exact copy from the spec for each

### Section 5: Testimonials

- No real testimonials exist yet — create 3 realistic anonymized placeholder quotes about privacy formation services, responsive support, and all-inclusive value
- Each card: quote text, first name + state + year, 5-star rating
- Carousel or 3-card row

### Section 6: Trust Signals Bar

- Compact horizontal strip with icon + label pairs
- Items: "Trusted Since 2000" · "Real Reno Office" · "30-Day Money-Back Guarantee" · "(775) 555-0123" · "Crypto Accepted" · "Secure Checkout"
- Wraps to grid on mobile

### Section 7: How It Works

- 4 steps with connected indicators (horizontal desktop, vertical mobile)
- Steps from spec: Choose Your Protection Level → Select Your Package → We Handle the Filing → You're Protected
- Each step: number, icon, title, short description (use spec copy)

### Section 8: Compliance / Returning Client Callout

- Visually distinct section tied to the Compliance pillar identity
- Heading: "Already Have an Entity? We Keep You Compliant."
- Description from spec
- Two CTAs: "Explore Compliance Services →" and "Contact Us →"

### Section 9: Final Conversion CTA

- Dark section matching the differentiator section's visual weight
- Heading: "Ready to Protect Your Privacy and Assets?"
- Subtext from spec
- Primary CTA: "View Packages & Pricing →"
- Secondary CTA: "Schedule a Consultation →"
- Phone number: (775) 555-0123

### Footer (global)

- 4-column link grid with every link listed in the spec's footer section
- Column 1: Privacy pillar links
- Column 2: Asset Protection + Formation links
- Column 3: Packages + State hubs
- Column 4: Company + Support + Compliance
- Bottom bar: copyright 2026, Privacy Policy, Terms of Service, phone, Reno address, payment method text badges (Visa, Mastercard, AMEX, Bitcoin, Ethereum, XRP, Litecoin, Monero)

### Mobile Sticky CTA Bar

- Fixed to bottom of screen, only on mobile viewports
- Appears after scrolling past the hero section (use IntersectionObserver or scroll listener)
- "Get Started" button + phone icon button side by side

## Content Rules

- Use the EXACT headlines, descriptions, and CTA labels from the spec — do not rewrite or improvise the copy
- Placeholder phone: (775) 555-0123
- All links: `href="#"` with descriptive text
- Package renewal rates: "$525/year with nominees" for Gold, "$325/year" for Silver

## What Matters Most

This prototype will be shown to the client on desktop and mobile. He will click through it, scroll it, and judge whether the structure and flow feel right. Prioritize:

1. **Completeness** — every section present, nothing abbreviated
2. **Content fidelity** — spec copy used verbatim
3. **Visual polish** — this should look like a real site, not a wireframe
4. **Responsive quality** — works cleanly on phone and desktop
5. **Premium feel** — authoritative, trustworthy, modern, clean
