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
    <section className="relative w-full bg-[#161616] text-white py-16 lg:py-24 overflow-hidden font-jakarta">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0CBF83]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto px-6 lg:px-12 w-fit">
        <div className="flex flex-col items-center gap-3.5 text-center mb-16 max-w-[850px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[22px] font-bold tracking-wide">
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

        <div className="max-w-[1024px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-500 ease-out overflow-hidden ${
                  isOpen
                    ? "bg-[#ffffff0a] border-[#0CBF83]/40 shadow-[0_4px_20px_rgba(12,191,131,0.06)]"
                    : "bg-[#ffffff03] border-white/10 hover:border-white/20 hover:bg-[#ffffff05]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none group"
                >
                  <span
                    className={`text-[16px] sm:text-[18px] font-bold tracking-wide transition-colors duration-300 ${
                      isOpen ? "text-[#0CBF83]" : "text-white group-hover:text-[#0CBF83]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-all duration-500 ease-out ${
                      isOpen
                        ? "rotate-180 text-[#0CBF83]"
                        : "text-white/50 group-hover:text-white"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`px-6 pb-6 text-[14px] sm:text-[15px] font-medium text-white/70 leading-relaxed transition-all duration-500 delay-75 ${
                        isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
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
