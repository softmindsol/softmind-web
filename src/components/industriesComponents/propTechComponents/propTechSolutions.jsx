"use client";
import Image from "next/image";
import {
  MdOutlineHomeWork,
  MdOutlineManageSearch,
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlinePieChart,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { TbSpeakerphone, TbUsersGroup } from "react-icons/tb";
import { PtSolutions } from "../../../../public/images";

const solutionsData = [
  {
    title: "Property Management Platforms",
    description:
      "Manage properties, leases, maintenance, payments, and tenant communication from a centralized dashboard.",
    icon: MdOutlineHomeWork,
    position: "left",
  },
  {
    title: "CRM & Lead Management",
    description:
      "Track prospects, automate sales pipelines, and improve conversion rates at every stage.",
    icon: TbUsersGroup,
    position: "right",
  },
  {
    title: "Real Estate Marketplaces",
    description:
      "Scalable buying, selling, renting, and listing platforms with advanced search and discovery.",
    icon: MdOutlineManageSearch,
    position: "left",
  },
  {
    title: "Data & Analytics",
    description:
      "Real-time insights into property performance, occupancy rates, and investment opportunities",
    icon: MdOutlineAnalytics,
    position: "right",
  },
  {
    title: "Smart Building Solutions",
    description:
      "Integrate IoT, automation, security, access control, and energy monitoring across portfolios.",
    icon: TbSpeakerphone,
    position: "left",
  },
  {
    title: "Investment & Portfolio",
    description:
      "Monitor portfolios, forecast returns, and optimize real estate investments with confidence.",
    icon: MdOutlinePieChart,
    position: "right",
  },
  {
    title: "Tenant Experience Platforms",
    description:
      "Seamless communication, digital onboarding, maintenance requests, and resident engagement.",
    icon: MdOutlineDashboard,
    position: "left",
  },
  {
    title: "Facility Management Systems",
    description:
      "Streamline inspections, maintenance operations, vendor coordination, and asset tracking.",
    icon: MdOutlineManageAccounts,
    position: "right",
  },
];

const PropTechSolutions = () => {
  return (
    <section className="relative w-full bg-[#161616] py-20 lg:py-24 overflow-hidden font-jakarta">
      {/* Top Glow */}
      <div className="absolute left-1/2 top-[-187px] h-[490px] w-[490px] -translate-x-1/2 rounded-full bg-navy blur-[212.4px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-16 lg:mb-20 text-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-navy to-[#004BC0]" />
            <h3 className="text-[20px] lg:text-[22px] font-bold tracking-[1px] text-green">
              Solutions
            </h3>
          </div>
          <h2 className="max-w-[800px] text-[32px] md:text-[46px] font-bold leading-[1.2] lg:leading-[58px] tracking-[1px] text-white capitalize">
            Everything You Need To Build Smarter Real Estate
          </h2>
        </div>

        {/* Main Content Layout */}
        <div className="relative w-full">
          {/* Center Image (Absolute for both desktop and mobile) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-full max-w-[500px] lg:max-w-[591px] h-auto flex flex-col items-center justify-center pointer-events-none z-0">
            {/* The Glow under building */}
            <div className="absolute bottom-10 lg:bottom-0 left-1/2 -translate-x-1/2 h-[70px] w-[80%] max-w-[733px] rounded-full bg-green blur-[54.8px] -z-10" />
            <Image
              src={PtSolutions}
              alt="PropTech Smarter Real Estate"
              className="w-full h-auto object-contain relative z-10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="hidden w-full h-[400px] lg:h-[800px] bg-white/5 border border-dashed border-white/20 rounded-xl items-center justify-center relative z-10 pointer-events-auto text-center px-6">
              <span className="text-white/50">
                Your Generated Building Image Goes Here
                <br />
                (Upload to /public/images/proptech-building.png)
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {solutionsData.map((solution, index) => {
              const isLeft = solution.position === "left";
              return (
                <div
                  key={index}
                  className={`w-full lg:max-w-[458px] ${
                    isLeft ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <SolutionCard data={solution} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionCard = ({ data }) => {
  const Icon = data.icon;
  return (
    <div className="w-full h-full  border border-white/30 rounded-[12px] p-6 lg:p-8 backdrop-blur-md transition-all hover:bg-green/10 hover:border-green/50">
      <div className="flex flex-col gap-6">
        <div className="w-[38px] h-[38px] rounded-full bg-[#1C1C1C] border border-green flex items-center justify-center">
          <Icon className="w-[20px] h-[20px] text-white" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-[20px] lg:text-[22px] font-bold text-white leading-[28px]">
            {data.title}
          </h3>
          <p className="text-[16px] lg:text-[18px] font-medium text-white/90 leading-[23px]">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropTechSolutions;
