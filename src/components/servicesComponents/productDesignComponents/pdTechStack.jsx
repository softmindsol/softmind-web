"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  LayoutTemplate,
  Bot,
  Code2,
  PenTool,
  Sparkles,
  Code,
  GitMerge,
  LayoutDashboard,
  BrainCircuit,
  Users,
} from "lucide-react";
import {
  SiFigma,
  SiBehance,
  SiDribbble,
  SiPinterest,
  SiEnvato,
  SiFramer,
  SiGoogle,
  SiAnthropic,
  SiGooglegemini,
  SiSlack,
  SiJira,
  SiNotion,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { StitchLogo } from "../../../../public/images";

const categories = [
  {
    title: "Design & Prototyping",
    icon: <PenTool className="w-5 h-5 text-purple-400" />,
    color: "from-purple-500/20 to-purple-500/5",
    border: "group-hover:border-purple-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    tools: [
      {
        name: "Figma",
        icon: <SiFigma className="w-8 h-8 drop-shadow-md" color="#F24E1E" />,
      },
      {
        name: "Photoshop",
        icon: (
          <DiPhotoshop className="w-9 h-9 drop-shadow-md" color="#31A8FF" />
        ),
      },
      {
        name: "Figjam",
        icon: <SiFigma className="w-8 h-8 drop-shadow-md" color="#A259FF" />,
      },
    ],
  },
  {
    title: "Research",
    icon: <LayoutDashboard className="w-5 h-5 text-blue-400" />,
    color: "from-blue-500/20 to-blue-500/5",
    border: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    tools: [
      {
        name: "Behance",
        icon: <SiBehance className="w-8 h-8 drop-shadow-md" color="#1769FF" />,
      },
      {
        name: "Dribbble",
        icon: <SiDribbble className="w-8 h-8 drop-shadow-md" color="#EA4C89" />,
      },
      {
        name: "Pinterest",
        icon: (
          <SiPinterest className="w-8 h-8 drop-shadow-md" color="#E60023" />
        ),
      },
      {
        name: "Themeforest",
        icon: <SiEnvato className="w-8 h-8 drop-shadow-md" color="#81B441" />,
      },
      {
        name: "Framer",
        icon: <SiFramer className="w-8 h-8 drop-shadow-md" color="#0055FF" />,
      },
      {
        name: "Mobbin",
        icon: <LayoutTemplate className="w-8 h-8 text-white/80" />,
      },
    ],
  },
  {
    title: "Handoff & Design System",
    icon: <BrainCircuit className="w-5 h-5 text-emerald-400" />,
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    tools: [
      {
        name: "Google AI",
        icon: <SiGoogle className="w-8 h-8 drop-shadow-md" color="#4285F4" />,
      },
      {
        name: "Claude Design",
        icon: (
          <SiAnthropic className="w-8 h-8 drop-shadow-md" color="#CC9B7A" />
        ),
      },
      {
        name: "Stitch",
        icon: <Image src={StitchLogo} alt="Stitch" width={32} height={32} />,
      },
      { name: "Grok", icon: <Bot className="w-8 h-8 text-white/80" /> },
      {
        name: "Gemini",
        icon: (
          <SiGooglegemini className="w-8 h-8 drop-shadow-md" color="#8E75B2" />
        ),
      },
      {
        name: "Figma Agent",
        icon: <SiFigma className="w-8 h-8 drop-shadow-md" color="#F24E1E" />,
      },
    ],
  },
  {
    title: "Product & Collaboration",
    icon: <Users className="w-5 h-5 text-orange-400" />,
    color: "from-orange-500/20 to-orange-500/5",
    border: "group-hover:border-orange-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    tools: [
      {
        name: "Slack",
        icon: <SiSlack className="w-8 h-8 drop-shadow-md" color="#4A154B" />,
      },
      {
        name: "Jira",
        icon: <SiJira className="w-8 h-8 drop-shadow-md" color="#0052CC" />,
      },
      {
        name: "Notion",
        icon: <SiNotion className="w-8 h-8 drop-shadow-md" color="#ffffff" />,
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const PdTechStack = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden flex justify-center"
    >
      {/* Background glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white/80">
              Technologies & Design Tools
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Modern Tools for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Smarter Product Design
            </span>
          </h2>
          <p className="text-lg text-white/60">
            We use industry-standard design and collaboration tools to create,
            test, document, and scale digital product experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-500 ${category.border} ${category.glow} overflow-hidden`}
            >
              {/* Subtle background gradient based on category color */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 shadow-xl">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white/90 tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-8" />

                <div className="grid grid-cols-3 gap-6">
                  {category.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-3 group/tool cursor-pointer"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/[0.02] border border-white/10 group-hover/tool:scale-110 group-hover/tool:bg-white/[0.08] group-hover/tool:border-white/20 group-hover/tool:shadow-lg transition-all duration-300">
                        {tool.icon}
                      </div>
                      <span className="text-xs font-medium text-white/50 group-hover/tool:text-white/90 transition-colors text-center">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PdTechStack;
