"use client";
import CustomButton from "@/components/customs/customButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const EdFinalCta = () => {
  return (
    <section className="relative w-full h-[450px] lg:h-[427px] font-jakarta overflow-hidden flex items-center justify-center bg-white">
      <style>
        {`
          @keyframes aurora-1 {
            0% { transform: translate(0%, 0%) scale(1) rotate(0deg); }
            50% { transform: translate(25%, -15%) scale(1.4) rotate(180deg); }
            100% { transform: translate(0%, 0%) scale(1) rotate(360deg); }
          }
          @keyframes aurora-2 {
            0% { transform: translate(0%, 0%) scale(1) rotate(0deg); }
            50% { transform: translate(-20%, 25%) scale(1.5) rotate(-180deg); }
            100% { transform: translate(0%, 0%) scale(1) rotate(-360deg); }
          }
          @keyframes aurora-3 {
            0% { transform: translate(0%, 0%) scale(1); opacity: 0.4; }
            50% { transform: translate(15%, 15%) scale(1.6); opacity: 0.9; }
            100% { transform: translate(0%, 0%) scale(1); opacity: 0.4; }
          }
        `}
      </style>

      {/* Animated Aurora Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-[#6099f5] blur-[90px]"
          style={{ animation: "aurora-1 8s infinite ease-in-out" }}
        />
        <div
          className="absolute w-[450px] h-[450px] rounded-full bg-[#004BC0] blur-[130px]"
          style={{ animation: "aurora-2 10s infinite ease-in-out" }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full bg-green blur-[120px] opacity-60"
          style={{ animation: "aurora-3 6s infinite ease-in-out" }}
        />
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 z-10 bg-white/70 backdrop-blur-[20px]" />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-[755px] mx-auto gap-[24px] lg:gap-[32px]">
        {/* Tag / Header */}
        <div className="flex flex-row items-center gap-[8px]">
          <div className="w-[8px] h-[8px] rounded-full bg-gradient-to-r from-[#00235A] to-[#004BC0]" />
          <h4 className="font-bold text-[18px] lg:text-[22px] leading-[1.2] lg:leading-[28px] tracking-[1px] text-navy">
            Reach Us Out
          </h4>
        </div>

        {/* Title */}
        <h2 className="font-bold text-[28px] lg:text-[36px] leading-[1.2] lg:leading-[45px] tracking-[1px] text-black capitalize">
          Ready to Build Your EdTech Product?
        </h2>

        {/* Description */}
        <p className="font-medium text-[15px] lg:text-[16px] leading-[1.4] lg:leading-[20px] tracking-[1px] text-dark max-w-[620px]">
          Tell us what you are building. We will help you define the smartest
          next step.
        </p>

        {/* Custom Button */}
        <div className="flex items-center justify-center gap-4">
          <Link href={"/contact-us"}>
            <CustomButton btnText={"Start Your EdTech Project"} />
          </Link>
          <Link href={"/contact-us"}>
            <Button className="flex flex-col justify-center items-center px-[30px] py-[12px] bg-green hover:bg-green/70 rounded-[100px] shadow-[0px_0px_20px_rgba(0,0,0,0.12),inset_0px_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 cursor-pointer py-5.5">
              <span className="font-bold text-[16px] leading-[20px] tracking-[1px]">
                Talk to an EdTech Specialist
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EdFinalCta;
