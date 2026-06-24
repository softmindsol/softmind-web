import { Target, Gem } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="relative w-full py-24 bg-[#161616] overflow-hidden font-jakarta flex flex-col items-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#00235A] rounded-full blur-[180px] opacity-60 pointer-events-none" />

      <div className="relative z-10 w-full px-6 sm:px-12 flex flex-col items-center gap-16">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00235A] to-[#004BC0]" />
            <span className="text-[18px] sm:text-[22px] font-bold text-green tracking-wide">
              Mission & Vision
            </span>
          </div>
          <h2 className="text-[36px] sm:text-[46px] font-bold text-white leading-tight capitalize max-w-[950px]">
            Purpose Written Into Every Line Of Code.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Mission Card */}
          <div className="flex flex-col p-8 sm:p-12 rounded-[20px] bg-white/[0.02] border border-white/5 hover:border-green transition-colors duration-300">
            {/* Icon */}
            <div className="w-[46px] h-[46px] rounded-full bg-[#1C1C1C] border border-green flex items-center justify-center mb-8">
              <Target className="w-5 h-5 text-white" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00235A] to-[#004BC0]" />
                <span className="text-[16px] font-bold text-green tracking-wide">
                  Our Mission
                </span>
              </div>

              <h3 className="text-[22px] font-bold text-white leading-snug">
                Purpose written into every line of code.
              </h3>

              <p className="text-[16px] sm:text-[18px] font-medium text-gray-400 leading-[1.6]">
                To partner with visionary teams and craft intelligent, scalable
                digital products that solve real problems and unlock measurable
                growth.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="flex flex-col p-8 sm:p-12 rounded-[20px] bg-white/[0.02] border border-white/5 hover:border-green transition-colors duration-300">
            {/* Icon */}
            <div className="w-[46px] h-[46px] rounded-full bg-[#1C1C1C] border border-green flex items-center justify-center mb-8">
              <Gem className="w-5 h-5 text-white" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00235A] to-[#004BC0]" />
                <span className="text-[16px] font-bold text-green tracking-wide">
                  Our Vision
                </span>
              </div>

              <h3 className="text-[22px] font-bold text-white leading-snug">
                A world where every business is AI-native.
              </h3>

              <p className="text-[16px] sm:text-[18px] font-medium text-gray-400 leading-[1.6]">
                We envision a future where intelligent software is the default
                accessible, ethical, and engineered to elevate human potential
                at every layer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
