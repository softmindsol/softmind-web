"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const AiSaasWorkflow = () => {
  const containerRef = useRef(null);

  // Height of scroll section determines animation length
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Optional: add spring for smoother scrubbing if user scrolls fast
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Define strict animation phases [start, end] out of 1.0
  const p1 = [0.0, 0.15]; // Hub enters
  const p2 = [0.15, 0.3]; // Branch 1
  const p3 = [0.3, 0.45]; // Branch 2
  const p4 = [0.45, 0.6]; // Branch 3
  const p5 = [0.6, 0.75]; // Branch 4
  const p6 = [0.75, 0.9]; // Outcome
  const p7 = [0.9, 1.0]; // Feedback loop

  // Animations mapped from scroll progress

  // Hub
  const hubY = useTransform(smoothProgress, p1, [-100, 0]);
  const hubOpacity = useTransform(smoothProgress, p1, [0, 1]);
  const hubScale = useTransform(smoothProgress, p1, [0.8, 1]);

  // Branch 1 (Left top)
  const b1X = useTransform(smoothProgress, p2, [-100, 0]);
  const b1Opacity = useTransform(smoothProgress, p2, [0, 1]);
  const line1Len = useTransform(smoothProgress, p2, [0, 1]);

  // Branch 2 (Right top)
  const b2X = useTransform(smoothProgress, p3, [100, 0]);
  const b2Opacity = useTransform(smoothProgress, p3, [0, 1]);
  const line2Len = useTransform(smoothProgress, p3, [0, 1]);

  // Branch 3 (Left bottom)
  const b3X = useTransform(smoothProgress, p4, [-100, 0]);
  const b3Opacity = useTransform(smoothProgress, p4, [0, 1]);
  const line3Len = useTransform(smoothProgress, p4, [0, 1]);

  // Branch 4 (Right bottom)
  const b4X = useTransform(smoothProgress, p5, [100, 0]);
  const b4Opacity = useTransform(smoothProgress, p5, [0, 1]);
  const line4Len = useTransform(smoothProgress, p5, [0, 1]);

  // Outcome (Bottom center)
  const outY = useTransform(smoothProgress, p6, [100, 0]);
  const outOpacity = useTransform(smoothProgress, p6, [0, 1]);
  const outLineLen = useTransform(smoothProgress, p6, [0, 1]);

  // Feedback loop
  const loopLen = useTransform(smoothProgress, p7, [0, 1]);

  // Dynamic window sizing for SVG paths
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateDims = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, []);

  const cx = dimensions.width / 2;
  const cyHub = dimensions.height * 0.15;
  const cyRow1 = dimensions.height * 0.4;
  const cyRow2 = dimensions.height * 0.65;
  const cyOut = dimensions.height * 0.85;

  // Safe offsets for responsiveness
  const isMobile = dimensions.width < 768;
  const offset = isMobile ? dimensions.width * 0.35 : dimensions.width * 0.25;

  return (
    <section
      ref={containerRef}
      className="relative bg-black font-jakarta h-[600vh]"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00235A]/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0CBF83]/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Section Title */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center w-full z-40 px-4 pointer-events-none">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104deg,#00235A,#004BC0)]" />
            <span className="text-[#0CBF83] text-[12px] sm:text-[16px] font-bold tracking-[1px] uppercase">
              Prodigy Workflow
            </span>
          </div>
          <h2 className="text-[20px] sm:text-[32px] font-bold tracking-[1px] text-white">
            End-to-End AI SaaS
          </h2>
        </div>

        {/* SVG Canvas for Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <linearGradient
                id="line-grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0CBF83" />
                <stop offset="100%" stopColor="#004BC0" />
              </linearGradient>
            </defs>

            {/* Path 1: Hub to Branch 1 */}
            <motion.path
              d={`M ${cx} ${cyHub + 40} C ${cx} ${cyRow1}, ${cx - offset} ${cyHub + 40}, ${cx - offset} ${cyRow1 - 40}`}
              fill="none"
              stroke="url(#line-grad)"
              strokeWidth="2"
              style={{ pathLength: line1Len }}
              className="opacity-50"
            />

            {/* Path 2: Hub to Branch 2 */}
            <motion.path
              d={`M ${cx} ${cyHub + 40} C ${cx} ${cyRow1}, ${cx + offset} ${cyHub + 40}, ${cx + offset} ${cyRow1 - 40}`}
              fill="none"
              stroke="url(#line-grad)"
              strokeWidth="2"
              style={{ pathLength: line2Len }}
              className="opacity-50"
            />

            {/* Path 3: Branch 1 to Branch 3 */}
            <motion.path
              d={`M ${cx - offset} ${cyRow1 + 40} C ${cx - offset} ${cyRow2}, ${cx - offset} ${cyRow1 + 80}, ${cx - offset} ${cyRow2 - 40}`}
              fill="none"
              stroke="url(#line-grad)"
              strokeWidth="2"
              style={{ pathLength: line3Len }}
              className="opacity-50"
            />

            {/* Path 4: Branch 2 to Branch 4 */}
            <motion.path
              d={`M ${cx + offset} ${cyRow1 + 40} C ${cx + offset} ${cyRow2}, ${cx + offset} ${cyRow1 + 80}, ${cx + offset} ${cyRow2 - 40}`}
              fill="none"
              stroke="url(#line-grad)"
              strokeWidth="2"
              style={{ pathLength: line4Len }}
              className="opacity-50"
            />

            {/* Path to Outcome */}
            <motion.path
              d={`M ${cx - offset} ${cyRow2 + 40} C ${cx - offset} ${cyOut}, ${cx} ${cyRow2 + 80}, ${cx} ${cyOut - 40}`}
              fill="none"
              stroke="url(#line-grad)"
              strokeWidth="2"
              style={{ pathLength: outLineLen }}
              className="opacity-50"
            />
            <motion.path
              d={`M ${cx + offset} ${cyRow2 + 40} C ${cx + offset} ${cyOut}, ${cx} ${cyRow2 + 80}, ${cx} ${cyOut - 40}`}
              fill="none"
              stroke="url(#line-grad)"
              strokeWidth="2"
              style={{ pathLength: outLineLen }}
              className="opacity-50"
            />

            {/* Feedback Loop */}
            <motion.path
              d={`M ${cx} ${cyOut + 30} C ${cx} ${dimensions.height - 20}, 20 ${dimensions.height - 20}, 20 ${cyHub} C 20 ${cyHub}, ${cx - 150} ${cyHub}, ${cx - 100} ${cyHub}`}
              fill="none"
              stroke="#0CBF83"
              strokeWidth="2"
              strokeDasharray="6 6"
              style={{ pathLength: loopLen }}
              className="opacity-60"
            />
          </svg>
        </div>

        {/* --- HTML NODES --- */}

        {/* HUB */}
        <motion.div
          className="absolute z-10 w-[200px] sm:w-[260px] -ml-[100px] sm:-ml-[130px] flex flex-col items-center justify-center bg-[#111] border border-[#0CBF83]/40 shadow-[0_0_30px_rgba(12,191,131,0.2)] rounded-xl py-3 px-4"
          style={{
            top: "15%",
            left: "50%",
            y: hubY,
            opacity: hubOpacity,
            scale: hubScale,
          }}
        >
          <span className="text-[#0CBF83] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-1">
            Central Hub
          </span>
          <h3 className="text-[14px] sm:text-[18px] font-bold text-white text-center">
            AI SaaS Development
          </h3>
        </motion.div>

        {/* BRANCH 1: Discovery */}
        <motion.div
          className="absolute z-10 w-[140px] sm:w-[240px] lg:w-[280px] -ml-[70px] sm:-ml-[120px] lg:-ml-[140px] bg-[#1A1A1A] border border-white/10 shadow-lg rounded-xl p-3 sm:p-4"
          style={{
            top: "37%",
            left: isMobile ? "25%" : "25%",
            x: b1X,
            opacity: b1Opacity,
          }}
        >
          <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#222] border border-[#0CBF83]/50 flex items-center justify-center text-[#0CBF83] text-[10px] sm:text-xs font-bold">
              1
            </div>
            <h4 className="text-[11px] sm:text-[14px] font-bold text-white leading-tight">
              Discovery & Strategy
            </h4>
          </div>
          <ul className="flex flex-col gap-1 hidden sm:flex">
            <li className="text-white/60 text-[11px]">
              <span className="text-[#0CBF83]">▹</span> User Research
            </li>
            <li className="text-white/60 text-[11px]">
              <span className="text-[#0CBF83]">▹</span> Tech Stack
            </li>
            <li className="text-white/60 text-[11px]">
              <span className="text-[#0CBF83]">▹</span> Roadmapping
            </li>
          </ul>
        </motion.div>

        {/* BRANCH 2: Design */}
        <motion.div
          className="absolute z-10 w-[140px] sm:w-[240px] lg:w-[280px] -ml-[70px] sm:-ml-[120px] lg:-ml-[140px] bg-[#1A1A1A] border border-white/10 shadow-lg rounded-xl p-3 sm:p-4"
          style={{
            top: "37%",
            left: isMobile ? "75%" : "75%",
            x: b2X,
            opacity: b2Opacity,
          }}
        >
          <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#222] border border-[#0CBF83]/50 flex items-center justify-center text-[#0CBF83] text-[10px] sm:text-xs font-bold">
              2
            </div>
            <h4 className="text-[11px] sm:text-[14px] font-bold text-white leading-tight">
              Design & Architecture
            </h4>
          </div>
          <ul className="flex flex-col gap-1 hidden sm:flex">
            <li className="text-white/60 text-[11px]">
              <span className="text-[#0CBF83]">▹</span> UX/UI Design
            </li>
            <li className="text-white/60 text-[11px]">
              <span className="text-[#0CBF83]">▹</span> System Arch
            </li>
            <li className="text-white/60 text-[11px]">
              <span className="text-[#0CBF83]">▹</span> Data Model
            </li>
          </ul>
        </motion.div>

        {/* BRANCH 3: AI Build */}
        <motion.div
          className="absolute z-10 w-[140px] sm:w-[240px] lg:w-[280px] -ml-[70px] sm:-ml-[120px] lg:-ml-[140px] bg-[#1A1A1A] border border-white/10 shadow-lg rounded-xl p-3 sm:p-4"
          style={{
            top: "62%",
            left: isMobile ? "25%" : "25%",
            x: b3X,
            opacity: b3Opacity,
          }}
        >
          <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#222] border border-[#0CBF83]/50 flex items-center justify-center text-[#0CBF83] text-[10px] sm:text-xs font-bold">
              3
            </div>
            <h4 className="text-[11px] sm:text-[14px] font-bold text-white leading-tight">
              AI Development
            </h4>
          </div>
          <ul className="flex flex-col gap-1 hidden sm:flex">
            <li className="text-white/60 text-[11px]">
              <span className="text-[#0CBF83]">▹</span> SaaS Features
            </li>
            <li className="text-white/60 text-[11px]">
              <span className="text-[#0CBF83]">▹</span> LLM Fine-Tuning
            </li>
            <li className="text-white/60 text-[11px]">
              <span className="text-[#0CBF83]">▹</span> Data Pipelines
            </li>
          </ul>
        </motion.div>

        {/* BRANCH 4: Deploy */}
        <motion.div
          className="absolute z-10 w-[140px] sm:w-[240px] lg:w-[280px] -ml-[70px] sm:-ml-[120px] lg:-ml-[140px] bg-[#1A1A1A] border border-white/10 shadow-lg rounded-xl p-3 sm:p-4"
          style={{
            top: "62%",
            left: isMobile ? "75%" : "75%",
            x: b4X,
            opacity: b4Opacity,
          }}
        >
          <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#222] border border-[#0CBF83]/50 flex items-center justify-center text-[#0CBF83] text-[10px] sm:text-xs font-bold">
              4
            </div>
            <h4 className="text-[11px] sm:text-[14px] font-bold text-white leading-tight">
              Deploy & Optimize
            </h4>
          </div>
          <ul className="flex flex-col gap-1 hidden sm:flex">
            <li className="text-white/60 text-[11px]">
              <span className="text-[#0CBF83]">▹</span> QA & Security
            </li>
            <li className="text-white/60 text-[11px]">
              <span className="text-[#0CBF83]">▹</span> CI/CD Pipelines
            </li>
            <li className="text-white/60 text-[11px]">
              <span className="text-[#0CBF83]">▹</span> Live Monitoring
            </li>
          </ul>
        </motion.div>

        {/* OUTCOME */}
        <motion.div
          className="absolute z-20 w-[240px] sm:w-[320px] -ml-[120px] sm:-ml-[160px] flex flex-col items-center justify-center bg-[linear-gradient(135deg,#00235A,#0CBF83)] shadow-[0_0_40px_rgba(12,191,131,0.4)] rounded-xl py-4 px-6 border border-white/20"
          style={{ top: "82%", left: "50%", y: outY, opacity: outOpacity }}
        >
          <span className="text-[20px] sm:text-[24px] mb-1">🚀</span>
          <h3 className="text-[14px] sm:text-[18px] font-bold text-white text-center leading-tight">
            Production-Ready Product
          </h3>
          <span className="text-white/80 text-[10px] sm:text-[12px] font-medium mt-1">
            Live, secure, and scalable.
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
          <span className="text-white/50 text-[10px] mb-1 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-[20px] bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default AiSaasWorkflow;
