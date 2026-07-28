"use client";
import React from "react";

export default function TrustSection() {
  const logos = [
    { name: "EdTech Startups", industry: "Innovation", icon: "🚀" },
    { name: "Top Universities", industry: "Higher Ed", icon: "🏛️" },
    { name: "Corporate L&D", industry: "Enterprise", icon: "🏢" },
    { name: "Training Co.", industry: "Professional", icon: "📊" },
    { name: "eLearning Apps", industry: "Mobile", icon: "📱" },
    { name: "Tutor Networks", industry: "Platform", icon: "👨‍🏫" },
  ];

  return (
    <section className="relative w-full py-16 bg-black overflow-hidden border-b border-gray-100 font-jakarta">
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

      <div className="mx-auto px-6 md:px-12 mb-10 text-center flex flex-col items-center gap-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[1px] capitalize text-green">
          Built for Ambitious Learning Businesses
        </h2>
        <p className="text-sm md:text-base text-white/80 font-medium max-w-[700px]">
          We work with EdTech founders, education providers, universities,
          training companies, and corporate L&D teams.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Shadow Overlays for smooth fade-in/fade-out on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling Row */}
        <div className="marquee-container flex items-center gap-16 md:gap-24 py-2">
          {/* First set of logos */}
          {logos.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex items-center gap-2.5 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer select-none"
            >
              <span className="text-3xl">{logo.icon}</span>
              <span className="font-bold text-xl text-green tracking-tight whitespace-nowrap">
                {logo.name}
              </span>
              <span className="text-[10px] bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                {logo.industry}
              </span>
            </div>
          ))}
          {/* Duplicated set for seamless loop */}
          {logos.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex items-center gap-2.5 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer select-none"
            >
              <span className="text-3xl">{logo.icon}</span>
              <span className="font-extrabold text-xl text-green tracking-tight whitespace-nowrap">
                {logo.name}
              </span>
              <span className="text-[10px] bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                {logo.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
