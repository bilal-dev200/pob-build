"use client"; // ✅ This component uses useState, so it must be a client component

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Image_Url } from "../../../Utils/const";

const OurStory = ({ aboutOurStorySection }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  if (!aboutOurStorySection) return null;

  const { image, alt_text, heading, description, link } = aboutOurStorySection;

  return (
    <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl mx-auto p-6">
      {/* Image Section */}
      <div className="relative w-[300px] h-[350px] md:w-[400px] md:h-[480px] overflow-hidden">
        <img
          src={`${Image_Url}/${image}`}
          alt={alt_text || "Our Story"}
          className="w-full h-full object-cover rounded-b-full"
        />
        {/* Play Button */}
        <div
          className="absolute bottom-4 right-4 bg-green-500 rounded-full shadow-lg cursor-pointer p-8"
          onClick={() => setIsPlaying(true)}
        >
          <FaPlay className="text-white text-4xl" />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-start">
        <h2 className="text-3xl md:text-4xl text-gray-900 leading-snug font-Amaranth">
          {heading}
        </h2>
        {description
          ?.replace(/<br\s*\/?>/gi, "") // remove <br> tags
          .split("\r\n")
          .map((para, index) => (
            <p key={index} className="text-gray-600 font-inter mt-4">
              {para}
            </p>
          ))}
      </div>

      {/* Full-Screen Video Modal */}
      {isPlaying && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setIsPlaying(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={link?.replace("watch?v=", "embed/")}
              className="w-full h-[30vh] md:h-[72vh]"
              style={{ border: "none", overflow: "hidden" }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Our Story Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurStory;
