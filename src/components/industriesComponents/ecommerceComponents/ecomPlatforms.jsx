"use client";
import React from "react";
import { motion } from "framer-motion";

const platforms = [
  {
    name: "Shopify & Shopify Plus",
    desc: "D2C brands that need fast launch, easy management, and room to scale.",
    logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
  },
  {
    name: "WooCommerce",
    desc: "Content-led stores that need flexibility and deep WordPress customisation.",
    logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
  },
  {
    name: "Headless — Next.js & React",
    desc: "Brands that want complete frontend control, faster performance, and greater flexibility.",
    logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "Magento / Adobe Commerce",
    desc: "Large catalogs, multi-store operations, and complex enterprise requirements.",
    logo: "https://cdn.worldvectorlogo.com/logos/magento.svg",
  },
  {
    name: "BigCommerce",
    desc: "B2B and mid-market businesses that need strong multi-channel capabilities.",
    logo: "https://cdn.worldvectorlogo.com/logos/bigcommerce-1.svg",
  },
  {
    name: "Custom Development",
    desc: "Marketplaces and unique business models that off-the-shelf platforms cannot support.",
    logo: "https://cdn.worldvectorlogo.com/logos/node-js-7.svg",
  },
];

export default function EcomPlatforms() {
  return (
    <section className="relative w-full py-20 lg:py-24 bg-[#161616] font-jakarta overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-navy/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative mx-auto px-6 md:px-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="text-white text-[20px] font-bold tracking-wide">
              Platforms We Build With
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-white mb-4 max-w-3xl mx-auto">
            The Right Platform for{" "}
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0]">
              Where You&apos;re Going
            </p>
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-[400px] mx-auto font-medium leading-relaxed">
            You are not locked into one technology. Your platform is selected
            around your business model, growth plans, operational needs, and
            customer experience. <br />
            <span className="text-white font-bold mt-4 inline-block">
              Choose for the Next Stage not Just the Launch
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {platforms.map((platform, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green/50 transition-all duration-300 group"
            >
              <div className="h-12 w-auto mb-6 flex justify-start">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-full w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 filter brightness-200 group-hover:filter-none group-hover:brightness-100"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {platform.name}
              </h3>
              <p className="text-white/60 font-medium text-sm leading-relaxed">
                {platform.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
