import AboutHero from "@/components/aboutUsComponents/aboutHero";
import MissionVision from "@/components/aboutUsComponents/missionVision";
import WhoWeAre from "@/components/aboutUsComponents/whoWeAre";
import CoreValues from "@/components/aboutUsComponents/coreValues";
import StatsBanner from "@/components/aboutUsComponents/statsBanner";
import AboutIndustries from "@/components/aboutUsComponents/aboutIndustries";
import OurLeadership from "@/components/aboutUsComponents/ourLeadership";

export default function AboutUs() {
  return (
    <div className="w-full flex flex-col">
      <AboutHero />
      <MissionVision />
      <WhoWeAre />
      <CoreValues />
      <AboutIndustries />
      <StatsBanner />
      <OurLeadership />
    </div>
  );
}
