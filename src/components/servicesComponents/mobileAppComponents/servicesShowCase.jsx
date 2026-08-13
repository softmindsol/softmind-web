"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Layers,
  PenTool,
  BrainCircuit,
  RefreshCw,
  Rocket,
  Wrench,
  Search,
  Watch,
  ShieldCheck,
  Puzzle,
} from "lucide-react";
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
    title: "Mobile App Strategy & Product Discovery",
    icon: Search,
    description:
      "Reduce development risks before writing a single line of code. We analyze your business objectives, users, competitors, and market opportunities to define the right product strategy, features, technology, and roadmap.",
    images: [
      "https://picsum.photos/id/28/800/400",
      "https://picsum.photos/id/29/800/400",
      "https://picsum.photos/id/30/800/400",
    ],
  },
  {
    title: "Mobile UI/UX Design",
    icon: PenTool,
    description:
      "Create intuitive mobile experiences that users can understand and enjoy. Our designers develop user-centered interfaces focused on usability, accessibility, engagement, and conversion across different screen sizes and devices.",
    images: [
      "https://picsum.photos/id/31/800/400",
      "https://picsum.photos/id/32/800/400",
      "https://picsum.photos/id/33/800/400",
    ],
  },
  {
    title: "Native Mobile App Development",
    icon: Smartphone,
    description:
      "Build high-performance applications specifically for iOS and Android. Our native development approach delivers responsive experiences, better device integration, strong performance, and access to platform-specific capabilities.",
    images: [
      "https://picsum.photos/id/34/800/400",
      "https://picsum.photos/id/35/800/400",
      "https://picsum.photos/id/36/800/400",
    ],
  },
  {
    title: "Cross-Platform App Development",
    icon: Layers,
    description:
      "Reach users across iOS and Android while reducing development time and complexity. We build scalable cross-platform applications that provide consistent experiences without compromising functionality or performance.",
    images: [
      "https://picsum.photos/id/37/800/400",
      "https://picsum.photos/id/38/800/400",
      "https://picsum.photos/id/39/800/400",
    ],
  },
  {
    title: "AI-Powered Mobile App Development",
    icon: BrainCircuit,
    description:
      "Make your mobile application smarter with AI. We integrate capabilities such as intelligent recommendations, conversational AI, predictive analytics, automation, personalization, computer vision, and natural language processing to create more valuable user experiences.",
    images: [
      "https://picsum.photos/id/40/800/400",
      "https://picsum.photos/id/41/800/400",
      "https://picsum.photos/id/42/800/400",
    ],
  },
  {
    title: "Mobile App Modernization",
    icon: RefreshCw,
    description:
      "Upgrade outdated applications without rebuilding your entire product from scratch. We modernize legacy apps, improve performance, introduce new technologies, strengthen security, and create scalable architectures designed for future growth.",
    images: [
      "https://picsum.photos/id/43/800/400",
      "https://picsum.photos/id/44/800/400",
      "https://picsum.photos/id/45/800/400",
    ],
  },
  {
    title: "Custom App Features & Integrations",
    icon: Puzzle,
    description:
      "Extend your application's capabilities with custom features and third-party integrations. From payment gateways and APIs to CRM, ERP, cloud, analytics, and enterprise systems, we connect your app with the tools your business already uses.",
    images: [
      "https://picsum.photos/id/46/800/400",
      "https://picsum.photos/id/47/800/400",
      "https://picsum.photos/id/48/800/400",
    ],
  },
  {
    title: "Wearable App Development",
    icon: Watch,
    description:
      "Extend your mobile experience beyond smartphones with applications for smartwatches, fitness trackers, and other connected devices. Deliver real-time, convenient experiences that keep users connected to your brand.",
    images: [
      "https://picsum.photos/id/49/800/400",
      "https://picsum.photos/id/50/800/400",
      "https://picsum.photos/id/51/800/400",
    ],
  },
  {
    title: "Mobile App Testing & Quality Assurance",
    icon: ShieldCheck,
    description:
      "Launch with confidence through comprehensive mobile application testing. We test functionality, usability, compatibility, performance, security, and reliability across devices and operating systems to minimize defects and improve user satisfaction.",
    images: [
      "https://picsum.photos/id/52/800/400",
      "https://picsum.photos/id/53/800/400",
      "https://picsum.photos/id/54/800/400",
    ],
  },
  {
    title: "App Deployment & Launch",
    icon: Rocket,
    description:
      "Take your application from development to the hands of your users. We manage deployment, app store requirements, release preparation, performance optimization, and launch support to help you enter the market smoothly.",
    images: [
      "https://picsum.photos/id/55/800/400",
      "https://picsum.photos/id/56/800/400",
      "https://picsum.photos/id/57/800/400",
    ],
  },
  {
    title: "Mobile App Maintenance & Support",
    icon: Wrench,
    description:
      "Keep your application secure, stable, and competitive after launch. Our ongoing mobile app maintenance services cover bug fixes, security updates, performance optimization, OS updates, feature enhancements, and continuous improvements.",
    images: [
      "https://picsum.photos/id/58/800/400",
      "https://picsum.photos/id/59/800/400",
      "https://picsum.photos/id/60/800/400",
    ],
  },
];

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
    <section className="relative bg-[#161616] font-jakarta py-24">
      {/* Background logo */}
      <div className="absolute select-none pointer-events-none inset-0 flex items-center justify-center opacity-[0.03]">
        <Image
          src={SoftMindSolLogo}
          alt="SoftMindSol Logo"
          className="object-cover max-h-[726px]"
        />
      </div>

      <div className="relative mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-16 text-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-navy to-blue-600" />
            <h3 className="text-[22px] font-bold tracking-[1px] text-green">
              Custom Mobile App Development Services
            </h3>
          </div>
          <h2 className="text-[32px] md:text-[46px] font-bold leading-tight tracking-[1px] text-white capitalize max-w-4xl">
            Transform your ideas into mobile experiences built for growth.
          </h2>
          <p className="text-[16px] md:text-[18px] font-medium leading-[24px] tracking-[1px] text-white/90 max-w-3xl">
            Whether you're launching a new digital product or modernizing an existing application, our mobile app development team combines product strategy, UI/UX design, engineering, AI, and quality assurance to build mobile solutions aligned with your business goals.
          </p>
        </div>

        {/* Main Content: Sidebar + Right Panel */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Sidebar Tabs */}
          <div className="flex-shrink-0 w-full lg:w-[450px]">
            <div className="rounded-xl bg-white/5 border border-white/5 p-6 flex flex-col gap-2 max-h-[600px] overflow-y-auto custom-scrollbar">
              {tabsData.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-start gap-4 rounded-full px-5 py-3 transition-all duration-300 text-left ${
                      isActive
                        ? "bg-green/20 text-white opacity-100"
                        : "text-white opacity-40 hover:opacity-100"
                    }`}
                  >
                    <Icon className="h-6 w-6 flex-shrink-0 mt-0.5" />
                    <span className="text-[14px] font-semibold tracking-[1px]">
                      {tab.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content Panel */}
          <div className="flex-1 w-full lg:w-auto overflow-hidden">
            <Carousel
              key={activeIndex}
              className="w-full flex flex-col gap-6"
              opts={{ loop: true }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-[28px] md:text-[36px] font-bold capitalize tracking-[1px] text-white">
                  {activeTab.title}
                </h2>
                <div className="hidden sm:block shrink-0">
                  <CustomCarouselControls />
                </div>
              </div>
              <p className="text-[16px] font-medium leading-[24px] tracking-[1px] text-white/80">
                {activeTab.description}
              </p>
              
              {/* Carousel Container */}
              <div className="relative mt-2 w-full shadow-[0px_4px_30px_rgba(12,191,131,0.2)] rounded-xl overflow-hidden">
                <CarouselContent>
                  {activeTab.images.map((imgSrc, imgIdx) => (
                    <CarouselItem key={imgIdx}>
                      <div className="h-[350px] md:h-[450px] w-full relative">
                        <img
                          src={imgSrc}
                          alt={`${activeTab.title} image ${imgIdx + 1}`}
                          className="h-full w-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute bottom-4 right-4 z-10 sm:hidden">
                  <CustomCarouselControls />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowCase;
