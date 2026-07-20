"use client";
import React from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import { TbCompass, TbRulerMeasure, TbUserStar } from "react-icons/tb";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";
import { SoftMindSolutionLogoDark } from "../../../../public/images";

const features = [
  {
    num: "01",
    title: "AI integration",
    desc: "Pragmatic AI woven into product flows from RAG to fine-tuned models.",
    icon: HiOutlineSparkles,
  },
  {
    num: "02",
    title: "Scalable architecture",
    desc: "Systems designed to grow from MVP to millions without rewrites.",
    icon: TbCompass,
  },
  {
    num: "03",
    title: "UI/UX excellence",
    desc: "Interfaces that feel inevitable, accessible and brand-defining.",
    icon: TbRulerMeasure,
  },
  {
    num: "04",
    title: "Agile delivery",
    desc: "Tight feedback loops, transparent sprints, weekly demos.",
    icon: MdOutlineLocalShipping,
  },
  {
    num: "05",
    title: "Senior expertise",
    desc: "Cross-functional teams with a decade of compounded experience.",
    icon: TbUserStar,
  },
  {
    num: "06",
    title: "Long-term support",
    desc: "Partnerships that extend well past launch SLAs that hold.",
    icon: BiSupport,
  },
];

const WhySoftMind = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-24 font-jakarta">
      <div className="absolute left-[-152px] select-none pointer-events-none">
        <Image
          src={SoftMindSolutionLogoDark}
          alt="SoftMindSol Logo"
          className="object-cover opacity-15"
        />
      </div>
      <div className="relative mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-16 lg:mb-20 text-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-navy to-[#004BC0]" />
            <h3 className="text-[20px] lg:text-[22px] font-bold tracking-[1px] text-green">
              Why Softmind Solutions
            </h3>
          </div>
          <h2 className="max-w-[900px] text-[32px] md:text-[46px] font-bold leading-[1.2] lg:leading-[58px] tracking-[1px] text-dark capitalize">
            The Advantages That Compound Over The Lifetime Of Your Product
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[26px]">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col bg-white/50 border border-[#EFEFEF] rounded-[12px] p-7 lg:p-8 min-h-[212px] shadow-[0px_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] group transition-shadow duration-300 backdrop-blur-md"
              >
                {/* Background Number */}
                <div className="absolute top-4 right-6 text-[49px] font-bold text-navy/10 font-satoshi leading-none pointer-events-none group-hover:text-green transition-colors duration-300">
                  {feature.num}
                </div>

                {/* Icon */}
                <div className="w-[46px] h-[46px] rounded-[4px] bg-green flex items-center justify-center mb-6 shadow-[inset_0px_-3px_4px_rgba(255,255,255,0.14),inset_0px_4px_6px_rgba(0,0,0,0.25)]">
                  <Icon className="text-white text-[24px]" />
                </div>

                {/* Content */}
                <h3 className="text-[22px] font-bold text-black tracking-[1px] leading-[28px] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[16px] font-medium text-grey tracking-[1px] leading-[20px] max-w-[95%]">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySoftMind;
