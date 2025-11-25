"use client"; // ❗ Client-side component

import React from "react";

const SecondCount = () => {
  // const donateClick = handleDonateClick || (() => {
  //   console.warn("⚠️ handleDonateClick is not defined");
  // });
    const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div className="flex justify-center pt-12 items-center">
      <div
        className="relative flex w-[95%] md:w-[80%] macbook:w-[70%] rounded-[10px] p-8 h-[400px] justify-center"
        style={{
          backgroundImage: "url('/secondbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="  bg-[rgba(243,156,18,0.7)]  bg-opacity-80 w-full  rounded-[10px] h-full    ">
          {/* Overlay */}
          <div className=" flex flex-col justify-center h-[100%] items-center text-center  ">
            {/* Heading */}
            <h2 className="text-white font-Amaranth text-2xl md:text-6xl mb-2">
              Every Second Counts
            </h2>
            <h4 className="text-white font-poppins lg:text-xl text-sm">
              Be the Reason Someone Sees Again.
            </h4>
            {/* Subtext */}
            <p className="text-white font-poppins mt-2 text-[13px] leading-[19px] md:leading-[24px] md:text-[15px] md:w-[40rem]">
              Your contribution can be the difference between blindness and sight. Help someone regain their vision—one second, one surgery, one life at a time.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex items-center flex-row px-2 gap-[5px] md:gap-[12px]">
              <button
                onClick={handleDonateClick}
                className="bg-white border text-[16px] w-[105px] md:w-[125px] font-inter border-white text-black py-2 md:px-4 rounded-full hover:bg-transparent hover:text-white"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCount;
