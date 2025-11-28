"use client"
import React, { useState } from "react";



const MediaGallery = ({ imageGalleryImages = [], gallery_heading }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const showMoreImages = () => setVisibleCount((prev) => prev + 6);

  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="w-full 3xl:max-w-[85%] mx-auto">
        {/* Header & Highlight Section */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 items-center">
          {/* Left Side */}
          <div className="text-center md:text-left flex-1 min-w-[300px]">
            <div className="md:h-[250px]">
              <p className="text-yellow-500 uppercase tracking-wider text-lg font-Amaranth">
                Media Gallery
              </p>
              {/* <h2 className="text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight font-Amaranth ">
                {gallery_heading?.gallery_heading
                  ?.match(/.{1,14}/g) // split string into chunks of 10 characters
                  .map((chunk, index) => (
                    <span key={index}>
                      {chunk}
                      <br />
                    </span>
                  ))}
              </h2> */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight font-Amaranth">
                {gallery_heading?.gallery_heading
                  ?.split(" ") // split into words
                  .map((word, index) => (
                    <React.Fragment key={index}>
                      {word} {word.toLowerCase() === "moments" && <br />}{" "}
                      {/* break after "moments" */}
                    </React.Fragment>
                  ))}
              </h2>
            </div>
            <div className="w-full h-[250px] sm:h-[280px] mt-12 mx-auto md:mx-0">
              {imageGalleryImages?.length > 0 && (
                <img
                  src={`${imageGalleryImages[0].image}`}
                  alt={imageGalleryImages[0].alt_text || "Gallery"}
                  className="w-full h-full object-cover rounded-xl"
                />
              )}
            </div>
          </div>

          {/* First 2 images */}
          <div className="flex flex-col gap-4 flex-1 min-w-[300px]">
            {imageGalleryImages?.slice(1, 3).map((image, index) => (
              <div key={image.id} className="w-full h-[250px] sm:h-[280px]">
                <img
                  src={`${image.image}`}
                  alt={image.alt_text || `Gallery ${index + 2}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Next 2 images */}
          <div className="hidden md:flex flex-col gap-4 flex-1 min-w-[300px]">
            {imageGalleryImages?.slice(3, 5).map((image, index) => (
              <div key={image.id} className="w-full h-[250px] sm:h-[280px]">
                <img
                  src={`${image.image}`}
                  alt={image.alt_text || `Gallery ${index + 4}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Grid of images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {imageGalleryImages?.slice(5, visibleCount).map((image, index) => (
            <div key={image.id} className="w-full h-[220px]">
              <img
                src={`${image.image}`}
                alt={image.alt_text || `Gallery ${index + 6}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < imageGalleryImages.length && (
          <div className="text-center mt-10">
            <button
              onClick={showMoreImages}
              className="cursor-pointer px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition "
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaGallery;
