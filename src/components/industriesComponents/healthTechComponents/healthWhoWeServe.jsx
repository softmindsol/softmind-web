"use client";
import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi2";

const whoWeServeData = [
  {
    num: "01",
    title: "Fitness Centers & Gyms",
    desc: "Modernize your gym experience with digital tools that simplify operations and keep members engaged.",
    points: [
      "Boost member retention and engagement",
      "Automate memberships, bookings, and payments",
      "Track fitness performance and progress",
      "Deliver virtual training and coaching",
    ],
  },
  {
    num: "02",
    title: "Health & Wellness Startups",
    desc: "Turn innovative health and wellness ideas into market-ready digital products built to scale.",
    points: [
      "Launch MVPs faster and validate ideas",
      "Add AI-powered insights and personalization",
      "Connect wearables and health data",
      "Build secure, scalable platforms",
    ],
  },
  {
    num: "03",
    title: "Personal Trainers & Coaches",
    desc: "Give trainers the tools to manage clients, deliver personalized programs, and grow their coaching business.",
    points: [
      "Automate personalized workout plans",
      "Track client progress in real time",
      "Deliver live and on-demand coaching",
      "Strengthen client engagement and retention",
    ],
  },
  {
    num: "04",
    title: "Telehealth & Healthcare Providers",
    desc: "Enable accessible, secure digital care with telehealth solutions designed around providers and patients.",
    points: [
      "Enable secure virtual consultations",
      "Support remote patient monitoring",
      "Streamline digital prescriptions and records",
      "Improve access to personalized care",
    ],
  },
  {
    num: "05",
    title: "Hospitals & Healthcare Organizations",
    desc: "Improve patient care and operational efficiency with connected, data-driven healthcare solutions.",
    points: [
      "Integrate EHR and clinical systems",
      "Enhance diagnostics and patient monitoring",
      "Enable remote care and telemedicine",
      "Streamline hospital workflows",
    ],
  },
  {
    num: "06",
    title: "Digital Health Startups",
    desc: "Build innovative digital health products that are scalable, secure, and ready for real-world adoption.",
    points: [
      "Develop AI-powered health platforms",
      "Enable virtual care and digital prescriptions",
      "Secure sensitive health data",
      "Connect IoT and health-monitoring devices",
    ],
  },
  {
    num: "07",
    title: "Insurance & HealthTech Companies",
    desc: "Use intelligent technology to simplify claims, manage risk, and deliver better member experiences.",
    points: [
      "Automate claims and fraud detection",
      "Improve health risk assessment",
      "Launch wellness incentive programs",
      "Integrate telehealth capabilities",
    ],
  },
  {
    num: "08",
    title: "Wearable & Smart Device Companies",
    desc: "Turn connected health and fitness data into engaging digital experiences that users can act on.",
    points: [
      "Build apps for connected devices",
      "Enable real-time health monitoring",
      "Track fitness and biometric data",
      "Generate actionable AI-powered insights",
    ],
  },
  {
    num: "09",
    title: "Corporate Wellness Programs",
    desc: "Help organizations build healthier, more engaged teams through personalized digital wellness experiences.",
    points: [
      "Track employee wellness and fitness",
      "Support stress and wellbeing initiatives",
      "Drive participation with challenges and gamification",
      "Give HR teams actionable wellness insights",
    ],
  },
];

const HealthWhoWeServe = () => {
  return (
    <section className="relative w-full bg-green/10 py-24 lg:py-32 font-jakarta overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-white to-transparent z-0 pointer-events-none" />

      <div className="relative mx-auto px-6 lg:px-12 z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-20 lg:mb-24 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.04)] border border-gray-100 transition-transform hover:scale-105 duration-300">
            <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-navy to-[#004BC0] animate-pulse" />
            <h3 className="text-[14px] lg:text-[16px] font-bold tracking-[2px] text-green capitalize">
              Who We Serve
            </h3>
          </div>
          <h2 className="max-w-[560px] text-[32px] md:text-[42px] lg:text-[40px] font-bold leading-tight tracking-tight text-dark capitalize">
            We build secure, scalable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
              health and fitness solutions
            </span>
          </h2>
          <p className="text-base max-w-[750px]">
            that help organizations launch faster, engage users, improve
            outcomes, and streamline operations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whoWeServeData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-white border border-gray-100 rounded-[28px] p-8 shadow-[0px_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0px_24px_48px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 group overflow-hidden z-10"
            >
              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a1a1a] leading-[1.3] group-hover:text-green transition-colors duration-300 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] font-medium text-[#666] leading-[1.6] mb-6">
                  {item.desc}
                </p>

                {/* Divider */}
                <div className="w-12 h-[3px] rounded-full bg-gray-200 group-hover:bg-green group-hover:w-full transition-all duration-500 ease-out mb-6" />

                {/* Points list */}
                <ul className="flex flex-col gap-3 mt-auto">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <HiOutlineCheckCircle className="text-green text-[22px] shrink-0 mt-[2px]" />
                      <span className="text-[15px] font-medium text-[#444] leading-[1.5]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Background Number */}
              <div className="absolute right-[-10px] bottom-[-20px] text-[120px] font-extrabold text-gray-50/50 leading-none pointer-events-none group-hover:text-green/10 transition-colors duration-500 z-0 select-none">
                {item.num}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthWhoWeServe;
