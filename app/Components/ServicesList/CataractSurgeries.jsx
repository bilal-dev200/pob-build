"use client";

import Image from "next/image";
import Link from "next/link";

const CataractSurgeries = ({slug}) => {
  const data = [
    {
      head: "Leading Expertise in Oculoplastic Surgery",
      des: "Our highly skilled oculoplastic surgeon in Karachi specializes in performing delicate orbital surgeries with precision. We aim for minimal invasiveness and faster recovery times, ensuring the best possible outcome with the least discomfort.",
      img01: "/cataractpoint1.png",
      img02: "/cataractpointwhite1.png",
    },
    {
      head: "Cutting-Edge Technology and Techniques",
      des: "We use advanced tools and imaging systems to diagnose and treat complex orbital conditions. From orbital tumor removal in Karachi to detailed surgical planning, our technology allows us to handle even the most challenging cases with confidence.",
      img01: "/cataractpoint2.png",
      img02: "/cataractpointwhite2.png",
    },
    {
      head: "Customized Treatment Plans",
      des: "Every patient is different. Whether you need eye bulging treatment in Karachi or care for another orbital issue, we create a personalized plan focused on your exact condition and goals.",
      img01: "/cataractpoint3.png",
      img02: "/cataractpointwhite3.png",
    },
    {
      head: "Comprehensive Post-Treatment Support",
      des: "Our support continues long after surgery. The best orbit specialist in Karachi will guide your recovery with regular follow-ups and expert care to ensure long-term success and peace of mind.",
      img01: "/cataractpoint4.png",
      img02: "/cataractpointwhite4.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-w-full pt-12 gap-4 items-center justify-center">
      <div className="md:w-5/12 w-[90%] font-inter items-center md:items-start flex flex-col gap-2">
        <p className="text-[#F39C12] uppercase font-Amaranth text-center md:text-start text-lg">
          Oculoplasty and Orbit
        </p>
        <h2 className="text-4xl max-w-xl font-Amaranth text-center md:text-start">
          Enhancing Function And Appearance Safely
        </h2>
        <p className="text-[#777777] text-center md:text-start md:max-w-xl">
          Oculoplasty focuses on eyelid, tear duct, and orbit disorders that affect both function and appearance. These conditions may arise from aging, trauma, or disease. Our specialists perform corrective surgeries to restore comfort, safety, and natural appearance. The goal is to improve both vision protection and cosmetic balance.

          Discover how oculoplastic and orbital care can benefit you. Click below to explore this service in detail.
        </p>

        <Link href={`/services/${slug}`}>
          <button className="mt-4 px-4 py-2 w-32 rounded-full text-[12px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>

      <div>
        <Image
          src="/CataractImg.png"
          width={450}
          height={450}
          className="md:h-[450px] md:w-[450px] h-[280px] w-[280px] rounded-full"
          alt="Cataract Surgery"
        />
      </div>
    </div>
  );
};

export default CataractSurgeries;
