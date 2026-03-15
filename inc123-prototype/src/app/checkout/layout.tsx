import type { Metadata } from "next";
import { CheckoutLayoutClient } from "./CheckoutLayoutClient";

export const metadata: Metadata = {
  title: "Checkout | Incorporate123",
  description: "Complete your business formation package purchase.",
  robots: { index: false, follow: false },
};

export default function CheckoutAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CheckoutLayoutClient>{children}</CheckoutLayoutClient>;
}
