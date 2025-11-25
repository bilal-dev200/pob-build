"use client"; // ensure client-side

import React from "react";
import DOMPurify from "isomorphic-dompurify";  // import factory
import { Image_Url } from "../../../Utils/const";

const OurImpact = ({ donationPageOurImpact }) => {
  if (!donationPageOurImpact) return null;

  const { heading, content, bullet_point_heading, bullet_points, image } =
    donationPageOurImpact;
  const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full justify-center items-center hscreen my-20">
        <div className="w-4/5 relative flex justify-center items-center rounded-[58px] overflow-hidden">
          <div className="w-1/2 rounded-l-[58px] flex items-center shadow-2xl my-20 h-[60vh] p-10">
            <div className="lg:w-3/5 w-3/5 flex flex-col gap-3">
              <h2 className="text-3xl font-Amaranth">{bullet_point_heading}</h2>
              <div
                className="list-disc pl-4 flex flex-col gap-2 font-inter text-sm text-center md:text-start"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(bullet_points),
                }}
              ></div>
            </div>
          </div>

          <div className="absolute w-1/3 h-[75vh] bg-[#28A745] rounded-b-full p-5 flex flex-col gap-3 justify-center items-center text-center text-white">
            <h2 className="text-3xl font-Amaranth">{heading}</h2>
            <div
              className="lg:text-xs text-[9px] font-inter text-center md:text-start"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content),
              }}
            ></div>
            <button
              onClick={handleDonateClick}
              className="border cursor-pointer border-white rounded-full p-2 px-6 text-xs mt-2 text-[16px]"
            >
              Donate Now
            </button>
          </div>

          <div className="w-1/2 h-[60vh] my-20">
            <img
              className="w-full object-cover rounded-r-[58px] h-full"
              src={`${Image_Url}/${image}`}
              alt={heading}
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative flex flex-col w-full justify-center items-center pt-44 pb-52 my-10">
        <div className="w-11/12 absolute top-0 z-10 rounded-t-[58px] flex items-center bg-white shadow-2xl p-4">
          <div className="w-full flex flex-col gap-3">
            <h2 className="text-3xl text-center font-Amaranth">Ways to Donate</h2>
            <div
              className="list-disc pl-4 flex flex-col gap-2 lg:text-xs text-[9px] font-inter text-center md:text-start"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(bullet_points),
              }}
            ></div>
          </div>
        </div>

        <div className="bg-[#28A745] p-5 mt-6 flex flex-col gap-3 justify-center items-center text-center text-white py-14">
          <h2 className="text-3xl font-Amaranth">{heading}</h2>
          <div
            className="lg:text-xs text-[9px]"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          ></div>
          <button
            onClick={handleDonateClick}
            className="border border-white rounded-full p-2 px-6 text-[12px] mt-2"
          >
            Donate Now
          </button>
        </div>

        <div className="w-11/12 absolute bottom-0 z-10">
          <img
            className="w-full object-cover rounded-b-[58px] h-60"
            src={`${Image_Url}/${image}`}
            alt={heading}
          />
        </div>
      </div>
    </>
  );
};

export default OurImpact;
