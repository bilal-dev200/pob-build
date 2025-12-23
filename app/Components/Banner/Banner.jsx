import React from "react";
import Image from "next/image";

const Banner = ({ title, image }) => {
  return (
    <div className="relative mt-5 md:mt-0 w-full h-[230px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>


      {/* Text Content */}
      {title &&
        <div className="absolute left-3 top-10 md:top-44 -translate-y-1/2 z-10">
          <h1 className="md:text-7xl text-2xl text-white font-Amaranth w-[70%] md:w-[47%] px-4 py-2 rounded-md mt-18">
            {title}
          </h1>
        </div>
      }

    </div>
  );
};

export default Banner;
