"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: {
    text: string;
    name: string;
    role: string;
    initials: string;
    bg: string;
  }[];
  duration?: number;
}) => {
  return (
    <div className={props.className} style={{ overflow: "hidden" }}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ display: "flex", flexDirection: "column", gap: "24px", paddingBottom: "24px" }}
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role, initials, bg }, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "28px",
                  border: "1px solid #e8e8e4",
                  maxWidth: "320px",
                  width: "100%",
                  boxShadow: "0 4px 24px rgba(26,51,24,0.06)",
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                  {[...Array(5)].map((_, s) => (
                    <div key={s} style={{
                      width: "12px", height: "12px",
                      background: "#6abf47",
                      clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    }} />
                  ))}
                </div>

                <p style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "16px", lineHeight: 1.65,
                  color: "#111", marginBottom: "20px",
                  fontStyle: "italic",
                }}>
                  {text}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "50%",
                    background: bg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", fontWeight: 700, color: "white",
                    flexShrink: 0,
                  }}>
                    {initials}
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#111" }}>{name}</div>
                    <div style={{ fontSize: "11px", color: "#6b6b6b" }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};