"use client";
import React from "react";

const OFFSHORE_ROWS = [
  "Flexible team scaling",
  "Access to specialized expertise",
  "Lower operational overhead",
  "Suitable for project and ongoing testing",
  "Access to multiple testing capabilities",
  "Can accelerate testing capacity",
];

const INHOUSE_ROWS = [
  "Fixed internal capacity",
  "Requires internal hiring",
  "Higher recruitment and employment costs",
  "Primarily long-term staffing",
  "Expertise depends on internal team",
  "Scaling can take longer",
];

const DIFFERENTIATORS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Business-Focused QA",
    desc: "We don't test software simply to produce bug reports. We focus on the quality issues that can affect your users, business operations, revenue, and reputation.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Risk-Based Testing",
    desc: "Testing priorities are aligned with business and technical risks so critical functionality receives the attention it deserves.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Experienced QA Professionals",
    desc: "Work with QA specialists who understand different testing methodologies, technologies, applications, and development environments.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Flexible Capacity",
    desc: "Add testing resources when your workload increases and adapt your QA team as your product evolves.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Transparent Communication",
    desc: "Maintain visibility into testing progress, defects, risks, and release readiness throughout the engagement.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Cost-Efficient Delivery",
    desc: "Access professional QA capabilities while reducing the overhead associated with building and maintaining a large internal testing operation.",
  },
];

export default function StComparisonDiff() {
  return (
    <section className="relative w-full bg-white py-20 md:py-28 overflow-hidden font-jakarta">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#004BC0]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1280px]">

        {/* ── Comparison Table ── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
                Offshore vs In-House
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-navy leading-[1.15] tracking-tight max-w-[800px] mx-auto">
              Offshore Software Testing vs.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
                In-House QA
              </span>
            </h2>
            <p className="mt-5 text-[15px] md:text-[16px] text-grey leading-[1.75] font-medium max-w-[660px] mx-auto">
              Building an in-house QA function can provide control, but it can
              also require significant investment in hiring, training,
              infrastructure, tools, and ongoing management.
            </p>
          </div>

          <div className="rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_8px_48px_rgba(0,35,90,0.08)]">
            {/* Table header */}
            <div className="grid grid-cols-2">
              <div className="bg-gradient-to-r from-[#0CBF83] to-[#00a36e] px-8 py-5">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="text-white font-black text-[15px] tracking-wide">
                    Offshore QA Testing
                  </span>
                </div>
              </div>
              <div className="bg-[#0A0F1E] px-8 py-5">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                  <span className="text-white/70 font-black text-[15px] tracking-wide">
                    In-House QA
                  </span>
                </div>
              </div>
            </div>

            {/* Table rows */}
            {OFFSHORE_ROWS.map((offshore, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-2 border-t border-gray-100 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
              >
                {/* Offshore cell */}
                <div className="flex items-center gap-3 px-8 py-4 border-r border-gray-100">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green/15 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[13.5px] font-semibold text-navy">{offshore}</span>
                </div>
                {/* In-house cell */}
                <div className="flex items-center gap-3 px-8 py-4">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-grey/60">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <span className="text-[13.5px] font-medium text-grey">{INHOUSE_ROWS[idx]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── What Makes Us Different ── */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
                Our Difference
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-navy leading-[1.15] tracking-tight max-w-[800px] mx-auto">
              What Makes Our Offshore Software{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
                Testing Different?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {DIFFERENTIATORS.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col gap-4 p-7 rounded-[22px] border border-gray-100 bg-white shadow-[0_2px_16px_rgba(0,35,90,0.05)] hover:border-green/30 hover:shadow-[0_12px_40px_rgba(12,191,131,0.10)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-[15%] right-[15%] h-[2px] rounded-full bg-gradient-to-r from-transparent via-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-green/10 group-hover:bg-green text-green group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_4px_16px_rgba(12,191,131,0.35)]">
                  {item.icon}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-bold text-navy group-hover:text-green transition-colors duration-200 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-grey leading-[1.65] font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
