export default function AboutUs() {
  const stats = [
    {
      number: "80",
      label: "Engineer and consultants",
    },
    {
      number: "300",
      label: "Satisfied Clients",
    },
    {
      number: "100",
      label: "Projects successfully delivered",
    },
    {
      number: "14",
      label: "Years of Experience",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 text-dark overflow-hidden font-jakarta">
      <div className="relative mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Side: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start justify-center lg:space-y-6 space-y-3">
            {/* Tagline: About Us */}
            <div className="flex items-center gap-2">
              {/* Custom gradient dot bullet point */}
              <span className="w-2 h-2 rounded-full bg-[linear-gradient(104.04deg,#00235A_8.33%,#004BC0_93.33%)]" />
              <span className="text-green text-[22px] font-bold tracking-wide">
                About Us
              </span>
            </div>

            {/* Title Heading */}
            <h2 className="max-w-[658px] text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wide text-dark text-center lg:text-left">
              Empowering Your Success With Our Solutions
            </h2>

            {/* Body copy */}
            <p className="text-sm md:text-base text-gray font-medium leading-[24px] tracking-wide max-w-[658px] text-center lg:text-left">
              SoftMind Solutions is a product development company built for
              funded startups and growing businesses that need a reliable
              technology team without the overhead of building one in-house. We
              specialize in AI SaaS product development, managed dedicated
              developers, and long-term technology partnerships, helping
              companies in HealthTech, FinTech, EdTech, and PropTech launch,
              iterate, and scale their platforms with confidence.
            </p>
          </div>

          {/* Right Side: Stats Matrix */}
          <div className="lg:col-span-5 relative">
            {/* Fading Vertical Divider (Rectangle 31291 equivalent) */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-white via-[#EFEFEF] to-white hidden sm:block" />

            {/* Fading Horizontal Divider (Rectangle 31290 equivalent) */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-white via-[#EFEFEF] to-white hidden sm:block" />

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-y-12 sm:gap-y-16 py-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-4"
                >
                  {/* Number Stat with theme-colored Plus symbol */}
                  <div className="flex items-center text-3xl sm:text-4xl lg:text-[46px] lg:leading-[58px] font-bold tracking-wider text-dark mb-4 select-none">
                    <span>{stat.number}</span>
                    <span className="text-green ml-1 font-semibold">+</span>
                  </div>

                  {/* Stat Label */}
                  <span className="text-sm md:text-base text-gray font-medium leading-[20px] tracking-wide max-w-[211px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
