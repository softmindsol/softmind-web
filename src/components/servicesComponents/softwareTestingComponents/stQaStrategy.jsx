"use client";
import React, { useState } from "react";
import { FiSearch, FiClipboard, FiFileText, FiCode, FiBarChart2, FiRefreshCw, FiArrowLeft, FiArrowRight } from "react-icons/fi";

const STEPS = [
  {
    number: "01",
    title: "Understand Your Product",
    desc: "We learn about your application, users, business requirements, technology, release process, and quality objectives.",
    icon: <FiSearch size={20} />,
  },
  {
    number: "02",
    title: "Identify Testing Requirements",
    desc: "We determine which testing types, environments, devices, platforms, and scenarios are most relevant to your product.",
    icon: <FiClipboard size={20} />,
  },
  {
    number: "03",
    title: "Build the QA Strategy",
    desc: "We develop a structured testing plan based on your priorities, timelines, risks, and budget.",
    icon: <FiFileText size={20} />,
  },
  {
    number: "04",
    title: "Execute Testing",
    desc: "Our QA specialists perform planned testing and continuously identify, document, and validate defects.",
    icon: <FiCode size={20} />,
  },
  {
    number: "05",
    title: "Report & Communicate",
    desc: "You receive clear visibility into testing progress, issues, risks, and quality metrics.",
    icon: <FiBarChart2 size={20} />,
  },
  {
    number: "06",
    title: "Improve With Every Release",
    desc: "Testing insights are used to strengthen your QA process, improve test coverage, and reduce recurring defects over time.",
    icon: <FiRefreshCw size={20} />,
  },
];

export default function StQaStrategy() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full bg-white py-20 md:py-28 overflow-hidden font-jakarta">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#004BC0]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1280px]">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
              Our Process
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-navy leading-[1.15] tracking-tight max-w-[760px] mx-auto">
            A QA Strategy Built{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
              Around Your Product
            </span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-grey leading-[1.75] font-medium max-w-[720px] mx-auto">
            We don&apos;t believe in a one-size-fits-all testing approach. Your
            testing requirements depend on your application, users, technology
            stack, release cycle, business objectives, and risk profile.
          </p>
        </div>

        {/* Steps Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left: Step List */}
          <div className="flex flex-col gap-3 lg:w-[420px] w-full shrink-0">
            {STEPS.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`group flex items-center gap-4 p-5 rounded-[16px] border text-left transition-all duration-300 ${
                  activeStep === idx
                    ? "border-green/40 bg-green/5 shadow-[0_4px_24px_rgba(12,191,131,0.1)]"
                    : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50/80"
                }`}
              >
                {/* Number badge */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-[13px] transition-all duration-300 ${
                    activeStep === idx
                      ? "bg-green text-white shadow-[0_4px_14px_rgba(12,191,131,0.35)]"
                      : "bg-gray-100 text-grey group-hover:bg-green/10 group-hover:text-green"
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`text-[14px] font-bold leading-snug transition-colors duration-200 ${
                    activeStep === idx ? "text-green" : "text-navy group-hover:text-green"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Active Step Detail Card */}
          <div className="flex-1 w-full">
            <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-[#00235A] via-[#001433] to-[#000d1f] border border-white/[0.08] shadow-[0_24px_80px_rgba(0,35,90,0.25)] p-10 md:p-12 flex flex-col gap-8">
              {/* Shimmer top line */}
              <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-green/50 to-transparent" />

              {/* Corner orbs */}
              <div className="absolute top-[-60px] right-[-60px] w-[220px] h-[220px] rounded-full bg-gradient-to-br from-green/20 to-transparent blur-2xl pointer-events-none" />
              <div className="absolute bottom-[-60px] left-[-40px] w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#004BC0]/30 to-transparent blur-2xl pointer-events-none" />

              {/* Step number indicator */}
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-green/20 border border-green/30 flex items-center justify-center text-green">
                  {STEPS[activeStep].icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[2px] uppercase text-green/70">
                    Step {STEPS[activeStep].number}
                  </span>
                  <p className="text-[11px] font-medium text-white/40 tracking-wide">
                    of {STEPS.length}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-4">
                <h3 className="text-[26px] md:text-[32px] font-bold text-white leading-tight">
                  {STEPS[activeStep].title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-white/65 leading-[1.75] font-medium max-w-[560px]">
                  {STEPS[activeStep].desc}
                </p>
              </div>

              {/* Progress dots */}
              <div className="relative z-10 flex items-center gap-2">
                {STEPS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveStep(dotIdx)}
                    className={`transition-all duration-300 rounded-full ${
                      dotIdx === activeStep
                        ? "w-8 h-2 bg-green"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <div className="relative z-10 flex items-center gap-3">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:border-white/30 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <FiArrowLeft size={16} />
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(STEPS.length - 1, prev + 1))}
                  disabled={activeStep === STEPS.length - 1}
                  className="w-10 h-10 rounded-full bg-green/20 border border-green/30 flex items-center justify-center text-green hover:bg-green/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <FiArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
