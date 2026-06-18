import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import WhatWeOffer from "@/components/home/whatWeOffer";
import AboutUs from "@/components/home/aboutUs";
import OurWork from "@/components/home/ourWork";
import TestimonialSlider from "@/components/home/testimonialSlider";
import Faqs from "@/components/home/faqs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-green selection:text-white">
      <Navbar />
      <Hero />
      <WhatWeOffer />
      <AboutUs />
      <OurWork />
      <TestimonialSlider />
      <Faqs />
    </main>
  );
}
