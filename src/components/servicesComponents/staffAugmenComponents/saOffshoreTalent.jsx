"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const roles = [
  "Full-Stack Developers",
  "Front-End Developers",
  "Back-End Developers",
  "Mobile App Developers",
  "Software Engineers",
  "AI & Machine Learning Engineers",
  "Data Scientists",
  "UI/UX Designers",
  "QA Engineers",
  "Automation Test Engineers",
  "DevOps Engineers",
  "Cloud Engineers",
  "Solution Architects",
  "Technical Leads",
  "Project Managers",
  "Business Analysts",
  "Database Developers",
  "Cybersecurity Engineers",
  "Integration Specialists",
  "Release Engineers",
];

export default function SaOffShoreTalent() {
  return (
    <section className="bg-white py-20 lg:py-28 font-jakarta relative overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left — sticky info */}
          <div className="lg:w-1/3 lg:sticky lg:top-28">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
              <span className="text-[#0CBF83] text-[18px] font-bold tracking-wide">
                Talent Pool
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#161616] leading-tight mb-6">
              Offshore Talent That Fits Into Your Existing Team
            </h2>
            <p className="text-[16px] md:text-[17px] text-gray-600 leading-relaxed mb-8">
              From individual specialists to complete development teams, Softmind
              can help you augment your workforce across a wide range of
              technical roles.
            </p>
            <div className="bg-[#00235A] text-white p-6 rounded-2xl mb-6">
              <p className="text-[15px] text-white/80 mb-4">
                Need a specific skill set?
              </p>
              <p className="text-[17px] font-bold text-white mb-5">
                Let&apos;s build the team around your requirements.
              </p>
              <Link href="/contact-us">
                <button className="flex items-center gap-2 bg-[#0CBF83] text-white px-6 py-3 rounded-xl font-bold text-[15px] hover:bg-[#0aa671] transition-colors duration-300 cursor-pointer">
                  Talk to Us
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right — roles grid */}
          <div className="lg:w-2/3">
            <p className="text-[15px] font-bold text-[#00235A] uppercase tracking-widest mb-6">
              Our talent pool includes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="flex items-center gap-3 bg-[#F8F9FA] border border-gray-100 p-4 rounded-2xl hover:bg-white hover:shadow-md hover:border-[#0CBF83]/20 transition-all duration-300 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0CBF83] shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[15px] font-semibold text-[#161616]">
                    {role}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
