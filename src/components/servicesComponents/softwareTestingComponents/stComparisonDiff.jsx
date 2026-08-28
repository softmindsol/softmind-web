"use client";
import React from "react";
import {
  FiActivity,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiMessageSquare,
  FiDollarSign,
  FiCheck,
  FiX,
  FiClock,
  FiBriefcase,
  FiArrowRight,
} from "react-icons/fi";

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
    icon: <FiActivity size={22} />,
    title: "Business-Focused QA",
    desc: "We don't test software simply to produce bug reports. We focus on the quality issues that can affect your users, business operations, revenue, and reputation.",
  },
  {
    icon: <FiShield size={22} />,
    title: "Risk-Based Testing",
    desc: "Testing priorities are aligned with business and technical risks so critical functionality receives the attention it deserves.",
  },
  {
    icon: <FiUsers size={22} />,
    title: "Experienced QA Professionals",
    desc: "Work with QA specialists who understand different testing methodologies, technologies, applications, and development environments.",
  },
  {
    icon: <FiTrendingUp size={22} />,
    title: "Flexible Capacity",
    desc: "Add testing resources when your workload increases and adapt your QA team as your product evolves.",
  },
  {
    icon: <FiMessageSquare size={22} />,
    title: "Transparent Communication",
    desc: "Maintain visibility into testing progress, defects, risks, and release readiness throughout the engagement.",
  },
  {
    icon: <FiDollarSign size={22} />,
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
                  <FiClock size={18} color="white" />
                  <span className="text-white font-black text-[15px] tracking-wide">
                    Offshore QA Testing
                  </span>
                </div>
              </div>
              <div className="bg-[#0A0F1E] px-8 py-5">
                <div className="flex items-center gap-2">
                  <FiBriefcase size={18} color="rgba(255,255,255,0.5)" />
                  <span className="text-white font-black text-[15px] tracking-wide">
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
                    <FiCheck size={10} className="text-green" strokeWidth={3} />
                  </div>
                  <span className="text-[13.5px] font-semibold text-navy">
                    {offshore}
                  </span>
                </div>
                {/* In-house cell */}
                <div className="flex items-center gap-3 px-8 py-4">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                    <FiX size={10} className="text-grey/60" strokeWidth={3} />
                  </div>
                  <span className="text-[13.5px] font-medium text-grey">
                    {INHOUSE_ROWS[idx]}
                  </span>
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
