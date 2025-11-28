"use client";

import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../../Utils/const";

const Vision2 = ({ section_2 }) => {
  if (!section_2) return null;

  const { section_2_heading, section_2_description, section_2_image } = section_2;

  return (
    <section className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto p-6">
      <div className="md:w-1/2 relative">
        <img
          src={`${Image_Url}/${section_2_image}`}
          alt="Eye Screening Camp"
          className="w-full h-1/3 rounded-full"
        />
      </div>

      <div className="md:w-1/2 text-left">
        <h2 className="text-4xl font-Amaranth text-gray-900 leading-snug text-center md:text-start">
          {section_2_heading}
        </h2>

        <div
          className="text-sm text-[#777777] font-inter text-center md:text-start"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(section_2_description),
          }}
        ></div>
      </div>
    </section>
  );
};

export default Vision2;
