import Link from "next/link";
import { Button } from "../ui/button";
import { Typewriter } from "../ui/typewriter";
import CustomButton from "../customs/customButton";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[600px] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Soft Background Gradient Mesh */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Left Light Blue Blur */}
        <div className="absolute w-[800px] h-[600px] -left-[200px] -top-[100px] bg-[#E5F6FE] blur-[120px] rounded-full opacity-60" />

        {/* Right Light Green Blur */}
        <div className="absolute w-[600px] h-[500px] -right-[100px] top-[50px] bg-[rgba(164,255,225,0.8)] blur-[150px] rounded-full opacity-50" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[850px] px-6 sm:px-12 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {/* Headings */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] sm:leading-[1.1] lg:leading-[1.15] font-bold font-jakarta tracking-tight">
            <h1 className="text-navy block mb-1">Building Scalable</h1>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0] drop-shadow-sm">
              <Typewriter
                phrases={["Solutions With Trust"]}
                cursor={false}
                typingSpeed={70}
              />
            </h1>
          </h1>

          <p className="text-[16px] md:text-[18px] leading-[1.6] font-medium font-jakarta text-grey max-w-[760px] mt-4">
            SoftMind Solutions is a leading custom software development company
            engineering high-performance web apps, mobile solutions, AI
            platforms, and SaaS products for startups and enterprises worldwide
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
          <Link href="/contact">
            <CustomButton btnText="Start a Project" />
          </Link>
          <Link href="/services">
            <Button variant="outline" className="px-8 py-5">
              View Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
