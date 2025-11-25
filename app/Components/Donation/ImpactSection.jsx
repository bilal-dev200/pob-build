"use client"
import React, { useEffect, useState } from "react";
import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../../Utils/const";

const ImpactSection = ({ donationPageLowerSection }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  if (!donationPageLowerSection) return null;

  const { section1_heading, section1_description, section1_image, section2_heading, section2_description, section2_web_image, section2_mobile_image } =
  donationPageLowerSection;

  return (
    <section className="w-full mx-auto container ">
      {/* Top Section */}
      <div className="relative flex flex-col md:h-[28rem]   md:flex-row items-center  px-6 md:px-20 py10 relative">
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-center md:text-left ">
          <h2 className="text-3xl md:text-5xl font-Amaranth text-black leading-tight">
            {section1_heading}
          </h2>
                                                      <div
          className="mt-4 font-inter text-center md:text-start"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section1_description) }}
        ></div>
        </div>

        {/* Right Side: Image */}
        <div className="sm:w-1/2  md:absolute -bottom-10 right-0 h-full flex justify-end">
          <img
            src={`${Image_Url}/${section1_image}`}
            alt="Hope Restored"
            className="w-[665px] md:w-fit object-contain h-full"
          />
        </div>
      </div>

      {/* Bottom Section with Slanted Background */}
      <div className={`relative bg-cover bg-center bg-no-repeat text-white h-96 flex flex-col md:justify-center justify-end pb-5`}
       style={{
        backgroundImage: `url(${Image_Url}/${isMobile ? section2_mobile_image : section2_web_image})`,
      }}>
        <div className="flex  flex-col justify-end gap-4 items-end px52">
          <div className=" md:w-1/2 flex flex-col md:gap-4 gap-2  md:px-10 px-4">
            <h2 className="md:text-3xl font-Amaranth text-2xl 2xl:text-5xl  font-Amarant  leading-tight">
              {section2_heading}
            </h2>
            <div
          className="text-xs md:text-md font-inter text-center md:text-start"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section2_description) }}
        ></div>
          </div>
        </div>

      </div>
    
    </section>
  );
};

export default ImpactSection;
