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
    <section className="relative w-full bg-[#f8f9fb] py-24 font-jakarta overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-green/10 blur-[120px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-green/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-20 text-center">
          <div className="inline-flex items-center gap-2 text-green text-[22px] font-semibold">
            <span className="w-2 h-2 rounded-full bg-navy"></span>
            Our Services
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-dark">
            PropTech Software <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-emerald-600">
              Development Services
            </span>
          </h3>
          <p className="max-w-3xl text-lg text-grey leading-relaxed">
            From early-stage validation to large-scale platform development, we
            provide end-to-end PropTech solutions aligned with your product,
            users, and commercial goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col p-8 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden z-10"
              >
                {/* Hover Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Decorative large icon in background on hover */}
                <Icon className="absolute -bottom-6 -right-6 w-32 h-32 text-white opacity-0 group-hover:opacity-10 transition-all duration-700 transform group-hover:rotate-12 group-hover:scale-125 -z-10" />

                <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors duration-500 shadow-sm">
                  <Icon className="w-8 h-8 text-green group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-[22px] font-bold text-dark mb-4 group-hover:text-white transition-colors duration-500 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[16px] text-grey leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                  {service.description}
                </p>

                {/* Floating arrow indicator */}
                <div className="mt-8 pt-4 flex items-center text-green font-semibold group-hover:text-white transition-colors duration-500">
                  <span className="flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    Explore{" "}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropTechServices;
