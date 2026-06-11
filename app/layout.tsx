import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SahajBooks — Accounting and Finance Solutions",
  description: "UK payroll, bookkeeping, VAT and tax handled remotely by an ACCA qualified team.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden", margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}