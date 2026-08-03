"use client";

import { useRef } from 'react';
import { Glow } from './Glow';
import { CanvasProdigyRings } from './CanvasProdigyRings';
import { CenterLogo } from './CenterLogo';
import { HeadingReveal } from './HeadingReveal';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLenis } from '@/hooks/useLenis';

export default function AnimatedCircle() {
  // Initialize smooth scrolling
  useLenis();

  // Refs for ScrollTrigger animations
  const containerRef = useRef(null);
  const glowRef = useRef(null);
  const ringsContainerRef = useRef(null);
  const centerRef = useRef(null);
  const headingRef = useRef(null);

  // Initialize ScrollTrigger animations
  useScrollAnimation({
    containerRef,
    glowRef,
    ringsContainerRef,
    centerRef,
    headingRef,
  });

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[150vh] bg-black overflow-hidden"
    >
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* Layer 1: Blurred Background Glow */}
        <Glow ref={glowRef} />

        {/* Layer 2: High-Fidelity Canvas Prodigy Rings */}
        <div 
          ref={ringsContainerRef}
          className="absolute inset-0 z-10 will-change-transform perspective-1000"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <CanvasProdigyRings />
        </div>

        {/* Layer 3: Interactive Center Logo */}
        <div ref={centerRef} className="absolute z-20">
          <CenterLogo />
        </div>

        {/* Layer 4: Staggered Text Reveal */}
        <HeadingReveal 
          ref={headingRef}
          text="The Future of Interactivity"
          subtitle="Pixel-perfect, continuous motion designed for the modern web."
        />
        
      </div>
    </section>
  );
}
