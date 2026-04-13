import type { CheckoutTimelineStep } from "@/lib/types";

/* ------------------------------------------------
   US States for billing address
   ------------------------------------------------ */
export const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

/* ------------------------------------------------
   Payment method definitions
   ------------------------------------------------ */
export const PAYMENT_METHODS = [
  { id: "credit-card", label: "Credit Card", icon: "CreditCard" },
  { id: "paypal", label: "PayPal", icon: "Wallet" },
  { id: "crypto", label: "Crypto", icon: "Bitcoin" },
];

export const FORMATION_STATES = [
  { value: "Wyoming", label: "Wyoming", abbr: "WY" },
  { value: "Nevada", label: "Nevada", abbr: "NV" },
  { value: "California", label: "California", abbr: "CA" },
  { value: "Florida", label: "Florida", abbr: "FL" },
] as const;

export const checkoutTimelineSteps: CheckoutTimelineStep[] = [
  {
    label: "Order Received",
    description:
      "Your order has been received and is being reviewed by our formation team.",
    duration: "Immediate",
  },
  {
    label: "Documents Prepared",
    description:
      "We prepare your Articles of Organization/Incorporation, operating agreement, and nominee paperwork.",
    duration: "1 business day",
  },
  {
    label: "Filed with State",
    description:
      "Your entity formation documents are filed with the state. Standard processing: 3-5 business days.",
    duration: "3-5 business days",
  },
  {
    label: "Entity Confirmed",
    description:
      "State confirms your entity. We set up registered agent, nominees (Gold), and offshore storage (Gold).",
    duration: "Same day as state confirmation",
  },
  {
    label: "Documents Delivered",
    description:
      "You receive your formation package: Articles of Organization, custom operating agreement, corporate records & minute book, and your bank account opening document package.",
    duration: "1-2 business days after confirmation",
  },
];

export const checkoutTrustSignals = [
  { icon: "Lock", value: "256-bit", label: "SSL Encryption" },
  { icon: "Shield", value: "PCI", label: "Compliant" },
  { icon: "RefreshCcw", value: "30-Day", label: "Money-Back Guarantee" },
  { icon: "Phone", value: "Live", label: "Support Available" },
];
