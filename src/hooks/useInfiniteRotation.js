import { useEffect } from 'react';
import gsap from 'gsap';

export function useInfiniteRotation({ ref, duration, direction, isSVG = false }) {
  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // For SVG elements, we might want to rotate around transformOrigin
      if (isSVG) {
        gsap.set(ref.current, { transformOrigin: "50% 50%" });
      }

      gsap.to(ref.current, {
        rotation: 360 * direction,
        duration: duration,
        repeat: -1,
        ease: "none",
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, duration, direction, isSVG]);
}
