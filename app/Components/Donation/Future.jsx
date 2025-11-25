import React from "react";
import {
  FaHandshake,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

const Future = () => {
  const data = [
    {
      head: "Flexible Payment Methods",
      p: "Real-time tracking of your donations and their impact.",
    },
  ];
  return (
    <section className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between w-[90%]">
      {/* Left Side - Icons and Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-2/3 font-inter">
        <div className="flex items-start space-x-4 group">
          <div className="group-hover:bg-[#28A745] border  border-[#28A745] text-white p-3 rounded-full ">
            <img
              className="group-hover:block hidden w-16"
              src="/futureImgwhite1.png"
              alt=""
            />
            <img
              className="group-hover:hidden block w-16"
              src="/futureImgBlack1.png"
              alt=""
            />
          </div>
          <div>
            <h3 className=" text-lg font-Amaranth">Flexible Payment Options</h3>
            <p className="text-gray-600">
              Choose a method that works for you, with real-time tracking and
              secure processing.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 group">
          <div className="group-hover:bg-[#28A745] border  border-[#28A745] text-white p-3 rounded-full ">
            <img
              className="group-hover:block hidden w-16"
              src="/futureImgwhite2.png"
              alt=""
            />
            <img
              className="group-hover:hidden block w-16"
              src="/futureImgBlack2.png"
              alt=""
            />
          </div>
          <div>
            <h3 className=" text-lg font-Amaranth">Tax-Deductible</h3>
            <p className="text-gray-600">
              Eligible donors can receive tax benefits on their charitable
              contributions.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 group">
          <div className="group-hover:bg-[#28A745] border  border-[#28A745] text-white p-3 rounded-full ">
            <img
              className="group-hover:block hidden w-16"
              src="/futureImgwhite3.png"
              alt=""
            />
            <img
              className="group-hover:hidden block w-16"
              src="/futureImgBlack3.png"
              alt=""
            />
          </div>
          <div>
            <h3 className=" text-lg font-Amaranth">100% Secure Transactions</h3>
            <p className="text-gray-600">
              Every transaction is encrypted and safeguarded for your peace of
              mind.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 group">
          <div className="group-hover:bg-[#28A745] border  border-[#28A745] text-white p-3 rounded-full ">
            <img
              className="group-hover:block hidden w-16"
              src="/futureImgwhite4.png"
              alt=""
            />
            <img
              className="group-hover:hidden block w-16"
              src="/futureImgBlack4.png"
              alt=""
            />
          </div>
          <div>
            <h3 className=" text-lg font-Amaranth">
              Track Your Donation’s Impact
            </h3>
            <p className="text-gray-600">
              See exactly how your contribution makes a difference, anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Title and Description */}
      <div className="w-full lg:w-[450px] mt-12 lg:mt-0 text-center md:text-start">
        <h2 className="text-4xl text-black font-Amaranth leading-tight w-[300px]">
          Why Donate With Us?
        </h2>
        <p className="text-gray-600 mt-4 font-inter">
          Every contribution you make to POB Trust helps bring vision, hope, and
          a brighter future to those struggling with preventable blindness, Your
          generous donation to POB Trust Eye Hospital brings light to those in
          need. Here’s how your support makes a difference
        </p>
      </div>
    </section>
  );
};

export default Future;
