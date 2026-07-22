"use client";
import React, { useState } from "react";
import {
  Landmark,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "banking",
    title: "Banking",
    description:
      "Transform traditional banking with AI-powered onboarding, intelligent automation, core modernization, and secure digital experiences that improve operational efficiency and customer satisfaction.",
    icon: Landmark,
    accent: "from-blue-500 to-indigo-600",
    glow: "rgba(59, 130, 246, 0.15)",
    activeBorder: "border-blue-500",
    subFeatures: [
      {
        title: "Customer Onboarding & Digital Banking",
        description:
          "Accelerate customer onboarding with Banking-as-a-Service (BaaS), digital KYC/AML, and intelligent automation. Deliver secure, compliant, and frictionless digital banking experiences while reducing operational complexity.",
      },
      {
        title: "Fraud Prevention & Compliance",
        description:
          "Protect customers and financial assets with AI-powered fraud detection, real-time anomaly monitoring, identity verification, and zero-trust security frameworks that strengthen compliance and reduce financial risk.",
      },
      {
        title: "Core Banking Modernization",
        description:
          "Modernize legacy banking platforms using cloud-native architectures, API-first development, containerization, and intelligent automation to improve scalability, resilience, and speed to market.",
      },
      {
        title: "Process Optimization",
        description:
          "Automate banking operations with RPA, low-code platforms, and intelligent workflows to reduce manual effort, increase operational efficiency, and accelerate digital transformation.",
      },
      {
        title: "Customer Experience & Personalization",
        description:
          "Leverage AI, customer data, and advanced analytics to deliver hyper-personalized, omnichannel banking experiences that improve engagement, customer satisfaction, and long-term loyalty.",
      },
      {
        title: "Open Banking Integration",
        description:
          "Enable secure Open Banking ecosystems through PSD2-compliant APIs, OpenAPI standards, and Banking-as-a-Service capabilities to unlock new partnerships, revenue streams, and digital financial products.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    description:
      "Build resilient payment ecosystems with real-time processing, embedded finance, payment orchestration, fraud prevention, and compliance solutions that enable secure transactions across global markets.",
    icon: CreditCard,
    accent: "from-green to-[#004BC0]",
    glow: "rgba(59, 130, 246, 0.9)",
    activeBorder: "border-orange-600",
    subFeatures: [
      {
        title: "Real-time Payment Platforms",
        description:
          "Build secure, scalable real-time payment infrastructures that enable instant transactions, improve settlement speed, and enhance payment reliability across digital channels.",
      },
      {
        title: "Payment Orchestration & Gateway Development",
        description:
          "Develop intelligent payment orchestration platforms and custom payment gateways that optimize routing, increase transaction success rates, and deliver seamless payment experiences.",
      },
      {
        title: "AI-powered Fraud Prevention",
        description:
          "Reduce payment fraud with AI-driven risk scoring, behavioral analytics, and real-time anomaly detection that minimize false positives while strengthening security and compliance.",
      },
      {
        title: "Automated Merchant Onboarding",
        description:
          "Accelerate merchant activation with automated KYC/KYB verification, intelligent onboarding workflows, and compliance automation that reduce processing time and improve operational efficiency.",
      },
      {
        title: "Cross-border Payment Solutions",
        description:
          "Enable fast, secure, and cost-effective international payments through modern payment architectures and blockchain-powered settlement solutions that simplify global transactions.",
      },
      {
        title: "Closed-loop Payment Ecosystems",
        description:
          "Design closed-loop payment ecosystems that reduce processing costs, accelerate settlements, and create personalized payment experiences that increase customer retention.",
      },
      {
        title: "Embedded Finance Solutions",
        description:
          "Integrate payments, lending, insurance, and financial services directly into digital platforms, enabling new revenue opportunities and delivering seamless customer experiences.",
      },
      {
        title: "Compliance Automation",
        description:
          "Automate regulatory reporting, transaction monitoring, auditing, and compliance workflows to meet evolving standards such as PSD2, AMLD, and FATF while reducing manual effort.",
      },
    ],
  },
  {
    id: "underwriting",
    title: "Underwriting & Credit Decisioning",
    description:
      "Accelerate lending and insurance decisions through AI-driven risk assessment, predictive analytics, automated underwriting, fraud detection, and streamlined approval workflows.",
    icon: ShieldCheck,
    accent: "from-blue-500 to-indigo-600",
    glow: "rgba(255, 255, 255, 0.15)",
    activeBorder: "border-green",
    subFeatures: [
      {
        title: "Compliance & Risk Management",
        description:
          "Strengthen lending and insurance operations with AI-powered compliance monitoring, digital identity verification, automated governance, and proactive risk management.",
      },
      {
        title: "Predictive Risk & Decision Intelligence",
        description:
          "Leverage AI, predictive analytics, and intelligent decision engines to improve underwriting accuracy, detect risks early, and support faster, data-driven credit decisions.",
      },
      {
        title: "Intelligent Automation for Underwriting & Claims",
        description:
          "Automate underwriting, loan processing, mortgage approvals, and insurance claims using AI-powered workflows that reduce manual effort, improve accuracy, and accelerate turnaround times.",
      },
      {
        title: "Claims Automation & Modernization",
        description:
          "Modernize claims management with AI-driven intake, automated adjudication, and intelligent workflow automation that enhance processing speed, accuracy, and customer satisfaction.",
      },
      {
        title: "BaaS-enabled Financial Workflows",
        description:
          "Leverage Banking-as-a-Service (BaaS) to streamline lending, payments, underwriting, and servicing operations while delivering scalable and connected financial experiences.",
      },
      {
        title: "Low-code Workflow Transformation",
        description:
          "Digitize underwriting, claims, servicing, and back-office operations with low-code platforms that improve agility, reduce development time, and increase operational efficiency.",
      },
      {
        title: "Advanced Fraud Prevention & Identity Verification",
        description:
          "Protect lending and insurance ecosystems with AI-driven KYC/KYB, biometric identity verification, behavioral analytics, and fraud prevention solutions that strengthen trust and regulatory compliance.",
      },
      {
        title: "Unified Onboarding & Self-service Experiences",
        description:
          "Create unified digital onboarding and self-service journeys across lending and insurance platforms, improving transparency, reducing customer friction, and enhancing digital engagement.",
      },
    ],
  },
];

export default function FinTechFutureReady() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  const activeData = services.find((s) => s.id === activeSection);

  const renderExpandedContent = (data) => {
    if (!data) return null;
    return (
      <motion.div
        initial={{ opacity: 0, height: 0, y: -20 }}
        animate={{ opacity: 1, height: "auto", y: 0 }}
        exit={{ opacity: 0, height: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-6 md:p-8 lg:p-12 backdrop-blur-md">
          <div className="mb-8 lg:mb-10 text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
              {data.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
                Solutions
              </span>
            </h3>
            <p className="text-white/70 font-medium max-w-[700px] mx-auto text-sm md:text-base">
              Discover our specialized capabilities designed to accelerate
              transformation within your {data.title.toLowerCase()} ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
            {data.subFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="group flex flex-col p-5 lg:p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-green/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green/10 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-green" />
                  </div>
                  <div>
                    <h4 className="text-base lg:text-lg font-bold text-white mb-2 group-hover:text-green transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-white/60 text-[13px] lg:text-sm leading-[1.6] group-hover:text-white/80 transition-colors font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative w-full bg-black py-20 lg:py-28 overflow-hidden font-jakarta">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-200/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-200/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12">
        {/* Badge and Header */}
        <div className="flex flex-col items-center text-center max-w-[850px] mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green text-[11px] md:text-xs font-bold tracking-[2px] uppercase">
              Scale Your Operations
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[45px] lg:leading-[1.2] font-bold text-white tracking-tight mb-6">
            Future-Ready Financial Services,{" "}
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0] pt-2">
              Built for Scale
            </div>
          </h2>

          <p className="text-base md:text-lg text-white/80 font-medium leading-[1.6]">
            Modernize financial operations with AI-powered automation,
            cloud-native platforms, and intelligent workflows. From digital
            banking and payments to underwriting and compliance, we help
            financial institutions accelerate innovation, strengthen security,
            and deliver seamless customer experiences.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <React.Fragment key={idx}>
                {/* Main Card */}
                <div
                  className={`group relative bg-white/5 border ${isActive ? item.activeBorder : "border-white/10"} rounded-[28px] p-8 lg:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm`}
                >
                  <div>
                    {/* Icon Frame */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white mb-8 shadow-lg shadow-[var(--shadow-glow)] transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                      style={{ "--shadow-glow": item.glow }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl lg:text-2xl font-bold mb-4 transition-colors duration-300 ${isActive ? "text-green" : "text-white group-hover:text-green"}`}
                    >
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 font-medium leading-[1.6] text-[15px] lg:text-[16px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Interactive Expand Button */}
                  <button
                    onClick={() => toggleSection(item.id)}
                    className={`mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-bold text-sm tracking-wide transition-colors duration-300 w-full outline-none ${isActive ? "text-green" : "text-white/90 group-hover:text-green"}`}
                  >
                    <span>{isActive ? "Hide Details" : "Explore Service"}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-green text-black" : "bg-white/10 group-hover:bg-green group-hover:text-black group-hover:rotate-45"}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>

                {/* Mobile & Tablet Inline Reveal (Hidden on lg screens) */}
                <div className="block lg:hidden w-full">
                  <AnimatePresence>
                    {isActive && renderExpandedContent(item)}
                  </AnimatePresence>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Desktop Bottom Reveal (Hidden on screens smaller than lg) */}
        <div className="hidden lg:block mt-8 lg:mt-12 w-full">
          <AnimatePresence>
            {activeSection && activeData && renderExpandedContent(activeData)}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
