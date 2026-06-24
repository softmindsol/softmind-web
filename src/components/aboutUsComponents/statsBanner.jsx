import React from "react";

export default function StatsBanner() {
  return (
    <section className="relative w-full py-16 bg-[#ffffff] font-jakarta flex justify-center">
      <div className="relative w-full px-6 sm:px-12">
        {/* Banner Container */}
        <div className="relative w-full bg-[#161616] rounded-2xl overflow-hidden py-10 px-8 sm:py-12 sm:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[-100px] w-[500px] h-[500px] bg-[#00235A] rounded-full blur-[150px] opacity-80 pointer-events-none" />

          {/* Stat 1 */}
          <div className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/4">
            <span className="font-bold text-[36px] sm:text-[42px] leading-tight text-white mb-1">
              95%
            </span>
            <span className="font-bold text-[14px] sm:text-[16px] leading-snug text-white tracking-wide">
              Client Satisfaction Rate
            </span>
          </div>

          {/* Divider 1 */}
          <div className="hidden lg:block relative z-10 w-[2px] h-[80px] bg-white/20 rounded-full" />
          <div className="lg:hidden relative z-10 w-full h-[1px] bg-white/20 rounded-full" />

          {/* Stat 2 */}
          <div className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/4">
            <span className="font-bold text-[36px] sm:text-[42px] leading-tight text-white mb-1">
              Zero
            </span>
            <span className="font-bold text-[14px] sm:text-[16px] leading-snug text-white tracking-wide">
              Detractors
            </span>
          </div>

          {/* Divider 2 */}
          <div className="hidden lg:block relative z-10 w-[2px] h-[80px] bg-white/20 rounded-full" />
          <div className="lg:hidden relative z-10 w-full h-[1px] bg-white/20 rounded-full" />

          {/* Stat 3 */}
          <div className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/4">
            <span className="font-bold text-[36px] sm:text-[42px] leading-tight text-white mb-1">
              89.9
            </span>
            <span className="font-bold text-[14px] sm:text-[16px] leading-snug text-white tracking-wide">
              Net promoter Score
            </span>
          </div>

          {/* Divider 3 */}
          <div className="hidden lg:block relative z-10 w-[2px] h-[80px] bg-white/20 rounded-full" />
          <div className="lg:hidden relative z-10 w-full h-[1px] bg-white/20 rounded-full" />

          {/* Stat 4 */}
          <div className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/4">
            <span className="font-bold text-[36px] sm:text-[42px] leading-tight text-white mb-1">
              Avg. 6 years
            </span>
            <span className="font-bold text-[14px] sm:text-[16px] leading-snug text-white tracking-wide">
              Client Relationship
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
