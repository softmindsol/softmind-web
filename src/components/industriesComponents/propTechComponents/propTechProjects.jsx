"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "@/components/customs/customButton";

const projects = [
  {
    id: 1,
    tag: "Real Chain",
    title: "PropTech Management By Softmind Solutions",
    description:
      "Explore how SoftMind Solutions developed Real Chain, a blockchain-powered PropTech platform that transforms real estate into digital assets, improves investor accessibility, and centralizes property investment workflows through AI, market data intelligence, predictive analytics, and web/mobile technology.",
    imageBg: "bg-gradient-to-br from-[#1a1a2e] to-[#16213e]", // Placeholder for Web 1.png
  },
  {
    id: 2,
    tag: "TSG",
    title: "PropTech Management By Softmind Solutions",
    description:
      "Explore how SoftMind Solutions developed Real Chain, a blockchain-powered PropTech platform that transforms real estate into digital assets, improves investor accessibility, and centralizes property investment workflows through AI, market data intelligence, predictive analytics, and web/mobile technology.",
    imageBg: "bg-gradient-to-br from-[#f5f7fa] to-[#e4e8eb]", // Placeholder for Thumbnail.png
  },
  {
    id: 3,
    tag: "Built Right",
    title: "PropTech Management By Softmind Solutions",
    description:
      "Explore how SoftMind Solutions developed Real Chain, a blockchain-powered PropTech platform that transforms real estate into digital assets, improves investor accessibility, and centralizes property investment workflows through AI, market data intelligence, predictive analytics, and web/mobile technology.",
    imageBg: "bg-gradient-to-br from-[#ffffff] to-[#f0f2f5]", // Placeholder for built right.png
  },
];

const PropTechProjects = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-24 font-jakarta overflow-hidden">
      <div className="mx-auto px-6 lg:px-12 flex flex-col gap-[100px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full mx-auto bg-white rounded-[12px] shadow-[0px_0px_30px_rgba(0,0,0,0.14)] p-6 lg:p-[34px] flex flex-col xl:flex-row items-center xl:items-start gap-8 lg:gap-[34px] transition-transform duration-300"
          >
            {/* Image Section */}
            <div
              className={`w-full xl:w-[510px] h-[300px] lg:h-[382px] rounded-[12px] flex-shrink-0 relative overflow-hidden ${project.imageBg} shadow-inner`}
            >
              {/* <Image
                src={project.image}
                alt={project.tag}
                fill
                className="object-cover"
              /> */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium tracking-widest text-sm uppercase">
                {project.tag} Image Placeholder
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-start w-full xl:w-[638px] xl:pt-6">
              {/* Tag / Header */}
              <div className="flex flex-row items-center gap-[8px] mb-[14px]">
                <div className="w-[8px] h-[8px] rounded-full bg-gradient-to-r from-navy to-[#004BC0]" />
                <h4 className="font-bold text-[22px] leading-[28px] tracking-[1px] text-green">
                  {project.tag}
                </h4>
              </div>

              {/* Title */}
              <h3 className="font-bold text-[28px] lg:text-[36px] leading-[1.2] lg:leading-[45px] tracking-[1px] text-dark capitalize mb-[14px]">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-medium text-[16px] leading-[20px] tracking-[1px] text-grey mb-[32px]">
                {project.description}
              </p>

              {/* Read More Button */}
              <CustomButton btnText={"Read More"} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropTechProjects;
