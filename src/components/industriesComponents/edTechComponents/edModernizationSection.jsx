import React from "react";
import CustomButton from "@/components/customs/customButton";

const modernizationPoints = [
  {
    title: "Expensive Maintenance?",
    description: "We modernize outdated systems and reduce technical debt.",
    icon: "🔧",
  },
  {
    title: "Poor User Experience?",
    description:
      "We simplify the journeys learners and administrators use most.",
    icon: "✨",
  },
  {
    title: "Broken Integrations?",
    description: "We create cleaner APIs and more reliable connections.",
    icon: "🔗",
  },
  {
    title: "Difficult User Management?",
    description: "We build clear roles and permissions for every type of user.",
    icon: "👥",
  },
];

export default function ModernizationSection() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-gray-200 overflow-hidden font-jakarta">
      <div className="mx-auto px-6 lg:px-12 max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text and CTA */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
              <span className="text-[#0CBF83] text-[18px] md:text-[22px] font-bold tracking-[1px]">
                Platform Modernization
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-[1px] text-navy max-w-[500px]">
              Fix What Is Slowing Your Platform Down
            </h2>
            <p className="text-base md:text-lg text-grey font-medium leading-[1.6] max-w-[500px]">
              Don&apos;t let legacy tech hold back your EdTech business. We help
              you rebuild, refactor, and redesign to ensure maximum performance
              and user satisfaction.
            </p>
            <div className="mt-4">
              <CustomButton btnText="Modernize Your EdTech Platform" />
            </div>
          </div>

          {/* Right: 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {modernizationPoints.map((point, idx) => (
              <div
                key={idx}
                className="group hover:scale-105 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgba(0,35,90,0.08)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#E5F6FE] text-[#00235A] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-grey leading-relaxed font-medium">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
