"use client";
import React, { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "How much does eCommerce software development cost?",
    answer:
      "The investment depends on your platform, features, integrations, and business model. A custom Shopify store typically ranges from $15,000 to $40,000, while marketplaces and custom commerce platforms may range from $50,000 to $150,000+. You receive a detailed, scope-based estimate before development begins.",
  },
  {
    question: "How long does it take to build an eCommerce platform?",
    answer:
      "A focused eCommerce MVP can typically launch within 8–12 weeks. Standard D2C stores may take 8–10 weeks, marketplaces around 12–16 weeks, and complex B2B platforms 14–20 weeks. Your final timeline is confirmed during discovery.",
  },
  {
    question: "Should I choose Shopify or a custom platform?",
    answer:
      "Shopify is often ideal for D2C brands that want to launch quickly with proven commerce functionality. A custom platform is better suited to marketplaces, complex B2B operations, advanced subscriptions, or business models that cannot fit within standard platform limitations. The recommendation is based on what best supports your business.",
  },
  {
    question: "What is headless commerce, and do I need it?",
    answer:
      "Headless commerce separates your storefront from the backend commerce system, giving you greater control over performance, design, and multi-channel experiences. It is valuable when platform limitations are restricting growth, but it may be unnecessary for a straightforward first launch.",
  },
  {
    question: "Can you build for the MENA market?",
    answer:
      "Yes. We support eCommerce businesses across the UAE, Saudi Arabia, Qatar, Egypt, Kuwait, and the wider MENA region. This includes Arabic and RTL experiences, regional payment gateways, cash-on-delivery workflows, local logistics, and GCC VAT requirements.",
  },
  {
    question: "Which eCommerce systems can you integrate?",
    answer:
      "We connect commerce platforms with leading payment gateways, shipping providers, ERPs, CRMs, tax systems, marketing platforms, and analytics tools. This includes Stripe, PayPal, Adyen, Aramex, Salesforce, HubSpot, Klaviyo, SAP, Oracle, Microsoft Dynamics, Avalara, and more.",
  },
];

export default function EcomFaqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#161616] text-white py-16 md:py-24 overflow-hidden font-jakarta mb-14">
      {/* Background glow effects */}
      <div
        className="absolute top-[-186px] left-1/2 -translate-x-1/2 w-[490px] h-[490px] rounded-full pointer-events-none opacity-40 blur-[140px]"
        style={{ backgroundColor: "#00235A" }}
      />
      <div
        className="absolute top-[303px] left-[-150px] w-[363px] h-[363px] rounded-full pointer-events-none opacity-30 blur-[130px]"
        style={{ backgroundColor: "#00235A" }}
      />

      <div className="relative mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          {/* Left Column: Heading */}
          <div className="lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
              <span className="text-green text-[20px] font-bold tracking-wide">
                Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-white">
              Curious? Read This First
            </h2>
            <p className="text-base text-white/70 font-medium leading-relaxed max-w-md">
              Find clear answers about our eCommerce services, process,
              timelines, pricing, and support to help you make informed
              decisions.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-fit flex flex-col gap-4">
            {faqData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`w-full rounded-[20px] transition-all duration-500 overflow-hidden relative border backdrop-blur-sm ${
                    isOpen
                      ? "border-green/40 bg-white/[0.08] shadow-[0_8px_30px_rgba(12,191,131,0.12)]"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-green/0 via-green/5 to-transparent pointer-events-none transition-opacity duration-700 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div
                    onClick={() => handleToggle(idx)}
                    className="flex items-center justify-between p-6 cursor-pointer select-none gap-4 relative z-10"
                  >
                    <h3
                      className={`text-base sm:text-lg font-bold transition-all duration-300 ${
                        isOpen ? "text-green" : "text-white/80"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 border ${
                        isOpen
                          ? "bg-green border-green text-dark rotate-180"
                          : "border-white/20 text-white/70"
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
                        className="w-5 h-5"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="relative z-10 pb-6 px-6">
                        <div
                          className={`h-[2px] rounded-full mb-4 transition-all duration-700 ${
                            isOpen ? "bg-green/50 w-16" : "bg-transparent w-0"
                          }`}
                        />
                        <p className="text-sm sm:text-base text-white/70 font-medium leading-relaxed">
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
