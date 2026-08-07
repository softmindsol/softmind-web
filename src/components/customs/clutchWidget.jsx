"use client";

import { useEffect } from "react";

export default function ClutchWidget() {
  useEffect(() => {
    // Prevent duplicate script injection
    if (
      document.querySelector(
        'script[src="https://widget.clutch.co/static/js/widget.js"]',
      )
    ) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="clutch-widget"
      data-url="https://clutch.co/profile/softmind-solutions"
      data-widget-type="2"
      data-height="45"
      data-clutchcompany-id="YOUR-COMPANY-ID"
      data-theme="light"
    />
  );
}
