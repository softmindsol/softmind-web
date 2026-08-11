"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSearch,
  Map,
  PenTool,
  Code2,
  ShieldCheck,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Discovery & Business Analysis",
    description:
      "We start by understanding your business, users, processes, and objectives. This allows us to identify opportunities where technology can create the greatest impact.",
    deliverables: ["Business requirements", "Process analysis", "Technical assessment"],
  },
  {
    number: "02",
    icon: Map,
    title: "Strategy & Roadmap",
    description:
      "Together, we define project priorities, architecture, timelines, and budgets to create a practical roadmap for successful delivery.",
    deliverables: ["Product roadmap", "Technology recommendations", "Project scope"],
  },
  {
    number: "03",
    icon: PenTool,
    title: "UX Design & Prototyping",
    description:
      "Visualize your software before development begins through wireframes and interactive prototypes that gather stakeholder feedback early.",
    deliverables: ["User journeys", "Wireframes", "Clickable prototypes"],
  },
  {
    number: "04",
    icon: Code2,
    title: "Agile Software Development",
    description:
      "Our engineering teams build your solution in iterative sprints with continuous collaboration, transparent progress tracking, and regular demonstrations.",
    deliverables: ["Sprint releases", "Code reviews", "System integrations"],
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Testing & Deployment",
    description:
      "Comprehensive quality assurance ensures your application performs reliably before deployment into production.",
    deliverables: ["Automated testing", "Security validation", "Production deployment"],
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "After launch, we analyze usage, gather feedback, and continuously improve your software to maximize business value.",
    deliverables: ["Performance monitoring", "Feature enhancements", "Optimization roadmap"],
  },
];

export default function CustomSoftwareProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];

  return (
    <section className="relative w-full bg-white text-[#00235A] py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#004BC0]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[860px] mx-auto">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-gray-200 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#00235A] text-xs font-bold uppercase tracking-widest">
              Development Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-extrabold tracking-tight text-[#00235A]">
            Our Custom Software Development Process
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 font-medium leading-[26px]">
            A structured, collaborative approach that minimizes risk, accelerates delivery, and ensures your software aligns with business goals at every stage.
          </p>
        </div>

        {/* Desktop Process Stepper Timeline */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-12">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 relative border ${
                  isActive
                    ? "bg-[#00235A] text-white border-[#0CBF83] shadow-lg translate-y-[-2px]"
                    : "bg-[#F8FAFC] text-gray-600 border-gray-100 hover:bg-gray-100"
                }`}
              >
                <span
                  className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full mb-2 ${
                    isActive ? "bg-[#0CBF83] text-[#161616]" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {step.number}
                </span>
                <span className="text-xs font-bold leading-tight line-clamp-2">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Box */}
        <div className="bg-[#F8FAFC] border border-gray-200/80 rounded-[32px] p-8 lg:p-12 shadow-xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-[#0CBF83] font-mono">
                    {currentStep.number}
                  </span>
                  <div className="h-4 w-[2px] bg-gray-300" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Phase {activeStep + 1} of 6
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#00235A]">
                  {currentStep.title}
                </h3>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                  {currentStep.description}
                </p>

                <div className="pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#00235A] mb-3">
                    Key Deliverables:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStep.deliverables.map((deliv, dIdx) => (
                      <span
                        key={dIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-bold text-[#00235A] shadow-sm"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#0CBF83]" />
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Card Side */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[380px] bg-gradient-to-br from-[#00235A] to-[#004BC0] rounded-[24px] p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[280px]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0CBF83]/20 rounded-full blur-2xl pointer-events-none" />
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#0CBF83] mb-6 border border-white/10">
                      {React.createElement(currentStep.icon, { className: "w-7 h-7" })}
                    </div>
                    <span className="text-xs font-bold text-[#0CBF83] uppercase tracking-widest block mb-1">
                      Structured Agile Standard
                    </span>
                    <h4 className="text-xl font-bold text-white">
                      Transparent & Predictive Delivery
                    </h4>
                  </div>
                  <div className="pt-6 border-t border-white/10 text-xs text-white/70 font-medium">
                    Continuous collaboration & sprint reviews
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Stepper Navigation */}
        <div className="flex lg:hidden justify-between items-center mt-6">
          <button
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="px-4 py-2 rounded-xl bg-gray-100 text-xs font-bold disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-xs font-bold text-[#00235A]">
            {activeStep + 1} / {steps.length}
          </span>
          <button
            onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStep === steps.length - 1}
            className="px-4 py-2 rounded-xl bg-[#00235A] text-white text-xs font-bold disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
