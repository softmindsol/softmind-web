"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CountUp = ({ from = 0, to, duration = 2, decimals = 0, prefix = "", suffix = "", text = null }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && to !== undefined) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(from + (to - from) * easeOut);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {text !== null ? text : (
        <>
          {prefix}
          {count.toFixed(decimals)}
          {suffix}
        </>
      )}
    </span>
  );
};

export default function StatsBanner() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full py-16 bg-[#ffffff] font-jakarta flex justify-center">
      <div className="relative w-full px-6 sm:px-12">
        {/* Banner Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full bg-[#161616] rounded-2xl overflow-hidden py-10 px-8 sm:py-12 sm:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 shadow-2xl"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[-100px] w-[500px] h-[500px] bg-[#00235A] rounded-full blur-[150px] opacity-80 pointer-events-none" />

          {/* Stat 1 */}
          <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/4">
            <span className="font-bold text-[36px] sm:text-[42px] leading-tight text-white mb-1">
              <CountUp to={95} suffix="%" />
            </span>
            <span className="font-bold text-[14px] sm:text-[16px] leading-snug text-white tracking-wide">
              Client Satisfaction Rate
            </span>
          </motion.div>

          {/* Divider 1 */}
          <motion.div variants={itemVariants} className="hidden lg:block relative z-10 w-[2px] h-[80px] bg-white/20 rounded-full" />
          <motion.div variants={itemVariants} className="lg:hidden relative z-10 w-full h-[1px] bg-white/20 rounded-full" />

          {/* Stat 2 */}
          <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/4">
            <span className="font-bold text-[36px] sm:text-[42px] leading-tight text-white mb-1">
              <CountUp text="Zero" />
            </span>
            <span className="font-bold text-[14px] sm:text-[16px] leading-snug text-white tracking-wide">
              Detractors
            </span>
          </motion.div>

          {/* Divider 2 */}
          <motion.div variants={itemVariants} className="hidden lg:block relative z-10 w-[2px] h-[80px] bg-white/20 rounded-full" />
          <motion.div variants={itemVariants} className="lg:hidden relative z-10 w-full h-[1px] bg-white/20 rounded-full" />

          {/* Stat 3 */}
          <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/4">
            <span className="font-bold text-[36px] sm:text-[42px] leading-tight text-white mb-1">
              <CountUp to={89.9} decimals={1} />
            </span>
            <span className="font-bold text-[14px] sm:text-[16px] leading-snug text-white tracking-wide">
              Net promoter Score
            </span>
          </motion.div>

          {/* Divider 3 */}
          <motion.div variants={itemVariants} className="hidden lg:block relative z-10 w-[2px] h-[80px] bg-white/20 rounded-full" />
          <motion.div variants={itemVariants} className="lg:hidden relative z-10 w-full h-[1px] bg-white/20 rounded-full" />

          {/* Stat 4 */}
          <motion.div variants={itemVariants} className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/4">
            <span className="font-bold text-[36px] sm:text-[42px] leading-tight text-white mb-1">
              <CountUp to={6} prefix="Avg. " suffix=" years" />
            </span>
            <span className="font-bold text-[14px] sm:text-[16px] leading-snug text-white tracking-wide">
              Client Relationship
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
