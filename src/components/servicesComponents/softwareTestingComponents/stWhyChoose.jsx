"use client";
import React from "react";
import {
  FiDollarSign,
  FiClock,
  FiTrendingUp,
  FiUsers,
  FiCode,
  FiHeart,
  FiArrowRight,
} from "react-icons/fi";

const REASONS = [
  {
    icon: <FiDollarSign size={24} />,
    title: "Reduce QA Costs Without Reducing Quality",
    desc: "Build testing capacity without the cost of recruiting, training, managing, and maintaining a large in-house QA department. Offshore QA outsourcing gives you access to specialized testing expertise while keeping your technology investment focused on growth.",
  },
  {
    icon: <FiClock size={24} />,
    title: "Accelerate Your Time to Market",
    desc: "Don't let lengthy testing cycles delay your product launch. An experienced offshore QA team can work alongside your developers to increase testing capacity, identify issues earlier, and help move releases forward faster.",
  },
  {
    icon: <FiTrendingUp size={24} />,
    title: "Scale Your QA Team When You Need It",
    desc: "Your testing requirements can change from one release to the next. Scale your QA resources up or down based on your product roadmap, release schedule, and testing workload.",
  },
  {
    icon: <FiUsers size={24} />,
    title: "Access Specialized Testing Expertise",
    desc: "Different products require different testing strategies. Gain access to QA professionals with experience across manual testing, automation, security, performance, mobile, accessibility, usability, and other testing disciplines.",
  },
  {
    icon: <FiCode size={24} />,
    title: "Keep Your Development Team Focused",
    desc: "Let your developers focus on building and improving your product while dedicated QA professionals manage testing activities, defect identification, regression testing, and quality validation.",
  },
  {
    icon: <FiHeart size={24} />,
    title: "Improve Product Quality and Customer Experience",
    desc: "Quality isn't just about finding bugs. It's about delivering software that works reliably, performs well, protects users, and provides a frictionless experience.",
  },
];

export default function StWhyChoose() {
  return (
    <section className="relative w-full bg-[#0A0F1E] py-20 md:py-28 overflow-hidden font-jakarta">
      {/* Background glows */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-green/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-80px] w-[400px] h-[400px] rounded-full bg-[#004BC0]/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 md:px-12 max-w-[1280px]">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
              Why Offshore Testing
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-white leading-[1.15] tracking-tight max-w-[820px] mx-auto">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
              Offshore Software Testing?
            </span>
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] text-white/60 leading-[1.75] font-medium max-w-[660px] mx-auto">
            Strengthen your software quality with reliable offshore software
            testing services designed around your product, users, and business
            goals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {REASONS.map((reason, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col gap-5 p-7 rounded-[22px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.07] hover:border-green/30 hover:shadow-[0_8px_40px_rgba(12,191,131,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top shimmer on hover */}
              <div className="absolute top-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] group-hover:bg-green/20 border border-white/10 group-hover:border-green/30 flex items-center justify-center text-white/60 group-hover:text-green transition-all duration-300">
                {reason.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[16px] font-bold text-white group-hover:text-green transition-colors duration-200 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-[13.5px] text-white/55 leading-[1.7] font-medium group-hover:text-white/70 transition-colors duration-200">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-green hover:bg-[#0aad76] text-white font-bold text-[14px] tracking-wide rounded-full px-8 py-4 transition-all duration-300 hover:shadow-[0_0_28px_rgba(12,191,131,0.45)] hover:scale-[1.03] active:scale-[0.98]"
          >
            Start With a Free QA Consultation
            <FiArrowRight size={16} />
          </a>
          <p className="text-white/40 text-[13px] font-medium">
            No commitment required · Free 30-min session
          </p>
        </div>
      </div>
    </section>
  );
}
