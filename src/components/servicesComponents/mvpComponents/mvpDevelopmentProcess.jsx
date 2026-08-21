"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  ListChecks,
  PenTool,
  Code2,
  Rocket,
  ArrowUpRight,
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

const MvpDevelopmentProcess = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-gray-50/50 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our MVP Development Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach to turn your idea into a successful
              market-ready product.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-indigo-200 to-transparent -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col sm:flex-row gap-8 items-start ${index % 2 !== 0 ? "sm:flex-row-reverse" : ""}`}
              >
                {/* Center Node (Number & Icon) */}
                <div className="absolute left-8 sm:left-1/2 top-0 -translate-x-1/2 flex flex-col items-center z-10 hidden sm:flex">
                  <div className="w-16 h-16 rounded-full bg-white border-[4px] border-gray-50 shadow-md flex items-center justify-center text-blue-600 font-bold text-xl relative group">
                    <span className="group-hover:opacity-0 transition-opacity duration-300">
                      {step.number}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white rounded-full">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div
                  className={`w-full sm:w-1/2 ${index % 2 === 0 ? "sm:pr-16 md:pr-20" : "sm:pl-16 md:pl-20"}`}
                >
                  <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden group">
                    {/* Decorative gradient corner */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Mobile number badge */}
                    <div className="flex sm:hidden items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                      <div className="text-blue-600">{step.icon}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2 block">
                        Outcome
                      </span>
                      <p className="text-gray-700 italic">
                        &quot;{step.outcome}&quot;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden sm:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MvpDevelopmentProcess;
