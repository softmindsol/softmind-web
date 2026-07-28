"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomButton from "@/components/customs/customButton";

const steps = [
  {
    num: "01",
    title: "Discover",
    description:
      "We define your audience, goals, workflows, and MVP priorities.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "We create intuitive user journeys and clickable product designs.",
  },
  {
    num: "03",
    title: "Build",
    description: "We develop the platform in focused, testable stages.",
  },
  {
    num: "04",
    title: "Test",
    description: "We validate key workflows, devices, roles, and integrations.",
  },
  {
    num: "05",
    title: "Launch and Improve",
    description: "We support release, monitoring, feedback, and future growth.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-gray-200 overflow-hidden font-jakarta border-t border-gray-100">
      <div className="mx-auto px-6 lg:px-12 max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Process Steps */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#0CBF83_93.33%)]" />
              <span className="text-[#0CBF83] text-[18px] md:text-[22px] font-bold tracking-[1px]">
                Development Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-[1px] text-[#00235A] mb-12">
              A Clear Path From Idea to Launch
            </h2>

            <div className="flex flex-col gap-8 relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[24px] top-[24px] bottom-[24px] w-[2px] bg-gray-100" />

              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex items-start gap-6 group"
                >
                  <div className="w-[50px] h-[50px] rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shrink-0 z-10 group-hover:border-[#0CBF83] group-hover:bg-[#0CBF83] group-hover:text-[#00235A] transition-all duration-300 font-bold text-[#666666]">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-[#00235A] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#666666] font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <CustomButton btnText="Plan Your EdTech MVP" />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-[0_8px_40px_rgba(0,35,90,0.06)] border border-gray-100">
              <h3 className="text-2xl font-bold text-[#00235A] mb-2">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="text-[#666666] text-sm mb-8">
                Fill out the form below and our EdTech specialists will get back
                to you shortly.
              </p>

              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#2E2E2E]">
                      First Name *
                    </label>
                    <Input
                      placeholder="John"
                      className="bg-[#F8FAFC] border-gray-200 h-12"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#2E2E2E]">
                      Last Name *
                    </label>
                    <Input
                      placeholder="Doe"
                      className="bg-[#F8FAFC] border-gray-200 h-12"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#2E2E2E]">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-[#F8FAFC] border-gray-200 h-12"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#2E2E2E]">
                    Company / Startup Name
                  </label>
                  <Input
                    placeholder="Your Company"
                    className="bg-[#F8FAFC] border-gray-200 h-12"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-[#2E2E2E]">
                    Project Details *
                  </label>
                  <textarea
                    placeholder="Tell us about what you want to build..."
                    className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-[#F8FAFC] px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  />
                </div>

                <Button className="w-full h-14 mt-4 bg-[#0CBF83] hover:bg-[#0aa672] text-[#00235A] font-bold text-lg rounded-xl">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
