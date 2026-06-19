import type { Metadata } from "next";
import { Suspense } from "react";
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
        {/* Suspense required: usePathname() in ScrollToTop needs the navigation
            context which isn't available during static generation of /_not-found
            and /_global-error pages without a Suspense boundary */}
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        {children}
      </body>
    </html>
  );
}