"use client";

import React from "react";
import Link from "next/link";
import CustomButton from "@/components/customs/customButton";

export default function WebAppCta() {
  return (
    <section className="relative w-full bg-[#111111] py-20 overflow-hidden font-jakarta">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-gradient-to-r from-[#00235A] via-[#004BC0] to-[#00235A] rounded-[32px] p-10 lg:p-16 flex flex-col items-center text-center shadow-2xl relative overflow-hidden border border-[#0CBF83]/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0CBF83]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00235A] rounded-full blur-[100px] pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-white mb-6 relative z-10 leading-tight">
            From Web App Idea to <br className="hidden md:block" />
            <span className="text-[#0CBF83]">Scalable Digital Product</span>
          </h2>
          <div className="relative z-10">
            <Link href="/contact">
              <CustomButton btnText="Talk to Our Web App Development Experts" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
