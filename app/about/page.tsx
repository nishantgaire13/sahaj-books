"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const team = [
  { initials: "N", name: "Nishant Gaire", role: "Co-founder", bg: "#1a3318", desc: "Specialises in UK corporation tax, year-end accounts and financial reporting." },
  { initials: "A", name: "Aashish Dhakal", role: "Co-founder", bg: "#2d5a1b", desc: "Specialises in payroll, VAT returns and bookkeeping for UK small businesses." },
]

const values = [
  { icon: "⏱", title: "Always on time", desc: "We have never missed a filing deadline. Every submission is tracked and completed ahead of schedule." },
  { icon: "💬", title: "24 hour response", desc: "Every email gets a reply within 24 hours. No chasing, no waiting, no frustration." },
  { icon: "🔒", title: "Fully confidential", desc: "Your financial data is handled with strict confidentiality and stored securely at all times." },
  { icon: "💷", title: "Fair pricing", desc: "We charge 40 to 60 percent less than typical UK firms without compromising on quality." },
]

function FloatingCard({ children, delay = 0, style = {} }: { children: React.ReactNode, delay?: number, style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", background: "#f5f5f0" }}>

        {/* Hero */}
        <section style={{
          background: "linear-gradient(180deg, #1a3318 0%, #2d5a1b 60%, #f5f5f0 100%)",
          paddingTop: "140px", paddingBottom: "120px",
          position: "relative", overflow: "hidden",
        }}>
          {/* Dot pattern */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08, pointerEvents: "none" }}>
            <defs>
              <pattern id="about-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="rgba(168,224,112,0.8)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-dots)" />
          </svg>

          {/* Rotating rings */}
          <div style={{ position: "absolute", top: "50%", right: "10%", transform: "translateY(-50%)", pointerEvents: "none" }}>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{ width: "300px", height: "300px", border: "1px solid rgba(106,191,71,0.15)", borderRadius: "50%" }}
            />
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ position: "absolute", top: "50px", left: "50px", width: "200px", height: "200px", border: "1px solid rgba(106,191,71,0.2)", borderRadius: "50%" }}
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", top: "100px", left: "100px",
                width: "100px", height: "100px",
                background: "rgba(106,191,71,0.1)", borderRadius: "50%",
                border: "1px solid rgba(106,191,71,0.3)",
              }}
            />
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 64px", position: "relative", zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(106,191,71,0.12)", border: "1px solid rgba(106,191,71,0.25)",
                borderRadius: "100px", padding: "6px 16px", marginBottom: "28px",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47", display: "inline-block" }} />
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.1em" }}>Our Story</span>
              </div>
              <h1 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(40px, 6vw, 64px)",
                color: "white", lineHeight: 1.1,
                letterSpacing: "-0.5px", marginBottom: "24px",
              }}>
                Built by accountants,<br />
                <span style={{ color: "#a8e070", fontStyle: "italic" }}>for UK businesses</span>
              </h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: "580px" }}>
                We built SahajBooks because UK small businesses were overpaying for accounting work that deserved better. A dedicated team, faster turnaround, and a fraction of the cost,that is what we set out to deliver. And that is exactly what we do.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats strip */}
        <section style={{ background: "white", padding: "0" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 64px" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px", background: "#e8e8e4",
              borderRadius: "16px", overflow: "hidden",
              transform: "translateY(-32px)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            }}>
              {[
                { num: "50+", label: "UK clients" },
                { num: "99%", label: "On-time filings" },
                { num: "7", label: "Services offered" },
                { num: "40%", label: "Cost saving" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{ background: "white", padding: "24px", textAlign: "center" }}
                >
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "36px", color: "#1a3318", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: "12px", color: "#aaa", fontWeight: 600, marginTop: "6px" }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section style={{ padding: "60px 0 80px", background: "white" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
              <FloatingCard delay={0}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>Who we are</div>
                <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "36px", color: "#111", marginBottom: "20px", lineHeight: 1.2 }}>
                  A small team with a big commitment
                </h2>
                <p style={{ fontSize: "15px", color: "#6b6b6b", lineHeight: 1.8, marginBottom: "16px" }}>
                  We are a small team of ACCA qualified accounting professionals based in Kathmandu, Nepal. We specialise in UK compliance including payroll, VAT, corporation tax and year-end accounts.
                </p>
                <p style={{ fontSize: "15px", color: "#6b6b6b", lineHeight: 1.8 }}>
                  Remote delivery means lower overhead for us and lower prices for you. Every file is securely handled, every deadline is tracked, and every submission is made on time.
                </p>
              </FloatingCard>

              <FloatingCard delay={0.15}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {team.map((member) => (
                    <motion.div
                      key={member.name}
                      whileHover={{ x: 4 }}
                      style={{
                        background: "#f5f5f0", borderRadius: "16px",
                        padding: "20px 24px", border: "1px solid #e8e8e4",
                        display: "flex", alignItems: "flex-start", gap: "16px",
                      }}
                    >
                      <div style={{
                        width: "48px", height: "48px", borderRadius: "50%",
                        background: member.bg,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "18px", fontWeight: 700, color: "white", flexShrink: 0,
                      }}>{member.initials}</div>
                      <div>
                        <div style={{ fontSize: "15px", fontWeight: 700, color: "#111", marginBottom: "2px" }}>{member.name}</div>
                        <div style={{ fontSize: "12px", color: "#6abf47", fontWeight: 600, marginBottom: "6px" }}>{member.role}</div>
                        <div style={{ fontSize: "13px", color: "#6b6b6b", lineHeight: 1.6 }}>{member.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FloatingCard>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: "80px 0", background: "#f5f5f0" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 64px" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>Our Values</div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "40px", color: "#111", lineHeight: 1.1 }}>
                What we stand for
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(26,51,24,0.1)" }}
                  style={{
                    background: "white", borderRadius: "16px",
                    padding: "28px 32px", border: "1px solid #e8e8e4",
                    cursor: "default",
                  }}
                >
                  <div style={{ fontSize: "28px", marginBottom: "16px" }}>{v.icon}</div>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "20px", color: "#111", marginBottom: "10px" }}>{v.title}</h3>
                  <p style={{ fontSize: "14px", color: "#6b6b6b", lineHeight: 1.75 }}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 0", background: "white" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 64px" }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: "linear-gradient(135deg, #1a3318 0%, #2d5a1b 100%)",
                borderRadius: "24px", padding: "56px",
                textAlign: "center", position: "relative", overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: 0, right: 0, bottom: 0, left: 0,
                background: "radial-gradient(circle at 70% 50%, rgba(106,191,71,0.1) 0%, transparent 60%)",
                pointerEvents: "none",
              }} />
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "36px", color: "white", marginBottom: "16px", position: "relative", zIndex: 1 }}>
                Ready to work with us?
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "32px", position: "relative", zIndex: 1 }}>
                Get a free quote today. No contract, no setup fee.
              </p>
              
              <a
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#6abf47", color: "white",
                  fontWeight: 700, fontSize: "15px",
                  padding: "14px 36px", borderRadius: "12px",
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
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}