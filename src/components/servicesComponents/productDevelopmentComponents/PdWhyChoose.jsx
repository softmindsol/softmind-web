"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldOff,
  Expand,
  Users2,
  Cpu,
  Link2,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Build Faster Without Cutting Corners",
    description:
      "Get an experienced product team that can move from strategy to development without the delays of managing multiple vendors.",
    color: "#0CBF83",
    gradient: "from-[#0CBF83] to-[#00b87a]",
  },
  {
    icon: ShieldOff,
    title: "Reduce Product Development Risk",
    description:
      "Validate your idea, prioritize the right features, and establish a clear technical roadmap before significant development investment.",
    color: "#004BC0",
    gradient: "from-[#004BC0] to-[#0038FF]",
  },
  {
    icon: Expand,
    title: "Scale When Your Business Grows",
    description:
      "We build products with flexible architectures that can accommodate new users, features, integrations, and markets.",
    color: "#6366f1",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    icon: Users2,
    title: "Get Senior Technical Expertise",
    description:
      "Work with experienced developers, designers, QA engineers, and product specialists focused on delivering measurable business value.",
    color: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#ef4444]",
  },
  {
    icon: Cpu,
    title: "Keep Your Product Future-Ready",
    description:
      "From cloud-native architecture to AI integration and API-first development, we make technology choices with your long-term growth in mind.",
    color: "#14b8a6",
    gradient: "from-[#14b8a6] to-[#0ea5e9]",
  },
  {
    icon: Link2,
    title: "One Team From Idea to Scale",
    description:
      "Strategy, design, development, testing, launch, and ongoing optimization—all coordinated through one product development partner.",
    color: "#ec4899",
    gradient: "from-[#ec4899] to-[#f43f5e]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function PdWhyChoose() {
  return (
    <section className="relative w-full bg-[#00235A] py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-[-100px] w-[500px] h-[500px] rounded-full bg-[#0CBF83]/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#004BC0]/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#0CBF83]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_10px_#0CBF83]" />
            <span className="text-[#0CBF83] text-sm font-semibold tracking-widest uppercase">
              Why Softmind
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-white mb-5">
            Why Businesses Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
              Softmind for Product Development
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed">
            From early-stage validation to enterprise-scale delivery, we bring the expertise,
            process, and commitment that make the difference.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-3xl p-7 lg:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                {/* Glow effect */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: reason.color }}
                />

                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${reason.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${reason.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#0CBF83] transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
