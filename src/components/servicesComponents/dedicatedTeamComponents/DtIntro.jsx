"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BriefcaseBusiness,
  ShieldCheck,
  ArrowUpRight,
  Users2,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Dedicated Developers",
    description:
      "Hire developers who work exclusively on your product and become an extension of your internal team.",
    color: "#0CBF83",
    gradient: "from-[#0CBF83] to-[#00b87a]",
  },
  {
    icon: BriefcaseBusiness,
    title: "Project Manager Included",
    description:
      "Get a dedicated Project Manager at no additional cost to coordinate tasks, track progress, manage communication, and keep development aligned with your roadmap.",
    color: "#004BC0",
    gradient: "from-[#004BC0] to-[#0038FF]",
    highlight: true,
  },
  {
    icon: ShieldCheck,
    title: "QA Support Included",
    description:
      "Get QA support at no additional cost to test features, identify issues, and maintain product quality throughout development.",
    color: "#6366f1",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
    highlight: true,
  },
  {
    icon: ArrowUpRight,
    title: "Flexible Team Scaling",
    description:
      "Start with the roles you need today and add developers or specialists as your product and business requirements evolve.",
    color: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#ef4444]",
  },
  {
    icon: Users2,
    title: "Direct Collaboration",
    description:
      "Work directly with your dedicated developers while maintaining control over priorities, product decisions, and development direction.",
    color: "#14b8a6",
    gradient: "from-[#14b8a6] to-[#0ea5e9]",
  },
  {
    icon: BookOpen,
    title: "Long-Term Product Ownership",
    description:
      "Build a team that becomes familiar with your product, users, technology, and business goals creating continuity as your product grows.",
    color: "#ec4899",
    gradient: "from-[#ec4899] to-[#f43f5e]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function DtIntro() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 font-jakarta overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0CBF83]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004BC0]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0CBF83]/10 border border-[#0CBF83]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_8px_#0CBF83]" />
            <span className="text-[#0CBF83] text-sm font-semibold tracking-widest uppercase">
              What You Get
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-[#2E2E2E] mb-5">
            Dedicated Talent Aligned With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Your Product Goals
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#666666] leading-relaxed">
            Your development team should adapt to your roadmap, not force your roadmap to fit the
            team. Whether you&apos;re launching an MVP, adding new features, modernizing an existing
            application, or scaling your engineering capacity, Softmind helps you build a dedicated
            team around your technology, timeline, and business objectives.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white border border-gray-100 rounded-3xl p-7 lg:p-8 flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feat.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}
                />

                {/* Highlight badge */}
                {feat.highlight && (
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: feat.color + "15",
                        color: feat.color,
                        border: `1px solid ${feat.color}30`,
                      }}
                    >
                      Included Free
                    </span>
                  </div>
                )}

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${feat.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-[#2E2E2E] mb-3 leading-snug group-hover:text-[#0CBF83] transition-colors duration-300">
                  {feat.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed flex-grow">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
