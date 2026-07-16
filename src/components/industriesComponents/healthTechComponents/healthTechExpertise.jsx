"use client";
import React from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import { TbDeviceHeartMonitor, TbSpeakerphone } from "react-icons/tb";
import {
  MdOutlineAnalytics,
  MdOutlineAdminPanelSettings,
  MdOutlineAccountCircle,
} from "react-icons/md";
import Image from "next/image";
import { SoftMindSolutionLogoDark } from "../../../../public/images";

const features = [
  {
    num: "01",
    title: "AR & VR Solutions",
    desc: "Train clinicians faster, improve patient education, and enhance diagnostics with immersive AR/VR experiences.",
    icon: HiOutlineSparkles,
  },
  {
    num: "02",
    title: "Healthcare Data Analytics",
    desc: "Turn healthcare data into actionable insights for smarter clinical decisions, predictive analytics, operational efficiency, and better financial performance.",
    icon: MdOutlineAnalytics,
  },
  {
    num: "03",
    title: "Medical Device Software",
    desc: "Develop secure software for connected medical devices that improves interoperability, automates data exchange, and enhances device performance.",
    icon: TbDeviceHeartMonitor,
  },
  {
    num: "04",
    title: "Telemedicine Solutions",
    desc: "Deliver seamless virtual care with secure telehealth platforms featuring video consultations, e-prescriptions, and integrated electronic health records.",
    icon: TbSpeakerphone,
  },
  {
    num: "05",
    title: "Healthcare Administration Software",
    desc: "Reduce administrative burden by automating scheduling, billing, patient management, and other routine workflows.",
    icon: MdOutlineAdminPanelSettings,
  },
  {
    num: "06",
    title: "Patient Portals",
    desc: "Empower patients with secure self-service portals for appointment booking, health records, messaging, and a more connected care experience.",
    icon: MdOutlineAccountCircle,
  },
];

const HealthTechExpertise = () => {
  return (
    <section className="relative w-full bg-[#f8f9fa] py-24 lg:py-32 font-jakarta overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-white to-transparent z-0 pointer-events-none" />

      <div
        className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.10] blur-[140px] pointer-events-none z-0"
        style={{ backgroundColor: "#0CBF83" }}
      />
      <div
        className="absolute bottom-[5%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.08] blur-[160px] pointer-events-none z-0"
        style={{ backgroundColor: "#004BC0" }}
      />

      {/* Massive Faint Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <Image
          src={SoftMindSolutionLogoDark}
          alt="SoftMind Background Logo"
          className="w-full max-w-[1400px] object-contain opacity-[0.1]"
        />
      </div>

      <div className="relative mx-auto px-6 lg:px-12 z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-6 mb-20 lg:mb-24 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.04)] border border-gray-100 transition-transform hover:scale-105 duration-300">
            <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-navy to-[#004BC0] animate-pulse" />
            <h3 className="text-[14px] lg:text-[16px] font-bold tracking-[2px] text-green uppercase">
              Our Expertise
            </h3>
          </div>
          <h2 className="max-w-[1024px] text-[32px] md:text-[42px] lg:text-[40px] font-bold leading-tight tracking-tight text-dark capitalize">
            We build healthcare solutions that improve patient outcomes,
            streamline operations, and help providers deliver care more
            efficiently.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden flex flex-col bg-white border border-gray-100/80 rounded-[28px] p-8 lg:p-10 min-h-[300px] shadow-[0px_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0px_24px_48px_rgba(0,0,0,0.08)] group transition-all duration-500 hover:-translate-y-2 z-10"
              >
                {/* Background Watermark Number */}
                <div className="absolute -right-2 -bottom-4 text-[140px] font-extrabold text-gray-50 font-satoshi leading-none pointer-events-none group-hover:text-green/20 transition-colors duration-500 z-0 select-none">
                  {feature.num}
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col gap-6 h-full">
                  {/* Icon & Title Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                    {/* Icon Container */}
                    <div className="w-[64px] h-[64px] shrink-0 rounded-[20px] bg-green/10 flex items-center justify-center group-hover:bg-green transition-colors duration-500 group-hover:shadow-[0_0_24px_rgba(12,191,131,0.4)]">
                      <Icon className="text-green text-[32px] group-hover:text-white transition-colors duration-500" />
                    </div>
                    {/* Title */}
                    <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a1a1a] leading-[1.3] group-hover:text-green transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Animated Divider */}
                  <div className="w-12 h-[3px] rounded-full bg-gray-200 group-hover:bg-green group-hover:w-full transition-all duration-500 ease-out mt-2" />

                  {/* Description */}
                  <p className="text-[16px] lg:text-[17px] font-medium text-[#666] leading-[1.7] mt-2">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HealthTechExpertise;
