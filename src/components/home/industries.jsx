"use client";
import React from "react";
import {
  HeartPulse,
  Wallet,
  Building,
  GraduationCap,
  Lightbulb,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import { SoftMindSolLogo } from "../../../public/images";

export default function Industries() {
  const industries = [
    {
      title: "HealthTech",
      description:
        "We build secure, user-friendly healthcare software that improves patient care, operational efficiency, and digital access to medical services.",
      icon: HeartPulse,
      color: "text-green bg-green/10 border-green/20",
      accent: "hover:shadow-green/10",
      items: [
        "Patient portal development",
        "Telemedicine app development",
        "Healthcare CRM solutions",
        "Appointment booking systems",
        "Medical record management",
        "Healthcare mobile app development",
      ],
    },
    {
      title: "FinTech",
      description:
        "We develop secure and scalable fintech platforms designed for transactions, automation, reporting, and seamless customer experiences.",
      icon: Wallet,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      accent: "hover:shadow-blue-500/10",
      items: [
        "Digital wallet development",
        "Payment gateway integration",
        "Lending platform development",
        "Finance dashboard development",
        "KYC and onboarding workflows",
        "Fintech mobile app development",
      ],
    },
    {
      title: "PropTech",
      description:
        "We create real estate and property technology solutions that simplify listings, transactions, tenant management, and customer communication.",
      icon: Building,
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
      accent: "hover:shadow-purple-500/10",
      items: [
        "Property listing platforms",
        "Real estate CRM development",
        "Tenant management systems",
        "Property management software",
        "Booking and scheduling tools",
        "Real estate mobile app development",
      ],
    },
    {
      title: "EdTech",
      description:
        "We build engaging and scalable education technology platforms for online learning, virtual classrooms, course management, and student engagement.",
      icon: GraduationCap,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      accent: "hover:shadow-orange-500/10",
      items: [
        "Learning management systems",
        "Virtual classroom platforms",
        "Course marketplace development",
        "Student progress dashboards",
        "Online assessment tools",
        "EdTech mobile app development",
      ],
    },
    {
      title: "AI Services",
      description:
        "We build intelligent solutions that automate workflows, improve efficiency, and enhance digital experiences.",
      icon: Lightbulb,
      color: "text-pink-500 bg-pink-500/10 border-pink-500/20",
      accent: "hover:shadow-pink-500/10",
      items: [
        "Custom chatbot development",
        "AI-powered analytics",
        "Process automation bots",
        "AI-driven personalization",
        "Predictive modeling solutions",
        "AI integration services",
      ],
    },
    {
      title: "E-Commerce",
      description:
        "We develop e-commerce platforms that help businesses sell online, manage operations, and deliver smooth shopping experiences across devices.",
      icon: ShoppingBag,
      color: "text-teal-500 bg-teal-500/10 border-teal-500/20",
      accent: "hover:shadow-teal-500/10",
      items: [
        "Custom e-commerce development",
        "Online marketplace development",
        "Shopping cart and checkout systems",
        "Inventory management solutions",
        "Payment and shipping integrations",
        "E-commerce mobile app development",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-[#161617] text-white py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Background radial glow element (matching "Ellipse 25" in design file) */}
      <div
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 blur-[130px]"
        style={{ backgroundColor: "navy" }}
      />

      {/* Stylized background monogram watermark on the left (matching "SoftOps Monogram") */}
      <div className="absolute select-none pointer-events-none">
        <Image
          src={SoftMindSolLogo}
          alt="SoftMindSol Logo"
          className="object-cover max-h-[726px]"
        />
      </div>

      <div className="relative mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-3.5 text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[22px] font-bold tracking-wide">
              Industries We Serve
            </span>
          </div>
          {/* <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-white max-w-[700px]">
            Tailored Technology For High-Growth Sectors
          </h2> */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-white max-w-[700px]">
            Software Solutions for High-Growth Industries
          </h2>
          {/* <p className="text-sm md:text-base text-white/60 font-medium leading-[24px] tracking-wide max-w-[600px] mt-2">
            We possess deep domain expertise in designing, shipping, and
            maintaining production-grade software for specialized industries.
          </p> */}
          <p className="text-sm md:text-base text-white/60 font-medium leading-[24px] tracking-wide max-w-[600px] mt-2">
            Industry-focused software solutions built for the way your business
            works, your users behave, and your market grows.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <div
                key={idx}
                className={`group flex flex-col justify-between bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-xl ${ind.accent}`}
              >
                <div>
                  {/* Icon Block */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 transition-transform duration-300 group-hover:scale-105 ${ind.color}`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] leading-[29px] font-bold tracking-wide text-white mb-3">
                    {ind.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/75 font-medium leading-[22px] tracking-wide mb-6">
                    {ind.description}
                  </p>
                </div>

                {/* Sub Features Bullet List */}
                <div className="border-t border-white/[0.06] pt-4 mt-auto">
                  <ul className="flex flex-col gap-2">
                    {ind.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs text-white/50 font-medium tracking-wide flex items-center gap-1.5"
                      >
                        <span className="text-green">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
