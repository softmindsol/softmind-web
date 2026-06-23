"use client";
import React from "react";
import { Button } from "../ui/button";

export default function FinalCta() {
  return (
    <section className="relative w-full bg-[#161616] py-16 md:py-24 text-white overflow-hidden font-jakarta">
      {/* Background Accent Ellipse Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[350px] rounded-full pointer-events-none opacity-45 blur-[120px]"
        style={{ backgroundColor: "navy" }}
      />
      <div
        className="absolute top-[80%] right-[-100px] w-[350px] h-[350px] rounded-full pointer-events-none opacity-30 blur-[130px]"
        style={{ backgroundColor: "#0CBF83" }}
      />

      <div className="relative mx-auto px-6 md:px-12 max-w-[1289px] z-10">
        {/* Banner Card Frame */}
        <div className="bg-gradient-to-br from-[#00235A]/60 to-[#001433]/90 border border-white/[0.06] rounded-[32px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          {/* Inner Decorative Accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green/10 to-transparent pointer-events-none" />

          {/* Heading Text Column */}
          <div className="flex flex-col gap-4 max-w-[650px] text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#0CBF83_8.33%,#004BC0_93.33%)]" />
              <span className="text-green text-sm font-bold tracking-[2px] uppercase">
                Let&apos;s Partner Up
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-white capitalize">
              Scale Your Product & Dev Team Today
            </h2>
            <p className="text-sm md:text-base text-white/70 font-medium leading-[26px] tracking-wide mt-2">
              Schedule a free 30-minute consultation call with our team.
              We&apos;ll discuss your technical requirements, analyze codebase
              architecture, and offer direct roadmap timelines.
            </p>
          </div>

          {/* Conversion Button Actions Column */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 justify-center">
            <Button
              variant="default"
              className="w-full sm:w-auto px-8 py-6 font-bold"
              style={{
                backgroundColor: "#0CBF83",
                borderColor: "#0CBF83",
                color: "#00235A",
              }}
            >
              Book a Discovery Call
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 border-white text-white hover:bg-white/10 hover:text-white"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
