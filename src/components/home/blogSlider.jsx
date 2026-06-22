"use client";
import React, { useState, useEffect } from "react";

export default function BlogSlider() {
  const [activePage, setActivePage] = useState(0);

  // Grouped blog posts (each slide page contains 2 distinct posts for desktop display)
  const blogPages = [
    [
      {
        id: "ai-modern-business",
        title: "The Future of AI in Modern Businesses",
        description:
          "Discover how AI is transforming workflows, automating operations, and helping businesses scale smarter and faster.",
        time: "2:30 PM - 4:40Pm",
        image:
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80", // Metallic neural circuit portrait
      },
      {
        id: "reshape-real-estate",
        title: "How Technology is Reshaping Real Estate",
        description:
          "From smart property management to digital tenant experiences, explore the future of modern real estate solutions.",
        time: "2:30 PM - 4:40Pm",
        image:
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80", // Modern suburban home matching visual tone
      },
    ],
    [
      {
        id: "fintech-next-gen",
        title: "Next-Gen Fintech: Navigating Digital Assets",
        description:
          "Uncover how institutional digital assets and ledger databases are streamlining secure transnational payments.",
        time: "1:00 PM - 3:00Pm",
        image:
          "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "proptech-insights",
        title: "Proptech Innovation: Smart Leasing Models",
        description:
          "How secure decentralized registries are changing the paradigm of tenant verify operations globally.",
        time: "11:30 AM - 1:30Pm",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      },
    ],
    [
      {
        id: "healthtech-automation",
        title: "Healthcare Diagnostics and Neural Automation",
        description:
          "Exploring the compliance architectures behind automated cloud-native patient workflow delivery channels.",
        time: "4:00 PM - 6:00Pm",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "ecommerce-cloud",
        title: "Scaling Serverless Infrastructures for E-Commerce",
        description:
          "A technical evaluation of localized content delivery and edge-computing networks during flash sales events.",
        time: "3:30 PM - 5:30Pm",
        image:
          "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=600&q=80",
      },
    ],
    [
      {
        id: "ai-llm-architecture",
        title: "Architecting Fine-Tuned Localized LLM Models",
        description:
          "Best practices for deploying custom domain weights while maintaining strict privacy boundaries.",
        time: "10:00 AM - 12:00Pm",
        image:
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "web-security-saas",
        title: "Zero-Trust Frameworks in Enterprise B2B SaaS",
        description:
          "Implementing granular role-based identity verification schemes directly across serverless functions.",
        time: "12:30 PM - 2:30Pm",
        image:
          "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=600&q=80",
      },
    ],
  ];

  // Automate sliding loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePage((prevPage) => (prevPage + 1) % blogPages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [blogPages.length]);

  return (
    <section className="relative w-full bg-white text-[#2E2E2E] py-16 md:py-24 overflow-hidden font-jakarta">
      <div className="mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Content copy (405px wide on Figma) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-3.5 lg:max-w-[405px]">
            <div className="flex items-center gap-2">
              {/* Custom Theme Dot */}
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
              <span className="text-[#0CBF83] text-[22px] font-bold tracking-[1px] leading-[28px]">
                Blog
              </span>
            </div>

            <h2 className="text-center lg:text-start text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-[1px] text-[#2E2E2E]">
              Real Task Real Result
            </h2>

            <p className="text-center lg:text-start text-sm md:text-base text-[#666666] font-medium leading-[24px] tracking-[1px]">
              Discover insights, trends, and practical tips designed to help you
              stay ahead. Our blog covers everything from industry updates to
              actionable strategies written to inform, inspire, and support your
              journey.
            </p>
          </div>

          {/* Right Column: Carousel Track Viewport */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-end w-full">
            {/* Viewport wrapper holding slide tracks */}
            <div className="overflow-hidden w-full max-w-[824px] relative mb-8">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activePage * 100}%)` }}
              >
                {blogPages.map((page, pageIdx) => (
                  <div
                    key={pageIdx}
                    className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[32px]"
                  >
                    {page.map((post) => (
                      <div
                        key={post.id}
                        className="w-full max-w-[396px] h-[506px] bg-[#161616] rounded-xl relative p-4.5 flex flex-col justify-between overflow-hidden shadow-lg border border-white/[0.04]"
                      >
                        {/* Subtle inner blue radial glow background (Ellipse 12 equivalent) */}
                        <div
                          className="absolute right-[-20px] bottom-[-20px] w-[127px] h-[127px] rounded-full pointer-events-none opacity-45 blur-[51px]"
                          style={{ backgroundColor: "rgba(0, 37, 69, 0.5)" }}
                        />

                        {/* Top Image (Figma aspect matching 361x236) */}
                        <div className="w-full aspect-[361/236] rounded-xl overflow-hidden relative border border-white/[0.05] shrink-0 mb-4">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        {/* Card metadata and content */}
                        <div className="flex flex-col flex-grow justify-between gap-3 relative z-10">
                          {/* Five Stars Row */}
                          <div className="flex items-center gap-[8.3px]">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#FFBF00"
                                className="w-[18.68px] h-[18.68px]"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                          </div>

                          {/* Post Title */}
                          <h3 className="text-white text-[18px] font-semibold leading-[23px] tracking-wide line-clamp-1">
                            {post.title}
                          </h3>

                          {/* Description copy */}
                          <p className="text-[#C9CBCF] text-sm md:text-[16px] leading-[20px] font-medium line-clamp-3">
                            {post.description}
                          </p>

                          {/* Outcomes & Time indicator row */}
                          <div className="space-y-2 mt-2">
                            <span className="text-white text-[18px] font-semibold leading-[23px] block">
                              Outcomes
                            </span>

                            {/* Time section with SVG Clock Icon */}
                            <div className="flex items-center gap-[8.3px] text-white/90">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.2"
                                stroke="currentColor"
                                className="w-[18.68px] h-[18.68px]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-sm md:text-[16px] leading-[20px] font-medium">
                                {post.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots row aligned with the slider */}
            <div className="flex items-center gap-[4px] pr-6 lg:pr-12">
              {blogPages.map((_, idx) => {
                const isActive = activePage === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActivePage(idx)}
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-[linear-gradient(135deg,#0CBF83_0%,#06593D_100%)]"
                        : "bg-[#EFEFEF]"
                    }`}
                    aria-label={`Go to slide page ${idx + 1}`}
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
