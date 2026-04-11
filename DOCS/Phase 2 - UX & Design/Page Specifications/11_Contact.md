# Contact Page

> URL: `/contact` | Layout: Full-width single-column | Unique page

## Purpose

Multi-channel contact page. Phone is the primary conversion path for complex inquiries (David's preference). Form, email, and office visit are secondary channels. Must feel personal, not corporate — "Talk to a Privacy Specialist", not "Get in Touch".

## Layout

- Full-width, single-column (no sidebar)
- Max-width: 900px for form, 1100px for contact cards
- Mobile: sticky bottom CTA bar (phone-first)

## Sections

1. **Breadcrumbs** — Home > Contact
2. **Contact Hero** — H1: "Talk to a Privacy Specialist". Subheadline: "No sales pressure, no chatbots, no phone trees — just real people who know privacy law."
3. **Three Contact Method Cards** — Equal-width horizontal row (desktop), stacked (mobile):
   - **Call Us** — Phone number (large, tap-to-call), business hours, "Leave a voicemail anytime" note
   - **Send a Message** — Scroll-to-form link, direct email alternative, "Include your phone for fastest response"
   - **Visit Our Office** — Address (Kingsbury Executive Suites), hours, "Walk-ins welcome — call ahead recommended"
4. **Contact Form** — Inline validation, success state:
   - Row 1: Full Name* + Email* (side-by-side)
   - Row 2: Phone + Preferred Contact Method (side-by-side)
   - Row 3: "What can we help with?"\* dropdown (LLC Formation, Privacy, Asset Protection, Offshore, Compliance, Domestication, Pricing, Other)
   - Row 4: "State of Interest" dropdown (optional, conditional)
   - Row 5: Message\* textarea
   - Row 6: "How did you hear about us?" dropdown (optional)
   - Submit: "Send Message →"
   - Success: Checkmark + "Message Sent! We'll respond within 1 business day." + phone fallback
5. **Trust Strip** — 4 icon+text pairs: "Response within 1 business day", "Complete confidentiality", "Real person, not a chatbot", "25 years experience".
6. **Quick Links** — 3 cards: "Compare All Packages" → /compare-packages, "FAQ" → /faq, "Anonymous LLC Guide" → /anonymous-llc.
7. **Map Section** — Embedded map placeholder + address + phone + email repeated.

## Content Status

| Section       | Status          | Notes                             |
| ------------- | --------------- | --------------------------------- |
| Hero          | Ready           | H1 and subheadline defined        |
| Contact cards | Needs David     | Phone, email, address, hours      |
| Contact form  | Ready           | Fields defined, validation spec'd |
| Trust strip   | Ready           | All 4 items defined               |
| Quick links   | Ready           | Links to existing pages           |
| Map           | Production only | Google Maps API key needed        |

**Source content:** Only 80 words from current site — very thin. This page needs fresh writing.

## Form Behavior

- Validate on blur + on submit
- Required fields: Name, Email, Inquiry Type, Message
- "State of Interest" appears conditionally after selecting Formation/Privacy/AP inquiry type
- Submit button disabled until required fields valid
- Loading: spinner + "Sending..." (1.5s mock)
- Success: replaces form with confirmation + phone fallback
- Error: red border + error text below field

## Key Components

`ContactHero`, `ContactMethodCard`, `ContactForm`, `TrustStrip`, `QuickLinkCard`, `MapPlaceholder`

## Prototype Status

Fully built. Has hero, contact cards, form with validation, trust signals, quick links, map placeholder. Form uses mock submission. Needs real contact info and production form backend.

## Existing Specs

- Wireframe: `../Wireframes Page Specs/Incorporate123_Contact_Page_Wireframe_Spec.md`

## Next Steps

- [ ] Get contact details from David: phone, email, address, hours
- [ ] Write contact card descriptions (brief, personal tone)
- [ ] Production: form submission backend (Formspree, custom API, or CRM integration)
- [ ] Production: Google Maps embed
- [ ] Design pass: ensure phone is the most visually prominent element
- [ ] Add mobile sticky bottom CTA (phone-first)
