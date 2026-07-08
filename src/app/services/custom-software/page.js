import AiSaasOutcomes from "@/components/servicesComponents/aiSaasComponents/aiSaasOutcomes";
import DevelopmetProcess from "@/components/servicesComponents/aiSaasComponents/developmetProcess";
import ServicesShowCase from "@/components/servicesComponents/aiSaasComponents/servicesShowCase";
import { Hero } from "@/components/home/Hero";
export const metadata = {
  title: "Custom Software | SoftMind Solutions",
  description:
    "Designing and engineering tailored software solutions that streamline operations, solve unique challenges, and scale with your business.",
};

const CustomSoftware = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="Building Custom Software"
        typewriterPrefix=""
        typewriterPhrases={["That Powers Your Business"]}
        description="Designing and engineering tailored software solutions that streamline operations, solve unique challenges, and scale with your business."
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

export default CustomSoftware;
