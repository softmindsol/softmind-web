"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Lightbulb, Target } from "lucide-react";

const benefits = [
  "Validate your product idea before full-scale development",
  "Focus investment on high-value features",
  "Test your product with real users",
  "Identify usability and market gaps early",
  "Collect feedback to guide future development",
  "Accelerate time to market",
  "Build a scalable technical foundation from the start",
  "Create a stronger case for investors and stakeholders",
];

const MvpBuildSmarter = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-black">
      <div className="container w-full mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy text-white font-medium text-sm w-fit border border-navy">
              <Lightbulb className="w-4 h-4" />
              <span>Smart MVP Approach</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Build Smarter With a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green">
                Data-Driven MVP
              </span>
            </h2>

            <p className="text-lg text-white/80 leading-relaxed mt-2">
              A successful MVP is more than a product with fewer features. It is
              a focused version of your product designed to test assumptions,
              solve a real customer problem, and generate market insights before
              you make a larger investment.
            </p>

            <div className="flex gap-4 mt-4">
              <div className="flex flex-col p-4 bg-gray-200 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 w-1/2">
                <Target className="w-8 h-8 text-indigo-500 mb-3" />
                <h4 className="font-semibold text-gray-900">Laser Focused</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Targeting the most critical user needs.
                </p>
              </div>
              <div className="flex flex-col p-4 bg-gray-200 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 w-1/2">
                <TrendingUp className="w-8 h-8 text-blue-500 mb-3" />
                <h4 className="font-semibold text-gray-900">Insight Driven</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Learning from real market behavior.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-200 rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">
              Our MVP development process helps you:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 relative z-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 leading-snug">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MvpBuildSmarter;
