"use client"; // ❗ Client-side component

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";

SwiperCore.use([Autoplay]);

const testimonials = [
  {
    image: "/p1.png",
    name: "Muhammad Azeem",
    designation: "Patient",
    quote:
      "I came to POB Trust with severe vision problems, and from my first visit, I knew I was in safe hands. The doctors explained every step with care, and the treatment restored my sight beyond my expectations. I can read, work, and enjoy life again. POB Trust is truly a blessing for people like me.",
  },
  {
    image: "/p2.png",
    name: "Ayesha Bano",
    designation: "Family Member",
    quote:
      "My father had a complicated retinal issue, and we were very worried. POB Trust treated him with such professionalism and kindness that we felt completely reassured. Their services are affordable, yet world-class. I tell everyone that donating to POB Trust is the best way to help someone in need keep their vision.",
  },
  {
    image: "/p3.png",
    name: "Farhan Qureshi",
    designation: "Patient",
    quote:
      "As a diabetic patient, I was at risk of losing my eyesight. The team at POB Trust monitored my condition closely and treated me before it got worse. They care about each patient like family. Anyone who supports them through donations is helping to give people like me a second chance at life.",
  },
  {
    image: "/p4.png",
    name: "Shazia Khan",
    designation: "Community Member",
    quote:
      "I have seen many people in my neighborhood benefit from POB Trust’s free and subsidized treatments. They treat rich and poor with equal respect, and their work changes lives every day. If you are looking for a cause to donate to, this is one of the most impactful you will ever find.",
  },
  {
    image: "/p3.png",
    name: "Imran Siddiqui",
    designation: "Family Member",
    quote:
      "My young niece had a retinal problem, and we were scared about her future. POB Trust handled her case with so much care that she is now living a normal life. I believe every rupee donated here goes directly to saving someone’s vision, and that is a priceless gift.",
  },
];

const Testimonial = () => {
  return (
    <div id="home" className="pt-12 w-full">
      <div className="flex flex-col items-center h-full px-10 md:px-20">
        <div className="text-center py-8">
          <p className="uppercase text-[#F39C12] text-lg font-Amaranth">
            Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-Amaranth text-black">
            From Darkness to Light: Patient Stories
          </h2>
        </div>

        <div className="w-full lg:w-[80%]">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ nextEl: ".next", prevEl: ".prev" }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: { slidesPerView: 3, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              640: { slidesPerView: 1, spaceBetween: 10 },
              0: { slidesPerView: 1, spaceBetween: 8 },
            }}
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex w-full flex-col rounded-[10px] bg-[#F0F1F1] justify-center md:justify-start items-start">
                  <div className="h-auto md:h-[300px] px-4 py-4 md:px-8 text-center md:text-start md:py-8">
                    <div className="mx-auto md:mx-0 bg-[#F39C12] w-10 text-center text-white px-2 font-inter py-2 rounded-full text-xl mb-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <p className="text-[#838383] text-[15px] mb-6 font-inter">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center bg-white w-full justify-start">
                    <div className="md:ml-8 pt-4 w-full">
                      <h4 className="text-lg text-center md:text-start font-inter">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 mb-4 flex gap-4">
          <button className="prev border-[#B3B3B3] border text-[#B3B3B3] p-2 rounded-full cursor-pointer">
            <MdOutlineArrowBack className="text-[#B3B3B3]" size={24} />
          </button>
          <button className="next border-[#B3B3B3] border text-[#B3B3B3] p-2 rounded-full cursor-pointer">
            <MdOutlineArrowForward className="text-[#B3B3B3]" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
