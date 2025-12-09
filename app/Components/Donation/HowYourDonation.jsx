"use client";
import React from "react";
import DOMPurify from "dompurify";
import { Image_Url } from "../../../Utils/const";

const HowYourDonation = ({ donationPageHowYourDonationHelp, pageName }) => {
  if (!donationPageHowYourDonationHelp) return null;

  const { heading, description, image1 } = donationPageHowYourDonationHelp;

  return (
    <section className="w-full px-6 md:px-20 py-10 flex flex-col md:flex-row items-center gap-10">
      
      {/* Left Side Text */}
      <div className="md:w-2/2 text-center md:text-start">
        <h2 className="text-2xl md:text-3xl font-Amaranth text-black leading-snug md:leading-tight">
          {heading}
        </h2>

        {pageName === "donation" ? (
          <div
  className="font-inter text-sm text-[#444] mt-3 md:mt-4 "
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(
      description
        // Add Tailwind classes directly into HTML for bullets
        .replaceAll("<ul>", "<ul class='list-disc list-inside space-y-2'>")
        .replaceAll("<li>", "<li class='text-sm text-[#444]'>")
    ),
  }}
></div>

        ) : (
          <div className="flex flex-col gap-3 py-4 text-[#777777] text-sm md:text-base">
            It is a long established fact that a reader will be distracted...
            <span>
              Many desktop publishing packages and web page editors now use Lorem Ipsum.
            </span>

            <button className="mt-4 px-4 py-2 w-32 rounded-full text-[12px] font-inter text-white bg-[#28A745] transition-all duration-300">
              View Details
            </button>
          </div>
        )}
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={`${Image_Url}/${image1}`}
          alt="Donation Help"
          className="w-80 h-80 md:w-[420px] md:h-[420px] object-cover clip-oval"
        />
      </div>
    </section>
  );
};

export default HowYourDonation;
