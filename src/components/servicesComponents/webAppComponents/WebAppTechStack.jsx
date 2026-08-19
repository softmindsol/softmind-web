"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutTemplate, Server, Database, Cloud, Network } from "lucide-react";

const stack = [
  {
    id: "frontend",
    title: "Frontend",
    icon: LayoutTemplate,
    tech: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    tech: ["Node.js", ".NET", "Python", "Django", "Laravel", "PHP"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    tech: ["PostgreSQL", "MySQL", "MongoDB", "Microsoft SQL Server"],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: Cloud,
    tech: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "CI/CD"],
  },
  {
    id: "apis",
    title: "APIs & Integrations",
    icon: Network,
    tech: ["REST APIs", "GraphQL", "Third-party APIs", "Payment gateways", "CRM", "ERP", "Enterprise integrations"],
  },
];

export default function WebAppTechStack() {
  const [activeTab, setActiveTab] = useState(stack[0].id);

  return (
    <section className="relative w-full bg-[#111111] text-white py-20 lg:py-28 font-jakarta overflow-hidden">
      <div className="absolute top-1/2 left-[-150px] w-[500px] h-[500px] bg-[#004BC0]/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="relative w-full max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-[1px]">
              Technology Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-bold tracking-[0.5px] text-white">
            Powered by Modern{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Technologies
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/80 font-medium leading-[26px]">
            We select technologies based on your application's requirements, scalability goals, performance expectations, and long-term roadmap. Whether you're building an MVP, modernizing legacy software, or scaling an established platform, we'll help you choose the right technology.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {stack.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-gradient-to-r from-[#0CBF83]/10 to-transparent border-[#0CBF83]/40 text-white"
                      : "bg-[#ffffff03] border-white/5 text-white/60 hover:bg-[#ffffff08] hover:text-white"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? "text-[#0CBF83]" : "text-white/40"}`} />
                  <span className="text-lg font-bold">{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              {stack.map(
                (cat) =>
                  activeTab === cat.id && (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#161616] border border-white/10 rounded-[32px] p-8 lg:p-12 min-h-[350px] shadow-2xl relative overflow-hidden flex flex-col justify-center"
                    >
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0CBF83]/5 rounded-full blur-3xl pointer-events-none" />
                      <h3 className="text-2xl font-bold text-white mb-8">{cat.title} Technologies</h3>
                      <div className="flex flex-wrap gap-4">
                        {cat.tech.map((t, idx) => (
                          <div
                            key={idx}
                            className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white/90 text-[15px] font-medium hover:border-[#0CBF83]/50 hover:text-white transition-colors"
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
