"use client"
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";

const Moments = () => {
  const images = [
    {
      img: "/img1.png",
    },
    {
      img: "/img2.jpg",
    },
    {
      img: "/img3.jpg",
    },
    {
      img: "/img4.jpg",
    },
    // {
    //   img: "/img1.png",
    // },
    // {
    //   img: "/img4.jpg",
    // },
    // {
    //   img: "/img2.jpg",
    // },
    // {
    //   img: "/img3.jpg",
    // },
  ];

  const [visibleImages, setVisibleImages] = useState(4);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 4);
  };

  return (
    <div className="pt-12 w-full">
      <div className=" flex  justify-center flex-col gap-4    items-center  ">
        <div className=" flex flex-col text-center md:text-center justify-center   ">
          <p className=" uppercase text-[#F39C12] text-lg font-Amaranth ">Our Story</p>
          <h2 className=" text-2xl  md:text-4xl    font-Amaranth  text-black ">
            Latest Moments from POB Trust
          </h2>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 flex-wrap    justify-center  w-[89%]  ">
          {images.slice(0, visibleImages).map((element, index) => (
            // <div
            //   key={index}
            //   className={`flex justify-between rounded-[10px] w-full mx-4 md:w-56 items-center roundedxl cursor-pointer `}
            // >
            <img
              key={index}
              src={element.img}
              alt="momenets"
              className="   w-full h-[307px] object-cover md:objectcontain "
            />
            // </div>
          ))}
        </div>
        <div className=" flex justify-center gap-2 ">
          {visibleImages < images.length && (
            <button className="px-8 py-2  border rounded-[37px] border-[#28A745] "
              onClick={loadMore}>
              Load More
            </button>
          )}
           <a
                href="https://www.instagram.com/pobeyehospitalkarachi/"
                target="_blank"
                rel="noopener noreferrer"
              >
          <button className=" flex gap-2 text-[15px] items-center  rounded-[37px] bg-[#28A745] text-white px-4 py-2  cursor-pointer   ">
            <span>
             
                <FaInstagram size={12} />
            </span>
            Follow On Instagram
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Moments;
