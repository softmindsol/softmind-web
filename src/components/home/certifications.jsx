import React from "react";
import Image from "next/image";

const CERTIFICATIONS = [
  { id: 1, name: "CIPM" },
  { id: 2, name: "CISSP" },
  { id: 3, name: "eWPTX" },
  { id: 4, name: "AWS Security Specialty" },
  { id: 5, name: "NIST RMF" },
  { id: 6, name: "OSCP+" },
  { id: 7, name: "Databricks Leadership" },
  { id: 8, name: "Databricks Consulting Partner" },
  { id: 9, name: "Databricks Data Engineer Professional" },
  { id: 10, name: "Databricks Data Engineer Associate" },
  { id: 11, name: "AWS Partner" },
  { id: 12, name: "CHFI" },
  { id: 13, name: "Windows Red Teaming Expert" },
  { id: 14, name: "Huawei HCIP" },
];

export default function Certifications() {
  return (
    <section className="py-16 md:py-24 bg-white font-jakarta overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Certifications
        </h2>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center justify-center aspect-square md:aspect-[4/3] rounded-xl border border-blue-200 bg-white p-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Placeholder for actual images */}
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xs font-bold text-gray-400">LOGO</span>
                </div>
                <p className="text-[10px] md:text-xs font-semibold text-gray-700 leading-tight">
                  {cert.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
