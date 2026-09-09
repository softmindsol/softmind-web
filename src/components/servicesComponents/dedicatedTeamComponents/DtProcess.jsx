"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Users,
  UserCheck,
  FlaskConical,
  BriefcaseBusiness,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import CustomButton from "@/components/customs/customButton";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Tell Us What You Need",
    description:
      "Share your product requirements, technology stack, development goals, timeline, and the skills you're looking for. We use these requirements to understand exactly what kind of developer your project needs.",
    color: "#0CBF83",
    gradient: "from-[#0CBF83] to-[#00b87a]",
  },
  {
    num: "02",
    icon: Users,
    title: "Get Matched With the Right Developer",
    description:
      "We shortlist developers based on your technology requirements, experience, project needs, and working expectations. You receive relevant candidates instead of sorting through countless profiles yourself.",
    color: "#004BC0",
    gradient: "from-[#004BC0] to-[#0038FF]",
  },
  {
    num: "03",
    icon: UserCheck,
    title: "Interview Your Developer",
    description:
      "Meet and interview the shortlisted developer before making your decision. Ask questions, discuss your product, assess their technical expertise, and determine whether their communication and working style fit your team.",
    color: "#6366f1",
    gradient: "from-[#6366f1] to-[#8b5cf6]",
  },
  {
    num: "04",
    icon: FlaskConical,
    title: "Evaluate Before You Commit",
    description:
      "Work with your selected developer for 3 days and experience their skills, communication, and working style firsthand. If they're the right fit, continue. If not, we'll introduce you to another qualified developer until you find the right match.",
    color: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#ef4444]",
    highlight: "3-Day Trial",
  },
  {
    num: "05",
    icon: BriefcaseBusiness,
    title: "Get Project Management Included",
    description:
      "Once your developer is onboard, your Softmind Project Manager coordinates delivery, tracks progress, manages communication, and helps keep development aligned with your roadmap; at no additional cost.",
    color: "#14b8a6",
    gradient: "from-[#14b8a6] to-[#0ea5e9]",
    highlight: "Free",
  },
  {
    num: "06",
    icon: ShieldCheck,
    title: "Get QA Included",
    description:
      "Your dedicated developer also gets QA support from Softmind. Our QA team validates features, identifies bugs, and helps maintain product quality throughout development; at no additional cost.",
    color: "#ec4899",
    gradient: "from-[#ec4899] to-[#f43f5e]",
    highlight: "Free",
  },
  {
    num: "07",
    icon: ArrowUpRight,
    title: "Scale Your Team as You Grow",
    description:
      "Your needs can change as your product grows. Add developers, designers, DevOps specialists, AI engineers, or other technical expertise whenever your roadmap requires additional capacity.",
    color: "#0CBF83",
    gradient: "from-[#0CBF83] to-[#00b87a]",
  },
];

export default function DtProcess() {
  return (
    <section className="relative w-full bg-[#00235A] py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0CBF83]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#004BC0]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_8px_#0CBF83]" />
            <span className="text-[#0CBF83] text-sm font-semibold tracking-widest uppercase">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-white mb-5">
            How Our Dedicated Team{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#0038FF]">
              Model Works
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            Find the Right Developer, Not Just the First Available Developer. We give you the
            flexibility to interview, trial, and decide before you commit.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0CBF83]/60 via-white/20 to-transparent md:-translate-x-px" />

          <div className="flex flex-col gap-0">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isRight = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  className={`relative flex items-start gap-6 md:gap-0 pb-8 md:pb-10 ${
                    isRight ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`relative w-full md:w-[calc(50%-40px)] ${
                      isRight ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    } ml-12 md:ml-0`}
                  >
                    <div className="group bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/12 hover:border-white/20 transition-all duration-400 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                      {step.highlight && (
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-3"
                          style={{
                            backgroundColor: step.color + "20",
                            color: step.color,
                            border: `1px solid ${step.color}40`,
                          }}
                        >
                          {step.highlight}
                        </span>
                      )}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${step.gradient} shrink-0`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span
                          className="text-xs font-black uppercase tracking-[0.2em]"
                          style={{ color: step.color }}
                        >
                          Step {step.num}
                        </span>
                      </div>
                      <h3 className="text-base lg:text-lg font-bold text-white mb-2 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/65 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Dot on the line */}
                  <div
                    className="absolute left-0 md:left-1/2 top-6 w-[28px] md:w-[28px] h-[28px] rounded-full flex items-center justify-center z-10 md:-translate-x-[14px] bg-[#00235A] border-2 ring-4 ring-[#00235A]"
                    style={{ borderColor: step.color }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10 flex flex-col items-center gap-5"
        >
          <p className="text-white/80 text-base md:text-lg font-medium max-w-lg leading-relaxed">
            Find the right developer. Try before you commit. Keep the one that fits.
          </p>
          <Link href="/contact-us">
            <CustomButton btnText="Start Building Your Team" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
