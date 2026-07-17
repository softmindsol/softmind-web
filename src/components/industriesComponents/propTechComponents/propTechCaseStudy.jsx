"use client";
import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

const PropTechCaseStudy = () => {
  return (
    <section className="relative w-full bg-[#161616] py-20 lg:py-24 font-jakarta overflow-hidden">
      <div className="relative z-10 mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center space-y-4 mb-16 lg:mb-20 text-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-navy to-[#004BC0]" />
            <h3 className="text-[20px] lg:text-[22px] font-bold tracking-[1px] text-green">
              Case Study Section
            </h3>
          </div>
          <h2 className="max-w-[870px] text-[32px] md:text-[46px] font-bold leading-[1.2] lg:leading-[58px] tracking-[1px] text-white capitalize">
            PropTech Success Stories Built Around Real Results
          </h2>
          <p className="text-[16px] lg:text-[18px] text-white/80 leading-[28px] max-w-[990px] mt-4">
            Explore how we help startups and real estate businesses replace
            manual processes, launch new digital products, improve customer
            experiences, and create more efficient operations. Our work
            demonstrates how the right technology can reduce friction,
            accelerate growth, and turn property data into business value.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row bg-[#F8F9FA] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          {/* Case Study Content */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Modernizing Real Estate Operations
            </h3>
            <p className="text-grey mb-6">
              A comprehensive look at how we helped a leading real estate firm
              automate their workflows and increase tenant satisfaction through
              a custom-built management portal.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-3xl font-bold text-navy mb-1">40%</h4>
                <p className="text-sm text-grey">Reduction in admin time</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-navy mb-1">2.5x</h4>
                <p className="text-sm text-grey">Increase in user engagement</p>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full group font-bold hover:bg-green transition-colors w-fit">
              Read Full Case Study{" "}
              <TbArrowUpRight className="text-xl group-hover:rotate-45 transition-all" />
            </button>
          </div>
          <div className="flex-1 bg-slate-200 relative min-h-[300px] lg:min-h-auto">
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-navy/30 flex items-center justify-center text-navy/40 font-bold text-2xl">
              Project Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropTechCaseStudy;
