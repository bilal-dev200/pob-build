import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import Image from "next/image";
import { Image_Url } from "../../Utils/const";

const SadaqahJariyah = ({ section_3 }) => {
  if (!section_3) return null;

  const { ongoing_sadaqah_heading, ongoing_sadaqah_description, ongoing_image } = section_3;

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-10 py-12 bg-white md:w-[95%]">
      {/* Text Section */}
      <div className="w-full md:w-4/12 flex flex-col items-center md:items-start text-center md:text-start">
        <h2 className="text-3xl font-Amaranth md:text-4xl mt-2">
          {ongoing_sadaqah_heading}
        </h2>

        <div
          className="my-4 text-sm text-[#777777] font-inter text-center md:text-start"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(ongoing_sadaqah_description),
          }}
        ></div>
      </div>

      {/* Image Section */}
      <div className="  w-full md:w-4/12 flex justify-center">
        <img
          src={`${Image_Url}/${ongoing_image}`}
          alt="Eye Checkup"
          className="w-92 h-66 "
        />
      </div>
    </section>
  );
};

export default SadaqahJariyah;
