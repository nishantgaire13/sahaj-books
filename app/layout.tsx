import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: {
    default: "SahajBooks",
    template: "%s | SahajBooks",
  },
  description: "UK payroll, bookkeeping, VAT and corporation tax handled remotely by an ACCA qualified team based in Kathmandu.",
  openGraph: {
    siteName: "SahajBooks",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden", margin: 0, padding: 0 }}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}