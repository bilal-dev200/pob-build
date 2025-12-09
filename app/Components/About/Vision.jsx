"use client"; // sirf client component ke liye, DOMPurify use kar rahe ho to

import React from "react";
import { Image_Url } from "../../../Utils/const";

const Vision = ({ aboutusPageWhatWeDo }) => {
  if (!aboutusPageWhatWeDo) return null;

  const { heading, sub_heading, description, sub_description, image } =
    aboutusPageWhatWeDo;

  // Extra empty <p> remove aur bullets style add karna
  const cleanHTML = sub_description
    .replace(/<p>\s*<\/p>/g, "") // empty <p> remove
    .replace(/<ul>/g, '<ul class="list-disc ml-5 space-y-2">'); // bullets + spacing

  return (
    <div className="flex flex-col pt-12 gap-8 items-center justify-center">
      {/* Heading Section */}
      <div className="flex flex-col gap-2 md:w-full text-center w-[90%] md:text-center items-center justify-center">
        <p className="uppercase text-[#F39C12] text-lg font-Amaranth">
          {heading}
        </p>
        <h2 className="text-3xl md:text-4xl font-Amaranth text-black">
          {sub_heading}
        </h2>
        <div
          className="text-[#777777] font-inter text-xs max-w-3xl text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>

      {/* Image + Description Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Image */}
        <div>
          <img
            src={`${Image_Url}/${image}`}
            className="md:max-w-lg rounded-r-full"
            alt=""
          />
        </div>

        {/* Sub Description with bullets */}
        <div
          className="md:w-5/12 w-[90%] font-inter items-center md:items-start flex flex-col gap-2 text-center md:text-start"
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
        ></div>
      </div>
    </div>
  );
};

export default Vision;
