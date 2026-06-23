import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="relative w-full min-h-[700px] flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden bg-white animate-in fade-in slide-in-from-top-14 duration-500">
      {/* Background Abstract Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Left Blur (Ellipse 20) */}
        <div className="absolute w-[608px] h-[498px] left-[17px] top-[17px] bg-[#E5F6FE] blur-[86.55px] rounded-full" />

        {/* Right Blur (Ellipse 21) */}
        <div className="absolute w-[386px] h-[386px] left-[60%] lg:left-[974px] top-[150px] lg:top-[243px] bg-[rgba(164,255,225,0.82)] blur-[150px] rounded-full" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[871px] px-4 gap-12">
        {/* Headings */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-[48px] md:text-[54px] leading-[1.2] md:leading-[68px] font-bold font-jakarta capitalize text-navy">
            AI SaaS & Custom Software Development Company
            <br />
            <span className="text-green">
              for Startups and Growing Businesses
            </span>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[1.5] font-medium font-jakarta tracking-wide text-grey max-w-[823px]">
            We build scalable web apps, mobile apps, AI SaaS platforms, and
            dedicated development teams for HealthTech, FinTech, EdTech, and
            PropTech companies.
          </p>
        </div>

        {/* Action and Trust Section */}
        <div className="flex flex-col md:flex-row items-center gap-7 md:gap-10">
          {/* Start Project Button */}
          <div className="flex items-center gap-4">
            <Button variant="default" className="px-6">
              Book a Free Discovery Call
            </Button>
            <Button variant="outline" className="px-6">
              View Our Work
            </Button>
          </div>

          {/* Trusted Clients Badges */}
          <div className="flex items-center gap-4">
            {/* Avatars */}
            <div className="flex items-center">
              {/* Using placeholders for client avatars */}
              {[1, 2, 3].map((num, i) => (
                <div
                  key={num}
                  className={`relative w-12 h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden ${
                    i > 0 ? "-ml-[17px]" : ""
                  }`}
                >
                  <Image
                    src="/images/client.png"
                    alt={`Trusted Client ${num}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              ))}
            </div>

            {/* Stars & Text */}
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-[2px]">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow text-yellow"
                  />
                ))}

                {/* Half-filled star */}
                <div className="relative w-4 h-4">
                  {/* Gray background star */}
                  <Star className="absolute inset-0 w-4 h-4 fill-[#D9D9D9] text-[#D9D9D9]" />

                  {/* Yellow half overlay */}
                  <div className="absolute inset-0 overflow-hidden w-1/2">
                    <Star className="w-4 h-4 fill-yellow text-yellow" />
                  </div>
                </div>
              </div>
              <span className="font-jakarta font-semibold text-[14px] md:text-[16px] text-[#666666] tracking-wide">
                Trusted by 300+ Clients
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Line */}
        <div className="flex items-center gap-4 mt-8 md:mt-10 w-full max-w-[581px]">
          <div className="flex-1 h-[2px] bg-[#EFEFEF] rounded-full" />
          <span className="font-jakarta font-medium text-[14px] md:text-[16px] text-[#666666] text-center tracking-wide px-2">
            Loved by 300+ Clients across the world
          </span>
          <div className="flex-1 h-[2px] bg-[#EFEFEF] rounded-full" />
        </div>
      </div>
    </section>
  );
}
