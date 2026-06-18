"use client";
import React, { useState, useEffect } from "react";

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Anas Ashraf",
      location: "Mexico",
      rating: 4,
      feedback:
        "Great team. I really enjoyed working with them, and will work with them in the future for sure. They are very responsive and will deliver the product no matter what. I initially started with some features and then added some but they were okay with it and made sure they helped me. I also liked how there was a product manager, that would manage the development and saw the bigger picture. I totally recommend.",
      // High-quality professional corporate suit portraits matching the visual style
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80", // Placeholder portrait matching styling
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

  // Auto slide effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Dynamic positioning for the three card layers
  const getCardPositionStyles = (cardIndex) => {
    const diff =
      (cardIndex - activeIndex + testimonials.length) % testimonials.length;

    if (diff === 0) {
      // Prominent Center Card
      return {
        style: {
          transform: "translate(0px, 40px) rotate(0deg) scale(1)",
          zIndex: 30,
        },
        className: "shadow-[0px_4px_30px_rgba(12,191,131,0.2)] opacity-100",
      };
    } else if (diff === 1) {
      // Right rotated card behind
      return {
        style: {
          transform: "translate(90px, 0px) rotate(15deg) scale(0.92)",
          zIndex: 10,
        },
        className: "shadow-md opacity-85",
      };
    } else {
      // Left rotated card behind (Flipped matrix scale representation)
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
    <section className="relative w-full bg-white text-dark py-16 md:py-24 overflow-hidden font-jakarta">
      <div className="mx-auto px-6 lg:px-0 flex flex-col items-center">
        {/* Header Label & Title */}
        <div className="flex flex-col items-center gap-3.5 text-center mb-16">
          <div className="flex items-center gap-2">
            {/* Custom Theme Dot */}
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[22px] font-bold tracking-[1px] leading-[28px]">
              Testimonial
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-[1px] capitalize text-dark">
            What Our Client Says About Us
          </h2>
        </div>

        {/* Content Layout split into Stacked Cards and Testimonial Details */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[460px]">
          {/* Left Column: Stacked Cards (Takes up 6 cols) */}
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

          {/* Right Column: Testimonial copy & Ratings (Takes up 6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start space-y-6 max-w-[563px] lg:pl-12">
            {/* Name, Location, and Rating Stars */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-3xl lg:text-[36px] lg:leading-[45px] font-bold tracking-[1px] text-dark">
                  {testimonials[activeIndex].name}
                </h3>
                <span className="text-base text-grey font-medium tracking-[1px] block">
                  {testimonials[activeIndex].location}
                </span>
              </div>

              {/* Dynamic Rating Stars Layout */}
              <div className="flex items-center gap-[4px]">
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

            {/* Testimonial Message Body Copy */}
            <div className="min-h-[200px] flex items-start">
              <p className="text-sm md:text-base text-grey font-medium leading-[24px] tracking-[1px] italic transition-opacity duration-500">
                &quot;{testimonials[activeIndex].feedback}&quot;
              </p>
            </div>

            {/* Pagination Indicators (Ellipse 27, 28, 29 specs) */}
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
