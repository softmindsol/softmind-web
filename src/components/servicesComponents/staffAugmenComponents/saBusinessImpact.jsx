"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Users2,
  Target,
  Zap,
  DollarSign,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const impacts = [
  {
    icon: <Users2 className="w-6 h-6 text-[#0CBF83]" />,
    text: "Expand capacity without expanding permanent headcount.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#0CBF83]" />,
    text: "Close skill gaps without delaying projects.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#0CBF83]" />,
    text: "Accelerate releases by adding experienced professionals where they're needed most.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#0CBF83]" />,
    text: "Control costs while maintaining access to technical expertise.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-[#0CBF83]" />,
    text: "Respond faster when priorities, workloads, or market opportunities change.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#0CBF83]" />,
    text: "Keep ownership of your product, processes, and project decisions.",
  },
];

export default function SaBusinessImpact() {
  return (
    <section className="bg-[#00235A] py-20 lg:py-28 font-jakarta relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0CBF83] rounded-full blur-[200px] opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#004BC0] rounded-full blur-[180px] opacity-30 pointer-events-none" />

      <div className="w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#0CBF83]" />
              <span className="text-[#0CBF83] text-[18px] font-bold tracking-wide">
                Business Impact
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight mb-6">
              The Business Impact of the Right Team
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/70 leading-relaxed mb-8">
              The right talent doesn&apos;t simply add more people to your
              workforce. It increases your ability to execute.
            </p>
            <p className="text-[16px] text-white/80 leading-relaxed">
              With Softmind&apos;s offshore staff augmentation model, you can:
            </p>
          </div>

          {/* Right — impact list */}
          <div className="lg:w-1/2">
            <div className="flex flex-col gap-5">
              {impacts.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 hover:border-[#0CBF83]/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-[15px] text-white/80 leading-relaxed pt-1.5">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
