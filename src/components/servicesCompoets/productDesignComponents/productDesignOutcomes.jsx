import React from "react";

const listItems = [
  {
    icon: "🎨",
    badgeBg: "bg-[#0CBF83]",
    rotation: "rotate-6",
    title: "Design Tokens",
    desc: "Define colors, typography, spacing, shadows, border radius, and other visual foundations.",
  },
  {
    icon: "🧩",
    badgeBg: "bg-[#00235A]",
    rotation: "-rotate-6",
    title: "UI Components",
    desc: "Create reusable components such as buttons, inputs, cards, modals, tables, and navigation elements.",
  },
  {
    icon: "🔁",
    badgeBg: "bg-[#0CBF83]",
    rotation: "rotate-6",
    title: "Component States",
    desc: "Design different interaction states like default, hover, active, disabled, loading, and error.",
  },
  {
    icon: "📐",
    badgeBg: "bg-[#00235A]",
    rotation: "-rotate-6",
    title: "Patterns & Layouts",
    desc: "Standardize grids, spacing, forms, navigation, and page structures.",
  },
  {
    icon: "📋",
    badgeBg: "bg-[#0CBF83]",
    rotation: "rotate-6",
    title: "Usage Guidelines",
    desc: "Document when and how each component should be used to ensure consistency.",
  },
  {
    icon: "♿",
    badgeBg: "bg-[#00235A]",
    rotation: "-rotate-6",
    title: "Accessibility Standards",
    desc: "Ensure components meet accessibility requirements for readability and usability.",
  },
  {
    icon: "🚀",
    badgeBg: "bg-[#0CBF83]",
    rotation: "rotate-6",
    title: "Developer Handoff",
    desc: "Organize components with specifications, tokens, and documentation for seamless implementation.",
  },
];

const ProductDesignOutcomes = () => {
  return (
    <section className="relative font-jakarta bg-white pb-24 lg:pb-32">
      {/* Dark Background Section */}
      <div className="bg-[#161616] relative py-24 lg:pb-48 overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute left-1/2 top-[-187px] w-[490px] h-[490px] bg-[#00235A] rounded-full blur-[212px] -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 mx-auto px-6 lg:px-12">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-3.5 mb-16 text-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
              <span className="text-[#0CBF83] text-[18px] md:text-[22px] font-bold tracking-[1px]">
                Design System
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[46px] leading-[1.2] font-bold tracking-[1px] text-white capitalize max-w-[800px]">
              Building Scalable Design System
            </h2>
          </div>

          {/* Main Content: Left List & Right Image */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Column (Content) */}
            <div className="flex flex-col flex-1 gap-10">
              <div className="flex flex-col gap-3.5">
                <h3 className="text-[22px] font-bold text-white tracking-[1px]">
                  What Happens in a Design System?
                </h3>
                <p className="text-[16px] font-medium text-white/90 leading-[20px] tracking-[1px]">
                  A design system brings together reusable UI components, design
                  guidelines, typography, colors, spacing, icons, and
                  interaction patterns into a single source of truth. It
                  standardizes how interfaces are designed and developed,
                  ensuring consistency, faster collaboration, easier
                  scalability, and a seamless user experience across all
                  products and platforms.
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
          <h2 className="text-[36px] sm:text-[46px] font-bold text-white tracking-[1px] text-center capitalize">
            Outcomes
          </h2>
          <p className="text-[16px] sm:text-[18px] font-medium text-white/90 leading-[120%] tracking-[1px] text-center max-w-[950px]">
            A scalable, consistent, and efficient product ecosystem that enables
            faster delivery, easier maintenance, and a seamless user experience
            across all platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDesignOutcomes;
