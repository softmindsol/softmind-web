"use client";
import React from "react";
import { ArrowRight, CalendarCheck, PhoneCall, Star } from "lucide-react";
import CustomButton from "../customs/customButton";

const TRUST_STATS = [
  { value: "300+", label: "Happy Clients" },
  { value: "14+", label: "Years Experience" },
  { value: "100+", label: "Projects Shipped" },
  { value: "80+", label: "Engineers" },
];

export default function FinalCta() {
  return (
    <section className="relative w-full bg-white py-20 md:py-28 overflow-hidden font-jakarta">
      {/* ── Multi-layered background glow system ── */}

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1289px]">
        {/* ── Glowing pill badge ── */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
              Ready to Build Together
            </span>
          </div>
        </div>

        {/* ── Main heading ── */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] lg:leading-[1.12] font-bold text-navy tracking-tight max-w-[780px] mx-auto">
            Let&apos;s Turn Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
              Vision Into a Product
            </span>{" "}
            the World Uses
          </h2>
          <p className="mt-5 text-sm md:text-base text-grey font-medium leading-[26px] tracking-wide max-w-[580px] mx-auto">
            Book a free 30-minute discovery call. We&apos;ll walk through your
            requirements, suggest architecture, and give you a realistic
            timeline — no commitment required.
          </p>
        </div>

        {/* ── Action Card ── */}
        <div className="relative rounded-[28px] overflow-hidden border border-white/[0.07] shadow-[0_0_60px_rgba(0,35,90,0.4)]">
          {/* Card gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00235A]/70 via-[#001433]/80 to-[#000d1f]/90" />

          {/* Shimmering top-edge accent line */}
          <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-green/60 to-transparent" />

          {/* Decorative corner orb */}
          <div className="absolute top-[-60px] right-[-60px] w-[220px] h-[220px] rounded-full bg-gradient-to-br from-green/20 to-transparent blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-8 md:p-14">
            {/* Left: CTA options */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center shrink-0 w-full lg:w-auto">
              {/* Primary CTA */}
              <a
                href="#"
                className="group flex items-center gap-3 w-full sm:w-auto bg-green hover:bg-[#0aad76] text-navy font-bold text-[15px] tracking-wide rounded-full px-7 py-4 transition-all duration-300 hover:shadow-[0_0_28px_rgba(12,191,131,0.45)] hover:scale-[1.03] active:scale-[0.98]"
              >
                <CalendarCheck className="w-5 h-5 shrink-0" />
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 ml-auto sm:ml-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#"
                className="group flex items-center gap-3 w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-bold text-[15px] tracking-wide rounded-full px-7 py-4 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <PhoneCall className="w-5 h-5 shrink-0" />
                Talk to Sales
              </a>
            </div>

            {/* Vertical divider (desktop only) */}
            <div className="hidden lg:block w-[1px] self-stretch bg-gradient-to-b from-transparent via-white/10 to-transparent shrink-0" />

            {/* Right: Trust micro-signals */}
            <div className="flex flex-col items-center lg:items-start gap-5 w-full lg:w-auto">
              {/* Star row */}
              <div className="flex items-center gap-1.5">
                {/* 4 Full Stars */}
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FFBF00] text-[#FFBF00]"
                  />
                ))}

                {/* Half Star */}
                <div className="relative w-4 h-4">
                  {/* Empty star */}
                  <Star className="absolute inset-0 w-4 h-4 text-[#FFBF00]" />

                  {/* Half filled star */}
                  <div className="absolute inset-0 overflow-hidden w-1/2">
                    <Star className="w-4 h-4 fill-[#FFBF00] text-[#FFBF00]" />
                  </div>
                </div>

                <span className="ml-2 text-white/60 text-sm font-medium">
                  4.9 / 5 from our clients
                </span>
              </div>

              {/* Stats mini-grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-4">
                {TRUST_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center lg:items-start gap-0.5"
                  >
                    <span className="text-2xl font-bold text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs text-white/45 font-medium tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shimmering bottom-edge accent line */}
          <div className="absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Footer note ── */}
        <p className="text-center text-white/30 text-xs font-medium mt-6 tracking-wide">
          No credit card required &nbsp;·&nbsp; Free 30-min discovery call
          &nbsp;·&nbsp; NDA available on request
        </p>
      </div>
    </section>
  );
}
