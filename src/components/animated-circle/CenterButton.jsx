"use client";

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { GLOW_COLORS } from '@/utils/animationConfig';

export function CenterButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          y: [-10, 10, -10],
          boxShadow: isHovered 
            ? `0 0 60px 20px ${GLOW_COLORS.cyan}` 
            : `0 0 30px 5px ${GLOW_COLORS.blue}`,
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 0.3 }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto relative flex items-center justify-center w-24 h-24 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl overflow-hidden group cursor-pointer"
      >
        {/* Inner ripple effect on hover */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? { scale: 1.5, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full"
        />

        {/* Inner pulsing border */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-2 rounded-full border border-cyan-400/30"
        />

        {/* Icon */}
        <motion.div
          animate={isHovered ? { rotate: 45, scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative z-10 text-cyan-50"
        >
          <Rocket size={32} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </div>
  );
}
