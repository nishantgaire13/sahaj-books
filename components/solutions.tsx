"use client"

import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const solutions = [
  {
    label: "Bookkeeping & VAT",
    title: "Accurate records and MTD VAT returns, every quarter",
    desc: "We maintain your financial records throughout the year and file your VAT returns in full compliance with HMRC Making Tax Digital requirements. Clean, on time, every quarter.",
    mockup: "vat",
  },
  {
    label: "Payroll & RTI",
    title: "Your team paid correctly, your HMRC submissions on time",
    desc: "We calculate wages, tax and National Insurance, submit RTI reports to HMRC every pay period, and ensure your employees are paid on time with zero compliance gaps.",
    mockup: "payroll",
  },
]

const flowStages = [
  {
    title: "We keep your records",
    sub: "Bookkeeping maintained throughout the year",
    status: "Ongoing",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d5a1b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4h11l3 3v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
        <path d="M8 9h7M8 13h7M8 17h4" />
      </svg>
    ),
  },
  {
    title: "We prepare your returns",
    sub: "VAT, payroll and tax calculated and reviewed",
    status: "Reviewed",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d5a1b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6M9 11h2M13 11h2M9 15h2M13 15h2" />
      </svg>
    ),
  },
  {
    title: "We file with HMRC",
    sub: "Submitted ahead of every deadline",
    status: "On time",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d5a1b" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
]

function ComplianceFlow() {
  return (
    <div style={{ position: "relative", padding: "12px 8px 12px 0" }}>
      {/* Soft brand glow behind the panel */}
      <div style={{
        position: "absolute", top: "8%", right: "6%",
        width: "320px", height: "320px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(106,191,71,0.16) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Faint dotted texture for depth */}
      <svg style={{ position: "absolute", bottom: "-14px", left: "-16px", width: "150px", height: "150px", opacity: 0.5, pointerEvents: "none" }}>
        <defs>
          <pattern id="sol-dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1.6" cy="1.6" r="1.4" fill="rgba(26,51,24,0.12)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sol-dots)" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "relative" }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "relative",
            background: "white",
            borderRadius: "22px",
            border: "1px solid #e8e8e4",
            boxShadow: "0 24px 70px rgba(26,51,24,0.10)",
            overflow: "hidden",
          }}
        >
          {/* Panel header */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "18px 24px",
            borderBottom: "1px solid #eef0ec",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "30px", height: "30px", borderRadius: "9px",
                background: "linear-gradient(135deg, #1a3318 0%, #2d5a1b 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a8e070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#111" }}>Your compliance, handled</span>
            </div>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: "#eef9e3", borderRadius: "100px", padding: "5px 11px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#4a8a2a" }}>Active</span>
            </span>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative", padding: "26px 24px 22px" }}>
            {/* Vertical rail */}
            <div style={{
              position: "absolute", left: "45px", top: "44px", bottom: "44px",
              width: "2px",
              background: "linear-gradient(180deg, #6abf47 0%, rgba(106,191,71,0.35) 100%)",
              borderRadius: "2px",
            }} />
            {/* Travelling pulse along the rail */}
            <motion.div
              animate={{ top: ["40px", "168px"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.85, 1] }}
              style={{
                position: "absolute", left: "41px",
                width: "10px", height: "10px", borderRadius: "50%",
                background: "#6abf47",
                boxShadow: "0 0 0 4px rgba(106,191,71,0.18), 0 0 12px rgba(106,191,71,0.6)",
              }}
            />

            {flowStages.map((stage, i) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  marginBottom: i < flowStages.length - 1 ? "22px" : 0,
                }}
              >
                <div style={{
                  position: "relative", zIndex: 1, flexShrink: 0,
                  width: "44px", height: "44px", borderRadius: "13px",
                  background: "#eef9e3", border: "1px solid #dff0cf",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {stage.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "14.5px", fontWeight: 700, color: "#111", marginBottom: "2px" }}>{stage.title}</div>
                  <div style={{ fontSize: "12.5px", color: "#8a8a8a", lineHeight: 1.45 }}>{stage.sub}</div>
                </div>
                <span style={{
                  flexShrink: 0,
                  fontSize: "11px", fontWeight: 700, color: "#4a8a2a",
                  background: "#f3faec", border: "1px solid #e3f1d6",
                  borderRadius: "100px", padding: "5px 11px",
                }}>
                  {stage.status}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Panel footer */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "16px 24px",
            background: "#f8f9f6", borderTop: "1px solid #eef0ec",
          }}>
            <span style={{ fontSize: "12.5px", color: "#6b6b6b" }}>On-time filings, last 12 months</span>
            <span style={{ fontSize: "15px", fontWeight: 700, color: "#1a3318", fontFamily: "'Instrument Serif', serif" }}>99%</span>
          </div>
        </motion.div>

        {/* Floating HMRC verification seal */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          style={{
            position: "absolute", top: "-18px", right: "-14px",
            display: "flex", alignItems: "center", gap: "10px",
            background: "#1a3318", borderRadius: "14px",
            padding: "11px 15px",
            boxShadow: "0 16px 40px rgba(26,51,24,0.28)",
          }}
        >
          <div style={{
            width: "30px", height: "30px", borderRadius: "8px",
            background: "rgba(106,191,71,0.18)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8e070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z" /><path d="M9.5 12l1.8 1.8 3.2-3.4" /></svg>
          </div>
          <div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>Submitted to</div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "white" }}>HMRC, verified</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

function VATMockup() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: "white",
          borderRadius: "20px",
          border: "1px solid #e8e8e4",
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{
          background: "#1a3318",
          padding: "16px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>VAT Return</div>
            <div style={{ fontSize: "16px", fontWeight: 600, color: "white", fontFamily: "'Instrument Serif', serif" }}>Q4 2024</div>
          </div>
          <div style={{
            background: "rgba(106,191,71,0.2)", border: "1px solid rgba(106,191,71,0.4)",
            borderRadius: "100px", padding: "4px 12px",
            fontSize: "11px", fontWeight: 700, color: "#6abf47",
            textTransform: "uppercase", letterSpacing: "0.06em",
          }}>Filed</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "#e8e8e4" }}>
          {[
            { label: "Output VAT", value: "£12,480" },
            { label: "Input VAT", value: "£3,820" },
            { label: "Net Due", value: "£8,660" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#f8f9f6", padding: "14px 16px" }}>
              <div style={{ fontSize: "10px", color: "#6b6b6b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>{s.label}</div>
              <div style={{ fontSize: "18px", fontWeight: 600, color: "#111", fontFamily: "'Instrument Serif', serif" }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ padding: "16px 20px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>Filing History</div>
          {[
            { q: "Q1 2024", amount: "£7,240", status: "Filed" },
            { q: "Q2 2024", amount: "£8,100", status: "Filed" },
            { q: "Q3 2024", amount: "£9,340", status: "Filed" },
            { q: "Q4 2024", amount: "£8,660", status: "Filed" },
          ].map((row, i) => (
            <motion.div
              key={row.q}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "10px 14px", borderRadius: "10px", marginBottom: "6px",
                background: i === 3 ? "rgba(106,191,71,0.05)" : "#f8f9f6",
                border: i === 3 ? "1px solid rgba(106,191,71,0.15)" : "1px solid transparent",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6abf47" }} />
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#111" }}>{row.q}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#6b6b6b", fontFamily: "'Instrument Serif', serif" }}>{row.amount}</span>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", background: "rgba(106,191,71,0.1)", padding: "2px 8px", borderRadius: "100px" }}>{row.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{
          padding: "14px 20px",
          borderTop: "1px solid #e8e8e4",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "#f8f9f6",
        }}>
          <span style={{ fontSize: "12px", color: "#6b6b6b" }}>Next filing due</span>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#1a3318" }}>31 Jan 2025</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

function PayrollMockup() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: "white",
          borderRadius: "20px",
          border: "1px solid #e8e8e4",
          overflow: "hidden",
          boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{
          background: "#1a3318",
          padding: "16px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>Payroll</div>
            <div style={{ fontSize: "16px", fontWeight: 600, color: "white", fontFamily: "'Instrument Serif', serif" }}>November 2024</div>
          </div>
          <div style={{
            background: "rgba(106,191,71,0.2)", border: "1px solid rgba(106,191,71,0.4)",
            borderRadius: "100px", padding: "4px 12px",
            fontSize: "11px", fontWeight: 700, color: "#6abf47",
            textTransform: "uppercase", letterSpacing: "0.06em",
          }}>RTI Sent</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e8e8e4" }}>
          {[
            { label: "Gross Pay", value: "£18,400" },
            { label: "Net Pay", value: "£13,479" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#f8f9f6", padding: "14px 16px" }}>
              <div style={{ fontSize: "10px", color: "#6b6b6b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>{s.label}</div>
              <div style={{ fontSize: "18px", fontWeight: 600, color: "#111", fontFamily: "'Instrument Serif', serif" }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ padding: "16px 20px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>Deductions</div>
          {[
            { label: "PAYE Tax", value: "£3,680", pct: 72 },
            { label: "Employee NIC", value: "£1,241", pct: 48 },
            { label: "Employer NIC", value: "£1,820", pct: 56 },
          ].map((item, i) => (
            <div key={item.label} style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#6b6b6b" }}>{item.label}</span>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#111", fontFamily: "'Instrument Serif', serif" }}>{item.value}</span>
              </div>
              <div style={{ background: "#e8e8e4", borderRadius: "100px", height: "5px", overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  style={{ height: "100%", borderRadius: "100px", background: "#6abf47" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: "0 20px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.08em" }}>Employees</div>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "#6abf47" }}>8 active</div>
          </div>
          {[
            { name: "James Wilson", role: "Director", initials: "JW", paid: "£4,200" },
            { name: "Sarah Mills", role: "Manager", initials: "SM", paid: "£3,800" },
            { name: "Ryan Clarke", role: "Developer", initials: "RC", paid: "£3,200" },
          ].map((emp, i) => (
            <div key={emp.name} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: i < 2 ? "1px solid #f0f0f0" : "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "50%",
                  background: ["#1a3318", "#2d5a1b", "#6abf47"][i],
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", fontWeight: 700, color: "white", flexShrink: 0,
                }}>{emp.initials}</div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "#111" }}>{emp.name}</div>
                  <div style={{ fontSize: "10px", color: "#aaa" }}>{emp.role}</div>
                </div>
              </div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#111", fontFamily: "'Instrument Serif', serif" }}>{emp.paid}</div>
            </div>
          ))}
          <div style={{ marginTop: "8px", fontSize: "11px", color: "#aaa", fontWeight: 500 }}>+5 more employees</div>
        </div>

        <div style={{
          padding: "14px 20px", borderTop: "1px solid #e8e8e4",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "#f8f9f6",
        }}>
          <span style={{ fontSize: "12px", color: "#6b6b6b" }}>RTI submitted to HMRC</span>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#6abf47" }}>On time</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

const mobileCards = [
  {
    label: "Bookkeeping & VAT",
    title: "Accurate records and MTD VAT returns, every quarter",
    desc: "We maintain your records and file your VAT returns in full compliance with HMRC Making Tax Digital requirements.",
    status: "Q4 2024, filed on time",
    metrics: [
      { label: "Output VAT", value: "£12,480" },
      { label: "Input VAT", value: "£3,820" },
      { label: "Net Due", value: "£8,660" },
    ],
    cols: 3,
  },
  {
    label: "Payroll & RTI",
    title: "Your team paid correctly, your HMRC submissions on time",
    desc: "We calculate wages, tax and National Insurance and submit RTI reports to HMRC every pay period.",
    status: "November 2024, RTI submitted",
    metrics: [
      { label: "Gross Pay", value: "£18,400" },
      { label: "Net Pay", value: "£13,479" },
    ],
    cols: 2,
  },
]

export default function Solutions() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <section style={{ background: "white", padding: "56px 0" }} id="solutions">
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>

          {/* Mobile header */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>
              Solutions
            </div>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "32px", color: "#111", lineHeight: 1.12, letterSpacing: "-0.5px", marginBottom: "12px" }}>
              Compliance, handled <span style={{ color: "#6abf47", fontStyle: "italic" }}>end to end</span>
            </h2>
            <p style={{ fontSize: "15px", color: "#6b6b6b", lineHeight: 1.65 }}>
              Everything your business needs to stay on the right side of HMRC, priced fairly and delivered on time.
            </p>
          </div>

          {/* Mobile solution cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {mobileCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: "white", borderRadius: "18px", border: "1px solid #e8e8e4", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
              >
                <div style={{ padding: "20px" }}>
                  {/* Top row: index + label + icon */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "26px", color: "#d6e3cf", lineHeight: 1 }}>0{i + 1}</span>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.09em" }}>{card.label}</span>
                    </div>
                    <div style={{ width: "38px", height: "38px", borderRadius: "11px", background: "#eef9e3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {i === 0 ? (
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#4a8a2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h14v18l-3-2-3 2-3-2-3 2V3z" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="9" y1="12" x2="15" y2="12" /></svg>
                      ) : (
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#4a8a2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      )}
                    </div>
                  </div>

                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "21px", color: "#111", lineHeight: 1.2, marginBottom: "10px" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#6b6b6b", lineHeight: 1.65, marginBottom: "16px" }}>
                    {card.desc}
                  </p>

                  {/* Stat strip */}
                  <div style={{ display: "flex", background: "#f8f9f6", borderRadius: "12px", overflow: "hidden", border: "1px solid #eef0ec" }}>
                    {card.metrics.map((m, idx) => (
                      <div key={m.label} style={{ flex: 1, padding: "12px 10px", borderLeft: idx === 0 ? "none" : "1px solid #e8e8e4" }}>
                        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "17px", fontWeight: 700, color: "#111", marginBottom: "3px" }}>{m.value}</div>
                        <div style={{ fontSize: "9px", color: "#9a9a9a", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em" }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Status row */}
                  <div style={{ display: "flex", alignItems: "center", gap: "7px", marginTop: "14px" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6abf47" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#4a8a2a" }}>{card.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section style={{ background: "white", padding: "120px 0" }} id="solutions">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

        {/* Header */}
        <div style={{ marginBottom: "112px", display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "80px", alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontSize: "12px", fontWeight: 700,
              color: "#4a8a2a", textTransform: "uppercase",
              letterSpacing: "0.12em", marginBottom: "22px",
              background: "#f3faec", border: "1px solid #e3f1d6",
              borderRadius: "100px", padding: "7px 14px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47" }} />
              Solutions
            </div>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(36px, 4.5vw, 54px)",
              color: "#111", lineHeight: 1.1,
              letterSpacing: "-0.5px", marginBottom: "20px",
            }}>
              Compliance, handled<br /><span style={{ color: "#6abf47", fontStyle: "italic" }}>end to end</span>
            </h2>
            <p style={{
              fontSize: "17px", color: "#6b6b6b",
              lineHeight: 1.75, marginBottom: "30px",
              maxWidth: "440px",
            }}>
              Everything your business needs to stay on the right side of HMRC. Handled remotely, priced fairly, delivered on time, every quarter.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {["99% on-time filing record", "ACCA qualified accountants", "Around 40% below UK rates"].map((stat) => (
                <div key={stat} style={{ display: "flex", alignItems: "center", gap: "11px" }}>
                  <div style={{
                    width: "22px", height: "22px", borderRadius: "7px",
                    background: "#eef9e3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4a8a2a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#111" }}>{stat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <ComplianceFlow />
        </div>

        {/* Solution rows */}
        {solutions.map((sol, i) => (
          <div
            key={sol.label}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
              marginBottom: "120px",
            }}
          >
            <motion.div
              style={{ order: i % 2 === 1 ? 2 : 1 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <span style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "20px", color: "#c4d9b8", lineHeight: 1,
                }}>0{i + 1}</span>
                <span style={{ width: "28px", height: "1px", background: "#dcdcd6" }} />
                <span style={{
                  fontSize: "11px", fontWeight: 700,
                  color: "#4a8a2a", textTransform: "uppercase",
                  letterSpacing: "0.11em",
                }}>{sol.label}</span>
              </div>
              <h3 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(26px, 3vw, 36px)",
                color: "#111", lineHeight: 1.2,
                letterSpacing: "-0.3px", marginBottom: "18px",
              }}>
                {sol.title}
              </h3>
              <p style={{
                fontSize: "15px", color: "#6b6b6b",
                lineHeight: 1.75, marginBottom: "28px",
                maxWidth: "440px",
              }}>
                {sol.desc}
              </p>
              <a
                href="#services"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "9px",
                  fontSize: "14px", fontWeight: 700,
                  color: "#1a3318", background: "white",
                  border: "1px solid #e0e0da", borderRadius: "100px",
                  padding: "11px 20px", textDecoration: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#6abf47"
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(106,191,71,0.16)"
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#e0e0da"
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
                }}
              >
                Explore this service
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6abf47" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </motion.div>

            <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
              {sol.mockup === "vat" ? <VATMockup /> : <PayrollMockup />}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
