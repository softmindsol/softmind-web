"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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

const StepItem = ({ step, index, setActiveStep }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveStep(index);
    }
  }, [isInView, index, setActiveStep]);

  return (
    <div
      ref={ref}
      className={`py-[15vh] lg:py-[20vh] flex flex-col justify-center transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-x-0" : "opacity-30 -translate-x-8"}`}
    >
      <div className="inline-flex items-center gap-4 mb-6">
        <span className="w-12 h-[2px] bg-[#0CBF83]"></span>
        <span className="text-[#0CBF83] font-bold tracking-widest uppercase text-sm">
          {step.step}
        </span>
      </div>
      <h3 className="text-[32px] lg:text-[42px] font-extrabold text-[#00235A] mb-6 leading-tight">
        {step.title}
      </h3>
      <p className="text-lg text-gray-500 leading-relaxed max-w-[450px]">
        {step.description}
      </p>
    </div>
  );
};

const DevelopmetProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white font-jakarta overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#004BC0]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0CBF83]/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      {/* Header */}
      <div className="pt-24 pb-12 md:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto text-center relative z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-gray-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
            <span className="text-[#00235A] text-[13px] font-bold tracking-widest uppercase">
              Development Process
            </span>
          </div>
          <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold text-[#00235A] tracking-tight max-w-[800px] leading-tight">
            Our AI SaaS Product{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
              Development Process
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-500 font-medium leading-relaxed max-w-[700px] mt-4">
            Our development process combines product strategy, user-centered
            design, AI engineering, and agile software delivery.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-start w-full px-6 lg:px-12">
          {/* Text Column (Scrolling) */}
          <div className="w-1/2 pr-12 lg:pr-24 pb-[30vh]">
            {stepsData.map((step, index) => (
              <StepItem
                key={index}
                step={step}
                index={index}
                setActiveStep={setActiveStep}
              />
            ))}
          </div>

          {/* Image Column (Sticky) */}
          <div className="w-1/2 sticky top-32 h-[calc(100vh-8rem)] flex flex-col justify-start pl-8 pt-4">
            <div className="relative w-full aspect-[4/3] max-h-[70vh] rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,35,90,0.08)] border border-gray-100 bg-white">
              <AnimatePresence>
                <motion.img
                  key={activeStep}
                  src={stepsData[activeStep].image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00235A]/80 via-transparent to-transparent pointer-events-none" />

              {/* Step Indicator on Image */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">
                <motion.h4
                  key={`title-${activeStep}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white text-[22px] font-bold mb-1"
                >
                  {stepsData[activeStep].title}
                </motion.h4>
                <motion.span
                  key={`step-${activeStep}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/80 font-medium text-[15px]"
                >
                  {stepsData[activeStep].step} of {stepsData.length}
                </motion.span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-12 px-6 pb-24">
          {stepsData.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg relative">
                <img src={step.image} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00235A]/80 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full">
                  <span className="text-white font-bold text-sm tracking-widest uppercase">
                    {step.step}
                  </span>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-[26px] font-extrabold text-[#00235A] mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[16px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmetProcess;
