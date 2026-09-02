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
      "Design intuitive healthcare platforms, fitness applications, patient portals, and wellness experiences that make complex information easier to access and act on.",
    icon: <HeartPulse className="w-8 h-8 text-[#0CBF83]" />,
  },
  {
    name: "Fintech",
    description:
      "Create secure, transparent, and easy-to-understand financial experiences that help users confidently manage payments, accounts, investments, and financial services.",
    icon: <Building2 className="w-8 h-8 text-[#00235A]" />,
  },
  {
    name: "EdTech",
    description:
      "Design engaging learning experiences, LMS platforms, educational apps, and assessment tools that make learning more accessible and effective.",
    icon: <GraduationCap className="w-8 h-8 text-[#0CBF83]" />,
  },
  {
    name: "PropTech",
    description:
      "Simplify property discovery, management, transactions, and communication through intuitive digital experiences built around the needs of buyers, sellers, tenants, and property teams.",
    icon: <Home className="w-8 h-8 text-[#00235A]" />,
  },
  {
    name: "E-commerce",
    description:
      "Create frictionless shopping experiences that help customers discover products, make confident purchase decisions, and complete checkout with minimal effort.",
    icon: <ShoppingCart className="w-8 h-8 text-[#0CBF83]" />,
  },
];

export default function Industries() {
  return (
    <section className="bg-white py-24 lg:py-32 font-jakarta border-t border-gray-100">
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-wide">
              Industry Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#161616] leading-tight mb-6">
            Digital Product Design for Your Industry
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
            Every industry has different users, workflows, regulations, and
            business objectives. Softmind combines design expertise with
            industry understanding to create digital experiences that solve
            real-world problems.
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
              className="bg-[#F8F9FA] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                {industry.icon}
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
