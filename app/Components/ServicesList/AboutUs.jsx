"use client";

import Image from "next/image";
import Link from "next/link";

const AboutUs = ({ img, yellowHead, head, pageName, btnName, slug }) => {
  return (
    <div className="flex flex-col md:flex-row min-w-full pt-12 gap-4 items-center justify-center">
      {/* Image Section */}
      <div>
        <Image
          src={img || "/service3.png"}
          width={450}
          height={450}
          alt={head || "Service Image"}
          className="md:max-w-lg md:h-[450px] md:w-[450px] h-[280px] w-[280px] rounded-full"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-5/12 w-[90%] font-inter items-center md:items-start flex flex-col gap-2">
        <p className="uppercase text-[#F39C12] font-Amaranth text-center md:text-start text-lg">
          {yellowHead || "Cataract Extractions"}
        </p>
        <h2 className="text-4xl max-w-xl font-Amaranth text-center md:text-start">
          {head || "Restoring Vision With Safe Surgery"}
        </h2>
        <p className="text-[#777777] text-center md:text-start md:max-w-xl">
          {pageName === "home"
            ? "The Prevention of Blindness (POB) Trust is a non-governmental organization that has been operating since 2007 under the auspices of the Pakistan Islamic Medical Association. Began in Karachi as a small project in May 2015, it has grown into a beacon of hope, setting new standards for welfare eye care. From humble beginnings of treating cataract patients, we've expanded into a comprehensive tertiary care facility that provides cutting-edge treatments such as Vitreo Retina and Corneal Transplantation. We expand our mission beyond hospital walls and broaden our reach to communities in need by organizing free Eye Camps on a national and international scale."
            : "Cataracts cloud the natural lens of the eye, making vision blurry and dim. At POB Eye Hospital, cataract extraction replaces this lens with a clear artificial one to restore brightness. The surgery is safe, effective, and improves the quality of life for patients of all ages. Our skilled specialists ensure comfort and excellent outcomes. Learn how cataract treatment can bring clarity back to your life. Click below to read the full details of this service."}
        </p>

        <Link href={`/services/${slug}`}>
          <button className="mt-4 px-4 py-2 w-32 rounded-full text-[12px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300">
            {btnName || "View Details"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
