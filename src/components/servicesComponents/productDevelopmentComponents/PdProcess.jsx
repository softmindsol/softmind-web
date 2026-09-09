"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Telescope,
  FileText,
  Pencil,
  Cpu,
  FlaskConical,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Telescope,
    color: "#0CBF83",
    gradientFrom: "#0CBF83",
    gradientTo: "#00b87a",
    description:
      "We start by understanding your users, business objectives, market opportunity, and technical requirements. This helps us identify what your product actually needs to succeed.",
  },
  {
    number: "02",
    title: "Define",
    icon: FileText,
    color: "#004BC0",
    gradientFrom: "#004BC0",
    gradientTo: "#0038FF",
    description:
      "We turn your vision into a practical product strategy with prioritized features, user journeys, technical requirements, and a roadmap for development.",
  },
  {
    number: "03",
    title: "Design",
    icon: Pencil,
    color: "#6366f1",
    gradientFrom: "#6366f1",
    gradientTo: "#8b5cf6",
    description:
      "Our UI/UX team creates intuitive user experiences, interactive prototypes, and scalable design systems that make your product easy and enjoyable to use.",
  },
  {
    number: "04",
    title: "Develop",
    icon: Cpu,
    color: "#f59e0b",
    gradientFrom: "#f59e0b",
    gradientTo: "#ef4444",
    description:
      "Our engineers build your product using modern technologies and scalable architecture, with regular communication and visibility throughout development.",
  },
  {
    number: "05",
    title: "Test",
    icon: FlaskConical,
    color: "#14b8a6",
    gradientFrom: "#14b8a6",
    gradientTo: "#0ea5e9",
    description:
      "We validate functionality, performance, security, usability, and compatibility to identify issues before they impact your users.",
  },
  {
    number: "06",
    title: "Launch",
    icon: Rocket,
    color: "#ec4899",
    gradientFrom: "#ec4899",
    gradientTo: "#f43f5e",
    description:
      "Once your product is ready, we support deployment, release management, monitoring, and post-launch stabilization.",
  },
  {
    number: "07",
    title: "Scale",
    icon: TrendingUp,
    color: "#0CBF83",
    gradientFrom: "#0CBF83",
    gradientTo: "#004BC0",
    description:
      "Product development doesn't stop at launch. We continuously improve your product based on user feedback, analytics, business priorities, and changing market needs.",
  },
];

const StepCard = ({ step, index, isEven }) => {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
      className={`relative flex flex-col sm:flex-row gap-6 sm:gap-0 items-start sm:items-center ${
        !isEven ? "sm:flex-row-reverse" : ""
      }`}
    >
      {/* Center Node — Desktop */}
      <div className="absolute left-8 sm:left-1/2 top-6 sm:top-1/2 sm:-translate-y-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base shadow-xl cursor-default relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
            boxShadow: `0 0 24px ${step.color}50`,
          }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Content Side */}
      <div
        className={`w-full sm:w-1/2 ${
          isEven ? "sm:pr-12 md:pr-16" : "sm:pl-12 md:pl-16"
        }`}
      >
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="group bg-white rounded-[24px] p-6 md:p-8 border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden"
        >
          {/* Gradient line top on hover */}
          <div
            className="absolute top-0 left-0 w-full h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out rounded-t-[24px]"
            style={{
              background: `linear-gradient(to right, ${step.gradientFrom}, ${step.gradientTo})`,
            }}
          />

          {/* Mobile number badge */}
          <div className="flex sm:hidden items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
              }}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: step.color }}
            >
              Step {step.number}
            </span>
          </div>

          {/* Step label + title */}
          <div className="hidden sm:flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: step.color }}
            >
              Step {step.number}
            </span>
          </div>
          <h3
            className="text-xl md:text-2xl font-bold text-[#2E2E2E] mb-3 leading-snug group-hover:transition-colors duration-300"
            style={{ "--hover-color": step.color }}
          >
            {step.title}
          </h3>
          <p className="text-[#666666] leading-relaxed text-sm md:text-base">
            {step.description}
          </p>
        </motion.div>
      </div>

      {/* Spacer side */}
      <div className="hidden sm:block w-1/2" />
    </motion.div>
  );
};

export default function PdProcess() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="relative w-full py-20 lg:py-28 bg-gray-50 font-jakarta overflow-hidden"
      ref={containerRef}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[40%] h-[40%] rounded-full bg-[#0CBF83]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[35%] h-[35%] rounded-full bg-[#004BC0]/6 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[#0CBF83] font-semibold text-xs mb-6 border border-gray-200 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0CBF83] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0CBF83]" />
            </span>
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-[#2E2E2E] mb-5">
            From Product Idea to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Market Launch
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#666666] leading-relaxed">
            A clear, structured journey from initial discovery through to launch and continuous
            growth — with your business goals at every step.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden sm:block overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{
                height: lineHeight,
                background: "linear-gradient(to bottom, #0CBF83, #004BC0, #0CBF83)",
                boxShadow: "0 0 12px rgba(12,191,131,0.5)",
              }}
            />
          </div>

          <div className="space-y-10 lg:space-y-14">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
