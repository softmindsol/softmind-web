import React from "react";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  "iOS App Development",
  "Android App Development",
  "Cross-Platform App Development",
  "AI-Powered Mobile Apps",
  "Mobile UI/UX Design",
  "Mobile App Modernization",
  "Enterprise Mobile Applications",
  "On-Demand Mobile Apps",
  "E-commerce Mobile Apps",
  "Fintech Mobile Apps",
  "Healthcare Mobile Apps",
  "EdTech Mobile Apps",
  "Real-Time Mobile Applications",
  "API & Third-Party Integrations",
  "Cloud-Connected Mobile Apps",
  "Wearable App Development",
  "Mobile App Security",
  "Mobile App Testing & QA",
  "App Store Deployment",
  "Mobile App Maintenance & Support",
];

const Capabilities = () => {
  return (
    <section className="bg-[#161616] font-jakarta py-20 lg:py-28 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="relative z-10 w-full mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
          <div className="w-full md:w-1/3 sticky top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-green" />
              <span className="text-white text-[13px] font-bold tracking-widest uppercase">
                Capabilities
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-extrabold text-white tracking-tight leading-tight mb-4">
              Mobile App Development Capabilities
            </h2>
            <p className="text-[16px] text-white/70 leading-relaxed font-medium">
              Technology expertise that turns complex requirements into reliable
              mobile products.
            </p>
          </div>

          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-green/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-green flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[16px] font-medium text-white/90">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
