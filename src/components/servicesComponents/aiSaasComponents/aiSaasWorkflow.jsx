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
      const paths = gsap.utils.toArray([
        line1,
        line2,
        line3,
        line4,
        outLine1,
        outLine2,
        loopLine,
      ]);
      paths.forEach((path) => {
        if (path && typeof path.getTotalLength === "function") {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        }
      });

      // Floating blobs animation
      const blobs = gsap.utils.toArray(".bg-blob");
      blobs.forEach((blob, i) => {
        gsap.to(blob, {
          y: i % 2 === 0 ? 40 : -40,
          x: i % 2 === 0 ? 30 : -30,
          scale: 1.1,
          duration: 5 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Particles animation
      const particles = gsap.utils.toArray(".particle");
      particles.forEach((p, i) => {
        gsap.to(p, {
          y: (i % 2 === 0 ? 1 : -1) * (30 + i * 10),
          x: (i % 3 === 0 ? 1 : -1) * (20 + i * 5),
          opacity: 0.8,
          scale: 1.5,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Title entrance animation
      gsap.fromTo(
        ".title-anim",
        { opacity: 0, y: 30, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
          },
        },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      tl.fromTo(
        hub,
        { y: -50, opacity: 0, scale: 0.8, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
        },
      )
        .to(line1, { strokeDashoffset: 0, duration: 1.2, ease: "power1.inOut" })
        .fromTo(
          b1,
          { x: -80, opacity: 0, scale: 0.9, filter: "blur(5px)" },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          "<0.4",
        )
        .fromTo(
          ".b1-sub",
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.5",
        )
        .to(
          line2,
          { strokeDashoffset: 0, duration: 1.2, ease: "power1.inOut" },
          "-=0.6",
        )
        .fromTo(
          b2,
          { x: 80, opacity: 0, scale: 0.9, filter: "blur(5px)" },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          "<0.4",
        )
        .fromTo(
          ".b2-sub",
          { opacity: 0, x: 10 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.5",
        )
        .to(line3, { strokeDashoffset: 0, duration: 1.2, ease: "power1.inOut" })
        .fromTo(
          b3,
          { x: -80, opacity: 0, scale: 0.9, filter: "blur(5px)" },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          "<0.4",
        )
        .fromTo(
          ".b3-sub",
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.5",
        )
        .to(
          line4,
          { strokeDashoffset: 0, duration: 1.2, ease: "power1.inOut" },
          "-=0.6",
        )
        .fromTo(
          b4,
          { x: 80, opacity: 0, scale: 0.9, filter: "blur(5px)" },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          "<0.4",
        )
        .fromTo(
          ".b4-sub",
          { opacity: 0, x: 10 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.5",
        )
        .to([outLine1, outLine2], {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power1.inOut",
        })
        .fromTo(
          out,
          { y: 50, opacity: 0, scale: 0.9, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
          },
          "<0.4",
        )
        .fromTo(
          ".out-sub",
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(loopLine, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power1.inOut",
        })
        .set(loopLine, { strokeDasharray: "10,10" });
    }, containerRef);

    return () => ctx.revert();
  }, [mounted, dimensions]);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (e) => {
    if (window.innerWidth < 768) return;
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  const cx = dimensions.width / 2;
  const cyHub = dimensions.height * 0.15;
  const cyRow1 = dimensions.height * 0.4;
  const cyRow2 = dimensions.height * 0.65;
  const cyOut = dimensions.height * 0.85;

  const isMobile = dimensions.width < 768;
  const offset = isMobile ? dimensions.width * 0.35 : dimensions.width * 0.25;

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full bg-black font-jakarta h-[600vh] mt-32"
      >
        {mounted && (
          <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
            <div className="bg-blob absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00235A]/30 rounded-full blur-[150px] pointer-events-none" />
            <div className="bg-blob absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0CBF83]/20 rounded-full blur-[150px] pointer-events-none" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              {[
                { top: "15%", left: "20%" },
                { top: "35%", left: "80%" },
                { top: "55%", left: "15%" },
                { top: "75%", left: "85%" },
                { top: "25%", left: "60%" },
                { top: "65%", left: "40%" },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="particle absolute w-1 h-1 bg-[#0CBF83]/30 rounded-full blur-[1px]"
                  style={pos}
                />
              ))}
            </div>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center w-full z-40 px-4 pointer-events-none">
              <div className="title-anim flex items-center justify-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[linear-gradient(104deg,#00235A,#004BC0)] shadow-[0_0_10px_#004BC0]" />
                <span className="text-[#0CBF83] text-[12px] sm:text-[16px] font-bold tracking-[1px] uppercase">
                  AI SaaS Development
                </span>
              </div>
              <h2 className="title-anim text-[20px] sm:text-[32px] md:text-[40px] font-bold tracking-[1px] text-white leading-tight">
                Build More Than Software.
                <br />
                Build an Intelligent SaaS Product.
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
              className="hub-node absolute z-10 w-[200px] sm:w-[260px] -ml-[100px] sm:-ml-[130px]"
              style={{ top: "15%", left: "50%" }}
            >
              <div
                className="group flex flex-col items-center justify-center bg-[#111]/80 backdrop-blur-md border border-[#0CBF83]/40 shadow-[0_0_30px_rgba(12,191,131,0.2)] rounded-xl py-3 px-4 transition-all duration-500 hover:shadow-[0_0_40px_rgba(12,191,131,0.5)] hover:border-[#0CBF83]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <span className="text-[#0CBF83] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-1 transition-transform duration-500 group-hover:-translate-y-1">
                  Central Hub
                </span>
                <h3 className="text-[14px] sm:text-[18px] font-bold text-white text-center transition-transform duration-500 group-hover:-translate-y-1">
                  AI SaaS Development
                </h3>
              </div>
            </div>

            <div
              className="b1-node absolute z-10 w-[140px] sm:w-[240px] lg:w-[280px] -ml-[70px] sm:-ml-[120px] lg:-ml-[140px]"
              style={{ top: "37%", left: "25%" }}
            >
              <div
                className="group bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-3 sm:p-4 transition-all duration-500 hover:border-[#0CBF83]/50 hover:shadow-[0_10px_30px_rgba(12,191,131,0.15)]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2 transition-transform duration-500 group-hover:translate-x-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#222] border border-[#0CBF83]/50 flex items-center justify-center text-[#0CBF83] text-[10px] sm:text-xs font-bold group-hover:bg-[#0CBF83]/20 group-hover:shadow-[0_0_10px_#0CBF83] transition-all duration-500">
                    1
                  </div>
                  <h4 className="text-[11px] sm:text-[14px] font-bold text-white leading-tight">
                    Discovery & Strategy
                  </h4>
                </div>
                <ul className="flex flex-col gap-1 hidden sm:flex">
                  <li className="b1-sub text-white/70 text-[10px] sm:text-[11px] transition-all duration-500 group-hover:text-white group-hover:translate-x-1">
                    <span className="text-[#0CBF83] mr-1">▹</span> Business &
                    User Research
                  </li>
                  <li className="b1-sub text-white/70 text-[10px] sm:text-[11px] transition-all duration-500 group-hover:text-white group-hover:translate-x-1 delay-75">
                    <span className="text-[#0CBF83] mr-1">▹</span> AI
                    Feasibility & Stack
                  </li>
                  <li className="b1-sub text-white/70 text-[10px] sm:text-[11px] transition-all duration-500 group-hover:text-white group-hover:translate-x-1 delay-150">
                    <span className="text-[#0CBF83] mr-1">▹</span> Roadmap &
                    Metrics
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="b2-node absolute z-10 w-[140px] sm:w-[240px] lg:w-[280px] -ml-[70px] sm:-ml-[120px] lg:-ml-[140px]"
              style={{ top: "37%", left: "75%" }}
            >
              <div
                className="group bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-3 sm:p-4 transition-all duration-500 hover:border-[#0CBF83]/50 hover:shadow-[0_10px_30px_rgba(12,191,131,0.15)]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2 transition-transform duration-500 group-hover:-translate-x-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#222] border border-[#0CBF83]/50 flex items-center justify-center text-[#0CBF83] text-[10px] sm:text-xs font-bold group-hover:bg-[#0CBF83]/20 group-hover:shadow-[0_0_10px_#0CBF83] transition-all duration-500">
                    2
                  </div>
                  <h4 className="text-[11px] sm:text-[14px] font-bold text-white leading-tight">
                    Design & Architecture
                  </h4>
                </div>
                <ul className="flex flex-col gap-1 hidden sm:flex">
                  <li className="b2-sub text-white/70 text-[10px] sm:text-[11px] transition-all duration-500 group-hover:text-white group-hover:-translate-x-1">
                    <span className="text-[#0CBF83] mr-1">▹</span> UX/UI Design
                  </li>
                  <li className="b2-sub text-white/70 text-[10px] sm:text-[11px] transition-all duration-500 group-hover:text-white group-hover:-translate-x-1 delay-75">
                    <span className="text-[#0CBF83] mr-1">▹</span> System
                    Architecture
                  </li>
                  <li className="b2-sub text-white/70 text-[10px] sm:text-[11px] transition-all duration-500 group-hover:text-white group-hover:-translate-x-1 delay-150">
                    <span className="text-[#0CBF83] mr-1">▹</span> AI Model &
                    Data Arch
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="b3-node absolute z-10 w-[140px] sm:w-[240px] lg:w-[280px] -ml-[70px] sm:-ml-[120px] lg:-ml-[140px]"
              style={{ top: "62%", left: "25%" }}
            >
              <div
                className="group bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-3 sm:p-4 transition-all duration-500 hover:border-[#0CBF83]/50 hover:shadow-[0_10px_30px_rgba(12,191,131,0.15)]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2 transition-transform duration-500 group-hover:translate-x-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#222] border border-[#0CBF83]/50 flex items-center justify-center text-[#0CBF83] text-[10px] sm:text-xs font-bold group-hover:bg-[#0CBF83]/20 group-hover:shadow-[0_0_10px_#0CBF83] transition-all duration-500">
                    3
                  </div>
                  <h4 className="text-[11px] sm:text-[14px] font-bold text-white leading-tight">
                    AI Development
                  </h4>
                </div>
                <ul className="flex flex-col gap-1 hidden sm:flex">
                  <li className="b3-sub text-white/70 text-[10px] sm:text-[11px] transition-all duration-500 group-hover:text-white group-hover:translate-x-1">
                    <span className="text-[#0CBF83] mr-1">▹</span> Core SaaS
                    Features
                  </li>
                  <li className="b3-sub text-white/70 text-[10px] sm:text-[11px] transition-all duration-500 group-hover:text-white group-hover:translate-x-1 delay-75">
                    <span className="text-[#0CBF83] mr-1">▹</span> AI Model
                    Integration
                  </li>
                  <li className="b3-sub text-white/70 text-[10px] sm:text-[11px] transition-all duration-500 group-hover:text-white group-hover:translate-x-1 delay-150">
                    <span className="text-[#0CBF83] mr-1">▹</span> Data
                    Pipelines & APIs
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="b4-node absolute z-10 w-[140px] sm:w-[240px] lg:w-[280px] -ml-[70px] sm:-ml-[120px] lg:-ml-[140px]"
              style={{ top: "62%", left: "75%" }}
            >
              <div
                className="group bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-3 sm:p-4 transition-all duration-500 hover:border-[#0CBF83]/50 hover:shadow-[0_10px_30px_rgba(12,191,131,0.15)]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2 transition-transform duration-500 group-hover:-translate-x-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#222] border border-[#0CBF83]/50 flex items-center justify-center text-[#0CBF83] text-[10px] sm:text-xs font-bold group-hover:bg-[#0CBF83]/20 group-hover:shadow-[0_0_10px_#0CBF83] transition-all duration-500">
                    4
                  </div>
                  <h4 className="text-[11px] sm:text-[14px] font-bold text-white leading-tight">
                    Deploy & Optimize
                  </h4>
                </div>
                <ul className="flex flex-col gap-1 hidden sm:flex">
                  <li className="b4-sub text-white/70 text-[10px] sm:text-[11px] transition-all duration-500 group-hover:text-white group-hover:-translate-x-1">
                    <span className="text-[#0CBF83] mr-1">▹</span> QA & Security
                    Testing
                  </li>
                  <li className="b4-sub text-white/70 text-[10px] sm:text-[11px] transition-all duration-500 group-hover:text-white group-hover:-translate-x-1 delay-75">
                    <span className="text-[#0CBF83] mr-1">▹</span> Cloud Deploy
                    & CI/CD
                  </li>
                  <li className="b4-sub text-white/70 text-[10px] sm:text-[11px] transition-all duration-500 group-hover:text-white group-hover:-translate-x-1 delay-150">
                    <span className="text-[#0CBF83] mr-1">▹</span> Monitoring &
                    Iteration
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="out-node absolute z-20 w-[280px] sm:w-[420px] -ml-[140px] sm:-ml-[210px]"
              style={{ top: "82%", left: "50%" }}
            >
              <div
                className="group flex flex-col items-center justify-center bg-[linear-gradient(135deg,#00235A,#0CBF83)] shadow-[0_0_40px_rgba(12,191,131,0.4)] rounded-xl py-5 px-6 border border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(12,191,131,0.6)] hover:scale-[1.02]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <span className="text-[20px] sm:text-[28px] mb-2 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
                  🚀
                </span>
                <h3 className="text-[16px] sm:text-[20px] font-bold text-white text-center leading-tight transition-transform duration-500 group-hover:-translate-y-1">
                  Production-Ready AI SaaS
                </h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 w-full text-left">
                  <div className="out-sub flex items-start gap-2">
                    <span className="text-white mt-[2px] text-[10px]">✓</span>
                    <span className="text-white/90 text-[10px] sm:text-[12px] font-medium leading-tight">
                      Fully functional AI SaaS live in production
                    </span>
                  </div>
                  <div className="out-sub flex items-start gap-2">
                    <span className="text-white mt-[2px] text-[10px]">✓</span>
                    <span className="text-white/90 text-[10px] sm:text-[12px] font-medium leading-tight">
                      Scalable architecture for user demand
                    </span>
                  </div>
                  <div className="out-sub flex items-start gap-2">
                    <span className="text-white mt-[2px] text-[10px]">✓</span>
                    <span className="text-white/90 text-[10px] sm:text-[12px] font-medium leading-tight">
                      Secure, tested, and monitored infrastructure
                    </span>
                  </div>
                  <div className="out-sub flex items-start gap-2">
                    <span className="text-white mt-[2px] text-[10px]">✓</span>
                    <span className="text-white/90 text-[10px] sm:text-[12px] font-medium leading-tight">
                      Ongoing improvement feedback loop
                    </span>
                  </div>
                </div>
              </div>
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
    </>
  );
};

export default AiSaasWorkflow;
