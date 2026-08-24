"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  GraduationCap,
  Building,
  ShoppingCart,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare & Fitness",
    description:
      "Build secure, user-focused MVPs for healthcare and fitness businesses with features designed around real patient, provider, and customer needs.",
  },
  {
    icon: Landmark,
    title: "Fintech",
    description:
      "Validate your fintech idea with an MVP designed for secure transactions, seamless financial experiences, and scalable growth.",
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description:
      "Transform your education concept into an engaging, scalable MVP built around how learners, educators, and institutions actually use digital learning platforms.",
  },
  {
    icon: Building,
    title: "PropTech",
    description:
      "Turn real estate ideas into practical digital products with a PropTech MVP built for modern property experiences.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Launch and validate your e-commerce concept with an MVP focused on customer experience, conversion, and scalable growth.",
  },
];

export default function MvpIndustries() {
  return (
    <section className="relative w-full bg-gray-300 text-white py-20 lg:py-28 font-jakarta overflow-hidden">
      <div
        className="absolute top-0 right-[-150px] w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[160px]"
        style={{ backgroundColor: "#004BC0" }}
      />

      <div className="relative w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-navy text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-dark">
            MVP Development Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Industries
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-grey font-medium leading-[26px]">
            Our MVP development expertise can support products across a range of
            industries. We adapt the product strategy, technology, and
            development approach to your industry&apos;s specific users,
            workflows, regulations, and business objectives.
          </p>
        </div>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#0CBF83]/40 rounded-[24px] p-6 lg:p-8 transition-all duration-300 shadow-lg group flex flex-col ${
                  idx === 4
                    ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                    : ""
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00235A] to-[#004BC0] flex items-center justify-center text-[#0CBF83] mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-[#0CBF83] transition-colors">
                  {ind.title}
                </h3>
                <p className="text-grey text-sm leading-[24px] font-medium">
                  {ind.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
