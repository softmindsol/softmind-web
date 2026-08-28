import { FiUsers, FiMonitor, FiTrendingUp, FiArrowRight } from "react-icons/fi";

const StEngagementModels = () => {
  const MODELS = [
    {
      icon: <FiUsers size={24} />,
      title: "Dedicated QA Team",
      desc: "Build a dedicated offshore QA team that works exclusively on your product and becomes an extension of your internal team.",
      highlight: "Best for ongoing products",
    },
    {
      icon: <FiMonitor size={24} />,
      title: "Project-Based Testing",
      desc: "Get a focused QA team for a specific project, release, application, or testing requirement.",
      highlight: "Best for specific releases",
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: "Staff Augmentation",
      desc: "Add testing expertise whenever your internal team needs additional capacity or specialized skills.",
      highlight: "Best for scaling fast",
    },
  ];

  return (
    <div className="relative w-full bg-black py-16 md:py-24 overflow-hidden font-jakarta">
      <div className="mx-auto px-6 md:px-12 max-w-[1380px]">
        <div className="text-center mb-12">
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
                  <FiArrowRight size={12} />
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
