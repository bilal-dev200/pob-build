"use client"
import React from "react";
import DOMPurify from "dompurify";
import { Image_Url } from "../../../Utils/const";


const HowYourDonation = ({ donationPageHowYourDonationHelp, pageName }) => {

  if (!donationPageHowYourDonationHelp) return null;
  

  const { heading, description, image1 } =
  donationPageHowYourDonationHelp;

  return (
    <section className="w-full text-sm px-6 md:px-20 py-10 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 text-center md:text-start">
        {/* <p className="text-[#F39C12] font-Amaranth text-center md:text-start ">
          {heading}{" "}
        </p> */}
        <h2 className="text-5xl font-Amaranth text-black leading-tight">
          {heading}
        </h2>
        {pageName === "donation" ? (
          <>
                                                        <div
          className="font-inter"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        ></div>
          </>
        ) : (
          <div className="flex flex-col gap-3 py-4 text-[#777777]">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            <span>
              Many desktop publishing packages and web page editors now use Lorem Ipsum as .
            </span>
            <button
              // onClick={handleDonateClick}
              className="mt-4 px-4 py-2 w-32 rounded-full text-[12px] font-inter text-white bg-[#28A745] group-hover:bg-white group-hover:text-[#28A745] transition-all duration-300">
              View Details
            </button>
          </div>
        )}
      </div>

      {/* Right Side: Images */}
      <div className="md:w-1/2 flex justify-center gap-4">
        <img
          src={`${Image_Url}/${image1}`}
          alt="Donation Help"
          className="w-62 h-62 object-cover clip-oval"
        />
      </div>
    </section>
  );
};

export default HowYourDonation;
