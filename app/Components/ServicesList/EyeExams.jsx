"use client"; // This is a client component because it has interactivity (button/link)

import Image from "next/image";
import Link from "next/link";

const EyeExams = ({slug}) => {
  return (
    <div className="flex flex-col md:flex-row min-w-full pt-12 gap-4 items-center justify-center">
      <div>
        <Image
          src="/service_change1.webp"
          width={450}
          height={450}
          className="md:h-[450px] md:w-[450px] h-[280px] w-[280px] rounded-full"
          alt="Eye Exams"
        />
      </div>
      <div className="md:w-5/12 w-[90%] font-inter items-center md:items-start flex flex-col gap-2">
        <p className="uppercase text-[#F39C12] font-Amaranth text-center md:text-start text-lg">
          General Ophthalmology
        </p>
        <h2 className="text-4xl max-w-xl font-Amaranth text-center md:text-start">
          Complete Eye Exams For All Ages
        </h2>
        <p className="text-[#777777] text-center md:text-start md:max-w-xl">
          General ophthalmology covers routine check-ups and treatment for
          common vision issues. Our screenings detect early signs of problems
          like dry eyes, cataracts, or glaucoma. With regular eye care, patients
          maintain clear and comfortable vision for daily life. We focus on
          prevention, early detection, and effective management. Learn how
          regular exams keep your eyes healthy. Click below for detailed
          information about this service.
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

export default EyeExams;
