"use client";
import React from "react";
import Image from "next/image";
import {
  Uptenhealth,
  PixelValues,
  MurArt,
  MCC,
  Flomo,
  ERP,
  Bitinpeace,
  Cedia,
  Traids,
} from "../../../public/images/icons";

export default function ClientLogos() {
  const logos = [
    { src: Uptenhealth, alt: "Uptenhealth" },
    { src: PixelValues, alt: "PixelValues" },
    { src: MurArt, alt: "MurArt" },
    { src: MCC, alt: "MCC" },
    { src: Flomo, alt: "Flomo" },
    { src: ERP, alt: "ERP" },
    { src: Cedia, alt: "Cedia" },
    { src: Traids, alt: "Traids" },
    { src: Bitinpeace, alt: "Bitinpeace" },
  ];

  return (
    <section className="relative w-full py-12 overflow-hidden border-b border-gray-100 font-jakarta">
      {/* Self-contained Infinite Marquee Styles */}
      <style jsx="true">{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto px-6 md:px-12 mb-6 text-center">
        <span className="text-xs font-bold tracking-[2px] uppercase text-grey">
          Trusted by Innovative Teams Worldwide
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Shadow Overlays for smooth fade-in/fade-out on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Row */}
        <div className="marquee-container flex items-center gap-16 md:gap-24 py-2">
          {/* First set of logos */}
          {logos.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer select-none h-12 w-32"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
          {/* Duplicated set for seamless loop */}
          {logos.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer select-none h-12 w-32"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
