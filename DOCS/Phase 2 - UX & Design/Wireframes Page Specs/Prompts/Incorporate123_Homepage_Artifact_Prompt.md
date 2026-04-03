# Homepage Artifact Generation Prompt

Copy everything below the line and paste it into Claude along with the uploaded `Incorporate123_Homepage_Wireframe_Specification.md` file.

---

Build the Incorporate123 homepage as a single React artifact (.jsx) based on the attached wireframe specification. This is a clickable prototype for client review — use realistic placeholder content, not lorem ipsum. Every section, heading, CTA label, and description should match the spec exactly.

## Technical Requirements

- Single React component with default export, no required props
- Tailwind utility classes only (core classes — no custom config, no @apply)
- Lucide React icons: `import { Shield, Vault, Building2, Clock, Globe, DollarSign, MapPin, Award, Phone, Search, Package, FileText, CheckCircle, Lock, Menu, X, ChevronDown, ChevronRight, Star, ArrowRight, Bitcoin } from "lucide-react"`
- All state managed via React hooks (useState for mobile nav toggle, active mega menu, carousel index, sticky CTA visibility)
- No localStorage, no external API calls
- Responsive: mobile-first, with sm/md/lg/xl breakpoints
- Smooth scroll behavior between sections
- IntersectionObserver for sticky mobile CTA (appears after scrolling past hero)

## Design Token Reference

Apply these as inline Tailwind classes throughout:

```
Brand Colors:
  primary navy:    bg-[#1e3a5f] text-[#1e3a5f]
  secondary blue:  bg-[#2563eb] text-[#2563eb]
  accent amber:    bg-[#d97706] text-[#d97706]
  success green:   bg-[#16a34a] text-[#16a34a]
  surface:         bg-white
  background:      bg-[#f8fafc]
  foreground:      text-[#0f172a]
  muted:           text-[#64748b]
  border:          border-[#e2e8f0]
  dark footer:     bg-[#0f172a]

Pillar Identity:
  Privacy:         border-t-[#2563eb]  text-[#2563eb]  bg-[#dbeafe]
  Asset Protection: border-t-[#16a34a]  text-[#16a34a]  bg-[#dcfce7]
  Formation:       border-t-[#d97706]  text-[#d97706]  bg-[#fef3c7]
  Compliance:      border-t-[#9333ea]  text-[#9333ea]  bg-[#f3e8ff]
```

## Section Build Order (top to bottom)

Build every section from the spec. Here's the sequence with key implementation notes:

1. **Header** — Sticky top. Logo left, 5 nav items center, "Get Started" amber CTA right. Hamburger on mobile. Mega menu as a dropdown panel on click (not hover — artifacts don't have reliable hover). Phone number visible on mobile header.

2. **Hero** — Full-width, min-h-[560px] on desktop. Split layout: left text column (eyebrow, H1, subheadline, dual CTAs, trust badge strip), right side a subtle gradient/abstract visual or a large shield/lock icon composition. Background: light gradient from bg-[#f8fafc] to white. The H1 is: "Privacy, Asset Protection & Business Formation — All-Inclusive, Nothing Hidden"

3. **Pillar Navigation (3 cards)** — Section bg-[#f8fafc]. Three equal cards with colored top border matching pillar. Each has: icon, title, description, 3-4 service bullet items, arrow CTA link. Cards have hover shadow lift. Privacy card is first (lead position).

4. **Package Quick Links** — White background. 4 cards showing Wyoming Gold (with "Most Popular" badge), Nevada Gold, Wyoming Silver, Nevada Silver. Each shows price prominently, renewal rate, 3-4 included items, "View Details →" CTA. Gold cards get a highlighted border.

5. **Differentiator Grid** — Dark section: bg-[#1e3a5f] with white text. 2×3 grid (lg:grid-cols-3 md:grid-cols-2). Six value props with amber icons: Year-Round Nominees, Offshore Records, All-Inclusive Pricing, Real Reno Office, 25 Years Specialization, Talk to a Real Person. Use the exact copy from the spec.

6. **Testimonials** — bg-[#f8fafc]. Since there are no real testimonials yet, build 3 placeholder cards with realistic-sounding anonymized quotes about privacy services, Wyoming LLC formation, and responsive support. Include star ratings (5 stars, amber). Add a subtle note: "Join hundreds of satisfied clients."

7. **Trust Signals Bar** — White bg with top/bottom border. Horizontal flex row: "Trusted Since 2000" · "Real Reno Office" · "30-Day Money-Back Guarantee" · "(775) 555-0123" · "Crypto Accepted" · "Secure Checkout". Small icons next to each. Wraps to 2×3 grid on mobile.

8. **How It Works** — White bg. 4 steps in horizontal row with connector lines (desktop) or vertical timeline (mobile). Numbered circles in blue. Steps: Choose Protection Level → Select Package → We Handle Filing → You're Protected. Each has icon + short description.

9. **Compliance Callout** — Light purple tint bg-[#f3e8ff] with left purple border. Split: left text ("Already Have an Entity? We Keep You Compliant."), right side has two CTAs: "Explore Compliance →" and "Contact Us →".

10. **Final CTA** — Dark navy bg-[#1e3a5f]. Centered text: "Ready to Protect Your Privacy and Assets?" with amber primary CTA and white outline secondary CTA. Phone number below.

11. **Footer** — Darkest bg-[#0f172a]. 4-column link grid matching spec exactly (Privacy links, AP + Formation links, Packages + States, Company + Support). Bottom bar with copyright, legal links, payment icons (use text badges for Visa/MC/BTC/ETH since we can't load payment SVGs).

12. **Mobile Sticky CTA** — Fixed bottom bar, only visible on mobile (lg:hidden) after scrolling past hero. Amber "Get Started" button (80% width) + phone icon button (20%). Subtle top shadow.

## Content Rules

- Use the EXACT headlines, descriptions, and CTA labels from the spec — do not improvise copy
- Placeholder phone number: (775) 555-0123
- All internal links should be `href="#"` with descriptive aria-labels
- Package prices: Wyoming Gold $1,275, Nevada Gold $1,800, Wyoming Silver $875, Nevada Silver $1,275 (use realistic placeholder prices if these aren't exact)
- Renewal: "$525/year with nominees" for Gold packages

## Quality Checklist

- [ ] Every section from the spec is present and in order
- [ ] No section is abbreviated or summarized — build them all completely
- [ ] Mobile responsive at every breakpoint
- [ ] All interactive elements have hover/focus states
- [ ] Color contrast meets WCAG AA (especially on dark navy sections)
- [ ] Semantic HTML: header, nav, main, section, footer
- [ ] No layout shift — all images/icons have fixed dimensions
- [ ] Smooth, polished transitions on card hovers and section reveals
- [ ] The overall feel is premium and authoritative — not a budget template

This is a client-facing prototype. David (the business owner) will review this on desktop and mobile. Make it look like a real, production-quality landing page for a premium privacy incorporation firm — not a wireframe, not a skeleton.
