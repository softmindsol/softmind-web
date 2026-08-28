"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does software testing cost?",
    answer:
      "The cost of software testing depends on factors including the size and complexity of your application, the types of testing required (manual, automation, performance, security), the testing environment, and the duration of the engagement. Offshore software testing with Softmind is significantly more cost-effective than maintaining an in-house QA team, without compromising quality. We provide transparent pricing tailored to your specific testing requirements.",
  },
  {
    question: "What is the difference between QA and software testing?",
    answer:
      "Software testing refers to the specific activities of executing your application to find defects and verify functionality. Quality Assurance (QA) is broader — it encompasses the processes, standards, methodologies, and practices that ensure quality throughout the entire development lifecycle. At Softmind, we provide both: structured QA processes and hands-on software testing services.",
  },
  {
    question: "How do I outsource software testing?",
    answer:
      "Outsourcing software testing starts with identifying your testing needs — which types of testing your product requires, your release frequency, and your quality goals. You then select a reliable offshore QA partner, define the scope and engagement model, onboard the team, and integrate them into your development workflow. Softmind makes this process straightforward — we handle assessment, planning, and execution so you can focus on your product.",
  },
  {
    question: "When should a startup hire a QA team?",
    answer:
      "A startup should invest in QA as soon as it has a product that real users are interacting with — or is preparing for launch. Catching defects early in the development process is significantly cheaper than fixing them after release. Offshore QA through Softmind gives startups access to experienced QA professionals without the cost and complexity of building an internal testing department.",
  },
  {
    question: "What types of testing does Softmind provide?",
    answer:
      "Softmind provides a comprehensive range of software testing services including manual testing, automation testing, functional testing, performance testing, security testing, mobile app testing, accessibility testing, usability testing, localization testing, and compatibility testing. We develop a testing strategy tailored to your specific product, users, and release goals.",
  },
  {
    question: "How quickly can Softmind set up a QA team for my project?",
    answer:
      "We can typically onboard a dedicated QA team within 7 to 14 days, depending on your testing requirements, technology stack, and team size. We begin with a discovery session to understand your application, define the testing scope, and build a structured QA plan before execution begins.",
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
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
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
