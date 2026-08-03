"use client";

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useInfiniteRotation } from '@/hooks/useInfiniteRotation';

export function AnimatedRing({
  radius,
  thickness,
  duration,
  direction,
  dashArray,
  parallaxSpeed,
  color,
  opacity,
}) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  
  // Apply infinite rotation to the SVG itself
  useInfiniteRotation({
    ref: svgRef,
    duration,
    direction,
    isSVG: false, // We're animating the DOM element SVG, so standard transform origin 50% 50% applies natively via CSS
  });

  // Apply parallax linked to scroll
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        y: -100 * parallaxSpeed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [parallaxSpeed]);

  const size = radius * 2 + thickness * 2;
  const center = size / 2;

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform z-10"
    >
      <svg
        ref={svgRef}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="will-change-transform"
        style={{ opacity }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeDasharray={dashArray}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
