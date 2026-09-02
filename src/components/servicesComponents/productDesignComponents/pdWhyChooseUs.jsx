"use client";
import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Target, Briefcase, Expand, Users2, FileCode2 } from "lucide-react";

const reasons = [
  {
    title: "Design Decisions Backed by Research",
    description: "We don't design based on trends alone. We combine user insights, business objectives, and product data to create purposeful experiences.",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    color: "bg-[#0CBF83]",
  },
  {
    title: "Business-Focused Design",
    description: "Every design decision considers more than aesthetics. We focus on usability, adoption, engagement, conversion, retention, and long-term product value.",
    icon: <Target className="w-6 h-6 text-white" />,
    color: "bg-[#00235A]",
  },
  {
    title: "End-to-End Product Expertise",
    description: "From UX research and strategy to UI design, prototyping, design systems, and development handoff, you can work with one experienced design partner.",
    icon: <Briefcase className="w-6 h-6 text-white" />,
    color: "bg-[#161616]",
  },
  {
    title: "Designed to Scale",
    description: "Our design systems and reusable components help your product evolve without creating unnecessary design and development complexity.",
    icon: <Expand className="w-6 h-6 text-white" />,
    color: "bg-[#0CBF83]",
  },
  {
    title: "Collaborative Partnership",
    description: "Your product team stays involved throughout the process, with transparent communication, regular reviews, and collaborative decision-making.",
    icon: <Users2 className="w-6 h-6 text-white" />,
    color: "bg-[#00235A]",
  },
  {
    title: "Development-Ready Deliverables",
    description: "We bridge the gap between design and engineering with structured files, reusable components, specifications, and clear handoffs.",
    icon: <FileCode2 className="w-6 h-6 text-white" />,
    color: "bg-[#161616]",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 lg:py-32 font-jakarta relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-wide">
              Why Softmind
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#161616] leading-tight mb-6">
            Why Choose Softmind for Digital Product Design?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col items-start gap-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${reason.color}`}>
                {reason.icon}
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#161616] mb-3">
                  {reason.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
