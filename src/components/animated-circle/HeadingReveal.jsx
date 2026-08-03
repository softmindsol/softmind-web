"use client";

import { forwardRef } from 'react';

export const HeadingReveal = forwardRef(({ text, subtitle }, ref) => {
  // Split text by space to wrap each word in a span for GSAP staggering
  const words = text.split(" ").map((word, index) => (
    <span key={index} className="word inline-block mr-[0.3em] opacity-0 translate-y-8 will-change-transform">
      {word}
    </span>
  ));

  return (
    <div ref={ref} className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
      <div className="mt-64 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 drop-shadow-sm leading-tight">
          {words}
        </h2>
        {subtitle && (
          <p className="word text-xl md:text-2xl text-slate-600 font-medium opacity-0 translate-y-8 will-change-transform max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
});

HeadingReveal.displayName = 'HeadingReveal';
