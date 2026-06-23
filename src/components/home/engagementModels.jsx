"use client";
import React from "react";
import { Button } from "../ui/button";

export default function EngagementModels() {
  const models = [
    {
      title: "Managed Dedicated Team",
      tagline: "Best for growing teams",
      price: "Monthly Flat Rate",
      highlight: false,
      features: [
        "100% Dedicated Developers & Tech Lead",
        "Direct communication with engineers",
        "Scale up/down with 30-day notice",
        "Strict NDAs and complete IP ownership",
        "Agile project management included",
      ],
      cta: "Hire Dedicated Developers",
    },
    {
      title: "Product Development",
      tagline: "Best for new products & SaaS",
      price: "Fixed Price or Time & Material",
      highlight: true,
      features: [
        "End-to-end Product Strategy & Architecture",
        "UI/UX Design & High-Fidelity Mockups",
        "Production deployment & DevOps config",
        "Quality assurance & Automated testing",
        "Post-launch support & handoff docs",
      ],
      cta: "Build a Product",
    },
    {
      title: "Staff Augmentation",
      tagline: "Best for filling skills gaps",
      price: "Hourly Rate Contract",
      highlight: false,
      features: [
        "Highly specialized senior consultants",
        "Rapid onboarding within 72 hours",
        "Aligns to your internal engineering flow",
        "Flexible hourly billing models",
        "Expertise in AI, Cloud, & Complex Databases",
      ],
      cta: "Augment Your Team",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 text-dark overflow-hidden font-jakarta">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-sky-100 blur-[130px] rounded-full pointer-events-none opacity-50" />

      <div className="relative mx-auto px-6 md:px-12 max-w-[1289px]">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-3.5 text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[22px] font-bold tracking-wide">
              Flexible Engagement Models
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-navy max-w-[750px]">
            How We Partner With Your Business
          </h2>
          <p className="text-sm md:text-base text-grey font-medium leading-[24px] tracking-wide max-w-[600px] mt-2">
            Choose the alignment that fits your project scope, budget, and timeline. No rigid contracts, only high-performance delivery.
          </p>
        </div>

        {/* Models Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {models.map((model, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                model.highlight
                  ? "bg-navy text-white shadow-xl relative border-2 border-green scale-100 lg:scale-[1.03] z-10"
                  : "bg-white border border-gray-200 text-dark hover:border-navy/20 hover:shadow-md"
              }`}
            >
              <div>
                {/* Highlight Badge */}
                {model.highlight && (
                  <span className="absolute top-4 right-6 bg-green text-navy font-bold text-xs uppercase tracking-[1px] px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}

                {/* Tagline */}
                <span
                  className={`text-[13px] font-bold tracking-[1px] uppercase ${
                    model.highlight ? "text-green" : "text-grey/80"
                  }`}
                >
                  {model.tagline}
                </span>

                {/* Model Title */}
                <h3 className="text-2xl font-bold tracking-tight mt-3 mb-2">
                  {model.title}
                </h3>

                {/* Pricing Style */}
                <span
                  className={`text-sm font-semibold tracking-wide block border-b pb-6 mb-6 ${
                    model.highlight
                      ? "text-white/80 border-white/10"
                      : "text-[#666666] border-gray-100"
                  }`}
                >
                  {model.price}
                </span>

                {/* Features List */}
                <ul className="flex flex-col gap-4 mb-8">
                  {model.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-3 text-sm font-medium leading-[22px] tracking-wide"
                    >
                      <span
                        className={`text-base shrink-0 mt-0.5 ${
                          model.highlight ? "text-green" : "text-green"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={model.highlight ? "text-white/90" : "text-[#2E2E2E]"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="w-full mt-auto">
                <Button
                  variant={model.highlight ? "default" : "outline"}
                  className="w-full py-5 text-center font-bold flex justify-center items-center shadow-sm"
                  style={
                    model.highlight
                      ? {
                          backgroundColor: "#0CBF83",
                          borderColor: "#0CBF83",
                          color: "#00235A",
                        }
                      : {}
                  }
                >
                  {model.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
