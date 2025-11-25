"use client";

import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import Image from "next/image";
import { Image_Url } from "../../../Utils/const";

const Hope = ({ section_5 }) => {
  if (!section_5) return null;

  const {
    zakat_distribution_heading,
    zakat_distribution_description,
    zakat_distribution_image
  } = section_5;

  // const handleClick = handleDonateClick || (() => {
  //   console.warn("⚠️ handleDonateClick is not defined");
  // });

    const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <div className="flex flex-col md:flex-row pt-12 gap-4 items-center justify-center">
      <div className="md:w-5/12 w-[90%] font-inter flex flex-col gap-2 items-center md:items-start">
        <h2 className="text-4xl max-w-2xl font-Amaranth text-center md:text-start">
          {zakat_distribution_heading}
        </h2>

        <div
          className="text-sm text-[#777777] text-center md:text-start md:max-w-lg"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(zakat_distribution_description) }}
        ></div>

        <button
          onClick={handleDonateClick}
          className="mt-4 px-4 py-2 w-32 rounded-full text-[16px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300"
        >
          Donate Now
        </button>
      </div>

      <div className="relative w-full md:w-auto md:max-w-lg h-[300px] md:h-auto">
        <Image
  src={`${Image_Url}/${zakat_distribution_image}`}
  alt={zakat_distribution_heading}
  width={500}
  height={300}
  style={{ objectFit: "contain" }}
/>

      </div>
    </div>
  );
};

export default Hope;
