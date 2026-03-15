import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Compare Packages — Wyoming, Nevada, California & Florida Formation | Incorporate123",
  description:
    "Side-by-side comparison of all Incorporate123 formation packages. Gold, Silver, and Bronze tiers across Wyoming, Nevada, California, and Florida. Transparent all-inclusive pricing.",
  alternates: { canonical: "https://incorporate123.co/compare-packages" },
};

export default function ComparePackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
