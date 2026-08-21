"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Search,
  ListChecks,
  PenTool,
  Code2,
  Rocket,
  ArrowUpRight,
  Target
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover & Validate",
    description:
      "We start by understanding your business idea, target audience, market, competitors, and objectives. Our team identifies the core customer problem and determines which assumptions need to be validated before development.",
    outcome:
      "A clear product vision, target users, MVP objectives, and prioritized requirements.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    number: "02",
    title: "Define & Prioritize",
    description:
      "Not every feature belongs in an MVP. We separate essential functionality from nice-to-have features and create a focused scope that balances customer value, development effort, timeline, and budget.",
    outcome: "A prioritized MVP feature set and development roadmap.",
    icon: <ListChecks className="w-5 h-5" />,
  },
  {
    number: "03",
    title: "Prototype & Design",
    description:
      "Our UI/UX team transforms your product concept into intuitive user flows and interactive prototypes. This allows you to experience the product before development begins and identify improvements early.",
    outcome: "A validated product experience and development-ready design.",
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    number: "04",
    title: "Build & Test",
    description:
      "Our developers build the MVP iteratively using Agile development practices. Every development cycle focuses on delivering functional product value while continuously testing performance, usability, security, and quality.",
    outcome: "A functional, tested MVP ready for real users.",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    number: "05",
    title: "Launch & Learn",
    description:
      "We help you release your MVP to an initial audience and monitor how users interact with it. Their feedback, behavior, and market response provide the insights needed to make informed product decisions.",
    outcome: "Real-world validation instead of assumptions.",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    number: "06",
    title: "Improve & Scale",
    description:
      "Once your MVP generates meaningful feedback, we identify the features and improvements that can create the greatest business impact. Your MVP can then evolve into a more comprehensive, scalable product.",
    outcome: "A clear roadmap from MVP to a market-ready product.",
    icon: <ArrowUpRight className="w-5 h-5" />,
  },
];

const StepCard = ({ step, index, isEven }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className={`relative flex flex-col sm:flex-row gap-6 sm:gap-0 items-center ${
        !isEven ? "sm:flex-row-reverse" : ""
      }`}
    >
      {/* Center Node */}
      <div className="absolute left-8 sm:left-1/2 top-0 sm:top-1/2 sm:-translate-y-1/2 -translate-x-1/2 flex flex-col items-center z-20 hidden sm:flex">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="w-14 h-14 rounded-full bg-white border-4 border-gray-50 shadow-[0_0_20px_rgba(0,0,0,0.05)] flex items-center justify-center text-blue-600 font-bold text-lg relative group overflow-hidden cursor-default"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
            {step.number}
          </span>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white z-10">
            {React.cloneElement(step.icon, { className: "w-5 h-5" })}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div
        className={`w-full sm:w-1/2 ${
          isEven ? "sm:pr-12 md:pr-16 text-left" : "sm:pl-12 md:pl-16 text-left"
        }`}
      >
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:border-blue-100 transition-all duration-500 relative overflow-hidden group"
        >
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex sm:hidden items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shadow-inner text-base">
                {step.number}
              </div>
              <div className="text-blue-600 p-2.5 bg-blue-50/50 rounded-xl">
                {step.icon}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50/80 text-blue-600 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300 shadow-sm">
                {React.cloneElement(step.icon, { className: "w-5 h-5" })}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed mb-5 text-base">
              {step.description}
            </p>

            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-5 border border-gray-100 relative overflow-hidden group-hover:border-blue-100 transition-colors duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-l-xl" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Outcome
              </span>
              <p className="text-gray-800 font-medium italic leading-relaxed text-sm">
                &quot;{step.outcome}&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hidden sm:block w-1/2"></div>
    </motion.div>
  );
};

const MvpDevelopmentProcess = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="w-full py-16 lg:py-20 bg-gray-50 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[40%] h-[40%] rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] rounded-full bg-indigo-200/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-blue-600 font-semibold text-xs mb-6 border border-gray-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Development Journey
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Our MVP{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Development Process
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A systematic, proven approach to turn your idea into a successful,
              scalable, and market-ready product.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Vertical Line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden sm:block rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-10 lg:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <StepCard
                  key={index}
                  step={step}
                  index={index}
                  isEven={isEven}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MvpDevelopmentProcess;
