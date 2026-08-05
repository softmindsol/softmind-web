"use client";

import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AiSaasWorkflow = () => {
  const containerRef = useRef(null);

  // Dynamic window sizing for SVG paths
  const [dimensions, setDimensions] = useState({ width: 1200, height: 900 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateDims = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      ScrollTrigger.refresh();
    };
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
      const outLine1 = ".out-line-conv1";
      const outLine2 = ".out-line-conv2";
      const outLine3 = ".out-line-conv3";
      const outLine4 = ".out-line-conv4";
      const loopLine = ".loop-line";

      // Setup paths for drawing
      const paths = gsap.utils.toArray([
        line1,
        line2,
        line3,
        line4,
        outLine1,
        outLine2,
        outLine3,
        outLine4,
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

      // Scroll timeline
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
        // Hub -> Branch 1 connector
        .to(line1, { strokeDashoffset: 0, duration: 1.2, ease: "power1.inOut" })
        // Branch 1 Node entrance
        .fromTo(
          b1,
          { x: -80, opacity: 0, scale: 0.9, filter: "blur(5px)" },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power2.out",
          },
          "<0.4",
        )
        // Branch 1 Sub-branches fan out
        .fromTo(
          ".b1-sub",
          { opacity: 0, y: 15, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.18, ease: "back.out(1.2)" },
          "-=0.5",
        )
        // Branch 1 -> Branch 2 connector
        .to(line2, { strokeDashoffset: 0, duration: 1.2, ease: "power1.inOut" })
        // Branch 2 Node entrance
        .fromTo(
          b2,
          { x: 80, opacity: 0, scale: 0.9, filter: "blur(5px)" },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power2.out",
          },
          "<0.4",
        )
        // Branch 2 Sub-branches fan out
        .fromTo(
          ".b2-sub",
          { opacity: 0, y: 15, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.18, ease: "back.out(1.2)" },
          "-=0.5",
        )
        // Branch 2 -> Branch 3 connector
        .to(line3, { strokeDashoffset: 0, duration: 1.4, ease: "power1.inOut" })
        // Branch 3 Node entrance
        .fromTo(
          b3,
          { x: -80, opacity: 0, scale: 0.9, filter: "blur(5px)" },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power2.out",
          },
          "<0.4",
        )
        // Branch 3 Sub-branches fan out
        .fromTo(
          ".b3-sub",
          { opacity: 0, y: 15, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.18, ease: "back.out(1.2)" },
          "-=0.5",
        )
        // Branch 3 -> Branch 4 connector
        .to(line4, { strokeDashoffset: 0, duration: 1.2, ease: "power1.inOut" })
        // Branch 4 Node entrance
        .fromTo(
          b4,
          { x: 80, opacity: 0, scale: 0.9, filter: "blur(5px)" },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power2.out",
          },
          "<0.4",
        )
        // Branch 4 Sub-branches fan out
        .fromTo(
          ".b4-sub",
          { opacity: 0, y: 15, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.18, ease: "back.out(1.2)" },
          "-=0.5",
        )
        // All 4 branches converge into Final Outcome node
        .to(
          [outLine1, outLine2, outLine3, outLine4],
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power1.inOut",
            stagger: 0.1,
          },
          "+=0.2",
        )
        // Final Outcome node pops in
        .fromTo(
          out,
          { y: 60, opacity: 0, scale: 0.8, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            scale: 1.05,
            filter: "blur(0px)",
            duration: 1.4,
            ease: "back.out(1.7)", // bouncy entrance for payoff effect
          },
          "<0.4",
        )
        // Highlight payoff glow animation
        .to(
          out,
          {
            boxShadow: "0 0 50px rgba(12, 191, 131, 0.8)",
            borderColor: "#0CBF83",
            duration: 0.8,
            yoyo: true,
            repeat: 1,
            scale: 1, // settles to 1
          },
          "-=0.4",
        )
        // Sub-elements inside payoff node reveal
        .fromTo(
          ".out-sub",
          { opacity: 0, y: 15, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.6",
        )
        // Feedback loop line back to Hub draws
        .to(loopLine, {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power1.inOut",
        })
        .set(loopLine, { strokeDasharray: "10,10" });
    }, containerRef);

    // Refresh ScrollTrigger after a tiny timeout to ensure CSS/layouts are fully injected in dev mode
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimer);
    };
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
  const cyHub = dimensions.height * 0.10;
  const cyRow1 = dimensions.height * 0.28;
  const cyRow2 = dimensions.height * 0.50;
  const cyOut = dimensions.height * 0.72;

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
            {/* Ambient Background Glows */}
            <div className="bg-blob absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00235A]/30 rounded-full blur-[150px] pointer-events-none" />
            <div className="bg-blob absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0CBF83]/20 rounded-full blur-[150px] pointer-events-none" />

            {/* Particles */}
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

            {/* Title Header */}
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

            {/* Flow Connector Paths */}
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

                {/* 1. Hub -> Branch 1 */}
                <path
                  className="line1 opacity-50"
                  d={`M ${cx} ${cyHub + 40} C ${cx} ${cyRow1 - 50}, ${cx - offset} ${cyHub + 50}, ${cx - offset} ${cyRow1 - 40}`}
                  fill="none"
                  stroke="url(#line-grad)"
                  strokeWidth="2"
                />

                {/* 2. Branch 1 -> Branch 2 */}
                <path
                  className="line2 opacity-50"
                  d={`M ${cx - offset + (isMobile ? 75 : 145)} ${cyRow1} C ${cx - offset + (isMobile ? 100 : 200)} ${cyRow1 - 25}, ${cx + offset - (isMobile ? 100 : 200)} ${cyRow1 - 25}, ${cx + offset - (isMobile ? 75 : 145)} ${cyRow1}`}
                  fill="none"
                  stroke="url(#line-grad)"
                  strokeWidth="2"
                />

                {/* 3. Branch 2 -> Branch 3 */}
                <path
                  className="line3 opacity-50"
                  d={`M ${cx + offset} ${cyRow1 + 40} C ${cx + offset} ${cyRow1 + 80}, ${cx - offset} ${cyRow2 - 80}, ${cx - offset} ${cyRow2 - 40}`}
                  fill="none"
                  stroke="url(#line-grad)"
                  strokeWidth="2"
                />

                {/* 4. Branch 3 -> Branch 4 */}
                <path
                  className="line4 opacity-50"
                  d={`M ${cx - offset + (isMobile ? 75 : 145)} ${cyRow2} C ${cx - offset + (isMobile ? 100 : 200)} ${cyRow2 - 25}, ${cx + offset - (isMobile ? 100 : 200)} ${cyRow2 - 25}, ${cx + offset - (isMobile ? 75 : 145)} ${cyRow2}`}
                  fill="none"
                  stroke="url(#line-grad)"
                  strokeWidth="2"
                />

                {/* Converging 4 main branches to Final Outcome */}
                {/* Branch 1 -> Final Outcome */}
                <path
                  className="out-line-conv1 opacity-30"
                  d={`M ${cx - offset} ${cyRow1 + 40} C ${cx - offset - 40} ${cyRow2}, ${cx - 30} ${cyOut - 60}, ${cx} ${cyOut - 40}`}
                  fill="none"
                  stroke="url(#line-grad)"
                  strokeWidth="1.5"
                />

                {/* Branch 2 -> Final Outcome */}
                <path
                  className="out-line-conv2 opacity-30"
                  d={`M ${cx + offset} ${cyRow1 + 40} C ${cx + offset + 40} ${cyRow2}, ${cx + 30} ${cyOut - 60}, ${cx} ${cyOut - 40}`}
                  fill="none"
                  stroke="url(#line-grad)"
                  strokeWidth="1.5"
                />

                {/* Branch 3 -> Final Outcome */}
                <path
                  className="out-line-conv3 opacity-40"
                  d={`M ${cx - offset} ${cyRow2 + 40} C ${cx - offset} ${cyOut - 50}, ${cx - 30} ${cyOut - 50}, ${cx} ${cyOut - 40}`}
                  fill="none"
                  stroke="url(#line-grad)"
                  strokeWidth="1.5"
                />

                {/* Branch 4 -> Final Outcome */}
                <path
                  className="out-line-conv4 opacity-40"
                  d={`M ${cx + offset} ${cyRow2 + 40} C ${cx + offset} ${cyOut - 50}, ${cx + 30} ${cyOut - 50}, ${cx} ${cyOut - 40}`}
                  fill="none"
                  stroke="url(#line-grad)"
                  strokeWidth="1.5"
                />

                {/* Loop Line Back to Hub */}
                <path
                  className="loop-line opacity-60"
                  d={`M ${cx} ${cyOut + 30} C ${cx} ${dimensions.height - 20}, 20 ${dimensions.height - 20}, 20 ${cyHub} C 20 ${cyHub}, ${cx - 150} ${cyHub}, ${cx - 100} ${cyHub}`}
                  fill="none"
                  stroke="#0CBF83"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Hub Node */}
            <div
              className="hub-node absolute z-10 w-[200px] sm:w-[260px] -ml-[100px] sm:-ml-[130px]"
              style={{ top: "10%", left: "50%" }}
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
                <h3 className="text-[13px] sm:text-[17px] font-bold text-white text-center transition-transform duration-500 group-hover:-translate-y-1">
                  AI SaaS Development
                </h3>
              </div>
            </div>

            {/* Branch 1 Node */}
            <div
              className="b1-node absolute z-10 w-[150px] sm:w-[250px] lg:w-[290px] -ml-[75px] sm:-ml-[125px] lg:-ml-[145px] flex flex-col gap-2.5"
              style={{ top: "28%", left: "25%" }}
            >
              <div
                className="group bg-[#1A1A1A]/85 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-3 sm:p-4 transition-all duration-500 hover:border-[#0CBF83]/50 hover:shadow-[0_10px_30px_rgba(12,191,131,0.15)]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 transition-transform duration-500 group-hover:translate-x-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#222] border border-[#0CBF83]/50 flex items-center justify-center text-[#0CBF83] text-[10px] sm:text-xs font-bold group-hover:bg-[#0CBF83]/20 group-hover:shadow-[0_0_10px_#0CBF83] transition-all duration-500">
                    1
                  </div>
                  <h4 className="text-[11px] sm:text-[14px] font-bold text-white leading-tight">
                    Discovery & Strategy
                  </h4>
                </div>
                <p className="text-[9px] sm:text-[11px] text-white/40">
                  Business & tech scope alignment
                </p>
              </div>

              {/* Sub-branches (Vertical tree-branch layout) */}
              <div className="flex flex-col gap-1.5 pl-4 border-l-2 border-[#0CBF83]/30">
                {/* Sub-branch 1.1 */}
                <div className="b1-sub group/sub flex flex-col bg-[#111111]/70 backdrop-blur-md border border-white/5 py-1.5 px-2.5 rounded-lg text-left hover:border-[#0CBF83]/40 transition-all duration-300 hover:bg-[#1a1a1a]/80 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#0CBF83] shadow-[0_0_5px_#0CBF83] animate-pulse" />
                    <span className="font-bold text-[10px] sm:text-[12px] text-white group-hover/sub:text-[#0CBF83] transition-colors">
                      Business & User Research
                    </span>
                  </div>
                  <span className="hidden group-hover/sub:block text-[8px] sm:text-[10px] text-white/50 leading-tight mt-0.5 pl-2.5">
                    Stakeholder interviews, competitor analysis, user mapping.
                  </span>
                </div>

                {/* Sub-branch 1.2 */}
                <div className="b1-sub group/sub flex flex-col bg-[#111111]/70 backdrop-blur-md border border-white/5 py-1.5 px-2.5 rounded-lg text-left hover:border-[#0CBF83]/40 transition-all duration-300 hover:bg-[#1a1a1a]/80 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#0CBF83] shadow-[0_0_5px_#0CBF83] animate-pulse" />
                    <span className="font-bold text-[10px] sm:text-[12px] text-white group-hover/sub:text-[#0CBF83] transition-colors">
                      AI Feasibility & Tech Stack
                    </span>
                  </div>
                  <span className="hidden group-hover/sub:block text-[8px] sm:text-[10px] text-white/50 leading-tight mt-0.5 pl-2.5">
                    Is AI the right fit, which models/tools & cloud stack to use.
                  </span>
                </div>

                {/* Sub-branch 1.3 */}
                <div className="b1-sub group/sub flex flex-col bg-[#111111]/70 backdrop-blur-md border border-white/5 py-1.5 px-2.5 rounded-lg text-left hover:border-[#0CBF83]/40 transition-all duration-300 hover:bg-[#1a1a1a]/80 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#0CBF83] shadow-[0_0_5px_#0CBF83] animate-pulse" />
                    <span className="font-bold text-[10px] sm:text-[12px] text-white group-hover/sub:text-[#0CBF83] transition-colors">
                      Roadmap & Success Metrics
                    </span>
                  </div>
                  <span className="hidden group-hover/sub:block text-[8px] sm:text-[10px] text-white/50 leading-tight mt-0.5 pl-2.5">
                    Phased delivery plan, KPIs to measure project success.
                  </span>
                </div>
              </div>
            </div>

            {/* Branch 2 Node */}
            <div
              className="b2-node absolute z-10 w-[150px] sm:w-[250px] lg:w-[290px] -ml-[75px] sm:-ml-[125px] lg:-ml-[145px] flex flex-col gap-2.5"
              style={{ top: "28%", left: "75%" }}
            >
              <div
                className="group bg-[#1A1A1A]/85 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-3 sm:p-4 transition-all duration-500 hover:border-[#0CBF83]/50 hover:shadow-[0_10px_30px_rgba(12,191,131,0.15)]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 transition-transform duration-500 group-hover:-translate-x-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#222] border border-[#0CBF83]/50 flex items-center justify-center text-[#0CBF83] text-[10px] sm:text-xs font-bold group-hover:bg-[#0CBF83]/20 group-hover:shadow-[0_0_10px_#0CBF83] transition-all duration-500">
                    2
                  </div>
                  <h4 className="text-[11px] sm:text-[14px] font-bold text-white leading-tight">
                    Design & Architecture
                  </h4>
                </div>
                <p className="text-[9px] sm:text-[11px] text-white/40">
                  Visuals & infrastructure design
                </p>
              </div>

              {/* Sub-branches (Vertical tree-branch layout) */}
              <div className="flex flex-col gap-1.5 pl-4 border-l-2 border-[#0CBF83]/30">
                {/* Sub-branch 2.1 */}
                <div className="b2-sub group/sub flex flex-col bg-[#111111]/70 backdrop-blur-md border border-white/5 py-1.5 px-2.5 rounded-lg text-left hover:border-[#0CBF83]/40 transition-all duration-300 hover:bg-[#1a1a1a]/80 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0CBF83] shadow-[0_0_5px_#0CBF83] animate-pulse" />
                    <span className="font-bold text-[10px] sm:text-[12px] text-white group-hover/sub:text-[#0CBF83] transition-colors">
                      UX/UI Design
                    </span>
                  </div>
                  <span className="hidden group-hover/sub:block text-[8px] sm:text-[10px] text-white/50 leading-tight mt-0.5 pl-2.5">
                    Wireframes, interactive prototypes, product user flows.
                  </span>
                </div>

                {/* Sub-branch 2.2 */}
                <div className="b2-sub group/sub flex flex-col bg-[#111111]/70 backdrop-blur-md border border-white/5 py-1.5 px-2.5 rounded-lg text-left hover:border-[#0CBF83]/40 transition-all duration-300 hover:bg-[#1a1a1a]/80 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0CBF83] shadow-[0_0_5px_#0CBF83] animate-pulse" />
                    <span className="font-bold text-[10px] sm:text-[12px] text-white group-hover/sub:text-[#0CBF83] transition-colors">
                      System Architecture
                    </span>
                  </div>
                  <span className="hidden group-hover/sub:block text-[8px] sm:text-[10px] text-white/50 leading-tight mt-0.5 pl-2.5">
                    Backend systems, databases, multi-tenancy & API layers.
                  </span>
                </div>

                {/* Sub-branch 2.3 */}
                <div className="b2-sub group/sub flex flex-col bg-[#111111]/70 backdrop-blur-md border border-white/5 py-1.5 px-2.5 rounded-lg text-left hover:border-[#0CBF83]/40 transition-all duration-300 hover:bg-[#1a1a1a]/80 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0CBF83] shadow-[0_0_5px_#0CBF83] animate-pulse" />
                    <span className="font-bold text-[10px] sm:text-[12px] text-white group-hover/sub:text-[#0CBF83] transition-colors">
                      AI Model & Data Arch
                    </span>
                  </div>
                  <span className="hidden group-hover/sub:block text-[8px] sm:text-[10px] text-white/50 leading-tight mt-0.5 pl-2.5">
                    Model choices, data flow pipelines & vector store storage.
                  </span>
                </div>
              </div>
            </div>

            {/* Branch 3 Node */}
            <div
              className="b3-node absolute z-10 w-[150px] sm:w-[250px] lg:w-[290px] -ml-[75px] sm:-ml-[125px] lg:-ml-[145px] flex flex-col gap-2.5"
              style={{ top: "50%", left: "25%" }}
            >
              <div
                className="group bg-[#1A1A1A]/85 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-3 sm:p-4 transition-all duration-500 hover:border-[#0CBF83]/50 hover:shadow-[0_10px_30px_rgba(12,191,131,0.15)]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 transition-transform duration-500 group-hover:translate-x-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#222] border border-[#0CBF83]/50 flex items-center justify-center text-[#0CBF83] text-[10px] sm:text-xs font-bold group-hover:bg-[#0CBF83]/20 group-hover:shadow-[0_0_10px_#0CBF83] transition-all duration-500">
                    3
                  </div>
                  <h4 className="text-[11px] sm:text-[14px] font-bold text-white leading-tight">
                    AI Dev & Integration
                  </h4>
                </div>
                <p className="text-[9px] sm:text-[11px] text-white/40">
                  Full SaaS & model build
                </p>
              </div>

              {/* Sub-branches (Vertical tree-branch layout) */}
              <div className="flex flex-col gap-1.5 pl-4 border-l-2 border-[#0CBF83]/30">
                {/* Sub-branch 3.1 */}
                <div className="b3-sub group/sub flex flex-col bg-[#111111]/70 backdrop-blur-md border border-white/5 py-1.5 px-2.5 rounded-lg text-left hover:border-[#0CBF83]/40 transition-all duration-300 hover:bg-[#1a1a1a]/80 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0CBF83] shadow-[0_0_5px_#0CBF83] animate-pulse" />
                    <span className="font-bold text-[10px] sm:text-[12px] text-white group-hover/sub:text-[#0CBF83] transition-colors">
                      Core SaaS Feature Build
                    </span>
                  </div>
                  <span className="hidden group-hover/sub:block text-[8px] sm:text-[10px] text-white/50 leading-tight mt-0.5 pl-2.5">
                    Auth, dashboards, subscription/billing, and multi-tenancy.
                  </span>
                </div>

                {/* Sub-branch 3.2 */}
                <div className="b3-sub group/sub flex flex-col bg-[#111111]/70 backdrop-blur-md border border-white/5 py-1.5 px-2.5 rounded-lg text-left hover:border-[#0CBF83]/40 transition-all duration-300 hover:bg-[#1a1a1a]/80 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0CBF83] shadow-[0_0_5px_#0CBF83] animate-pulse" />
                    <span className="font-bold text-[10px] sm:text-[12px] text-white group-hover/sub:text-[#0CBF83] transition-colors">
                      AI Model Integration
                    </span>
                  </div>
                  <span className="hidden group-hover/sub:block text-[8px] sm:text-[10px] text-white/50 leading-tight mt-0.5 pl-2.5">
                    Connecting, training & fine-tuning LLMs or custom ML models.
                  </span>
                </div>

                {/* Sub-branch 3.3 */}
                <div className="b3-sub group/sub flex flex-col bg-[#111111]/70 backdrop-blur-md border border-white/5 py-1.5 px-2.5 rounded-lg text-left hover:border-[#0CBF83]/40 transition-all duration-300 hover:bg-[#1a1a1a]/80 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0CBF83] shadow-[0_0_5px_#0CBF83] animate-pulse" />
                    <span className="font-bold text-[10px] sm:text-[12px] text-white group-hover/sub:text-[#0CBF83] transition-colors">
                      Data Pipelines & APIs
                    </span>
                  </div>
                  <span className="hidden group-hover/sub:block text-[8px] sm:text-[10px] text-white/50 leading-tight mt-0.5 pl-2.5">
                    Connecting external databases, tools & third-party integrations.
                  </span>
                </div>
              </div>
            </div>

            {/* Branch 4 Node */}
            <div
              className="b4-node absolute z-10 w-[150px] sm:w-[250px] lg:w-[290px] -ml-[75px] sm:-ml-[125px] lg:-ml-[145px] flex flex-col gap-2.5"
              style={{ top: "50%", left: "75%" }}
            >
              <div
                className="group bg-[#1A1A1A]/85 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-3 sm:p-4 transition-all duration-500 hover:border-[#0CBF83]/50 hover:shadow-[0_10px_30px_rgba(12,191,131,0.15)]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 border-b border-white/5 pb-2 transition-transform duration-500 group-hover:-translate-x-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#222] border border-[#0CBF83]/50 flex items-center justify-center text-[#0CBF83] text-[10px] sm:text-xs font-bold group-hover:bg-[#0CBF83]/20 group-hover:shadow-[0_0_10px_#0CBF83] transition-all duration-500">
                    4
                  </div>
                  <h4 className="text-[11px] sm:text-[14px] font-bold text-white leading-tight">
                    Deploy & Optimize
                  </h4>
                </div>
                <p className="text-[9px] sm:text-[11px] text-white/40">
                  QA, hosting & analytics
                </p>
              </div>

              {/* Sub-branches (Vertical tree-branch layout) */}
              <div className="flex flex-col gap-1.5 pl-4 border-l-2 border-[#0CBF83]/30">
                {/* Sub-branch 4.1 */}
                <div className="b4-sub group/sub flex flex-col bg-[#111111]/70 backdrop-blur-md border border-white/5 py-1.5 px-2.5 rounded-lg text-left hover:border-[#0CBF83]/40 transition-all duration-300 hover:bg-[#1a1a1a]/80 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0CBF83] shadow-[0_0_5px_#0CBF83] animate-pulse" />
                    <span className="font-bold text-[10px] sm:text-[12px] text-white group-hover/sub:text-[#0CBF83] transition-colors">
                      QA & Security Testing
                    </span>
                  </div>
                  <span className="hidden group-hover/sub:block text-[8px] sm:text-[10px] text-white/50 leading-tight mt-0.5 pl-2.5">
                    Functional code review, load testing, and security hardening.
                  </span>
                </div>

                {/* Sub-branch 4.2 */}
                <div className="b4-sub group/sub flex flex-col bg-[#111111]/70 backdrop-blur-md border border-white/5 py-1.5 px-2.5 rounded-lg text-left hover:border-[#0CBF83]/40 transition-all duration-300 hover:bg-[#1a1a1a]/80 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0CBF83] shadow-[0_0_5px_#0CBF83] animate-pulse" />
                    <span className="font-bold text-[10px] sm:text-[12px] text-white group-hover/sub:text-[#0CBF83] transition-colors">
                      Cloud Deployment & CI/CD
                    </span>
                  </div>
                  <span className="hidden group-hover/sub:block text-[8px] sm:text-[10px] text-white/50 leading-tight mt-0.5 pl-2.5">
                    Scalable cloud setups, automated CI/CD deployment pipelines.
                  </span>
                </div>

                {/* Sub-branch 4.3 */}
                <div className="b4-sub group/sub flex flex-col bg-[#111111]/70 backdrop-blur-md border border-white/5 py-1.5 px-2.5 rounded-lg text-left hover:border-[#0CBF83]/40 transition-all duration-300 hover:bg-[#1a1a1a]/80 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0CBF83] shadow-[0_0_5px_#0CBF83] animate-pulse" />
                    <span className="font-bold text-[10px] sm:text-[12px] text-white group-hover/sub:text-[#0CBF83] transition-colors">
                      Monitoring & Iteration
                    </span>
                  </div>
                  <span className="hidden group-hover/sub:block text-[8px] sm:text-[10px] text-white/50 leading-tight mt-0.5 pl-2.5">
                    Performance logs, user analytics tracking, and updates.
                  </span>
                </div>
              </div>
            </div>

            {/* Final Outcome Convergence Node */}
            <div
              className="out-node absolute z-20 w-[280px] sm:w-[460px] lg:w-[500px] -ml-[140px] sm:-ml-[230px] lg:-ml-[250px]"
              style={{ top: "72%", left: "50%" }}
            >
              <div
                className="group flex flex-col items-center justify-center bg-[linear-gradient(135deg,#00235A,#0CBF83)] shadow-[0_0_40px_rgba(12,191,131,0.4)] rounded-xl py-5 px-6 border border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(12,191,131,0.7)] hover:scale-[1.02] relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Glow effects */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0CBF83] text-black font-extrabold text-[9px] sm:text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_10px_#0CBF83]">
                  Destination Node
                </div>
                
                <span className="text-[22px] sm:text-[30px] mb-2 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
                  🚀
                </span>
                
                <h3 className="text-[16px] sm:text-[22px] font-extrabold text-white text-center leading-tight transition-transform duration-500 group-hover:-translate-y-1">
                  Production-Ready AI SaaS Product
                </h3>
                
                <p className="text-[10px] sm:text-[12px] text-white/80 text-center leading-normal mt-2 max-w-[420px] transition-transform duration-500 group-hover:-translate-y-1">
                  A live, scalable, secure AI-powered SaaS application built, deployed, and continuously improved for your business.
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/15 my-4" />

                <h4 className="text-[11px] sm:text-[12px] text-white font-bold tracking-wider uppercase mb-3 text-left w-full">
                  What you walk away with:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 w-full text-left">
                  <div className="out-sub flex items-start gap-2 bg-black/30 border border-white/5 p-2 rounded-lg hover:border-white/20 transition-all duration-300">
                    <span className="text-[#0CBF83] font-bold text-xs mt-[1px]">✓</span>
                    <span className="text-white/90 text-[10px] sm:text-[12px] font-medium leading-tight">
                      Fully functional AI SaaS product live in production.
                    </span>
                  </div>
                  <div className="out-sub flex items-start gap-2 bg-black/30 border border-white/5 p-2 rounded-lg hover:border-white/20 transition-all duration-300">
                    <span className="text-[#0CBF83] font-bold text-xs mt-[1px]">✓</span>
                    <span className="text-white/90 text-[10px] sm:text-[12px] font-medium leading-tight">
                      Scalable architecture that grows with user demand.
                    </span>
                  </div>
                  <div className="out-sub flex items-start gap-2 bg-black/30 border border-white/5 p-2 rounded-lg hover:border-white/20 transition-all duration-300">
                    <span className="text-[#0CBF83] font-bold text-xs mt-[1px]">✓</span>
                    <span className="text-white/90 text-[10px] sm:text-[12px] font-medium leading-tight">
                      Secure, tested, and monitored infrastructure.
                    </span>
                  </div>
                  <div className="out-sub flex items-start gap-2 bg-black/30 border border-white/5 p-2 rounded-lg hover:border-white/20 transition-all duration-300">
                    <span className="text-[#0CBF83] font-bold text-xs mt-[1px]">✓</span>
                    <span className="text-white/90 text-[10px] sm:text-[12px] font-medium leading-tight">
                      Ongoing improvement loop & data-driven updates.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AiSaasWorkflow;
