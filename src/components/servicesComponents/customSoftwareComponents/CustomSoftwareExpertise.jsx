"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Palette,
  Monitor,
  Server,
  CloudLightning,
  GitBranch,
  Headphones,
  CheckCircle2,
} from "lucide-react";

const capabilities = [
  {
    id: "discovery",
    icon: Compass,
    title: "Product Discovery & Strategy",
    description:
      "Validate ideas, define product roadmaps, identify technical risks, and create a clear development strategy before investing in engineering.",
    details: [
      "Market & User Research",
      "Technical Feasibility Audit",
      "MVP Feature Prioritization",
      "Architecture Blueprinting",
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Design intuitive experiences backed by user research, wireframes, and interactive prototypes that improve adoption and customer satisfaction.",
    details: [
      "Interactive Wireframes",
      "Clickable Prototypes",
      "Design System Creation",
      "Usability Testing",
    ],
  },
  {
    id: "frontend",
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Build responsive, accessible interfaces that deliver consistent experiences across web and mobile platforms.",
    details: [
      "Next.js & React Applications",
      "Performance Optimization",
      "Cross-device Responsiveness",
      "Accessibility (WCAG)",
    ],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend Development",
    description:
      "Develop scalable architectures capable of supporting high traffic, complex workflows, and enterprise-grade performance.",
    details: [
      "Microservices Architecture",
      "REST & GraphQL APIs",
      "Database Optimization",
      "High-concurrency Handling",
    ],
  },
  {
    id: "cloud",
    icon: CloudLightning,
    title: "Cloud Infrastructure",
    description:
      "Design secure cloud environments that improve reliability, reduce operational costs, and support future growth.",
    details: [
      "AWS & GCP Setup",
      "Serverless Architecture",
      "Disaster Recovery",
      "Cost Optimization",
    ],
  },
  {
    id: "devops",
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "Automate deployments, testing, and infrastructure management to accelerate releases and improve software quality.",
    details: [
      "Automated CI/CD Pipelines",
      "Infrastructure as Code (IaC)",
      "Containerization (Docker/K8s)",
      "Zero-downtime Deployments",
    ],
  },
  {
    id: "support",
    icon: Headphones,
    title: "Maintenance & Support",
    description:
      "Keep your software secure, optimized, and continuously improving with proactive monitoring, updates, and ongoing enhancements.",
    details: [
      "24/7 SLA Monitoring",
      "Security Patches & Audits",
      "Continuous Optimization",
      "Feature Iterations",
    ],
  },
];

export default function CustomSoftwareExpertise() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCap = capabilities[activeTab];

  return (
    <section className="relative w-full bg-[#161616] text-white py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background ambient light */}
      <div
        className="absolute top-0 right-[-150px] w-[350px] h-[350px] rounded-full pointer-events-none opacity-25 blur-[150px]"
        style={{ backgroundColor: "#004BC0" }}
      />

      <div className="relative w-full mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[860px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Full Lifecycle Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-white">
            End-to-End Software Development Expertise
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/80 font-medium leading-[26px]">
            From strategy to deployment, our multidisciplinary team helps you
            build software that supports today&apos;s needs while preparing your
            business for tomorrow.
          </p>
        </div>

        {/* Interactive Capability Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Capability Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-4 w-full px-6 py-4 rounded-[18px] text-left transition-all duration-300 border ${
                    isActive
                      ? "bg-gradient-to-r from-[#00235A] to-[#004BC0] border-none text-white translate-x-2"
                      : "bg-white/[0.02] hover:bg-white/[0.06] text-white/70 border-white/10"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-[#0CBF83] text-[#161616]"
                        : "bg-white/10 text-white/80"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[16px] font-bold tracking-wide">
                    {cap.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Capability Spotlight Panel */}
          <div className="lg:col-span-7 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 rounded-[32px] p-8 lg:p-12 relative overflow-hidden backdrop-blur-md shadow-2xl min-h-[420px] flex flex-col justify-between">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0CBF83]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0CBF83]/10 border border-[#0CBF83]/30 text-[#0CBF83] text-xs font-bold uppercase tracking-widest mb-6">
                Capability 0{activeTab + 1}
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {activeCap.title}
              </h3>

              <p className="text-white/80 text-[17px] leading-[28px] font-medium mb-8">
                {activeCap.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6">
                {activeCap.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0CBF83] shrink-0" />
                    <span className="text-sm font-semibold text-white/90">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-white/50 font-medium">
              <span>Softmind Engineering Excellence</span>
              <span>
                Step {activeTab + 1} of {capabilities.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
