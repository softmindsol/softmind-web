"use client";

import React from "react";
import Link from "next/link";
import OurWork from "@/components/home/ourWork";
import CustomButton from "@/components/customs/customButton";

export default function WebAppCaseStudy() {
  return (
    <div className="relative w-full bg-[#161616] font-jakarta overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#004BC0]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Overlay Section */}
      <div className="py-20 w-full mx-auto px-6 lg:px-12 text-center flex flex-col items-center relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
          <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
            Web App Development Case Studies
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-white max-w-[800px]">
          See How We Turn Complex Requirements Into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
            Digital Solutions
          </span>
        </h2>
        <p className="text-[16px] md:text-[18px] text-white/80 font-medium leading-[26px] max-w-[850px] mt-4">
          Explore how our team helps businesses automate processes, improve user experiences, modernize legacy systems, and build scalable digital products.
        </p>

        <div className="mt-8">
          <Link href="/case-studies">
            <CustomButton btnText="View Our Case Studies" />
          </Link>
        </div>
      </div>

      {/* Render Portfolio Slider Component (Dark mode assumed or overrides) */}
      <div className="brightness-125 contrast-125 filter">
        <OurWork />
      </div>
    </div>
  );
}
