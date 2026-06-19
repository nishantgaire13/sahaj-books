import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SahajBooks. Free 15-minute consultation with an ACCA qualified accountant.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
