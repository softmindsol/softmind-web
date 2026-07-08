"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SoftMindSolLogo } from "../../../public/images";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We start by deeply understanding your business goals, target audience, and technical requirements through structured workshops and research sessions.",
    details: [
      "Requirements gathering & business analysis",
      "Technical feasibility assessment",
      "Roadmap planning & milestone definition",
      "Tech stack recommendation",
    ],
    accent: "#0CBF83",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Our designers create high-fidelity mockups and prototypes that put user experience first — every screen is tested and iterated before development begins.",
    details: [
      "User journey mapping & wireframes",
      "High-fidelity mockups in Figma",
      "Interactive prototype for validation",
      "Design system & component library",
    ],
    accent: "#004BC0",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Engineers build your product in agile two-week sprints with daily updates, code reviews, and full transparency via your preferred project management tools.",
    details: [
      "Agile sprints with daily standups",
      "Code reviews & quality gates",
      "CI/CD pipeline setup from day one",
      "Transparent progress via Jira/Notion",
    ],
    accent: "#0CBF83",
  },
  {
    number: "04",
    title: "Quality Assurance",
    description:
      "Every feature is put through rigorous manual and automated testing — functional, performance, security, and cross-device testing before it reaches users.",
    details: [
      "Manual & automated testing",
      "Performance & load testing",
      "Security vulnerability scans",
      "Cross-browser & device testing",
    ],
    accent: "#004BC0",
  },
  {
    number: "05",
    title: "Launch & Scale",
    description:
      "We handle production deployment, monitoring, and post-launch support — then continue scaling your product as your user base and requirements grow.",
    details: [
      "Production deployment & DevOps config",
      "Real-time monitoring & alerting",
      "30-day post-launch support included",
      "Ongoing scaling & feature iterations",
    ],
    accent: "#0CBF83",
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Background radial glow */}
      <div
        className="absolute top-[-187px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none opacity-20 blur-[180px]"
        style={{ backgroundColor: "navy" }}
      />

      {/* Watermark */}
      <div className="absolute select-none pointer-events-none opacity-20">
        <Image
          src={SoftMindSolLogo}
          alt="SoftMindSol Logo"
          className="object-cover max-h-[726px]"
        />
      </div>

      <div className="relative mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex flex-col items-center gap-3 text-center mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[22px] font-bold tracking-wide">
              How We Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-dark max-w-[680px]">
            Our Proven 5-Step Process
          </h2>
          <p className="text-sm md:text-base text-gray font-medium leading-relaxed max-w-[560px]">
            A transparent, structured process that removes guesswork and
            delivers predictable results — every single time.
          </p>
        </div>

        {/* Steps Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Step Selectors */}
          <div className="flex flex-col gap-3">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`group text-left flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-white/30 backdrop-blur-lg border-green shadow-[0_0_24px_rgba(12,191,131,0.08)]"
                    : "bg-white/30 backdrop-blur-lg border-gray/40 hover:bg-white/40 hover:border-grey"
                }`}
              >
                {/* Step Number */}
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm transition-all duration-300 ${
                    activeStep === idx
                      ? "bg-green text-white"
                      : "bg-grey/20 text-grey group-hover:text-black"
                  }`}
                >
                  {step.number}
                </div>

                {/* Title */}
                <div>
                  <h3
                    className={`font-bold text-base tracking-wide transition-colors duration-300 ${
                      activeStep === idx
                        ? "text-green"
                        : "text-grey/80 group-hover:text-black"
                    }`}
                  >
                    {step.title}
                  </h3>
                  {activeStep === idx && (
                    <p className="text-xs text-black mt-0.5 font-medium">
                      Click to learn more
                    </p>
                  )}
                </div>

                {/* Active Indicator */}
                <div className="ml-auto">
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === idx ? "bg-green scale-125" : "bg-black/10"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right: Step Detail Card */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-navy border border-white/[0.08] rounded-3xl p-8 md:p-10 transition-all duration-500">
              {/* Step Number Badge */}
              <div className="inline-flex items-end gap-2 mb-6">
                <span className="text-green font-black text-5xl leading-none">
                  {steps[activeStep].number}
                </span>
                <div className="w-px h-10 bg-white/60 mx-1" />
                <span className="text-white/60 text-sm font-medium">
                  of {steps.length} steps
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                {steps[activeStep].title}
              </h3>

              {/* Description */}
              <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed mb-8">
                {steps[activeStep].description}
              </p>

              {/* Detail Points */}
              <ul className="flex flex-col gap-3">
                {steps[activeStep].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-green/15 border border-green/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="text-green size-3.5" />
                    </span>
                    <span className="text-sm text-white/80 font-medium leading-relaxed">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
