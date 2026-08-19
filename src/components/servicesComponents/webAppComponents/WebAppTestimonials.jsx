"use client";
import React, { useState, useEffect } from "react";

export default function WebAppTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Anas Ashraf",
      location: "Mexico",
      rating: 4,
      feedback:
        "Great team. I really enjoyed working with them, and will work with them in the future for sure. They are very responsive and will deliver the product no matter what. I initially started with some features and then added some but they were okay with it and made sure they helped me. I also liked how there was a product manager, that would manage the development and saw the bigger picture. I totally recommend.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Alejandro Silva",
      location: "Spain",
      rating: 5,
      feedback:
        "Working with them was an absolute breeze. Their technical capability and proactive communication resolved key performance blockers early in our production timeline. The dedicated product manager maintained perfect alignment with our key milestones. Excellent delivery standards!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Marcus Vance",
      location: "USA",
      rating: 5,
      feedback:
        "Highly professional team that goes above and beyond to ensure execution meets strategic objectives. Their responsiveness is outstanding, and their ability to scale resource allocation flexibly made a huge difference to our go-to-market speed. Highly recommended for complex SaaS builds.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getCardPositionStyles = (cardIndex) => {
    const diff = (cardIndex - activeIndex + testimonials.length) % testimonials.length;

    if (diff === 0) {
      return {
        style: {
          transform: "translate(0px, 40px) rotate(0deg) scale(1)",
          zIndex: 30,
        },
        className: "shadow-[0px_4px_30px_rgba(12,191,131,0.3)] opacity-100 border border-[#0CBF83]/50",
      };
    } else if (diff === 1) {
      return {
        style: {
          transform: "translate(90px, 0px) rotate(15deg) scale(0.92)",
          zIndex: 10,
        },
        className: "shadow-md opacity-50 border border-white/10",
      };
    } else {
      return {
        style: {
          transform: "translate(-90px, 0px) rotate(-15deg) scale(0.92)",
          zIndex: 20,
        },
        className: "shadow-md opacity-50 border border-white/10",
      };
    }
  };

  return (
    <section className="relative w-full bg-[#111111] text-white py-16 md:py-24 overflow-hidden font-jakarta">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#004BC0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto px-6 lg:px-0 flex flex-col items-center relative z-10">
        <div className="flex flex-col items-center gap-3.5 text-center mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[22px] font-bold tracking-[1px] leading-[28px]">
              What Our Clients Say
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-[1px] capitalize text-white">
            Trusted by Businesses to Build{" "}
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
              Better Digital Experiences
            </p>
          </h2>
          <p className="text-center max-w-[850px] text-base text-white/70 font-medium tracking-[1px]">
            Our clients choose Softmind for more than development expertise. They rely on us for transparent communication, dependable execution, scalable engineering, and long-term technical partnership.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[460px]">
          <div className="lg:col-span-6 flex justify-center items-center h-[420px] relative z-10">
            <div className="relative w-[303px] h-[346px]">
              {testimonials.map((testimonial, idx) => {
                const layout = getCardPositionStyles(idx);
                return (
                  <div
                    key={idx}
                    style={layout.style}
                    className={`absolute inset-0 w-full h-full rounded-xl overflow-hidden transition-all duration-700 ease-in-out bg-[#161616] ${layout.className}`}
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

          <div className="lg:col-span-6 flex flex-col justify-center items-center md:items-start space-y-6 max-w-[563px] lg:pl-12">
            <div className="space-y-4">
              <div className="space-y-1 text-center md:text-start">
                <h3 className="text-3xl lg:text-[36px] lg:leading-[45px] font-bold tracking-[1px] text-white">
                  {testimonials[activeIndex].name}
                </h3>
                <span className="text-base text-[#0CBF83] font-medium tracking-[1px] block">
                  {testimonials[activeIndex].location}
                </span>
              </div>

              <div className="flex justify-center md:justify-start items-center gap-[4px]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={i < testimonials[activeIndex].rating ? "#0CBF83" : "#333333"}
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

            <div className="min-h-[200px] flex items-start text-center md:text-start">
              <p className="text-sm md:text-base text-white/80 font-medium leading-[26px] tracking-[1px] italic transition-opacity duration-500">
                &quot;{testimonials[activeIndex].feedback}&quot;
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-[6px] pt-4">
              {testimonials.map((_, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      isActive ? "bg-[#0CBF83] scale-125" : "bg-white/20 hover:bg-white/40"
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
