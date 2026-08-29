"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../customs/customButton";
import ClutchWidget from "../customs/clutchWidget";
import { ChevronUp, ChevronDown, Award, ShieldCheck, BadgeCheck } from "lucide-react";

const AUTOPLAY_MS = 6500;

const SLIDES = [
  {
    id: 0, type: "service", tag: "AI ENABLED",
    titleLine1: "AI Enabled Product", titleLine2: "Engineering",
    description: "Build your product or extend your engineering team with a trusted offshore software development company.",
    primaryBtn: { text: "Book a Discovery Call", href: "#" },
    secondaryBtn: { text: "View Our Work", href: "#" },
    bottomText: "Loved by 300+ Clients across the world",
    showClutch: true, accent: "#0CBF83", category: "AI & Innovation",
  },
  {
    id: 1, type: "service", tag: "PRODUCT ENGINEERING",
    titleLine1: "Scalable Web &", titleLine2: "Mobile Applications",
    description: "We build high-performance web apps, mobile apps, AI SaaS platforms, and dedicated teams for HealthTech, FinTech, EdTech & PropTech companies.",
    primaryBtn: { text: "Start a Project", href: "#" },
    secondaryBtn: null, showClutch: false, accent: "#60a5fa", category: "Development",
  },
  {
    id: 2, type: "service", tag: "DEDICATED TEAMS",
    titleLine1: "Extend Your", titleLine2: "Engineering Team",
    description: "Hire pre-vetted senior developers, designers, and QA engineers — scale your product faster without the overhead.",
    primaryBtn: { text: "Get Started Today", href: "#" },
    secondaryBtn: null, showClutch: false, accent: "#34d399", category: "Dedicated Teams",
  },
  {
    id: 3, type: "certification", tag: "CERTIFIED EXCELLENCE",
    titleLine1: "ISO Certified", titleLine2: "Development Standards",
    description: "Content coming soon — This slide will highlight your ISO certification, what it means for quality assurance, and the value it delivers to clients.",
    primaryBtn: { text: "Learn More", href: "#" },
    secondaryBtn: null, showClutch: false, accent: "#f59e0b", category: "ISO Certified", certLabel: "ISO 9001",
  },
  {
    id: 4, type: "certification", tag: "TECHNOLOGY PARTNER",
    titleLine1: "Cloud & Technology", titleLine2: "Certified Partner",
    description: "Content coming soon — This slide will showcase your cloud technology partnerships, certifications earned, and the value they bring to your engineering solutions.",
    primaryBtn: { text: "View Certifications", href: "#" },
    secondaryBtn: null, showClutch: false, accent: "#06b6d4", category: "Cloud Partner", certLabel: "CLOUD CERTIFIED",
  },
  {
    id: 5, type: "certification", tag: "ENTERPRISE READY",
    titleLine1: "Security & Compliance", titleLine2: "Certified",
    description: "Content coming soon — This slide will cover your security certifications, compliance standards, and what enterprise-grade protection means for your products.",
    primaryBtn: { text: "Explore Security", href: "#" },
    secondaryBtn: null, showClutch: false, accent: "#a78bfa", category: "Security", certLabel: "SOC 2 READY",
  },
];

function Bg0() {
  return (
    <div className="absolute inset-0" style={{ background: "#010d18" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 70% at 75% 45%, rgba(12,191,131,0.13) 0%, transparent 62%)" }} />
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 50% 55% at 88% 22%, rgba(0,75,192,0.2) 0%, transparent 56%)" }} />
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize:"44px 44px" }} />
      <svg style={{ position:"absolute", right:0, top:0, width:"60%", height:"100%", opacity:0.16 }} viewBox="0 0 800 700" preserveAspectRatio="xMidYMid slice">
        <path d="M0 350 Q200 180 420 270 T800 190" stroke="#0CBF83" strokeWidth="1.5" fill="none" />
        <path d="M0 460 Q260 310 520 380 T800 300" stroke="#004BC0" strokeWidth="1" fill="none" opacity="0.7" />
        <path d="M0 240 Q310 90 630 190 T800 90" stroke="#0CBF83" strokeWidth="0.8" fill="none" opacity="0.5" />
        <circle cx="420" cy="270" r="5" fill="#0CBF83" opacity="0.9" />
        <circle cx="640" cy="190" r="3" fill="#004BC0" opacity="0.8" />
        <circle cx="730" cy="145" r="3" fill="#60a5fa" opacity="0.7" />
        <line x1="420" y1="270" x2="640" y2="190" stroke="#0CBF83" strokeWidth="0.8" opacity="0.45" />
        <line x1="420" y1="270" x2="570" y2="320" stroke="#60a5fa" strokeWidth="0.6" opacity="0.4" />
      </svg>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(108deg, rgba(1,13,24,0.92) 0%, rgba(1,13,24,0.72) 38%, rgba(1,13,24,0.22) 68%, transparent 100%)" }} />
    </div>
  );
}

function Bg1() {
  return (
    <div className="absolute inset-0" style={{ background: "#050c1c" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 75% at 78% 42%, rgba(37,99,235,0.2) 0%, transparent 65%)" }} />
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 48% 55% at 90% 72%, rgba(139,92,246,0.16) 0%, transparent 58%)" }} />
      <svg style={{ position:"absolute", right:0, top:0, width:"58%", height:"100%", opacity:0.12 }} viewBox="0 0 720 700" preserveAspectRatio="xMidYMid slice">
        {[70, 190, 350, 510, 650].map(x => <line key={x} x1={x} y1="0" x2={x} y2="700" stroke="#60a5fa" strokeWidth={x===350?1.3:0.7} />)}
        {[90, 240, 395, 560].map(y => <line key={y} x1="0" y1={y} x2="720" y2={y} stroke="#60a5fa" strokeWidth={y===240?1.3:0.7} />)}
        {[[70,90],[190,240],[350,90],[510,240],[350,395],[70,395],[190,560],[510,395],[650,240]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={i%2===0?5:3} fill={i%3===0?"#8b5cf6":"#60a5fa"} opacity="0.7" />
        ))}
        <line x1="190" y1="240" x2="350" y2="395" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.55" />
        <line x1="350" y1="395" x2="510" y2="240" stroke="#60a5fa" strokeWidth="0.8" opacity="0.55" />
      </svg>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(108deg, rgba(5,12,28,0.94) 0%, rgba(5,12,28,0.75) 38%, rgba(5,12,28,0.22) 68%, transparent 100%)" }} />
    </div>
  );
}

function Bg2() {
  return (
    <div className="absolute inset-0" style={{ background: "#020f07" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 62% 68% at 74% 48%, rgba(12,191,131,0.18) 0%, transparent 62%)" }} />
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 44% 50% at 90% 24%, rgba(0,35,90,0.26) 0%, transparent 55%)" }} />
      <svg style={{ position:"absolute", right:0, top:0, width:"63%", height:"100%", opacity:0.17 }} viewBox="0 0 800 700" preserveAspectRatio="xMidYMid slice">
        {[[160,75,3],[295,155,2],[435,95,4],[530,225,2.5],[390,295,3],[615,175,2],[715,295,3.5],[490,415,2],[655,475,3],[330,495,2]].map(([x,y,r],i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={i%3===0?"#34d399":"#0CBF83"} opacity="0.72" />
        ))}
        {[[160,75,295,155],[295,155,435,95],[435,95,530,225],[295,155,390,295],[530,225,615,175],[615,175,715,295],[390,295,490,415],[490,415,655,475]].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i%2===0?"#0CBF83":"#34d399"} strokeWidth="0.7" opacity="0.38" />
        ))}
      </svg>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(108deg, rgba(2,15,7,0.94) 0%, rgba(2,15,7,0.75) 38%, rgba(2,15,7,0.2) 68%, transparent 100%)" }} />
    </div>
  );
}

function Bg3() {
  return (
    <div className="absolute inset-0" style={{ background: "#0d0900" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 65% at 72% 50%, rgba(245,158,11,0.14) 0%, transparent 60%)" }} />
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 50% 55% at 88% 28%, rgba(180,120,0,0.12) 0%, transparent 55%)" }} />
      <svg style={{ position:"absolute", right:"-5%", top:"50%", transform:"translateY(-50%)", width:"55%", height:"90%", opacity:0.1 }} viewBox="0 0 500 500">
        {[200,170,140,110,80,50].map((r,i) => (
          <circle key={i} cx="250" cy="250" r={r} fill="none" stroke="#f59e0b" strokeWidth={i===0?2:1} opacity={1-i*0.13} />
        ))}
        <polygon points="250,60 290,170 410,170 315,235 350,350 250,285 150,350 185,235 90,170 210,170" fill="#f59e0b" opacity="0.1" />
        <polygon points="250,90 283,185 385,185 305,242 335,340 250,278 165,340 195,242 115,185 217,185" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.35" />
      </svg>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(108deg, rgba(13,9,0,0.95) 0%, rgba(13,9,0,0.78) 38%, rgba(13,9,0,0.2) 68%, transparent 100%)" }} />
    </div>
  );
}

function Bg4() {
  return (
    <div className="absolute inset-0" style={{ background: "#00090d" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 68% 68% at 74% 48%, rgba(6,182,212,0.16) 0%, transparent 62%)" }} />
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 46% 52% at 90% 26%, rgba(14,116,144,0.18) 0%, transparent 56%)" }} />
      <svg style={{ position:"absolute", right:0, top:0, width:"58%", height:"100%", opacity:0.11 }} viewBox="0 0 720 700" preserveAspectRatio="xMidYMid slice">
        {[[100,100],[250,100],[400,100],[550,100],[175,200],[325,200],[475,200],[100,300],[250,300],[400,300],[550,300],[175,400],[325,400],[475,400],[100,500],[250,500],[400,500],[550,500]].map(([x,y],i) => (
          <polygon key={i} points={`${x},${y-40} ${x+35},${y-20} ${x+35},${y+20} ${x},${y+40} ${x-35},${y+20} ${x-35},${y-20}`}
            fill="none" stroke="#06b6d4" strokeWidth="0.8" opacity={i%3===0?0.55:0.3} />
        ))}
        {[[250,100,3],[400,300,5],[175,400,4],[550,200,3],[325,500,4]].map(([x,y,r],i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="#06b6d4" opacity="0.72" />
        ))}
      </svg>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(108deg, rgba(0,9,13,0.95) 0%, rgba(0,9,13,0.78) 38%, rgba(0,9,13,0.2) 68%, transparent 100%)" }} />
    </div>
  );
}

function Bg5() {
  return (
    <div className="absolute inset-0" style={{ background: "#06020f" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 68% 70% at 74% 50%, rgba(167,139,250,0.16) 0%, transparent 62%)" }} />
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 48% 52% at 90% 28%, rgba(109,40,217,0.16) 0%, transparent 55%)" }} />
      <svg style={{ position:"absolute", right:"-8%", top:"50%", transform:"translateY(-50%)", width:"58%", height:"90%", opacity:0.12 }} viewBox="0 0 500 500">
        <ellipse cx="250" cy="250" rx="200" ry="80" fill="none" stroke="#a78bfa" strokeWidth="1.2" />
        <ellipse cx="250" cy="250" rx="160" ry="160" fill="none" stroke="#a78bfa" strokeWidth="0.8" opacity="0.6" />
        <ellipse cx="250" cy="250" rx="200" ry="80" fill="none" stroke="#a78bfa" strokeWidth="0.6" opacity="0.4" transform="rotate(60 250 250)" />
        <ellipse cx="250" cy="250" rx="200" ry="80" fill="none" stroke="#8b5cf6" strokeWidth="0.6" opacity="0.4" transform="rotate(-60 250 250)" />
        <circle cx="250" cy="170" r="6" fill="#a78bfa" opacity="0.85" />
        <circle cx="430" cy="250" r="4" fill="#8b5cf6" opacity="0.75" />
        <circle cx="250" cy="330" r="5" fill="#a78bfa" opacity="0.7" />
        <circle cx="70"  cy="250" r="3" fill="#8b5cf6" opacity="0.6" />
        <circle cx="250" cy="250" r="30" fill="none" stroke="#a78bfa" strokeWidth="1.5" opacity="0.4" />
        <circle cx="250" cy="250" r="18" fill="#a78bfa" opacity="0.1" />
      </svg>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(108deg, rgba(6,2,15,0.95) 0%, rgba(6,2,15,0.78) 38%, rgba(6,2,15,0.2) 68%, transparent 100%)" }} />
    </div>
  );
}

const BACKGROUNDS = [Bg0, Bg1, Bg2, Bg3, Bg4, Bg5];

function CertBadge({ accent, label, certIcon: Icon }) {
  return (
    <div className="hidden xl:flex items-center justify-center absolute pointer-events-none select-none"
      style={{ right:"7%", top:"50%", transform:"translateY(-50%)", width:260, height:260 }}>
      <div style={{ position:"absolute", inset:-40, borderRadius:"50%", background:`radial-gradient(circle, ${accent}20 0%, transparent 70%)` }} />
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", animation:"certSpin 20s linear infinite" }} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="none" stroke={accent} strokeWidth="0.6" strokeDasharray="5 4" opacity="0.32" />
      </svg>
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%" }} viewBox="0 0 100 100">
        <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" fill="none" stroke={accent} strokeWidth="1" opacity="0.42" />
        <polygon points="50,12 87,32 87,68 50,88 13,68 13,32" fill={accent} opacity="0.07" />
        <polygon points="50,12 87,32 87,68 50,88 13,68 13,32" fill="none" stroke={accent} strokeWidth="0.6" opacity="0.28" />
        <polygon points="50,20 80,37 80,63 50,80 20,63 20,37" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.18" />
      </svg>
      <div style={{ position:"relative", zIndex:2, display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
        <div style={{ width:56, height:56, borderRadius:"50%", background:`${accent}18`, border:`1.5px solid ${accent}50`, display:"flex", alignItems:"center", justifyContent:"center" }}>
          {Icon && <Icon size={28} color={accent} />}
        </div>
        <span style={{ color:accent, fontSize:10, fontWeight:800, letterSpacing:"0.22em", textTransform:"uppercase" }}>{label}</span>
        <span style={{ color:"rgba(255,255,255,0.3)", fontSize:9, fontWeight:500, letterSpacing:"0.1em", textTransform:"uppercase" }}>Content Coming Soon</span>
      </div>
    </div>
  );
}

const bgVariants = {
  enter:  { opacity: 0, scale: 1.05 },
  center: { opacity: 1, scale: 1,    transition: { duration: 0.95, ease: [0.4, 0, 0.2, 1] } },
  exit:   { opacity: 0, scale: 1.03, transition: { duration: 0.55, ease: [0.4, 0, 0.6, 1] } },
};

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
  exit:    { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 26, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -16, filter: "blur(4px)", transition: { duration: 0.25, ease: "easeIn" } },
};

const KEYFRAMES = `
  @keyframes certSpin { from{transform:rotate(0deg);}to{transform:rotate(360deg);} }
  @keyframes heroDot  { 0%,100%{opacity:.5;transform:scale(1);}50%{opacity:1;transform:scale(1.18);} }
`;

function GhostBtn({ children }) {
  const [h, setH] = useState(false);
  return (
    <button onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      className="group inline-flex items-center gap-2 font-jakarta font-semibold text-white transition-all duration-300"
      style={{
        fontSize:"clamp(12px,1.05vw,14px)", letterSpacing:"0.04em",
        padding:"9px 22px", borderRadius:"9999px",
        border:`2px solid ${h?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.34)"}`,
        background: h ? "rgba(255,255,255,0.09)" : "transparent",
      }}>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </button>
  );
}

function NavBtn({ onClick, ariaLabel, children }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} aria-label={ariaLabel}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      className="flex items-center justify-center rounded-full transition-all duration-200"
      style={{
        width:28, height:28,
        color:      h?"#fff":"rgba(255,255,255,0.48)",
        border:     "1px solid rgba(255,255,255,0.14)",
        background: h?"rgba(255,255,255,0.12)":"rgba(255,255,255,0.04)",
      }}>{children}</button>
  );
}

function MobileNavBtn({ onClick, ariaLabel, children }) {
  return (
    <button onClick={onClick} aria-label={ariaLabel}
      className="flex items-center justify-center rounded-full transition-all duration-200"
      style={{
        width:32, height:32, color:"rgba(255,255,255,0.72)",
        border:"1px solid rgba(255,255,255,0.2)",
        background:"rgba(0,0,0,0.32)", backdropFilter:"blur(8px)", WebkitBackdropFilter:"blur(8px)",
      }}>{children}</button>
  );
}

export default function HeroSlider() {
  const total = SLIDES.length;
  const [current,     setCurrent]     = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused,    setIsPaused]    = useState(false);
  const [progress,    setProgress]    = useState(0);
  const currentRef    = useRef(0);
  const startTimeRef  = useRef(Date.now());
  const autoplayRef   = useRef(null);
  const progressRef   = useRef(null);
  const touchStartX   = useRef(null);
  const touchStartY   = useRef(null);

  const goTo = useCallback((rawIndex) => {
    if (isAnimating) return;
    const index = ((rawIndex % total) + total) % total;
    setIsAnimating(true);
    setProgress(0);
    currentRef.current = index;
    setCurrent(index);
    startTimeRef.current = Date.now();
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating, total]);

  const next = useCallback(() => goTo(currentRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(currentRef.current - 1), [goTo]);

  useEffect(() => {
    if (isPaused) return;
    startTimeRef.current = Date.now();
    progressRef.current = setInterval(() => {
      const e = Date.now() - startTimeRef.current;
      setProgress(Math.min((e / AUTOPLAY_MS) * 100, 100));
    }, 40);
    autoplayRef.current = setTimeout(next, AUTOPLAY_MS);
    return () => { clearInterval(progressRef.current); clearTimeout(autoplayRef.current); };
  }, [current, isPaused, next]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 44) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  const slide    = SLIDES[current];
  const isCert   = slide.type === "certification";
  const numLabel = String(current + 1).padStart(2, "0");

  return (
    <section
      className="relative w-full overflow-hidden select-none"
      style={{ minHeight: "100svh" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Hero slider"
    >
      <style>{KEYFRAMES}</style>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-50" style={{ height:3, background:"rgba(255,255,255,0.07)" }}>
        <motion.div
          style={{ height:"100%", background:`linear-gradient(90deg, ${slide.accent}, #004BC0)` }}
          animate={{ width:`${progress}%` }}
          transition={{ duration:0.04, ease:"linear" }}
        />
      </div>

      {/* Backgrounds */}
      <AnimatePresence initial={false}>
        {SLIDES.map((_, i) => {
          if (i !== current) return null;
          const Bg = BACKGROUNDS[i];
          return (
            <motion.div key={i} className="absolute inset-0" style={{ zIndex:0 }}
              variants={bgVariants} initial="enter" animate="center" exit="exit">
              <Bg />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center w-full"
        style={{ minHeight:"100svh", paddingTop:"clamp(86px,10.5vw,116px)", paddingBottom:"clamp(80px,10vw,110px)" }}>
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">

          {isCert && (
            <CertBadge accent={slide.accent} label={slide.certLabel}
              certIcon={slide.id===3?Award:slide.id===4?BadgeCheck:ShieldCheck} />
          )}

          <AnimatePresence mode="wait">
            <motion.div key={current} variants={containerVariants} initial="hidden" animate="visible" exit="exit"
              className="flex flex-col"
              style={{ maxWidth:"clamp(300px,52vw,590px)", gap:"clamp(14px,1.9vw,22px)" }}>

              {/* Tag pill */}
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 font-jakarta font-bold uppercase text-white"
                  style={{ fontSize:"clamp(9px,0.85vw,11px)", letterSpacing:"0.16em", padding:"5px 13px", borderRadius:"9999px",
                    border:"1px solid rgba(255,255,255,0.24)", background:"rgba(255,255,255,0.06)",
                    backdropFilter:"blur(10px)", WebkitBackdropFilter:"blur(10px)" }}>
                  <span style={{ width:5, height:5, borderRadius:"50%", flexShrink:0, background:slide.accent,
                    boxShadow:`0 0 7px ${slide.accent}`, animation:"heroDot 2.8s ease-in-out infinite" }} />
                  {slide.tag}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1 variants={itemVariants} className="font-jakarta font-bold text-white"
                style={{ fontSize:"clamp(30px,4.5vw,62px)", lineHeight:1.1, letterSpacing:"-0.01em", margin:0 }}>
                {slide.titleLine1}
                <br />
                <span style={{ color:slide.accent, textShadow:`0 0 48px ${slide.accent}48` }}>
                  {slide.titleLine2}
                </span>
              </motion.h1>

              {/* Divider */}
              <motion.div variants={itemVariants}
                style={{ width:44, height:2, borderRadius:"9999px", background:`linear-gradient(90deg, ${slide.accent}, transparent)` }} />

              {/* Description */}
              <motion.p variants={itemVariants} className="font-jakarta"
                style={{ fontSize:"clamp(14px,1.4vw,17px)", lineHeight:1.75, color:"rgba(255,255,255,0.68)", maxWidth:"min(490px,100%)", margin:0 }}>
                {slide.description}
              </motion.p>

              {/* CTAs */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
                {slide.primaryBtn && <CustomButton btnText={slide.primaryBtn.text} />}
                {slide.secondaryBtn && <GhostBtn>{slide.secondaryBtn.text}</GhostBtn>}
              </motion.div>

              {/* Social proof */}
              {slide.bottomText && (
                <motion.div variants={itemVariants} className="flex items-center gap-3" style={{ maxWidth:440 }}>
                  <div style={{ flex:1, height:1, background:"rgba(255,255,255,0.14)", borderRadius:"9999px" }} />
                  <span className="font-jakarta font-medium text-center whitespace-nowrap px-2"
                    style={{ fontSize:"clamp(11px,0.9vw,13px)", color:"rgba(255,255,255,0.38)" }}>
                    {slide.bottomText}
                  </span>
                  <div style={{ flex:1, height:1, background:"rgba(255,255,255,0.14)", borderRadius:"9999px" }} />
                </motion.div>
              )}

              {/* Clutch */}
              {slide.showClutch && (
                <motion.div variants={itemVariants} style={{ opacity:0.85 }}>
                  <ClutchWidget />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Desktop right-side nav */}
      <div className="hidden lg:flex absolute flex-col items-center z-20"
        style={{ right:24, top:"50%", transform:"translateY(-50%)", gap:10 }}>
        <NavBtn onClick={prev} ariaLabel="Previous slide"><ChevronUp size={14} /></NavBtn>
        <div className="relative flex flex-col items-center" style={{ height:96 }}>
          <div style={{ position:"absolute", width:1, height:"100%", background:"rgba(255,255,255,0.16)", borderRadius:"9999px" }} />
          <motion.div
            animate={{ top:`${(current / total) * 100}%` }}
            transition={{ duration:0.7, ease:[0.4,0,0.2,1] }}
            style={{ position:"absolute", width:2, borderRadius:"9999px", height:`${100/total}%`,
              left:"50%", transform:"translateX(-50%)", background:slide.accent, boxShadow:`0 0 10px ${slide.accent}80` }} />
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <span className="font-jakarta font-bold tabular-nums" style={{ fontSize:11, letterSpacing:"0.14em", color:"rgba(255,255,255,0.9)" }}>{numLabel}</span>
          <span style={{ fontSize:9, color:"rgba(255,255,255,0.26)", letterSpacing:"0.1em" }}>/ {String(total).padStart(2,"0")}</span>
        </div>
        <NavBtn onClick={next} ariaLabel="Next slide"><ChevronDown size={14} /></NavBtn>
      </div>

      {/* Mobile nav */}
      <div className="flex lg:hidden absolute flex-col z-20"
        style={{ right:12, top:"50%", transform:"translateY(-50%)", gap:8 }}>
        <MobileNavBtn onClick={prev} ariaLabel="Previous slide"><ChevronUp size={13} /></MobileNavBtn>
        <MobileNavBtn onClick={next} ariaLabel="Next slide"><ChevronDown size={13} /></MobileNavBtn>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20"
        style={{ borderTop:"1px solid rgba(255,255,255,0.07)", background:"rgba(0,0,0,0.44)",
          backdropFilter:"blur(18px)", WebkitBackdropFilter:"blur(18px)" }}>
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center" style={{ minHeight:52, gap:12 }}>

            <span className="hidden sm:block font-jakarta font-bold uppercase text-white/25 shrink-0"
              style={{ fontSize:9, letterSpacing:"0.22em" }}>Our Expertise</span>
            <div className="hidden sm:block shrink-0" style={{ width:1, height:16, background:"rgba(255,255,255,0.1)" }} />

            <div className="flex items-center flex-1 min-w-0 overflow-x-auto" style={{ scrollbarWidth:"none" }}>
              {SLIDES.map((s, i) => (
                <button key={s.id} onClick={() => goTo(i)}
                  className="relative flex-shrink-0 font-jakarta font-semibold uppercase transition-all duration-300"
                  style={{ fontSize:"clamp(8px,0.8vw,10px)", letterSpacing:"0.1em", padding:"10px 10px",
                    color: i===current?"#fff":"rgba(255,255,255,0.32)",
                    background:"transparent", border:"none", cursor:"pointer", whiteSpace:"nowrap" }}>
                  {i===3 && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2"
                      style={{ width:1, height:14, background:"rgba(255,255,255,0.1)" }} />
                  )}
                  {s.category}
                  <span className="absolute bottom-0 left-2 right-2 rounded-full transition-all duration-500"
                    style={{ height:2, background:i===current?slide.accent:"transparent",
                      boxShadow:i===current?`0 0 8px ${slide.accent}70`:"none" }} />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {SLIDES.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i+1}`}
                  className="rounded-full transition-all duration-300"
                  style={{ height:5, width:i===current?18:5,
                    background:i===current?slide.accent:"rgba(255,255,255,0.24)",
                    boxShadow:i===current?`0 0 7px ${slide.accent}80`:"none" }} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
