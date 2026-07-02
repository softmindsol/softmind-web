import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: "SoftMind Solutions | AI SaaS & Custom Software Development Company",
  description:
    "Build scalable AI SaaS products with our expert development team. We help startups and enterprises launch secure, high-performance AI applications faster. Get a free consultation.",
  icons: {
    icon: "/images/favicon.svg",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-white selection:bg-green selection:text-white"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
