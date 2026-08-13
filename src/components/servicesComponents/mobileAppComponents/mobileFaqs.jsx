"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How much does it cost to develop a mobile app?",
    answer:
      "The cost of mobile app development depends on factors such as application complexity, features, design requirements, integrations, platforms, security requirements, and development timeline. Softmind defines the scope and technical requirements first to provide a development approach aligned with your budget and business goals.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "Development timelines vary based on the application's complexity, number of platforms, features, integrations, and testing requirements. A focused MVP can typically be delivered faster than a feature-rich enterprise application. We define a realistic roadmap during the discovery and planning stage.",
  },
  {
    question: "Should I build a native or cross-platform mobile app?",
    answer:
      "The right approach depends on your performance requirements, target platforms, budget, development timeline, and required device capabilities. Native development can provide maximum platform-specific performance, while cross-platform development can reduce development complexity and accelerate multi-platform delivery.",
  },
  {
    question: "Can you modernize an existing mobile application?",
    answer:
      "Yes. We can audit and modernize existing applications by improving architecture, performance, UI/UX, security, integrations, and technology while preserving valuable functionality and business logic.",
  },
  {
    question: "Can you integrate AI into a mobile application?",
    answer:
      "Yes. We develop AI-powered mobile applications and integrate AI capabilities such as intelligent recommendations, conversational assistants, predictive analytics, personalization, automation, natural language processing, and computer vision.",
  },
  {
    question: "Do you provide mobile app maintenance and support?",
    answer:
      "Yes. Our post-launch services include monitoring, bug fixes, security updates, OS compatibility updates, performance optimization, feature enhancements, and ongoing technical support.",
  },
  {
    question: "Can you develop apps for both iOS and Android?",
    answer:
      "Yes. We develop native iOS and Android applications as well as cross-platform mobile applications based on your product requirements and business objectives.",
  },
];

const MobileFaqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white font-jakarta py-20 lg:py-28">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-navy to-green" />
            <span className="text-navy text-[13px] font-bold tracking-widest uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] font-extrabold text-navy tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-green/30 bg-green/5"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`text-[18px] font-bold pr-8 ${isOpen ? "text-navy" : "text-gray-800"}`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen
                        ? "bg-green text-white rotate-180"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-[16px] text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileFaqs;
