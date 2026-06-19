"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { num: 50, suffix: "+", label: "UK businesses supported", sub: "Across payroll, VAT and tax" },
  { num: 99, suffix: "%", label: "On-time filing rate", sub: "Across all HMRC submissions" },
  { num: 40, suffix: "%", label: "Below UK market rates", sub: "Average saving vs local firms" },
  { num: 7, suffix: "", label: "Core services", sub: "Under one monthly engagement" },
]

const filings = [
  { label: "Self Assessment SA100", detail: "Filed 14 Jan 2025", status: "On time" },
  { label: "Corporation Tax CT600", detail: "Filed 31 Dec 2024", status: "On time" },
  { label: "Year-End Accounts", detail: "Companies House", status: "Filed" },
]

export default function Stats() {
  const isMobile = useIsMobile()

  return (
    <section style={{ background: "#ffffff", padding: isMobile ? "60px 0" : "120px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 64px" }}>

        {/* Top label + heading centered */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "80px" }}>
          <div style={{
            fontSize: "13px", fontWeight: 700, color: "#6abf47",
            textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "14px",
          }}>
            By the numbers
          </div>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: isMobile ? "28px" : "clamp(34px, 4vw, 52px)",
            color: "#111", lineHeight: 1.1,
            letterSpacing: "-0.5px", marginBottom: "12px",
          }}>
            Built for UK businesses,<br />delivered from Kathmandu
          </h2>
          <p style={{
            fontSize: isMobile ? "14px" : "16px", color: "#6b6b6b",
            lineHeight: 1.7, maxWidth: "480px", margin: "0 auto",
          }}>
            Remote delivery at a fraction of UK firm prices, with the same accuracy and compliance standards your business deserves.
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: "1px", background: "#e8e8e4",
          borderRadius: "20px", overflow: "hidden",
          border: "1px solid #e8e8e4",
          marginBottom: isMobile ? "20px" : "64px",
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ backgroundColor: "#f0fae8" }}
              style={{
                background: "white",
                padding: isMobile ? "28px 16px" : "40px 32px",
                textAlign: "center",
              }}
            >
              <div style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: isMobile ? "44px" : "56px", color: "#1a3318",
                lineHeight: 1, marginBottom: "10px",
              }}>
                <CountUp target={stat.num} suffix={stat.suffix} />
              </div>
              <div style={{
                fontSize: isMobile ? "12px" : "14px", fontWeight: 700,
                color: "#111", marginBottom: "3px",
              }}>
                {stat.label}
              </div>
              <div style={{ fontSize: isMobile ? "11px" : "12px", color: "#aaa", lineHeight: 1.4 }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom — mobile version */}
        {isMobile && (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2px" }}>
              Recent filings
            </div>
            {filings.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ background: "#f5f5f0", borderRadius: "12px", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #e8e8e4" }}
              >
                <div>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "3px" }}>{f.label}</div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#111" }}>{f.detail}</div>
                </div>
                <div style={{ background: "#1a3318", borderRadius: "100px", padding: "4px 12px", fontSize: "10px", fontWeight: 700, color: "#6abf47", whiteSpace: "nowrap" as const }}>
                  {f.status}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ background: "linear-gradient(135deg, #1a3318 0%, #2d5a1b 100%)", borderRadius: "16px", padding: "22px", marginTop: "4px" }}
            >
              <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Average client saving</div>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "44px", color: "white", lineHeight: 1, marginBottom: "4px" }}>£2,400</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "20px" }}>Per year vs typical UK firm</div>

              <div style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>SahajBooks</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#6abf47" }}>£1,200/yr</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "100px", height: "5px", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "35%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{ height: "100%", background: "#6abf47", borderRadius: "100px" }}
                  />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>Typical UK firm</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>£3,600/yr</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "100px", height: "5px", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ height: "100%", background: "rgba(255,255,255,0.2)", borderRadius: "100px" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Bottom — two columns (desktop only) */}
        {!isMobile && <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "32px", alignItems: "stretch",
        }}>

          {/* Left — filing cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{
              fontSize: "12px", fontWeight: 700, color: "#aaa",
              textTransform: "uppercase", letterSpacing: "0.1em",
              marginBottom: "4px",
            }}>
              Recent filings
            </div>
            {filings.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                style={{
                  background: "#f5f5f0",
                  borderRadius: "14px", padding: "18px 22px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  border: "1px solid #e8e8e4",
                  cursor: "default",
                }}
              >
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "5px" }}>{f.label}</div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#111" }}>{f.detail}</div>
                </div>
                <div style={{
                  background: "#1a3318",
                  borderRadius: "100px", padding: "5px 14px",
                  fontSize: "11px", fontWeight: 700, color: "#6abf47",
                  whiteSpace: "nowrap",
                }}>
                  {f.status}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — saving card + trust */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{
              fontSize: "12px", fontWeight: 700, color: "#aaa",
              textTransform: "uppercase", letterSpacing: "0.1em",
              marginBottom: "4px",
            }}>
              What you save
            </div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                background: "linear-gradient(135deg, #1a3318 0%, #2d5a1b 100%)",
                borderRadius: "16px", padding: "32px",
                flex: 1,
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>Average client saving</div>
              <div style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "56px", color: "white",
                lineHeight: 1, marginBottom: "8px",
              }}>
                £2,400
              </div>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "28px" }}>
                Per year vs typical UK accounting firm
              </div>

              {/* Bar comparison */}
              <div style={{ marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>SahajBooks</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#6abf47" }}>£1,200/yr</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "100px", height: "6px", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "35%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{ height: "100%", background: "#6abf47", borderRadius: "100px" }}
                  />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>Typical UK firm</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>£3,600/yr</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "100px", height: "6px", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ height: "100%", background: "rgba(255,255,255,0.2)", borderRadius: "100px" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>}
      </div>
    </section>
  )
}
