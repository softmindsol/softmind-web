"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, Building2, Package } from "lucide-react";

const stages = [
  {
    icon: Rocket,
    title: "Startups",
    description:
      "Build your MVP and product without the cost and complexity of establishing a full in-house engineering team.",
    gradient: "from-[#0CBF83] to-[#00b87a]",
    color: "#0CBF83",
    border: "border-[#0CBF83]/20",
    hoverBorder: "hover:border-[#0CBF83]/50",
    bg: "from-[#0CBF83]/6",
  },
  {
    icon: TrendingUp,
    title: "Growing Businesses",
    description:
      "Expand your development capacity, accelerate feature delivery, and access specialized technical expertise when you need it.",
    gradient: "from-[#004BC0] to-[#0038FF]",
    color: "#004BC0",
    border: "border-[#004BC0]/20",
    hoverBorder: "hover:border-[#004BC0]/50",
    bg: "from-[#004BC0]/6",
  },
  {
    icon: Building2,
    title: "Enterprises",
    description:
      "Add dedicated engineering capacity to large-scale initiatives, modernization projects, integrations, and digital transformation programs.",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
    color: "#6366f1",
    border: "border-[#6366f1]/20",
    hoverBorder: "hover:border-[#6366f1]/50",
    bg: "from-[#6366f1]/6",
  },
  {
    icon: Package,
    title: "Product Companies",
    description:
      "Create a long-term engineering team focused on continuously improving, maintaining, and scaling your product.",
    gradient: "from-[#f59e0b] to-[#ef4444]",
    color: "#f59e0b",
    border: "border-[#f59e0b]/20",
    hoverBorder: "hover:border-[#f59e0b]/50",
    bg: "from-[#f59e0b]/6",
  },
];

export default function DtStages() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 font-jakarta overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-[#0CBF83]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#004BC0]/5 rounded-full blur-[120px] pointer-events-none" />

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
              Who We Work With
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-[#2E2E2E] mb-5">
            Dedicated Teams for Every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Stage of Your Growth
            </span>
          </h2>
        </motion.div>

        {/* Stages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-3xl p-7 flex flex-col gap-5 border ${stage.border} ${stage.hoverBorder} bg-gradient-to-b ${stage.bg} to-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stage.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}
                />

                {/* Big number watermark */}
                <span
                  className="absolute -bottom-4 -right-4 text-[80px] font-black leading-none select-none pointer-events-none opacity-[0.04]"
                  style={{ color: stage.color }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${stage.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-3 leading-snug group-hover:text-transparent transition-all duration-300"
                    style={{}}
                  >
                    <span style={{ color: stage.color }}>{stage.title}</span>
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{stage.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
