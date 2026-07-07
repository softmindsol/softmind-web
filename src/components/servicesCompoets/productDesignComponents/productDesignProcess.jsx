"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const stepsData = [
  {
    step: "Step 1",
    title: "Empathize",
    description:
      "Understand users through research to uncover their needs, behaviors, pain points, and goals, forming the foundation for user-centered design.",
    workOn: [
      "Research",
      "Interviews",
      "Observation",
      "Surveys",
      "Analysis",
      "Insights",
    ],
    image: "https://picsum.photos/id/119/600/400",
  },
  {
    step: "Step 2",
    title: "Define",
    description:
      "Define is the process of synthesizing user research into a clear, actionable problem statement that guides the design of meaningful, user-centered solutions.",
    workOn: [
      "Analysis",
      "Synthesis",
      "Personas",
      "Pain Points",
      "Problem Statement",
      "Prioritization",
    ],
    image: "https://picsum.photos/id/2/600/400",
  },
  {
    step: "Step 3",
    title: "Ideate",
    description:
      "The Ideate phase is where designers transform insights into ideas by brainstorming, sketching concepts, and exploring innovative solutions to solve user problems effectively.",
    workOn: [
      "Brainstorming",
      "Sketching",
      "Innovation",
      "Concepts",
      "Wireframing",
    ],
    image: "https://picsum.photos/id/3/600/400",
  },
  {
    step: "Step 4",
    title: "Prototype",
    description:
      "Prototype is the stage where designers create interactive representations of the product to visualize ideas, test functionality, and validate design solutions before development.",
    workOn: ["Mockups", "Interactions", "Flows", "Navigation", "Validation"],
    image: "https://picsum.photos/id/4/600/400",
  },
  {
    step: "Step 5",
    title: "Test",
    description:
      "Test is the process of evaluating prototypes with users to identify usability issues, gather feedback, and refine the design before development.",
    workOn: [
      "Usability",
      "Feedback",
      "Validation",
      "Issues",
      "Iteration",
      "Refinement",
    ],
    image: "https://picsum.photos/id/5/600/400",
  },
  {
    step: "Step 6",
    title: "Deliver & Support",
    description:
      "Your product is fully prepared for the next step, whether that's development or securing investment.",
    workOn: [
      "UX Report",
      "UI Style Guide",
      "Design System",
      "Design Documentation",
      "Developer Handoff",
    ],
    image: "https://picsum.photos/id/6/600/400",
  },
];

const ProductDesignProcess = () => {
  const containerRef = useRef(null);

  // Track scroll progress of the container to animate the central line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section className="bg-white py-24 font-jakarta overflow-hidden">
      <div className="flex flex-col items-center gap-3.5 text-center mb-12 md:mb-16">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
          <span className="text-green text-[22px] font-bold tracking-wide">
            Design Process
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-dark max-w-[700px]">
          Turning Ideas into Intuitive Experiences
        </h2>
        <p className="text-sm md:text-base text-grey font-medium leading-[24px] tracking-wide max-w-[800px] mt-2">
          Our structured UX/UI design process combines research, strategy, and
          creativity to deliver intuitive digital experiences that align with
          your business goals and user needs.
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
                className={`relative flex flex-col ${isImageLeft ? "md:flex-row" : "md:flex-row-reverse"} items-start justify-between w-full`}
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

                  <h4 className="text-[18px] font-bold text-dark mb-2">
                    We work on
                  </h4>
                  <ul className="flex flex-col gap-[2px] text-[14px] md:text-[16px] text-grey font-medium leading-[1.4]">
                    {step.workOn.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductDesignProcess;
