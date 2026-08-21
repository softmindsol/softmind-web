"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is web application development?",
    answer:
      "Web application development is the process of designing, building, testing, and maintaining interactive applications that users access through a web browser. Unlike traditional websites, web applications provide functionality such as user accounts, dashboards, transactions, workflows, data management, and integrations.",
  },
  {
    question: "How much does custom web app development cost?",
    answer:
      "The cost of web app development depends on factors such as application complexity, number of features, integrations, technology stack, design requirements, security needs, and development timeline. Softmind can assess your requirements and recommend an approach based on your budget and business objectives.",
  },
  {
    question: "How long does it take to develop a web application?",
    answer:
      "Development timelines vary depending on the application's scope and complexity. A focused MVP can typically be delivered faster than a large enterprise application with complex workflows, integrations, and security requirements. During discovery, we define the scope and provide a realistic development roadmap.",
  },
  {
    question: "Can you modernize an existing web application?",
    answer:
      "Yes. We can assess an existing application, identify technical and performance limitations, modernize its architecture, improve the user experience, migrate legacy technologies, and introduce new functionality while minimizing disruption to your operations.",
  },
  {
    question: "Can you integrate third-party systems into a web application?",
    answer:
      "Yes. We integrate web applications with APIs and third-party platforms such as CRMs, ERPs, payment gateways, analytics platforms, communication tools, authentication systems, and other business applications.",
  },
  {
    question: "Do you provide web app maintenance and support?",
    answer:
      "Yes. Our web application maintenance and support services can include bug fixes, security updates, performance optimization, infrastructure support, monitoring, feature enhancements, and ongoing application improvements.",
  },
  {
    question: "Why should I choose Softmind for web app development?",
    answer:
      "Softmind combines business understanding with technical expertise to develop web applications that are secure, scalable, intuitive, and aligned with measurable business goals. From initial discovery through development, testing, deployment, and ongoing support, we provide an end-to-end development partnership.",
  },
];

export default function WebAppFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#161616] via-[#1a1a1a] to-white pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden font-jakarta">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0CBF83]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto px-6 lg:px-12 w-full max-w-[1200px]">
        <div className="flex flex-col items-center gap-5 text-center mb-16 max-w-[850px] mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_10px_#0CBF83]" />
            <span className="text-[#0CBF83] text-sm md:text-base font-semibold tracking-widest uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-white capitalize">
            Everything You Need to Know About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Web App Development
            </span>
          </h2>
        </div>

        <div className="max-w-[900px] mx-auto flex flex-col gap-4 relative z-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`group rounded-2xl transition-all duration-400 ease-out overflow-hidden border backdrop-blur-sm ${
                  isOpen
                    ? "bg-white border-[#0CBF83]/40 shadow-[0_15px_40px_-10px_rgba(12,191,131,0.15)] ring-1 ring-[#0CBF83]/10"
                    : "bg-white/95 border-gray-200/60 shadow-sm hover:border-[#0CBF83]/20 hover:shadow-md hover:bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center justify-between w-full p-6 sm:p-7 text-left focus:outline-none cursor-pointer"
                >
                  <span
                    className={`text-base sm:text-lg font-bold tracking-wide transition-colors duration-300 pr-4 ${
                      isOpen
                        ? "text-[#0CBF83]"
                        : "text-gray-800 group-hover:text-gray-950"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-400 ${
                      isOpen
                        ? "bg-[#0CBF83]/10 text-[#0CBF83] rotate-180"
                        : "bg-gray-100 text-gray-500 group-hover:bg-[#0CBF83]/10 group-hover:text-[#0CBF83]"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-400 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-7 pb-6 sm:pb-7 text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
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
