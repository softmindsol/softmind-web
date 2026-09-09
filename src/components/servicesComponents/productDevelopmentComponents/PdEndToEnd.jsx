"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Server,
  ShieldCheck,
  BarChart2,
  CheckCircle2,
} from "lucide-react";

const sections = [
  {
    icon: Layers,
    eyebrow: "UI/UX Design",
    title: "UI/UX Design That Turns Complexity Into Simplicity",
    tagline:
      "Create experiences users understand, trust, and want to keep using.",
    intro:
      "Softmind combines user research, product strategy, and interface design to create digital experiences that help users accomplish their goals faster while supporting your business objectives.",
    features: [
      "User flows and information architecture",
      "Wireframes and interactive prototypes",
      "Responsive web and mobile design",
      "Design systems and reusable components",
      "Accessibility-conscious design",
      "Usability testing and iteration",
      "Conversion-focused interfaces",
    ],
    accentColor: "#0CBF83",
    gradientFrom: "#0CBF83",
    gradientTo: "#00b87a",
    bg: "bg-white",
    reverse: false,
  },
  {
    icon: Server,
    eyebrow: "Engineering",
    title: "Engineering Built for Performance and Scale",
    tagline: "Build today with tomorrow's growth already in mind.",
    intro:
      "Your product needs more than functional code. It needs a technical foundation that can support increasing users, data, integrations, and business complexity. Our product engineers develop secure and scalable solutions across web, mobile, backend, APIs, databases, and cloud infrastructure.",
    features: [
      "Frontend and backend development",
      "Native and cross-platform mobile applications",
      "API development and integrations",
      "Cloud-native application architecture",
      "Database design and optimization",
      "Authentication and access management",
      "Performance and scalability engineering",
      "Security-focused development practices",
    ],
    accentColor: "#004BC0",
    gradientFrom: "#004BC0",
    gradientTo: "#0038FF",
    bg: "bg-gray-50",
    reverse: true,
  },
  {
    icon: ShieldCheck,
    eyebrow: "Quality Assurance",
    title: "Quality Assurance From Development to Deployment",
    tagline:
      "Reduce release risk and give your users a product they can rely on.",
    intro:
      "A successful product needs to perform reliably across every user journey and every release. Our QA process combines manual and automated testing to identify defects early, protect product quality, and help you launch with confidence.",
    features: [
      "Functional and regression testing",
      "API and integration testing",
      "Performance and load testing",
      "Cross-browser and cross-device testing",
      "Security testing",
      "Automated test coverage",
      "User acceptance testing",
      "Release and deployment validation",
    ],
    accentColor: "#6366f1",
    gradientFrom: "#6366f1",
    gradientTo: "#8b5cf6",
    bg: "bg-white",
    reverse: false,
  },
  {
    icon: BarChart2,
    eyebrow: "Post-Launch Optimization",
    title: "Optimize Your Product After Launch",
    tagline: "Keep your product competitive long after launch.",
    intro:
      "Launching your product is only the beginning. Once real users start interacting with it, you gain valuable insights into what works, what doesn't, and where new opportunities exist. Softmind provides continuous product support and optimization to help you improve performance, engagement, and business outcomes.",
    features: [
      "Product analytics and event tracking",
      "User behavior analysis",
      "Conversion and funnel optimization",
      "Feature enhancements",
      "Performance optimization",
      "Bug fixes and maintenance",
      "Cloud and infrastructure optimization",
      "Ongoing product engineering",
    ],
    accentColor: "#f59e0b",
    gradientFrom: "#f59e0b",
    gradientTo: "#ef4444",
    bg: "bg-gray-50",
    reverse: true,
  },
];

export default function PdEndToEnd() {
  return (
    <section className="relative w-full font-jakarta overflow-hidden">
      {/* Section Header */}
      <div className="bg-[#00235A] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0CBF83]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_8px_#0CBF83]" />
              <span className="text-[#0CBF83] text-sm font-semibold tracking-widest uppercase">
                Full Cycle Development
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-white mb-5">
              End-to-End Product{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
                Development Services
              </span>
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Great products don&apos;t just work; they feel effortless to use.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Alternating Feature Sections */}
      {sections.map((section, idx) => {
        const Icon = section.icon;
        return (
          <div key={idx} className={`${section.bg} py-16 lg:py-24`}>
            <div className="container mx-auto px-6 max-w-7xl">
              <div
                className={`flex flex-col ${
                  section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 lg:gap-20 items-center`}
              >
                {/* Visual Panel */}
                <motion.div
                  initial={{ opacity: 0, x: section.reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="w-full lg:w-5/12 flex-shrink-0"
                >
                  <div
                    className="relative rounded-3xl p-8 lg:p-10 flex flex-col gap-5 h-full min-h-[340px] overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${section.gradientFrom}15, ${section.gradientTo}08)`,
                      border: `1.5px solid ${section.accentColor}20`,
                    }}
                  >
                    {/* Big background number */}
                    <span
                      className="absolute -bottom-6 -right-4 text-[120px] font-black leading-none select-none pointer-events-none opacity-[0.04]"
                      style={{ color: section.accentColor }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl"
                      style={{
                        background: `linear-gradient(135deg, ${section.gradientFrom}, ${section.gradientTo})`,
                        boxShadow: `0 12px 32px ${section.accentColor}40`,
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Eyebrow */}
                    <div
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
                      style={{ color: section.accentColor }}
                    >
                      <div
                        className="w-6 h-0.5 rounded-full"
                        style={{ backgroundColor: section.accentColor }}
                      />
                      {section.eyebrow}
                    </div>

                    {/* Tagline */}
                    <p className="text-[#2E2E2E] text-lg lg:text-xl font-bold leading-snug">
                      {section.tagline}
                    </p>

                    {/* Decorative dots */}
                    <div className="flex gap-2 mt-auto">
                      {[0, 1, 2].map((d) => (
                        <div
                          key={d}
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: section.accentColor,
                            opacity: 1 - d * 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: section.reverse ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
                  className="w-full lg:w-7/12 flex flex-col gap-6"
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-[34px] lg:leading-[44px] font-bold text-[#2E2E2E] mb-4">
                      {section.title}
                    </h3>
                    <p className="text-[#666666] text-base md:text-lg leading-relaxed">
                      {section.intro}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2.5 text-sm text-[#555555] font-medium"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0"
                          style={{ color: section.accentColor }}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
