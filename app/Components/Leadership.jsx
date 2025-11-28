"use client"; // ✅ required for client-side interactivity
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect } from "react";
import { Navigation, Autoplay } from "swiper/modules";

const LeaderShip = () => {
  const categories = ["Executive", "Doctors", "Team", "Management"];

  const images = {
    Executive: [
      {
        src: "/Executive/Abdullah_Muttaqi.jpg",
        alt: "Executive 1",
        name: "Dr. Abdullah Muttaqi",
        position: "(Member of EMC POB Eye Hospital)",
      },
      {
        src: "/Executive/Atif_Hafeez.jpg",
        alt: "Executive 2",
        name: "Dr. Atif Hafeez Siddique",
        position: "(Member of EMC POB Eye Hospital)",
      },
      {
        src: "/Executive/Misbah_ul_Aziz.jpg",
        alt: "Executive 3",
        name: "Dr. Misbah ul Aziz",
        position: "(Chairman POB Trust)",
      },
      {
        src: "/Executive/Muhammad_Azeemuddin.jpg",
        alt: "Executive 4",
        name: "Dr. Muhammad Azeemuddin",
        position: "(Director Quality Assurance)",
      },
      {
        src: "/Executive/Salman_Ahmad.jpg",
        alt: "Executive 1",
        name: "Dr. Ahmed Salman ",
        position: "(Director of Finance)",
      },
      {
        src: "/Executive/Sarfaraz_Akhtar.jpg",
        alt: "Executive 2",
        name: "Dr. Sarfaraz Akhtar",
        position:
          "(Director Hospital Administration & Head of Quality Assurance)",
      },
      {
        src: "/Executive/Shayan_Shadmani.jpg",
        alt: "Executive 3",
        name: "Dr. Shayan Shadmani",
        position: "(Secretary)",
      },
      {
        src: "/Executive/Tabbassum_Jafri.png",
        alt: "Executive 4",
        name: "Dr. Tabbassum Jafri",
        position: "(Director HR)",
      },
      {
        src: "/Executive/Zaki_uddin.jpg",
        alt: "Executive 3",
        name: "Dr. Zaki uddin Ahmed",
        position: "(Director Research & Strategy)",
      },
      {
        src: "/Executive/Zakiuddin_Ahmad.jpg",
        alt: "Executive 4",
        name: "Dr. Zakiuddin Ahmad Sabri",
        position: "(Medical Director)",
      },
    ],
    Doctors: [
      {
        src: "/Doctors/Abdul_Salam.jpg",
        alt: "Doctor 1",
        name: "Dr. Abdul Salam Moosa",
        position: "",
      },
      {
        src: "/Doctors/Afifa_Shams.jpg",
        alt: "Doctor 4",
        name: "Dr. Afifa Shams",
        position: "",
      },
      {
        src: "/Doctors/Alishbah_Anwar.jpg",
        alt: "Doctor 3",
        name: "Dr. Alishbah Anwar",
        position: "",
      },
      {
        src: "/Doctors/Asad_Javed.jpg",
        alt: "Doctor 4",
        name: "Dr. Asad Javed",
        position: "",
      },
      {
        src: "/Doctors/Asghar_Rajani.jpeg",
        alt: "Doctor 1",
        name: "Dr. Asghar Rajani",
        position: "",
      },
      {
        src: "/Doctors/Ayesha.jpg",
        alt: "Doctor 2",
        name: "Dr. Ayesha",
        position: "",
      },
      {
        src: "/Doctors/Uzair.jpg",
        alt: "Doctor 2",
        name: "Dr. Uzair Ahmed",
        position: "",
      },
      {
        src: "/Doctors/Burhan.jpg",
        alt: "Doctor 2",
        name: "Dr. Burhan Abdul Majeed",
        position: "",
      },
      {
        src: "/Doctors/Faisal_Murtaza.jpg",
        alt: "Doctor 2",
        name: "Dr. Faisal Murtaza",
        position: "",
      },
      {
        src: "/Doctors/Faiza.jpg",
        alt: "Doctor 2",
        name: "Dr. Faiza Rameez",
        position: "",
      },
      {
        src: "/Doctors/Hanif.jpeg",
        alt: "Doctor 2",
        name: "Dr. Hanif Godail",
        position: "",
      },
      {
        src: "/Doctors/Hina.jpg",
        alt: "Doctor 2",
        name: "Dr. Hina Nasreen Nawaz",
        position: "",
      },
      {
        src: "/Doctors/Huzaifa.jpg",
        alt: "Doctor 2",
        name: "Dr. Huzaifa Baig",
        position: "",
      },
      {
        src: "/Doctors/Kauser.jpeg",
        alt: "Doctor 2",
        name: "Dr. Kauser Naz",
        position: "",
      },
      {
        src: "/Doctors/Mariam.jpeg",
        alt: "Doctor 2",
        name: "Dr. Mariam Khalil",
        position: "",
      },
      {
        src: "/Doctors/Mariam_Shamim.jpg",
        alt: "Doctor 2",
        name: "Dr. Mariam Shamim Kashif",
        position: "",
      },
      {
        src: "/Doctors/Moiz_Uddin.jpg",
        alt: "Doctor 2",
        name: "Dr. Moiz Uddin",
        position: "",
      },
      {
        src: "/Doctors/Mudassir_Hilal.jpg",
        alt: "Doctor 2",
        name: "Dr. Mudassir Hilal",
        position: "",
      },
      {
        src: "/Doctors/Muhammad_Ahmed.jpg",
        alt: "Doctor 2",
        name: "Dr. Muhammad Ahmed Khan",
        position: "",
      },
      {
        src: "/Doctors/Muhammad_Haseeb.jpg",
        alt: "Doctor 2",
        name: "Dr. Muhammad Haseeb Qureshi",
        position: "",
      },
      {
        src: "/Doctors/Muhammad_Mohsin.jpg",
        alt: "Doctor 2",
        name: "Dr. Muhammad Mohsin Afzal",
        position: "",
      },
      {
        src: "/Doctors/Muhammad_Zunair.jpg",
        alt: "Doctor 2",
        name: "Dr. Muhammad Zunair Aziz",
        position: "",
      },
      {
        src: "/Doctors/Muzna.jpeg",
        alt: "Doctor 2",
        name: "Dr. Muzna",
        position: "",
      },
      {
        src: "/Doctors/Nadia_Junaid.jpg",
        alt: "Doctor 2",
        name: "Dr. Nadia Junaid",
        position: "",
      },
      {
        src: "/Doctors/Nisar_Ahmad.jpg.jpg",
        alt: "Doctor 2",
        name: "Dr. Nisar Ahmad",
        position: "",
      },
      {
        src: "/Doctors/Rabia_Furqan.jpg.jpg",
        alt: "Doctor 2",
        name: "Dr. Rabia Furqan",
        position: "",
      },
      {
        src: "/Doctors/Riaz_Ahmad.jpg",
        alt: "Doctor 2",
        name: "Dr. Riaz Ahmad",
        position: "",
      },
      {
        src: "/Doctors/Saeed_Iqbal.jpg.jpg",
        alt: "Doctor 2",
        name: "Dr. Saeed Iqbal",
        position: "",
      },
      {
        src: "/Doctors/Sameen_Fatima.jpeg",
        alt: "Doctor 2",
        name: "Dr. Sameen Fatima",
        position: "",
      },
      {
        src: "/Doctors/Sami.jpeg",
        alt: "Doctor 2",
        name: "Dr. Sami ur Rehman",
        position: "",
      },
      {
        src: "/Doctors/Sara.jpeg",
        alt: "Doctor 2",
        name: "Dr. Sara",
        position: "",
      },
      {
        src: "/Doctors/Shahid.jpg",
        alt: "Doctor 2",
        name: "Dr. Shahid",
        position: "",
      },
      {
        src: "/Doctors/Syed.jpg",
        alt: "Doctor 2",
        name: "Dr. Syed Muhammad Saad",
        position: "",
      },
    ],
    Team: [
      {
        src: "/l4.jpg",
        alt: "Executive 4",
        name: "Dr. Intzar Hussain",
        position: "Chairman",
      },
      {
        src: "/l1.jpg",
        alt: "Executive 1",
        name: "Dr. Muhammad Zahid Latif",
        position: "General Secretary",
      },
      {
        src: "/l2.jpg",
        alt: "Executive 2",
        name: "Dr. Shafqat Javed",
        position: "Finance Secretary",
      },
      {
        src: "/l3.jpg",
        alt: "Executive 3",
        name: "Dr. Tahir Farooq",
        position: "Member",
      },
      {
        src: "/Members/Ahmad_Khan.jpg",
        alt: "Executive 1",
        name: "Dr. Ahmad Khan",
        position: "Member",
      },
      {
        src: "/Members/Hafeez.jpg",
        alt: "Executive 2",
        name: "Dr. Hafeez Ur Rahman",
        position: "Member",
      },
    ],
    Management: [
      {
        src: "/Pictures/Abdullah_Muttaqi.jpg",
        alt: "Executive 1",
        name: "Dr. Abdullah Muttaqi",
        position: "",
      },
      {
        src: "/Pictures/Misbah.jpg",
        alt: "Executive 2",
        name: "Dr. Misbah ul Aziz",
        position: "",
      },
      {
        src: "/Pictures/Azeemuddin.jpg",
        alt: "Executive 3",
        name: "Dr. Muhammad Azeemuddin",
        position: "",
      },
      {
        src: "/Pictures/Salman.jpg",
        alt: "Executive 4",
        name: "Dr. Salman Ahmad Khan Ghauri",
        position: "",
      },
      {
        src: "/Pictures/Shayan.jpg",
        alt: "Executive 1",
        name: "Dr. Shayan Shadmani",
        position: "",
      },
      {
        src: "/Pictures/Tabassum.jpg",
        alt: "Executive 2",
        name: "Dr. Tabassum Jafri",
        position: "",
      },
      {
        src: "/Pictures/Zakiuddin.jpg",
        alt: "Executive 2",
        name: "Dr. Zakiuddin Ahmad Sabri",
        position: "",
      },
    ],
  };

  const [swiperKey, setSwiperKey] = useState(0); // Add a key to force re-render

  useEffect(() => {
    // Force re-render of Swiper when data is loaded
    setSwiperKey((prevKey) => prevKey + 1);
  }, []);

  const [activeCategory, setActiveCategory] = useState("Executive");
  const sliderImages = images[activeCategory.trim()]; // Trim the activeCategory

  return (
    <div className="  relative flex flex-col items-center justify-center text-center pt-12  ">
      <div className="  md:w-5/12 w-[90%] font-inter items-center text-center   mb-4  flex flex-col gap-2 ">
        {/* <p className="text-[#F39C12] font-Amaranth text-center   ">Board</p> */}
        <h2 className="text-3xl md:text-4xl  max-w-2xl font-Amaranth  text-center md:text-start ">
          Leadership Behind the Vision{" "}
        </h2>
        <p className=" text-[#777777] text-center    text-[14px] ">
          Our leadership is grounded in service, with a commitment to ethical
          care, long-term impact, and sustainable change. Their vision drives
          every effort to reach the underserved.
        </p>
      </div>

      <div className="flex justify-start overflow-x-auto   whitespace-nowrap max-w-full  bg-[#28A745] py-2 px-2 rounded-[72px] gap-2 md:gap-4 mb-6 scrollbar-hide">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer px-4 py-2 text-[13px] rounded-[72px] ${
              activeCategory === category
                ? "bg-white text-black"
                : "bg-transparent text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="   w-[90%] md:w-[80%]  ">
        <Swiper
          key={swiperKey} // Force re-render with updated key
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            1524: { slidesPerView: 5, spaceBetween: 10 }, // Desktop
            1024: { slidesPerView: 5, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 5 },
            0: { slidesPerView: 2, spaceBetween: 8 },
          }}
          navigation={{
            nextEl: ".leader-custom-next",
            prevEl: ".leader-custom-prev",
          }}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
        >
          {sliderImages.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center swiper-slide-custom"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="text-center mt-2">
                <p className="text-lg font-Amaranth">{item.name}</p>
                <p className="text-sm text-gray-500 font-inter">{item.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom navigation buttons */}
     {/* <div className="absolute md:bottom-10 lg:bottom-10 lg:bg-yellow-400 z-10 w-full hidden lg:block">
        <div
          className="leader-custom-prev border ml-5 border-[#B3B3B3] rounded-[50%] swiper-button-prev px-6 "
          style={{
            top: "-120px",
            left: "0px",
            width: "1rem",
          }}
        ></div>
        <div
          className="leader-custom-next border mr-5 border-[#B3B3B3] rounded-[50%] swiper-button-next px-6 "
          style={{
            color: "red",

            top: "-120px",
            right: "6px",
            width: "1rem",
          }}
        ></div>
      </div> */}
    </div>
  );
};

export default LeaderShip;
