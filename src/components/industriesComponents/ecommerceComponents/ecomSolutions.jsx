"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  {
    id: "01",
    tab: "01 — Stores",
    heading: "01 — High-Converting Online Stores",
    description: "Give customers a faster, easier path from product discovery to purchase.Built for D2C brands, single-product businesses, and multi-category retailers that need greater performance, flexibility, and control than a standard template can provide.",
    features: [
      "Fast, mobile-first storefront",
      "Conversion- and SEO-focused product pages",
      "Frictionless checkout with flexible payments",
      "Customer accounts, tracking, and returns",
      "Search-friendly technical architecture",
      "Conversion optimization built into every journey"
    ]
  },
  {
    id: "02",
    tab: "02 — Marketplaces",
    heading: "02 — Multi-Vendor Marketplaces",
    description: "Create a marketplace buyers trust and vendors want to grow on. Give every participant the tools they need while keeping commissions, payments, approvals, and platform operations under your control.",
    features: [
      "Vendor registration and verification",
      "Individual storefronts and dashboards",
      "Flexible commission structures",
      "Automated split payments and payouts",
      "Reviews, ratings, and moderation tools",
      "Centralized marketplace management",
      "Scalable search and product discovery"
    ]
  },
  {
    id: "03",
    tab: "03 — Headless",
    heading: "03 — Headless Commerce Experiences",
    description: "Deliver faster shopping experiences without frontend limitations. Headless architecture gives your team greater freedom to improve, personalize, and expand the customer experience without rebuilding the entire commerce engine.",
    features: [
      "High-performance Next.js storefront",
      "Shopify, BigCommerce, or custom backend connectivity",
      "Search- and performance-focused architecture",
      "Reusable components for faster updates",
      "Web, mobile, kiosk, and omnichannel delivery",
      "Flexible content management integration"
    ]
  },
  {
    id: "04",
    tab: "04 — B2B",
    heading: "04 — B2B Commerce Platforms",
    description: "Make complex business purchasing feel simple. Move pricing, bulk orders, approvals, quotes, and account management online—while giving each customer an experience tailored to their commercial relationship.",
    features: [
      "Company accounts and buyer permissions",
      "Contract pricing and volume discounts",
      "Bulk ordering and quick reordering",
      "Configurable purchase approvals",
      "Credit terms and account limits",
      "Real-time ERP and inventory connectivity",
      "Quotes, RFQs, and negotiation workflows"
    ]
  },
  {
    id: "05",
    tab: "05 — Subscription",
    heading: "05 — Subscription Commerce",
    description: "Build predictable revenue while giving subscribers greater flexibility. Create a convenient subscription experience that makes it easier for customers to stay, manage their plans, and continue purchasing.",
    features: [
      "Flexible subscription plans and billing cycles",
      "Trials, discounts, pauses, and plan changes",
      "Failed-payment recovery workflows",
      "Subscriber self-service portal",
      "Churn, recurring revenue, and retention reporting",
      "Product swaps and box customization",
      "Stripe Billing, Recharge, or custom integrations"
    ]
  },
  {
    id: "06",
    tab: "06 — AI",
    heading: "06 — AI-Powered Shopping Experiences",
    description: "Help every customer find the right product faster. Use behavioral and commercial data to personalize discovery, improve engagement, and make smarter decisions across pricing, inventory, and retention.",
    features: [
      "Personalized product recommendations",
      "Intelligent search with natural-language understanding",
      "Dynamic categories and product collections",
      "Demand forecasting and inventory insights",
      "Data-driven pricing capabilities",
      "Personalized cart-recovery and win-back journeys",
      "Customer segmentation and value prediction"
    ]
  }
];

export default function EcomSolutions() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);

  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#F8FAFC] font-jakarta">
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[20px] font-bold tracking-wide">
              Solutions We Build
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-navy max-w-3xl">
            eCommerce Solutions Built Around Your Growth Model
          </h2>
          <p className="text-base md:text-lg text-grey font-medium max-w-3xl mx-auto">
            Whether you sell directly to consumers, manage multiple vendors, serve business buyers, or generate recurring revenue, your platform should support how your business actually works.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {solutions.map((sol) => (
            <button
              key={sol.id}
              onClick={() => setActiveTab(sol.id)}
              className={`px-5 py-3 rounded-full font-bold transition-all duration-300 text-sm md:text-base border ${
                activeTab === sol.id
                  ? "bg-navy text-white border-navy shadow-md"
                  : "bg-white text-grey border-gray-200 hover:border-navy/30 hover:text-navy"
              }`}
            >
              {sol.tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
          <AnimatePresence mode="wait">
            {solutions.map((sol) =>
              sol.id === activeTab ? (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 md:p-12 lg:p-16 flex flex-col"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                    {sol.heading}
                  </h3>
                  <p className="text-grey font-medium text-lg leading-relaxed mb-8 max-w-4xl">
                    {sol.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-navy font-bold text-lg">What you get</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {sol.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-[#F8FAFC] p-4 rounded-xl border border-gray-100">
                        <div className="w-2 h-2 rounded-full bg-green shrink-0 mt-1.5" />
                        <span className="text-dark font-medium text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
