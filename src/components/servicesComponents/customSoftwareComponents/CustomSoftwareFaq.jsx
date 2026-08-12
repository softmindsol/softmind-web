"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
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

export default function CustomSoftwareFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white text-dark py-24 overflow-hidden font-jakarta">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto px-6 lg:px-12 w-fit">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3.5 text-center mb-16 max-w-[850px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[18px] md:text-[22px] font-bold tracking-wide">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-navy capitalize">
            Frequently Asked Questions About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
              AI SaaS Development
            </span>
          </h2>
          <p className="text-sm md:text-base text-grey font-medium leading-[24px] tracking-wide mt-2">
            Find answers to common questions about developing custom AI-powered
            SaaS platforms, timelines, costs, and data handling.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-[1024px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-500 ease-out ${
                  isOpen
                    ? "border-green bg-gradient-to-br from-gray-50 to-white shadow-[0_4px_20px_rgba(12,191,131,0.06)] scale-[1.01]"
                    : "border-gray-200 hover:border-green/30 hover:bg-gray-50/30 bg-white"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none group"
                >
                  <span
                    className={`text-[16px] sm:text-[18px] font-bold tracking-wide transition-colors duration-300 ${
                      isOpen ? "text-green" : "text-navy group-hover:text-green"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-all duration-500 ease-out ${
                      isOpen
                        ? "rotate-180 text-green"
                        : "text-navy opacity-70 group-hover:opacity-100"
                    }`}
                  />
                </button>

                {/* Collapsible Content wrapper using grid height transition */}
                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 border-t border-gray-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`p-6 text-[14px] sm:text-[15px] font-medium text-grey leading-relaxed transition-all duration-500 delay-75 ${
                        isOpen
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-2 opacity-0"
                      }`}
                    >
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
