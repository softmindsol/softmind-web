import { Hero } from "@/components/home/Hero";
import HowWeWorkProp from "@/components/industriesComponents/propTechComponents/howWeWorkProp";
import PropTechProjects from "@/components/industriesComponents/propTechComponents/propTechProjects";
import PropTechSolutions from "@/components/industriesComponents/propTechComponents/propTechSolutions";
import WhySoftMind from "@/components/industriesComponents/propTechComponents/whySoftMind";
import ReachUsOut from "@/components/home/reachUsOut";

export const metadata = {
  title: "PropTech | SoftMind Solutions",
  description: "PropTech Solutions by SoftMind Solutions",
};

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
      <HowWeWorkProp />
      <PropTechProjects />
      <ReachUsOut />
    </main>
  );
};

export default PropTech;
