"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Building2,
  GraduationCap,
  Home,
  ShoppingCart,
} from "lucide-react";

const industries = [
  {
    name: "Healthcare & Fitness",
    description:
      "Augment your team with developers, QA engineers, cloud specialists, and other technology professionals to build secure and scalable healthcare and fitness solutions.",
    icon: <HeartPulse className="w-8 h-8 text-[#0CBF83]" />,
    tag: "Healthcare Technology",
  },
  {
    name: "FinTech",
    description:
      "Strengthen your financial technology initiatives with experienced engineers and QA professionals who can support secure, reliable, and scalable digital products.",
    icon: <Building2 className="w-8 h-8 text-[#00235A]" />,
    tag: "Financial Technology",
  },
  {
    name: "EdTech",
    description:
      "Expand your product and engineering capabilities to build engaging learning platforms, educational applications, integrations, and digital learning experiences.",
    icon: <GraduationCap className="w-8 h-8 text-[#0CBF83]" />,
    tag: "Education Technology",
  },
  {
    name: "PropTech",
    description:
      "Accelerate property technology platforms with specialized development, UI/UX, cloud, and QA talent aligned with your product roadmap.",
    icon: <Home className="w-8 h-8 text-[#00235A]" />,
    tag: "Property Technology",
  },
  {
    name: "E-commerce",
    description:
      "Scale your engineering capabilities to improve e-commerce platforms, customer experiences, integrations, payment workflows, and digital operations.",
    icon: <ShoppingCart className="w-8 h-8 text-[#0CBF83]" />,
    tag: "Retail Technology",
  },
];

export default function SaIndustries() {
  return (
    <section className="bg-white py-20 lg:py-28 font-jakarta border-t border-gray-100">
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-wide">
              Industry Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#161616] leading-tight mb-6">
            Built for Technology-Driven Industries
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
            Softmind provides offshore staff augmentation for organizations
            across industries where technology, speed, and specialized expertise
            directly impact growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[#F8F9FA] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group ${
                index === 4
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                  {industry.icon}
                </div>
                <span className="text-[12px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">
                  {industry.tag}
                </span>
              </div>
              <h3 className="text-[22px] font-bold text-[#161616] mb-3">
                {industry.name}
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
