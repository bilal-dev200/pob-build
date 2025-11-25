import DOMPurify from "isomorphic-dompurify"; 
import Image from "next/image";
import { Image_Url } from "../../Utils/const";

const Contribute = ({ section_5 }) => {
  if (!section_5) return null;

  const { vision_heading, vision_description, cards } = section_5;

  return (
    <div className="w-full">
      {/* Content */}
      <div className="px-6 md:px-12 lg:px-24 pt-12">
        <div className="text-black text-center w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl mt-2 font-Amaranth">
            {vision_heading}
          </h2>
          <div
            className="mt-2 max-w-2xl text-sm text-[#777777] font-inter"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(vision_description),
            }}
          ></div>
        </div>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center text-center rounded-xl md:w-[265px] p-6"
            >
              <div className="bg-[#28A745] p-4 rounded-lg inline-block relative w-10 h-10">
                <Image
                  src={`${Image_Url}/${card.image}`}
                  alt={card.heading || "Card image"}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <h3 className="text-md md:text-2xl mt-4 font-Amaranth h-12">
                {card.heading}
              </h3>

              <div
                className="mt-6 text-sm text-[#777777] font-inter"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(card?.description),
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contribute;
