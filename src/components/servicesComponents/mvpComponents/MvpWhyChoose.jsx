"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  RefreshCcw,
  Users2,
  Bot,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Business-First Product Development",
    description:
      "We look beyond development requirements to understand the business problem your product needs to solve. Every MVP feature is evaluated based on customer value, business impact, and development effort.",
  },
  {
    icon: RefreshCcw,
    title: "Lean and Agile Approach",
    description:
      "Our Agile approach allows us to develop, test, learn, and adapt throughout the product lifecycle. This helps you respond to feedback without losing control of scope, budget, or timelines.",
  },
  {
    icon: Users2,
    title: "Senior Technical Expertise",
    description:
      "Work with experienced developers, designers, and technical specialists who understand how to turn early-stage concepts into reliable digital products.",
  },
  {
    icon: Bot,
    title: "AI-Accelerated Development",
    description:
      "We use AI-powered development practices where they can improve productivity, accelerate repetitive tasks, support testing, and help teams move from concept to working product faster.",
  },
  {
    icon: ShieldCheck,
    title: "Security Built In",
    description:
      "Security is considered from the early stages of development rather than added as an afterthought. We help create MVPs with appropriate security, data protection, and quality practices for their intended use.",
  },
  {
    icon: ArrowUpRight,
    title: "Designed for What Comes Next",
    description:
      "Your MVP should not become a technical dead end. We design the architecture and codebase with future product enhancements, integrations, users, and scaling requirements in mind.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function MvpWhyChoose() {
  return (
    <section className="relative w-full bg-blue-50 text-black py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-[-150px] w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[160px]"
        style={{ backgroundColor: "#0CBF83" }}
      />
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none opacity-10 blur-[120px]"
        style={{ backgroundColor: "#004BC0" }}
      />

      <div className="relative w-full mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Why Choose Softmind?
            </span>
          </div>
          <h2 className="max-w-[850px] text-3xl sm:text-4xl lg:text-[44px] lg:leading-[60px] font-bold tracking-[0.5px] text-dark">
            Why Choose Softmind for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              MVP Development?
            </span>
          </h2>
        </div>

        {/* 6 Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto"
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
                className="group bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#0CBF83]/40 rounded-[24px] p-6 lg:p-8 transition-all duration-400 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(12,191,131,0.15)] hover:-translate-y-2 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00235A] to-[#004BC0] flex items-center justify-center text-[#0CBF83] mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] lg:text-[22px] font-bold text-dark mb-3 leading-snug group-hover:text-[#0CBF83] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-grey text-sm leading-[22px] font-normal flex-grow">
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
