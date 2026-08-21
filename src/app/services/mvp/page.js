import { Hero } from "@/components/home/Hero";
import MvpBuildSmarter from "@/components/servicesComponents/mvpComponents/mvpBuildSmarter";
import MvpDevelopmentProcess from "@/components/servicesComponents/mvpComponents/mvpDevelopmentProcess";
import MvpServices from "@/components/servicesComponents/mvpComponents/mvpServices";
import React from "react";

const MVP = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="MVP Development Services Company"
        typewriterPrefix=""
        typewriterPhrases={["Turn Your Product Idea Into a Market-Ready MVP"]}
        description="Validate your idea, reduce development risks, and launch faster with Softmind’s MVP development services. With Softmind, you move from “I have an idea” to “I have a product people want.”"
        primaryButtonText="Let’s Build Your Web Application"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <MvpBuildSmarter />
      <MvpServices />
      <MvpDevelopmentProcess />
    </main>
  );
};

export default MVP;
