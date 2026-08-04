"use client";
import React from "react";
import { 
  BrainCircuit, 
  Target, 
  Settings, 
  Clock, 
  TrendingUp, 
  HeartHandshake 
} from "lucide-react";

const reasons = [
  {
    icon: BrainCircuit,
    title: "AI and SaaS Expertise in One Team",
    description: "Our software engineers understand SaaS architecture, while our AI specialists understand models, data, evaluation, and intelligent automation."
  },
  {
    icon: Target,
    title: "Product-Focused Development",
    description: "We consider user needs, market positioning, monetization, adoption, and long-term maintainability alongside technical implementation."
  },
  {
    icon: Settings,
    title: "Solutions Designed Around Your Business",
    description: "Your application is developed around your workflows, customers, commercial model, security needs, and future product roadmap."
  },
  {
    icon: Clock,
    title: "Agile and Transparent Delivery",
    description: "Projects are delivered through clear milestones, regular communication, working product demonstrations, and continuous stakeholder feedback."
  },
  {
    icon: TrendingUp,
    title: "Scalable Engineering",
    description: "We design applications to support future features, integrations, users, and data volumes without requiring complete redevelopment."
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Product Support",
    description: "Our involvement can continue after launch through monitoring, maintenance, AI model improvements, cloud optimization, and feature development."
  }
];

export default function WhyChooseSoftmind() {
  return (
    <section className="relative w-full bg-gray-50 text-dark py-24 overflow-hidden font-jakarta">
      {/* Background blobs */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-navy/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto px-6 lg:px-12 max-w-[1280px]">
        {/* Header Layout */}
        <div className="flex flex-col items-center gap-3.5 text-center mb-16 max-w-[850px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[18px] md:text-[22px] font-bold tracking-wide">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-navy capitalize">
            Why Businesses Choose Softmind for AI SaaS Development
          </h2>
          <p className="text-sm md:text-base text-grey font-medium leading-[24px] tracking-wide mt-2">
            We help businesses transform ideas into intelligent SaaS products with expert strategy, expert engineering, innovative AI solutions, and reliable delivery.
          </p>
        </div>

        {/* 2x3 or 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:border-green/30 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
              >
                <div>
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-green">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] font-bold text-navy mb-3 transition-colors duration-300 group-hover:text-navy/95 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] font-medium text-grey leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
