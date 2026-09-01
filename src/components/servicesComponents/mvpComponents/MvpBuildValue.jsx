"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, DollarSign, Users, Layers, BarChart3, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster Time to Market",
    description:
      "Launch the essential version of your product quickly and start learning from real users.",
    color: "from-[#0CBF83] to-[#00C9A7]",
    iconBg: "bg-[#0CBF83]/10",
    iconColor: "text-[#0CBF83]",
  },
  {
    icon: DollarSign,
    title: "Lower Development Costs",
    description:
      "Invest in the functionality that directly contributes to your product's value instead of spending on unnecessary features.",
    color: "from-[#004BC0] to-[#0038FF]",
    iconBg: "bg-[#004BC0]/10",
    iconColor: "text-[#004BC0]",
  },
  {
    icon: Users,
    title: "Real User Validation",
    description:
      "Replace assumptions with feedback and behavioral insights from your target audience.",
    color: "from-[#0CBF83] to-[#00C9A7]",
    iconBg: "bg-[#0CBF83]/10",
    iconColor: "text-[#0CBF83]",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Build your MVP on a technical foundation that can evolve as your users, data, and business requirements grow.",
    color: "from-[#004BC0] to-[#0038FF]",
    iconBg: "bg-[#004BC0]/10",
    iconColor: "text-[#004BC0]",
  },
  {
    icon: BarChart3,
    title: "Better Product Decisions",
    description:
      "Use market feedback to determine which features to build, improve, remove, or prioritize next.",
    color: "from-[#0CBF83] to-[#00C9A7]",
    iconBg: "bg-[#0CBF83]/10",
    iconColor: "text-[#0CBF83]",
  },
  {
    icon: Award,
    title: "Investor-Ready Product",
    description:
      "Turn your concept into a tangible product that can demonstrate your vision, technology, and early traction.",
    color: "from-[#004BC0] to-[#0038FF]",
    iconBg: "bg-[#004BC0]/10",
    iconColor: "text-[#004BC0]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function MvpBuildValue() {
  return (
    <section className="relative w-full bg-dark text-white py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0CBF83]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#004BC0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Business Value
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-[0.5px] text-white capitalize">
            Build an MVP That Creates{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Real Business Value
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/70 font-medium leading-[26px] max-w-[700px]">
            At Softmind, we focus on building MVPs around outcomes — not feature
            counts.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-[#1a1a1a] hover:bg-[#1f1f1f] border border-white/10 hover:border-[#0CBF83]/40 rounded-[24px] p-6 lg:p-8 transition-all duration-400 shadow-lg hover:shadow-[0_12px_40px_rgba(12,191,131,0.15)] hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                {/* Top gradient line */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
                />

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00235A] to-[#004BC0] flex items-center justify-center text-[#0CBF83] mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl lg:text-[22px] font-bold text-white mb-3 leading-snug group-hover:text-[#0CBF83] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-sm leading-[22px] font-normal flex-grow">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
