import React from "react";
import DOMPurify from "isomorphic-dompurify";   
import { Image_Url } from "../../../Utils/const";

const DonationSection = ({ section_7 }) => {
  if (!section_7) return null;

  const {
    section_7_heading,
    section_7_description,
    section_7_image
  } = section_7;
  return (
    <section className="w-full text-sm px-6 md:px-20 py-10 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 text-center md:text-start">
        <h2 className="text-3xl md:text-4xl font-Amaranth text-black leading-tight">
        {section_7_heading}
        </h2>
        {/* <p className="text-gray-600 mt-4">
        Waqf plays a crucial role in strengthening communities by funding essential services such as education, healthcare, and social welfare. By establishing Waqf, individuals contribute to long-term community growth, ensuring that resources are available for future generations.
        </p>
          <p className="text-gray-600 my-2">
          From building schools and hospitals to supporting underprivileged families, Waqf serves as a pillar of sustainable development, empowering societies and fostering economic stability.
          </p> */}
          <div
          className="text-sm text-[#777777] mt-4 font-inter"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section_7_description) }}
        ></div>
      </div>

      {/* Right Side: Images */}
      <div className="md:w-1/2 flex justify-center gap-4">
        <img
          src={`${Image_Url}/${section_7_image}`}
          alt="Donation Help"
          className="w-162 h-122 object-cover clip-oval"
        />
      </div>
    </section>
  );
};

export default DonationSection;
