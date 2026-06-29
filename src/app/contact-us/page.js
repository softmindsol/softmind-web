import ContactHero from "@/components/contactUsComponents/ContactHero";
import ContactForm from "@/components/contactUsComponents/ContactForm";

export const metadata = {
  title: "Contact Us | SoftMind Solutions",
  description: "Get in touch with SoftMind Solutions for your next project.",
};

const ContactUs = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <ContactHero />
      <ContactForm />
    </main>
  );
};

export default ContactUs;
