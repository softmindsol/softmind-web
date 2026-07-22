"use client";
import React from "react";
import {
  Bot,
  MessageSquare,
  Database,
  Compass,
  AlertOctagon,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import { SoftMindSolutionLogo } from "../../../../public/images";

const techItems = [
  {
    title: "Agentic AI",
    description:
      "Deploy autonomous AI agents that automate complex financial workflows, streamline operations, improve decision-making, and increase productivity across the enterprise.",
    icon: Bot,
    color: "text-blue-600",
    bg: "bg-gray-200",
  },
  {
    title: "Conversational AI",
    description:
      "Deliver personalized, always-on customer support with intelligent virtual assistants that resolve inquiries faster, simplify self-service, and enhance digital banking experiences.",
    icon: MessageSquare,
    color: "text-green",
    bg: "bg-gray-200",
  },
  {
    title: "Data Strategy, Migration & Modernization",
    description:
      "Transform fragmented data ecosystems through cloud migration, platform modernization, data engineering, and quality assurance to create a trusted foundation for AI and analytics.",
    icon: Database,
    color: "text-orange-500",
    bg: "bg-gray-200",
  },
  {
    title: "User Research & Experience Design",
    description:
      "Create intuitive financial experiences by combining user research, behavioral insights, and service design to improve engagement, accessibility, and customer satisfaction.",
    icon: Compass,
    color: "text-teal-600",
    bg: "bg-gray-200",
  },
  {
    title: "AI-Powered Fraud Detection & Risk Intelligence",
    description:
      "Protect financial ecosystems with AI-driven fraud detection, anomaly monitoring, predictive risk analytics, and real-time threat intelligence that strengthens security and compliance.",
    icon: AlertOctagon,
    color: "text-purple-600",
    bg: "bg-gray-200",
  },
  {
    title: "Enterprise Platform Engineering",
    description:
      "Build resilient, cloud-native financial platforms with modern architectures, secure integrations, DevSecOps, and AI-accelerated software delivery that enables continuous innovation.",
    icon: Terminal,
    color: "text-pink-600",
    bg: "bg-gray-200",
  },
];

export default function FinTechIntelligentTech() {
  return (
    <section className="relative w-full bg-black py-20 lg:py-28 overflow-hidden font-jakarta">
      {/* Visual background decorations */}
      <div
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-60 blur-[130px]"
        style={{ backgroundColor: "navy" }}
      />
      <div className="absolute select-none pointer-events-none">
        <Image
          src={SoftMindSolutionLogo}
          alt="SoftMindSol Logo"
          className="object-cover opacity-20 max-h-[726px]"
        />
      </div>

      <div className="relative z-10 mx-auto px-6 md:px-12">
        {/* Header section */}
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green text-[11px] md:text-xs font-bold tracking-[2px] uppercase">
              Next-Gen Technologies
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[45px] lg:leading-[1.2] font-bold text-white tracking-tight mb-6">
            Intelligent Technologies Driving the{" "}
            <p className="pt-3 text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
              Future of Financial Services
            </p>
          </h2>

          <p className="text-base md:text-lg text-white/80 font-medium leading-[1.6]">
            Empower your organization with AI, cloud, and data-driven innovation
            designed for modern financial institutions. We combine deep
            engineering expertise with regulatory awareness to build secure,
            scalable, and intelligent solutions that improve operations, enhance
            customer experiences, and accelerate business growth.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {techItems.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="group relative bg-gray-100 border border-gray-100 rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(0,35,90,0.05)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div
                    className={`w-12 h-12 rounded-xl ${tech.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${tech.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-green transition-colors duration-300">
                    {tech.title}
                  </h3>

                  {/* Description */}
                  <p className="text-grey font-medium leading-[1.6] text-[15px] lg:text-[16px]">
                    {tech.description}
                  </p>
                </div>

                {/* Subtle bottom visual border */}
                <div className="w-10 h-[3px] rounded-full bg-gray-200 mt-6 group-hover:bg-green group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
