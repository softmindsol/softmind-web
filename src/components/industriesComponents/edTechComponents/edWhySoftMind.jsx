import React from "react";

const reasons = [
  {
    title: "We Think Like a Product Team",
    description:
      "We focus on users, business goals, and long-term growth not just feature delivery.",
    icon: "🎯",
  },
  {
    title: "We Understand Startups",
    description:
      "We help you prioritize what matters now and avoid overbuilding too early.",
    icon: "🚀",
  },
  {
    title: "Flexible Offshore Delivery",
    description:
      "Access experienced talent without the cost of building a full in-house team.",
    icon: "🌍",
  },
  {
    title: "We Keep Development Clear",
    description:
      "You get visible progress, regular communication, and clear ownership.",
    icon: "🔍",
  },
  {
    title: "We Build for Growth",
    description:
      "Your platform is designed to support more users, features, and integrations over time.",
    icon: "📈",
  },
  {
    title: "Balance Speed and Quality",
    description:
      "Move quickly without creating technical problems that slow you down later.",
    icon: "⚡",
  },
];

export default function WhySoftMind() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-white overflow-hidden font-jakarta">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F0FDF4] rounded-full blur-[100px] opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E5F6FE] rounded-full blur-[100px] opacity-50 pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 mx-auto px-6 lg:px-12 max-w-[1280px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[22px] font-bold tracking-[1px]">
              Why Softmind
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[58px] font-bold tracking-[1px] capitalize text-navy max-w-[800px]">
            Why Work With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
              SoftMind Solutions?
            </span>
          </h2>
          <p className="text-base md:text-lg text-grey font-medium max-w-[700px] mt-2">
            Startup-friendly pricing. Experienced offshore teams.
            Product-focused delivery.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#0CBF83]/20 hover:shadow-[0_8px_30px_rgba(12,191,131,0.08)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top border highlight on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0CBF83] to-[#004BC0] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              <div className="w-12 h-12 rounded-full bg-[#F8FAFC] group-hover:bg-[#F0FDF4] flex items-center justify-center text-2xl mb-5 transition-colors duration-300">
                {reason.icon}
              </div>

              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-green transition-colors duration-300">
                {reason.title}
              </h3>

              <p className="text-grey text-sm md:text-base leading-relaxed font-medium">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
