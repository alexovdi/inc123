import type { CheckoutTimelineStep } from "@/lib/types";

export const checkoutTimelineSteps: CheckoutTimelineStep[] = [
  {
    label: "Order Received",
    description: "Your order has been received and is being reviewed by our formation team.",
    duration: "Immediate",
  },
  {
    label: "Documents Prepared",
    description: "We prepare your Articles of Organization/Incorporation, operating agreement, and nominee paperwork.",
    duration: "1 business day",
  },
  {
    label: "Filed with State",
    description: "Your entity formation documents are filed with the state. Standard processing: 3-5 business days.",
    duration: "3-5 business days",
  },
  {
    label: "Entity Confirmed",
    description: "State confirms your entity. We set up registered agent, nominees (Gold), and offshore storage (Gold).",
    duration: "Same day as state confirmation",
  },
  {
    label: "Documents Delivered",
    description: "You receive your formation package: Articles, Certificate of Good Standing, operating agreement, corporate seal, and minute book.",
    duration: "1-2 business days after confirmation",
  },
];

export const checkoutTrustSignals = [
  { icon: "Lock", value: "256-bit", label: "SSL Encryption" },
  { icon: "Shield", value: "PCI", label: "Compliant" },
  { icon: "RefreshCcw", value: "30-Day", label: "Money-Back Guarantee" },
  { icon: "Phone", value: "Live", label: "Support Available" },
];
