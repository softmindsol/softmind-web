import { Hero } from "@/components/home/Hero";
import HowWeWorkProp from "@/components/industriesComponents/propTechComponents/howWeWorkProp";
import WhySoftMind from "@/components/industriesComponents/propTechComponents/whySoftMind";
import ReachUsOut from "@/components/home/reachUsOut";
import HealthTechSolutions from "@/components/industriesComponents/healthTechComponents/healtTechSolutions";
import HealthTechProjects from "@/components/industriesComponents/healthTechComponents/healthTechProjects";

export const metadata = {
  title: "PropTech | SoftMind Solutions",
  description: "PropTech Solutions by SoftMind Solutions",
};

const HealthTech = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="Transforming Healthcare"
        typewriterPrefix=""
        typewriterPhrases={["Through Technology"]}
        description="Empowering smarter financial experiences with secure payments, digital banking, lending, and investment solutions that simplify money management and drive financial growth."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <HealthTechSolutions />
      <WhySoftMind />
      <HowWeWorkProp />
      <HealthTechProjects />
      <ReachUsOut />
    </main>
  );
};

export default HealthTech;
