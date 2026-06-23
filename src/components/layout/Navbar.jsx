"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, X, Menu, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "./Navbar.constants";
import { Logo } from "../../../public/images";
import CustomButton from "../customs/customButton";

// ─── Mega-menu data ────────────────────────────────────────────────────────
const MEGA_MENU = [
  {
    category: "Development Services",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    viewAllLabel: "View all Development Services",
    viewAllHref: "/services/development",
    items: [
      {
        label: "AI SaaS Development",
        desc: "Build intelligent, scalable and secure AI-powered SaaS products.",
        href: "/services/ai-saas",
      },
      {
        label: "Custom Software Development",
        desc: "End-to-end custom software solutions tailored to your business needs.",
        href: "/services/custom-software",
      },
      {
        label: "Mobile App Development",
        desc: "High-performance mobile apps for iOS and Android platforms.",
        href: "/services/mobile-app",
      },
      {
        label: "Web Application Development",
        desc: "Modern, responsive and scalable web applications.",
        href: "/services/web-app",
      },
    ],
  },
  {
    category: "Product & Design Services",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    viewAllLabel: "View all Product & Design Services",
    viewAllHref: "/services/design",
    items: [
      {
        label: "Product Design (UX/UI)",
        desc: "User-centric design that creates intuitive and delightful experiences.",
        href: "/services/product-design",
      },
      {
        label: "UX Research & Strategy",
        desc: "In-depth research and strategy to build products users truly need.",
        href: "/services/ux-research",
      },
      {
        label: "Design Systems",
        desc: "Scalable design systems for consistency and faster development.",
        href: "/services/design-systems",
      },
      {
        label: "MVP Development",
        desc: "Validate your idea quickly with a lean and powerful MVP.",
        href: "/services/mvp",
      },
    ],
  },
  {
    category: "Team & Engagement Services",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    viewAllLabel: "View all Team & Engagement Services",
    viewAllHref: "/services/team",
    items: [
      {
        label: "Dedicated Development Teams",
        desc: "Hire dedicated developers to build your product like their own.",
        href: "/services/dedicated-teams",
      },
      {
        label: "Staff Augmentation",
        desc: "Extend your team with pre-vetted experts and specialists.",
        href: "/services/staff-augmentation",
      },
      {
        label: "Project-Based Engagement",
        desc: "Fixed scope, budget and timeline for defined project goals.",
        href: "/services/project-based",
      },
      {
        label: "Maintenance & Support",
        desc: "Ongoing support and maintenance to keep your product running smoothly.",
        href: "/services/maintenance",
      },
    ],
  },
];

// ─── Service icons mapping ──────────────────────────────────────────────────
const ServiceIcon = ({ index, categoryIndex }) => {
  const icons = [
    // Development icons
    [
      <svg
        key="ai"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>,
      <svg
        key="custom"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>,
      <svg
        key="mobile"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>,
      <svg
        key="web"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>,
    ],
    // Design icons
    [
      <svg
        key="ux"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>,
      <svg
        key="research"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>,
      <svg
        key="ds"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>,
      <svg
        key="mvp"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>,
    ],
    // Team icons
    [
      <svg
        key="team"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>,
      <svg
        key="staff"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>,
      <svg
        key="project"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>,
      <svg
        key="support"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72c.13.96.4 1.9.78 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.9.38 1.85.65 2.81.78a2 2 0 0 1 1.72 2.03z" />
      </svg>,
    ],
  ];
  return icons[categoryIndex]?.[index] ?? null;
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState(null);
  const dropdownRef = useRef(null);
  const dropdownTimerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-200 ${
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

                    {/* ── Mega-menu Panel ── */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[1024px] bg-white rounded-2xl shadow-[0_24px_64px_rgba(0,35,90,0.16)] border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                        dropdownOpen
                          ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-y-95 -translate-y-3 pointer-events-none"
                      }`}
                    >
                      <div className="grid grid-cols-3 divide-x divide-gray-100">
                        {MEGA_MENU.map((col, colIdx) => (
                          <div key={col.category} className="p-5 flex flex-col">
                            {/* Column header */}
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                              <span className="text-green">{col.icon}</span>
                              <span className="text-[11px] font-bold uppercase tracking-widest text-green">
                                {col.category}
                              </span>
                            </div>

                            {/* Service items */}
                            <div className="flex flex-col gap-0.5 flex-1">
                              {col.items.map((service, idx) => (
                                <Link
                                  key={service.label}
                                  href={service.href}
                                  onClick={() => setDropdownOpen(false)}
                                  className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-green/[0.06] border border-transparent hover:border-green/10"
                                >
                                  {/* Service icon box */}
                                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-green/10 flex items-center justify-center transition-colors duration-150 text-gray-400 group-hover:text-green mt-0.5">
                                    <ServiceIcon
                                      index={idx}
                                      categoryIndex={colIdx}
                                    />
                                  </div>
                                  {/* Text */}
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="text-[13.5px] font-semibold text-dark group-hover:text-green transition-colors duration-150 leading-tight">
                                        {service.label}
                                      </span>
                                      <ArrowRight className="w-3.5 h-3.5 text-green opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
                                    </div>
                                    <p className="text-[12px] text-gray-400 mt-0.5 leading-snug line-clamp-2">
                                      {service.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* View all link */}
                            <Link
                              href={col.viewAllHref}
                              onClick={() => setDropdownOpen(false)}
                              className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[12.5px] font-semibold text-green hover:gap-2.5 transition-all duration-200 group"
                            >
                              {col.viewAllLabel}
                              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Link>
                          </div>
                        ))}
                      </div>

                      {/* Bottom trust bar */}
                      <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-3 flex items-center gap-3">
                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                          Trusted by
                        </span>
                        <div className="flex items-center gap-5 text-[11px] font-semibold text-gray-400">
                          {["Startups", "Scale-ups", "Enterprises"].map((t) => (
                            <span key={t} className="flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-green inline-block" />
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="ml-auto">
                          <span className="text-[11px] text-gray-400">
                            Not sure where to start?{" "}
                            <Link
                              href="/contact"
                              className="text-green font-semibold hover:underline underline-offset-2"
                            >
                              Talk to an expert →
                            </Link>
                          </span>
                        </div>
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

        {/* Drawer Panel */}
        <div
          className={`absolute mx-4 sm:mx-8 top-20 left-0 right-0 rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,35,90,0.18)] border border-gray-100 font-jakarta overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ overflowY: "auto" }}
        >
          <div className="flex flex-col px-4 py-6 gap-1">
            {NAV_ITEMS.map((item, idx) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="flex flex-col">
                    {/* Services toggle */}
                    <button
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-bold text-dark transition-all hover:text-green hover:bg-green/5 rounded-xl"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-green transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Expanded mobile mega-menu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileServicesOpen
                          ? "max-h-[2000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {MEGA_MENU.map((col, colIdx) => (
                        <div key={col.category} className="mt-1">
                          {/* Category toggle */}
                          <button
                            onClick={() =>
                              setMobileExpandedCategory(
                                mobileExpandedCategory === colIdx
                                  ? null
                                  : colIdx,
                              )
                            }
                            className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-green/5 transition-all duration-150"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-green">{col.icon}</span>
                              <span className="text-[11px] font-bold uppercase tracking-widest text-green">
                                {col.category}
                              </span>
                            </div>
                            <ChevronDown
                              className={`w-3.5 h-3.5 text-green transition-transform duration-300 ${
                                mobileExpandedCategory === colIdx
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>

                          {/* Category items */}
                          <div
                            className={`ml-2 pl-3 border-l-2 border-green/20 overflow-hidden transition-all duration-300 ${
                              mobileExpandedCategory === colIdx
                                ? "max-h-[800px] opacity-100 mt-1"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            {col.items.map((service, sIdx) => (
                              <Link
                                key={service.label}
                                href={service.href}
                                onClick={() => setMobileOpen(false)}
                                className="group flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-green/5 transition-all duration-150 my-0.5"
                              >
                                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-green/10 flex items-center justify-center transition-colors duration-150 text-gray-400 group-hover:text-green mt-0.5">
                                  <ServiceIcon
                                    index={sIdx}
                                    categoryIndex={colIdx}
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-[13px] font-semibold text-dark group-hover:text-green transition-colors duration-150 leading-tight">
                                    {service.label}
                                  </p>
                                  <p className="text-[11.5px] text-gray-400 mt-0.5 leading-snug">
                                    {service.desc}
                                  </p>
                                </div>
                                <ArrowRight className="w-3 h-3 text-green opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0 mt-1" />
                              </Link>
                            ))}

                            <Link
                              href={col.viewAllHref}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-1.5 px-3 py-2 text-[12px] font-semibold text-green hover:gap-2 transition-all duration-200"
                            >
                              {col.viewAllLabel}
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
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
                  className={`flex items-center gap-1.5 px-4 py-3 rounded-xl text-[15px] font-bold transition-all duration-200 ${
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
