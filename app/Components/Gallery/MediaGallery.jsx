"use client";

import React from "react";
import Link from "next/link";
import { Image_Url } from "../../../Utils/const";

const MediaGallery = ({ imageGalleryImages }) => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="w-full max-w-[95%] mx-auto flex flex-col md:flex-row gap-6 items-start md:items-center px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Left Side */}
        <div className="flex-1 min-w-0 text-center md:text-left">
          <div className="">
            <p className="text-yellow-500 uppercase text-lg tracking-wider font-Amaranth">
              Media Gallery
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] mt-2 leading-tight font-Amaranth">
              Capturing Moments, <br /> Sharing Stories
            </h2>
            <p className="mt-2 font-Amaranth">
              Explore impactful visuals that tell the real stories behind the smiles.
            </p>
            <Link href="/gallery/">
              <button className="mt-2 border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
                View All
              </button>
            </Link>
          </div>

          <div className="w-full h-[200px] sm:h-[250px] mt-6 md:mt-2">
            {imageGalleryImages && imageGalleryImages.length > 0 && (
              <img
                src={`${Image_Url}/${imageGalleryImages[0].image}`}
                alt={imageGalleryImages[0].alt_text || "Gallery"}
                className="w-full h-full object-cover rounded-xl"
              />
            )}
          </div>
        </div>

        {/* Right Side - Image Flexbox */}
        <div className="flex flex-col gap-4 md:mt-8 flex-1 min-w-[360px]">
          {imageGalleryImages?.slice(1, 3).map((image, index) => (
            <div key={image.id} className="w-full h-[200px] sm:h-[250px]">
              <img
                src={`${Image_Url}/${image.image}`}
                alt={image.alt_text || `Gallery ${index + 2}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Extra Right Side for larger screens */}
        <div className="hidden md:flex flex-col md:mt-8 gap-4 flex-1 min-w-0">
          {imageGalleryImages?.slice(3, 5).map((image, index) => (
            <div key={image.id} className="w-full h-[200px] sm:h-[250px]">
              <img
                src={`${Image_Url}/${image.image}`}
                alt={image.alt_text || `Gallery ${index + 4}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
