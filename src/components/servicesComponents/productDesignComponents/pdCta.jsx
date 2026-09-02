"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PdCta() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden font-jakarta">
      {/* Background Gradients for premium, modern tech feel */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] h-[80%] max-h-[800px] bg-green opacity-30 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0CBF83] shadow-[0_0_12px_#0CBF83]" />
          <span className="text-black font-bold tracking-[0.15em] uppercase text-xs md:text-sm">
            Start Your Journey
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark leading-[1.1] tracking-tight mb-8 drop-shadow-md">
          Let&apos;s Design a Product <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#4CE0A8]">
            Your Users Will Love
          </span>
        </h2>

        <p className="text-base md:text-lg text-grey font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Turn Complex Ideas Into Simple, Scalable Digital Experiences
        </p>

        <Link href="/contact-us">
          <Button className="group bg-[#0CBF83] hover:bg-[#0aa671] text-white px-8 md:px-10 py-7 md:py-8 rounded-full text-base md:text-lg font-bold transition-all duration-300 shadow-[0_8px_25px_rgba(12,191,131,0.3)] hover:shadow-[0_12px_35px_rgba(12,191,131,0.4)] flex items-center justify-center mx-auto hover:-translate-y-1 cursor-pointer">
            Let&apos;s Build Your Digital Product
            <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
