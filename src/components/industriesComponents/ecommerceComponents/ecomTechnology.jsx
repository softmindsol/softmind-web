"use client";
import React from "react";
import { motion } from "framer-motion";

const techColumns = [
  {
    title: "Experience & Platform",
    items: [
      "React and Next.js",
      "Shopify and Shopify Plus",
      "Headless commerce",
      "React Native mobile apps",
      "Tailwind CSS and design systems",
      "Progressive Web Apps",
      "Core Web Vitals optimization",
    ],
  },
  {
    title: "Backend & Infrastructure",
    items: [
      "Node.js and Python",
      "AWS and Google Cloud",
      "API-first and microservices architecture",
      "PostgreSQL and MongoDB",
      "Redis caching",
      "Elasticsearch-powered search",
      "CDN and edge delivery",
    ],
  },
  {
    title: "Commerce Capabilities",
    items: [
      "Conversion optimization",
      "Payment integrations",
      "Inventory and order management",
      "Logistics and fulfilment",
      "Subscription and billing",
      "ERP and CRM integrations",
      "Tax and compliance systems",
    ],
  },
];

export default function EcomTechnology() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-black font-jakarta overflow-hidden">
      <div className="relative mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[20px] font-bold tracking-wide">
              The Technology Behind Faster, Smarter Commerce
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-white"
          >
            Built for Performance at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
              Every Layer
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            A strong eCommerce experience depends on more than design. It needs
            a reliable technology foundation that keeps your store fast, secure,
            connected, and ready to scale.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {techColumns.map((col, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-[#F8FAFC] w-full rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <h3 className="text-xl font-bold text-navy mb-6 pb-4 border-b border-gray-200">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {col.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-dark font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
