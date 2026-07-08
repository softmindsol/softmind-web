import { Hero } from "@/components/home/Hero";
import ClientLogos from "@/components/home/clientLogos";
import WhatWeOffer from "@/components/home/whatWeOffer";
import Industries from "@/components/home/industries";
import AboutUs from "@/components/home/aboutUs";
import WithWithoutSoftmind from "@/components/home/withWithoutSoftmind";
import TechStack from "@/components/home/techStack";
import HowWeWork from "@/components/home/howWeWork";
import OurWork from "@/components/home/ourWork";
import ContactFormSection from "@/components/home/contactFormSection";
import EngagementModels from "@/components/home/engagementModels";
import TestimonialSlider from "@/components/home/testimonialSlider";
import Faqs from "@/components/home/faqs";
import FinalCta from "@/components/home/finalCta";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <WhatWeOffer />
      <ClientLogos />
      <Industries />
      <AboutUs />
      <TechStack />
      <WithWithoutSoftmind />
      <OurWork />
      <HowWeWork />
      {/* <ContactFormSection /> */}
      <EngagementModels />
      <TestimonialSlider />
      <Faqs />
      <FinalCta />
    </div>
  );
}
