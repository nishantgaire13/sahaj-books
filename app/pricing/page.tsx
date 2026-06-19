"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useIsMobile } from "@/hooks/use-mobile"

const services = [
  {
    name: "VAT Returns",
    price: "£150",
    period: "per quarter",
    monthly: "£50/month",
    desc: "Full MTD-compliant VAT return prepared and filed with HMRC every quarter.",
    tag: "Per Filing",
  },
  {
    name: "Bookkeeping",
    price: "£100",
    period: "per month",
    monthly: "£100/month",
    desc: "Accurate financial records maintained throughout the year.",
    tag: "Monthly",
  },
  {
    name: "Payroll & RTI",
    price: "£100",
    period: "per month",
    monthly: "£100/month",
    desc: "Full payroll management with RTI submissions to HMRC every pay period.",
    tag: "Monthly",
  },
  {
    name: "Company Accounts",
    price: "£350",
    period: "per year",
    monthly: "£29/month",
    desc: "Annual statutory accounts and CT600 corporation tax return filed with HMRC and Companies House.",
    tag: "Annual",
  },
  {
    name: "Personal Tax Return SA100",
    price: "£200",
    period: "per return",
    monthly: "£17/month",
    desc: "Complete Self Assessment tax return for sole traders, directors and landlords.",
    tag: "Annual",
  },
  {
    name: "MTD Personal Tax Return",
    price: "£100",
    period: "per quarter",
    monthly: "£33/month",
    desc: "Quarterly MTD submissions for individuals required under Making Tax Digital rules.",
    tag: "Quarterly",
  },
]

const plans = [
  {
    name: "Starter",
    price: "£150",
    period: "/month",
    desc: "For sole traders and small businesses needing core compliance.",
    includes: ["Bookkeeping", "VAT Returns (MTD)"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "£279",
    period: "/month",
    desc: "For limited companies needing full compliance under one roof.",
    includes: ["Bookkeeping", "VAT Returns (MTD)", "Payroll and RTI", "Company Accounts"],
    highlight: true,
  },
  {
    name: "Scale",
    price: "£429",
    period: "/month",
    desc: "For growing businesses needing all services covered.",
    includes: ["Bookkeeping", "VAT Returns (MTD)", "Payroll and RTI", "Company Accounts", "Personal Tax Return SA100", "MTD Personal Tax Return"],
    highlight: false,
  },
]

const mtdQuestions = [
  { id: "resident", label: "Are you a UK resident?", type: "yesno" },
  { id: "uk_property", label: "Do you receive UK property rental income?", type: "yesno" },
  { id: "overseas_property", label: "Do you receive overseas property rental income?", type: "yesno" },
  { id: "trust_rental", label: "Do you receive rental income from a trust?", type: "yesno" },
  { id: "income", label: "Does your total annual income exceed £60,000?", type: "yesno" },
]

function MTDCalculator() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)
  const isMobile = useIsMobile()

  const allAnswered = mtdQuestions.every(q => answers[q.id])

  const isMTDRequired = () => {
    return answers["resident"] === "yes" &&
      answers["income"] === "yes" &&
      (answers["uk_property"] === "yes" || answers["overseas_property"] === "yes" || answers["trust_rental"] === "yes")
  }

  return (
    <div style={{ background: "white", borderRadius: "20px", padding: isMobile ? "24px 20px" : "40px", border: "1px solid #e8e8e4", maxWidth: "700px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f0fae8", border: "1px solid rgba(106,191,71,0.3)", borderRadius: "100px", padding: "6px 16px", marginBottom: "16px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47", display: "inline-block" }} />
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>MTD Eligibility Check</span>
        </div>
        <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", color: "#1a3318", marginBottom: "8px" }}>
          Are you required to use Making Tax Digital?
        </h3>
        <p style={{ fontSize: "14px", color: "#6b6b6b", lineHeight: 1.6 }}>
          Answer these questions to find out if MTD for Income Tax applies to you from April 2026.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px", marginBottom: "28px" }}>
        {mtdQuestions.map((q) => (
          <div key={q.id} style={{ background: "#f5f5f0", borderRadius: "12px", padding: "16px 20px", border: `1px solid ${answers[q.id] ? "rgba(106,191,71,0.3)" : "#e8e8e4"}` }}>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "#111", marginBottom: "12px" }}>{q.label}</div>
            <div style={{ display: "flex", gap: "10px" }}>
              {["yes", "no"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => { setAnswers({ ...answers, [q.id]: opt }); setShowResult(false) }}
                  style={{
                    padding: "8px 24px", borderRadius: "8px", fontSize: "13px", fontWeight: 700,
                    cursor: "pointer", transition: "all 0.2s", border: "none",
                    background: answers[q.id] === opt ? "#1a3318" : "white",
                    color: answers[q.id] === opt ? "white" : "#6b6b6b",
                    boxShadow: answers[q.id] === opt ? "none" : "0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  {opt === "yes" ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {allAnswered && !showResult && (
        <button
          onClick={() => setShowResult(true)}
          style={{
            width: "100%", padding: "14px", borderRadius: "12px",
            background: "#6abf47", color: "white", fontWeight: 700,
            fontSize: "15px", border: "none", cursor: "pointer",
          }}
        >
          Check my MTD status
        </button>
      )}

      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            borderRadius: "14px", padding: "24px",
            background: isMTDRequired() ? "#1a3318" : "#f0fae8",
            border: `1px solid ${isMTDRequired() ? "transparent" : "rgba(106,191,71,0.3)"}`,
            textAlign: "center" as const,
          }}
        >
          <div style={{ fontSize: "28px", marginBottom: "10px" }}>{isMTDRequired() ? "⚠️" : "✓"}</div>
          <div style={{
            fontFamily: "'Instrument Serif', serif", fontSize: "22px",
            color: isMTDRequired() ? "white" : "#1a3318",
            marginBottom: "8px",
          }}>
            {isMTDRequired() ? "MTD applies to you" : "MTD does not apply yet"}
          </div>
          <p style={{ fontSize: "14px", color: isMTDRequired() ? "rgba(255,255,255,0.7)" : "#6b6b6b", lineHeight: 1.6, marginBottom: "16px" }}>
            {isMTDRequired()
              ? "Based on your answers, you are required to submit quarterly updates to HMRC under Making Tax Digital for Income Tax from April 2026. We can handle this for you."
              : "Based on your answers, you are not currently required to use MTD for Income Tax. This may change if your income increases above £60,000."}
          </p>
          {isMTDRequired() && (
            <a href="/contact" style={{
              display: "inline-block", background: "#6abf47", color: "#1a3318",
              fontWeight: 700, fontSize: "14px", padding: "12px 28px",
              borderRadius: "10px", textDecoration: "none",
            }}>
              Get help with MTD
            </a>
          )}
        </motion.div>
      )}
    </div>
  )
}

export default function PricingPage() {
  const isMobile = useIsMobile()

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", background: "#f5f5f0" }}>

        {/* Hero */}
        <section style={{
          background: "linear-gradient(180deg, #1a3318 0%, #2d5a1b 60%, #f5f5f0 100%)",
          paddingTop: isMobile ? "100px" : "140px",
          paddingBottom: isMobile ? "60px" : "100px",
          position: "relative", overflow: "hidden",
        }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08, pointerEvents: "none" }}>
            <defs><pattern id="pricing-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="rgba(168,224,112,0.8)" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#pricing-dots)" />
          </svg>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            style={{ maxWidth: "700px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 64px", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(106,191,71,0.12)", border: "1px solid rgba(106,191,71,0.25)", borderRadius: "100px", padding: "6px 16px", marginBottom: "28px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47", display: "inline-block" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Pricing</span>
            </div>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px, 6vw, 64px)", color: "white", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "20px" }}>
              Simple, transparent<br /><span style={{ color: "#a8e070", fontStyle: "italic" }}>pricing</span>
            </h1>
            <p style={{ fontSize: isMobile ? "16px" : "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "16px" }}>
              No hidden fees, no surprises. All prices are exclusive of VAT at 20%.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(106,191,71,0.1)", border: "1px solid rgba(106,191,71,0.25)", borderRadius: "100px", padding: "10px 20px" }}>
              <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(106,191,71,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#6abf47" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="2" width="10" height="9" rx="1.5" />
                  <line x1="3.5" y1="1" x2="3.5" y2="3" />
                  <line x1="8.5" y1="1" x2="8.5" y2="3" />
                  <line x1="1" y1="5" x2="11" y2="5" />
                </svg>
              </div>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>Free 15-minute consultation with a qualified ACCA included</span>
            </div>
          </motion.div>
        </section>

        {/* VAT Notice */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "20px 20px 0" : "24px 48px 0" }}>
          <div style={{ background: "#1a3318", borderRadius: "12px", padding: "14px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(106,191,71,0.15)", border: "1px solid rgba(106,191,71,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#6abf47" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="7" cy="7" r="5.5" />
                <line x1="7" y1="5" x2="7" y2="7.5" />
                <circle cx="7" cy="9.5" r="0.6" fill="#6abf47" stroke="none" />
              </svg>
            </div>
            <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>All prices shown are exclusive of VAT. UK standard rate VAT of 20% will be added to all invoices.</span>
          </div>
        </div>

        {/* Per-service pricing */}
        <section style={{ padding: isMobile ? "48px 0 0" : "72px 0 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: "14px" }}>Individual Services</div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 4vw, 46px)", color: "#111", lineHeight: 1.1, letterSpacing: "-0.5px" }}>
                Pay only for what you need
              </h2>
            </div>

            {isMobile ? (
              <div style={{ background: "white", borderRadius: "16px", border: "1px solid #e8e8e4", marginBottom: "48px", overflow: "hidden" }}>
                {services.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      padding: i === services.length - 1 ? "15px 16px 20px" : "15px 16px",
                      borderBottom: i < services.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
                    }}
                  >
                    <div style={{
                      width: "38px", height: "38px", borderRadius: "10px",
                      background: "#f0fae8", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "11px", fontWeight: 800, color: "#1a3318",
                    }}>
                      {s.tag === "Monthly" ? "Mo" : s.tag === "Annual" ? "Ann" : "Qtr"}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#111", lineHeight: 1.3, marginBottom: "2px" }}>{s.name}</div>
                      <div style={{ fontSize: "11px", color: "#aaa" }}>{s.period}</div>
                    </div>
                    <div style={{ textAlign: "right" as const, flexShrink: 0 }}>
                      <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: "#1a3318", lineHeight: 1 }}>{s.price}</div>
                      <div style={{ fontSize: "10px", color: "#6abf47", fontWeight: 700, textTransform: "uppercase" as const, marginTop: "2px" }}>{s.tag}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "80px" }}>
                {services.map((s, i) => (
                  <motion.div key={s.name}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    style={{ background: "white", borderRadius: "16px", padding: "28px", border: "1px solid #e8e8e4", cursor: "default" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#111" }}>{s.name}</div>
                      <span style={{ fontSize: "10px", fontWeight: 700, color: "#6abf47", background: "rgba(106,191,71,0.1)", padding: "3px 8px", borderRadius: "100px", textTransform: "uppercase" as const, letterSpacing: "0.05em", whiteSpace: "nowrap" as const }}>{s.tag}</span>
                    </div>
                    <div style={{ marginBottom: "8px" }}>
                      <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "40px", color: "#1a3318", lineHeight: 1 }}>{s.price}</span>
                      <span style={{ fontSize: "13px", color: "#aaa", marginLeft: "4px" }}>+ VAT {s.period}</span>
                    </div>
                    <div style={{ fontSize: "12px", color: "#6abf47", fontWeight: 700, marginBottom: "12px" }}>equiv. {s.monthly}</div>
                    <p style={{ fontSize: "13px", color: "#6b6b6b", lineHeight: 1.65 }}>{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Bundle Plans */}
        <section style={{ padding: "0 0 80px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: "14px" }}>Bundle Plans</div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 4vw, 46px)", color: "#111", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "12px" }}>
                Or bundle and save
              </h2>
              <p style={{ fontSize: "16px", color: "#6b6b6b" }}>Combine services under one monthly plan for a simpler billing experience.</p>
            </div>

            {isMobile ? (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "32px" }}>
                {plans.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    style={{
                      background: plan.highlight ? "#1a3318" : "white",
                      borderRadius: "14px",
                      padding: "14px 10px 16px",
                      border: plan.highlight ? "2px solid rgba(106,191,71,0.5)" : "1px solid #e8e8e4",
                      position: "relative",
                      display: "flex", flexDirection: "column" as const,
                    }}
                  >
                    {plan.highlight && (
                      <div style={{ position: "absolute", top: "-10px", left: "50%", transform: "translateX(-50%)", background: "#6abf47", color: "white", fontSize: "8px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", whiteSpace: "nowrap" as const, letterSpacing: "0.04em" }}>
                        Popular
                      </div>
                    )}
                    <div style={{ fontSize: "8px", fontWeight: 700, color: plan.highlight ? "rgba(255,255,255,0.4)" : "#aaa", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "6px" }}>{plan.name}</div>
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "22px", color: plan.highlight ? "white" : "#111", lineHeight: 1, marginBottom: "2px" }}>{plan.price}</div>
                    <div style={{ fontSize: "9px", color: plan.highlight ? "rgba(255,255,255,0.3)" : "#aaa", marginBottom: "10px" }}>/mo + VAT</div>
                    <div style={{ flex: 1, marginBottom: "10px", display: "flex", flexDirection: "column" as const, gap: "5px" }}>
                      {plan.includes.map((f) => (
                        <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "4px" }}>
                          <svg style={{ flexShrink: 0, marginTop: "2px" }} width="8" height="8" viewBox="0 0 9 9" fill="none" stroke="#6abf47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1.5 4.5l2 2 4-4"/></svg>
                          <span style={{ fontSize: "9px", color: plan.highlight ? "rgba(255,255,255,0.65)" : "#6b6b6b", lineHeight: 1.4 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <a href="/contact" style={{
                      display: "block", textAlign: "center" as const,
                      background: plan.highlight ? "#6abf47" : "#1a3318",
                      color: "white", fontWeight: 700, fontSize: "10px",
                      padding: "8px 4px", borderRadius: "8px", textDecoration: "none",
                    }}>Start</a>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "48px" }}>
                {plans.map((plan, i) => (
                  <motion.div key={plan.name}
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    whileHover={{ y: plan.highlight ? 0 : -6 }}
                    style={{
                      background: plan.highlight ? "#1a3318" : "white",
                      borderRadius: "20px", padding: "36px 32px",
                      border: plan.highlight ? "none" : "1px solid #e8e8e4",
                      position: "relative",
                      boxShadow: plan.highlight ? "0 32px 80px rgba(26,51,24,0.3)" : "0 4px 24px rgba(0,0,0,0.04)",
                      transform: plan.highlight ? "scale(1.03)" : "none",
                      cursor: "default",
                    }}
                  >
                    {plan.highlight && (
                      <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "#6abf47", color: "white", fontSize: "11px", fontWeight: 700, padding: "5px 18px", borderRadius: "100px", textTransform: "uppercase" as const, letterSpacing: "0.08em", whiteSpace: "nowrap" as const }}>
                        Most Popular
                      </div>
                    )}
                    <div style={{ fontSize: "12px", fontWeight: 700, color: plan.highlight ? "rgba(255,255,255,0.4)" : "#aaa", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "10px" }}>{plan.name}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "6px" }}>
                      <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "52px", color: plan.highlight ? "white" : "#111", lineHeight: 1 }}>{plan.price}</span>
                      <span style={{ fontSize: "14px", color: plan.highlight ? "rgba(255,255,255,0.35)" : "#aaa" }}>{plan.period} + VAT</span>
                    </div>
                    <p style={{ fontSize: "13px", color: plan.highlight ? "rgba(255,255,255,0.45)" : "#6b6b6b", marginBottom: "24px", lineHeight: 1.6 }}>{plan.desc}</p>
                    <div style={{ marginBottom: "28px" }}>
                      {plan.includes.map((f) => (
                        <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                          <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: plan.highlight ? "rgba(106,191,71,0.2)" : "rgba(106,191,71,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="#6abf47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1.5 4.5l2 2 4-4"/></svg>
                          </div>
                          <span style={{ fontSize: "13px", color: plan.highlight ? "rgba(255,255,255,0.65)" : "#6b6b6b" }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <a href="/contact" style={{
                      display: "block", textAlign: "center" as const,
                      background: plan.highlight ? "#6abf47" : "#1a3318",
                      color: "white", fontWeight: 700, fontSize: "14px",
                      padding: "14px", borderRadius: "12px", textDecoration: "none", transition: "all 0.2s",
                    }}>
                      Get started
                    </a>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Free consultation banner */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{
                background: "linear-gradient(135deg, #1a3318 0%, #2d5a1b 100%)",
                borderRadius: "20px",
                padding: isMobile ? "28px 24px" : "36px 40px",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                gap: isMobile ? "20px" : "0",
                marginBottom: "80px",
              }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "8px" }}>Included with every plan</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: isMobile ? "22px" : "26px", color: "white", marginBottom: "6px" }}>Free 15-minute ACCA consultation</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>Speak directly with a qualified ACCA professional before you commit to anything.</p>
              </div>
              <a href="/contact" style={{
                background: "#6abf47", color: "white", fontWeight: 700,
                fontSize: "14px", padding: "14px 28px", borderRadius: "12px",
                textDecoration: "none", whiteSpace: "nowrap" as const, flexShrink: 0, marginLeft: isMobile ? "0" : "32px",
                display: "block", textAlign: "center" as const,
              }}>
                Book free call
              </a>
            </motion.div>
          </div>
        </section>

        {/* MTD Calculator */}
        <section style={{ padding: "0 0 80px", background: "#f5f5f0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" }}>
            <div style={{ textAlign: "center", marginBottom: isMobile ? "32px" : "48px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: "14px" }}>MTD Check</div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 4vw, 46px)", color: "#111", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "12px" }}>
                Do you need to use Making Tax Digital?
              </h2>
              <p style={{ fontSize: "16px", color: "#6b6b6b", maxWidth: "520px", margin: "0 auto" }}>
                MTD for Income Tax applies to individuals with qualifying income over £60,000 from April 2026. Check if it applies to you.
              </p>
            </div>
            <MTDCalculator />
          </div>
        </section>

        {/* Custom quote */}
        <section style={{ padding: "0 0 80px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" }}>
            <div style={{
              background: "white", borderRadius: "16px",
              padding: isMobile ? "24px" : "28px 32px",
              border: "1px solid #e8e8e4",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? "20px" : "0",
            }}>
              <div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#111", marginBottom: "4px" }}>Need a custom plan?</div>
                <div style={{ fontSize: "14px", color: "#6b6b6b" }}>We work with larger businesses and accounting firms. Contact us for a bespoke quote.</div>
              </div>
              <a href="/contact" style={{
                background: "#f0fae8", color: "#1a3318", fontWeight: 700, fontSize: "14px",
                padding: "12px 24px", borderRadius: "10px", textDecoration: "none",
                whiteSpace: "nowrap" as const, border: "1px solid rgba(106,191,71,0.3)",
                flexShrink: 0, marginLeft: isMobile ? "0" : "24px",
                display: "block", textAlign: "center" as const,
              }}>
                Get a custom quote
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
