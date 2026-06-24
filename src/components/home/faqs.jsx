"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SoftMindSolutionLogo } from "../../../public/images";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What services does Softmind Solutions offer?",
      answer:
        "We provide full-cycle software development including web & mobile app development, AI/ML integration, UI/UX design, and staff augmentation for startups and enterprises.",
    },
    {
      question: "How experienced is your team?",
      answer:
        "Our team consists of senior engineers, developers, and designers with an average of 5+ years of experience delivering high-quality production applications.",
    },
    {
      question: "Can we hire your developers on a monthly basis?",
      answer:
        "Yes, we offer flexible dedicated hiring models on a monthly or contract basis to seamlessly augment your internal team.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in PropTech, FinTech, EdTech, HealthTech, AI Services, and E-Commerce, delivering tailored solutions for each sector.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Absolutely. We provide comprehensive post-launch maintenance, monitoring, and updates to ensure your platform runs flawlessly.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We utilize modern, industry-standard stacks including React, Next.js, Node.js, Python, React Native, AWS, and customized AI models.",
    },
    {
      question: "How do you ensure the quality of your deliverables?",
      answer:
        "We enforce strict testing procedures, continuous integration/delivery (CI/CD) pipelines, automated QA, and meticulous code review protocols.",
    },
    {
      question: "Can you work in our timezone?",
      answer:
        "Yes, we structure our schedules to provide a minimum of 4 hours of overlap with your timezone for smooth communication and daily updates.",
    },
    {
      question: "How can we start working together?",
      answer:
        "You can get in touch through our contact form. We will arrange a discovery call to understand your requirements and outline a strategy.",
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
