"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Timer,
  Zap,
  TrendingUp,
  BriefcaseBusiness,
  ShieldCheck,
  Users2,
  BookOpen,
} from "lucide-react";

const reasons = [
  {
    icon: Timer,
    title: "Reduce Hiring Overhead",
    description:
      "Avoid lengthy recruitment processes, technical screening, onboarding, and the operational costs associated with expanding an in-house team.",
    color: "#0CBF83",
    gradient: "from-[#0CBF83] to-[#00b87a]",
  },
  {
    icon: Zap,
    title: "Start Development Faster",
    description:
      "Get the technical expertise you need without waiting months to recruit and build a complete engineering department.",
    color: "#004BC0",
    gradient: "from-[#004BC0] to-[#0038FF]",
  },
  {
    icon: TrendingUp,
    title: "Scale Without the Commitment",
    description:
      "Add resources when your roadmap expands and adjust your team as your business requirements change.",
    color: "#6366f1",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    icon: BriefcaseBusiness,
    title: "Get Project Management Included",
    description:
      "You don't need to hire a separate project manager to coordinate your dedicated developer. Softmind provides Project Management at no additional cost.",
    color: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#ef4444]",
    badge: "Included Free",
  },
  {
    icon: ShieldCheck,
    title: "Get QA Included",
    description:
      "Quality assurance is built into the engagement. Softmind provides QA support at no additional cost, helping you release with greater confidence.",
    color: "#14b8a6",
    gradient: "from-[#14b8a6] to-[#0ea5e9]",
    badge: "Included Free",
  },
  {
    icon: Users2,
    title: "Work With Your Developer Directly",
    description:
      "Your dedicated developer works as an extension of your team, collaborating with your stakeholders and following your preferred tools and processes.",
    color: "#ec4899",
    gradient: "from-[#ec4899] to-[#f43f5e]",
  },
  {
    icon: BookOpen,
    title: "Build for the Long Term",
    description:
      "Our teams learn your product, codebase, workflows, and business requirements, creating deeper product knowledge and continuity over time.",
    color: "#0CBF83",
    gradient: "from-[#0CBF83] to-[#00b87a]",
  },
];

export default function DtWhyChoose() {
  return (
    <section className="relative w-full bg-[#00235A] py-20 lg:py-28 font-jakarta overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#0CBF83]/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#004BC0]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_8px_#0CBF83]" />
            <span className="text-[#0CBF83] text-sm font-semibold tracking-widest uppercase">
              Why Softmind
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-white mb-5">
            Why Choose a Managed Dedicated{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#0038FF]">
              Development Team With Softmind?
            </span>
          </h2>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.slice(0, 6).map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-white/6 backdrop-blur-sm border border-white/10 rounded-3xl p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-2 overflow-hidden"
              >
                {/* Glow on hover */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 blur-3xl transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: reason.color }}
                />

                {reason.badge && (
                  <div className="mb-4">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: reason.color + "20",
                        color: reason.color,
                        border: `1px solid ${reason.color}40`,
                      }}
                    >
                      {reason.badge}
                    </span>
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${reason.gradient} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#0CBF83] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 7th reason — full width featured card */}
        {(() => {
          const last = reasons[6];
          const LastIcon = last.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="group relative mt-5 bg-gradient-to-r from-[#0CBF83]/15 to-[#004BC0]/15 backdrop-blur-sm border border-[#0CBF83]/25 rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row items-center gap-6 hover:border-[#0CBF83]/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0CBF83] to-[#004BC0]" />
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br from-[#0CBF83] to-[#00b87a] shadow-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                <LastIcon className="w-7 h-7" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-[#0CBF83] transition-colors duration-300">
                  {last.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed max-w-3xl">
                  {last.description}
                </p>
              </div>
            </motion.div>
          );
        })()}
      </div>
    </section>
  );
}
