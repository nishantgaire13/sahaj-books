"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()
  useEffect(() => {
    // Delay slightly so mobile menu overflow unlock (body.style.overflow = "")
    // completes before we scroll — avoids scroll being blocked on mobile browsers
    const id = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" })
    }, 80)
    return () => clearTimeout(id)
  }, [pathname])
  return null
}
