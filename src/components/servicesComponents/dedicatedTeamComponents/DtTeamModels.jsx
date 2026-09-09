"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Users, Puzzle, Clock, Rocket, CheckCircle2 } from "lucide-react";

const models = [
  {
    icon: User,
    title: "Dedicated Developer",
    description:
      "Need additional engineering capacity? Hire a dedicated developer who works exclusively on your product while Softmind provides project management and QA support at no additional cost.",
    bestFor:
      "Startups and businesses with an existing product or internal team that needs additional development capacity.",
    gradient: "from-[#0CBF83] to-[#00b87a]",
    accentColor: "#0CBF83",
    border: "border-[#0CBF83]/20",
    hoverBorder: "hover:border-[#0CBF83]/50",
    tagBg: "bg-[#0CBF83]/10",
    tagColor: "text-[#0CBF83]",
  },
  {
    icon: Users,
    title: "Dedicated Product Team",
    description:
      "Build a complete product team with developers, designers, QA engineers, and other specialists working toward the same product goals.",
    bestFor:
      "Businesses building a new digital product or expanding an existing development operation.",
    gradient: "from-[#004BC0] to-[#0038FF]",
    accentColor: "#004BC0",
    border: "border-[#004BC0]/20",
    hoverBorder: "hover:border-[#004BC0]/50",
    tagBg: "bg-[#004BC0]/10",
    tagColor: "text-[#004BC0]",
  },
  {
    icon: Puzzle,
    title: "Team Extension",
    description:
      "Add specialized technical talent to your existing engineering team without committing to lengthy recruitment and onboarding cycles.",
    bestFor:
      "Businesses that need additional capacity, specific expertise, or faster delivery.",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
    accentColor: "#6366f1",
    border: "border-[#6366f1]/20",
    hoverBorder: "hover:border-[#6366f1]/50",
    tagBg: "bg-[#6366f1]/10",
    tagColor: "text-[#6366f1]",
  },
  {
    icon: Clock,
    title: "Long-Term Dedicated Team",
    description:
      "Build a stable engineering unit that continuously develops, maintains, and scales your product over time.",
    bestFor:
      "Growing products with ongoing feature development and long-term technology requirements.",
    gradient: "from-[#f59e0b] to-[#ef4444]",
    accentColor: "#f59e0b",
    border: "border-[#f59e0b]/20",
    hoverBorder: "hover:border-[#f59e0b]/50",
    tagBg: "bg-[#f59e0b]/10",
    tagColor: "text-[#f59e0b]",
  },
  {
    icon: Rocket,
    title: "MVP Development Team",
    description:
      "Bring your product idea to market with a focused team built around your MVP requirements and launch goals.",
    bestFor:
      "Startups validating an idea and businesses launching a new digital product.",
    gradient: "from-[#14b8a6] to-[#0ea5e9]",
    accentColor: "#14b8a6",
    border: "border-[#14b8a6]/20",
    hoverBorder: "hover:border-[#14b8a6]/50",
    tagBg: "bg-[#14b8a6]/10",
    tagColor: "text-[#14b8a6]",
  },
];

export default function DtTeamModels() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative w-full bg-gray-50 py-20 lg:py-28 font-jakarta overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[40%] h-[40%] rounded-full bg-[#0CBF83]/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[35%] h-[35%] rounded-full bg-[#004BC0]/6 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#004BC0]/10 border border-[#004BC0]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#004BC0]" />
            <span className="text-[#004BC0] text-sm font-semibold tracking-widest uppercase">
              Team Models
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-[#2E2E2E] mb-5">
            Choose the Team Model That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Fits Your Business
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#666666] leading-relaxed">
            Not every business needs the same development setup. Build a team around your product
            stage, roadmap, and available resources.
          </p>
        </motion.div>

        {/* Models Grid — first 2 large, last 3 smaller */}
        <div className="flex flex-col gap-6">
          {/* Top row — 2 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {models.slice(0, 2).map((model, idx) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  onMouseEnter={() => setActive(idx)}
                  onMouseLeave={() => setActive(null)}
                  className={`group relative bg-white rounded-[28px] p-8 lg:p-10 border ${model.border} ${model.hoverBorder} shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-default`}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${model.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}
                  />
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${model.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                    style={active === idx ? {
                      backgroundImage: `linear-gradient(to right, ${model.accentColor}, ${model.accentColor}bb)`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    } : {}}
                  >
                    {model.title}
                  </h3>
                  <p className="text-[#666666] text-base leading-relaxed mb-6">
                    {model.description}
                  </p>
                  <div className={`inline-flex items-start gap-2.5 px-4 py-3 rounded-xl ${model.tagBg}`}>
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${model.tagColor}`} />
                    <span className="text-sm font-semibold text-[#2E2E2E] leading-snug">
                      <span className={`font-bold ${model.tagColor}`}>Best for: </span>
                      {model.bestFor}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom row — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.slice(2).map((model, idx) => {
              const Icon = model.icon;
              const realIdx = idx + 2;
              return (
                <motion.div
                  key={realIdx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  onMouseEnter={() => setActive(realIdx)}
                  onMouseLeave={() => setActive(null)}
                  className={`group relative bg-white rounded-[28px] p-7 border ${model.border} ${model.hoverBorder} shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-default flex flex-col`}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${model.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}
                  />
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${model.gradient} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                    style={active === realIdx ? {
                      backgroundImage: `linear-gradient(to right, ${model.accentColor}, ${model.accentColor}bb)`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    } : {}}
                  >
                    {model.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-5 flex-grow">
                    {model.description}
                  </p>
                  <div className={`inline-flex items-start gap-2 px-3 py-2.5 rounded-xl ${model.tagBg} mt-auto`}>
                    <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${model.tagColor}`} />
                    <span className="text-xs font-medium text-[#2E2E2E] leading-snug">
                      <span className={`font-bold ${model.tagColor}`}>Best for: </span>
                      {model.bestFor}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
