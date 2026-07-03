"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaPlane } from "react-icons/fa";

const nodes = [
  {
    id: "01",
    title: "Requirement\nElicitation",
    x: "12.5%",
    y: "79.2%",
    textPos: "top",
    delay: 500,
  },
  {
    id: "02",
    title: "Project\nProposal",
    x: "29.1%",
    y: "54.3%",
    textPos: "top-left",
    delay: 1100,
  },
  {
    id: "03",
    title: "Design &\nArchitecture",
    x: "47.2%",
    y: "45.3%",
    textPos: "top",
    delay: 1700,
  },
  {
    id: "04",
    title: "Development\nPhase",
    x: "41.6%",
    y: "73.6%",
    textPos: "bottom",
    delay: 2400,
  },
  {
    id: "05",
    title: "Testing and QA",
    x: "62.5%",
    y: "67.9%",
    textPos: "bottom",
    delay: 3000,
  },
  {
    id: "06",
    title: "Delivery and\nMaintenance",
    x: "79.1%",
    y: "54.3%",
    textPos: "right",
    delay: 3600,
  },
];

const getTextClasses = (pos) => {
  switch (pos) {
    case "top":
      return "bottom-full mb-4 left-1/2 -translate-x-1/2 text-center w-max";
    case "top-left":
      return "bottom-full mb-2 right-1/2 mr-4 text-right w-max";
    case "bottom":
      return "top-full mt-4 left-1/2 -translate-x-1/2 text-center w-max";
    case "right":
      return "left-full ml-5 top-1/2 -translate-y-1/2 text-left w-max";
    default:
      return "";
  }
};

const HowWeWorkProp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pathLength, setPathLength] = useState(0);
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#161616] py-20 lg:py-24 overflow-hidden font-jakarta"
    >
      <style>
        {`
          @keyframes dash-flow {
            from { stroke-dashoffset: 320; }
            to { stroke-dashoffset: 0; }
          }
          .animate-dash-flow {
            animation: dash-flow 8s linear infinite;
          }
        `}
      </style>

      {/* Top Glow */}
      <div className="absolute left-1/2 top-[-187px] h-[490px] w-[490px] -translate-x-1/2 rounded-full bg-navy blur-[212.4px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-10 text-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-navy to-[#004BC0]" />
            <h3 className="text-[20px] lg:text-[22px] font-bold tracking-[1px] text-green">
              How We Work
            </h3>
          </div>
          <h2 className="max-w-[900px] text-[32px] md:text-[46px] font-bold leading-[1.2] lg:leading-[58px] tracking-[1px] text-white capitalize">
            Purpose Written Into Every Line Of Code.
          </h2>
        </div>

        {/* Desktop Path Layout */}
        <div
          className={`relative w-full -mt-28 hidden lg:block mx-auto aspect-[1440/883] pointer-events-none transition-opacity duration-300 ${pathLength > 0 ? "opacity-100" : "opacity-0"}`}
        >
          <svg
            viewBox="0 0 1440 883"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <path
                id="main-path"
                ref={pathRef}
                d="M 100 800
                   C 140 780, 160 750, 180 700
                   C 280 580, 330 520, 420 480
                   C 500 440, 600 400, 680 400
                   C 850 400, 850 650, 600 650
                   C 400 650, 400 450, 600 500
                   C 750 540, 800 550, 900 600
                   C 1000 650, 1080 550, 1140 480
                   C 1250 350, 1150 200, 1050 280
                   C 950 360, 1050 450, 1150 400
                   C 1200 370, 1250 340, 1300 310"
              />
              <mask id="desktop-path-mask">
                <use
                  href="#main-path"
                  stroke="white"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={pathLength}
                  strokeDashoffset={isVisible ? 0 : pathLength}
                  style={{
                    transition: isVisible
                      ? "stroke-dashoffset 4.2s linear"
                      : "none",
                  }}
                />
              </mask>
            </defs>
            <use
              href="#main-path"
              fill="none"
              stroke="#0CBF83"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="animate-dash-flow"
              mask="url(#desktop-path-mask)"
            />
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute flex flex-col items-center pointer-events-auto"
              style={{
                left: node.x,
                top: node.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className={`relative flex flex-col items-center transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-90"}`}
                style={{ transitionDelay: `${node.delay}ms` }}
              >
                <div
                  className={`absolute text-white font-medium text-[20px] whitespace-pre-line leading-[1.2] ${getTextClasses(node.textPos)}`}
                >
                  {node.title}
                </div>
                <div className="w-12 h-12 rounded-full bg-green flex items-center justify-center text-white font-medium text-[20px] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] relative z-10 group hover:scale-110 transition-transform cursor-default">
                  {node.id}
                </div>
              </div>
            </div>
          ))}

          {/* Plane */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "90.2%",
              top: "35.1%",
              transform: "translate(-50%, -50%) rotate(-45deg)",
            }}
          >
            <div
              className={`transition-all duration-500 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
              style={{ transitionDelay: "4100ms" }}
            >
              <FaPlane className="text-green text-[40px] drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* Mobile Timeline Layout */}
        <div className="lg:hidden flex flex-col space-y-16 relative px-4 mt-16 w-full max-w-md mx-auto pb-4">
          <div
            className="absolute left-[39px] top-6 w-[2px] overflow-hidden bg-transparent"
            style={{
              height: isVisible ? "calc(100% - 60px)" : "0%",
              transition: isVisible ? "height 4.2s linear" : "none",
            }}
          >
            <div className="absolute top-0 left-0 w-[2px] h-[2000px]">
              <svg width="2" height="100%">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="100%"
                  stroke="#0CBF83"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  className="animate-dash-flow"
                />
              </svg>
            </div>
          </div>

          {nodes.map((node, index) => (
            <div
              key={node.id}
              className={`flex items-center gap-6 relative z-10 transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 600 + 400}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-green shrink-0 flex items-center justify-center text-white font-medium text-[20px] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]">
                {node.id}
              </div>
              <div className="text-white font-medium text-[18px] sm:text-[20px] whitespace-pre-line leading-[1.2]">
                {node.title.replace("\n", " ")}
              </div>
            </div>
          ))}

          {/* Mobile Plane */}
          <div
            className={`flex items-center gap-6 relative z-10 pt-2 transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${nodes.length * 600 + 400}ms` }}
          >
            <div className="w-12 h-12 shrink-0 flex items-center justify-center">
              <FaPlane className="text-green text-[32px] transform -rotate-45" />
            </div>
            <div className="text-white opacity-80 font-medium text-[18px] sm:text-[20px]">
              Ready for Takeoff
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkProp;
