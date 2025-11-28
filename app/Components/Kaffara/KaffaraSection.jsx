"use client"; // ❗ Client component for handleDonateClick

import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../../Utils/const";

const KaffaraSection = ({ section_2 }) => {
      const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};

  if (!section_2) return null;
  

  const { concept_heading, concept_description, concept_image1 } = section_2;

  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl lg:text-5xl font-Amaranth mb-6 text-black">
          {concept_heading}
        </h2>

        <div
          className="text-sm text-[#777777] font-inter mb-4"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(concept_description),
          }}
        ></div>

        <button
          onClick={handleDonateClick}
          className=" cursor-pointer bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all"
        >
          Donation Now
        </button>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="w-full lg:w-4/5 rounded-tl-[50%] overflow-hidden relative">
          <img
            src={`${Image_Url}/${concept_image1}`}
            alt="Main Image"
            className="w-full h-auto rounded-tl-[50%] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default KaffaraSection;
