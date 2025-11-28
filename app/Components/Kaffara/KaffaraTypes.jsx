import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../../Utils/const";

const KaffaraTypes = ({ section_3 }) => {
  // const kaffaraData = [
  //   {
  //     title: "Kaffara for Breaking a Fast",
  //     description: [
  //       "If a person deliberately breaks a fast during Ramadan without a valid reason, they must either:",
  //       "Free a slave (if applicable), OR",
  //       "Fast for two consecutive months, OR",
  //       "Provide financial compensation to the victim’s family (Diyya), unless they choose to forgive."
  //     ],
  //     image: "fast.png", // Replace with actual image path
  //   },
  //   {
  //     title: "Kaffara for Breaking an Oath",
  //     description: [
  //       "If a person deliberately breaks a fast during Ramadan without a valid reason, they must either:",
  //       "Offer a sacrifice (such as a sheep or goat), OR",
  //       "Feed six needy people, OR",
  //       "Fast for three days."
  //     ],
  //     image: "oath.png", // Replace with actual image path
  //   },
  //   {
  //     title: "Kaffara for Breaking a Vow",
  //     description: [
  //       "If a person makes a promise to Allah and is unable to fulfill it, they must perform Kaffara, which follows the same rules as breaking an oath.",
  //       "Immediately pay the due amount, AND",
  //       "Give additional charity as repentance, based on their capacity."
  //     ],
  //     image: "vow.png", // Replace with actual image path
  //   },
  // ];
  if (!section_3) return null;

  const { types_of_kaffarah_heading, types_of_kaffarah_description, cards } =
    section_3;
  return (
    <section className="my-16 px-6 text-center">
      <h2 className="text-3xl font-Amaranth">{types_of_kaffarah_heading}</h2>
      {/* <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </p> */}
      <div
        className="text-sm text-[#777777] mt-4 max-w-2xl mx-auto font-inter"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(types_of_kaffarah_description),
        }}
      ></div>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {cards.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg text-left">
            <div className="bg-[#28A745] p-2 w-fit h-fit rounded-lg mx-auto md:mx-0">
              <img
                src={`${Image_Url}/${item.image}`}
                alt={item.image_alt_text}
                className="w-10 h-10 object-cover"
              />
            </div>
            <h3 className="text-xl text-center md:text-start mt-4 font-Amaranth">{item.heading}</h3>
            {/* <ul className="mt-3 text-sm">
              {item.description.map((point, i) => (
                <li key={i} className="mb-2">• {point}</li>
              ))}
            </ul> */}
            <div
              className="mt-3 text-sm text-[#777777] text-center md:text-start font-inter"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item?.description),
              }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KaffaraTypes;
