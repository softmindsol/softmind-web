"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Scaling,
  ShieldCheck,
  Smile,
  Cpu,
  Handshake,
} from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Business-First Development",
    description:
      "We look beyond technical requirements to understand your business model, users, workflows, and growth objectives. This helps us build applications that solve real problems not just deliver features.",
  },
  {
    icon: Scaling,
    title: "Scalable Architecture",
    description:
      "Build with the future in mind. We design flexible architectures that can accommodate growing users, increasing data volumes, new features, and evolving business requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description:
      "Security is integrated throughout the development lifecycle. We follow industry best practices to protect application data, user access, integrations, and critical business information.",
  },
  {
    icon: Smile,
    title: "Better User Experiences",
    description:
      "Powerful functionality should never come at the expense of usability. Our development approach combines robust engineering with intuitive interfaces that make complex applications easier to use.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "We use modern frameworks, development practices, APIs, cloud technologies, and third-party integrations to create high-performing applications that are easier to maintain and evolve.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "Our relationship doesn't end when your application goes live. From maintenance and optimization to new features and scaling, we provide the ongoing support your application needs to grow with your business.",
  },
];

export default function WebAppWhyChoose() {
  return (
    <section className="relative w-full bg-white text-black py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-[-150px] w-[550px] h-[550px] rounded-full pointer-events-none opacity-20 blur-[160px]"
        style={{ backgroundColor: "#0CBF83" }}
      />
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none opacity-10 blur-[120px]"
        style={{ backgroundColor: "#004BC0" }}
      />

      <div className="relative w-full mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Why Choose Softmind for Web App Development?
            </span>
          </div>
          <h2 className="max-w-[750px] text-3xl sm:text-4xl lg:text-[44px] lg:leading-[60px] font-bold tracking-[0.5px] text-dark">
            Web Applications Built{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Around Your Business
            </span>
          </h2>
          <p className="max-w-[870px] text-[16px] md:text-[18px] text-grey font-medium leading-[26px]">
            Every business has different users, workflows, challenges, and
            growth objectives. Instead of forcing your requirements into an
            off-the-shelf solution, Softmind develops web applications around
            the way your business actually operates.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/[0.03] hover:bg-white/[0.07] border border-black/10 hover:border-[#0CBF83]/40 rounded-[24px] p-7 transition-all duration-300 shadow-lg hover:-translate-y-1 flex flex-col"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00235A] to-[#004BC0] flex items-center justify-center text-[#0CBF83] mb-6 border border-white/10">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-grey text-sm leading-[22px] font-normal">
                    {pillar.description}
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
