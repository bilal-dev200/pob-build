import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../Utils/const";
import BlogBody from "../Components/BlogBody";

const ZakatImpact = ({ section_6 }) => {
  // const impactData = [
  //   {
  //     id: 1,
  //     image: "/hardship.png", // Replace with your actual image path
  //     title: "From Hardship to Entrepreneurship",
  //     description: "It is a long established fact that a reader will be distracted.",
  //   },
  //   {
  //     id: 2,
  //     image: "/book.png", // Replace with your actual image path
  //     title: "Educating the Future",
  //     description: "It is a long established fact that a reader will be distracted.",
  //   },
  //   {
  //     id: 3,
  //     image: "/mind.png", // Replace with your actual image path
  //     title: "Ensuring Health & Well-being",
  //     description: "It is a long established fact that a reader will be distracted.",
  //   },
  //   {
  //     id: 4,
  //     image: "/power.png", // Replace with your actual image path
  //     title: "Empowering Through Skills",
  //     description: "It is a long established fact that a reader will be distracted.",
  //   },
  // ];
  if (!section_6) return null;

  const { zakat_impact_heading, zakat_impact_heading_description, cards } =
    section_6;
  return (
    <section className="text-center py-12 px-4">
      <h2 className="text-3xl md:text-4xl  text-black font-Amaranth">
        {zakat_impact_heading}
      </h2>
      {/* <p className="text-gray-600 mt-2">
        See how your Zakat has uplifted lives and empowered individuals to build a brighter future.
      </p> */}
      <div
        className="text-xs text-[#777777] font-inter mt-2"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(zakat_impact_heading_description),
        }}
      ></div>

      <div className="mx-4 md:mx-20 mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cards.map((item,index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="p-3 mb-4 bg-green-600 rounded-lg">
              <img
                src={`${Image_Url}/${item?.images}`}
                alt="image"
                className="w-10 h-10"
              />
            </div>
            {/* <h3 className="text-md  w-36">{item.title}</h3>
            <p className="text-gray-600 text-xs mt-1 w-52">{item.description}</p> */}
            {/* <div
          className="text-xs text-[#777777]"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.descriptions) }}
        ></div> */}
            <BlogBody body={item?.descriptions} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZakatImpact;