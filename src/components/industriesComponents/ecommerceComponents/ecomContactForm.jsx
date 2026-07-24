"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  MessageSquare,
  Phone,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email address"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z
    .string()
    .min(10, "Please provide at least a brief description of your project"),
});

const projectTypes = [
  "Select project type...",
  "Custom eCommerce Platform",
  "Multi-Vendor Marketplace",
  "Headless Commerce",
  "B2B eCommerce",
  "eCommerce Mobile App",
  "Dedicated eCommerce Team",
  "Other",
];

const budgetRanges = [
  "Select budget range...",
  "Under $15,000",
  "$15,000 – $40,000",
  "$40,000 – $100,000",
  "$100,000+",
  "Not sure yet",
];

const howItWorksSteps = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Fill the Form",
    description:
      "Tell us about your eCommerce project — your business model, scale, timeline, and budget. Takes less than 2 minutes.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "We Review & Respond",
    description:
      "Our eCommerce experts review your submission and reach out within 24 hours with initial thoughts and next steps.",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Free Discovery Call",
    description:
      "We schedule a 30-minute call to deep dive into your requirements, answer technical questions, and propose a scalable solution.",
  },
];

export default function EcomContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const watchProjectType = watch("projectType");
  const watchBudget = watch("budget");

  const onSubmit = async (data) => {
    // Form submission logic — API call goes here
    await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network request
    setSubmitted(true);
  };

  return (
    <section className="relative w-full bg-gray-200 py-16 md:py-24 overflow-hidden font-jakarta">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#00235A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="relative mx-auto px-6 md:px-12 max-w-[1200px]">
        {/* Section Label */}
        <div className="flex flex-col items-center gap-3 text-center mb-14">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[22px] font-bold tracking-wide">
              Let&apos;s Connect
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-dark max-w-[800px]">
            Ready to Turn Your eCommerce Idea Into a Scalable Product?
          </h2>
          <p className="text-sm md:text-base text-grey font-medium leading-relaxed max-w-[540px]">
            Book a free 30-minute discovery call to discuss your business model, challenges, and growth goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: How it Works */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-bold text-dark mb-2">
                How Does It Work?
              </h3>
              <p className="text-sm text-grey font-medium leading-relaxed">
                Getting started is simple. Here&apos;s what happens after you
                send your message:
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
              <p className="text-sm font-bold text-dark">Why eCommerce brands trust us:</p>
              {[
                "Proven expertise in custom storefronts & marketplaces",
                "Senior engineering talent with retail domain knowledge",
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
          <div className="bg-white/65 border border-gray-100 rounded-3xl shadow-[0_8px_48px_rgba(0,0,0,0.08)] p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-5 py-12">
                <div className="w-16 h-16 rounded-full bg-green/10 border border-green/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Message Sent!</h3>
                <p className="text-grey font-medium text-sm leading-relaxed max-w-xs">
                  Thank you! Our eCommerce experts will review your request and get back to
                  you within 24 hours.
                </p>
                <Link href="/contact-us">
                  <button className="mt-2 px-6 py-3 bg-navy text-white rounded-full text-sm font-bold hover:bg-[#003080] transition-all duration-300">
                    Go to Full Contact Page
                  </button>
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
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
                      type="text"
                      placeholder="John Smith"
                      {...register("name")}
                      className={`w-full bg-white px-4 py-3 rounded-xl border text-sm font-medium text-dark placeholder:text-grey/50 focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500/30"
                          : "border-gray-200 focus:ring-green/30 focus:border-green/50"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs font-semibold">
                        {errors.name.message}
                      </span>
                    )}
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
                      type="email"
                      placeholder="john@company.com"
                      {...register("email")}
                      className={`w-full bg-white px-4 py-3 rounded-xl border text-sm font-medium text-dark placeholder:text-grey/50 focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500/30"
                          : "border-gray-200 focus:ring-green/30 focus:border-green/50"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs font-semibold">
                        {errors.email.message}
                      </span>
                    )}
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
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      id="projectType"
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl border text-sm font-medium text-dark focus:outline-none focus:ring-2 transition-all duration-200 bg-white ${
                        errors.projectType
                          ? "border-red-500 focus:ring-red-500/30"
                          : "border-gray-200 focus:ring-green/30 focus:border-green/50"
                      }`}
                    >
                      <span>
                        {watchProjectType || "Select project type..."}
                      </span>
                      <ChevronDown className="w-4 h-4 opacity-50" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[--anchor-width] z-50">
                      {projectTypes.slice(1).map((type, idx) => (
                        <DropdownMenuItem
                          key={idx}
                          onClick={() =>
                            setValue("projectType", type, {
                              shouldValidate: true,
                            })
                          }
                          className="cursor-pointer"
                        >
                          {type}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {errors.projectType && (
                    <span className="text-red-500 text-xs font-semibold">
                      {errors.projectType.message}
                    </span>
                  )}
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="budget"
                    className="text-xs font-bold text-dark/70 uppercase tracking-wider"
                  >
                    Budget Range
                  </label>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      id="budget"
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-dark focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 transition-all duration-200 bg-white"
                    >
                      <span>{watchBudget || "Select budget range..."}</span>
                      <ChevronDown className="w-4 h-4 opacity-50" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[--anchor-width] z-50">
                      {budgetRanges.slice(1).map((range, idx) => (
                        <DropdownMenuItem
                          key={idx}
                          onClick={() =>
                            setValue("budget", range, { shouldValidate: true })
                          }
                          className="cursor-pointer"
                        >
                          {range}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
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
                    rows={4}
                    placeholder="Tell us about your project — what you're building, your target users, and any specific requirements..."
                    {...register("message")}
                    className={`w-full bg-white px-4 py-3 rounded-xl border text-sm font-medium text-dark placeholder:text-grey/50 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500/30"
                        : "border-gray-200 focus:ring-green/30 focus:border-green/50"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs font-semibold">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-navy text-white font-bold rounded-xl hover:bg-[#003080] disabled:bg-navy/70 transition-all duration-300 hover:shadow-lg text-sm tracking-wide mt-1 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

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
