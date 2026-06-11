"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "./logo"

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isContactPage = pathname === "/contact" || pathname === "/about" || pathname === "/pricing" || pathname === "/privacy" || pathname === "/terms"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    if (isContactPage) setScrolled(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isContactPage])

  const isDark = !scrolled && !isContactPage

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.3s",
      background: scrolled || isContactPage ? "rgba(255,255,255,0.96)" : "transparent",
      backdropFilter: scrolled || isContactPage ? "blur(16px)" : "none",
      borderBottom: scrolled || isContactPage ? "1px solid #e8e8e4" : "none",
      boxShadow: scrolled || isContactPage ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
    }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        padding: "0 64px", height: "68px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo size={36} variant={isDark ? "light" : "dark"} />
        </Link>

        <ul style={{ display: "flex", alignItems: "center", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                style={{
                  fontSize: "14px", fontWeight: 500,
                  color: isDark ? "rgba(255,255,255,0.7)" : "#6b6b6b",
                  textDecoration: "none",
                  position: "relative",
                  paddingBottom: "4px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = isDark ? "white" : "#111"
                  const line = el.querySelector(".nav-line") as HTMLElement
                  if (line) line.style.width = "100%"
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = isDark ? "rgba(255,255,255,0.7)" : "#6b6b6b"
                  const line = el.querySelector(".nav-line") as HTMLElement
                  if (line) line.style.width = "0%"
                }}
              >
                {link.label}
                <span className="nav-line" style={{
                  position: "absolute", bottom: 0, left: 0,
                  height: "1.5px", width: "0%",
                  background: "#6abf47",
                  transition: "width 0.25s ease",
                  display: "block",
                }} />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          style={{
            fontSize: "14px", fontWeight: 700,
            color: "white",
            background: "#6abf47",
            padding: "10px 24px",
            borderRadius: "10px",
            textDecoration: "none",
            transition: "all 0.25s",
            boxShadow: "0 2px 12px rgba(106,191,71,0.3)",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = "#1a3318"
            el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)"
            el.style.transform = "translateY(-1px)"
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = "#6abf47"
            el.style.boxShadow = "0 2px 12px rgba(106,191,71,0.3)"
            el.style.transform = "translateY(0)"
          }}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  )
}