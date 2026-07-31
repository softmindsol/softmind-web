import AiSaasOutcomes from "@/components/servicesComponents/aiSaasComponents/aiSaasOutcomes";
import AiSaasWorkflow from "@/components/servicesComponents/aiSaasComponents/aiSaasWorkflow";
import ServicesShowCase from "@/components/servicesComponents/aiSaasComponents/servicesShowCase";
import { Hero } from "@/components/home/Hero";
export const metadata = {
  title:
    "Custom AI SaaS Development Services | Build Intelligent SaaS Products",
  description:
    "Transform your business with custom AI SaaS development. SoftMind Solutions builds intelligent, scalable SaaS platforms that automate workflows, deliver predictive analytics, and unlock real business value.",
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
      <AiSaasWorkflow />
      <AiSaasOutcomes />
    </main>
  );
};

export default AISaas;
