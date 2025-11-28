"use client";

import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../../Utils/const";

const WaqfSection = ({ section_3 }) => {
  if (!section_3) return null;

  const { section_3_heading, section_3_description, options } = section_3;

  // fallback function if prop not passed
  const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <section className="bg-green-600 py-16 px-6 md:px-20 my-6 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 text-white flex flex-col justify-center ">
        <h2 className="text-4xl md:text-5xl font-Amaranth mb-6 md:w-2/3 text-center md:text-start">
          {section_3_heading}
        </h2>
        {/* <p className="text-lg mb-6 md:w-3/4">
          Waqf is a unique system of charity where donated assets remain non-transferable,
          ensuring their benefits continue to serve communities for generations. Instead of
          using or selling the original asset, only the revenue or services generated from it
          are utilized for charitable purposes. This creates a sustainable and long-term impact,
          helping those in need without depleting the original resources.
        </p> */}
        <div
          className="text-lg mb-6 md:w-3/4 font-inter text-center md:text-start"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(section_3_description),
          }}
        ></div>
        <button
          onClick={handleDonateClick}
          className="mx-auto md:mx-0 w-fit border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-600 transition"
        >
          Donation Now
        </button>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col space-y-6">
        <div className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4 relative">
          <div className="absolute left-0 top-0 h-full w-2 bg-[#F39C12] rounded-l-lg"></div>
          <img
            src={`${Image_Url}/${options[0]?.image}`}
            alt=""
            className="w-14 h-14"
          />
          <div>
            <h3 className="text-xl font-Amaranth">{options[0]?.heading}</h3>
            {/* <p className="text-gray-600 text-sm">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p> */}
            <div
              className="text-gray-600 text-sm font-inter"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(options[0]?.description),
              }}
            ></div>
          </div>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4 relative">
          <div className="absolute left-0 top-0 h-full w-2 bg-[#F39C12] rounded-l-lg"></div>
          <img
            src={`${Image_Url}/${options[1]?.image}`}
            alt=""
            className="w-14 h-14"
          />
          <div>
            <h3 className="text-xl ">{options[1]?.heading}</h3>
            {/* <p className="text-gray-600 text-sm">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p> */}
            <div
              className="text-gray-600 text-sm"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(options[1]?.description),
              }}
            ></div>
          </div>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4 relative">
          <div className="absolute left-0 top-0 h-full w-2 bg-[#F39C12] rounded-l-lg"></div>
          <img
            src={`${Image_Url}/${options[2]?.image}`}
            alt=""
            className="w-14 h-14"
          />
          <div>
            <h3 className="text-xl ">{options[2]?.heading}</h3>
            {/* <p className="text-gray-600 text-sm">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p> */}
            <div
              className="text-gray-600 text-sm"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(options[2]?.description),
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaqfSection;
