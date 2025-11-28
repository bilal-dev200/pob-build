import React from "react";
import { Image_Url } from "../../../Utils/const";

const ClinicalMeetings = ({ section_7 }) => {
  if (!section_7) return null;

  const {
    weekly_clinical_meetings_main_heading,
    weekly_clinical_meetings_sub_heading,
    weekly_clinical_meetings_description,
    weekly_clinical_meetings_image,
  } = section_7;
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4   md:px-10   md:pt-32 bg-white md:w-[95%]">
      {/* Image Section */}
      <div className=" h-[470px] w-full md:w-1/2 flex justify-center">
        <img
          src={`${Image_Url}/${weekly_clinical_meetings_image}`}
          alt="Eye Checkup"
          className="w-82 h-142 "
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col  items-center md:items-start  text-center  md:text-start     ">
        <h5 className="text-[#F39C12] font-Amaranth uppercase text-lg tracking-wide">
          {weekly_clinical_meetings_main_heading}
        </h5>
        <h2 className="text-3xl md:text-4xl font-Amaranth mt-2">
          {weekly_clinical_meetings_sub_heading}
        </h2>
        {/* <p className="text-[#777777] mt-4 ">
          Every week, we host clinical meetings that provide a platform for
          trainees to discuss challenging cases and explore recent advancements
          in ophthalmology. These interactive sessions promote collaboration
          among peers and mentors, creating an environment for sharing
          knowledge, research, and clinical experiences. By participating in
          these meetings, our trainees stay up-to-date with evidence-based
          practices and continue to develop their diagnostic and treatment
          abilities.
        </p> */}
        <div
          className="text-[#777777] mt-4 font-inter"
          dangerouslySetInnerHTML={{
            __html: weekly_clinical_meetings_description,
          }}
        />

        {/* <button className="mt-6 px-6 py-3 bg-[#28A745] text-[12px] text-white rounded-full   hover:bg-green-600 transition duration-300">
          View Detail
        </button> */}
      </div>
    </section>
  );
};

export default ClinicalMeetings;
