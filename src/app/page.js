import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";

/**
 * Main Landing Page Component.
 * Server component that composes the page sections for optimal performance and SEO.
 * 
 * @returns {JSX.Element} The rendered home page.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#0CBF83] selection:text-white">
      <Navbar />
      <Hero />
    </main>
  );
}
