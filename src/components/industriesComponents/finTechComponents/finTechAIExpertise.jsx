"use client";
import React from "react";
import { Network, Scale, MessageSquareCode, Sparkles, Bot } from "lucide-react";

const aiCapabilities = [
  {
    title: "Process Intelligence & Intelligent Automation",
    description:
      "Optimize business operations through process mining, workflow automation, AI-powered task orchestration, and operational analytics that eliminate bottlenecks and improve efficiency across banking and insurance functions.",
    icon: Network,
    glowColor: "rgba(12, 191, 131, 0.15)", // green
  },
  {
    title: "AI Strategy, Governance & Enablement",
    description:
      "Develop enterprise AI roadmaps, establish governance frameworks, build AI Centers of Excellence, and implement responsible AI practices that accelerate adoption while maintaining security, transparency, and compliance.",
    icon: Scale,
    glowColor: "rgba(59, 130, 246, 0.15)", // blue
  },
  {
    title: "Conversational AI",
    description:
      "Create intelligent virtual assistants, AI-powered customer service platforms, voice banking solutions, and conversational analytics that deliver personalized, secure, and always-available customer support.",
    icon: MessageSquareCode,
    glowColor: "rgba(139, 92, 246, 0.15)", // purple
  },
  {
    title: "Generative AI & Decision Intelligence",
    description:
      "Harness generative AI, predictive analytics, recommendation engines, and decision intelligence to automate knowledge work, improve forecasting, strengthen risk management, and enhance strategic decision-making.",
    icon: Sparkles,
    glowColor: "rgba(244, 63, 94, 0.15)", // rose
  },
  {
    title: "AI Agents & Autonomous Operations",
    description:
      "Deploy intelligent AI agents capable of executing complex financial workflows, coordinating multi-agent systems, and continuously learning to automate operations across payments, lending, insurance, compliance, and customer service.",
    icon: Bot,
    glowColor: "rgba(234, 179, 8, 0.15)", // yellow
  },
];

export default function FinTechAIExpertise() {
  return (
    <section className="relative w-full bg-gray-50 py-20 lg:py-28 overflow-hidden font-jakarta">
      {/* High-tech glow backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(12,191,131,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1350px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-navy text-[11px] md:text-xs font-bold tracking-widest uppercase">
              AI Expertise. Engineered for Financial Services.
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[45px] lg:leading-[1.2] font-bold text-navy tracking-tight mb-6">
            Specialized AI Capabilities for{" "}
            <p className="py-2 text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
              Intelligent Financial Enterprises
            </p>
          </h2>

          <p className="text-base md:text-lg text-grey font-medium leading-[1.6]">
            Specialized AI Capabilities for Intelligent Financial Enterprises:
            From AI strategy and intelligent automation to enterprise data
            platforms and autonomous agents, we help financial institutions
            adopt AI responsibly, securely, and at scale delivering measurable
            business outcomes across every stage of the transformation journey.
          </p>
        </div>

        {/* 5-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 justify-center">
          {aiCapabilities.map((item, idx) => {
            const Icon = item.icon;
            // First 3 cards take 2 columns each (3 per row), last 2 take 3 columns each (2 per row centered)
            const isWide = idx >= 3;
            return (
              <div
                key={idx}
                className={`group relative flex flex-col justify-between p-8 bg-white border border-gray-100 rounded-3xl transition-all duration-500 hover:border-green/30 hover:shadow-[0_20px_50px_rgba(0,35,90,0.06)] hover:-translate-y-1.5 ${
                  isWide ? "lg:col-span-3" : "lg:col-span-2"
                } md:col-span-1`}
                style={{
                  "--glow-color": item.glowColor,
                }}
              >
                {/* Glow back-halo on card hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,var(--glow-color)_0%,transparent_70%)] pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-navy/5 border border-navy/5 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-green group-hover:to-[#004BC0] transition-all duration-500 shadow-sm">
                    <Icon className="w-6 h-6 text-navy group-hover:text-green transition-colors duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg lg:text-xl font-bold text-navy mb-4 group-hover:text-green transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] lg:text-[15px] leading-[1.7] text-grey group-hover:text-navy/80 transition-colors duration-300 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Animated bottom line */}
                <div className="relative z-10 w-8 h-[3px] rounded-full bg-gray-200 mt-6 group-hover:bg-green group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
