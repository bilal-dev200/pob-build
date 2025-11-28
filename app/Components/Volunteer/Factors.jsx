import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../../Utils/const";

const Factors = ({ section_5 }) => {
  // Data array for services section
  // const services = [
  //   {
  //     title: "Teaching & Mentorship",
  //     description: [
  //       "Assist in skill-building workshops and vocational training programs.",
  //       "Educate and mentor children in need.",
  //     ],
  //   },
  //   {
  //     title: "Community Outreach",
  //     description: [
  //       "Participate in food drives, educational programs, and social initiatives.",
  //       "Help distribute meals, medical aid, and clothing to underprivileged communities.",
  //     ],
  //   },
  //   {
  //     title: "Fundraising & Campaigns",
  //     description: [
  //       "Support fundraising events and donation drives..",
  //       "Help raise awareness through social media and community engagement.",
  //     ],
  //   },
  //   {
  //     title: "Healthcare & Emergency Aid",
  //     description: [
  //       "Extending eye care services to incarcerated individuals, giving them access to essential treatments.",
  //       "Extending eye care services to incarcerated individuals, giving them access to essential treatments.",
  //     ],
  //   },
  // ];
  if (!section_5) return null;

  const {
    make_difference_heading,
    make_difference_image,
    cards
  } = section_5;
  return (
    <div className=" flex flex-col  pt-12  gap-8 items-center mb-8 md:mb-20 justify-center  ">
      <div className=" flex flex-col gap-2  md:w-full text-center w-[90%] md:text-center items-center justify-center ">
        <h2 className=" text-xl  md:text-4xl  text-center md:text-start  font-Amaranth  text-black ">
         {make_difference_heading}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row  gap-8 items-center justify-center ">
        <div>
          <img src={`${Image_Url}/${make_difference_image}`} className=" md:max-w-lg rounded-r-full" alt="" />
        </div>
        <div className="  md:w-5/12 w-[90%] font-inter items-start  md:items-start  flex md:flex-row flex-col gap-2 ">
          <ul className="space-y-4">
            {cards.slice(0, 2).map((service, index) => (
              <li key={index} className="flex items-start gap-2 text-center md:text-start  my-4 ">
                <div className=" flex flex-col gap-2 gap-y-2 ">
                  <strong>{service.heading}:</strong>
                  {/* <div className="text-[#777777] ">
                    {service.description.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 gap-y-2
                      "
                      >
                        <span className="text-green-500">•</span>
                        <div key={index}>{item}</div>
                      </div>
                    ))}
                  </div> */}
                       <div
          className="text-sm text-[#777777] mt-4"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(service.description) }}
        ></div>
                </div>
              </li>
            ))}
          </ul>
          <ul>
            {cards.slice(2, 4).map((service, index) => (
              <li key={index} className="flex items-start gap-2  gap-y-2 text-center md:text-start">
                <div
                  className=" flex flex-col gap-2 my-4
                 "
                >
                  <strong>{service.heading}:</strong>
                  {/* <div className="text-[#777777] ">
                    {service.description.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2  gap-y-2 "
                      >
                        <span className="text-green-500">•</span>
                        <div key={index}>{item}</div>
                      </div>
                    ))}
                  </div> */}
                   <div
          className="text-gray-600 mt-4"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(service.description) }}
        ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Factors;
