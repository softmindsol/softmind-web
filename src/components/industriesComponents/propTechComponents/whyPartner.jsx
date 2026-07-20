"use client";
import React from "react";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { TbBulb, TbRocket, TbShieldCheck } from "react-icons/tb";

const partnerReasons = [
  {
    title: "Domain Expertise",
    description:
      "Deep understanding of real estate workflows, regulations, and PropTech trends.",
    icon: TbBulb,
  },
  {
    title: "Agile & Fast Delivery",
    description:
      "Rapid prototyping and agile sprints to get your product to market faster.",
    icon: TbRocket,
  },
  {
    title: "Startup-Friendly Pricing",
    description:
      "High-quality, offshore development teams that maximize your ROI.",
    icon: HiOutlineCheckBadge,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Secure, compliant architectures protecting sensitive property and financial data.",
    icon: TbShieldCheck,
  },
];

const WhyPartner = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-24 font-jakarta overflow-hidden">
      <div className="relative z-10 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-navy to-[#004BC0]" />
              <h3 className="text-[20px] lg:text-[22px] font-bold tracking-[1px] text-green">
                Why Partner With Us
              </h3>
            </div>
            <h2 className="text-[32px] md:text-[46px] font-bold leading-[1.2] lg:leading-[58px] tracking-[1px] text-dark capitalize mb-6">
              Your Trusted PropTech Development Partner
            </h2>
            <p className="text-[16px] lg:text-[18px] text-grey leading-[28px] max-w-[600px] mx-auto lg:mx-0 mb-8">
              We don&apos;t just build software; we build partnerships. Our
              dedicated teams work as an extension of your business, ensuring
              every solution aligns perfectly with your strategic goals.
            </p>
            <div className="hidden lg:block">
              <button className="px-8 py-4 bg-navy text-white font-bold rounded-full hover:bg-green transition-colors duration-300 cursor-pointer">
                Let&apos;s Build Together
              </button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {partnerReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-200 border border-gray-300 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy" />
                  </div>
                  <h4 className="text-[18px] font-bold text-dark mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-[15px] text-grey leading-[22px]">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile Button */}
          <div className="block lg:hidden w-full text-center mt-4">
            <button className="px-8 py-4 bg-navy text-white font-bold rounded-full hover:bg-green transition-colors duration-300">
              Let&apos;s Build Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
