"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const WebAppForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <section
      id="contact-form"
      className="w-full bg-[#161616] py-20 px-6 sm:px-12 flex justify-center font-jakarta relative overflow-hidden text-white"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#004BC0]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 relative z-10">
        {/* Left Column: Info */}
        <div className="flex flex-col gap-8 lg:pr-10 pt-4">
          <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#00235A] to-[#0CBF83]" />
              <span className="text-[16px] sm:text-[18px] font-bold text-[#0CBF83] tracking-wide">
                Ready to Build Your Web Application?
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-bold leading-tight capitalize text-white">
              Turn Your Business Challenge Into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#0CBF83]">
                Scalable Digital Solution
              </span>
            </h2>

            <p className="text-[15px] sm:text-[16px] font-medium text-white/70 leading-[1.6]">
              Have a project in mind? Get in touch with our team to discuss your goals, explore solutions, and turn your ideas into impactful digital products.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4 text-center lg:text-left">
            <div className="flex flex-col gap-1.5">
              <h4 className="text-[18px] font-bold text-white">Email</h4>
              <a
                href="mailto:contact@softmindsol.com"
                className="text-[15px] font-medium text-white/70 hover:text-[#0CBF83] transition-colors"
              >
                contact@softmindsol.com
              </a>
            </div>

            <div className="flex flex-col gap-1.5">
              <h4 className="text-[18px] font-bold text-white">Our Location</h4>
              <p className="text-[15px] font-medium text-white/70 leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                333 R-Block First Floor Main Blvd,
                <br />
                Johar Town, Lahore, 54770
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h4 className="text-[18px] font-bold text-white">Contact Us</h4>
              <a
                href="tel:+923344447957"
                className="text-[15px] font-medium text-white/70 hover:text-[#0CBF83] transition-colors"
              >
                +923344447957
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="w-full bg-[#111111] rounded-[24px] p-8 sm:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#0CBF83]/10 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="flex flex-col gap-2 mb-8 relative z-10">
            <h3 className="text-[28px] sm:text-[32px] font-bold text-white">
              Get in Touch
            </h3>
            <p className="text-[15px] font-medium text-white/60 leading-[1.6]">
              Define your goals and let's build something great.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 relative z-10"
          >
            <div className="flex flex-col">
              <input
                {...register("fullName")}
                type="text"
                placeholder="Full Name"
                className="w-full h-[54px] px-4 rounded-[12px] border border-white/10 text-[15px] text-white placeholder-white/40 focus:outline-none focus:border-[#0CBF83] focus:bg-white/[0.03] transition-all bg-[#ffffff05]"
              />
              {errors.fullName && (
                <span className="text-red-400 text-[13px] mt-1 ml-1">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className="w-full h-[54px] px-4 rounded-[12px] border border-white/10 text-[15px] text-white placeholder-white/40 focus:outline-none focus:border-[#0CBF83] focus:bg-white/[0.03] transition-all bg-[#ffffff05]"
              />
              {errors.email && (
                <span className="text-red-400 text-[13px] mt-1 ml-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                {...register("company")}
                type="text"
                placeholder="Company (Optional)"
                className="w-full h-[54px] px-4 rounded-[12px] border border-white/10 text-[15px] text-white placeholder-white/40 focus:outline-none focus:border-[#0CBF83] focus:bg-white/[0.03] transition-all bg-[#ffffff05]"
              />
            </div>

            <div className="flex flex-col">
              <textarea
                {...register("message")}
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-4 rounded-[12px] border border-white/10 text-[15px] text-white placeholder-white/40 focus:outline-none focus:border-[#0CBF83] focus:bg-white/[0.03] transition-all resize-none bg-[#ffffff05]"
              />
              {errors.message && (
                <span className="text-red-400 text-[13px] mt-1 ml-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-[56px] mt-2 bg-[#0CBF83] hover:bg-[#0aa672] text-[#111111] font-bold text-[16px] rounded-[12px] transition-colors flex justify-center items-center shadow-lg hover:shadow-[#0CBF83]/30"
            >
              Send a message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WebAppForm;
