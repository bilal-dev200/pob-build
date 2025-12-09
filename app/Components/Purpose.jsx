"use client";

import { useEffect, useState } from "react";
import DOMPurify from "isomorphic-dompurify"; 

const Purpose = ({ yellowHead, head, des, pageName, btnName, img,  }) => {
  const [isClient, setIsClient] = useState(false);
  // const donateClick = handleDonateClick || (() => console.warn("⚠️ handleDonateClick is not defined"));

  useEffect(() => {
    setIsClient(true); // Ensures client-side rendering
  }, []);
    const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <div className="flex flex-col md:flex-row gap-4 items-center lg:justify-end 2xl:justify-center">
      {/* Text Section */}
      <div className="md:w-[60%] w-[90%] font-inter flex flex-col gap-2 md:pl-24 items-center md:items-start">
        <h3 className="text-[#F39C12] uppercase text-lg font-Amaranth text-center md:text-start">
          {yellowHead}
        </h3>
        <h2 className="max-w-2xl text-3xl md:text-4xl font-Amaranth text-center md:text-start">
          {head || "Make a Difference with Your Donation"}
        </h2>

        {pageName === "service" ? (
          <div className="text-black mt-5 space-y-5">
            <div className="flex items-start gap-4">
              <span className="text-2xl font-Amaranth">01.</span>
              <div>
                <h3 className="text-2xl font-Amaranth">Cataract Surgery</h3>
                <p className="text-sm">
                  Expert surgical care for pediatric cataracts, ensuring timely intervention to support healthy visual development.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-Amaranth">02.</span>
              <div>
                <h3 className="text-2xl font-Amaranth">Cataract Surgery</h3>
                <p className="text-sm">
                  Expert surgical care for pediatric cataracts, ensuring timely intervention to support healthy visual development.
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Only render sanitized HTML on client
          isClient && des && (
 <div
  className="text-[#777777] text-center md:text-start 2xl:text-xl 2xl:max-w-xl md:max-w-lg mt-4"
  dangerouslySetInnerHTML={{
    __html: des
      ?.replaceAll("<ul>", "<ul class='list-disc list-inside space-y-2'>")
      ?.replaceAll("<li>", "<li class='text-[#777777] leading-relaxed'>")
  }}
/>

) 

        )}

        <button
           onClick={handleDonateClick}
          className="mt-4 px-4 py-3 w-32 rounded-full text-[16px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300 cursor-pointer"
        >
          {btnName}
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-end md:w-full mt-6 md:mt-0">
        <img src={img} className="md:max-w-lg 2xl:max-w-3xl" alt="" />
      </div>
    </div>
  );
};

export default Purpose;
