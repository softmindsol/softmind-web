"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  HeartPulse,
  GraduationCap,
  Landmark,
  Building2,
  ShoppingCart,
} from "lucide-react";

const stages = [
  {
    icon: Rocket,
    tag: "Startups & Emerging Businesses",
    title: "Startups & Emerging Businesses",
    description:
      "Validate your idea, build an MVP, and get to market faster without overengineering your first product.",
    gradient: "from-[#0CBF83] to-[#00b87a]",
    accentColor: "#0CBF83",
    border: "border-[#0CBF83]/20",
    hoverBorder: "hover:border-[#0CBF83]/50",
    tagBg: "bg-[#0CBF83]/10",
    tagColor: "text-[#0CBF83]",
  },
  {
    icon: TrendingUp,
    tag: "Growing Businesses",
    title: "Growing Businesses",
    description:
      "Improve an existing product, introduce new capabilities, and create the technical foundation needed to scale.",
    gradient: "from-[#004BC0] to-[#0038FF]",
    accentColor: "#004BC0",
    border: "border-[#004BC0]/20",
    hoverBorder: "hover:border-[#004BC0]/50",
    tagBg: "bg-[#004BC0]/10",
    tagColor: "text-[#004BC0]",
  },
];

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare & Fitness",
    description:
      "Build secure digital health platforms, fitness applications, patient experiences, and connected solutions.",
    color: "#ec4899",
    gradient: "from-[#ec4899] to-[#f43f5e]",
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description:
      "Develop engaging learning platforms, education applications, assessment solutions, and AI-powered learning experiences.",
    color: "#6366f1",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    icon: Landmark,
    title: "FinTech",
    description:
      "Create secure financial products with reliable integrations, automation, analytics, and scalable infrastructure.",
    color: "#0CBF83",
    gradient: "from-[#0CBF83] to-[#00b87a]",
  },
  {
    icon: Building2,
    title: "PropTech",
    description:
      "Build property marketplaces, management platforms, tenant solutions, and real estate technology products.",
    color: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#ef4444]",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Deliver high-performing commerce platforms that improve customer experiences, conversions, and operational efficiency.",
    color: "#14b8a6",
    gradient: "from-[#14b8a6] to-[#0ea5e9]",
  },
];

export default function PdForStages() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0CBF83]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004BC0]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* ──────────── Stage Cards ──────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0CBF83]/10 border border-[#0CBF83]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0CBF83]" />
            <span className="text-[#0CBF83] text-sm font-semibold tracking-widest uppercase">
              Who We Build For
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-[#2E2E2E] mb-5">
            Product Development for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Every Stage of Growth
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20 lg:mb-28 max-w-5xl mx-auto">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className={`group relative bg-white rounded-[28px] p-8 lg:p-10 border ${stage.border} ${stage.hoverBorder} shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Top gradient accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${stage.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}
                />
                {/* Corner glow */}
                <div
                  className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${stage.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 pointer-events-none`}
                />

                {/* Tag */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${stage.tagBg} mb-6`}>
                  <Icon className={`w-4 h-4 ${stage.tagColor}`} />
                  <span className={`text-sm font-bold tracking-wide ${stage.tagColor}`}>
                    {stage.tag}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-[28px] font-bold text-[#2E2E2E] mb-4 leading-tight">
                  {stage.title}
                </h3>
                <p className="text-[#666666] text-base leading-[26px] font-medium">
                  {stage.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ──────────── Industries ──────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#004BC0]/10 border border-[#004BC0]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#004BC0]" />
            <span className="text-[#004BC0] text-sm font-semibold tracking-widest uppercase">
              Industries We Build For
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[52px] font-bold text-[#2E2E2E] mb-4">
            Our product development expertise can be tailored to the unique requirements of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              different industries and business models.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative bg-white border border-gray-100 rounded-3xl p-7 flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden ${
                  idx === 4
                    ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
                    : ""
                }`}
              >
                {/* Top accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${ind.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${ind.gradient} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-[#2E2E2E] mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                  style={{
                    WebkitTextFillColor: "inherit",
                  }}
                >
                  <span
                    className="group-hover:text-transparent group-hover:bg-clip-text bg-gradient-to-r transition-all duration-300"
                    style={{
                      "--tw-gradient-from": ind.color,
                      "--tw-gradient-to": ind.color + "aa",
                    }}
                  >
                    {ind.title}
                  </span>
                </h3>
                <p className="text-[#666666] text-sm leading-[24px] font-medium flex-grow">
                  {ind.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
