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
    title: "Healthcare",
    description:
      "Build secure web applications that improve patient experiences, streamline healthcare workflows, and connect providers, patients, and critical data.",
  },
  {
    icon: Landmark,
    title: "Fintech",
    description:
      "Develop secure financial applications with reliable workflows, integrations, dashboards, and data-driven capabilities designed around modern financial operations.",
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description:
      "Create engaging learning platforms, education portals, student management systems, and digital learning applications that make education more accessible and effective.",
  },
  {
    icon: Building,
    title: "PropTech",
    description:
      "Modernize property management, real estate operations, listings, transactions, and customer experiences with purpose-built web applications.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description:
      "Deliver scalable commerce applications with intuitive shopping experiences, secure payments, inventory management, personalized experiences, and powerful back-office functionality.",
  },
];

export default function WebAppIndustry() {
  return (
    <section className="relative w-full bg-[#161616] text-white py-20 lg:py-28 font-jakarta overflow-hidden">
      <div
        className="absolute top-0 right-[-150px] w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[160px]"
        style={{ backgroundColor: "#004BC0" }}
      />
      
      <div className="relative w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-white">
            Custom Web Applications for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Every Industry
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/80 font-medium leading-[26px]">
            Our custom web application development expertise spans multiple industries, helping businesses automate workflows, improve customer experiences, integrate critical systems, and scale their digital operations with secure, high-performance solutions.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#0CBF83]/40 rounded-[24px] p-8 transition-all duration-300 shadow-lg group ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00235A] to-[#004BC0] flex items-center justify-center text-[#0CBF83] mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#0CBF83] transition-colors">
                  {ind.title}
                </h3>
                <p className="text-white/70 text-sm leading-[24px] font-medium">
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
