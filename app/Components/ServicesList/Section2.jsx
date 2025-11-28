"use client";

import Image from "next/image";
import Link from "next/link";

const Section2 = ({slug}) => {
  return (
    <div className="flex flex-col md:flex-row min-w-full pt-12 gap-4 items-center justify-center mb-10">
      {/* Image Section */}
      <div>
        <Image
          src="/DiabeticService.png"
          width={450}
          height={450}
          alt="Vitreoretina Service"
          className="md:max-w-lg md:h-[450px] md:w-[450px] h-[280px] w-[280px] rounded-full"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-5/12 w-[90%] font-inter items-center md:items-start flex flex-col gap-2">
        <p className="uppercase text-[#F39C12] font-Amaranth text-center md:text-start text-lg">
          Vitroretina
        </p>
        <h2 className="text-4xl max-w-xl font-Amaranth text-center md:text-start">
          Specialized Care For Retina Health
        </h2>
        <p className="text-[#777777] text-center md:text-start md:max-w-xl">
          The vitreous body and retina work together to make vision possible. At
          POB Eye Hospital, our vitreoretinal specialists handle complex
          conditions like retinal detachment or macular holes with advanced
          techniques. Early treatment is crucial to preserving sight. Our focus
          is always on safety and restoring vision. Explore how vitreoretinal
          treatments protect your vision. Click below to read more about this
          service.
        </p>

        <Link href={`/services/${slug}`}>
          <button className="mt-4 px-4 py-2 w-32 rounded-full text-[12px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section2;
