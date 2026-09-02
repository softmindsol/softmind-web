import React from "react";
import {
  Smartphone,
  Layers,
  Server,
  Database,
  Cloud,
  Brain,
} from "lucide-react";

const techCategories = [
  {
    title: "Mobile Platforms",
    icon: <Smartphone className="w-6 h-6 text-green" />,
    items: ["iOS", "Android"],
  },
  {
    title: "Frameworks & Technologies",
    icon: <Layers className="w-6 h-6 text-green" />,
    items: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    title: "Backend & APIs",
    icon: <Server className="w-6 h-6 text-green" />,
    items: ["Node.js", "Nest.js", "Python", "SupaBase", "Rest APIs", "GraphQL"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-green" />,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "DynamoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-green" />,
    items: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Render",
      "Vercel",
      "Railway",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "AI & Data",
    icon: <Brain className="w-6 h-6 text-green" />,
    items: [
      "Generative AI",
      "Machine Learning",
      "Natural Language Processing",
      "Predictive Analytics",
    ],
  },
];

const TechStack = () => {
  return (
    <section className="bg-white font-jakarta py-20 lg:py-28 relative overflow-hidden">
      <div className="relative z-10 w-full mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-navy to-green" />
            <span className="text-navy text-[13px] font-bold tracking-widest uppercase">
              Technology Stack
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-navy tracking-tight max-w-[800px] leading-tight">
            Build Mobile Apps With the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-blue-600">
              Right Technology Stack
            </span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-500 font-medium leading-relaxed max-w-[700px] mt-2">
            Modern technologies for secure, scalable, and high-performing
            applications. Technology selection is based on your application's
            requirements, scalability needs, security requirements, and business
            objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-green/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-[20px] font-bold text-navy">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-[14px] font-medium text-gray-700 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
