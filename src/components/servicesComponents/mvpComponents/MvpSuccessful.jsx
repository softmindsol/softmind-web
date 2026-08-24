"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Gem,
  Scissors,
  Smile,
  ShieldCheck,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

const traits = [
  { icon: Target, text: "Solve a clearly defined customer problem" },
  { icon: Users, text: "Focus on a specific target audience" },
  { icon: Gem, text: "Deliver a strong core value proposition" },
  { icon: Scissors, text: "Include only essential features" },
  { icon: Smile, text: "Provide a simple and intuitive user experience" },
  { icon: ShieldCheck, text: "Be technically reliable" },
  { icon: MessageCircle, text: "Collect meaningful user feedback" },
  { icon: TrendingUp, text: "Have a roadmap for future growth" },
];

export default function MvpSuccessful() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background decorations */}
      <div
        className="absolute top-1/3 right-[-150px] w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 blur-[160px]"
        style={{ backgroundColor: "#0CBF83" }}
      />
      <div
        className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none opacity-10 blur-[140px]"
        style={{ backgroundColor: "#004BC0" }}
      />

      <div className="relative w-full max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
              <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
                MVP Success
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[56px] font-bold tracking-[0.5px] text-dark mb-6">
              What Makes a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
                Successful MVP?
              </span>
            </h2>

            <p className="text-[16px] md:text-[18px] text-grey font-medium leading-[26px] mb-4">
              The goal is not to build the smallest product possible. The goal is
              to build the smallest product capable of delivering meaningful
              value and validating your business idea.
            </p>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0CBF83]/10 to-transparent border border-[#0CBF83]/20 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_8px_#0CBF83]" />
              <p className="text-dark text-sm font-semibold">
                A successful MVP should:
              </p>
            </div>
          </motion.div>

          {/* Right - Traits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {traits.map((trait, idx) => {
              const Icon = trait.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * idx }}
                  className="group flex items-start gap-4 bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#0CBF83]/30 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(12,191,131,0.08)] hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00235A] to-[#004BC0] flex items-center justify-center text-[#0CBF83] shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-dark text-sm font-semibold leading-snug pt-2">
                    {trait.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
