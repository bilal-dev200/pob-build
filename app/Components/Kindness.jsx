import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import Image from "next/image";
import { Image_Url } from "../../Utils/const";



const Kindness = ({ section_2 }) => {
  if (!section_2) return null;

  const { acts_heading, acts_description, acts_image } = section_2;

  return (
    <div className="flex flex-col md:flex-row pt-12 gap-8 items-center justify-center">
      {/* Image Section */}
      <div className=" px-4 md:px-0 ">
        <img src={`${Image_Url}/${acts_image}`} className=" md:max-w-lg rounded-b-full" alt="" />
      </div>

      {/* Text Section */}
      <div className="md:w-4/12 w-[90%] font-inter flex flex-col gap-4 items-center md:items-start">
        <h2 className="text-4xl max-w-2xl font-Amaranth text-center md:text-start">
          {acts_heading}
        </h2>

        <div
          className="mt-6 text-sm text-[#777777] text-center md:text-start"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(acts_description),
          }}
        ></div>
      </div>
    </div>
  );
};

export default Kindness;
