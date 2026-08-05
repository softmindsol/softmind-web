"use client";
import React from "react";
import Image from "next/image";
import { SoftMindSolLogo } from "../../../../public/images";

export default function AiSaasTrust() {
  const logos = [
    { name: "SaaSify", industry: "Cloud Platform", icon: "☁️" },
    { name: "CognitiveFlow", industry: "Workflow AI", icon: "🧠" },
    { name: "FinScale", industry: "FinTech SaaS", icon: "💳" },
    { name: "PropData", industry: "PropTech", icon: "🏠" },
    { name: "NeuralMed", industry: "HealthTech AI", icon: "🩺" },
    { name: "Synthetix", industry: "Generative AI", icon: "✨" },
    { name: "EduCopilot", industry: "EdTech SaaS", icon: "🎓" },
    { name: "LogiChain", industry: "Logistics AI", icon: "⚙️" },
  ];

  const stats = [
    {
      value: "50+",
      label: "AI and software projects delivered",
    },
    {
      value: "20+",
      label: "Industries served",
    },
    {
      value: "98%",
      label: "Client satisfaction rate",
    },
    {
      value: "Global",
      label: "Development and delivery experience",
    },
  ];

  return (
    <section className="relative w-full py-16 overflow-hidden bg-gray-200 border-b border-gray-100 font-jakarta">
      {/* Marquee CSS Keyframes */}
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

      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto px-6 md:px-12 mb-8 text-center">
        <span className="text-sm font-bold tracking-[2px] uppercase text-black">
          Trusted by Innovative SaaS & Enterprise Teams Worldwide
        </span>
      </div>

      {/* Infinite Scrolling Client Logos */}
      <div className="relative w-full overflow-hidden flex items-center mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-200 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-200 to-transparent z-10 pointer-events-none" />

        <div className="marquee-container flex items-center gap-16 md:gap-20 py-2">
          {logos.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex items-center gap-2.5 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer select-none"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span className="font-extrabold text-lg text-navy tracking-tight">
                {logo.name}
              </span>
              <span className="text-[10px] bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                {logo.industry}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {logos.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex items-center gap-2.5 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 cursor-pointer select-none"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span className="font-extrabold text-lg text-navy tracking-tight">
                {logo.name}
              </span>
              <span className="text-[10px] bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                {logo.industry}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Proof of Work Stats Card */}
      <div className="w-full mx-auto px-6 lg:px-12 relative z-20">
        <div className="w-full bg-[linear-gradient(93.08deg,#00235A_0.43%,#000D22_100%)] rounded-[20px] py-12 px-6 sm:px-12 flex flex-col items-center justify-center gap-8 shadow-2xl relative overflow-hidden group border border-white/5">
          {/* Logo Watermark inside Card */}
          <div className="absolute left-0 top-0 select-none pointer-events-none translate-x-12 -translate-y-12">
            <Image
              src={SoftMindSolLogo}
              alt="SoftMind Logo"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <h2 className="text-[24px] sm:text-[32px] md:text-[38px] font-bold text-white leading-tight max-w-[700px]">
              Build Your SaaS Product with an Experienced{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
                AI Development Team
              </span>
            </h2>
            <p className="max-w-[850px] text-[14px] sm:text-[16px] font-medium text-white/80 leading-[22px] tracking-[0.5px]">
              Work with AI engineers, SaaS architects, product designers, cloud
              specialists, and quality assurance professionals focused on
              building software that creates practical business value.
            </p>
          </div>

          <div className="w-full h-px bg-white/10 my-2" />

          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 w-full">
            {stats.map((stat, sIdx) => (
              <div
                key={sIdx}
                className={`flex flex-col px-4 sm:px-8 items-center text-center transition-all duration-300 hover:scale-105 ${
                  sIdx > 0 ? "lg:border-l lg:border-white/15" : ""
                } ${sIdx === 1 ? "sm:border-l sm:border-white/15 lg:border-none" : ""} ${
                  sIdx === 3 ? "sm:border-l sm:border-white/15" : ""
                }`}
              >
                <span className="text-[32px] md:text-[40px] font-black text-green mb-1 drop-shadow-[0_2px_10px_rgba(12,191,131,0.25)]">
                  {stat.value}
                </span>
                <span className="text-[14px] font-medium text-white leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
