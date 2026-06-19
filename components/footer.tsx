"use client"

import Link from "next/link"
import Logo from "./logo"

const footerLinks = {
  Services: [
    { label: "Payroll & RTI", href: "/#services" },
    { label: "Bookkeeping & VAT", href: "/#services" },
    { label: "Corporation Tax", href: "/#services" },
    { label: "Year-End Accounts", href: "/#services" },
    { label: "Self Assessment", href: "/#services" },
    { label: "CIS Scheme", href: "/#services" },
    { label: "Management Accounts", href: "/#services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "How it Works", href: "/#solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/privacy" },
    { label: "GDPR", href: "/privacy" },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: "#0f1f0f", paddingTop: "80px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "60px",
          paddingBottom: "64px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          {/* Brand */}
          <div>
            <Logo size={36} variant="light" />
            <p style={{
              fontSize: "14px", color: "rgba(255,255,255,0.35)",
              lineHeight: 1.75, marginTop: "16px",
              maxWidth: "260px",
            }}>
              Clean books. Zero stress. UK accounting outsourcing handled remotely from Kathmandu, Nepal by an ACCA qualified team.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
              {[
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              ].map((s) => (
                
                <a  
                key={s.label}
                  href="#"
                  style={{
                    width: "36px", height: "36px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "rgba(106,191,71,0.15)"
                    el.style.borderColor = "rgba(106,191,71,0.3)"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "rgba(255,255,255,0.05)"
                    el.style.borderColor = "rgba(255,255,255,0.08)"
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)" xmlns="http://www.w3.org/2000/svg">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div style={{
                fontSize: "11px", fontWeight: 700,
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase", letterSpacing: "0.1em",
                marginBottom: "20px",
              }}>
                {category}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.4)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "white"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "28px 0",
        }}>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)" }}>
            © 2025 SahajBooks. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Cookies", href: "/privacy" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)"}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}