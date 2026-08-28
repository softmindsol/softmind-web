const StEngagementModels = () => {
  const MODELS = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Dedicated QA Team",
      desc: "Build a dedicated offshore QA team that works exclusively on your product and becomes an extension of your internal team.",
      highlight: "Best for ongoing products",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Project-Based Testing",
      desc: "Get a focused QA team for a specific project, release, application, or testing requirement.",
      highlight: "Best for specific releases",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      title: "Staff Augmentation",
      desc: "Add testing expertise whenever your internal team needs additional capacity or specialized skills.",
      highlight: "Best for scaling fast",
    },
  ];
  return (
    <div className="relative w-full bg-black py-16 md:py-24 overflow-hidden font-jakarta">
      <div className="mx-auto px-6 md:px-12 max-w-[1380px]">
        <div className=" text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            <span className="text-green text-xs font-bold tracking-[2.5px] uppercase">
              Engagement Models
            </span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight max-w-[680px] mx-auto">
            Flexible Offshore QA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0]">
              Engagement Models
            </span>
          </h2>
          <p className="mt-4 text-[15px] md:text-[16px] text-white leading-[1.75] font-medium max-w-[600px] mx-auto">
            Whether you need specialized testing expertise or a dedicated
            offshore QA team, choose an engagement model that fits your
            business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {MODELS.map((model, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col gap-5 p-7 rounded-[22px] border border-gray-100 bg-white shadow-[0_2px_16px_rgba(0,35,90,0.06)] hover:border-green/30 hover:shadow-[0_12px_40px_rgba(12,191,131,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-[15%] right-[15%] h-[2px] rounded-full bg-gradient-to-r from-transparent via-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-green/10 group-hover:bg-green group-hover:text-white text-green flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_4px_16px_rgba(12,191,131,0.35)]">
                {model.icon}
              </div>
              {/* Highlight badge */}
              <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-green bg-green/10 px-3 py-1 rounded-full self-start border border-green/15">
                {model.highlight}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[17px] font-bold text-navy group-hover:text-green transition-colors duration-200 leading-snug">
                  {model.title}
                </h3>
                <p className="text-[13.5px] text-grey leading-[1.65] font-medium">
                  {model.desc}
                </p>
              </div>
              {/* Arrow link */}
              <div className="mt-auto pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-green opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  Learn more
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StEngagementModels;
