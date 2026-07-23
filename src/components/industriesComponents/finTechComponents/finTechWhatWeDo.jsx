"use client";
import React, { useState } from "react";
import {
  UserPlus,
  ShieldAlert,
  Cpu,
  Zap,
  Sparkles,
  Share2,
  Activity,
  Sliders,
  Eye,
  Users,
  Globe,
  Repeat,
  Layers,
  FileText,
  ShieldCheck,
  BarChart3,
  FileCheck,
  Server,
  GitPullRequest,
  Fingerprint,
  UserCheck,
} from "lucide-react";

const tabData = {
  banking: {
    label: "Banking",
    badge: "Digital Core",
    items: [
      {
        title: "Neobank & Digital Banking Development",
        description:
          "Accelerate onboarding with Banking-as-a-Service (BaaS). As a premier neobank development company MENA, we provide digital banking platform development for startups to deliver frictionless experiences and reduce complexity.",
        icon: UserPlus,
      },
      {
        title: "KYC AML Software Development",
        description:
          "Protect financial assets with AI-powered fraud detection, identity verification, and zero-trust security frameworks. We specialize in fintech compliance software development GDPR PCI to strengthen compliance and reduce risk.",
        icon: ShieldAlert,
      },
      {
        title: "Core Banking Modernization",
        description:
          "Modernize legacy banking platforms using cloud-native architectures, API-first development, containerization, and intelligent automation to improve scalability, resilience, and speed to market.",
        icon: Cpu,
      },
      {
        title: "Process Optimization",
        description:
          "Automate banking operations with RPA, low-code platforms, and intelligent workflows to reduce manual effort, increase operational efficiency, and accelerate digital transformation.",
        icon: Zap,
      },
      {
        title: "Customer Experience & Personalization",
        description:
          "Leverage AI, customer data, and advanced analytics to deliver hyper-personalized, omnichannel banking experiences that improve engagement, customer satisfaction, and long-term loyalty.",
        icon: Sparkles,
      },
      {
        title: "Open Banking Integration",
        description:
          "Enable secure Open Banking ecosystems through PSD2-compliant APIs, OpenAPI standards, and Banking-as-a-Service capabilities to unlock new partnerships, revenue streams, and digital financial products.",
        icon: Share2,
      },
    ],
  },
  payments: {
    label: "Payments",
    badge: "Global Rails",
    items: [
      {
        title: "Payment Platform Development",
        description:
          "As a leading payment platform development company Middle East, we build scalable real-time payment infrastructures that enable instant transactions, improve settlement speed, and enhance reliability.",
        icon: Activity,
      },
      {
        title: "Payment Gateway Development for Startups",
        description:
          "Develop intelligent orchestration platforms and custom payment gateways. We provide robust payment gateway development company for startups services to optimize routing and deliver seamless payment experiences.",
        icon: Sliders,
      },
      {
        title: "AI-powered Fraud Prevention",
        description:
          "Reduce payment fraud with AI-driven risk scoring, behavioral analytics, and real-time anomaly detection that minimize false positives while strengthening security and compliance.",
        icon: Eye,
      },
      {
        title: "Automated Merchant Onboarding",
        description:
          "Accelerate merchant activation with automated KYC/KYB verification, intelligent onboarding workflows, and compliance automation that reduce processing time and improve operational efficiency.",
        icon: Users,
      },
      {
        title: "Cross-border Payment Solutions",
        description:
          "Enable fast, secure, and cost-effective international payments through modern payment architectures and blockchain-powered settlement solutions that simplify global transactions.",
        icon: Globe,
      },
      {
        title: "Digital Wallet Development",
        description:
          "Partner with a top digital wallet development company Saudi Arabia to design closed-loop payment ecosystems that reduce processing costs, accelerate settlements, and create personalized payment experiences.",
        icon: Repeat,
      },
      {
        title: "Embedded Finance Solutions",
        description:
          "Integrate payments, lending, insurance, and financial services directly into digital platforms, enabling new revenue opportunities and delivering seamless customer experiences.",
        icon: Layers,
      },
      {
        title: "Compliance Automation",
        description:
          "Automate regulatory reporting, transaction monitoring, auditing, and compliance workflows to meet evolving standards such as PSD2, AMLD, and FATF while reducing manual effort.",
        icon: FileText,
      },
    ],
  },
  underwriting: {
    label: "Underwriting & Credit",
    badge: "Risk Intelligence",
    items: [
      {
        title: "Compliance & Risk Management",
        description:
          "Strengthen lending operations with AI-powered compliance monitoring. Our fintech compliance software development GDPR PCI ensures secure digital identity verification and proactive risk management.",
        icon: ShieldCheck,
      },
      {
        title: "Predictive Risk & Decision Intelligence",
        description:
          "Leverage AI, predictive analytics, and intelligent decision engines to improve underwriting accuracy, detect risks early, and support faster, data-driven credit decisions.",
        icon: BarChart3,
      },
      {
        title: "Custom Lending Platform Development",
        description:
          "Automate loan processing and underwriting with AI-powered workflows. We provide comprehensive lending software development and BNPL software development company services to accelerate turnaround times.",
        icon: Cpu,
      },
      {
        title: "Claims Automation & Modernization",
        description:
          "Modernize claims management with AI-driven intake, automated adjudication, and intelligent workflow automation that enhance processing speed, accuracy, and customer satisfaction.",
        icon: FileCheck,
      },
      {
        title: "BaaS-enabled Financial Workflows",
        description:
          "Leverage Banking-as-a-Service (BaaS) to streamline lending, payments, underwriting, and servicing operations while delivering scalable and connected financial experiences.",
        icon: Server,
      },
      {
        title: "Low-code Workflow Transformation",
        description:
          "Digitize underwriting, claims, servicing, and back-office operations with low-code platforms that improve agility, reduce development time, and increase operational efficiency.",
        icon: GitPullRequest,
      },
      {
        title: "Advanced Fraud Prevention & Identity Verification",
        description:
          "Protect lending and insurance ecosystems with AI-driven KYC/KYB, biometric identity verification, behavioral analytics, and fraud prevention solutions that strengthen trust and regulatory compliance.",
        icon: Fingerprint,
      },
      {
        title: "Unified Onboarding & Self-service Experiences",
        description:
          "Create unified digital onboarding and self-service journeys across lending and insurance platforms, improving transparency, reducing customer friction, and enhancing digital engagement.",
        icon: UserCheck,
      },
    ],
  },
};

export default function FinTechWhatWeDo() {
  const [activeTab, setActiveTab] = useState("banking");

  return (
    <section className="relative w-full bg-gray-50 py-20 lg:py-28 overflow-hidden font-jakarta">
      {/* Background Gradients & Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(12,191,131,0.1),transparent)] pointer-events-none" />
      <div className="absolute right-0 bottom-[-100px] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1350px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[850px] mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green text-[11px] md:text-xs font-bold tracking-[2px] uppercase">
              Financial Services Solutions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[45px] lg:leading-[1.2] font-bold text-navy tracking-tight mb-6">
            A Leading Fintech App Development Company{" "}
            <p className="py-3 text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
              & Technology Partner
            </p>
          </h2>

          <p className="text-base md:text-lg text-grey font-medium leading-[1.6]">
            Empower your financial institution with secure, intelligent, and
            future-ready technology solutions. Select a category below to
            explore our core capabilities.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-14 lg:mb-16">
          <div className="inline-flex flex-wrap md:flex-nowrap p-2 bg-white border border-gray-200 rounded-2xl md:rounded-full justify-center gap-2 shadow-sm">
            {Object.keys(tabData).map((tabKey) => {
              const tab = tabData[tabKey];
              const isActive = activeTab === tabKey;
              return (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`relative flex items-center gap-2.5 px-6 py-3 rounded-xl md:rounded-full font-bold text-sm tracking-wide transition-all duration-300 cursor-pointer outline-none ${
                    isActive
                      ? "bg-gradient-to-r from-[#0CBF83] to-[#004BC0] text-white shadow-md shadow-green/20"
                      : "text-navy/70 hover:text-navy hover:bg-navy/5"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase transition-colors duration-300 ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-navy/5 text-navy/70"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tabData[activeTab].items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col p-8 bg-white border border-gray-100 rounded-3xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,35,90,0.06)] hover:shadow-lg hover:scale-105 overflow-hidden"
              >
                {/* Neon glow effect on top border */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-navy/5 border border-navy/5 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-green group-hover:to-[#004BC0] transition-all duration-500">
                  <Icon className="w-6 h-6 text-navy group-hover:text-green transition-colors duration-500" />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-green transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-grey font-medium transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
