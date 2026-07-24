"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Cpu,
  Building2,
  Store,
  Smartphone,
  BrainCircuit,
  Combine,
} from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";

const services = [
  {
    icon: <FaShoppingCart className="w-8 h-8 text-green" />,
    title: "Custom eCommerce Platforms",
    description:
      "Build around your business model not the limits of a template. Create a faster, more flexible shopping experience designed to improve conversion, simplify management, and support long-term growth.",
    capabilities: [
      "Custom storefronts and customer journeys",
      "Product, inventory, and order management",
      "Conversion-focused checkout flows",
      "Multi-language, currency, and payment support",
      "Reporting and performance dashboards",
    ],
  },
  {
    icon: <LayoutGrid className="w-8 h-8 text-green" />,
    title: "Multi-Vendor Marketplaces",
    description:
      "Bring buyers and sellers together on one scalable platform. Manage vendors, transactions, commissions, and disputes with less manual effort while creating a smooth experience for every user.",
    capabilities: [
      "Vendor onboarding and dashboards",
      "Product approvals and listing management",
      "Commissions, split payments, and payouts",
      "Ratings, reviews, and dispute workflows",
      "Advanced search and marketplace analytics",
    ],
  },
  {
    icon: <Cpu className="w-8 h-8 text-green" />,
    title: "Headless Commerce",
    description:
      "Move faster without being restricted by your commerce platform. Gain complete control over the customer experience while keeping your backend stable, flexible, and ready to scale across channels.",
    capabilities: [
      "Next.js and React storefronts",
      "API-first commerce architecture",
      "Faster page speeds and stronger Core Web Vitals",
      "Headless Shopify, BigCommerce, or custom backends",
      "Web, mobile, kiosk, and omnichannel delivery",
    ],
  },
  {
    icon: <Building2 className="w-8 h-8 text-green" />,
    title: "B2B eCommerce Platforms",
    description:
      "Make complex B2B buying easier for your customers and sales team. Automate pricing, approvals, quotes, bulk orders, and account management so buyers can purchase on their own terms.",
    capabilities: [
      "Account-based pricing and access",
      "Bulk ordering and repeat purchases",
      "Quotes and approval workflows",
      "Credit terms and invoice management",
      "ERP, CRM, and inventory integrations",
    ],
  },
  {
    icon: <Store className="w-8 h-8 text-green" />,
    title: "D2C Online Stores",
    description:
      "Turn more visitors into customers and more customers into repeat buyers. Create a fast, mobile-first shopping journey optimized for discovery, conversion, retention, and post-purchase engagement.",
    capabilities: [
      "High-converting product and landing pages",
      "Upsells, bundles, and cross-sells",
      "Subscription and repeat-order journeys",
      "Abandoned-cart and retention flows",
      "Loyalty, reviews, and order tracking",
    ],
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green" />,
    title: "eCommerce Mobile Apps",
    description:
      "Make it easier for customers to discover, buy, and return. Deliver fast, intuitive mobile shopping experiences that increase engagement, simplify checkout, and strengthen retention.",
    capabilities: [
      "Native iOS and Android apps",
      "React Native cross-platform development",
      "Mobile-first search and product discovery",
      "Apple Pay, Google Pay, and one-tap checkout",
      "Push notifications and re-engagement flows",
    ],
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-green" />,
    title: "AI-Powered Commerce",
    description:
      "Use AI where it can directly improve revenue and efficiency. Help customers find the right products faster, personalize every journey, and make smarter decisions across pricing, inventory, and engagement.",
    capabilities: [
      "Personalized product recommendations",
      "Intelligent search and shopping assistants",
      "Dynamic pricing and promotion logic",
      "Demand forecasting and inventory planning",
      "Personalized email and push campaigns",
    ],
  },
  {
    icon: <Combine className="w-8 h-8 text-green" />,
    title: "eCommerce Integrations",
    description:
      "Connect your entire commerce operation and reduce manual work.Keep payments, logistics, inventory, customer data, and reporting in sync as your business grows.",
    capabilities: [
      "Payment gateway integrations",
      "Shipping, logistics, and 3PL connections",
      "ERP, CRM, and warehouse integrations",
      "Tax and regional compliance systems",
      "Marketing, analytics, and automation tools",
    ],
  },
];

export default function EcomServices() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-white font-jakarta overflow-hidden">
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
              Services
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl max-w-2xl w-full lg:text-[46px] lg:leading-[58px] font-bold text-navy"
          >
            eCommerce Solutions Built Around How You Sell and Grow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-grey font-medium max-w-2xl"
          >
            Choose the capabilities your business needs today, with the
            flexibility to expand as your customers, operations, and revenue
            grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="group relative h-[450px] w-full [perspective:1000px]"
            >
              <div className="absolute w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md rounded-3xl">
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-white p-8 rounded-3xl border border-gray-100 flex flex-col gap-5 [backface-visibility:hidden]">
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-grey font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="text-sm font-bold text-green flex items-center gap-1 group-hover:underline">
                      Hover for capabilities{" "}
                      <span className="rotate-90">⤿</span>
                    </span>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-navy text-white p-8 rounded-3xl flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="w-16 h-12 flex items-center justify-start">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-green mb-4">
                    Key capabilities
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {service.capabilities.map((cap, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm font-medium text-white/80"
                      >
                        <span className="text-green shrink-0 mt-1">✔</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
