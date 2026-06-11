"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTA() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #1a3318 0%, #2d5a1b 50%, #1a3318 100%)",
      padding: "140px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px", height: "400px",
        background: "radial-gradient(ellipse, rgba(106,191,71,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Animated dot pattern */}
      <svg style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        opacity: 0.08, pointerEvents: "none",
      }}>
        <defs>
          <pattern id="cta-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="rgba(168,224,112,0.8)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-dots)" />
      </svg>

      <div style={{
        maxWidth: "800px", margin: "0 auto",
        padding: "0 64px", textAlign: "center",
        position: "relative", zIndex: 1,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(106,191,71,0.12)",
            border: "1px solid rgba(106,191,71,0.25)",
            borderRadius: "100px", padding: "6px 16px", marginBottom: "36px",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6abf47", display: "inline-block" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#6abf47", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Get started today
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(42px, 6vw, 72px)",
            color: "white", lineHeight: 1.05,
            letterSpacing: "-1px", marginBottom: "24px",
          }}>
            Simplifying compliance<br />
            for <span style={{ color: "#a8e070", fontStyle: "italic" }}>growing businesses</span>
          </h2>

          <p style={{
            fontSize: "18px", color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7, marginBottom: "48px",
            maxWidth: "520px", margin: "0 auto 48px",
          }}>
            Join UK businesses already working with SahajBooks. Clean books, zero stress, fair pricing.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#6abf47", color: "white",
                  fontWeight: 700, fontSize: "16px",
                  padding: "16px 40px", borderRadius: "12px",
                  textDecoration: "none",
                  boxShadow: "0 8px 32px rgba(106,191,71,0.3)",
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
                Get a Free Quote
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#services"
                style={{
                  display: "inline-block",
                  background: "transparent", color: "white",
                  fontWeight: 700, fontSize: "16px",
                  padding: "16px 40px", borderRadius: "12px",
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = "rgba(255,255,255,0.6)"
                  el.style.background = "rgba(255,255,255,0.06)"
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = "rgba(255,255,255,0.25)"
                  el.style.background = "transparent"
                }}
              >
                See Services
              </Link>
            </motion.div>
          </div>

          {/* Trust row */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "32px", marginTop: "64px", flexWrap: "wrap",
          }}>
            {[
              "No contract required",
              "ACCA qualified team",
              "Reply within 24 hours",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{
                  width: "16px", height: "16px", borderRadius: "50%",
                  background: "rgba(106,191,71,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="#6abf47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1.5 4l1.5 1.5 3-3"/>
                  </svg>
                </div>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}