"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Layout,
  TrendingUp,
  Zap,
  Star,
  Maximize2,
} from "lucide-react";

const benefits = [
  {
    title: "Better Usability",
    description:
      "Create intuitive interfaces that make products easier to understand, navigate, and use.",
    icon: <Layout className="w-6 h-6 text-[#0CBF83]" />,
  },
  {
    title: "Higher User Engagement",
    description:
      "Design experiences that encourage users to explore, interact, and return to your product.",
    icon: <Star className="w-6 h-6 text-[#0CBF83]" />,
  },
  {
    title: "Faster Product Adoption",
    description:
      "Remove unnecessary complexity so users can understand your product and reach value faster.",
    icon: <Zap className="w-6 h-6 text-[#0CBF83]" />,
  },
  {
    title: "Stronger Brand Experience",
    description:
      "Build a consistent visual and interactive experience across web, mobile, and digital platforms.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#0CBF83]" />,
  },
  {
    title: "Reduced Design & Development Costs",
    description:
      "Validate ideas early and establish reusable components to minimize costly redesigns later.",
    icon: <TrendingUp className="w-6 h-6 text-[#0CBF83]" />,
  },
  {
    title: "Scalable Product Experiences",
    description:
      "Create flexible design foundations that evolve alongside your product and business.",
    icon: <Maximize2 className="w-6 h-6 text-[#0CBF83]" />,
  },
];

export default function WhyInvest() {
  return (
    <section className="bg-black py-1 lg:py-24 font-jakarta">
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-wide">
              Value of Design
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight mb-6">
            Why Invest in Purpose-Built Digital Product Design?
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/80 leading-relaxed">
            A great digital product does more than look good. It helps users
            accomplish their goals faster while helping your business achieve
            measurable outcomes. Softmind combines user research, UX strategy,
            UI/UX design, prototyping, and design systems to create experiences
            that balance user expectations with your business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F8F9FA] p-8 rounded-[24px] border border-gray-100 hover:shadow-xl hover:shadow-[#0CBF83]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-[22px] font-bold text-[#161616] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
