"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SoftMindSolLogo } from "../../../../public/images";

const categories = [
  "AI & Machine Learning",
  "Front-End Development",
  "Back-End Development",
  "Cloud & Infrastructure",
  "Databases & Vector Search",
  "DevOps & MLOps",
];

const techData = {
  "AI & Machine Learning": [
    {
      name: "OpenAI",
      icon: "🧠",
      color: "#00A37F",
      bg: "rgba(0,163,127,0.15)",
      border: "rgba(0,163,127,0.2)",
    },
    {
      name: "Anthropic",
      icon: "🤖",
      color: "#D4AA7D",
      bg: "rgba(212,170,125,0.15)",
      border: "rgba(212,170,125,0.2)",
    },
    {
      name: "Google Gemini",
      icon: "✨",
      color: "#388AF6",
      bg: "rgba(56,138,246,0.15)",
      border: "rgba(56,138,246,0.2)",
    },
    {
      name: "Hugging Face",
      icon: "🤗",
      color: "#FFD21E",
      bg: "rgba(255,210,30,0.15)",
      border: "rgba(255,210,30,0.2)",
    },
    {
      name: "PyTorch",
      icon: "🔥",
      color: "#EE4C2C",
      bg: "rgba(238,76,44,0.15)",
      border: "rgba(238,76,44,0.2)",
    },
    {
      name: "TensorFlow",
      icon: "🍊",
      color: "#FF6F00",
      bg: "rgba(255,111,0,0.15)",
      border: "rgba(255,111,0,0.2)",
    },
    {
      name: "LangChain",
      icon: "🦜",
      color: "#13A886",
      bg: "rgba(19,168,134,0.15)",
      border: "rgba(19,168,134,0.2)",
    },
    {
      name: "LlamaIndex",
      icon: "🦙",
      color: "#B66DFF",
      bg: "rgba(182,109,255,0.15)",
      border: "rgba(182,109,255,0.2)",
    },
    {
      name: "Scikit-learn",
      icon: "📊",
      color: "#F7931E",
      bg: "rgba(247,147,30,0.15)",
      border: "rgba(247,147,30,0.2)",
    },
  ],
  "Front-End Development": [
    {
      name: "React",
      icon: "⚛️",
      color: "#61DAFB",
      bg: "rgba(97,218,251,0.15)",
      border: "rgba(97,218,251,0.2)",
    },
    {
      name: "Next.js",
      icon: "▲",
      color: "#ffffff",
      bg: "rgba(255,255,255,0.1)",
      border: "rgba(255,255,255,0.15)",
    },
    {
      name: "Vue.js",
      icon: "🟢",
      color: "#4FC08D",
      bg: "rgba(79,192,141,0.15)",
      border: "rgba(79,192,141,0.2)",
    },
    {
      name: "TypeScript",
      icon: "TS",
      color: "#3178C6",
      bg: "rgba(49,120,198,0.15)",
      border: "rgba(49,120,198,0.2)",
      isText: true,
    },
    {
      name: "JavaScript",
      icon: "JS",
      color: "#F7DF1E",
      bg: "rgba(247,223,30,0.15)",
      border: "rgba(247,223,30,0.2)",
      isText: true,
    },
    {
      name: "Flutter",
      icon: "🐦",
      color: "#02569B",
      bg: "rgba(2,86,155,0.15)",
      border: "rgba(2,86,155,0.2)",
    },
  ],
  "Back-End Development": [
    {
      name: "Python",
      icon: "🐍",
      color: "#3776AB",
      bg: "rgba(55,118,171,0.15)",
      border: "rgba(55,118,171,0.2)",
    },
    {
      name: "Node.js",
      icon: "⬡",
      color: "#339933",
      bg: "rgba(51,153,51,0.15)",
      border: "rgba(51,153,51,0.2)",
    },
    {
      name: "Django",
      icon: "⚙️",
      color: "#092E20",
      bg: "rgba(9,46,32,0.15)",
      border: "rgba(9,46,32,0.2)",
    },
    {
      name: "FastAPI",
      icon: "⚡",
      color: "#059669",
      bg: "rgba(5,150,105,0.15)",
      border: "rgba(5,150,105,0.2)",
    },
    {
      name: "Flask",
      icon: "🌶️",
      color: "#FF5722",
      bg: "rgba(255,87,34,0.15)",
      border: "rgba(255,87,34,0.2)",
    },
    {
      name: "NestJS",
      icon: "🦁",
      color: "#E0234E",
      bg: "rgba(224,35,78,0.15)",
      border: "rgba(224,35,78,0.2)",
    },
  ],
  "Cloud & Infrastructure": [
    {
      name: "Amazon Web Services",
      icon: "☁️",
      color: "#FF9900",
      bg: "rgba(255,153,0,0.15)",
      border: "rgba(255,153,0,0.2)",
    },
    {
      name: "Microsoft Azure",
      icon: "🔷",
      color: "#0078D4",
      bg: "rgba(0,120,212,0.15)",
      border: "rgba(0,120,212,0.2)",
    },
    {
      name: "Google Cloud Platform",
      icon: "☁️",
      color: "#4285F4",
      bg: "rgba(66,133,244,0.15)",
      border: "rgba(66,133,244,0.2)",
    },
    {
      name: "Docker",
      icon: "🐋",
      color: "#2496ED",
      bg: "rgba(36,150,237,0.15)",
      border: "rgba(36,150,237,0.2)",
    },
    {
      name: "Kubernetes",
      icon: "☸️",
      color: "#326CE5",
      bg: "rgba(50,108,229,0.15)",
      border: "rgba(50,108,229,0.2)",
    },
    {
      name: "Terraform",
      icon: "⬢",
      color: "#844FBA",
      bg: "rgba(132,79,186,0.15)",
      border: "rgba(132,79,186,0.2)",
    },
    {
      name: "Serverless services",
      icon: "⚡",
      color: "#FD5750",
      bg: "rgba(253,87,80,0.15)",
      border: "rgba(253,87,80,0.2)",
    },
  ],
  "Databases & Vector Search": [
    {
      name: "PostgreSQL",
      icon: "🐘",
      color: "#336791",
      bg: "rgba(51,103,145,0.15)",
      border: "rgba(51,103,145,0.2)",
    },
    {
      name: "MySQL",
      icon: "🐬",
      color: "#00758F",
      bg: "rgba(0,117,143,0.15)",
      border: "rgba(0,117,143,0.2)",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "#47A248",
      bg: "rgba(71,162,72,0.15)",
      border: "rgba(71,162,72,0.2)",
    },
    {
      name: "Redis",
      icon: "⚡",
      color: "#DC382D",
      bg: "rgba(220,56,45,0.15)",
      border: "rgba(220,56,45,0.2)",
    },
    {
      name: "Pinecone",
      icon: "🌲",
      color: "#10B981",
      bg: "rgba(16,185,129,0.15)",
      border: "rgba(16,185,129,0.2)",
    },
    {
      name: "Weaviate",
      icon: "🧭",
      color: "#3ECF8E",
      bg: "rgba(62,207,142,0.15)",
      border: "rgba(62,207,142,0.2)",
    },
    {
      name: "Elasticsearch",
      icon: "🔍",
      color: "#005571",
      bg: "rgba(0,85,113,0.15)",
      border: "rgba(0,85,113,0.2)",
    },
    {
      name: "Snowflake",
      icon: "❄️",
      color: "#29B6F6",
      bg: "rgba(41,182,246,0.15)",
      border: "rgba(41,182,246,0.2)",
    },
  ],
  "DevOps & MLOps": [
    {
      name: "GitHub Actions",
      icon: "🐙",
      color: "#ffffff",
      bg: "rgba(255,255,255,0.1)",
      border: "rgba(255,255,255,0.15)",
    },
    {
      name: "GitLab CI/CD",
      icon: "🦊",
      color: "#FC6D26",
      bg: "rgba(252,109,38,0.15)",
      border: "rgba(252,109,38,0.2)",
    },
    {
      name: "Jenkins",
      icon: "👷",
      color: "#D24939",
      bg: "rgba(210,73,57,0.15)",
      border: "rgba(210,73,57,0.2)",
    },
    {
      name: "Prometheus",
      icon: "🔥",
      color: "#E6522C",
      bg: "rgba(230,82,44,0.15)",
      border: "rgba(230,82,44,0.2)",
    },
    {
      name: "Grafana",
      icon: "📊",
      color: "#F47A20",
      bg: "rgba(244,122,32,0.15)",
      border: "rgba(244,122,32,0.2)",
    },
    {
      name: "Datadog",
      icon: "🐶",
      color: "#632CA6",
      bg: "rgba(99,44,166,0.15)",
      border: "rgba(99,44,166,0.2)",
    },
    {
      name: "Sentry",
      icon: "🚨",
      color: "#362D59",
      bg: "rgba(54,45,89,0.15)",
      border: "rgba(54,45,89,0.2)",
    },
  ],
};

export default function AiSaasTechStack() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const currentTechList = techData[activeCategory] || [];

  return (
    <section className="relative w-full bg-[#161616] py-24 overflow-hidden font-jakarta">
      {/* Background glow */}
      <div
        className="absolute top-[-187px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none opacity-45 blur-[130px]"
        style={{ backgroundColor: "navy" }}
      />
      {/* Background Watermark */}
      <div className="absolute select-none pointer-events-none opacity-20">
        <Image
          src={SoftMindSolLogo}
          alt="SoftMind Logo"
          className="object-cover max-h-[726px]"
        />
      </div>

      <div className="relative mx-auto px-6 md:px-12 max-w-[1280px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3.5 mb-16 text-center max-w-[900px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[18px] md:text-[22px] font-bold tracking-wide">
              Technology Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-white capitalize">
            Our AI SaaS Development{" "}
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
              Technology Stack
            </p>
          </h2>
          <p className="text-sm md:text-base text-white/80 font-medium leading-relaxed max-w-[700px] mt-2">
            We select technologies according to your product requirements rather
            than forcing every project into the same technical framework.
          </p>
        </div>

        {/* Tab Switcher Grid */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 bg-white/5 border border-white/10 rounded-[20px] p-2 max-w-5xl shadow-inner backdrop-blur-md">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 rounded-xl text-[14px] font-bold tracking-wide transition-all duration-350 ${
                  activeCategory === cat
                    ? "bg-green text-navy shadow-md scale-105"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto min-h-[220px] content-start">
          {currentTechList.map((item, idx) => (
            <div
              key={`${activeCategory}-${idx}`}
              className="group flex flex-col items-center gap-4 bg-white/5 border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] cursor-default overflow-hidden relative"
              style={{ borderColor: item.border }}
            >
              {/* Inner glowing element */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ backgroundColor: item.color, filter: "blur(20px)" }}
              />

              {/* Icon Container */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold transition-transform duration-500 group-hover:scale-110"
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
              <span className="text-[14px] font-bold text-white text-center leading-snug tracking-wide group-hover:text-green transition-colors duration-300">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-white/40 mt-12 font-medium tracking-wider uppercase">
          + many more tools selected specifically according to project
          requirements
        </p>
      </div>
    </section>
  );
}
