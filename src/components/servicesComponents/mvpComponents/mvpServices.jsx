"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Cloud,
  Bot,
  ShoppingBag,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Web App MVP Development",
    description:
      "Launch a functional web application with the essential features needed to test your concept, attract early users, and validate demand. We combine intuitive UX, robust architecture, and focused functionality to help you launch without overbuilding.",
    icon: <Monitor className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Mobile App MVP Development",
    description:
      "Turn your mobile app idea into a functional MVP designed around your target users and business objectives. We prioritize the features that matter most, helping you test adoption, engagement, and monetization before scaling.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "SaaS MVP Development",
    description:
      "Build and validate your SaaS idea with a focused MVP that delivers your core value proposition. We develop secure, scalable SaaS foundations that can evolve as your customer base and product requirements grow.",
    icon: <Cloud className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI-Powered MVP Development",
    description:
      "Bring AI into your product where it creates measurable value. From AI assistants and intelligent automation to recommendation engines and predictive capabilities, we help businesses validate AI-powered product concepts without unnecessary complexity.",
    icon: <Bot className="w-6 h-6" />,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Marketplace MVP Development",
    description:
      "Test your marketplace business model with the essential features needed to connect buyers and sellers, manage transactions, and validate demand. We build marketplace MVPs with a foundation for future growth.",
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Rapid Prototyping",
    description:
      "Not ready for development yet? We can transform your concept into interactive prototypes that help you test user flows, communicate your vision, gather stakeholder feedback, and validate the product direction before development begins.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-yellow-500 to-amber-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const MvpServices = () => {
  return (
    <section className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              MVP Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Whether you are validating a startup concept, launching a new
              digital product, or testing a new business model, Softmind can
              help you build the right MVP for your goals.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              {/* Top gradient line */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}
              ></div>

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${service.color} mb-6 shadow-lg shadow-gray-200/50 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              <h3
                className={`text-xl font-bold text-dark mb-4 group-hover:${service.color} transition-colors duration-300`}
              >
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MvpServices;
