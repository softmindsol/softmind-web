"use client";
import React from "react";
import {
  ShieldCheck,
  Layers,
  Cloud,
  Users,
  Activity,
  EyeOff,
} from "lucide-react";

const architectureData = [
  {
    icon: Layers,
    title: "Multi-Tenant & Single-Tenant Architecture",
    description:
      "We help you select and implement the tenancy model that best supports your customers and business strategy.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Infrastructure",
    description:
      "We build SaaS applications using cloud services, containerization, automated deployment, and scalable infrastructure components that can respond to changing demand.",
  },
  {
    icon: Users,
    title: "Role-Based Access Control",
    description:
      "Structured permissions ensure users can only access the features, accounts, and information relevant to their responsibilities.",
  },
  {
    icon: ShieldCheck,
    title: "Data Protection",
    description:
      "We use secure authentication, encryption, access controls, data validation, audit logging, and protected development practices to reduce security risks.",
  },
  {
    icon: Activity,
    title: "Reliable Performance",
    description:
      "Application monitoring, load testing, caching, database optimization, and fault-handling mechanisms help maintain a responsive user experience as usage grows.",
  },
  {
    icon: EyeOff,
    title: "AI Governance and Monitoring",
    description:
      "For AI-powered features, we can implement evaluation processes, human review mechanisms, usage monitoring, permission controls, and model guardrails.",
  },
];

export default function AiSaasArchitecture() {
  return (
    <section className="relative w-full bg-[#161616] text-white py-24 overflow-hidden font-jakarta">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 blur-[150px]"
        style={{ backgroundColor: "navy" }}
      />
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative mx-auto px-6 lg:px-12 max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-3.5 text-center mb-16 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[18px] md:text-[22px] font-bold tracking-wide">
              Architecture, Security, & Scalability
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-white capitalize">
            Secure and Scalable SaaS Architecture from the Start
          </h2>
          <p className="text-sm md:text-base text-white/80 font-medium leading-[24px] tracking-wide mt-2">
            Your SaaS architecture affects performance, security, development
            speed, operational cost, and the ability to scale. We design each
            product around its expected user volume, data requirements,
            integration needs, and compliance environment.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {architectureData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-green/40 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(12,191,131,0.1)] relative overflow-hidden"
              >
                {/* Accent Corner Glow */}
                <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-green/10 rounded-full blur-2xl group-hover:bg-green/15 transition-all duration-500" />

                <div>
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-green/10 border border-green/20 flex items-center justify-center text-green mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-green/20 group-hover:border-green/30">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] font-bold text-white mb-3 transition-colors duration-300 group-hover:text-green leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] font-medium text-white/70 leading-relaxed">
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
