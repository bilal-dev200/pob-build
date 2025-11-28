"use client"; // client component for interactivity

import React from "react";
import DOMPurify from "dompurify";

const DonationSection = ({ yellowHead, head, pageName, img, des }) => {
  return (
    <section className="w-full text-sm px-6 md:px-20 py-10 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 text-center md:text-start">
        <h3 className="text-[#F39C12] font-Amaranth text-lg uppercase text-center md:text-start">
          {yellowHead}
        </h3>
        <h2 className="text-3xl md:text-4xl font-Amaranth text-black leading-tight">
          {head}
        </h2>

        {pageName === "donation" ? (
          <div className="font-inter">
            <p className="text-gray-600 mt-4">
              Every contribution you make to POB Trust helps bring vision, hope, and a brighter future to those struggling with preventable blindness. Your generous donation to POB Trust Eye Hospital brings light to those in need. Here’s how your support makes a difference:
            </p>
            <div className="mt-4 text-left">
              <p className="text-gray-600 my-2">
                Free Eye Screenings & Checkups – Helping underprivileged individuals detect vision problems early.
              </p>
              <ul className="text-gray-600 space-y-2 list-disc pl-5">
                <li>Cataract Surgeries & Treatments – Restoring sight to those who cannot afford medical care.</li>
                <li>Providing Eyeglasses & Medicines – Ensuring clear vision for those with refractive errors.</li>
                <li>Supporting Eye Camps in Rural Areas – Reaching communities with little or no access to eye care.</li>
                <li>Training & Equipping Medical Staff – Enhancing the quality of eye care for long-term impact.</li>
              </ul>
              <p className="text-gray-600 my-2">
                Donate today & be the light for someone in darkness!
              </p>
            </div>
          </div>
        ) : (
          <p
            className="text-sm font-inter text-[#777777]"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(des) }}
          />
        )}
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center gap-4">
        <img
          src={img}
          alt="Donation Help"
          className="w-132 h-92 object-cover clip-oval"
        />
      </div>
    </section>
  );
};

export default DonationSection;
