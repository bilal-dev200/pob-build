"use client"; // Needed because we use onClick (client-side)

import React from "react";
import { Image_Url } from "../../../Utils/const";

const Hope = ({ aboutusPageBojectives }) => {
     const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};
  if (!aboutusPageBojectives) return null;

  const { heading, sub_heading, description, image } = aboutusPageBojectives;

  return (
    <div className="flex flex-col md:flex-row pt-12 gap-4 items-center justify-center">
      {/* Left Side Content */}
      <div className="md:w-5/12 w-[90%] font-inter items-center md:items-start flex flex-col gap-2">
        <p className="text-[#F39C12] uppercase font-Amaranth text-center text-lg md:text-start">
          {heading}
        </p>

        <h2 className="text-3xl md:text-4xl max-w-2xl font-Amaranth text-center md:text-start">
          {sub_heading}
        </h2>

        <div
          className="text-[#777777] text-center md:text-start md:max-w-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>

        <button
         onClick={handleDonateClick}
          className=" cursor-pointer mt-4 px-4 py-2 w-32 rounded-full text-[14px] font-inter text-white bg-[#28A745] transition-all duration-300 hover:bg-white hover:text-[#28A745] border border-[#28A745]"
        >
          Donate Now
        </button>
      </div>

      {/* Right Side Image */}
      <div>
        <img
          src={`${Image_Url}/${image}`}
          className="md:max-w-lg rounded-full"
          alt="Hope Section Image"
        />
      </div>
    </div>
  );
};

export default Hope;
