    import React from "react";
    import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../../Utils/const";

const ImpactSection = ({ section_4 }) => {
  if (!section_4) return null;

  const { section_4_heading, section_4_image, options } = section_4;
  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-center text-3xl md:text-4xl font-Amaranth mb-8">
        {section_4_heading}
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left Side Content */}
        <div className="space-y-8 w-full md:w-1/3">
          <div className="flex flex-col gap-4">
            <div className="mx-auto md:mx-0 w-fit px-1 pt-2 rounded-full bg-[#F39C12]">
              <img
                src={`${Image_Url}/${options[0]?.image}`}
                alt="Education Waqf"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-start">
              <h3 className="font-Amaranth text-lg mb-2">{options[0]?.heading}</h3>
              {/* <p className="text-gray-600 text-sm">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p> */}
              <div
                className="text-sm text-[#777777] font-inter"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(options[0]?.description),
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="mx-auto md:mx-0 w-fit px-1 py-1 rounded-full bg-[#F39C12]">
              <img
                src={`${Image_Url}/${options[1]?.image}`}
                alt="Healthcare Waqf"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-start">
              <h3 className="font-Amaranth text-lg mb-2">{options[1]?.heading}</h3>
              {/* <p className="text-gray-600 text-sm">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p> */}
              <div
                className="text-sm text-[#777777] font-inter"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(options[1]?.description),
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={`${Image_Url}/${section_4_image}`}
            alt="Main Impact"
            className="w-80 h-auto object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="space-y-8 w-full md:w-1/3">
          <div className="flex flex-col gap-4">
            <div className="mx-auto md:mx-0 w-fit px-1 py-1 rounded-full bg-[#F39C12]">
              <img
                src={`${Image_Url}/${options[2]?.image}`}
                alt="Mosque Waqf"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-start">
              <h3 className="font-Amaranth text-lg mb-2">{options[2]?.heading}</h3>
              {/* <p className="text-gray-600 text-sm">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p> */}
              <div
                className="text-gray-600 text-sm font-inter"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(options[2]?.description),
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="mx-auto md:mx-0 w-fit px-1 py-1 rounded-full bg-[#F39C12]">
              <img
                src={`${Image_Url}/${options[3]?.image}`}
                alt="General Charity Waqf"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-start">
              <h3 className="font-Amaranth text-lg mb-2">{options[3]?.heading}</h3>
              {/* <p className="text-gray-600 text-sm">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p> */}
              <div
                className="text-gray-600 text-sm font-inter"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(options[3]?.description),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
