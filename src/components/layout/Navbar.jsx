"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, X, Menu, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "./Navbar.constants";
import { Logo } from "../../../public/images";
import CustomButton from "../customs/customButton";

// Services listed in the "What We Offer" dropdown (matching screenshot)
const SERVICES = [
  { label: "AI Services", href: "/services/ai" },
  { label: "PropTech Services", href: "/services/proptech" },
  { label: "EdTech Services", href: "/services/edtech" },
  { label: "HealthTech Services", href: "/services/healthtech" },
  { label: "FinTech Services", href: "/services/fintech" },
  { label: "E-Commerce", href: "/services/ecommerce" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTimerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimerRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 120);
  };

  return (
    <>
      <nav className="sticky top-4 z-50 flex justify-center w-full px-4 sm:px-8 font-jakarta">
        <div className="flex items-center justify-between w-full bg-white/60 backdrop-blur-xl rounded-full px-4 py-2 shadow-[0_4px_30px_rgba(0,35,90,0.08)] border border-white/80 h-16 gap-8 transition-all duration-300">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={Logo}
              alt="SoftMind Solutions Logo"
              className="h-9 w-auto"
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isServices = item.hasDropdown;

              if (isServices) {
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-200 group ${
                        dropdownOpen
                          ? "text-green bg-green/5"
                          : "text-dark hover:text-green hover:bg-green/5"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          dropdownOpen ? "rotate-180 text-green" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Panel */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[220px] bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,35,90,0.14)] border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                        dropdownOpen
                          ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="p-2 flex flex-col gap-0.5">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            onClick={() => setDropdownOpen(false)}
                            className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-150 group/item ${
                              service.highlight
                                ? "text-green hover:bg-green/8"
                                : "text-dark hover:text-green hover:bg-green/5"
                            }`}
                          >
                            <span
                              className={
                                service.highlight
                                  ? "underline underline-offset-4 decoration-green"
                                  : ""
                              }
                            >
                              {service.label}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-200 ${
                    item.isActive
                      ? "text-green"
                      : "text-dark hover:text-green hover:bg-green/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* ── CTA Button (Desktop) ── */}
          <div className="hidden lg:flex items-center shrink-0">
            <CustomButton btnText="Book a Free Discovery Call" />
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-navy/5 hover:bg-navy/10 text-navy transition-all duration-200 active:scale-95 shrink-0"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer Overlay ── */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-navy/30 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Panel - slides in from top */}
        <div
          className={`absolute mx-12 top-21 left-0 right-0 rounded-2xl bg-white backdrop-blur-xl shadow-[0_20px_60px_rgba(0,35,90,0.2)] border border-navy font-jakarta overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Mobile drawer content */}
          <div className="flex flex-col px-6 py-8 gap-2">
            {NAV_ITEMS.map((item, idx) => {
              const isServices = item.hasDropdown;

              if (isServices) {
                return (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    {/* Toggle button – collapsed by default */}
                    <button
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className="flex items-center justify-between w-full px-4 py-3 text-[16px] font-bold text-dark transition-all hover:text-green hover:bg-green/5 rounded-xl"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-green transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Collapsible sub-menu, off by default */}
                    <div
                      className={`ml-4 flex flex-col border-l-2 border-green/20 pl-4 gap-0.5 overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileServicesOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {SERVICES.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 py-2 text-[15px] font-semibold text-dark/80 hover:text-green transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-1.5 px-4 py-3 rounded-xl text-[16px] font-bold transition-all duration-200 ${
                    item.isActive
                      ? "text-green bg-green/5"
                      : "text-dark hover:text-green hover:bg-green/5"
                  }`}
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* CTA in mobile drawer */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <CustomButton btnText="Let's Talk" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
