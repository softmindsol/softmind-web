"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is a dedicated development team?",
    answer:
      "A dedicated development team is a group of technical professionals who work exclusively on your product or project. They operate as an extension of your internal team while you maintain control over priorities and product decisions.",
  },
  {
    question: "What is included when I hire a developer through Softmind?",
    answer:
      "When you hire a dedicated developer through Softmind, you also receive Project Management and QA support at no additional cost.",
  },
  {
    question: "Is the Project Manager really included at no additional cost?",
    answer:
      "Yes. Project Management support is included as part of Softmind's dedicated developer engagement.",
  },
  {
    question: "Is QA included too?",
    answer:
      "Yes. QA support is included at no additional cost to help test features, identify bugs, and maintain product quality.",
  },
  {
    question: "Can I choose the developer?",
    answer:
      "Yes. We match developers to your technical requirements and allow you to participate in the selection process.",
  },
  {
    question: "Can the developer work with our existing team?",
    answer:
      "Absolutely. Dedicated developers can work alongside your internal developers, product managers, designers, and other stakeholders.",
  },
  {
    question: "Can I start with one developer and add more later?",
    answer:
      "Yes. You can start with the resources you need today and expand your team as your product roadmap and business requirements evolve.",
  },
  {
    question: "How is a dedicated team different from traditional outsourcing?",
    answer:
      "With a dedicated team, you have greater involvement in day-to-day priorities, communication, and product direction. The team becomes an extension of your organization rather than simply delivering a predefined project.",
  },
  {
    question: "Do you support startups?",
    answer:
      "Yes. Our dedicated team model is particularly suitable for startups that need technical expertise and development capacity without the cost and commitment of building a large internal engineering team.",
  },
  {
    question: "Can Softmind support the team after development?",
    answer:
      "Yes. We can continue supporting your product through ongoing development, maintenance, QA, DevOps, AI integration, modernization, and technical scaling.",
  },
];

export default function DtFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#161616] via-[#1a1a1a] to-white py-20 lg:py-28 overflow-hidden font-jakarta">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0CBF83]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#004BC0]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto px-6 lg:px-12 w-full max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5 text-center mb-16 max-w-[860px] mx-auto"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_10px_#0CBF83]" />
            <span className="text-[#0CBF83] text-sm md:text-base font-semibold tracking-widest uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-white">
            Everything You Need to Know About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Dedicated Development Teams
            </span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-[900px] mx-auto flex flex-col gap-4 relative z-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className={`group rounded-2xl transition-all duration-400 ease-out overflow-hidden border backdrop-blur-sm ${
                  isOpen
                    ? "bg-white border-[#0CBF83]/40 shadow-[0_15px_40px_-10px_rgba(12,191,131,0.15)] ring-1 ring-[#0CBF83]/10"
                    : "bg-white/95 border-gray-200/60 shadow-sm hover:border-[#0CBF83]/20 hover:shadow-md hover:bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center justify-between w-full p-4 sm:p-5 text-left focus:outline-none cursor-pointer"
                >
                  <span
                    className={`text-base sm:text-lg font-bold tracking-wide transition-colors duration-300 pr-4 ${
                      isOpen ? "text-[#0CBF83]" : "text-gray-800 group-hover:text-gray-950"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-400 ${
                      isOpen
                        ? "bg-[#0CBF83]/10 text-[#0CBF83] rotate-180"
                        : "bg-gray-100 text-gray-500 group-hover:bg-[#0CBF83]/10 group-hover:text-[#0CBF83]"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-400 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-7 pb-6 sm:pb-7 text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
