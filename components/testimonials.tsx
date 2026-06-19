"use client"

import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns"
import { useIsMobile } from "@/hooks/use-mobile"

const testimonials = [
  {
    text: "Switching to SahajBooks was the best business decision I made this year. My VAT returns are always on time and I never have to chase anyone.",
    name: "James Whitfield",
    role: "Director, Whitfield Electrical Ltd",
    initials: "JW",
    bg: "#1a3318",
  },
  {
    text: "As a landlord with multiple properties, my SA100 was always a nightmare. SahajBooks sorted everything in 48 hours. The price is unbelievably fair.",
    name: "Sarah Pemberton",
    role: "Property Landlord, Manchester",
    initials: "SP",
    bg: "#2d7a4f",
  },
  {
    text: "Our CIS returns used to stress me out every month. Now I send over the figures and SahajBooks handles the rest. Exactly what a busy contractor needs.",
    name: "Ryan Clarke",
    role: "Owner, Clarke Construction Services",
    initials: "RC",
    bg: "#6abf47",
  },
  {
    text: "I was paying my local accountant three times the price for slower work. SahajBooks does everything and they actually respond when I email.",
    name: "Mark Hussain",
    role: "CEO, Hussain Retail Group",
    initials: "MH",
    bg: "#1e5c3a",
  },
  {
    text: "The payroll service is flawless. Every month our RTI is submitted on time without me lifting a finger. Genuinely impressive service.",
    name: "Tom Bradley",
    role: "Managing Director, Bradley Logistics",
    initials: "TB",
    bg: "#4a9e6b",
  },
  {
    text: "We saved over £2,000 in the first year alone compared to our previous accountant. The quality of work is exactly the same if not better.",
    name: "Priya Sharma",
    role: "Founder, Sharma Consulting",
    initials: "PS",
    bg: "#2d5a1b",
  },
  {
    text: "Filing deadlines used to keep me up at night. Now I just send documents over and SahajBooks takes care of everything. Total peace of mind.",
    name: "Daniel Foster",
    role: "Sole Trader, Foster Photography",
    initials: "DF",
    bg: "#3d6b35",
  },
  {
    text: "The management accounts they produce every quarter have genuinely helped me make better decisions. Clear, well structured and always on time.",
    name: "Emma Richardson",
    role: "Director, Richardson Interiors",
    initials: "ER",
    bg: "#1a3318",
  },
  {
    text: "Absolutely worth every penny. The team is responsive, knowledgeable and proactive. I wish I had found SahajBooks sooner.",
    name: "Khalid Mahmood",
    role: "Owner, Mahmood Trading Ltd",
    initials: "KM",
    bg: "#6abf47",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export default function Testimonials() {
  const isMobile = useIsMobile()

  return (
    <section style={{ background: "#f5f5f0", padding: isMobile ? "48px 0" : "120px 0", position: "relative" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 64px" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: isMobile ? "36px" : "72px" }}
        >
          <div style={{
            fontSize: "13px", fontWeight: 700, color: "#6abf47",
            textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px",
          }}>
            Testimonials
          </div>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(34px, 4vw, 50px)",
            color: "#111", lineHeight: 1.1,
            letterSpacing: "-0.5px", marginBottom: "16px",
          }}>
            What our clients say
          </h2>
          <p style={{
            fontSize: "16px", color: "#6b6b6b",
            lineHeight: 1.7, maxWidth: "440px", margin: "0 auto",
          }}>
            UK businesses trust SahajBooks to handle their compliance cleanly and on time.
          </p>
        </motion.div>

        {isMobile ? (
          <div style={{
            display: "flex",
            gap: "12px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            margin: "0 -20px",
            padding: "4px 20px 20px",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}>
            {[...testimonials].map((t, i) => (
              <div key={i} style={{
                flexShrink: 0,
                width: "calc(85vw - 40px)",
                maxWidth: "280px",
                scrollSnapAlign: "start",
                background: "white",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid #e8e8e4",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              }}>
                <div style={{ display: "flex", gap: "3px", marginBottom: "12px" }}>
                  {[...Array(5)].map((_, s) => (
                    <div key={s} style={{ width: "10px", height: "10px", background: "#6abf47", clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
                  ))}
                </div>
                <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "14px", lineHeight: 1.65, color: "#111", marginBottom: "16px", fontStyle: "italic" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "white", flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#111" }}>{t.name}</div>
                    <div style={{ fontSize: "10px", color: "#6b6b6b" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            maxHeight: "720px",
            overflow: "hidden",
            maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          }}>
            <TestimonialsColumn testimonials={firstColumn} duration={18} />
            <TestimonialsColumn testimonials={secondColumn} duration={22} />
            <TestimonialsColumn testimonials={thirdColumn} duration={20} />
          </div>
        )}
      </div>
    </section>
  )
}
