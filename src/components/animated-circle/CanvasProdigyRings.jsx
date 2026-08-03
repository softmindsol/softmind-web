"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "rgba(6, 182, 212, 0.4)", // Cyan
  "rgba(59, 130, 246, 0.3)", // Blue
  "rgba(168, 85, 247, 0.2)", // Purple
  "rgba(14, 165, 233, 0.3)", // Light Blue
];

export function CanvasProdigyRings() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set up canvas size
    const resize = () => {
      // Use devicePixelRatio for high-res displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    
    window.addEventListener("resize", resize);
    resize();

    // Generate rings
    const rings = [];
    const numRings = 40; // Dense ring count for that complex look
    const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 0.8;

    for (let i = 0; i < numRings; i++) {
      const radius = 50 + (maxRadius / numRings) * i * (1 + i * 0.02); // Exponential spacing
      const direction = i % 2 === 0 ? 1 : -1;
      const speed = (0.0005 + Math.random() * 0.001) * direction;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const thickness = Math.random() > 0.8 ? 1.5 : 0.5; // Occasional thicker ring
      
      // Dash patterns: mix of long, short, and very sparse dashes
      const dashType = Math.random();
      let dashArray = [];
      if (dashType < 0.3) {
        dashArray = [Math.random() * 10 + 5, Math.random() * 20 + 10]; // standard
      } else if (dashType < 0.6) {
        dashArray = [Math.random() * 50 + 20, Math.random() * 100 + 50]; // long dashes
      } else if (dashType < 0.9) {
        dashArray = [1, Math.random() * 30 + 10]; // dots
      } else {
        dashArray = [Math.random() * 200 + 100, Math.random() * 400 + 200]; // very sparse
      }

      rings.push({
        radius,
        speed,
        color,
        thickness,
        dashArray,
        rotation: Math.random() * Math.PI * 2,
        z: Math.random() * 100, // For pseudo-3D parallax
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Smooth mouse interpolation for parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      rings.forEach((ring) => {
        // Update rotation
        ring.rotation += ring.speed;

        // Apply parallax offset based on ring's "Z" depth
        const parallaxFactor = ring.z * 0.0005;
        const offsetX = centerX + mouseRef.current.x * parallaxFactor * 100;
        const offsetY = centerY + mouseRef.current.y * parallaxFactor * 100;

        ctx.save();
        ctx.translate(offsetX, offsetY);
        ctx.rotate(ring.rotation);

        ctx.beginPath();
        ctx.arc(0, 0, ring.radius, 0, Math.PI * 2);
        
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = ring.thickness;
        ctx.setLineDash(ring.dashArray);
        ctx.lineCap = "round";
        
        // Add subtle glow to thicker rings
        if (ring.thickness > 1) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = ring.color;
        }

        ctx.stroke();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse move listener
    const handleMouseMove = (e) => {
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      mouseRef.current.targetX = normalizedX;
      mouseRef.current.targetY = normalizedY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}
