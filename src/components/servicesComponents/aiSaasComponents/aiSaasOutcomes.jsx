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

const AiSaasOutcomes = () => {
  return (
    <section className="relative font-jakarta bg-white pb-24 lg:pb-32">
      {/* Dark Background Section */}
      <div className="bg-[#161616] relative py-24 lg:pb-48 overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute left-1/2 top-[-187px] w-[490px] h-[490px] bg-[#00235A] rounded-full blur-[212px] -translate-x-1/2 pointer-events-none" />

        <div className="relative w-full z-10 mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center gap-3.5 mb-16 text-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
              <span className="text-[#0CBF83] text-[18px] md:text-[22px] font-bold tracking-[1px]">
                AI Capabilities for SaaS Products
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[46px] leading-[1.2] font-bold tracking-[1px] text-white capitalize max-w-[800px]">
              Intelligent AI Capabilities for Modern SaaS Products
            </h2>
          </div>

          {/* Main Content: Left List & Right Image */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Column (Content) */}
            <div className="flex flex-col flex-1 gap-10">
              <div className="flex flex-col gap-3.5">
                <h3 className="text-[22px] font-bold text-white tracking-[1px]">
                  Solving Real Challenges
                </h3>
                <p className="text-[16px] font-medium text-white/90 leading-[20px] tracking-[1px]">
                  We develop AI functionality that solves real operational and
                  user experience challenges.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {listItems.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div
                      className={`flex-shrink-0 w-[34px] h-[34px] rounded-[10px] flex items-center justify-center shadow-[0px_3px_6px_rgba(0,0,0,0.18)] ${item.badgeBg}`}
                    >
                      <span
                        className={`text-[16px] leading-[20px] ${item.rotation}`}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 mt-[-2px]">
                      <h4 className="text-[18px] font-bold text-white leading-[23px]">
                        {item.title}
                      </h4>
                      <p className="text-[15px] font-medium text-white/80 leading-[145%] max-w-[500px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (Image) */}
            <div className="flex-1 lg:max-w-[45%]">
              <div className="rounded-[12px] overflow-hidden h-full min-h-[400px] lg:min-h-[766px] w-full relative shadow-lg">
                <img
                  src="https://picsum.photos/id/48/800/1200"
                  alt="AI SaaS Development Process"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Outcomes Banner - Overlapping */}
      <div className="relative z-20 max-w-[1288px] mx-auto px-4 sm:px-6 lg:px-8 -mt-24 lg:-mt-28">
        <div className="w-full bg-[linear-gradient(93.08deg,#00235A_0.43%,#000D22_100%)] rounded-[12px] py-14 px-6 sm:px-12 flex flex-col items-center justify-center gap-7 shadow-2xl">
          <h2 className="text-[36px] sm:text-[40px] font-bold text-white tracking-[1px] text-center capitalize">
            AI SaaS Consulting & Product Strategy
          </h2>
          <p className="text-[16px] sm:text-[18px] font-medium text-white/90 leading-[120%] tracking-[1px] text-center max-w-[950px]">
            Validate your idea, define the right AI opportunities, and create a
            clear roadmap for successful product development.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-[1000px]">
            {[
              "Product discovery & feasibility analysis",
              "AI opportunity assessment",
              "Feature prioritization",
              "Technical architecture planning",
              "Data readiness evaluation",
              "Development roadmap creation",
              "Cost & resource estimation",
            ].map((service, index) => (
              <span
                key={index}
                className="bg-white/10 text-white border border-white/20 rounded-full px-5 py-2.5 text-[14px] md:text-[15px] font-medium tracking-wide"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSaasOutcomes;
