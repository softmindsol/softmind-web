import Image from "next/image";
import React from "react";
import { SoftMindSolLogo } from "../../../public/images";
import { TbAdjustmentsDollar, TbHeartPlus } from "react-icons/tb";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineShoppingCart, HiSparkles } from "react-icons/hi2";

export default function WhatWeOffer() {
  const offerings = [
    {
      title: "PropTech",
      description:
        "We build proptech solutions that simplify property management, automate operations, and improve real estate experiences.",
      // Custom SVG icon representing property/real-estate
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#0CBF83"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3"
          />
        </svg>
      ),
    },
    {
      title: "FinTech",
      description:
        "We build fintech solutions that simplify financial operations, improve user experiences, and streamline digital transactions.",
      // Custom SVG icon representing financial operations
      icon: <TbAdjustmentsDollar className="w-5 h-5 text-green" />,
    },
    {
      title: "EdTech",
      description:
        "We build edtech solutions that enhance learning experiences, simplify education management, and improve digital collaboration.",
      // Custom SVG icon representing learning/education
      icon: <SlGraduation className="h-5 w-5" />,
    },
    {
      title: "HealthTech",
      description:
        "We build healthtech solutions that streamline healthcare operations, improve patient experiences, and simplify digital care management.",
      // Custom SVG icon representing health/heart
      icon: <TbHeartPlus className="h-5 w-5" />,
    },
    {
      title: "AI Services",
      description:
        "We build intelligent solutions that automate workflows, improve efficiency, and enhance digital experiences.",
      // Custom SVG icon representing AI/Sparks
      icon: <HiSparkles className="h-5 w-5" />,
    },
    {
      title: "E-Commerce",
      description:
        "We build ecommerce solutions that streamline online sales, improve customer experiences, and simplify business operations.",
      // Custom SVG icon representing cart/sales
      icon: <HiOutlineShoppingCart className="h-5 w-5" />,
    },
  ];

  return (
    <section className="relative w-full bg-[#161617] text-white py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Background radial glow element (matching "Ellipse 25" in design file) */}
      <div
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 blur-[180px]"
        style={{ backgroundColor: "navy" }}
      />

      {/* Stylized background monogram watermark on the left (matching "SoftOps Monogram") */}
      <div className="absolute select-none pointer-events-none">
        <Image
          src={SoftMindSolLogo}
          alt="SoftMindSol Logo"
          className="object-cover max-h-[726px]"
        />
      </div>

      <div className="relative mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Header Label: Industries We Work With */}
        <div className="flex items-center gap-2 mb-4">
          {/* Custom gradient dot bullet point */}
          <span className="size-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#004BC0]" />
          <span className="text-green text-sm md:text-[22px] font-bold tracking-wider uppercase md:normal-case">
            Industries We Work With
          </span>
        </div>

        {/* Header Title & Subtitle Section */}
        <div className="max-w-[655px] text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide capitalize leading-snug">
            What We Offer
          </h2>
          <p className="text-sm md:text-base text-[#E4E4E4] font-medium leading-relaxed tracking-wide">
            We deliver tailored digital solutions designed to help businesses
            grow, scale, and succeed. From strategy to execution, our team
            ensures every service is aligned with your goals and built for
            long-term impact.
          </p>
        </div>

        {/* Responsive Grid Layout for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {offerings.map((offering, idx) => (
            <div
              key={idx}
              className="bg-black/10 backdrop-blur-[5px] border border-white/20 hover:border-green/60 rounded-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0px_0px_30px_rgba(0,0,0,0.12)] min-h-[160px]"
            >
              <div>
                {/* Header inside Card: Icon + Title */}
                <div className="flex items-center gap-3.5 mb-3.5">
                  {/* Circle background wrapper for icon with transparent theme green */}
                  <div className="w-9 h-9 rounded-full bg-[#0CBF83]/10 flex items-center justify-center shrink-0">
                    <div className="text-green">{offering.icon}</div>
                  </div>
                  <h3 className="text-lg md:text-[18px] font-bold text-white leading-[23px]">
                    {offering.title}
                  </h3>
                </div>

                {/* Subtext description (indented to match left alignment of card headers) */}
                <p className="pl-[50px] text-sm md:text-[16px] text-[#E4E4E4] font-medium leading-[20px]">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
