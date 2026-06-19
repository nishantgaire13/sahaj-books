"use client"

import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const rows = [
  { feature: "Pricing", ours: "40–60% below UK market", theirs: "£200–500+/month" },
  { feature: "Turnaround time", ours: "48–72 hours", theirs: "1–3 weeks" },
  { feature: "Dedicated contact", ours: "Always", theirs: "Rotates" },
  { feature: "MTD compliant", ours: "Full MTD support", theirs: "Yes" },
  { feature: "ACCA qualified team", ours: "Yes", theirs: "Varies" },
  { feature: "All 7 services", ours: "Under one roof", theirs: "Often split" },
  { feature: "Response time", ours: "Same day", theirs: "2–5 days" },
]

function Check() {
  return (
    <div style={{
      width: "20px", height: "20px", borderRadius: "50%",
      background: "rgba(106,191,71,0.15)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#6abf47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 5l2 2 4-4"/>
      </svg>
    </div>
  )
}

function Cross() {
  return (
    <div style={{
      width: "20px", height: "20px", borderRadius: "50%",
      background: "rgba(224,92,92,0.1)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#e05c5c" strokeWidth="2" strokeLinecap="round">
        <path d="M3 3l4 4M7 3l-4 4"/>
      </svg>
    </div>
  )
}

export default function Comparison() {
  const isMobile = useIsMobile()

  return (
    <section style={{ background: "#f5f5f0", padding: isMobile ? "60px 0" : "120px 0" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 64px" }}>

        <div style={{ textAlign: "center", marginBottom: isMobile ? "36px" : "64px" }}>
          <div style={{
            fontSize: "13px", fontWeight: 700, color: "#6abf47",
            textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px",
          }}>
            Why SahajBooks
          </div>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(34px, 4vw, 50px)",
            color: "#111", lineHeight: 1.1,
            letterSpacing: "-0.5px", marginBottom: "16px",
          }}>
            The better way to handle<br />your UK compliance
          </h2>
          <p style={{
            fontSize: "16px", color: "#6b6b6b",
            lineHeight: 1.7, maxWidth: "480px", margin: "0 auto",
          }}>
            One setup, no hidden fees, dedicated contact. Everything you need without overpaying a UK firm.
          </p>
        </div>

        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {rows.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{ background: "white", borderRadius: "14px", padding: "16px 18px", border: "1px solid #e8e8e4" }}
              >
                <div style={{ fontSize: "10px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>{row.feature}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Check />
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a3318" }}>{row.ours}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Cross />
                    <span style={{ fontSize: "12px", color: "#aaa" }}>{row.theirs}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid #e8e8e4",
              boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              background: "#1a3318",
            }}>
              <div style={{
                padding: "18px 28px", fontSize: "12px", fontWeight: 700,
                color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em",
              }}>
                Feature
              </div>
              <div style={{
                padding: "18px 28px", fontSize: "12px", fontWeight: 700,
                color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.08em",
                background: "rgba(106,191,71,0.1)",
                display: "flex", alignItems: "center", gap: "8px",
              }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47" }} />
                SahajBooks
              </div>
              <div style={{
                padding: "18px 28px", fontSize: "12px", fontWeight: 700,
                color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em",
              }}>
                Typical UK Firm
              </div>
            </div>

            {rows.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                  borderBottom: i < rows.length - 1 ? "1px solid #e8e8e4" : "none",
                  background: i % 2 === 0 ? "white" : "#fafafa",
                }}
              >
                <div style={{
                  padding: "16px 28px",
                  fontSize: "14px", fontWeight: 600, color: "#111",
                  display: "flex", alignItems: "center",
                }}>
                  {row.feature}
                </div>
                <div style={{
                  padding: "16px 28px",
                  background: i % 2 === 0 ? "rgba(106,191,71,0.03)" : "rgba(106,191,71,0.05)",
                  display: "flex", alignItems: "center", gap: "10px",
                }}>
                  <Check />
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#1a3318" }}>{row.ours}</span>
                </div>
                <div style={{
                  padding: "16px 28px",
                  display: "flex", alignItems: "center", gap: "10px",
                }}>
                  <Cross />
                  <span style={{ fontSize: "14px", color: "#6b6b6b" }}>{row.theirs}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <a
            href="/contact"
            style={{
              display: isMobile ? "block" : "inline-block",
              background: "#1a3318", color: "white",
              fontWeight: 700, fontSize: "15px",
              padding: "15px 36px", borderRadius: "12px",
              textDecoration: "none",
              transition: "all 0.2s",
              width: isMobile ? "100%" : undefined,
              boxSizing: isMobile ? "border-box" : undefined,
              textAlign: "center",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "#6abf47"
              el.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "#1a3318"
              el.style.transform = "translateY(0)"
            }}
          >
            Get started with SahajBooks
          </a>
          <p style={{ fontSize: "13px", color: "#aaa", marginTop: "12px" }}>
            No contract. No setup fee. Just clean books.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
