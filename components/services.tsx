"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    num: "01",
    slug: "payroll-rti",
    title: "Payroll & RTI Filing",
    desc: "Full payroll management including wages, tax and National Insurance. RTI reports submitted to HMRC every pay period.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#6abf47" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="10" height="16" rx="2"/>
        <line x1="8" y1="7" x2="12" y2="7"/>
        <line x1="8" y1="10" x2="12" y2="10"/>
        <line x1="8" y1="13" x2="10" y2="13"/>
      </svg>
    ),
  },
  {
    num: "02",
    slug: "bookkeeping-vat",
    title: "Bookkeeping & VAT Returns",
    desc: "Accurate financial records maintained throughout the year. VAT returns filed quarterly in full compliance with MTD requirements.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#6abf47" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="12" height="12" rx="1"/>
        <line x1="7" y1="8" x2="13" y2="8"/>
        <line x1="7" y1="11" x2="13" y2="11"/>
        <line x1="7" y1="14" x2="10" y2="14"/>
      </svg>
    ),
  },
  {
    num: "03",
    slug: "corporation-tax",
    title: "Corporation Tax CT600",
    desc: "Annual CT600 prepared and filed with HMRC. All allowable expenses and reliefs identified to minimise your tax liability.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#6abf47" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7"/>
        <path d="M10 6v4l3 2"/>
      </svg>
    ),
  },
  {
    num: "04",
    slug: "year-end-accounts",
    title: "Year-End Statutory Accounts",
    desc: "Statutory financial statements prepared and submitted to Companies House in full compliance with FRS 105 and FRS 102.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#6abf47" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="14" height="14" rx="2"/>
        <line x1="7" y1="3" x2="7" y2="17"/>
        <line x1="3" y1="8" x2="17" y2="8"/>
      </svg>
    ),
  },
  {
    num: "05",
    slug: "self-assessment",
    title: "Self Assessment SA100",
    desc: "Personal tax returns for sole traders, directors and landlords. All income reported, all expenses claimed, filed before January deadline.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#6abf47" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="7" r="3"/>
        <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
      </svg>
    ),
  },
  {
    num: "06",
    slug: "cis-scheme",
    title: "CIS Construction Scheme",
    desc: "Full CIS compliance for contractors and subcontractors. Verification, correct deduction rates and monthly returns filed on time.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#6abf47" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l4-8 4 5 3-4 3 7"/>
        <line x1="3" y1="17" x2="17" y2="17"/>
      </svg>
    ),
  },
  {
    num: "07",
    slug: "management-accounts",
    title: "Quarterly Management Accounts",
    desc: "Clear structured management accounts every quarter covering profit and loss, cash flow and key financial indicators.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#6abf47" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14l4-6 4 4 3-5 3 3"/>
        <circle cx="14" cy="7" r="1.5" fill="#6abf47"/>
      </svg>
    ),
  },
]

function GeometricIllustration() {
  return (
    <div style={{ position: "relative", width: "100%", height: "420px" }}>
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "20px", right: "20px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(106,191,71,0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "20px 24px", width: "220px",
        }}
      >
        <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Corporation Tax</div>
        <div style={{ fontSize: "28px", fontWeight: 600, color: "white", fontFamily: "'Instrument Serif', serif", marginBottom: "4px" }}>£12,400</div>
        <div style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", marginBottom: "14px" }}>CT600 Filed on time</div>
        <div style={{ height: "4px", background: "rgba(255,255,255,0.08)", borderRadius: "100px", overflow: "hidden" }}>
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "78%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ height: "100%", background: "#6abf47", borderRadius: "100px" }}
          />
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "90px", left: "30px",
          width: "160px", height: "160px",
          border: "1.5px solid rgba(106,191,71,0.15)",
          borderRadius: "28px",
        }}
      />
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "115px", left: "55px",
          width: "110px", height: "110px",
          border: "1.5px solid rgba(106,191,71,0.25)",
          borderRadius: "18px",
        }}
      />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: "absolute", top: "210px", left: "0px",
          background: "#6abf47",
          borderRadius: "16px",
          padding: "18px 22px", width: "195px",
        }}
      >
        <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(0,0,0,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>SA100 Return</div>
        <div style={{ fontSize: "20px", fontWeight: 700, color: "#1a3318", fontFamily: "'Instrument Serif', serif", marginBottom: "4px" }}>Submitted</div>
        <div style={{ fontSize: "11px", fontWeight: 600, color: "#1a3318", opacity: 0.7 }}>17 days before deadline</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", bottom: "20px", right: "0px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          padding: "16px 20px", width: "180px",
        }}
      >
        <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>Active Services</div>
        {["Payroll", "VAT Returns", "CT600"].map((s) => (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#6abf47" }} />
            <span style={{ fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>{s}</span>
          </div>
        ))}
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", marginTop: "4px" }}>+4 more</div>
      </motion.div>

      <div style={{ position: "absolute", top: "170px", right: "240px" }}>
        {[0, 1, 2, 3, 4].map((row) => (
          <div key={row} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
            {[0, 1, 2, 3, 4].map((col) => (
              <motion.div
                key={col}
                animate={{ opacity: [0.15, 0.6, 0.15] }}
                transition={{ duration: 2 + (row + col) * 0.3, repeat: Infinity, delay: (row + col) * 0.1 }}
                style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#6abf47" }}
              />
            ))}
          </div>
        ))}
      </div>

      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "320px", height: "320px",
          borderRadius: "50%",
          border: "1px solid rgba(106,191,71,0.3)",
          pointerEvents: "none",
        }}
      />
    </div>
  )
}

export default function Services() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0f1f0f 0%, #1a3318 50%, #0f1f0f 100%)",
        padding: "120px 0",
      }}
      id="services"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px" }}>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "80px", alignItems: "center", marginBottom: "96px",
        }}>
          <div>
            <div style={{
              fontSize: "13px", fontWeight: 700, color: "#6abf47",
              textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px",
            }}>
              Services
            </div>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(36px, 4.5vw, 56px)",
              color: "white", lineHeight: 1.1,
              letterSpacing: "-0.5px", marginBottom: "24px",
            }}>
              Everything your<br />business needs
            </h2>
            <p style={{
              fontSize: "16px", color: "rgba(255,255,255,0.45)",
              lineHeight: 1.75, maxWidth: "400px", marginBottom: "36px",
            }}>
              Seven specialist services. One dedicated team. Clean delivery, no missed deadlines, no surprises.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["99% on-time filing rate", "ACCA qualified team", "40% below UK market rates"].map((stat) => (
                <div key={stat} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "18px", height: "18px", borderRadius: "50%",
                    background: "rgba(106,191,71,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47" }} />
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>{stat}</span>
                </div>
              ))}
            </div>
          </div>

          <GeometricIllustration />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "rgba(106,191,71,0.08)",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(106,191,71,0.1)",
        }}>
          {services.map((service, i) => (
            <Link
              key={service.num}
              href={`/services/${service.slug}`}
              style={{
                textDecoration: "none",
                display: "block",
                gridColumn: i === 6 ? "1 / -1" : "auto",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{
                  y: -6,
                  backgroundColor: "rgba(106,191,71,0.12)",
                  transition: { duration: 0.2 },
                }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  padding: "36px 32px",
                  cursor: "pointer",
                  borderBottom: i < 6 ? "1px solid rgba(106,191,71,0.08)" : "none",
                  position: "relative",
                  height: "100%",
                }}
              >
                <div style={{
                  fontSize: "11px", fontWeight: 700,
                  color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.1em", marginBottom: "20px",
                }}>
                  {service.num}
                </div>

                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  style={{
                    width: "44px", height: "44px",
                    background: "rgba(106,191,71,0.08)",
                    border: "1px solid rgba(106,191,71,0.15)",
                    borderRadius: "12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "18px",
                  }}
                >
                  {service.icon}
                </motion.div>

                <h3 style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: i === 6 ? "22px" : "19px",
                  color: "white",
                  marginBottom: "12px", lineHeight: 1.2,
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: "13px", lineHeight: 1.75,
                  color: "rgba(255,255,255,0.4)",
                  maxWidth: i === 6 ? "600px" : "none",
                }}>
                  {service.desc}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "20px" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "48px" }}
                    transition={{ duration: 0.25 }}
                    style={{
                      height: "2px", background: "#6abf47",
                      borderRadius: "100px",
                    }}
                  />
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", whiteSpace: "nowrap" as const }}
                  >
                    Learn more →
                  </motion.span>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute", top: "16px", right: "16px",
                    width: "8px", height: "8px",
                    borderRadius: "50%", background: "#6abf47",
                  }}
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}