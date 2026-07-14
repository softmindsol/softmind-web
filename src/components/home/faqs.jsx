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
                  className={`w-full rounded-lg transition-all duration-300 border ${
                    isOpen
                      ? "border-white bg-[#161616]"
                      : "border-white/20 bg-transparent"
                  }`}
                >
                  {/* Accordion Question Bar */}
                  <div
                    onClick={() => handleToggle(idx)}
                    className="flex items-center justify-between p-5 cursor-pointer select-none gap-4"
                  >
                    <h3
                      className={`text-sm md:text-[16px] leading-[20px] font-bold tracking-[1px] transition-colors duration-300 ${
                        isOpen
                          ? "text-white"
                          : "text-white/50 hover:text-white/80"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    {/* SVG Dropdown Arrow Icon (rotates up when active) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-[18px] h-[18px] shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-white" : "text-white/50"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {/* Dynamic Height expanding body wrapper */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* Divider line inside open box */}
                      <div className="h-[1px] bg-[#EFEFEF]/10 mx-5" />

                      {/* Answer Body text */}
                      <p className="p-5 text-xs md:text-[14px] leading-[18px] text-white/80 font-medium tracking-[1px]">
                        {faq.answer}
                      </p>
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
