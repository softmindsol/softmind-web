"use client";
import React, { useState } from "react";

const SERVICES = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Manual Testing",
    desc: "Validate your software through detailed, human-led testing designed to uncover functional, usability, and user-experience issues that automated tests may not detect.",
    tag: "Human-led QA",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Automation Testing",
    desc: "Accelerate repetitive testing and improve regression coverage with automated test frameworks and processes that help your team validate releases faster and more consistently.",
    tag: "Faster releases",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Functional Testing",
    desc: "Verify that every feature works according to business and technical requirements. Our functional testing helps identify defects before they reach your customers.",
    tag: "Requirements-driven",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Performance Testing",
    desc: "Understand how your application performs under different workloads and identify bottlenecks before they affect real users. We evaluate responsiveness, stability, scalability, and reliability under peak traffic.",
    tag: "Load & stress",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Security Testing",
    desc: "Identify vulnerabilities and security weaknesses that could expose your application, users, or business data to unnecessary risk. Strengthen application security before production releases.",
    tag: "Vulnerability checks",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Mobile App Testing",
    desc: "Deliver reliable mobile experiences across devices, operating systems, screen sizes, and usage conditions. We test for functionality, usability, compatibility, performance, and overall UX.",
    tag: "iOS & Android",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Usability Testing",
    desc: "Go beyond functionality to understand how easily users can navigate and interact with your product. We identify usability issues that create friction and negatively impact customer experience.",
    tag: "UX focused",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Localization Testing",
    desc: "Ensure your software works correctly for users across different regions and markets. We validate language, functionality, cultural considerations, layouts, and region-specific experiences.",
    tag: "Global markets",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Accessibility Testing",
    desc: "Make your digital products more inclusive by identifying barriers that may prevent users with disabilities from effectively interacting with your application.",
    tag: "WCAG compliance",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    title: "Compatibility Testing",
    desc: "Verify that your application delivers a consistent experience across browsers, operating systems, devices, platforms, and environments.",
    tag: "Cross-platform",
  },
];

export default function StTestingServices() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative w-full bg-[#f8fafb] py-20 md:py-28 overflow-hidden font-jakarta">
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004BC0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 w-full">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
              Our QA Services
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-navy leading-[1.15] tracking-tight max-w-[800px] mx-auto">
            Comprehensive Offshore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
              Software Testing Services
            </span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-grey leading-[1.75] font-medium max-w-[680px] mx-auto">
            Get the right combination of testing services for your application,
            technology stack, users, and release goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative flex flex-col gap-4 p-6 rounded-[20px] border bg-white transition-all duration-300 cursor-default ${
                hovered === idx
                  ? "border-green/30 shadow-[0_12px_40px_rgba(12,191,131,0.12)] -translate-y-1"
                  : "border-gray-100 shadow-[0_2px_12px_rgba(0,35,90,0.06)] hover:-translate-y-0.5"
              }`}
            >
              {/* Top accent line on hover */}
              <div
                className={`absolute top-0 left-[15%] right-[15%] h-[2px] rounded-full bg-gradient-to-r from-transparent via-green/60 to-transparent transition-opacity duration-300 ${
                  hovered === idx ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  hovered === idx
                    ? "bg-green text-white shadow-[0_4px_16px_rgba(12,191,131,0.35)]"
                    : "bg-green/10 text-green"
                }`}
              >
                {service.icon}
              </div>

              {/* Tag */}
              <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-grey/70">
                {service.tag}
              </span>

              {/* Title */}
              <h3
                className={`text-[16px] font-bold leading-snug transition-colors duration-200 ${
                  hovered === idx ? "text-green" : "text-navy"
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-[13.5px] text-grey leading-[1.65] font-medium">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
