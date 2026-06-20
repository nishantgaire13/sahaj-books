"use client"

import { useState, type CSSProperties } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useIsMobile } from "@/hooks/use-mobile"

const ease = [0.22, 1, 0.36, 1] as const

/* ───────────────────────── Icons ───────────────────────── */

function Icon({ name, size = 20, color = "#6abf47", stroke = 1.8 }: { name: string; size?: number; color?: string; stroke?: number }) {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: color, strokeWidth: stroke, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  }
  switch (name) {
    case "mail":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
    case "phone":
      return <svg {...common}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" /></svg>
    case "pin":
      return <svg {...common}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
    case "arrow":
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    case "check":
      return <svg {...common}><path d="M20 6L9 17l-5-5" /></svg>
    case "linkedin":
      return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17V10.5H6.2V17h2.14zM7.27 9.42a1.24 1.24 0 1 0 0-2.48 1.24 1.24 0 0 0 0 2.48zM18 17v-3.57c0-1.9-.4-3.36-2.62-3.36-1.06 0-1.78.58-2.07 1.14h-.03V10.5h-2.05V17h2.13v-3.21c0-.85.16-1.67 1.21-1.67 1.04 0 1.05.97 1.05 1.73V17H18z" /></svg>
    case "instagram":
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill={color} /></svg>
    case "shield":
      return <svg {...common}><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>
    default:
      return null
  }
}

/* ───────────────────────── Data ───────────────────────── */

const services = [
  "Payroll & RTI Filing",
  "Bookkeeping & VAT Returns",
  "Corporation Tax CT600",
  "Year-End Statutory Accounts",
  "Self Assessment SA100",
  "CIS Construction Scheme",
  "Quarterly Management Accounts",
  "Multiple Services",
]

const countryCodes = [
  { code: "+44", label: "UK +44" },
  { code: "+1", label: "US +1" },
  { code: "+977", label: "NP +977" },
  { code: "+61", label: "AU +61" },
  { code: "+971", label: "UAE +971" },
]

const contactMethods = [
  { icon: "mail", title: "Email us", detail: "sahajbooks10@gmail.com", sub: "Reply within 24 hours", href: "mailto:sahajbooks10@gmail.com" },
  { icon: "phone", title: "Call us", detail: "+977 984 729 6992", sub: "Mon to Fri, 9am to 5pm GMT", href: "tel:+9779847296992" },
  { icon: "pin", title: "Where we are", detail: "Kathmandu, Nepal", sub: "Serving UK clients remotely", href: "#map" },
]

/* ───────────────────────── Form ───────────────────────── */

const labelStyle: CSSProperties = { display: "block", fontSize: "12.5px", fontWeight: 700, color: "#1a3318", marginBottom: "8px", letterSpacing: "0.01em" }

function useFormState() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({ name: "", email: "", phone: "", country: "+44", address: "", service: "", message: "" })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error("Failed to send")
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please email us directly at sahajbooks10@gmail.com")
    } finally {
      setLoading(false)
    }
  }

  return { submitted, loading, error, form, setForm, handleSubmit }
}

function ContactForm({ isMobile }: { isMobile: boolean }) {
  const { submitted, loading, error, form, setForm, handleSubmit } = useFormState()
  const [focused, setFocused] = useState<string>("")

  const field = (key: string): CSSProperties => ({
    width: "100%", padding: "13px 15px", borderRadius: "11px",
    border: `1px solid ${focused === key ? "#6abf47" : "#e2e4dd"}`,
    background: focused === key ? "#fbfdf9" : "#f8f9f6",
    fontSize: "14px", color: "#111", outline: "none", boxSizing: "border-box",
    fontFamily: "inherit", transition: "border-color 0.18s, background 0.18s",
    boxShadow: focused === key ? "0 0 0 3px rgba(106,191,71,0.12)" : "none",
  })

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: isMobile ? "48px 0" : "72px 0" }}>
        <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease }}
          style={{ width: "76px", height: "76px", borderRadius: "50%", background: "#eef9e3", border: "2px solid rgba(106,191,71,0.35)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
          <Icon name="check" color="#4a8a2a" size={34} stroke={2.4} />
        </motion.div>
        <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "30px", color: "#1a3318", marginBottom: "10px" }}>Message received</h3>
        <p style={{ color: "#6b6b6b", fontSize: "15px", lineHeight: 1.6 }}>Thank you. A qualified accountant will be in touch<br />within one working day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
        <div>
          <label style={labelStyle}>Full name</label>
          <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={() => setFocused("name")} onBlur={() => setFocused("")} placeholder="Your full name" style={field("name")} />
        </div>
        <div>
          <label style={labelStyle}>Email address</label>
          <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onFocus={() => setFocused("email")} onBlur={() => setFocused("")} placeholder="you@company.com" style={field("email")} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "12px", marginBottom: "16px" }}>
        <div>
          <label style={labelStyle}>Code</label>
          <select value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} onFocus={() => setFocused("country")} onBlur={() => setFocused("")} style={field("country")}>
            {countryCodes.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Phone number</label>
          <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} onFocus={() => setFocused("phone")} onBlur={() => setFocused("")} placeholder="07700 000000" style={field("phone")} />
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={labelStyle}>Business address <span style={{ color: "#aaa", fontWeight: 500 }}>(optional)</span></label>
        <input type="text" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} onFocus={() => setFocused("address")} onBlur={() => setFocused("")} placeholder="Your business address" style={field("address")} />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={labelStyle}>Service required</label>
        <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} onFocus={() => setFocused("service")} onBlur={() => setFocused("")} style={field("service")}>
          <option value="">Select a service</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <label style={labelStyle}>How can we help?</label>
        <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={() => setFocused("message")} onBlur={() => setFocused("")} placeholder="Tell us a little about your business and what you need help with." style={{ ...field("message"), resize: "none" }} />
      </div>

      {error && <p style={{ fontSize: "13px", color: "#c0392b", marginBottom: "14px", textAlign: "center" }}>{error}</p>}

      <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="submit" disabled={loading}
        style={{ width: "100%", padding: "16px", borderRadius: "13px", background: loading ? "#9bbf86" : "#6abf47", color: "#0f2609", fontWeight: 700, fontSize: "15px", border: "none", cursor: loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", boxShadow: "0 10px 28px rgba(106,191,71,0.3)" }}>
        {loading ? "Sending…" : <>Send message <Icon name="arrow" color="#0f2609" size={17} /></>}
      </motion.button>
      <p style={{ fontSize: "12px", color: "#9a9a9a", textAlign: "center", marginTop: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
        <Icon name="shield" color="#9a9a9a" size={13} /> Your details stay private and are never shared.
      </p>
    </form>
  )
}

/* ───────────────────────── Page ───────────────────────── */

export default function ContactPage() {
  const isMobile = useIsMobile()
  if (isMobile) return <MobileContact />

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", background: "#f5f5f0" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(165deg, #102609 0%, #1a3a12 60%, #f5f5f0 100%)", paddingTop: "150px", paddingBottom: "120px", position: "relative", overflow: "hidden" }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1, pointerEvents: "none" }}>
            <defs><pattern id="contact-dots" x="0" y="0" width="34" height="34" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="rgba(168,224,112,0.8)" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#contact-dots)" />
          </svg>
          <div style={{ position: "absolute", top: "-160px", left: "50%", transform: "translateX(-50%)", width: "520px", height: "520px", borderRadius: "50%", background: "radial-gradient(circle, rgba(106,191,71,0.16) 0%, transparent 65%)", pointerEvents: "none" }} />

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}
            style={{ maxWidth: "720px", margin: "0 auto", padding: "0 64px", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(106,191,71,0.12)", border: "1px solid rgba(106,191,71,0.25)", borderRadius: "100px", padding: "6px 16px", marginBottom: "26px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.1em" }}>Get in touch</span>
            </div>
            <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(40px, 5.5vw, 62px)", color: "white", lineHeight: 1.08, letterSpacing: "-0.5px", marginBottom: "18px" }}>
              Let us handle<br /><span style={{ color: "#a8e070", fontStyle: "italic" }}>the numbers</span>
            </h1>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
              Tell us what you need. A qualified ACCA accountant will reply within one working day, no call centres in between.
            </p>
          </motion.div>
        </section>

        {/* Split card */}
        <section style={{ padding: "0 0 70px" }}>
          <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 48px" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.1 }}
              style={{ display: "grid", gridTemplateColumns: "0.82fr 1.18fr", background: "white", borderRadius: "26px", overflow: "hidden", border: "1px solid #e8e8e4", boxShadow: "0 30px 80px rgba(0,0,0,0.1)", transform: "translateY(-60px)" }}>

              {/* Left info panel */}
              <div style={{ background: "linear-gradient(165deg, #1a3318 0%, #27501c 100%)", padding: "44px 40px", position: "relative", overflow: "hidden" }}>
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }}><rect width="100%" height="100%" fill="url(#contact-dots)" /></svg>
                <div style={{ position: "relative" }}>
                  <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", color: "white", lineHeight: 1.2, marginBottom: "10px" }}>Talk to a real accountant</h2>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: "32px" }}>
                    Prefer to skip the form? Reach us directly through any of the channels below.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px" }}>
                    {contactMethods.map((m) => (
                      <a key={m.title} href={m.href} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px", borderRadius: "14px", textDecoration: "none", transition: "background 0.2s" }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}>
                        <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(106,191,71,0.15)", border: "1px solid rgba(106,191,71,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon name={m.icon} color="#a8e070" size={20} />
                        </div>
                        <div>
                          <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>{m.title}</div>
                          <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "2px" }}>{m.detail}</div>
                          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>{m.sub}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Hours */}
                  <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "16px 18px", marginBottom: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                      <Icon name="clock" color="#6abf47" size={15} />
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "white", textTransform: "uppercase", letterSpacing: "0.06em" }}>Office hours</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "rgba(255,255,255,0.6)", marginBottom: "5px" }}>
                      <span>Monday to Friday</span><span style={{ color: "white", fontWeight: 600 }}>9am to 5pm GMT</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
                      <span>Saturday and Sunday</span><span style={{ color: "rgba(255,255,255,0.45)" }}>Closed</span>
                    </div>
                  </div>

                  {/* Social */}
                  <div style={{ display: "flex", gap: "10px" }}>
                    {[
                      { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/sahaj-books-02629b418/" },
                      { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/sahajbooks.np/" },
                    ].map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "11px", borderRadius: "11px", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", fontSize: "12.5px", fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}
                        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(106,191,71,0.5)"; el.style.color = "white" }}
                        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.12)"; el.style.color = "rgba(255,255,255,0.7)" }}>
                        <Icon name={s.icon} color="currentColor" size={16} />{s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right form */}
              <div style={{ padding: "44px 44px" }}>
                <ContactForm isMobile={false} />
              </div>
            </motion.div>

            {/* Map */}
            <div id="map" style={{ background: "white", borderRadius: "20px", border: "1px solid #e8e8e4", overflow: "hidden", marginTop: "-40px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625951567!2d85.29111865!3d27.70895385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb96f1e81c2b77a90!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1234567890"
                width="100%" height="220" style={{ border: 0, display: "block", filter: "grayscale(0.2)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div style={{ padding: "16px 24px", display: "flex", alignItems: "center", gap: "10px" }}>
                <Icon name="pin" color="#6abf47" size={17} />
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#111" }}>Kathmandu, Nepal</span>
                <span style={{ fontSize: "13px", color: "#9a9a9a" }}>Serving UK clients remotely</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

/* ───────────────────────── Mobile ───────────────────────── */

function MobileContact() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#f5f5f0" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(168deg, #102609 0%, #1a3a12 55%, #27501c 100%)", paddingTop: "92px", paddingBottom: "30px", position: "relative", overflow: "hidden" }}>
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12, pointerEvents: "none" }}>
            <defs><pattern id="contact-dots-m" x="0" y="0" width="34" height="34" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="rgba(168,224,112,0.8)" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#contact-dots-m)" />
          </svg>
          <div style={{ position: "absolute", top: "-160px", left: "50%", transform: "translateX(-50%)", width: "440px", height: "440px", borderRadius: "50%", background: "radial-gradient(circle, rgba(106,191,71,0.22) 0%, transparent 65%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", padding: "0 20px" }}>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(106,191,71,0.12)", border: "1px solid rgba(106,191,71,0.25)", borderRadius: "100px", padding: "5px 13px", marginBottom: "16px" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#6abf47" }} />
              <span style={{ fontSize: "10px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.1em" }}>Get in touch</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.05 }}
              style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 9vw, 42px)", color: "white", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "12px" }}>
              Let us handle <span style={{ color: "#a8e070", fontStyle: "italic" }}>the numbers</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.12 }}
              style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "22px" }}>
              A qualified ACCA accountant replies within one working day.
            </motion.p>

            {/* Quick action buttons */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.18 }}
              style={{ display: "flex", gap: "10px" }}>
              <a href="tel:+9779847296992" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#6abf47", color: "#0f2609", fontWeight: 700, fontSize: "14px", padding: "13px 0", borderRadius: "12px", textDecoration: "none", boxShadow: "0 8px 22px rgba(106,191,71,0.3)" }}>
                <Icon name="phone" color="#0f2609" size={16} /> Call
              </a>
              <a href="mailto:sahajbooks10@gmail.com" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "white", fontWeight: 600, fontSize: "14px", padding: "13px 0", borderRadius: "12px", textDecoration: "none" }}>
                <Icon name="mail" color="#a8e070" size={16} /> Email
              </a>
            </motion.div>
          </div>
        </section>

        {/* Form card */}
        <section style={{ padding: "0 16px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.2 }}
            style={{ background: "white", borderRadius: "22px", padding: "24px 20px", border: "1px solid #e8e8e4", boxShadow: "0 16px 40px rgba(0,0,0,0.06)", transform: "translateY(-16px)" }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "24px", color: "#1a3318", marginBottom: "4px" }}>Send a message</h2>
            <p style={{ fontSize: "13px", color: "#9a9a9a", marginBottom: "22px" }}>We will get back to you within 24 hours.</p>
            <ContactForm isMobile={true} />
          </motion.div>
        </section>

        {/* Contact info list */}
        <section style={{ padding: "12px 16px 8px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {contactMethods.map((m, i) => (
              <motion.a key={m.title} href={m.href} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                style={{ display: "flex", alignItems: "center", gap: "14px", background: "white", borderRadius: "16px", padding: "16px", border: "1px solid #e8e8e4", textDecoration: "none" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#eef9e3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={m.icon} color="#4a8a2a" size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "3px" }}>{m.title}</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#111", marginBottom: "1px" }}>{m.detail}</div>
                  <div style={{ fontSize: "12px", color: "#9a9a9a" }}>{m.sub}</div>
                </div>
                <Icon name="arrow" color="#c2d4ba" size={18} />
              </motion.a>
            ))}
          </div>
        </section>

        {/* Map */}
        <section style={{ padding: "8px 16px 0" }}>
          <div style={{ background: "white", borderRadius: "16px", border: "1px solid #e8e8e4", overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625951567!2d85.29111865!3d27.70895385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb96f1e81c2b77a90!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1234567890"
              width="100%" height="160" style={{ border: 0, display: "block", filter: "grayscale(0.2)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Icon name="pin" color="#6abf47" size={15} />
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#111" }}>Kathmandu, Nepal</span>
            </div>
          </div>
        </section>

        {/* Social */}
        <section style={{ padding: "16px 16px 48px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/sahaj-books-02629b418/" },
              { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/sahajbooks.np/" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "white", padding: "13px", borderRadius: "13px", border: "1px solid #e8e8e4", color: "#6b6b6b", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                <Icon name={s.icon} color="#6abf47" size={17} />{s.label}
              </a>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
