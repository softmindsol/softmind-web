"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpDown,
  Sparkles,
  Rocket,
  TrendingDown,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

const benefits = [
  {
    title: "Scale When You Need To",
    description:
      "Increase or reduce your team size based on project requirements, deadlines, and changing business priorities.",
    icon: <ArrowUpDown className="w-6 h-6 text-[#0CBF83]" />,
  },
  {
    title: "Access Specialized Expertise",
    description:
      "Bring in professionals with the technical skills your project needs without committing to permanent hires.",
    icon: <Sparkles className="w-6 h-6 text-[#0CBF83]" />,
  },
  {
    title: "Accelerate Project Delivery",
    description:
      "Add experienced resources to your existing team and increase development capacity without lengthy recruitment cycles.",
    icon: <Rocket className="w-6 h-6 text-[#0CBF83]" />,
  },
  {
    title: "Reduce Development Costs",
    description:
      "Access high-quality technical talent through an offshore model that helps reduce recruitment, infrastructure, and employment overhead.",
    icon: <TrendingDown className="w-6 h-6 text-[#0CBF83]" />,
  },
  {
    title: "Maintain Complete Control",
    description:
      "Your augmented professionals work within your processes, tools, communication channels, and project structure—giving you direct visibility and control.",
    icon: <ShieldCheck className="w-6 h-6 text-[#0CBF83]" />,
  },
  {
    title: "Build Long-Term Capability",
    description:
      "Augmentation isn't only about filling temporary gaps. Build relationships with reliable technical professionals who can continue supporting your products and teams as you grow.",
    icon: <RefreshCw className="w-6 h-6 text-[#0CBF83]" />,
  },
];

export default function SaTalentYouNeed() {
  return (
    <section className="bg-black py-20 lg:py-28 font-jakarta relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0CBF83] rounded-full blur-[200px] opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00235A] rounded-full blur-[180px] opacity-30 pointer-events-none" />

      <div className="w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-wide">
              Why Augment
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight mb-6">
            The Talent You Need, Without the Hiring Bottlenecks
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/70 leading-relaxed">
            You decide how your team operates. We provide the talent and support
            needed to strengthen it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[24px] hover:bg-white/10 hover:border-[#0CBF83]/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 group-hover:bg-[#0CBF83]/10 flex items-center justify-center mb-6 transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-[20px] font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
