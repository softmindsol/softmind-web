"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Globe,
  Smartphone,
  Building2,
  Cpu,
  PenTool,
  RefreshCw,
  Cloud,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import CustomButton from "@/components/customs/customButton";

const services = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Software Development",
    description:
      "Build intelligent applications that automate repetitive work, generate insights, improve decision-making, and create better customer experiences using AI, machine learning, and generative AI technologies.",
    tag: "AI & Automation",
  },
  {
    icon: Globe,
    title: "Custom Web Application Development",
    description:
      "Develop secure, high-performance web applications that streamline operations, improve productivity, and deliver seamless experiences across every browser and device.",
    tag: "Web Solutions",
  },
  {
    icon: Smartphone,
    title: "Custom Mobile App Development",
    description:
      "Create intuitive iOS and Android applications that keep customers engaged, empower employees, and extend your business beyond the desktop.",
    tag: "iOS & Android",
  },
  {
    icon: Building2,
    title: "Enterprise Software Development",
    description:
      "Replace disconnected tools with enterprise-grade software that centralizes operations, improves collaboration, and supports business growth.",
    tag: "Enterprise",
  },
  {
    icon: Cpu,
    title: "API Development & System Integration",
    description:
      "Connect your CRM, ERP, payment gateways, cloud platforms, and third-party applications to create a unified technology ecosystem with real-time data synchronization.",
    tag: "Integration & APIs",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Design intuitive digital experiences that reduce learning curves, improve user adoption, and increase customer satisfaction.",
    tag: "Design System",
  },
  {
    icon: RefreshCw,
    title: "Legacy Software Modernization",
    description:
      "Transform outdated systems into modern cloud-native applications with improved performance, security, and scalability without disrupting business operations.",
    tag: "Modernization",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Solutions",
    description:
      "Accelerate software delivery, improve system reliability, and reduce infrastructure costs with cloud-native architecture and DevOps best practices.",
    tag: "Cloud Architecture",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance & Software Testing",
    description:
      "Deliver reliable software with automated and manual testing that identifies issues early, reduces deployment risks, and ensures exceptional user experiences.",
    tag: "QA & Testing",
  },
];

export default function CustomSoftwareServices() {
  return (
    <section className="relative w-full bg-[#161616] text-white py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-30 blur-[100px]"
        style={{ backgroundColor: "#004BC0" }}
      />
      <div
        className="absolute bottom-10 right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[140px]"
        style={{ backgroundColor: "#0CBF83" }}
      />

      <div className="relative w-full mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[870px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-white">
            Custom Software Development Services That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Drive Business Growth
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/80 font-medium leading-[26px]">
            Whether you&apos;re building a new digital product, modernizing
            legacy systems, or automating complex workflows, our engineering
            team delivers software that creates measurable business value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-[#ffffff05] hover:bg-[#ffffff0a] border border-white/[0.06] hover:border-[#0CBF83]/40 rounded-[20px] p-6 transition-all duration-500 flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(12,191,131,0.12)] hover:-translate-y-2 overflow-hidden"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0CBF83]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5 gap-3">
                    <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-[#00235A] to-[#004BC0] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 border border-white/10 shadow-inner">
                      <Icon className="w-[22px] h-[22px] stroke-[1.5]" />
                    </div>
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-[#0CBF83] bg-[#0CBF83]/10 px-2.5 py-1 rounded-full border border-[#0CBF83]/20">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-[18px] md:text-[20px] font-bold text-white/90 mb-3 group-hover:text-[#0CBF83] transition-colors duration-300 leading-snug">
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

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center flex flex-col items-center">
          <Link href="/contact-us">
            <CustomButton btnText="Start Your Software Project" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
