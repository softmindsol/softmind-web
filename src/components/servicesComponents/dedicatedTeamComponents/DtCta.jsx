"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomButton from "@/components/customs/customButton";

export default function DtCta() {
  return (
    <section className="relative w-full bg-gray-100 py-16 overflow-hidden font-jakarta">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#00235A] via-[#003a94] to-[#00235A] rounded-[32px] p-10 lg:p-16 flex flex-col items-center text-center shadow-2xl relative overflow-hidden border border-[#0CBF83]/30"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0CBF83]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#004BC0]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#0CBF83]/5 blur-[80px] rounded-full pointer-events-none" />

          {/* Badge */}
          <div className="relative z-10 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0CBF83] shadow-[0_0_8px_#0CBF83]" />
            <span className="text-[#0CBF83] text-sm font-semibold tracking-widest uppercase">
              Build Your Dedicated Team
            </span>
          </div>

          <h2 className="relative z-10 text-3xl md:text-4xl lg:text-[50px] font-bold text-white mb-5 leading-tight max-w-[760px]">
            Build Your Team Around{" "}
            <span className="text-[#0CBF83]">Your Product</span>
          </h2>

          <p className="relative z-10 text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-[680px] mb-3">
            Whether you need one dedicated developer or a complete product engineering team, Softmind
            gives you the flexibility to build around your actual requirements.
          </p>

          <p className="relative z-10 text-white/60 text-sm font-medium mb-10">
            Hire a developer. Get Project Management and QA free. Scale when you need to.
          </p>

          <div className="relative z-10">
            <Link href="/contact-us">
              <CustomButton btnText="Build My Dedicated Team" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
