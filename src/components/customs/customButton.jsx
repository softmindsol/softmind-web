const CustomButton = ({ btnText }) => {
  return (
    <button className="relative transition-all duration-300 ease-in-out shadow-[0px_10px_20px_rgba(0,0,0,0.2)] py-2 px-5 bg-navy rounded-full flex items-center justify-center cursor-pointer text-white gap-2.5 font-jakarta font-bold border-[3px] border-white/30 outline-none overflow-hidden text-[15px] group hover:scale-105 hover:border-white/60">
      {btnText}
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:translate-x-1"
      >
        <path
          clipRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
          fillRule="evenodd"
        />
      </svg>
      <span className="absolute w-[100px] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -rotate-45 top-0 -left-[100px] opacity-60 group-hover:animate-[shine_1.5s_ease-out_infinite]" />
    </button>
  );
};

export default CustomButton;
