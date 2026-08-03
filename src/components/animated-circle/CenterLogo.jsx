"use client";

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GLOW_COLORS = {
  cyan: "rgba(6, 182, 212, 0.4)",
  blue: "rgba(59, 130, 246, 0.3)",
};

export function CenterLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          y: [-15, 15, -15],
          boxShadow: isHovered 
            ? `0 0 80px 30px ${GLOW_COLORS.cyan}` 
            : `0 0 40px 10px ${GLOW_COLORS.blue}`,
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 0.4 }
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden group cursor-pointer"
      >
        {/* Inner ripple effect on hover */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? { scale: 1.5, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full"
        />

        {/* Inner pulsing border */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-2 rounded-full border border-cyan-400/20"
        />

        {/* User Logo */}
        <motion.div
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative z-10 flex items-center justify-center w-full h-full p-6"
        >
          {/* Using softmindsol-logo.svg from public folder */}
          <Image 
            src="/images/softmindsol-logo.svg" 
            alt="Logo" 
            fill
            className="object-contain p-8 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" 
          />
        </motion.div>
      </motion.button>
    </div>
  );
}
