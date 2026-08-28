"use client";
import React from "react";
import {
  FiActivity,
  FiDollarSign,
  FiBook,
  FiHome,
  FiShoppingCart,
  FiArrowRight,
  FiPlus,
} from "react-icons/fi";

const INDUSTRIES = [
  {
    icon: <FiActivity size={24} />,
    label: "Healthcare & Fitness",
    desc: "Validate applications where reliability, usability, security, and performance are critical to delivering better digital experiences.",
    color: "from-[#0CBF83] to-[#00a36e]",
    href: "/industries/healthcare",
  },
  {
    icon: <FiDollarSign size={24} />,
    label: "Fintech",
    desc: "Test financial applications for functionality, security, performance, reliability, and seamless user experiences.",
    color: "from-[#004BC0] to-[#0038a8]",
    href: "/industries/fintech",
  },
  {
    icon: <FiBook size={24} />,
    label: "EdTech",
    desc: "Ensure learning platforms and educational applications remain reliable, accessible, intuitive, and ready to support growing user demand.",
    color: "from-[#7C3AED] to-[#6d28d9]",
    href: "/industries/edtech",
  },
  {
    icon: <FiHome size={24} />,
    label: "PropTech",
    desc: "Test property platforms and digital real estate solutions across functionality, performance, usability, and device compatibility.",
    color: "from-[#F59E0B] to-[#d97706]",
    href: "/industries/proptech",
  },
  {
    icon: <FiShoppingCart size={24} />,
    label: "E-commerce",
    desc: "Reduce checkout friction, improve platform reliability, and validate critical customer journeys across devices and environments.",
    color: "from-[#EC4899] to-[#db2777]",
    href: "/industries/ecommerce",
  },
];

export default function StIndustries() {
  return (
    <section className="relative w-full bg-[#0A0F1E] py-20 md:py-28 overflow-hidden font-jakarta">
      {/* Background glows */}
      <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-green/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] rounded-full bg-[#004BC0]/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1280px]">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-white leading-[1.15] tracking-tight max-w-[800px] mx-auto">
            Software Testing for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
              Multiple Industries
            </span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-white/60 leading-[1.75] font-medium max-w-[640px] mx-auto">
            Deep domain knowledge across the industries that matter most to
            startups and growing businesses.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {INDUSTRIES.map((industry, idx) => (
            <a
              key={idx}
              href={industry.href}
              className="group relative flex flex-col gap-5 p-7 rounded-[22px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.07] hover:border-green/30 hover:shadow-[0_8px_40px_rgba(12,191,131,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top shimmer */}
              <div className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white shadow-lg`}
              >
                {industry.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[17px] font-bold text-white group-hover:text-green transition-colors duration-200 leading-snug">
                  {industry.label}
                </h3>
                <p className="text-[13.5px] text-white/55 leading-[1.7] font-medium group-hover:text-white/70 transition-colors duration-200">
                  {industry.desc}
                </p>
              </div>

              {/* Learn more */}
              <div className="flex items-center gap-1.5 text-[12.5px] font-bold text-green opacity-0 group-hover:opacity-100 transition-all duration-200 mt-auto">
                Explore industry
                <FiArrowRight size={12} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
