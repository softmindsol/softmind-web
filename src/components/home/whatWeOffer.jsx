"use client";
import React from "react";
import Image from "next/image";
import { SoftMindSolLogo } from "../../../public/images";
import {
  Globe,
  Smartphone,
  Cpu,
  Palette,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function WhatWeOffer() {
  const services = [
    {
      title: "Web Development",
      description:
        "We build high-performance, scalable web applications using modern frameworks like Next.js, React, and Node.js — crafted to grow with your business.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform and native mobile apps for iOS and Android that deliver seamless user experiences, built with React Native and Flutter.",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      title: "AI SaaS Development",
      description:
        "End-to-end AI-powered SaaS products — from architecture and model integration to production deployment, built for scale and reliability.",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Data-driven, conversion-focused design that transforms complex workflows into intuitive, beautiful interfaces your users will love.",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      title: "Dedicated Development Teams",
      description:
        "Hire fully managed, dedicated engineers who embed into your team, follow your processes, and deliver like your in-house developers.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "QA & Testing",
      description:
        "Comprehensive quality assurance — manual, automated, and performance testing — to ensure your product ships bug-free and performs under load.",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative w-full bg-[#161617] text-white py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Background radial glow */}
      <div
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 blur-[180px]"
        style={{ backgroundColor: "navy" }}
      />

      {/* Watermark logo */}
      <div className="absolute select-none pointer-events-none">
        <Image
          src={SoftMindSolLogo}
          alt="SoftMindSol Logo"
          className="object-cover max-h-[726px]"
        />
      </div>

      <div className="relative mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="size-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#004BC0]" />
          <span className="text-green text-sm md:text-[22px] font-bold tracking-wider uppercase md:normal-case">
            Our Services
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-[680px] text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide capitalize leading-snug">
            Everything You Need to Build & Scale
          </h2>
          <p className="text-sm md:text-base text-[#E4E4E4] font-medium leading-relaxed tracking-wide">
            From idea to launch and beyond — we cover the full spectrum of
            product development so you can focus on building your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-black/10 backdrop-blur-[5px] border border-white/10 hover:border-green/50 rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(12,191,131,0.08)]"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-green/10 border border-green/20 flex items-center justify-center text-green shrink-0 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/65 font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
