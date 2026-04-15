import type { ContactData } from "@/lib/types";

/** Canonical phone number constants — import these instead of hardcoding */
export const PHONE_DISPLAY = "1-800-553-0615";
export const PHONE_HREF = "tel:+18005530615";
export const PHONE_LOCAL_DISPLAY = "(775) 322-3500";
export const PHONE_LOCAL_HREF = "tel:+17753223500";

/* ------------------------------------------------
   Trust signals for the contact page
   ------------------------------------------------ */
export const contactTrustItems = [
  { icon: "Clock", value: "1 Day", label: "Response Time" },
  { icon: "ShieldCheck", value: "Private", label: "Your Info Is Confidential" },
  { icon: "Phone", value: "Real", label: "Person Answers" },
  { icon: "Award", value: "25+", label: "Years Experience" },
];

export const contactData: ContactData = {
  hero: {
    eyebrow: "Get in Touch",
    headline: "Talk to a Privacy Specialist",
    subheadline:
      "Have questions before you order? Need help choosing between packages? Want to discuss a complex structure? We're here to help — no sales pressure, no chatbots, no phone trees.",
  },
  methods: [
    {
      type: "phone",
      icon: "Phone",
      title: "Call Us Directly",
      description:
        "Speak directly with a privacy formation specialist. No phone tree — a real person answers. Monday–Friday, 9:00 AM – 5:00 PM Pacific. After hours? Leave a voicemail and we'll return your call the next business day.",
      action: { label: "1-800-553-0615", href: "tel:+18005530615" },
    },
    {
      type: "form",
      icon: "MessageSquare",
      title: "Send Us a Message",
      description:
        "Describe your situation and we'll respond within 1 business day. Or email directly: info@incorporate123.com — Response within 1 business day. Include your phone number if you'd prefer a callback.",
      action: { label: "Scroll to Form", href: "#contact-form" },
    },
    {
      type: "email",
      icon: "AtSign",
      title: "Email Us Directly",
      description:
        "Prefer written correspondence? Email info@incorporate123.com with a description of your situation. We respond within 1 business day — and every inbound is read by a real person, not a bot.",
      action: {
        label: "info@incorporate123.com",
        href: "mailto:info@incorporate123.com",
      },
    },
  ],
  formFields: [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      placeholder: "Your first name",
      halfWidth: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
      placeholder: "Your last name",
      halfWidth: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "you@example.com",
      halfWidth: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "(555) 123-4567",
      halfWidth: true,
    },
    {
      name: "inquiryType",
      label: "Inquiry Type",
      type: "select",
      required: true,
      options: [
        "General",
        "Formation",
        "Privacy",
        "Asset Protection",
        "Compliance",
        "Packages",
        "Offshore",
        "Other",
      ],
      halfWidth: true,
    },
    {
      name: "stateInterest",
      label: "State of Interest",
      type: "select",
      options: ["Wyoming", "Nevada", "California", "Florida", "Not Sure Yet"],
      halfWidth: true,
      conditionalOn: "inquiryType",
      conditionalValues: [
        "Formation",
        "Privacy",
        "Asset Protection",
        "Packages",
      ],
    },
    {
      name: "message",
      label: "Your Message",
      type: "textarea",
      required: true,
      placeholder: "Tell us about your needs...",
    },
    {
      name: "referralSource",
      label: "How did you hear about us?",
      type: "select",
      options: [
        "Referral from Accountant/Attorney",
        "Referral from a Client",
        "Google Search",
        "Blog / Article",
        "Social Media",
        "Returning Client",
        "Other",
      ],
    },
  ],
  quickLinks: [
    {
      icon: "EyeOff",
      title: "Business Privacy",
      description: "Keep your ownership private — nominees, anonymous LLCs.",
      href: "/privacy",
    },
    {
      icon: "Shield",
      title: "Asset Protection",
      description: "Protect your personal assets from business liability.",
      href: "/asset-protection",
    },
    {
      icon: "Building2",
      title: "Formation",
      description: "Form your Wyoming or Nevada LLC or corporation.",
      href: "/formation",
    },
    {
      icon: "Package",
      title: "Compare Packages",
      description: "See all formation packages side by side with pricing.",
      href: "/compare-packages",
    },
    {
      icon: "CircleQuestionMark",
      title: "FAQ",
      description: "Common questions on privacy, formation, and compliance.",
      href: "/faq",
    },
  ],
};
