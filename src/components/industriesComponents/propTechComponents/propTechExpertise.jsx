"use client";
import React from "react";
import { TbMapSearch } from "react-icons/tb";
import {
  MdOutlinePayments,
  MdOutlineForum,
  MdOutlineWifiTethering,
} from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { FaFileSignature } from "react-icons/fa6";

const expertiseAreas = [
  {
    title: "Interactive Maps & Location Services",
    description:
      "Integrate Google Maps, Mapbox, and advanced GIS tools for property search, neighborhood data, and custom boundaries.",
    icon: TbMapSearch,
  },
  {
    title: "Payment & Transaction Processing",
    description:
      "Secure rent collection, automated payouts, booking deposits, and multi-party transactions using Stripe and local payment gateways.",
    icon: MdOutlinePayments,
  },
  {
    title: "Property Data APIs & MLS Integration",
    description:
      "Connect your product to MLS data, Zillow APIs, property registries, and real-time market data providers.",
    icon: AiOutlineApi,
  },
  {
    title: "E-Signatures & Document Management",
    description:
      "Automate lease agreements, digital signatures, and secure document storage using DocuSign or custom integrations.",
    icon: FaFileSignature,
  },
  {
    title: "Real-Time Communication",
    description:
      "Build instant messaging, automated notifications, and agent-tenant communication tools using WebSockets and Twilio.",
    icon: MdOutlineForum,
  },
  {
    title: "Smart Building & IoT Integration",
    description:
      "Connect software with smart locks, thermostats, and access control systems for seamless property access and monitoring.",
    icon: MdOutlineWifiTethering,
  },
];

const PropTechExpertise = () => {
  return (
    <section className="relative w-full bg-black py-20 lg:py-24 font-jakarta overflow-hidden">
      <div className="relative z-10 mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:gap-40 items-start">
          {/* Left Text */}
          <div className="flex-1 lg:sticky lg:top-32">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-navy to-[#004BC0]" />
              <h3 className="text-[20px] lg:text-[22px] font-bold tracking-[1px] text-green">
                PropTech Expertise
              </h3>
            </div>
            <h2 className="text-[32px] md:text-[46px] font-bold leading-[1.2] lg:leading-[58px] tracking-[1px] text-white capitalize mb-6">
              Technical Capabilities Built for Real Estate
            </h2>
          </div>

          {/* Right Grid */}
          <div className="flex-[1.5] w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {expertiseAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="p-8 bg-white border border-[#EFEFEF] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-300">
                      <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-[20px] font-bold text-dark mb-4 group-hover:text-green transition-colors duration-300">
                      {area.title}
                    </h4>
                    <p className="text-[16px] text-grey leading-[26px]">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropTechExpertise;
