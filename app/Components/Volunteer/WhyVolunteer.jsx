"use client"; // ❗ Client-side component

import React, { useState } from "react";
import DOMPurify from "isomorphic-dompurify"; 


const WhyVolunteer = ({ heading, para, handleDonateClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsOpen(false); // Close modal after submit
  };

  return (
    <div className="flex flex-col md:flex-row  pt-8 pb-12 md:pb-24 gap-8  md:gap-4 items-center justify-center ">
      <div className="  md:w-7/12 w-[90%] font-inter items-center  md:items-center  flex flex-col gap-2 ">
        <h2 className=" text-4xl  max-w-2xl font-Amaranth  text-center ">
          {heading}
        </h2>
        <div
          className="text-sm text-[#777777] text-center md:text-center font-inter"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(para) }}
        ></div>

        <div onClick={() => setIsOpen(true)}
  className="mt-4 px-4 py-2 w-fit rounded-full text-[12px] font-inter text-white bg-[#28A745] group-hover:bg-white group-hover:text-[#28A745] transition-all duration-300 cursor-pointer"
>
  Donate Now
</div>

        <p></p>
      </div>
       {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-center mb-4">
              Volunteer Registration
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="border rounded-lg p-2 w-full"
              ></textarea>

              <button
                type="submit"
                className="mt-2 px-4 py-2 rounded-lg text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] border border-[#28A745] transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyVolunteer;
