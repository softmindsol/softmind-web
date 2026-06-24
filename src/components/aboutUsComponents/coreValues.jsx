"use client";

import { useEffect, useRef, useState } from "react";
import { Handshake, Coins, Users, Award, Star } from "lucide-react";

// Helper to convert polar coordinates to cartesian for SVG paths
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

// Generates an SVG path for a perfect wedge/slice
function getSlicePath(cx, cy, innerRadius, outerRadius, a1, a2) {
  const p1 = polarToCartesian(cx, cy, outerRadius, a1);
  const p2 = polarToCartesian(cx, cy, outerRadius, a2);
  const p3 = polarToCartesian(cx, cy, innerRadius, a2);
  const p4 = polarToCartesian(cx, cy, innerRadius, a1);

  return [
    "M",
    p1.x,
    p1.y,
    "A",
    outerRadius,
    outerRadius,
    0,
    0,
    1,
    p2.x,
    p2.y,
    "L",
    p3.x,
    p3.y,
    "A",
    innerRadius,
    innerRadius,
    0,
    0,
    0,
    p4.x,
    p4.y,
    "Z",
  ].join(" ");
}

// Generates an SVG path for a simple arc
function getArcPath(cx, cy, radius, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, radius, startAngle);
  const end = polarToCartesian(cx, cy, radius, endAngle);
  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    0,
    0,
    end.x,
    end.y,
  ].join(" ");
}

const values = [
  {
    id: 1,
    title: "Confidence in Every Step",
    desc: "We build trust by following a clear, proven process that ensures transparency, consistency, and results at every stage of your digital journey.",
    icon: Handshake,
    a1: 237.2,
    a2: 270,
    textLeft: "calc(50% - 540px)",
    textTop: "150px",
  },
  {
    id: 2,
    title: "Value-Driven Growth",
    desc: "We focus on creating meaningful outcomes that drive sustainable growth, strengthen your digital presence, and deliver lasting impact ensuring every solution is built to benefit your business and your audience, not just the bottom line.",
    icon: Coins,
    a1: 200.4,
    a2: 233.2,
    textLeft: "calc(50% - 500px)",
    textTop: "420px",
  },
  {
    id: 3,
    title: "Partnership Over Rivalry",
    desc: "We believe the best results come from working together. By fostering open communication, shared ideas, and strong partnerships, we create solutions that are more innovative, effective, and aligned with your goals turning collaboration into a true competitive advantage.",
    icon: Users,
    a1: 163.6,
    a2: 196.4,
    textLeft: "calc(50% - 170px)",
    textTop: "620px",
  },
  {
    id: 4,
    title: "Commitment Over Results",
    desc: "We believe consistent effort and dedication are the foundation of meaningful success. By focusing on quality, persistence, and continuous improvement, we ensure every step we take contributes to stronger outcomes and long-term growth.",
    icon: Award,
    a1: 126.8,
    a2: 159.6,
    textLeft: "calc(50% + 180px)",
    textTop: "420px",
  },
  {
    id: 5,
    title: "Excellence Before Achievement",
    desc: "We deliver exceptional quality with high standards, refining every detail to create lasting impact and sustainable growth.",
    icon: Star,
    a1: 90,
    a2: 122.8,
    textLeft: "calc(50% + 220px)",
    textTop: "150px",
  },
];

const CoreValues = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-[#161616] overflow-hidden font-jakarta flex flex-col items-center"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00235A] rounded-full blur-[180px] opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full px-6 sm:px-12 flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 mb-12 lg:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00235A] to-[#004BC0]" />
            <span className="text-[16px] sm:text-[18px] font-bold text-[#0CBF83] tracking-wide">
              Our Core Values
            </span>
          </div>
          <h2 className="text-[36px] sm:text-[46px] font-bold text-white leading-tight capitalize max-w-[950px]">
            Values That Drive Us
          </h2>
        </div>

        {/* Desktop Layout (Pie Chart Wedges) */}
        <div className="hidden lg:block relative w-full h-[850px] mt-10">
          {/* Central Blue Circle */}
          <div
            className="absolute left-1/2 w-[220px] h-[220px] rounded-full bg-[#00235A] flex items-center justify-center shadow-[0_0_50px_rgba(0,35,90,0.8)] z-30 transition-all duration-1000 ease-out"
            style={{
              top: "300px",
              transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.5})`,
              opacity: isVisible ? 1 : 0,
            }}
          >
            <span className="text-white font-bold text-[34px] text-center leading-[1.2]">
              Core
              <br />
              Value
            </span>
          </div>

          {/* SVG Container for Wedges and Lines */}
          <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none z-10">
            {/* Dashed Arc */}
            <path
              d={getArcPath(400, 300, 115, 270, 90)}
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              className="transition-opacity duration-1000 ease-in-out"
              style={{ opacity: isVisible ? 0.3 : 0, transitionDelay: "600ms" }}
            />

            {/* Connecting Lines and Dots */}
            {values.map((val, index) => {
              const angle = (val.a1 + val.a2) / 2;
              const p1 = polarToCartesian(400, 300, 115, angle);
              const p2 = polarToCartesian(400, 300, 130, angle);
              return (
                <g
                  key={`link-${val.id}`}
                  className="transition-opacity duration-1000 ease-in-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${index * 150 + 800}ms`,
                  }}
                >
                  <circle cx={p1.x} cy={p1.y} r="3" fill="white" />
                  <line
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </g>
              );
            })}

            {/* The 5 Wedges */}
            {values.map((val, index) => (
              <path
                key={`path-${val.id}`}
                d={getSlicePath(400, 300, 130, 260, val.a1, val.a2)}
                fill={hovered === val.id ? "#0CBF83" : "white"}
                stroke={hovered === val.id ? "#0CBF83" : "white"}
                strokeWidth="12"
                strokeLinejoin="round"
                className="transition-all duration-300 pointer-events-auto cursor-pointer"
                onMouseEnter={() => setHovered(val.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  transform: `scale(${isVisible ? 1 : 0})`,
                  transformOrigin: "400px 300px",
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
              />
            ))}
          </svg>

          {/* HTML Overlay for Icons and Text */}
          {values.map((val, index) => {
            const angleRad = (val.a1 + val.a2) / 2;
            const { x, y } = polarToCartesian(400, 300, 195, angleRad);

            return (
              <div key={`node-${val.id}`}>
                {/* Icon inside the wedge */}
                <div
                  className="absolute z-20 w-[48px] h-[48px] flex items-center justify-center transition-all duration-300 cursor-pointer pointer-events-auto"
                  style={{
                    left: `calc(50% + ${x - 400}px)`,
                    top: `${y}px`,
                    transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0})`,
                    transitionDelay: isVisible
                      ? `${index * 150 + 100}ms`
                      : "0ms",
                  }}
                  onMouseEnter={() => setHovered(val.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <val.icon
                    className={`w-8 h-8 transition-colors duration-300 ${
                      hovered === val.id ? "text-white" : "text-[#00235A]"
                    }`}
                  />
                </div>

                {/* Text Block outside the wedge */}
                <div
                  className="absolute z-20 w-[320px] transition-all duration-1000 ease-out"
                  style={{
                    left: val.textLeft,
                    top: val.textTop,
                    opacity: isVisible ? 1 : 0,
                    transform: `translateY(${isVisible ? 0 : 30}px)`,
                    transitionDelay: `${index * 150 + 600}ms`,
                  }}
                  onMouseEnter={() => setHovered(val.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <h3
                    className={`text-[22px] font-bold transition-colors duration-300 mb-3 leading-tight ${hovered === val.id ? "text-[#0CBF83]" : "text-white"}`}
                  >
                    {val.title}
                  </h3>
                  <p className="text-[15px] font-medium text-gray-400 leading-[1.6]">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Layout (Vertical/Grid) */}
        <div className="lg:hidden flex flex-col gap-6 w-full mt-8">
          {values.map((val, index) => (
            <div
              key={`mob-${val.id}`}
              className={`flex flex-col sm:flex-row items-start gap-5 p-6 sm:p-8 rounded-[20px] bg-white/[0.03] border border-white/5 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-[60px] h-[60px] rounded-xl bg-white flex items-center justify-center shrink-0 shadow-lg">
                <val.icon className="w-7 h-7 text-[#00235A]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] sm:text-[22px] font-bold text-white leading-tight">
                  {val.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] font-medium text-gray-400 leading-[1.6]">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
