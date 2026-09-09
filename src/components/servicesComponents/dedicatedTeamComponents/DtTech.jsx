"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Smartphone,
  Cloud,
  Bot,
  Database,
} from "lucide-react";

const techAreas = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "React, Next.js, Angular, Vue.js and modern JavaScript frameworks.",
    color: "#0CBF83",
    gradient: "from-[#0CBF83] to-[#00b87a]",
    tags: ["React.js", "Next.js", "Astro", "Angular", "Vue.js"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Node.js, Python, .NET, Java and scalable backend architectures.",
    color: "#004BC0",
    gradient: "from-[#004BC0] to-[#0038FF]",
    tags: [
      "Node.js",
      "Python",
      "Django",
      "FastAPI",
      "Nest.js",
      "Supabase",
      "Firebase",
      "Flash",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter, iOS and Android development.",
    color: "#6366f1",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
    tags: [
      "React Native",
      "Expo",
      "Swift",
      "Kotlin",
      "Flutter",
      "iOS",
      "Android",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, Google Cloud, Docker, CI/CD and cloud-native infrastructure.",
    color: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#ef4444]",
    tags: ["AWS", "Azure", "Docker", "CI/CD", "Railway", "Vercel"],
  },
  {
    icon: Bot,
    title: "AI & Machine Learning",
    description:
      "Generative AI, AI APIs, intelligent automation, machine learning, and data-driven applications.",
    color: "#14b8a6",
    gradient: "from-[#14b8a6] to-[#0ea5e9]",
    tags: ["Gen AI", "ML", "AI APIs", "Automation"],
  },
  {
    icon: Database,
    title: "Databases",
    description:
      "PostgreSQL, MySQL, MongoDB, Redis and other modern database technologies.",
    color: "#ec4899",
    gradient: "from-[#ec4899] to-[#f43f5e]",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
];

export default function DtTech() {
  return (
    <section className="relative w-full bg-gray-50 py-20 lg:py-28 font-jakarta overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0CBF83]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004BC0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#004BC0]/10 border border-[#004BC0]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#004BC0]" />
            <span className="text-[#004BC0] text-sm font-semibold tracking-widest uppercase">
              Technology Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-[#2E2E2E] mb-5">
            Dedicated Development Expertise Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Modern Technologies
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#666666] leading-relaxed">
            Build your team around the technology your product requires.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techAreas.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-white border border-gray-100 rounded-3xl p-7 flex flex-col gap-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Top accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tech.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}
                />

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${tech.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3
                    className="text-xl font-bold text-[#2E2E2E] mb-2 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                    style={{}}
                  >
                    <span
                      className="group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${tech.color}, ${tech.color}aa)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "inherit",
                      }}
                    >
                      {tech.title}
                    </span>
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tech.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: tech.color + "12",
                        color: tech.color,
                        border: `1px solid ${tech.color}25`,
                      }}
                    >
                      {tag}
                    </span>
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
