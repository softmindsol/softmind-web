"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SlidersHorizontal,
  Zap,
  DollarSign,
  Wrench,
  Crown,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    title: "More Flexibility, Less Commitment",
    description:
      "Project requirements can change quickly. Offshore staff augmentation lets you adjust your team according to your workload instead of maintaining a fixed workforce regardless of demand.",
    icon: <SlidersHorizontal className="w-6 h-6 text-white" />,
    color: "bg-[#0CBF83]",
  },
  {
    title: "Faster Access to Technical Talent",
    description:
      "Avoid lengthy recruitment processes and gain access to experienced professionals who can start contributing to your project faster.",
    icon: <Zap className="w-6 h-6 text-white" />,
    color: "bg-[#00235A]",
  },
  {
    title: "Lower Hiring and Operating Costs",
    description:
      "Reduce the costs associated with recruiting, onboarding, office infrastructure, employee benefits, and maintaining a large permanent technical workforce.",
    icon: <DollarSign className="w-6 h-6 text-white" />,
    color: "bg-[#161616]",
  },
  {
    title: "Specialized Skills on Demand",
    description:
      "Need a DevOps engineer for a cloud migration? A QA specialist for an upcoming release? An AI developer for a new product feature? Bring in the expertise when you need it.",
    icon: <Wrench className="w-6 h-6 text-white" />,
    color: "bg-[#0CBF83]",
  },
  {
    title: "Your Team, Your Processes",
    description:
      "Unlike full project outsourcing, staff augmentation keeps your internal team in control. You define priorities, assign tasks, manage workflows, and maintain ownership of the product.",
    icon: <Crown className="w-6 h-6 text-white" />,
    color: "bg-[#00235A]",
  },
  {
    title: "Built for Long-Term Growth",
    description:
      "Start with a small team and expand as your product, customer base, and technology requirements grow.",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    color: "bg-[#161616]",
  },
];

export default function SaWhyChoose() {
  return (
    <section className="bg-black py-20 lg:py-28 font-jakarta relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#0CBF83] rounded-full blur-[200px] opacity-5 pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#00235A] rounded-full blur-[160px] opacity-30 pointer-events-none" />

      <div className="w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-wide">
              The Advantage
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight mb-6">
            Why Choose Offshore Staff Augmentation?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[24px] flex flex-col gap-6 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${reason.color}`}
              >
                {reason.icon}
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-[15px] text-white/60 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
