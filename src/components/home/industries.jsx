"use client";
import React from "react";
import { HeartPulse, Wallet, Building, GraduationCap } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "HealthTech",
      description:
        "Building HIPAA-compliant patient management dashboards, wellness monitoring platforms, and telemedicine apps that put patients first.",
      icon: HeartPulse,
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
      accent: "hover:shadow-emerald-500/10",
      items: ["HIPAA Compliance", "Telemedicine", "Patient Dashboards"],
    },
    {
      title: "FinTech",
      description:
        "Developing high-security robo-advisors, fractional investing systems, and transaction pipelines built for trust and transparency.",
      icon: Wallet,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      accent: "hover:shadow-blue-500/10",
      items: ["Secure Ledgers", "Escrow APIs", "Auto-Investing"],
    },
    {
      title: "PropTech",
      description:
        "Creating real-estate listing engines, commercial asset controllers, and fractional ownership portals with custom database systems.",
      icon: Building,
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
      accent: "hover:shadow-purple-500/10",
      items: ["Property Analytics", "Smart Leases", "Asset Portals"],
    },
    {
      title: "EdTech",
      description:
        "Designing modular learning management platforms, tracking systems, and interactive assessment tools for modern education.",
      icon: GraduationCap,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      accent: "hover:shadow-orange-500/10",
      items: ["LMS Architecture", "Student Progress Analytics", "Media Portals"],
    },
  ];

  return (
    <section className="relative w-full bg-[#161616] text-white py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Background Radial Glow */}
      <div
        className="absolute top-[-250px] right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none opacity-30 blur-[120px]"
        style={{ backgroundColor: "#00235A" }}
      />

      <div className="relative mx-auto px-6 md:px-12 max-w-[1289px]">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-3.5 text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[22px] font-bold tracking-wide">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-white max-w-[700px]">
            Tailored Technology For High-Growth Sectors
          </h2>
          <p className="text-sm md:text-base text-white/60 font-medium leading-[24px] tracking-wide max-w-[600px] mt-2">
            We possess deep domain expertise in designing, shipping, and maintaining production-grade software for specialized industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <div
                key={idx}
                className={`group flex flex-col justify-between bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-lg ${ind.accent}`}
              >
                <div>
                  {/* Icon Block */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 transition-transform duration-300 group-hover:scale-105 ${ind.color}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] leading-[29px] font-bold tracking-wide text-white mb-3">
                    {ind.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/75 font-medium leading-[22px] tracking-wide mb-6">
                    {ind.description}
                  </p>
                </div>

                {/* Sub Features Bullet List */}
                <div className="border-t border-white/[0.06] pt-4 mt-auto">
                  <ul className="flex flex-col gap-2">
                    {ind.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs text-white/50 font-medium tracking-wide flex items-center gap-1.5"
                      >
                        <span className="text-green">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
