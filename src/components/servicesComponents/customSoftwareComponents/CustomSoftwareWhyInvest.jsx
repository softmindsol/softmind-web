"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  Zap,
  Smile,
  Network,
  ShieldCheck,
  Award,
  Layers,
  ArrowRight,
} from "lucide-react";
import CustomButton from "@/components/customs/customButton";

const points = [
  {
    icon: TrendingUp,
    title: "Reduce Operational Costs",
    desc: "Reduce operational costs through intelligent workflow automation.",
  },
  {
    icon: Zap,
    title: "Eliminate Manual Workflows",
    desc: "Eliminate manual and repetitive workflows to free up team capacity.",
  },
  {
    icon: Smile,
    title: "Improve User Experiences",
    desc: "Improve both customer and employee experiences with bespoke interfaces.",
  },
  {
    icon: Network,
    title: "Connect Disconnected Systems",
    desc: "Connect disconnected business systems with real-time API integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Tech Ownership",
    desc: "Gain complete IP and source code ownership of your core technology.",
  },
  {
    icon: Layers,
    title: "Scale Without Constraints",
    desc: "Scale without the rigid license limitations of off-the-shelf software.",
  },
  {
    icon: ShieldCheck,
    title: "Strengthen Compliance & Security",
    desc: "Strengthen data security, auditability, and regulatory compliance.",
  },
  {
    icon: Award,
    title: "Build Competitive Advantage",
    desc: "Build a unique, proprietary technology asset for market leadership.",
  },
];

export default function CustomSoftwareWhyInvest() {
  return (
    <section className="relative w-full bg-white text-[#00235A] py-20 lg:py-24 font-jakarta overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#0CBF83]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[860px] mx-auto">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-gray-200 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#00235A] text-xs font-bold uppercase tracking-widest">
              Business Value
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-extrabold tracking-tight text-[#00235A]">
            Why Invest in Custom Software?
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 font-medium leading-[26px]">
            Off-the-shelf software forces your organization to compromise.
            Tailored software engineered for your precise business model yields
            long-term ROI, agility, and independence.
          </p>
        </div>

        {/* 8 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="bg-[#F8FAFC] hover:bg-white border border-gray-100 hover:border-[#0CBF83]/40 rounded-[24px] p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#0CBF83] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#00235A] mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
                    {pt.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final CTA Banner */}
        <div className="bg-gradient-to-r from-[#00235A] via-[#004BC0] to-[#00235A] rounded-[36px] p-8 lg:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0CBF83]/20 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-bold uppercase tracking-widest text-[#0CBF83] bg-[#0CBF83]/10 px-4 py-1.5 rounded-full border border-[#0CBF83]/30 mb-4">
            Next Step
          </span>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold max-w-[700px] mb-4 leading-tight">
            Ready to Build Software That Moves Your Business Forward?
          </h3>

          <p className="text-white/80 text-base md:text-lg max-w-[600px] mb-8 font-medium">
            Schedule a free discovery call with our senior software architects
            to discuss your technical requirements and product roadmap.
          </p>

          <Link href="/contact">
            <CustomButton btnText="Schedule a Free Discovery Call" />
          </Link>
        </div>
      </div>
    </section>
  );
}
