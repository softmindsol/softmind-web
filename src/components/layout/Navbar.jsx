"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, X, Menu, ArrowRight, CheckCircle2 } from "lucide-react";
import { NAV_ITEMS } from "./Navbar.constants";
import { Logo } from "../../../public/images";
import CustomButton from "../customs/customButton";

// ─── Services Mega-menu data ───────────────────────────────────────────────
const SERVICES_MEGA_MENU = [
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
      {
        label: "MVP Development",
        desc: "Validate your idea quickly with a lean and powerful MVP.",
        href: "/services/mvp",
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

// ─── Industries Mega-menu data ─────────────────────────────────────────────
const INDUSTRIES_MEGA_MENU = {
  header: {
    label: "Industries We Serve",
    desc: "Domain-focused software solutions tailored to the unique challenges of your industry.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  industries: [
    {
      label: "HealthTech",
      desc: "Digital solutions that improve patient care, streamline operations and ensure regulatory compliance.",
      href: "/industries/healthtech",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      label: "PropTech",
      desc: "Smart real estate technology solutions for buying, selling, managing and investing in properties.",
      href: "/industries/proptech",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      label: "FinTech",
      desc: "Secure, scalable fintech solutions that power digital banking, payments and financial services.",
      href: "/industries/fintech",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="4" width="22" height="16" rx="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
    },
    {
      label: "EdTech",
      desc: "Engaging digital learning platforms that enhance education outcomes and drive student success.",
      href: "/industries/edtech",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      label: "E-Commerce",
      desc: "High-performance e-commerce platforms that increase conversions and scale your business.",
      href: "/industries/ecommerce",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
    },
    {
      label: "AI Products",
      desc: "AI-powered applications and platforms that automate workflows and unlock new opportunities.",
      href: "/industries/ai-products",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
  ],
  // sidebar: {
  //   eyebrow: "Why SoftMind?",
  //   title: "Deep Industry Expertise.",
  //   titleAccent: "Real Impact.",
  //   desc: "We understand your industry challenges and build software solutions that drive measurable outcomes.",
  //   points: [
  //     "Domain expertise",
  //     "Regulatory understanding",
  //     "Scalable architecture",
  //     "Future-ready technology",
  //     "Long-term partnership",
  //   ],
  //   ctaLabel: "Discuss Your Industry Needs",
  //   ctaHref: "/contact",
  // },
};

// ─── Service icons ─────────────────────────────────────────────────────────
const ServiceIcon = ({ index, categoryIndex }) => {
  const icons = [
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
    ],
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

// ─── Shared dropdown transition classes ───────────────────────────────────
const dropdownTransition = (open) =>
  `absolute top-full mt-4 bg-white rounded-2xl shadow-[0_24px_64px_rgba(0,35,90,0.16)] border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
    open
      ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
      : "opacity-0 scale-y-95 -translate-y-3 pointer-events-none"
  }`;

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  // Track which desktop dropdown is open: null | "services" | "industries"
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState(null);

  const servicesRef = useRef(null);
  const industriesRef = useRef(null);
  const timerRef = useRef(null);

  const openDropdown = (name) => {
    clearTimeout(timerRef.current);
    setActiveDropdown(name);
  };

  const scheduleClose = () => {
    timerRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target) &&
        industriesRef.current &&
        !industriesRef.current.contains(e.target)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock scroll on mobile
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
              // ── Services dropdown ──────────────────────────────────────
              if (item.hasDropdown && item.dropdownType === "services") {
                const isOpen = activeDropdown === "services";
                return (
                  <div
                    key={item.label}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={() => openDropdown("services")}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-200 ${isOpen ? "text-green bg-green/5" : "text-dark hover:text-green hover:bg-green/5"}`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-green" : ""}`}
                      />
                    </button>

                    <div
                      className={`${dropdownTransition(isOpen)} left-1/2 -translate-x-1/2 w-[960px]`}
                    >
                      <div className="grid grid-cols-3 divide-x divide-gray-100">
                        {SERVICES_MEGA_MENU.map((col, colIdx) => (
                          <div key={col.category} className="p-5 flex flex-col">
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                              <span className="text-green">{col.icon}</span>
                              <span className="text-[11px] font-bold uppercase tracking-widest text-green">
                                {col.category}
                              </span>
                            </div>
                            <div className="flex flex-col gap-0.5 flex-1">
                              {col.items.map((service, idx) => (
                                <Link
                                  key={service.label}
                                  href={service.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-green/[0.06] border border-transparent hover:border-green/10"
                                >
                                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-green/10 flex items-center justify-center transition-colors duration-150 text-gray-400 group-hover:text-green mt-0.5">
                                    <ServiceIcon
                                      index={idx}
                                      categoryIndex={colIdx}
                                    />
                                  </div>
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
                            <Link
                              href={col.viewAllHref}
                              onClick={() => setActiveDropdown(null)}
                              className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[12.5px] font-semibold text-green hover:gap-2.5 transition-all duration-200 group"
                            >
                              {col.viewAllLabel}
                              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Link>
                          </div>
                        ))}
                      </div>
                      {/* Trust bar */}
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

              // ── Industries dropdown ────────────────────────────────────
              if (item.hasDropdown && item.dropdownType === "industries") {
                const isOpen = activeDropdown === "industries";
                const { header, industries, sidebar } = INDUSTRIES_MEGA_MENU;
                return (
                  <div
                    key={item.label}
                    ref={industriesRef}
                    className="relative"
                    onMouseEnter={() => openDropdown("industries")}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-200 ${isOpen ? "text-green bg-green/5" : "text-dark hover:text-green hover:bg-green/5"}`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-green" : ""}`}
                      />
                    </button>

                    <div
                      className={`${dropdownTransition(isOpen)} left-1/2 -translate-x-1/2 w-[900px]`}
                    >
                      <div className="flex">
                        {/* ── Left: industry grid ── */}
                        <div className="flex-1 p-6">
                          {/* Header row */}
                          <div className="flex items-center gap-3 mb-5 pb-2.5 border-b border-gray-100">
                            <div className="flex items-center justify-center text-green flex-shrink-0">
                              {header.icon}
                            </div>
                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-widest text-green">
                                {header.label}
                              </p>
                              {/* <p className="text-[12px] text-gray-400 leading-snug max-w-xs">
                                {header.desc}
                              </p> */}
                            </div>
                          </div>

                          {/* 3-column grid of industries */}
                          <div className="grid grid-cols-3 divide-x divide-gray-100">
                            {[0, 2, 4].map((startIndex) => (
                              <div
                                key={startIndex}
                                className="flex flex-col gap-0.5 px-4"
                              >
                                {industries
                                  .slice(startIndex, startIndex + 2)
                                  .map((industry) => (
                                    <Link
                                      key={industry.label}
                                      href={industry.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-green/[0.06] border border-transparent hover:border-green/10"
                                    >
                                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-green/10 flex items-center justify-center transition-colors duration-150 text-gray-400 group-hover:text-green mt-0.5">
                                        {industry.icon}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2">
                                          <span className="text-[13.5px] font-semibold text-dark group-hover:text-green transition-colors duration-150 leading-tight">
                                            {industry.label}
                                          </span>
                                          <ArrowRight className="w-3.5 h-3.5 text-green opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
                                        </div>
                                        <p className="text-[12px] text-gray-400 mt-0.5 leading-snug line-clamp-2">
                                          {industry.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* ── Right: sidebar panel ── */}
                        {/* <div className="w-[248px] flex-shrink-0 bg-gray-50/70 border-l border-gray-100 p-6 flex flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                            {sidebar.eyebrow}
                          </span>
                          <h3 className="text-[18px] font-bold text-dark leading-snug mb-1">
                            {sidebar.title}{" "}
                            <span className="text-green italic">
                              {sidebar.titleAccent}
                            </span>
                          </h3>
                          <p className="text-[12px] text-gray-500 leading-relaxed mb-4">
                            {sidebar.desc}
                          </p>

                          <ul className="flex flex-col gap-2 mb-6">
                            {sidebar.points.map((point) => (
                              <li
                                key={point}
                                className="flex items-center gap-2 text-[12.5px] font-medium text-dark/80"
                              >
                                <div className="w-4 h-4 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
                                  <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-green"
                                  >
                                    <polyline points="2 6 5 9 10 3" />
                                  </svg>
                                </div>
                                {point}
                              </li>
                            ))}
                          </ul>

                          <Link
                            href={sidebar.ctaHref}
                            onClick={() => setActiveDropdown(null)}
                            className="mt-auto flex items-center justify-center gap-2 bg-green text-white text-[13px] font-semibold px-4 py-3 rounded-xl hover:bg-green/90 transition-colors duration-200 group"
                          >
                            {sidebar.ctaLabel}
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                              <ArrowRight className="w-3 h-3" />
                            </div>
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                );
              }

              // ── Regular nav link ───────────────────────────────────────
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-200 ${
                    isActive
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
            <Link href="/contact-us">
              <CustomButton btnText="Book a Free Discovery Call" />
            </Link>
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

      {/* ════════════════════════════════════════════════════════════════
          Mobile Drawer
      ════════════════════════════════════════════════════════════════ */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-navy/30 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute mx-4 sm:mx-8 top-20 left-0 right-0 rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,35,90,0.18)] border border-gray-100 font-jakarta overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"}`}
          style={{ overflowY: "auto" }}
        >
          <div className="flex flex-col px-4 py-6 gap-1">
            {NAV_ITEMS.map((item, idx) => {
              // ── Mobile Services ──────────────────────────────────────
              if (item.hasDropdown && item.dropdownType === "services") {
                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen((p) => !p)}
                      className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-bold text-dark transition-all hover:text-green hover:bg-green/5 rounded-xl"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-green transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileServicesOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      {SERVICES_MEGA_MENU.map((col, colIdx) => (
                        <div key={col.category} className="mt-1">
                          <button
                            onClick={() =>
                              setMobileExpandedCategory(
                                mobileExpandedCategory === `s-${colIdx}`
                                  ? null
                                  : `s-${colIdx}`,
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
                              className={`w-3.5 h-3.5 text-green transition-transform duration-300 ${mobileExpandedCategory === `s-${colIdx}` ? "rotate-180" : ""}`}
                            />
                          </button>
                          <div
                            className={`ml-2 pl-3 border-l-2 border-green/20 overflow-hidden transition-all duration-300 ${mobileExpandedCategory === `s-${colIdx}` ? "max-h-[800px] opacity-100 mt-1" : "max-h-0 opacity-0"}`}
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
                              {col.viewAllLabel}{" "}
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // ── Mobile Industries ────────────────────────────────────
              if (item.hasDropdown && item.dropdownType === "industries") {
                const { industries, sidebar } = INDUSTRIES_MEGA_MENU;
                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      onClick={() => setMobileIndustriesOpen((p) => !p)}
                      className="flex items-center justify-between w-full px-4 py-3 text-[15px] font-bold text-dark transition-all hover:text-green hover:bg-green/5 rounded-xl"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-green transition-transform duration-300 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileIndustriesOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      {/* Industry items */}
                      <div className="ml-2 pl-3 border-l-2 border-green/20 mt-1 flex flex-col gap-0.5">
                        {industries.map((industry) => (
                          <Link
                            key={industry.label}
                            href={industry.href}
                            onClick={() => setMobileOpen(false)}
                            className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-green/5 transition-all duration-150"
                          >
                            <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-green/10 flex items-center justify-center transition-colors duration-150 text-gray-400 group-hover:text-green mt-0.5">
                              {industry.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-semibold text-dark group-hover:text-green transition-colors duration-150 leading-tight">
                                {industry.label}
                              </p>
                              {/* <p className="text-[11.5px] text-gray-400 mt-0.5 leading-snug">
                                {industry.desc}
                              </p> */}
                            </div>
                            <ArrowRight className="w-3 h-3 text-green opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0 mt-1" />
                          </Link>
                        ))}
                      </div>

                      {/* Mobile sidebar summary card */}
                      {/* <div className="mx-2 mt-3 mb-1 p-4 rounded-xl bg-gradient-to-br from-green/5 to-green/10 border border-green/15">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-green mb-1">
                          {sidebar.eyebrow}
                        </p>
                        <p className="text-[14px] font-bold text-dark leading-snug mb-1">
                          {sidebar.title}{" "}
                          <span className="text-green italic">
                            {sidebar.titleAccent}
                          </span>
                        </p>
                        <p className="text-[12px] text-gray-500 leading-relaxed mb-3">
                          {sidebar.desc}
                        </p>
                        <Link
                          href={sidebar.ctaHref}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-center gap-2 bg-green text-white text-[13px] font-semibold px-4 py-2.5 rounded-xl hover:bg-green/90 transition-colors duration-200"
                        >
                          {sidebar.ctaLabel}{" "}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div> */}
                    </div>
                  </div>
                );
              }

              // ── Regular mobile link ──────────────────────────────────
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-1.5 px-4 py-3 rounded-xl text-[15px] font-bold transition-all duration-200 ${
                    isActive
                      ? "text-green bg-green/5"
                      : "text-dark hover:text-green hover:bg-green/5"
                  }`}
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* CTA */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link href="/contact-us">
                <CustomButton btnText="Book a Free Discovery Call" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
