import OurBlogs from "@/components/blogsComponents/ourBlogs";
import FinalCta from "@/components/home/finalCta";
import { Hero } from "@/components/home/Hero";

const Blogs = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="Insights, Ideas &"
        typewriterPrefix=""
        typewriterPhrases={["Industry Trends"]}
        description="Stay updated with expert perspectives, practical tips, and the latest industry trends. Explore articles designed to help you learn, grow, and make informed decisions."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <OurBlogs />
      <FinalCta />
    </main>
  );
};

export default Blogs;
