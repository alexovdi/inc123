import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Formation Packages — All-Inclusive LLC & Corporation Pricing | Incorporate123",
  description:
    "Browse all Incorporate123 formation packages. All-inclusive pricing for Wyoming, Nevada, California, and Florida LLCs and Corporations. No hidden fees.",
  alternates: { canonical: "https://incorporate123.co/packages" },
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
