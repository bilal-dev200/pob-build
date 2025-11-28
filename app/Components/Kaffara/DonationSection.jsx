import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../../Utils/const";

const DonationSection = ({ section_6 }) => {
  if (!section_6) return null;

  const {
    how_to_give_kaffara_title,
    how_to_give_kaffara_description,
    how_to_give_kaffara_image1
  } = section_6;

  return (
    <section className="w-full text-sm px-6 md:px-20 py-10 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-5xl text-center md:text-start font-Amaranth text-black leading-tight">
        {how_to_give_kaffara_title}
        </h2>
        {/* <p className="text-gray-600 mt-4">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
        </p>
        <div className="mt-4 text-left">
          <p className="text-gray-600 my-2">Free Eye Screenings & Checkups – Helping underprivileged individuals detect vision problems early.
          </p>
          <ul className="text-gray-600 space-y-2 list-disc pl-5">
            <li> <span className=" text-black"> Monetary Donations: </span>Donating money to verified charitable organizations that distribute food and clothing to the needy.</li>
            <li> <span className=" text-black"> Direct Assistance : </span>Personally providing meals or clothing to the required number of people.</li>
            <li> <span className=" text-black"> Fasting: </span>If unable to give financially, fasting for the specified duration is an alternative in many cases.</li>
          </ul>
        </div> */}
        <div
          className="text-sm text-[#777777] font-inter mt-4 text-center md:text-start"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(how_to_give_kaffara_description) }}
        ></div>
      </div>

      {/* Right Side: Images */}
      <div className="md:w-1/2 flex justify-center gap-4">
        <img
          src={`${Image_Url}/${how_to_give_kaffara_image1}`}
          alt="Donation Help"
          className="w-162 h-62 object-cover clip-oval"
        />
      </div>
    </section>
  );
};

export default DonationSection;
