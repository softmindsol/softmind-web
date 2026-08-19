"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Map,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Requirement Analysis",
    description:
      "We begin by understanding your business objectives, target users, workflows, technical requirements, and challenges. This gives us a clear foundation for defining the right web application strategy.",
  },
  {
    number: "02",
    icon: Map,
    title: "Strategy & Architecture",
    description:
      "Our team translates requirements into a scalable technical architecture. We define the application structure, technology stack, integrations, security requirements, and development roadmap.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "We create intuitive user experiences that make your application simple to navigate and effective to use. Wireframes and prototypes help validate the experience before development begins.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Agile Development",
    description:
      "Our developers build the application through iterative development cycles. This allows you to review progress, provide feedback, and prioritize features while maintaining transparency throughout the project.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Quality Assurance & Testing",
    description:
      "We rigorously test functionality, performance, responsiveness, security, integrations, and usability to identify and resolve issues before deployment.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Deployment & Launch",
    description:
      "Once the application meets defined quality standards, we deploy it to the required environment and ensure a smooth transition into production.",
  },
  {
    number: "07",
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "After launch, we provide ongoing support, maintenance, performance optimization, security updates, and feature enhancements to help your application evolve with your business.",
  },
];

export default function WebAppProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];

  return (
    <section className="relative w-full bg-[#111111] text-white py-20 lg:py-28 font-jakarta overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#004BC0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Our Web Application Development Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-white">
            Build Technology That Delivers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Measurable Business Value
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/80 font-medium leading-[26px]">
            Whether you&apos;re launching a new digital product, replacing legacy software, or modernizing an existing platform, our structured process ensures predictable and scalable delivery.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-7 gap-3 mb-12 max-w-[1200px] mx-auto">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 relative border ${
                  isActive
                    ? "bg-[#0CBF83]/10 text-white border-[#0CBF83] shadow-[0_0_20px_rgba(12,191,131,0.2)] translate-y-[-2px]"
                    : "bg-[#ffffff05] text-white/60 border-white/10 hover:bg-[#ffffff0a] hover:text-white"
                }`}
              >
                <span
                  className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full mb-2 transition-colors ${
                    isActive
                      ? "bg-[#0CBF83] text-[#111]"
                      : "bg-white/10 text-white/60"
                  }`}
                >
                  {step.number}
                </span>
                <span className="text-[11px] font-bold leading-tight">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="bg-[#ffffff03] border border-white/10 rounded-[32px] p-8 lg:p-12 shadow-2xl relative overflow-hidden max-w-[1200px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-black text-[#0CBF83] font-mono">
                    {currentStep.number}
                  </span>
                  <div className="h-4 w-[2px] bg-white/20" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                    Phase {activeStep + 1} of {steps.length}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {currentStep.title}
                </h3>

                <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium">
                  {currentStep.description}
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[380px] bg-gradient-to-br from-[#00235A] to-[#004BC0] rounded-[24px] p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[280px]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0CBF83]/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#0CBF83] mb-6 border border-white/10 shadow-lg">
                      {React.createElement(currentStep.icon, {
                        className: "w-10 h-10 stroke-[1.5]",
                      })}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {currentStep.title}
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex lg:hidden justify-between items-center mt-6">
          <button
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="px-4 py-2 rounded-xl bg-white/5 text-xs font-bold disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-xs font-bold text-white">
            {activeStep + 1} / {steps.length}
          </span>
          <button
            onClick={() =>
              setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))
            }
            disabled={activeStep === steps.length - 1}
            className="px-4 py-2 rounded-xl bg-[#0CBF83] text-[#111] text-xs font-bold disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
