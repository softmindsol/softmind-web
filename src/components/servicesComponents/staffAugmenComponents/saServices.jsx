"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Palette,
  TestTube2,
  Server,
  BrainCircuit,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "software-dev",
    title: "Software Development",
    icon: <Code2 className="w-7 h-7" />,
    subtitle: "Extend Your Engineering Team",
    description:
      "Strengthen your development capacity with experienced front-end, back-end, full-stack, and mobile developers who can integrate directly into your existing engineering team.",
    features: [
      "Front-End Developers",
      "Back-End Developers",
      "Full-Stack Developers",
      "Mobile App Developers (iOS & Android)",
      "React & Next.js Engineers",
      "Node.js & Python Developers",
      "React Native & Flutter Developers",
      "API & Integration Developers",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: <Palette className="w-7 h-7" />,
    subtitle: "Elevate Your Product Experience",
    description:
      "Bring experienced designers into your product team to improve user journeys, interfaces, prototypes, and overall digital experiences.",
    features: [
      "UI/UX Designers",
      "Product Designers",
      "Visual Designers",
      "UX Researchers",
      "Prototyping Specialists",
      "Figma & Design System Experts",
      "Mobile UI Designers",
      "Design-to-Development Handoff",
    ],
  },
  {
    id: "qa",
    title: "Quality Assurance",
    icon: <TestTube2 className="w-7 h-7" />,
    subtitle: "Maintain High Product Quality",
    description:
      "Expand your QA capabilities with manual and automation testing professionals who help identify issues early and maintain product quality throughout development.",
    features: [
      "Manual QA Engineers",
      "Automation Test Engineers",
      "Performance Testing Specialists",
      "API Testing Experts",
      "Selenium & Cypress Engineers",
      "Mobile App Testers",
      "Security QA Engineers",
      "QA Lead & Strategy",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: <Server className="w-7 h-7" />,
    subtitle: "Streamline Infrastructure & Delivery",
    description:
      "Add DevOps and cloud expertise to improve deployment processes, infrastructure, automation, scalability, and application reliability.",
    features: [
      "DevOps Engineers",
      "Cloud Engineers (AWS, GCP, Azure)",
      "Site Reliability Engineers",
      "CI/CD Pipeline Specialists",
      "Infrastructure as Code Experts",
      "Kubernetes & Docker Engineers",
      "Cloud Architects",
      "Release Engineers",
    ],
  },
  {
    id: "data-ai",
    title: "Data & AI",
    icon: <BrainCircuit className="w-7 h-7" />,
    subtitle: "Build Intelligent Data Capabilities",
    description:
      "Access developers, data professionals, and AI specialists to help you build intelligent applications, automate workflows, and turn business data into actionable insights.",
    features: [
      "Data Scientists",
      "AI/ML Engineers",
      "Data Engineers",
      "Data Analysts",
      "NLP Specialists",
      "Computer Vision Engineers",
      "Business Intelligence Developers",
      "LLM & GenAI Integration Experts",
    ],
  },
  {
    id: "leadership",
    title: "Project & Technical Leadership",
    icon: <Users className="w-7 h-7" />,
    subtitle: "Drive Delivery and Technical Excellence",
    description:
      "Strengthen your delivery capabilities with experienced technical leads, project managers, business analysts, and architects who can help keep complex initiatives moving forward.",
    features: [
      "Technical Leads",
      "Solution Architects",
      "Project Managers",
      "Business Analysts",
      "Scrum Masters",
      "Engineering Managers",
      "Product Owners",
      "CTO-as-a-Service",
    ],
  },
];

export default function SaServices() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeTab);

  return (
    <section className="bg-white py-20 lg:py-28 font-jakarta relative overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#161616] leading-tight mb-6">
            Offshore Staff Augmentation Services Built Around Your Needs
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
            Softmind helps you build the right combination of expertise for your
            project, whether you need one specialist or an entire offshore
            development team.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Tabs */}
          <div className="flex flex-col gap-3 lg:w-[340px] shrink-0">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 border ${
                  activeTab === service.id
                    ? "bg-[#00235A] border-[#00235A] shadow-[0_8px_25px_rgba(0,35,90,0.2)]"
                    : "bg-[#F8F9FA] border-gray-100 hover:bg-gray-100 hover:border-gray-200"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeTab === service.id
                      ? "bg-[#0CBF83] text-white"
                      : "bg-white text-[#00235A] shadow-sm"
                  }`}
                >
                  {service.icon}
                </div>
                <span
                  className={`text-[16px] font-bold transition-colors ${
                    activeTab === service.id ? "text-white" : "text-[#161616]"
                  }`}
                >
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="flex-1 bg-[#F8F9FA] border border-gray-100 rounded-3xl p-8 lg:p-12 min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#00235A] flex items-center justify-center text-[#0CBF83]">
                    {activeService.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#161616]">
                    {activeService.subtitle}
                  </h3>
                </div>

                <p className="text-[16px] md:text-[17px] text-gray-600 leading-relaxed mb-8">
                  {activeService.description}
                </p>

                <div>
                  <h4 className="text-[17px] font-bold text-[#00235A] mb-5 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#0CBF83]" />
                    Roles available:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {activeService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0CBF83] shrink-0" />
                        <span className="text-[15px] text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
