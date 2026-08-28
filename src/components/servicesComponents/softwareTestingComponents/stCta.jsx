"use client";
import React from "react";

export default function StCta() {
  return (
    <section className="relative w-full overflow-hidden font-jakarta">
      {/* Gradient background */}
      <div className="bg-gradient-to-br from-[#00235A] via-[#001433] to-[#000d1f] py-20 md:py-28 relative">
        {/* Decorative orbs */}
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-green/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#004BC0]/30 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-green/20 blur-[100px] pointer-events-none" />

        {/* Top shimmer */}
        <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-green/40 to-transparent" />

        <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1000px] text-center flex flex-col items-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_10px_#0CBF83] animate-pulse" />
            <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
              Free QA Consultation
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[30px] sm:text-[40px] lg:text-[52px] font-black text-white leading-[1.1] tracking-tight">
            Don&apos;t Let Software Bugs{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#3b82f6]">
              Become Customer Problems
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-[16px] md:text-[18px] text-white/65 leading-[1.75] font-medium max-w-[640px]">
            Let&apos;s build a testing strategy that protects your product and
            accelerates your growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-green hover:bg-[#0aad76] text-white font-black text-[15px] tracking-wide rounded-full px-9 py-4 transition-all duration-300 hover:shadow-[0_0_36px_rgba(12,191,131,0.5)] hover:scale-[1.04] active:scale-[0.98]"
            >
              Get a Free QA Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold text-[14px] transition-colors duration-200"
            >
              View all services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            {[
              { label: "No commitment required" },
              { label: "Free 30-min session" },
              { label: "Onboard in 7–14 days" },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green/20 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[13px] text-white/50 font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
