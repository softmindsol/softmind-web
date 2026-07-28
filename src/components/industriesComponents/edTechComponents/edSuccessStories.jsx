import React from "react";
import CustomButton from "@/components/customs/customButton";
import Image from "next/image";
import {
  SoftMindSolLogo,
  SoftMindSolutionLogo,
} from "../../../../public/images";

export default function SuccessStories() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-black overflow-hidden font-jakarta">
      <div
        className="absolute top-[-187px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none opacity-40 blur-[130px]"
        style={{ backgroundColor: "navy" }}
      />
      <div className="absolute select-none pointer-events-none">
        <Image
          src={SoftMindSolutionLogo}
          alt="SoftMindSol Logo"
          className="object-cover opacity-20 max-h-[726px]"
        />
      </div>
      <div className="relative mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[18px] md:text-[22px] font-bold tracking-[1px]">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[58px] font-bold tracking-[1px] capitalize text-white max-w-[800px]">
            EdTech Success Stories Built Around{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
              Product Outcomes
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/80 font-medium max-w-[800px]">
            Explore how Softmind Solutions helps EdTech founders, education
            providers, and corporate learning teams move from product challenges
            to practical, measurable outcomes.
          </p>
        </div>

        {/* Featured Case Study Card */}
        <div className="relative w-full rounded-[2rem] overflow-hidden flex flex-col lg:flex-row gap-12 shadow-2xl p-6">
          {/* Decorative background in dark area */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0CBF83] blur-[150px] opacity-20 pointer-events-none rounded-full" />

          <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center relative z-10">
            <div className="inline-flex px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-xs font-bold tracking-wider uppercase mb-6 w-fit">
              Featured Case Study
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
              Scaling an AI-Powered Corporate LMS to 100,000+ Active Users
            </h3>
            <p className="text-white/80 font-medium text-base mb-8 max-w-[600px] leading-relaxed">
              Discover how we modernized a legacy training platform, implemented
              smart AI recommendations, and built a highly available
              microservices architecture to handle enterprise-scale traffic.
            </p>
            <div className="flex flex-wrap gap-8 mb-10">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#0CBF83] mb-1">
                  40%
                </span>
                <span className="text-sm text-white/70 font-semibold tracking-wide uppercase">
                  Reduction in Churn
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#0CBF83] mb-1">
                  2.5x
                </span>
                <span className="text-sm text-white/70 font-semibold tracking-wide uppercase">
                  Faster Load Times
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#0CBF83] mb-1">
                  100k+
                </span>
                <span className="text-sm text-white/70 font-semibold tracking-wide uppercase">
                  Active Users
                </span>
              </div>
            </div>
            <div>
              <CustomButton btnText="View the Case Study" />
            </div>
          </div>

          <div className="flex-1 relative min-h-[300px] lg:min-h-auto">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Team collaborating on an EdTech platform"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
