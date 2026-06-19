"use client"

import { use } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"

type Row = { label: string; value: string; highlight?: boolean }

type Service = {
  slug: string
  category: string
  title: string
  tagline: string
  intro: string
  price?: string
  priceDetail?: string
  priceNote?: string
  handles: string[]
  whoFor: string[]
  card: {
    header: string
    value: string
    status: string
    rows: Row[]
    footer: string
    chart?: number[]
  }
}

const services: Service[] = [
  {
    slug: "payroll-rti",
    category: "Payroll",
    title: "Payroll & RTI Filing",
    tagline: "Your team paid correctly, every pay period.",
    intro: "We manage your entire payroll from start to finish. Every period your employees receive accurate payslips and HMRC receives the right RTI submission on time. We track deadlines, calculate every deduction, and keep you compliant without you having to chase anything.",
    price: "£100",
    priceDetail: "per month",
    priceNote: "Covers up to 5 employees. Get in touch for larger payrolls.",
    handles: [
      "Monthly and weekly payroll calculations",
      "PAYE tax and National Insurance for every employee",
      "RTI submissions to HMRC each pay period",
      "Statutory pay calculations including SSP, SMP and SPP",
      "P60 production for all employees at year-end",
      "P45 issued when an employee leaves",
      "Pension auto-enrolment and contribution reporting",
    ],
    whoFor: [
      "UK limited companies with employees on payroll",
      "Sole traders who have taken on staff",
      "Businesses running weekly or monthly payroll cycles",
    ],
    card: {
      header: "November 2024 Payroll",
      value: "£13,479",
      status: "RTI Submitted",
      rows: [
        { label: "Gross Pay", value: "£18,400" },
        { label: "PAYE Tax", value: "£3,680" },
        { label: "National Insurance", value: "£1,241" },
        { label: "Net Pay", value: "£13,479", highlight: true },
      ],
      footer: "Filed to HMRC on time",
    },
  },
  {
    slug: "bookkeeping-vat",
    category: "Bookkeeping",
    title: "Bookkeeping & VAT Returns",
    tagline: "Accurate records. VAT filed every quarter without the stress.",
    intro: "Disorganised books create problems at year-end and make it impossible to know how your business is performing. We maintain your financial records on an ongoing basis and file your quarterly VAT returns in full compliance with HMRC's Making Tax Digital requirements.",
    price: "£100",
    priceDetail: "per month for bookkeeping",
    priceNote: "VAT returns are filed at £150 per quarter. Both services can be taken together.",
    handles: [
      "Recording all income and expenses throughout the year",
      "Monthly bank reconciliation",
      "MTD-compliant VAT return preparation every quarter",
      "Direct submission to HMRC via Making Tax Digital",
      "Input and output VAT reconciliation",
      "Flagging discrepancies before they become problems",
    ],
    whoFor: [
      "UK businesses that are VAT registered",
      "Companies turning over more than £90,000",
      "Business owners who want clean, current records all year",
    ],
    card: {
      header: "VAT Return Q4 2024",
      value: "£8,660",
      status: "Filed",
      rows: [
        { label: "Output VAT", value: "£12,480" },
        { label: "Input VAT", value: "£3,820" },
        { label: "Net VAT Due", value: "£8,660", highlight: true },
      ],
      footer: "MTD-compliant submission to HMRC",
      chart: [45, 62, 55, 78, 58, 72, 88, 65, 82, 70, 90, 100],
    },
  },
  {
    slug: "corporation-tax",
    category: "Tax",
    title: "Corporation Tax CT600",
    tagline: "Your corporation tax return filed with every allowance claimed.",
    intro: "Filing a CT600 is more than entering numbers from your accounts. We review your accounts carefully, identify every allowable deduction and relief you are entitled to, calculate your liability precisely, and submit to HMRC well before your deadline.",
    handles: [
      "Calculating taxable profit from your annual accounts",
      "Identifying all allowable deductions and business expenses",
      "Capital allowance claims including Annual Investment Allowance",
      "Loss relief and carry-forward calculations",
      "R&D tax relief where applicable",
      "CT600 preparation and electronic submission to HMRC",
      "Corporation tax payment deadline reminders",
    ],
    whoFor: [
      "UK limited companies of any size",
      "Companies that made a profit and owe corporation tax",
      "Companies with losses to offset against future profits",
    ],
    card: {
      header: "CT600 2023/24",
      value: "£12,400",
      status: "Filed",
      rows: [
        { label: "Taxable Profit", value: "£62,000" },
        { label: "Tax Rate", value: "19% / 25%" },
        { label: "Corporation Tax", value: "£12,400", highlight: true },
      ],
      footer: "Filed before the 9-month HMRC deadline",
    },
  },
  {
    slug: "year-end-accounts",
    category: "Annual Accounts",
    title: "Year-End Statutory Accounts",
    tagline: "Annual accounts prepared and filed with Companies House, on time.",
    intro: "Statutory accounts are a legal requirement for every UK limited company. We prepare them to the correct accounting standard for your company size, coordinate director sign-off, and file with Companies House and HMRC alongside your corporation tax return.",
    price: "£350",
    priceDetail: "per year",
    priceNote: "Includes both your year-end statutory accounts and CT600 corporation tax return.",
    handles: [
      "Profit and loss account for the full financial year",
      "Balance sheet as at your year-end date",
      "Director's report where required",
      "Notes to the accounts under FRS 105 or FRS 102",
      "Filing with Companies House before the deadline",
      "Submission to HMRC alongside your CT600",
      "Director approval coordination and sign-off",
    ],
    whoFor: [
      "UK limited companies registered at Companies House",
      "Small companies filing under FRS 105 or FRS 102",
      "Companies approaching their annual filing deadline",
    ],
    card: {
      header: "Annual Accounts 2023/24",
      value: "£48,200",
      status: "Filed",
      rows: [
        { label: "Turnover", value: "£284,000" },
        { label: "Gross Profit", value: "£112,000" },
        { label: "Net Profit", value: "£48,200", highlight: true },
      ],
      footer: "Submitted to Companies House",
    },
  },
  {
    slug: "self-assessment",
    category: "Personal Tax",
    title: "Self Assessment SA100",
    tagline: "Your personal tax return prepared and submitted before January.",
    intro: "Self Assessment is stressful when you leave it late. Whether you are a sole trader, a director drawing dividends, a landlord, or someone with several income streams, we handle the full return from collecting your information to filing with HMRC.",
    price: "£200",
    priceDetail: "per return",
    priceNote: "Covers a standard SA100 return. Additional schedules for rental income or capital gains can be discussed on enquiry.",
    handles: [
      "Reviewing all income sources including employment and self-employment",
      "Reconciling your P60 with employment income",
      "Self-employment profit and allowable expense calculations",
      "Rental income and allowable costs for landlords",
      "Dividend income from company shareholdings",
      "Capital gains on property or investments",
      "Filing the completed return to HMRC before 31 January",
    ],
    whoFor: [
      "Sole traders with self-employment income",
      "Company directors receiving salary and dividends",
      "Landlords with UK rental income",
      "Anyone with income that is not taxed at source",
    ],
    card: {
      header: "SA100 Return 2023/24",
      value: "£9,240",
      status: "Submitted",
      rows: [
        { label: "Employment Income", value: "£42,000" },
        { label: "Dividend Income", value: "£18,000" },
        { label: "Tax Liability", value: "£9,240", highlight: true },
      ],
      footer: "Filed before the 31 January deadline",
    },
  },
  {
    slug: "cis-scheme",
    category: "Construction",
    title: "CIS Construction Scheme",
    tagline: "Full CIS compliance for contractors and subcontractors.",
    intro: "CIS has strict monthly obligations and the penalties for getting it wrong are significant. We handle the full cycle, from verifying subcontractors and applying the right deduction rates to filing monthly returns and issuing the statements your subcontractors need.",
    handles: [
      "Contractor and subcontractor registration with HMRC",
      "Subcontractor verification before the first payment is made",
      "Applying the correct deduction rate: 20%, 30% or gross status",
      "Monthly CIS return preparation and submission to HMRC",
      "Monthly deduction statements issued to subcontractors",
      "Reclaiming CIS deductions suffered, for subcontractors",
      "End-of-year CIS reconciliation and review",
    ],
    whoFor: [
      "Contractors paying subcontractors under the CIS scheme",
      "Subcontractors in construction, civil engineering or site preparation",
      "Businesses new to CIS who need to be set up correctly from the start",
    ],
    card: {
      header: "CIS Return November",
      value: "12 verified",
      status: "Filed",
      rows: [
        { label: "Active Subcontractors", value: "12" },
        { label: "Total Deductions", value: "£4,840" },
        { label: "Net Paid Out", value: "£19,360", highlight: true },
      ],
      footer: "Monthly return filed on time",
    },
  },
  {
    slug: "management-accounts",
    category: "Reporting",
    title: "Quarterly Management Accounts",
    tagline: "A clear financial picture of your business every three months.",
    intro: "Annual accounts tell you what happened a year ago. Management accounts tell you what is happening now. We produce a clean quarterly pack covering profit, cash position and key financial indicators so you can make decisions based on current numbers.",
    handles: [
      "Profit and loss statement for the quarter",
      "Balance sheet snapshot at the quarter-end date",
      "Cash flow summary and working capital position",
      "Revenue versus prior quarter and prior year comparison",
      "Key financial ratios and performance indicators",
      "Plain-language commentary on what the numbers mean",
    ],
    whoFor: [
      "Business owners who want financial clarity between annual accounts",
      "Companies seeking bank finance, loans or investment",
      "Directors making hiring, pricing or expansion decisions",
    ],
    card: {
      header: "Q3 2024 Performance",
      value: "£48,200",
      status: "Profit",
      rows: [
        { label: "Revenue", value: "£148,400" },
        { label: "Gross Profit", value: "£72,600" },
        { label: "Net Profit", value: "£48,200", highlight: true },
      ],
      footer: "Delivered within 2 weeks of quarter-end",
      chart: [55, 62, 70, 65, 78, 82, 75, 88, 72, 90, 85, 100],
    },
  },
]

function ServiceIllustration({ card }: { card: Service["card"] }) {
  return (
    <div style={{ position: "relative", paddingTop: "32px", paddingBottom: "32px" }}>
      {/* Decorative rings */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "380px", height: "380px",
          border: "1px solid rgba(106,191,71,0.08)",
          borderRadius: "50%", pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "260px", height: "260px",
          border: "1px dashed rgba(106,191,71,0.12)",
          borderRadius: "50%", pointerEvents: "none",
        }}
      />

      {/* Floating status chip — top right */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "0px", right: "0px",
          background: "white", borderRadius: "14px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          padding: "10px 16px", zIndex: 10,
        }}
      >
        <div style={{ fontSize: "9px", color: "#aaa", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Status</div>
        <div style={{ fontSize: "14px", fontWeight: 700, color: "#6abf47", marginTop: "2px" }}>{card.status}</div>
      </motion.div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "white", borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
            position: "relative", zIndex: 5,
          }}
        >
          {/* Card header */}
          <div style={{
            background: "#142e14", padding: "18px 22px",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "4px" }}>
                {card.header}
              </div>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "26px", color: "white", lineHeight: 1 }}>
                {card.value}
              </div>
            </div>
            <div style={{
              background: "rgba(106,191,71,0.2)", border: "1px solid rgba(106,191,71,0.4)",
              borderRadius: "100px", padding: "5px 14px",
              fontSize: "11px", fontWeight: 700, color: "#6abf47",
              textTransform: "uppercase" as const, letterSpacing: "0.06em",
            }}>
              {card.status}
            </div>
          </div>

          {/* Optional bar chart */}
          {card.chart && (
            <div style={{ padding: "14px 16px 0", background: "#f8f9f6" }}>
              <div style={{ fontSize: "9px", fontWeight: 700, color: "#aaa", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "8px" }}>Monthly trend</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "44px" }}>
                {card.chart.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: i * 0.04 }}
                    style={{
                      flex: 1, borderRadius: "2px 2px 0 0",
                      background: h > 80 ? "#6abf47" : h > 60 ? "#a8d990" : "#d4e8c8",
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Data rows */}
          <div style={{ padding: "14px 16px" }}>
            {card.rows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "9px 12px", borderRadius: "8px", marginBottom: "4px",
                  background: row.highlight ? "rgba(106,191,71,0.07)" : "#f8f9f6",
                  border: row.highlight ? "1px solid rgba(106,191,71,0.18)" : "1px solid transparent",
                }}
              >
                <span style={{ fontSize: "12px", color: row.highlight ? "#111" : "#6b6b6b", fontWeight: row.highlight ? 600 : 400 }}>
                  {row.label}
                </span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: row.highlight ? "#1a3318" : "#111", fontFamily: "'Instrument Serif', serif" }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            padding: "12px 16px", borderTop: "1px solid #e8e8e4",
            background: "#f8f9f6", display: "flex", alignItems: "center", gap: "8px",
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47", flexShrink: 0 }} />
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#6b6b6b" }}>{card.footer}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating ACCA chip — bottom left */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{
          position: "absolute", bottom: "0px", left: "0px",
          background: "#6abf47", borderRadius: "14px",
          padding: "10px 16px",
          boxShadow: "0 8px 28px rgba(106,191,71,0.35)",
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: "9px", color: "rgba(0,0,0,0.45)", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>SahajBooks</div>
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a3318", marginTop: "2px" }}>ACCA Qualified</div>
      </motion.div>
    </div>
  )
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const service = services.find(s => s.slug === slug)

  if (!service) {
    notFound()
    return null
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{
          background: "linear-gradient(180deg, #1a3318 0%, #2d5a1b 55%, #f5f5f0 100%)",
          paddingTop: "110px", paddingBottom: "100px",
          position: "relative", overflow: "hidden",
        }}>
          {/* Dot pattern */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07, pointerEvents: "none" }}>
            <defs>
              <pattern id="svc-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="rgba(168,224,112,0.8)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svc-dots)" />
          </svg>

          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 64px", position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <Link
              href="/#services"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "13px", fontWeight: 600,
                color: "rgba(255,255,255,0.4)", textDecoration: "none",
                marginBottom: "36px",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11L5 7l4-4" />
              </svg>
              All Services
            </Link>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

              {/* Left — text */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "rgba(106,191,71,0.12)", border: "1px solid rgba(106,191,71,0.25)",
                  borderRadius: "100px", padding: "5px 14px", marginBottom: "24px",
                }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#6abf47", display: "inline-block" }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>
                    {service.category}
                  </span>
                </div>

                <h1 style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(36px, 4.5vw, 58px)",
                  color: "white", lineHeight: 1.1,
                  letterSpacing: "-0.5px", marginBottom: "20px",
                }}>
                  {service.title}
                </h1>

                <p style={{
                  fontSize: "20px", fontWeight: 500,
                  color: "#a8e070", lineHeight: 1.5,
                  marginBottom: "16px",
                }}>
                  {service.tagline}
                </p>

                <p style={{
                  fontSize: "16px", color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.8, marginBottom: "36px", maxWidth: "480px",
                }}>
                  {service.intro}
                </p>

                {service.price && (
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "12px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "14px", padding: "14px 20px",
                    marginBottom: "32px",
                  }}>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "2px" }}>Starting from</div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "32px", color: "white", lineHeight: 1 }}>{service.price}</span>
                        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{service.priceDetail}</span>
                      </div>
                    </div>
                    {service.priceNote && (
                      <>
                        <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.1)" }} />
                        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", maxWidth: "180px", lineHeight: 1.5 }}>
                          {service.priceNote}
                        </p>
                      </>
                    )}
                  </div>
                )}

                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "#6abf47", color: "white",
                    fontWeight: 700, fontSize: "15px",
                    padding: "14px 32px", borderRadius: "12px",
                    textDecoration: "none",
                    boxShadow: "0 4px 24px rgba(106,191,71,0.3)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "white"
                    el.style.color = "#1a3318"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "#6abf47"
                    el.style.color = "white"
                  }}
                >
                  Get in touch
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h8M8 4l3 3-3 3" />
                  </svg>
                </Link>
              </motion.div>

              {/* Right — illustration */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <ServiceIllustration card={service.card} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What we take care of */}
        <section style={{ background: "white", padding: "96px 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 64px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "56px" }}
            >
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: "14px" }}>
                Scope of work
              </div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 42px)", color: "#111", lineHeight: 1.1, letterSpacing: "-0.3px" }}>
                What we take care of
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
              {service.handles.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: "14px",
                    background: "#f5f5f0", borderRadius: "12px",
                    padding: "16px 20px", border: "1px solid #e8e8e4",
                  }}
                >
                  <div style={{
                    width: "22px", height: "22px", borderRadius: "50%",
                    background: "rgba(106,191,71,0.12)",
                    border: "1px solid rgba(106,191,71,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: "1px",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#6abf47" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1.5 5l2 2 5-4" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "14px", color: "#333", lineHeight: 1.55, fontWeight: 500 }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section style={{ background: "#f5f5f0", padding: "96px 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 64px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: "48px" }}
            >
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: "14px" }}>
                Best suited for
              </div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 42px)", color: "#111", lineHeight: 1.1, letterSpacing: "-0.3px" }}>
                Who this is for
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {service.whoFor.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 36px rgba(26,51,24,0.1)" }}
                  style={{
                    background: "white", borderRadius: "16px",
                    padding: "28px 24px", border: "1px solid #e8e8e4",
                  }}
                >
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    background: "linear-gradient(135deg, #1a3318 0%, #2d5a1b 100%)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "16px",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#6abf47" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="8" cy="5.5" r="2.5" />
                      <path d="M2 14c0-3 2.7-5 6-5s6 2 6 5" />
                    </svg>
                  </div>
                  <p style={{ fontSize: "14px", color: "#333", lineHeight: 1.6, fontWeight: 500 }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing — only when price is listed */}
        {service.price && (
          <section style={{ background: "white", padding: "96px 0" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 64px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: "48px" }}
              >
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: "14px" }}>
                  Pricing
                </div>
                <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 42px)", color: "#111", lineHeight: 1.1, letterSpacing: "-0.3px" }}>
                  Clear, transparent pricing
                </h2>
              </motion.div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: "#1a3318", borderRadius: "20px",
                    padding: "40px", position: "relative", overflow: "hidden",
                  }}
                >
                  <div style={{
                    position: "absolute", top: 0, right: 0,
                    width: "200px", height: "200px",
                    background: "radial-gradient(circle, rgba(106,191,71,0.1) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }} />
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "16px" }}>
                    {service.title}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "56px", color: "white", lineHeight: 1 }}>
                      {service.price}
                    </span>
                    <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.35)" }}>
                      + VAT {service.priceDetail}
                    </span>
                  </div>
                  {service.priceNote && (
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginTop: "12px", position: "relative", zIndex: 1 }}>
                      {service.priceNote}
                    </p>
                  )}
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-block", marginTop: "28px",
                      background: "#6abf47", color: "white",
                      fontWeight: 700, fontSize: "14px",
                      padding: "12px 28px", borderRadius: "10px",
                      textDecoration: "none", position: "relative", zIndex: 1,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = "white"
                      el.style.color = "#1a3318"
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = "#6abf47"
                      el.style.color = "white"
                    }}
                  >
                    Get started
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}
                >
                  {[
                    { icon: "✓", title: "No contracts", desc: "Month-to-month. Stop or change any time." },
                    { icon: "✓", title: "Free consultation", desc: "15 minutes with a qualified ACCA before you commit." },
                    { icon: "✓", title: "Reply within 24 hours", desc: "Every email gets a response the same working day." },
                  ].map((item, i) => (
                    <div key={i} style={{
                      background: "#f5f5f0", borderRadius: "14px",
                      padding: "20px 22px", border: "1px solid #e8e8e4",
                      display: "flex", gap: "14px", alignItems: "flex-start",
                    }}>
                      <div style={{
                        width: "28px", height: "28px", borderRadius: "8px",
                        background: "rgba(106,191,71,0.12)",
                        border: "1px solid rgba(106,191,71,0.25)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, fontSize: "13px", color: "#6abf47", fontWeight: 700,
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 700, color: "#111", marginBottom: "3px" }}>{item.title}</div>
                        <div style={{ fontSize: "13px", color: "#6b6b6b", lineHeight: 1.5 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{
          background: "linear-gradient(135deg, #1a3318 0%, #2d5a1b 100%)",
          padding: "100px 0", position: "relative", overflow: "hidden",
        }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07, pointerEvents: "none" }}>
            <defs>
              <pattern id="cta-svc-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="rgba(168,224,112,0.8)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-svc-dots)" />
          </svg>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(106,191,71,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 64px", textAlign: "center", position: "relative", zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 5vw, 52px)", color: "white", lineHeight: 1.1, marginBottom: "16px" }}>
                Ready to get started?
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "36px" }}>
                Get in touch and we will come back to you within 24 hours. No pressure, no commitment required.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" as const }}>
                <Link
                  href="/contact"
                  style={{
                    background: "#6abf47", color: "white",
                    fontWeight: 700, fontSize: "15px",
                    padding: "14px 36px", borderRadius: "12px",
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "white"
                    el.style.color = "#1a3318"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "#6abf47"
                    el.style.color = "white"
                  }}
                >
                  Contact us
                </Link>
                <Link
                  href="/pricing"
                  style={{
                    background: "transparent", color: "rgba(255,255,255,0.7)",
                    fontWeight: 700, fontSize: "15px",
                    padding: "14px 36px", borderRadius: "12px",
                    textDecoration: "none",
                    border: "1.5px solid rgba(255,255,255,0.2)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = "rgba(255,255,255,0.5)"
                    el.style.color = "white"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = "rgba(255,255,255,0.2)"
                    el.style.color = "rgba(255,255,255,0.7)"
                  }}
                >
                  View all pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
