"use client";
import React from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";

const BENEFITS = [
  "Reduce software testing costs without compromising quality",
  "Accelerate testing cycles and speed up time to market",
  "Identify defects earlier in the development lifecycle",
  "Access specialized QA and testing expertise",
  "Scale testing resources according to project requirements",
  "Improve software performance, security, usability, and reliability",
  "Keep your internal team focused on core product and business priorities",
];

export default function StReleaseWithConfidence() {
  return (
    <section className="relative w-full bg-gray-200 py-20 md:py-28 overflow-hidden font-jakarta">
      {/* Background decorative blurs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#004BC0]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
                Why Offshore QA
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-navy leading-[1.15] tracking-tight">
              Offshore Software Testing That Helps You{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
                Release With Confidence
              </span>
            </h2>

            <p className="text-[15px] md:text-[16px] text-grey leading-[1.75] font-medium max-w-[580px]">
              Our offshore software testing services give you access to
              experienced QA professionals without the overhead of maintaining a
              large internal testing team.
            </p>

            <a
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 bg-green hover:bg-[#0aad76] text-white font-bold text-[14px] tracking-wide rounded-full px-7 py-3.5 transition-all duration-300 hover:shadow-[0_0_24px_rgba(12,191,131,0.4)] hover:scale-[1.03] active:scale-[0.98] self-start"
            >
              Get a Free QA Consultation
              <FiArrowRight size={16} />
            </a>
          </div>

          {/* Right: Benefits Card */}
          <div className="flex-1 w-full max-w-[560px]">
            <div className="relative rounded-[24px] border border-gray-100 bg-white shadow-[0_8px_48px_rgba(0,35,90,0.08)] overflow-hidden">
              <div className="absolute top-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-green/50 to-transparent" />

              <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-green mb-1">
                  What You Gain
                </p>
                <h3 className="text-[20px] font-bold text-navy">
                  Tangible business outcomes
                </h3>
              </div>

              <ul className="flex flex-col divide-y divide-gray-50 px-8 pb-8">
                {BENEFITS.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4 py-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green/10 group-hover:bg-green/20 flex items-center justify-center transition-colors duration-200 mt-0.5">
                      <FiCheck size={12} className="text-green" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] md:text-[15px] font-medium text-dark/80 leading-[1.6] group-hover:text-dark transition-colors duration-200">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-[-40px] right-[-40px] w-[160px] h-[160px] rounded-full bg-gradient-to-br from-green/10 to-[#004BC0]/5 blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
