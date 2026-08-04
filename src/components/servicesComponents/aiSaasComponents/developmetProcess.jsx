"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const stepsData = [
  {
    step: "Step 1",
    title: "Discovery and Consultation",
    description:
      "We begin by understanding your product idea, target market, users, business model, existing technology, and desired outcomes.",
    image: "https://picsum.photos/id/119/600/400",
  },
  {
    step: "Step 2",
    title: "Product Planning and Architecture",
    description:
      "We translate the product vision into a prioritized feature set, technical roadmap and AI components required for the solution.",
    image: "https://picsum.photos/id/2/600/400",
  },
  {
    step: "Step 3",
    title: "Data Assessment and Preparation",
    description:
      "For products that depend on proprietary data, we assess its quality, availability, structure, security, and suitability for the intended AI use case.",
    image: "https://picsum.photos/id/3/600/400",
  },
  {
    step: "Step 4",
    title: "UI/UX Design and Prototyping",
    description:
      "Our design team creates user journeys, wireframes, and interactive prototypes before full development begins.",
    image: "https://picsum.photos/id/4/600/400",
  },
  {
    step: "Step 5",
    title: "SaaS and AI Development",
    description:
      "Our engineers build the front end, back end, AI functionality, APIs, databases, integrations, and cloud infrastructure in planned development cycles.",
    image: "https://picsum.photos/id/5/600/400",
  },
  {
    step: "Step 6",
    title: "Testing, Security, and Quality Assurance",
    description:
      "We test the application across functionality, usability, performance, compatibility, integrations, and security.",
    image: "https://picsum.photos/id/6/600/400",
  },
  {
    step: "Step 7",
    title: "Deployment and Launch",
    description:
      "We prepare the production environment, configure monitoring, migrate required data, and support the release process.",
    image: "https://picsum.photos/id/7/600/400",
  },
  {
    step: "Step 8",
    title: "Monitoring and Continuous Improvement",
    description:
      "After launch, we monitor software performance, infrastructure, user behavior, and AI outputs for feature improvements, performance optimization, and future product releases.",
    image: "https://picsum.photos/id/8/600/400",
  },
];

const DevelopmetProcess = () => {
  const containerRef = useRef(null);

  // Track scroll progress of the container to animate the central line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section className="bg-gray-200 py-24 font-jakarta overflow-hidden">
      <div className="flex flex-col items-center gap-3.5 text-center mb-12 md:mb-16">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
          <span className="text-green text-[22px] font-bold tracking-wide">
            Development Process
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-dark max-w-[700px]">
          Our AI SaaS Product Development Process
        </h2>
        <p className="text-sm md:text-base text-grey font-medium leading-[24px] tracking-wide max-w-[800px] mt-2">
          Our development process combines product strategy, user-centered
          design, AI engineering, and agile software delivery.
        </p>
      </div>
      <div ref={containerRef} className="relative mx-auto px-6 lg:px-12">
        {/* Background Gray Line (Desktop Only) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#EFEFEF] -translate-x-1/2 rounded-full" />

        {/* Animated Green Line (Desktop Only) */}
        <motion.div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#0CBF83] -translate-x-1/2 rounded-full origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <div className="relative z-10 flex flex-col gap-16 md:gap-32">
          {stepsData.map((step, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col ${isImageLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-between w-full`}
              >
                {/* Center Dot (Desktop Only) */}
                <motion.div
                  initial={{ backgroundColor: "#EFEFEF" }}
                  whileInView={{ backgroundColor: "#0CBF83" }}
                  viewport={{ once: false, margin: "10000px 0px -50% 0px" }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 w-6 h-6 rounded-full z-20"
                />

                {/* Image Block */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full md:w-[45%]"
                >
                  <div className="rounded-xl overflow-hidden shadow-[0px_4px_30px_rgba(0,0,0,0.05)] h-[250px] sm:h-[346px] w-full">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Text Block */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="w-full md:w-[45%] mt-8 md:mt-0 flex flex-col"
                >
                  <span className="text-[18px] font-medium text-grey mb-1">
                    {step.step}
                  </span>
                  <h3 className="text-[28px] md:text-[32px] font-bold text-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-medium text-grey leading-[1.4] mb-6">
                    {step.description}
                  </p>

                  {/* <h4 className="text-[18px] font-bold text-dark mb-2">
                    We work on
                  </h4>
                  <ul className="flex flex-col gap-[2px] text-[14px] md:text-[16px] text-grey font-medium leading-[1.4]">
                    {step.workOn.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul> */}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DevelopmetProcess;
