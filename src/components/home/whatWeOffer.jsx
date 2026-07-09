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
        "We build scalable, secure, and high-performance web applications tailored to your business goals. From SaaS platforms to custom portals, our team delivers web apps that are fast, reliable, and built to grow.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Mobile App Development",
      description:
        "We develop user-friendly mobile apps for iOS and Android with smooth performance and intuitive design. Whether you need an MVP or a full-scale mobile product, we help you launch faster with confidence.",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      title: "AI SaaS Development",
      description:
        "We build AI-powered SaaS products that automate workflows, improve decisions, and create smarter user experiences. From AI features to full SaaS platforms, we turn your product idea into scalable software.",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      title: "UI/UX Design",
      description:
        "We design clean, modern, and conversion-focused interfaces for web and mobile applications. Our UI/UX process makes your product easy to use, visually engaging, and aligned with real user behavior.",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      title: "MVP Development Services",
      description:
        "We help startups turn ideas into launch-ready MVPs quickly and cost-effectively. Our team focuses on core features, scalable architecture, and fast delivery so you can validate your product sooner.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "QA & Testing",
      description:
        "We test your software across functionality, performance, usability, and compatibility to ensure a smooth launch. Our QA team helps you reduce bugs, improve reliability, and deliver a better user experience.",
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
        <div className="max-w-[800px] text-center mb-16 space-y-6">
          {/* <h2 className="text-3xl md:text-5xl font-bold tracking-wide capitalize leading-snug">
            Everything You Need to Build & Scale
          </h2> */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide capitalize leading-snug">
            Custom Software Development Services for Product Teams
          </h2>
          {/* <p className="text-sm md:text-base text-[#E4E4E4] font-medium leading-relaxed tracking-wide">
            From idea to launch and beyond — we cover the full spectrum of
            product development so you can focus on building your business.
          </p> */}
          <p className="text-sm md:text-base text-[#E4E4E4] font-medium leading-relaxed tracking-wide">
            We provide end-to-end software development services that help
            startups and product teams build, launch, scale, and improve digital
            products faster.
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
