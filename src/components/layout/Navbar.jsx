import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "./Navbar.constants";
import { Logo } from "../../../public/images";
import CustomButton from "../customs/customButton";

export function Navbar() {
  return (
    <nav className="sticky top-8  z-50 flex justify-center w-full px-4 sm:px-8">
      <div className="flex items-center justify-between w-full bg-white/40 rounded-full p-2 shadow-inner h-16 gap-8 backdrop-blur-lg border">
        {/* Logo Section */}
        <Link href="/">
          {/* Using a text logo since the asset might not be available, styled beautifully */}
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" />
          </div>
        </Link>

        {/* Navigation Links - Pill Shape */}
        <div className="hidden lg:flex items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1.5 px-6 py-3 rounded-full text-[16px] font-semibold transition-all duration-300 ${
                item.isActive
                  ? " text-green center-underline"
                  : "text-dark center-underline"
              } font-jakarta tracking-wide`}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <CustomButton btnText="Let's Talk" />
      </div>
    </nav>
  );
}
