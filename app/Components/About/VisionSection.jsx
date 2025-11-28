"use client"; // ✅ Required for client-side rendering

import { Image_Url } from "../../../Utils/const";

const VisionSection = ({ aboutUsVisionSection }) => {
  // Prevent hydration errors
  if (!aboutUsVisionSection) return null;

  const { main_heading, sub_heading, description, vision_cards } = aboutUsVisionSection;

  return (
    <div className="relative w-full">
      {/* Green background */}
      <div className="bg-green-600 w-full h-[350px] absolute top-0 left-0 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-12 text-center md:text-start">
        <div className="text-white">
          <h5 className="text-lg font-Amaranth uppercase">{sub_heading}</h5>
          <h2 className="text-3xl md:text-4xl mt-2 font-Amaranth">{main_heading}</h2>
          <p className="mt-2 text-lg font-inter">{description}</p>
        </div>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vision_cards?.map((card, index) => (
            <div
              key={index}
              className="text-center md:text-start bg-[#F4F4F4] flex flex-col justify-between items-start rounded-xl shadow-lg md:w-[265px] p-6"
            >
              <div className="bg-[#FFFFFF] p-4 rounded-lg inline-block mx-auto md:mx-0">
                <img src={`${Image_Url}/${card.image}`} alt={card.heading || ""} />
              </div>
              <h3 className="text-md md:text-2xl mt-4 font-Amaranth">{card.heading}</h3>
              <p
                className="text-gray-600 mt-2 text-[8px] md:text-sm font-inter"
                dangerouslySetInnerHTML={{ __html: card.description }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
