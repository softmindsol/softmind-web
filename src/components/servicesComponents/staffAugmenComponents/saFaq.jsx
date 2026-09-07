"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is offshore staff augmentation?",
    answer:
      "Offshore staff augmentation is a flexible hiring model that allows businesses to extend their in-house technology teams with skilled professionals located in another country. The augmented professionals work directly with your existing team, following your tools, workflows, and project requirements while you maintain control over the work.",
  },
  {
    question: "How does offshore staff augmentation work?",
    answer:
      "The process typically starts by identifying your project requirements, technical skills, team structure, and timeline. Softmind then helps you identify suitable professionals who integrate with your existing team and contribute to your project. You can scale the team up or down as your business needs change.",
  },
  {
    question: "What are the benefits of offshore staff augmentation?",
    answer:
      "Offshore staff augmentation can help you access specialized technical talent, reduce hiring and operational costs, increase development capacity, accelerate project delivery, and scale your team more flexibly. It also allows you to maintain direct control over project priorities and day-to-day collaboration.",
  },
  {
    question:
      "Why choose offshore staff augmentation instead of hiring full-time employees?",
    answer:
      "Traditional hiring can take considerable time and involves recruitment, onboarding, infrastructure, benefits, and long-term employment commitments. Offshore staff augmentation gives you faster access to skilled professionals while providing greater flexibility to adjust your team based on project requirements.",
  },
  {
    question:
      "What roles can I hire through offshore staff augmentation?",
    answer:
      "You can augment your team with a wide range of technology professionals, including software developers, full-stack developers, mobile developers, UI/UX designers, QA engineers, automation testers, DevOps engineers, cloud engineers, AI/ML specialists, data scientists, technical leads, architects, project managers, and business analysts.",
  },
  {
    question:
      "Can offshore developers work with my existing in-house team?",
    answer:
      "Yes. Offshore staff augmentation is specifically designed to extend your existing team. Professionals can work within your communication channels, project management tools, development processes, and technical environment while collaborating directly with your internal employees.",
  },
  {
    question: "How quickly can I scale my offshore development team?",
    answer:
      "The timeline depends on the number of resources, required skill sets, and project complexity. Softmind's approach is designed to reduce the time typically associated with traditional recruitment so you can add the expertise you need and begin moving your project forward faster.",
  },
  {
    question: "Can I scale my offshore team up or down?",
    answer:
      "Yes. One of the key advantages of offshore staff augmentation is flexibility. You can increase your team when workloads or project demands grow and reduce resources when specific development phases are completed.",
  },
  {
    question: "How much does offshore staff augmentation cost?",
    answer:
      "The cost depends on factors such as the number of professionals, their experience level, required expertise, technology stack, and engagement duration. Offshore staff augmentation can help reduce overall workforce costs by avoiding many expenses associated with traditional full-time hiring and maintaining in-house resources.",
  },
  {
    question: "Will I have control over the offshore team?",
    answer:
      "Yes. With staff augmentation, your business retains control over project priorities, task assignments, workflows, communication, and day-to-day collaboration. The professionals become an extension of your team rather than an independent third-party project team.",
  },
  {
    question: "Is offshore staff augmentation suitable for long-term projects?",
    answer:
      "Yes. Offshore staff augmentation can support both short-term projects and long-term product development. You can start with a small number of specialists and expand the team as your roadmap, product, and business requirements evolve.",
  },
  {
    question:
      "How is offshore staff augmentation different from outsourcing?",
    answer:
      "With staff augmentation, the professionals become an extension of your existing team and you retain direct control over project execution. In traditional outsourcing, an external provider generally takes responsibility for delivering a defined project or function. Staff augmentation is therefore a good fit when you want additional expertise without giving up control.",
  },
  {
    question:
      "What industries can benefit from offshore staff augmentation?",
    answer:
      "Offshore staff augmentation can support businesses across industries such as healthcare and fitness, fintech, EdTech, PropTech, and e-commerce. The model is particularly useful for organizations that need to scale technology capabilities or access specialized expertise quickly.",
  },
  {
    question: "Can Softmind help with complete offshore development teams?",
    answer:
      "Yes. Depending on your requirements, Softmind can help you build teams comprising developers, designers, QA engineers, DevOps professionals, technical leads, project managers, and other specialists needed to support your product or development roadmap.",
  },
  {
    question: "Why choose Softmind for offshore staff augmentation?",
    answer:
      "Softmind helps businesses access technical talent that aligns with their project requirements, technology stack, and team structure. Our flexible approach allows you to strengthen your existing workforce, address skill gaps, accelerate delivery, and scale resources as your needs change.",
  },
];

export default function SaFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-100 py-20 lg:py-28 font-jakarta relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0CBF83]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)] shadow-[0_0_10px_rgba(0,35,90,0.5)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-wide uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold text-[#161616] leading-[1.1] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] md:text-[17px] text-gray-600">
            About Offshore Staff Augmentation
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`group w-full rounded-[24px] transition-all duration-500 overflow-hidden border ${
                  isOpen
                    ? "border-[#0CBF83]/30 bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)]"
                    : "border-transparent bg-white hover:bg-[#F8F9FA]"
                }`}
              >
                <div
                  onClick={() => handleToggle(idx)}
                  className="flex items-center justify-between p-5 cursor-pointer select-none gap-6"
                >
                  <h3
                    className={`text-[16px] sm:text-[18px] leading-[1.4] font-bold transition-colors duration-300 ${
                      isOpen
                        ? "text-[#00235A]"
                        : "text-[#161616] group-hover:text-[#00235A]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isOpen
                        ? "bg-[#0CBF83] text-white rotate-180 shadow-[0_4px_12px_rgba(12,191,131,0.3)]"
                        : "bg-gray-100 text-[#161616] group-hover:bg-[#00235A] group-hover:text-white"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 transition-transform duration-500" />
                  </div>
                </div>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 px-6 sm:px-7 pt-0">
                      <p className="text-[15px] sm:text-[16px] leading-[1.8] text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
