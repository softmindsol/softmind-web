import { Hero } from "@/components/home/Hero";
import ContactForm from "@/components/contactUsComponents/ContactForm";
import ContactFormSection from "@/components/home/contactFormSection";

export const metadata = {
  title: "Contact Us | SoftMind Solutions",
  description: "Get in touch with SoftMind Solutions for your next project.",
};

const ContactUs = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="Let's Build Something"
        typewriterPrefix=""
        typewriterPhrases={["Great Together"]}
        description="SoftMind Solutions is a leading custom software development company engineering high-performance web apps, mobile solutions, AI platforms, and SaaS products for startups and enterprises worldwide"
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <ContactFormSection />
    </main>
  );
};

export default ContactUs;
