"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Wrench } from "lucide-react";

const youControl = [
  "Product roadmap and priorities",
  "Feature requirements",
  "Development direction",
  "Business objectives",
  "Acceptance criteria",
  "Communication preferences",
  "Product and technology decisions",
];

const softmindHandles = [
  "Developer selection and onboarding",
  "Project coordination",
  "Sprint and task management",
  "QA and testing support",
  "Team continuity",
  "Technical expertise",
  "Performance monitoring",
  "Team scaling and replacement when required",
];

export default function DtControl() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 font-jakarta overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0CBF83]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004BC0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0CBF83]/10 border border-[#0CBF83]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0CBF83]" />
            <span className="text-[#0CBF83] text-sm font-semibold tracking-widest uppercase">
              The Model
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-[#2E2E2E] mb-5">
            What You Control.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              What Softmind Handles.
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#666666] leading-relaxed">
            Your Team, Your Product, Your Decisions. A dedicated development model should give you
            flexibility and control, not create another layer of complexity.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* You Control */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#0CBF83]/8 via-white to-white border border-[#0CBF83]/20 rounded-[32px] p-8 lg:p-10 overflow-hidden"
          >
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0CBF83] to-[#00b87a] rounded-t-[32px]" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0CBF83] to-[#00b87a] flex items-center justify-center text-white shadow-lg">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0CBF83] mb-0.5">
                  Your Domain
                </p>
                <h3 className="text-2xl font-bold text-[#2E2E2E] leading-tight">You Control</h3>
              </div>
            </div>

            <ul className="flex flex-col gap-4">
              {youControl.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-2 h-2 rounded-full bg-[#0CBF83] shrink-0 group-hover:scale-125 transition-transform duration-200" />
                  <span className="text-[#444444] font-medium text-sm leading-snug">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Softmind Supports */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-gradient-to-br from-[#004BC0]/8 via-white to-white border border-[#004BC0]/20 rounded-[32px] p-8 lg:p-10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#004BC0] to-[#0038FF] rounded-t-[32px]" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004BC0] to-[#0038FF] flex items-center justify-center text-white shadow-lg">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#004BC0] mb-0.5">
                  Our Domain
                </p>
                <h3 className="text-2xl font-bold text-[#2E2E2E] leading-tight">Softmind Supports</h3>
              </div>
            </div>

            <ul className="flex flex-col gap-4">
              {softmindHandles.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-2 h-2 rounded-full bg-[#004BC0] shrink-0 group-hover:scale-125 transition-transform duration-200" />
                  <span className="text-[#444444] font-medium text-sm leading-snug">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
