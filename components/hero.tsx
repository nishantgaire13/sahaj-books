"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

const avatars = [
  { letter: "J", bg: "#2d7a4f" },
  { letter: "M", bg: "#4a9e6b" },
  { letter: "S", bg: "#6abf47" },
  { letter: "R", bg: "#1e5c3a" },
]

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #1a3318 0%, #2d5a1b 55%, #5aaa28 100%)",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18, pointerEvents: "none" }}>
        <defs>
          <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="rgba(168,224,112,0.7)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)">
          <animate attributeName="x" from="0" to="32" dur="8s" repeatCount="indefinite" />
        </rect>
      </svg>

      <div style={{ position: "absolute", top: "20%", right: "25%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(106,191,71,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        padding: isMobile ? "100px 20px 60px" : "140px 64px 80px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
        gap: isMobile ? "48px" : "80px",
        alignItems: "center",
      }}>

        {/* LEFT */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: isMobile ? "clamp(36px, 9vw, 52px)" : "clamp(42px, 4.5vw, 64px)",
            color: "white", lineHeight: 1.1,
            letterSpacing: "-0.5px", marginBottom: "20px",
          }}>
            Accounting and Finance<br />
            Solutions to<br />
            <span style={{ color: "#a8e070" }}>Your Business</span>
          </h1>

          <p style={{
            fontSize: isMobile ? "15px" : "17px",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.55)",
            marginBottom: "36px",
            maxWidth: isMobile ? "100%" : "460px",
          }}>
            Clean books, compliant filings, zero surprises. We handle your UK accounting end to end so you can focus entirely on growing your business.
          </p>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "#6abf47", color: "white",
                fontWeight: 700, fontSize: "15px",
                padding: "15px 36px", borderRadius: "12px",
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(106,191,71,0.3)",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#1a3318"
                ;(e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)"
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#6abf47"
                ;(e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(106,191,71,0.3)"
              }}
            >
              Contact Us
            </Link>
          </motion.div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "36px" }}>
            <div style={{ display: "flex" }}>
              {avatars.map((a, i) => (
                <motion.div
                  key={a.letter}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  style={{
                    width: "32px", height: "32px", borderRadius: "50%",
                    border: "2px solid #1a3318", background: a.bg,
                    marginLeft: i === 0 ? 0 : -8,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "12px", fontWeight: 700, color: "white",
                    position: "relative", zIndex: 4 - i,
                  }}
                >
                  {a.letter}
                </motion.div>
              ))}
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              Trusted by UK businesses
            </motion.span>
          </div>
        </motion.div>

        {/* RIGHT — dashboard (hidden on mobile) */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            style={{ position: "relative", paddingLeft: "24px" }}
          >
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ position: "relative" }}>
              {/* Floating VAT card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{ position: "absolute", top: "-24px", right: "-16px", background: "white", borderRadius: "16px", boxShadow: "0 16px 48px rgba(0,0,0,0.25)", padding: "14px 18px", zIndex: 20, display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#f0fae8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px" }}>📋</div>
                <div>
                  <div style={{ fontSize: "10px", color: "#6b6b6b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>VAT Return</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#111" }}>£4,280</div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47" }}>Filed on time</div>
                </div>
              </motion.div>

              {/* Floating compliance card */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                style={{ position: "absolute", bottom: "-20px", left: "-8px", background: "white", borderRadius: "16px", boxShadow: "0 16px 48px rgba(0,0,0,0.25)", padding: "14px 18px", zIndex: 20 }}
              >
                <div style={{ fontSize: "10px", color: "#6b6b6b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>Compliance Score</div>
                <div style={{ fontSize: "22px", fontWeight: 700, color: "#111" }}>98.6%</div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47" }}>All filings up to date</div>
              </motion.div>

              {/* Main dashboard card */}
              <div style={{ background: "white", borderRadius: "20px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.4)", marginTop: "24px" }}>
                <div style={{ background: "#142e14", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#ffbd2e" }} />
                    <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28c840" }} />
                  </div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.12em" }}>SAHAJBOOKS DASHBOARD</div>
                  <div style={{ width: "48px" }} />
                </div>

                <div style={{ display: "flex", minHeight: "390px" }}>
                  <div style={{ width: "152px", background: "#142e14", padding: "14px 0", flexShrink: 0 }}>
                    <div style={{ padding: "0 14px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "6px" }}>
                      <div style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>SahajBooks</div>
                    </div>
                    {["Overview", "Bookkeeping", "VAT Returns", "Payroll", "Tax Returns", "Reports"].map((item, i) => (
                      <div key={item} style={{ padding: "8px 14px", fontSize: "11px", fontWeight: 500, color: i === 0 ? "#6abf47" : "rgba(255,255,255,0.3)", background: i === 0 ? "rgba(106,191,71,0.08)" : "transparent", borderLeft: `2px solid ${i === 0 ? "#6abf47" : "transparent"}` }}>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div style={{ flex: 1, background: "#f8f9f6", padding: "14px", overflow: "hidden" }}>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#111", marginBottom: "10px" }}>Financial Overview</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "7px", marginBottom: "10px" }}>
                      {[
                        { label: "Revenue", value: "£48.2k", change: "12.4%", up: true },
                        { label: "Expenses", value: "£19.6k", change: "3.1%", up: false },
                        { label: "Profit", value: "£28.6k", change: "18.2%", up: true },
                      ].map((s) => (
                        <div key={s.label} style={{ background: "white", borderRadius: "9px", padding: "9px", border: "1px solid #e8e8e4" }}>
                          <div style={{ fontSize: "8px", color: "#6b6b6b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "3px" }}>{s.label}</div>
                          <div style={{ fontSize: "15px", fontWeight: 600, color: "#111", lineHeight: 1, marginBottom: "3px" }}>{s.value}</div>
                          <div style={{ fontSize: "9px", fontWeight: 700, color: s.up ? "#6abf47" : "#f5a623" }}>↑ {s.change}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: "white", borderRadius: "9px", border: "1px solid #e8e8e4", padding: "9px", marginBottom: "9px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                        <span style={{ fontSize: "10px", fontWeight: 700, color: "#111" }}>Monthly Revenue</span>
                        <span style={{ fontSize: "9px", color: "#6b6b6b", background: "#f5f5f0", padding: "2px 7px", borderRadius: "4px" }}>2024</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "48px" }}>
                        {[45, 58, 40, 72, 55, 65, 88, 78, 60, 95, 82, 100].map((h, i) => (
                          <div key={i} style={{ flex: 1, borderRadius: "2px 2px 0 0", height: `${h}%`, background: h > 80 ? "#6abf47" : h > 60 ? "#a8d990" : "#e8e8e4" }} />
                        ))}
                      </div>
                    </div>

                    <div style={{ background: "white", borderRadius: "9px", border: "1px solid #e8e8e4", overflow: "hidden" }}>
                      <div style={{ padding: "7px 11px", borderBottom: "1px solid #e8e8e4", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "10px", fontWeight: 700, color: "#111" }}>Recent Activity</span>
                        <span style={{ fontSize: "9px", fontWeight: 600, color: "#6abf47" }}>View all</span>
                      </div>
                      {[
                        { icon: "📋", name: "VAT Q3 Filed", sub: "HMRC · Today", val: "On time", pos: true },
                        { icon: "💼", name: "Payroll Nov", sub: "RTI Submitted", val: "£6,240", pos: true },
                        { icon: "📊", name: "CT600 Due", sub: "In 14 days", val: "Preparing", pos: false },
                      ].map((tx) => (
                        <div key={tx.name} style={{ padding: "7px 11px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e8e8e4" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <div style={{ width: "24px", height: "24px", borderRadius: "7px", background: "#f0fae8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px" }}>{tx.icon}</div>
                            <div>
                              <div style={{ fontSize: "10px", fontWeight: 600, color: "#111" }}>{tx.name}</div>
                              <div style={{ fontSize: "8px", color: "#6b6b6b" }}>{tx.sub}</div>
                            </div>
                          </div>
                          <div style={{ fontSize: "10px", fontWeight: 700, color: tx.pos ? "#6abf47" : "#f5a623" }}>{tx.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

      </div>
    </section>
  )
}
