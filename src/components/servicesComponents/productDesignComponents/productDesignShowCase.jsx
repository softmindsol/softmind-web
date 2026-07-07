"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";
import { FiPenTool } from "react-icons/fi";
import { GiPencilBrush } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { SiMaterialdesign, SiRedux } from "react-icons/si";
import { AiOutlineProduct } from "react-icons/ai";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import { SoftMindSolLogo } from "../../../../public/images";

const tabsData = [
  {
    title: "Branding",
    icon: FiPenTool,
    description:
      "Great design goes beyond aesthetics it creates meaningful experiences that connect with your audience. We craft intuitive, consistent, and user-focused interfaces that strengthen your brand, improve usability, and turn every interaction into a lasting impression.",
    images: [
      "https://picsum.photos/id/1/800/400",
      "https://picsum.photos/id/2/800/400",
      "https://picsum.photos/id/3/800/400",
    ],
  },
  {
    title: "UX/Ui Design",
    icon: GiPencilBrush,
    description:
      "Transforming ideas into intuitive, engaging, and user-centered digital experiences. From initial wireframes to high-fidelity prototypes, we design interfaces that enhance usability, reflect your brand identity, and deliver seamless interactions across every touchpoint.",
    images: [
      "https://picsum.photos/id/4/800/400",
      "https://picsum.photos/id/5/800/400",
      "https://picsum.photos/id/6/800/400",
    ],
  },
  {
    title: "UI For Mobile and Web",
    icon: CgWebsite,
    description:
      "Creating seamless and intuitive interfaces that work flawlessly across both mobile and web platforms. We combine modern design trends with user-centric principles to deliver consistent, engaging, and accessible experiences that adapt effortlessly to any device.",
    images: [
      "https://picsum.photos/id/7/800/400",
      "https://picsum.photos/id/8/800/400",
      "https://picsum.photos/id/9/800/400",
    ],
  },
  {
    title: "UX/UI Consulting",
    icon: SiRedux,
    description:
      "Leveraging our deep expertise to guide your digital strategy and enhance user engagement. From user research and journey mapping to usability testing and design system implementation, we provide actionable insights and tailored solutions to elevate your product's potential.",
    images: [
      "https://picsum.photos/id/10/800/400",
      "https://picsum.photos/id/11/800/400",
      "https://picsum.photos/id/12/800/400",
    ],
  },
  {
    title: "Product Design",
    icon: AiOutlineProduct,
    description:
      "End-to-end product design services that help you create digital products that users love. From initial discovery and research to high-fidelity prototyping and design system creation, we design interfaces that enhance usability, reflect your brand identity, and deliver seamless interactions across every touchpoint.",
    images: [
      "https://picsum.photos/id/13/800/400",
      "https://picsum.photos/id/14/800/400",
      "https://picsum.photos/id/15/800/400",
    ],
  },
  {
    title: "MVP Design",
    icon: SiMaterialdesign,
    description:
      "Launch faster with our Minimum Viable Product (MVP) design services. We help you create a focused, user-validated version of your product that delivers core value, gathers essential feedback, and sets the foundation for scalable growth.",
    images: [
      "https://picsum.photos/id/16/800/400",
      "https://picsum.photos/id/17/800/400",
      "https://picsum.photos/id/18/800/400",
    ],
  },
];

// Custom Navigation component to control Carousel via useCarousel hook
const CustomCarouselControls = () => {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="flex h-9 w-9 items-center justify-center rounded-md bg-green text-white shadow-[inset_0px_-3px_4px_rgba(255,255,255,0.14),inset_0px_4px_6px_rgba(0,0,0,0.25)] transition-opacity disabled:opacity-50 hover:opacity-90"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="flex h-9 w-9 items-center justify-center rounded-md bg-green text-white shadow-[inset_0px_-3px_4px_rgba(255,255,255,0.14),inset_0px_4px_6px_rgba(0,0,0,0.25)] transition-opacity disabled:opacity-50 hover:opacity-90"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

const ProductDesignShowCase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabsData[activeIndex];

  return (
    <section className="relative bg-white font-jakarta lg:py-28">
      {/* Background glow */}
      <div className="bg-[#161616] relative py-24 lg:pb-48">
        <div className="absolute left-1/2 top-24 h-[490px] w-[490px] -translate-x-1/2 -translate-y-[187px] rounded-full bg-navy blur-[212.4px] hidden xl:block" />
        <div className="absolute select-none pointer-events-none">
          <Image
            src={SoftMindSolLogo}
            alt="SoftMindSol Logo"
            className="object-cover max-h-[726px]"
          />
        </div>

        <div className="relative mx-auto px-6 lg:px-12">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center space-y-4 mb-16 text-center">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-navy to-blue-600" />
              <h3 className="text-[22px] font-bold tracking-[1px] text-green">
                UX/Ui Design Services
              </h3>
            </div>
            <h2 className="text-[32px] md:text-[46px] font-bold leading-tight tracking-[1px] text-white capitalize">
              Transforming Ideas Into User Experiences
            </h2>
          </div>
          {/* Main Content: Sidebar + Right Panel */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-24">
            {/* Left Sidebar Tabs */}
            <div className="flex-shrink-0 w-full lg:w-[400px]">
              <div className="rounded-xl bg-white/5 border border-white/5 p-6 flex flex-col gap-2">
                {tabsData.map((tab, index) => {
                  const Icon = tab.icon;
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`flex items-center gap-4 rounded-full px-5 py-3 transition-all duration-300 ${
                        isActive
                          ? "bg-green/20 text-white opacity-100"
                          : "text-white opacity-40 hover:opacity-100"
                      }`}
                    >
                      <Icon className="h-6 w-6 flex-shrink-0" />
                      <span className="text-[18px] font-semibold tracking-[1px]">
                        {tab.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Right Content Panel */}
            <div className="flex-1 w-full lg:w-auto overflow-hidden">
              {/* Force Carousel to re-mount when activeIndex changes so it starts from slide 0 */}
              <Carousel
                key={activeIndex}
                className="w-full flex flex-col gap-6"
                opts={{ loop: true }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h2 className="text-[32px] md:text-[46px] font-bold capitalize tracking-[1px] text-white">
                    {activeTab.title}
                  </h2>
                  <div className="hidden sm:block shrink-0">
                    <CustomCarouselControls />
                  </div>
                </div>
                <p className="text-[16px] font-medium leading-[20px] tracking-[1px] text-white">
                  {activeTab.description}
                </p>
                {/* Carousel Container */}
                <div className="relative mt-2 w-full shadow-[0px_4px_30px_rgba(12,191,131,0.2)] rounded-xl overflow-hidden">
                  <CarouselContent>
                    {activeTab.images.map((imgSrc, imgIdx) => (
                      <CarouselItem key={imgIdx}>
                        <div className="h-[408px] w-full">
                          <img
                            src={imgSrc}
                            alt={`${activeTab.title} image ${imgIdx + 1}`}
                            className="h-full w-full object-cover rounded-xl"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* Mobile controls positioned at bottom */}
                  <div className="absolute bottom-4 right-4 z-10 sm:hidden">
                    <CustomCarouselControls />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          {/* Stats Bar */}
          <div className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 -mb-44 lg:-mb-88">
            <div className="w-full bg-[linear-gradient(93.08deg,#00235A_0.43%,#000D22_100%)] rounded-[12px] py-14 px-6 sm:px-12 flex flex-col items-center justify-center gap-7 shadow-2xl">
              <h2 className="mb-12 text-center text-[32px] md:text-[40px] font-bold text-white">
                Your Project is in Safe Hands
              </h2>
              <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
                {/* Stat 1 */}
                <div className="flex flex-col px-4 sm:px-8">
                  <span className="text-[32px] md:text-[36px] font-bold text-white mb-2 md:mb-3">
                    50+
                  </span>
                  <span className="text-[15px] md:text-[16px] font-medium text-white/90 leading-snug pr-2 lg:pr-4">
                    Experienced UX/UI Designers
                  </span>
                </div>
                {/* Stat 2 */}
                <div className="flex flex-col px-4 sm:px-8 sm:border-l sm:border-white/30">
                  <span className="text-[32px] md:text-[36px] font-bold text-white mb-2 md:mb-3">
                    $20M+
                  </span>
                  <span className="text-[15px] md:text-[16px] font-medium text-white/90 leading-snug pr-2 lg:pr-4">
                    Raised by our startup clients
                  </span>
                </div>
                {/* Stat 3 */}
                <div className="flex flex-col px-4 sm:px-8 lg:border-l lg:border-white/30">
                  <span className="text-[32px] md:text-[36px] font-bold text-white mb-2 md:mb-3">
                    95%
                  </span>
                  <span className="text-[15px] md:text-[16px] font-medium text-white/90 leading-snug pr-2 lg:pr-4">
                    Client satisfaction rate
                  </span>
                </div>
                {/* Stat 4 */}
                <div className="flex flex-col px-4 sm:px-8 sm:border-l sm:border-white/30 lg:border-l lg:border-white/30">
                  <span className="text-[32px] md:text-[36px] font-bold text-white mb-2 md:mb-3">
                    50+
                  </span>
                  <span className="text-[15px] md:text-[16px] font-medium text-white/90 leading-snug pr-2 lg:pr-4">
                    Projects across 5+ industries
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesignShowCase;
