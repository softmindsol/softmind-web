"use client";
import React from "react";
import {
  HeartPulse,
  Wallet,
  Building,
  GraduationCap,
  Lightbulb,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import {
  SoftMindSolLogo,
  SoftMindSolutionLogoDark,
} from "../../../public/images";

export default function AboutIndustries() {
  const industries = [
    {
      title: "HealthTech",
      description:
        "Building HIPAA-compliant patient management dashboards, wellness monitoring platforms, and telemedicine apps that put patients first.",
      icon: HeartPulse,
      color: "text-green bg-green/10 border-green/20",
      accent: "hover:shadow-green/10",
      items: ["HIPAA Compliance", "Telemedicine", "Patient Dashboards"],
    },
    {
      title: "FinTech",
      description:
        "Developing high-security robo-advisors, fractional investing systems, and transaction pipelines built for trust and transparency.",
      icon: Wallet,
      color: "text-blue-600 bg-blue-600/10 border-blue-600/20",
      accent: "hover:shadow-blue-500/10",
      items: ["Secure Ledgers", "Escrow APIs", "Auto-Investing"],
    },
    {
      title: "PropTech",
      description:
        "Creating real-estate listing engines, commercial asset controllers, and fractional ownership portals with custom database systems.",
      icon: Building,
      color: "text-purple-600 bg-purple-600/10 border-purple-600/20",
      accent: "hover:shadow-purple-500/10",
      items: ["Property Analytics", "Smart Leases", "Asset Portals"],
    },
    {
      title: "EdTech",
      description:
        "Designing modular learning management platforms, tracking systems, and interactive assessment tools for modern education.",
      icon: GraduationCap,
      color: "text-orange-600 bg-orange-600/10 border-orange-600/20",
      accent: "hover:shadow-orange-500/10",
      items: [
        "LMS Architecture",
        "Student Progress Analytics",
        "Media Portals",
      ],
    },
    {
      title: "AI Services",
      description:
        "We build intelligent solutions that automate workflows, improve efficiency, and enhance digital experiences.",
      icon: Lightbulb,
      color: "text-pink-600 bg-pink-600/10 border-pink-600/20",
      accent: "hover:shadow-pink-500/10",
      items: ["Property Analytics", "Smart Leases", "Asset Portals"],
    },
    {
      title: "E-Commerce",
      description:
        "We build ecommerce solutions that streamline online sales, improve customer experiences, and simplify business operations.",
      icon: ShoppingBag,
      color: "text-teal-600 bg-teal-600/10 border-teal-600/20",
      accent: "hover:shadow-teal-500/10",
      items: [
        "LMS Architecture",
        "Student Progress Analytics",
        "Media Portals",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-[#ffffff] py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Background radial glow element (matching "Ellipse 25" in design file) */}
      <div
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none opacity-30 blur-[130px]"
        style={{ backgroundColor: "#004BC0" }}
      />

      {/* Stylized background monogram watermark on the left (matching "SoftOps Monogram") */}
      <div className="absolute left-[-100px] top-[20%] select-none pointer-events-none opacity-10">
        <Image
          src={SoftMindSolutionLogoDark}
          alt="SoftMindSol Logo"
          className="object-cover max-h-[726px]"
        />
      </div>

      <div className="relative mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-3.5 text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[22px] font-bold tracking-wide">
              Industries We Are Working
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-[#2E2E2E] max-w-[700px]">
            Deep Expertise Across The Industries Shaping Tomorrow.
          </h2>
          <p className="text-sm md:text-base text-[#666666] font-medium leading-[24px] tracking-wide max-w-[600px] mt-2">
            We embed with teams in five high-impact sectors each with its own
            regulatory, scaling and design realities.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <div
                key={idx}
                className={`group flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1 hover:shadow-xl ${ind.accent}`}
              >
                <div>
                  {/* Icon Block */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 transition-transform duration-300 group-hover:scale-105 ${ind.color}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] leading-[29px] font-bold tracking-wide text-[#2E2E2E] mb-3">
                    {ind.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#666666] font-medium leading-[22px] tracking-wide mb-6">
                    {ind.description}
                  </p>
                </div>

                {/* Sub Features Bullet List */}
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <ul className="flex flex-col gap-2">
                    {ind.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs text-[#888888] font-medium tracking-wide flex items-center gap-1.5"
                      >
                        <span className="text-green">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
