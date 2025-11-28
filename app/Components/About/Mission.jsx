"use client"; // Important for client-side interactivity

import React from "react";
import { Image_Url } from "../../../Utils/const";

const Mission = ({ aboutusPageOurMession, handleDonateClick }) => {
  if (!aboutusPageOurMession) return null;

  const { heading, sub_heading, description, image } = aboutusPageOurMession;

  // Fallback if handleDonateClick is not passed
  const onDonateClick = handleDonateClick || (() => {
    console.warn("⚠️ handleDonateClick is not defined");
  });

  return (
    <div className="flex flex-col md:flex-row pt-12 gap-14 items-center justify-center">
      {/* Image Section */}
      <div className="relative">
        <img
          src={`${Image_Url}/${image}`}
          className="md:max-w-lg md:h-[32rem] rounded-full"
          alt={heading || "Mission Image"}
        />
        <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>
      </div>

      {/* Text Section */}
      <div className="md:w-5/12 w-[90%] font-inter flex flex-col gap-2 items-center md:items-start">
        <p className="text-[#F39C12] font-Amaranth text-lg text-center md:text-start uppercase">
          {heading}
        </p>
        <h2 className="text-3xl md:text-4xl max-w-2xl font-Amaranth text-center md:text-start">
          {sub_heading}
        </h2>

        {/* Description with HTML */}
        <div
          className="text-[#777777] text-center md:text-start font-inter md:max-w-lg"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        ></div>

        {/* Donate Button */}
        <button
          onClick={onDonateClick}
          className="mt-4 px-4 py-2 w-32 rounded-full text-[16px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Mission;
