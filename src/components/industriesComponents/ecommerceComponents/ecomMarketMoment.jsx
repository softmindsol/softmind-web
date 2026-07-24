"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, ShoppingBag, Settings, Scaling } from "lucide-react";
import Image from "next/image";
import { SoftMindSolutionLogo } from "../../../../public/images";

const stats = [
  {
    icon: <Zap className="w-6 h-6 text-green" />,
    label: "Fast, responsive storefronts",
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-green" />,
    label: "Frictionless checkout journeys",
  },
  {
    icon: <Settings className="w-6 h-6 text-green" />,
    label: "Reliable integrations and operations",
  },
  {
    icon: <Scaling className="w-6 h-6 text-green" />,
    label: "Technology that scales with demand",
  },
];

export default function EcomMarketMoment() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-black font-jakarta overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy blur-[180px] rounded-full pointer-events-none opacity-100" />

      <div className="absolute top-0 left-0 select-none pointer-events-none">
        <Image
          src={SoftMindSolutionLogo}
          alt="SoftMindSol Logo"
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[20px] font-bold tracking-wide">
              The Market Moment
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-white"
          >
            The eCommerce Opportunity Is Growing. So Is the Cost of Getting It
            Wrong.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-white/80 font-medium leading-relaxed"
          >
            Global eCommerce sales are projected to reach $6.88 trillion in
            2026. But in a crowded market, a great product alone is not enough.
            <br />
            Growth depends on the experience behind every sale.
          </motion.p>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-gray-100 rounded-2xl p-6 border border-gray-100 flex items-center gap-4 hover:shadow-[0_8px_40px_rgba(12,191,131,0.08)] transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div>
                <p className="text-lg font-bold leading-tight text-dark">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
