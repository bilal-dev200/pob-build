import React from "react";
import { TbPointFilled } from "react-icons/tb";
import { Image_Url } from "../../../Utils/const";
import DOMPurify from "isomorphic-dompurify"; 

const WaqfBenefits = ({ section_6 }) => {
  if (!section_6) return null;

  const { section_6_heading, section_6_description, section_6_image } =
    section_6;
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4   md:px-10 pt-12 bg-white md:w-[95%]">
      {/* Image Section */}
      <div className="  w-full md:w-5/12 flex justify-center">
        <img
          src={`${Image_Url}/${section_6_image}`}
          alt="Eye Checkup"
          className=" w-full h-full  "
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-5/12 text-center md:text-start flex flex-col   ">
        <h2 className="text-3xl font-Amaranth md:text-4xl  mt-2">
          {section_6_heading}
        </h2>
        {/* <p className="  text-[#777777] my-4  text-[15px] ">
        Waqf is not just an individual act of charity—it has the power to uplift entire communities when people come together for a shared cause. Many successful Waqf projects are established collectively, where multiple donors contribute towards:
        </p>
         <ul className="text-[#777777] text-[15px] space-y-2">
          <li>
            <strong className="text-black">● Building Sustainable Infrastructure:</strong> Developing
            hospitals, water wells, and schools for future generations.
          </li>
          <li>
            <strong className="text-black">● Supporting Local Businesses:</strong> Providing
            interest-free loans or funding for small enterprises to boost
            economic growth.
          </li>
          <li>
            <strong className="text-black">● Emergency Relief Efforts:</strong> Setting up long-term
            funds that support disaster relief and crisis response initiatives.
          </li>
        </ul> */}
        <div
          className="text-sm text-[#777777] my-4 font-inter"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(section_6_description),
          }}
        ></div>
      </div>
    </section>
  );
};

export default WaqfBenefits;
