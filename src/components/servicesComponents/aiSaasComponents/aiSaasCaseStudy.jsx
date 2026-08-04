"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "Vitria AI",
    tags: ["Generative AI", "Video Processing", "LLMs"],
    description: "An automated AI video production and content generation platform enabling marketing teams to generate personalized, localized video ad campaigns at scale.",
    metric: "450%",
    metricLabel: "Campaign speed increase",
    accent: "from-[#ECEFF1] to-[#CFD8DC]",
    visualText: "🎥 AI Video SaaS",
    textColor: "text-slate-800"
  },
  {
    title: "BuiltRight",
    tags: ["PropTech", "Predictive Analytics", "Workflows"],
    description: "A comprehensive property assessment and building management system featuring intelligent cost estimation and automated regulatory compliance checking.",
    metric: "99.8%",
    metricLabel: "Compliance verification accuracy",
    accent: "from-[#E0F2FE] to-[#BAE6FD]",
    visualText: "🏠 PropTech AI",
    textColor: "text-blue-900"
  },
  {
    title: "CoreAI Health",
    tags: ["NLP", "Document Processing", "Security"],
    description: "An intelligent healthcare administration platform extracting critical metadata from patient records and contracts, using secure retrieval-augmented generation.",
    metric: "92%",
    metricLabel: "Reduction in manual data entry",
    accent: "from-[#F1F5F9] to-[#E2E8F0]",
    visualText: "🩺 Medical NLP",
    textColor: "text-emerald-950"
  }
];

export default function AiSaasCaseStudy() {
  return (
    <section className="relative w-full bg-white text-dark py-24 overflow-hidden font-jakarta">
      {/* Background blurs */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-navy/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto px-6 lg:px-12 max-w-[1280px]">
        {/* Header Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between items-center lg:items-start gap-8 mb-16 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-3.5 max-w-[650px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
              <span className="text-green text-[18px] md:text-[22px] font-bold tracking-wide">
                Case Studies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-navy capitalize">
              AI SaaS Products Built Around Real Business Needs
            </h2>
          </div>
          <div className="lg:max-w-[450px]">
            <p className="text-sm md:text-base text-grey font-medium leading-relaxed">
              Explore how we apply AI, cloud engineering, and product design to solve real business challenges across different industries.
            </p>
          </div>
        </div>

        {/* Grid Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300"
            >
              <div>
                {/* Visual Placeholder Graphic */}
                <div className={`w-full aspect-[414/250] rounded-xl bg-gradient-to-br ${study.accent} flex items-center justify-center relative overflow-hidden mb-6 shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)]`}>
                  {/* Visual Floating elements */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                  <span className={`text-[20px] font-black tracking-tight z-10 ${study.textColor} bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm`}>
                    {study.visualText}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-bold uppercase tracking-wider text-green bg-green/10 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-[24px] font-bold text-navy mb-3 flex items-center gap-1 group-hover:text-green transition-colors duration-300">
                  {study.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-green" />
                </h3>

                {/* Description */}
                <p className="text-[14px] sm:text-[15px] font-medium text-grey leading-relaxed mb-6">
                  {study.description}
                </p>
              </div>

              {/* Metric Section */}
              <div className="border-t border-gray-100 pt-5 mt-auto flex items-center gap-4">
                <span className="text-[36px] font-black text-navy leading-none tracking-tight">
                  {study.metric}
                </span>
                <div className="flex flex-col">
                  <span className="text-[12px] text-grey font-bold uppercase tracking-wider">
                    {study.metricLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
