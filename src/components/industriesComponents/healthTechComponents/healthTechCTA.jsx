"use client";
import React from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  "Build your MVP in as little as 10–16 weeks",
  "Develop secure, HIPAA-ready healthcare applications",
  "Work directly with senior engineers, not junior outsourcing teams",
  "Save up to 60% compared to traditional US development agencies",
  "Receive a free product strategy session where we analyze your healthcare product idea, assess the competitive market, and recommend the features your MVP needs to stand out before development begins",
  "Scale your product confidently with cloud-native architecture",
  "Receive long-term technical support as your business grows",
];

const HealthTechCTA = () => {
  return (
    <section className="relative w-full bg-[#161616] py-20 lg:py-24 mb-16 font-jakarta overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#004BC0]/20 to-[#0CBF83]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00235A]/30 to-transparent rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Content Left */}
          <div className="flex-1 flex flex-col items-start space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-navy to-[#004BC0]" />
              <h3 className="text-[20px] lg:text-[22px] font-bold tracking-[1px] text-green uppercase">
                Why Choose Us
              </h3>
            </div>
            <h2 className="text-[32px] md:text-[46px] font-bold leading-[1.2] lg:leading-[58px] tracking-[1px] text-white capitalize">
              Why Healthcare Businesses Choose Softmind Solutions
            </h2>

            <ul className="space-y-4 mt-4 w-full">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <FaCheckCircle className="text-green text-[20px] mt-1 shrink-0" />
                  <p className="text-[16px] lg:text-[18px] font-medium text-white/90 leading-[26px]">
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Right */}
          <div className="w-full lg:w-[450px] bg-white/5 border border-white/10 rounded-[24px] p-8 lg:p-10 backdrop-blur-md flex flex-col items-center justify-center text-center gap-6 shadow-[0px_8px_32px_rgba(0,0,0,0.2)]">
            <h3 className="text-[24px] font-bold text-white leading-[1.3]">
              Ready to Build Something Extraordinary?
            </h3>
            <p className="text-[16px] text-white/70">
              Let&apos;s discuss how we can bring your healthcare product vision
              to life.
            </p>
            <div className="flex flex-col w-full gap-4 mt-2">
              <Link href="/contact" className="w-full">
                <button className="w-full py-[14px] bg-green rounded-[100px] shadow-[0px_0px_20px_rgba(0,0,0,0.12),inset_0px_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105">
                  <span className="font-bold text-[16px] tracking-[1px] text-white">
                    Book a Free Discovery Call
                  </span>
                </button>
              </Link>
              <Link href="/projects" className="w-full">
                <button className="w-full py-[14px] bg-transparent border-2 border-white rounded-[100px] transition-all duration-300 hover:bg-white/10 hover:border-green">
                  <span className="font-bold text-[16px] tracking-[1px] text-white">
                    View Our Healthcare Projects
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthTechCTA;
