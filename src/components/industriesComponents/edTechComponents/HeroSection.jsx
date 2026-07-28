import { Button } from "@/components/ui/button";
import CustomButton from "@/components/customs/customButton";

export default function HeroSection() {
  return (
    <section className="relative w-full h-full lg:min-h-[700px] flex flex-col items-center justify-center lg:pt-28 pt-20 pb-20 overflow-hidden bg-white animate-in fade-in slide-in-from-top-14 duration-500">
      {/* Background Abstract Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Left Blur */}
        <div className="absolute w-[608px] h-[498px] left-[17px] top-[17px] bg-[#E5F6FE] blur-[35.55px] rounded-full" />

        {/* Right Blur */}
        <div className="absolute w-[386px] h-[386px] left-[60%] lg:left-[974px] top-[150px] lg:top-[243px] bg-[rgba(164,255,225,0.95)] blur-[150px] rounded-full" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1200px] px-12 gap-12">
        {/* Headings */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-[28px] sm:text-[40px] lg:text-[50px] sm:leading-[1.2] lg:leading-[68px] font-bold font-jakarta capitalize text-navy max-w-[900px]">
            Build an EdTech Product <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0] drop-shadow-sm">
              Learners Want to Use
            </span>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[1.5] font-medium font-jakarta tracking-wide text-grey max-w-[823px]">
            Softmind Solutions provides EdTech software development for startups in the USA and MENA. <br className="hidden md:block" /> 
            <span className="text-navy font-semibold">Launch faster. Improve engagement. Scale with confidence.</span>
          </p>
        </div>

        {/* Start Project Button */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <CustomButton btnText="Book a Discovery Call" />
        </div>
      </div>
    </section>
  );
}
