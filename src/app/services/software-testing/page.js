import { Hero } from "@/components/home/Hero";
import StReleaseWithConfidence from "@/components/servicesComponents/softwareTestingComponents/stReleaseWithConfidence";
import StTestingServices from "@/components/servicesComponents/softwareTestingComponents/stTestingServices";
import StWhyChoose from "@/components/servicesComponents/softwareTestingComponents/stWhyChoose";
import StQaStrategy from "@/components/servicesComponents/softwareTestingComponents/stQaStrategy";
import StFaqs from "@/components/servicesComponents/softwareTestingComponents/stFaqs";
import ContactFormSection from "@/components/home/contactFormSection";

export const metadata = {
  title:
    "Offshore Software Testing Services | QA Testing Company for Startups — Softmind Solutions",
  description:
    "Softmind Solutions provides offshore software testing and QA services for startups and growing businesses in the USA and MENA — manual testing, test automation, performance testing, security testing, and API testing. Offshore quality, startup-friendly pricing.",
};

const SoftwareTesting = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="Offshore Software Testing Services"
        typewriterPrefix=""
        typewriterPhrases={["For Startups"]}
        description="Build better software. Release faster. Reduce QA costs. Expert offshore software testing and quality assurance services for startups and growing businesses in the USA and MENA."
        primaryButtonText="Get a Free QA Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <StReleaseWithConfidence />
      <StTestingServices />
      <StWhyChoose />
      <StQaStrategy />
      <ContactFormSection />
      <StFaqs />
    </main>
  );
};

export default SoftwareTesting;
