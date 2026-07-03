import { Button } from "../ui/button";
import { Typewriter } from "../ui/typewriter";
import CustomButton from "../customs/customButton";

export function Hero({
  title = "AI SaaS & Custom Software Development Company",
  typewriterPrefix = "For ",
  typewriterPhrases = [
    "Startups",
    "Growing Businesses",
    "Enterprises",
    "Visionaries",
  ],
  description = (
    <>
      We build scalable web apps, mobile apps, <b>AI SaaS</b> platforms, and
      dedicated development teams for <b>HealthTech, FinTech, EdTech,</b> and{" "}
      <b>PropTech</b> companies.
    </>
  ),
  primaryButtonText = "Book a Discovery Call",
  primaryButtonLink = "#",
  secondaryButtonText = "View Our Work",
  secondaryButtonLink = "#",
  bottomText = "Loved by 300+ Clients across the world",
  showBottomText = true,
}) {
  return (
    <section className="relative w-full h-full lg:min-h-[700px] flex flex-col items-center justify-center lg:pt-28 pt-20 pb-20 overflow-hidden bg-white animate-in fade-in slide-in-from-top-14 duration-500">
      {/* Background Abstract Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Left Blur (Ellipse 20) */}
        <div className="absolute w-[608px] h-[498px] left-[17px] top-[17px] bg-[#E5F6FE] blur-[35.55px] rounded-full" />

        {/* Right Blur (Ellipse 21) */}
        <div className="absolute w-[386px] h-[386px] left-[60%] lg:left-[974px] top-[150px] lg:top-[243px] bg-[rgba(164,255,225,0.95)] blur-[150px] rounded-full" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[871px] px-12 gap-12">
        {/* Headings */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-[28px] sm:text-[40px] lg:text-[54px] sm:leading-[1.2] lg:leading-[68px] font-bold font-jakarta capitalize text-navy">
            {title}
            {typewriterPhrases && typewriterPhrases.length > 0 && (
              <>
                <br />
                <span className="text-green">{typewriterPrefix}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0CBF83] to-[#004BC0] drop-shadow-sm">
                  <Typewriter
                    phrases={typewriterPhrases}
                    cursor={false}
                    typingSpeed={70}
                    deletingSpeed={40}
                    pauseTime={2500}
                  />
                </span>
              </>
            )}
          </h1>
          <div className="text-[16px] md:text-[18px] leading-[1.5] font-medium font-jakarta tracking-wide text-grey max-w-[823px]">
            {description}
          </div>
        </div>

        {/* Start Project Button */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {primaryButtonText && <CustomButton btnText={primaryButtonText} />}
          {secondaryButtonText && (
            <Button variant="outline" className="px-6">
              {secondaryButtonText}
            </Button>
          )}
        </div>

        {/* Bottom Social Proof Line */}
        {showBottomText && bottomText && (
          <div className="flex items-center gap-4 sm:mt-3 w-full max-w-[581px]">
            <div className="flex-1 h-[2px] bg-[#EFEFEF] rounded-full" />
            <span className="font-jakarta font-medium text-[14px] md:text-[16px] text-[#666666] text-center tracking-wide px-2">
              {bottomText}
            </span>
            <div className="flex-1 h-[2px] bg-[#EFEFEF] rounded-full" />
          </div>
        )}
      </div>
    </section>
  );
}
