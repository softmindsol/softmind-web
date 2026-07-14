"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SoftMindSolLogo } from "../../../public/images";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Call",
    description:
      "We begin with a discovery call to understand your product idea, business goals, technical challenges, timeline, and software development needs.",
    details: [
      "Understand your product vision and business goals",
      "Discuss project requirements, challenges, and priorities",
      "Identify required skills, technologies, and team structure",
      "Sign an NDA if needed before technical discussions",
      "Define the next steps for planning and estimation",
    ],
    outcome:
      "A clear understanding of your requirements and the best way to move forward.",
    accent: "#0CBF83",
  },
  {
    number: "02",
    title: "Scope & Planning",
    description:
      "Our team reviews your requirements and creates a practical software development roadmap based on your goals, timeline, budget, and technical needs.",
    details: [
      "Analyze features, user flows, and technical requirements",
      "Define project scope, milestones, and delivery phases",
      "Recommend the right technology stack and architecture",
      "Plan sprint cycles, timelines, and responsibilities",
      "Align expectations around cost, communication, and delivery",
    ],
    outcome:
      "A clear project plan with realistic timelines and measurable milestones.",
    accent: "#004BC0",
  },
  {
    number: "03",
    title: "Detailed Proposal",
    description:
      "You receive a transparent software development proposal with the technical approach, recommended team, timeline, engagement model, and pricing.",
    details: [
      "Share technical approach and development strategy",
      "Recommend the required developers, designers, and QA resources",
      "Provide timeline, milestones, and delivery estimates",
      "Define pricing based on scope or team model",
      "Clarify communication, reporting, and project ownership",
    ],
    outcome: "A tailored proposal with transparent pricing and no hidden costs",
    accent: "#0CBF83",
  },
  {
    number: "04",
    title: "Project Kickoff",
    description:
      "Once the proposal is approved, we assemble your dedicated software development team and prepare everything needed to start the first sprint.",
    details: [
      "Assign developers, QA engineers, designers, and tech leads",
      "Set up Slack, Microsoft Teams, Jira, Confluence, GitHub, or GitLab",
      "Configure development environments and repositories",
      "Align coding standards, sprint process, and reporting structure",
      "Begin the first sprint with clear priorities",
    ],
    outcome:
      "Your offshore development team is ready, aligned, and development begins.",
    accent: "#004BC0",
  },
  {
    number: "05",
    title: "Agile Development & Delivery",
    description:
      "We build your software through agile sprints with regular communication, sprint planning, code reviews, QA testing, and weekly progress demos.",
    details: [
      "Run agile sprints with defined goals and deliverables",
      "Share daily or regular progress updates",
      "Conduct code reviews and quality assurance testing",
      "Provide weekly demos and sprint reports",
      "Keep your roadmap, timeline, and priorities visible",
    ],
    outcome:
      "Predictable software delivery with full transparency and continuous progress.",
    accent: "#0CBF83",
  },
  {
    number: "06",
    title: "Launch & Ongoing Support",
    description:
      "After development, we support deployment, documentation, testing, performance monitoring, and post-launch improvements.",
    details: [
      "Support product deployment and release management",
      "Provide technical documentation and handover",
      "Monitor performance, bugs, and stability after launch",
      "Improve features based on user feedback",
      "Offer ongoing support, maintenance, and scaling options",
    ],
    outcome:
      "A stable, scalable product with long-term engineering support available.",
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
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-dark max-w-[920px]">
            A Transparent Software Development Process from First Call to Launch
          </h2>
          <p className="text-sm md:text-base text-gray font-medium leading-relaxed max-w-[760px]">
            We make offshore software development simple, structured, and
            low-risk for startups, SaaS companies, and growing engineering
            teams.
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
              <p className="text-white text-sm font-medium pt-3">
                {steps[activeStep].outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
