"use client";
import React from "react";
import {
  MdOutlineComputer,
  MdOutlineMobileFriendly,
  MdOutlineHomeWork,
  MdOutlineManageSearch,
  MdOutlineFormatListBulleted,
  MdOutlineDashboard,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { FaRobot } from "react-icons/fa6";

const services = [
  {
    title: "Custom PropTech Software Development",
    description:
      "Build purpose-designed software that solves your operational challenges, supports your business model, and adapts as your company grows.",
    icon: MdOutlineComputer,
  },
  {
    title: "Property Management Platform Development",
    description:
      "Centralize leases, rent collection, maintenance, tenant communication, documents, and portfolio reporting in one efficient platform.",
    icon: MdOutlineHomeWork,
  },
  {
    title: "Real Estate Marketplace Development",
    description:
      "Connect buyers, sellers, landlords, tenants, and agents through intuitive marketplaces with advanced search, maps, listings, and inquiry tools.",
    icon: MdOutlineManageSearch,
  },
  {
    title: "PropTech Mobile App Development",
    description:
      "Give users convenient access to property search, payments, maintenance, communication, and account management across iOS and Android devices.",
    icon: MdOutlineMobileFriendly,
  },
  {
    title: "Property Listing Portal Development",
    description:
      "Deliver fast, searchable listing experiences with geo-based discovery, detailed property pages, agent profiles, alerts, and listing management tools.",
    icon: MdOutlineFormatListBulleted,
  },
  {
    title: "Tenant Portal Development",
    description:
      "Reduce administrative work by enabling tenants to make payments, submit requests, access documents, renew leases, and communicate online.",
    icon: MdOutlineDashboard,
  },
  {
    title: "Real Estate CRM Development",
    description:
      "Help agents and property teams manage leads, listings, deals, follow-ups, commissions, and client relationships through one connected system.",
    icon: MdOutlineManageAccounts,
  },
  {
    title: "AI PropTech Software Development",
    description:
      "Apply AI to property valuation, pricing, tenant screening, predictive maintenance, investment analysis, and personalized property recommendations.",
    icon: FaRobot,
  },
];

const PropTechServices = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-24 font-jakarta overflow-hidden">
      <div className="relative z-10 mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-16 lg:mb-20 text-center">
          <div className="flex items-center gap-2">
            <div className="" />
            <h3 className="text-[20px] lg:text-[46px] font-bold tracking-[1px] text-green">
              PropTech Software Development Services
            </h3>
          </div>
          <p className="max-w-[1000px] font-medium tracking-[1px] text-dark capitalize">
            From early-stage validation to large-scale platform development, we
            provide end-to-end PropTech development services aligned with your
            product, users, and commercial goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
