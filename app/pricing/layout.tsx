import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, fixed-fee pricing for UK payroll, VAT, bookkeeping and corporation tax. No surprises.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
