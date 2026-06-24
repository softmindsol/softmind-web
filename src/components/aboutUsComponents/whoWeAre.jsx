import { Check } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden font-jakarta flex flex-col items-center">
      <div className="w-full px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        {/* Left Side: Image & Badge */}
        <div className="relative w-full max-w-[500px] sm:max-w-[600px] mx-auto h-[350px] sm:h-[450px] lg:h-[550px] flex items-center justify-center lg:justify-start">
          {/* Main Image */}
          <div
            className="w-full h-full rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.14)] bg-gray-200 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop')",
            }}
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 sm:-bottom-16 right-2 sm:-right-4 lg:right-1/4 w-[200px] sm:w-[260px] lg:w-[286px] h-[90px] sm:h-[110px] lg:h-[125px] bg-[#0CBF83] rounded-2xl shadow-[0_4px_30px_rgba(12,191,131,0.2)] flex flex-col items-center justify-center text-white z-10 px-2 text-center">
            <span className="font-bold text-[32px] sm:text-[36px] lg:text-[42px] leading-none tracking-wide mb-1">
              10+
            </span>
            <span className="font-bold text-[14px] sm:text-[16px] lg:text-[20px] leading-tight tracking-wide">
              Years of Excellence
            </span>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-8 sm:gap-10 mt-6 sm:mt-8 lg:mt-0">
          {/* Header */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00235A] to-[#004BC0] shrink-0" />
              <span className="text-[14px] sm:text-[16px] font-bold text-green tracking-wide">
                Who we Are
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-bold text-[#2E2E2E] leading-[1.25] sm:leading-[1.2] capitalize">
              Your Trusted Partner For End-To-End Digital Transformation
            </h2>
            <p className="text-[15px] sm:text-[16px] font-medium text-[#666666] leading-[1.6]">
              Founded in Lahore and serving clients globally, SoftMind Solutions
              combines deep technical expertise with strategic thinking to build
              software that doesn&apos;t just work it grows with your business.
            </p>
          </div>

          {/* List Items */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Item 1 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-[32px] sm:w-[36px] h-[32px] sm:h-[36px] rounded-lg bg-[#00235A]/10 flex items-center justify-center shrink-0 mt-1">
                <Check className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] text-[#00235A] stroke-[3]" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#2E2E2E] tracking-wide">
                  Agile-First Development Culture
                </h3>
                <p className="text-[13px] sm:text-[14px] font-medium text-[#666666] leading-[1.5] sm:leading-[1.4]">
                  Iterative sprints, continuous feedback loops, and transparent
                  communication ensure on-time, on-budget delivery every single
                  time.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-[32px] sm:w-[36px] h-[32px] sm:h-[36px] rounded-lg bg-[#00235A]/10 flex items-center justify-center shrink-0 mt-1">
                <Check className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] text-[#00235A] stroke-[3]" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#2E2E2E] tracking-wide">
                  Full-Stack & AI Engineering Expertise
                </h3>
                <p className="text-[13px] sm:text-[14px] font-medium text-[#666666] leading-[1.5] sm:leading-[1.4]">
                  From frontend interfaces to AI-powered backend systems our
                  engineers are seasoned across the entire modern tech stack.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-[32px] sm:w-[36px] h-[32px] sm:h-[36px] rounded-lg bg-[#00235A]/10 flex items-center justify-center shrink-0 mt-1">
                <Check className="w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] text-[#00235A] stroke-[3]" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="text-[15px] sm:text-[16px] font-bold text-[#2E2E2E] tracking-wide">
                  Global Timezone Flexibility
                </h3>
                <p className="text-[13px] sm:text-[14px] font-medium text-[#666666] leading-[1.5] sm:leading-[1.4]">
                  From frontend interfaces to AI-powered backend systems our
                  engineers are seasoned across the entire modern tech stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
