"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PenTool, Search, LayoutTemplate, ArrowRight } from "lucide-react";

const services = [
  {
    id: "ui-ux",
    title: "UI/UX Design Services",
    subtitle: "Create Interfaces That Make Every Interaction Count",
    description:
      "Your users shouldn't have to figure out how your product works. Softmind designs intuitive UI/UX experiences that make navigation effortless, simplify complex workflows, and help users accomplish tasks with confidence.",
    icon: <PenTool className="w-8 h-8" />,
    features: [
      "User experience design",
      "User interface design",
      "Information architecture",
      "User journey mapping",
      "Wireframing",
      "Interactive prototyping",
      "High-fidelity UI design",
      "Responsive web design",
      "Mobile app UI/UX design",
      "Usability testing",
      "Design-to-development handoff",
    ],
  },
  {
    id: "research",
    title: "UX Research & Strategy",
    subtitle: "Make Better Product Decisions With User Insights",
    description:
      "Great product experiences start with understanding the people who use them. We study your users, business objectives, competitors, and existing product experience to identify opportunities and prioritize what matters most.",
    icon: <Search className="w-8 h-8" />,
    features: [
      "User interviews",
      "User surveys",
      "Competitor research",
      "Market and product analysis",
      "User persona development",
      "Customer journey mapping",
      "User journey analysis",
      "Information architecture",
      "Usability testing",
      "UX audits",
      "Product discovery workshops",
      "UX strategy and roadmap",
    ],
  },
  {
    id: "design-systems",
    title: "Design Systems",
    subtitle: "Build Consistency Into Every Product Experience",
    description:
      "As your product grows, inconsistent components, screens, and interactions can create frustrating user experiences. Softmind helps you build scalable design systems that bring your product's visual language, components, patterns, and interaction standards into one structured foundation.",
    icon: <LayoutTemplate className="w-8 h-8" />,
    features: [
      "Design system strategy",
      "UI component libraries",
      "Design tokens",
      "Typography and color systems",
      "Interaction patterns",
      "Responsive design guidelines",
      "Accessibility standards",
      "Component documentation",
      "Figma libraries",
      "Developer-ready specifications",
      "Design system governance",
    ],
  },
];

export default function DesignServices() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeTab);

  return (
    <section className="bg-dark py-18 lg:py-24 font-jakarta relative overflow-hidden text-white">
      {/* Background glow effects */}
      <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#00235A] rounded-full blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] bg-[#0CBF83] rounded-full blur-[180px] opacity-20 pointer-events-none" />

      <div className="w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
              <span className="text-[#0CBF83] text-[18px] font-bold tracking-wide">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight mb-6">
              Our Digital Product Design Services
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/80 leading-relaxed">
              From discovering what users need to creating development-ready
              interfaces, Softmind provides end-to-end digital product design
              services tailored to your product stage and business goals.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Tabs */}
          <div className="flex flex-col gap-4 lg:w-1/3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-4 p-6 rounded-2xl text-left transition-all duration-300 border ${
                  activeTab === service.id
                    ? "bg-white/10 border-[#0CBF83]/50 shadow-[0_0_20px_rgba(12,191,131,0.1)]"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    activeTab === service.id
                      ? "bg-[#0CBF83] text-[#161616]"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {service.icon}
                </div>
                <h3
                  className={`text-[20px] font-bold ${
                    activeTab === service.id ? "text-[#0CBF83]" : "text-white"
                  }`}
                >
                  {service.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-2/3 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {activeService.subtitle}
                </h3>
                <p className="text-[16px] md:text-[18px] text-white/80 leading-relaxed mb-8">
                  {activeService.description}
                </p>

                <div className="mt-auto">
                  <h4 className="text-[18px] font-bold text-[#0CBF83] mb-6 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" /> What&apos;s Included:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {activeService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0CBF83] mt-2 shrink-0" />
                        <span className="text-[15px] text-white/90">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
