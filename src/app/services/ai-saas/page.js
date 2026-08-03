import AiSaasOutcomes from "@/components/servicesComponents/aiSaasComponents/aiSaasOutcomes";
import AiSaasWorkflow from "@/components/servicesComponents/aiSaasComponents/aiSaasWorkflow";
import ServicesShowCase from "@/components/servicesComponents/aiSaasComponents/servicesShowCase";
import { Hero } from "@/components/home/Hero";
import DevelopmetProcess from "@/components/servicesComponents/aiSaasComponents/developmetProcess";
export const metadata = {
  title: "Custom AI SaaS Development Services | Tezeract",
  description:
    "Build secure, scalable AI SaaS products with Tezeract. From strategy and MVP development to AI integration, modernization, and ongoing support.",
};

const AISaas = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="Custom AI SaaS Development Services"
        typewriterPrefix=""
        typewriterPhrases={["Built for Growth"]}
        description="Turn your SaaS idea into an intelligent, scalable, and market-ready product. Whether you are launching a new SaaS platform or adding AI capabilities to an existing product, our team can help you build secure, reliable, and future-ready software around your business model."
        primaryButtonText="Start Your AI SaaS Project"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <ServicesShowCase />
      <AiSaasWorkflow />
      <DevelopmetProcess />
      <AiSaasOutcomes />
    </main>
  );
};

export default AISaas;
