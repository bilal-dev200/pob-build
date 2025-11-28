import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../Utils/const";

const SkillBasedVolunteering = ({ section_7 }) => {
  if (!section_7) return null;

  const {
    skill_based_heading,
    skill_based_description,
    skill_based_image
  } = section_7;
  return (
    <section className="w-full text-sm px-6 md:px-20 py-10 flex flex-col justify-around md:flex-row items-center gap-10">
      {/* Left Side: Text Content */}
      <div className="md:w-5/12 text-center md:text-start">
        <h2 className="text-5xl font-Amaranth text-black leading-tight">
          {skill_based_heading}
        </h2>
        {/* <p className="text-gray-600 mt-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English.
        </p>
        <p className="text-gray-600 mt-4">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for lorem ipsum will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years,he like.
        </p> */}
         <div
          className="text-sm text-[#777777] mt-4 font-inter"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(skill_based_description) }}
        ></div>
      </div>

      {/* Right Side: Images */}
      <div className="md:w-1/2 flex justify-center gap-4">
        <img
          src={`${Image_Url}/${skill_based_image}`}
          alt="Donation Help"
          className=" w-96 h-96 object-cover clip-oval"
        />
      </div>
    </section>
  );
};

export default SkillBasedVolunteering;
