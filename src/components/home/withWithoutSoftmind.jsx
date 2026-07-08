"use client";
import React from "react";
import { X, Check } from "lucide-react";
import Link from "next/link";

export default function WithWithoutSoftmind() {
  const comparisons = [
    {
      without: "Endless hiring cycles — months lost finding the right engineers",
      with: "Dedicated team ready to ship in 72 hours",
    },
    {
      without: "High overhead costs of full-time in-house teams",
      with: "Flexible, cost-effective engagement with no long-term lock-in",
    },
    {
      without: "Inconsistent code quality and missed deadlines",
      with: "Senior engineers with proven delivery track records",
    },
    {
      without: "Communication gaps between business and tech teams",
      with: "Direct access to engineers who speak your business language",
    },
    {
      without: "Scaling your team takes quarters of planning",
      with: "Scale up or down instantly with a 30-day notice",
    },
    {
      without: "No IP ownership clarity — risky vendor relationships",
      with: "Full IP ownership, strict NDAs, and complete transparency",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#00235A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex flex-col items-center gap-3 mb-14 text-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[22px] font-bold tracking-wide">
              The SoftMind Difference
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-dark max-w-[700px]">
            Why Businesses Choose Us Over the Rest
          </h2>
          <p className="text-sm md:text-base text-grey font-medium leading-relaxed max-w-[580px]">
            See the difference a dedicated technology partner makes — from
            day one through every stage of growth.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-100 shadow-xl">
          {/* Without SoftMind Header */}
          <div className="bg-[#FFF5F5] px-6 py-4 border-b border-red-100 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <X className="w-4 h-4 text-red-500" strokeWidth={3} />
            </div>
            <h3 className="text-base font-bold text-red-600 tracking-wide">
              Without SoftMind
            </h3>
          </div>

          {/* With SoftMind Header */}
          <div className="bg-[#F0FDF8] px-6 py-4 border-b border-green/20 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green/15 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-green" strokeWidth={3} />
            </div>
            <h3 className="text-base font-bold text-green tracking-wide">
              With SoftMind
            </h3>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, idx) => (
            <React.Fragment key={idx}>
              {/* Without Column */}
              <div
                className={`flex items-start gap-3 px-6 py-5 ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                } border-b border-gray-50 lg:border-r border-gray-100`}
              >
                <div className="w-6 h-6 rounded-full bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-red-400" strokeWidth={3} />
                </div>
                <p className="text-sm text-[#555555] font-medium leading-relaxed">
                  {item.without}
                </p>
              </div>

              {/* With Column */}
              <div
                className={`flex items-start gap-3 px-6 py-5 ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                } border-b border-gray-50`}
              >
                <div className="w-6 h-6 rounded-full bg-green/10 border border-green/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green" strokeWidth={3} />
                </div>
                <p className="text-sm text-dark font-semibold leading-relaxed">
                  {item.with}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link href="/contact-us">
            <button className="flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-full hover:bg-[#003080] transition-all duration-300 hover:scale-105 shadow-lg text-sm tracking-wide">
              Start Working with SoftMind
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
