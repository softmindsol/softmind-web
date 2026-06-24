"use client";
import { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";

export default function LiveLocation({ city, country, timezone, subtext }) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTimeStr(formatter.format(now).toLowerCase());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="flex items-start gap-3.5 group cursor-default">
      <div className="w-9 h-9 bg-[#2C2C2C] transition-colors duration-300 shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
        <IoLocationOutline className="size-5 transition-colors duration-300" />
      </div>
      <div className="flex flex-col cursor-pointer">
        <span className="text-sm font-medium leading-[18px] group-hover:text-green transition-colors duration-300">
          {city}, {country}
        </span>
        <span className="text-xs text-white/60 font-medium leading-[18px] mt-1">
          {timeStr ? `${timeStr} ${subtext}` : "\u00A0"}
        </span>
      </div>
    </div>
  );
}
