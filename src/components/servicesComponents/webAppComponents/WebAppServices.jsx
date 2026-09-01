"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Laptop,
  Cloud,
  Building2,
  Users,
  AppWindow,
  LineChart,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import CustomButton from "@/components/customs/customButton";

const services = [
  {
    icon: Laptop,
    title: "Custom Web Application Development",
    description:
      "Get a web application built around your workflows, users, and business objectives. We develop tailored solutions that eliminate unnecessary complexity, automate processes, and give you the flexibility to evolve your application as your business grows.",
    tag: "Core Service",
  },
  {
    icon: Cloud,
    title: "SaaS Web Application Development",
    description:
      "Launch scalable SaaS products designed for recurring revenue and long-term growth. We build secure, multi-user SaaS platforms with subscription management, role-based access, integrations, analytics, and cloud-ready architectures.",
    tag: "SaaS Platforms",
  },
  {
    icon: Building2,
    title: "Enterprise Web Application Development",
    description:
      "Modernize complex business operations with powerful enterprise web applications. From internal platforms to workflow automation systems, we develop secure and scalable solutions that connect teams, data, and business processes.",
    tag: "Enterprise",
  },
  {
    icon: Users,
    title: "Web Portal Development",
    description:
      "Create centralized digital experiences for customers, employees, partners, or vendors. Our custom portals simplify information access, automate interactions, and provide users with secure, role-based experiences.",
    tag: "Portals",
  },
  {
    icon: AppWindow,
    title: "Progressive Web App Development",
    description:
      "Deliver fast, engaging, app-like experiences directly through the browser. Progressive web applications combine web accessibility with mobile-friendly performance, helping businesses reach users across devices without requiring separate applications.",
    tag: "PWA",
  },
  {
    icon: LineChart,
    title: "Dashboard & Analytics Applications",
    description:
      "Turn business data into actionable insights with interactive dashboards and analytics applications. We build intuitive interfaces that help teams monitor KPIs, identify trends, track performance, and make faster, data-driven decisions.",
    tag: "Data & Insights",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Web Application Development",
    description:
      "Build secure, conversion-focused eCommerce applications that make buying easier and business operations more efficient. We develop custom storefronts, payment integrations, inventory systems, customer portals, and other essential commerce capabilities.",
    tag: "eCommerce",
  },
  {
    icon: Wrench,
    title: "Web App Maintenance & Support",
    description:
      "Keep your application secure, stable, and optimized long after launch. Our ongoing maintenance and support services help identify issues early, improve performance, implement enhancements, and ensure your web application continues to deliver value.",
    tag: "Maintenance",
  },
];

export default function WebAppServices() {
  return (
    <section className="relative w-full bg-[#161616] text-white py-18 lg:py-24 font-jakarta overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-30 blur-[100px]"
        style={{ backgroundColor: "#004BC0" }}
      />
      <div
        className="absolute bottom-10 left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[140px]"
        style={{ backgroundColor: "#0CBF83" }}
      />

      <div className="relative w-full mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[870px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Custom Web App Development Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-white">
            End-to-End Web Application{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Development Services
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/80 font-medium leading-[26px]">
            From customer-facing platforms to complex enterprise systems, we
            build web applications that combine intuitive experiences with
            powerful functionality. Our end-to-end web application development
            services help businesses transform ideas into reliable digital
            products that are built to scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-[#ffffff05] hover:bg-[#ffffff0a] border border-white/[0.06] hover:border-[#0CBF83]/40 rounded-[20px] p-6 lg:p-8 transition-all duration-500 flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(12,191,131,0.12)] hover:-translate-y-2 overflow-hidden"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0CBF83]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5 gap-3">
                    <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#00235A] to-[#004BC0] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 border border-white/10 shadow-inner">
                      <Icon className="w-[22px] h-[22px] stroke-[1.5]" />
                    </div>
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-[#0CBF83] bg-[#0CBF83]/10 px-2.5 py-1 rounded-full border border-[#0CBF83]/20 whitespace-nowrap">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-white/90 mb-3 group-hover:text-[#0CBF83] transition-colors duration-300 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-white/60 text-[14px] leading-[22px] font-medium group-hover:text-white/70 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
