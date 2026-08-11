"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function CustomSoftwareTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Anas Ashraf",
      location: "Mexico — Founder & CTO",
      rating: 5,
      feedback:
        "Great team. I really enjoyed working with them, and will work with them in the future for sure. They are very responsive and will deliver the product no matter what. I initially started with some features and then added some but they were okay with it and made sure they helped me. I also liked how there was a product manager that managed development and saw the bigger picture.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Alejandro Silva",
      location: "Spain — Head of Product",
      rating: 5,
      feedback:
        "Working with Softmind Solutions was an absolute breeze. Their technical capability and proactive communication resolved key performance blockers early in our production timeline. The dedicated software engineering team maintained perfect alignment with our key milestones. Excellent delivery standards!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Marcus Vance",
      location: "USA — Managing Director",
      rating: 5,
      feedback:
        "Highly professional team that goes above and beyond to ensure execution meets strategic objectives. Their responsiveness is outstanding, and their ability to scale resource allocation flexibly made a huge difference to our go-to-market speed. Highly recommended for custom software builds.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative w-full bg-white text-[#00235A] py-20 lg:py-28 font-jakarta overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#004BC0]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-[860px] mx-auto">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-gray-200 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#00235A] text-xs font-bold uppercase tracking-widest">
              Client Reviews
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[56px] font-extrabold tracking-tight text-[#00235A]">
            Trusted by Businesses Building the Future
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 font-medium leading-[26px]">
            From startups to growing enterprises, businesses trust Softmind Solutions to deliver reliable software, transparent collaboration, and measurable results. Here&apos;s what our clients have to say about partnering with our team to build innovative digital solutions.
          </p>
        </div>

        {/* Testimonials Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Focused Testimonial Box */}
          <div className="lg:col-span-8 bg-[#F8FAFC] border border-gray-200/80 rounded-[32px] p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[380px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#0CBF83]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFBF00] text-[#FFBF00]" />
                ))}
              </div>

              <p className="text-base sm:text-lg md:text-xl text-[#00235A] leading-relaxed font-medium italic mb-8">
                &quot;{testimonials[activeIndex].feedback}&quot;
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0CBF83] shadow-md shrink-0">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#00235A]">
                  {testimonials[activeIndex].name}
                </h3>
                <span className="text-xs font-semibold text-gray-500">
                  {testimonials[activeIndex].location}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation & Thumbnail Stack */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {testimonials.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-4 p-5 rounded-[20px] text-left transition-all duration-300 border ${
                    isActive
                      ? "bg-[#00235A] text-white border-[#0CBF83] shadow-lg translate-x-1"
                      : "bg-[#F8FAFC] hover:bg-gray-100 text-gray-700 border-gray-200"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0 border border-white/20"
                  />
                  <div>
                    <h4 className={`text-sm font-bold ${isActive ? "text-white" : "text-[#00235A]"}`}>
                      {item.name}
                    </h4>
                    <span className={`text-xs ${isActive ? "text-[#0CBF83]" : "text-gray-500"}`}>
                      {item.location}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
