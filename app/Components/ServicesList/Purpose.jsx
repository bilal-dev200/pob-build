"use client";

import Image from "next/image";
import Link from "next/link";

const Purpose = ({ yellowHead, head, pageName, btnName, img, slug }) => {
  // fallback function if handleDonateClick is not provided
  const handleDonateClick = () => {
    console.warn("⚠️ handleDonateClick is not defined");
  };

  return (
    <div className="flex flex-col md:flex-row min-w-full pt-12 gap-4 items-center justify-center">
      <div className="md:w-5/12 w-[90%] font-inter items-center md:items-start flex flex-col gap-2">
        <p className="uppercase text-[#F39C12] font-Amaranth text-center md:text-start text-lg">
          {yellowHead || "Optometry Care"}
        </p>
        <h2 className="text-4xl max-w-xl font-Amaranth text-center md:text-start">
          {head || "Expert Care For Everyday Vision"}
        </h2>
        <p className="text-[#777777] text-center md:text-start md:max-w-xl">
          Optometry ensures everyday vision remains clear and comfortable. At
          POB Eye Hospital, our optometrists provide eye exams, prescription
          lenses, and early detection of potential conditions. Patients of all
          ages benefit from customized care. This service plays a vital role in
          maintaining healthy eyesight. Want to see how optometry supports your
          daily sight? Click below to read more about this service.
        </p>

        <Link href={`/services/${slug}`}>
          <button
            onClick={handleDonateClick}
            className="mt-4 px-4 py-2 w-32 rounded-full text-[12px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300"
          >
            {btnName || "View Details"}
          </button>
        </Link>
      </div>

      <div>
        <Image
          src={img || "/service_change2.webp"}
          width={450}
          height={450}
          className="md:h-[450px] md:w-[450px] h-[280px] w-[280px] rounded-full"
          alt={yellowHead || "Optometry Care"}
        />
      </div>
    </div>
  );
};

export default Purpose;
