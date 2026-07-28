import React from "react";
import CustomButton from "@/components/customs/customButton";

const aiFeatures = [
  {
    title: "Personalized Learning",
    description:
      "Recommend lessons and learning paths based on learner progress and performance.",
    icon: "🧠",
  },
  {
    title: "AI Tutoring",
    description:
      "Give learners instant, contextual support with AI-powered study assistants.",
    icon: "🤖",
  },
  {
    title: "Smart Content Tools",
    description:
      "Help instructors create quizzes, summaries, outlines, and learning materials faster.",
    icon: "⚡",
  },
  {
    title: "Learning Analytics",
    description:
      "Turn learner activity into useful insights for instructors, managers, and product teams.",
    icon: "📈",
  },
  {
    title: "Intelligent Chatbots",
    description:
      "Answer common questions and guide learners through the platform seamlessly.",
    icon: "💬",
  },
];

export default function AISection() {
  return (
    <section className="relative w-full bg-[#161616] text-white py-20 lg:py-28 overflow-hidden font-jakarta">
      {/* Background glow effects */}
      <div
        className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 blur-[140px]"
        style={{ backgroundColor: "#004BC0" }}
      />
      <div
        className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 blur-[150px]"
        style={{ backgroundColor: "#0CBF83" }}
      />

      <div className="relative z-10 mx-auto px-6 lg:px-12 max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6 max-w-[600px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#0CBF83_93.33%)]" />
              <span className="text-[#0CBF83] text-[18px] md:text-[22px] font-bold tracking-[1px]">
                AI-Powered eLearning
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-[1px] text-white">
              Make Learning Smarter With AI
            </h2>
            <p className="text-base md:text-lg text-white/80 font-medium leading-[1.6]">
              We build practical AI features that improve the learner experience
              and reduce manual work. Deliver more personalized learning without
              increasing operational workload.
            </p>

            <div className="mt-4">
              <CustomButton btnText="Explore AI for Your EdTech Product" />
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-[#0CBF83]/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0CBF83]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="text-3xl mb-4 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0CBF83] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
