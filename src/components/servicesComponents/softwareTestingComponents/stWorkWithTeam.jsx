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

const MODELS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Dedicated QA Team",
    desc: "Build a dedicated offshore QA team that works exclusively on your product and becomes an extension of your internal team.",
    highlight: "Best for ongoing products",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Project-Based Testing",
    desc: "Get a focused QA team for a specific project, release, application, or testing requirement.",
    highlight: "Best for specific releases",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Staff Augmentation",
    desc: "Add testing expertise whenever your internal team needs additional capacity or specialized skills.",
    highlight: "Best for scaling fast",
  },
];

export default function StWorkWithTeam() {
  return (
    <section className="relative w-full bg-white py-20 md:py-28 overflow-hidden font-jakarta">
      {/* Background decorative blurs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#004BC0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1280px]">

        {/* Top Block: Works With Your Team */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center mb-20 md:mb-28">
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
              An offshore testing team shouldn&apos;t feel like a disconnected external
              vendor. We integrate our QA processes with your existing development
              workflow so testing becomes part of your product development lifecycle.
            </p>

            <a
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 bg-green hover:bg-[#0aad76] text-white font-bold text-[14px] tracking-wide rounded-full px-7 py-3.5 transition-all duration-300 hover:shadow-[0_0_24px_rgba(12,191,131,0.4)] hover:scale-[1.03] active:scale-[0.98] self-start"
            >
              Get a Free QA Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green">
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

        {/* Bottom Block: Engagement Models */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
                Engagement Models
              </span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-navy leading-[1.2] tracking-tight max-w-[680px] mx-auto">
              Flexible Offshore QA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
                Engagement Models
              </span>
            </h2>
            <p className="mt-4 text-[15px] md:text-[16px] text-grey leading-[1.75] font-medium max-w-[600px] mx-auto">
              Whether you need specialized testing expertise or a dedicated offshore QA team, choose an engagement model that fits your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {MODELS.map((model, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col gap-5 p-7 rounded-[22px] border border-gray-100 bg-white shadow-[0_2px_16px_rgba(0,35,90,0.06)] hover:border-green/30 hover:shadow-[0_12px_40px_rgba(12,191,131,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-[15%] right-[15%] h-[2px] rounded-full bg-gradient-to-r from-transparent via-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-green/10 group-hover:bg-green group-hover:text-white text-green flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_4px_16px_rgba(12,191,131,0.35)]">
                  {model.icon}
                </div>

                {/* Highlight badge */}
                <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-green bg-green/10 px-3 py-1 rounded-full self-start border border-green/15">
                  {model.highlight}
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[17px] font-bold text-navy group-hover:text-green transition-colors duration-200 leading-snug">
                    {model.title}
                  </h3>
                  <p className="text-[13.5px] text-grey leading-[1.65] font-medium">
                    {model.desc}
                  </p>
                </div>

                {/* Arrow link */}
                <div className="mt-auto pt-2">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-green opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
