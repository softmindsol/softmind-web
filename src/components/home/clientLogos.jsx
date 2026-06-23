"use client";
import React from "react";

export default function ClientLogos() {
  const logos = [
    { name: "HealthSync", industry: "HealthTech", icon: "🏥" },
    { name: "PayFlo", industry: "FinTech", icon: "💳" },
    { name: "EstateLink", industry: "PropTech", icon: "🏠" },
    { name: "EduLearn", industry: "EdTech", icon: "🎓" },
    { name: "CoreAI", industry: "AI Services", icon: "🧠" },
    { name: "MedSphere", industry: "HealthTech", icon: "🩺" },
    { name: "FinCap", industry: "FinTech", icon: "📈" },
    { name: "PropScale", industry: "PropTech", icon: "🏢" },
  ];

  return (
    <section className="relative w-full py-12 overflow-hidden border-b border-gray-100 font-jakarta">
      {/* Self-contained Infinite Marquee Styles */}
      <style jsx="true">{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto px-6 md:px-12 mb-6 text-center">
        <span className="text-xs font-bold tracking-[2px] uppercase text-[#666666]/60">
          Trusted by Innovative Teams Worldwide
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Shadow Overlays for smooth fade-in/fade-out on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Row */}
        <div className="marquee-container flex items-center gap-16 md:gap-24 py-2">
          {/* First set of logos */}
          {logos.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex items-center gap-2.5 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer select-none"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span className="font-extrabold text-lg text-navy tracking-tight">
                {logo.name}
              </span>
              <span className="text-[10px] bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full">
                {logo.industry}
              </span>
            </div>
          ))}
          {/* Duplicated set for seamless loop */}
          {logos.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex items-center gap-2.5 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer select-none"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span className="font-extrabold text-lg text-navy tracking-tight">
                {logo.name}
              </span>
              <span className="text-[10px] bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full">
                {logo.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
