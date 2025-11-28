"use client";

import Image from "next/image";
import Link from "next/link";

const Diagnostics = ({slug}) => {
  return (
    <div className="flex flex-col md:flex-row min-w-full pt-12 gap-4 items-center justify-center">
      {/* Text Section */}
      <div className="md:w-5/12 w-[90%] font-inter items-center md:items-start flex flex-col gap-2">
        <p className="uppercase text-[#F39C12] font-Amaranth text-center md:text-start text-lg">
          Corneal Diseases
        </p>
        <h2 className="text-4xl max-w-xl font-Amaranth text-center md:text-start">
          Advanced Care For Healthy Corneas
        </h2>
        <p className="text-[#777777] text-center md:text-start md:max-w-xl">
          The cornea is the eye’s clear front surface, vital for sharp vision.
          At POB Eye Hospital, we diagnose and treat corneal infections,
          injuries, and degenerative disorders. Our advanced therapies and
          surgical options restore both comfort and clarity. Each treatment plan
          is tailored for the best outcomes. Want to know how we treat corneal
          disorders effectively? Click below for detailed information about this
          service.
        </p>

        <Link href={`/services/${slug}`}>
          <button className="mt-4 px-4 py-2 w-32 rounded-full text-[12px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div>
        <Image
          src="/servicelist3.jpg"
          width={450}
          height={450}
          alt="Corneal Diseases"
          className="md:max-w-lg md:h-[450px] md:w-[450px] h-[280px] w-[280px] rounded-full"
        />
      </div>
    </div>
  );
};

export default Diagnostics;
