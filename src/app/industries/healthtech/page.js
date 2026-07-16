import { Hero } from "@/components/home/Hero";
import HealthTechSolutions from "@/components/industriesComponents/healthTechComponents/healtTechSolutions";
import HealthTechExpertise from "@/components/industriesComponents/healthTechComponents/healthTechExpertise";
import HealthTechProjects from "@/components/industriesComponents/healthTechComponents/healthTechProjects";
import EngagementModels from "@/components/home/engagementModels";
import TestimonialSlider from "@/components/home/testimonialSlider";
import HealthTechBenefits from "@/components/industriesComponents/healthTechComponents/healthTechBenefits";
import HealthTechCTA from "@/components/industriesComponents/healthTechComponents/healthTechCTA";

export const metadata = {
  title:
    "HealthTech Software Development Company | Custom Healthcare Software Solutions",
  description:
    "We develop custom HealthTech applications, telemedicine platforms, EHR/EMR systems, patient portals, AI healthcare solutions, and remote patient monitoring software for startups, hospitals, and digital health companies across the USA and MENA.",
};

const HealthTech = () => {
  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
      <Hero
        title="Custom HealthTech Software"
        typewriterPrefix=""
        typewriterPhrases={["Development Company"]}
        description="We don't just build healthcare software; we build intelligent healthcare solutions that improve outcomes, automate workflows, and drive better patient experiences. "
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact-us"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <HealthTechSolutions />
      <HealthTechExpertise />
      <HealthTechProjects />
      <EngagementModels />
      <HealthTechBenefits />
      <TestimonialSlider />
      <HealthTechCTA />
    </main>
  );
};

export default HealthTech;
