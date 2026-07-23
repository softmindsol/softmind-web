"use client";
import React from "react";
import {
  Cpu,
  CreditCard,
  CheckCircle2,
  Layers,
  Bot,
  Cloud,
  Sparkles,
  BarChart3,
} from "lucide-react";

const playbookData = [
  {
    num: "01",
    title: "Fintech MVP Development & Engineering",
    description:
      "As an expert fintech MVP development company, we accelerate the delivery of digital banking and payment products with AI-powered software engineering that reduces costs and shortens time-to-market.",
    icon: Cpu,
  },
  {
    num: "02",
    title: "Payment Architecture Modernization",
    description:
      "Modernize fragmented payment ecosystems with payment orchestration, gateway consolidation, open banking integrations, embedded finance, and cloud-native architectures built for speed, resilience, and scalability.",
    icon: CreditCard,
  },
  {
    num: "03",
    title: "AI-Augmented Engineering & QA",
    description:
      "Improve software quality and engineering velocity through AI-assisted development, automated testing, intelligent QA, and continuous delivery pipelines that reduce risk and accelerate releases.",
    icon: CheckCircle2,
  },
  {
    num: "04",
    title: "Experience & Service Design",
    description:
      "Design seamless, secure, and personalized financial experiences that simplify customer journeys, increase engagement, and strengthen long-term loyalty across every digital touchpoint.",
    icon: Layers,
  },
  {
    num: "05",
    title: "Agentic AI & Intelligent Automation",
    description:
      "Automate KYC, AML, underwriting, claims processing, customer onboarding, and back-office operations using intelligent AI agents that increase efficiency while ensuring compliance.",
    icon: Bot,
  },
  {
    num: "06",
    title: "Cloud Transformation Services",
    description:
      "Modernize legacy banking and insurance platforms with secure cloud migration, infrastructure modernization, DevSecOps, and cloud-native architectures designed for resilience and regulatory compliance.",
    icon: Cloud,
  },
  {
    num: "07",
    title: "Emerging Technologies",
    description:
      "Leverage IoT, XR, digital twins, and next-generation technologies to create innovative financial products, optimize operations, and unlock new customer experiences.",
    icon: Sparkles,
  },
  {
    num: "08",
    title: "Data & AI Services",
    description:
      "Transform financial data into strategic intelligence with predictive analytics, fraud detection, risk scoring, AI-powered underwriting, customer insights, and enterprise data platforms.",
    icon: BarChart3,
  },
];

export default function FinTechSecureScalable() {
  return (
    <section className="relative w-full bg-[#f8f9fa] py-20 lg:py-28 overflow-hidden font-jakarta">
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-100/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-green/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1350px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[950px] mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-navy text-[11px] md:text-xs font-bold tracking-[2px] uppercase">
              FinTech Playbook
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[45px] lg:leading-[1.2] font-bold text-navy tracking-tight mb-6">
            Secure, Scalable, and Intelligent{" "}
            <p className="pt-3 text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
              Financial Solutions
            </p>
          </h2>

          <p className="text-base md:text-lg text-grey font-medium leading-[1.6]">
            Navigate evolving regulations, rising customer expectations, and
            legacy infrastructure with confidence. Our AI-powered engineering,
            payments, cloud, and data solutions help financial institutions
            modernize operations, accelerate innovation, and deliver secure
            digital experiences at scale.
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {playbookData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white border border-gray-100 rounded-3xl p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(0,35,90,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top line with serial number and icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-bold text-gray-200 group-hover:text-green/45 transition-colors duration-300 font-satoshi">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center group-hover:bg-green group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5 text-navy group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg lg:text-xl font-bold text-navy mb-4 group-hover:text-[#004BC0] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-grey font-medium leading-[1.6] text-[14px] lg:text-[15px]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line decor */}
                <div className="w-8 h-[2px] bg-gray-200 mt-6 group-hover:bg-green group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
