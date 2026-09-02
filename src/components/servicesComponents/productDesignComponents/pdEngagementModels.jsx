"use client";
import Image from "next/image";
import Link from "next/link";
import { SoftMindSolLogo } from "../../../../public/images";
import { Button } from "@/components/ui/button";

export default function PdEngagementModels() {
  const models = [
    {
      title: "Managed Dedicated Design Team",
      bestFor: "Best for growing teams",
      description:
        "Get a dedicated team of designers and specialists working as an extension of your organization.",
      features: [
        "Dedicated UI/UX designers",
        "UX researchers and strategists",
        "Direct communication with the design team",
        "Flexible team scaling",
        "Agile collaboration",
        "Strict NDA and IP protection",
      ],
      cta: "Build a Product",
    },
    {
      title: "End-to-End Product Design",
      bestFor: "Best for new products & SaaS",
      description:
        "From product discovery to development-ready designs, we manage the complete design journey.",
      features: [
        "Product discovery and UX strategy",
        "UX research and user journeys",
        "UI/UX design",
        "Interactive prototypes",
        "Design systems",
        "Usability testing",
        "Development handoff",
      ],
      highlight: true,
      cta: "Build a Product",
    },
    {
      title: "Design Staff Augmentation",
      bestFor: "Best for filling skill gaps",
      description:
        "Add experienced design professionals to your existing product team without the overhead of full-time hiring.",
      features: [
        "Experienced UI/UX designers",
        "UX researchers",
        "Flexible engagement",
        "Seamless team integration",
        "Scale resources as needed",
        "Work with your existing tools and processes",
      ],
      cta: "Build a Product",
    },
  ];

  return (
    <section className="relative w-full bg-[#161616] py-16 md:py-24 text-dark overflow-hidden font-jakarta">
      {/* Background Radial Glow */}
      <div
        className="absolute top-[-187px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none opacity-40 blur-[130px]"
        style={{ backgroundColor: "navy" }}
      />
      <div className="absolute select-none pointer-events-none">
        <Image
          src={SoftMindSolLogo}
          alt="SoftMindSol Logo"
          className="object-cover max-h-[726px]"
        />
      </div>

      <div className="relative mx-auto px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-3.5 text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
            <span className="text-green text-[22px] font-bold tracking-wide">
              Flexible Engagement Models Built Around Your Product Needs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-white max-w-[750px]">
            How We Partner{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-[#004BC0] block">
              With Your Business
            </span>
          </h2>
          <p className="text-sm md:text-base text-white/80 font-medium leading-[24px] tracking-wide max-w-[600px]">
            Whether you need a complete product design team or specialized UX expertise, Softmind offers flexible engagement models that align with your scope, timeline, and internal capabilities.
          </p>
        </div>

        {/* Models Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {models.map((model, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                model.highlight
                  ? "bg-navy text-white shadow-xl relative border-2 border-green scale-100 lg:scale-[1.03] z-10"
                  : "bg-white border border-gray-200 text-dark hover:border-navy/20 hover:shadow-md"
              }`}
            >
              <div>
                {/* Highlight Badge */}
                {model.highlight && (
                  <span className="absolute -top-3.5 sm:top-4 right-4 bg-green text-navy font-bold text-xs uppercase tracking-[1px] px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}

                {/* Tagline */}
                <span
                  className={`text-[13px] font-bold tracking-[1px] uppercase ${
                    model.highlight ? "text-green" : "text-grey/80"
                  }`}
                >
                  {model.bestFor}
                </span>

                {/* Model Title */}
                <h3 className="text-2xl font-bold tracking-tight mt-3 mb-2">
                  {model.title}
                </h3>

                {/* Pricing Style */}
                <span
                  className={`text-sm font-semibold tracking-wide block border-b pb-6 mb-6 ${
                    model.highlight
                      ? "text-white/80 border-white/10"
                      : "text-[#666666] border-gray-100"
                  }`}
                >
                  {model.description}
                </span>

                {/* Features List */}
                <ul className="flex flex-col gap-4 mb-8">
                  {model.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-3 text-sm font-medium leading-[22px] tracking-wide"
                    >
                      <span
                        className={`text-base shrink-0 mt-0.5 ${
                          model.highlight ? "text-green" : "text-green"
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={
                          model.highlight ? "text-white/90" : "text-[#2E2E2E]"
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link href="/contact-us">
                <div className="w-full mt-auto">
                  <Button
                    variant={model.highlight ? "default" : "outline"}
                    className="w-full py-5 text-center font-bold flex justify-center items-center shadow-sm rounded-full cursor-pointer hover:bg-green/80 transition-colors duration-200"
                    style={
                      model.highlight
                        ? {
                            backgroundColor: "#0CBF83",
                            borderColor: "#0CBF83",
                            color: "#00235A",
                          }
                        : {}
                    }
                  >
                    {model.cta}
                  </Button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
