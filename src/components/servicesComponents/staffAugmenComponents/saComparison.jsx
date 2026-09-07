"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

const factors = [
  {
    factor: "Time to scale",
    augmentation: "Fast",
    traditional: "Often takes weeks or months",
    augWins: true,
  },
  {
    factor: "Team flexibility",
    augmentation: "Scale up or down as needed",
    traditional: "More difficult to adjust",
    augWins: true,
  },
  {
    factor: "Recruitment burden",
    augmentation: "Managed with your augmentation partner",
    traditional: "Managed internally",
    augWins: true,
  },
  {
    factor: "Specialized expertise",
    augmentation: "Available on demand",
    traditional: "Requires dedicated hiring",
    augWins: true,
  },
  {
    factor: "Infrastructure costs",
    augmentation: "Lower",
    traditional: "Higher",
    augWins: true,
  },
  {
    factor: "Team control",
    augmentation: "High",
    traditional: "High",
    augWins: false,
  },
  {
    factor: "Long-term commitment",
    augmentation: "Flexible",
    traditional: "Permanent employment",
    augWins: true,
  },
  {
    factor: "Project capacity",
    augmentation: "Easy to increase",
    traditional: "Limited by existing workforce",
    augWins: true,
  },
];

export default function SaComparison() {
  return (
    <section className="bg-[#b2d7fc] w-full py-20 lg:py-28 font-jakarta relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00235A] rounded-full blur-[200px] opacity-5 pointer-events-none" />

      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-[#0CBF83] text-[18px] md:text-[20px] font-bold tracking-wide">
              The Comparison
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#161616] leading-tight mb-6">
            Staff Augmentation vs. Traditional Hiring
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
            Get the flexibility of additional talent while keeping control of
            your project.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-3xl"
        >
          <table className="w-full max-w-5xl mx-auto">
            <thead>
              <tr>
                <th className="bg-[#00235A] text-white text-left px-8 py-5 text-[15px] font-bold rounded-tl-3xl w-[28%]">
                  Factor
                </th>
                <th className="bg-[#0CBF83] text-white text-left px-8 py-5 text-[15px] font-bold w-[36%]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    Offshore Staff Augmentation
                  </div>
                </th>
                <th className="bg-gray-300 text-[#161616] text-left px-8 py-5 text-[15px] font-bold rounded-tr-3xl w-[36%] border-b border-gray-100">
                  Traditional Hiring
                </th>
              </tr>
            </thead>
            <tbody>
              {factors.map((row, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"
                  } ${idx === factors.length - 1 ? "last-row" : ""}`}
                >
                  <td
                    className={`px-8 py-5 text-[15px] font-bold text-[#161616] ${
                      idx === factors.length - 1 ? "rounded-bl-3xl" : ""
                    }`}
                  >
                    {row.factor}
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0CBF83] shrink-0" />
                      <span className="text-[15px] text-[#161616] font-medium">
                        {row.augmentation}
                      </span>
                    </div>
                  </td>
                  <td
                    className={`px-8 py-5 border-l border-gray-100 ${
                      idx === factors.length - 1 ? "rounded-br-3xl" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {row.augWins ? (
                        <XCircle className="w-5 h-5 text-gray-300 shrink-0" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-[#0CBF83] shrink-0" />
                      )}
                      <span className="text-[15px] text-gray-500">
                        {row.traditional}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="/contact-us">
            <button className="inline-flex items-center gap-2 bg-[#00235A] text-white px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#0CBF83] transition-colors duration-300 cursor-pointer">
              Get Started with Staff Augmentation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
