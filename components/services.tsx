"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

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

const calendarLeading = 2 // Jan 2025 starts on a Wednesday (Monday-first grid)
const calendarToday = 14
const calendarDeadlines: Record<number, boolean> = { 9: true, 22: true, 31: true }
const upcomingDeadlines = [
  { day: "22", month: "Jan", label: "PAYE & CIS payment", note: "Submitted to HMRC", status: "Filed", done: true },
  { day: "31", month: "Jan", label: "Self Assessment SA100", note: "Prepared and scheduled", status: "Scheduled", done: false },
]

function ComplianceCalendar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative", padding: "14px 6px" }}
    >
      {/* Soft brand glow */}
      <div style={{
        position: "absolute", top: "12%", left: "8%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(106,191,71,0.16) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "relative",
          background: "linear-gradient(165deg, #102408 0%, #0b1806 100%)",
          border: "1px solid rgba(106,191,71,0.16)",
          borderRadius: "22px",
          boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "9px",
              background: "rgba(106,191,71,0.14)", border: "1px solid rgba(106,191,71,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6abf47" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "white" }}>Filing calendar</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>January 2025</div>
            </div>
          </div>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "rgba(106,191,71,0.12)", border: "1px solid rgba(106,191,71,0.22)",
            borderRadius: "100px", padding: "6px 12px",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#a8e070" }}>On track</span>
          </span>
        </div>

        {/* Calendar grid */}
        <div style={{ padding: "20px 24px 8px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "6px", marginBottom: "8px" }}>
            {["M", "T", "W", "T", "F", "S", "S"].map((d, idx) => (
              <div key={idx} style={{ textAlign: "center", fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                {d}
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "6px" }}>
            {Array.from({ length: calendarLeading }).map((_, i) => <div key={`b-${i}`} />)}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
              const isDeadline = calendarDeadlines[day]
              const isToday = day === calendarToday
              return (
                <motion.div
                  key={day}
                  {...(isDeadline ? { animate: { scale: [1, 1.08, 1] }, transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: (day % 5) * 0.15 } } : {})}
                  style={{
                    height: "30px", borderRadius: "8px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: isDeadline ? 700 : 500,
                    color: isDeadline ? "#0c1c06" : isToday ? "white" : "rgba(255,255,255,0.45)",
                    background: isDeadline ? "#6abf47" : "transparent",
                    border: isToday && !isDeadline ? "1px solid rgba(106,191,71,0.55)" : "1px solid transparent",
                    boxShadow: isDeadline ? "0 4px 14px rgba(106,191,71,0.3)" : "none",
                  }}
                >
                  {day}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Upcoming deadlines */}
        <div style={{ padding: "12px 24px 22px" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
            Upcoming deadlines
          </div>
          {upcomingDeadlines.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.12 }}
              style={{
                display: "flex", alignItems: "center", gap: "13px",
                padding: "11px 0",
                borderTop: i === 0 ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{
                width: "42px", height: "42px", borderRadius: "11px", flexShrink: 0,
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "white", lineHeight: 1 }}>{d.day}</span>
                <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{d.month}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "white", lineHeight: 1.3 }}>{d.label}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{d.note}</div>
              </div>
              <span style={{
                flexShrink: 0,
                display: "inline-flex", alignItems: "center", gap: "5px",
                fontSize: "11px", fontWeight: 700,
                color: d.done ? "#a8e070" : "rgba(255,255,255,0.55)",
                background: d.done ? "rgba(106,191,71,0.12)" : "rgba(255,255,255,0.05)",
                border: d.done ? "1px solid rgba(106,191,71,0.22)" : "1px solid rgba(255,255,255,0.1)",
                borderRadius: "100px", padding: "5px 11px",
              }}>
                {d.done && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6abf47" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>}
                {d.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating streak badge */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        style={{
          position: "absolute", bottom: "0px", right: "-12px",
          display: "flex", alignItems: "center", gap: "11px",
          background: "#6abf47", borderRadius: "14px",
          padding: "12px 16px",
          boxShadow: "0 18px 40px rgba(106,191,71,0.32)",
        }}
      >
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "26px", fontWeight: 700, color: "#0c1c06", lineHeight: 1 }}>0</span>
        <div>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#0c1c06", lineHeight: 1.2 }}>Missed deadlines</div>
          <div style={{ fontSize: "10px", fontWeight: 600, color: "rgba(12,28,6,0.6)" }}>Across every client</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const isMobile = useIsMobile()

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0f1f0f 0%, #1a3318 50%, #0f1f0f 100%)",
        padding: isMobile ? "60px 0" : "120px 0",
      }}
      id="services"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 64px" }}>

        <div style={{
          display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "32px" : "80px", alignItems: "center", marginBottom: isMobile ? "48px" : "96px",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontSize: "12px", fontWeight: 700, color: "#a8e070",
              textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "22px",
              background: "rgba(106,191,71,0.1)", border: "1px solid rgba(106,191,71,0.2)",
              borderRadius: "100px", padding: "7px 14px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47" }} />
              Services
            </div>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(36px, 4.5vw, 56px)",
              color: "white", lineHeight: 1.1,
              letterSpacing: "-0.5px", marginBottom: "24px",
            }}>
              Everything your<br />business needs, <span style={{ color: "#a8e070", fontStyle: "italic" }}>covered</span>
            </h2>
            <p style={{
              fontSize: "16px", color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75, maxWidth: "410px", marginBottom: "36px",
            }}>
              Seven specialist services delivered by one dedicated team. Clean records, every deadline met, and no surprises along the way.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {["99% on-time filing rate", "ACCA qualified team", "Around 40% below UK market rates"].map((stat) => (
                <div key={stat} style={{ display: "flex", alignItems: "center", gap: "11px" }}>
                  <div style={{
                    width: "22px", height: "22px", borderRadius: "7px",
                    background: "rgba(106,191,71,0.14)", border: "1px solid rgba(106,191,71,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6abf47" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.65)" }}>{stat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {!isMobile && <ComplianceCalendar />}
        </div>

        {/* Desktop: 3-col grid cards */}
        {!isMobile && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(106,191,71,0.1)",
            borderRadius: "22px",
            overflow: "hidden",
            border: "1px solid rgba(106,191,71,0.12)",
          }}>
            {services.map((service, i) => {
              const featured = i === 6
              return (
                <Link
                  key={service.num}
                  href={`/services/${service.slug}`}
                  style={{ textDecoration: "none", display: "block", gridColumn: featured ? "1 / -1" : "auto" }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    style={{ height: "100%" }}
                  >
                    <motion.div
                      initial="rest"
                      animate="rest"
                      whileHover="hover"
                      variants={{
                        rest: { backgroundColor: "rgba(255,255,255,0.025)" },
                        hover: { backgroundColor: "rgba(106,191,71,0.07)" },
                      }}
                      transition={{ duration: 0.25 }}
                      style={{
                        position: "relative",
                        padding: featured ? "40px 44px" : "38px 34px",
                        cursor: "pointer",
                        height: "100%",
                        overflow: "hidden",
                        display: featured ? "flex" : "block",
                        alignItems: "center",
                        gap: "44px",
                      }}
                    >
                      {/* Top accent bar */}
                      <motion.div
                        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                          background: "linear-gradient(90deg, #6abf47, #a8e070)",
                          transformOrigin: "left",
                        }}
                      />

                      {/* Watermark number */}
                      <div style={{
                        position: "absolute", top: featured ? "24px" : "26px", right: featured ? "32px" : "28px",
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: featured ? "40px" : "34px",
                        color: "rgba(168,224,112,0.1)", lineHeight: 1, pointerEvents: "none",
                      }}>
                        {service.num}
                      </div>

                      {/* Icon */}
                      <motion.div
                        variants={{
                          rest: { backgroundColor: "rgba(106,191,71,0.07)", borderColor: "rgba(106,191,71,0.16)" },
                          hover: { backgroundColor: "rgba(106,191,71,0.16)", borderColor: "rgba(106,191,71,0.4)" },
                        }}
                        transition={{ duration: 0.25 }}
                        style={{
                          width: featured ? "60px" : "46px",
                          height: featured ? "60px" : "46px",
                          borderWidth: "1px", borderStyle: "solid",
                          borderRadius: "13px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          marginBottom: featured ? 0 : "20px",
                          flexShrink: 0,
                        }}
                      >
                        {service.icon}
                      </motion.div>

                      <div style={{ flex: featured ? 1 : undefined, minWidth: 0 }}>
                        <h3 style={{
                          fontFamily: "'Instrument Serif', serif",
                          fontSize: featured ? "26px" : "20px",
                          color: "white", marginBottom: "12px", lineHeight: 1.2,
                        }}>
                          {service.title}
                        </h3>
                        <p style={{
                          fontSize: "13.5px", lineHeight: 1.7,
                          color: "rgba(255,255,255,0.45)",
                          maxWidth: featured ? "620px" : "none",
                          marginBottom: featured ? 0 : "22px",
                        }}>
                          {service.desc}
                        </p>

                        {!featured && (
                          <motion.div
                            variants={{ rest: { color: "rgba(255,255,255,0.4)" }, hover: { color: "#a8e070" } }}
                            transition={{ duration: 0.2 }}
                            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: 700 }}
                          >
                            Learn more
                            <motion.svg
                              variants={{ rest: { x: 0 }, hover: { x: 5 } }}
                              transition={{ duration: 0.25 }}
                              width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
                            >
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </motion.svg>
                          </motion.div>
                        )}
                      </div>

                      {featured && (
                        <motion.div
                          variants={{
                            rest: { backgroundColor: "rgba(106,191,71,0.1)", x: 0 },
                            hover: { backgroundColor: "#6abf47", x: 4 },
                          }}
                          transition={{ duration: 0.25 }}
                          style={{
                            flexShrink: 0,
                            display: "inline-flex", alignItems: "center", gap: "9px",
                            border: "1px solid rgba(106,191,71,0.3)",
                            borderRadius: "100px", padding: "12px 22px",
                            fontSize: "13.5px", fontWeight: 700, color: "white",
                          }}
                        >
                          Explore service
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        )}

        {/* Mobile: compact list */}
        {isMobile && (
          <div style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(106,191,71,0.12)",
          }}>
            {services.map((service, i) => (
              <Link
                key={service.num}
                href={`/services/${service.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  style={{
                    display: "flex", alignItems: "center", gap: "14px",
                    padding: "16px 18px",
                    borderBottom: i < 6 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    background: "rgba(106,191,71,0.1)",
                    border: "1px solid rgba(106,191,71,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {service.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "white", lineHeight: 1.3 }}>
                      {service.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", marginTop: "2px", fontWeight: 500 }}>
                      {service.num}
                    </div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(106,191,71,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M6 12l4-4-4-4" />
                  </svg>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
