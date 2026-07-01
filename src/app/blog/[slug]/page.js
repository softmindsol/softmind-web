import React from "react";
import Image from "next/image";
import Link from "next/link";
import FinalCta from "@/components/home/finalCta";
import { ArrowLeft, LinkIcon, Mail } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const blogPosts = {
  "blog-detail": {
    title: "The Future of AI in Modern Businesses",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    date: "June 6, 2026",
    readTime: "15 min read",
    author: "Written by User name",
  },
  "reshaping-real-estate": {
    title: "How Technology is Reshaping Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    date: "June 8, 2026",
    readTime: "12 min read",
    author: "Written by User name",
  },
  "health-tech-insights": {
    title: "Health Tech Insights & Innovations",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&w=1600&q=80",
    date: "June 10, 2026",
    readTime: "10 min read",
    author: "Written by User name",
  },
  "edtech-trends": {
    title: "EdTech Trends & Insights",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
    date: "June 12, 2026",
    readTime: "8 min read",
    author: "Written by User name",
  },
  "fintech-trends": {
    title: "FinTech Trends & Insights",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    date: "June 14, 2026",
    readTime: "14 min read",
    author: "Written by User name",
  },
  "reshaping-retail": {
    title: "How Technology is Reshaping Retail",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&q=80",
    date: "June 16, 2026",
    readTime: "11 min read",
    author: "Written by User name",
  },
};

export default function BlogDetail({ params }) {
  // Use slug from URL or fallback to the first blog if not found
  const slug = params?.slug || "blog-detail";
  const post = blogPosts[slug] || blogPosts["blog-detail"];

  return (
    <main className="w-full flex flex-col bg-white text-[#161616] font-jakarta">
      {/* Top Banner Section */}
      <section className="w-full relative px-4 md:px-8 pt-12 pb-20 max-w-[1400px] mx-auto">
        <div className="w-full mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-green transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blogs
          </Link>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[300px] md:h-[500px] relative rounded-2xl overflow-hidden mb-[-60px] z-0 shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title Box */}
        <div className="relative z-10 w-[95%] md:w-[85%] mx-auto bg-[#F4F4F5] rounded-[20px] p-8 md:p-12 shadow-md flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 max-w-[800px] leading-tight text-navy">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center border-2 border-white shadow-sm">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold text-[15px]">{post.author}</p>
                <p className="text-sm text-gray-500">Author</p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 text-gray-500 font-medium">
              <span>{post.date}</span> <span className="mx-2">•</span>{" "}
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full bg-[#F9FAFB] py-16 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Sticky Social Sidebar */}
          <aside className="w-full lg:w-[80px] shrink-0">
            <div className="sticky top-32 flex lg:flex-col gap-4 items-center justify-center lg:justify-start">
              <a
                href="#"
                className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#0B63BD] hover:text-white hover:border-[#0B63BD] transition-all duration-300 shadow-sm"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#0862F7] hover:text-white hover:border-[#0862F7] transition-all duration-300 shadow-sm"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
              <button className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#F67503] hover:text-white hover:border-[#F67503] transition-all duration-300 shadow-sm">
                <LinkIcon className="w-5 h-5" />
              </button>
            </div>
          </aside>

          {/* Article Content */}
          <article className="flex-1 max-w-[850px] text-[17px] leading-[1.8] text-gray-700 font-medium">
            <p className="mb-8">
              Artificial Intelligence (AI) is no longer a futuristic concept —
              it has become a true driver of innovation and business growth.
              Organizations across the globe are integrating AI into their core
              operations to improve decision-making, enhance customer
              experiences, and unlock new opportunities. As technology continues
              to evolve, AI is transforming the way businesses operate, helping
              them become more agile and competitive.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-12">
              What is AI in Business?
            </h2>
            <p className="mb-6">
              AI in business refers to the use of intelligent systems and
              algorithms that can analyze data, recognize patterns, make
              predictions, and automate tasks that traditionally required human
              intelligence. These technologies include:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Machine Learning (ML)</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Computer Vision</li>
              <li>Predictive Analytics</li>
              <li>Generative AI</li>
              <li>Robotic Process Automation (RPA)</li>
            </ul>
            <p className="mb-12">
              By integrating these technologies into daily operations,
              businesses can streamline processes and improve overall
              performance.
            </p>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-12">
              How AI is Transforming Modern Businesses
            </h2>

            <h3 className="text-[19px] font-bold text-navy mb-2 mt-8">
              1. Automating Repetitive Tasks
            </h3>
            <p className="mb-4">
              AI-powered automation reduces the need for manual intervention in
              routine processes such as:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Data entry</li>
              <li>Invoice processing</li>
              <li>Customer support</li>
              <li>Scheduling and reporting</li>
            </ul>
            <p className="mb-8">
              This allows employees to focus on strategic and creative work,
              while improving productivity and reducing operational costs.
            </p>

            <h3 className="text-[19px] font-bold text-navy mb-2 mt-8">
              2. Enhancing Customer Experience
            </h3>
            <p className="mb-8">
              Modern customers expect fast, personalized, and seamless
              interactions. AI helps businesses deliver this through virtual
              assistants, personalized recommendations, and automated customer
              support. AI systems can analyze customer behavior and preferences
              to provide highly relevant experiences that increase engagement
              and loyalty.
            </p>

            <h3 className="text-[19px] font-bold text-navy mb-2 mt-8">
              3. Improving Decision-Making
            </h3>
            <p className="mb-4">
              Businesses generate massive amounts of data every day. AI can
              process and analyze this information in real-time, helping leaders
              make informed decisions based on:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Market trends</li>
              <li>Customer insights</li>
              <li>Sales forecasts</li>
              <li>Risk assessments</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-12">
              Key Benefits of AI for Businesses
            </h2>
            <div className="space-y-6 mb-12">
              <div>
                <strong className="text-navy block mb-1">
                  Increased Efficiency
                </strong>
                <span>
                  AI automates time-consuming tasks, allowing teams to
                  accomplish more with fewer resources.
                </span>
              </div>
              <div>
                <strong className="text-navy block mb-1">Cost Reduction</strong>
                <span>
                  Automated and predictive analytics help reduce operational
                  expenses and minimize costly errors.
                </span>
              </div>
              <div>
                <strong className="text-navy block mb-1">
                  Better Customer Satisfaction
                </strong>
                <span>
                  AI enables personalized interaction and faster support,
                  leading to improved customer experiences.
                </span>
              </div>
              <div>
                <strong className="text-navy block mb-1">
                  Enhanced Accuracy
                </strong>
                <span>
                  AI systems can process large datasets with greater precision
                  than manual methods.
                </span>
              </div>
              <div>
                <strong className="text-navy block mb-1">
                  Competitive Advantage
                </strong>
                <span>
                  Organizations that adopt AI gain valuable insights and
                  capabilities that help them stand out of competition.
                </span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-navy mb-4 mt-12">
              Conclusion
            </h2>
            <p className="mb-8">
              AI is reshaping modern businesses by automating operations,
              enhancing customer experiences, and driving decision-making and
              driving innovation. As AI technologies continue to advance,
              businesses that embrace intelligently will position themselves for
              long-term growth and success. The future belongs to organizations
              that can effectively blend human expertise with the power of
              artificial intelligence.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
