"use client";

import Image from "next/image";
import Link from "next/link";

const RetinaExcellence = ({slug}) => {
  return (
    <div className="flex flex-col md:flex-row min-w-full pt-12 gap-4 items-center justify-center">
      <div>
        <Image
          src="/servicelist1.jpg"
          width={450}
          height={450}
          className="md:h-[450px] md:w-[450px] h-[280px] w-[280px] rounded-full"
          alt="Diabetic Eye Care"
        />
      </div>

      <div className="md:w-5/12 w-[90%] font-inter items-center md:items-start flex flex-col gap-2">
        <p className="uppercase text-[#F39C12] font-Amaranth text-center md:text-start text-lg">
          Diabetic Eye Care
        </p>
        <h2 className="text-4xl max-w-xl font-Amaranth text-center md:text-start">
          Protecting Vision From Diabetes Damage
        </h2>
        <p className="text-[#777777] text-center md:text-start md:max-w-xl">
          Diabetes can lead to vision problems like retinopathy and macular edema. 
          At POB Eye Hospital, we specialize in the early detection and treatment 
          of diabetes-related eye conditions. Our care reduces the risk of vision 
          loss and protects long-term sight. Patients benefit from preventive care 
          and modern therapies. See how diabetic eye care helps protect long-term 
          vision. Click below to read the complete details of this service.
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

export default RetinaExcellence;
