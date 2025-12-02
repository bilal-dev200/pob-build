"use client"; // ✅ Required for client-side interactivity

import { useState } from "react";

const Values = () => {
  const categories = ["Respect", "Integrity", "Compassion", "Empathy", "Excellence"];

  const images = {
    Respect: [
      {
        src: "/respect.png",
        alt: "Respect",
        name: "At POB Trust Eye Hospital, respect is at the core of our patient care. We treat every individual with dignity, valuing their concerns and ensuring a welcoming environment. Our team listens attentively, fostering trust and understanding. We believe that respect builds strong relationships between patients and healthcare providers. By maintaining a culture of kindness and professionalism, we ensure that every person who walks through our doors feels valued, heard, and cared for.",
      },
    ],
    Integrity: [
      {
        src: "/integrity.jpg",
        alt: "Integrity",
        name: "Integrity is the foundation of our work at POB Trust. We are committed to honesty, transparency, and ethical practices in every aspect of patient care. Our team upholds the highest medical standards, ensuring that treatments and recommendations are always in the best interest of our patients. Trust is earned through sincerity, and we take this responsibility seriously. By staying true to our values, we continue to provide reliable and ethical eye care services to all.",
      },
    ],
    Compassion: [
      {
        src: "/compassion.jpg",
        alt: "Compassion",
        name: "Compassion is what drives our mission at POB Trust. We understand that seeking medical care can be challenging, so we strive to provide comfort and reassurance. Our doctors and staff approach each patient with kindness, ensuring they feel safe and supported. We go beyond treatment, offering emotional and psychological support to those in need. True healing begins with a compassionate heart, and we are dedicated to making every patient’s journey a little easier.",
      },
    ],
    Empathy: [
      {
        src: "/empathy.jpeg",
        alt: "Empathy",
        name: "Empathy is at the heart of our patient care philosophy. At POB Trust, we don’t just treat eye conditions—we understand the emotions and struggles that come with them. We listen to our patients, acknowledge their fears, and provide comfort through understanding. Our team ensures that every individual is treated with patience and kindness. By putting ourselves in our patients’ shoes, we create a supportive environment where they feel genuinely cared for.",
      },
    ],
    Excellence: [
      {
        src: "/excellence .jpg",
        alt: "Excellence",
        name: "At POB Trust, excellence is our standard. We are dedicated to providing the highest quality eye care, using advanced treatments and best medical practices. Our doctors and staff continuously improve their skills to ensure top-notch service. Every patient deserves the best, and we strive to exceed expectations in every aspect of care. From diagnosis to treatment, we maintain excellence in everything we do, ensuring that our patients receive the finest eye care possible.",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Respect");
  const sliderImages = images[activeCategory?.trim()]; // Prevent undefined errors

  return (
    <div className="relative flex flex-col items-center justify-center text-center pt-12">
      {/* Header */}
      <div className="md:w-5/12 w-[90%] font-inter items-center text-center mb-8 flex flex-col gap-2">
        <p className="text-[#F39C12] font-Amaranth text-center text-lg uppercase">Values</p>
        <h2 className="text-3xl md:text-4xl max-w-2xl font-Amaranth text-center md:text-start">
          The Core Values That Define Us
        </h2>
      </div>

      {/* Content */}
      <div className="flex justify-center w-[90%] flex-col md:flex-row gap-8">
        {/* Categories */}
        <div className="flex justify-start md:flex-col flex-row items-start overflow-x-auto max-w-full md:overflow-y-auto font-Amaranth md:w-1/6 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={` cursor-pointer px-12 py-2 bg-transparent text-black text-[12px] md:text-[14px] text-start w-full ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#F39C12] border-b-4 md:border-b-0 md:border-r-4 border-r-[#F39C12] to-gray-50 rounded-tl-[10px] text-white"
                  : "bg-transparent text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="shadow-lg rounded-[22px] w-[95%] md:w-[50%] 2xl:max-w-7xl">
          {sliderImages?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 md:gap-0 md:flex-row rounded-[20px] h-full items-center"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full md:w-72 h-full object-cover rounded-lg"
              />
              <div className="text-center h-full py-4 flex items-center justify-center px-4 md:px-8">
                <p className="text-[#777777] font-inter md:text-start text-center text-[12px]">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
