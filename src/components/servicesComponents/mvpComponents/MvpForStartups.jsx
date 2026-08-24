"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Building2, TrendingUp, Shield, Users, Lightbulb } from "lucide-react";

const audiences = [
  {
    tag: "For Startups",
    icon: Rocket,
    title: "Get Your Product to Market Faster",
    description:
      "Get your product into the hands of users without spending your entire budget on features you may not need. We help startups validate ideas, demonstrate traction, test business models, and build investor-ready products with a focused development approach.",
    highlights: [
      { icon: Lightbulb, text: "Validate Ideas" },
      { icon: TrendingUp, text: "Demonstrate Traction" },
      { icon: Users, text: "Test Business Models" },
    ],
    gradient: "from-[#0CBF83] to-[#00C9A7]",
    borderColor: "border-[#0CBF83]/30",
    hoverBorder: "hover:border-[#0CBF83]/60",
    tagBg: "bg-[#0CBF83]/10",
    tagText: "text-[#0CBF83]",
  },
  {
    tag: "For Established Businesses",
    icon: Building2,
    title: "Innovate Without Disruption",
    description:
      "Test new digital products, services, and business models without disrupting your existing operations. Our MVP development approach allows enterprises to experiment faster, validate demand, and reduce the risk associated with large-scale product initiatives.",
    highlights: [
      { icon: Shield, text: "Reduce Risk" },
      { icon: TrendingUp, text: "Validate Demand" },
      { icon: Rocket, text: "Experiment Faster" },
    ],
    gradient: "from-[#004BC0] to-[#0038FF]",
    borderColor: "border-[#004BC0]/30",
    hoverBorder: "hover:border-[#004BC0]/60",
    tagBg: "bg-[#004BC0]/10",
    tagText: "text-[#004BC0]",
  },
];

export default function MvpForStartups() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0CBF83]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004BC0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Who We Serve
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-dark">
            MVP Development for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Startups and Growing Businesses
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`group relative bg-white rounded-[28px] p-8 lg:p-10 border ${item.borderColor} ${item.hoverBorder} shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Top gradient accent line */}
                <div
                  className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}
                />

                {/* Floating glow on hover */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 pointer-events-none`}
                />

                {/* Tag */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${item.tagBg} mb-6`}>
                  <Icon className={`w-4 h-4 ${item.tagText}`} />
                  <span className={`text-sm font-bold tracking-wide ${item.tagText}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-[28px] font-bold text-dark mb-4 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-grey text-base leading-[26px] font-medium mb-8">
                  {item.description}
                </p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-3">
                  {item.highlights.map((hl, hIdx) => {
                    const HlIcon = hl.icon;
                    return (
                      <div
                        key={hIdx}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 group-hover:border-gray-200 transition-colors duration-300`}
                      >
                        <HlIcon className={`w-4 h-4 ${item.tagText}`} />
                        <span className="text-sm font-semibold text-dark">
                          {hl.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
