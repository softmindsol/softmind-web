import React from "react";
import {
  Activity,
  CreditCard,
  BookOpen,
  ShoppingBag,
  Home,
} from "lucide-react";

const industries = [
  {
    icon: <Activity className="w-10 h-10 text-white" />,
    title: "Healthcare & Fitness",
    desc: "Build secure mobile experiences for telehealth, patient engagement, fitness tracking, wellness, healthcare operations, and connected health solutions.",
    image: "https://picsum.photos/id/111/800/600",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-white" />,
    title: "Fintech",
    desc: "Create secure and intuitive mobile applications for digital payments, banking, financial management, investment, lending, and other financial services.",
    image: "https://picsum.photos/id/112/800/600",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-white" />,
    title: "EdTech",
    desc: "Deliver engaging learning experiences through mobile learning platforms, virtual classrooms, assessments, educational content, and personalized learning applications.",
    image: "https://picsum.photos/id/113/800/600",
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-white" />,
    title: "E-commerce",
    desc: "Build high-converting mobile shopping experiences with personalized recommendations, secure payments, real-time order tracking, and seamless customer journeys.",
    image: "https://picsum.photos/id/114/800/600",
  },
  {
    icon: <Home className="w-10 h-10 text-white" />,
    title: "PropTech",
    desc: "Simplify property discovery, management, transactions, communication, and maintenance through intuitive mobile applications.",
    image: "https://picsum.photos/id/115/800/600",
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="bg-[#161616] font-jakarta py-20 lg:py-28">
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-green" />
            <span className="text-white text-[13px] font-bold tracking-widest uppercase">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white tracking-tight max-w-[800px] leading-tight">
            Mobile solutions designed around{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-blue-500">
              industry-specific business needs
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`relative group rounded-3xl overflow-hidden h-[400px] ${
                index >= 3 ? "lg:col-span-1.5" : ""
              }`}
              style={
                index >= 3 && industries.length === 5 && index === 3
                  ? {
                      gridColumn: "span 1 / span 1",
                      lgGridColumn: "span 2 / span 2",
                    }
                  : {}
              }
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-[24px] font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {industry.title}
                </h3>
                <p className="text-[15px] text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {industry.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
