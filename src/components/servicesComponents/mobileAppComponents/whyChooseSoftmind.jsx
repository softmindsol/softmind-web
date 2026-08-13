import React from "react";
import { Briefcase, Users, Layout, Maximize2, Shield, Zap, Handshake } from "lucide-react";

const reasons = [
  {
    icon: <Briefcase className="w-8 h-8 text-green" />,
    title: "Business-Focused Development",
    desc: "We connect technology decisions to business objectives, helping you invest in features that create measurable value.",
  },
  {
    icon: <Users className="w-8 h-8 text-green" />,
    title: "Experienced Engineering Team",
    desc: "Work with skilled developers, designers, QA specialists, and technical experts who understand the complexities of modern mobile products.",
  },
  {
    icon: <Layout className="w-8 h-8 text-green" />,
    title: "End-to-End Expertise",
    desc: "From product discovery and UI/UX design to development, deployment, and ongoing support, you get the capabilities required to take your app from idea to growth.",
  },
  {
    icon: <Maximize2 className="w-8 h-8 text-green" />,
    title: "Scalable Architecture",
    desc: "We build applications with future growth in mind, making it easier to add users, features, integrations, and new markets without costly rework.",
  },
  {
    icon: <Shield className="w-8 h-8 text-green" />,
    title: "Security by Design",
    desc: "We incorporate security considerations throughout development to help protect user data, application infrastructure, and business-critical information.",
  },
  {
    icon: <Zap className="w-8 h-8 text-green" />,
    title: "Faster Time to Market",
    desc: "Our streamlined development approach helps you validate ideas, prioritize high-value features, and bring your application to market efficiently.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-green" />,
    title: "Long-Term Partnership",
    desc: "We don't stop at launch. Our team can continuously maintain, optimize, and enhance your application as your users and business requirements evolve.",
  },
];

const WhyChooseSoftmind = () => {
  return (
    <section className="bg-[#F8FAFC] font-jakarta py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-navy to-green" />
            <span className="text-navy text-[13px] font-bold tracking-widest uppercase">
              Why Choose Softmind
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-navy tracking-tight max-w-[800px] leading-tight">
            Why Businesses Choose Softmind for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-blue-600">
              Mobile App Development
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-500 font-medium leading-relaxed max-w-[700px] mt-2">
            Build faster, scale confidently, and create experiences users value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                index === reasons.length - 1 ? "lg:col-span-3 lg:max-w-xl lg:mx-auto" : ""
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-green/10 flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-[22px] font-bold text-navy mb-3">
                {reason.title}
              </h3>
              <p className="text-[16px] text-gray-600 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSoftmind;
