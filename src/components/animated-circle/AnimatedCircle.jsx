"use client";

import { useRef } from 'react';
import { Glow } from './Glow';
import { AnimatedRing } from './AnimatedRing';
import { CenterButton } from './CenterButton';
import { HeadingReveal } from './HeadingReveal';
import { RINGS_CONFIG } from '@/utils/animationConfig';
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
      className="relative w-full min-h-[150vh] bg-white overflow-hidden"
    >
      {/* 
        Sticky container keeps the visualization centered while we scroll 
        through the section's height (150vh) to allow for the parallax effects 
        to play out fully before the user leaves the section.
      */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* Layer 1: Blurred Background Glow */}
        <Glow ref={glowRef} />

        {/* Layer 2: Concentric Animated SVG Rings */}
        <div 
          ref={ringsContainerRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform z-10 perspective-1000"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {RINGS_CONFIG.map((config, index) => (
            <AnimatedRing
              key={`ring-${index}`}
              {...config}
            />
          ))}
        </div>

        {/* Layer 3: Interactive Center Button */}
        <div ref={centerRef} className="absolute z-20">
          <CenterButton />
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
