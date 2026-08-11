"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Rocket,
  Users,
  Database,
  UserCheck,
  ShoppingBag,
  Sparkles,
  BarChart3,
  CheckCircle,
} from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "Enterprise Applications",
    description:
      "Digitize complex business operations with secure enterprise applications that improve collaboration, automate workflows, and provide real-time visibility across departments.",
    highlights: ["Workflow Automation", "Cross-department Sync", "Role-based Access"],
  },
  {
    icon: Rocket,
    title: "SaaS Product Development",
    description:
      "Launch scalable SaaS platforms with subscription management, multi-tenant architecture, secure infrastructure, and room to grow as your customer base expands.",
    highlights: ["Multi-Tenant Architecture", "Billing Integrations", "High Scalability"],
  },
  {
    icon: Users,
    title: "Customer & Employee Portals",
    description:
      "Create secure self-service portals that improve communication, simplify workflows, and provide users with personalized access to the information they need.",
    highlights: ["Self-service Workflows", "Secure Authentication", "Personalized Portals"],
  },
  {
    icon: Database,
    title: "ERP Solutions",
    description:
      "Unify finance, inventory, HR, procurement, and operations into a single platform that improves efficiency and enables better decision-making.",
    highlights: ["Financial Integration", "Inventory Control", "Operational Efficiency"],
  },
  {
    icon: UserCheck,
    title: "CRM Development",
    description:
      "Build CRM systems tailored to your sales process that help teams manage relationships, automate follow-ups, and increase customer retention.",
    highlights: ["Pipeline Tracking", "Automated Follow-ups", "Customer Insights"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Platforms",
    description:
      "Develop high-performing online stores and marketplaces with secure payments, personalized shopping experiences, and scalable architecture.",
    highlights: ["Custom Checkout", "Marketplace Engine", "Omnichannel Ready"],
  },
  {
    icon: Sparkles,
    title: "AI Business Applications",
    description:
      "Integrate AI capabilities into your software to automate support, generate content, analyze business data, and improve operational efficiency.",
    highlights: ["LLM Agents", "Predictive Analytics", "Document Intelligence"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence Dashboards",
    description:
      "Turn raw business data into interactive dashboards that help executives monitor KPIs, identify trends, and make faster, data-driven decisions.",
    highlights: ["Real-time Metrics", "Interactive Charts", "Executive Reports"],
  },
];

export default function CustomSoftwareSolutions() {
  return (
    <section className="relative w-full bg-white text-[#00235A] py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#004BC0]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0CBF83]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[860px] mx-auto">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-gray-200 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#00235A] text-xs font-bold uppercase tracking-widest">
              Tailored Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-extrabold tracking-tight text-[#00235A]">
            Custom Software Solutions Built Around Your Business
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 font-medium leading-[26px]">
            Every organization has unique processes, customers, and growth objectives. That&apos;s why we develop software designed specifically for the way your business operates—not the other way around.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group relative bg-[#F8FAFC] hover:bg-white border border-gray-100 hover:border-[#0CBF83]/40 rounded-[24px] p-7 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#0CBF83] group-hover:bg-[#00235A] group-hover:text-white transition-colors duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#00235A] mb-3 group-hover:text-[#004BC0] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-[22px] font-medium mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2 border-t border-gray-200/60 pt-4">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center text-xs font-semibold text-gray-500 gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0CBF83] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
