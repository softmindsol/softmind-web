"use client";
import React, { useState, useEffect } from "react";

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Jenkins",
      location: "EdTech Founder, USA",
      rating: 5,
      feedback:
        "Softmind Solutions completely transformed our legacy LMS. They didn't just write code; they understood the learner journey and helped us prioritize features that actually drove engagement. Their offshore model gave us the flexibility we needed as an early-stage startup.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Dr. Ahmed Al-Farsi",
      location: "University Director, UAE",
      rating: 5,
      feedback:
        "We needed a customized virtual classroom solution that met strict regional compliance. The Softmind team delivered a highly secure, intuitive platform ahead of schedule. Their communication was flawless, and the technical quality is exceptional.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Michael Chen",
      location: "VP of Product, L&D Platform",
      rating: 5,
      feedback:
        "Integrating AI into our corporate training platform seemed daunting until we partnered with Softmind. They seamlessly added smart content generation and personalized learning paths, which increased our user completion rates by 40%.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getCardPositionStyles = (cardIndex) => {
    const diff =
      (cardIndex - activeIndex + testimonials.length) % testimonials.length;

    if (diff === 0) {
      return {
        style: {
          transform: "translate(0px, 40px) rotate(0deg) scale(1)",
          zIndex: 30,
        },
        className: "shadow-[0px_4px_30px_rgba(12,191,131,0.2)] opacity-100",
      };
    } else if (diff === 1) {
      return {
        style: {
          transform: "translate(90px, 0px) rotate(15deg) scale(0.92)",
          zIndex: 10,
        },
        className: "shadow-md opacity-85",
      };
    } else {
      return {
        style: {
          transform: "translate(-90px, 0px) rotate(-15deg) scale(0.92)",
          zIndex: 20,
        },
        className: "shadow-md opacity-85",
      };
    }
  };

  return (
    <section className="relative w-full bg-[#F8FAFC] text-dark py-16 md:py-24 overflow-hidden font-jakarta">
      <div className="mx-auto px-6 lg:px-0 flex flex-col items-center">
        {/* Header Label & Title */}
        <div className="flex flex-col items-center gap-3.5 text-center mb-16 max-w-[800px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[22px] font-bold tracking-[1px] leading-[28px]">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-[1px] capitalize text-[#00235A]">
            What EdTech Teams Say About Working With Softmind
          </h2>
          <p className="text-base md:text-lg text-[#666666] font-medium leading-[1.6] mt-2">
            Our clients work with a collaborative team that listens carefully, communicates openly, and stays focused on the outcomes behind every feature.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[460px]">
          {/* Left Column: Stacked Cards */}
          <div className="lg:col-span-6 flex justify-center items-center h-[420px] relative z-10">
            <div className="relative w-[303px] h-[346px]">
              {testimonials.map((testimonial, idx) => {
                const layout = getCardPositionStyles(idx);
                return (
                  <div
                    key={idx}
                    style={layout.style}
                    className={`absolute inset-0 w-full h-full rounded-xl overflow-hidden transition-all duration-700 ease-in-out bg-[#F3F4F6] ${layout.className}`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center md:items-start space-y-6 max-w-[563px] lg:pl-12">
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-3xl lg:text-[36px] lg:leading-[45px] font-bold tracking-[1px] text-[#00235A]">
                  {testimonials[activeIndex].name}
                </h3>
                <span className="md:text-start text-center text-base text-[#666666] font-medium tracking-[1px] block">
                  {testimonials[activeIndex].location}
                </span>
              </div>

              <div className="flex justify-center md:justify-start items-center gap-[4px]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={
                      i < testimonials[activeIndex].rating
                        ? "#FFBF00"
                        : "#DBDBDB"
                    }
                    className="w-6 h-6 shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>

            <div className="min-h-[200px] flex items-start">
              <p className="text-sm md:text-base text-[#666666] font-medium leading-[24px] tracking-[1px] italic transition-opacity duration-500">
                &quot;{testimonials[activeIndex].feedback}&quot;
              </p>
            </div>

            <div className="flex items-center gap-[4px] pt-4">
              {testimonials.map((_, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-[linear-gradient(135deg,#0CBF83_0%,#06593D_100%)]"
                        : "bg-[#EFEFEF]"
                    }`}
                    aria-label={`Go to testimonial page ${idx + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
