"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is digital product design?",
    answer:
      "Digital product design is the process of researching, planning, designing, and validating digital experiences such as web applications, mobile apps, SaaS platforms, and enterprise software. It combines UX strategy, research, UI design, prototyping, and usability testing to create products that are useful, intuitive, and aligned with business goals.",
  },
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "UX design focuses on how a product works and how users navigate and interact with it, while UI design focuses on the visual interface, including layouts, typography, colors, components, and visual hierarchy. Together, UI and UX create a complete product experience.",
  },
  {
    question: "Why is UX research important?",
    answer:
      "UX research helps you understand your users' needs, behaviors, expectations, and pain points before investing heavily in design and development. It reduces assumptions and helps teams make better product decisions.",
  },
  {
    question: "What is a design system?",
    answer:
      "A design system is a structured collection of reusable components, design patterns, guidelines, and standards used to create consistent digital experiences. It helps design and development teams work faster while maintaining product consistency.",
  },
  {
    question: "Can you redesign an existing digital product?",
    answer:
      "Yes. We can audit your existing product, identify usability and experience issues, research user pain points, and redesign critical workflows and interfaces without compromising the functionality your users already rely on.",
  },
  {
    question: "Can Softmind work with our existing development team?",
    answer:
      "Yes. Our designers can work alongside your internal engineering team, providing development-ready designs, component specifications, prototypes, and design system documentation for a smoother implementation process.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-200 py-24 lg:py-32 font-jakarta relative overflow-hidden">
      {/* Subtle Background Glow for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0CBF83]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)] shadow-[0_0_10px_rgba(0,35,90,0.5)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-wide uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold text-[#161616] leading-[1.1] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`group w-full rounded-[24px] transition-all duration-500 overflow-hidden border ${
                  isOpen
                    ? "border-[#0CBF83]/30 bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)]"
                    : "border-transparent bg-[#F8F9FA] hover:bg-[#F1F3F5]"
                }`}
              >
                <div
                  onClick={() => handleToggle(idx)}
                  className="flex items-center justify-between p-4 sm:p-5 cursor-pointer select-none gap-6"
                >
                  <h3
                    className={`text-[17px] sm:text-[19px] leading-[1.4] font-bold transition-colors duration-300 ${
                      isOpen
                        ? "text-[#00235A]"
                        : "text-[#161616] group-hover:text-[#00235A]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isOpen
                        ? "bg-[#0CBF83] text-white rotate-180 shadow-[0_4px_12px_rgba(12,191,131,0.3)]"
                        : "bg-white text-[#161616] shadow-sm group-hover:bg-[#00235A] group-hover:text-white"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 transition-transform duration-500" />
                  </div>
                </div>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 px-6 sm:px-8 pt-0">
                      <p className="text-[16px] sm:text-[17px] leading-[1.8] text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
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
