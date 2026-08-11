"use client";

import React from "react";
import Link from "next/link";
import OurWork from "@/components/home/ourWork";
import CustomButton from "@/components/customs/customButton";

export default function CustomSoftwareCaseStudy() {
  return (
    <div className="relative w-full bg-[#161616]">
      {/* Header Overlay Section */}
      <div className="pt-20 lg:pt-24 pb-8 max-w-[1280px] mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
          <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
            Case Studies
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-white max-w-[800px]">
          Real Results. Real Business Impact.
        </h2>
        <p className="text-[16px] md:text-[18px] text-white/80 font-medium leading-[26px] max-w-[850px] mt-4">
          Every business challenge is unique, and so is every solution we build. Explore how Softmind Solutions has helped organizations streamline operations, launch innovative digital products, modernize legacy systems, and achieve measurable business outcomes through custom software development.
        </p>

        <div className="mt-8">
          <Link href="/contact">
            <CustomButton btnText="Explore Case Studies" />
          </Link>
        </div>
      </div>

      {/* Render Portfolio Slider Component */}
      <OurWork />
    </div>
  );
}
