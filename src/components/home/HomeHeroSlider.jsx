"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import CustomButton from "../customs/customButton";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { BsAnthropic } from "react-icons/bs";

const slides = [
  {
    id: 1,
    image: "/images/hero-slide-1.jpg",
    line1: "You Have an Idea.",
    line2: "We Have the Right People to Build It.",
  },
  {
    id: 2,
    image: "/images/hero-slide-2.jpg",
    line1: "We Don't Just Build Software.",
    line2: "We Build the Infrastructure Your Business Cannot Grow Without.",
  },
  {
    id: 3,
    image: "/images/hero-slide-3.jpg",
    line1: "Your Competitors Have a Product.",
    line2: "We Make Yours the One That Wins.",
  },
];

const techLogos = [
  {
    name: "Google",
    svg: <FcGoogle size={22} />,
  },
  {
    name: "Meta",
    svg: <FaFacebook size={22} />,
  },
  {
    name: "AWS",
    svg: <FaAws size={22} />,
  },
  {
    name: "Anthropic",
    svg: <BsAnthropic size={22} />,
  },
];

export default function HomeHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const goToSlide = useCallback(
    (index, dir = "next") => {
      if (isAnimating || index === currentSlide) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 600);
    },
    [isAnimating, currentSlide],
  );

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next, "next");
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev, "prev");
  }, [currentSlide, goToSlide]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroBadgeIn {
          from { opacity: 0; transform: translateY(-10px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutToLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-60px); }
        }
        @keyframes slideOutToRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(60px); }
        }
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(12,191,131,0.4); }
          50% { box-shadow: 0 0 0 8px rgba(12,191,131,0); }
        }
        .hero-text-enter-next {
          animation: slideInFromRight 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .hero-text-enter-prev {
          animation: slideInFromLeft 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .hero-text-exit-next {
          animation: slideOutToLeft 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .hero-text-exit-prev {
          animation: slideOutToRight 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .hero-badge-anim {
          animation: heroBadgeIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s both;
        }
        .hero-progress-bar {
          animation: progressBar 5s linear forwards;
        }
        .hero-badge-pulse {
          animation: badgePulse 2.5s ease-in-out infinite;
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden font-jakarta"
        style={{ minHeight: "100svh" }}
      >
        {/* ── Full-bleed background images ── */}
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: idx === currentSlide ? 1 : 0, zIndex: 0 }}
          >
            <Image
              src={slide.image}
              alt={`Hero slide ${idx + 1}`}
              fill
              priority={idx === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
          </div>
        ))}

        {/* ── Slide content ── */}
        <div
          className="relative z-10 flex flex-col items-center justify-between w-full h-full"
          style={{ minHeight: "100svh" }}
        >
          {/* Top spacer (navbar height) */}
          <div className="w-full" style={{ height: "80px" }} />

          {/* ── AI Badge + Text + CTAs ── */}
          <div className="flex flex-col items-center w-full px-4 gap-8 flex-1 justify-center">
            {/* AI Badge */}
            <div className="hero-badge-anim">
              <span
                className="hero-badge-pulse inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase border border-green/40 bg-white/10 backdrop-blur-md text-white"
                style={{ letterSpacing: "0.12em" }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#0CBF83" }}
                />
                AI Enabled Product Engineering &nbsp;&bull;&nbsp; Digital
                Solution Partner
              </span>
            </div>

            {/* Slide Text */}
            <div
              key={currentSlide}
              className={`text-center px-4 max-w-5xl mx-auto ${
                isAnimating
                  ? direction === "next"
                    ? "hero-text-exit-next"
                    : "hero-text-exit-prev"
                  : direction === "next"
                    ? "hero-text-enter-next"
                    : "hero-text-enter-prev"
              }`}
            >
              <h1 className="text-white font-bold leading-tight">
                <span
                  className="block text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #ffffff 0%, #a7f3d0 100%)",
                    fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)",
                    lineHeight: 1.2,
                  }}
                >
                  {slides[currentSlide].line1}
                </span>
                <span
                  className="block mt-3 text-white/90"
                  style={{
                    fontSize: "clamp(1.25rem, 3vw, 2.25rem)",
                    lineHeight: 1.35,
                    fontWeight: 500,
                  }}
                >
                  {slides[currentSlide].line2}
                </span>
              </h1>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap justify-center items-center gap-4"
              style={{
                animation:
                  "heroFadeIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both",
              }}
            >
              <CustomButton btnText="Book a Discovery Call" />
              <Button
                variant="outline"
                className="px-6 text-white border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/70 transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* ── Bottom: Progress bars + Logo bar ── */}
          <div className="w-full">
            {/* Progress bars */}
            <div className="flex w-full gap-1 px-6 pb-2 max-w-4xl mx-auto">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    goToSlide(idx, idx > currentSlide ? "next" : "prev")
                  }
                  className="relative flex-1 h-[3px] bg-white/25 rounded-full overflow-hidden cursor-pointer"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <span
                    key={`${idx}-${currentSlide}`}
                    className={`absolute inset-y-0 left-0 rounded-full ${
                      idx === currentSlide ? "hero-progress-bar" : ""
                    }`}
                    style={{
                      backgroundColor: "#0CBF83",
                      width:
                        idx < currentSlide
                          ? "100%"
                          : idx === currentSlide
                            ? undefined
                            : "0%",
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Logo bar */}
            <div className="w-full backdrop-blur-md border-t border-white/10">
              <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-white text-xs font-semibold tracking-[2px] uppercase text-center sm:text-left whitespace-nowrap">
                  Certified &amp; recognised by the world&apos;s leading
                  technology companies
                </span>
                <div className="flex items-center gap-6 sm:gap-10">
                  {techLogos.map((logo) => (
                    <div
                      key={logo.name}
                      className="flex flex-col items-center gap-1 transition-all duration-300 cursor-pointer group"
                      title={logo.name}
                    >
                      <div className="text-white filter transition-all duration-300">
                        {logo.svg}
                      </div>
                      <span className="text-white/60 text-[9px] font-bold tracking-widest uppercase group-hover:text-white/90 transition-colors duration-300">
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Prev / Next arrows ── */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* ── Dot indicators ── */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() =>
                goToSlide(idx, idx > currentSlide ? "next" : "prev")
              }
              className={`rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "w-6 h-2"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
              style={idx === currentSlide ? { backgroundColor: "#0CBF83" } : {}}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
