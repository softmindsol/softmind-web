"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Scaling,
  Eye,
  Handshake,
  DollarSign,
  Globe2,
  Clock,
  ShieldCheck,
} from "lucide-react";

const pillars = [
  {
    icon: BrainCircuit,
    title: "AI-Ready Engineering",
    description:
      "Our team helps businesses integrate AI where it delivers real value, enabling smarter automation, faster decision-making, and more personalized user experiences.",
  },
  {
    icon: Scaling,
    title: "Built to Scale",
    description:
      "From startup MVPs to enterprise platforms, we build flexible architectures that grow alongside your business without costly rebuilds.",
  },
  {
    icon: Eye,
    title: "Transparent Delivery",
    description:
      "Stay informed with agile development, regular progress reviews, clear communication, and predictable project execution.",
  },
  {
    icon: Handshake,
    title: "Long-Term Technology Partner",
    description:
      "Our relationship doesn't end at launch. We continue supporting your software with maintenance, optimization, feature enhancements, and strategic guidance.",
  },
];

const highlights = [
  {
    icon: DollarSign,
    stat: "40% – 60%",
    label: "Cost Savings",
    desc: "Offshore software engineering rates without compromising on senior technical quality.",
  },
  {
    icon: Globe2,
    stat: "USA & MENA",
    label: "Regional Alignment",
    desc: "Tailored engineering positioning for US startups & MENA market leaders (UAE, Saudi Arabia, Dubai).",
  },
  {
    icon: Clock,
    stat: "100%",
    label: "Timezone Overlap",
    desc: "Daily syncs, dedicated project managers, and seamless integration into your sprint schedule.",
  },
  {
    icon: ShieldCheck,
    stat: "100%",
    label: "IP Ownership",
    desc: "Complete code, asset, and IP ownership transferred to your company upon milestone delivery.",
  },
];

export default function CustomSoftwareWhyChoose() {
  return (
    <section className="relative w-full bg-[#161616] text-white py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-[-150px] w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[160px]"
        style={{ backgroundColor: "#0CBF83" }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[860px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              The Softmind Difference
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-white">
            Why Businesses Choose Softmind Solutions
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/80 font-medium leading-[26px]">
            We Build Software That Creates Business Value — Technology should solve business challenges, not create new ones. Every solution we develop is aligned with measurable business outcomes, from operational efficiency to revenue growth.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#0CBF83]/40 rounded-[24px] p-7 transition-all duration-300 shadow-lg hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00235A] to-[#004BC0] flex items-center justify-center text-[#0CBF83] mb-6 border border-white/10">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-[22px] font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Offshore & Regional Value Highlights Banner */}
        <div className="bg-gradient-to-r from-[#00235A]/90 via-[#004BC0]/80 to-[#00235A]/90 border border-[#0CBF83]/30 rounded-[32px] p-8 lg:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0CBF83]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-[700px] mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0CBF83] bg-[#0CBF83]/10 px-3 py-1 rounded-full border border-[#0CBF83]/20">
              Offshore Engineering Advantage
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-3">
              Senior Software Engineering at Offshore Economics
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, hIdx) => {
              const Icon = item.icon;
              return (
                <div
                  key={hIdx}
                  className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#0CBF83]/40 transition-colors"
                >
                  <Icon className="w-6 h-6 text-[#0CBF83] mb-2" />
                  <span className="text-2xl lg:text-3xl font-black text-white mb-1">
                    {item.stat}
                  </span>
                  <span className="text-sm font-bold text-[#0CBF83] mb-2">
                    {item.label}
                  </span>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
