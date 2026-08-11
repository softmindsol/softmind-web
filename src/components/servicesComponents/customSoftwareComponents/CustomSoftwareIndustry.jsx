"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  BookOpen,
  CreditCard,
  Building,
  ShoppingBag,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const industries = [
  {
    id: "healthcare",
    name: "Healthcare & Fitness",
    icon: Activity,
    title: "Healthcare & Fitness Software Solutions",
    description:
      "Build secure, user-centric digital solutions that improve patient care, streamline healthcare operations, and create engaging fitness experiences. From telemedicine platforms to wellness apps, we help organizations deliver better outcomes through technology.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Telemedicine & EHR Integration",
      "HIPAA-Compliant Architecture",
      "Patient Portals & Wearable Sync",
    ],
  },
  {
    id: "edtech",
    name: "EdTech",
    icon: BookOpen,
    title: "Educational Technology Platforms",
    description:
      "Create scalable learning platforms that make education more accessible, interactive, and personalized. We develop custom EdTech solutions that enhance learner engagement, simplify administration, and support lifelong learning.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Learning Management Systems (LMS)",
      "Interactive Virtual Classrooms",
      "AI Adaptive Learning Paths",
    ],
  },
  {
    id: "fintech",
    name: "FinTech",
    icon: CreditCard,
    title: "Financial Technology Solutions",
    description:
      "Develop secure, compliant financial software that simplifies transactions, automates financial processes, and builds customer trust. Our FinTech solutions help businesses innovate while meeting the highest standards of security and performance.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Payment Gateway Integrations",
      "Robo-Advisory & Wealth Portals",
      "Bank-Grade Data Encryption",
    ],
  },
  {
    id: "proptech",
    name: "PropTech",
    icon: Building,
    title: "Property & Real Estate Platforms",
    description:
      "Transform real estate operations with intelligent digital solutions for property management, leasing, sales, and tenant engagement. We build scalable PropTech platforms that improve efficiency and deliver seamless user experiences.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Property Management Systems",
      "Tenant & Owner Dashboards",
      "Smart Listing Marketplaces",
    ],
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    icon: ShoppingBag,
    title: "Digital Commerce & Marketplaces",
    description:
      "Launch high-performing ecommerce platforms that deliver frictionless shopping experiences and drive business growth. From custom storefronts to marketplace solutions, we help brands increase conversions, customer loyalty, and operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      "Headless E-Commerce Architecture",
      "Multi-Vendor Marketplace Engines",
      "Personalized Recommendation Engines",
    ],
  },
];

export default function CustomSoftwareIndustry() {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const activeContent = industries.find((ind) => ind.id === activeTab);

  return (
    <section className="relative w-full bg-[#161616] text-white py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[150px]"
        style={{ backgroundColor: "#004BC0" }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[860px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Industry Specialization
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-white">
            Custom Software Solutions Built for Your Industry
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/80 font-medium leading-[26px]">
            Every industry faces unique operational challenges, regulatory requirements, and customer expectations. Softmind Solutions develops industry-specific software that solves real business problems, accelerates digital transformation, and creates exceptional user experiences.
          </p>
        </div>

        {/* Sidebar + Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Tabs Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isActive = activeTab === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`flex items-center gap-4 w-full px-6 py-4.5 rounded-[20px] text-left transition-all duration-300 font-bold text-base md:text-lg border ${
                    isActive
                      ? "bg-gradient-to-r from-[#00235A] to-[#004BC0] text-white border-[#0CBF83]/50 shadow-[0_8px_30px_rgba(12,191,131,0.2)] translate-x-2"
                      : "bg-white/[0.03] hover:bg-white/[0.08] text-white/70 border-white/10"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-[#0CBF83] text-[#161616]" : "bg-white/10 text-white/80"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Content Display Card */}
          <div className="w-full lg:w-2/3 bg-white/[0.04] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl backdrop-blur-md flex flex-col justify-between overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeContent.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between gap-8"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {activeContent.title}
                  </h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 font-normal">
                    {activeContent.description}
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4 mb-6">
                    {activeContent.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-sm font-semibold text-white/90">
                        <CheckCircle className="w-4 h-4 text-[#0CBF83] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative w-full h-64 md:h-72 rounded-[20px] overflow-hidden group border border-white/10">
                  <img
                    src={activeContent.image}
                    alt={activeContent.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/80 via-transparent to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
