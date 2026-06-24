import { Hero } from "@/components/home/Hero";
import ClientLogos from "@/components/home/clientLogos";
import WhatWeOffer from "@/components/home/whatWeOffer";
import Industries from "@/components/home/industries";
import OurWork from "@/components/home/ourWork";
import AboutUs from "@/components/home/aboutUs";
import EngagementModels from "@/components/home/engagementModels";
import TestimonialSlider from "@/components/home/testimonialSlider";
import Faqs from "@/components/home/faqs";
import FinalCta from "@/components/home/finalCta";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      {/* <WhatWeOffer /> */}
      <Industries />
      <ClientLogos />
      <OurWork />
      <AboutUs />
      <EngagementModels />
      <TestimonialSlider />
      <Faqs />
      <FinalCta />
    </div>
  );
}
