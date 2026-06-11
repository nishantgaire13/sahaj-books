"use client"

import { motion } from "framer-motion"

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

function SolutionsIllustration() {
  return (
    <div style={{ position: "relative", height: "360px" }}>
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "280px", height: "280px",
          border: "1.5px solid rgba(26,51,24,0.1)",
          borderRadius: "50%",
        }}
      />

      {/* Middle counter-rotating ring */}
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "190px", height: "190px",
          border: "1.5px dashed rgba(106,191,71,0.25)",
          borderRadius: "50%",
        }}
      />

      {/* Inner ring */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "110px", height: "110px",
          border: "1.5px solid rgba(106,191,71,0.2)",
          borderRadius: "50%",
        }}
      />

      {/* Center pulse */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "72px", height: "72px",
          background: "linear-gradient(135deg, #1a3318 0%, #2d5a1b 100%)",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 32px rgba(26,51,24,0.2)",
        }}
      >
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M5 7C5 7 9 8.5 13 8.5S21 7 21 7V19C21 19 17 20.5 13 20.5S5 19 5 19V7Z" stroke="#6abf47" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <line x1="13" y1="7" x2="13" y2="20.5" stroke="#6abf47" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="5" y1="12" x2="21" y2="12" stroke="rgba(106,191,71,0.5)" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </motion.div>

      {/* Orbiting dots on outer ring */}
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={i}
          animate={{ rotate: [deg, deg + 360] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", top: "50%", left: "50%",
            width: "280px", height: "280px",
            marginTop: "-140px", marginLeft: "-140px",
          }}
        >
          <div style={{
            position: "absolute", top: "0", left: "50%",
            transform: "translateX(-50%)",
            width: "10px", height: "10px",
            borderRadius: "50%",
            background: i === 0 ? "#6abf47" : i === 1 ? "#1a3318" : "#a8e070",
            boxShadow: `0 0 8px ${i === 0 ? "rgba(106,191,71,0.6)" : "rgba(26,51,24,0.3)"}`,
          }} />
        </motion.div>
      ))}

      {/* Orbiting dots on middle ring */}
      {[60, 180, 300].map((deg, i) => (
        <motion.div
          key={`mid-${i}`}
          animate={{ rotate: [deg, deg - 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", top: "50%", left: "50%",
            width: "190px", height: "190px",
            marginTop: "-95px", marginLeft: "-95px",
          }}
        >
          <div style={{
            position: "absolute", top: "0", left: "50%",
            transform: "translateX(-50%)",
            width: "7px", height: "7px",
            borderRadius: "50%",
            background: "rgba(106,191,71,0.5)",
          }} />
        </motion.div>
      ))}

      {/* Floating stat cards */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "10px", right: "0px",
          background: "white", borderRadius: "12px",
          padding: "12px 16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          border: "1px solid #e8e8e4",
        }}
      >
        <div style={{ fontSize: "10px", color: "#aaa", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "3px" }}>VAT Filed</div>
        <div style={{ fontSize: "18px", fontWeight: 600, color: "#111", fontFamily: "'Instrument Serif', serif" }}>Q4 2024</div>
        <div style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47" }}>On time</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{
          position: "absolute", bottom: "20px", left: "0px",
          background: "#1a3318", borderRadius: "12px",
          padding: "12px 16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "3px" }}>Payroll</div>
        <div style={{ fontSize: "18px", fontWeight: 600, color: "white", fontFamily: "'Instrument Serif', serif" }}>£13,479</div>
        <div style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47" }}>RTI Submitted</div>
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

export default function Solutions() {
  return (
    <section style={{ background: "white", padding: "120px 0" }} id="solutions">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

        {/* Header */}
        <div style={{ marginBottom: "96px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <div style={{
              fontSize: "13px", fontWeight: 700,
              color: "#6abf47", textTransform: "uppercase",
              letterSpacing: "0.12em", marginBottom: "20px",
            }}>
              Solutions
            </div>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(36px, 4.5vw, 54px)",
              color: "#111", lineHeight: 1.1,
              letterSpacing: "-0.5px", marginBottom: "20px",
            }}>
              Handle your compliance<br />end to end
            </h2>
            <p style={{
              fontSize: "17px", color: "#6b6b6b",
              lineHeight: 1.75, marginBottom: "28px",
              maxWidth: "420px",
            }}>
              Everything your business needs to stay on the right side of HMRC, handled remotely, priced fairly, delivered on time.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["99% on-time filing", "ACCA qualified", "40% below UK rates"].map((stat) => (
                <div key={stat} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47", flexShrink: 0 }} />
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#111" }}>{stat}</span>
                </div>
              ))}
            </div>
          </div>

          <SolutionsIllustration />
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
            <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
              <div style={{
                fontSize: "11px", fontWeight: 700,
                color: "#aaa", textTransform: "uppercase",
                letterSpacing: "0.1em", marginBottom: "14px",
              }}>
                {sol.label}
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
              }}>
                {sol.desc}
              </p>
              <button
                onClick={() => window.location.href = "#services"}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  fontSize: "14px", fontWeight: 700,
                  color: "#6abf47", background: "none",
                  border: "none", cursor: "pointer", padding: 0,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = "12px" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = "6px" }}
              >
                {"Learn more →"}
              </button>
            </div>

            <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
              {sol.mockup === "vat" ? <VATMockup /> : <PayrollMockup />}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}