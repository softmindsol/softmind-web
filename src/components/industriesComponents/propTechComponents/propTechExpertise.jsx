"use client";
import React from "react";
import { TbMapSearch } from "react-icons/tb";
import {
  MdOutlinePayments,
  MdOutlineWifiTethering,
  MdOutlineCloudDone,
} from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";

const expertiseAreas = [
  {
    title: "Property Data Integrations",
    description:
      "Connect your platform with MLS feeds, internal databases, third-party listing sources, and market data providers to keep information accurate and up to date.",
    icon: AiOutlineApi,
  },
  {
    title: "Mapping and Location Intelligence",
    description:
      "Improve property discovery with interactive maps, geo-search, neighborhood insights, commute data, boundaries, and location-based recommendations.",
    icon: TbMapSearch,
  },
  {
    title: "Payments and Lease Automation",
    description:
      "Simplify rent collection, deposits, invoicing, renewals, e-signatures, reminders, and financial reconciliation through automated workflows.",
    icon: MdOutlinePayments,
  },
  {
    title: "Property Analytics",
    description:
      "Transform operational, market, and portfolio data into clear dashboards that support faster decisions and stronger asset performance.",
    icon: SiGoogleanalytics,
  },
  {
    title: "Smart Building Technology",
    description:
      "Integrate IoT devices and building systems to monitor energy use, occupancy, access, maintenance needs, and property conditions in real time.",
    icon: MdOutlineWifiTethering,
  },
  {
    title: "Scalable Cloud Architecture",
    description:
      "Support growing property inventories, user volumes, and transaction activity with secure, high-performance cloud infrastructure.",
    icon: MdOutlineCloudDone,
  },
];

const PropTechExpertise = () => {
  return (
    <section className="relative w-full bg-black py-20 lg:py-24 font-jakarta overflow-hidden">
      <div className="relative z-10 mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:gap-20 items-center">
          {/* Left Text */}
          <div className="flex flex-col text-center">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <div className="" />
              <h3 className="text-[20px] lg:text-[46px] font-bold tracking-[1px] text-green">
                Our PropTech Expertise
              </h3>
            </div>
            <h2 className="text-lg font-medium text-white mb-6 max-w-[800px]">
              We combine real estate knowledge with modern engineering to build
              products that perform reliably across complex property workflows,
              data sources, and user journeys.
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
