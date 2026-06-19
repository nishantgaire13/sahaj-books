"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { useIsMobile } from "@/hooks/use-mobile"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "+44",
    address: "",
    service: "",
    message: "",
  })
  const isMobile = useIsMobile()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Failed to send")
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try emailing us directly at sahajbooks10@gmail.com")
    } finally {
      setLoading(false)
    }
  }

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

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid #e8e8e4",
    background: "#f5f5f0",
    fontSize: "14px",
    color: "#111",
    outline: "none",
    boxSizing: "border-box" as const,
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", background: "#f5f5f0", paddingTop: isMobile ? "90px" : "100px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: isMobile ? "36px" : "64px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#f0fae8", border: "1px solid rgba(106,191,71,0.3)",
              borderRadius: "100px", padding: "6px 16px", marginBottom: "20px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47", display: "inline-block" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.1em" }}>Get in touch</span>
            </div>
            <h1 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(30px, 5vw, 56px)",
              color: "#1a3318", marginBottom: "16px", lineHeight: 1.1,
            }}>
              Let us handle the numbers
            </h1>
            <p style={{ fontSize: isMobile ? "15px" : "17px", color: "#6b6b6b", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
              Tell us what you need and we will get back to you within 24 hours.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
            gap: isMobile ? "24px" : "32px",
            alignItems: "start",
          }}>

            {/* Form */}
            <div style={{ background: "white", borderRadius: "20px", padding: isMobile ? "24px 20px" : "40px", border: "1px solid #e8e8e4" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{
                    width: "72px", height: "72px", borderRadius: "50%",
                    background: "#f0fae8", border: "2px solid rgba(106,191,71,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "32px", margin: "0 auto 20px",
                  }}>✓</div>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "28px", color: "#1a3318", marginBottom: "10px" }}>Message received</h3>
                  <p style={{ color: "#6b6b6b", fontSize: "15px" }}>We will be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>Full Name</label>
                      <input
                        type="text" required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>Email Address</label>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "140px 1fr", gap: "12px", marginBottom: "20px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>Country Code</label>
                      <select
                        value={form.country}
                        onChange={e => setForm({ ...form, country: e.target.value })}
                        style={inputStyle}
                      >
                        {countryCodes.map(c => (
                          <option key={c.code} value={c.code}>{c.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="07700 000000"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>Business Address</label>
                    <input
                      type="text"
                      value={form.address}
                      onChange={e => setForm({ ...form, address: e.target.value })}
                      placeholder="Your business address"
                      style={inputStyle}
                    />
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>Service Required</label>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      style={inputStyle}
                    >
                      <option value="">Select a service</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: "28px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>Message</label>
                    <textarea
                      required rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your business and what you need help with"
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </div>

                  {error && (
                    <p style={{ fontSize: "13px", color: "#c0392b", marginBottom: "12px", textAlign: "center" }}>{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%", padding: "15px",
                      borderRadius: "12px", background: loading ? "#aaa" : "#6abf47",
                      color: "white", fontWeight: 700, fontSize: "15px",
                      border: "none", cursor: loading ? "not-allowed" : "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = "#1a3318" }}
                    onMouseLeave={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = "#6abf47" }}
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Right side */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Contact cards */}
              {[
                { icon: "✉️", title: "Email Us", detail: "sahajbooks10@gmail.com", sub: "We reply within 24 hours", href: "mailto:sahajbooks10@gmail.com" },
                { icon: "📞", title: "Call Us", detail: "+44 20 0000 0000", sub: "Mon to Fri, 9am to 5pm GMT", href: "tel:+442000000000" },
                { icon: "📍", title: "Office", detail: "Kathmandu, Nepal", sub: "Serving UK clients remotely", href: "#" },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  style={{
                    background: "white", borderRadius: "16px",
                    padding: "20px 24px", border: "1px solid #e8e8e4",
                    display: "flex", alignItems: "center", gap: "16px",
                    textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = "rgba(106,191,71,0.4)"
                    el.style.boxShadow = "0 4px 20px rgba(106,191,71,0.1)"
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = "#e8e8e4"
                    el.style.boxShadow = "none"
                  }}
                >
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "12px",
                    background: "#f0fae8", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: "20px", flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>{item.title}</div>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#111", marginBottom: "2px" }}>{item.detail}</div>
                    <div style={{ fontSize: "12px", color: "#6b6b6b" }}>{item.sub}</div>
                  </div>
                </a>
              ))}

              {/* Map placeholder — desktop only */}
              {!isMobile && (
                <div style={{
                  background: "white", borderRadius: "16px",
                  border: "1px solid #e8e8e4", overflow: "hidden",
                }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625951567!2d85.29111865!3d27.70895385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb96f1e81c2b77a90!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="180"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47" }} />
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#111" }}>Kathmandu, Nepal</span>
                    <span style={{ fontSize: "12px", color: "#aaa", marginLeft: "4px" }}>Serving UK clients remotely</span>
                  </div>
                </div>
              )}

              {/* Social links — desktop only */}
              {!isMobile && (
                <div style={{ background: "white", borderRadius: "16px", padding: "20px 24px", border: "1px solid #e8e8e4" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Follow Us</div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {[
                      { label: "LinkedIn", color: "#0077b5", href: "https://www.linkedin.com/in/sahaj-books-02629b418/" },
                      { label: "Instagram", color: "#e1306c", href: "https://www.instagram.com/sahajbooks.np/" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1, padding: "10px 8px", borderRadius: "10px",
                          border: "1px solid #e8e8e4", fontSize: "12px",
                          fontWeight: 700, color: "#6b6b6b",
                          textDecoration: "none", textAlign: "center",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={e => {
                          const el = e.currentTarget as HTMLElement
                          el.style.borderColor = s.color
                          el.style.color = s.color
                          el.style.background = `${s.color}10`
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget as HTMLElement
                          el.style.borderColor = "#e8e8e4"
                          el.style.color = "#6b6b6b"
                          el.style.background = "transparent"
                        }}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
