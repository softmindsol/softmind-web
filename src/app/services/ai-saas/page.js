import DevelopmetProcess from "@/components/aiSaasComponents/developmetProcess";
import ServicesShowCase from "@/components/aiSaasComponents/servicesShowCase";
import { Hero } from "@/components/home/Hero";

const AISaas = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="Engineering Intelligent AI-"
        typewriterPrefix=""
        typewriterPhrases={["Powered SaaS Products"]}
        description="Building scalable, AI-driven SaaS platforms that automate workflows, unlock insights, and accelerate business growth."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <ServicesShowCase />
      <DevelopmetProcess />
    </main>
  );
};

export default AISaas;
