"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const plans = [
  {
    name: "Starter",
    price: "£79",
    period: "/month",
    desc: "For sole traders and freelancers just getting started.",
    features: [
      "Bookkeeping up to 50 transactions/month",
      "Quarterly VAT returns (MTD)",
      "Annual Self Assessment SA100",
      "Email support",
      "48 hour turnaround",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "£149",
    period: "/month",
    desc: "For small limited companies needing full compliance.",
    features: [
      "Bookkeeping up to 200 transactions/month",
      "Quarterly VAT returns (MTD)",
      "Monthly payroll up to 5 employees",
      "Annual CT600 corporation tax",
      "Year-end statutory accounts",
      "Dedicated account manager",
      "24 hour turnaround",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "£249",
    period: "/month",
    desc: "For growing businesses with complex needs.",
    features: [
      "Unlimited bookkeeping transactions",
      "Quarterly VAT returns (MTD)",
      "Monthly payroll up to 20 employees",
      "Annual CT600 corporation tax",
      "Year-end statutory accounts",
      "Quarterly management accounts",
      "CIS scheme management",
      "Priority same day turnaround",
    ],
    highlight: false,
  },
]

const faqs = [
  { q: "Is there a setup fee?", a: "No setup fee whatsoever. You pay your monthly plan fee and nothing else." },
  { q: "Can I change plans?", a: "Yes, you can upgrade or downgrade at any time. Changes take effect from the next billing cycle." },
  { q: "Do I need to sign a contract?", a: "No long-term contract required. We work on a rolling monthly basis." },
  { q: "What software do you use?", a: "We work with Xero, QuickBooks, Sage and FreeAgent. We can also work with your existing software." },
]

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", background: "#f5f5f0" }}>

        {/* Hero */}
        <section style={{
          background: "linear-gradient(180deg, #1a3318 0%, #2d5a1b 60%, #f5f5f0 100%)",
          paddingTop: "140px", paddingBottom: "100px",
          position: "relative", overflow: "hidden",
        }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08, pointerEvents: "none" }}>
            <defs>
              <pattern id="pricing-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="rgba(168,224,112,0.8)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricing-dots)" />
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ maxWidth: "700px", margin: "0 auto", padding: "0 64px", textAlign: "center", position: "relative", zIndex: 1 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(106,191,71,0.12)", border: "1px solid rgba(106,191,71,0.25)",
              borderRadius: "100px", padding: "6px 16px", marginBottom: "28px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47", display: "inline-block" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.1em" }}>Pricing</span>
            </div>
            <h1 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "white", lineHeight: 1.1,
              letterSpacing: "-0.5px", marginBottom: "20px",
            }}>
              Simple, transparent<br />
              <span style={{ color: "#a8e070", fontStyle: "italic" }}>pricing</span>
            </h1>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
              No hidden fees, no surprises. Pick a plan that fits your business or contact us for a custom quote.
            </p>
          </motion.div>
        </section>

        {/* Plans */}
        <section style={{ padding: "0 0 80px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", transform: "translateY(-40px)" }}>
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: plan.highlight ? 0 : -6 }}
                  style={{
                    background: plan.highlight ? "#1a3318" : "white",
                    borderRadius: "20px",
                    padding: "36px 32px",
                    border: plan.highlight ? "none" : "1px solid #e8e8e4",
                    position: "relative",
                    boxShadow: plan.highlight ? "0 32px 80px rgba(26,51,24,0.3)" : "0 4px 24px rgba(0,0,0,0.04)",
                    cursor: "default",
                    transform: plan.highlight ? "scale(1.03)" : "none",
                  }}
                >
                  {plan.highlight && (
                    <div style={{
                      position: "absolute", top: "-14px", left: "50%",
                      transform: "translateX(-50%)",
                      background: "#6abf47", color: "white",
                      fontSize: "11px", fontWeight: 700,
                      padding: "5px 18px", borderRadius: "100px",
                      textTransform: "uppercase", letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                    }}>
                      Most Popular
                    </div>
                  )}

                  <div style={{
                    fontSize: "12px", fontWeight: 700,
                    color: plan.highlight ? "rgba(255,255,255,0.4)" : "#aaa",
                    textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px",
                  }}>
                    {plan.name}
                  </div>

                  <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "10px" }}>
                    <span style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "52px", color: plan.highlight ? "white" : "#111", lineHeight: 1,
                    }}>{plan.price}</span>
                    <span style={{ fontSize: "14px", color: plan.highlight ? "rgba(255,255,255,0.35)" : "#aaa" }}>{plan.period}</span>
                  </div>

                  <p style={{
                    fontSize: "13px",
                    color: plan.highlight ? "rgba(255,255,255,0.45)" : "#6b6b6b",
                    marginBottom: "28px", lineHeight: 1.6,
                  }}>
                    {plan.desc}
                  </p>

                  <div style={{ marginBottom: "32px" }}>
                    {plan.features.map((f, fi) => (
                      <motion.div
                        key={f}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fi * 0.05 }}
                        style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}
                      >
                        <div style={{
                          width: "18px", height: "18px", borderRadius: "50%",
                          background: plan.highlight ? "rgba(106,191,71,0.2)" : "rgba(106,191,71,0.12)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0, marginTop: "1px",
                        }}>
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="#6abf47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1.5 4.5l2 2 4-4"/>
                          </svg>
                        </div>
                        <span style={{ fontSize: "13px", color: plan.highlight ? "rgba(255,255,255,0.65)" : "#6b6b6b", lineHeight: 1.5 }}>{f}</span>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    style={{
                      display: "block", textAlign: "center",
                      background: plan.highlight ? "#6abf47" : "#1a3318",
                      color: "white", fontWeight: 700, fontSize: "14px",
                      padding: "14px", borderRadius: "12px",
                      textDecoration: "none", transition: "all 0.2s",
                    }}
                  
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = plan.highlight ? "white" : "#6abf47"
                      el.style.color = plan.highlight ? "#1a3318" : "white"
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = plan.highlight ? "#6abf47" : "#1a3318"
                      el.style.color = "white"
                    }}
                  >
                    Get started
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Custom quote */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: "white", borderRadius: "16px",
                padding: "28px 32px", border: "1px solid #e8e8e4",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                marginBottom: "80px",
              }}
            >
              <div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#111", marginBottom: "4px" }}>Need a custom plan?</div>
                <div style={{ fontSize: "14px", color: "#6b6b6b" }}>We work with larger businesses and accounting firms. Contact us for a bespoke quote.</div>
              </div>
              
              <a
                href="/contact"
                style={{
                  background: "#f0fae8", color: "#1a3318",
                  fontWeight: 700, fontSize: "14px",
                  padding: "12px 24px", borderRadius: "10px",
                  textDecoration: "none", whiteSpace: "nowrap",
                  border: "1px solid rgba(106,191,71,0.3)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "#1a3318"
                  el.style.color = "white"
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "#f0fae8"
                  el.style.color = "#1a3318"
                }}
              >
                Get a custom quote
              </a>
            </motion.div>

            {/* FAQ */}
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "36px", color: "#111",
                textAlign: "center", marginBottom: "48px",
              }}>
                Frequently asked questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {faqs.map((faq, i) => (
                  <motion.div
                    key={faq.q}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                    style={{
                      background: "white", borderRadius: "14px",
                      padding: "24px 28px", border: "1px solid #e8e8e4",
                      cursor: "default",
                    }}
                  >
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>{faq.q}</div>
                    <div style={{ fontSize: "14px", color: "#6b6b6b", lineHeight: 1.7 }}>{faq.a}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}