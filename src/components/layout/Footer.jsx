export default function Footer() {
  return (
    <footer className="relative w-full bg-[#161616] text-white rounded-t-[25px] pt-16 pb-8 overflow-hidden font-jakarta">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-0">
        {/* Main Footer columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-12">
          {/* Column 1: Contact Us (Spans 3 cols on desktop) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-2xl font-bold tracking-wide">Contact Us</h4>

            <div className="space-y-4">
              {/* Phone item */}
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 bg-[#2C2C2C] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.622l1.018-1.019a1.71 1.71 0 012.418 0l2.418 2.418a1.71 1.71 0 010 2.418L7.092 11.45a11.106 11.106 0 005.457 5.457l1.019-1.018a1.71 1.71 0 012.418 0l2.418 2.418a1.71 1.71 0 010 2.418l-1.019 1.018a1.71 1.71 0 01-2.418 0l-1.019-1.019a19.462 19.462 0 01-5.457-5.457L3.269 8.35a1.71 1.71 0 010-2.418z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 font-medium leading-[15px]">
                    Phone
                  </span>
                  <a
                    href="tel:+923344447957"
                    className="text-sm font-medium leading-[18px] hover:text-[#0CBF83] transition-colors"
                  >
                    +923344447957
                  </a>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 bg-[#2C2C2C] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 font-medium leading-[15px]">
                    Email
                  </span>
                  <a
                    href="mailto:contact@softmindsol.com"
                    className="text-sm font-medium leading-[18px] hover:text-[#0CBF83] transition-colors break-all"
                  >
                    contact@softmindsol.com
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 bg-[#2C2C2C] shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 font-medium leading-[15px]">
                    Location
                  </span>
                  <span className="text-sm font-medium leading-[18px]">
                    333 R-Block First Floor Main Blvd, Johar Town, Lahore, 54770
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Link (Spans 2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-2xl font-bold tracking-wide">Quick Link</h4>
            <ul className="space-y-3.5">
              {[
                "Home",
                "About Us",
                "What We Offer",
                "Our Portfolio",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-base text-white/90 hover:text-[#0CBF83] transition-colors font-normal leading-[20px]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Spans 3 cols on desktop) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-2xl font-bold tracking-wide">Services</h4>
            <ul className="space-y-3.5">
              {[
                "About SoftMind Solutions Leading Software Development Company",
                "Privacy & Policy",
                "Need a Career ?",
                "Online Support",
                "Faqs",
                "Team Member",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-base text-white/90 hover:text-[#0CBF83] transition-colors font-normal leading-[20px] line-clamp-2"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Input and Social Media (Spans 4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-2xl font-bold tracking-wide">Newletters</h4>

            <p className="text-base text-white/90 font-normal leading-[20px]">
              Stay in the know with our latest updates and exclusive offers, by
              subscribing to our newsletter for a direct line to all things
              exciting!
            </p>

            {/* Premium Newsletter input matching Figma specs */}
            <div className="relative flex items-center h-[54px] w-full max-w-[351px] bg-black/10 border border-white/20 rounded-[7px] p-1">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent text-white placeholder-[#CCCCCC] font-semibold text-sm outline-none pl-3.5 pr-[110px] w-full h-full"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-[#0CBF83] text-white hover:bg-[#0aa672] transition-colors rounded-[6px] px-3.5 flex items-center gap-1.5 text-sm font-semibold shadow-[inset_0px_-3px_4px_rgba(255,255,255,0.14)]">
                <span>Sign Up</span>
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>

            {/* Social media badges */}
            <div className="flex items-center gap-3.5 pt-2">
              {/* Facebook */}
              <a
                href="#"
                className="w-[28px] h-[28px] bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4.5 h-4.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              {/* Behance stylized logo */}
              <a
                href="#"
                className="w-[28px] h-[28px] bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm flex items-center justify-center transition-colors text-white font-bold text-xs select-none"
              >
                Bē
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-[28px] h-[28px] bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-[28px] h-[28px] bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Copyright bottom section */}
        <div className="border-t border-white/20 pt-6 mt-12 flex flex-col items-center">
          <p className="text-xs text-white/80 font-medium text-center">
            Copyright @2026 SoftMind Solutions All Right Reserve.
          </p>
        </div>
      </div>
    </footer>
  );
}
