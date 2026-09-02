"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Rocket, UserPlus, CheckCircle2 } from "lucide-react";

const models = [
  {
    title: "Managed Dedicated Design Team",
    bestFor: "Best for growing teams",
    description: "Get a dedicated team of designers and specialists working as an extension of your organization.",
    icon: <Users className="w-8 h-8 text-[#0CBF83]" />,
    features: [
      "Dedicated UI/UX designers",
      "UX researchers and strategists",
      "Direct communication with the design team",
      "Flexible team scaling",
      "Agile collaboration",
      "Strict NDA and IP protection",
    ],
  },
  {
    title: "End-to-End Product Design",
    bestFor: "Best for new products & SaaS",
    description: "From product discovery to development-ready designs, we manage the complete design journey.",
    icon: <Rocket className="w-8 h-8 text-[#00235A]" />,
    features: [
      "Product discovery and UX strategy",
      "UX research and user journeys",
      "UI/UX design",
      "Interactive prototypes",
      "Design systems",
      "Usability testing",
      "Development handoff",
    ],
    highlight: true,
  },
  {
    title: "Design Staff Augmentation",
    bestFor: "Best for filling skill gaps",
    description: "Add experienced design professionals to your existing product team without the overhead of full-time hiring.",
    icon: <UserPlus className="w-8 h-8 text-[#0CBF83]" />,
    features: [
      "Experienced UI/UX designers",
      "UX researchers",
      "Flexible engagement",
      "Seamless team integration",
      "Scale resources as needed",
      "Work with your existing tools and processes",
    ],
  },
];

export default function EngagementModels() {
  return (
    <section className="bg-[#F8F9FA] py-24 lg:py-32 font-jakarta">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-wide">
              Engagement Models
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#161616] leading-tight mb-6">
            How We Partner With Your Business
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
            Whether you need a complete product design team or specialized UX expertise, Softmind offers flexible engagement models that align with your scope, timeline, and internal capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 flex flex-col h-full border ${
                model.highlight
                  ? "border-[#0CBF83] shadow-[0_8px_30px_rgba(12,191,131,0.12)] md:-translate-y-4"
                  : "border-gray-100 shadow-sm"
              }`}
            >
              {model.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0CBF83] text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="w-16 h-16 rounded-2xl bg-[#F8F9FA] flex items-center justify-center mb-6">
                {model.icon}
              </div>
              
              <div className="mb-6">
                <span className="text-[#0CBF83] text-sm font-bold tracking-wide mb-2 block uppercase">
                  {model.bestFor}
                </span>
                <h3 className="text-[22px] font-bold text-[#161616] mb-3">
                  {model.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {model.description}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <ul className="flex flex-col gap-3">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0CBF83] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`w-full mt-8 py-3.5 rounded-xl font-bold transition-all duration-300 ${
                model.highlight
                  ? "bg-[#0CBF83] text-white hover:bg-[#0aa672]"
                  : "bg-[#F8F9FA] text-[#161616] hover:bg-[#161616] hover:text-white"
              }`}>
                Choose This Model
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
