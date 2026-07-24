"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Understand the Business",
    description: "We begin with your business model, customers, products, market, and growth goals. This ensures every decision supports what you need to achieve commercially.",
  },
  {
    title: "2. Choose the Right Foundation",
    description: "We recommend the platform and architecture that best fit your needs, whether that is Shopify, headless commerce, a marketplace, or a custom solution. You also receive clear reasoning behind the recommendation.",
  },
  {
    title: "3. Design the Buying Journey",
    description: "We map the complete customer experience before development begins. Every interaction is designed to reduce friction, build trust, and make purchasing easier.",
  },
  {
    title: "4. Build the Right MVP",
    description: "We focus first on the essential experience that proves value. This helps you launch sooner, validate with real customers, and avoid spending on features you do not yet need.",
  },
  {
    title: "5. Test and Launch With Confidence",
    description: "Before launch, we test performance, mobile usability, payments, and critical customer journeys. You go live with a platform that has been validated for real-world use.",
  },
  {
    title: "6. Improve as You Grow",
    description: "After launch, we help you optimize conversions, add new capabilities, strengthen infrastructure, and adapt the platform as your business evolves.",
  }
];

export default function EcomProcess() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#F8FAFC] font-jakarta overflow-hidden">
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[20px] font-bold tracking-wide">
              Our Process
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-navy max-w-2xl"
          >
            A Clear Path From Idea to Launch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-grey font-medium max-w-3xl leading-relaxed"
          >
            From discovery to launch, every step is designed to reduce risk, accelerate delivery, and keep your business goals at the center. You get a clear, collaborative process that turns your idea into a scalable eCommerce product with confidence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-green/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-dark mb-4">{step.title}</h3>
              <p className="text-grey font-medium text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
