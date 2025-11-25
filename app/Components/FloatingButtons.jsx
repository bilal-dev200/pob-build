"use client";

import React from "react";

const FloatingButtons = () => {
  const handleDonateClick = () => {
    const footer = document.getElementById("footer-section");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="chatbot-container">
      <div
        onClick={handleDonateClick}
        className="fixed bottom-5 right-5 z-50 group cursor-pointer text-white bg-[#F39C12] flex items-center justify-start border-2 border-transparent rounded-full w-12 h-12 hover:w-40 transition-all duration-300 overflow-hidden"
      >
        {/* Icon */}
        <div className="bg-white p-2 rounded-full flex items-center justify-center ml-1">
          <img src="/hand.png" alt="Donate" className="w-6 h-6 object-contain" />
        </div>

        {/* Text */}
        <p className="ml-2 font-inter whitespace-nowrap hidden group-hover:inline-block">
          Donate Now
        </p>
      </div>
    </div>
  );
};

export default FloatingButtons;
