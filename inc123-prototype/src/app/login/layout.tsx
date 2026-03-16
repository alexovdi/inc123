import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Login | Incorporate123",
  description:
    "Log in to your Incorporate123 client dashboard to access documents, compliance status, and account details.",
  robots: { index: false, follow: false },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
