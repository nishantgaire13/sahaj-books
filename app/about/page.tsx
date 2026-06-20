"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
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
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
    case "reply":
      return <svg {...common}><path d="M9 17l-5-5 5-5" /><path d="M20 18v-2a4 4 0 0 0-4-4H4" /></svg>
    case "shield":
      return <svg {...common}><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>
    case "coins":
      return <svg {...common}><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" /><path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" /></svg>
    case "doc":
      return <svg {...common}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" /></svg>
    case "chart":
      return <svg {...common}><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 16l3-4 3 2 4-6" /></svg>
    case "handshake":
      return <svg {...common}><path d="M8 12l2 2 4-4" /><path d="M3 11l4-4 5 2 5-2 4 4-4 5-3-2-3 2-5-5z" /></svg>
    case "compass":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" /></svg>
    case "pin":
      return <svg {...common}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
    case "badge":
      return <svg {...common}><circle cx="12" cy="9" r="6" /><path d="M9 14.5L8 22l4-2 4 2-1-7.5" /></svg>
    case "arrow":
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    default:
      return null
  }
}

/* ───────────────────────── Count-up ───────────────────────── */

function CountUp({ to, suffix = "", duration = 1.4 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return <span ref={ref}>{val}{suffix}</span>
}

/* ───────────────────────── Data ───────────────────────── */

const values = [
  { icon: "clock", title: "Always on time", desc: "Every filing deadline is tracked the day we take you on. We have never filed late, and we plan to keep it that way." },
  { icon: "reply", title: "24 hour replies", desc: "A real person answers every email within one working day. No ticket queues, no chasing, no being left in the dark." },
  { icon: "shield", title: "Fully confidential", desc: "Your records are encrypted in transit and at rest, accessed only by the accountant assigned to your business." },
  { icon: "coins", title: "Honestly priced", desc: "We charge 40 to 60 percent below the typical UK firm because remote delivery costs us less, not because we cut corners." },
]

const steps = [
  { n: "01", title: "We get to know your books", desc: "A short onboarding call to understand your business, your software and the deadlines on your horizon.", icon: "handshake" },
  { n: "02", title: "We organise everything", desc: "Bank feeds reconciled, receipts captured and ledgers tidied so the numbers always reflect reality.", icon: "doc" },
  { n: "03", title: "We file with HMRC", desc: "VAT, payroll, corporation tax and year-end accounts submitted accurately, well ahead of every deadline.", icon: "compass" },
  { n: "04", title: "We report back clearly", desc: "Plain English summaries each period so you always know where your business stands financially.", icon: "chart" },
]

/* ───────────────────────── Hero illustration ───────────────────────── */

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease, delay: 0.2 }}
      style={{ position: "relative", height: "420px", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Soft halo */}
      <div style={{ position: "absolute", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(106,191,71,0.18) 0%, transparent 70%)" }} />

      {/* Back card: year-end accounts */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-6, -5, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", left: "8%", top: "14%", width: "210px",
          background: "white", borderRadius: "18px", padding: "18px", rotate: "-6deg",
          boxShadow: "0 24px 60px rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.5)",
        }}
      >
        <div style={{ fontSize: "10px", fontWeight: 700, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>Year-end accounts</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "64px" }}>
          {[40, 62, 48, 78, 66, 90, 100].map((h, i) => (
            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.7, delay: 0.6 + i * 0.07, ease }}
              style={{ flex: 1, borderRadius: "3px 3px 0 0", background: h > 80 ? "#6abf47" : h > 55 ? "#a8d990" : "#dfe3da" }} />
          ))}
        </div>
        <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#6b6b6b" }}>Net profit</span>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: "#1a3318" }}>£128,400</span>
        </div>
      </motion.div>

      {/* Front card: ACCA credential */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [5, 4, 5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        style={{
          position: "absolute", right: "8%", bottom: "12%", width: "230px",
          background: "#fbfdf9", borderRadius: "18px", padding: "20px", rotate: "5deg",
          boxShadow: "0 30px 70px rgba(0,0,0,0.32)", border: "1px solid rgba(255,255,255,0.5)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#1a3318", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="badge" color="#a8e070" size={22} />
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#111" }}>ACCA Qualified</div>
            <div style={{ fontSize: "11px", color: "#9a9a9a" }}>Chartered professionals</div>
          </div>
        </div>
        {[
          { label: "On-time filings", val: "99%" },
          { label: "UK clients served", val: "50+" },
        ].map((r, i) => (
          <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderTop: i === 0 ? "none" : "1px solid #eef0ec" }}>
            <span style={{ fontSize: "12px", color: "#6b6b6b" }}>{r.label}</span>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: "#1a3318" }}>{r.val}</span>
          </div>
        ))}
      </motion.div>

      {/* Floating check chip */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        style={{
          position: "absolute", top: "6%", right: "20%",
          background: "#6abf47", borderRadius: "12px", padding: "10px 14px",
          display: "flex", alignItems: "center", gap: "8px",
          boxShadow: "0 16px 40px rgba(106,191,71,0.45)", zIndex: 5,
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0f2609" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        <span style={{ fontSize: "12px", fontWeight: 700, color: "#0f2609" }}>Filed with HMRC</span>
      </motion.div>
    </motion.div>
  )
}

/* ───────────────────────── Page ───────────────────────── */

export default function AboutPage() {
  const isMobile = useIsMobile()
  if (isMobile) return <MobileAbout />

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", background: "#f5f5f0" }}>

        {/* Hero */}
        <section style={{
          background: "linear-gradient(165deg, #102609 0%, #1a3a12 55%, #27501c 100%)",
          paddingTop: "150px", paddingBottom: "110px",
          position: "relative", overflow: "hidden",
        }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1, pointerEvents: "none" }}>
            <defs><pattern id="about-dots" x="0" y="0" width="34" height="34" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="rgba(168,224,112,0.8)" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#about-dots)" />
          </svg>
          <div style={{ position: "absolute", top: "-160px", right: "10%", width: "520px", height: "520px", borderRadius: "50%", background: "radial-gradient(circle, rgba(106,191,71,0.16) 0%, transparent 65%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 64px", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "64px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(106,191,71,0.12)", border: "1px solid rgba(106,191,71,0.25)", borderRadius: "100px", padding: "6px 16px", marginBottom: "26px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47" }} />
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.1em" }}>Our Story</span>
              </div>
              <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(40px, 5vw, 62px)", color: "white", lineHeight: 1.08, letterSpacing: "-0.5px", marginBottom: "24px" }}>
                Built by accountants,<br /><span style={{ color: "#a8e070", fontStyle: "italic" }}>for UK businesses</span>
              </h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.62)", lineHeight: 1.75, maxWidth: "500px" }}>
                We started SahajBooks because good UK businesses were overpaying for ordinary accounting. A dedicated team, faster turnaround and a fraction of the cost. That is what we set out to build, and it is exactly what we deliver.
              </p>
            </motion.div>
            <HeroVisual />
          </div>
        </section>

        {/* Stats strip */}
        <section style={{ background: "white" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "#e8e8e4", borderRadius: "18px", overflow: "hidden", transform: "translateY(-36px)", boxShadow: "0 16px 50px rgba(0,0,0,0.1)" }}>
              {[
                { node: <><CountUp to={50} />+</>, label: "UK clients served" },
                { node: <><CountUp to={99} />%</>, label: "Filed on time" },
                { node: <CountUp to={7} />, label: "Services offered" },
                { node: <><CountUp to={40} />%</>, label: "Average saving" },
              ].map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ background: "white", padding: "30px 24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "40px", color: "#1a3318", lineHeight: 1 }}>{s.node}</div>
                  <div style={{ fontSize: "12px", color: "#9a9a9a", fontWeight: 600, marginTop: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section style={{ padding: "60px 0 90px", background: "white" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 64px", display: "grid", gridTemplateColumns: "1fr 0.85fr", gap: "72px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>Who we are</div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "42px", color: "#111", lineHeight: 1.15, marginBottom: "22px" }}>
                A small team with a stubborn commitment to getting it right
              </h2>
              <p style={{ fontSize: "16px", color: "#6b6b6b", lineHeight: 1.85, marginBottom: "18px" }}>
                We are ACCA qualified accountants based in Kathmandu, working exclusively with UK businesses on payroll, VAT, corporation tax and year-end accounts. Remote delivery keeps our overheads low, so the saving lands with you rather than a city office.
              </p>
              <p style={{ fontSize: "16px", color: "#6b6b6b", lineHeight: 1.85 }}>
                Every client gets a named accountant, a tracked deadline calendar and a reply inside one working day. No call centres, no junior hand-offs, no surprises on the invoice.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ background: "linear-gradient(160deg, #1a3318 0%, #27501c 100%)", borderRadius: "24px", padding: "36px", color: "white", position: "relative", overflow: "hidden" }}>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }}><rect width="100%" height="100%" fill="url(#about-dots)" /></svg>
              <div style={{ position: "relative" }}>
                <Icon name="badge" color="#a8e070" size={30} />
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "24px", lineHeight: 1.4, margin: "20px 0 24px", color: "white" }}>
                  &ldquo;We treat every set of books as if HMRC will read them tomorrow. Usually because they will.&rdquo;
                </div>
                <div style={{ height: "1px", background: "rgba(255,255,255,0.12)", marginBottom: "20px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {["ACCA chartered team", "Based in Kathmandu, serving the UK", "Trusted by 50+ UK businesses"].map((t) => (
                    <div key={t} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(106,191,71,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#a8e070" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.78)" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section style={{ padding: "90px 0", background: "#f5f5f0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 64px" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>How we work</div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "44px", color: "#111", lineHeight: 1.1 }}>From onboarding to filed, in four steps</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", position: "relative" }}>
              {/* connector line */}
              <div style={{ position: "absolute", top: "34px", left: "12%", right: "12%", height: "2px", background: "repeating-linear-gradient(90deg, rgba(106,191,71,0.4) 0 8px, transparent 8px 16px)" }} />
              {steps.map((s, i) => (
                <motion.div key={s.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                  style={{ position: "relative", textAlign: "center" }}>
                  <div style={{ width: "68px", height: "68px", borderRadius: "20px", background: "white", border: "1px solid #e8e8e4", boxShadow: "0 8px 24px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", position: "relative", zIndex: 1 }}>
                    <Icon name={s.icon} color="#4a8a2a" size={28} />
                    <span style={{ position: "absolute", top: "-8px", right: "-8px", background: "#1a3318", color: "#a8e070", fontFamily: "'Instrument Serif', serif", fontSize: "13px", fontWeight: 700, width: "26px", height: "26px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "20px", color: "#111", marginBottom: "10px", lineHeight: 1.25 }}>{s.title}</h3>
                  <p style={{ fontSize: "13.5px", color: "#6b6b6b", lineHeight: 1.65 }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: "90px 0", background: "white" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "64px", alignItems: "start" }}>
              <div style={{ position: "sticky", top: "120px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>What we stand for</div>
                <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "44px", color: "#111", lineHeight: 1.1, marginBottom: "18px" }}>Four promises we keep</h2>
                <p style={{ fontSize: "16px", color: "#6b6b6b", lineHeight: 1.8 }}>
                  They sound simple because they are. The hard part is holding to them on every filing, for every client, every single period.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {values.map((v, i) => (
                  <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                    style={{ background: "#fbfdf9", borderRadius: "18px", padding: "28px", border: "1px solid #e8e8e4" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#eef9e3", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                      <Icon name={v.icon} color="#4a8a2a" size={24} />
                    </div>
                    <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "21px", color: "#111", marginBottom: "10px" }}>{v.title}</h3>
                    <p style={{ fontSize: "14px", color: "#6b6b6b", lineHeight: 1.7 }}>{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing band */}
        <section style={{ padding: "0 0 100px", background: "white" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 64px" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: "linear-gradient(135deg, #1a3318 0%, #2d5a1b 100%)", borderRadius: "28px", padding: "56px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "40px", position: "relative", overflow: "hidden" }}>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }}><rect width="100%" height="100%" fill="url(#about-dots)" /></svg>
              <div style={{ position: "relative" }}>
                <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "38px", color: "white", lineHeight: 1.15, marginBottom: "12px" }}>
                  Let us take the books<br />off your plate
                </h2>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "440px", lineHeight: 1.6 }}>
                  Start with a free 15 minute call with a qualified ACCA accountant. No pressure, no obligation.
                </p>
              </div>
              <a href="/contact" style={{ position: "relative", flexShrink: 0, display: "inline-flex", alignItems: "center", gap: "10px", background: "#6abf47", color: "#0f2609", fontWeight: 700, fontSize: "16px", padding: "16px 32px", borderRadius: "14px", textDecoration: "none", boxShadow: "0 12px 32px rgba(106,191,71,0.35)" }}>
                Book your free call <Icon name="arrow" color="#0f2609" size={18} />
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

/* ───────────────────────── Mobile ───────────────────────── */

function MobileAbout() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#f5f5f0" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(168deg, #102609 0%, #1a3a12 55%, #27501c 100%)", paddingTop: "92px", paddingBottom: "32px", position: "relative", overflow: "hidden" }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12, pointerEvents: "none" }}>
            <defs><pattern id="about-dots-m" x="0" y="0" width="34" height="34" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="rgba(168,224,112,0.8)" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#about-dots-m)" />
          </svg>
          <div style={{ position: "absolute", top: "-160px", left: "50%", transform: "translateX(-50%)", width: "440px", height: "440px", borderRadius: "50%", background: "radial-gradient(circle, rgba(106,191,71,0.22) 0%, transparent 65%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", padding: "0 20px" }}>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(106,191,71,0.12)", border: "1px solid rgba(106,191,71,0.25)", borderRadius: "100px", padding: "5px 13px", marginBottom: "18px" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#6abf47" }} />
              <span style={{ fontSize: "10px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.1em" }}>Our Story</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.05 }}
              style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(34px, 10vw, 44px)", color: "white", lineHeight: 1.08, letterSpacing: "-0.5px", marginBottom: "16px" }}>
              Built by accountants, for <span style={{ color: "#a8e070", fontStyle: "italic" }}>UK businesses</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.12 }}
              style={{ fontSize: "15px", color: "rgba(255,255,255,0.62)", lineHeight: 1.65, marginBottom: "26px" }}>
              We started SahajBooks because good UK businesses were overpaying for ordinary accounting. A dedicated team, faster turnaround, a fraction of the cost.
            </motion.p>

            {/* Credential card */}
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.2 }}
              style={{ background: "#fbfdf9", borderRadius: "18px", padding: "18px", boxShadow: "0 22px 50px rgba(0,0,0,0.34)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#1a3318", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="badge" color="#a8e070" size={22} />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#111" }}>ACCA Qualified team</div>
                  <div style={{ fontSize: "12px", color: "#9a9a9a" }}>Kathmandu, serving the UK</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "#eef0ec", borderRadius: "12px", overflow: "hidden", border: "1px solid #eef0ec" }}>
                {[{ v: "50+", l: "Clients" }, { v: "99%", l: "On time" }, { v: "40%", l: "Saved" }].map((s) => (
                  <div key={s.l} style={{ background: "#fbfdf9", padding: "12px 8px", textAlign: "center" }}>
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "20px", color: "#1a3318", lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontSize: "9px", color: "#9a9a9a", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "4px" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who we are */}
        <section style={{ background: "white", padding: "44px 20px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>Who we are</div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", color: "#111", lineHeight: 1.2, marginBottom: "16px" }}>
            A small team, a stubborn commitment to getting it right
          </h2>
          <p style={{ fontSize: "14.5px", color: "#6b6b6b", lineHeight: 1.8, marginBottom: "14px" }}>
            We are ACCA qualified accountants working exclusively with UK businesses on payroll, VAT, corporation tax and year-end accounts. Remote delivery keeps overheads low, so the saving lands with you.
          </p>
          <p style={{ fontSize: "14.5px", color: "#6b6b6b", lineHeight: 1.8 }}>
            Every client gets a named accountant, a tracked deadline calendar and a reply inside one working day.
          </p>
        </section>

        {/* Process */}
        <section style={{ background: "#f5f5f0", padding: "44px 20px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>How we work</div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", color: "#111", lineHeight: 1.2, marginBottom: "24px" }}>
            From onboarding to filed, in four steps
          </h2>
          <div style={{ position: "relative", paddingLeft: "8px" }}>
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{ display: "flex", gap: "16px", paddingBottom: i === steps.length - 1 ? 0 : "24px", position: "relative" }}>
                {/* vertical line */}
                {i < steps.length - 1 && (
                  <div style={{ position: "absolute", left: "23px", top: "48px", bottom: "0", width: "2px", background: "repeating-linear-gradient(180deg, rgba(106,191,71,0.4) 0 6px, transparent 6px 12px)" }} />
                )}
                <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "white", border: "1px solid #e8e8e4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative", zIndex: 1 }}>
                  <Icon name={s.icon} color="#4a8a2a" size={22} />
                </div>
                <div style={{ paddingTop: "2px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "5px" }}>
                    <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "16px", color: "#c2d4ba" }}>{s.n}</span>
                    <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: "#111", lineHeight: 1.2 }}>{s.title}</h3>
                  </div>
                  <p style={{ fontSize: "13px", color: "#6b6b6b", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section style={{ background: "white", padding: "44px 20px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px" }}>What we stand for</div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", color: "#111", lineHeight: 1.2, marginBottom: "20px" }}>
            Four promises we keep
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}
                style={{ display: "flex", gap: "14px", background: "#fbfdf9", borderRadius: "16px", padding: "18px", border: "1px solid #e8e8e4" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#eef9e3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={v.icon} color="#4a8a2a" size={22} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "18px", color: "#111", marginBottom: "5px" }}>{v.title}</h3>
                  <p style={{ fontSize: "13px", color: "#6b6b6b", lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "white", padding: "0 20px 56px" }}>
          <div style={{ background: "linear-gradient(160deg, #1a3318 0%, #2d5a1b 100%)", borderRadius: "22px", padding: "32px 24px", position: "relative", overflow: "hidden" }}>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }}><rect width="100%" height="100%" fill="url(#about-dots-m)" /></svg>
            <div style={{ position: "relative" }}>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "26px", color: "white", lineHeight: 1.2, marginBottom: "10px" }}>
                Let us take the books off your plate
              </h2>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: "22px" }}>
                Start with a free 15 minute call with a qualified ACCA accountant. No pressure, no obligation.
              </p>
              <a href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#6abf47", color: "#0f2609", fontWeight: 700, fontSize: "15px", padding: "15px", borderRadius: "13px", textDecoration: "none" }}>
                Book your free call <Icon name="arrow" color="#0f2609" size={17} />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
