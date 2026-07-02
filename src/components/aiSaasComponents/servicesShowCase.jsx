"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BrainCircuit,
  Cloud,
  Layers,
  Cpu,
  Server,
  Lightbulb,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import { SoftMindSolLogo } from "../../../public/images";

const tabsData = [
  {
    title: "AI Model Development",
    icon: BrainCircuit,
    description:
      "Great products go beyond features – they solve real problems with intelligence built in. We design and train custom AI models that understand your data, automate decisions, and scale seamlessly within your SaaS platform, turning raw information into a genuine competitive advantage.",
    images: [
      "https://picsum.photos/id/1/800/400",
      "https://picsum.photos/id/2/800/400",
      "https://picsum.photos/id/3/800/400",
    ],
  },
  {
    title: "SaaS Architecture",
    icon: Layers,
    description:
      "Build a robust and scalable architecture tailored for AI-driven software. Our designs ensure high availability, efficient resource utilization, and seamless integration, empowering your SaaS products to grow alongside your business without technical bottlenecks.",
    images: [
      "https://picsum.photos/id/4/800/400",
      "https://picsum.photos/id/5/800/400",
      "https://picsum.photos/id/6/800/400",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    description:
      "Deploy your applications on secure, high-performance cloud environments. We provide end-to-end infrastructure management and optimization, ensuring that your AI solutions operate flawlessly while maintaining cost efficiency and data compliance.",
    images: [
      "https://picsum.photos/id/7/800/400",
      "https://picsum.photos/id/8/800/400",
      "https://picsum.photos/id/9/800/400",
    ],
  },
  {
    title: "API Integration",
    icon: Cpu,
    description:
      "Seamlessly connect your AI capabilities with third-party services and internal tools. Our robust API integration solutions simplify data flow, enhance functionality, and create a unified ecosystem that accelerates your product's time-to-market.",
    images: [
      "https://picsum.photos/id/10/800/400",
      "https://picsum.photos/id/11/800/400",
      "https://picsum.photos/id/12/800/400",
    ],
  },
  {
    title: "MLOps & Deployment",
    icon: Server,
    description:
      "Streamline the lifecycle of your machine learning models from development to production. Our MLOps practices ensure continuous integration, reliable deployment, and automated monitoring, reducing downtime and maintaining model accuracy over time.",
    images: [
      "https://picsum.photos/id/13/800/400",
      "https://picsum.photos/id/14/800/400",
      "https://picsum.photos/id/15/800/400",
    ],
  },
  {
    title: "Product Strategy",
    icon: Lightbulb,
    description:
      "Align your AI initiatives with your core business objectives. We offer strategic consulting to identify high-impact opportunities, define product roadmaps, and ensure that your intelligent SaaS solutions deliver measurable value to your users.",
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

const ServicesShowCase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabsData[activeIndex];

  return (
    <section className="relative w-full bg-[#161616] py-24 overflow-hidden font-jakarta">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[490px] w-[490px] -translate-x-1/2 -translate-y-[187px] rounded-full bg-navy blur-[212.4px]" />

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
              AI SaaS Development Services
            </h3>
          </div>
          <h2 className="text-[32px] md:text-[46px] font-bold leading-tight tracking-[1px] text-white capitalize">
            Transforming Ideas Into Intelligent Products
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
        <div className="rounded-xl bg-gradient-to-r from-navy to-[#000D22] p-8 md:p-12 lg:p-16">
          <h2 className="mb-12 text-center text-[32px] md:text-[46px] font-bold capitalize tracking-[1px] text-white">
            Your AI Product Is Built To Scale
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Stat 1 */}
            <div className="flex flex-col px-4 sm:px-6">
              <span className="text-[36px] font-bold tracking-[1px] text-white">
                50+
              </span>
              <span className="mt-2 text-[18px] font-medium leading-[120%] tracking-[1px] text-white">
                AI/ML Engineers & Data Scientists
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col px-4 sm:px-6 sm:border-l sm:border-white lg:border-l lg:border-white">
              <span className="text-[36px] font-bold tracking-[1px] text-white">
                $20M+
              </span>
              <span className="mt-2 text-[18px] font-medium leading-[120%] tracking-[1px] text-white">
                In efficiency gains for our clients
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col px-4 sm:px-6 lg:border-l lg:border-white">
              <span className="text-[36px] font-bold tracking-[1px] text-white">
                95%
              </span>
              <span className="mt-2 text-[18px] font-medium leading-[120%] tracking-[1px] text-white">
                Model accuracy across production
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col px-4 sm:px-6 sm:border-l sm:border-white lg:border-l lg:border-white">
              <span className="text-[36px] font-bold tracking-[1px] text-white">
                50+
              </span>
              <span className="mt-2 text-[18px] font-medium leading-[120%] tracking-[1px] text-white">
                AI SaaS products shipped
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowCase;
