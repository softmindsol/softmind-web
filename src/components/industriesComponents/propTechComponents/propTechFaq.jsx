"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { SoftMindSolutionLogo } from "../../../../public/images";

const faqs = [
  {
    question: "What is PropTech software development?",
    answer: (
      <div className="space-y-4">
        <p>
          PropTech software development is the process of building digital
          products for the real estate industry. These may include property
          management platforms, real estate marketplaces, tenant portals,
          listing websites, mobile apps, CRM systems, investment tools, and
          AI-powered property solutions.
        </p>
        <p>
          Unlike generic software, PropTech products must support complex
          property data, location-based search, transactions, leasing workflows,
          multiple user roles, and third-party integrations.
        </p>
      </div>
    ),
  },
  {
    question: "How much does PropTech software development cost?",
    answer: (
      <div className="space-y-4">
        <p>
          The cost of PropTech software development depends on the product
          scope, platform complexity, integrations, user roles, and data
          requirements.
        </p>
        <p>
          A focused PropTech MVP may start between $20,000 and $60,000, while a
          more advanced marketplace or property management platform can cost
          $80,000 to $200,000 or more.
        </p>
        <p>
          We define the core features, technical requirements, and development
          roadmap before providing a detailed estimate.
        </p>
      </div>
    ),
  },
  {
    question: "How long does it take to build a PropTech MVP?",
    answer: (
      <div className="space-y-4">
        <p>
          A focused PropTech MVP typically takes 10 to 16 weeks to design,
          develop, test, and launch. A straightforward tenant portal may take
          less time, while a real estate marketplace with property feeds,
          map-based search, multiple user roles, and third-party integrations
          may require a longer development cycle.
        </p>
        <p>
          The best approach is to launch with the features needed to validate
          the product and expand based on user feedback.
        </p>
      </div>
    ),
  },
  {
    question: "How do you build a PropTech MVP?",
    answer: (
      <div className="space-y-4">
        <p>
          We begin by identifying the product’s main users, business model, core
          problem, and strongest value proposition. The MVP is then built around
          one complete, high-value user journey. For example, a property
          management MVP may cover tenant onboarding, lease management,
          payments, and maintenance requests. A marketplace MVP may focus on
          property search, listings, inquiries, and agent communication.
        </p>
        <p>
          This approach reduces initial development costs and helps you test
          demand before building a larger platform.
        </p>
      </div>
    ),
  },
  {
    question: "What types of PropTech software can you develop?",
    answer: (
      <div className="space-y-4">
        <p>
          We develop custom PropTech solutions for different real estate
          business models, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-neutral-300">
          <li>Property management platforms</li>
          <li>Real estate marketplaces</li>
          <li>Property listing portals</li>
          <li>Tenant and landlord apps</li>
          <li>Real estate CRM systems</li>
          <li>Rental management software</li>
          <li>Commercial real estate platforms</li>
          <li>Property investment dashboards</li>
          <li>Smart building and IoT solutions</li>
          <li>AI-powered property tools</li>
        </ul>
        <p>
          Each product is designed around the business, users, workflows, and
          target market.
        </p>
      </div>
    ),
  },
];

export default function PropTechFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-24 bg-black text-white relative overflow-hidden flex flex-col items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="absolute top-0 left-0 select-none pointer-events-none opacity-10">
        <Image
          src={SoftMindSolutionLogo}
          alt="SoftMindSol Logo"
          className="object-cover max-h-[726px]"
        />
      </div>

      <div className="w-full font-jakarta px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        {/* Left Side: Header & Intro */}
        <div className="lg:w-1/3 flex flex-col gap-6 sticky top-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-neutral-300 uppercase">
              FAQ
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Frequently <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Asked Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg leading-relaxed"
          >
            Find answers to common questions about our PropTech development
            process, technologies, and capabilities. Can&apos;t find what
            you&apos;re looking for? Reach out to our team.
          </motion.p>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="lg:w-2/3 w-full flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-white/5 border-white/20 shadow-lg shadow-black/50"
                    : "bg-black/20 border-white/5 hover:border-white/15 hover:bg-white/[0.02]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left px-6 py-6 md:px-8 md:py-7 flex justify-between items-center gap-4 focus:outline-none"
                >
                  <h3
                    className={`text-lg md:text-xl font-medium transition-colors duration-300 pr-4 ${isOpen ? "text-white" : "text-neutral-300 group-hover:text-white"}`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-gradient-to-br from-blue-500 to-emerald-500 text-white shadow-lg shadow-blue-500/25 rotate-180"
                        : "bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 text-neutral-400 text-base md:text-lg leading-relaxed">
                        <div className="w-full h-px bg-white/10 mb-6"></div>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
