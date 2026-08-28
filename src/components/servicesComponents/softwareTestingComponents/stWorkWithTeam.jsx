"use client";
import React from "react";

const TEAM_BENEFITS = [
  "Clear testing plans and priorities",
  "Transparent progress reporting",
  "Structured defect tracking",
  "Regular communication with QA experts",
  "Flexible engagement models",
  "Testing aligned with development cycles",
  "Continuous feedback between QA and development teams",
];

export default function StWorkWithTeam() {
  return (
    <section className="relative w-full bg-gray-200 py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Background decorative blurs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#004BC0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1380px]">
        {/* Top Block: Works With Your Team */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
                Integrated QA
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-navy leading-[1.15] tracking-tight">
              Offshore QA Testing That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
                Works With Your Development Team
              </span>
            </h2>

            <p className="text-[15px] md:text-[16px] text-grey leading-[1.75] font-medium max-w-[580px]">
              An offshore testing team shouldn&apos;t feel like a disconnected
              external vendor. We integrate our QA processes with your existing
              development workflow so testing becomes part of your product
              development lifecycle.
            </p>

            <a
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 bg-green hover:bg-[#0aad76] text-white font-bold text-[14px] tracking-wide rounded-full px-7 py-3.5 transition-all duration-300 hover:shadow-[0_0_24px_rgba(12,191,131,0.4)] hover:scale-[1.03] active:scale-[0.98] self-start"
            >
              Get a Free QA Consultation
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: Benefits card */}
          <div className="flex-1 w-full max-w-[520px]">
            <div className="relative rounded-[24px] border border-gray-100 bg-white shadow-[0_8px_48px_rgba(0,35,90,0.08)] overflow-hidden">
              <div className="absolute top-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-green/50 to-transparent" />

              <div className="px-8 pt-8 pb-5 border-b border-gray-100">
                <p className="text-[11px] font-bold uppercase tracking-[2.5px] text-green mb-1">
                  You Get
                </p>
                <h3 className="text-[20px] font-bold text-navy">
                  Full integration with your workflow
                </h3>
              </div>

              <ul className="flex flex-col divide-y divide-gray-50 px-8 pb-8">
                {TEAM_BENEFITS.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4 py-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green/10 group-hover:bg-green/20 flex items-center justify-center transition-colors duration-200 mt-0.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[14px] md:text-[15px] font-medium text-dark/80 leading-[1.6] group-hover:text-dark transition-colors duration-200">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
