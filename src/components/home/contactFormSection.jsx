"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, MessageSquare, Phone } from "lucide-react";

const projectTypes = [
  "Select project type...",
  "Web Application",
  "Mobile App",
  "AI / SaaS Product",
  "E-Commerce Platform",
  "UI/UX Design",
  "Dedicated Development Team",
  "Other",
];

const budgetRanges = [
  "Select budget range...",
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
  "Not sure yet",
];

const howItWorksSteps = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Fill the Form",
    description:
      "Tell us about your project — what you're building, your timeline, and budget. Takes less than 2 minutes.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "We Review & Respond",
    description:
      "Our team reviews your submission and reaches out within 24 hours with initial thoughts and next steps.",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Free Discovery Call",
    description:
      "We schedule a 30-minute call to deep dive into your requirements, answer questions, and propose a plan.",
  },
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic — redirect to contact page or use an API
    setSubmitted(true);
  };

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#00235A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E5F6FE] rounded-full blur-[150px] opacity-40 pointer-events-none" />

      <div className="relative mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex flex-col items-center gap-3 text-center mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[22px] font-bold tracking-wide">
              Let&apos;s Connect
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-dark max-w-[680px]">
            Tell Us About Your Project
          </h2>
          <p className="text-sm md:text-base text-grey font-medium leading-relaxed max-w-[540px]">
            Ready to build something great? Share your requirements and we&apos;ll
            get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          {/* Left: How it Works */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-bold text-dark mb-2">
                How Does It Work?
              </h3>
              <p className="text-sm text-grey font-medium leading-relaxed">
                Getting started is simple. Here&apos;s what happens after you send
                your message:
              </p>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-6 relative">
              {/* Connector Line */}
              <div className="absolute left-[22px] top-12 bottom-8 w-px bg-gradient-to-b from-green/40 via-navy/20 to-transparent hidden sm:block" />

              {howItWorksSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-5 relative">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-navy text-white flex items-center justify-center shrink-0 shadow-md z-10">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1 pt-1">
                    <h4 className="text-base font-bold text-dark">
                      {step.title}
                    </h4>
                    <p className="text-sm text-grey font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-gray-100 p-6 flex flex-col gap-3">
              <p className="text-sm font-bold text-dark">Why teams trust us:</p>
              {[
                "300+ projects delivered across 4 industries",
                "14+ years of combined team experience",
                "NDA signed before every conversation",
                "No upfront fees — just a conversation first",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                  <span className="text-sm text-dark/70 font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_8px_48px_rgba(0,0,0,0.08)] p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-5 py-12">
                <div className="w-16 h-16 rounded-full bg-green/10 border border-green/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Message Sent!</h3>
                <p className="text-grey font-medium text-sm leading-relaxed max-w-xs">
                  Thank you! Our team will review your request and get back
                  to you within 24 hours.
                </p>
                <Link href="/contact-us">
                  <button className="mt-2 px-6 py-3 bg-navy text-white rounded-full text-sm font-bold hover:bg-[#003080] transition-all duration-300">
                    Go to Full Contact Page
                  </button>
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-bold text-dark mb-1">
                  Start a Conversation
                </h3>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold text-dark/70 uppercase tracking-wider"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-dark placeholder:text-grey/50 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold text-dark/70 uppercase tracking-wider"
                    >
                      Work Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-dark placeholder:text-grey/50 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="projectType"
                    className="text-xs font-bold text-dark/70 uppercase tracking-wider"
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-dark focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 transition-all duration-200 bg-white"
                  >
                    {projectTypes.map((type, idx) => (
                      <option key={idx} value={idx === 0 ? "" : type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="budget"
                    className="text-xs font-bold text-dark/70 uppercase tracking-wider"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-dark focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 transition-all duration-200 bg-white"
                  >
                    {budgetRanges.map((range, idx) => (
                      <option key={idx} value={idx === 0 ? "" : range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold text-dark/70 uppercase tracking-wider"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project — what you're building, your target users, and any specific requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-dark placeholder:text-grey/50 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-navy text-white font-bold rounded-xl hover:bg-[#003080] transition-all duration-300 hover:shadow-lg text-sm tracking-wide mt-1 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>

                <p className="text-center text-xs text-grey/60 font-medium">
                  No spam. Your information is kept confidential and protected
                  under NDA.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
