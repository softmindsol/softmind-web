"use client";
import Image from "next/image";
import {
  MdOutlineHomeWork,
  MdOutlineManageSearch,
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlinePieChart,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { TbSpeakerphone, TbUsersGroup } from "react-icons/tb";
import { HtSolutions } from "../../../../public/images";

const solutionsData = [
  {
    title: "Custom Healthcare Software Development",
    description:
      "Develop bespoke healthcare applications designed around your workflows, patients, clinicians, and operational requirements.",
    icon: MdOutlineHomeWork,
    position: "left",
  },
  {
    title: "Healthcare Mobile App Development",
    description:
      "Create secure iOS, Android, and cross-platform healthcare applications that improve patient engagement and provide healthcare professionals with access to critical information anytime, anywhere.",
    icon: TbUsersGroup,
    position: "right",
  },
  {
    title: "Telemedicine Platform Development",
    description:
      "Launch secure virtual care platforms featuring video consultations, appointment scheduling, messaging, e-prescriptions, payment integration, and remote care management.",
    icon: MdOutlineManageSearch,
    position: "left",
  },
  {
    title: "Electronic Health Record (EHR) & EMR Development",
    description:
      "Develop interoperable EHR and EMR systems that improve clinical documentation, patient record management, and healthcare data accessibility.",
    icon: MdOutlineAnalytics,
    position: "right",
  },
  {
    title: "Patient Portal Development",
    description:
      "Empower patients with secure self-service portals for appointment booking, medical records, prescriptions, secure messaging, and ongoing engagement.",
    icon: TbSpeakerphone,
    position: "left",
  },
  {
    title: "Remote Patient Monitoring Solutions",
    description:
      "Monitor patients remotely using wearable devices, IoT sensors, and real-time health analytics to improve chronic disease management and preventive care.",
    icon: MdOutlinePieChart,
    position: "right",
  },
  {
    title: "AI Healthcare Software Development",
    description:
      "Leverage artificial intelligence to automate clinical workflows, enhance diagnostics, predict patient risks, optimize operations, and deliver smarter healthcare experiences.",
    icon: MdOutlineDashboard,
    position: "left",
  },
  {
    title: "Healthcare Data & Analytics Solutions",
    description:
      "Transform healthcare data into actionable insights through real-time dashboards, business intelligence, predictive analytics, and performance reporting.",
    icon: MdOutlineManageAccounts,
    position: "right",
  },
];

const HealthTechSolutions = () => {
  return (
    <section className="relative w-full bg-[#161616] py-20 lg:py-24 overflow-hidden font-jakarta">
      {/* Top Glow */}
      <div className="absolute left-1/2 top-[-187px] h-[490px] w-[490px] -translate-x-1/2 rounded-full bg-navy blur-[212.4px] pointer-events-none" />

      <div className="relative z-10 mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 mb-16 lg:mb-20 text-center">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-navy to-[#004BC0]" />
            <h3 className="text-[20px] lg:text-[22px] font-bold tracking-[1px] text-green uppercase">
              Why Choose Us
            </h3>
            {/* <h3 className="text-[20px] lg:text-[22px] font-bold tracking-[1px] text-green uppercase">
              Healthcare Software Development Services
            </h3> */}
          </div>
          <h2 className="max-w-[1000px] text-[24px] md:text-[32px] font-bold leading-[1.3] lg:leading-[44px] tracking-[1px] text-white capitalize">
            Healthcare Software Development Services
          </h2>
          <p className="max-w-[1000px] text-base font-medium tracking-[1px] text-white/75">
            From idea validation to enterprise-scale platforms, we provide
            end-to-end healthcare software development services tailored to your
            business objectives.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="relative w-full">
          {/* Center Image (Absolute for both desktop and mobile) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-full max-w-[500px] lg:max-w-[591px] h-auto flex flex-col items-center justify-center pointer-events-none z-0">
            {/* The Glow under building */}
            <div className="absolute bottom-10 lg:bottom-0 left-1/2 -translate-x-1/2 h-[70px] w-[80%] max-w-[733px] rounded-full bg-blue-500 blur-[54.8px] -z-10" />
            <Image
              src={HtSolutions}
              alt="PropTech Smarter Real Estate"
              className="w-full h-[770px] sm:h-[1079px] object-cover relative z-10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          </div>

          {/* Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {solutionsData.map((solution, index) => {
              const isLeft = solution.position === "left";
              return (
                <div
                  key={index}
                  className={`w-full lg:max-w-[458px] ${
                    isLeft ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                >
                  <SolutionCard data={solution} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionCard = ({ data }) => {
  const Icon = data.icon;
  return (
    <div className="w-full h-full  border border-white/30 rounded-[12px] p-6 lg:p-8 backdrop-blur-md transition-all hover:bg-blue-500/10 hover:border-blue-500/50">
      <div className="flex flex-col gap-6">
        <div className="w-[38px] h-[38px] rounded-full bg-[#1C1C1C] border border-blue-500 flex items-center justify-center">
          <Icon className="w-[20px] h-[20px] text-white" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-[20px] lg:text-[22px] font-bold text-white leading-[28px]">
            {data.title}
          </h3>
          <p className="text-[16px] lg:text-[18px] font-medium text-white/90 leading-[23px]">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthTechSolutions;
