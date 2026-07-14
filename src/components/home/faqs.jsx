"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SoftMindSolutionLogo } from "../../../public/images";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What does SoftMind do?",
      answer:
        "SoftMind is an offshore software development company that helps startups, SaaS companies, and engineering teams build scalable web apps, mobile apps, AI solutions, cloud platforms, and custom software products.",
    },
    {
      question:
        "Why should I choose SoftMind as my software development partner?",
      answer:
        "SoftMind provides senior in-house developers, timezone-aligned collaboration, agile delivery, transparent communication, and flexible engagement models to help you build faster while reducing software development costs.",
    },
    {
      question: "Can I hire dedicated developers from SoftMind?",
      answer:
        "Yes. You can hire dedicated developers from SoftMind who work directly with your team, join your standups, use your tools, and support your product roadmap as full-time remote engineers.",
    },
    {
      question: "How quickly can I onboard developers?",
      answer:
        "You can typically onboard pre-vetted developers within 7 to 14 days, depending on your required skills, project scope, and team size.",
    },
    {
      question: "What software development services does SoftMind offer?",
      answer:
        "SoftMind offers custom software development, web app development, mobile app development, AI app development, cloud app development, legacy app modernization, UI/UX design, QA testing, and staff augmentation services.",
    },
    {
      question: "What technologies does SoftMind work with?",
      answer:
        "SoftMind engineers work with modern technologies including React, Next.js, Node.js, React Native, AWS, AI integrations, APIs, DevOps tools, cloud platforms, and UI/UX design systems.",
    },
    {
      question: "Do SoftMind developers work in our timezone?",
      answer:
        "Yes. SoftMind’s offshore developers work with timezone alignment, attend your meetings, communicate through your preferred tools, and integrate into your existing development workflow.",
    },
    {
      question: "Will I own the source code and intellectual property?",
      answer:
        "Yes. Your source code, product, documentation, and intellectual property remain 100% yours. SoftMind does not claim ownership of your software or business assets.",
    },
    {
      question: "What engagement models does SoftMind offer?",
      answer:
        "SoftMind offers three flexible engagement models: software development outsourcing, dedicated development teams, and hire dedicated developers. You can choose the model that best fits your product, budget, timeline, and control needs.",
    },
    {
      question: "Who is SoftMind best suited for?",
      answer:
        "SoftMind is best suited for startups, SaaS companies, product teams, and growing engineering teams that need reliable software development, dedicated developers, or offshore engineering support.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#161616] text-white py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Background radial blue glow (Ellipse 25 equivalent) */}
      <div
        className="absolute top-[-186px] left-1/2 -translate-x-1/2 w-[490px] h-[490px] rounded-full pointer-events-none opacity-40 blur-[140px]"
        style={{ backgroundColor: "#00235A" }}
      />

      {/* Background left glow (Ellipse 26 equivalent) */}
      <div
        className="absolute top-[303px] left-[-150px] w-[363px] h-[363px] rounded-full pointer-events-none opacity-30 blur-[130px]"
        style={{ backgroundColor: "#00235A" }}
      />

      <div className="absolute top-1/4 select-none pointer-events-none opacity-10">
        <Image
          src={SoftMindSolutionLogo}
          alt="SoftMindSol Logo"
          className="object-cover max-h-[726px]"
        />
      </div>

      <div className="relative w-fit mx-auto px-12">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-12 lg:gap-8 lg:items-start">
          {/* Left Column: Heading Layout */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-4 max-w-[569px]">
            <div className="flex items-center gap-2">
              {/* Custom Theme Dot */}
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
              <span className="text-[#0CBF83] text-[22px] font-bold tracking-[1px] leading-[28px]">
                Faqs
              </span>
            </div>

            <h2 className="text-center lg:text-start text-2xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-[1px] text-white">
              Curious? Read This First
            </h2>

            <p className="text-center lg:text-start text-sm md:text-base text-white/80 font-medium leading-[24px] tracking-[1px]">
              Find clear answers about our services, process, timelines,
              pricing, and support to help you make informed decisions.
            </p>
          </div>

          {/* Right Column: Dynamic Accordions */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full max-w-[644px]">
            {faqData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`w-full rounded-[20px] transition-all duration-500 overflow-hidden relative group border backdrop-blur-sm ${
                    isOpen
                      ? "border-[#0CBF83]/40 bg-gradient-to-br from-white/[0.08] to-[#0CBF83]/[0.05] shadow-[0_8px_30px_rgba(12,191,131,0.12)]"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                >
                  {/* Subtle animated gradient background for active state */}
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
                      className={`text-[15px] sm:text-[17px] leading-[1.4] font-bold tracking-[0.5px] transition-all duration-300 ${
                        isOpen
                          ? "text-[#0CBF83]"
                          : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    {/* Icon Container with elegant hover and active state */}
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
                        {/* Elegant divider */}
                        <div
                          className={`w-12 h-[2px] rounded-full mb-5 transition-all duration-700 delay-100 ${isOpen ? "bg-[#0CBF83]/50 w-full max-w-[100px]" : "bg-transparent w-0"}`}
                        />

                        {/* Answer Body text */}
                        <p className="text-[14px] sm:text-[16px] leading-[1.7] text-white/70 font-medium tracking-wide">
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
