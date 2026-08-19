"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Bot, Sparkles, Search, FileText, LineChart, Workflow, UserCog, Activity } from "lucide-react";
import CustomButton from "@/components/customs/customButton";

const capabilities = [
  { icon: Bot, text: "AI-powered chatbots and virtual assistants" },
  { icon: Sparkles, text: "Generative AI and LLM integration" },
  { icon: Search, text: "Intelligent search and recommendations" },
  { icon: FileText, text: "AI-powered document and data processing" },
  { icon: LineChart, text: "Predictive analytics and forecasting" },
  { icon: Workflow, text: "Workflow and task automation" },
  { icon: UserCog, text: "Personalized user experiences" },
  { icon: Activity, text: "AI-powered analytics and decision support" },
];

export default function WebAppAi() {
  return (
    <section className="relative w-full bg-[#0D0D0D] text-white py-20 lg:py-28 font-jakarta overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-20 blur-[200px]" style={{ backgroundColor: "#0CBF83" }} />
      
      <div className="relative w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              AI-Powered Web App Development
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-white">
            Build Smarter Web Applications{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              With AI
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/80 font-medium leading-[26px]">
            Integrate AI into your web application to automate repetitive tasks, personalize user experiences, uncover actionable insights, and make smarter decisions.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <CustomButton btnText="Build Your AI-Powered Web Application" />
            </Link>
          </div>
        </div>

        {/* Right Grid */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00235A]/30 to-[#0CBF83]/10 border border-white/10 rounded-[32px] transform rotate-3" />
          <div className="bg-[#161616] border border-white/10 rounded-[32px] p-8 lg:p-10 shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Brain className="w-6 h-6 text-[#0CBF83]" />
              AI Capabilities We Integrate
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-[#0CBF83]/30 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[#0CBF83] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-white/80 leading-snug">
                      {cap.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
