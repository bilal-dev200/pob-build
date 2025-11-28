"use client";

import { HiPhone } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { TiArrowRight } from "react-icons/ti";

import DOMPurify from "isomorphic-dompurify"; 
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; 

const ContactSection = ({ contactUsHeading, hospitalLocation }) => {
  const [formData, setFormData] = useState({
    first_name: "", 
    last_name: "",
    email: "",
    contact: "",
    message: "",
  });

  if (!contactUsHeading || !hospitalLocation) return null;

  const { contact_us_heading, contact_us_description } = contactUsHeading;
  const { hospital_location_heading, details } = hospitalLocation;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, contact: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.contact) return alert("Please enter phone number");

    try {
      const res = await axios.public.post(
        "contact-us-page/save-contact-details",
        formData
      );

      alert(res?.data?.message);

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        contact: "",
        message: "",
      });
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full p-8 md:px-32">

      {/* Left Section - Contact Form */}
      <div className="w-full md:w-1/2 md:p-6 flex justify-end">
        <div className="">
          <h2 className="font-Amaranth text-5xl text-center md:text-start">
            {contact_us_heading}
          </h2>

          <div
            className="mt-6 font-inter text-center md:text-start"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(contact_us_description),
            }}
          ></div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-4 space-y-4 mb-12 md:mb-0">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="text-black text-sm">Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="border-b-[1.3px] border-black w-full p-2 outline-none"
                  required
                />
              </div>

              <div className="w-1/2">
                <label className="text-black text-sm">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="border-b-[1.3px] border-black w-full p-2 outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="text-black text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b-[1.3px] border-black w-full p-2 outline-none"
                  required
                />
              </div>

              <div className="w-1/2">
                <label className="text-black text-sm">Phone Number</label>
                <PhoneInput
                  country={"ae"}
                  value={formData.contact}
                  onChange={handlePhoneChange}
                  inputStyle={{
                    width: "100%",
                    height: "41px",
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid black",
                    borderRadius: "0",
                    background: "transparent",
                  }}
                  containerStyle={{ width: "100%" }}
                  buttonStyle={{ border: "none", background: "transparent" }}
                  inputClass="outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-black text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border-b-[1.3px] border-black w-full p-2 outline-none resize-none"
                required
              ></textarea>
            </div>

            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                className=" cursor-pointer flex items-center text-[12px] space-x-2 bg-[#28A745] text-white px-4 py-2 rounded-full mt-4"
              >
                <TiArrowRight size={"28px"} />
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 md:p-6 md:border-l-2">
        <div className="space-y-4">
          <h2 className="font-Amaranth text-5xl">
            {hospital_location_heading}
          </h2>

          <div className="pt-6">
            {details?.map((location, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-[#F4F4F4] rounded-full">
                  <IoLocationSharp className="text-[#28A745] text-xl" />
                </div>

                <div>
                  <h3>{location.location}</h3>

                  <p className="text-gray-600">
                    {location.full_address}
                  </p>

                  <p className="text-gray-600 flex items-center space-x-2">
                    {location.contact_no && (
                      <HiPhone size={"14px"} color="black" />
                    )}
                    <span>{location.contact_no}</span>
                  </p>

                  <a href={location?.direct} target="_blank">
                    <button className="flex items-center text-black text-[12px] py-1 px-2">
                      <TiArrowRight className="mr-1 text-xl" /> Get directions
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Working Hours */}
          <div className="px-1 pt-4">
            <div className="flex items-center mb-2">
              <div className="bg-[#F4F4F4] rounded-full w-fit flex justify-center p-2 mr-2">
                <svg
                  className="w-5 h-5 text-[#28A745]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-Amaranth text-[16px]">Working Hours</h3>
            </div>

            <div className="px-12 text-gray-600 space-y-1 text-[12px]">
              <p>
                <span className="text-gray-700">Time:</span> 8:30 AM – 3:30 PM
              </p>
              <p>
                <span className="text-gray-700">Days:</span> Mon–Sat
              </p>
              <p>
                <span className="text-gray-700">Sunday:</span> Closed
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactSection;
