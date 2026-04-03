# Incorporate123 — Contact Page Content Guide

**URL:** `/contact/` · **Template:** Utility Page (unique)  
**Phase:** 2 — UX & Interactive Prototyping  
**Based on:** Contact Page Wireframe Spec, Brand Guide v2, User Journey Mapping

---

## Wireframe Improvement Notes

### 1. Contact Form "Inquiry Type" Options Need a Privacy-First Reorder

The wireframe lists form topics starting with "New LLC or Corporation Formation." But the site is repositioned around privacy as the lead pillar, and the highest-value contact inquiries are privacy-related. Visitors selecting a topic see the first option as the implied default.

**Recommendation:** Reorder inquiry types: Privacy / Nominee Services (first) → Asset Protection → New Formation → Offshore → Existing Entity Compliance → Existing Entity Domestication → Packages & Pricing → Other. This mirrors the site's pillar priority order.

### 2. "How Did You Find Us?" Field Is Smart — But Needs "Attorney/CPA Referral" as First Option

The wireframe lists "Google Search" first. But accountant and attorney referrals are the highest-converting lead source for premium formation services — these visitors arrive with pre-established trust and convert at higher rates. Making referral the first visible option subtly signals "other professionals recommend us."

**Recommendation:** Reorder: "Referral from Accountant/Attorney" (first) → "Referral from a Client" → "Google Search" → "Blog / Article" → "Social Media" → "Returning Client" → "Other."

### 3. Form Success State Should Offer an Immediate Action

The wireframe's success message says "We'll get back to you within 1 business day." For visitors who just filled out a form about a $1,275+ purchase, waiting a day feels passive. The success state should give them something to do immediately.

**Recommendation:** Success message should include: confirmation text + "While you wait, explore our resources:" with 2–3 links (Compare Packages, Anonymous LLC Guide, FAQ). This keeps visitors on-site and continues the education process while David prepares to call back.

### 4. Contact Page Mobile Should Lead with Phone, Not Message

The wireframe's mobile section correctly stacks cards with Phone first. But the sticky bottom CTA bar should also be phone-first (which it is — "Call (775) xxx-xxxx" + message icon). Good. Just confirming this is correct and shouldn't be overridden by the global "View Packages" sticky bar.

### 5. Missing Expected Response Time for Email

Card 2 says "we'll respond within 1 business day" for the form, but the direct email alternative doesn't set the same expectation. Visitors who email directly should see the same commitment.

**Recommendation:** Add "Response within 1 business day" to the email address line in Card 2.

---

## Section-by-Section Content Guide

---

## Contact Hero

| Element         | Content                                                                                                                                                                           | Voice Notes                                                                                                                          |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Eyebrow**     | "Get in Touch"                                                                                                                                                                    |                                                                                                                                      |
| **H1**          | "Talk to a Privacy Specialist"                                                                                                                                                    | Not "Contact Us" — that's generic. "Talk to a Privacy Specialist" reinforces the brand positioning and signals expertise.            |
| **Subheadline** | "Have questions before you order? Need help choosing between packages? Want to discuss a complex structure? We're here to help — no sales pressure, no chatbots, no phone trees." | Three questions mirror three visitor types (pre-purchase, undecided, complex). Three "no" statements differentiate from competitors. |

---

## Contact Method Cards

3 cards. Phone first (David's preferred conversion path for complex inquiries).

### Card 1: Call Us

| Element              | Content                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| **Icon**             | Phone                                                                                                    |
| **Title**            | "Call Us Directly"                                                                                       |
| **Phone**            | "(775) xxx-xxxx" — large, prominent, tap-to-call. This is the single most important element on the page. |
| **Description**      | "Speak directly with a privacy formation specialist. No phone tree — a real person answers."             |
| **Hours**            | "Monday–Friday, 9:00 AM – 5:00 PM Pacific"                                                               |
| **After-hours note** | "After hours? Leave a voicemail and we'll return your call the next business day."                       |

### Card 2: Send a Message

| Element               | Content                                                                        |
| --------------------- | ------------------------------------------------------------------------------ |
| **Icon**              | Mail                                                                           |
| **Title**             | "Send Us a Message"                                                            |
| **Action**            | "Use the form below ↓" — scrolls to form                                       |
| **Description**       | "Describe your situation and we'll respond within 1 business day."             |
| **Email alternative** | "Or email directly: info@incorporate123.com — Response within 1 business day." |
| **Callback note**     | "Include your phone number if you'd prefer a callback."                        |

### Card 3: Visit Our Office

| Element         | Content                                                                       |
| --------------- | ----------------------------------------------------------------------------- |
| **Icon**        | MapPin                                                                        |
| **Title**       | "Visit Our Reno Office"                                                       |
| **Address**     | Kingsbury Executive Suites, [Full Address], Reno, Nevada                      |
| **Hours**       | "Monday–Friday, 9:00 AM – 5:00 PM Pacific"                                    |
| **Description** | "Walk-ins welcome. Our office is minutes from the Nevada Secretary of State." |
| **Note**        | "Call ahead to schedule a dedicated consultation."                            |

---

## Contact Form

| Element     | Content                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------- |
| **H2**      | "Send Us a Message"                                                                                 |
| **Subtext** | "Tell us what you're looking for. We respond within 1 business day. Fields marked \* are required." |

### Form Fields

| Row | Field                | Type     | Required | Notes                                                                                                                                                                                           |
| --- | -------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Full Name            | Text     | Yes\*    |                                                                                                                                                                                                 |
| 1   | Email Address        | Email    | Yes\*    |                                                                                                                                                                                                 |
| 2   | Phone Number         | Tel      | No       |                                                                                                                                                                                                 |
| 2   | Preferred Contact    | Radio    | No       | Email (default) · Phone · Either                                                                                                                                                                |
| 3   | Inquiry Type         | Select   | Yes\*    | Privacy / Nominee Services · Asset Protection · New LLC or Corporation · Offshore / International · Existing Entity — Compliance · Existing Entity — Domestication · Packages & Pricing · Other |
| 4   | State of Interest    | Select   | No       | Not sure yet · Wyoming · Nevada · California · Florida · Other / Multiple                                                                                                                       |
| 5   | Your Message         | Textarea | Yes\*    | "Tell us about your situation, what you're looking to accomplish, and any questions you have."                                                                                                  |
| 6   | How did you find us? | Select   | No       | Referral from Accountant/Attorney · Referral from a Client · Google Search · Blog / Article · Social Media · Returning Client · Other                                                           |

### Submit Button

"Send Message →" — primary amber button style.

Below button: "We respond to all inquiries within 1 business day."

### Success State

Form replaced by success message:

> **Message Sent!**  
> Thank you for reaching out. We'll get back to you within 1 business day. If your matter is urgent, call us directly at (775) xxx-xxxx.
>
> **While you wait:**  
> Compare All Packages → · Anonymous LLC Guide → · Frequently Asked Questions →

### Error Handling

- Red border + inline message on invalid required fields
- Submit disabled until required fields are complete
- Scroll to first error on submit attempt

---

## Trust Reinforcement Strip

Below form. 4 trust points in a horizontal strip.

| Icon   | Text                                    |
| ------ | --------------------------------------- |
| Clock  | "Response within 1 business day"        |
| Shield | "Your information is kept confidential" |
| Phone  | "Real person answers — no chatbots"     |
| Award  | "25 years of specialized experience"    |

---

## Quick Links Section

| Element | Content                             |
| ------- | ----------------------------------- |
| **H2**  | "You Might Also Find These Helpful" |

| Card | Title                        | CTA                                      |
| ---- | ---------------------------- | ---------------------------------------- |
| 1    | "Compare All Packages"       | "View Packages →" → `/compare-packages/` |
| 2    | "Frequently Asked Questions" | "Browse FAQs →" → `/faq/`                |
| 3    | "Anonymous LLC Guide"        | "Read the Guide →" → `/anonymous-llc/`   |

---

## Map Section

Embedded map showing Kingsbury Executive Suites, Reno. Address and phone repeated below.

---

## Mobile-Specific

- **Phone card first** when stacked
- **Phone number** is large, tappable `tel:` link
- **Form fields** single column, full width, 48px minimum height
- **Sticky bottom bar:** Phone-first variant — "Call (775) xxx-xxxx" button + message icon (NOT "View Packages" on this page)

---

_Confidential — BIT Studios × Incorporate123 — March 2026_
