"use client";
import React, { useState } from "react";

const FAQS = [
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

export default function StFaqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full bg-[#0D1117] py-20 md:py-28 overflow-hidden font-jakarta">
      {/* Background glows */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#00235A] opacity-30 blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-100px] w-[360px] h-[360px] rounded-full bg-green/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1280px]">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

          {/* Left: heading */}
          <div className="lg:w-[360px] shrink-0 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
                FAQs
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-bold text-white leading-[1.15] tracking-tight">
              Common{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
                Questions
              </span>{" "}
              Answered
            </h2>
            <p className="text-[14px] md:text-[15px] text-white/55 leading-[1.75] font-medium">
              Everything you need to know about offshore software testing
              services, our process, and how we work.
            </p>
            <a
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 border border-green/40 text-green font-bold text-[13px] tracking-wide rounded-full px-6 py-3 hover:bg-green/10 transition-all duration-200 self-start"
            >
              Ask a Question
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: accordions */}
          <div className="flex-1 flex flex-col gap-3 w-full">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-[18px] border backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-green/30 bg-gradient-to-br from-white/[0.07] to-green/[0.04] shadow-[0_8px_32px_rgba(12,191,131,0.10)]"
                      : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.15]"
                  }`}
                >
                  {/* Active shimmer */}
                  <div
                    className={`absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-green/40 to-transparent transition-opacity duration-500 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <h3
                      className={`text-[14px] sm:text-[15px] font-bold leading-snug tracking-[0.3px] transition-colors duration-200 ${
                        isOpen ? "text-green" : "text-white/80"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-green border-green text-white rotate-180 shadow-[0_0_16px_rgba(12,191,131,0.35)]"
                          : "border-white/20 text-white/50"
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6">
                        <div className="w-full h-[1px] bg-white/[0.08] mb-4" />
                        <p className="text-[13.5px] sm:text-[14.5px] text-white/60 leading-[1.75] font-medium">
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
