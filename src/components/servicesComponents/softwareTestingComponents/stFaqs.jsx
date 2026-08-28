"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "How much does software testing cost?",
    answer:
      "Offshore software testing is the practice of outsourcing software QA and testing activities to a specialized team located in another country or region. The offshore team works with the client's development and product teams to test applications, identify defects, and improve software quality.",
  },
  {
    question: "How do I outsource software testing?",
    answer:
      "Outsourcing software testing can help businesses reduce QA costs, access specialized testing expertise, increase testing capacity, accelerate releases, and allow internal teams to focus on core product and business activities.",
  },
  {
    question: "What types of software testing do you provide?",
    answer:
      "Our offshore software testing capabilities include manual testing, automation testing, functional testing, performance testing, security testing, accessibility testing, usability testing, localization testing, compatibility testing, and mobile application testing.",
  },
  {
    question: "Can you test both web and mobile applications?",
    answer:
      "Yes. Offshore QA teams can test web applications and mobile applications across functionality, usability, performance, compatibility, security, and other quality requirements.",
  },
  {
    question: "Can you work with our existing development team?",
    answer:
      "Yes. An offshore QA team can operate as an extension of your existing development organization and integrate with your development workflows, communication processes, and release cycles.",
  },
  {
    question: "How quickly can an offshore QA team start?",
    answer:
      "The onboarding timeline depends on the project scope, required expertise, testing environment, and team size. A discovery discussion can help determine the resources and timeline required for your project.",
  },
  {
    question: "Can I hire an offshore QA team for a short-term project?",
    answer:
      "Yes. Offshore software testing can be structured around project-based engagements, specific releases, short-term testing requirements, or ongoing QA programs.",
  },
  {
    question: "How much does offshore software testing cost?",
    answer:
      "The cost depends on factors such as application complexity, testing scope, required expertise, automation requirements, team size, and engagement duration. We can recommend a testing approach based on your requirements and budget.",
  },
];

export default function StFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#161616] via-[#1a1a1a] to-white pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden font-jakarta">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0CBF83]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto px-6 lg:px-12 w-full max-w-[1200px]">
        <div className="flex flex-col items-center gap-5 text-center mb-16 max-w-[850px] mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_10px_#0CBF83]" />
            <span className="text-[#0CBF83] text-sm md:text-base font-semibold tracking-widest uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-white capitalize">
            Everything You Need to Know About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Offshore Software Testing
            </span>
          </h2>
        </div>

        <div className="max-w-[900px] mx-auto flex flex-col gap-4 relative z-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`group rounded-2xl transition-all duration-400 ease-out overflow-hidden border backdrop-blur-sm ${
                  isOpen
                    ? "bg-white border-[#0CBF83]/40 shadow-[0_15px_40px_-10px_rgba(12,191,131,0.15)] ring-1 ring-[#0CBF83]/10"
                    : "bg-white/95 border-gray-200/60 shadow-sm hover:border-[#0CBF83]/20 hover:shadow-md hover:bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center justify-between w-full p-6 sm:p-7 text-left focus:outline-none cursor-pointer"
                >
                  <span
                    className={`text-base sm:text-lg font-bold tracking-wide transition-colors duration-300 pr-4 ${
                      isOpen
                        ? "text-[#0CBF83]"
                        : "text-gray-800 group-hover:text-gray-950"
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
                    <FiChevronDown
                      size={20}
                      className="transition-transform duration-300"
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-400 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-7 pb-6 sm:pb-7 text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
