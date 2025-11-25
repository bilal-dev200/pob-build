"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import { Image_Url } from "../../../../Utils/const";
import Image from "next/image";

import "./HeroSlider.css";

const HeroSlider = ({ slides }) => {
  return (
    <div className="relative w-full max-w-[100%]  h-[330px] md:h-[100vh] 2xl:h-[100vh] overflow-hidden">
      <Swiper
        loop={true}
        direction={"vertical"}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="w-full h-full swiper-pagination-custom"
      >
        {Array.isArray(slides) &&
          slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              <div className="absolute inset-0 relative w-full h-full">
                <Image
                  src={`${Image_Url}/${slide.image}`}
                  alt={slide.alt_text || "Slider Image"}
                  fill
                  className="md:object-cover mt-20"
                />
              </div>

              {/* Button example */}
              <div className="md:block absolute hidden md:bottom-[500px] md:left-24 z-30">
                <Link href="/donation/">
                  {/* <button className="flex items-center gap-2 md:px-2 py-1 pl-3 px-[2px] md:pl-8 bg-white text-black rounded-full shadow-lg hover:bg-gray-200">
                    Donate Now
                    <span className="p-3 md:p-4 text-white bg-black rounded-full text-xl">
                      <MdKeyboardDoubleArrowRight />
                    </span>
                  </button> */}
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
