"use client";

import Image from "next/image";
import Link from "next/link";

const DonationSection = ({ yellowHead, head, pageName, img ,slug}) => {
  return (
    <div className="flex flex-col md:flex-row min-w-full pt-12 gap-4 items-center justify-center">
      <div className="md:w-5/12 w-[90%] font-inter items-center md:items-start flex flex-col gap-2">
        <p className="uppercase text-[#F39C12] font-Amaranth text-center md:text-start text-lg">
          Diagnostic Services
        </p>
        <h2 className="text-4xl max-w-xl font-Amaranth text-center md:text-start">
          Accurate Testing For Early Detection
        </h2>
        <p className="text-[#777777] text-center md:text-start md:max-w-xl">
          Eye care begins with precise testing and screening. At POB Eye Hospital, 
          our diagnostic services identify problems early, often before symptoms appear. 
          Accurate detection allows for tailored treatment plans that deliver better results. 
          Every test is carried out with patient safety and comfort in mind. Explore how 
          diagnostics provide the foundation for better vision. Click below to learn more about this service.
        </p>

        <Link href={`/services/${slug}`}>
          <button className="mt-4 px-4 py-2 w-32 rounded-full text-[12px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>

      <div>
        <Image
          src="/service_change3.webp"
          width={450}
          height={450}
          className="md:max-w-lg md:h-[450px] md:w-[450px] h-[280px] w-[280px] rounded-full"
          alt="Diagnostic Services"
        />
      </div>
    </div>
  );
};

export default DonationSection;
