import React from "react";

const Banner = ({ title, image }) => {
  return (
    <div className="relative  w-full h-[350px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Banner"
          className="w-screen md:w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      {/* <div className="absolute md:left-10 top-1/3 -translate-y-1/2 z-10">
        <h1 className="md:text-6xl text-2xl text-white font-normal font-Amaranth w-2/3 px-4 py-2 rounded-md">
          {title}
        </h1>
      </div> */}
       <div
        className="absolute top-1/2 -translate-y-1/2 w-full flex justify-center md:justify-start md:left-10 z-10"
      >
        <h1 className="md:text-6xl text-2xl text-white font-normal font-Amaranth w-4/5 md:w-2/3 text-center md:text-left px-4 py-2 rounded-md">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
