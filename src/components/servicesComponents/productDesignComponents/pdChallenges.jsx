"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowDownRight,
  RefreshCcw,
  Layers,
  ZapOff,
  Code2,
} from "lucide-react";
import Link from "next/link";

const challenges = [
  {
    title: "Low User Adoption",
    description:
      "We simplify complex experiences and create intuitive interfaces that help users reach value faster.",
    icon: <ArrowDownRight className="w-6 h-6 text-[#161616]" />,
  },
  {
    title: "High Drop-Off Rates",
    description:
      "We identify friction across user journeys and redesign critical interactions to improve completion rates.",
    icon: <AlertCircle className="w-6 h-6 text-[#161616]" />,
  },
  {
    title: "Outdated Product Interfaces",
    description:
      "We modernize legacy interfaces without losing the functionality users depend on.",
    icon: <RefreshCcw className="w-6 h-6 text-[#161616]" />,
  },
  {
    title: "Inconsistent User Experiences",
    description:
      "We establish reusable design patterns and systems that create consistency across your product.",
    icon: <Layers className="w-6 h-6 text-[#161616]" />,
  },
  {
    title: "Feature Overload",
    description:
      "We help prioritize user needs and simplify workflows so important functionality doesn't get buried.",
    icon: <ZapOff className="w-6 h-6 text-[#161616]" />,
  },
  {
    title: "Design-to-Development Gaps",
    description:
      "We provide structured, development-ready designs and documentation that make implementation smoother.",
    icon: <Code2 className="w-6 h-6 text-[#161616]" />,
  },
];

export default function Challenges() {
  return (
    <section className="bg-gray-200 py-18 lg:py-24 font-jakarta">
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <div className="flex flex-col items-center justify-center sticky top-24">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
                <span className="text-[#0CBF83] text-[18px] font-bold tracking-wide">
                  Problem Solving
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#161616] leading-tight mb-6">
                Design Challenges We Solve
              </h2>
              <p className="text-center text-[16px] md:text-[18px] text-grey leading-relaxed mb-8">
                Is your product struggling to connect with users? We identify
                and resolve the hidden friction points holding your product
                back.
              </p>
              <Link href="/contact-us">
                <button className="bg-[#161616] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0CBF83] transition-colors duration-300 cursor-pointer">
                  Let&apos;s Fix Your Product
                </button>
              </Link>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {challenges.map((challenge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-[#F1F3F5] rounded-xl flex items-center justify-center mb-6">
                    {challenge.icon}
                  </div>
                  <h3 className="text-[20px] font-bold text-[#161616] mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
