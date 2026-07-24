"use client";
import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Senior Expertise From Day One",
    description: "Your project is handled by experienced engineers who understand both technology and commerce. You benefit from stronger decisions around performance, checkout, scalability, and customer experience from the very first sprint.",
  },
  {
    title: "More Value From Your Development Budget",
    description: "Access senior eCommerce expertise at offshore rates, typically 40–60% lower than US and UK agency pricing. You preserve more runway without compromising engineering quality, delivery standards, or platform performance.",
  },
  {
    title: "Launch Your MVP in 8–12 Weeks",
    description: "Move from idea to market while the opportunity is still open. A focused online store or marketplace MVP can be designed, developed, and launched in 8–12 weeks, giving you a strong foundation without unnecessary delays.",
  },
  {
    title: "Built Around the Metrics That Matter",
    description: "Your platform is shaped around real business outcomes, including conversion rate, average order value, cart abandonment, retention, and repeat purchases. Every technical decision is made with its impact on revenue in mind.",
  },
  {
    title: "Performance Built In From the Start",
    description: "Speed, mobile usability, and Core Web Vitals are treated as core requirements, not post-launch fixes. You get a shopping experience designed to remain fast, responsive, and reliable as traffic and transactions grow.",
  },
  {
    title: "Direct Access to Your Engineering Team",
    description: "Work directly with the people building your platform. No account-manager handoffs or filtered communication, just faster answers, clearer decisions, and complete visibility from discovery to launch.",
  }
];

export default function EcomWhySoftMind() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#00235A] font-jakarta overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12 flex flex-col gap-12">
        
        <div className="flex flex-col gap-4 text-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green" />
            <span className="text-white text-[20px] font-bold tracking-wide">
              Why SoftMind
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold text-white max-w-3xl"
          >
            Why Growing eCommerce Businesses Choose Softmind
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/70 font-medium leading-relaxed"
          >
            Get the experience, speed, and technical quality you need without the cost and complexity of a traditional agency.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-green/20 text-green flex items-center justify-center font-bold shrink-0 mt-1">
                {idx + 1}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                <p className="text-white/70 font-medium text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
