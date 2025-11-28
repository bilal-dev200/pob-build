"use client";

import Link from "next/link";

const LaserTreatment = ({ title, subtitle, description, description2, buttonText, image ,slug}) => {
  return (
    <div className="flex flex-col md:flex-row min-w-full pt-12 gap-4 items-center justify-center">
      {/* Text Section */}
      <div className="md:w-5/12 w-[90%] font-inter flex flex-col gap-2 items-center md:items-start">
        <p className="uppercase text-[#F39C12] font-Amaranth text-center md:text-start text-lg">
          {title}
        </p>
        <h2 className="text-4xl max-w-xl font-Amaranth text-center md:text-start">
          {subtitle}
        </h2>
        <p className="text-[#777777] text-center md:text-start md:max-w-xl">
          {description}
        </p>
        {description2 && (
          <p className="text-[#777777] text-center md:text-start md:max-w-xl">
            {description2}
          </p>
        )}

       <Link href={`/services/${slug}`}>
          <button className="mt-4 px-4 py-2 w-32 rounded-full text-[12px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div>
        <img
          src={image}
          className="md:max-w-lg md:h-[450px] md:w-[450px] h-[280px] w-[280px] rounded-full"
          alt={title}
        />
      </div>
    </div>
  );
};

export default LaserTreatment;
