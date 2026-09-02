import { Hero } from "@/components/home/Hero";
import TestimonialSlider from "@/components/home/testimonialSlider";
import TechStack from "@/components/home/techStack";
import OurWork from "@/components/home/ourWork";
import FinalCta from "@/components/home/finalCta";

import PdWhyInvest from "@/components/servicesComponents/productDesignComponents/pdWhyInvest";
import PdDesignServices from "@/components/servicesComponents/productDesignComponents/pdDesignServices";
import PdDesignProcess from "@/components/servicesComponents/productDesignComponents/pdDesignProcess";
import PdChallenges from "@/components/servicesComponents/productDesignComponents/pdChallenges";
import PdWhyChooseUs from "@/components/servicesComponents/productDesignComponents/pdWhyChooseUs";
import PdIndustries from "@/components/servicesComponents/productDesignComponents/pdIndustries";
import PdEngagementModels from "@/components/servicesComponents/productDesignComponents/pdEngagementModels";
import PdFaq from "@/components/servicesComponents/productDesignComponents/pdFaq";

export const metadata = {
  title:
    "Digital Product Design Services for Startups | UX/UI, Research & Design Systems — Softmind Solutions",
  description:
    "Softmind Solutions delivers digital product design services for startups and growing businesses in the USA and MENA — UX/UI design, user research and strategy, design systems, prototyping, and usability testing. Offshore quality, startup-friendly pricing.",
};

const ProductDesign = () => {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <Hero
        title="Digital Product"
        typewriterPrefix=""
        typewriterPhrases={["Design Services"]}
        description="From UX research and strategy to intuitive UI design and scalable design systems, Softmind helps businesses turn product ideas into engaging digital experiences."
        primaryButtonText="Design Your Product With Us"
        primaryButtonLink="/contact-us"
        secondaryButtonText={null}
        showBottomText={false}
      />

      <PdWhyInvest />
      <PdDesignServices />
      <PdDesignProcess />
      <PdChallenges />
      <PdWhyChooseUs />
      <TestimonialSlider />
      <TechStack />
      <PdIndustries />
      <PdEngagementModels />
      <PdFaq />

      <FinalCta
        title="Let's Design a Product Your Users Will Love"
        description="Turn Complex Ideas Into Simple, Scalable Digital Experiences"
        buttonText="Let's Build Your Digital Product"
      />
    </main>
  );
};

export default ProductDesign;
