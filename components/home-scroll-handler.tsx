"use client"

import { useEffect } from "react"

export default function HomeScrollHandler() {
  useEffect(() => {
    const pending = sessionStorage.getItem("pendingScroll")
    if (pending === "services") {
      sessionStorage.removeItem("pendingScroll")
      // Wait for ScrollToTop (80ms) + page animations to settle
      const id = setTimeout(() => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
      }, 650)
      return () => clearTimeout(id)
    }
  }, [])
  return null
}
