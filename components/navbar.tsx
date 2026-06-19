"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "./logo"
import { useIsMobile } from "@/hooks/use-mobile"

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const isLightPage = pathname === "/contact" || pathname === "/about" || pathname === "/pricing" || pathname === "/privacy" || pathname === "/terms" || pathname?.startsWith("/services/")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    if (isLightPage) setScrolled(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isLightPage])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const isDark = !scrolled && !isLightPage

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s",
        background: scrolled || isLightPage || menuOpen ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled || isLightPage ? "blur(16px)" : "none",
        borderBottom: scrolled || isLightPage ? "1px solid #e8e8e4" : "none",
        boxShadow: scrolled || isLightPage ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
      }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 64px",
          height: "64px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link href="/" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
            <Logo size={32} variant={isDark && !menuOpen ? "light" : "dark"} />
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <ul style={{ display: "flex", alignItems: "center", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "14px", fontWeight: 500,
                      color: isDark ? "rgba(255,255,255,0.7)" : "#6b6b6b",
                      textDecoration: "none",
                      position: "relative", paddingBottom: "4px",
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
          )}

          {!isMobile && (
            <Link
              href="/contact"
              style={{
                fontSize: "14px", fontWeight: 700, color: "white",
                background: "#6abf47", padding: "10px 24px",
                borderRadius: "10px", textDecoration: "none",
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
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "8px", display: "flex", flexDirection: "column",
                gap: "5px", alignItems: "center", justifyContent: "center",
              }}
              aria-label="Toggle menu"
            >
              <span style={{
                display: "block", width: "22px", height: "2px",
                background: menuOpen || !isDark ? "#1a3318" : "white",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }} />
              <span style={{
                display: "block", width: "22px", height: "2px",
                background: menuOpen || !isDark ? "#1a3318" : "white",
                borderRadius: "2px",
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block", width: "22px", height: "2px",
                background: menuOpen || !isDark ? "#1a3318" : "white",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobile && menuOpen && (
        <div style={{
          position: "fixed", top: "64px", left: 0, right: 0, bottom: 0,
          background: "white", zIndex: 49,
          display: "flex", flexDirection: "column",
          padding: "32px 20px",
          overflowY: "auto",
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "32px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "22px", fontWeight: 600,
                  color: "#111", textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid #f0f0f0",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                {link.label}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#6abf47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9h10M9 4l5 5-5 5" />
                </svg>
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block", textAlign: "center",
              background: "#6abf47", color: "white",
              fontWeight: 700, fontSize: "16px",
              padding: "16px", borderRadius: "12px",
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>

          <div style={{ marginTop: "auto", paddingTop: "32px" }}>
            <p style={{ fontSize: "12px", color: "#aaa", textAlign: "center" }}>ACCA Qualified · Based in Kathmandu</p>
          </div>
        </div>
      )}
    </>
  )
}
