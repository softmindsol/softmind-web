"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomButton from "@/components/customs/customButton";
import OurWork from "@/components/home/ourWork";

export default function PdCaseStudy() {
  return (
    <div className="relative w-full bg-[#161616] font-jakarta overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#004BC0]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#0CBF83]/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="py-20 w-full mx-auto px-6 lg:px-12 text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5 max-w-[860px]"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_8px_#0CBF83]" />
            <span className="text-[#0CBF83] text-sm font-semibold tracking-widest uppercase">
              Case Studies
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold text-white">
            Case Study: Building a Scalable Digital Product{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              From the Ground Up
            </span>
          </h2>

          <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium">
            From Product Challenge to Business Impact — See How We Turn Complex Product
            Requirements Into Scalable Solutions.
          </p>
          <p className="text-white/60 text-base leading-relaxed max-w-[750px]">
            Explore how Softmind has helped businesses transform ideas, modernize existing
            platforms, and build digital products designed around real customer and business needs.
          </p>

          <div className="mt-4">
            <Link href="/case-studies">
              <CustomButton btnText="Explore Our Case Studies" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="brightness-125 contrast-125 filter">
        <OurWork />
      </div>
    </div>
  );
}
