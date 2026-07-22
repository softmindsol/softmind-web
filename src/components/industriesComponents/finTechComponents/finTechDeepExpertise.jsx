"use client";
import React from "react";
import { Building2, Coins, Network } from "lucide-react";

const expertiseData = [
  {
    title: "Banks & Financial Institutions",
    description:
      "Modernizing banking platforms with digital transformation, cloud migration, AI-powered operations, and secure customer engagement solutions.",
    icon: Building2,
    accentColor: "from-green/20 via-green/5 to-transparent",
    iconColor: "text-green",
    borderColor: "group-hover:border-green/40",
  },
  {
    title: "Payment Providers & Fintechs",
    description:
      "Enabling seamless payment processing, embedded finance, intelligent routing, fraud prevention, and regulatory compliance for next-generation payment experiences.",
    icon: Coins,
    accentColor: "from-blue-500/20 via-blue-500/5 to-transparent",
    iconColor: "text-blue-400",
    borderColor: "group-hover:border-blue-500/40",
  },
  {
    title: "Financial Technology Platforms",
    description:
      "Engineering scalable financial software, API-driven ecosystems, and cloud-native infrastructure that powers high-volume transactions, operational resilience, and continuous innovation.",
    icon: Network,
    accentColor: "from-purple-500/20 via-purple-500/5 to-transparent",
    iconColor: "text-purple-400",
    borderColor: "group-hover:border-purple-500/40",
  },
];

export default function FinTechDeepExpertise() {
  return (
    <section className="relative w-full bg-slate-950 py-20 lg:py-28 overflow-hidden font-jakarta text-white">
      {/* Glow backgrounds */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-blue-900/20 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] rounded-full bg-emerald-900/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[850px] mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green text-[11px] md:text-xs font-bold tracking-[2.5px] uppercase">
              Ecosystem Expertise
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[45px] lg:leading-[1.2] font-bold text-white tracking-tight mb-6">
            Deep Expertise Across the{" "}
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
              Financial Services Ecosystem
            </p>
          </h2>

          <p className="text-base md:text-lg text-white/70 font-medium leading-[1.6]">
            From banks and fintechs to payment providers and financial
            technology platforms, we build secure, scalable, and intelligent
            solutions that simplify complex operations, optimize transaction
            flows, and create exceptional customer experiences.
          </p>
        </div>

        {/* 3-Panel Asymmetrical Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group relative overflow-hidden bg-white/[0.01] border border-white/30 rounded-xl p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.03] hover:border-green hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${item.borderColor}`}
              >
                {/* Visual back gradient block */}
                <div
                  className={`absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-br ${item.accentColor} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[250px]">
                  <div>
                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors duration-500">
                      <Icon className={`w-8 h-8 ${item.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-green transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] lg:text-[16px] leading-[1.7] text-white/60 font-medium group-hover:text-white/80 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Tiny details decorator */}
                  <div className="mt-8 flex items-center gap-1">
                    <span className="w-8 h-[2px] bg-white/10 group-hover:bg-green group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
