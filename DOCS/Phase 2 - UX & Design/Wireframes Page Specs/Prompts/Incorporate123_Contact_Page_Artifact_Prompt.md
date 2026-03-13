# Contact Page Artifact Prompt

Copy everything below the line and paste it into Claude along with the uploaded `Incorporate123_Contact_Page_Wireframe_Spec.md` file.

---

Build the Incorporate123 Contact page (`/contact/`) as a single React artifact (.jsx) based on the attached wireframe specification. This is the consultation safety net — every "Schedule a Consultation" and "Talk to us" CTA across the entire site points here. It needs to feel like an open door: easy to reach a real person, multiple channels, no friction.

**Important: The attached spec contains no color tokens, spacing values, or design definitions.** Use your own judgment to create a polished, welcoming contact page. This should feel approachable and professional — not a cold corporate form, not a startup "chat with us!" popup. Think: the reception area of a trusted advisor's office. Warm, organized, unhurried. The phone number is the star.

## Technical Constraints

- Single React component, default export, no required props
- Tailwind utility classes only (core pre-defined classes)
- Lucide React for icons (Phone, Mail, MapPin, Clock, Shield, Award, Send, ChevronRight, CheckCircle, AlertCircle, Loader2, User, MessageSquare, Building2, HelpCircle, ExternalLink)
- React hooks: useState for form data, form errors, form submission state (idle/sending/success/error), preferred contact radio
- No localStorage, no external APIs
- Responsive: mobile-first
- Semantic HTML — use proper `<form>`, `<label>`, `<input>`, `<select>`, `<textarea>` elements

## State Architecture

```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  preferredContact: 'email',
  inquiryType: '',
  stateInterest: '',
  message: '',
  referralSource: ''
})
const [errors, setErrors] = useState({})
const [submitState, setSubmitState] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
```

## Page Structure — Build Every Section

### Header & Footer
Same as other pages. "About" in nav may show active (Contact lives under About in the mega menu). Breadcrumb: Home > Contact.

### Section 1: Contact Hero
- Eyebrow: "Get in Touch"
- H1: "Talk to a Privacy Specialist"
- Subheadline from spec — emphasize no sales pressure, no chatbots, no phone trees
- Clean, compact hero — functional, not decorative

### Section 2: Three Contact Method Cards
**Desktop:** 3 equal cards in a horizontal row. **Mobile:** stacked, phone card first.

**Card 1: Call Us Directly**
- Phone icon (large)
- "(775) 555-0123" — the largest text element on the card, styled as a tappable `tel:` link
- "Speak directly with a privacy formation specialist. No phone tree — a real person answers."
- Hours: "Monday–Friday, 9:00 AM – 5:00 PM Pacific"
- "After hours? Leave a voicemail — we return calls next business day."
- This card should be the most visually prominent of the three

**Card 2: Send a Message**
- Mail icon
- "Use the form below ↓" — onClick scrolls smoothly to the form section
- "Describe your situation and we'll respond within 1 business day."
- "Or email directly: info@incorporate123.com"

**Card 3: Visit Our Reno Office**
- MapPin icon
- "Kingsbury Executive Suites" + address
- Hours: "Monday–Friday, 9:00 AM – 5:00 PM Pacific"
- "Walk-ins welcome. Our office is minutes from the Nevada Secretary of State."

All cards: subtle hover lift + shadow. On mobile, the phone card's number should be large enough to be an easy tap target.

### Section 3: Contact Form
The main interactive element. Build it as a clean, spacious form with grouped fields.

**Form Header:**
- H2: "Send Us a Message"
- Subtext: "Tell us what you're looking for and we'll get back to you within 1 business day. All fields marked * are required."

**Form Fields (build all of them):**

Row 1 (2-column desktop, stacked mobile):
- Full Name * — text input
- Email Address * — email input with basic validation

Row 2 (2-column desktop, stacked mobile):
- Phone Number — tel input (optional)
- Preferred Contact Method — radio group: Email (default) · Phone · Either

Row 3 (full width):
- What can we help with? * — select dropdown with all 9 options from the spec:
  "Select a topic..." (placeholder), "New LLC or Corporation Formation", "Privacy / Nominee Services", "Asset Protection Structures", "Offshore / International Formation", "Existing Entity — Compliance", "Existing Entity — Domestication", "Package / Pricing Questions", "Other / General Inquiry"

Row 4 (full width):
- State of Interest — select dropdown (optional):
  "Not sure yet", "Wyoming", "Nevada", "California (form in WY/NV, register in CA)", "Florida (form in WY/NV, register in FL)", "Other / Multiple States"

Row 5 (full width):
- Your Message * — textarea, 5 rows, with the placeholder from the spec

Row 6 (full width):
- How did you find us? — select dropdown (optional):
  "Select...", "Google Search", "Referral from Accountant/Attorney", "Referral from a Client", "Blog / Article", "Social Media", "Returning Client", "Other"

**Submit Button:**
- "Send Message →" — primary button style, full width on mobile
- Disabled (muted) until Name + Email + Inquiry Type + Message are filled
- On click: show Loader2 spinner + "Sending..." text, mock 1.5-second delay, then transition to success state

**Validation:**
- Validate on blur: red border + error message below field
- Email: check for @ and . presence
- On submit with errors: scroll to first error field
- Required fields: Name, Email, Inquiry Type, Message

**Success State:**
After mock submission, smoothly replace the entire form with:
- Large green CheckCircle icon
- "Message Sent!"
- "Thank you for reaching out. We'll get back to you within 1 business day."
- "If your matter is urgent, call us directly at (775) 555-0123." (tap-to-call)
- "Send another message →" link to reset form

**Error State (if needed):**
- "Something went wrong. Please try again or call us at (775) 555-0123."
- Show retry button

### Section 4: Trust Reinforcement Strip
- Horizontal row of 4 trust points (icons + text), below the form
- "Response within 1 business day" · "Your information is kept confidential" · "Real person answers — no chatbots" · "25 years of specialized experience"
- Desktop: single row. Mobile: 2×2 grid.

### Section 5: Quick Links — "You Might Also Find These Helpful"
- H2 headline
- 4 small cards linking to other useful pages:
  1. "Compare All Packages" → `/compare-packages/`
  2. "Frequently Asked Questions" → `/faq/`
  3. "Anonymous LLC Guide" → `/anonymous-llc/`
  4. "Client Login" → `/login/`
- Each card: title + 1-sentence description + arrow link
- Desktop: 4 in a row or 2×2 grid. Mobile: stacked.

### Section 6: Map Section
- Static map placeholder: styled box with MapPin icon centered, "Kingsbury Executive Suites, Reno, NV" label, muted background
- Below map: repeated address, phone, email for easy reference
- In production this becomes a Google Maps embed — for the prototype, a well-styled placeholder is fine

### Mobile Sticky CTA Bar
**Phone-first variant** on this page: "Call (775) 555-0123" as primary button + message/mail icon as secondary. NOT "View Packages" — visitors on the Contact page need to talk, not shop.

## Content Rules

- Use EXACT headlines, descriptions, and form field labels from the spec
- Phone: (775) 555-0123 (always tap-to-call)
- Email: info@incorporate123.com (placeholder)
- Address: Kingsbury Executive Suites, Reno, Nevada (full address TBD)
- Hours: Monday–Friday, 9:00 AM – 5:00 PM Pacific
- All links: `href="#"`

## What Matters Most

1. **Phone number prominence** — the phone number is the #1 conversion tool on this page. It should be impossible to miss. Large, tappable, repeated in multiple locations (Card 1, form success state, bottom of page, mobile sticky bar).
2. **Form usability** — spacious fields, clear labels, gentle validation, large tap targets on mobile. The form should feel inviting, not bureaucratic.
3. **Success state** — when someone submits, the confirmation should feel rewarding and reassuring. Green checkmark, clear "what happens next" messaging, phone fallback for urgency.
4. **Three channels visible immediately** — phone, form, visit. The visitor should know all their options within 2 seconds of landing on the page.
5. **Mobile form** — all fields stacked, full width, minimum 48px height. The submit button must be easy to reach with a thumb.
6. **Warm tone** — this page is the human face of the business. Not cold, not corporate. "We're here to help — no sales pressure." That sentiment should come through in the design.
