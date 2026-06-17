
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

/**
 * Hero Section component for the landing page.
 * Implements a modern, scalable design with vibrant typography and dynamic blur backgrounds
 * to create a premium, high-converting first impression.
 *
 * @returns {JSX.Element} The rendered Hero component.
 */
export function Hero() {
  return (
    <section className="relative w-full min-h-[700px] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
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
          <h1 className="text-[48px] md:text-[64px] leading-[1.2] md:leading-[81px] font-bold font-jakarta capitalize text-navy">
            Building Scalable
            <br />
            <span className="text-green">Solutions With Trust</span>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[1.2] font-medium font-jakarta tracking-wide text-grey max-w-[623px]">
            Trusted by startups and growing businesses to create modern, scalable, and high-performing digital experiences.
          </p>
        </div>

        {/* Action and Trust Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          {/* Start Project Button */}
          <div className="flex flex-col items-center gap-8 w-[190px] shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-full">
            <Link
              href="/start"
              className="flex items-center justify-center w-full h-12 bg-navy hover:bg-navy/90 text-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-100"
            >
              <span className="font-jakarta font-bold text-[16px] tracking-wide">
                Start a Project
              </span>
            </Link>
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
                    src="/img/client1.png"
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
                  <Star key={star} className="w-4 h-4 fill-yellow text-yellow" />
                ))}
                {/* 5th Star grayed out per design spec */}
                <Star className="w-4 h-4 fill-[#D9D9D9] text-[#D9D9D9]" />
              </div>
              <span className="font-jakarta font-semibold text-[14px] md:text-[16px] text-[#666666] tracking-wide">
                Trusted by 1000+ Clients
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Line */}
        <div className="flex items-center gap-4 mt-8 md:mt-20 w-full max-w-[581px]">
          <div className="flex-1 h-[2px] bg-[#EFEFEF] rounded-full" />
          <span className="font-jakarta font-medium text-[14px] md:text-[16px] text-[#666666] text-center tracking-wide px-2">
            Loved by 1000+ Clients across the world
          </span>
          <div className="flex-1 h-[2px] bg-[#EFEFEF] rounded-full" />
        </div>
      </div>
    </section>
  );
}
