"use client";

import React, { useState } from "react";

const leaders = [
  {
    role: "Founder & CEO",
    name: "Muhammad Bilal Bhatti",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    role: "HR Manager",
    name: "Mariyam Manzoor",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  },
  {
    role: "Tech Team Lead",
    name: "Fahad Anwar",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    role: "Technical Project Manager",
    name: "Ahmar Baig",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
];

export default function OurLeadership() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for mobile swiping (optional but good for UX)
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && currentIndex < leaders.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative w-full py-12 lg:py-16 bg-[#ffffff] overflow-hidden font-jakarta flex justify-center">
      <div className="w-full px-6 sm:px-12 flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-[800px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00235A] to-[#004BC0]" />
            <span className="text-[16px] sm:text-[18px] font-bold text-[#0CBF83] tracking-wide">
              Our Leadership
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-bold text-[#2E2E2E] leading-tight capitalize">
            The Visionaries Behind Every Successful Project
          </h2>
          <p className="text-[15px] sm:text-[16px] font-medium text-[#666666] leading-[1.6]">
            Real people. Real expertise. Passionate about solving complex
            engineering challenges for clients across the globe.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-4 gap-6 w-full">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="w-full bg-white border border-[#EFEFEF] rounded-xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.06)] flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
            >
              <div
                className="w-full aspect-square rounded-lg bg-gray-200 bg-cover bg-center mb-5"
                style={{ backgroundImage: `url(${leader.image})` }}
              />
              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-[15px] font-bold text-[#2E2E2E] tracking-wide">
                  {leader.role}
                </h3>
                <p className="text-[14px] font-medium text-[#666666] tracking-wide">
                  {leader.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Slider Layout */}
        <div className="lg:hidden w-full flex flex-col items-center">
          <div
            className="w-full max-w-[340px] overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {leaders.map((leader, idx) => (
                <div
                  key={idx}
                  className="w-full shrink-0 px-2 flex justify-center"
                >
                  <div className="w-full bg-white border border-[#EFEFEF] rounded-xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.08)] flex flex-col">
                    <div
                      className="w-full aspect-square rounded-lg bg-gray-200 bg-cover bg-center mb-5"
                      style={{ backgroundImage: `url(${leader.image})` }}
                    />
                    <div className="flex flex-col gap-1 px-1 pb-2">
                      <h3 className="text-[16px] font-bold text-[#2E2E2E] tracking-wide">
                        {leader.role}
                      </h3>
                      <p className="text-[15px] font-medium text-[#666666] tracking-wide">
                        {leader.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 mt-8">
            {leaders.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  idx === currentIndex ? "bg-[#0CBF83]" : "bg-[#EFEFEF]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
