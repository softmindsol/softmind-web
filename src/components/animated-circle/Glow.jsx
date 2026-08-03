"use client";

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { GLOW_COLORS } from '@/utils/animationConfig';

export const Glow = forwardRef(({}, ref) => {
  return (
    <div 
      ref={ref} 
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
    >
      {/* Cyan Glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px] mix-blend-screen"
        style={{ background: `radial-gradient(circle, ${GLOW_COLORS.cyan} 0%, transparent 70%)` }}
      />
      {/* Blue Glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] mix-blend-screen translate-x-[10%] translate-y-[-10%]"
        style={{ background: `radial-gradient(circle, ${GLOW_COLORS.blue} 0%, transparent 70%)` }}
      />
      {/* Purple Glow */}
      <motion.div
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.8, 1.0, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full blur-[150px] mix-blend-screen translate-x-[-5%] translate-y-[5%]"
        style={{ background: `radial-gradient(circle, ${GLOW_COLORS.purple} 0%, transparent 70%)` }}
      />
    </div>
  );
});

Glow.displayName = 'Glow';
