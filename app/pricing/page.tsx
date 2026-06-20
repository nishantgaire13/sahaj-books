"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useIsMobile } from "@/hooks/use-mobile"

const ease = [0.22, 1, 0.36, 1] as const

/* ───────────────────────── Icons ───────────────────────── */

function Icon({ name, size = 22, color = "#4a8a2a", stroke = 1.8 }: { name: string; size?: number; color?: string; stroke?: number }) {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: color, strokeWidth: stroke, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  }
  switch (name) {
    case "percent":
      return <svg {...common}><line x1="19" y1="5" x2="5" y2="19" /><circle cx="7" cy="7" r="2.2" /><circle cx="17" cy="17" r="2.2" /></svg>
    case "book":
      return <svg {...common}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z" /><path d="M4 19a2 2 0 0 1 2-2h13" /></svg>
    case "users":
      return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    case "building":
      return <svg {...common}><path d="M5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" /><path d="M16 9h3a1 1 0 0 1 1 1v11" /><path d="M3 21h18" /><path d="M9 7h2M9 11h2M9 15h2" /></svg>
    case "user":
      return <svg {...common}><circle cx="12" cy="8" r="4" /><path d="M5 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1" /></svg>
    case "refresh":
      return <svg {...common}><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /></svg>
    case "shield":
      return <svg {...common}><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /></svg>
    case "phone":
      return <svg {...common}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" /></svg>
    case "calendar":
      return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>
    case "info":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
    case "arrow":
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    case "check":
      return <svg {...common}><path d="M20 6L9 17l-5-5" /></svg>
    case "alert":
      return <svg {...common}><path d="M12 3l9 16H3l9-16z" /><path d="M12 10v4M12 17h.01" /></svg>
    default:
      return null
  }
}

/* ───────────────────────── Data ───────────────────────── */

const services = [
  { name: "VAT Returns", price: "£150", period: "per quarter", monthly: "£50/mo", icon: "percent", tag: "Quarterly", desc: "Full MTD-compliant VAT return prepared and filed with HMRC every quarter." },
  { name: "Bookkeeping", price: "£100", period: "per month", monthly: "£100/mo", icon: "book", tag: "Monthly", desc: "Accurate financial records maintained and reconciled throughout the year." },
  { name: "Payroll & RTI", price: "£100", period: "per month", monthly: "£100/mo", icon: "users", tag: "Monthly", desc: "Full payroll with RTI submissions to HMRC every pay period." },
  { name: "Company Accounts", price: "£350", period: "per year", monthly: "£29/mo", icon: "building", tag: "Annual", desc: "Statutory accounts and CT600 filed with HMRC and Companies House." },
  { name: "Self Assessment SA100", price: "£200", period: "per return", monthly: "£17/mo", icon: "user", tag: "Annual", desc: "Complete tax return for sole traders, directors and landlords." },
  { name: "MTD Personal Tax", price: "£100", period: "per quarter", monthly: "£33/mo", icon: "refresh", tag: "Quarterly", desc: "Quarterly MTD submissions for individuals required under the new rules." },
]

const plans = [
  { name: "Starter", price: "£150", desc: "For sole traders and small businesses needing core compliance.", includes: ["Bookkeeping", "VAT Returns (MTD)"], highlight: false },
  { name: "Growth", price: "£279", desc: "For limited companies needing full compliance under one roof.", includes: ["Bookkeeping", "VAT Returns (MTD)", "Payroll and RTI", "Company Accounts"], highlight: true },
  { name: "Scale", price: "£429", desc: "For growing businesses needing every service covered.", includes: ["Bookkeeping", "VAT Returns (MTD)", "Payroll and RTI", "Company Accounts", "Self Assessment SA100", "MTD Personal Tax"], highlight: false },
]

const mtdQuestions = [
  { id: "resident", label: "Are you a UK resident?" },
  { id: "uk_property", label: "Do you receive UK property rental income?" },
  { id: "overseas_property", label: "Do you receive overseas property rental income?" },
  { id: "trust_rental", label: "Do you receive rental income from a trust?" },
  { id: "income", label: "Does your total annual income exceed £60,000?" },
]

/* ───────────────────────── MTD Calculator ───────────────────────── */

function MTDCalculator({ isMobile }: { isMobile: boolean }) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)

  const allAnswered = mtdQuestions.every(q => answers[q.id])
  const isMTDRequired = () =>
    answers["resident"] === "yes" && answers["income"] === "yes" &&
    (answers["uk_property"] === "yes" || answers["overseas_property"] === "yes" || answers["trust_rental"] === "yes")

  return (
    <div style={{ background: "white", borderRadius: "22px", padding: isMobile ? "24px 20px" : "40px", border: "1px solid #e8e8e4", maxWidth: "720px", margin: "0 auto", boxShadow: "0 8px 40px rgba(0,0,0,0.04)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
        {mtdQuestions.map((q, i) => (
          <motion.div key={q.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", background: "#f8f9f6", borderRadius: "14px", padding: isMobile ? "14px 16px" : "16px 20px", border: `1px solid ${answers[q.id] ? "rgba(106,191,71,0.35)" : "#eef0ec"}`, transition: "border-color 0.2s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
              <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "16px", color: "#c2d4ba", flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: 600, color: "#111", lineHeight: 1.35 }}>{q.label}</span>
            </div>
            <div style={{ display: "flex", gap: "6px", flexShrink: 0, background: "white", borderRadius: "10px", padding: "3px", border: "1px solid #eef0ec" }}>
              {["yes", "no"].map((opt) => (
                <button key={opt} onClick={() => { setAnswers({ ...answers, [q.id]: opt }); setShowResult(false) }}
                  style={{ padding: isMobile ? "7px 14px" : "7px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: 700, cursor: "pointer", border: "none", transition: "all 0.15s", background: answers[q.id] === opt ? "#1a3318" : "transparent", color: answers[q.id] === opt ? "white" : "#9a9a9a" }}>
                  {opt === "yes" ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {allAnswered && !showResult && (
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setShowResult(true)}
          style={{ width: "100%", padding: "15px", borderRadius: "13px", background: "#6abf47", color: "#0f2609", fontWeight: 700, fontSize: "15px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          Check my MTD status <Icon name="arrow" color="#0f2609" size={17} />
        </motion.button>
      )}

      {showResult && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          style={{ borderRadius: "16px", padding: "28px 24px", background: isMTDRequired() ? "#1a3318" : "#eef9e3", border: `1px solid ${isMTDRequired() ? "transparent" : "rgba(106,191,71,0.3)"}`, textAlign: "center" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: isMTDRequired() ? "rgba(255,255,255,0.1)" : "white", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
            <Icon name={isMTDRequired() ? "alert" : "check"} color={isMTDRequired() ? "#a8e070" : "#4a8a2a"} size={24} stroke={2.2} />
          </div>
          <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "24px", color: isMTDRequired() ? "white" : "#1a3318", marginBottom: "10px" }}>
            {isMTDRequired() ? "MTD applies to you" : "MTD does not apply yet"}
          </div>
          <p style={{ fontSize: "14px", color: isMTDRequired() ? "rgba(255,255,255,0.7)" : "#5a6b52", lineHeight: 1.65, marginBottom: "18px", maxWidth: "440px", margin: "0 auto 18px" }}>
            {isMTDRequired()
              ? "Based on your answers, you must submit quarterly updates to HMRC under Making Tax Digital for Income Tax from April 2026. We can handle that for you."
              : "Based on your answers, you are not currently required to use MTD for Income Tax. This may change if your qualifying income rises above £60,000."}
          </p>
          <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#6abf47", color: "#0f2609", fontWeight: 700, fontSize: "14px", padding: "12px 26px", borderRadius: "11px", textDecoration: "none" }}>
            {isMTDRequired() ? "Get help with MTD" : "Talk to an accountant"} <Icon name="arrow" color="#0f2609" size={16} />
          </a>
        </motion.div>
      )}
    </div>
  )
}

/* ───────────────────────── Page ───────────────────────── */

export default function PricingPage() {
  const isMobile = useIsMobile()

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", background: "#f5f5f0" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(165deg, #102609 0%, #1a3a12 55%, #f5f5f0 100%)", paddingTop: isMobile ? "92px" : "150px", paddingBottom: isMobile ? "56px" : "100px", position: "relative", overflow: "hidden" }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1, pointerEvents: "none" }}>
            <defs><pattern id="pricing-dots" x="0" y="0" width="34" height="34" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="rgba(168,224,112,0.8)" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#pricing-dots)" />
          </svg>
          <div style={{ position: "absolute", top: "-160px", left: "50%", transform: "translateX(-50%)", width: "520px", height: "520px", borderRadius: "50%", background: "radial-gradient(circle, rgba(106,191,71,0.16) 0%, transparent 65%)", pointerEvents: "none" }} />

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}
            style={{ maxWidth: "720px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 64px", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(106,191,71,0.12)", border: "1px solid rgba(106,191,71,0.25)", borderRadius: "100px", padding: "6px 16px", marginBottom: isMobile ? "20px" : "26px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.1em" }}>Pricing</span>
            </div>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: isMobile ? "clamp(34px, 10vw, 44px)" : "clamp(40px, 5.5vw, 64px)", color: "white", lineHeight: 1.08, letterSpacing: "-0.5px", marginBottom: "18px" }}>
              Honest pricing,<br /><span style={{ color: "#a8e070", fontStyle: "italic" }}>no surprises</span>
            </h1>
            <p style={{ fontSize: isMobile ? "15px" : "18px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "24px" }}>
              Pay per service or bundle and save. Every quote is fixed in advance, so the invoice never catches you off guard.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(106,191,71,0.1)", border: "1px solid rgba(106,191,71,0.25)", borderRadius: "100px", padding: "9px 18px" }}>
              <Icon name="phone" color="#6abf47" size={16} />
              <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>Free 15 minute consultation with a qualified ACCA</span>
            </div>
          </motion.div>
        </section>

        {/* VAT notice */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "20px 20px 0" : "28px 48px 0" }}>
          <div style={{ background: "#1a3318", borderRadius: "14px", padding: "14px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "30px", height: "30px", borderRadius: "9px", background: "rgba(106,191,71,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="info" color="#6abf47" size={16} />
            </div>
            <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.78)", lineHeight: 1.5 }}>All prices are exclusive of VAT. UK standard rate VAT of 20% is added to every invoice.</span>
          </div>
        </div>

        {/* Per-service pricing */}
        <section style={{ padding: isMobile ? "48px 0 0" : "80px 0 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? "28px" : "48px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "14px" }}>Individual Services</div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: isMobile ? "30px" : "clamp(30px, 4vw, 46px)", color: "#111", lineHeight: 1.1, letterSpacing: "-0.5px" }}>
                Pay only for what you need
              </h2>
            </div>

            {isMobile ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "48px" }}>
                {services.map((s, i) => (
                  <motion.div key={s.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    style={{ background: "white", borderRadius: "16px", border: "1px solid #e8e8e4", padding: "16px", display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "13px", background: "#eef9e3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name={s.icon} color="#4a8a2a" size={22} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#111", marginBottom: "2px" }}>{s.name}</div>
                      <div style={{ fontSize: "11px", color: "#9a9a9a" }}>{s.tag} · equiv {s.monthly}</div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "20px", color: "#1a3318", lineHeight: 1 }}>{s.price}</div>
                      <div style={{ fontSize: "10px", color: "#9a9a9a", marginTop: "2px" }}>+ VAT</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "90px" }}>
                {services.map((s, i) => (
                  <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    whileHover={{ y: -5 }}
                    style={{ background: "white", borderRadius: "18px", padding: "28px", border: "1px solid #e8e8e4", cursor: "default" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                      <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: "#eef9e3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon name={s.icon} color="#4a8a2a" size={24} />
                      </div>
                      <span style={{ fontSize: "10px", fontWeight: 700, color: "#6abf47", background: "rgba(106,191,71,0.1)", padding: "4px 10px", borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.tag}</span>
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>{s.name}</div>
                    <div style={{ marginBottom: "6px" }}>
                      <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "38px", color: "#1a3318", lineHeight: 1 }}>{s.price}</span>
                      <span style={{ fontSize: "13px", color: "#9a9a9a", marginLeft: "6px" }}>+ VAT {s.period}</span>
                    </div>
                    <div style={{ fontSize: "12px", color: "#6abf47", fontWeight: 700, marginBottom: "14px" }}>equivalent to {s.monthly}</div>
                    <p style={{ fontSize: "13px", color: "#6b6b6b", lineHeight: 1.65 }}>{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Bundle plans */}
        <section style={{ padding: "0 0 80px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? "28px" : "48px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "14px" }}>Bundle Plans</div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: isMobile ? "30px" : "clamp(30px, 4vw, 46px)", color: "#111", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "12px" }}>
                Or bundle and save
              </h2>
              <p style={{ fontSize: isMobile ? "14px" : "16px", color: "#6b6b6b", maxWidth: "440px", margin: "0 auto", lineHeight: 1.6 }}>Combine services into one monthly plan for simpler billing and a lower combined rate.</p>
            </div>

            {isMobile ? (
              /* Native stacked plan cards */
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
                {plans.map((plan, i) => (
                  <motion.div key={plan.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    style={{ background: plan.highlight ? "linear-gradient(160deg, #1a3318 0%, #27501c 100%)" : "white", borderRadius: "20px", padding: "22px", border: plan.highlight ? "none" : "1px solid #e8e8e4", position: "relative", boxShadow: plan.highlight ? "0 20px 50px rgba(26,51,24,0.28)" : "0 4px 20px rgba(0,0,0,0.04)", overflow: "hidden" }}>
                    {plan.highlight && (
                      <>
                        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }}><rect width="100%" height="100%" fill="url(#pricing-dots)" /></svg>
                        <div style={{ position: "absolute", top: "16px", right: "16px", background: "#6abf47", color: "#0f2609", fontSize: "10px", fontWeight: 700, padding: "4px 11px", borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Most Popular</div>
                      </>
                    )}
                    <div style={{ position: "relative" }}>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: plan.highlight ? "rgba(168,224,112,0.9)" : "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>{plan.name}</div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "5px", marginBottom: "8px" }}>
                        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "40px", color: plan.highlight ? "white" : "#111", lineHeight: 1 }}>{plan.price}</span>
                        <span style={{ fontSize: "13px", color: plan.highlight ? "rgba(255,255,255,0.45)" : "#9a9a9a" }}>/mo + VAT</span>
                      </div>
                      <p style={{ fontSize: "13px", color: plan.highlight ? "rgba(255,255,255,0.55)" : "#6b6b6b", lineHeight: 1.6, marginBottom: "16px" }}>{plan.desc}</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "20px" }}>
                        {plan.includes.map((f) => (
                          <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: plan.highlight ? "rgba(106,191,71,0.2)" : "#eef9e3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <Icon name="check" color={plan.highlight ? "#a8e070" : "#4a8a2a"} size={11} stroke={2.5} />
                            </div>
                            <span style={{ fontSize: "13.5px", color: plan.highlight ? "rgba(255,255,255,0.8)" : "#444" }}>{f}</span>
                          </div>
                        ))}
                      </div>
                      <a href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", background: plan.highlight ? "#6abf47" : "#1a3318", color: plan.highlight ? "#0f2609" : "white", fontWeight: 700, fontSize: "14px", padding: "14px", borderRadius: "12px", textDecoration: "none" }}>
                        Get started <Icon name="arrow" color={plan.highlight ? "#0f2609" : "white"} size={16} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "56px", alignItems: "center" }}>
                {plans.map((plan, i) => (
                  <motion.div key={plan.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    whileHover={{ y: plan.highlight ? -2 : -6 }}
                    style={{ background: plan.highlight ? "linear-gradient(160deg, #1a3318 0%, #27501c 100%)" : "white", borderRadius: "22px", padding: "38px 32px", border: plan.highlight ? "none" : "1px solid #e8e8e4", position: "relative", boxShadow: plan.highlight ? "0 32px 80px rgba(26,51,24,0.3)" : "0 4px 24px rgba(0,0,0,0.04)", transform: plan.highlight ? "scale(1.04)" : "none", cursor: "default", overflow: "visible" }}>
                    {plan.highlight && (
                      <>
                        <div style={{ position: "absolute", inset: 0, borderRadius: "22px", overflow: "hidden", pointerEvents: "none" }}>
                          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }}><rect width="100%" height="100%" fill="url(#pricing-dots)" /></svg>
                        </div>
                        <div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: "#6abf47", color: "#0f2609", fontSize: "11px", fontWeight: 700, padding: "5px 18px", borderRadius: "100px", textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap", boxShadow: "0 6px 18px rgba(106,191,71,0.4)", zIndex: 2 }}>Most Popular</div>
                      </>
                    )}
                    <div style={{ position: "relative" }}>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: plan.highlight ? "rgba(168,224,112,0.9)" : "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>{plan.name}</div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "5px", marginBottom: "8px" }}>
                        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "52px", color: plan.highlight ? "white" : "#111", lineHeight: 1 }}>{plan.price}</span>
                        <span style={{ fontSize: "14px", color: plan.highlight ? "rgba(255,255,255,0.4)" : "#9a9a9a" }}>/mo + VAT</span>
                      </div>
                      <p style={{ fontSize: "13.5px", color: plan.highlight ? "rgba(255,255,255,0.5)" : "#6b6b6b", marginBottom: "26px", lineHeight: 1.6 }}>{plan.desc}</p>
                      <div style={{ marginBottom: "28px" }}>
                        {plan.includes.map((f) => (
                          <div key={f} style={{ display: "flex", alignItems: "center", gap: "11px", marginBottom: "11px" }}>
                            <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: plan.highlight ? "rgba(106,191,71,0.2)" : "#eef9e3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <Icon name="check" color={plan.highlight ? "#a8e070" : "#4a8a2a"} size={11} stroke={2.5} />
                            </div>
                            <span style={{ fontSize: "14px", color: plan.highlight ? "rgba(255,255,255,0.78)" : "#444" }}>{f}</span>
                          </div>
                        ))}
                      </div>
                      <a href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: plan.highlight ? "#6abf47" : "#1a3318", color: plan.highlight ? "#0f2609" : "white", fontWeight: 700, fontSize: "14px", padding: "15px", borderRadius: "12px", textDecoration: "none", transition: "all 0.2s" }}>
                        Get started <Icon name="arrow" color={plan.highlight ? "#0f2609" : "white"} size={16} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Free consultation banner */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: "linear-gradient(135deg, #1a3318 0%, #2d5a1b 100%)", borderRadius: "22px", padding: isMobile ? "28px 24px" : "40px 44px", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? "20px" : "0", position: "relative", overflow: "hidden" }}>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }}><rect width="100%" height="100%" fill="url(#pricing-dots)" /></svg>
              <div style={{ position: "relative" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>Included with every plan</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: isMobile ? "24px" : "28px", color: "white", marginBottom: "8px" }}>Free 15 minute ACCA consultation</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>Talk to a qualified accountant before you commit to anything at all.</p>
              </div>
              <a href="/contact" style={{ position: "relative", background: "#6abf47", color: "#0f2609", fontWeight: 700, fontSize: "14px", padding: "15px 28px", borderRadius: "13px", textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0, marginLeft: isMobile ? "0" : "32px", display: "inline-flex", alignItems: "center", gap: "8px", width: isMobile ? "100%" : "auto", justifyContent: "center", boxSizing: "border-box" }}>
                Book free call <Icon name="arrow" color="#0f2609" size={16} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* MTD Calculator */}
        <section style={{ padding: "0 0 80px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? "28px" : "44px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "14px" }}>MTD Eligibility Check</div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: isMobile ? "30px" : "clamp(30px, 4vw, 46px)", color: "#111", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "12px" }}>
                Do you need Making Tax Digital?
              </h2>
              <p style={{ fontSize: isMobile ? "14px" : "16px", color: "#6b6b6b", maxWidth: "520px", margin: "0 auto", lineHeight: 1.6 }}>
                MTD for Income Tax applies to individuals with qualifying income over £60,000 from April 2026. Answer five quick questions to find out where you stand.
              </p>
            </div>
            <MTDCalculator isMobile={isMobile} />
          </div>
        </section>

        {/* Custom quote */}
        <section style={{ padding: "0 0 90px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" }}>
            <div style={{ background: "white", borderRadius: "18px", padding: isMobile ? "24px" : "28px 36px", border: "1px solid #e8e8e4", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? "18px" : "0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#eef9e3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="building" color="#4a8a2a" size={24} />
                </div>
                <div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#111", marginBottom: "4px" }}>Need a custom plan?</div>
                  <div style={{ fontSize: "14px", color: "#6b6b6b", lineHeight: 1.5 }}>We work with larger businesses and accounting firms. Contact us for a bespoke quote.</div>
                </div>
              </div>
              <a href="/contact" style={{ background: "#eef9e3", color: "#1a3318", fontWeight: 700, fontSize: "14px", padding: "13px 24px", borderRadius: "12px", textDecoration: "none", whiteSpace: "nowrap", border: "1px solid rgba(106,191,71,0.3)", flexShrink: 0, marginLeft: isMobile ? "0" : "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: isMobile ? "100%" : "auto", boxSizing: "border-box" }}>
                Get a custom quote <Icon name="arrow" color="#1a3318" size={16} />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
