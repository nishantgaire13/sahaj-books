import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Meet the ACCA qualified team behind SahajBooks — UK accounting handled remotely from Kathmandu.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
