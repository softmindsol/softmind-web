"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaArrowRight } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { BsAnthropic } from "react-icons/bs";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

/** How long each slide stays visible before auto-advancing (ms) */
const AUTO_PLAY_INTERVAL = 6000;

/**
 * Height offset to pull the hero section behind the sticky navbar.
 * Breakdown: navbar height (64px) + sticky top gap (16px) + buffer (2px) = 82px
 */
const NAVBAR_OFFSET = 82;

/** Vertical spacing inside the section to push content below the navbar */
const CONTENT_TOP_SPACER = 98;

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

/** Each slide's content. Add or edit slides here without touching the component. */
const SLIDES = [
  {
    id: 1,
    image: "/images/hero-slide-1.jpg",
    badge: "Product Engineering",
    heading: "You Have an Idea.",
    subheading: "We Have the Right\nPeople to Build It.",
    tags: ["Custom Software", "AI Integration", "Agile Teams"],
  },
  {
    id: 2,
    image: "/images/hero-slide-2.jpg",
    badge: "Digital Infrastructure",
    heading: "We Don't Just Build Software.",
    subheading: "We Build the Infrastructure\nYour Business Cannot Grow Without.",
    tags: ["Cloud Architecture", "Scalable Systems", "DevOps"],
  },
  {
    id: 3,
    image: "/images/hero-slide-3.jpg",
    badge: "Competitive Advantage",
    heading: "Your Competitors Have a Product.",
    subheading: "We Make Yours\nthe One That Wins.",
    tags: ["Product Strategy", "UX Excellence", "Market Leadership"],
  },
];

/** Technology partners shown in the bottom logo bar. */
const TECH_LOGOS = [
  { name: "Google",    icon: <FcGoogle size={28} /> },
  { name: "Meta",      icon: <FaFacebook size={26} color="#0866FF" /> },
  { name: "AWS",       icon: <FaAws size={28} color="#FF9900" /> },
  { name: "Anthropic", icon: <BsAnthropic size={24} color="#ffffff" /> },
];

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION STYLES
// Injected as a <style> tag so we can use keyframes with Tailwind classes.
// ─────────────────────────────────────────────────────────────────────────────

const ANIMATION_STYLES = `
  /* Background image subtle zoom on slide enter */
  @keyframes imgZoomIn {
    from { transform: scale(1.08); }
    to   { transform: scale(1); }
  }

  /* Slide text reveals upward */
  @keyframes textSlideUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Badge slides in from left */
  @keyframes badgeFadeIn {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  /* Simple fade for counter number */
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Vertical progress track fill */
  @keyframes progressFill {
    from { height: 0%; }
    to   { height: 100%; }
  }

  /* Slide counter number animations */
  @keyframes numUp   { from { opacity: 0; transform: translateY(16px);  } to { opacity: 1; transform: translateY(0); } }
  @keyframes numDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }

  /* ── Utility classes ── */
  .hs-img-enter    { animation: imgZoomIn  1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards; }
  .hs-badge        { animation: badgeFadeIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.10s both; }
  .hs-heading      { animation: textSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
  .hs-subheading   { animation: textSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.28s both; }
  .hs-tags         { animation: textSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.40s both; }
  .hs-cta          { animation: textSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.50s both; }
  .hs-counter      { animation: fadeIn      0.5s ease                        0.30s both; }
  .hs-prog-fill    { animation: progressFill 6s linear forwards; }
  .num-enter-next  { animation: numUp   0.4s cubic-bezier(0.22,1,0.36,1) both; }
  .num-enter-prev  { animation: numDown 0.4s cubic-bezier(0.22,1,0.36,1) both; }
`;

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** Renders all slide background images (only the active one is visible). */
function SlideBackgrounds({ slides, currentSlide }) {
  return (
    <>
      {slides.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id}
            className="absolute inset-0"
            style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.8s ease", zIndex: 0 }}
          >
            <Image
              src={slide.image}
              alt={`Hero slide ${idx + 1}: ${slide.heading}`}
              fill
              priority={idx === 0}
              className={`object-cover object-center ${isActive ? "hs-img-enter" : ""}`}
              sizes="100vw"
            />
            {/* Left-heavy dark gradient so left-aligned text stays readable */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.20) 100%)",
              }}
            />
            {/* Bottom fade to blend into the logo bar */}
            <div
              className="absolute inset-x-0 bottom-0 h-40"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }}
            />
          </div>
        );
      })}
    </>
  );
}

/** Left-aligned text block: badge → heading → subheading → tags → CTA buttons. */
function SlideContent({ slide, onDiscoveryCall, onViewWork }) {
  return (
    <div className="flex flex-col gap-6 max-w-2xl">

      {/* ── Category badge ── */}
      <div className="hs-badge">
        <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/30 text-white/80 text-xs font-bold tracking-[3px] uppercase">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#0CBF83" }} />
          {slide.badge}
        </span>
      </div>

      {/* ── Main heading ── */}
      <h1 className="text-white font-extrabold leading-none tracking-tight">
        {/* Line 1 — plain white */}
        <span
          className="hs-heading block"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", opacity: 0 }}
        >
          {slide.heading}
        </span>

        {/* Line 2 — white-to-green gradient */}
        <span
          className="hs-subheading block mt-1"
          style={{
            fontSize: "clamp(1.6rem, 4.2vw, 3.4rem)",
            opacity: 0,
            color: "transparent",
            backgroundImage: "linear-gradient(120deg, #ffffff 30%, #a7f3d0 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            whiteSpace: "pre-line",
          }}
        >
          {slide.subheading}
        </span>
      </h1>

      {/* ── Keyword tags ── */}
      <div className="hs-tags flex flex-wrap gap-2" style={{ opacity: 0 }}>
        {slide.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-semibold text-white/70 border border-white/15 bg-white/5 backdrop-blur-sm tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ── CTA buttons ── */}
      <div className="hs-cta flex flex-wrap gap-4 mt-2" style={{ opacity: 0 }}>
        <button
          onClick={onDiscoveryCall}
          className="group flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(12,191,131,0.4)]"
          style={{ background: "linear-gradient(135deg, #0CBF83 0%, #004BC0 100%)" }}
        >
          Book a Discovery Call
          <FaArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <button
          onClick={onViewWork}
          className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide text-white/80 border border-white/25 bg-white/5 backdrop-blur-sm hover:bg-white/12 hover:border-white/50 hover:text-white transition-all duration-300"
        >
          View Our Work
        </button>
      </div>
    </div>
  );
}

/**
 * Vertical slide counter panel shown on the right side (desktop only).
 * Displays: ↑ | current# | progress bar | total# | ↓
 */
function VerticalCounter({ currentSlide, totalSlides, direction, onPrev, onNext }) {
  const currentLabel = String(currentSlide + 1).padStart(2, "0");
  const totalLabel   = String(totalSlides).padStart(2, "0");

  return (
    <div className="hidden lg:flex flex-col items-center gap-4 select-none">

      {/* ↑ Prev */}
      <SliderArrowButton onClick={onPrev} direction="up" ariaLabel="Previous slide" />

      {/* Number + progress track + total */}
      <div className="flex flex-col items-center gap-2">
        <div
          key={currentSlide}
          className={`hs-counter text-white font-bold tabular-nums ${direction === "next" ? "num-enter-next" : "num-enter-prev"}`}
          style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)" }}
        >
          {currentLabel}
        </div>

        {/* Vertical progress track */}
        <div className="relative w-[2px] bg-white/15 rounded-full overflow-hidden" style={{ height: "80px" }}>
          <div
            key={`${currentSlide}-prog`}
            className="hs-prog-fill absolute top-0 left-0 w-full rounded-full"
            style={{ backgroundColor: "#0CBF83" }}
          />
        </div>

        <div className="text-white/35 font-medium tabular-nums" style={{ fontSize: "0.85rem" }}>
          {totalLabel}
        </div>
      </div>

      {/* ↓ Next */}
      <SliderArrowButton onClick={onNext} direction="down" ariaLabel="Next slide" />
    </div>
  );
}

/** Small circular arrow button used in VerticalCounter and for mobile nav. */
function SliderArrowButton({ onClick, direction, ariaLabel }) {
  const path = direction === "up" ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7";
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/50 hover:border-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
    </button>
  );
}

/** Mobile-only horizontal dot indicators at the bottom. */
function MobileDots({ slides, currentSlide, goToSlide }) {
  return (
    <div className="flex lg:hidden justify-center gap-2 pb-4">
      {slides.map((_, idx) => (
        <button
          key={idx}
          onClick={() => goToSlide(idx, idx > currentSlide ? "next" : "prev")}
          aria-label={`Go to slide ${idx + 1}`}
          className="rounded-full transition-all duration-300"
          style={{
            width: idx === currentSlide ? "24px" : "8px",
            height: "8px",
            backgroundColor: idx === currentSlide ? "#0CBF83" : "rgba(255,255,255,0.3)",
          }}
        />
      ))}
    </div>
  );
}

/** Bottom bar: certified-by label + tech partner logos. */
function LogoBar({ logos }) {
  return (
    <div
      className="w-full"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(16px)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-5">

        <p className="text-white/40 text-[10px] font-bold tracking-[2.5px] uppercase whitespace-nowrap text-center sm:text-left">
          Certified &amp; recognised by the world&apos;s leading technology companies
        </p>

        {/* Vertical divider (desktop only) */}
        <div className="hidden sm:block w-px h-8 bg-white/10 flex-shrink-0" />

        <div className="flex items-center gap-8 sm:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              title={logo.name}
              className="flex flex-col items-center gap-1.5 group cursor-pointer"
            >
              <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-7">
                {logo.icon}
              </div>
              <span className="text-white/35 text-[8px] font-bold tracking-[2px] uppercase group-hover:text-white/60 transition-colors duration-300">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Left-edge vertical strip indicators (desktop).
 * Active slide = tall green bar; others = short dim bars.
 */
function LeftEdgeStrip({ slides, currentSlide, goToSlide }) {
  return (
    <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 flex-col gap-1 pl-3">
      {slides.map((_, idx) => (
        <button
          key={idx}
          onClick={() => goToSlide(idx, idx > currentSlide ? "next" : "prev")}
          aria-label={`Go to slide ${idx + 1}`}
          className="rounded-full transition-all duration-500"
          style={{
            width: "3px",
            height: idx === currentSlide ? "48px" : "16px",
            backgroundColor: idx === currentSlide ? "#0CBF83" : "rgba(255,255,255,0.2)",
          }}
        />
      ))}
    </div>
  );
}

/** Top-center "AI Enabled Product Engineering" branding strip. */
function AiBadge() {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 z-20 hidden sm:flex"
      style={{ top: `${CONTENT_TOP_SPACER + 2}px` }}
    >
      <span
        className="inline-flex items-center gap-2 px-5 py-1.5 text-[10px] font-bold tracking-[3px] uppercase text-white/60 border border-white/10 rounded-full"
        style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#0CBF83" }} />
        AI Enabled Product Engineering &nbsp;·&nbsp; Digital Solution Partner
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function HomeHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating]   = useState(false);
  const [direction, setDirection]       = useState("next");

  // ── Navigation logic ──────────────────────────────────────────────────────

  const goToSlide = useCallback(
    (index, dir = "next") => {
      if (isAnimating || index === currentSlide) return;

      setDirection(dir);
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 700);
    },
    [isAnimating, currentSlide],
  );

  const goToNext = useCallback(
    () => goToSlide((currentSlide + 1) % SLIDES.length, "next"),
    [currentSlide, goToSlide],
  );

  const goToPrev = useCallback(
    () => goToSlide((currentSlide - 1 + SLIDES.length) % SLIDES.length, "prev"),
    [currentSlide, goToSlide],
  );

  // ── Auto-play ─────────────────────────────────────────────────────────────

  useEffect(() => {
    const timer = setInterval(goToNext, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext]);

  // ── Render ────────────────────────────────────────────────────────────────

  const activeSlide = SLIDES[currentSlide];

  return (
    <>
      {/* Inject keyframe animations */}
      <style>{ANIMATION_STYLES}</style>

      <section
        className="relative w-full overflow-hidden font-jakarta bg-black"
        style={{
          marginTop: `-${NAVBAR_OFFSET}px`,
          minHeight: `calc(100svh + ${NAVBAR_OFFSET}px)`,
        }}
        aria-label="Hero slider"
      >
        {/* Layer 1 — Background images (z-0) */}
        <SlideBackgrounds slides={SLIDES} currentSlide={currentSlide} />

        {/* Layer 2 — Foreground content (z-10) */}
        <div
          className="relative z-10 flex flex-col justify-between"
          style={{ minHeight: `calc(100svh + ${NAVBAR_OFFSET}px)` }}
        >
          {/* Push content below the navbar */}
          <div style={{ height: `${CONTENT_TOP_SPACER}px` }} aria-hidden="true" />

          {/* Main content row: text left, counter right */}
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between gap-8">
              <SlideContent
                key={currentSlide}    /* re-mounts on slide change to replay animations */
                slide={activeSlide}
                onDiscoveryCall={() => {}}
                onViewWork={() => {}}
              />
              <VerticalCounter
                currentSlide={currentSlide}
                totalSlides={SLIDES.length}
                direction={direction}
                onPrev={goToPrev}
                onNext={goToNext}
              />
            </div>
          </div>

          {/* Bottom bar: mobile dots + logo row */}
          <div className="w-full">
            <MobileDots slides={SLIDES} currentSlide={currentSlide} goToSlide={goToSlide} />
            <div className="w-full h-px bg-white/10" />
            <LogoBar logos={TECH_LOGOS} />
          </div>
        </div>

        {/* Layer 3 — Absolute overlays (z-20) */}
        <LeftEdgeStrip slides={SLIDES} currentSlide={currentSlide} goToSlide={goToSlide} />
        <AiBadge />
      </section>
    </>
  );
}
