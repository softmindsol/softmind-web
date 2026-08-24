"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cloud,
  Bot,
  BrainCircuit,
  Network,
  BarChart3,
  Layers,
  Cog,
  Database,
} from "lucide-react";

const technologies = [
  { icon: Globe, label: "Web application development" },
  { icon: Smartphone, label: "Mobile application development" },
  { icon: Cloud, label: "Cloud computing" },
  { icon: Bot, label: "Artificial intelligence" },
  { icon: BrainCircuit, label: "Machine learning" },
  { icon: Network, label: "APIs and third-party integrations" },
  { icon: BarChart3, label: "Data analytics" },
  { icon: Layers, label: "SaaS platforms" },
  { icon: Cog, label: "Automation" },
  { icon: Database, label: "Modern databases and cloud-native architectures" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function MvpTechnology() {
  return (
    <section className="relative w-full bg-[#111111] text-white py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-[-150px] w-[500px] h-[500px] bg-[#004BC0]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0CBF83]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Technology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-white">
            Build Your MVP With the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Right Technology
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/70 font-medium leading-[26px]">
            Depending on your product requirements, we can leverage modern
            technologies across:
          </p>
        </div>

        {/* Technology Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group flex items-center gap-4 bg-[#1a1a1a] border border-white/10 hover:border-[#0CBF83]/40 rounded-2xl px-5 py-4 transition-all duration-300 hover:bg-[#1f1f1f] hover:shadow-[0_8px_30px_rgba(12,191,131,0.1)] cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00235A] to-[#004BC0] flex items-center justify-center text-[#0CBF83] shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-white/90 text-sm font-medium leading-tight">
                  {tech.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1a1a1a] border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_8px_#0CBF83]" />
            <p className="text-white/70 text-sm font-medium">
              We select technology based on what your product actually needs —
              not simply what is trending.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
