import React from "react";
import DOMPurify from "isomorphic-dompurify"; // SSR-safe DOMPurify
import { Image_Url } from "../../../Utils/const";

const Pillar = ({ section_4 }) => {
  if (!section_4) return null;

  const {
    piller_of_compassion_heading,
    piller_of_compassion_description,
    piller_of_compassion_image,
  } = section_4;

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-10 py-12 bg-white md:w-[95%]">
      <div className="w-full md:w-4/12 flex justify-center">
        <img
          src={`${Image_Url}/${piller_of_compassion_image}`}
          alt={piller_of_compassion_heading}
          className="w-102 h-142"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-5/12 flex flex-col items-center md:items-start text-center md:text-start">
        <h2 className="text-3xl font-Amaranth md:text-4xl mt-2">
          {piller_of_compassion_heading}
        </h2>

        <div
          className="text-sm text-[#777777] my-4 font-inter prose
             prose-li:list-disc prose-ul:list-disc prose-li:ml-6"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(piller_of_compassion_description),
          }}
        ></div>
      </div>
    </section>
  );
};

export default Pillar;
