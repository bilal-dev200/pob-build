"use client"; // ❗ Client-side component

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

SwiperCore.use([Autoplay]);

const VideoSection = () => {
  // Sample YouTube video IDs
  const youtubeVideos = [
    "fKrMxM_LncE",
    "yUuR_KSMDAo",
    "fKrMxM_LncE",
    "fKrMxM_LncE",
    "yUuR_KSMDAo",
    "fKrMxM_LncE",
    "fKrMxM_LncE",
    "yUuR_KSMDAo",
  ];

  return (
    <div className="w-full macbook:w-[1300px] pt-12 md:pt-24 px-4 md:px-0">
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        breakpoints={{
          1024: { slidesPerView: 6, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          0: { slidesPerView: 1, spaceBetween: 8 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {youtubeVideos.map((videoId, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center">
              <iframe
                width="100%"
                height="230"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg w-full h-96 object-cover"
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoSection;
