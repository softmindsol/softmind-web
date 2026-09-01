"use client";
import React from "react";
import { FiArrowRight, FiShield, FiClock, FiCalendar } from "react-icons/fi";

export default function StCta() {
  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden font-jakarta bg-[#0A0F1E]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[-50px] right-[-50px] w-[400px] h-[400px] bg-[#004BC0]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] bg-[#0CBF83]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-8 max-w-[1000px]">
        {/* Glassmorphism Card Container */}
        <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/[0.08] backdrop-blur-xl p-8 sm:p-10 md:p-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {/* Inner Decorative Lines */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-green/50 to-transparent" />
          <div className="absolute bottom-0 left-1/3 right-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#004BC0]/50 to-transparent" />

          {/* Animated Pulse Badge */}
          <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-6 shadow-[0_0_15px_rgba(12,191,131,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
            </span>
            <span className="text-green text-[10.5px] font-bold tracking-[2px] uppercase">
              Free QA Consultation
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-black text-white leading-[1.15] tracking-tight mb-5 max-w-[700px] mx-auto">
            Don&apos;t Let Software Bugs <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] via-[#0CBF83] to-[#3b82f6]">
              Become Customer Problems
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-[14.5px] md:text-[16px] text-white/60 leading-[1.7] font-medium max-w-[600px] mx-auto mb-8">
            Let&apos;s build a testing strategy that protects your product,
            ensures flawless user experiences, and accelerates your business
            growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <a
              href="/contact-us"
              className="group relative inline-flex items-center justify-center gap-2.5 bg-green hover:bg-[#0aad76] text-white font-bold text-[14px] sm:text-[15px] tracking-wide rounded-full px-7 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(12,191,131,0.35)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Get a Free QA Consultation
              <FiArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            {/* <a
              href="/services"
              className="group inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 font-bold text-[14px] sm:text-[15px] transition-all duration-300"
            >
              View all services
              <FiArrowRight size={15} className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </a> */}
          </div>

          {/* Value Props / Trust Badges - Horizontal inline design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 pt-6 border-t border-white/[0.06]">
            {[
              {
                icon: <FiShield className="text-green" size={16} />,
                label: "No commitment required",
              },
              {
                icon: <FiClock className="text-green" size={16} />,
                label: "Free 30-min session",
              },
              {
                icon: <FiCalendar className="text-green" size={16} />,
                label: "Onboard in 7–14 days",
              },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 group cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-green/10 group-hover:border-green/20 group-hover:shadow-[0_0_15px_rgba(12,191,131,0.15)] transition-all duration-300">
                  {badge.icon}
                </div>
                <span className="text-[13px] text-white/60 font-medium group-hover:text-white/80 transition-colors duration-300">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
