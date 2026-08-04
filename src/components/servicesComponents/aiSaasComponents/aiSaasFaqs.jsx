"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is custom AI SaaS development?",
    answer: "Custom AI SaaS development is the process of creating a cloud-based software product that combines subscription-based access with artificial intelligence capabilities. Unlike off-the-shelf software, the platform is designed around a company’s specific users, workflows, data, integrations, and commercial model."
  },
  {
    question: "How can AI improve a SaaS product?",
    answer: "AI can automate repetitive workflows, generate and summarize content, analyze documents, personalize user experiences, predict outcomes, recommend actions, detect anomalies, and help users find information more efficiently. The right capabilities depend on the problem the SaaS product is intended to solve."
  },
  {
    question: "How much does it cost to build an AI SaaS application?",
    answer: "The cost depends on product scope, design complexity, AI requirements, data readiness, integrations, infrastructure, security, and the number of user roles. An MVP with a focused feature set will generally require a smaller investment than a full enterprise platform with custom models and complex integrations. A discovery phase is the most reliable way to estimate the budget."
  },
  {
    question: "How long does AI SaaS development take?",
    answer: "A focused MVP may be developed within several months, while a larger platform can require a longer phased development cycle. The timeline is influenced by feature complexity, data preparation, model requirements, integration dependencies, testing, and stakeholder feedback."
  },
  {
    question: "Can you add AI to an existing SaaS application?",
    answer: "Yes. We can assess your current product, identify suitable AI opportunities, and integrate new capabilities without rebuilding the entire platform. Possible additions include AI assistants, predictive analytics, document processing, recommendation systems, workflow automation, and intelligent search."
  },
  {
    question: "Do we need our own data to build an AI SaaS product?",
    answer: "Not always. Some products can use existing foundation models, public datasets, third-party APIs, or rule-based automation. Proprietary data becomes more important when the application requires highly specialized predictions, domain-specific knowledge, or custom model training."
  },
  {
    question: "Can you build a multi-tenant SaaS application?",
    answer: "Yes. We develop multi-tenant and single-tenant SaaS platforms. The appropriate model depends on customer requirements, infrastructure costs, data isolation, customization needs, and regulatory obligations."
  },
  {
    question: "How do you protect data in AI SaaS applications?",
    answer: "Security measures can include encrypted data transfer and storage, identity management, role-based permissions, protected APIs, audit logs, environment separation, secure development practices, and continuous monitoring. The final security architecture is determined by the product’s data sensitivity and compliance requirements."
  },
  {
    question: "Do you provide support after the product launches?",
    answer: "Yes. We provide ongoing monitoring, maintenance, security updates, model evaluation, infrastructure optimization, issue resolution, and feature development to keep the product reliable and competitive."
  },
  {
    question: "Can you help us validate an AI SaaS idea?",
    answer: "Yes. Our discovery and consulting services help you assess user demand, technical feasibility, data requirements, AI opportunities, development priorities, risks, and estimated investment before full development begins."
  }
];

export default function AiSaasFaqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white text-dark py-24 overflow-hidden font-jakarta">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto px-6 lg:px-12 max-w-[1280px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3.5 text-center mb-16 max-w-[850px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[18px] md:text-[22px] font-bold tracking-wide">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-navy capitalize">
            Frequently Asked Questions About AI SaaS Development
          </h2>
          <p className="text-sm md:text-base text-grey font-medium leading-[24px] tracking-wide mt-2">
            Find answers to common questions about developing custom AI-powered SaaS platforms, timelines, costs, and data handling.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-green bg-gray-50 shadow-sm"
                    : "border-gray-150 hover:border-gray-300 bg-white"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                >
                  <span className="text-[16px] sm:text-[18px] font-bold text-navy pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-navy shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-green" : ""
                    }`}
                  />
                </button>

                {/* Collapsible Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-gray-100" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-[14px] sm:text-[15px] font-medium text-grey leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
