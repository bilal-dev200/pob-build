import React from "react";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../Utils/const";

const SadaqahBenefits = ({ section_6 }) => {
  if (!section_6) return null;

  const { benefits_heading, benefits_description, benefits_image } = section_6;

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-10 pt-12 bg-white md:w-[95%]">
      {/* Image Section */}
      <div className="  w-full md:w-5/12 flex justify-center">
        <img
          src={`${Image_Url}/${benefits_image}`}
          alt="Eye Checkup"
          className=" w-full h-full  "
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-4/12 flex flex-col items-center text-center md:text-start">
        <h2 className="text-3xl font-Amaranth md:text-4xl mt-2">
          {benefits_heading}
        </h2>
        <div
          className="text-[#777777] my-4 font-inter text-[15px]"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(benefits_description),
          }}
        ></div>
      </div>
    </section>
  );
};

export default SadaqahBenefits;
