import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation({
  containerRef,
  glowRef,
  ringsContainerRef,
  centerRef,
  headingRef,
}) {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Entrance Animation Sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "top 25%",
          toggleActions: "play none none reverse",
        }
      });

      // Background/Glow fade in
      if (glowRef.current) {
        tl.fromTo(glowRef.current, 
          { opacity: 0, scale: 0.8 }, 
          { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }, 
          0
        );
      }

      // Rings scale in
      if (ringsContainerRef.current) {
        tl.fromTo(ringsContainerRef.current,
          { opacity: 0, scale: 0.9, rotationX: 15 },
          { opacity: 1, scale: 1, rotationX: 0, duration: 1.5, ease: "power3.out" },
          0.2
        );
      }

      // Center Icon appears
      if (centerRef.current) {
        tl.fromTo(centerRef.current,
          { opacity: 0, scale: 0.5, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.5)" },
          0.6
        );
      }

      // Heading Reveal (assumes heading is split into words with class .word)
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll('.word');
        if (words.length > 0) {
          tl.fromTo(words,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power4.out" },
            0.8
          );
        }
      }

      // 2. Parallax Effect linked to Scroll
      // We create a separate ScrollTrigger scrubbing for continuous parallax
      const parallaxTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Start when top of section hits bottom of viewport
          end: "bottom top",   // End when bottom of section hits top of viewport
          scrub: 1, // Smooth scrubbing
        }
      });

      if (glowRef.current) {
        parallaxTl.to(glowRef.current, { y: 150, ease: "none" }, 0);
      }
      if (ringsContainerRef.current) {
        parallaxTl.to(ringsContainerRef.current, { y: 50, ease: "none" }, 0);
      }
      if (centerRef.current) {
        parallaxTl.to(centerRef.current, { y: -50, ease: "none" }, 0);
      }
      if (headingRef.current) {
        parallaxTl.to(headingRef.current, { y: -100, ease: "none" }, 0);
      }

    }, containerRef); // Scope everything to the container

    return () => ctx.revert(); // Cleanup
  }, [containerRef, glowRef, ringsContainerRef, centerRef, headingRef]);
}
