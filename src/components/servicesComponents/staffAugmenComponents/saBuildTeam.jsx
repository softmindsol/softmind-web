"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const processSteps = [
  {
    num: "01",
    title: "Understand Your Requirements",
    description:
      "We start by understanding your business objectives, project scope, technology stack, timelines, team structure, and the skills you need.",
  },
  {
    num: "02",
    title: "Identify the Right Talent",
    description:
      "We match your requirements with professionals whose technical expertise, experience, and working style fit your project and team.",
  },
  {
    num: "03",
    title: "Integrate With Your Team",
    description:
      "Your selected resources become part of your existing workflows, communication channels, development processes, and project environment.",
  },
  {
    num: "04",
    title: "Scale as You Grow",
    description:
      "As your requirements change, you can add new expertise, increase capacity, or adjust team size without going through another lengthy hiring cycle.",
  },
];

export default function SaBuildTeam() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className="bg-gray-200 w-full py-18 lg:py-24 font-jakarta overflow-hidden"
      ref={containerRef}
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-wide">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#161616] leading-tight mb-6">
            Build Your Offshore Team Without Building It From Scratch
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
            Your project shouldn&apos;t have to wait for the right people to
            become available. We help you find the right talent so you can focus
            on building your product rather than managing recruitment
            challenges.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 md:-translate-x-1/2 rounded-full hidden sm:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-[#0CBF83] rounded-full origin-top"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-0 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`w-full sm:w-1/2 ${
                      isEven
                        ? "sm:pl-12 lg:pl-20 text-left"
                        : "sm:pr-12 lg:pr-20"
                    }`}
                  >
                    <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0CBF83]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        <span className="text-[#0CBF83] text-5xl font-black opacity-50 block mb-4">
                          {step.num}
                        </span>
                        <h3 className="text-2xl font-bold text-[#161616] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[15px] text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Center node */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-gray-100 items-center justify-center z-20 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#00235A] flex items-center justify-center text-white font-bold text-sm">
                      {step.num}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
