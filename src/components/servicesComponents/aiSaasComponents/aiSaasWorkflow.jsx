"use client";

import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AiSaasWorkflow = () => {
  const containerRef = useRef(null);

  // Dynamic window sizing for SVG paths
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateDims = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const hub = ".hub-node";
      const b1 = ".b1-node";
      const b2 = ".b2-node";
      const b3 = ".b3-node";
      const b4 = ".b4-node";
      const out = ".out-node";

      const line1 = ".line1";
      const line2 = ".line2";
      const line3 = ".line3";
      const line4 = ".line4";
      const outLine1 = ".out-line1";
      const outLine2 = ".out-line2";
      const loopLine = ".loop-line";

      // Setup paths for drawing
      const paths = gsap.utils.toArray([line1, line2, line3, line4, outLine1, outLine2, loopLine]);
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      tl.to(hub, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "none" })
        .to(line1, { strokeDashoffset: 0, duration: 1, ease: "none" })
        .to(b1, { x: 0, opacity: 1, duration: 1, ease: "none" }, "<")
        .to(line2, { strokeDashoffset: 0, duration: 1, ease: "none" })
        .to(b2, { x: 0, opacity: 1, duration: 1, ease: "none" }, "<")
        .to(line3, { strokeDashoffset: 0, duration: 1, ease: "none" })
        .to(b3, { x: 0, opacity: 1, duration: 1, ease: "none" }, "<")
        .to(line4, { strokeDashoffset: 0, duration: 1, ease: "none" })
        .to(b4, { x: 0, opacity: 1, duration: 1, ease: "none" }, "<")
        .to([outLine1, outLine2], { strokeDashoffset: 0, duration: 1, ease: "none" })
        .to(out, { y: 0, opacity: 1, duration: 1, ease: "none" }, "<")
        .to(loopLine, { strokeDashoffset: 0, duration: 1, ease: "none" });

    }, containerRef);

    return () => ctx.revert();
  }, [mounted, dimensions]);

  const cx = dimensions.width / 2;
  const cyHub = dimensions.height * 0.15;
  const cyRow1 = dimensions.height * 0.4;
  const cyRow2 = dimensions.height * 0.65;
  const cyOut = dimensions.height * 0.85;

  const isMobile = dimensions.width < 768;
  const offset = isMobile ? dimensions.width * 0.35 : dimensions.width * 0.25;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black font-jakarta h-[600vh] mt-32"
    >
      {mounted && (
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00235A]/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0CBF83]/10 rounded-full blur-[150px] pointer-events-none" />

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

              <path
                className="line1 opacity-50"
                d={`M ${cx} ${cyHub + 40} C ${cx} ${cyRow1}, ${cx - offset} ${cyHub + 40}, ${cx - offset} ${cyRow1 - 40}`}
                fill="none"
                stroke="url(#line-grad)"
                strokeWidth="2"
              />

              <path
                className="line2 opacity-50"
                d={`M ${cx} ${cyHub + 40} C ${cx} ${cyRow1}, ${cx + offset} ${cyHub + 40}, ${cx + offset} ${cyRow1 - 40}`}
                fill="none"
                stroke="url(#line-grad)"
                strokeWidth="2"
              />

              <path
                className="line3 opacity-50"
                d={`M ${cx - offset} ${cyRow1 + 40} C ${cx - offset} ${cyRow2}, ${cx - offset} ${cyRow1 + 80}, ${cx - offset} ${cyRow2 - 40}`}
                fill="none"
                stroke="url(#line-grad)"
                strokeWidth="2"
              />

              <path
                className="line4 opacity-50"
                d={`M ${cx + offset} ${cyRow1 + 40} C ${cx + offset} ${cyRow2}, ${cx + offset} ${cyRow1 + 80}, ${cx + offset} ${cyRow2 - 40}`}
                fill="none"
                stroke="url(#line-grad)"
                strokeWidth="2"
              />

              <path
                className="out-line1 opacity-50"
                d={`M ${cx - offset} ${cyRow2 + 40} C ${cx - offset} ${cyOut}, ${cx} ${cyRow2 + 80}, ${cx} ${cyOut - 40}`}
                fill="none"
                stroke="url(#line-grad)"
                strokeWidth="2"
              />
              <path
                className="out-line2 opacity-50"
                d={`M ${cx + offset} ${cyRow2 + 40} C ${cx + offset} ${cyOut}, ${cx} ${cyRow2 + 80}, ${cx} ${cyOut - 40}`}
                fill="none"
                stroke="url(#line-grad)"
                strokeWidth="2"
              />

              <path
                className="loop-line opacity-60"
                d={`M ${cx} ${cyOut + 30} C ${cx} ${dimensions.height - 20}, 20 ${dimensions.height - 20}, 20 ${cyHub} C 20 ${cyHub}, ${cx - 150} ${cyHub}, ${cx - 100} ${cyHub}`}
                fill="none"
                stroke="#0CBF83"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div
            className="hub-node absolute z-10 w-[200px] sm:w-[260px] -ml-[100px] sm:-ml-[130px] flex flex-col items-center justify-center bg-[#111] border border-[#0CBF83]/40 shadow-[0_0_30px_rgba(12,191,131,0.2)] rounded-xl py-3 px-4"
            style={{
              top: "15%",
              left: "50%",
              transform: "translateY(-100px) scale(0.8)",
              opacity: 0,
            }}
          >
            <span className="text-[#0CBF83] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-1">
              Central Hub
            </span>
            <h3 className="text-[14px] sm:text-[18px] font-bold text-white text-center">
              AI SaaS Development
            </h3>
          </div>

          <div
            className="b1-node absolute z-10 w-[140px] sm:w-[240px] lg:w-[280px] -ml-[70px] sm:-ml-[120px] lg:-ml-[140px] bg-[#1A1A1A] border border-white/10 shadow-lg rounded-xl p-3 sm:p-4"
            style={{
              top: "37%",
              left: isMobile ? "25%" : "25%",
              transform: "translateX(-100px)",
              opacity: 0,
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
          </div>

          <div
            className="b2-node absolute z-10 w-[140px] sm:w-[240px] lg:w-[280px] -ml-[70px] sm:-ml-[120px] lg:-ml-[140px] bg-[#1A1A1A] border border-white/10 shadow-lg rounded-xl p-3 sm:p-4"
            style={{
              top: "37%",
              left: isMobile ? "75%" : "75%",
              transform: "translateX(100px)",
              opacity: 0,
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
          </div>

          <div
            className="b3-node absolute z-10 w-[140px] sm:w-[240px] lg:w-[280px] -ml-[70px] sm:-ml-[120px] lg:-ml-[140px] bg-[#1A1A1A] border border-white/10 shadow-lg rounded-xl p-3 sm:p-4"
            style={{
              top: "62%",
              left: isMobile ? "25%" : "25%",
              transform: "translateX(-100px)",
              opacity: 0,
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
          </div>

          <div
            className="b4-node absolute z-10 w-[140px] sm:w-[240px] lg:w-[280px] -ml-[70px] sm:-ml-[120px] lg:-ml-[140px] bg-[#1A1A1A] border border-white/10 shadow-lg rounded-xl p-3 sm:p-4"
            style={{
              top: "62%",
              left: isMobile ? "75%" : "75%",
              transform: "translateX(100px)",
              opacity: 0,
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
          </div>

          <div
            className="out-node absolute z-20 w-[240px] sm:w-[320px] -ml-[120px] sm:-ml-[160px] flex flex-col items-center justify-center bg-[linear-gradient(135deg,#00235A,#0CBF83)] shadow-[0_0_40px_rgba(12,191,131,0.4)] rounded-xl py-4 px-6 border border-white/20"
            style={{
              top: "82%",
              left: "50%",
              transform: "translateY(100px)",
              opacity: 0,
            }}
          >
            <span className="text-[20px] sm:text-[24px] mb-1">🚀</span>
            <h3 className="text-[14px] sm:text-[18px] font-bold text-white text-center leading-tight">
              Production-Ready Product
            </h3>
            <span className="text-white/80 text-[10px] sm:text-[12px] font-medium mt-1">
              Live, secure, and scalable.
            </span>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
            <span className="text-white/50 text-[10px] mb-1 tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-[1px] h-[20px] bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
          </div>
        </div>
      )}
    </section>
  );
};

export default AiSaasWorkflow;

