"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SoftMindSolLogo } from "../../../public/images";

const tabs = ["Web Development", "Mobile App Development"];

const webTech = [
  {
    name: "React",
    icon: "⚛️",
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.3)",
    border: "rgba(97,218,251,0.2)",
  },
  {
    name: "Next.js",
    icon: "▲",
    color: "#000000",
    bg: "rgba(255,255,255,0.3)",
    border: "rgba(255,255,255,0.12)",
  },
  {
    name: "TypeScript",
    icon: "TS",
    color: "#3178C6",
    bg: "rgba(49,120,198,0.3)",
    border: "rgba(49,120,198,0.2)",
    isText: true,
  },
  {
    name: "Node.js",
    icon: "⬡",
    color: "#339933",
    bg: "rgba(51,153,51,0.3)",
    border: "rgba(51,153,51,0.2)",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    color: "#336791",
    bg: "rgba(51,103,145,0.3)",
    border: "rgba(51,103,145,0.2)",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "#47A248",
    bg: "rgba(71,162,72,0.3)",
    border: "rgba(71,162,72,0.2)",
  },
  {
    name: "AWS",
    icon: "☁️",
    color: "#FF9900",
    bg: "rgba(255,153,0,0.3)",
    border: "rgba(255,153,0,0.2)",
  },
  {
    name: "Docker",
    icon: "🐋",
    color: "#2496ED",
    bg: "rgba(36,150,237,0.3)",
    border: "rgba(36,150,237,0.2)",
  },
  {
    name: "GraphQL",
    icon: "◈",
    color: "#E10098",
    bg: "rgba(225,0,152,0.3)",
    border: "rgba(225,0,152,0.2)",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.3)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    name: "Redis",
    icon: "⚡",
    color: "#DC382D",
    bg: "rgba(220,56,45,0.3)",
    border: "rgba(220,56,45,0.2)",
  },
  {
    name: "Vercel",
    icon: "▲",
    color: "#ffffff",
    bg: "rgba(0,0,0,0.3)",
    border: "rgba(255,255,255,0.15)",
  },
];

const mobileTech = [
  {
    name: "React Native",
    icon: "⚛️",
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.3)",
    border: "rgba(97,218,251,0.2)",
  },
  {
    name: "Flutter",
    icon: "🐦",
    color: "#02569B",
    bg: "rgba(2,86,155,0.3)",
    border: "rgba(2,86,155,0.2)",
  },
  {
    name: "Expo",
    icon: "◎",
    color: "#000000",
    bg: "rgba(255,255,255,0.3)",
    border: "rgba(255,255,255,0.3)",
  },
  {
    name: "Firebase",
    icon: "🔥",
    color: "#FFCA28",
    bg: "rgba(255,202,40,0.3)",
    border: "rgba(255,202,40,0.2)",
  },
  {
    name: "Swift",
    icon: "🍎",
    color: "#F05138",
    bg: "rgba(240,81,56,0.3)",
    border: "rgba(240,81,56,0.2)",
  },
  {
    name: "Kotlin",
    icon: "K",
    color: "#7F52FF",
    bg: "rgba(127,82,255,0.3)",
    border: "rgba(127,82,255,0.2)",
    isText: true,
  },
  {
    name: "App Store",
    icon: "🍎",
    color: "#0D96F6",
    bg: "rgba(13,150,246,0.3)",
    border: "rgba(13,150,246,0.2)",
  },
  {
    name: "Play Store",
    icon: "▶",
    color: "#34A853",
    bg: "rgba(52,168,83,0.3)",
    border: "rgba(52,168,83,0.2)",
  },
  {
    name: "Supabase",
    icon: "⚡",
    color: "#3ECF8E",
    bg: "rgba(62,207,142,0.3)",
    border: "rgba(62,207,142,0.2)",
  },
  {
    name: "Push Notifications",
    icon: "🔔",
    color: "#FF6B35",
    bg: "rgba(255,107,53,0.3)",
    border: "rgba(255,107,53,0.2)",
  },
  {
    name: "Stripe SDK",
    icon: "💳",
    color: "#635BFF",
    bg: "rgba(99,91,255,0.3)",
    border: "rgba(99,91,255,0.2)",
  },
  {
    name: "Analytics",
    icon: "📊",
    color: "#E87722",
    bg: "rgba(232,119,34,0.3)",
    border: "rgba(232,119,34,0.2)",
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(0);
  const tech = activeTab === 0 ? webTech : mobileTech;

  return (
    <section className="relative w-full bg-[#161616] py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Background radial glow */}
      <div
        className="absolute top-[-187px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none opacity-50 blur-[130px]"
        style={{ backgroundColor: "navy" }}
      />
      {/* Stylized background monogram watermark on the left (matching "SoftOps Monogram") */}
      <div className="absolute select-none pointer-events-none">
        <Image
          src={SoftMindSolLogo}
          alt="SoftMindSol Logo"
          className="object-cover max-h-[726px]"
        />
      </div>
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#00235A_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex flex-col items-center gap-3 mb-12 text-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[22px] font-bold tracking-wide">
              Tech Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-white max-w-[680px]">
            Built With Industry-Leading Technologies
          </h2>
          <p className="text-sm md:text-base text-white/80 font-medium leading-relaxed max-w-[560px]">
            We use battle-tested, modern tools that ensure your product is
            performant, scalable, and maintainable for years to come.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white border border-gray-200 rounded-full p-1 shadow-sm gap-1">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-navy text-white shadow-md"
                    : "text-grey hover:text-dark"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {tech.map((item, idx) => (
            <div
              key={`${activeTab}-${idx}`}
              className="group flex flex-col items-center gap-3 backdrop-blur-md border rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{ borderColor: item.border }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-transform duration-300 group-hover:scale-110"
                style={{ background: item.bg, color: item.color }}
              >
                {item.isText ? (
                  <span
                    className="text-sm font-black"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </span>
                ) : (
                  <span>{item.icon}</span>
                )}
              </div>

              {/* Name */}
              <span className="text-xs font-semibold text-white text-center leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-grey/60 mt-10 font-medium">
          + many more tools depending on project requirements
        </p>
      </div>
    </section>
  );
}
