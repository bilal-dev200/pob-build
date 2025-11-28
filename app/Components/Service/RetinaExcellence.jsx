"use client"; // ✅ Client component for interactivity

import React from "react";
import DOMPurify from "dompurify";

const RetinaExcellence = ({
  section_5_main_heading,
  section_5_sub_heading,
  section_5_description,
  section_5_image,
  // parent se pass karo
}) => {
    const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 md:px-16 py-12">
      {/* Image Section */}
      <div className="md:w-1/2 relative">
        <div className="w-full h-full overflow-hidden rounded-full">
          <img
            src={section_5_image}
            alt="Retina Diagnosis"
            className="w-full h-auto rounded-r-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 text-center md:text-start">
        <h3 className="text-[#F39C12] font-Amaranth uppercase text-lg tracking-wide">
          {section_5_main_heading}
        </h3>
        <h2 className="text-3xl md:text-4xl font-Amaranth leading-tight mt-2">
          {section_5_sub_heading}
        </h2>

        <p
          className="text-sm font-inter text-[#777777]"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(section_5_description),
          }}
        />

        <button
          onClick={handleDonateClick}
          className="mt-4 px-4 py-3 w-32 rounded-full text-[16px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300"
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default RetinaExcellence;
