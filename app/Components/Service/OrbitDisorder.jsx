"use client"; // client component for interactivity

import React from "react";
import DOMPurify from "dompurify";
import { Image_Url } from "../../../Utils/const";

const OrbitDisorder = ({
  section_7_main_heading,
  section_7_sub_heading,
  section_7_description,
  section_7_image,
  section_8_main_heading,
  section_8_sub_heading,
  section_8_cards,
  
}) => {
     const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div className="w-full text-white flex justify-center items-center bg-[#28A745] md:my-32">
      <div className="w-4/5 py-10">
        <div className="w-full flex flex-col md:flex-row md:gap-20 justify-between items-start pb-16">
          {/* Image Section */}
          <div className="md:w-1/2 relative rounded-b-full flex justify-end">
            <img
              className="absolute w-2/3 h-[450px] 2xl:w-1/2 -top-28 2xl:mr-20 rounded-b-full"
              src={section_7_image}
              alt=""
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 flex flex-col items-start text-center md:text-start gap-3">
            <h3 className="uppercase font-Amaranth text-lg">
              {section_7_main_heading}
            </h3>
            <h2 className="font-Amaranth text-3xl md:text-4xl">
              {section_7_sub_heading}
            </h2>
            <p
              className="text-sm font-inter"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(section_7_description),
              }}
            />
            <button
              onClick={handleDonateClick}
              className="bg-white mx-auto md:mx-0 text-black px-10 py-3 text-[16px] rounded-full"
            >
              Donate now
            </button>
          </div>
        </div>

        {/* Section 8: Orbital Disease Cards */}
        {/* <OrbitalDisease
          section_8_main_heading={section_8_main_heading}
          section_8_sub_heading={section_8_sub_heading}
          section_8_cards={section_8_cards}
        /> */}
      </div>
    </div>
  );
};

export default OrbitDisorder;

// Nested component for section 8
const OrbitalDisease = ({ section_8_main_heading, section_8_sub_heading, section_8_cards }) => {
  return (
    <div className="w-full relative flex flex-col gap-20 justify-center items-start pb-16">
      <div className="w-full flex flex-col justify-center items-center text-center">
        <p className="uppercase font-Amaranth text-sm">{section_8_main_heading}</p>
        <h2 className="font-Amaranth text-4xl hidden md:block">{section_8_sub_heading}</h2>
      </div>

      <div className="absolute -bottom-80 md:-bottom-90">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-5">
          {section_8_cards?.map((d, i) => (
            <div
              key={i}
              className="bg-[#F4F4F4] w-full text-black flex gap-5 items-start p-5 rounded-3xl"
            >
              <div className="bg-white p-4 w-20 rounded-full">
                <img className="w-full" src={`${Image_Url}/${d.image}`} alt="" />
              </div>
              <div className="w-full flex flex-col gap-3 py-3">
                <h2 className="font-Amaranth text-2xl">{d.heading}</h2>
                <p
                  className=""
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(d.description) }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center py-8 md:pt-10">
          <button className="bg-[#28A745] text-white px-10 py-3 text-xs rounded-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
