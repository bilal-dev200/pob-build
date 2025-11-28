import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../../Utils/const";
import BlogBody from "../../Components/BlogBody";

const Efforts = ({ section_3 }) => {
  // const Data = [
  //   {
  //     icon: "/e1.png",
  //     title: "Personal Growth",
  //     des: "Gain valuable skills, experience, and a sense of fulfillment through volunteering..",
  //   },
  //   {
  //     icon: "/e2.png",
  //     title: "Creating Lasting",
  //     des: "Your contributions leave a lasting legacy, benefiting future generations..",
  //   },
  //   {
  //     icon: "/e3.png",
  //     title: "Changing Lives",
  //     des: "Your efforts provide direct assistance to those in need, making a tangible difference..",
  //   },
  //   {
  //     icon: "/e4.png",
  //     title: "Building Stronger",
  //     des: "Strengthen social responsibility and foster unity within society..",
  //   },
  // ];
  if (!section_3) return null;

  const {
    efforts_matter_heading,
    efforts_matter_description,
    cards
  } = section_3;
  return (
    <div className="  bg-[#F4F4F4]  py-12 ">
      <div className="  flex gap-8  px-4 md:flex-row flex-col   justify-center    ">
        <div className="  grid  gap-2 md:gap-8 grid-cols-2  ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="  flex   items-start gap-4  rounded-xl   md:w-[300px] "
            >
              <div className="bg-white  p-3 rounded-[50%] ">
                <img
                  src={`${Image_Url}/${card.image}`}
                  className=" text-white w-14  md:w-20"
                  alt=""
                />
              </div>
              {/* <div>
                <h3 className="text-md md:text-2xl font-Amaranth">
                  {card.title}
                </h3>
                <p className=" mt-2 text-[8px] md:text-sm">{card.des}</p>
              </div> */}
                   {/* <div
          className="text-sm text-[#777777] font-inter"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(card?.description) }}
        ></div> */}
        <BlogBody body={card?.description} />
            </div>
          ))}
        </div>

        <div className="  md:w-3/12 font-inter items-center  md:items-center  flex flex-col gap-2 ">
          <h2 className=" text-4xl  max-w-2xl font-Amaranth  text-center md:text-start ">
            {efforts_matter_heading}
          </h2>
          {/* <p className=" text-[#777777] text-center md:text-start  ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here.
          </p> */}
               <div
          className="text-[#777777] text-center md:text-start"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(efforts_matter_description) }}
        ></div>
        

          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Efforts;
