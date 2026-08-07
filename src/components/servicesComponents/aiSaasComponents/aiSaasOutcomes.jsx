import React from "react";

const listItems = [
  {
    icon: "⚙️",
    badgeBg: "bg-[#0CBF83]",
    rotation: "rotate-6",
    title: "Intelligent Workflow Automation",
    desc: "Automate repetitive, rules-based, and data-intensive processes to reduce manual work and improve operational consistency.",
  },
  {
    icon: "🤖",
    badgeBg: "bg-[#00235A]",
    rotation: "-rotate-6",
    title: "AI Assistants and Copilots",
    desc: "Give users contextual assistance inside your SaaS platform. AI copilots can answer questions, summarize information, generate content, recommend actions, and guide users through complex workflows.",
  },
  {
    icon: "📈",
    badgeBg: "bg-[#0CBF83]",
    rotation: "rotate-6",
    title: "Predictive Analytics",
    desc: "Use historical and real-time data to forecast outcomes, identify risks, detect patterns, and support more informed business decisions.",
  },
  {
    icon: "🎯",
    badgeBg: "bg-[#00235A]",
    rotation: "-rotate-6",
    title: "Recommendation Systems",
    desc: "Deliver relevant products, content, services, or actions based on user behavior, preferences, and contextual data.",
  },
  {
    icon: "💬",
    badgeBg: "bg-[#0CBF83]",
    rotation: "rotate-6",
    title: "Natural Language Processing",
    desc: "Extract meaning from documents, messages, reviews, support requests, and other forms of unstructured text.",
  },
  {
    icon: "👁️",
    badgeBg: "bg-[#00235A]",
    rotation: "-rotate-6",
    title: "Computer Vision",
    desc: "Enable applications to analyze images and video for classification, detection, inspection, monitoring, and visual search.",
  },
  {
    icon: "📄",
    badgeBg: "bg-[#0CBF83]",
    rotation: "rotate-6",
    title: "Intelligent Document Processing",
    desc: "Automatically extract, classify, validate, and organize information from invoices, contracts, forms, reports, and other business documents.",
  },
  {
    icon: "🚨",
    badgeBg: "bg-[#00235A]",
    rotation: "-rotate-6",
    title: "Anomaly and Fraud Detection",
    desc: "Identify unusual behavior, suspicious transactions, operational irregularities, or potential security risks before they cause significant damage.",
  },
  {
    icon: "👤",
    badgeBg: "bg-[#0CBF83]",
    rotation: "rotate-6",
    title: "Personalized User Experiences",
    desc: "Adapt content, interfaces, recommendations, and workflows to each user’s behavior, role, preferences, and objectives.",
  },
];

const roadmapSteps = [
  "Product discovery & feasibility analysis",
  "AI opportunity assessment",
  "Feature prioritization",
  "Technical architecture planning",
  "Data readiness evaluation",
  "Development roadmap creation",
  "Cost & resource estimation",
];

const AiSaasOutcomes = () => {
  return (
    <section className="w-full relative font-jakarta bg-[#F8FAFC]">
      {/* Top Section: Capabilities */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
              <span className="text-[#00235A] text-[13px] md:text-[14px] font-bold tracking-widest uppercase">
                AI Capabilities for SaaS Products
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.2] font-extrabold tracking-tight text-[#00235A] max-w-[800px]">
              Intelligent AI Capabilities for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
                Modern SaaS Products
              </span>
            </h2>
            <p className="text-[16px] sm:text-[18px] font-medium text-gray-500 leading-relaxed max-w-[700px] mt-2">
              We develop AI functionality that solves real operational and user
              experience challenges.
            </p>
          </div>

          {/* Cards Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {listItems.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white border border-gray-100 rounded-[20px] p-8 shadow-sm hover:shadow-[0_15px_35px_rgba(0,35,90,0.08)] hover:border-[#0CBF83]/30 transition-all duration-300"
              >
                <div
                  className={`w-[56px] h-[56px] rounded-2xl flex items-center justify-center shadow-sm mb-6 transition-transform duration-300 group-hover:-translate-y-1 ${item.badgeBg}`}
                >
                  <span
                    className={`text-[28px] ${item.rotation} group-hover:rotate-0 transition-transform duration-300`}
                  >
                    {item.icon}
                  </span>
                </div>
                <h4 className="text-[20px] font-bold text-[#00235A] leading-snug mb-3 group-hover:text-[#0CBF83] transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-[15px] text-gray-600 leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Roadmap */}
      <div className="relative z-20 w-full bg-black py-20 lg:py-28 border-t border-gray-100">
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center justify-center gap-4 mb-20 text-center">
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-[#00235A] tracking-tight capitalize">
              AI SaaS Consulting &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
                Product Strategy
              </span>
            </h2>
            <p className="text-[16px] sm:text-[18px] text-gray-500 leading-relaxed max-w-[750px]">
              Validate your idea, define the right AI opportunities, and create
              a clear roadmap for successful product development.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-[1000px] mx-auto">
            {/* Center Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 -translate-x-1/2" />

            {/* Left Line (Mobile) */}
            <div className="md:hidden absolute left-[31px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200" />

            <div className="flex flex-col gap-8 md:gap-12">
              {roadmapSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center w-full group`}
                  >
                    {/* Desktop Layout Structure */}
                    <div
                      className={`hidden md:flex w-full ${isEven ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`w-[calc(50%-40px)] ${isEven ? "text-right pr-4" : "text-left pl-4"}`}
                      >
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#0CBF83]/40 transition-all duration-300 transform group-hover:-translate-y-1">
                          <span className="inline-block text-[#0CBF83] text-[13px] font-bold tracking-wider uppercase mb-2">
                            Phase 0{index + 1}
                          </span>
                          <h4 className="text-[18px] lg:text-[20px] font-bold text-[#00235A] leading-snug">
                            {step}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Node */}
                    <div className="absolute left-[20px] md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-white border-[4px] border-[#0CBF83] z-10 transition-transform duration-300 group-hover:scale-[1.3] group-hover:border-[#004BC0]" />

                    {/* Mobile Layout Structure */}
                    <div className="flex md:hidden w-full pl-16 pr-4">
                      <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                        <span className="inline-block text-[#0CBF83] text-[12px] font-bold tracking-wider uppercase mb-1">
                          Phase 0{index + 1}
                        </span>
                        <h4 className="text-[17px] font-bold text-[#00235A] leading-snug">
                          {step}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSaasOutcomes;
