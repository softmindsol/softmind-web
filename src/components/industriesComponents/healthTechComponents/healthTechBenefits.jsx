"use client";
import React from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import {
  TbRocket,
  TbCoin,
  TbSettings,
  TbTarget,
  TbHeartHandshake,
} from "react-icons/tb";
import Image from "next/image";
import { SoftMindSolutionLogoDark } from "../../../../public/images";

const features = [
  {
    num: "01",
    title: "Healthcare-Focused Expertise",
    desc: "Build with a team that understands the complexities of healthcare. From HIPAA-compliant applications to AI-powered health platforms, we create solutions that improve patient care while meeting industry standards.",
    icon: HiOutlineSparkles,
  },
  {
    num: "02",
    title: "Faster Time-to-Market",
    desc: "Launch your healthcare product in weeks, not months. Our agile development process accelerates delivery without compromising quality, helping you validate ideas and stay ahead of the competition.",
    icon: TbRocket,
  },
  {
    num: "03",
    title: "Cost-Effective Development",
    desc: "Access a dedicated team of senior engineers and reduce development costs by up to 60% compared to traditional US agencies without sacrificing quality or security.",
    icon: TbCoin,
  },
  {
    num: "04",
    title: "Tailored to Your Business",
    desc: "No off-the-shelf solutions. Every application is designed around your business goals, workflows, and users to deliver measurable outcomes and support long-term growth.",
    icon: TbSettings,
  },
  {
    num: "05",
    title: "Strategic Product Guidance",
    desc: "We do more than build software. We analyze your market, evaluate competitors, and recommend the right features to help your healthcare product stand out before development begins.",
    icon: TbTarget,
  },
  {
    num: "06",
    title: "Transparent Collaboration",
    desc: "Stay informed at every stage with agile development, regular progress updates, and direct communication with the team building your product ensuring predictable timelines and no surprises.",
    icon: TbHeartHandshake,
  },
];

const HealthTechBenefits = () => {
  return (
    <section className="relative w-full bg-gray-300 py-20 lg:py-24 font-jakarta">
      <div
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10 blur-[130px]"
        style={{ backgroundColor: "green" }}
      />
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
            <h3 className="text-[20px] lg:text-[22px] font-bold tracking-[1px] text-green uppercase">
              Benefits of Collaborating with Softmind
            </h3>
          </div>
          <h2 className="max-w-[900px] text-[32px] md:text-[46px] font-bold leading-[1.2] lg:leading-[58px] tracking-[1px] text-dark capitalize">
            Why Partner with Softmind Solutions?
          </h2>
          <p className="max-w-[800px] text-[16px] lg:text-[18px] font-medium text-dark/75 leading-[26px]">
            Choosing the right healthcare technology partner can determine
            whether your product succeeds or struggles. At Softmind Solutions,
            we combine healthcare expertise with a product-first approach to
            help you launch faster, scale confidently, and maximize your ROI.
          </p>
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

export default HealthTechBenefits;
