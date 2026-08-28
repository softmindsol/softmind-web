"use client";
import React from "react";
import {
  FiMonitor,
  FiSmartphone,
  FiCloud,
  FiServer,
  FiShoppingCart,
  FiCode,
  FiDatabase,
  FiUser,
  FiBriefcase,
  FiGlobe,
} from "react-icons/fi";

const PLATFORMS = [
  { label: "Web applications",    icon: <FiMonitor size={18} /> },
  { label: "Mobile applications", icon: <FiSmartphone size={18} /> },
  { label: "SaaS platforms",      icon: <FiCloud size={18} /> },
  { label: "Enterprise software", icon: <FiServer size={18} /> },
  { label: "E-commerce platforms",icon: <FiShoppingCart size={18} /> },
  { label: "APIs and integrations",icon: <FiCode size={18} /> },
  { label: "Cloud applications",  icon: <FiDatabase size={18} /> },
  { label: "Customer portals",    icon: <FiUser size={18} /> },
  { label: "Business applications",icon: <FiBriefcase size={18} /> },
  { label: "Digital platforms",   icon: <FiGlobe size={18} /> },
];

const STATS = [
  { value: "10+",  label: "Digital product types supported" },
  { value: "100%", label: "Test coverage focus" },
  { value: "7–14", label: "Days to onboard your QA team" },
  { value: "24/7", label: "Round-the-clock testing capability" },
];

export default function StDigitalProduct() {
  return (
    <section className="relative w-full bg-[#f8fafb] py-20 md:py-28 overflow-hidden font-jakarta">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004BC0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1280px]">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
              Full Coverage
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-navy leading-[1.15] tracking-tight max-w-[800px] mx-auto">
            Test Across Your Entire{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
              Digital Product
            </span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-grey leading-[1.75] font-medium max-w-[640px] mx-auto">
            Our offshore software testing capabilities can support a wide range of digital products and platforms.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-16">
          {PLATFORMS.map((platform, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center gap-3 p-5 rounded-[18px] bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,35,90,0.05)] hover:border-green/30 hover:shadow-[0_8px_32px_rgba(12,191,131,0.10)] hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-green/10 group-hover:bg-green group-hover:text-white text-green flex items-center justify-center transition-all duration-300">
                {platform.icon}
              </div>
              <span className="text-[12.5px] font-semibold text-navy group-hover:text-green transition-colors duration-200 leading-tight">
                {platform.label}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-1.5 p-6 rounded-[20px] bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,35,90,0.05)] text-center"
            >
              <span className="text-[36px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0] leading-none">
                {stat.value}
              </span>
              <span className="text-[12.5px] font-medium text-grey leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
