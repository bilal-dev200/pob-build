import React from "react";
import { Image_Url } from "../../../Utils/const";

const FutureSpecialists = ({ section_4 }) => {
  // const items = [
  //   {
  //     title: "Ophthalmic Excellence",
  //     description:
  //       "Our students are trained to be excellent in their field of study. They are equipped with the necessary skills and knowledge to excel in their chosen field.",
  //     image: "/f1.png",
  //   },

  //   {
  //     title: "Ophthalmic Excellence",
  //     description:
  //       "Our students are trained to be excellent in their field of study. They are equipped with the necessary skills and knowledge to excel in their chosen field.",
  //     image: "/f2.png",
  //   },

  //   {
  //     title: "Ophthalmic Excellence",
  //     description:
  //       "Our students are trained to be excellent in their field of study. They are equipped with the necessary skills and knowledge to excel in their chosen field.",
  //     image: "/f3.png",
  //   },
  //   {
  //     title: "Ophthalmic Excellence",
  //     description:
  //       "Our students are trained to be excellent in their field of study. They are equipped with the necessary skills and knowledge to excel in their chosen field.",
  //     image: "/f4.png",
  //   },
  // ];
  if (!section_4) return null;

  const {
    training_program_main_heading,
    training_program_sub_heading,
    types
  } = section_4;
  return (
    <div className=" flex mt-4 md:mt-0  flex-col md:flex-row items-center md:items-start  md:justify-center ">
      <div className="  flex  flex-col md:flex-row    gap-x-2  gap-y-4 h-full justify-center  md:w-6/12 items-center ">
        <div className="flex flex-col justify-start gap-y-4">
          {types.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="flex  py-8 px-4 w-72 bg-[#F4F4F4] flex-col justify-center gap-4 rounded-[20px] items-start md:justify-start"
            >
              <div className="bg-white  p-4 mx-auto">
                <img
                  src={`${Image_Url}/${item.image}`}
                  alt="Ophthalmic Excellence"
                  className="w-10 h-10  object-contain  "
                />
              </div>

              <h3 className="text-xl font-Amaranth  text-center md:text-start text-black">
                {item.heading}
              </h3>
              <div
        className="text-[14px] font-inter text-[#777777] text-center md:text-start"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:mt-36 justify-end gap-y-4">
          {types.slice(2, 4).map((item, index) => (
            <div
              key={index}
              className="flex  py-8 px-4 w-72 bg-[#F4F4F4] flex-col gap-4 rounded-[20px] items-start justify-center md:justify-start"
            >
              <div className="bg-white  p-4 mx-auto">
                <img
                  src={`${Image_Url}/${item.image}`}
                  alt="Ophthalmic Excellence"
                  className="w-10 h-10  object-contain  "
                />
              </div>

              <h3 className="text-xl font-Amaranth text-center md:text-start text-black ">
                {item.heading}
              </h3>
              <div
        className="text-[14px] text-[#777777] font-inter text-center md:text-start"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
            </div>
          ))}
        </div>
      </div>

      <div className=" md:mt-36 mt-4 text-center md:text-start flex flex-col gap-4  w-10/12 md:w-4/12 ">
        <p className=" uppercase text-[#F39C12] font-Amaranth text-lg   ">
          {training_program_main_heading}
        </p>
        <h2 className=" text-2xl  md:text-4xl    font-Amaranth  text-black ">
          {training_program_sub_heading}
        </h2>
        <p className=" text-[#777777]  font-inter text-[11px] md:text-[15px]   ">
          Our FCPS Ophthalmology Training Program is a comprehensive residency
          designed to provide in-depth training in general ophthalmology. This
          program combines clinical practice, research, and academic knowledge,
          ensuring that our trainees gain the necessary skills to diagnose and
          manage a wide range of eye conditions. Residents benefit from expert
          faculty guidance and a chance to actively participate in advanced
          ophthalmic research projects.
        </p>
      </div>
    </div>
  );
};

export default FutureSpecialists;
