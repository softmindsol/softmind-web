import React from "react";
import { Users, DollarSign, Settings, Heart, Maximize, BarChart } from "lucide-react";

const valueItems = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    badgeBg: "bg-green",
    title: "Increase Customer Engagement",
    desc: "Give customers a faster and more convenient way to interact with your business through personalized, intuitive mobile experiences.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    badgeBg: "bg-navy",
    title: "Create New Revenue Opportunities",
    desc: "Build mobile products that support subscriptions, in-app purchases, digital services, marketplaces, and other revenue models.",
  },
  {
    icon: <Settings className="w-8 h-8 text-white" />,
    badgeBg: "bg-green",
    title: "Streamline Business Operations",
    desc: "Automate repetitive processes and give employees mobile access to the information and tools they need to work more efficiently.",
  },
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    badgeBg: "bg-navy",
    title: "Improve Customer Experience",
    desc: "Deliver seamless experiences across devices with intuitive navigation, personalized features, and fast application performance.",
  },
  {
    icon: <Maximize className="w-8 h-8 text-white" />,
    badgeBg: "bg-green",
    title: "Scale Without Rebuilding",
    desc: "We use scalable architectures and modern technologies so your application can support growing users, features, transactions, and business requirements.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-white" />,
    badgeBg: "bg-navy",
    title: "Make Better Decisions With Data",
    desc: "Integrate analytics and intelligent insights into your application to understand user behavior, identify opportunities, and make data-driven decisions.",
  },
];

const BusinessValue = () => {
  return (
    <section className="w-full relative font-jakarta bg-[#F8FAFC]">
      <div className="relative py-20 lg:py-28 overflow-hidden">
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-navy to-green" />
              <span className="text-navy text-[13px] md:text-[14px] font-bold tracking-widest uppercase">
                Business Value
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.2] font-extrabold tracking-tight text-navy max-w-[800px]">
              Mobile App Development That Delivers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-blue-600">
                Measurable Business Value
              </span>
            </h2>
            <p className="text-[16px] sm:text-[18px] font-medium text-gray-500 leading-relaxed max-w-[800px] mt-2">
              From app concept to scalable digital product. A successful mobile application needs more than great code. It needs a clear strategy, intuitive experience, reliable technology, and continuous optimization.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {valueItems.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white border border-gray-100 rounded-[20px] p-8 shadow-sm hover:shadow-[0_15px_35px_rgba(0,35,90,0.08)] hover:border-green/30 transition-all duration-300"
              >
                <div
                  className={`w-[64px] h-[64px] rounded-2xl flex items-center justify-center shadow-sm mb-6 transition-transform duration-300 group-hover:-translate-y-1 ${item.badgeBg}`}
                >
                  {item.icon}
                </div>
                <h4 className="text-[20px] font-bold text-navy leading-snug mb-3 group-hover:text-green transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-[15px] text-gray-600 leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessValue;
