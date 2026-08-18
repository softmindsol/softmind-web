import { Hero } from "@/components/home/Hero";
import React from "react";
import WebAppServices from "@/components/servicesComponents/webAppComponents/WebAppServices";
import WebAppWhyChoose from "@/components/servicesComponents/webAppComponents/WebAppWhyChoose";

export const metadata = {
  title:
    "Custom Web Application Development Company for Startups | SaaS, Portals & Dashboards — Softmind Solutions",
  description:
    "Softmind Solutions builds custom web applications for startups and growing businesses in the USA and MENA, SaaS platforms, customer portals, internal dashboards, B2B tools, and AI-powered web apps. Offshore quality, startup-friendly pricing.",
};

const WebApp = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="Custom Web App Development Services"
        typewriterPrefix=""
        typewriterPhrases={[
          "Build High-Performance Web Applications That Drive Business Growth",
        ]}
        description="Turn complex business requirements into secure, scalable, and user-friendly web applications built around your goals."
        primaryButtonText="Let’s Build Your Web Application"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <WebAppServices />
      <WebAppWhyChoose />
    </main>
  );
};

export default WebApp;
