# Incorporate123 — Contact Page Wireframe Specification

**Prepared by:** BIT Studios
**Prepared for:** David, Incorporate123
**Date:** March 2026
**Phase:** 2 — UX & Interactive Prototyping
**Template Type:** Utility Page (Contact variant)
**URL:** `/contact/`
**Reuse:** Standalone page. The contact form component may be embedded on other pages (e.g., consultation CTAs) but the full page layout is unique.

---

## 1. Page Purpose & Strategic Role

The Contact page is the consultation safety net for the entire site. Every self-service CTA across all page types has a "Schedule a Consultation" or "Talk to us" alternative that points here. It serves visitors who need human guidance before purchasing — complex multi-entity structures, offshore inquiries, high-net-worth asset protection strategies, or anyone who simply prefers talking to a person before spending $1,275+.

The contact page must communicate two things instantly: (1) you can reach a real person, and (2) there are multiple ways to do it. It should feel like an open door, not a form wall.

### Primary Objectives

- Provide multiple contact channels: phone, email, contact form, and physical address
- Make the phone number the most prominent element — David's preferred conversion path for complex inquiries
- Set expectations for response time
- Include enough context that David knows what the visitor needs before calling back
- Serve as the "Schedule a Consultation" destination from all pages
- Reinforce trust signals (real office, real person, 25 years)

### Target Audiences

| Audience             | Why They're Here                                              | What They Need                                      |
| -------------------- | ------------------------------------------------------------- | --------------------------------------------------- |
| Complex inquiry      | Offshore structures, multi-entity, trust setup                | Phone consultation — too complex for self-service   |
| Pre-purchase anxious | Visited package page, not ready to click "Order Now"          | Reassurance from a human before committing $1,275+  |
| Existing client      | Needs compliance help, has a question about their entity      | Quick contact — phone or email                      |
| General inquiry      | Pricing question, service clarification, partnership          | Simple form or phone call                           |
| HNW / referred       | Accountant or attorney sent them, expects white-glove service | Phone number immediately visible, professional tone |

---

## 2. Breadcrumb Navigation

```
Home > Contact
```

---

## 3. Contact Hero Section

### Content

| Element     | Content                                                                                                                                                                           |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Eyebrow     | "Get in Touch"                                                                                                                                                                    |
| H1 Headline | "Talk to a Privacy Specialist"                                                                                                                                                    |
| Subheadline | "Have questions before you order? Need help choosing between packages? Want to discuss a complex structure? We're here to help — no sales pressure, no chatbots, no phone trees." |

---

## 4. Primary Contact Methods

Immediately below the hero. Three equal contact channels displayed prominently.

### Layout

**Desktop:** 3 cards in a horizontal row.
**Mobile:** Stacked vertically.

### Three Contact Cards

#### Card 1: Call Us

| Element      | Content                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------- |
| Icon         | Phone                                                                                        |
| Title        | "Call Us Directly"                                                                           |
| Phone Number | "(775) 555-0123" — large, prominent, tap-to-call                                             |
| Description  | "Speak directly with a privacy formation specialist. No phone tree — a real person answers." |
| Hours        | "Monday–Friday, 9:00 AM – 5:00 PM Pacific"                                                   |
| Note         | "After hours? Leave a voicemail and we'll return your call the next business day."           |

#### Card 2: Send a Message

| Element     | Content                                                            |
| ----------- | ------------------------------------------------------------------ |
| Icon        | Mail                                                               |
| Title       | "Send Us a Message"                                                |
| Action      | "Use the form below ↓" — scrolls to the contact form               |
| Description | "Describe your situation and we'll respond within 1 business day." |
| Alternative | "Or email directly: info@incorporate123.com" (placeholder email)   |
| Note        | "Include your phone number if you'd prefer a callback."            |

#### Card 3: Visit Our Office

| Element     | Content                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------- |
| Icon        | MapPin                                                                                              |
| Title       | "Visit Our Reno Office"                                                                             |
| Address     | Kingsbury Executive Suites, [Full Address], Reno, Nevada                                            |
| Hours       | "Monday–Friday, 9:00 AM – 5:00 PM Pacific"                                                          |
| Description | "Walk-ins welcome during business hours. Our office is minutes from the Nevada Secretary of State." |
| Note        | "Call ahead to schedule a dedicated consultation."                                                  |

---

## 5. Contact Form

The main form. Positioned below the contact cards. Collects enough context for David to prepare before calling back.

### Section Header

| Element       | Content                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| Headline (H2) | "Send Us a Message"                                                                                                   |
| Subtext       | "Tell us what you're looking for and we'll get back to you within 1 business day. All fields marked \* are required." |

### Form Fields

#### Row 1: Name + Email (side by side on desktop)

| Field         | Type  | Required | Placeholder      |
| ------------- | ----- | -------- | ---------------- |
| Full Name     | Text  | Yes \*   | "Your full name" |
| Email Address | Email | Yes \*   | "your@email.com" |

#### Row 2: Phone + Preferred Contact Method (side by side on desktop)

| Field             | Type        | Required | Placeholder / Options            |
| ----------------- | ----------- | -------- | -------------------------------- |
| Phone Number      | Tel         | No       | "(555) 555-5555"                 |
| Preferred Contact | Radio group | No       | Email (default) · Phone · Either |

#### Row 3: Inquiry Type (full width)

| Field                  | Type            | Required | Options                                                                                                                                                                                                                                                                                         |
| ---------------------- | --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What can we help with? | Select dropdown | Yes \*   | "Select a topic..." · "New LLC or Corporation Formation" · "Privacy / Nominee Services" · "Asset Protection Structures" · "Offshore / International Formation" · "Existing Entity — Compliance" · "Existing Entity — Domestication" · "Package / Pricing Questions" · "Other / General Inquiry" |

#### Row 4: State Interest (full width, conditional)

| Field             | Type            | Required | Options                                                                                                                                                      |
| ----------------- | --------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| State of Interest | Select dropdown | No       | "Not sure yet" · "Wyoming" · "Nevada" · "California (form in WY/NV, register in CA)" · "Florida (form in WY/NV, register in FL)" · "Other / Multiple States" |

This field helps David prepare for the callback — knowing the state narrows the conversation immediately.

#### Row 5: Message (full width)

| Field        | Type              | Required | Placeholder                                                                                                                                         |
| ------------ | ----------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Your Message | Textarea (5 rows) | Yes \*   | "Tell us about your situation, what you're looking to accomplish, and any questions you have. The more detail you provide, the better we can help." |

#### Row 6: How did you hear about us? (full width, optional)

| Field                | Type            | Required | Options                                                                                                                                                           |
| -------------------- | --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| How did you find us? | Select dropdown | No       | "Select..." · "Google Search" · "Referral from Accountant/Attorney" · "Referral from a Client" · "Blog / Article" · "Social Media" · "Returning Client" · "Other" |

### Form Submission

| Element       | Content                                                                                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Submit Button | "Send Message →" — primary button style                                                                                                                                                  |
| Below Button  | "We respond to all inquiries within 1 business day."                                                                                                                                     |
| Loading State | Button shows spinner + "Sending..." during mock submission                                                                                                                               |
| Success State | Form replaced by success message: "Message Sent! Thank you for reaching out. We'll get back to you within 1 business day. If your matter is urgent, call us directly at (775) 555-0123." |
| Error State   | Inline field errors on blur + form-level error on submit: "Please complete all required fields."                                                                                         |

### Form Validation

| Rule             | Implementation                            |
| ---------------- | ----------------------------------------- |
| Required fields  | Name, Email, Inquiry Type, Message        |
| Email validation | Basic format check (contains @ and .)     |
| Phone formatting | Optional field — accept any format        |
| Error display    | Red border on field + error message below |
| Submit disabled  | Until all required fields are completed   |

---

## 6. Trust Reinforcement Section

Below the contact form. Reinforces credibility for visitors who are on the fence about reaching out.

### Content

**Layout:** Horizontal strip with 4 trust points.

| Icon   | Text                                    |
| ------ | --------------------------------------- |
| Clock  | "Response within 1 business day"        |
| Shield | "Your information is kept confidential" |
| Phone  | "Real person answers — no chatbots"     |
| Award  | "25 years of specialized experience"    |

---

## 7. Quick Links Section

For visitors who came to the Contact page but might be better served by another page. Prevents the Contact page from being a dead end for visitors who don't actually need to talk to someone.

### Content

| Element       | Content                             |
| ------------- | ----------------------------------- |
| Headline (H2) | "You Might Also Find These Helpful" |

### Quick Link Cards (3–4 cards)

| Card | Title                        | Description                                                                 | CTA                                      |
| ---- | ---------------------------- | --------------------------------------------------------------------------- | ---------------------------------------- |
| 1    | "Compare All Packages"       | "See every package with full pricing, features, and what's included."       | "View Packages →" → `/compare-packages/` |
| 2    | "Frequently Asked Questions" | "Answers to 45+ common questions about privacy, formation, and compliance." | "Browse FAQs →" → `/faq/`                |
| 3    | "Anonymous LLC Guide"        | "Our comprehensive guide to forming an LLC where your name stays private."  | "Read the Guide →" → `/anonymous-llc/`   |

---

## 8. Map Section

A visual anchor showing the physical office location.

### Content

| Element            | Content                                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| Map                | Embedded map placeholder showing Kingsbury Executive Suites, Reno, NV (for prototype: styled box with MapPin icon and address label) |
| Address (repeated) | Full address, phone, email below the map                                                                                             |

---

## 9. Page Layout

Full-width single-column layout. The contact form is the primary content — it should feel spacious and easy to complete, not cramped.

**Desktop:** Single column, max-width 900px for the form area. Contact cards can extend to ~1100px. Form fields use 2-column rows where noted.
**Mobile:** Single column. All form fields stack to full width.

### Section Order

1. Breadcrumb
2. Contact Hero
3. Contact Method Cards (Call / Message / Visit — 3 cards)
4. Contact Form (with all fields)
5. Trust Reinforcement Strip
6. Quick Links Section
7. Map Section
8. Footer

---

## 10. Mobile-Specific Requirements

### Contact Cards on Mobile

Stack vertically. Phone card first (most important channel). Each card full width.

### Phone Number on Mobile

The phone number in Card 1 must be a large, tappable `tel:` link — the single most important element on this page for mobile visitors.

### Form on Mobile

All fields stack to single column, full width. Large tap targets (minimum 48px height). Labels above inputs. Submit button full width.

### Sticky Bottom CTA Bar

Phone-first variant: "Call (775) 555-0123" button + message icon. Phone is the primary action on the Contact page, not "View Packages."

---

## 11. Interaction Behavior

| Element             | Behavior                                                                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contact cards       | Hover: subtle shadow lift. Phone card: tap-to-call on entire card (mobile). Message card: scroll to form.                                            |
| Form fields         | Validate on blur. Red border + error message for invalid required fields.                                                                            |
| Inquiry Type select | Selecting a value doesn't trigger conditional logic (except State Interest appearing if formation-related topic is selected — optional enhancement). |
| Submit button       | Disabled until required fields complete. Loading spinner on click. Mock 1.5-second delay. Success state replaces form.                               |
| Success state       | Green checkmark + confirmation message + phone number fallback. Smooth fade transition from form to success.                                         |
| Map                 | Static placeholder. In production: embedded Google Maps iframe.                                                                                      |

---

## 12. SEO Requirements

| Element          | Value                                                                                                                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Title Tag        | "Contact Incorporate123 — Talk to a Privacy Formation Specialist                                                                                                                                                      | Reno, NV" |
| Meta Description | "Contact Incorporate123 for expert guidance on anonymous LLC formation, nominee services, asset protection, and Wyoming/Nevada entity filing. Call (775) 555-0123 or send a message. Response within 1 business day." |
| H1               | "Talk to a Privacy Specialist"                                                                                                                                                                                        |
| H2s              | "Send Us a Message", "You Might Also Find These Helpful"                                                                                                                                                              |
| Schema           | LocalBusiness schema (address, phone, hours, geo coordinates). ContactPage schema.                                                                                                                                    |
| Canonical URL    | `https://incorporate123.com/contact/`                                                                                                                                                                                 |

---

## 13. Content Dependencies

| Item                                                                        | Status                  | Owner       |
| --------------------------------------------------------------------------- | ----------------------- | ----------- |
| Contact email confirmed                                                     | Needed                  | David       |
| Phone number confirmed                                                      | Needed                  | David       |
| Office full address confirmed                                               | Needed                  | David       |
| Business hours confirmed                                                    | Needed                  | David       |
| Form submission endpoint (production)                                       | Needed for dev phase    | BIT Studios |
| Google Maps embed API key (production)                                      | Needed for dev phase    | BIT Studios |
| Inquiry routing — does the form email David directly or go through a queue? | Need David's preference | David       |

---

## 14. Component Reuse Map

| Component                             | Source                                | Notes                                                                                        |
| ------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------- |
| ContactHero                           | New (simple utility hero)             | Unique to Contact                                                                            |
| ContactMethodCards                    | New                                   | 3-card layout: Call, Message, Visit. Unique to Contact.                                      |
| ContactForm                           | New                                   | The form itself. May be embedded as a simplified version on other pages (consultation CTAs). |
| FormInput / FormSelect / FormTextarea | From checkout flow                    | Same form primitives reused                                                                  |
| TrustStrip                            | Adapted from homepage TrustSignalsBar | Smaller, 4-item variant                                                                      |
| QuickLinkCards                        | Adapted from WhereToGoNext            | Slightly richer cards with descriptions                                                      |
| MapPlaceholder                        | New                                   | Static placeholder for prototype. Google Maps in production.                                 |
| StickyMobileCTA                       | Global                                | Phone-first variant on this page                                                             |

---

_Confidential — BIT Studios × Incorporate123 — March 2026_
