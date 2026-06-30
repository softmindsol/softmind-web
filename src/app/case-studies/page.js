import ContactForm from "@/components/contactUsComponents/ContactForm";
import { Hero } from "@/components/home/Hero";
import OurWork from "@/components/home/ourWork";

export const metadata = {
  title: "Case Studies | SoftMind Solutions",
  description: "Get in touch with SoftMind Solutions for your next project.",
};

const CaseStudies = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="Work That Speaks"
        typewriterPrefix=""
        typewriterPhrases={["For Itself"]}
        description="A showcase of high-performing digital products, platforms, and experiences built to transform ideas into successful businesses."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <OurWork />
      <ContactForm />
    </main>
  );
};

export default CaseStudies;
