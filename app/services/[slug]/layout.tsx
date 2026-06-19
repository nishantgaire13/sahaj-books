import type { Metadata } from "next"

const slugTitles: Record<string, string> = {
  "payroll-rti": "Payroll & RTI Filing",
  "bookkeeping-vat": "Bookkeeping & VAT Returns",
  "corporation-tax": "Corporation Tax CT600",
  "year-end-accounts": "Year-End Accounts",
  "self-assessment": "Self Assessment",
  "cis-scheme": "CIS Construction Scheme",
  "management-accounts": "Management Accounts",
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const title = slugTitles[slug] ?? "Services"
  return {
    title,
    description: `SahajBooks handles ${title} for UK businesses — ACCA qualified, fixed-fee, remote delivery.`,
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
