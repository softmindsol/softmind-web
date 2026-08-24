"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomButton from "@/components/customs/customButton";

export default function MvpCta() {
  return (
    <section className="relative w-full bg-[#111111] py-20 overflow-hidden font-jakarta">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#00235A] via-[#004BC0] to-[#00235A] rounded-[32px] p-10 lg:p-16 flex flex-col items-center text-center shadow-2xl relative overflow-hidden border border-[#0CBF83]/30"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0CBF83]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00235A] rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-white mb-4 relative z-10 leading-tight">
            Ready to Validate Your{" "}
            <br className="hidden md:block" />
            <span className="text-[#0CBF83]">Product Idea?</span>
          </h2>

          <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-[700px] mb-4 relative z-10">
            Don&apos;t spend months building a product before discovering whether
            the market wants it.
          </p>

          <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed max-w-[650px] mb-8 relative z-10">
            Partner with Softmind to turn your idea into a focused, functional
            MVP — launch it faster, learn from real users, and build your next
            stage with confidence.
          </p>

          <p className="text-[#0CBF83] font-bold text-lg mb-6 relative z-10">
            Have an idea? Let&apos;s turn it into an MVP.
          </p>

          <div className="relative z-10">
            <Link href="/contact">
              <CustomButton btnText="Start Your MVP Project" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
