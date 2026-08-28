"use client";
import React from "react";

const INDUSTRIES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    label: "Healthcare & Fitness",
    desc: "Validate applications where reliability, usability, security, and performance are critical to delivering better digital experiences.",
    color: "from-[#0CBF83] to-[#00a36e]",
    href: "/industries/healthcare",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    label: "Fintech",
    desc: "Test financial applications for functionality, security, performance, reliability, and seamless user experiences.",
    color: "from-[#004BC0] to-[#0038a8]",
    href: "/industries/fintech",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    label: "EdTech",
    desc: "Ensure learning platforms and educational applications remain reliable, accessible, intuitive, and ready to support growing user demand.",
    color: "from-[#7C3AED] to-[#6d28d9]",
    href: "/industries/edtech",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: "PropTech",
    desc: "Test property platforms and digital real estate solutions across functionality, performance, usability, and device compatibility.",
    color: "from-[#F59E0B] to-[#d97706]",
    href: "/industries/proptech",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
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
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white shadow-lg`}>
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
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}

          {/* CTA Card */}
          <div className="group relative flex flex-col gap-5 p-7 rounded-[22px] border border-dashed border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-green/20 transition-all duration-300 items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/30 group-hover:text-green group-hover:bg-green/10 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </div>
            <div>
              <p className="text-[15px] font-bold text-white/60 group-hover:text-white transition-colors duration-200">
                Don&apos;t see your industry?
              </p>
              <p className="text-[13px] text-white/35 mt-1">
                We work across many sectors. Let&apos;s talk about your product.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-green hover:underline"
            >
              Contact us
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
