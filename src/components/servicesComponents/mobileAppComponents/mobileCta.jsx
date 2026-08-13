import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MobileCta = () => {
  return (
    <section className="bg-navy font-jakarta py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-[36px] sm:text-[48px] font-extrabold text-white tracking-tight leading-tight mb-6">
          Custom Mobile Apps Built Around{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-blue-400">
            Your Business
          </span>
        </h2>
        <p className="text-[18px] sm:text-[20px] text-white/80 font-medium mb-10 max-w-[600px] mx-auto">
          Turn your mobile app idea into a product users rely on.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-green hover:bg-green/90 text-white px-8 py-4 rounded-full font-bold text-[16px] transition-all duration-300 shadow-[0_10px_20px_rgba(12,191,131,0.3)] hover:shadow-[0_15px_25px_rgba(12,191,131,0.4)] hover:-translate-y-1"
        >
          Start Your Mobile App Project
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default MobileCta;
