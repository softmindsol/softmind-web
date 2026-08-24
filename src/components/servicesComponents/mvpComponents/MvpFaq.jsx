"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is MVP development?",
    answer:
      "MVP development is the process of building a product with the minimum set of essential features required to solve a core customer problem and validate the product idea with real users.",
  },
  {
    question: "How long does it take to develop an MVP?",
    answer:
      "The timeline depends on the product's complexity, number of features, design requirements, integrations, and technology. A focused MVP can typically be developed significantly faster than a full-scale product because the initial scope is intentionally limited.",
  },
  {
    question: "How much does MVP development cost?",
    answer:
      "MVP development costs vary based on product complexity, platform, features, integrations, design, and technical requirements. Softmind can help define the MVP scope first so you can make an informed investment decision.",
  },
  {
    question: "What is the difference between a prototype and an MVP?",
    answer:
      "A prototype demonstrates how a product may look or work, while an MVP is a functional product that users can actually interact with. Prototypes are often used to validate concepts and user experiences before development begins.",
  },
  {
    question: "Can you develop an MVP from an existing idea?",
    answer:
      "Yes. We can work from an early concept, business plan, wireframes, prototype, or existing requirements. Our team can help refine the idea, identify the core functionality, and create a practical MVP roadmap.",
  },
  {
    question: "Can an MVP scale into a full product?",
    answer:
      "Yes. A well-architected MVP can provide the foundation for future development. We design MVPs with future enhancements, integrations, performance, and scalability in mind so the product can evolve as the business grows.",
  },
  {
    question: "Can you build an AI-powered MVP?",
    answer:
      "Yes. AI can be incorporated into an MVP when it supports the core product value. Depending on the use case, this may include AI assistants, intelligent automation, recommendations, predictive analytics, or other AI-powered functionality.",
  },
  {
    question: "Why should I build an MVP before a full product?",
    answer:
      "An MVP allows you to test your assumptions with real users before committing significant time and resources to a full-scale product. The insights you gain can help you make better product, technology, and investment decisions.",
  },
];

export default function MvpFaq() {
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
              MVP Development
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
