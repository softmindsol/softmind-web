import { Hero } from "@/components/home/Hero";
import ProductDesignShowCase from "@/components/servicesCompoets/productDesignComponents/productDesignShowCase";
import ProductDesignProcess from "@/components/servicesCompoets/productDesignComponents/productDesignProcess";
import ProductDesignOutcomes from "@/components/servicesCompoets/productDesignComponents/productDesignOutcomes";
export const metadata = {
  title: "Product Design | SoftMind Solutions",
  description:
    "Transforming ideas into intuitive, user-centered digital products that drive real business value.",
};

const ProductDesign = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero
        title="Crafting Exceptional"
        typewriterPrefix=""
        typewriterPhrases={["Digital Experiences"]}
        description="Building scalable, AI-driven SaaS platforms that automate workflows, unlock insights, and accelerate business growth."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText={null}
        showBottomText={false}
      />
      <ProductDesignShowCase />
      <ProductDesignProcess />
      <ProductDesignOutcomes />
    </main>
  );
};

export default ProductDesign;
