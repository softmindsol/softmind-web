"use client";
import React from "react";
import {
  MdOutlineComputer,
  MdOutlineMobileFriendly,
  MdOutlineCloudDone,
} from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";

const services = [
  {
    title: "Custom Web Application Development",
    description:
      "Scalable and secure web apps tailored for real estate professionals, enabling efficient property management and seamless user experiences.",
    icon: MdOutlineComputer,
  },
  {
    title: "Mobile App Development",
    description:
      "Intuitive iOS and Android applications for tenants and landlords, offering on-the-go access to property data, payments, and support.",
    icon: MdOutlineMobileFriendly,
  },
  {
    title: "Cloud Infrastructure & Migration",
    description:
      "Robust cloud solutions to ensure your PropTech platforms are always online, secure, and ready to scale with your business.",
    icon: MdOutlineCloudDone,
  },
  {
    title: "API Integration & Development",
    description:
      "Seamlessly connect your platforms with third-party services like payment gateways, MLS databases, and smart home IoT devices.",
    icon: AiOutlineApi,
  },
];

const PropTechServices = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-24 font-jakarta overflow-hidden">
      <div className="relative z-10 mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-16 lg:mb-20 text-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-navy to-[#004BC0]" />
            <h3 className="text-[20px] lg:text-[22px] font-bold tracking-[1px] text-green">
              Services
            </h3>
          </div>
          <h2 className="max-w-[900px] text-[32px] md:text-[46px] font-bold leading-[1.2] lg:leading-[58px] tracking-[1px] text-dark capitalize">
            Our PropTech Development Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col p-8 bg-white border border-[#EFEFEF] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center mb-6 group-hover:bg-green transition-colors duration-300">
                  <Icon className="w-7 h-7 text-green group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[24px] font-bold text-dark mb-4 group-hover:text-green transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[16px] text-grey leading-[24px]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropTechServices;
