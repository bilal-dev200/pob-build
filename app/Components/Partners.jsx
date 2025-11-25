"use client"; // ❗ This component runs only on the client

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { Image_Url } from "../../Utils/const";

const Partners = ({ middleCarouselImages }) => {
  // Initialize the autoplay module
  SwiperCore.use([Autoplay]);

  return (
    <div className="w-full mt-[25px] h-auto my-8 py-10">
      <h2 className="text-xl md:text-2xl text-center mb-8 font-Amaranth text-black">
        POB Partners in Projects
      </h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          1024: { slidesPerView: 5, spaceBetween: 20 },
          768: { slidesPerView: 5, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          0: { slidesPerView: 2, spaceBetween: 8 },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {middleCarouselImages?.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center">
              <img
                src={`${Image_Url}/${review.image}`}
                alt={review?.platform || `Partner ${index + 1}`}
                className="w-28 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
