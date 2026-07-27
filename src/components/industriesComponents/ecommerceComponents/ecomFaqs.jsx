"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SoftMindSolutionLogo } from "../../../../public/images";

export default function EcomFaqs() {
  const [openIndex, setOpenIndex] = useState(0);

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

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#161616] text-white py-16 md:py-24 overflow-hidden font-jakarta mb-14">
      {/* Background radial blue glow (Ellipse 25 equivalent) */}
      <div
        className="absolute top-[-186px] right-0 w-[490px] h-[490px] rounded-full pointer-events-none opacity-30 blur-[140px]"
        style={{ backgroundColor: "navy" }}
      />

      {/* Background left glow (Ellipse 26 equivalent) */}
      <div
        className="absolute top-[303px] left-[-150px] w-[363px] h-[363px] rounded-full pointer-events-none opacity-30 blur-[130px]"
        style={{ backgroundColor: "#00235A" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[363px] h-[363px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{ backgroundColor: "green" }}
      />

      <div className="absolute select-none pointer-events-none opacity-10">
        <Image
          src={SoftMindSolutionLogo}
          alt="SoftMindSol Logo"
          className="object-cover max-h-[726px]"
        />
      </div>

      <div className="relative w-fit mx-auto px-12">
        <div className="flex flex-col items-center justify-between gap-12 lg:gap-8">
          {/* Left Column: Heading Layout */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-4 max-w-[569px]">
            <div className="flex items-center gap-2">
              {/* Custom Theme Dot */}
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
              <span className="text-[#0CBF83] text-[22px] font-bold tracking-[1px] leading-[28px]">
                Faqs
              </span>
            </div>

            <h2 className="text-center lg:text-start text-2xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-[1px] text-white">
              Curious?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
                Read This First
              </span>
            </h2>

            <p className="text-center text-sm md:text-base text-white/80 font-medium leading-[24px] tracking-[1px]">
              Find clear answers about our services, process, timelines,
              pricing, and support to help you make informed decisions.
            </p>
          </div>

          {/* Right Column: Dynamic Accordions */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full max-w-[1024px]">
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
