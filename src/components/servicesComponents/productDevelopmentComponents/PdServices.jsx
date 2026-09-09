"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Code2,
  Cloud,
  Bot,
  RefreshCcw,
  Puzzle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Product Discovery & Strategy",
    tagline: "Build the right product before you build the product.",
    description:
      "Turn your idea into a clear, actionable product roadmap before investing heavily in development.",
    features: [
      "Product discovery workshops and requirements analysis",
      "Market and competitor research",
      "User and business requirement analysis",
      "Feature prioritization and MVP planning",
      "Product roadmap and technology strategy",
      "Development estimates and delivery milestones",
    ],
    gradient: "from-[#0CBF83] to-[#00b87a]",
    glowColor: "rgba(12,191,131,0.15)",
    accentColor: "#0CBF83",
  },
  {
    icon: Code2,
    title: "Custom Product Development",
    tagline:
      "Get a product designed around the way your business actually works.",
    description:
      "Create software tailored to your business processes, users, and competitive advantage—not a one-size-fits-all solution.",
    features: [
      "Custom web and mobile applications",
      "Enterprise software development",
      "Customer and employee-facing platforms",
      "Business process automation",
      "Third-party integrations",
      "Scalable backend and database architecture",
    ],
    gradient: "from-[#004BC0] to-[#0038FF]",
    glowColor: "rgba(0,75,192,0.15)",
    accentColor: "#004BC0",
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    tagline: "Build a SaaS product that can grow with every new customer.",
    description:
      "Launch and scale SaaS products with architecture designed for performance, security, and recurring growth.",
    features: [
      "Multi-tenant SaaS architecture",
      "Subscription and billing management",
      "Role-based access and administration",
      "Customer dashboards and portals",
      "API-first architecture",
      "Cloud-ready infrastructure",
      "Product analytics and usage tracking",
    ],
    gradient: "from-[#6366f1] to-[#8b5cf6]",
    glowColor: "rgba(99,102,241,0.15)",
    accentColor: "#6366f1",
  },
  {
    icon: Bot,
    title: "AI-Powered Product Development",
    tagline:
      "Use AI where it can improve efficiency, customer experience, and product value.",
    description:
      "Make AI a practical part of your product—not just a feature added for the sake of trends.",
    features: [
      "AI-powered automation",
      "Intelligent search and recommendations",
      "AI assistants and conversational interfaces",
      "Generative AI integrations",
      "Predictive analytics",
      "Intelligent workflows",
      "AI-powered personalization",
    ],
    gradient: "from-[#f59e0b] to-[#ef4444]",
    glowColor: "rgba(245,158,11,0.15)",
    accentColor: "#f59e0b",
  },
  {
    icon: RefreshCcw,
    title: "Product Modernization & Digital Revamp",
    tagline:
      "Modernize what you already have without losing the value you've built.",
    description:
      "Move beyond outdated systems with modern architecture, better user experiences, and technology built for future growth.",
    features: [
      "Legacy application modernization",
      "UI/UX redesign",
      "Cloud migration and optimization",
      "Architecture modernization",
      "API and system integration",
      "Performance optimization",
      "Technology stack upgrades",
    ],
    gradient: "from-[#ec4899] to-[#f43f5e]",
    glowColor: "rgba(236,72,153,0.15)",
    accentColor: "#ec4899",
  },
  {
    icon: Puzzle,
    title: "API & Integration Development",
    tagline:
      "Create a connected product ecosystem that is easier to extend and scale.",
    description:
      "Connect your product with the tools, platforms, and services your business depends on.",
    features: [
      "REST and API development",
      "Third-party integrations",
      "Payment gateway integrations",
      "CRM and ERP integrations",
      "Data synchronization",
      "Microservices architecture",
      "Secure authentication and authorization",
    ],
    gradient: "from-[#14b8a6] to-[#0ea5e9]",
    glowColor: "rgba(20,184,166,0.15)",
    accentColor: "#14b8a6",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function PdServices() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="relative w-full bg-gray-200 py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0CBF83]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#004BC0]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0CBF83]/10 border border-[#0CBF83]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_8px_#0CBF83]" />
            <span className="text-[#0CBF83] text-sm font-semibold tracking-widest uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-[#2E2E2E] mb-5">
            Product Development Services{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Built Around Your Business Goals
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#666666] leading-relaxed">
            Whether you're validating a new idea, launching an MVP, modernizing
            an existing application, or scaling a complex enterprise platform,
            our product development teams adapt to your goals, technology
            requirements, and growth plans.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative bg-white border border-gray-100 rounded-3xl p-7 lg:p-8 flex flex-col h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-default"
                style={{
                  boxShadow: isHovered
                    ? `0 20px 60px -10px ${service.glowColor}, 0 4px 24px rgba(0,0,0,0.06)`
                    : "0 4px 24px rgba(0,0,0,0.04)",
                }}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${service.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl lg:text-[22px] font-bold text-[#2E2E2E] mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text"
                  style={{
                    ...(isHovered && {
                      backgroundImage: `linear-gradient(to right, ${service.accentColor}, ${service.accentColor}cc)`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }),
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#666666] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="flex flex-col gap-2 flex-grow mb-6">
                  {service.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2.5 text-sm text-[#555555]"
                    >
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 shrink-0 transition-colors duration-300"
                        style={{ color: service.accentColor }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tagline */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold italic text-[#666666] group-hover:text-[#2E2E2E] transition-colors duration-300 flex items-center gap-2">
                    <ArrowRight
                      className="w-4 h-4 shrink-0"
                      style={{ color: service.accentColor }}
                    />
                    {service.tagline}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
