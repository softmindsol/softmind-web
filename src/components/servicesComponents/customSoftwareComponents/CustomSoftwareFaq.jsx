"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SoftMindSolutionLogo } from "../../../../public/images";

export default function CustomSoftwareFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "How much does custom software development cost?",
      answer:
        "Project costs depend on complexity, required features, integrations, technologies, and development timelines. We provide detailed estimates after understanding your business requirements.",
    },
    {
      question: "How long does it take to build custom software?",
      answer:
        "Most projects range from three to twelve months depending on scope, team size, and feature requirements.",
    },
    {
      question: "Can you modernize existing software?",
      answer:
        "Yes. We upgrade legacy applications, improve performance, migrate systems to the cloud, and add modern capabilities without disrupting your business operations.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Absolutely. We offer ongoing maintenance, monitoring, feature enhancements, security updates, and technical support to ensure your software continues to perform at its best.",
    },
    {
      question: "Can you integrate AI into existing software?",
      answer:
        "Yes. We integrate AI-powered features such as chatbots, intelligent search, predictive analytics, workflow automation, recommendation engines, and document processing into existing applications.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#161616] text-white py-20 lg:py-28 overflow-hidden font-jakarta">
      {/* Background radial blue glow */}
      <div
        className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-35 blur-[140px]"
        style={{ backgroundColor: "#00235A" }}
      />
      <div
        className="absolute bottom-0 right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{ backgroundColor: "#0CBF83" }}
      />

      <div className="absolute top-1/4 select-none pointer-events-none opacity-10">
        <Image
          src={SoftMindSolutionLogo}
          alt="SoftMindSol Logo"
          className="object-cover max-h-[726px]"
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-12 lg:gap-8 lg:items-start">
          {/* Left Column: Heading Layout */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-4 max-w-[520px]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
              <span className="text-[#0CBF83] text-[20px] font-bold tracking-[1px]">
                FAQs
              </span>
            </div>

            <h2 className="text-center lg:text-start text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-[0.5px] text-white">
              Frequently Asked Questions
            </h2>

            <p className="text-center lg:text-start text-base text-white/80 font-medium leading-[26px]">
              Find clear answers about custom software engineering, project pricing models, development timelines, legacy migration, and ongoing AI support.
            </p>
          </div>

          {/* Right Column: Dynamic Accordions */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full max-w-[680px]">
            {faqData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`w-full rounded-[22px] transition-all duration-500 overflow-hidden relative group border backdrop-blur-sm ${
                    isOpen
                      ? "border-[#0CBF83]/40 bg-gradient-to-br from-white/[0.08] to-[#0CBF83]/[0.05] shadow-[0_8px_30px_rgba(12,191,131,0.12)]"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#0CBF83]/0 via-[#0CBF83]/5 to-transparent pointer-events-none transition-opacity duration-700 ease-in-out ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Accordion Question Bar */}
                  <div
                    onClick={() => handleToggle(idx)}
                    className="flex items-center justify-between p-6 sm:p-7 cursor-pointer select-none gap-4 relative z-10"
                  >
                    <h3
                      className={`text-[16px] sm:text-[18px] leading-[1.4] font-bold tracking-[0.3px] transition-all duration-300 ${
                        isOpen
                          ? "text-[#0CBF83]"
                          : "text-white/90 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ease-out border ${
                        isOpen
                          ? "bg-[#0CBF83] border-[#0CBF83] text-[#161616] rotate-180 shadow-[0_0_20px_rgba(12,191,131,0.4)]"
                          : "bg-transparent border-white/20 text-white/70 group-hover:bg-white/10 group-hover:border-white/40 group-hover:text-white"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 transition-transform duration-500"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>

                  {/* Dynamic Height expanding body wrapper */}
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="relative z-10 pb-7 px-6 sm:px-7">
                        <div
                          className={`w-12 h-[2px] rounded-full mb-4 transition-all duration-700 delay-100 ${
                            isOpen ? "bg-[#0CBF83]/50 w-full max-w-[100px]" : "bg-transparent w-0"
                          }`}
                        />

                        <p className="text-[15px] sm:text-[16px] leading-[1.7] text-white/80 font-normal tracking-wide">
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
      </div>
    </section>
  );
}
