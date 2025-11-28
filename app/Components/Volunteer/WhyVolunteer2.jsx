import React from "react";
import { Image_Url } from "../../../Utils/const";
// import DOMPurify from "dompurify";
import BlogBody from "../../Components/BlogBody";

const WhyVolunteer2 = ({ section_4 }) => {
  if (!section_4) return null;

  const {
    why_volunteer_second_section_heading,
    why_volunteer_second_section_description,
    why_volunteer_second_section_image
  } = section_4;
  return (
    <div className="flex flex-col md:flex-row   gap-8 items-center mb-10 justify-around ">
      <div className="  md:w-4/12 w-[90%] font-inter items-center  md:items-start text-center md:text-start flex flex-col gap-4 ">
        <h2 className=" text-4xl  max-w-2xl font-Amaranth  text-center md:text-start ">
         {why_volunteer_second_section_heading}
        </h2>
        {/* <p className="   text-center md:text-start  md:max-w-lg ">
          Volunteering is more than just giving time—its about creating change.
          Whether youre helping individuals, supporting a cause, or working on
          community projects, your contribution has a meaningful impact.
        </p>
        <div className=" flex flex-col gap-2 ">
          <h5 className=" text-2xl  font-Amaranth ">Ways to Get Involved</h5>
          <p>
            There are many ways to volunteer based on your skills and interests.
            You can:
          </p>
          <ul className="  list-disc ml-4 font-inter flex flex-col gap-2 text-[15px]  md:max-w-lg ">
            <li>Join community outreach programs.</li>
            <li>Help in educational or medical initiatives.</li>
            <li>Assist in fundraising and awareness campaigns.</li>
            <li>Offer your expertise in professional fields</li>
          </ul>
        </div> */}
     {/* <div
          className="text-sm text-[#777777] mt-4"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(why_volunteer_second_section_description) }}
        ></div> */}
        <BlogBody body={why_volunteer_second_section_description} />
      </div>
      <div className=" px-4 md:px-0 ">
        <img src={`${Image_Url}/${why_volunteer_second_section_image}`} className="h-2/3 rounded-b-full" alt="" />
      </div>
    </div>
  );
};

export default WhyVolunteer2;
