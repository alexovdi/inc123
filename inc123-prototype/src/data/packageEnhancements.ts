/* ═══════════════════════════════════════════════════════════════════════════
   Package Enhancements
   Two enhancement layers for package pages that sit on top of tierContent:

     1. getTransactionalFaqs(tier, state, renewal)
        → 4 buying-objection FAQs (refund, crypto, timeline, renewal details)
        → Merged with state×tier educational FAQs at render time

     2. getValueComparison(tier, state, formationPrice, renewal)
        → Gold-only: "Incorporate123 Gold vs assembled elsewhere" price block
        → Returns null for Bronze and Silver

   Pricing comes from the caller so we never duplicate canonical numbers from
   packages.ts.
   ═══════════════════════════════════════════════════════════════════════════ */

import type { TierLevel } from "@/lib/types";
import type { TierFaq } from "@/data/tierContent";

/* ------------------------------------------------
   1. Transactional FAQs (all 8 package pages)
   ------------------------------------------------ */

export function getTransactionalFaqs({
  tier,
  state,
  renewal,
}: {
  tier: TierLevel;
  state: string;
  renewal: number;
}): TierFaq[] {
  const isGold = tier === "gold";
  const isBronze = tier === "bronze";
  const isForeignReg = state === "California" || state === "Florida";

  const renewalIncludes = (() => {
    if (isBronze) {
      return "registered agent service, annual report filing (including state fees), and corporate records maintenance";
    }
    if (isGold) {
      return "registered agent service, annual report filing (including state fees), year-round nominee maintenance on all public filings, offshore records custodian, and corporate minutes updates";
    }
    return "registered agent service, annual report filing (including state fees), virtual office address, weekly mail forwarding, and corporate records maintenance";
  })();

  const renewalFaq: TierFaq = {
    id: `tx-${tier}-${state.toLowerCase()}-renewal`,
    question: `What's included in the $${renewal} annual renewal?`,
    answer: isForeignReg
      ? `Everything needed to maintain your entity and foreign registration: ${renewalIncludes}, plus the ${state} foreign registration renewal and registered agent. One payment covers both states. Note: this is separate from ${state}'s annual government fees ($800 CA franchise tax / $138.75 FL annual report) which are paid directly to the state.`
      : `Everything needed to maintain your entity: ${renewalIncludes}. One payment, all services. No surprise fees at renewal time.`,
  };

  const refundFaq: TierFaq = {
    id: `tx-${tier}-${state.toLowerCase()}-refund`,
    question: "What's your refund policy?",
    answer:
      "30-day money-back guarantee. If you're not satisfied within 30 days of your order, we refund your formation fee in full. State filing fees already paid to the Secretary of State are non-refundable — they belong to the state, not us — but everything else is refunded. No questions asked.",
  };

  const cryptoFaq: TierFaq = {
    id: `tx-${tier}-${state.toLowerCase()}-crypto`,
    question: "Can I pay with cryptocurrency?",
    answer:
      "Yes. We accept Bitcoin, Ethereum, XRP, Litecoin, and Monero for both formation and annual renewal payments. For privacy-conscious clients this means your payment method is also private from the first transaction — a surprising number of competitors still refuse crypto.",
  };

  const timelineFaq: TierFaq = {
    id: `tx-${tier}-${state.toLowerCase()}-timeline`,
    question: "How long does formation take?",
    answer: isForeignReg
      ? `Standard Wyoming formation takes 5–7 business days. ${state} foreign registration adds 3–5 additional business days depending on ${state}'s current processing times. Total order-to-fully-registered: typically 8–12 business days. Expedited options are available — contact us for current timelines.`
      : `Standard ${state} formation takes 5–7 business days from order to complete document package in hand. Expedited 24-hour filing is available as an add-on ($150). After filing, your full package — articles, operating agreement${isGold ? ", nominee confirmations" : ""}, EIN, and banking resolutions — is delivered to your client portal.`,
  };

  return [renewalFaq, refundFaq, cryptoFaq, timelineFaq];
}

/* ------------------------------------------------
   2. Value Comparison Callout (Gold tier only)
   ------------------------------------------------ */

export interface ValueComparisonLine {
  label: string;
  ours: string | null; // "Included" or null for omitted
  theirs: string; // price range "$150–$299"
}

export interface ValueComparison {
  heading: string;
  ourTotal: string;
  ourRenewal: string;
  theirTotalLow: string;
  theirTotalHigh: string;
  lines: ValueComparisonLine[];
  bottomLine: string;
}

export function getValueComparison(
  tier: TierLevel,
  state: string,
  formation: number,
  renewal: number,
): ValueComparison | null {
  if (tier !== "gold") return null;

  const isForeignReg = state === "California" || state === "Florida";
  const packageLabel = isForeignReg
    ? `${state} Private`
    : `${state} Gold (Private)`;

  const commonLines: ValueComparisonLine[] = [
    {
      label: "LLC or Corporation formation",
      ours: "Included",
      theirs: "$0–$299 (budget provider)",
    },
    {
      label: "Registered agent (first year)",
      ours: "Included",
      theirs: "$150–$299",
    },
    {
      label: "EIN filing",
      ours: "Included",
      theirs: "$50–$159",
    },
    {
      label: "Custom operating agreement",
      ours: "Included",
      theirs: "$99–$199",
    },
    {
      label: "Year-round nominee services",
      ours: "Included",
      theirs: "$400–$1,200/yr",
    },
    {
      label: "Offshore records storage",
      ours: "Included",
      theirs: "Not offered domestically",
    },
    {
      label: "Corporate records & minutes",
      ours: "Included",
      theirs: "$125–$300 setup",
    },
    {
      label: "State filing fees",
      ours: "Included",
      theirs: state === "Wyoming" ? "$100" : "$425",
    },
  ];

  const foreignRegLine: ValueComparisonLine | null = isForeignReg
    ? {
        label: `${state} foreign registration + agent`,
        ours: "Included",
        theirs: "$350–$650",
      }
    : null;

  const lines = foreignRegLine ? [...commonLines, foreignRegLine] : commonLines;

  const theirTotalLow =
    state === "Wyoming" ? 1174 : state === "Nevada" ? 1499 : 1524;
  const theirTotalHigh = isForeignReg ? 3782 : 3182;

  return {
    heading: "What this package is really worth",
    ourTotal: `$${formation.toLocaleString()}`,
    ourRenewal: `$${renewal}/yr`,
    theirTotalLow: `$${theirTotalLow.toLocaleString()}`,
    theirTotalHigh: `$${theirTotalHigh.toLocaleString()}`,
    lines,
    bottomLine: isForeignReg
      ? `${packageLabel}: one price, formation + ${state} registration + nominees + offshore records. Assembled elsewhere: $${theirTotalLow.toLocaleString()}–$${theirTotalHigh.toLocaleString()} Year 1, and no domestic provider bundles offshore records.`
      : `${packageLabel}: one price, everything above included. Assembled elsewhere: $${theirTotalLow.toLocaleString()}–$${theirTotalHigh.toLocaleString()} Year 1, and no domestic provider includes offshore records storage.`,
  };
}
