"use client"; // ✅ Client component for interactivity

import React from "react";
import DOMPurify from "dompurify";

const EyeExams = ({
  section_2_main_heading,
  section_2_sub_heading,
  section_2_description,
  section_2_image,
  // pass from parent
}) => {
   const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div className="flex flex-col md:flex-row pt-12 gap-4 items-center justify-center">
      <div>
        <img
          src={section_2_image}
          className="md:max-w-lg rounded-full"
          alt={section_2_sub_heading || "Eye Exams"}
        />
      </div>
      <div className="md:w-4/12 w-[90%] font-inter items-center md:items-start flex flex-col gap-2">
        <h3 className="text-[#F39C12] font-Amaranth text-center uppercase text-lg md:text-start">
          {section_2_main_heading}
        </h3>
        <h2 className="text-3xl md:text-4xl max-w-md font-Amaranth text-center md:text-start">
          {section_2_sub_heading}
        </h2>
        <div
          className="text-[#777777] text-center md:text-start"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(section_2_description),
          }}
        ></div>

        <button
          onClick={handleDonateClick}
          className="mt-4 px-4 py-3 w-32 rounded-full text-[16px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300"
        >
          Donate now
        </button>
      </div>
    </div>
  );
};

export default EyeExams;
