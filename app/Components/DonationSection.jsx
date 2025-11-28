"use client"; // ❗ Client-side component

import React from "react";
import {
  FaHandHoldingHeart,
  FaHandHoldingUsd,
  FaHandsHelping,
  FaDonate,
  FaPray,
  FaPeopleCarry,
} from "react-icons/fa";
import Link from "next/link";

const donationOptions = [
  {
    id: 1,
    title: "Donation",
    icon: <FaHandHoldingHeart />,
    description: "Support a treatment or a full surgery",
    link: "/donation",
  },
  {
    id: 2,
    title: "Sadaqah",
    icon: <FaHandHoldingUsd />,
    description: "Offer voluntary charity for spiritual reward.",
    link: "/sadaqah",
  },
  {
    id: 3,
    title: "Zakat",
    icon: <FaDonate />,
    description: "Fulfill your religious duty and support care.",
    link: "/zakat",
  },
  {
    id: 4,
    title: "Kaffara",
    icon: <FaPray />,
    description: "Compensate for missed religious obligations.",
    link: "/kaffara",
  },
  {
    id: 5,
    title: "Waqf",
    icon: <FaHandsHelping />,
    description: "Create a lasting impact by dedicating assets for ongoing charity.",
    link: "/waqf",
  },
  {
    id: 6,
    title: "Volunteer",
    icon: <FaPeopleCarry />,
    description: "Give your time and skills to make a difference.",
    link: "/volunteer",
  },
];

const DonationSection = ({ handleDonateClick }) => {
  const donateClick = handleDonateClick || (() => console.warn("⚠️ handleDonateClick is not defined"));

  return (
     <div className="py-12 text-center">
      {/* <h2 className="text-[#F39C12] font-Amaranth text-lg uppercase mb-2">
        Give
      </h2> */}
      <h3 className="text-3xl md:text-4xl mb-8 font-Amaranth">
      How You Can Help & Donate
      </h3>

      <div className="grid grid-cols-2 w-[90%] md:w-full md:grid-cols-3 max-w-4xl mx-auto ">
        {donationOptions.map((item) => (
          <div
            key={item.id}
            className="group p-4 md:p-6 rounded-[10px] border border-gray-200 cursor-pointer flex flex-col justify-center md:justify-start md:items-start text-center transition-all duration-300 hover:bg-[#28A745]"
          >
            {/* Icon Container */}
            <div className="bg-[#F5F5F5] p-4 rounded-full mx-auto md:mx-0">
              <div className="text-3xl text-[#28A745]   transition-all duration-300">
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h4 className="text-lg text-center md:text-start font-Amaranth group-hover:text-white transition-all duration-300">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-[#777777] text-center md:text-start text-[10px] md:text-sm mt-2 md:h-10  font-inter group-hover:text-white transition-all duration-300">
              {item.description}
            </p>

            {/* Button */}
            <Link href={item.link}>
              <button className="mt-4 px-4 py-2 rounded-full text-[14px] font-inter text-white bg-[#28A745] group-hover:bg-white group-hover:text-[#28A745] transition-all duration-300">
              {item.title == 'Volunteer' ? 'Register Now' : 'Donate Now' }   
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationSection;
