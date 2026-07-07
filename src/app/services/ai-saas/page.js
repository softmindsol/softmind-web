import AiSaasOutcomes from "@/components/servicesCompoets/aiSaasComponents/aiSaasOutcomes";
import DevelopmetProcess from "@/components/servicesCompoets/aiSaasComponents/developmetProcess";
import ServicesShowCase from "@/components/servicesCompoets/aiSaasComponents/servicesShowCase";
import { Hero } from "@/components/home/Hero";
export const metadata = {
  title: "AI SaaS | SoftMind Solutions",
  description:
    "Building scalable, AI-driven SaaS platforms that automate workflows, unlock insights, and accelerate business growth.",
};

const AISaas = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="Engineering Intelligent"
        typewriterPrefix=""
        typewriterPhrases={["AI-Powered SaaS Products"]}
        description="Building scalable, AI-driven SaaS platforms that automate workflows, unlock insights, and accelerate business growth."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <ServicesShowCase />
      <DevelopmetProcess />
      <AiSaasOutcomes />
    </main>
  );
};

export default AISaas;
