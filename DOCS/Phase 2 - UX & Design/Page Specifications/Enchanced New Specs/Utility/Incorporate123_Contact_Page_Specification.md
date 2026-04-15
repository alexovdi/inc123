# Contact — Page Specification

**Page:** Contact
**URL:** `/contact/`
**Template Type:** Utility (contact form variant)
**Priority:** P1 — Launch
**Content Source:** Existing — preserve

---

## 1. Page Purpose & Strategic Role

### 1.1 Primary Goal

Give visitors every possible way to reach Incorporate123 — phone, form, email, physical address — with no friction. This page is the destination for every "Schedule a Consultation" CTA across the site. It's also the fallback for visitors who have questions that no page answered.

### 1.2 Strategic Role

- **Consultation conversion endpoint** — Every offshore page, every "Schedule a Consultation" ghost CTA, and every "Questions?" micro-link routes here
- **Trust reinforcer** — Physical address, phone number, and business hours prove this is a real business with real people
- **Lead capture** — The contact form captures visitors who aren't ready to buy but want to talk. These leads are high-intent — they've been through pillar/cluster content and need human guidance

---

## 2. Section Order

| # | Section | Role |
|---|---------|------|
| 1 | Contact Hero | H1 + brief subheadline |
| 2 | Contact Methods | Phone (primary, prominent), email, office address — 3 columns |
| 3 | Contact Form | Name, email, phone (optional), entity type (dropdown), state interest (dropdown), message, submit |
| 4 | Office Details | Address, embedded map, business hours |
| 5 | Quick Links | "Not sure what you need?" + links to pillar pages and FAQ |

---

## 3. Key Specifications

### Contact Methods Block

```
CALL US (Primary — largest, most prominent)
(XXX) XXX-XXXX
Monday–Friday, [hours] Pacific Time
"Real people. Real answers. Not a phone tree."

EMAIL US
[email address]
Response within 1 business day.

VISIT US
Kingsbury Executive Suites
[Full address]
Reno, Nevada
"By appointment — call ahead."
```

**Dev Notes:**
- Phone is the primary contact method — it should be the most visually prominent element on the page
- Phone number has click-to-call on mobile
- Green "available" dot animation on phone number (matching header pattern)
- No live chat at launch — this can be added post-launch

### Contact Form

**Fields:**
- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- I'm Interested In: [Privacy/Nominees] [Asset Protection] [Formation] [Compliance] [Offshore] [Other] (dropdown or radio, optional)
- State of Interest: [Wyoming] [Nevada] [California] [Florida] [Other/Not Sure] (dropdown, optional)
- Message (required, textarea)
- Submit Button: "Send Message" (amber)

**Dev Notes:**
- Form submits to CMS or email handler — NOT a third-party form service that collects data externally
- Confirmation message after submission: "Thank you. We'll respond within 1 business day."
- No CAPTCHA visible by default — use honeypot or invisible reCAPTCHA to minimize friction
- "I'm Interested In" and "State of Interest" dropdowns help David route inquiries but should be optional — don't block submission with required dropdown selections
- The form should NOT ask for entity name, EIN, or any sensitive business information — that belongs in the checkout flow, not the contact form

### Quick Links

```
Not sure where to start?
→ Business Privacy — Keep your ownership private (/privacy/)
→ Asset Protection — Protect your assets (/asset-protection/)
→ Formation — Form your business (/formation/)
→ Compare Packages — See all options (/compare-packages/)
→ FAQ — Common questions answered (/faq/)
```

---

## 4. Technical Specifications

| Element | Value |
|---------|-------|
| **H1** | "Contact Incorporate123" |
| **Title tag** | "Contact Us — Phone, Email & Reno Office \| Incorporate123" |
| **Meta description** | "Contact Incorporate123 for privacy incorporation, asset protection, and business formation services. Call (XXX) XXX-XXXX, email, or visit our Reno, Nevada office. Response within 1 business day." |
| **Schema** | ContactPage, LocalBusiness (with address, phone, hours), BreadcrumbList |

---

## 5. Content Notes for David

1. **Phone number** — Confirm the primary number for all site usage
2. **Email address** — Confirm the public-facing email for the contact form and display
3. **Business hours** — Provide hours in Pacific Time
4. **Office address** — Confirm which address is current (two appear in project data)
5. **By appointment** — Confirm if the office accepts walk-ins or requires appointments
6. **Response time** — "Within 1 business day" — is this accurate and achievable?
7. **Form recipient** — Where should form submissions go? David's email, a shared inbox, a CRM?

---

*End of Specification — Contact*
*Confidential — BIT Studios × Incorporate123 — April 2026*
