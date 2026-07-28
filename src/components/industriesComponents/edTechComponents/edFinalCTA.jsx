import React from "react";
import { Button } from "@/components/ui/button";
import CustomButton from "@/components/customs/customButton";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-24 bg-[#00235A] overflow-hidden font-jakarta">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full">
        {/* Glow left */}
        <div className="absolute top-0 left-[-20%] w-[500px] h-[500px] bg-[#0CBF83] blur-[150px] opacity-20 rounded-full mix-blend-screen pointer-events-none" />
        {/* Glow right */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#004BC0] blur-[150px] opacity-30 rounded-full mix-blend-screen pointer-events-none" />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto px-6 lg:px-12 max-w-[800px] flex flex-col items-center text-center">
        <div className="inline-flex px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-8">
          <span className="text-[#0CBF83] text-sm font-bold tracking-widest uppercase">
            Start Today
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.2] font-extrabold tracking-tight text-white mb-6">
          Ready to Build Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-white">
            EdTech Product?
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-10 max-w-[600px]">
          Tell us what you are building. We will help you define the smartest next step to launch and scale.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <CustomButton btnText="Start Your EdTech Project" />
          <Button variant="outline" className="h-[52px] px-8 rounded-[12px] bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-bold text-[15px] sm:w-auto w-full transition-all duration-300">
            Talk to an EdTech Specialist
          </Button>
        </div>
      </div>
    </section>
  );
}
