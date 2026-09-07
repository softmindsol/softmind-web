"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SaCta() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden font-jakarta">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0CBF83] opacity-5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-[#F8F9FA] border border-gray-200 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0CBF83] shadow-[0_0_12px_#0CBF83]" />
          <span className="text-[#161616] font-bold tracking-[0.15em] uppercase text-xs md:text-sm">
            Have a Skill Gap?
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161616] leading-tight tracking-tight mb-6">
          Have a Skill Gap?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#4CE0A8]">
            Let&apos;s Fill It.
          </span>
        </h2>

        <p className="text-[16px] md:text-[18px] text-gray-600 font-medium mb-4 max-w-2xl mx-auto leading-relaxed">
          Don&apos;t let hiring challenges slow down your next product release.
        </p>
        <p className="text-[16px] md:text-[17px] text-gray-500 mb-12 max-w-xl mx-auto">
          Tell us what you need. We&apos;ll help you build the right team.
        </p>

        <Link href="/contact-us">
          <button className="group inline-flex items-center gap-3 bg-[#0CBF83] hover:bg-[#0aa671] text-white px-10 py-5 rounded-full text-[17px] font-bold transition-all duration-300 shadow-[0_8px_25px_rgba(12,191,131,0.3)] hover:shadow-[0_12px_35px_rgba(12,191,131,0.45)] hover:-translate-y-1 cursor-pointer">
            Get in Touch
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </Link>
      </div>
    </section>
  );
}
