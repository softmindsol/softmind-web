"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaArrowRight } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { BsAnthropic } from "react-icons/bs";

const slides = [
  {
    id: 1,
    image: "/images/hero-slide-1.jpg",
    badge: "Product Engineering",
    line1: "You Have an Idea.",
    line2: "We Have the Right\nPeople to Build It.",
    tags: ["Custom Software", "AI Integration", "Agile Teams"],
  },
  {
    id: 2,
    image: "/images/hero-slide-2.jpg",
    badge: "Digital Infrastructure",
    line1: "We Don't Just Build Software.",
    line2: "We Build the Infrastructure\nYour Business Cannot Grow Without.",
    tags: ["Cloud Architecture", "Scalable Systems", "DevOps"],
  },
  {
    id: 3,
    image: "/images/hero-slide-3.jpg",
    badge: "Competitive Advantage",
    line1: "Your Competitors Have a Product.",
    line2: "We Make Yours\nthe One That Wins.",
    tags: ["Product Strategy", "UX Excellence", "Market Leadership"],
  },
];

const techLogos = [
  { name: "Google", icon: <FcGoogle size={28} />, colorClass: "" },
  {
    name: "Meta",
    icon: <FaFacebook size={26} color="#0866FF" />,
    colorClass: "",
  },
  { name: "AWS", icon: <FaAws size={28} color="#FF9900" />, colorClass: "" },
  {
    name: "Anthropic",
    icon: <BsAnthropic size={24} color="#ffffff" />,
    colorClass: "",
  },
];

export default function HomeHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlideIdx, setPrevSlideIdx] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const goToSlide = useCallback(
    (index, dir = "next") => {
      if (isAnimating || index === currentSlide) return;
      setDirection(dir);
      setIsAnimating(true);
      setPrevSlideIdx(currentSlide);
      setTimeout(() => {
        setCurrentSlide(index);
        setPrevSlideIdx(null);
        setIsAnimating(false);
      }, 700);
    },
    [isAnimating, currentSlide],
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length, "next");
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length, "prev");
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <>
      <style>{`
        /* ── Keyframes ── */
        @keyframes imgZoomIn {
          from { transform: scale(1.08); }
          to   { transform: scale(1); }
        }
        @keyframes textSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes textSlideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes progressFill {
          from { height: 0%; }
          to   { height: 100%; }
        }
        @keyframes badgeFadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ── Applied classes ── */
        .hs-img-enter {
          animation: imgZoomIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .hs-badge {
          animation: badgeFadeIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both;
        }
        .hs-line1 {
          animation: textSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both;
        }
        .hs-line2 {
          animation: textSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.28s both;
        }
        .hs-tags {
          animation: textSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s both;
        }
        .hs-cta {
          animation: textSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.5s both;
        }
        .hs-divider {
          animation: lineGrow 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s both;
        }
        .hs-counter {
          animation: fadeIn 0.5s ease 0.3s both;
        }
        .hs-progress-fill {
          animation: progressFill 6s linear forwards;
        }

        /* ── Smooth slide number flip ── */
        @keyframes numUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes numDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .num-enter-next { animation: numUp 0.4s cubic-bezier(0.22,1,0.36,1) both; }
        .num-enter-prev { animation: numDown 0.4s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>

      <section
        className="relative w-full overflow-hidden font-jakarta bg-black"
        style={{ minHeight: "100svh" }}
        aria-label="Hero slider"
      >
        {/* ═══════════════════════════════════════
            BACKGROUND IMAGES
        ═══════════════════════════════════════ */}
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className="absolute inset-0"
            style={{
              opacity: idx === currentSlide ? 1 : 0,
              transition: "opacity 0.8s ease",
              zIndex: 0,
            }}
          >
            <Image
              src={s.image}
              alt={`Slide ${idx + 1}`}
              fill
              priority={idx === 0}
              className={`object-cover object-center ${idx === currentSlide ? "hs-img-enter" : ""}`}
              sizes="100vw"
            />
            {/* Layered overlays — strong left, subtle right */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.20) 100%)",
              }}
            />
            {/* Bottom fade */}
            <div
              className="absolute inset-x-0 bottom-0 h-40"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
              }}
            />
          </div>
        ))}

        {/* ═══════════════════════════════════════
            MAIN CONTENT
        ═══════════════════════════════════════ */}
        <div
          className="relative z-10 flex flex-col justify-between"
          style={{ minHeight: "100svh" }}
        >
          {/* ── Navbar spacer ── */}
          <div style={{ height: "82px" }} />

          {/* ── Content row ── */}
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between gap-8">
              {/* LEFT: Text block */}
              <div className="flex flex-col gap-6 max-w-2xl" key={currentSlide}>
                {/* Badge */}
                <div className="hs-badge">
                  <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/30 text-white/80 text-xs font-bold tracking-[3px] uppercase">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#0CBF83" }}
                    />
                    {slide.badge}
                  </span>
                </div>

                {/* Main heading */}
                <h1 className="text-white font-extrabold leading-none tracking-tight">
                  <span
                    className="hs-line1 block"
                    style={{ fontSize: "clamp(2rem, 5vw, 4rem)", opacity: 0 }}
                  >
                    {slide.line1}
                  </span>
                  <span
                    className="hs-line2 block mt-1"
                    style={{
                      fontSize: "clamp(1.6rem, 4.2vw, 3.4rem)",
                      opacity: 0,
                      color: "transparent",
                      backgroundImage:
                        "linear-gradient(120deg, #ffffff 30%, #a7f3d0 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {slide.line2}
                  </span>
                </h1>

                {/* Tags row */}
                <div
                  className="hs-tags flex flex-wrap gap-2"
                  style={{ opacity: 0 }}
                >
                  {slide.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white/70 border border-white/15 bg-white/5 backdrop-blur-sm tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div
                  className="hs-cta flex flex-wrap gap-4 mt-2"
                  style={{ opacity: 0 }}
                >
                  <button
                    className="group flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(12,191,131,0.4)]"
                    style={{
                      background:
                        "linear-gradient(135deg, #0CBF83 0%, #004BC0 100%)",
                    }}
                  >
                    Book a Discovery Call
                    <FaArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                  <button className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide text-white/80 border border-white/25 bg-white/5 backdrop-blur-sm hover:bg-white/12 hover:border-white/50 hover:text-white transition-all duration-300">
                    View Our Work
                  </button>
                </div>
              </div>

              {/* RIGHT: Vertical counter + arrows */}
              <div className="hidden lg:flex flex-col items-center gap-4 select-none">
                {/* Up arrow */}
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/50 hover:border-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Previous slide"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>

                {/* Vertical progress track */}
                <div className="flex flex-col items-center gap-2">
                  {/* Current number */}
                  <div
                    className={`hs-counter text-white font-bold tabular-nums overflow-hidden ${direction === "next" ? "num-enter-next" : "num-enter-prev"}`}
                    key={currentSlide}
                    style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)" }}
                  >
                    {String(currentSlide + 1).padStart(2, "0")}
                  </div>

                  {/* Vertical track */}
                  <div
                    className="relative w-[2px] bg-white/15 rounded-full overflow-hidden"
                    style={{ height: "80px" }}
                  >
                    <div
                      key={`${currentSlide}-prog`}
                      className="hs-progress-fill absolute top-0 left-0 w-full rounded-full"
                      style={{ backgroundColor: "#0CBF83" }}
                    />
                  </div>

                  {/* Total count */}
                  <div
                    className="text-white/35 font-medium tabular-nums"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String(slides.length).padStart(2, "0")}
                  </div>
                </div>

                {/* Down arrow */}
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/50 hover:border-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label="Next slide"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════
              BOTTOM BAR
          ═══════════════════════════════════════ */}
          <div className="w-full">
            {/* Mobile dot indicators */}
            <div className="flex lg:hidden justify-center gap-2 pb-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    goToSlide(idx, idx > currentSlide ? "next" : "prev")
                  }
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: idx === currentSlide ? "24px" : "8px",
                    height: "8px",
                    backgroundColor:
                      idx === currentSlide
                        ? "#0CBF83"
                        : "rgba(255,255,255,0.3)",
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Divider line */}
            <div className="w-full h-px bg-white/10" />

            {/* Logo bar */}
            <div
              className="w-full"
              style={{
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-5">
                {/* Label */}
                <p className="text-white/40 text-[10px] font-bold tracking-[2.5px] uppercase whitespace-nowrap text-center sm:text-left">
                  Certified &amp; recognised by the world&apos;s leading
                  technology companies
                </p>

                {/* Divider (desktop) */}
                <div className="hidden sm:block w-px h-8 bg-white/10 flex-shrink-0" />

                {/* Logos */}
                <div className="flex items-center gap-8 sm:gap-12">
                  {techLogos.map((logo) => (
                    <div
                      key={logo.name}
                      className="flex flex-col items-center gap-1.5 group cursor-pointer"
                      title={logo.name}
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
          </div>
        </div>

        {/* ═══════════════════════════════════════
            LEFT EDGE: Slide strip (desktop)
        ═══════════════════════════════════════ */}
        <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 flex-col gap-1 pl-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() =>
                goToSlide(idx, idx > currentSlide ? "next" : "prev")
              }
              className="relative overflow-hidden rounded-full transition-all duration-500"
              style={{
                width: "3px",
                height: idx === currentSlide ? "48px" : "16px",
                backgroundColor:
                  idx === currentSlide ? "#0CBF83" : "rgba(255,255,255,0.2)",
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* ═══════════════════════════════════════
            AI BADGE — top center strip
        ═══════════════════════════════════════ */}
        <div className="absolute top-[84px] left-1/2 -translate-x-1/2 z-20 hidden sm:flex">
          <span
            className="inline-flex items-center gap-2 px-5 py-1.5 text-[10px] font-bold tracking-[3px] uppercase text-white/60 border border-white/10 rounded-full"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#0CBF83" }}
            />
            AI Enabled Product Engineering &nbsp;·&nbsp; Digital Solution
            Partner
          </span>
        </div>
      </section>
    </>
  );
}
