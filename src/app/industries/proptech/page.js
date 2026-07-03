import { Hero } from "@/components/home/Hero";
import PropTechSolutions from "@/components/industriesComponents/propTechComponents/propTechSolutions";
import WhySoftMind from "@/components/industriesComponents/propTechComponents/whySoftMind";

const PropTech = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="Transforming Real Estate"
        typewriterPrefix=""
        typewriterPhrases={["Through Technology"]}
        description="PropTech is the integration of digital solutions into real estate to streamline operations, improve experiences, automate workflows, and unlock new growth opportunities."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <PropTechSolutions />
      <WhySoftMind />
    </main>
  );
};

export default PropTech;
