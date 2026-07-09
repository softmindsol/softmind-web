"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function WithWithoutSoftmind() {
  const [activeTab, setActiveTab] = useState("before");

  const beforeData = {
    col1: {
      stat: "5x",
      statSubtitle: "More Expensive",
      title: "High Cost of Hiring In-House Developers",
      description:
        "Hiring a senior developer in the US can cost $120,000 to $160,000 in base salary alone. Add recruitment, benefits, onboarding, and retention risk, and the cost becomes even higher.",
    },
    col2: {
      top: "Hiring Locally Takes Too Long",
      bottom: {
        stat: "3-6 Months",
        statSubtitle: "Hiring Time",
        description:
          "The average tech hiring process can take months, delaying your roadmap and slowing product growth. Even after hiring, there is no guarantee the developer will stay long term.",
      },
    },
    col3: {
      stat: "70%",
      statSubtitle: "Projects Run Late",
      title: "Product Delivery Gets Delayed",
      description:
        "Missed deadlines lead to cost overruns, lost opportunities, and frustrated teams. Poor communication and lack of visibility often push software projects off track.",
    },
  };

  const afterData = {
    col1: {
      stat: "60%",
      statSubtitle: "Cost Saved",
      title: "Affordable Senior Developers",
      description:
        "Get the same senior-level talent at a fraction of US hiring cost, ready to join your team in 7 to 14 days.",
    },
    col2: {
      top: "Pre-Vetted Engineers Ready in 7-14 Days",
      bottom: {
        stat: "7-14 Days",
        statSubtitle: "To Deploy",
        description:
          "We give access to senior engineers you can add to your team and scale up anytime without long term hiring commitments.",
      },
    },
    col3: {
      stat: "98%",
      statSubtitle: "On-Time Delivery",
      title: "On-Track Delivery Every Sprint",
      description:
        "On track Delivery every Sprint. Weekly sprint demos, daily standups and transparent progress reporting keep your roadmap on track every release.",
    },
  };

  const currentData = activeTab === "before" ? beforeData : afterData;

  return (
    <section className="relative w-full bg-[#FAFAFA] py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00235A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section Label */}
        <div className="flex flex-col items-center gap-3 mb-12 text-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-navy text-[22px] font-bold tracking-wide">
              The SoftMind Difference
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-dark max-w-[700px]">
            Why Businesses Choose Us
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-[580px]">
            See the difference a dedicated technology partner makes — from day
            one through every stage of growth.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1.5 rounded-full shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-100">
            <button
              onClick={() => setActiveTab("before")}
              className={`px-6 sm:px-10 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === "before"
                  ? "bg-navy text-white shadow-md"
                  : "text-gray-500 hover:text-dark"
              }`}
            >
              Before SoftMind
            </button>
            <button
              onClick={() => setActiveTab("after")}
              className={`px-6 sm:px-10 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === "after"
                  ? "bg-navy text-white shadow-md"
                  : "text-gray-500 hover:text-dark"
              }`}
            >
              After SoftMind
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div
          key={activeTab}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1050px] mx-auto transition-opacity duration-500"
        >
          {/* Column 1 */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between min-h-[340px] transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-dark mb-1 tracking-tight">
                {currentData.col1.stat}
              </h3>
              <p className="text-gray-600 font-medium text-lg md:text-xl mb-8">
                {currentData.col1.statSubtitle}
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-dark mb-3 leading-snug">
                {currentData.col1.title}
              </h4>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                {currentData.col1.description}
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
              <h4 className="text-lg md:text-xl font-bold text-dark leading-snug">
                {currentData.col2.top}
              </h4>
            </div>
            <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex-1 flex flex-col justify-between transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-dark mb-1 tracking-tight">
                  {currentData.col2.bottom.stat}
                </h3>
                <p className="text-gray-600 font-medium text-lg md:text-xl mb-6">
                  {currentData.col2.bottom.statSubtitle}
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  {currentData.col2.bottom.description}
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between min-h-[340px] transition-all hover:shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-dark mb-1 tracking-tight">
                {currentData.col3.stat}
              </h3>
              <p className="text-gray-600 font-medium text-lg md:text-xl mb-8">
                {currentData.col3.statSubtitle}
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-dark mb-3 leading-snug">
                {currentData.col3.title}
              </h4>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                {currentData.col3.description}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Link href="/contact-us">
            <button className="flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-full hover:bg-[#003080] transition-all duration-300 hover:scale-105 shadow-[0_4px_14px_0_rgba(0,35,90,0.39)] text-sm md:text-base tracking-wide">
              Start Working with SoftMind
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
